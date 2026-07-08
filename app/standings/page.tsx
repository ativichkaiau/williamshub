import { lecturesBySubject, subjectByCode, subjectSlug } from '../../content';
import StandingsDashboard, { type SubjectMeta } from '../../components/StandingsDashboard';

export const metadata = { title: 'Standings — WilliamsHub' };

export default function StandingsPage() {
  const subjects: SubjectMeta[] = Object.entries(lecturesBySubject)
    .map(([code, mods]) => {
      const s = subjectByCode[code];
      return { code, name: s?.name ?? code, slug: subjectSlug(code), year: s?.year ?? 0, total: mods.length };
    })
    .sort((a, b) => a.year - b.year || a.code.localeCompare(b.code));

  return (
    <main className="mx-auto max-w-4xl px-5 py-8">
      <header className="mb-6">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Championship Standings</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Your season so far — coverage, quiz accuracy, open repairs and your study streak. All from this device.
        </p>
      </header>

      <StandingsDashboard subjects={subjects} />

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · Round M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
