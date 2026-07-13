import type { Lecture } from '../../lib/types';

export const ibsFunctionalGiDisorders: Lecture = {
  id: 'ibs-functional-gi-disorders',
  title: 'IBS & Functional GI Disorders',
  system: 'gi',
  source: 'L5 — Drugs in GI Disorders & ORS',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L5 GI Drugs & ORS' },
    { kind: 'disease', label: 'Irritable bowel syndrome' },
    { kind: 'exam', label: 'Functional vs organic' },
  ],

  highYield: [
    '**Functional GI disorders are chronic symptoms WITHOUT a structural or biochemical abnormality — the gut looks normal but functions abnormally (a disorder of gut–brain interaction).** Irritable bowel syndrome (IBS) and functional dyspepsia are the commonest; they are diagnosed clinically (e.g. Rome criteria) once ALARM features are excluded.',
    '**IBS = recurrent ABDOMINAL PAIN related to defecation, with a change in stool frequency or form**, subtyped as IBS-D (diarrhoea), IBS-C (constipation) or mixed. The mechanism involves **visceral HYPERSENSITIVITY, altered motility, gut–brain dysregulation and the microbiome**; it is strongly associated with stress and can follow an infection (post-infectious IBS).',
    'IBS is a diagnosis of a POSITIVE symptom pattern PLUS the ABSENCE of red flags. ALARM features that mandate investigation (to exclude organic disease) include: age >50 with new symptoms, weight loss, rectal BLEEDING/anaemia, nocturnal or progressive symptoms, a family history of colorectal cancer/IBD, and a palpable mass.',
    'Management is symptom-directed and multimodal: dietary changes (e.g. a low-FODMAP diet, fibre for constipation), antispasmodics for cramping, laxatives for IBS-C or loperamide for IBS-D ([[laxatives-antidiarrheals-ors]]), and neuromodulators (low-dose tricyclics) plus psychological therapies for the gut–brain component. There is no cure, but symptoms are manageable.',
    '**The key clinical skill is separating a FUNCTIONAL disorder from ORGANIC disease: IBS is common and benign, but the alarm features must be actively sought and, if present, investigated (colonoscopy, coeliac serology, inflammatory markers) to exclude cancer, IBD or malabsorption** ([[colorectal-polyps-carcinoma]], [[inflammatory-bowel-disease]]).',
  ],

  mechanism: {
    title: 'Symptoms without structural disease (gut–brain); diagnose IBS + exclude alarm features',
    steps: [
      { id: 's1', label: 'Functional = chronic symptoms, normal structure (gut–brain disorder)', emphasis: 'key' },
      { id: 's2', label: 'IBS = pain related to defecation + altered stool (D/C/mixed)', emphasis: 'key' },
      { id: 's3', label: 'Mechanism: visceral hypersensitivity, motility, microbiome, stress', emphasis: 'key' },
      { id: 's4', label: 'Diagnose on positive pattern + ABSENCE of alarm features', emphasis: 'danger' },
      { id: 's5', label: 'Treat: diet (low-FODMAP), antispasmodics, laxative/loperamide, neuromodulators' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent abdominal pain relieved by defecation + altered stool', mechanism: 'Irritable bowel syndrome', significance: 'key' },
    { sign: 'Normal investigations despite chronic symptoms', mechanism: 'Functional (not organic) disorder', significance: 'key' },
    { sign: 'Weight loss, rectal bleeding, anaemia or nocturnal symptoms', mechanism: 'ALARM features — investigate for organic disease', significance: 'key' },
    { sign: 'Symptoms beginning after gastroenteritis', mechanism: 'Post-infectious IBS', significance: 'supportive' },
    { sign: 'Improvement with a low-FODMAP diet', mechanism: 'Dietary trigger reduction in IBS', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The defining symptom of IBS', meaning: 'Abdominal pain related to defecation with altered stool frequency/form' },
    { clue: 'What must be absent to diagnose IBS clinically', meaning: 'Alarm/red-flag features' },
    { clue: 'The alarm features prompting investigation', meaning: 'Age >50, weight loss, bleeding/anaemia, nocturnal/progressive symptoms, family history' },
    { clue: 'A dietary intervention for IBS', meaning: 'The low-FODMAP diet' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'IBS is common and benign but must be separated from organic disease by actively excluding alarm features (which point to cancer — [[colorectal-polyps-carcinoma]], IBD — [[inflammatory-bowel-disease]], or coeliac). Management uses the GI drugs of [[laxatives-antidiarrheals-ors]] plus diet and neuromodulators; over-investigation of clear-cut IBS and under-investigation of red flags are both errors.' },
  ],

  mnemonics: [
    { hook: 'IBS = "pain + altered stool, normal tests" (functional gut–brain)', expansion: ['Subtypes: IBS-D, IBS-C, mixed', 'Post-infectious IBS'] },
    { hook: 'ALARM before calling it IBS: "Age >50, Loss of weight, Anaemia/bleeding, Rectal/nocturnal, Mass/family history"', expansion: ['Red flags → investigate', 'Exclude cancer/IBD/coeliac'] },
  ],

  traps: [
    {
      questionCategory: 'Diagnosing IBS safely',
      wrongInstinct: 'Chronic abdominal pain and altered bowel habit can be labelled IBS without further thought',
      rightAnswer: 'IBS is a clinical diagnosis that requires the ABSENCE of alarm features (weight loss, rectal bleeding/anaemia, age >50 with new symptoms, nocturnal/progressive symptoms, family history) — these red flags mandate investigation to exclude organic disease first',
      why: 'Labelling everyone with these symptoms as IBS risks missing colorectal cancer, IBD or coeliac disease; the safe diagnosis depends on a positive pattern together with excluded red flags.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Irritable bowel syndrome is best characterised as:',
      options: [
        { id: 'a', text: 'A structural bowel disease with mucosal ulceration' },
        { id: 'b', text: 'A functional gut–brain disorder with recurrent pain and altered bowel habit but normal structure' },
        { id: 'c', text: 'A premalignant condition' },
        { id: 'd', text: 'An acute infection' },
      ],
      answerId: 'b',
      explanation: 'IBS is a functional disorder of gut–brain interaction: recurrent abdominal pain related to defecation with altered stool frequency/form, in the absence of structural or biochemical abnormality. It is diagnosed clinically once alarm features are excluded.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which feature would NOT fit a diagnosis of IBS and should prompt investigation for organic disease?',
      options: [
        { id: 'a', text: 'Pain relieved by defecation' },
        { id: 'b', text: 'Rectal bleeding with weight loss and anaemia' },
        { id: 'c', text: 'Bloating' },
        { id: 'd', text: 'Alternating diarrhoea and constipation' },
      ],
      answerId: 'b',
      explanation: 'Rectal bleeding, weight loss and anaemia are alarm ("red flag") features inconsistent with IBS; they mandate investigation (e.g. colonoscopy) to exclude colorectal cancer, inflammatory bowel disease or other organic pathology.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default ibsFunctionalGiDisorders;
