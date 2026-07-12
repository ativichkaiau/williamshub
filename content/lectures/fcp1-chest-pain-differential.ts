import type { Lecture } from '../../lib/types';

export const fcp1ChestPainDifferential: Lecture = {
  id: 'fcp1-chest-pain-differential',
  title: 'Chest Pain — Differential & Cannot-Miss Causes',
  system: 'clinical',
  source: 'L11 — Chest Pain',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L11 Chest Pain' },
    { kind: 'disease', label: 'ACS · PE · dissection' },
    { kind: 'mechanism', label: 'Cannot-miss causes' },
    { kind: 'investigation', label: 'ECG · troponin · CT' },
  ],

  highYield: [
    'Frame chest pain around the six immediately life-threatening **cannot-miss** causes: **acute coronary syndrome**, **pulmonary embolism**, **aortic dissection**, **tension pneumothorax**, **cardiac tamponade** and **oesophageal rupture (Boerhaave)**. See [[fcp1-chest-pain-red-flags]].',
    'Then work by system: **cardiac** (ACS, pericarditis) — see [[fcp1-chest-pain-cardiac]]; **vascular** (dissection); **pulmonary** (PE, pneumothorax, pneumonia, pleurisy); **gastrointestinal** (reflux, spasm, rupture); **musculoskeletal** (costochondritis); and **psychogenic**.',
    '**Discriminators:** tearing pain radiating to the back with unequal arm pulses or BP → **dissection**; pleuritic pain with dyspnoea and risk factors → **PE**; pain worse lying and eased sitting forward → **pericarditis**; retrosternal pressure on exertion → **ACS**.',
    'Musculoskeletal and reflux causes are common but are **diagnoses of exclusion** — never label chest pain "muscular" until the cannot-miss causes have been considered. There is heavy overlap with breathlessness — see [[fcp1-dyspnea-differential]].',
    'History plus **ECG, troponin and focused imaging** rapidly sort the dangerous from the benign; work the unstable patient up and treat in parallel.',
  ],

  mechanism: {
    title: 'Cannot-miss first, then work by system',
    steps: [
      { id: 's1', label: 'Six lethal causes: ACS, PE, dissection, tension pneumo, tamponade, rupture', emphasis: 'danger' },
      { id: 's2', label: 'Cardiac vs vascular vs pulmonary vs GI vs MSK vs psychogenic', emphasis: 'key' },
      { id: 's3', label: 'Character, radiation and triggers discriminate', emphasis: 'key' },
      { id: 's4', label: 'ECG + troponin + targeted imaging', emphasis: 'normal' },
      { id: 's5', label: 'MSK and reflux only after lethal causes excluded', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Unequal arm blood pressures or a pulse deficit with tearing pain to the back', mechanism: 'Aortic dissection', significance: 'key' },
    { sign: 'Pleuritic pain, tachycardia and a swollen unilateral calf', mechanism: 'Pulmonary embolism', significance: 'key' },
    { sign: 'Pericardial friction rub, pain relieved by sitting forward', mechanism: 'Pericarditis', significance: 'supportive' },
    { sign: 'Reproducible chest-wall tenderness', mechanism: 'Costochondritis — only after excluding lethal causes', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ST elevation or new ischaemic ECG changes', meaning: 'Acute coronary syndrome → see [[fcp1-chest-pain-cardiac]]' },
    { clue: 'Widened mediastinum on CXR with tearing pain', meaning: 'Aortic dissection → CT angiography' },
    { clue: 'Sudden pleuritic pain, hypoxia, clear CXR, raised D-dimer', meaning: 'Pulmonary embolism → CT pulmonary angiogram' },
    { clue: 'Fever, subcutaneous emphysema and pain after forceful vomiting', meaning: 'Oesophageal rupture (Boerhaave) → CT or contrast study' },
  ],

  treatment: [
    { logic: 'Risk-stratify before you reassure', detail: 'The task in undifferentiated chest pain is to exclude the six lethal causes first, using ECG, troponin and targeted imaging.' },
    { logic: 'Parallel work-up for the unstable patient', detail: 'Simultaneous history, monitoring, IV access, ECG and analgesia while the differential is narrowed.' },
  ],

  mnemonics: [
    { hook: 'Cannot-miss chest pain: ACS, PE, Dissection, Tension pneumo, Tamponade, Rupture', expansion: ['All can kill within hours', 'ECG + troponin + imaging', 'MSK and reflux are exclusions'] },
  ],

  traps: [
    {
      questionCategory: 'Anchoring on a benign cause',
      wrongInstinct: 'Diagnose costochondritis because the chest wall is tender',
      rightAnswer: 'Chest-wall tenderness does not exclude ACS or PE — consider the lethal causes first',
      why: 'Reproducible tenderness can coexist with a myocardial infarction; it is not a rule-out.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 65-year-old has sudden tearing chest pain radiating to the back, with BP 180/100 in the right arm and 140/80 in the left. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Acute pericarditis' },
        { id: 'b', text: 'Aortic dissection' },
        { id: 'c', text: 'Costochondritis' },
        { id: 'd', text: 'Gastro-oesophageal reflux' },
      ],
      answerId: 'b',
      explanation: 'Tearing pain radiating to the back with a blood-pressure differential between the arms is the classic presentation of aortic dissection.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which group best represents the immediately life-threatening ("cannot-miss") causes of chest pain?',
      options: [
        { id: 'a', text: 'Reflux, asthma and anxiety' },
        { id: 'b', text: 'ACS, PE, aortic dissection, tension pneumothorax, tamponade and oesophageal rupture' },
        { id: 'c', text: 'Pneumonia, costochondritis and pleurisy' },
        { id: 'd', text: 'Shingles, hiatus hernia and panic disorder' },
      ],
      answerId: 'b',
      explanation: 'The six cannot-miss causes can each kill within hours and must be excluded before benign causes are accepted.',
      tests: 'lecture',
    },
  ],
};

export default fcp1ChestPainDifferential;
