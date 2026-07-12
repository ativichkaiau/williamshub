import type { Lecture } from '../../lib/types';

export const fcp1PediatricVomitingDiarrhea: Lecture = {
  id: 'fcp1-pediatric-vomiting-diarrhea',
  title: 'Pediatric Vomiting & Diarrhea',
  system: 'clinical',
  source: 'L20 — Common Pediatric GI Symptoms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L20 Pediatric GI' },
    { kind: 'disease', label: 'Gastroenteritis · pyloric stenosis · intussusception' },
    { kind: 'mechanism', label: 'Dehydration · causes by age' },
    { kind: 'exam', label: 'Hydration status' },
  ],

  highYield: [
    'In a vomiting or diarrhoeal child the first job is **grading dehydration**, not naming the bug: alertness, eyes, tears, mucous membranes, skin turgor, capillary refill, urine output and weight loss classify it (none/some/severe) and drive fluids → [[fcp1-pediatric-abdominal-pain]].',
    '**Acute gastroenteritis** (usually viral — rotavirus, norovirus) is the commonest cause; management is **rehydration** (oral rehydration solution first-line, IV for shock or failed ORS), not routine antibiotics → [[fcp1-diarrhea-approach]].',
    '**Bilious (green) vomiting in an infant is malrotation with midgut volvulus until proven otherwise** — a surgical emergency.',
    '**Pyloric stenosis:** 3–6 weeks old, **non-bilious projectile** vomiting, hungry after feeds, **hypochloraemic hypokalaemic metabolic alkalosis**, olive mass. **Intussusception:** 6–36 months, colicky pain, **redcurrant-jelly stool**, sausage mass.',
    '**Red flags:** bile-stained or blood-stained vomit, blood in stool, severe dehydration/shock, lethargy or a tense/tender abdomen — contrast the medical vomiting differential → [[fcp1-nausea-vomiting]].',
  ],

  mechanism: {
    title: 'Assess hydration, then find the cause',
    steps: [
      { id: 's1', label: 'Grade dehydration (alertness, eyes, turgor, cap refill, urine)', emphasis: 'key' },
      { id: 's2', label: 'Most acute cases = viral gastroenteritis → rehydrate', emphasis: 'key' },
      { id: 's3', label: 'Bilious vomiting in an infant → malrotation/volvulus', emphasis: 'danger' },
      { id: 's4', label: 'Non-bilious projectile at 3–6 wk → pyloric stenosis', emphasis: 'key' },
      { id: 's5', label: 'Colic + redcurrant stool 6–36 mo → intussusception', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sunken eyes, dry mucosa, reduced skin turgor, prolonged capillary refill', mechanism: 'Grades dehydration severity', significance: 'key' },
    { sign: 'Visible gastric peristalsis and a palpable olive after a test feed', mechanism: 'Hypertrophic pyloric stenosis', significance: 'key' },
    { sign: 'Sausage-shaped right-sided mass, intermittently drawing up the legs', mechanism: 'Intussusception', significance: 'key' },
    { sign: 'Lethargy, cool peripheries, tachycardia, weak pulses', mechanism: 'Hypovolaemic shock from fluid loss', significance: 'key' },
  ],

  investigations: [
    { clue: 'Non-bilious projectile vomiting, hypochloraemic hypokalaemic alkalosis', meaning: 'Pyloric stenosis — ultrasound; correct electrolytes before surgery' },
    { clue: 'Colicky infant, redcurrant-jelly stool, sausage mass', meaning: 'Intussusception — ultrasound (target sign); air/contrast enema reduction' },
    { clue: 'Bile-stained vomiting in a neonate or infant', meaning: 'Urgent upper GI contrast/surgery for malrotation with volvulus' },
    { clue: 'Watery diarrhoea, no blood, contact history', meaning: 'Viral gastroenteritis — clinical; stool studies only if bloody or prolonged' },
  ],

  treatment: [
    { logic: 'Rehydration is the treatment', detail: 'Oral rehydration solution for mild-to-moderate loss; IV boluses for shock or severe dehydration; resume feeding early; zinc where indicated.' },
    { logic: 'Surgical causes bypass the ward', detail: 'Pyloromyotomy (after electrolyte correction) for pyloric stenosis; enema reduction or surgery for intussusception; laparotomy for volvulus.' },
    { logic: 'Antibiotics are the exception, not the rule', detail: 'Reserve them for specific bacterial/dysenteric or systemically unwell cases; most acute gastroenteritis is viral.' },
  ],

  mnemonics: [
    { hook: 'Age dates the surgery: 3–6 weeks pyloric (non-bilious), 6–36 months intussusception; bilious = volvulus at any age', expansion: ['Assess hydration first', 'ORS before IV', 'Green vomit = emergency'] },
  ],

  traps: [
    {
      questionCategory: 'Bilious vomiting',
      wrongInstinct: 'Green vomiting in an infant is just severe gastroenteritis',
      rightAnswer: 'Bilious (bile-stained) vomiting in an infant is malrotation with midgut volvulus until excluded — urgent surgical referral and contrast study',
      why: 'Volvulus can infarct the entire midgut within hours; it cannot be dismissed as gastroenteritis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 4-week-old boy has one week of forceful non-bilious vomiting after feeds, remains hungry, and has an olive-like epigastric mass. Blood gas shows a hypochloraemic hypokalaemic metabolic alkalosis. The diagnosis is:',
      options: [
        { id: 'a', text: 'Intussusception' },
        { id: 'b', text: 'Hypertrophic pyloric stenosis' },
        { id: 'c', text: 'Viral gastroenteritis' },
        { id: 'd', text: 'Malrotation with volvulus' },
      ],
      answerId: 'b',
      explanation: 'Non-bilious projectile vomiting at 3–6 weeks with an olive mass and a hypochloraemic hypokalaemic alkalosis is pyloric stenosis.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'An 18-month-old with viral gastroenteritis has some dehydration but is alert and able to drink. The most appropriate initial management is:',
      options: [
        { id: 'a', text: 'Intravenous antibiotics' },
        { id: 'b', text: 'Oral rehydration solution' },
        { id: 'c', text: 'Loperamide' },
        { id: 'd', text: 'Nil by mouth and observe' },
      ],
      answerId: 'b',
      explanation: 'For mild-to-moderate dehydration in gastroenteritis, oral rehydration solution is first-line; antibiotics and antimotility agents are not routine.',
      tests: 'treatment',
    },
  ],
};

export default fcp1PediatricVomitingDiarrhea;
