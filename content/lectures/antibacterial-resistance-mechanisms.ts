import type { Lecture } from '../../lib/types';

export const antibacterialResistanceMechanisms: Lecture = {
  id: 'antibacterial-resistance-mechanisms',
  title: 'Antibacterial Resistance & Stewardship',
  system: 'pharmacology',
  source: 'L7 — Antibacterial Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L7 Resistance' },
    { kind: 'mechanism', label: 'Enzymes, targets, efflux, uptake' },
    { kind: 'exam', label: 'β-lactamases; MRSA; VRE' },
  ],

  highYield: [
    'Bacteria resist antibiotics by four main mechanisms: (1) ENZYMATIC INACTIVATION of the drug (β-LACTAMASES hydrolyse β-lactams; aminoglycoside-modifying enzymes); (2) TARGET ALTERATION (MRSA\'s altered PBP2a; ribosomal methylation; gyrase mutation; VRE\'s D-Ala-D-Lac); (3) reduced UPTAKE/permeability; (4) EFFLUX pumps that expel the drug.',
    'Resistance is acquired by MUTATION or, importantly, HORIZONTAL GENE TRANSFER (plasmids/transposons via conjugation, transformation, transduction) — which spreads resistance genes rapidly between organisms. Antibiotic EXPOSURE selects resistant strains, so overuse and misuse drive the resistance crisis.',
    'High-yield resistant organisms: MRSA (altered PBP2a → resistant to all standard β-lactams → need vancomycin/anti-MRSA agents); ESBL and CARBAPENEMASE-producing Gram-negatives (escalating β-lactamases → carbapenems, then last-line agents); VRE (vancomycin-resistant enterococci); multidrug-resistant TB. Each escalates the therapeutic ladder.',
    'ANTIMICROBIAL STEWARDSHIP limits resistance: prescribe only when indicated, choose the NARROWEST effective agent, use adequate dose/duration, DE-ESCALATE once cultures return, combine agents where needed (e.g. TB, to prevent resistance), and control infection (hygiene, isolation). Right drug, right dose, right duration.',
    '**The take-home: resistance = enzyme inactivation (β-lactamase), target change (MRSA PBP2a, VRE), reduced uptake, or efflux — spread by mutation + horizontal gene transfer and selected by antibiotic exposure; MRSA/ESBL/carbapenemase/VRE escalate therapy; STEWARDSHIP (narrow, adequate, de-escalate) preserves antibiotics.** The drug classes are in [[antibacterial-cell-wall-agents]] and [[antibacterial-protein-synthesis-inhibitors]]; TB drugs in [[antimycobacterial-drugs]].',
  ],

  mechanism: {
    title: 'Resistance: enzyme inactivation / target alteration / reduced uptake / efflux; spread by mutation + horizontal transfer; stewardship preserves',
    steps: [
      { id: 's1', label: 'Enzymatic inactivation (β-lactamases, aminoglycoside-modifying enzymes)', emphasis: 'key' },
      { id: 's2', label: 'Target alteration (MRSA PBP2a, ribosomal methylation, gyrase mutation, VRE D-Ala-D-Lac)', emphasis: 'key' },
      { id: 's3', label: 'Reduced uptake/permeability; efflux pumps', emphasis: 'key' },
      { id: 's4', label: 'Spread: mutation + horizontal gene transfer (plasmids); selected by antibiotic exposure', emphasis: 'danger' },
      { id: 's5', label: 'Stewardship: narrowest effective agent, adequate dose/duration, de-escalate, infection control', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'β-lactam inactivated by a bacterial enzyme', mechanism: 'β-lactamase (enzymatic inactivation)', significance: 'key' },
    { sign: 'S. aureus resistant to all standard β-lactams', mechanism: 'Altered PBP2a (mecA) — target alteration (MRSA)', significance: 'key' },
    { sign: 'Enterococcus resistant to vancomycin', mechanism: 'D-Ala-D-Lac target change (VRE)', significance: 'key' },
    { sign: 'Rapid spread of a resistance gene between species', mechanism: 'Horizontal gene transfer (plasmid/transposon)', significance: 'key' },
    { sign: 'De-escalation of broad antibiotics once cultures return', mechanism: 'Antimicrobial stewardship', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The four main resistance mechanisms', meaning: 'Enzyme inactivation, target alteration, reduced uptake, efflux' },
    { clue: 'The mechanism of MRSA resistance', meaning: 'Altered penicillin-binding protein (PBP2a/mecA)' },
    { clue: 'How resistance genes spread rapidly between bacteria', meaning: 'Horizontal gene transfer (plasmids/transposons)' },
    { clue: 'The strategy to preserve antibiotic effectiveness', meaning: 'Antimicrobial stewardship' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Understanding resistance mechanisms guides both drug choice (β-lactamase → use inhibitor/carbapenem; MRSA → vancomycin; VRE/ESBL → last-line agents) and prevention: antimicrobial stewardship (narrowest effective agent, correct dose/duration, de-escalation, infection control, combination therapy for TB) is essential to preserve the classes in [[antibacterial-cell-wall-agents]] and [[antibacterial-protein-synthesis-inhibitors]]. TB requires multi-drug therapy to prevent resistance ([[antimycobacterial-drugs]]).' },
  ],

  mnemonics: [
    { hook: 'Resistance "DEAD": Destroy (enzyme), Efflux, Alter target, Decrease uptake', expansion: ['β-lactamase, MRSA PBP2a, VRE', 'Spread by plasmids'] },
    { hook: 'Stewardship: "right drug, right dose, right duration, de-escalate"', expansion: ['Narrowest effective agent', 'Combine for TB'] },
  ],

  traps: [
    {
      questionCategory: 'How resistance spreads',
      wrongInstinct: 'Antibiotic resistance only arises by spontaneous mutation within each bacterium',
      rightAnswer: 'While mutation contributes, much resistance spreads by HORIZONTAL GENE TRANSFER — bacteria share resistance genes on PLASMIDS/transposons via conjugation, transformation and transduction, transferring resistance even BETWEEN species — which is why resistance can appear and disseminate rapidly and why stewardship/infection control matter beyond any single patient',
      why: 'Horizontal transfer means resistance is a communicable, community-level problem (not just per-organism mutation), underpinning the rationale for stewardship and isolation of resistant organisms.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Methicillin-resistant Staphylococcus aureus resists β-lactams primarily by which mechanism?',
      options: [
        { id: 'a', text: 'Efflux pump' },
        { id: 'b', text: 'Target alteration (an altered penicillin-binding protein, PBP2a)' },
        { id: 'c', text: 'Reduced membrane permeability' },
        { id: 'd', text: 'Producing an aminoglycoside-modifying enzyme' },
      ],
      answerId: 'b',
      explanation: 'MRSA carries mecA encoding PBP2a, an altered penicillin-binding protein with low affinity for β-lactams — a target-alteration mechanism making it resistant to all standard β-lactams. β-lactamase production is a separate (enzymatic) mechanism.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A core principle of antimicrobial stewardship is to:',
      options: [
        { id: 'a', text: 'Always use the broadest antibiotic available' },
        { id: 'b', text: 'Use the narrowest effective agent for an adequate dose/duration and de-escalate on culture results' },
        { id: 'c', text: 'Treat every fever with antibiotics' },
        { id: 'd', text: 'Stop antibiotics as soon as the patient feels slightly better regardless of course' },
      ],
      answerId: 'b',
      explanation: 'Stewardship aims to preserve antibiotic effectiveness by prescribing only when indicated, selecting the narrowest effective agent at an adequate dose and duration, and de-escalating once cultures identify the organism — reducing the selection pressure that drives resistance.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default antibacterialResistanceMechanisms;
