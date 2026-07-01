import type { Lecture } from '../../lib/types';
import { BRAIN_HERNIATION } from '../../lib/figures';

export const raisedIcpHerniation: Lecture = {
  id: 'raised-icp-herniation',
  title: 'Raised ICP, Edema & Herniation',
  system: 'neuro',
  source: 'L5 — CNS Trauma & Hemorrhage',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L5 CNS Trauma & Hemorrhage' },
    { kind: 'disease', label: 'Herniation' },
    { kind: 'mechanism', label: 'Fixed skull volume' },
    { kind: 'exam', label: 'Cushing / uncal' },
  ],

  highYield: [
    'The skull is a **rigid fixed box** — any added volume (mass, edema, hydrocephalus, hemorrhage) raises **intracranial pressure (ICP)**. Consequences: **headache (worse lying down), nausea/vomiting, papilledema, falling consciousness → brainstem compression → death**.',
    '**Cushing response** (a late sign): **hypertension + bradycardia + irregular respiration** — the body’s effort to maintain cerebral perfusion.',
    '**Cerebral edema**: **vasogenic** (BBB breakdown → **extracellular** fluid; tumor, inflammation) vs **cytotoxic** (cell-membrane injury → **intracellular** fluid; ischemia).',
    '**Subfalcine (cingulate)** herniation → under the falx (compresses ACA). **Uncal (transtentorial)** → medial temporal lobe over the tentorium → **ipsilateral CN III palsy (blown pupil)**, PCA infarct, Duret hemorrhages.',
    '**Tonsillar herniation** = cerebellar tonsils through the **foramen magnum** → **brainstem/respiratory center compression → death**.',
  ],

  mechanism: {
    title: 'Added volume in a fixed box → pressure → shift → herniation',
    steps: [
      { id: 's1', label: 'Mass/edema/hydrocephalus in a rigid skull' },
      { id: 's2', label: '↑ ICP once compensation is exhausted', emphasis: 'key' },
      { id: 's3', label: 'Brain shifts across dural/bony boundaries' },
      { id: 's4', label: 'Uncal → CN III; tonsillar → brainstem death', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Ipsilateral fixed dilated pupil + contralateral hemiparesis', mechanism: 'Uncal herniation compressing CN III (and cerebral peduncle)', significance: 'key' },
    { sign: 'Hypertension + bradycardia + irregular breathing', mechanism: 'Cushing response to raised ICP', significance: 'key' },
    { sign: 'Papilledema, headache worse on lying flat', mechanism: 'Raised ICP', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CT/MRI (mass, midline shift, effaced sulci/ventricles)', meaning: 'Cause & degree of raised ICP' },
    { clue: 'Avoid LP if a mass/raised ICP is suspected', meaning: 'Risk of precipitating herniation' },
    { clue: 'Edema pattern (vasogenic vs cytotoxic)', meaning: 'Tumor/inflammation vs ischemia' },
  ],

  treatment: [
    { logic: 'Lower ICP (head elevation, osmotherapy, treat the cause)', detail: 'Prevent herniation.' },
    { logic: 'Emergency decompression for impending herniation', detail: 'Evacuate mass/hematoma; relieve hydrocephalus.' },
  ],

  mnemonics: [
    { hook: 'Cushing triad: ↑BP, ↓HR, irregular breathing', expansion: ['Late, ominous sign of raised ICP'] },
    { hook: 'Uncal = blown pupil (CN III); tonsillar = respiratory death', expansion: ['Level of herniation predicts the sign'] },
  ],

  traps: [
    {
      questionCategory: 'Vasogenic vs cytotoxic edema',
      wrongInstinct: 'All cerebral edema comes from blood-brain-barrier leakage',
      rightAnswer: 'Vasogenic edema is extracellular (BBB breakdown, tumor/inflammation); cytotoxic edema is intracellular (cell-membrane failure in ischemia)',
      why: 'The two mechanisms differ in compartment and cause — vasogenic responds to steroids (tumor edema), whereas cytotoxic (ischemic) edema does not.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a large hemispheric mass develops a fixed, dilated right pupil and left-sided weakness with declining consciousness. This indicates:',
      options: [
        { id: 'a', text: 'Subfalcine herniation' },
        { id: 'b', text: 'Uncal (transtentorial) herniation compressing CN III' },
        { id: 'c', text: 'Tonsillar herniation' },
        { id: 'd', text: 'Communicating hydrocephalus' },
      ],
      answerId: 'b',
      explanation: 'An ipsilateral blown pupil (CN III compression) with contralateral hemiparesis and depressed consciousness is classic uncal (transtentorial) herniation — a neurosurgical emergency.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Brain herniation types', svg: BRAIN_HERNIATION, caption: 'Subfalcine (cingulate under falx), uncal/transtentorial (→ CN III), and tonsillar (→ foramen magnum, brainstem).' },
  ],
};

export default raisedIcpHerniation;
