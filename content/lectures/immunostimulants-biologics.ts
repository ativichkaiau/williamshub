import type { Lecture } from '../../lib/types';

export const immunostimulantsBiologics: Lecture = {
  id: 'immunostimulants-biologics',
  title: 'Immunostimulants & Immunising Agents',
  system: 'pharmacology',
  source: 'L13 — Immunomodulating Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L13 Immunostimulants' },
    { kind: 'mechanism', label: 'Cytokines, CSFs, vaccines' },
    { kind: 'exam', label: 'G-CSF; interferons; vaccine types' },
  ],

  highYield: [
    '**IMMUNOSTIMULANTS enhance immune responses in cancer, chronic infection and immunodeficiency. CYTOKINES: INTERFERONS (IFN-α — hepatitis B/C historically, some cancers; IFN-β — multiple sclerosis; IFN-γ — chronic granulomatous disease); INTERLEUKINS (IL-2/aldesleukin — renal cancer/melanoma). COLONY-STIMULATING FACTORS: G-CSF (FILGRASTIM) boosts neutrophils after chemotherapy/neutropenia; erythropoietin/EPO for anaemia.**',
    '**IMMUNE CHECKPOINT INHIBITORS (anti-PD-1/PD-L1, anti-CTLA-4) release the brakes on anti-tumour T cells (major cancer advance) but cause autoimmune "immune-related adverse events" ([[targeted-cancer-therapy]]). CAR-T cell therapy engineers a patient\'s T cells against tumour antigens (risk: cytokine release syndrome).**',
    '**VACCINES actively immunise: LIVE-ATTENUATED (MMR, varicella, BCG, yellow fever, oral polio — strong/durable immunity but CONTRAINDICATED in significant immunosuppression/pregnancy); INACTIVATED/subunit/toxoid/conjugate/mRNA (safe in immunosuppression, may need boosters). PASSIVE immunisation gives preformed ANTIBODY (immunoglobulin) for immediate, short-lived protection (post-exposure — tetanus, rabies, hepatitis B).**',
    '**Clinical points: G-CSF shortens chemotherapy-induced neutropenia and its infection risk; interferons have flu-like/depressive side-effects; LIVE vaccines must be avoided in the immunosuppressed and given (ideally) before starting immunosuppression; passive immunoglobulin gives instant but temporary cover. Active vaccination = slow but lasting; passive = fast but transient.**',
    '**The take-home: immunostimulants = interferons (IFN-α hepatitis/cancer, IFN-β MS), IL-2, colony-stimulating factors (G-CSF/filgrastim for neutropenia, EPO for anaemia), checkpoint inhibitors (cancer, irAEs); VACCINES — live-attenuated (durable but avoid in immunosuppression/pregnancy) vs inactivated; PASSIVE immunoglobulin = immediate short-lived protection.** The suppressive counterparts are in [[immunosuppressant-drugs]]; checkpoint therapy in [[targeted-cancer-therapy]]; the overview is [[immunomodulating-agents]].',
  ],

  mechanism: {
    title: 'Interferons/IL-2/CSFs/checkpoint inhibitors stimulate; vaccines (live vs inactivated) actively immunise; immunoglobulin = passive (fast, short)',
    steps: [
      { id: 's1', label: 'Interferons (IFN-α hepatitis/cancer, IFN-β MS, IFN-γ CGD); IL-2 (renal/melanoma)', emphasis: 'key' },
      { id: 's2', label: 'Colony-stimulating factors: G-CSF (filgrastim) → neutrophils post-chemo; EPO → anaemia', emphasis: 'key' },
      { id: 's3', label: 'Checkpoint inhibitors release T-cell brakes (cancer) → immune-related adverse events', emphasis: 'key' },
      { id: 's4', label: 'Vaccines: live-attenuated (durable; avoid in immunosuppression/pregnancy) vs inactivated (safe)', emphasis: 'key' },
      { id: 's5', label: 'Passive immunoglobulin = immediate, short-lived protection (post-exposure)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Accelerated neutrophil recovery after chemotherapy', mechanism: 'G-CSF (filgrastim) immunostimulation', significance: 'key' },
    { sign: 'Flu-like symptoms and depression on antiviral/antitumour cytokine therapy', mechanism: 'Interferon side-effects', significance: 'supportive' },
    { sign: 'Live vaccine contraindicated in an immunosuppressed patient', mechanism: 'Risk of disseminated infection from the attenuated organism', significance: 'key' },
    { sign: 'Immediate but temporary protection after tetanus/rabies exposure', mechanism: 'Passive immunisation (immunoglobulin)', significance: 'key' },
    { sign: 'Autoimmune organ inflammation during cancer immunotherapy', mechanism: 'Checkpoint-inhibitor immune-related adverse events', significance: 'key' },
  ],

  investigations: [
    { clue: 'The colony-stimulating factor used for post-chemotherapy neutropenia', meaning: 'G-CSF (filgrastim)' },
    { clue: 'The interferon used in multiple sclerosis', meaning: 'Interferon-β' },
    { clue: 'The vaccine type contraindicated in immunosuppression/pregnancy', meaning: 'Live-attenuated vaccines' },
    { clue: 'The immunisation giving immediate but short-lived protection', meaning: 'Passive immunisation (immunoglobulin)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Immunostimulants support chemotherapy (G-CSF, EPO), treat infection/cancer (interferons, IL-2, checkpoint inhibitors) and — via vaccines — prevent disease. The live-vs-inactivated vaccine distinction is safety-critical in immunosuppression/pregnancy (live vaccines contraindicated), and active (slow, durable) vs passive (fast, transient) immunisation guides post-exposure decisions. Checkpoint immunotherapy overlaps oncology ([[targeted-cancer-therapy]]); the suppressive counterparts are [[immunosuppressant-drugs]].' },
  ],

  mnemonics: [
    { hook: '"Stimulate: Interferons, IL-2, CSFs (G-CSF neutrophils/EPO red cells), checkpoint inhibitors"', expansion: ['G-CSF after chemo', 'IFN-β = MS'] },
    { hook: 'Vaccines: "Live = durable but avoid in immunosuppressed/pregnant; Passive Ig = fast but short"', expansion: ['Active = slow/lasting', 'Passive = immediate/transient'] },
  ],

  traps: [
    {
      questionCategory: 'Active vs passive immunisation',
      wrongInstinct: 'Vaccination and giving immunoglobulin provide the same kind of protection',
      rightAnswer: 'ACTIVE immunisation (vaccines) makes the patient generate their OWN immune response and memory — SLOW to develop but LONG-lasting; PASSIVE immunisation (preformed immunoglobulin/antibody) gives IMMEDIATE but TRANSIENT protection with no memory — used post-exposure (tetanus, rabies, hepatitis B) when there is no time to mount an active response',
      why: 'The timing and durability differ fundamentally (slow/durable vs fast/transient), determining which is appropriate — e.g. urgent post-exposure prophylaxis often needs passive immunoglobulin (± simultaneous active vaccination).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Granulocyte colony-stimulating factor (G-CSF, filgrastim) is used to:',
      options: [
        { id: 'a', text: 'Suppress T-cell activation' },
        { id: 'b', text: 'Stimulate neutrophil production, e.g. after chemotherapy-induced neutropenia' },
        { id: 'c', text: 'Provide passive immunity' },
        { id: 'd', text: 'Deplete B cells' },
      ],
      answerId: 'b',
      explanation: 'G-CSF (filgrastim) stimulates neutrophil production and release, shortening the duration of chemotherapy-induced neutropenia and reducing infection risk. It is an immunostimulant/growth factor, not an immunosuppressant.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which vaccine type is contraindicated in a significantly immunosuppressed patient?',
      options: [
        { id: 'a', text: 'Inactivated vaccine' },
        { id: 'b', text: 'Live-attenuated vaccine' },
        { id: 'c', text: 'Toxoid vaccine' },
        { id: 'd', text: 'Subunit vaccine' },
      ],
      answerId: 'b',
      explanation: 'Live-attenuated vaccines (e.g. MMR, varicella, BCG, yellow fever) contain a weakened organism that can cause disseminated infection in the immunosuppressed, so they are contraindicated; inactivated/subunit/toxoid vaccines are safe (though responses may be blunted).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default immunostimulantsBiologics;
