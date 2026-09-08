import Link from 'next/link';
import type { CSSProperties } from 'react';
import { lectures, lectureById, lecturesBySubject, curriculum, subjectSlug, subjectOfSource, subjectByCode } from '../content';
import { type YearData } from '../components/CurriculumBrowser';
import BlockBrowser from '../components/BlockBrowser';
import { onePagerGroups } from '../content/onepagers';
import HubIcon from '../components/HubIcon';
import LiverySlashes from '../components/LiverySlashes';

export default function Home() {
  const years: YearData[] = curriculum.map((y) => {
    const subjects = y.subjects.map((s) => {
      const mods = lecturesBySubject[s.code] ?? [];
      return {
        code: s.code,
        name: s.name,
        // distinct lectures (L1, L2, …), not module count
        count: new Set(mods.map((l) => l.source)).size,
        modules: mods.length,
        slug: subjectSlug(s.code),
      };
    });
    return {
      year: y.year,
      label: y.label,
      note: y.note,
      hasContent: subjects.some((s) => s.count > 0),
      subjects,
    };
  });
  const defaultYear = years.find((y) => y.hasContent)?.year ?? years[0].year;

  // Subject codes that actually have WilliamsHub content (for OnePager cross-links).
  const contentCodes = Object.entries(lecturesBySubject)
    .filter(([, mods]) => mods.length > 0)
    .map(([code]) => code);
  // OnePager view opens on the first year that has content, else its first year.
  const onePagerYearsWithContent = onePagerGroups
    .filter((g) => g.subjects.some((s) => contentCodes.includes(s.code)))
    .map((g) => g.year);
  const onePagerDefaultYear = onePagerYearsWithContent[0] ?? onePagerGroups[0].year;

  const first = lectures[0];
  const featured = lectureById['tetralogy-of-fallot'] ?? lectures[0];
  const trapCount = lectures.reduce((n, l) => n + l.traps.length, 0);

  const featuredCode = subjectOfSource[featured.source];
  const featuredSubject = featuredCode ? subjectByCode[featuredCode] : undefined;

  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:pt-10">
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-stripes" aria-hidden="true"><span /><span /><span /></div>
        <div className="flex items-center gap-3">
          <LiverySlashes />
          <span className="eyebrow">MedCMU / Lecture atlas</span>
        </div>

        <div className="relative grid gap-9 pb-10 pt-10 lg:grid-cols-[1.45fr_1fr] lg:gap-16 lg:pb-12 lg:pt-12">
          <div data-reveal>
            <h1 id="hero-title" className="hero-title">
              Own the lecture.
              <br />
              <span>Beat the exam trap.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)] sm:text-[15px]">
              Your MedCMU lectures, connected. Recall the essentials,
              understand the mechanism, and spot the exam trap.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#browse" className="primary-action">
                Choose a block <HubIcon name="arrow" />
              </a>
              <Link href={`/lecture/${first.id}`} className="text-action">
                Run primer <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <dl className="library-stats mt-9" aria-label="Library overview">
              {[
                { value: Object.keys(lecturesBySubject).length, label: 'Blocks' },
                { value: lectures.length, label: 'Modules' },
                { value: trapCount, label: 'Exam traps' },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="order-2">{stat.label}</dt>
                  <dd className="order-1">{stat.value.toLocaleString('en-US')}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside
            className="featured-module self-start p-5 sm:p-6"
            aria-labelledby="featured-title"
            data-reveal
            style={{ '--reveal-i': 1 } as CSSProperties}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="eyebrow">Featured module</span>
              {featuredSubject && (
                <span className="font-mono text-[10px] text-[var(--muted)]">
                  {featuredSubject.code} / Y{featuredSubject.year}
                </span>
              )}
            </div>
            <h2 id="featured-title" className="mt-4 text-xl font-semibold tracking-tight text-[var(--ink)]">
              <Link href={`/lecture/${featured.id}`} className="transition hover:text-[var(--accent)]">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{featured.mechanism.title}</p>
            <ol className="mechanism-preview my-5 space-y-3" aria-label="Mechanism preview">
              {featured.mechanism.steps.slice(0, 3).map((step, index) => (
                <li key={step.id} className="flex items-start gap-3 text-xs leading-6 text-[var(--ink)]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--line)] font-mono text-[10px] text-[var(--muted)]" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{step.label}</span>
                </li>
              ))}
            </ol>
            <div className="border-t border-[var(--line)] pt-2">
              <Link href={`/lecture/${featured.id}`} className="text-action w-full justify-between">
                Open module <HubIcon name="arrow" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section id="browse" aria-labelledby="browse-title" className="scroll-mt-36 pt-9 sm:pt-10 md:scroll-mt-24" data-reveal>
        <div className="section-rule mb-4">
          <span className="eyebrow">01 / The library</span>
          <LiverySlashes />
        </div>
        <h2 id="browse-title" className="text-2xl font-semibold tracking-tight text-[var(--ink)]">
          Choose your block
        </h2>
        <p className="mb-6 mt-2 text-sm leading-6 text-[var(--muted)]">
          Pick a year. Find your block. Study with interactive lectures or your OnePagers.
        </p>
        <BlockBrowser
          years={years}
          defaultYear={defaultYear}
          onePagerDefaultYear={onePagerDefaultYear}
          contentCodes={contentCodes}
        />
      </section>

      <footer
        className="site-footer mt-12 flex flex-wrap items-center justify-between gap-4 pt-5 text-[11px] leading-5 text-[var(--muted)]"
        data-reveal
      >
        <span className="flex items-center gap-3"><LiverySlashes /> WilliamsHub · A VESTRIPPN3.0 satellite</span>
        <span>Built from MedCMU lectures · Alongside your OnePagers</span>
      </footer>
    </main>
  );
}
