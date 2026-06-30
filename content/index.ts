import type { Lecture } from '../lib/types';
// L1 — Cardiac Arrhythmias
import avBlock from './lectures/av-block';
import atrialFibrillation from './lectures/atrial-fibrillation';
import atrialFlutter from './lectures/atrial-flutter';
import prematureContractions from './lectures/premature-contractions';
import ventricularTachycardia from './lectures/ventricular-tachycardia';
import ventricularFibrillation from './lectures/ventricular-fibrillation';
// L2 — Abnormal ECG
import stemiLocalization from './lectures/stemi-localization';
import bundleBranchBlock from './lectures/bundle-branch-block';
import escapeRhythmsSinusDysfunction from './lectures/escape-rhythms-sinus-dysfunction';
// L3 — Congenital Heart Disease
import vsd from './lectures/vsd';
import asd from './lectures/asd';
import pda from './lectures/pda';
import tetralogyOfFallot from './lectures/tetralogy-of-fallot';
// L4 — Antiarrhythmic Drugs
import antiarrhythmicDrugs from './lectures/antiarrhythmic-drugs';

// Registry of all lecture modules, ordered chronologically by lecture (L1 → L4).
// Each module belongs to exactly ONE lecture (its `source`). Add new modules here.
export const lectures: Lecture[] = [
  // L1 — Cardiac Arrhythmias
  avBlock,
  atrialFibrillation,
  atrialFlutter,
  prematureContractions,
  ventricularTachycardia,
  ventricularFibrillation,
  // L2 — Abnormal ECG
  stemiLocalization,
  bundleBranchBlock,
  escapeRhythmsSinusDysfunction,
  // L3 — Congenital Heart Disease
  vsd,
  asd,
  pda,
  tetralogyOfFallot,
  // L4 — Antiarrhythmic Drugs
  antiarrhythmicDrugs,
];

export const lectureById: Record<string, Lecture> = Object.fromEntries(
  lectures.map((l) => [l.id, l]),
);

// Group by source lecture for the dashboard catalog (keys sort chronologically: L1 < L2 < L3 < L4).
export const lecturesBySource = lectures.reduce<Record<string, Lecture[]>>((acc, l) => {
  (acc[l.source] ??= []).push(l);
  return acc;
}, {});
