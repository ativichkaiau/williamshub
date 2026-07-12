import type { Lecture } from '../../lib/types';

export const hhlMalariaRdtMolecular: Lecture = {
  id: 'hhl-malaria-rdt-molecular',
  title: 'Malaria: RDTs & Molecular Diagnosis',
  system: 'heme',
  source: 'L25 — Malaria: Laboratory Diagnosis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L25 Malaria Lab Dx' },
    { kind: 'investigation', label: 'RDT antigen · PCR' },
    { kind: 'disease', label: 'Plasmodium detection' },
  ],

  highYield: [
    '**Rapid diagnostic tests (RDTs)** detect parasite antigens: **HRP2** is **P. falciparum-specific**; **pLDH** and **aldolase** are **pan-species**. Fast, no microscope, ideal for the field.',
    '**HRP2 pitfalls:** **false-negatives from pfhrp2/3 gene deletions**, **persistent positivity for weeks after cure** (so it cannot judge treatment response), and **poor sensitivity at low parasitemia**.',
    '**pLDH clears quickly** after parasite death, so a pLDH-based test tracks viability/response better than HRP2.',
    '**PCR is the most sensitive and specific test**: **species confirmation, mixed infections, and submicroscopic/low-density parasitemia**; the reference method for epidemiology — but slow, costly and not point-of-care.',
    '**Microscopy stays the practical gold standard** for density and response; use **RDT for rapid triage** and **PCR to confirm** low-density, mixed or species-uncertain cases. See [[hhl-malaria-microscopy]].',
  ],

  mechanism: {
    title: 'Choosing a diagnostic: triage → confirm → resolve the hard cases',
    steps: [
      { id: 's1', label: 'Rapid triage: RDT antigen (HRP2 / pLDH / aldolase)', emphasis: 'key' },
      { id: 's2', label: 'Confirm species + density: Giemsa microscopy', emphasis: 'key' },
      { id: 's3', label: 'Low-density / mixed / species uncertain: PCR', emphasis: 'key' },
      { id: 's4', label: 'Beware HRP2 false-negative (deletion) and false-positive (persistence)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'HRP2 band positive, pLDH band negative', mechanism: 'HRP2 is falciparum-specific → P. falciparum', significance: 'key' },
    { sign: 'pLDH / aldolase positive, HRP2 negative', mechanism: 'Pan-species antigen only → non-falciparum species', significance: 'key' },
    { sign: 'RDT still positive after treatment but film now negative', mechanism: 'HRP2 antigen persistence, not treatment failure', significance: 'key' },
    { sign: 'RDT negative despite convincing clinical malaria', mechanism: 'Low parasitemia or pfhrp2/3 deletion — confirm by microscopy/PCR', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'HRP2-only positive RDT', meaning: 'P. falciparum' },
    { clue: 'pLDH positive with HRP2 negative', meaning: 'Non-falciparum (vivax/ovale/malariae)' },
    { clue: 'RDT persistently positive weeks after therapy', meaning: 'Antigen persistence — assess cure with microscopy or pLDH, not HRP2' },
    { clue: 'Negative RDT but high clinical suspicion', meaning: 'Do microscopy and PCR (HRP2 deletion or submicroscopic infection)' },
  ],

  treatment: [
    { logic: 'Do not judge cure with an HRP2 RDT', detail: 'HRP2 lingers for weeks; use microscopy or a pLDH-based assay to confirm clearance.' },
    { logic: 'Confirm species before radical cure', detail: 'PCR or microscopy identifies vivax/ovale, which need primaquine after G6PD testing.' },
  ],

  mnemonics: [
    { hook: 'HRP2 = Him (falciparum only); pLDH/aldolase = Pan (all species)', expansion: ['HRP2: falciparum-specific, persists after cure', 'pLDH: pan-species, clears fast → tracks response'] },
    { hook: 'PCR = Pretty Confirmatory & Rare-case', expansion: ['Most sensitive/specific', 'Best for low-density, mixed and species confirmation', 'Reference/epidemiology, not point-of-care'] },
  ],

  traps: [
    {
      questionCategory: 'RDT positive after treatment',
      wrongInstinct: 'A still-positive RDT weeks after therapy means the treatment failed',
      rightAnswer: 'HRP2 antigen persists for weeks after cure — reassess with microscopy or a pLDH test, not HRP2',
      why: 'HRP2 lingers even when parasites are cleared, so it cannot be used to monitor response; only a viability marker or film shows true cure.',
    },
    {
      questionCategory: 'Negative RDT excluding malaria',
      wrongInstinct: 'A negative RDT rules malaria out',
      rightAnswer: 'pfhrp2/3 deletions and low parasitemia cause false-negatives — confirm with microscopy and PCR when suspicion is high',
      why: 'Antigen tests can be falsely negative; the more sensitive microscopy/PCR must back them up in a convincing clinical picture.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Three weeks after a completed and clinically successful course for falciparum malaria, a patient still has a positive HRP2 rapid test but a negative blood film. What does this indicate?',
      options: [
        { id: 'a', text: 'Treatment failure requiring a new regimen' },
        { id: 'b', text: 'A new re-infection' },
        { id: 'c', text: 'Persistence of HRP2 antigen after cure' },
        { id: 'd', text: 'A false-positive from another Plasmodium species' },
      ],
      answerId: 'c',
      explanation: 'HRP2 antigen persists in blood for weeks after parasite clearance, so a positive HRP2 RDT with a negative film reflects antigen persistence, not failure. Use microscopy or a pLDH assay to judge response.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Which test is most appropriate to confirm a suspected low-density or mixed-species malaria infection that microscopy cannot resolve?',
      options: [
        { id: 'a', text: 'HRP2 rapid diagnostic test' },
        { id: 'b', text: 'Polymerase chain reaction (PCR)' },
        { id: 'c', text: 'A repeat thick film only' },
        { id: 'd', text: 'Serology for anti-malarial antibodies' },
      ],
      answerId: 'b',
      explanation: 'PCR is the most sensitive and specific method, detecting submicroscopic and mixed infections and confirming species — the reference test when microscopy and RDT are inconclusive.',
      tests: 'investigation',
    },
  ],
};

export default hhlMalariaRdtMolecular;
