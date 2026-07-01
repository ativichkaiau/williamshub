import type { Lecture } from '../../lib/types';
import { LUMBAR_PLEXUS } from '../../lib/figures';

export const lumbarPlexus: Lecture = {
  id: 'lumbar-plexus',
  title: 'Lumbar Plexus',
  system: 'msk',
  source: 'L17 — Posterior Abdominal Wall & Urinary System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L17 Posterior Wall & Urinary' },
    { kind: 'disease', label: 'Lumbar plexus' },
    { kind: 'mechanism', label: 'L1–L4 branches' },
    { kind: 'exam', label: 'Femoral / obturator' },
  ],

  highYield: [
    'The **lumbar plexus (L1–L4)** forms within **psoas major** and gives 6 named nerves: **iliohypogastric (L1), ilioinguinal (L1), genitofemoral (L1–L2), lateral femoral cutaneous (L2–L3), femoral (L2–L4), and obturator (L2–L4)**.',
    '**Iliohypogastric + ilioinguinal (L1)** supply the lower abdominal wall and groin/upper genital skin — both are **at risk in inguinal/appendix (Gridiron) incisions**, causing groin numbness or weakness of the conjoint tendon.',
    'The **femoral nerve (L2–L4)** emerges **LATERAL to psoas major**, supplies the **iliacus, quadriceps (knee extension)**, and anterior thigh skin; injury → weak knee extension + lost patellar reflex. The **obturator nerve (L2–L4)** emerges **MEDIAL to psoas**, supplies the **thigh adductors** and medial-thigh skin.',
    'The **lateral femoral cutaneous nerve (L2–L3)** is purely sensory to the lateral thigh; entrapment under the inguinal ligament causes **meralgia paresthetica** (burning lateral-thigh numbness).',
    'The **genitofemoral nerve** pierces psoas: its **genital branch** supplies the cremaster (cremasteric reflex) and its **femoral branch** the skin over the femoral triangle.',
  ],

  mechanism: {
    title: 'Six nerves from L1–L4 within psoas major',
    steps: [
      { id: 's1', label: 'Iliohypogastric + ilioinguinal (L1): wall/groin', emphasis: 'key' },
      { id: 's2', label: 'Femoral LATERAL to psoas (quadriceps)' },
      { id: 's3', label: 'Obturator MEDIAL to psoas (adductors)' },
      { id: 's4', label: 'Lateral femoral cutaneous → meralgia paresthetica', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Weak knee extension + absent patellar reflex', mechanism: 'Femoral nerve (L2–L4) lesion', significance: 'key' },
    { sign: 'Weak thigh adduction', mechanism: 'Obturator nerve (L2–L4) lesion', significance: 'key' },
    { sign: 'Burning numbness over the lateral thigh', mechanism: 'Lateral femoral cutaneous entrapment (meralgia paresthetica)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test knee extension + patellar reflex', meaning: 'Femoral nerve' },
    { clue: 'Test hip adduction', meaning: 'Obturator nerve' },
  ],

  treatment: [
    { logic: 'Protect L1 nerves in groin incisions', detail: 'Avoid ilioinguinal/iliohypogastric injury.' },
    { logic: 'Meralgia paresthetica: weight loss, release', detail: 'Relieve inguinal-ligament entrapment.' },
  ],

  mnemonics: [
    { hook: '"I, I Get Leftovers From Obturator": Iliohypogastric, Ilioinguinal, Genitofemoral, LFC, Femoral, Obturator', expansion: ['Lumbar plexus branches'] },
    { hook: 'Femoral = LATERAL to psoas; Obturator = MEDIAL to psoas', expansion: ['Quadriceps vs adductors'] },
  ],

  traps: [
    {
      questionCategory: 'Femoral vs obturator function',
      wrongInstinct: 'The femoral nerve supplies the thigh adductors',
      rightAnswer: 'The FEMORAL nerve supplies knee EXTENSORS (quadriceps); the OBTURATOR nerve supplies the thigh ADDUCTORS',
      why: 'Femoral (anterior compartment, lateral to psoas) = extension; obturator (medial compartment, medial to psoas) = adduction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has weak knee extension and a lost patellar reflex after a psoas abscess. Which nerve is affected?',
      options: [
        { id: 'a', text: 'Obturator nerve' },
        { id: 'b', text: 'Femoral nerve' },
        { id: 'c', text: 'Lateral femoral cutaneous nerve' },
        { id: 'd', text: 'Genitofemoral nerve' },
      ],
      answerId: 'b',
      explanation: 'The femoral nerve (L2–L4) supplies the quadriceps (knee extension) and carries the afferent/efferent limbs of the patellar reflex; because it runs within/adjacent to psoas, a psoas abscess can compress it.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Lumbar plexus', svg: LUMBAR_PLEXUS, caption: 'Six nerves from L1–L4; femoral is lateral to psoas (quadriceps), obturator is medial (adductors).' },
  ],
};

export default lumbarPlexus;
