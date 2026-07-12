import type { Lecture } from '../../lib/types';

export const fcp1ChestPainRedFlags: Lecture = {
  id: 'fcp1-chest-pain-red-flags',
  title: 'Chest Pain — Red Flags & Rapid Rule-Out',
  system: 'clinical',
  source: 'L11 — Chest Pain',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L11 Chest Pain' },
    { kind: 'mechanism', label: 'Red flags · rapid rule-out' },
    { kind: 'disease', label: 'Six lethal causes' },
    { kind: 'treatment', label: 'Admit vs discharge' },
  ],

  highYield: [
    '**Red-flag features** that demand urgent work-up: **sudden or tearing onset**, **exertional** pain, **radiation to jaw, arm or back**, **dyspnoea, syncope or diaphoresis**, **haemodynamic instability**, **hypoxia**, and **unequal pulses or blood pressures**. Build on [[fcp1-chest-pain-differential]].',
    '**Rapid rule-out of the six lethal causes:** ECG and troponin (ACS), CT angiography (dissection, PE), CXR or eFAST (pneumothorax, effusion) and echocardiography (tamponade) — the unstable patient is investigated and treated in parallel.',
    '**Abnormal vital signs are the loudest red flag** — hypotension, tachycardia, hypoxia or a wide blood-pressure gap between the arms mean a time-critical cause until proven otherwise.',
    '**Who to admit:** ongoing or recurrent pain, dynamic ECG changes, a raised troponin, a high risk score, or any unstable vital sign; low-risk pain with a normal serial ECG and troponin and a low score can be discharged with follow-up.',
    'Reproducible or positional pain can still be lethal — see [[fcp1-chest-pain-cardiac]], and note the overlap with breathlessness in [[fcp1-dyspnea-approach]].',
  ],

  mechanism: {
    title: 'Spot the red flag → rapid rule-out → disposition',
    steps: [
      { id: 's1', label: 'Unstable vitals, hypoxia or syncope = immediate threat', emphasis: 'danger' },
      { id: 's2', label: 'Tearing-to-back + unequal pulses → dissection', emphasis: 'danger' },
      { id: 's3', label: 'Pleuritic + hypoxia + leg swelling → PE', emphasis: 'danger' },
      { id: 's4', label: 'ECG + troponin + targeted imaging in parallel', emphasis: 'key' },
      { id: 's5', label: 'Admit if pain, ECG, troponin or vitals abnormal', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Hypotension with tachycardia and hypoxia', mechanism: 'A time-critical cause (PE, tension pneumo, tamponade, MI)', significance: 'key' },
    { sign: 'Unequal arm blood pressure or a pulse deficit', mechanism: 'Aortic dissection', significance: 'key' },
    { sign: 'Distended neck veins, muffled heart sounds and pulsus paradoxus', mechanism: 'Cardiac tamponade', significance: 'key' },
    { sign: 'Syncope accompanying the chest pain', mechanism: 'High-risk cause (PE, dissection, arrhythmia)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'New ischaemic ECG changes or a raised troponin', meaning: 'Acute coronary syndrome → admit and treat' },
    { clue: 'Hypoxia with clear lungs and tachycardia', meaning: 'Pulmonary embolism → CT pulmonary angiogram' },
    { clue: 'Widened mediastinum with unequal pulses', meaning: 'Aortic dissection → urgent CT angiography' },
    { clue: 'Normal serial ECG and troponin with a low risk score', meaning: 'Low-risk chest pain → safe discharge with follow-up' },
  ],

  treatment: [
    { logic: 'Let the vital signs triage urgency', detail: 'Any instability, hypoxia or syncope with chest pain triggers immediate monitored resuscitation and rapid rule-out.' },
    { logic: 'Base disposition on evidence, not reassurance', detail: 'Admit for an abnormal ECG or troponin, ongoing pain or a high score; discharge only low-risk patients with normal serial testing.' },
  ],

  mnemonics: [
    { hook: 'Chest-pain red flags: sudden/tearing, exertional, radiating, dyspnoea, syncope, unstable vitals', expansion: ['Abnormal vitals = time-critical', 'Rule out the six killers', 'Admit if in doubt'] },
  ],

  traps: [
    {
      questionCategory: 'Disposition decision',
      wrongInstinct: 'Discharge a patient whose pain has settled but who had transient hypotension and a syncopal episode',
      rightAnswer: 'Syncope plus chest pain with any unstable vital sign is high-risk — admit and work up',
      why: 'Resolution of the pain does not exclude dissection, PE or arrhythmia; the syncope is the red flag.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which single feature most strongly mandates urgent evaluation rather than reassurance in a patient with chest pain?',
      options: [
        { id: 'a', text: 'Reproducible chest-wall tenderness' },
        { id: 'b', text: 'Pain lasting only two seconds at a time' },
        { id: 'c', text: 'Syncope with hypotension' },
        { id: 'd', text: 'Pain felt only on deep palpation' },
      ],
      answerId: 'c',
      explanation: 'Syncope with hypotension signals a haemodynamically significant, time-critical cause and mandates admission and rapid rule-out.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient has pleuritic chest pain, HR 118, SpO2 88%, clear lungs on auscultation and a swollen right calf. The priority investigation is:',
      options: [
        { id: 'a', text: 'Reassurance and discharge' },
        { id: 'b', text: 'CT pulmonary angiogram' },
        { id: 'c', text: 'Chest-wall X-ray' },
        { id: 'd', text: 'Upper gastrointestinal endoscopy' },
      ],
      answerId: 'b',
      explanation: 'Hypoxia and tachycardia with clear lungs and a swollen calf point to pulmonary embolism; CT pulmonary angiography is the confirmatory test.',
      tests: 'investigation',
    },
  ],
};

export default fcp1ChestPainRedFlags;
