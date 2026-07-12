import type { Lecture } from '../../lib/types';

export const fcp1PediatricAbdominalPain: Lecture = {
  id: 'fcp1-pediatric-abdominal-pain',
  title: 'Pediatric Abdominal Pain',
  system: 'clinical',
  source: 'L20 — Common Pediatric GI Symptoms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L20 Pediatric GI' },
    { kind: 'disease', label: 'Appendicitis · intussusception · functional' },
    { kind: 'mechanism', label: 'Surgical vs medical' },
    { kind: 'exam', label: 'Peritonism · age clues' },
  ],

  highYield: [
    'Sort paediatric abdominal pain into **surgical** (needs intervention) vs **medical** vs **functional**; **age narrows the differential**, and extra-abdominal mimics (pneumonia, DKA, UTI, testicular torsion, group A strep) masquerade as belly pain → [[fcp1-pediatric-vomiting-diarrhea]].',
    '**Appendicitis** (commonest surgical cause after infancy): **periumbilical pain migrating to the right iliac fossa**, anorexia, vomiting after the pain, low fever, focal RIF tenderness/guarding — young children present atypically and perforate → [[fcp1-abdominal-pain-acute-abdomen]].',
    '**Intussusception** (6–36 months): episodic colic with drawing up of the legs, vomiting, a sausage mass and later **redcurrant-jelly stool**; ultrasound then air-enema reduction.',
    '**Cannot-miss by age:** malrotation/volvulus (bilious vomiting, infant) and **incarcerated hernia/testicular torsion** — always examine the groin and scrotum.',
    '**Functional abdominal pain:** recurrent, periumbilical, normal growth and exam, **no red flags** (weight loss, GI bleeding, night pain, fever, bilious vomiting) — a positive diagnosis, not just exclusion → contrast [[fcp1-abdominal-pain-approach]].',
  ],

  mechanism: {
    title: 'Surgical vs medical vs functional',
    steps: [
      { id: 's1', label: 'Peritonism (guarding, rebound, still child) → surgical', emphasis: 'danger' },
      { id: 's2', label: 'Migratory RIF pain + anorexia → appendicitis', emphasis: 'key' },
      { id: 's3', label: 'Colic + sausage mass 6–36 mo → intussusception', emphasis: 'key' },
      { id: 's4', label: 'Always check groin/scrotum + chest/urine', emphasis: 'key' },
      { id: 's5', label: 'Recurrent, well, no red flags → functional', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Right iliac fossa tenderness with guarding, worse on movement', mechanism: 'Appendicitis / peritoneal irritation', significance: 'key' },
    { sign: 'A child lying still with a rigid abdomen and rebound', mechanism: 'Peritonitis (perforation)', significance: 'key' },
    { sign: 'Tender groin or scrotal swelling', mechanism: 'Incarcerated hernia or testicular torsion', significance: 'key' },
    { sign: 'Soft abdomen, normal growth, periumbilical pain, well child', mechanism: 'Functional abdominal pain', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Migratory RIF pain, anorexia, focal tenderness', meaning: 'Appendicitis — often clinical; ultrasound if uncertain; surgical referral' },
    { clue: 'Episodic colic, vomiting, sausage mass', meaning: 'Intussusception — ultrasound (target sign) then air-enema reduction' },
    { clue: 'Abdominal pain with cough/fever or dysuria/glucosuria', meaning: 'Look outside the abdomen — CXR, urinalysis, glucose (pneumonia, UTI, DKA)' },
    { clue: 'Recurrent pain, normal exam and growth, no red flags', meaning: 'Functional pain — limited testing, safety-net and review' },
  ],

  treatment: [
    { logic: 'Resuscitate and refer the surgical abdomen', detail: 'IV fluids, analgesia, nil by mouth and early surgical review; appendicectomy for appendicitis; enema or surgery for intussusception.' },
    { logic: 'Do not miss the extra-abdominal mimic', detail: 'Examine the chest, groin and scrotum and dip the urine before labelling pain abdominal.' },
    { logic: 'Functional pain: positive diagnosis + safety-net', detail: 'Reassure, address triggers and review; return if red flags (bilious vomit, bleeding, weight loss, night pain) appear.' },
  ],

  mnemonics: [
    { hook: 'Well child + normal growth + no red flags = functional; still child + guarding = surgical', expansion: ['Age picks the surgical cause', 'Always examine the groin/scrotum', 'Bilious vomiting = emergency'] },
  ],

  traps: [
    {
      questionCategory: 'Extra-abdominal mimics',
      wrongInstinct: 'Abdominal pain always comes from the abdomen',
      rightAnswer: 'Lower-lobe pneumonia, DKA, UTI, streptococcal pharyngitis and testicular torsion all present as paediatric abdominal pain — examine the chest, urine and groin',
      why: 'Missing torsion or a mimic delays a time-critical diagnosis while the abdomen looks unremarkable.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 9-year-old has periumbilical pain that moved to the right iliac fossa over a day, with anorexia, one episode of vomiting and a low-grade fever, plus focal tenderness and guarding in the right iliac fossa. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Functional abdominal pain' },
        { id: 'b', text: 'Acute appendicitis' },
        { id: 'c', text: 'Intussusception' },
        { id: 'd', text: 'Gastroenteritis' },
      ],
      answerId: 'b',
      explanation: 'Migratory periumbilical-to-RIF pain with anorexia, vomiting after the pain and focal RIF tenderness/guarding is classic appendicitis.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 5-year-old is referred with “abdominal pain”. Which finding should most prompt you to look outside the abdomen for the source?',
      options: [
        { id: 'a', text: 'Periumbilical tenderness' },
        { id: 'b', text: 'Right lower-lobe crackles with fever' },
        { id: 'c', text: 'Loose stool for one day' },
        { id: 'd', text: 'Pain relieved by eating' },
      ],
      answerId: 'b',
      explanation: 'Lower-lobe pneumonia commonly refers pain to the abdomen; crackles and fever point to a chest source, so examine beyond the abdomen.',
      tests: 'exam',
    },
  ],
};

export default fcp1PediatricAbdominalPain;
