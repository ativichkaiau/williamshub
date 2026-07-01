import type { Lecture } from '../../lib/types';
import { GI_BLOOD_SUPPLY } from '../../lib/figures';

export const giBloodSupplyPortalSystem: Lecture = {
  id: 'gi-blood-supply-portal-system',
  title: 'GI Blood Supply & Portal System',
  system: 'gi',
  source: 'L18 — Intestines, Liver & Biliary System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L18 Intestines, Liver & Biliary' },
    { kind: 'disease', label: 'Gut vasculature' },
    { kind: 'mechanism', label: 'Foregut/midgut/hindgut' },
    { kind: 'exam', label: 'Portosystemic anastomoses' },
  ],

  highYield: [
    'The gut is supplied by **3 unpaired aortic branches matching the embryonic divisions**: **celiac trunk (T12) → foregut** (esophagus to the mid-duodenum/ampulla, plus liver, gallbladder, pancreas, spleen); **superior mesenteric artery (L1) → midgut** (mid-duodenum to the proximal 2/3 of the transverse colon); **inferior mesenteric artery (L3) → hindgut** (distal 1/3 transverse colon to the upper rectum).',
    '**Visceral (referred) pain follows the artery/gut division**: **foregut → epigastric, midgut → periumbilical, hindgut → suprapubic** — e.g. early appendicitis (midgut) hurts periumbilically before localizing.',
    '**Watershed zones** (between two territories) are vulnerable to ischemia: the **splenic flexure** (SMA↔IMA, "Griffiths point") and the **rectosigmoid junction** (IMA↔superior rectal, "Sudeck point").',
    'The **hepatic portal vein** (formed behind the pancreatic neck by the **splenic + superior mesenteric veins**) carries nutrient-rich blood to the liver. In **portal hypertension**, blood diverts through **portosystemic anastomoses**: **esophageal varices** (left gastric ↔ azygos), **caput medusae** (paraumbilical ↔ epigastric), and **anorectal varices** (superior ↔ middle/inferior rectal).',
    '**Clinical**: the **appendicular artery (from the ileocolic)** is an end artery → appendicitis readily leads to ischemia/perforation; a **sigmoid volvulus** twists its long mesocolon → obstruction and ischemic emergency.',
  ],

  mechanism: {
    title: 'Three arteries = three gut divisions = three pain sites',
    steps: [
      { id: 's1', label: 'Celiac (T12) foregut → epigastric pain', emphasis: 'key' },
      { id: 's2', label: 'SMA (L1) midgut → periumbilical pain' },
      { id: 's3', label: 'IMA (L3) hindgut → suprapubic pain' },
      { id: 's4', label: 'Portal hypertension → varices at portosystemic sites', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Periumbilical pain that migrates to the RLQ', mechanism: 'Midgut (SMA) referral → local peritoneal irritation (appendicitis)', significance: 'key' },
    { sign: 'Hematemesis from esophageal varices', mechanism: 'Left gastric ↔ azygos portosystemic anastomosis', significance: 'key' },
    { sign: 'Ischemia at the splenic flexure', mechanism: 'SMA/IMA watershed zone', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Match referred pain to the gut division', meaning: 'Foregut/midgut/hindgut localization' },
    { clue: 'Endoscopy for varices in liver disease', meaning: 'Portosystemic anastomoses' },
  ],

  treatment: [
    { logic: 'Variceal bleeding: band ligation, vasoactive drugs', detail: 'Portal hypertension complication.' },
    { logic: 'Watershed ischemic colitis: supportive/resection', detail: 'Splenic flexure vulnerability.' },
  ],

  mnemonics: [
    { hook: 'Foregut = celiac (epigastric); Midgut = SMA (periumbilical); Hindgut = IMA (suprapubic)', expansion: ['Pain follows the division'] },
    { hook: 'Portal HTN varices: esophageal, caput medusae, anorectal', expansion: ['Portosystemic anastomoses'] },
  ],

  traps: [
    {
      questionCategory: 'Referred pain of early appendicitis',
      wrongInstinct: 'Appendicitis pain starts in the right lower quadrant',
      rightAnswer: 'It classically starts PERIUMBILICALLY (midgut visceral referral, SMA territory) and only later localizes to the RLQ when the parietal peritoneum is irritated',
      why: 'Midgut structures refer visceral pain to the periumbilical region before somatic (parietal) pain localizes it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The inferior mesenteric artery supplies which segment of the gut, and where is its visceral pain typically referred?',
      options: [
        { id: 'a', text: 'Foregut; epigastric region' },
        { id: 'b', text: 'Hindgut (distal 1/3 transverse colon to upper rectum); suprapubic region' },
        { id: 'c', text: 'Midgut; periumbilical region' },
        { id: 'd', text: 'Foregut; suprapubic region' },
      ],
      answerId: 'b',
      explanation: 'The IMA supplies the hindgut (distal third of the transverse colon to the upper rectum); its visceral afferents refer pain to the suprapubic (hypogastric) region.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Foregut / midgut / hindgut blood supply', svg: GI_BLOOD_SUPPLY, caption: 'Celiac (foregut, epigastric pain), SMA (midgut, periumbilical), IMA (hindgut, suprapubic); watershed at the splenic flexure.' },
  ],
};

export default giBloodSupplyPortalSystem;
