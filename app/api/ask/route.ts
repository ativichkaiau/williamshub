import { lectureById } from '../../../content';
import { stripMarkup } from '../../../lib/concept/modes';
import type { Lecture } from '../../../lib/types';

// Server-side "Ask AI" study tutor. The OpenAI key stays on the server
// (process.env.OPENAI_API_KEY — the same key the content generators use); the
// browser only talks to /api/ask. When the user is on a lecture page the client
// passes moduleId, and we ground the answer in that module's content.

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

/** Compact, plain-text context from a module (bounded so prompts stay small). */
function moduleContext(l: Lecture): string {
  const parts: string[] = [`MODULE: ${l.title} (${l.source})`];
  if (l.highYield?.length) parts.push('High-yield:\n' + l.highYield.map((h) => `- ${stripMarkup(h)}`).join('\n'));
  if (l.examFindings?.length)
    parts.push('Key findings:\n' + l.examFindings.map((f) => `- ${f.sign} — ${f.mechanism}`).join('\n'));
  if (l.investigations?.length)
    parts.push('Investigations:\n' + l.investigations.map((iv) => `- ${iv.clue} → ${iv.meaning}`).join('\n'));
  if (l.treatment?.length)
    parts.push('Management:\n' + l.treatment.map((t) => `- ${t.logic}${t.detail ? `: ${stripMarkup(t.detail)}` : ''}`).join('\n'));
  return parts.join('\n\n').slice(0, 4000);
}

const BASE_SYSTEM =
  'You are the study tutor inside WilliamsHub, a revision app for a Thai (CMU) medical student. ' +
  'Answer clearly and concisely at the level of a strong Year-3 student preparing for exams. ' +
  'Lead with the key point, use short paragraphs and **bold** for the terms that matter, and prefer ' +
  'exam-relevant discriminators, red flags, and mechanisms over exhaustive detail. Use plain ASCII and ' +
  '**bold** only (no headers, tables, or other markdown). If you are unsure or a question is outside ' +
  'medicine, say so briefly. This is educational revision support, not individual patient advice.';

export async function POST(req: Request) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return Response.json(
      { error: 'The AI tutor is not configured — set OPENAI_API_KEY in the server environment (.env.local for local dev).' },
      { status: 503 },
    );
  }

  let body: { messages?: ChatMessage[]; moduleId?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const history = (body.messages ?? [])
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .slice(-12); // keep the last few turns
  if (history.length === 0) return Response.json({ error: 'No message provided.' }, { status: 400 });

  const module = body.moduleId ? lectureById[body.moduleId] : undefined;
  const system = module
    ? `${BASE_SYSTEM}\n\nThe student is currently studying this module — ground your answer in it and reference its content when relevant:\n\n${moduleContext(module)}`
    : BASE_SYSTEM;

  const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: process.env.ASK_AI_MODEL ?? process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
      stream: true,
      temperature: 0.3,
      max_tokens: 900,
      messages: [{ role: 'system', content: system }, ...history],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => '');
    return Response.json({ error: `AI service error (${upstream.status}). ${detail.slice(0, 200)}` }, { status: 502 });
  }

  // Transform OpenAI's SSE into a plain-text token stream for the client.
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reader = upstream.body!.getReader();
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      let buffer = '';
      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const data = trimmed.slice(5).trim();
            if (data === '[DONE]') {
              controller.close();
              return;
            }
            try {
              const delta = JSON.parse(data).choices?.[0]?.delta?.content;
              if (delta) controller.enqueue(encoder.encode(delta));
            } catch {
              /* ignore keep-alives / partial frames */
            }
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
