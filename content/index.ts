import type { Lecture } from '../lib/types';
import vsd from './lectures/vsd';
import asd from './lectures/asd';
import pda from './lectures/pda';
import tetralogyOfFallot from './lectures/tetralogy-of-fallot';
import avBlock from './lectures/av-block';
import atrialFibrillation from './lectures/atrial-fibrillation';
import atrialFlutter from './lectures/atrial-flutter';
import prematureContractions from './lectures/premature-contractions';
import ventricularTachycardia from './lectures/ventricular-tachycardia';
import ventricularFibrillation from './lectures/ventricular-fibrillation';
import stemiLocalization from './lectures/stemi-localization';
import bundleBranchBlock from './lectures/bundle-branch-block';
import escapeRhythmsSinusDysfunction from './lectures/escape-rhythms-sinus-dysfunction';
import antiarrhythmicDrugs from './lectures/antiarrhythmic-drugs';

// Registry of all lecture modules (sourced from MedCMU lectures L1–L4).
// Add a new module here once authored.
export const lectures: Lecture[] = [
  // L3 — Congenital Heart Disease
  vsd,
  asd,
  pda,
  tetralogyOfFallot,
  // L1/L2 — Arrhythmias & ECG
  avBlock,
  atrialFibrillation,
  atrialFlutter,
  prematureContractions,
  ventricularTachycardia,
  ventricularFibrillation,
  // L2 — ECG skills
  stemiLocalization,
  bundleBranchBlock,
  escapeRhythmsSinusDysfunction,
  // L4 — Pharmacology
  antiarrhythmicDrugs,
];

export const lectureById: Record<string, Lecture> = Object.fromEntries(
  lectures.map((l) => [l.id, l]),
);

// Group by source lecture for the dashboard catalog.
export const lecturesBySource = lectures.reduce<Record<string, Lecture[]>>((acc, l) => {
  (acc[l.source] ??= []).push(l);
  return acc;
}, {});
