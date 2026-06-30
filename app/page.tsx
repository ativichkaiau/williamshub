import Link from 'next/link';
import { lectures, lecturesBySource } from '../content';
import type { Lecture } from '../lib/types';

const systemDot: Record<string, string> = {
  cardiovascular: 'bg-rose-500',
  respiratory: 'bg-sky-500',
  renal: 'bg-blue-500',
  endocrine: 'bg-violet-500',
  neuro: 'bg-amber-500',
  gi: 'bg-emerald-500',
  heme: 'bg-red-500',
  msk: 'bg-orange-500',
  repro: 'bg-pink-500',
  immune: 'bg-teal-500',
};

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center">
      <div className="text-2xl font-semibold text-slate-900">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}

function LectureCard({ l }: { l: Lecture }) {
  return (
    <Link
      href={`/lecture/${l.id}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${systemDot[l.system] ?? 'bg-slate-400'}`} />
        <span className="text-base font-semibold text-slate-900 group-hover:text-rose-700">
          {l.title}
        </span>
      </div>
      <p className="mt-1.5 line-clamp-2 text-sm text-slate-500">
        {l.highYield[0]?.replace(/\*\*/g, '')}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {l.tags
          .filter((t) => t.kind === 'mechanism' || t.kind === 'exam')
          .slice(0, 2)
          .map((t) => (
            <span
              key={t.label}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
            >
              {t.label}
            </span>
          ))}
      </div>
    </Link>
  );
}

export default function Home() {
  const sources = Object.entries(lecturesBySource).sort(([a], [b]) =>
    a.localeCompare(b),
  );
  const systems = new Set(lectures.map((l) => l.system));

  return (
    <main className="mx-auto max-w-5xl px-5 py-10">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-600 font-semibold text-white">
            W
          </div>
          <div>
            <div className="text-lg font-semibold leading-tight">WilliamsHub</div>
            <div className="text-xs text-slate-500">M-8 · VEStriPPN satellite</div>
          </div>
        </div>
        <a
          href="https://github.com/ativichkaiau/williamshub"
          className="text-sm text-slate-500 hover:text-slate-800"
        >
          GitHub ↗
        </a>
      </header>

      <section className="mb-8">
        <p className="text-sm font-medium uppercase tracking-wide text-rose-600">
          Interactive lecture atlas
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Turn the lecture into marks.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          High-yield, mechanism-driven, exam-focused pages built from your MedCMU lectures.
          Each page makes you recall first, then shows the mechanism, the exam findings, and the
          trap that loses marks. Supplements your OnePagers — it doesn&apos;t replace them.
        </p>
        <div className="mt-5 grid max-w-md grid-cols-3 gap-3">
          <Stat value={lectures.length} label="Modules" />
          <Stat value={sources.length} label="Lectures" />
          <Stat value={systems.size} label="Systems" />
        </div>
      </section>

      {sources.map(([source, items]) => (
        <section key={source} className="mb-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
            {source}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((l) => (
              <LectureCard key={l.id} l={l} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
