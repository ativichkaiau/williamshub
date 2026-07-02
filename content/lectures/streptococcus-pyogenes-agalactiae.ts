import type { Lecture } from '../../lib/types';

export const streptococcusPyogenesAgalactiae: Lecture = {
  id: 'streptococcus-pyogenes-agalactiae',
  title: 'Streptococcus pyogenes & agalactiae (GAS/GBS)',
  system: 'microbiology',
  source: 'L11 — Gram-Positive Cocci II (Streptococci)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L11 GAS/GBS' },
    { kind: 'mechanism', label: 'β-haemolysis; Lancefield; post-strep' },
    { kind: 'exam', label: 'Rheumatic fever vs PSGN; GBS neonatal' },
  ],

  highYield: [
    '**Streptococci are catalase-NEGATIVE (vs staph) Gram-positive cocci in CHAINS, classified by HAEMOLYSIS (β = complete/clear, α = partial/green, γ = none) and LANCEFIELD group. GROUP A strep = S. PYOGENES (β-haemolytic, BACITRACIN-SENSITIVE, PYR+); GROUP B = S. AGALACTIAE (β-haemolytic, BACITRACIN-resistant, CAMP-positive, hippurate+).**',
    '**S. PYOGENES (GAS) causes SUPPURATIVE disease — pharyngitis ("strep throat"), scarlet fever (erythrogenic toxin), impetigo, erysipelas, cellulitis, NECROTISING FASCIITIS and streptococcal TOXIC SHOCK (superantigens). Virulence: M protein (anti-phagocytic, key antigen), streptolysins, hyaluronidase, DNases. It is exquisitely PENICILLIN-sensitive.**',
    '**Two NON-suppurative POST-streptococcal sequelae are high-yield: RHEUMATIC FEVER (after PHARYNGITIS; immune cross-reactivity/molecular mimicry → carditis, migratory arthritis, chorea, Jones criteria; prevented by treating strep throat) and POST-STREPTOCOCCAL GLOMERULONEPHRITIS (after pharyngitis OR skin infection; immune-complex nephritic syndrome, not prevented by antibiotics). Rheumatic fever follows throat; PSGN follows throat or skin.**',
    '**S. AGALACTIAE (GBS) colonises the vagina/GI tract and is a leading cause of NEONATAL sepsis, pneumonia and MENINGITIS (early- and late-onset) — hence antenatal GBS screening and intrapartum penicillin prophylaxis. It also causes infection in pregnant women, diabetics and the elderly. CAMP test and hippurate hydrolysis identify it.**',
    '**The take-home: catalase-NEGATIVE cocci in chains. GROUP A (S. pyogenes, bacitracin-SENSITIVE): pharyngitis, scarlet fever, impetigo, necrotising fasciitis, TSS — and POST-strep RHEUMATIC FEVER (throat only) + PSGN (throat OR skin); penicillin-sensitive. GROUP B (S. agalactiae, CAMP+): NEONATAL sepsis/meningitis → intrapartum prophylaxis.** Pneumococcus/enterococci are [[streptococcus-pneumoniae-enterococci]]; PSGN is [[iga-nephropathy-postinfectious-gn]].',
  ],

  mechanism: {
    title: 'Catalase− chains, Lancefield groups; Group A (S. pyogenes, bacitracin-sensitive): suppurative + post-strep rheumatic fever (throat)/PSGN (throat or skin); Group B (S. agalactiae, CAMP+): neonatal sepsis',
    steps: [
      { id: 's1', label: 'Catalase− cocci in chains; classify by haemolysis + Lancefield group', emphasis: 'key' },
      { id: 's2', label: 'GAS (S. pyogenes): β-haemolytic, bacitracin-SENSITIVE, M protein, penicillin-sensitive', emphasis: 'key' },
      { id: 's3', label: 'GAS suppurative: pharyngitis, scarlet fever, impetigo, necrotising fasciitis, TSS', emphasis: 'key' },
      { id: 's4', label: 'Post-strep: rheumatic fever (after THROAT); PSGN (after throat OR SKIN)', emphasis: 'danger' },
      { id: 's5', label: 'GBS (S. agalactiae): CAMP+, hippurate+ → neonatal sepsis/meningitis → intrapartum prophylaxis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'β-haemolytic, bacitracin-sensitive Gram-positive cocci in chains', mechanism: 'Group A strep (S. pyogenes)', significance: 'key' },
    { sign: 'Migratory arthritis, carditis and chorea weeks after strep throat', mechanism: 'Rheumatic fever (molecular mimicry)', significance: 'key' },
    { sign: 'Nephritic syndrome after strep throat OR skin infection', mechanism: 'Post-streptococcal glomerulonephritis', significance: 'key' },
    { sign: 'Rapidly spreading necrotising soft-tissue infection with toxic shock', mechanism: 'Invasive GAS (superantigens)', significance: 'key' },
    { sign: 'Neonatal sepsis/meningitis, CAMP-positive strep', mechanism: 'Group B strep (S. agalactiae)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The test for group A strep', meaning: 'Bacitracin sensitivity (+ PYR)' },
    { clue: 'The test for group B strep', meaning: 'CAMP test / hippurate hydrolysis' },
    { clue: 'The post-strep sequela following ONLY pharyngitis', meaning: 'Rheumatic fever' },
    { clue: 'The post-strep sequela following throat OR skin', meaning: 'Post-streptococcal glomerulonephritis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Group A strep (penicillin-sensitive) causes suppurative disease (pharyngitis, scarlet fever, impetigo, necrotising fasciitis, TSS) and the immune-mediated post-streptococcal sequelae — rheumatic fever (preventable by treating strep throat) and PSGN (not antibiotic-preventable, follows throat or skin). Group B strep is a leading neonatal pathogen, driving antenatal screening and intrapartum penicillin prophylaxis. Bacitracin/CAMP tests identify them. Pneumococcus and enterococci are [[streptococcus-pneumoniae-enterococci]]; PSGN is [[iga-nephropathy-postinfectious-gn]].' },
  ],

  mnemonics: [
    { hook: 'GAS "bacitracin-sensitive"; sequelae: "Rheumatic = throat only; PSGN = throat OR skin"', expansion: ['M protein = antiphagocytic', 'Penicillin-sensitive'] },
    { hook: '"Group B = Babies (neonatal sepsis/meningitis), CAMP+, intrapartum prophylaxis"', expansion: ['Hippurate+', 'Screen pregnant women'] },
  ],

  traps: [
    {
      questionCategory: 'Rheumatic fever vs PSGN precipitant',
      wrongInstinct: 'Both rheumatic fever and post-streptococcal glomerulonephritis follow either strep throat or skin infection equally',
      rightAnswer: 'The precipitants differ: RHEUMATIC FEVER follows only streptococcal PHARYNGITIS (not skin infection) and is PREVENTED by treating strep throat, whereas POST-STREPTOCOCCAL GLOMERULONEPHRITIS can follow EITHER pharyngitis OR a SKIN infection (impetigo) and is NOT prevented by antibiotic treatment of the infection',
      why: 'This distinction (throat-only rheumatic fever vs throat-or-skin PSGN, and only rheumatic fever being antibiotic-preventable) is a classic exam point and shapes why we treat strep throat but cannot avert PSGN.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which post-streptococcal complication follows ONLY pharyngitis (not skin infection) and is prevented by treating strep throat?',
      options: [
        { id: 'a', text: 'Post-streptococcal glomerulonephritis' },
        { id: 'b', text: 'Acute rheumatic fever' },
        { id: 'c', text: 'Scarlet fever' },
        { id: 'd', text: 'Impetigo' },
      ],
      answerId: 'b',
      explanation: 'Rheumatic fever follows Group A streptococcal pharyngitis (via molecular mimicry) and is prevented by promptly treating strep throat; post-streptococcal glomerulonephritis, by contrast, can follow throat or skin infection and is not antibiotic-preventable.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Streptococcus agalactiae (Group B strep) is clinically most important as a cause of:',
      options: [
        { id: 'a', text: 'Neonatal sepsis and meningitis (prevented by intrapartum prophylaxis)' },
        { id: 'b', text: 'Dental caries' },
        { id: 'c', text: 'Rheumatic fever' },
        { id: 'd', text: 'Toxic shock from tampons' },
      ],
      answerId: 'a',
      explanation: 'Group B strep colonises the maternal genital/GI tract and is a leading cause of early- and late-onset neonatal sepsis, pneumonia and meningitis, so pregnant women are screened and given intrapartum penicillin prophylaxis. It is CAMP-test and hippurate positive.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default streptococcusPyogenesAgalactiae;
