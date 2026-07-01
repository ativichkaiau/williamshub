import type { Lecture } from '../../lib/types';
import { CNS_TUMOR_LOCATIONS } from '../../lib/figures';

export const astrocytomaGlioblastoma: Lecture = {
  id: 'astrocytoma-glioblastoma',
  title: 'Astrocytoma & Glioblastoma',
  system: 'neuro',
  source: 'L10 — CNS Neoplasms',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L10 CNS Neoplasms' },
    { kind: 'disease', label: 'Glioma' },
    { kind: 'mechanism', label: 'IDH status' },
    { kind: 'exam', label: 'Glioblastoma' },
  ],

  highYield: [
    '**Gliomas** are the most common primary intraparenchymal brain tumors. Even benign CNS tumors can kill by **compression**; malignant ones **rarely spread outside the CNS**. Present with progressive headache, seizures, focal deficits.',
    '**Diffuse astrocytoma, IDH-mutant** (WHO grade 2–4): younger/middle-aged adults (~38 y), cerebral hemispheres; **IDH1/IDH2 mutation**; better prognosis than IDH-wildtype.',
    '**Glioblastoma, IDH-wildtype** (WHO grade 4): older (>55 y), **de novo**, ~14% of primary CNS tumors and **>50% of CNS malignancies**; molecular = **EGFR amplification, TERT-promoter mutation, chr7 gain/chr10 loss**.',
    'Grade-4 histology hallmarks: **microvascular (endothelial) proliferation** and **pseudopalisading necrosis**; tumor is **GFAP-positive**. Glioblastoma classically crosses the corpus callosum → **“butterfly glioma.”**',
    'The **2021 WHO classification is molecularly defined** (IDH status, 1p/19q, CDKN2A) — grade 2→4 rises with cellularity, mitoses, necrosis, and vascular proliferation.',
  ],

  mechanism: {
    title: 'Glial cell + driver mutations → infiltrating tumor',
    steps: [
      { id: 's1', label: 'Astrocytic glioma arises in a hemisphere' },
      { id: 's2', label: 'IDH-mutant (younger, better) vs IDH-wildtype GBM (older, worse)', emphasis: 'key' },
      { id: 's3', label: 'Grade rises: cellularity, mitoses, atypia' },
      { id: 's4', label: 'Grade 4: microvascular proliferation + pseudopalisading necrosis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Progressive headache, new seizures, focal deficit in an adult', mechanism: 'Expanding infiltrating hemispheric glioma', significance: 'key' },
    { sign: 'Ring-enhancing mass crossing the corpus callosum', mechanism: 'Butterfly glioblastoma', significance: 'key' },
    { sign: 'GFAP-positive, IDH1 R132H immunostaining', mechanism: 'Astrocytic lineage; IDH-mutant', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI with contrast', meaning: 'Infiltrating/enhancing mass, necrosis' },
    { clue: 'Histology + molecular (IDH, EGFR, TERT, CDKN2A)', meaning: 'WHO grade & subtype (prognosis)' },
    { clue: 'GFAP / IDH1 immunostains', meaning: 'Confirms glial lineage & mutation' },
  ],

  treatment: [
    { logic: 'Maximal safe resection + radiation + temozolomide (GBM)', detail: 'Prognosis remains poor for glioblastoma.' },
    { logic: 'IDH status stratifies prognosis & therapy', detail: 'IDH-mutant fares better than IDH-wildtype.' },
  ],

  mnemonics: [
    { hook: 'GBM = grade 4: microvascular proliferation + pseudopalisading necrosis', expansion: ['Butterfly across corpus callosum'] },
    { hook: 'IDH-mutant = younger + better; IDH-wildtype GBM = older + worse', expansion: ['Molecular WHO 2021'] },
  ],

  traps: [
    {
      questionCategory: 'Metastatic potential of CNS tumors',
      wrongInstinct: 'A high-grade brain malignancy like glioblastoma commonly metastasizes to lungs and liver',
      rightAnswer: 'Primary CNS malignancies rarely spread outside the CNS; they cause harm by local infiltration and compression',
      why: 'Unlike systemic cancers, gliomas almost never metastasize beyond the neuraxis — their lethality comes from infiltration of vital brain structures, not distant spread.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 62-year-old presents with a rapidly enlarging hemispheric mass. Histology shows a GFAP-positive astrocytic tumor with microvascular proliferation and pseudopalisading necrosis, IDH-wildtype. The diagnosis is:',
      options: [
        { id: 'a', text: 'Oligodendroglioma' },
        { id: 'b', text: 'Glioblastoma (IDH-wildtype, WHO grade 4)' },
        { id: 'c', text: 'Pilocytic astrocytoma' },
        { id: 'd', text: 'Meningioma' },
      ],
      answerId: 'b',
      explanation: 'Pseudopalisading necrosis and microvascular proliferation in an IDH-wildtype astrocytic tumor of an older adult define glioblastoma, WHO grade 4 — the most common CNS malignancy.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Common CNS tumor locations', svg: CNS_TUMOR_LOCATIONS, caption: 'Glioblastoma/astrocytoma & metastases in the hemispheres; meningioma dura-based; medulloblastoma/pilocytic in the cerebellum; ependymoma in the 4th ventricle; pituitary in the sella.' },
  ],
};

export default astrocytomaGlioblastoma;
