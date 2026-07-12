import type { Lecture } from '../../lib/types';

export const fcp1DyspepsiaReflux: Lecture = {
  id: 'fcp1-dyspepsia-reflux',
  title: 'Dyspepsia, Reflux & GERD',
  system: 'clinical',
  source: 'L15 — Dyspepsia, Reflux & Dysphagia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L15 Dyspepsia, Reflux & Dysphagia' },
    { kind: 'disease', label: 'GERD · peptic ulcer · H. pylori' },
    { kind: 'mechanism', label: 'Functional vs organic' },
    { kind: 'investigation', label: 'ALARM → endoscopy · H. pylori test' },
  ],

  highYield: [
    '**Dyspepsia** is epigastric pain or discomfort with **postprandial fullness, early satiety or burning**; **GERD** is defined by **heartburn and acid regurgitation** from reflux of gastric contents.',
    'Most dyspepsia is **functional (no organic cause)**, but organic causes must be excluded: **peptic ulcer disease**, **reflux oesophagitis**, **gastritis**, **Helicobacter pylori**, and **gastric malignancy**.',
    '**ALARM features** mandate **urgent endoscopy**: **A**naemia, **L**oss of weight, **A**norexia, **R**ecent-onset progressive symptoms, **M**elaena or haematemesis ([[fcp1-gi-bleed-upper]]) — plus **dysphagia** ([[fcp1-dysphagia]]) and **new dyspepsia over age 55**.',
    'In uncomplicated dyspepsia without alarm features, use a **test-and-treat** strategy for **H. pylori** (**urea breath test or stool antigen**) and/or a **PPI trial**, rather than immediate endoscopy.',
    'GERD can mimic cardiac pain — **exclude a cardiac cause first** ([[fcp1-chest-pain-differential]]); untreated reflux may progress to **oesophagitis, stricture and Barrett oesophagus**, a risk factor for adenocarcinoma.',
  ],

  mechanism: {
    title: 'Sort functional from organic, screen for alarm',
    steps: [
      { id: 's1', label: 'Symptoms: epigastric pain, heartburn, regurgitation', emphasis: 'key' },
      { id: 's2', label: 'Screen ALARM red-flag features', emphasis: 'danger' },
      { id: 's3', label: 'Alarm or new onset over age 55 → endoscopy', emphasis: 'key' },
      { id: 's4', label: 'No alarm → test-and-treat H. pylori / PPI trial', emphasis: 'key' },
      { id: 's5', label: 'Persistent reflux → oesophagitis, stricture, Barrett' },
    ],
  },

  examFindings: [
    { sign: 'Burning retrosternal pain and regurgitation after meals or lying', mechanism: 'Gastro-oesophageal reflux', significance: 'key' },
    { sign: 'Epigastric tenderness with pain related to meals', mechanism: 'Peptic ulcer disease or gastritis', significance: 'supportive' },
    { sign: 'Weight loss, anaemia and an epigastric mass', mechanism: 'Alarm features — possible gastric malignancy', significance: 'key' },
    { sign: 'Progressive difficulty swallowing', mechanism: 'Alarm feature — oesophageal stricture or cancer', significance: 'key' },
  ],

  investigations: [
    { clue: 'Dyspepsia with any ALARM feature or new onset over age 55', meaning: 'Upper GI endoscopy' },
    { clue: 'Uncomplicated dyspepsia with no alarm features', meaning: 'Test-and-treat H. pylori (urea breath test / stool antigen) or a PPI trial' },
    { clue: 'Positive urea breath test or stool antigen', meaning: 'H. pylori infection → eradication therapy' },
    { clue: 'Barrett oesophagus seen at endoscopy', meaning: 'Metaplasia — surveillance for adenocarcinoma' },
  ],

  treatment: [
    { logic: 'Lifestyle measures plus a PPI for reflux and dyspepsia', detail: 'Weight loss, smaller meals, avoiding late meals and triggers, plus a proton pump inhibitor for symptom control.' },
    { logic: 'Eradicate H. pylori when positive', detail: 'Combination therapy (a PPI with two antibiotics) heals ulcers and reduces recurrence.' },
    { logic: 'Endoscope those with alarm features', detail: 'Do not treat symptomatically through weight loss, anaemia, dysphagia, bleeding or new dyspepsia over age 55 — scope to exclude malignancy.' },
  ],

  mnemonics: [
    { hook: 'ALARM: Anaemia, Loss of weight, Anorexia, Recent progressive, Melaena — plus dysphagia or age over 55 → scope', expansion: ['No alarm: test-and-treat H. pylori or PPI trial', 'Barrett oesophagus raises adenocarcinoma risk'] },
  ],

  traps: [
    {
      questionCategory: 'When to endoscope dyspepsia',
      wrongInstinct: 'Give everyone with dyspepsia a long PPI trial before any endoscopy',
      rightAnswer: 'Alarm features (weight loss, anaemia, dysphagia, bleeding, or new onset over 55) go straight to endoscopy',
      why: 'A PPI can mask and delay a gastric or oesophageal cancer; alarm features change the pathway.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 60-year-old reports new dyspepsia for 6 weeks with weight loss and iron-deficiency anaemia. The best next step is:',
      options: [
        { id: 'a', text: 'An 8-week PPI trial then review' },
        { id: 'b', text: 'Upper GI endoscopy' },
        { id: 'c', text: 'Reassurance and antacids' },
        { id: 'd', text: 'H. pylori breath test alone' },
      ],
      answerId: 'b',
      explanation: 'Weight loss, anaemia and new dyspepsia over age 55 are ALARM features that mandate urgent endoscopy to exclude gastric malignancy.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 30-year-old has epigastric burning with no alarm features. A H. pylori stool antigen test is positive. The best management is:',
      options: [
        { id: 'a', text: 'Urgent endoscopy' },
        { id: 'b', text: 'H. pylori eradication (a PPI plus two antibiotics)' },
        { id: 'c', text: 'Surgery' },
        { id: 'd', text: 'Long-term oral steroids' },
      ],
      answerId: 'b',
      explanation: 'In uncomplicated dyspepsia without alarm features, a positive H. pylori test is treated with eradication therapy rather than proceeding to endoscopy.',
      tests: 'treatment',
    },
  ],
};

export default fcp1DyspepsiaReflux;
