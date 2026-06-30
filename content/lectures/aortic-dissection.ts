import type { Lecture } from '../../lib/types';

export const aorticDissection: Lecture = {
  id: 'aortic-dissection',
  title: 'Aortic Dissection',
  system: 'cardiovascular',
  source: 'L5 — Vascular Disorders',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L5 Vascular Disorders' },
    { kind: 'disease', label: 'Aortic dissection' },
    { kind: 'mechanism', label: 'False lumen' },
    { kind: 'exam', label: 'Early diastolic murmur' },
    { kind: 'treatment', label: 'Impulse control' },
  ],

  highYield: [
    'Blood enters and tracks along the **media** via an **intimal tear** (or vasa-vasorum rupture → intramural hematoma).',
    'Etiology: **>90% hypertension** (men 40–60); **<10% connective-tissue** (Marfan, familial TAA).',
    '**Sudden, severe, tearing chest pain radiating to the back.**',
    'Stanford **A = ascending** (surgical emergency); **B = descending only** (often medical if uncomplicated).',
    'Ascending → aortic root → **acute aortic regurgitation (early diastolic murmur)**; rupture into pericardium → **tamponade**.',
  ],

  mechanism: {
    title: 'Intimal tear → false lumen → propagation',
    steps: [
      { id: 's1', label: 'Intimal tear (or vasa vasorum rupture)' },
      { id: 's2', label: 'Blood enters media' },
      { id: 's3', label: 'False lumen', emphasis: 'key' },
      { id: 's4', label: 'Propagation' },
      { id: 's5', label: 'Branch compromise / pulse–BP differential' },
    ],
    branches: [
      {
        fromId: 's4',
        title: 'Ascending involvement',
        steps: [
          { id: 'a1', label: 'Aortic root involvement' },
          { id: 'a2', label: 'Acute aortic regurgitation' },
          { id: 'a3', label: 'Early diastolic murmur', emphasis: 'key' },
        ],
      },
      {
        fromId: 's4',
        title: 'Proximal rupture',
        steps: [
          { id: 'd1', label: 'Into pericardium' },
          { id: 'd2', label: 'Cardiac tamponade', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Early diastolic murmur (acute AR)', mechanism: 'Ascending/root involvement → aortic valve incompetence', significance: 'key' },
    { sign: 'Inter-arm BP differential / pulse deficit', mechanism: 'False lumen occludes a branch artery', significance: 'key' },
    { sign: 'Hypotension / Beck triad', mechanism: 'Rupture into pericardium → tamponade (ominous)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CT angiography', meaning: 'Gold standard in the stable patient' },
    { clue: 'Transesophageal echo (TEE)', meaning: 'Bedside option for the unstable patient' },
    { clue: 'Widened mediastinum on CXR', meaning: 'Supportive, not sensitive' },
  ],

  treatment: [
    { logic: 'Impulse control BEFORE vasodilation', detail: 'IV beta-blocker first (HR <60, ↓dP/dt), then a vasodilator — avoids reflex tachycardia that worsens shear.' },
    { logic: 'Stanford A → emergency surgery', detail: 'Risks tamponade, AR, coronary compromise.' },
    { logic: 'Stanford B uncomplicated → medical', detail: 'Strict BP/impulse control; intervene if malperfusion/rupture.' },
  ],

  mnemonics: [
    { hook: 'Root Rip = Regurg Murmur', expansion: ['Aortic root ripped', '→ acute aortic regurgitation', '→ early diastolic murmur'] },
  ],

  traps: [
    {
      questionCategory: 'Physical examination finding',
      wrongInstinct: 'Tachycardia from sympathetic activation',
      rightAnswer: 'Early diastolic murmur (acute AR)',
      why: 'Tachycardia is a non-specific stress response. The exam sign that LOCALIZES ascending involvement is the early diastolic murmur of acute aortic regurgitation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has sudden tearing chest pain radiating to the back. Which physical examination finding suggests ascending aortic involvement?',
      options: [
        { id: 'a', text: 'Tachycardia' },
        { id: 'b', text: 'Early diastolic murmur' },
        { id: 'c', text: 'Wheezing' },
        { id: 'd', text: 'Loud S1' },
      ],
      answerId: 'b',
      explanation: 'Ascending/root involvement → aortic valve incompetence → acute AR → early diastolic murmur. Tachycardia is non-specific and does not localize.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Murmur timing — acute aortic regurgitation', murmur: 'aortic-regurgitation', caption: 'Early-diastolic decrescendo murmur right after S2 (ascending/root involvement).' },
  ],
};

export default aorticDissection;
