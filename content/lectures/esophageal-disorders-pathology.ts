import type { Lecture } from '../../lib/types';

export const esophagealDisordersPathology: Lecture = {
  id: 'esophageal-disorders-pathology',
  title: 'Oesophageal Disorders',
  system: 'gi',
  source: 'L1 — Pathology of the Upper GI Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L1 Upper GI Pathology' },
    { kind: 'disease', label: 'GERD / Barrett' },
    { kind: 'exam', label: 'Achalasia' },
  ],

  highYield: [
    '**Oesophageal disease splits into motor, mucosal/inflammatory, vascular and neoplastic problems.** **Achalasia is failure of the lower oesophageal sphincter (LES) to relax with loss of peristalsis** — due to degeneration of myenteric (Auerbach) plexus inhibitory neurons — giving dysphagia to solids AND liquids and a "bird-beak" barium tapering (secondary achalasia mimic: Chagas disease).',
    '**Gastro-oesophageal reflux disease (GERD) is reflux of acid through an incompetent LES**, causing heartburn and, histologically, basal-zone hyperplasia with intraepithelial eosinophils. Chronic reflux drives **Barrett oesophagus — metaplasia of the normal stratified squamous epithelium to intestinal-type columnar epithelium with goblet cells** — the key premalignant change.',
    '**Barrett oesophagus is the main risk factor for oesophageal ADENOCARCINOMA (distal third).** The two oesophageal cancers differ by site and risk: **adenocarcinoma (distal, from Barrett/GERD/obesity) vs squamous cell carcinoma (mid/upper third, from smoking, alcohol, hot beverages, nitrosamines)** — squamous is commoner worldwide, adeno commoner in the West.',
    '**Oesophageal varices are dilated submucosal veins from PORTAL HYPERTENSION (cirrhosis)** — a porto-systemic shunt at the gastro-oesophageal junction. They can rupture and cause **massive, life-threatening upper-GI haemorrhage**, a leading cause of death in cirrhosis (drug/endoscopic management in [[pharmacology-in-liver-disease]]).',
    '**A Mallory–Weiss tear is a longitudinal mucosal laceration at the gastro-oesophageal junction from forceful retching/vomiting** (classically alcoholics), causing haematemesis — usually self-limited. Contrast **Boerhaave syndrome (full-thickness rupture → mediastinitis, a surgical emergency)**. Eosinophilic oesophagitis (atopic, rings/furrows, food impaction) is an increasingly recognised mucosal cause of dysphagia.',
  ],

  mechanism: {
    title: 'Motor (achalasia), reflux→Barrett→adeno, varices, tears',
    steps: [
      { id: 's1', label: 'Achalasia: LES won\'t relax + no peristalsis (myenteric plexus loss)', emphasis: 'key' },
      { id: 's2', label: 'GERD → Barrett metaplasia (squamous → intestinal columnar + goblet)', emphasis: 'key' },
      { id: 's3', label: 'Barrett → distal ADENOCARCINOMA; squamous = mid/upper, smoking/alcohol', emphasis: 'key' },
      { id: 's4', label: 'Varices = portal hypertension shunt → massive haemorrhage', emphasis: 'danger' },
      { id: 's5', label: 'Mallory-Weiss tear (retching) vs Boerhaave rupture (emergency)' },
    ],
  },

  examFindings: [
    { sign: 'Dysphagia to solids AND liquids + "bird-beak" barium', mechanism: 'Achalasia (LES fails to relax, no peristalsis)', significance: 'key' },
    { sign: 'Intestinal metaplasia with goblet cells in the distal oesophagus', mechanism: 'Barrett oesophagus (premalignant, from GERD)', significance: 'key' },
    { sign: 'Distal oesophageal adenocarcinoma', mechanism: 'Barrett/GERD/obesity', significance: 'key' },
    { sign: 'Haematemesis with cirrhosis and portal hypertension', mechanism: 'Ruptured oesophageal varices', significance: 'key' },
    { sign: 'Haematemesis after forceful retching (alcoholic)', mechanism: 'Mallory–Weiss mucosal tear', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The motility disorder with a bird-beak oesophagus', meaning: 'Achalasia' },
    { clue: 'The metaplastic change predisposing to oesophageal adenocarcinoma', meaning: 'Barrett oesophagus (intestinal metaplasia)' },
    { clue: 'The oesophageal cancer linked to smoking/alcohol in the upper two-thirds', meaning: 'Squamous cell carcinoma' },
    { clue: 'The cause of bleeding varices at the gastro-oesophageal junction', meaning: 'Portal hypertension (cirrhosis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'GERD/Barrett is managed with acid suppression + surveillance ([[acid-suppression-h-pylori-therapy]]); varices connect to portal hypertension and its pharmacology ([[pharmacology-in-liver-disease]], [[cirrhosis-fatty-liver-portal-hypertension]]). Adenocarcinoma vs squamous carcinoma is a classic site/risk contrast. Gastric mucosal disease continues in [[gastritis-and-gastropathy]] and cancer in [[gastric-carcinoma-lymphoma]].' },
  ],

  mnemonics: [
    { hook: 'Achalasia = "A-chalasia = Absent relaxation" (bird-beak, solids + liquids)', expansion: ['Myenteric plexus loss', 'Chagas = secondary cause'] },
    { hook: 'Oesophageal cancer: "adeno = distal/Barrett; squamous = upper/smoking"', expansion: ['Barrett = intestinal metaplasia + goblet', 'Squamous commoner worldwide'] },
  ],

  traps: [
    {
      questionCategory: 'Dysphagia pattern in achalasia vs obstruction',
      wrongInstinct: 'Dysphagia to both solids and liquids from the start suggests a mechanical obstructing tumour',
      rightAnswer: 'Dysphagia to solids AND liquids from the outset suggests a MOTILITY disorder (achalasia); a mechanical/malignant obstruction classically causes PROGRESSIVE dysphagia to solids first, then liquids',
      why: 'The pattern of dysphagia localises the mechanism — simultaneous solid+liquid difficulty points to failed peristalsis/LES relaxation, whereas solids-then-liquids points to a narrowing lumen.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Chronic gastro-oesophageal reflux most importantly predisposes to oesophageal adenocarcinoma through which intermediate lesion?',
      options: [
        { id: 'a', text: 'Squamous dysplasia' },
        { id: 'b', text: 'Barrett oesophagus (intestinal metaplasia)' },
        { id: 'c', text: 'Achalasia' },
        { id: 'd', text: 'Oesophageal varices' },
      ],
      answerId: 'b',
      explanation: 'Reflux drives metaplasia of the normal squamous epithelium to intestinal-type columnar epithelium with goblet cells (Barrett oesophagus), which can progress through dysplasia to adenocarcinoma of the distal oesophagus.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Achalasia is characterised by:',
      options: [
        { id: 'a', text: 'Excessive relaxation of the lower oesophageal sphincter' },
        { id: 'b', text: 'Failure of LES relaxation with loss of peristalsis due to myenteric plexus degeneration' },
        { id: 'c', text: 'Mucosal metaplasia' },
        { id: 'd', text: 'Portal hypertension' },
      ],
      answerId: 'b',
      explanation: 'Achalasia results from degeneration of inhibitory neurons in the myenteric (Auerbach) plexus, so the LES fails to relax and peristalsis is lost, producing dysphagia to solids and liquids with a bird-beak tapering on barium study.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default esophagealDisordersPathology;
