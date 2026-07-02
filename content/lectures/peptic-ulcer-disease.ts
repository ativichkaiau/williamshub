import type { Lecture } from '../../lib/types';

export const pepticUlcerDisease: Lecture = {
  id: 'peptic-ulcer-disease',
  title: 'Peptic Ulcer Disease',
  system: 'gi',
  source: 'L6 — Peptic Ulcer Disease',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L6 Peptic Ulcer' },
    { kind: 'disease', label: 'Peptic ulcer' },
    { kind: 'exam', label: 'H. pylori / NSAIDs' },
  ],

  highYield: [
    '**Peptic ulcers are mucosal defects extending through the muscularis mucosae in the stomach or duodenum, caused by an imbalance between aggressive factors (acid, pepsin) and mucosal defence.** The two dominant causes are **Helicobacter pylori (most) and NSAIDs**; other causes include hyperacidity states.',
    '**Duodenal ulcers (commoner) are almost always associated with H. pylori and increased acid; the pain is classically RELIEVED by food (then recurs 2–3 h later) and they are very rarely malignant.** Gastric ulcers are more often NSAID-related, the pain is classically WORSE with food (weight loss), and — unlike duodenal ulcers — **a gastric ulcer must be biopsied to exclude malignancy.**',
    '**H. pylori damages the mucosa (urease, cytotoxins) and dysregulates acid, while NSAIDs remove protective prostaglandins** ([[gastritis-and-gastropathy]]). The classic presentation is **epigastric (gnawing/burning) pain**; alarm features (weight loss, anaemia, dysphagia, vomiting, age) mandate endoscopy.',
    '**Complications are the exam staples: haemorrhage (posterior DUODENAL ulcer eroding the GASTRODUODENAL ARTERY → brisk upper-GI bleed), PERFORATION (anterior duodenal ulcer → peritonitis, free air under the diaphragm), gastric outlet obstruction, and penetration.** Bleeding is the commonest complication.',
    '**Zollinger–Ellison syndrome is a gastrin-secreting tumour (gastrinoma, often duodenal/pancreatic, part of MEN1) → massive acid → multiple/refractory ulcers, ulcers in unusual locations (distal duodenum/jejunum) and diarrhoea.** Suspect it with recurrent or atypical ulcers; measure fasting gastrin. Management (acid suppression + H. pylori eradication) is in [[acid-suppression-h-pylori-therapy]].',
  ],

  mechanism: {
    title: 'Acid/pepsin vs defence; H. pylori + NSAIDs; duodenal vs gastric; complications',
    steps: [
      { id: 's1', label: 'Ulcer = defect through muscularis mucosae; aggressive > defensive', emphasis: 'key' },
      { id: 's2', label: 'Causes: H. pylori (most) + NSAIDs (prostaglandin loss)', emphasis: 'key' },
      { id: 's3', label: 'Duodenal: H. pylori, relieved by food, ~never malignant', emphasis: 'key' },
      { id: 's4', label: 'Gastric: NSAIDs, worse with food, BIOPSY (rule out cancer)', emphasis: 'key' },
      { id: 's5', label: 'Complications: bleed (GDA), perforation (free air), ZES (gastrinoma)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Epigastric pain relieved by food, recurring hours later', mechanism: 'Duodenal ulcer (H. pylori, acid)', significance: 'key' },
    { sign: 'Epigastric pain worse with food + weight loss', mechanism: 'Gastric ulcer (biopsy to exclude malignancy)', significance: 'key' },
    { sign: 'Brisk haematemesis/melaena from a posterior duodenal ulcer', mechanism: 'Erosion of the gastroduodenal artery', significance: 'key' },
    { sign: 'Sudden severe pain + free air under the diaphragm', mechanism: 'Perforated (anterior) duodenal ulcer', significance: 'key' },
    { sign: 'Multiple refractory ulcers + high fasting gastrin', mechanism: 'Zollinger–Ellison syndrome (gastrinoma)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two dominant causes of peptic ulcers', meaning: 'Helicobacter pylori and NSAIDs' },
    { clue: 'The ulcer that must always be biopsied', meaning: 'Gastric ulcer (to exclude malignancy)' },
    { clue: 'The artery eroded by a bleeding posterior duodenal ulcer', meaning: 'The gastroduodenal artery' },
    { clue: 'The syndrome of a gastrin-secreting tumour', meaning: 'Zollinger–Ellison syndrome (gastrinoma, MEN1)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Treatment is acid suppression + H. pylori eradication + stopping NSAIDs ([[acid-suppression-h-pylori-therapy]]); complications (bleeding, perforation) are emergencies. A non-healing gastric ulcer needs biopsy for cancer ([[gastric-carcinoma-lymphoma]]). The mucosal-defence mechanism links to [[gastritis-and-gastropathy]] and the prostaglandin/NSAID pathway; ZES connects to endocrine (MEN1) tumours.' },
  ],

  mnemonics: [
    { hook: 'Duodenal "Decreases with food" (relieved); Gastric "Greater with food" (worse) + biopsy', expansion: ['Duodenal: H. pylori, rarely malignant', 'Gastric: NSAIDs, biopsy for cancer'] },
    { hook: 'Complications: "Bleed (posterior→GDA), Perforate (anterior→free air), Obstruct, ZES"', expansion: ['Bleeding = commonest', 'ZES = gastrinoma, MEN1'] },
  ],

  traps: [
    {
      questionCategory: 'Biopsy of gastric vs duodenal ulcers',
      wrongInstinct: 'All peptic ulcers can be treated medically without biopsy',
      rightAnswer: 'A GASTRIC ulcer must be BIOPSIED to exclude malignancy (gastric cancer can present as an ulcer), whereas DUODENAL ulcers are almost never malignant and do not routinely require biopsy',
      why: 'Malignant ulcers occur in the stomach, not the duodenum; skipping biopsy of a gastric ulcer risks missing an early gastric cancer masquerading as benign peptic disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has epigastric pain that is relieved by eating and recurs 2–3 hours later; testing is positive for Helicobacter pylori. The most likely lesion is:',
      options: [
        { id: 'a', text: 'Gastric ulcer' },
        { id: 'b', text: 'Duodenal ulcer' },
        { id: 'c', text: 'Oesophageal ulcer' },
        { id: 'd', text: 'Gastric carcinoma' },
      ],
      answerId: 'b',
      explanation: 'Duodenal ulcers, strongly associated with H. pylori and increased acid, classically cause pain that is relieved by food and recurs a few hours later; they are rarely malignant. Gastric ulcer pain is typically worsened by food.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A posterior duodenal ulcer that erodes into a blood vessel most characteristically bleeds from the:',
      options: [
        { id: 'a', text: 'Splenic artery' },
        { id: 'b', text: 'Gastroduodenal artery' },
        { id: 'c', text: 'Left gastric artery' },
        { id: 'd', text: 'Superior mesenteric artery' },
      ],
      answerId: 'b',
      explanation: 'The gastroduodenal artery lies posterior to the first part of the duodenum, so a posterior duodenal ulcer can erode into it and cause brisk upper-GI haemorrhage. An anterior duodenal ulcer tends to perforate instead.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default pepticUlcerDisease;
