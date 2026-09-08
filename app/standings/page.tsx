import { lecturesBySubject, subjectByCode, subjectSlug } from '../../content';
import { keystonesForSubject } from '../../lib/integrations/centrality';
import StandingsDashboard, { type SubjectMeta } from '../../components/StandingsDashboard';
import LiverySlashes from '../../components/LiverySlashes';

export const metadata = { title: 'Progress — WilliamsHub' };

export default function StandingsPage() {
  const subjects: SubjectMeta[] = Object.entries(lecturesBySubject)
    .map(([code, mods]) => {
      const s = subjectByCode[code];
      return {
        code,
        name: s?.name ?? code,
        slug: subjectSlug(code),
        year: s?.year ?? 0,
        total: mods.length,
        keystones: keystonesForSubject(code, 3).map((k) => ({ id: k.id, title: k.title })),
      };
    })
    .sort((a, b) => a.year - b.year || a.code.localeCompare(b.code));

  return (
    <main className="mx-auto max-w-4xl px-5 py-8">
      <header className="mb-6">
        <div className="flex items-center gap-3">
          <LiverySlashes />
          <span className="eyebrow">On this device</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">Your progress</h1>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Your progress so far — coverage, quiz accuracy, open repairs and your study streak. All from this device.
        </p>
      </header>

      <StandingsDashboard subjects={subjects} />

      <footer className="mt-10 text-center text-xs text-[var(--muted)]">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
