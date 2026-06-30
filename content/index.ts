import type { Lecture } from '../lib/types';
import { subjectOfSource } from './curriculum';
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
// L5 — Vascular Disorders
import atherosclerosis from './lectures/atherosclerosis';
import arteriosclerosisPatterns from './lectures/arteriosclerosis-patterns';
import aorticAneurysm from './lectures/aortic-aneurysm';
import aorticDissection from './lectures/aortic-dissection';
// L6 — Ischemic Heart Disease
import ihdOverview from './lectures/ihd-overview';
import myocardialInfarctionPathology from './lectures/myocardial-infarction-pathology';
import miComplications from './lectures/mi-complications';
// L7 — Coagulation & Hemostasis
import antiplatelets from './lectures/antiplatelets';
import anticoagulants from './lectures/anticoagulants';
import fibrinolytics from './lectures/fibrinolytics';
// L8 — Valvular Heart Disease
import aorticStenosis from './lectures/aortic-stenosis';
import mitralStenosis from './lectures/mitral-stenosis';
import mitralValveProlapse from './lectures/mitral-valve-prolapse';
import rheumaticHeartDisease from './lectures/rheumatic-heart-disease';
import infectiveEndocarditis from './lectures/infective-endocarditis';
import nonbacterialEndocarditis from './lectures/nonbacterial-endocarditis';
// L9 — Acute Coronary Syndrome
import acsSpectrum from './lectures/acs-spectrum';
import acsManagement from './lectures/acs-management';
// L10 — Cardiomyopathy & Myocarditis
import cardiomyopathyOverview from './lectures/cardiomyopathy-overview';
import dilatedCardiomyopathy from './lectures/dilated-cardiomyopathy';
import hypertrophicCardiomyopathy from './lectures/hypertrophic-cardiomyopathy';
import restrictiveCardiomyopathy from './lectures/restrictive-cardiomyopathy';
import arvc from './lectures/arvc';
import myocarditis from './lectures/myocarditis';
// L11 — Cardiogenic Shock
import cardiogenicShock from './lectures/cardiogenic-shock';
import scaiShockClassification from './lectures/scai-shock-classification';
import cardiacArrest from './lectures/cardiac-arrest';
// L12 — Heart Failure
import heartFailureOverview from './lectures/heart-failure-overview';
import hfrefSystolic from './lectures/hfref-systolic';
import hfpefDiastolic from './lectures/hfpef-diastolic';
import rightSidedHf from './lectures/right-sided-hf';
// L13 — Antianginal Drugs
import antianginalPrinciples from './lectures/antianginal-principles';
import organicNitrates from './lectures/organic-nitrates';
import betaBlockersCcbAngina from './lectures/beta-blockers-ccb-angina';

export * from './curriculum';

// Registry of all lecture modules, ordered chronologically by lecture (L1 → L13).
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
  // L5 — Vascular Disorders
  atherosclerosis,
  arteriosclerosisPatterns,
  aorticAneurysm,
  aorticDissection,
  // L6 — Ischemic Heart Disease
  ihdOverview,
  myocardialInfarctionPathology,
  miComplications,
  // L7 — Coagulation & Hemostasis
  antiplatelets,
  anticoagulants,
  fibrinolytics,
  // L8 — Valvular Heart Disease
  aorticStenosis,
  mitralStenosis,
  mitralValveProlapse,
  rheumaticHeartDisease,
  infectiveEndocarditis,
  nonbacterialEndocarditis,
  // L9 — Acute Coronary Syndrome
  acsSpectrum,
  acsManagement,
  // L10 — Cardiomyopathy & Myocarditis
  cardiomyopathyOverview,
  dilatedCardiomyopathy,
  hypertrophicCardiomyopathy,
  restrictiveCardiomyopathy,
  arvc,
  myocarditis,
  // L11 — Cardiogenic Shock
  cardiogenicShock,
  scaiShockClassification,
  cardiacArrest,
  // L12 — Heart Failure
  heartFailureOverview,
  hfrefSystolic,
  hfpefDiastolic,
  rightSidedHf,
  // L13 — Antianginal Drugs
  antianginalPrinciples,
  organicNitrates,
  betaBlockersCcbAngina,
];

export const lectureById: Record<string, Lecture> = Object.fromEntries(
  lectures.map((l) => [l.id, l]),
);

// Group by source lecture for the catalog.
export const lecturesBySource = lectures.reduce<Record<string, Lecture[]>>((acc, l) => {
  (acc[l.source] ??= []).push(l);
  return acc;
}, {});

// Group by subject (block) for the curriculum browser.
export const lecturesBySubject = lectures.reduce<Record<string, Lecture[]>>((acc, l) => {
  const code = subjectOfSource[l.source];
  if (code) (acc[code] ??= []).push(l);
  return acc;
}, {});

// Consolidated "whole lecture" sets — every module of one lecture on a single page.
export function lectureSetSlug(source: string): string {
  const m = source.match(/^L(\d+)/i);
  return m ? `l${m[1]}` : source.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export interface LectureSet {
  slug: string;
  source: string;
  items: Lecture[];
}

// Numeric sort so L10–L13 follow L9 (not L1).
export const lectureSets: LectureSet[] = Object.entries(lecturesBySource)
  .map(([source, items]) => ({ slug: lectureSetSlug(source), source, items }))
  .sort((a, b) => a.source.localeCompare(b.source, undefined, { numeric: true }));

export const lectureSetBySlug: Record<string, LectureSet> = Object.fromEntries(
  lectureSets.map((s) => [s.slug, s]),
);
