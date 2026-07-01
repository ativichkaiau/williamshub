import type { Lecture } from '../../lib/types';
import { LIPOPROTEIN_CLASSES } from '../../lib/figures';

export const cholesterolSteroidsLipoproteins: Lecture = {
  id: 'cholesterol-steroids-lipoproteins',
  title: 'Cholesterol, Steroids & Lipoproteins',
  system: 'molecular',
  source: 'L12 — Lipid Chemistry',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L12 Lipid Chemistry' },
    { kind: 'disease', label: 'Cholesterol / lipoproteins' },
    { kind: 'mechanism', label: 'Sterol derivatives & transport' },
    { kind: 'exam', label: 'LDL vs HDL' },
  ],

  highYield: [
    '**Cholesterol** = a four-ring **sterol** (built from isoprene units); it modulates **membrane fluidity** and is the precursor of **bile acids, steroid hormones, and vitamin D**.',
    '**Bile acids** (primary, conjugated with **glycine/taurine**) act as **emulsifiers** for dietary fat; **steroid hormones** (cortisol, aldosterone, testosterone, estradiol) are all cholesterol-derived.',
    'Other lipids: **eicosanoids/prostaglandins** (from arachidonic acid), **fat-soluble vitamins (A, D, E, K)**, and **ubiquinone (coenzyme Q)** — an electron carrier in the electron-transport chain.',
    '**Lipoproteins** carry lipids in blood; **more protein = higher density**: **chylomicrons** (most triglyceride, dietary fat) → **VLDL** (liver triglyceride) → **LDL** (cholesterol delivery, “bad”) → **HDL** (reverse cholesterol transport, “good”).',
    '**Hypercholesterolemia** (high LDL) drives atherosclerosis — the clinical rationale for the lipid profile.',
  ],

  mechanism: {
    title: 'Cholesterol → derivatives; lipoproteins move lipids',
    steps: [
      { id: 's1', label: 'Cholesterol (sterol) → bile acids, steroids, vitamin D', emphasis: 'key' },
      { id: 's2', label: 'Bile acids emulsify dietary fat' },
      { id: 's3', label: 'Lipoproteins transport TG & cholesterol' },
      { id: 's4', label: 'High LDL → atherosclerosis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Emulsification of dietary fat for absorption', mechanism: 'Bile acids (amphipathic cholesterol derivatives)', significance: 'key' },
    { sign: 'High LDL cholesterol → atherosclerotic plaque', mechanism: 'LDL delivers cholesterol to vessels', significance: 'key' },
    { sign: 'HDL protective ("good") cholesterol', mechanism: 'Reverse cholesterol transport', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Lipid profile (LDL, HDL, triglycerides)', meaning: 'Cardiovascular risk stratification' },
    { clue: 'Lipoprotein density/composition', meaning: 'Chylomicron (TG-rich) → HDL (protein-rich)' },
    { clue: 'Cholesterol precursor role', meaning: 'Steroid/bile/vitamin-D synthesis' },
  ],

  treatment: [
    { logic: 'Lower LDL (statins) to reduce atherosclerosis', detail: 'Cholesterol is the plaque substrate.' },
    { logic: 'Bile acids aid fat digestion', detail: 'Emulsification precedes lipase action.' },
  ],

  mnemonics: [
    { hook: 'LDL = “Lousy/Bad” (delivers cholesterol); HDL = “Healthy” (reverse transport)', expansion: ['More protein = higher density'] },
    { hook: 'Cholesterol makes: Bile acids, Steroid hormones, vitamin D', expansion: ['Sterol precursor'] },
  ],

  traps: [
    {
      questionCategory: 'Lipoprotein density',
      wrongInstinct: 'HDL is the lowest-density lipoprotein because it carries cholesterol',
      rightAnswer: 'Density rises with protein content: chylomicrons (most lipid) are LOWEST density and HDL (most protein) is HIGHEST density',
      why: 'Lipoprotein density tracks the protein-to-lipid ratio, so the triglyceride-rich chylomicron is least dense and the protein-rich HDL is most dense — the basis for their names.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which lipoprotein is chiefly responsible for delivering cholesterol to peripheral tissues and, when elevated, promotes atherosclerosis?',
      options: [
        { id: 'a', text: 'Chylomicron' },
        { id: 'b', text: 'LDL' },
        { id: 'c', text: 'HDL' },
        { id: 'd', text: 'VLDL' },
      ],
      answerId: 'b',
      explanation: 'LDL (“bad” cholesterol) delivers cholesterol to tissues; elevated LDL drives atherosclerotic plaque formation, whereas HDL performs protective reverse cholesterol transport.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Lipoprotein classes', svg: LIPOPROTEIN_CLASSES, caption: 'Chylomicron (dietary TG, lowest density) → VLDL → LDL (delivers cholesterol) → HDL (reverse transport, highest density).' },
  ],
};

export default cholesterolSteroidsLipoproteins;
