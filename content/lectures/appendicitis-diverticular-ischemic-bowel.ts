import type { Lecture } from '../../lib/types';

export const appendicitisDiverticularIschemicBowel: Lecture = {
  id: 'appendicitis-diverticular-ischemic-bowel',
  title: 'Appendicitis, Diverticular & Ischaemic Bowel Disease',
  system: 'gi',
  source: 'L2 — Pathology of the Lower GI Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L2 Lower GI Pathology' },
    { kind: 'disease', label: 'Appendicitis' },
    { kind: 'exam', label: 'Diverticulitis' },
  ],

  highYield: [
    '**Acute appendicitis is the commonest acute surgical abdomen — obstruction of the appendiceal lumen (faecolith in adults, lymphoid hyperplasia in children) → raised pressure, ischaemia and bacterial invasion.** Classic course: **peri-umbilical pain migrating to McBurney\'s point (RIF)**, anorexia, low-grade fever; perforation → localised abscess or peritonitis.',
    '**Diverticulosis is the presence of false (pulsion) diverticula — outpouchings of mucosa/submucosa through the muscular wall at points of vascular entry — driven by a low-fibre diet and raised intraluminal pressure, mostly in the SIGMOID colon.** It is common and often asymptomatic but can cause **painless lower-GI bleeding**.',
    '**Diverticulitis is inflammation/micro-perforation of a diverticulum**, presenting like "left-sided appendicitis" — **LEFT lower quadrant pain, fever and raised inflammatory markers**; complications include abscess, perforation, fistula (colovesical) and stricture. Manage medically; complicated disease may need drainage/surgery.',
    '**Ischaemic bowel disease results from compromised blood supply**, characteristically at **watershed zones (splenic flexure, rectosigmoid)**. Acute mesenteric ischaemia (embolus/thrombus of the SMA) causes **pain out of proportion to examination** and is life-threatening; ischaemic colitis (hypoperfusion) causes crampy pain and bloody diarrhoea. Angiodysplasia (submucosal vascular malformations) is another cause of lower-GI bleeding.',
    '**The unifying reasoning is location + mechanism: RIF pain = appendicitis; LLQ pain + fever = diverticulitis; severe pain out of proportion = mesenteric ischaemia; painless bleeding = diverticulosis or angiodysplasia.** Haemorrhoids (dilated anal cushions) are a common benign cause of bright-red rectal bleeding to distinguish from sinister causes.',
  ],

  mechanism: {
    title: 'Luminal obstruction/inflammation/ischaemia by site → surgical vs medical',
    steps: [
      { id: 's1', label: 'Appendicitis: luminal obstruction → ischaemia → RIF pain (McBurney)', emphasis: 'key' },
      { id: 's2', label: 'Diverticulosis: false diverticula (sigmoid), low fibre → painless bleeding', emphasis: 'key' },
      { id: 's3', label: 'Diverticulitis: inflamed diverticulum → LLQ pain/fever ("left appendicitis")', emphasis: 'key' },
      { id: 's4', label: 'Ischaemia: watershed zones; acute mesenteric = pain out of proportion', emphasis: 'danger' },
      { id: 's5', label: 'Location + mechanism guides medical vs surgical management' },
    ],
  },

  examFindings: [
    { sign: 'Peri-umbilical pain migrating to McBurney\'s point + anorexia', mechanism: 'Acute appendicitis', significance: 'key' },
    { sign: 'Left lower quadrant pain, fever, raised inflammatory markers', mechanism: 'Acute diverticulitis', significance: 'key' },
    { sign: 'Severe abdominal pain out of proportion to a soft abdomen', mechanism: 'Acute mesenteric ischaemia (emergency)', significance: 'key' },
    { sign: 'Painless lower-GI bleeding', mechanism: 'Diverticulosis or angiodysplasia', significance: 'supportive' },
    { sign: 'Bright-red blood on the toilet paper/around stool', mechanism: 'Haemorrhoids (benign anal cushions)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The point of maximal tenderness in appendicitis', meaning: 'McBurney\'s point (right iliac fossa)' },
    { clue: 'The colonic segment most affected by diverticular disease', meaning: 'The sigmoid colon' },
    { clue: 'The presentation of acute mesenteric ischaemia', meaning: 'Pain out of proportion to physical findings' },
    { clue: 'The colonic regions vulnerable to ischaemia', meaning: 'Watershed zones (splenic flexure, rectosigmoid)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Appendicitis and complicated diverticulitis are surgical; uncomplicated diverticulitis is medical; acute mesenteric ischaemia is a time-critical emergency. Distinguish these acute presentations from the neoplasia of [[colorectal-polyps-carcinoma]] and the chronic inflammation of [[inflammatory-bowel-disease]]. Lower-GI bleeding sources (diverticulosis, angiodysplasia, haemorrhoids) must be triaged by severity.' },
  ],

  mnemonics: [
    { hook: 'Location: "RIF = appendicitis; LLQ = diverticulitis"', expansion: ['Diverticulitis = "left-sided appendicitis"', 'Sigmoid, low fibre'] },
    { hook: 'Mesenteric ischaemia = "pain out of proportion" (watershed zones)', expansion: ['SMA embolus/thrombus', 'Splenic flexure, rectosigmoid'] },
  ],

  traps: [
    {
      questionCategory: 'Recognising acute mesenteric ischaemia',
      wrongInstinct: 'A soft, non-tender abdomen rules out a serious intra-abdominal emergency',
      rightAnswer: 'Acute mesenteric ischaemia classically causes severe pain OUT OF PROPORTION to a relatively benign-feeling abdomen early on; a soft abdomen does NOT exclude it, and delay leads to bowel infarction',
      why: 'Early ischaemia produces intense visceral pain before peritoneal signs develop; waiting for a rigid abdomen means waiting for infarction — the mismatch itself is the red flag.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 60-year-old presents with left lower quadrant pain, fever and raised inflammatory markers; CT shows inflammation around sigmoid outpouchings. The diagnosis is:',
      options: [
        { id: 'a', text: 'Acute appendicitis' },
        { id: 'b', text: 'Acute diverticulitis' },
        { id: 'c', text: 'Ulcerative colitis' },
        { id: 'd', text: 'Colorectal carcinoma' },
      ],
      answerId: 'b',
      explanation: 'Inflammation of sigmoid diverticula causes left lower quadrant pain with fever ("left-sided appendicitis") — acute diverticulitis. Complications include abscess, perforation and fistula.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Acute mesenteric ischaemia is classically suggested by:',
      options: [
        { id: 'a', text: 'Mild pain with marked abdominal rigidity' },
        { id: 'b', text: 'Severe pain out of proportion to physical examination findings' },
        { id: 'c', text: 'Painless rectal bleeding only' },
        { id: 'd', text: 'Right iliac fossa tenderness' },
      ],
      answerId: 'b',
      explanation: 'Acute mesenteric ischaemia produces severe visceral pain that is out of proportion to the relatively unremarkable early abdominal examination; prompt recognition is vital to prevent bowel infarction.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default appendicitisDiverticularIschemicBowel;
