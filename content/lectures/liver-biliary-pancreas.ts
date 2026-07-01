import type { Lecture } from '../../lib/types';

export const liverBiliaryPancreas: Lecture = {
  id: 'liver-biliary-pancreas',
  title: 'Liver, Biliary Tract & Pancreas',
  system: 'gi',
  source: 'L18 — Intestines, Liver & Biliary System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L18 Intestines, Liver & Biliary' },
    { kind: 'disease', label: 'Liver / biliary / pancreas' },
    { kind: 'mechanism', label: 'Ducts & ligaments' },
    { kind: 'exam', label: 'Calot triangle / ampulla' },
  ],

  highYield: [
    'The **liver** occupies the RUQ (deep to ribs 7–11). Its visceral surface shows an **"H"**: the **transverse fissure = porta hepatis** (portal vein, hepatic artery, hepatic duct), the **right sagittal fissure** (IVC + gallbladder), and the **left sagittal fissure** (**ligamentum venosum** = old ductus venosus; **ligamentum teres** = old left umbilical vein, in the free edge of the falciform ligament). Anatomic lobes: right, left, quadrate, caudate.',
    'The **liver has a dual blood supply**: the **hepatic portal vein (~75–80%, nutrient-rich)** and the **hepatic artery (arterial O₂)**; the **bare area** (posterosuperior) has no peritoneum where it fuses with the diaphragm.',
    'The **biliary tree**: right + left hepatic ducts → common hepatic duct; the **cystic duct** from the gallbladder joins it to form the **(common) bile duct**, which unites with the **main pancreatic duct** at the **hepatopancreatic ampulla (of Vater)** → **major duodenal papilla**, guarded by the **sphincter of Oddi**.',
    'The **gallbladder** (fundus at the tip of the right 9th costal cartilage) is supplied by the **cystic artery**, found in the **hepatocystic (Calot) triangle** (cystic duct, common hepatic duct, inferior liver edge) — a key landmark to avoid injury in cholecystectomy.',
    'The **pancreas** is retroperitoneal, crossing L1–L2: **head** (embraced by the duodenum, with the uncinate process), **neck** (over the SMV/portal vein junction), **body**, and **tail** (reaches the spleen in the splenorenal ligament). It has exocrine + endocrine functions.',
  ],

  mechanism: {
    title: 'Porta hepatis, biliary confluence, and the pancreatic relations',
    steps: [
      { id: 's1', label: 'Porta hepatis: portal vein + hepatic artery + duct', emphasis: 'key' },
      { id: 's2', label: 'Cystic + common hepatic → bile duct → ampulla of Vater' },
      { id: 's3', label: 'Cystic artery in the Calot triangle' },
      { id: 's4', label: 'Ligamentum teres/venosum = fetal remnants', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bile-duct injury during cholecystectomy', mechanism: 'Misidentified structures in Calot triangle', significance: 'key' },
    { sign: 'Obstructive jaundice from a stone/tumor at the ampulla', mechanism: 'Blockage at the hepatopancreatic ampulla', significance: 'key' },
    { sign: 'Caput medusae / esophageal varices in portal hypertension', mechanism: 'Recanalized paraumbilical veins along the ligamentum teres', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ultrasound RUQ (gallstones, duct dilation)', meaning: 'Biliary obstruction' },
    { clue: 'Identify the Calot triangle at operation', meaning: 'Safe cystic artery/duct ligation' },
  ],

  treatment: [
    { logic: 'Cholecystectomy for symptomatic gallstones', detail: 'Achieve the "critical view" in Calot triangle.' },
    { logic: 'ERCP for stones at the ampulla', detail: 'Relieve biliary obstruction.' },
  ],

  mnemonics: [
    { hook: 'Portal triad = portal vein + hepatic artery + bile duct (in the hepatoduodenal ligament)', expansion: ['Porta hepatis'] },
    { hook: 'Calot triangle = cystic duct + common hepatic duct + liver edge → cystic artery', expansion: ['Cholecystectomy landmark'] },
  ],

  traps: [
    {
      questionCategory: 'Ligamentum teres vs ligamentum venosum',
      wrongInstinct: 'The ligamentum teres is the remnant of the ductus venosus',
      rightAnswer: 'The ligamentum TERES (round ligament, in the falciform ligament) is the remnant of the left UMBILICAL VEIN; the ligamentum VENOSUM is the remnant of the ductus venosus',
      why: 'Teres = umbilical vein (recanalizes in portal hypertension → caput medusae); venosum = ductus venosus.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During a laparoscopic cholecystectomy, the surgeon dissects the hepatocystic (Calot) triangle to safely identify and ligate which artery?',
      options: [
        { id: 'a', text: 'Right hepatic artery' },
        { id: 'b', text: 'Cystic artery' },
        { id: 'c', text: 'Gastroduodenal artery' },
        { id: 'd', text: 'Left gastric artery' },
      ],
      answerId: 'b',
      explanation: 'The cystic artery (usually from the right hepatic artery) lies within the hepatocystic (Calot) triangle — bounded by the cystic duct, common hepatic duct, and inferior liver edge — which is dissected to avoid bile-duct injury.',
      tests: 'exam',
    },
  ],
};

export default liverBiliaryPancreas;
