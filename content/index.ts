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
// L14 — Pathology of Heart Failure
import hfPathologyOverview from './lectures/hf-pathology-overview';
import cardiacHypertrophyRemodeling from './lectures/cardiac-hypertrophy-remodeling';
import hfOrganPathology from './lectures/hf-organ-pathology';
// L15 — Drugs Used in Heart Failure
import hfPharmacologyPillars from './lectures/hf-pharmacology-pillars';
import digoxinInotropes from './lectures/digoxin-inotropes';
import hfOtherDrugs from './lectures/hf-other-drugs';
// L16 — Hypertension
import htnClassification from './lectures/htn-classification';
import htnPathophysiology from './lectures/htn-pathophysiology';
import hypertensiveTargetOrganDamage from './lectures/hypertensive-target-organ-damage';
// L17 — Shock
import shockMechanismsTypes from './lectures/shock-mechanisms-types';
import vasopressorsInotropes from './lectures/vasopressors-inotropes';
// L18 — Antihypertensive Drugs
import antihypertensiveOverview from './lectures/antihypertensive-overview';
import htnDiureticsRaas from './lectures/htn-diuretics-raas';
import htnCcbSympatholytics from './lectures/htn-ccb-sympatholytics';
// L19 — Vascular Diseases II
import vasculitisOverview from './lectures/vasculitis-overview';
import largeMediumVasculitis from './lectures/large-medium-vasculitis';
import smallVesselAndVenous from './lectures/small-vessel-and-venous';
// L20 — Cardiac Tumors
import cardiacTumorsOverview from './lectures/cardiac-tumors-overview';
import cardiacMyxoma from './lectures/cardiac-myxoma';
import rhabdomyomaAndTumors from './lectures/rhabdomyoma-and-tumors';
// L21 — Pericardial Disease
import pericardialEffusion from './lectures/pericardial-effusion';
import cardiacTamponade from './lectures/cardiac-tamponade';
import pericarditis from './lectures/pericarditis';
import constrictiveTuberculousPericarditis from './lectures/constrictive-tuberculous-pericarditis';

export * from './curriculum';

// Registry of all lecture modules, ordered chronologically by lecture (L1 → L21).
// Each module belongs to exactly ONE lecture (its `source`). Add new modules here.
export const lectures: Lecture[] = [
  // L1
  avBlock, atrialFibrillation, atrialFlutter, prematureContractions, ventricularTachycardia, ventricularFibrillation,
  // L2
  stemiLocalization, bundleBranchBlock, escapeRhythmsSinusDysfunction,
  // L3
  vsd, asd, pda, tetralogyOfFallot,
  // L4
  antiarrhythmicDrugs,
  // L5
  atherosclerosis, arteriosclerosisPatterns, aorticAneurysm, aorticDissection,
  // L6
  ihdOverview, myocardialInfarctionPathology, miComplications,
  // L7
  antiplatelets, anticoagulants, fibrinolytics,
  // L8
  aorticStenosis, mitralStenosis, mitralValveProlapse, rheumaticHeartDisease, infectiveEndocarditis, nonbacterialEndocarditis,
  // L9
  acsSpectrum, acsManagement,
  // L10
  cardiomyopathyOverview, dilatedCardiomyopathy, hypertrophicCardiomyopathy, restrictiveCardiomyopathy, arvc, myocarditis,
  // L11
  cardiogenicShock, scaiShockClassification, cardiacArrest,
  // L12
  heartFailureOverview, hfrefSystolic, hfpefDiastolic, rightSidedHf,
  // L13
  antianginalPrinciples, organicNitrates, betaBlockersCcbAngina,
  // L14
  hfPathologyOverview, cardiacHypertrophyRemodeling, hfOrganPathology,
  // L15
  hfPharmacologyPillars, digoxinInotropes, hfOtherDrugs,
  // L16
  htnClassification, htnPathophysiology, hypertensiveTargetOrganDamage,
  // L17
  shockMechanismsTypes, vasopressorsInotropes,
  // L18
  antihypertensiveOverview, htnDiureticsRaas, htnCcbSympatholytics,
  // L19
  vasculitisOverview, largeMediumVasculitis, smallVesselAndVenous,
  // L20
  cardiacTumorsOverview, cardiacMyxoma, rhabdomyomaAndTumors,
  // L21
  pericardialEffusion, cardiacTamponade, pericarditis, constrictiveTuberculousPericarditis,
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

// Numeric sort so L10–L19 follow L9 (not L1).
export const lectureSets: LectureSet[] = Object.entries(lecturesBySource)
  .map(([source, items]) => ({ slug: lectureSetSlug(source), source, items }))
  .sort((a, b) => a.source.localeCompare(b.source, undefined, { numeric: true }));

export const lectureSetBySlug: Record<string, LectureSet> = Object.fromEntries(
  lectureSets.map((s) => [s.slug, s]),
);
