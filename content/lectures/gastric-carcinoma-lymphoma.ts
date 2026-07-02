import type { Lecture } from '../../lib/types';
import { GASTRIC_CARCINOMA_TYPES } from '../../lib/figures';

export const gastricCarcinomaLymphoma: Lecture = {
  id: 'gastric-carcinoma-lymphoma',
  title: 'Gastric Carcinoma, MALT Lymphoma & GIST',
  system: 'gi',
  source: 'L1 — Pathology of the Upper GI Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L1 Upper GI Pathology' },
    { kind: 'disease', label: 'Gastric cancer' },
    { kind: 'exam', label: 'Signet-ring / linitis plastica' },
  ],

  highYield: [
    '**Gastric adenocarcinoma is the main gastric malignancy, classified by the Lauren system into intestinal and diffuse types.** The **intestinal type forms glands, is better-differentiated, arises from the H. pylori → atrophy → metaplasia → dysplasia cascade**, and typically occurs in older patients as a bulky antral mass.',
    '**The diffuse type is composed of poorly cohesive SIGNET-RING cells** (mucin pushes the nucleus to the periphery) that infiltrate the wall diffusely; the desmoplastic reaction produces a rigid, thickened "**leather-bottle**" stomach = **linitis plastica**. It occurs in younger patients, is linked to **E-cadherin (CDH1) loss**, and carries a worse prognosis.',
    '**Know the metastatic signatures:** a **Virchow node** (left supraclavicular), a **Sister Mary Joseph nodule** (periumbilical), a **Krukenberg tumour** (bilateral ovarian signet-ring metastases), and Blumer shelf (rectal). Early gastric cancer is confined to mucosa/submucosa (better prognosis) versus advanced (beyond muscularis propria).',
    '**Gastric MALT lymphoma is a marginal-zone B-cell lymphoma driven by chronic Helicobacter pylori infection — and can REGRESS with H. pylori eradication** in early disease. This unique "treat the infection to treat the cancer" phenomenon is a favourite exam point and shows how chronic inflammation causes lymphoid neoplasia.',
    '**GIST (gastrointestinal stromal tumour) is a mesenchymal tumour arising from the interstitial cells of Cajal (gut pacemaker cells), most commonly in the stomach.** It is defined by **KIT (CD117) gain-of-function mutations** and treated with the tyrosine-kinase inhibitor **imatinib** — a distinct, non-epithelial tumour to separate from adenocarcinoma and lymphoma.',
  ],

  mechanism: {
    title: 'Intestinal (metaplasia→gland) vs diffuse (signet-ring); MALT (H. pylori); GIST (KIT)',
    steps: [
      { id: 's1', label: 'Intestinal type: glandular, H. pylori/metaplasia cascade, antral mass', emphasis: 'key' },
      { id: 's2', label: 'Diffuse type: signet-ring cells, linitis plastica, E-cadherin loss', emphasis: 'key' },
      { id: 's3', label: 'Metastasis: Virchow, Sister Mary Joseph, Krukenberg (ovary)', emphasis: 'key' },
      { id: 's4', label: 'MALT lymphoma = H. pylori-driven; regresses with eradication', emphasis: 'key' },
      { id: 's5', label: 'GIST: interstitial cells of Cajal, KIT/CD117 → imatinib' },
    ],
  },

  examFindings: [
    { sign: 'Signet-ring cells infiltrating a rigid "leather-bottle" stomach', mechanism: 'Diffuse gastric carcinoma (linitis plastica)', significance: 'key' },
    { sign: 'Glandular antral mass arising from intestinal metaplasia', mechanism: 'Intestinal-type gastric adenocarcinoma', significance: 'key' },
    { sign: 'Left supraclavicular (Virchow) node', mechanism: 'Metastatic gastric carcinoma', significance: 'key' },
    { sign: 'Gastric lymphoma regressing after H. pylori eradication', mechanism: 'MALT lymphoma (antigen-driven)', significance: 'supportive' },
    { sign: 'KIT/CD117-positive submucosal spindle-cell tumour', mechanism: 'GIST (interstitial cells of Cajal)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The gastric cancer type with signet-ring cells and linitis plastica', meaning: 'Diffuse type (E-cadherin/CDH1 loss)' },
    { clue: 'The left supraclavicular node of gastric cancer', meaning: 'Virchow node' },
    { clue: 'The gastric lymphoma that can regress with antibiotics', meaning: 'MALT lymphoma (H. pylori-driven)' },
    { clue: 'The marker and drug for GIST', meaning: 'KIT/CD117; imatinib' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Intestinal-type cancer grows from the chronic gastritis of [[gastritis-and-gastropathy]]; H. pylori eradication ([[acid-suppression-h-pylori-therapy]]) prevents cancer and regresses early MALT lymphoma. GIST needs imatinib, not chemotherapy — highlighting molecular diagnosis. Metastatic nodes (Virchow) and Krukenberg tumours are classic spread patterns.' },
  ],

  mnemonics: [
    { hook: 'Diffuse gastric = "Signet-ring + linitis plastica (leather bottle) + E-cadherin loss"', expansion: ['Younger, worse prognosis', 'Krukenberg = ovarian signet-ring mets'] },
    { hook: 'MALT lymphoma "treat the bug, cure the cancer" (H. pylori)', expansion: ['Marginal-zone B cell', 'Regresses with eradication (early)'] },
  ],

  traps: [
    {
      questionCategory: 'Treating gastric MALT lymphoma',
      wrongInstinct: 'A gastric lymphoma must be treated with chemotherapy or radiotherapy first-line',
      rightAnswer: 'Early gastric MALT lymphoma is driven by Helicobacter pylori and often REGRESSES with H. pylori ERADICATION alone — antibiotics can treat this cancer, a unique consequence of antigen-driven lymphomagenesis',
      why: 'MALT lymphoma depends on chronic antigenic stimulation by H. pylori; removing the stimulus can resolve the tumour, so eradication is first-line before escalating to chemo/radiotherapy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A thickened, rigid "leather-bottle" stomach (linitis plastica) with poorly cohesive cells containing peripheral nuclei and mucin describes:',
      options: [
        { id: 'a', text: 'Intestinal-type gastric adenocarcinoma' },
        { id: 'b', text: 'Diffuse-type gastric adenocarcinoma (signet-ring cells)' },
        { id: 'c', text: 'MALT lymphoma' },
        { id: 'd', text: 'GIST' },
      ],
      answerId: 'b',
      explanation: 'Diffuse-type gastric carcinoma is made of signet-ring cells that infiltrate the wall diffusely, producing linitis plastica; it is associated with E-cadherin (CDH1) loss and a worse prognosis than the intestinal type.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A gastrointestinal stromal tumour (GIST) arises from the interstitial cells of Cajal and is characteristically driven by mutations in:',
      options: [
        { id: 'a', text: 'APC' },
        { id: 'b', text: 'KIT (CD117)' },
        { id: 'c', text: 'E-cadherin (CDH1)' },
        { id: 'd', text: 'BRCA1' },
      ],
      answerId: 'b',
      explanation: 'GISTs typically harbour gain-of-function KIT (CD117) mutations and are treated with the tyrosine-kinase inhibitor imatinib — a mesenchymal tumour distinct from epithelial adenocarcinoma and from MALT lymphoma.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Gastric carcinoma types', svg: GASTRIC_CARCINOMA_TYPES, caption: 'Intestinal vs diffuse (signet-ring/linitis plastica) adenocarcinoma, plus MALT lymphoma and metastatic signatures.' },
  ],
};

export default gastricCarcinomaLymphoma;
