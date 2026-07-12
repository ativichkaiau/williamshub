import type { Lecture } from '../../lib/types';

export const fcp1AbdominalPainAcuteAbdomen: Lecture = {
  id: 'fcp1-abdominal-pain-acute-abdomen',
  title: 'The Acute Abdomen',
  system: 'clinical',
  source: 'L14 — Abdominal Pain, Nausea & Vomiting',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L14 Abdominal Pain, N&V' },
    { kind: 'disease', label: 'Perforation · obstruction · ischaemia · AAA' },
    { kind: 'exam', label: 'Peritonism · guarding · rebound' },
    { kind: 'investigation', label: 'Erect CXR · CT · lactate' },
  ],

  highYield: [
    'An **acute (surgical) abdomen** is sudden severe abdominal pain with **peritonism** — the first question is not the exact diagnosis but **does this patient need urgent resuscitation and a surgeon?** ([[fcp1-abdominal-pain-approach]]).',
    '**Signs of peritonitis:** the patient **lies still**, with **guarding, board-like rigidity, rebound and percussion tenderness**, and **absent bowel sounds** — the opposite of the **restless** patient of colic.',
    'Cannot-miss causes: **appendicitis**, **perforated viscus**, **bowel obstruction**, **mesenteric ischaemia**, **ruptured abdominal aortic aneurysm**, and **ruptured ectopic pregnancy** ([[fcp1-pelvic-pain-approach]]).',
    '**Pain out of proportion to a soft abdomen** suggests **mesenteric ischaemia**; a **pulsatile expansile mass with shock** is a **leaking AAA** — both are time-critical and lethal ([[fcp1-shock-management]]).',
    'Initial approach: **resuscitate (ABC, IV fluids), keep nil by mouth**, take **bloods (FBC, lipase, lactate, β-hCG, crossmatch)**, obtain an **erect CXR (free air under the diaphragm)** and **CT abdomen**, and **refer to surgery early**.',
  ],

  mechanism: {
    title: 'Recognise peritonism, resuscitate, refer',
    steps: [
      { id: 's1', label: 'Sudden severe pain + peritoneal signs = acute abdomen', emphasis: 'danger' },
      { id: 's2', label: 'Lies still, rigid, rebound, silent abdomen', emphasis: 'key' },
      { id: 's3', label: 'Shock or pulsatile mass → ruptured AAA', emphasis: 'danger' },
      { id: 's4', label: 'Pain out of proportion → mesenteric ischaemia', emphasis: 'danger' },
      { id: 's5', label: 'Resuscitate, image (erect CXR/CT), early surgery', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Board-like rigidity with the patient lying motionless', mechanism: 'Generalised peritonitis (for example, perforation)', significance: 'key' },
    { sign: 'Rebound and percussion tenderness', mechanism: 'Parietal peritoneal inflammation', significance: 'key' },
    { sign: 'Distension with high-pitched or absent bowel sounds and vomiting', mechanism: 'Bowel obstruction', significance: 'supportive' },
    { sign: 'Pulsatile expansile abdominal mass with hypotension', mechanism: 'Ruptured abdominal aortic aneurysm', significance: 'key' },
  ],

  investigations: [
    { clue: 'Free air under the diaphragm on erect CXR', meaning: 'Perforated viscus → surgery' },
    { clue: 'Dilated bowel loops with air-fluid levels', meaning: 'Bowel obstruction' },
    { clue: 'Raised lactate with pain out of proportion to the exam', meaning: 'Mesenteric ischaemia' },
    { clue: 'Positive β-hCG with an adnexal mass and free fluid', meaning: 'Ruptured ectopic pregnancy — emergency' },
  ],

  treatment: [
    { logic: 'Resuscitate before the diagnosis is complete', detail: 'ABC, wide-bore IV access, fluids, oxygen, analgesia and antiemetics, nil by mouth, and crossmatch — treat shock while the workup proceeds.' },
    { logic: 'Early surgical referral for peritonism', detail: 'Generalised peritonitis, perforation, ischaemia or a ruptured aneurysm need the operating theatre, not prolonged observation.' },
  ],

  mnemonics: [
    { hook: 'Cannot-miss: Appendix, Perforation, Obstruction, Ischaemia, AAA, Ectopic', expansion: ['Peritonism = lies still, rigid, rebound', 'Erect CXR for free air'] },
  ],

  traps: [
    {
      questionCategory: 'Pain out of proportion to examination',
      wrongInstinct: 'A soft, non-tender abdomen rules out a surgical emergency',
      rightAnswer: 'Severe pain with a deceptively soft abdomen is classic early mesenteric ischaemia',
      why: 'Mesenteric ischaemia kills through delay; the mismatch between symptoms and signs is the clue, confirmed by a rising lactate.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 60-year-old develops sudden severe epigastric pain and now has a rigid abdomen. The best immediate imaging to confirm a perforation is:',
      options: [
        { id: 'a', text: 'Abdominal ultrasound' },
        { id: 'b', text: 'Erect chest X-ray for free air under the diaphragm' },
        { id: 'c', text: 'Barium swallow' },
        { id: 'd', text: 'MRI abdomen' },
      ],
      answerId: 'b',
      explanation: 'Free air under the diaphragm on an erect CXR is a quick, accessible sign of a perforated viscus and prompts urgent surgery.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'An elderly patient with atrial fibrillation has sudden severe diffuse abdominal pain but a soft abdomen and a lactic acidosis. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Constipation' },
        { id: 'b', text: 'Acute mesenteric ischaemia' },
        { id: 'c', text: 'Gastroenteritis' },
        { id: 'd', text: 'Functional abdominal pain' },
      ],
      answerId: 'b',
      explanation: 'Pain out of proportion to a soft abdomen, an embolic source (AF) and a rising lactate are the hallmark of acute mesenteric ischaemia.',
      tests: 'disease',
    },
  ],
};

export default fcp1AbdominalPainAcuteAbdomen;
