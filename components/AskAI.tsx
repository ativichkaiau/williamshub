'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';

// Global "Ask AI" study tutor (⌘J). Streams from /api/ask, where the OpenAI key
// lives server-side. On a /lecture/<id> page it passes moduleId so answers are
// grounded in the module the student is reading.

type Msg = { role: 'user' | 'assistant'; content: string };

const SUGGESTIONS_MODULE = [
  'Explain this module simply',
  'Give me 3 exam pearls',
  'What are the classic traps here?',
];
const SUGGESTIONS_GENERAL = [
  'Compare UMN vs LMN signs',
  'Approach to microcytic anaemia',
  'Mechanism of β-lactam resistance',
];

/** Minimal inline renderer: **bold** only, newlines preserved. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-semibold text-slate-900 dark:text-white">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export default function AskAI() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => setMounted(true), []);

  const moduleId = pathname?.startsWith('/lecture/') ? decodeURIComponent(pathname.slice('/lecture/'.length)) : undefined;
  const moduleLabel = moduleId?.replace(/-/g, ' ');

  // ⌘J / Ctrl-J toggles; Esc closes.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Opened from a lecture page's "Ask" button (components/AskAboutButton.tsx).
  useEffect(() => {
    const openEvt = () => setOpen(true);
    window.addEventListener('williamshub:ask-ai', openEvt);
    return () => window.removeEventListener('williamshub:ask-ai', openEvt);
  }, []);

  // Restore the conversation on load, then keep it in sync (survives navigation).
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wh-ask-ai');
      if (saved) setMessages(JSON.parse(saved) as Msg[]);
    } catch {
      /* ignore corrupt/absent state */
    }
  }, []);
  useEffect(() => {
    if (streaming) return; // don't thrash storage on every token
    try {
      if (messages.length) localStorage.setItem('wh-ask-ai', JSON.stringify(messages.slice(-40)));
      else localStorage.removeItem('wh-ask-ai');
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [messages, streaming]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, streaming]);

  const send = useCallback(
    async (text: string) => {
      const q = text.trim();
      if (!q || streaming) return;
      setError(null);
      setInput('');
      const next: Msg[] = [...messages, { role: 'user', content: q }, { role: 'assistant', content: '' }];
      setMessages(next);
      setStreaming(true);
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        const res = await fetch('/api/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: next.filter((m) => m.content || m.role === 'user'), moduleId }),
          signal: controller.signal,
        });
        if (!res.ok || !res.body) {
          const j = await res.json().catch(() => ({}));
          throw new Error(j.error || `Request failed (${res.status}).`);
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const copy = prev.slice();
            copy[copy.length - 1] = { role: 'assistant', content: copy[copy.length - 1].content + chunk };
            return copy;
          });
        }
      } catch (e) {
        if ((e as Error).name !== 'AbortError') {
          setError((e as Error).message);
          setMessages((prev) => prev.slice(0, -1)); // drop the empty assistant bubble
        }
      } finally {
        setStreaming(false);
        abortRef.current = null;
      }
    },
    [messages, moduleId, streaming],
  );

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    setInput('');
  };

  const suggestions = moduleId ? SUGGESTIONS_MODULE : SUGGESTIONS_GENERAL;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ask AI (Command J)"
        className="clay-pill fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#1e5bd6] transition hover:-translate-y-0.5 active:translate-y-0 dark:text-[#7AA0FF]"
      >
        <span aria-hidden className="text-[15px] leading-none">✨</span>
        <span className="hidden sm:inline">Ask AI</span>
        <kbd className="hidden rounded bg-black/5 px-1.5 py-0.5 text-[10px] font-bold text-slate-400 dark:bg-white/10 dark:text-slate-400 sm:inline">
          ⌘J
        </kbd>
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-900/40 px-4 pt-[10vh] backdrop-blur-sm"
              onClick={() => setOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Ask AI"
            >
              <div
                className="clay clay-surface flex w-full max-w-2xl flex-col overflow-hidden p-0"
                style={{ maxHeight: '78vh' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="livery-stripe h-1 w-full" />

                {/* header */}
                <div className="flex items-center gap-2 border-b border-black/5 px-4 py-3 dark:border-white/10">
                  <span aria-hidden className="text-[15px]">✨</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">Ask AI</span>
                  {moduleLabel ? (
                    <span className="ml-1 truncate rounded bg-[#2e5bff]/12 px-2 py-0.5 text-[11px] font-medium text-[#1e5bd6] dark:text-[#7AA0FF]">
                      grounded in: {moduleLabel}
                    </span>
                  ) : null}
                  <span className="flex-1" />
                  {messages.length > 0 ? (
                    <button
                      type="button"
                      onClick={reset}
                      className="rounded px-2 py-0.5 text-[11px] font-semibold text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      Clear
                    </button>
                  ) : null}
                  <kbd className="rounded bg-black/5 px-1.5 py-0.5 text-[10px] font-bold text-slate-400 dark:bg-white/10">esc</kbd>
                </div>

                {/* messages */}
                <div ref={scrollRef} className="min-h-[220px] flex-1 space-y-3 overflow-y-auto px-4 py-4">
                  {messages.length === 0 ? (
                    <div className="pt-4 text-center">
                      <p className="text-sm text-slate-400">
                        Ask anything — {moduleId ? 'grounded in this module' : 'about any topic in your curriculum'}.
                      </p>
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {suggestions.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => send(s)}
                            className="clay-pill px-3 py-1.5 text-[12px] font-medium text-slate-600 transition active:translate-y-px dark:text-slate-300"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    messages.map((m, i) => (
                      <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                        <div
                          className={
                            m.role === 'user'
                              ? 'max-w-[85%] rounded-2xl rounded-br-sm bg-[#2e5bff] px-3.5 py-2 text-sm text-white'
                              : 'max-w-[90%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-black/[0.04] px-3.5 py-2 text-sm leading-relaxed text-slate-700 dark:bg-white/[0.06] dark:text-slate-200'
                          }
                        >
                          {m.role === 'assistant' ? (
                            m.content ? (
                              <RichText text={m.content} />
                            ) : (
                              <span className="inline-flex gap-1 py-1 align-middle">
                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]" />
                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
                              </span>
                            )
                          ) : (
                            m.content
                          )}
                        </div>
                      </div>
                    ))
                  )}
                  {error ? (
                    <p className="rounded-lg bg-[#e4002b]/10 px-3 py-2 text-[12px] text-[#e4002b] dark:text-[#ff5a72]">{error}</p>
                  ) : null}
                </div>

                {/* input */}
                <div className="border-t border-black/5 px-3 py-3 dark:border-white/10">
                  <div className="clay-inset flex items-end gap-2 p-2">
                    <textarea
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          send(input);
                        }
                      }}
                      rows={1}
                      placeholder={moduleId ? 'Ask about this module…' : 'Ask a study question…'}
                      className="max-h-32 min-h-[24px] flex-1 resize-none bg-transparent px-1 text-[14px] text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                    />
                    <button
                      type="button"
                      onClick={() => send(input)}
                      disabled={!input.trim() || streaming}
                      aria-label="Send"
                      className="clay-pill shrink-0 rounded-lg px-3 py-1.5 text-[13px] font-semibold text-[#1e5bd6] transition active:translate-y-px disabled:opacity-40 dark:text-[#7AA0FF]"
                    >
                      {streaming ? '…' : 'Send'}
                    </button>
                  </div>
                  <p className="px-1 pt-1.5 text-[10px] text-slate-400">
                    Educational revision support — verify against primary sources. Enter to send, Shift+Enter for a new line.
                  </p>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
