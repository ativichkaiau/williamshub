import type { Lecture } from '../../lib/types';

export const acuteChronicPancreatitis: Lecture = {
  id: 'acute-chronic-pancreatitis',
  title: 'Acute & Chronic Pancreatitis',
  system: 'gi',
  source: 'L4 — Pathology of the Exocrine Pancreas',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L4 Pancreas Pathology' },
    { kind: 'disease', label: 'Pancreatitis' },
    { kind: 'exam', label: 'Gallstones & alcohol' },
  ],

  highYield: [
    '**Acute pancreatitis is inflammation from inappropriate INTRAPANCREATIC activation of digestive enzymes → autodigestion of the gland.** The two dominant causes are **GALLSTONES and ALCOHOL** (mnemonic "I GET SMASHED"). It presents with **severe epigastric pain radiating to the back, nausea/vomiting, and a raised serum amylase and (more specific) lipase.**',
    '**Pathology ranges from interstitial oedema to haemorrhagic/necrotising pancreatitis with FAT NECROSIS (calcium soaps → hypocalcaemia).** Severe disease causes retroperitoneal haemorrhage — **Grey Turner (flank) and Cullen (periumbilical) signs** — and systemic complications (SIRS, ARDS, shock). Severity is scored (e.g. **Ranson criteria, APACHE**).',
    '**Complications: pancreatic PSEUDOCYST (a collection of enzyme-rich fluid walled by granulation tissue, no epithelial lining — forms weeks later), abscess, necrosis (may become infected), and systemic organ failure.** A pseudocyst can cause a persistent mass, pain or raised amylase after an attack.',
    '**Chronic pancreatitis is irreversible fibrosis and loss of pancreatic parenchyma from repeated injury — most often chronic ALCOHOL use.** It causes **chronic epigastric pain, and EXOCRINE insufficiency (malabsorption, steatorrhoea, fat-soluble vitamin deficiency) and ENDOCRINE insufficiency (diabetes)**; imaging shows **pancreatic calcifications** and a dilated, "chain-of-lakes" duct.',
    '**The key contrast is acute (potentially reversible, enzyme-driven autodigestion, amylase/lipase↑) vs chronic (irreversible fibrosis, exocrine/endocrine failure, calcification).** Chronic pancreatitis is also a risk factor for **pancreatic ductal adenocarcinoma** ([[pancreatic-carcinoma]]), which it can be hard to distinguish from radiologically.',
  ],

  mechanism: {
    title: 'Enzyme autodigestion (acute, gallstones/alcohol) vs fibrosis (chronic)',
    steps: [
      { id: 's1', label: 'Acute: intrapancreatic enzyme activation → autodigestion', emphasis: 'key' },
      { id: 's2', label: 'Causes: gallstones + alcohol dominate ("I GET SMASHED")', emphasis: 'key' },
      { id: 's3', label: 'Fat necrosis → hypocalcaemia; Grey Turner/Cullen; amylase/lipase↑', emphasis: 'key' },
      { id: 's4', label: 'Complication: pseudocyst (no epithelial lining), necrosis, organ failure', emphasis: 'danger' },
      { id: 's5', label: 'Chronic: fibrosis/calcification → exocrine (steatorrhoea) + endocrine (DM) loss', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Severe epigastric pain radiating to the back + raised lipase', mechanism: 'Acute pancreatitis', significance: 'key' },
    { sign: 'Flank (Grey Turner) / periumbilical (Cullen) bruising', mechanism: 'Haemorrhagic (necrotising) pancreatitis', significance: 'key' },
    { sign: 'Hypocalcaemia after an attack', mechanism: 'Fat necrosis (calcium soap formation)', significance: 'supportive' },
    { sign: 'Persistent mass + raised amylase weeks later', mechanism: 'Pancreatic pseudocyst', significance: 'supportive' },
    { sign: 'Steatorrhoea, weight loss, diabetes + pancreatic calcification', mechanism: 'Chronic pancreatitis (exocrine + endocrine failure)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The two commonest causes of acute pancreatitis', meaning: 'Gallstones and alcohol' },
    { clue: 'The more specific enzyme for pancreatitis', meaning: 'Serum lipase' },
    { clue: 'The fluid collection lacking an epithelial lining', meaning: 'Pancreatic pseudocyst' },
    { clue: 'The consequences of chronic pancreatic parenchymal loss', meaning: 'Exocrine (malabsorption) and endocrine (diabetes) insufficiency' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Acute pancreatitis is managed supportively (fluids, analgesia, treat the cause — remove gallstones/stop alcohol) with attention to necrosis/organ failure; chronic pancreatitis needs pain control, pancreatic enzyme replacement and diabetes management. Fat-soluble vitamin deficiency links to [[fat-soluble-vitamins]]. Chronic pancreatitis is a risk factor for, and mimics, [[pancreatic-carcinoma]]; gallstones also cause biliary obstruction.' },
  ],

  mnemonics: [
    { hook: 'Acute causes "I GET SMASHED": Idiopathic, Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion, Hyper-Ca/TG, ERCP, Drugs', expansion: ['Gallstones + alcohol dominate', 'Lipase > amylase for specificity'] },
    { hook: 'Chronic = "fibrosis + Calcification + Cachexia + Ca/insulin loss"', expansion: ['Steatorrhoea (exocrine)', 'Diabetes (endocrine)', 'Chain-of-lakes duct'] },
  ],

  traps: [
    {
      questionCategory: 'Nature of a pancreatic pseudocyst',
      wrongInstinct: 'A pancreatic pseudocyst is a true cyst lined by epithelium',
      rightAnswer: 'A pancreatic PSEUDOcyst is a collection of enzyme-rich fluid walled off by granulation tissue/fibrosis WITHOUT an epithelial lining — the "pseudo" denotes the absent epithelium; it typically forms weeks after an attack',
      why: 'The lack of an epithelial lining defines it as a pseudocyst and affects management (many resolve; persistent/symptomatic ones may need drainage) — distinguishing it from true epithelial cysts and cystic neoplasms.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient presents with severe epigastric pain radiating to the back and a serum lipase five times the upper limit of normal. The two most likely underlying causes are:',
      options: [
        { id: 'a', text: 'Gallstones and alcohol' },
        { id: 'b', text: 'Hypertension and diabetes' },
        { id: 'c', text: 'Smoking and obesity' },
        { id: 'd', text: 'Viral hepatitis and NSAIDs' },
      ],
      answerId: 'a',
      explanation: 'Gallstones and alcohol are the two dominant causes of acute pancreatitis. The clinical picture with a markedly raised lipase (more specific than amylase) supports the diagnosis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Chronic pancreatitis characteristically leads to which combination of deficiencies?',
      options: [
        { id: 'a', text: 'Only endocrine (diabetes)' },
        { id: 'b', text: 'Exocrine insufficiency (malabsorption/steatorrhoea) and endocrine insufficiency (diabetes)' },
        { id: 'c', text: 'Only exocrine (steatorrhoea)' },
        { id: 'd', text: 'Neither; function is preserved' },
      ],
      answerId: 'b',
      explanation: 'Progressive fibrosis destroys both acinar (exocrine) tissue, causing malabsorption and steatorrhoea, and islet (endocrine) tissue, causing diabetes — the dual insufficiency of chronic pancreatitis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default acuteChronicPancreatitis;
