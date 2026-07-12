import type { Lecture } from '../../lib/types';

export const fcp1AbdominalPainApproach: Lecture = {
  id: 'fcp1-abdominal-pain-approach',
  title: 'Approach to Abdominal Pain',
  system: 'clinical',
  source: 'L14 — Abdominal Pain, Nausea & Vomiting',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L14 Abdominal Pain, N&V' },
    { kind: 'disease', label: 'Appendicitis · biliary · renal colic' },
    { kind: 'mechanism', label: 'Visceral · parietal · referred' },
    { kind: 'exam', label: 'Region-based localisation' },
  ],

  highYield: [
    'Three pain types: **visceral** (dull, poorly localised, midline — from stretch of a hollow organ), **parietal/somatic** (sharp, well-localised, worse on movement — peritoneal irritation), and **referred** (felt away from the source, such as diaphragm to shoulder tip).',
    'Visceral pain localises by **embryological gut division**: **foregut → epigastric**, **midgut → periumbilical**, **hindgut → suprapubic** — which explains the classic **periumbilical-to-right-iliac-fossa migration of appendicitis**.',
    'Map pain to region: **RUQ** biliary/hepatic, **epigastric** peptic, pancreatic or **cardiac** ([[fcp1-chest-pain-differential]]), **RLQ** appendix/ovarian/ectopic, **LLQ** diverticulitis, **flank** renal or ureteric colic, **suprapubic** bladder or uterine.',
    'Take a **SOCRATES** history and always screen the **danger signs** — sudden severe onset, rigidity or guarding, shock, or a pulsatile mass — that flag an **acute abdomen** ([[fcp1-abdominal-pain-acute-abdomen]]).',
    'In any woman of reproductive age, **exclude pregnancy and ectopic** ([[fcp1-pelvic-pain-approach]]); associated **nausea and vomiting** ([[fcp1-nausea-vomiting]]) and bowel or urinary change refine the differential.',
  ],

  mechanism: {
    title: 'From pain type and site to the organ',
    steps: [
      { id: 's1', label: 'Visceral: dull, midline, from hollow-organ stretch', emphasis: 'key' },
      { id: 's2', label: 'Foregut/midgut/hindgut → epigastric/periumbilical/suprapubic', emphasis: 'key' },
      { id: 's3', label: 'Inflammation reaches peritoneum → sharp, localised parietal pain', emphasis: 'key' },
      { id: 's4', label: 'Referred pain misleads (diaphragm→shoulder, biliary→scapula)' },
      { id: 's5', label: 'Screen red flags → acute abdomen pathway', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Periumbilical pain migrating to the right iliac fossa', mechanism: 'Visceral midgut pain, then parietal peritoneal irritation — appendicitis', significance: 'key' },
    { sign: 'Guarding, rigidity and rebound tenderness', mechanism: 'Parietal peritoneal inflammation (peritonitis)', significance: 'key' },
    { sign: 'Colicky flank-to-groin pain with a restless patient', mechanism: 'Ureteric colic — visceral pain without a peritoneal sign', significance: 'supportive' },
    { sign: 'Epigastric pain radiating through to the back', mechanism: 'Pancreatitis or a posterior peptic ulcer', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Woman of reproductive age with lower abdominal pain', meaning: 'Urine or serum β-hCG first — exclude ectopic pregnancy' },
    { clue: 'RUQ pain, positive Murphy sign, gallstones on ultrasound', meaning: 'Acute cholecystitis' },
    { clue: 'Severe epigastric pain with raised lipase or amylase', meaning: 'Acute pancreatitis' },
    { clue: 'Diffuse pain out of proportion to the exam with lactic acidosis', meaning: 'Suspect mesenteric ischaemia — an acute abdomen' },
  ],

  treatment: [
    { logic: 'Decide medical versus surgical abdomen early', detail: 'Analgesia does not mask a surgical abdomen; the priority is identifying peritonism, obstruction, ischaemia or a leaking aneurysm that needs the surgeon.' },
    { logic: 'Resuscitate and re-examine', detail: 'Fluids, analgesia, antiemetics and serial examination; a changing or worsening abdomen is more informative than a single snapshot.' },
  ],

  mnemonics: [
    { hook: 'Gut division sets the site: fore-epigastric, mid-umbilical, hind-suprapubic', expansion: ['Visceral is dull and midline, parietal is sharp and localised', 'Reproductive-age woman: check β-hCG'] },
  ],

  traps: [
    {
      questionCategory: 'Localisation of early appendicitis',
      wrongInstinct: 'Early central abdominal pain is non-specific and benign',
      rightAnswer: 'Early periumbilical visceral pain that migrates to the right iliac fossa is classic appendicitis',
      why: 'Understanding the visceral-to-parietal shift catches appendicitis before frank peritonitis develops.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The classic migration of appendicitis pain from the periumbilical region to the right iliac fossa is explained by:',
      options: [
        { id: 'a', text: 'Referred pain from the diaphragm' },
        { id: 'b', text: 'A shift from visceral midgut pain to localised parietal peritoneal irritation' },
        { id: 'c', text: 'Ureteric colic' },
        { id: 'd', text: 'Somatic pain becoming visceral pain' },
      ],
      answerId: 'b',
      explanation: 'Early visceral pain from the inflamed appendix (a midgut structure) is felt periumbilically; as inflammation irritates the parietal peritoneum, sharp localised right-iliac-fossa pain develops.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 28-year-old woman presents with right iliac fossa pain. The single most important initial investigation is:',
      options: [
        { id: 'a', text: 'Plain abdominal X-ray' },
        { id: 'b', text: 'Pregnancy test (β-hCG)' },
        { id: 'c', text: 'Serum amylase' },
        { id: 'd', text: 'Colonoscopy' },
      ],
      answerId: 'b',
      explanation: 'In any woman of reproductive age with lower abdominal pain, an ectopic pregnancy must be excluded first with a β-hCG before other workup.',
      tests: 'investigation',
    },
  ],
};

export default fcp1AbdominalPainApproach;
