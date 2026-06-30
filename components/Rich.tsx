// Inline renderer for the **bold** key terms in content bullets. Renders them as
// amber "highlighter" marks (works in light + dark). Server-safe (no client JS).
// box-decoration-clone keeps the marker tidy when a term wraps across lines.
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <mark
            key={i}
            className="box-decoration-clone rounded bg-amber-200/70 px-1 font-semibold text-slate-900 dark:bg-amber-400/25 dark:text-amber-50"
          >
            {p.slice(2, -2)}
          </mark>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}
