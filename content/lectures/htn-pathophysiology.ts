import type { Lecture } from '../../lib/types';
import { BP_DETERMINANTS, RAAS_PATHWAY } from '../../lib/figures';

export const htnPathophysiology: Lecture = {
  id: 'htn-pathophysiology',
  title: 'Hypertension — Pathophysiology & Secondary Causes',
  system: 'cardiovascular',
  source: 'L16 — Hypertension',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L16 Hypertension' },
    { kind: 'disease', label: 'Hypertension mechanisms' },
    { kind: 'mechanism', label: 'BP = CO × PVR' },
    { kind: 'investigation', label: 'Secondary screen' },
  ],

  highYield: [
    '**BP = CO × PVR**; CO = HR × SV. **Early HTN ↑CO**; established HTN ↑**PVR** (often irreversible).',
    'Primary HTN drivers: **SNS** (young), **RAAS** (less dominant in Black/elderly), vasoactive substances (endothelin, NO), **salt/volume**.',
    '**Secondary (10%)**: renal (parenchymal, **renovascular** — atherosclerotic or **fibromuscular dysplasia “string of beads”**).',
    'Endocrine secondary: **primary aldosteronism (Conn)**, **pheochromocytoma**, **Cushing**.',
    'RAAS: renin → angiotensin I → ACE → **angiotensin II → AT1** (vasoconstriction + aldosterone).',
  ],

  mechanism: {
    title: 'BP = CO × PVR; drivers SNS + RAAS + volume',
    steps: [
      { id: 's1', label: 'Primary HTN: ↑SNS + ↑RAAS + salt/volume', emphasis: 'key' },
      { id: 's2', label: 'Early ↑ cardiac output' },
      { id: 's3', label: 'Established ↑ PVR (vascular remodeling)' },
      { id: 's4', label: 'Sustained ↑ BP', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'Secondary',
        steps: [{ id: 'sec1', label: 'Renovascular / aldosteronism / pheo / Cushing' }],
      },
    ],
  },

  examFindings: [
    { sign: 'Abdominal bruit, FMD “string of beads” (young female)', mechanism: 'Renovascular hypertension', significance: 'key' },
    { sign: 'Hypertension + spontaneous hypokalemia', mechanism: 'Primary aldosteronism (Conn)', significance: 'key' },
    { sign: 'Episodic HTN + headache/sweating/palpitations', mechanism: 'Pheochromocytoma', significance: 'key' },
    { sign: 'Cushingoid features (moon face, striae)', mechanism: 'Cushing syndrome', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Aldosterone:renin ratio', meaning: 'Primary aldosteronism' },
    { clue: 'Plasma/urine metanephrines', meaning: 'Pheochromocytoma' },
    { clue: 'Renal Doppler / CT angiography', meaning: 'Renovascular disease' },
  ],

  treatment: [
    { logic: 'Primary: lifestyle + AB/CD drugs', detail: 'See antihypertensive modules.' },
    { logic: 'Secondary: treat the cause', detail: 'Adrenalectomy, revascularization, etc.' },
  ],

  mnemonics: [
    { hook: 'BP = CO × PVR (early CO, late PVR)', expansion: ['Established HTN driven by resistance'] },
    { hook: 'Secondary: Renovascular (FMD), Conn (low K⁺), Pheo (episodic), Cushing', expansion: ['Screen by age & clues'] },
  ],

  traps: [
    {
      questionCategory: 'HTN + hypokalemia',
      wrongInstinct: 'Hypokalemia in a hypertensive is just a diuretic effect',
      rightAnswer: 'Hypertension + spontaneous hypokalemia → screen for primary aldosteronism (Conn)',
      why: 'Unprovoked hypokalemia with hypertension suggests primary aldosteronism — check the aldosterone-to-renin ratio.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: "A young woman has resistant hypertension; renal angiography shows a 'string of beads' appearance. Cause?",
      options: [
        { id: 'a', text: 'Atherosclerotic renal artery stenosis' },
        { id: 'b', text: 'Fibromuscular dysplasia' },
        { id: 'c', text: 'Primary aldosteronism' },
        { id: 'd', text: 'Pheochromocytoma' },
      ],
      answerId: 'b',
      explanation: 'A "string of beads" on renal angiography in a young woman is fibromuscular dysplasia — a non-atherosclerotic cause of renovascular hypertension.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Blood-pressure determinants', svg: BP_DETERMINANTS, caption: 'BP = CO × PVR; CO = HR × SV.' },
    { title: 'RAAS pathway', svg: RAAS_PATHWAY, caption: 'A key driver of blood pressure and a major drug target.' },
  ],
};

export default htnPathophysiology;
