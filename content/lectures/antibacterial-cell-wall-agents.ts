import type { Lecture } from '../../lib/types';

export const antibacterialCellWallAgents: Lecture = {
  id: 'antibacterial-cell-wall-agents',
  title: 'Antibacterials I: Cell-Wall Agents',
  system: 'pharmacology',
  source: 'L7 — Antibacterial Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L7 Antibacterials' },
    { kind: 'mechanism', label: 'Cell wall & membrane inhibitors' },
    { kind: 'exam', label: 'β-lactams, vancomycin, resistance' },
  ],

  highYield: [
    'β-LACTAMS (penicillins, cephalosporins, carbapenems, monobactams) share a β-lactam ring that binds PENICILLIN-BINDING PROTEINS (transpeptidases) → blocks peptidoglycan CROSS-LINKING → bactericidal (works on GROWING cells; time-dependent killing). PENICILLINS: narrow (penicillin G — strep, syphilis), antistaphylococcal (cloxacillin — penicillinase-resistant), amino- (amoxicillin — broader) ± a β-LACTAMASE INHIBITOR (clavulanate), antipseudomonal (piperacillin-tazobactam).',
    'CEPHALOSPORINS broaden across generations: 1st (cefazolin — Gram-positive/surgical prophylaxis), 2nd, 3rd (ceftriaxone/cefotaxime — Gram-negative, meningitis; ceftazidime — Pseudomonas), 4th (cefepime), 5th (ceftaroline — MRSA). CARBAPENEMS (meropenem, imipenem) are the broadest β-lactams (reserved for resistant Gram-negatives/ESBL); AZTREONAM (monobactam) covers Gram-negatives and is safe in penicillin allergy.',
    'GLYCOPEPTIDES (VANCOMYCIN) bind the D-Ala-D-Ala terminus of peptidoglycan precursors → block cross-linking; IV vancomycin is the workhorse for MRSA and serious Gram-positive infection (oral only for C. difficile — not absorbed). Toxicities: nephrotoxicity, "RED MAN" infusion reaction (histamine — slow the infusion). Resistance (VRE) = D-Ala-D-Lac substitution.',
    'RESISTANCE mechanisms: (1) β-LACTAMASES that hydrolyse the ring (defeated by inhibitors/carbapenems, but ESBL/carbapenemases escalate); (2) ALTERED PBPs (MRSA = mecA/PBP2a → resistant to all standard β-lactams; pneumococcal penicillin resistance); (3) reduced permeability/efflux. β-lactams are generally SAFE (allergy/cross-reactivity the main issue) because human cells lack a cell wall.',
    '**The take-home: β-lactams block PBP transpeptidases (bactericidal) — penicillins/cephalosporins (widening spectrum)/carbapenems (broadest)/aztreonam (Gram-neg, PCN-allergy safe); vancomycin binds D-Ala-D-Ala for MRSA (red-man, nephrotoxic; oral for C. diff). Resistance = β-lactamase, altered PBP (MRSA), or permeability.** Protein-synthesis and DNA/folate inhibitors are in [[antibacterial-protein-synthesis-inhibitors]]; allergy in [[adverse-drug-reactions-allergy]].',
  ],

  mechanism: {
    title: 'β-lactams block PBP transpeptidase (no cross-linking); vancomycin binds D-Ala-D-Ala; resistance = β-lactamase/altered PBP',
    steps: [
      { id: 's1', label: 'β-lactams bind PBPs → block peptidoglycan cross-linking → bactericidal (growing cells)', emphasis: 'key' },
      { id: 's2', label: 'Penicillins → cephalosporins (1st→5th gen, widening) → carbapenems (broadest) → aztreonam (Gram-neg, PCN-safe)', emphasis: 'key' },
      { id: 's3', label: 'Vancomycin binds D-Ala-D-Ala → MRSA/serious Gram-positive; oral for C. difficile', emphasis: 'key' },
      { id: 's4', label: 'Vancomycin: nephrotoxic + red-man (slow infusion); VRE = D-Ala-D-Lac', emphasis: 'danger' },
      { id: 's5', label: 'Resistance: β-lactamase (ESBL/carbapenemase), altered PBP (MRSA mecA), permeability/efflux', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bactericidal drug blocking peptidoglycan cross-linking', mechanism: 'β-lactam binding penicillin-binding proteins', significance: 'key' },
    { sign: 'MRSA resistant to all standard β-lactams', mechanism: 'Altered PBP2a (mecA gene)', significance: 'key' },
    { sign: 'Flushing/erythema of upper body during IV vancomycin', mechanism: 'Red-man syndrome (histamine — slow infusion)', significance: 'key' },
    { sign: '3rd-generation cephalosporin for bacterial meningitis', mechanism: 'Ceftriaxone/cefotaxime (CSF penetration, Gram-negative cover)', significance: 'key' },
    { sign: 'Carbapenem reserved for ESBL Gram-negative infection', mechanism: 'Meropenem (broadest β-lactam)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The target of β-lactam antibiotics', meaning: 'Penicillin-binding proteins (transpeptidases)' },
    { clue: 'The mechanism of MRSA β-lactam resistance', meaning: 'Altered PBP2a (mecA)' },
    { clue: 'The binding target of vancomycin', meaning: 'The D-Ala-D-Ala terminus of peptidoglycan precursors' },
    { clue: 'The β-lactam safe to use in penicillin allergy', meaning: 'Aztreonam (monobactam)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cell-wall agents are bactericidal and generally safe (no human cell wall), so allergy and resistance drive choice: escalate penicillin → cephalosporin → carbapenem for Gram-negatives, use vancomycin/anti-MRSA agents for resistant Gram-positives, and reserve carbapenems for ESBL. Resistance patterns (β-lactamase, MRSA PBP2a, VRE) shape empiric therapy. Other antibiotic classes are in [[antibacterial-protein-synthesis-inhibitors]]; β-lactam allergy/cross-reactivity in [[adverse-drug-reactions-allergy]].' },
  ],

  mnemonics: [
    { hook: '"β-lactams block the Building of the wall (PBP cross-link); vancomycin caps D-Ala-D-Ala"', expansion: ['Cephalosporins broaden 1st→5th gen', 'Carbapenem = broadest; aztreonam = PCN-safe'] },
    { hook: 'Vancomycin "red man = infusion-rate reaction (histamine), not true allergy"', expansion: ['Oral vanc = C. difficile only', 'VRE = D-Ala-D-Lac'] },
  ],

  traps: [
    {
      questionCategory: 'Red-man syndrome vs true allergy',
      wrongInstinct: 'Flushing during a vancomycin infusion means the patient is allergic and must never receive it again',
      rightAnswer: '"Red-man syndrome" is a rate-related, non-immune HISTAMINE release reaction (flushing/erythema of the upper body) — NOT an IgE allergy; it is managed by SLOWING the infusion (± antihistamine), and vancomycin can still be used, unlike a true anaphylactic allergy',
      why: 'Mislabelling red-man syndrome as allergy needlessly removes a key anti-MRSA drug; recognising it as an infusion-rate phenomenon allows safe continued use.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Methicillin-resistant Staphylococcus aureus (MRSA) resists β-lactams through:',
      options: [
        { id: 'a', text: 'Producing a β-lactamase only' },
        { id: 'b', text: 'An altered penicillin-binding protein (PBP2a, encoded by mecA)' },
        { id: 'c', text: 'Thickening its capsule' },
        { id: 'd', text: 'Efflux of vancomycin' },
      ],
      answerId: 'b',
      explanation: 'MRSA carries the mecA gene encoding PBP2a, an altered penicillin-binding protein with low affinity for β-lactams, making it resistant to all standard β-lactam antibiotics (so vancomycin or newer anti-MRSA agents are needed). β-lactamase production is a separate mechanism defeated by inhibitors.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Oral vancomycin is used specifically to treat:',
      options: [
        { id: 'a', text: 'MRSA bacteraemia' },
        { id: 'b', text: 'Clostridioides difficile colitis (because it is not absorbed and acts in the gut lumen)' },
        { id: 'c', text: 'Pseudomonas pneumonia' },
        { id: 'd', text: 'Syphilis' },
      ],
      answerId: 'b',
      explanation: 'Vancomycin is not absorbed from the gut, so oral vancomycin stays in the lumen and is used for C. difficile colitis. Systemic Gram-positive/MRSA infections require intravenous vancomycin, where nephrotoxicity and red-man syndrome are the key concerns.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default antibacterialCellWallAgents;
