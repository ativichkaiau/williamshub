import type { Lecture } from '../../lib/types';

export const fcp1NauseaVomiting: Lecture = {
  id: 'fcp1-nausea-vomiting',
  title: 'Approach to Nausea & Vomiting',
  system: 'clinical',
  source: 'L14 — Abdominal Pain, Nausea & Vomiting',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L14 Abdominal Pain, N&V' },
    { kind: 'disease', label: 'Obstruction · raised ICP · DKA · drugs' },
    { kind: 'mechanism', label: 'Central vs peripheral triggers' },
    { kind: 'investigation', label: 'Electrolytes · β-hCG' },
  ],

  highYield: [
    'Vomiting is coordinated by the **vomiting centre in the medulla**, driven by four inputs: the **chemoreceptor trigger zone (area postrema)** for drugs, toxins, uraemia and DKA; the **vestibular apparatus** for motion and labyrinthitis; **GI vagal afferents** for obstruction and irritation; and **higher/cortical centres** for raised ICP, pain and psychogenic triggers.',
    'Split triggers into **central** (CNS, metabolic, drugs, vestibular) versus **peripheral/GI** (gastroenteritis, obstruction, gastroparesis) — this steers both the workup and the choice of antiemetic.',
    'Danger signs: **bilious or feculent vomiting** (bowel obstruction — [[fcp1-abdominal-pain-acute-abdomen]]), **projectile vomiting with headache** (raised intracranial pressure — [[fcp1-headache-red-flags]]), **haematemesis** ([[fcp1-gi-bleed-upper]]), and features of **significant dehydration**.',
    'Key complications are **dehydration**, **hypokalaemia** and a **hypochloraemic metabolic alkalosis** from losing gastric H+ and Cl−, plus **Mallory-Weiss tears** and **aspiration**.',
    'In any woman of reproductive age, **think pregnancy**; management is to **assess and correct fluids and electrolytes**, identify the cause, and **match the antiemetic to the mechanism**.',
  ],

  mechanism: {
    title: 'Four inputs converge on the vomiting centre',
    steps: [
      { id: 's1', label: 'Vomiting centre (medulla) integrates the inputs', emphasis: 'key' },
      { id: 's2', label: 'Chemoreceptor trigger zone: drugs, toxins, uraemia, DKA', emphasis: 'key' },
      { id: 's3', label: 'Vestibular, GI vagal, and cortical (raised ICP) inputs' },
      { id: 's4', label: 'Central vs peripheral trigger guides antiemetic choice', emphasis: 'key' },
      { id: 's5', label: 'Watch fluid/electrolyte loss and red flags', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bilious or feculent vomiting with abdominal distension', mechanism: 'Bowel obstruction', significance: 'key' },
    { sign: 'Early-morning vomiting with headache, worse on straining', mechanism: 'Raised intracranial pressure', significance: 'key' },
    { sign: 'Dry mucous membranes, tachycardia, low urine output', mechanism: 'Dehydration from fluid loss', significance: 'supportive' },
    { sign: 'Vomiting triggered by head movement, relieved by rest', mechanism: 'Vestibular (peripheral) cause', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Vomiting with hypokalaemia and metabolic alkalosis', meaning: 'Loss of gastric H+ and Cl− from protracted vomiting' },
    { clue: 'Woman of reproductive age with nausea and vomiting', meaning: 'Check β-hCG — pregnancy' },
    { clue: 'Vomiting with hyperglycaemia and ketones', meaning: 'Diabetic ketoacidosis' },
    { clue: 'Bilious vomiting, distension and an abnormal abdominal film', meaning: 'Bowel obstruction → surgical review' },
  ],

  treatment: [
    { logic: 'Rehydrate and correct electrolytes first', detail: 'IV fluids with potassium replacement for dehydration and hypokalaemic alkalosis; assess severity before symptomatic control.' },
    { logic: 'Match the antiemetic to the mechanism', detail: 'For example, dopamine or serotonin antagonists for chemotherapy and chemoreceptor-trigger-zone causes, antihistamines or anticholinergics for vestibular causes; always treat the underlying trigger.' },
  ],

  mnemonics: [
    { hook: 'Four vomiting inputs: chemoreceptor trigger zone, Vestibular, GI-vagal, Cortical', expansion: ['Bilious = obstruction; projectile + headache = raised ICP', 'Lose H+ and Cl− → hypokalaemic metabolic alkalosis'] },
  ],

  traps: [
    {
      questionCategory: 'Vomiting with headache',
      wrongInstinct: 'Attribute early-morning vomiting to simple gastritis',
      rightAnswer: 'Vomiting that is worse in the morning or on straining with headache suggests raised intracranial pressure',
      why: 'A central cause needs neuro-imaging, not just antiemetics; missing raised intracranial pressure is dangerous.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which structure senses blood-borne drugs and toxins to trigger vomiting and lies outside the blood-brain barrier?',
      options: [
        { id: 'a', text: 'Nucleus tractus solitarius' },
        { id: 'b', text: 'Chemoreceptor trigger zone (area postrema)' },
        { id: 'c', text: 'Vestibular nuclei' },
        { id: 'd', text: 'Cerebral cortex' },
      ],
      answerId: 'b',
      explanation: 'The chemoreceptor trigger zone in the area postrema lies outside the blood-brain barrier, so it can detect circulating drugs, toxins and metabolic disturbances and signal the vomiting centre.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Protracted vomiting classically produces which electrolyte and acid-base picture?',
      options: [
        { id: 'a', text: 'Hyperkalaemic metabolic acidosis' },
        { id: 'b', text: 'Hypokalaemic hypochloraemic metabolic alkalosis' },
        { id: 'c', text: 'Respiratory acidosis' },
        { id: 'd', text: 'Normal anion gap metabolic acidosis' },
      ],
      answerId: 'b',
      explanation: 'Losing gastric hydrogen and chloride ions with vomiting produces a hypochloraemic, hypokalaemic metabolic alkalosis.',
      tests: 'investigation',
    },
  ],
};

export default fcp1NauseaVomiting;
