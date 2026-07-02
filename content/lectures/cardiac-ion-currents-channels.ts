import type { Lecture } from '../../lib/types';
import { CARDIAC_ACTION_POTENTIAL } from '../../lib/figures';

export const cardiacIonCurrentsChannels: Lecture = {
  id: 'cardiac-ion-currents-channels',
  title: 'Cardiac Ion Currents & Channels',
  system: 'cardiovascular',
  source: 'L4 — Cardiac Electrophysiology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L4 Electrophysiology' },
    { kind: 'mechanism', label: 'Ionic currents' },
    { kind: 'exam', label: 'If & Ca currents' },
  ],

  highYield: [
    '**The shape of each cardiac action potential is built from specific ionic CURRENTS, and knowing them explains both normal rhythm and drug/disease effects.** The fast ventricular/atrial action potential has five phases; the pacemaker (SA/AV nodal) action potential is different because it lacks a stable resting potential.',
    '**Ventricular action potential currents: phase 0 = rapid depolarisation by voltage-gated Na⁺ INFLUX (fast, then inactivates); phase 1 = brief K⁺ efflux; phase 2 = the PLATEAU, a balance of Ca²⁺ INFLUX (L-type channels) against K⁺ efflux; phase 3 = repolarisation by K⁺ efflux; phase 4 = the stable resting potential set by K⁺.** The long plateau (Ca²⁺) gives the heart its long refractory period, preventing tetany.',
    '**The Ca²⁺ that enters during the plateau triggers CALCIUM-INDUCED CALCIUM RELEASE from the sarcoplasmic reticulum → excitation–contraction coupling** (linking the electrical signal to contraction). L-type Ca²⁺ channel blockers therefore reduce contractility and slow nodal conduction.',
    '**Pacemaker (nodal) cells have NO fast Na⁺ current; instead phase 4 slowly depolarises via the "FUNNY" current (I_f, an inward Na⁺ current through HCN channels), and the upstroke (phase 0) is carried by CALCIUM (L-type) — making it slower.** The slope of phase-4 depolarisation sets heart rate; the autonomic nervous system tunes it ([[pacemaker-conduction-system]]).',
    '**These currents are drug and disease targets: class I antiarrhythmics block Na⁺ channels (phase 0), class III block K⁺ channels (prolong repolarisation/QT), class IV (and nodal disease) block Ca²⁺ channels; the funny current is blocked by ivabradine to slow the heart.** The ionic basis directly explains the action-potential shapes in [[cardiac-action-potential]].',
  ],

  mechanism: {
    title: 'Currents shape the AP: Na⁺(0), K⁺(1), Ca²⁺ plateau(2), K⁺(3); pacemaker = I_f + Ca²⁺',
    steps: [
      { id: 's1', label: 'Phase 0: fast Na⁺ influx (ventricle/atrium); phase 1: brief K⁺ efflux', emphasis: 'key' },
      { id: 's2', label: 'Phase 2 plateau: Ca²⁺ influx (L-type) vs K⁺ efflux → long refractory', emphasis: 'key' },
      { id: 's3', label: 'Phase 2 Ca²⁺ → calcium-induced calcium release (EC coupling)', emphasis: 'key' },
      { id: 's4', label: 'Pacemaker: no fast Na⁺; phase-4 funny current (I_f), upstroke = Ca²⁺', emphasis: 'key' },
      { id: 's5', label: 'Drug targets: class I (Na⁺), III (K⁺/QT), IV (Ca²⁺); ivabradine (I_f)' },
    ],
  },

  examFindings: [
    { sign: 'Long plateau giving a long refractory period', mechanism: 'L-type Ca²⁺ influx balanced by K⁺ efflux (phase 2)', significance: 'key' },
    { sign: 'Contraction triggered by the action potential', mechanism: 'Ca²⁺-induced Ca²⁺ release (excitation–contraction coupling)', significance: 'key' },
    { sign: 'Spontaneous phase-4 depolarisation in nodal cells', mechanism: 'Funny current (I_f) through HCN channels', significance: 'key' },
    { sign: 'Heart-rate slowing with ivabradine', mechanism: 'Funny-current (I_f) blockade', significance: 'supportive' },
    { sign: 'QT prolongation with a class III antiarrhythmic', mechanism: 'K⁺ channel block (slowed repolarisation)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The current responsible for the ventricular upstroke (phase 0)', meaning: 'Fast voltage-gated sodium influx' },
    { clue: 'The current maintaining the plateau (phase 2)', meaning: 'L-type calcium influx (balanced by K⁺ efflux)' },
    { clue: 'The pacemaker current driving phase-4 depolarisation', meaning: 'The funny current (I_f, HCN channels)' },
    { clue: 'The process linking the plateau calcium to contraction', meaning: 'Calcium-induced calcium release (EC coupling)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These currents are the mechanistic basis of the action-potential shapes in [[cardiac-action-potential]] and of pacemaker automaticity ([[pacemaker-conduction-system]]); the plateau calcium drives contraction (hemodynamics — [[hemodynamics-preload-afterload-cardiac-output]]). Antiarrhythmic drug classes and channelopathies (long-QT) act on these specific currents — a foundation for HCVS-2 pharmacology.' },
  ],

  mnemonics: [
    { hook: 'Ventricular phases: "0 Na⁺ up, 1 K⁺ notch, 2 Ca²⁺ plateau, 3 K⁺ down, 4 K⁺ rest"', expansion: ['Plateau Ca²⁺ = long refractory (no tetany)', 'Ca²⁺ → CICR → contraction'] },
    { hook: 'Pacemaker = "Funny current up (I_f), Calcium upstroke" (no fast Na⁺)', expansion: ['Phase-4 slope sets rate', 'Ivabradine blocks I_f'] },
  ],

  traps: [
    {
      questionCategory: 'Upstroke of the pacemaker action potential',
      wrongInstinct: 'The SA node action potential upstroke is caused by a fast sodium current like the ventricle',
      rightAnswer: 'Pacemaker (SA/AV nodal) cells LACK a functional fast Na⁺ current; their phase-0 upstroke is carried by CALCIUM (L-type), and phase-4 spontaneous depolarisation is driven by the funny current (I_f) — which is why nodal conduction is slow and calcium-dependent',
      why: 'Assuming a sodium-driven upstroke everywhere misses why nodal cells are slower and calcium-dependent, and why calcium-channel blockers (not sodium blockers) slow the nodes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The plateau (phase 2) of the ventricular action potential is maintained primarily by:',
      options: [
        { id: 'a', text: 'A fast sodium current' },
        { id: 'b', text: 'Calcium influx through L-type channels balanced by potassium efflux' },
        { id: 'c', text: 'Chloride influx' },
        { id: 'd', text: 'The funny current' },
      ],
      answerId: 'b',
      explanation: 'The plateau reflects inward L-type calcium current balanced against outward potassium current; the sustained calcium entry both prolongs the refractory period and triggers calcium-induced calcium release for contraction.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Spontaneous phase-4 depolarisation that gives sinoatrial node cells their automaticity is driven mainly by the:',
      options: [
        { id: 'a', text: 'Fast sodium current' },
        { id: 'b', text: 'Funny current (I_f) through HCN channels' },
        { id: 'c', text: 'Chloride current' },
        { id: 'd', text: 'Sodium–potassium pump only' },
      ],
      answerId: 'b',
      explanation: 'Pacemaker cells lack a stable resting potential; the inward funny current (I_f, an HCN-channel Na⁺ current) drives slow phase-4 depolarisation toward threshold, and its slope sets the heart rate (blocked by ivabradine).',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Cardiac action potentials', svg: CARDIAC_ACTION_POTENTIAL, caption: 'The ventricular phases (Na⁺/K⁺/Ca²⁺ currents) and the pacemaker action potential (funny current + calcium upstroke).' },
  ],
};

export default cardiacIonCurrentsChannels;
