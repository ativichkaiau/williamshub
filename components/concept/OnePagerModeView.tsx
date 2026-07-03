import type { OnePagerSections } from '../../lib/concept/types';

// OnePager extraction format — 7 fixed sections. Each empty section shows a
// fallback template line so the structure is always visible.

const SECTIONS: { key: keyof OnePagerSections; n: number; label: string; dot: string; text: string; fallback: string }[] = [
  { key: 'coreMechanism', n: 1, label: 'Core mechanism', dot: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400', fallback: 'Mechanism chain not yet captured for this module.' },
  { key: 'mustKnowFacts', n: 2, label: 'Must-know facts', dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', fallback: 'High-yield facts not yet captured.' },
  { key: 'clinicalSigns', n: 3, label: 'Clinical signs', dot: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400', fallback: 'No clinical signs listed for this module.' },
  { key: 'diagnosisManagement', n: 4, label: 'Diagnosis / management logic', dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', fallback: 'No investigation/management logic listed.' },
  { key: 'examTraps', n: 5, label: 'Exam traps', dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400', fallback: 'No exam traps captured for this module.' },
  { key: 'blockIntegrations', n: 6, label: 'Block integrations', dot: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400', fallback: 'No cross-module integrations mapped yet.' },
  { key: 'memoryHooks', n: 7, label: 'Memory hooks', dot: 'bg-violet-500', text: 'text-violet-600 dark:text-violet-400', fallback: 'No mnemonics for this module.' },
];

export default function OnePagerModeView({ onePager }: { onePager: OnePagerSections }) {
  return (
    <section className="clay clay-surface p-5">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">OnePager</h3>
        <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
          compressed extraction
        </span>
      </div>

      <div className="space-y-4">
        {SECTIONS.map(({ key, n, label, dot, text, fallback }) => {
          const items = onePager[key];
          const empty = !items || items.length === 0;
          return (
            <div key={key}>
              <div className="mb-1.5 flex items-center gap-2">
                <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white ${dot}`}>
                  {n}
                </span>
                <h4 className={`text-xs font-bold uppercase tracking-wide ${text}`}>{label}</h4>
              </div>
              {empty ? (
                <p className="pl-7 text-sm italic text-slate-400 dark:text-slate-500">{fallback}</p>
              ) : (
                <ul className="list-disc space-y-1 pl-11 text-sm text-slate-700 dark:text-slate-200">
                  {items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
