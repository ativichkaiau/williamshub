import type { Lecture } from '../../lib/types';

export const antibacterialProteinSynthesisInhibitors: Lecture = {
  id: 'antibacterial-protein-synthesis-inhibitors',
  title: 'Antibacterials II: Protein, DNA & Folate Inhibitors',
  system: 'pharmacology',
  source: 'L7 — Antibacterial Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L7 Antibacterials' },
    { kind: 'mechanism', label: 'Ribosome, DNA & folate targets' },
    { kind: 'exam', label: 'Aminoglycosides, macrolides, fluoroquinolones' },
  ],

  highYield: [
    'PROTEIN-SYNTHESIS inhibitors target the bacterial (70S) ribosome. 30S subunit: AMINOGLYCOSIDES (gentamicin — bactericidal, concentration-dependent; synergy with β-lactams; nephro/ototoxic) and TETRACYCLINES (doxycycline — bacteriostatic; atypicals; avoid in children/pregnancy → teeth/bone; chelate cations). 50S subunit: MACROLIDES (azithromycin — atypicals; QT prolongation, CYP inhibition), CLINDAMYCIN (anaerobes; C. difficile risk), LINEZOLID (MRSA/VRE), CHLORAMPHENICOL (grey baby, aplastic anaemia).',
    'DNA/replication inhibitors: FLUOROQUINOLONES (ciprofloxacin, levofloxacin) inhibit DNA GYRASE (topoisomerase II) / topoisomerase IV → bactericidal, broad Gram-negative; toxicities: TENDONITIS/rupture, QT, aortic dissection, dysglycaemia, avoid in children/pregnancy. METRONIDAZOLE forms toxic radicals in ANAEROBES/protozoa (disulfiram reaction with alcohol). RIFAMPIN inhibits RNA polymerase (TB; potent CYP INDUCER; orange secretions).',
    'FOLATE-synthesis inhibitors: SULFONAMIDES (sulfamethoxazole) block dihydropteroate synthase and TRIMETHOPRIM blocks dihydrofolate reductase — used together (CO-TRIMOXAZOLE) for sequential synergistic blockade (UTI, PCP prophylaxis). Toxicities: sulfa allergy/SJS, hyperkalaemia, marrow suppression, kernicterus in neonates. Bacteria make folate (humans ingest it) → selectivity.',
    'BACTERICIDAL vs BACTERIOSTATIC and dosing kinetics matter: aminoglycosides/fluoroquinolones are CONCENTRATION-dependent (once-daily, high peak); β-lactams/vancomycin are TIME-dependent (keep above MIC). Resistance: ribosomal methylation, enzymatic drug modification (aminoglycoside-modifying enzymes), efflux, and target mutation (gyrase). Many carry class-defining toxicities that decide use.',
    '**The take-home: 30S = aminoglycosides (cidal, nephro/ototoxic) + tetracyclines (static, not in kids); 50S = macrolides (QT/CYP), clindamycin (C. diff), linezolid (MRSA); fluoroquinolones (gyrase, tendons); metronidazole (anaerobes, disulfiram); rifampin (RNA pol, CYP inducer); co-trimoxazole (sequential folate block).** These interact via CYP (macrolides/rifampin — [[drug-interactions-mechanisms]]); cell-wall agents are in [[antibacterial-cell-wall-agents]].',
  ],

  mechanism: {
    title: '30S (aminoglycosides/tetracyclines), 50S (macrolides/clindamycin/linezolid), gyrase (fluoroquinolones), folate (co-trimoxazole), RNA pol (rifampin)',
    steps: [
      { id: 's1', label: '30S: aminoglycosides (cidal, nephro/ototoxic), tetracyclines (static, not children/pregnancy)', emphasis: 'key' },
      { id: 's2', label: '50S: macrolides (QT, CYP inhibitor), clindamycin (anaerobes, C. diff), linezolid (MRSA/VRE)', emphasis: 'key' },
      { id: 's3', label: 'Fluoroquinolones inhibit DNA gyrase → tendonitis/rupture, QT (avoid kids/pregnancy)', emphasis: 'key' },
      { id: 's4', label: 'Metronidazole (anaerobes/protozoa, disulfiram); rifampin (RNA pol, CYP INDUCER)', emphasis: 'key' },
      { id: 's5', label: 'Co-trimoxazole = sequential folate block (sulfa DHPS + trimethoprim DHFR); sulfa allergy/SJS', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Nephrotoxicity and ototoxicity with a bactericidal Gram-negative agent', mechanism: 'Aminoglycoside (30S, concentration-dependent)', significance: 'key' },
    { sign: 'Tooth discolouration if given to a child/pregnant patient', mechanism: 'Tetracycline (chelates calcium in bone/teeth)', significance: 'key' },
    { sign: 'Tendon rupture / QT prolongation with a broad Gram-negative antibiotic', mechanism: 'Fluoroquinolone (DNA gyrase inhibitor)', significance: 'key' },
    { sign: 'Disulfiram-like reaction with alcohol', mechanism: 'Metronidazole', significance: 'key' },
    { sign: 'Orange body fluids and many drug interactions on TB therapy', mechanism: 'Rifampin (potent CYP450 inducer)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The subunit aminoglycosides and tetracyclines bind', meaning: 'The 30S ribosomal subunit' },
    { clue: 'The target of fluoroquinolones', meaning: 'DNA gyrase (topoisomerase II)/topoisomerase IV' },
    { clue: 'The two enzymes co-trimoxazole blocks', meaning: 'Dihydropteroate synthase (sulfa) + dihydrofolate reductase (trimethoprim)' },
    { clue: 'The antibiotic that potently induces CYP450', meaning: 'Rifampin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Choosing among these classes turns on spectrum, cidal/static status, dosing kinetics (concentration- vs time-dependent) and their signature toxicities — aminoglycoside nephro/ototoxicity, tetracycline in children, fluoroquinolone tendons, metronidazole–alcohol, rifampin/macrolide CYP effects ([[drug-interactions-mechanisms]]) and sulfa allergy/SJS ([[adverse-drug-reactions-allergy]]). They complement the cell-wall agents of [[antibacterial-cell-wall-agents]] for empiric and targeted therapy.' },
  ],

  mnemonics: [
    { hook: '"30S = Aminoglycosides + Tetracyclines (buy AT 30); 50S = Macrolides/Clindamycin/Linezolid/Chloramphenicol (CCEL L at 50)"', expansion: ['Aminoglycosides cidal; tetracyclines static', 'Linezolid = MRSA/VRE'] },
    { hook: '"Fluoroquinolone → gyrase + tendon; Metronidazole → anaerobes + disulfiram; Rifampin → RNA pol + CYP inducer + orange"', expansion: ['Co-trimoxazole = sequential folate block', 'Sulfa → SJS'] },
  ],

  traps: [
    {
      questionCategory: 'Rifampin: inducer vs inhibitor',
      wrongInstinct: 'Antibiotics that affect CYP450 all raise the levels of co-administered drugs',
      rightAnswer: 'RIFAMPIN is a potent CYP450 INDUCER — it LOWERS levels of many drugs (warfarin, oral contraceptives, protease inhibitors, etc.), risking therapeutic failure — whereas MACROLIDES (e.g. clarithromycin/erythromycin) are CYP INHIBITORS that RAISE drug levels; direction of the interaction is opposite',
      why: 'Confusing induction with inhibition inverts the clinical consequence (failure vs toxicity) — rifampin can cause contraceptive failure or subtherapeutic anticoagulation, while macrolides cause accumulation/toxicity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on ciprofloxacin develops posterior ankle pain and is warned about tendon rupture. Fluoroquinolones act by inhibiting:',
      options: [
        { id: 'a', text: 'The 50S ribosomal subunit' },
        { id: 'b', text: 'DNA gyrase (topoisomerase II) and topoisomerase IV' },
        { id: 'c', text: 'Dihydrofolate reductase' },
        { id: 'd', text: 'Cell-wall transpeptidase' },
      ],
      answerId: 'b',
      explanation: 'Fluoroquinolones inhibit bacterial DNA gyrase and topoisomerase IV, blocking DNA supercoiling/replication (bactericidal). Class toxicities include tendonitis/rupture, QT prolongation, CNS effects and dysglycaemia, and they are generally avoided in children and pregnancy.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Co-trimoxazole (trimethoprim–sulfamethoxazole) achieves synergy by:',
      options: [
        { id: 'a', text: 'Both inhibiting the 30S ribosome' },
        { id: 'b', text: 'Sequentially blocking two steps of bacterial folate synthesis (dihydropteroate synthase and dihydrofolate reductase)' },
        { id: 'c', text: 'Inhibiting DNA gyrase and RNA polymerase' },
        { id: 'd', text: 'Both binding penicillin-binding proteins' },
      ],
      answerId: 'b',
      explanation: 'Sulfamethoxazole inhibits dihydropteroate synthase and trimethoprim inhibits dihydrofolate reductase — sequential steps in the bacterial folate pathway — giving synergistic, often bactericidal, blockade. Humans obtain folate from the diet, providing selectivity.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default antibacterialProteinSynthesisInhibitors;
