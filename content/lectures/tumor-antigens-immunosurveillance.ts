import type { Lecture } from '../../lib/types';
import { TUMOR_IMMUNOEDITING } from '../../lib/figures';

export const tumorAntigensImmunosurveillance: Lecture = {
  id: 'tumor-antigens-immunosurveillance',
  title: 'Tumour Antigens & Cancer Immunosurveillance',
  system: 'immune',
  source: 'L16 — Tumor Immunology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L16 Tumor Immunology' },
    { kind: 'mechanism', label: 'Immunoediting' },
    { kind: 'exam', label: 'TSA/TAA · 3 E\'s' },
  ],

  highYield: [
    '**Tumour antigens let the immune system recognise cancer.** **Tumour-specific antigens (TSA)** = unique to tumour cells — **mutated neoantigens** and **viral antigens** (EBV, HPV, HBV). **Tumour-associated antigens (TAA)** = normal self-proteins **over-expressed or abnormally expressed** (e.g. oncofetal antigens like CEA/AFP, differentiation antigens). Peptides are presented on **MHC I → CD8 CTLs**.',
    '**Immunosurveillance:** the immune system continuously detects and destroys nascent transformed cells, chiefly via **CD8 CTLs, NK cells, and Th1/IFN-γ**. Evidence: **immunosuppressed patients (transplant, HIV) have markedly increased cancer risk**, especially virus-driven tumours.',
    '**Cancer immunoediting — the "3 E\'s".** **Elimination** (immunosurveillance destroys tumour cells) → **Equilibrium** (immune pressure holds the tumour in check while selecting resistant variants) → **Escape** (edited tumour evades immunity → clinically apparent cancer).',
    '**NK cells cover a key gap:** tumours that **down-regulate MHC I** to evade CTLs become **"missing-self" NK targets** — the same complementarity seen with viruses ([[innate-nk-interferon]]).',
    '**Virus-associated cancers** (HPV → cervical, EBV → lymphoma/nasopharyngeal, HBV/HCV → hepatocellular) present **viral (TSA) antigens** — the rationale for **prophylactic vaccines** (HPV, HBV) that prevent the cancer by preventing the infection.',
  ],

  mechanism: {
    title: 'Recognise → edit → escape',
    steps: [
      { id: 's1', label: 'Tumour antigens: TSA (mutated/viral) vs TAA (over-expressed self)', emphasis: 'key' },
      { id: 's2', label: 'Immunosurveillance: CTL + NK + Th1/IFN-γ', emphasis: 'key' },
      { id: 's3', label: 'Elimination → Equilibrium → Escape (3 E\'s)', emphasis: 'key' },
      { id: 's4', label: 'NK kills MHC-I-low tumour escapees' },
      { id: 's5', label: 'Virus-driven cancers → prophylactic vaccines (HPV/HBV)' },
    ],
  },

  examFindings: [
    { sign: 'Mutated neoantigen or viral protein on a tumour', mechanism: 'Tumour-specific antigen (TSA)', significance: 'key' },
    { sign: 'Over-expressed self-protein (e.g. CEA)', mechanism: 'Tumour-associated antigen (TAA)', significance: 'key' },
    { sign: 'Increased cancer incidence in transplant/HIV patients', mechanism: 'Loss of immunosurveillance', significance: 'key' },
    { sign: 'Tumour with down-regulated MHC I', mechanism: 'Escape from CTLs → NK "missing-self" target', significance: 'supportive' },
    { sign: 'HPV → cervical cancer', mechanism: 'Viral (TSA) antigens; prevented by HPV vaccine', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Antigen unique to tumour cells (mutated/viral)', meaning: 'Tumour-specific antigen (TSA)' },
    { clue: 'The three phases of immunoediting', meaning: 'Elimination, Equilibrium, Escape' },
    { clue: 'Cells performing tumour immunosurveillance', meaning: 'CD8 CTLs, NK cells, Th1 (IFN-γ)' },
    { clue: 'Why immunosuppressed patients get more cancer', meaning: 'Impaired immunosurveillance' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'TSA/neoantigens are targets for cancer vaccines and adoptive T-cell therapy; virus-driven cancers are preventable by vaccination (HPV/HBV). How tumours escape and how we counter it: [[tumor-evasion-immunotherapy]].' },
  ],

  mnemonics: [
    { hook: 'TSA = tumour-Specific (mutated/viral); TAA = tumour-Associated (over-expressed self)', expansion: ['Presented on MHC I → CD8'] },
    { hook: 'Immunoediting = 3 E\'s: Elimination → Equilibrium → Escape', expansion: ['Surveillance to clinical cancer'] },
  ],

  traps: [
    {
      questionCategory: 'Evidence for immunosurveillance',
      wrongInstinct: 'Immunosuppression has no effect on cancer risk',
      rightAnswer: 'Immunosuppressed patients (transplant, HIV) have markedly INCREASED cancer risk — strong evidence that the immune system normally controls tumours',
      why: 'The rise in (especially virus-related) cancers with immunosuppression demonstrates active immunosurveillance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The three sequential phases of cancer immunoediting are:',
      options: [
        { id: 'a', text: 'Initiation, promotion, progression' },
        { id: 'b', text: 'Elimination, equilibrium, escape' },
        { id: 'c', text: 'Sensitisation, effector, memory' },
        { id: 'd', text: 'Hyperacute, acute, chronic' },
      ],
      answerId: 'b',
      explanation: 'Immunoediting proceeds Elimination (surveillance kills tumour cells) → Equilibrium (immune pressure selects variants) → Escape (edited tumour evades immunity → clinical cancer).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A mutated protein expressed only by a patient\'s tumour cells and presented on MHC I is best classified as a:',
      options: [
        { id: 'a', text: 'Tumour-associated antigen (TAA)' },
        { id: 'b', text: 'Tumour-specific antigen (TSA/neoantigen)' },
        { id: 'c', text: 'Superantigen' },
        { id: 'd', text: 'Alloantigen' },
      ],
      answerId: 'b',
      explanation: 'A mutation-derived neoantigen unique to the tumour is a tumour-specific antigen (TSA). TAAs are normal self-proteins that are over-expressed or aberrantly expressed.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Cancer immunoediting', svg: TUMOR_IMMUNOEDITING, caption: 'Elimination → Equilibrium → Escape; tumour antigens (TSA/TAA); evasion (↓MHC I, PD-L1, Tregs) and immunotherapy targets.' },
  ],
};

export default tumorAntigensImmunosurveillance;
