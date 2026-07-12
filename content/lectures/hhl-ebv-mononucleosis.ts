import type { Lecture } from '../../lib/types';

export const hhlEbvMononucleosis: Lecture = {
  id: 'hhl-ebv-mononucleosis',
  title: 'EBV & Infectious Mononucleosis',
  system: 'heme',
  source: 'L27 — EBV & Infectious Mononucleosis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L27 EBV & IM' },
    { kind: 'disease', label: 'Infectious mononucleosis' },
    { kind: 'mechanism', label: 'gp350 → CD21 on B cells' },
    { kind: 'investigation', label: 'Heterophile · atypical lymphs' },
  ],

  highYield: [
    '**Epstein–Barr virus (HHV-4, a herpesvirus)** binds **gp350 → CD21 (CR2) on B cells**; spread by **saliva** — the "kissing disease".',
    'Classic triad: **fever + exudative pharyngitis + posterior cervical lymphadenopathy**, often with **splenomegaly**.',
    '**Atypical (Downey) lymphocytes are REACTIVE CD8 T cells** responding to EBV-infected B cells — they are **not** the infected cells themselves.',
    '**Heterophile antibodies (Monospot / Paul–Bunnell)** screen quickly but can be **false-negative early or in young children** → confirm with **EBV-specific serology: VCA IgM (acute), EBNA (past/late)**.',
    '**Ampicillin/amoxicillin → morbilliform rash** (not a true penicillin allergy). With splenomegaly, **avoid contact sports (splenic rupture)**. See [[hhl-ebv-associated-diseases]].',
  ],

  mechanism: {
    title: 'Saliva → B-cell infection → reactive T-cell response',
    steps: [
      { id: 's1', label: 'Saliva transfers EBV; gp350 binds CD21 (CR2) on B cells', emphasis: 'key' },
      { id: 's2', label: 'B-cell infection and polyclonal activation', emphasis: 'key' },
      { id: 's3', label: 'Reactive CD8 cytotoxic T-cell expansion → atypical (Downey) lymphocytes', emphasis: 'key' },
      { id: 's4', label: 'T-cell response drives pharyngitis, lymphadenopathy, splenomegaly' },
      { id: 's5', label: 'Enlarged spleen → risk of rupture with trauma', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Exudative pharyngitis with posterior cervical lymphadenopathy', mechanism: 'Reactive lymphoid proliferation to EBV', significance: 'key' },
    { sign: 'Splenomegaly', mechanism: 'Lymphoid expansion — carries a rupture risk', significance: 'key' },
    { sign: 'Atypical / Downey lymphocytes on the smear', mechanism: 'Reactive CD8 T cells (not infected B cells)', significance: 'key' },
    { sign: 'Morbilliform rash after ampicillin/amoxicillin', mechanism: 'EBV-associated immune reaction — not IgE penicillin allergy', significance: 'key' },
    { sign: 'Palatal petechiae and mild transaminitis', mechanism: 'Mucosal involvement and EBV hepatitis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Positive heterophile (Monospot / Paul–Bunnell)', meaning: 'Supports infectious mononucleosis (may be falsely negative early or in young children)' },
    { clue: 'VCA IgM positive', meaning: 'Acute EBV infection' },
    { clue: 'EBNA positive', meaning: 'Past / convalescent infection (EBNA appears weeks later)' },
    { clue: 'Lymphocytosis with >10% atypical lymphocytes', meaning: 'Reactive T-cell response typical of IM' },
  ],

  treatment: [
    { logic: 'Supportive care — the illness is self-limiting', detail: 'Rest, fluids and analgesia; there is no routine antiviral.' },
    { logic: 'Avoid contact/strenuous sport for about 3–4 weeks', detail: 'The enlarged spleen can rupture with trauma — the key safety counsel.' },
    { logic: 'Avoid ampicillin/amoxicillin; reserve steroids for complications', detail: 'These antibiotics provoke a rash; corticosteroids are only for airway obstruction or severe cytopenias.' },
  ],

  mnemonics: [
    { hook: 'IM triad: Fever, Pharyngitis, Posterior cervical nodes (+ big spleen)', expansion: ['Posterior — not anterior — cervical nodes', 'Splenomegaly = rupture risk'] },
    { hook: 'gp350 → CD21 is the door EBV opens on B cells; atypical lymphs are reactive T cells', expansion: ['EBV infects B cells via CD21', 'Downey cells = reactive CD8 T cells'] },
  ],

  traps: [
    {
      questionCategory: 'Identity of the atypical lymphocytes',
      wrongInstinct: 'The atypical (Downey) lymphocytes are the EBV-infected cells',
      rightAnswer: 'They are reactive CD8 cytotoxic T cells; EBV infects B cells (via CD21)',
      why: 'The virus targets B cells, and the large atypical cells are the T-cell army reacting to them — a favourite exam distinction.',
    },
    {
      questionCategory: 'Rash after amoxicillin in a sore throat',
      wrongInstinct: 'A rash after amoxicillin means the patient is penicillin-allergic',
      rightAnswer: 'In EBV mononucleosis this is a non-allergic morbilliform rash, not a true IgE penicillin allergy',
      why: 'The ampicillin/amoxicillin rash of IM is immune-mediated and does not indicate lifelong penicillin allergy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 19-year-old has a week of fever, exudative pharyngitis, posterior cervical lymphadenopathy and splenomegaly; a smear shows atypical lymphocytes, and he develops a rash after amoxicillin. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Streptococcal pharyngitis with penicillin allergy' },
        { id: 'b', text: 'Infectious mononucleosis (EBV)' },
        { id: 'c', text: 'Acute HIV seroconversion only' },
        { id: 'd', text: 'Diphtheria' },
      ],
      answerId: 'b',
      explanation: 'Fever, exudative pharyngitis, posterior cervical nodes, splenomegaly, atypical lymphocytes and the classic amoxicillin rash are hallmark EBV infectious mononucleosis.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A young child with suspected mononucleosis has a negative heterophile (Monospot) test. Which test best confirms acute EBV infection?',
      options: [
        { id: 'a', text: 'EBNA IgG' },
        { id: 'b', text: 'Repeat heterophile antibody test' },
        { id: 'c', text: 'Viral capsid antigen (VCA) IgM' },
        { id: 'd', text: 'EBV IgG avidity only' },
      ],
      answerId: 'c',
      explanation: 'Heterophile tests are frequently negative early and in young children. VCA IgM indicates acute infection, whereas EBNA rises only weeks later and marks past infection.',
      tests: 'investigation',
    },
  ],
};

export default hhlEbvMononucleosis;
