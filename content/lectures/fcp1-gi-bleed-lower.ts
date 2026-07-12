import type { Lecture } from '../../lib/types';

export const fcp1GiBleedLower: Lecture = {
  id: 'fcp1-gi-bleed-lower',
  title: 'Lower GI Bleeding',
  system: 'clinical',
  source: 'L17 — Gastrointestinal Hemorrhage',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L17 GI Hemorrhage' },
    { kind: 'disease', label: 'Diverticular · angiodysplasia · colitis' },
    { kind: 'mechanism', label: 'Distal to ligament of Treitz' },
    { kind: 'investigation', label: 'Colonoscopy · CT angiography' },
  ],

  highYield: [
    '**Lower GI bleeding** arises **distal to the ligament of Treitz** and usually presents with **haematochezia** (fresh or dark red blood per rectum). Most lower GI bleeds stop spontaneously. Manage alongside [[fcp1-gi-bleed-management]].',
    'Commonest causes: **diverticular disease** (commonest, painless, large-volume), **angiodysplasia** (elderly, recurrent), **colitis** (infective, ischaemic, IBD), **colorectal cancer**, and **haemorrhoids or anal fissure** (bright blood on the surface or paper).',
    'A brisk **upper** GI bleed can present as haematochezia in ~10-15% and is usually **haemodynamically unstable** — always exclude an upper source (raised urea, consider upper endoscopy) before attributing bleeding to a lower cause. Contrast [[fcp1-gi-bleed-upper]].',
    'Blood **mixed through** the stool with a change in bowel habit or tenesmus suggests **colitis or cancer**; blood only on the **surface or paper** suggests an **anorectal** source. Occult loss causing iron-deficiency anaemia links to [[fcp1-anemia-microcytic]] and [[fcp1-constipation-bowel-habit]].',
    'Painless large-volume haematochezia in an older adult is typically **diverticular or angiodysplastic**; painful bleeding with diarrhoea suggests **colitis**. Colonoscopy is the key investigation once the patient is stable.',
  ],

  mechanism: {
    title: 'Localise the bleed and exclude a brisk upper source',
    steps: [
      { id: 's1', label: 'Source distal to the ligament of Treitz', emphasis: 'key' },
      { id: 's2', label: 'Haematochezia (fresh or dark red per rectum)', emphasis: 'key' },
      { id: 's3', label: 'Unstable + haematochezia → exclude brisk upper bleed', emphasis: 'danger' },
      { id: 's4', label: 'Pattern: painless bulk vs bloody diarrhoea vs surface blood', emphasis: 'key' },
      { id: 's5', label: 'Colonoscopy (or CT angiography if brisk) once resuscitated', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Bright or dark red blood per rectum, with clots', mechanism: 'Distal colonic or anorectal bleeding', significance: 'key' },
    { sign: 'Haemodynamic instability with haematochezia', mechanism: 'Possible brisk upper GI bleed presenting as fresh PR blood', significance: 'key' },
    { sign: 'Blood mixed with stool, tenesmus and mucus', mechanism: 'Colitis or colorectal cancer', significance: 'supportive' },
    { sign: 'Haemorrhoids or a fissure on inspection or proctoscopy', mechanism: 'Anorectal source; blood on the surface or paper', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Urea-to-creatinine ratio normal', meaning: 'Argues against an upper source (unlike upper GI bleeding)' },
    { clue: 'Colonoscopy after bowel preparation', meaning: 'Diagnostic and therapeutic for most lower GI bleeds' },
    { clue: 'CT angiography in active brisk bleeding', meaning: 'Localises the bleeding point for embolisation when scope is not feasible' },
    { clue: 'FBC and ferritin', meaning: 'Iron-deficiency anaemia signals chronic occult loss (consider malignancy)' },
  ],

  treatment: [
    { logic: 'Resuscitate and monitor — most lower GI bleeds self-limit', detail: 'IV access and fluids or blood as needed; shared pathway in [[fcp1-gi-bleed-management]].' },
    { logic: 'Colonoscopy for diagnosis and therapy once stable', detail: 'Endoscopic haemostasis; CT angiography and embolisation for ongoing brisk bleeding; surgery rarely.' },
  ],

  mnemonics: [
    { hook: 'Down low = haematochezia; but unstable red PR blood = rule out a fast upper bleed', expansion: ['Diverticular and angiodysplasia are painless and heavy', 'Surface-only blood = anorectal'] },
  ],

  traps: [
    {
      questionCategory: 'Haematochezia',
      wrongInstinct: 'Assume all fresh rectal bleeding is a lower GI source',
      rightAnswer: 'In an unstable patient, exclude a brisk upper GI bleed first (it can present as haematochezia)',
      why: 'A rapid upper bleed transits quickly and appears as fresh PR blood with shock.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 72-year-old passes a large volume of painless dark-red blood per rectum and is haemodynamically stable. The most likely cause is:',
      options: [
        { id: 'a', text: 'Haemorrhoids' },
        { id: 'b', text: 'Diverticular bleeding' },
        { id: 'c', text: 'Anal fissure' },
        { id: 'd', text: 'Peptic ulcer' },
      ],
      answerId: 'b',
      explanation: 'Painless, large-volume haematochezia in an older adult is most commonly diverticular; it usually stops spontaneously and is investigated by colonoscopy.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A patient with fresh rectal bleeding is hypotensive and tachycardic, with urea 20 mmol/L and a normal creatinine. The most appropriate immediate concern is:',
      options: [
        { id: 'a', text: 'A purely anorectal source' },
        { id: 'b', text: 'A brisk upper GI bleed presenting as haematochezia' },
        { id: 'c', text: 'Chronic haemorrhoidal bleeding' },
        { id: 'd', text: 'Simple dehydration' },
      ],
      answerId: 'b',
      explanation: 'Instability plus a raised urea points to a rapid upper GI bleed that can present as fresh PR blood, so an upper source must be excluded.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1GiBleedLower;
