import Link from 'next/link';

// Inline renderer for content bullets. Handles two inline syntaxes:
//   **bold**        → amber "highlighter" mark (works in light + dark)
//   [[module-id]]   → internal cross-link to /lecture/module-id (shown de-kebabed)
// Server-safe (no client JS). box-decoration-clone keeps the marker tidy when a
// term wraps across lines.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[\[[a-z0-9-]+\]\])/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith('**') && p.endsWith('**')) {
          return (
            <mark
              key={i}
              className="box-decoration-clone rounded bg-amber-200/70 px-1 font-semibold text-slate-900 dark:bg-amber-400/25 dark:text-amber-50"
            >
              {p.slice(2, -2)}
            </mark>
          );
        }
        if (p.startsWith('[[') && p.endsWith(']]')) {
          const id = p.slice(2, -2);
          return (
            <Link
              key={i}
              href={`/lecture/${id}`}
              className="underline decoration-dotted underline-offset-2 text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-100"
            >
              {id.replace(/-/g, ' ')}
            </Link>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}
