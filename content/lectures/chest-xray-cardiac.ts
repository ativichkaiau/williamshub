import type { Lecture } from '../../lib/types';

export const chestXrayCardiac: Lecture = {
  id: 'chest-xray-cardiac',
  title: 'Chest X-ray for the Cardiovascular System',
  system: 'cardiovascular',
  source: 'L9 — Echocardiography & Chest X-ray',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L9 Echo & CXR' },
    { kind: 'mechanism', label: 'Cardiac silhouette' },
    { kind: 'exam', label: 'Cardiothoracic ratio' },
  ],

  highYield: [
    '**The chest X-ray gives a quick overview of heart size, chamber contours, great vessels, and the lungs** — cheap and widely available, though far less detailed than echo. Read a **PA erect** film systematically.',
    '**Cardiothoracic ratio (CTR) = maximum cardiac width ÷ maximum thoracic (inner rib) width.** On a **PA film, a normal CTR is < 0.5**; **CTR > 0.5 suggests cardiomegaly** (chamber enlargement or pericardial effusion). (An AP or portable film magnifies the heart, so CTR is unreliable there.)',
    '**The cardiac silhouette borders:** on the **right**, the border is mostly the **right atrium** (with SVC above); on the **left**, from top down: **aortic knuckle → pulmonary trunk → left atrial appendage → left ventricle**. **LV enlargement** displaces the apex down-and-out; **LA enlargement** → a "double density" and splayed carina.',
    '**Pulmonary vasculature reflects haemodynamics.** **Left heart failure → pulmonary venous congestion**: upper-lobe vessel diversion, **Kerley B lines**, perihilar ("bat-wing") oedema, and pleural effusions. A **"boot-shaped" heart** suggests Tetralogy of Fallot; an "egg-on-a-string" suggests transposition.',
    '**CXR complements echo and ECG:** it shows the **consequences** (cardiomegaly, pulmonary oedema, effusions) and gross anatomy, while echo characterises structure/function and ECG the electrical activity. Always integrate the three.',
  ],

  mechanism: {
    title: 'Silhouette + vasculature = cardiac overview',
    steps: [
      { id: 's1', label: 'Read a PA erect film systematically', emphasis: 'key' },
      { id: 's2', label: 'CTR = cardiac/thoracic width; normal <0.5 on PA', emphasis: 'key' },
      { id: 's3', label: 'Right border = RA; left border = aorta→PA→LAA→LV', emphasis: 'key' },
      { id: 's4', label: 'LV enlargement → apex down/out; LA → double density' },
      { id: 's5', label: 'Pulmonary congestion/Kerley B/effusion = LV failure', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cardiothoracic ratio > 0.5 on a PA film', mechanism: 'Cardiomegaly (or pericardial effusion)', significance: 'key' },
    { sign: 'Kerley B lines + upper-lobe diversion', mechanism: 'Pulmonary venous congestion (LV failure)', significance: 'key' },
    { sign: 'Apex displaced down and to the left', mechanism: 'Left ventricular enlargement', significance: 'supportive' },
    { sign: 'Double density behind the heart', mechanism: 'Left atrial enlargement', significance: 'supportive' },
    { sign: 'Boot-shaped heart', mechanism: 'Tetralogy of Fallot', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ratio used to assess heart size on CXR', meaning: 'Cardiothoracic ratio (normal <0.5 on PA)' },
    { clue: 'Structure forming the right heart border', meaning: 'Right atrium' },
    { clue: 'CXR signs of pulmonary venous congestion', meaning: 'Kerley B lines, upper-lobe diversion, bat-wing oedema, effusions' },
    { clue: 'Why an AP/portable film overestimates heart size', meaning: 'Magnification (heart farther from the plate)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The CXR rapidly flags cardiomegaly and pulmonary oedema (heart failure) and gross congenital contours, complementing echo ([[echocardiography-basics]]) and ECG ([[ecg-systematic-interpretation]]). Integrate imaging with the exam ([[cardiovascular-examination]]).' },
  ],

  mnemonics: [
    { hook: 'CTR > 0.5 on PA = big heart; left border "aorta, PA, LAA, LV" top→bottom', expansion: ['Right border = RA'] },
    { hook: 'LV failure on CXR = "ABCDE": Alveolar oedema, B-lines (Kerley), Cardiomegaly, Diversion (upper lobe), Effusions', expansion: ['Bat-wing oedema'] },
  ],

  traps: [
    {
      questionCategory: 'Reliability of CTR on portable films',
      wrongInstinct: 'A cardiothoracic ratio above 0.5 always means cardiomegaly regardless of the film type',
      rightAnswer: 'CTR is only reliable on a PA erect film; an AP/portable (supine) film magnifies the heart, so it can falsely appear enlarged',
      why: 'On AP films the heart is farther from the detector and magnified; the >0.5 rule applies to standard PA films.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On a standard PA chest radiograph, the upper limit of normal for the cardiothoracic ratio is approximately:',
      options: [
        { id: 'a', text: '0.3' },
        { id: 'b', text: '0.5' },
        { id: 'c', text: '0.7' },
        { id: 'd', text: '0.9' },
      ],
      answerId: 'b',
      explanation: 'A cardiothoracic ratio (cardiac width ÷ thoracic width) above 0.5 on a PA film suggests cardiomegaly. Portable/AP films magnify the heart, making the ratio unreliable.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Kerley B lines, upper-lobe vascular diversion, and perihilar "bat-wing" opacity on a chest X-ray indicate:',
      options: [
        { id: 'a', text: 'Right heart failure' },
        { id: 'b', text: 'Pulmonary venous congestion from left heart failure' },
        { id: 'c', text: 'Pneumothorax' },
        { id: 'd', text: 'A normal heart' },
      ],
      answerId: 'b',
      explanation: 'These are radiographic signs of pulmonary venous congestion/oedema, typically from left ventricular failure raising pulmonary capillary pressure.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default chestXrayCardiac;
