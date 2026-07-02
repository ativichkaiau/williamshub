import type { Lecture } from '../../lib/types';

export const virologyPrinciplesClassification: Lecture = {
  id: 'virology-principles-classification',
  title: 'Principles of Virology & Classification',
  system: 'microbiology',
  source: 'L1 — Introduction to Medical Virology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L1 Virology Intro' },
    { kind: 'mechanism', label: 'Structure, replication, Baltimore' },
    { kind: 'exam', label: 'Enveloped vs naked; replication steps' },
  ],

  highYield: [
    '**Viruses are OBLIGATE INTRACELLULAR parasites — a nucleic-acid GENOME (DNA or RNA, never both) in a protein CAPSID (nucleocapsid), sometimes with a lipid ENVELOPE derived from host membrane. They have no metabolism of their own and MUST use host machinery to replicate. Capsid symmetry is ICOSAHEDRAL or HELICAL.**',
    '**ENVELOPED vs NAKED (non-enveloped) is a high-yield practical distinction: the ENVELOPE is lipid, so enveloped viruses are FRAGILE (destroyed by drying, detergents, alcohol → spread by close contact/droplet/blood/sexual routes), whereas NAKED viruses are HARDY (resist drying, acid, detergents, bile → survive the gut and fomites → faecal-oral spread, e.g. enteroviruses, rotavirus, norovirus, hepatitis A).**',
    '**The REPLICATION cycle: ATTACHMENT (to a specific receptor — determines tropism) → PENETRATION/entry → UNCOATING → GENE EXPRESSION & GENOME REPLICATION → ASSEMBLY → RELEASE (budding for enveloped; lysis for many naked). RNA viruses generally replicate in the CYTOPLASM (except influenza/retroviruses); DNA viruses generally in the NUCLEUS (except poxvirus).**',
    '**BALTIMORE classification groups viruses by genome/replication strategy (dsDNA, ssDNA, dsRNA, +ssRNA, −ssRNA, ssRNA-RT, dsDNA-RT). +ssRNA can act directly as mRNA; −ssRNA and retroviruses must carry/encode a POLYMERASE (RNA-dependent RNA polymerase; reverse transcriptase). Error-prone RNA replication drives antigenic variation and drug resistance.**',
    '**The take-home: virus = genome (DNA or RNA) + capsid ± lipid envelope; ENVELOPED = fragile (close contact/blood) vs NAKED = hardy (faecal-oral/fomites); replication = attach→penetrate→uncoat→replicate→assemble→release; Baltimore classifies by genome; +ssRNA = mRNA-like, −ssRNA/retro carry a polymerase.** Diagnosis (culture, antigen, serology, PCR) and antivirals build on this; the specific families follow in [[nonenveloped-rna-viruses]], [[dna-viruses-herpesviruses]] and beyond.',
  ],

  mechanism: {
    title: 'Genome + capsid ± envelope; enveloped fragile vs naked hardy; replication cycle; Baltimore by genome strategy',
    steps: [
      { id: 's1', label: 'Virus = DNA or RNA genome + protein capsid ± lipid envelope (obligate intracellular)', emphasis: 'key' },
      { id: 's2', label: 'Enveloped = fragile (contact/droplet/blood/sexual); naked = hardy (faecal-oral/fomites)', emphasis: 'key' },
      { id: 's3', label: 'Cycle: attach (receptor→tropism) → penetrate → uncoat → replicate → assemble → release', emphasis: 'key' },
      { id: 's4', label: 'RNA replicates in cytoplasm (except flu/retro); DNA in nucleus (except pox)', emphasis: 'key' },
      { id: 's5', label: 'Baltimore: +ssRNA acts as mRNA; −ssRNA/retro carry a polymerase (error-prone → variation)' },
    ],
  },

  examFindings: [
    { sign: 'A virus that survives the gut and spreads faecal-orally', mechanism: 'Naked (non-enveloped) virus — hardy', significance: 'key' },
    { sign: 'A virus inactivated by alcohol/detergent and spread by close contact', mechanism: 'Enveloped virus — fragile lipid envelope', significance: 'key' },
    { sign: 'Viral tropism for specific cells/tissues', mechanism: 'Attachment to a specific host receptor', significance: 'key' },
    { sign: 'A +ssRNA genome directly translated as mRNA', mechanism: 'Positive-sense RNA virus', significance: 'supportive' },
    { sign: 'High antigenic variability and rapid resistance', mechanism: 'Error-prone RNA (RdRp) replication', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two components every virus has', meaning: 'A nucleic-acid genome and a protein capsid' },
    { clue: 'Why naked viruses spread faecal-orally', meaning: 'They are hardy (resist acid, bile, drying, detergents)' },
    { clue: 'The step of the replication cycle that sets tropism', meaning: 'Attachment (receptor binding)' },
    { clue: 'The classification scheme based on genome/replication', meaning: 'The Baltimore classification' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Viral structure predicts transmission and control: enveloped viruses (fragile) spread by close contact/blood/droplet and are killed by alcohol/detergents, whereas naked viruses (hardy) survive fomites and the gut for faecal-oral spread — guiding hygiene and disinfection. The replication cycle defines antiviral drug targets and diagnostic methods (antigen, serology, PCR, culture). The specific viral families follow in [[nonenveloped-rna-viruses]], [[enveloped-rna-viruses-orthomyxo-paramyxo]], [[dna-viruses-herpesviruses]] and [[retroviruses-hiv]].' },
  ],

  mnemonics: [
    { hook: '"Enveloped = fragile (contact/blood); Naked = hardy (faecal-oral/fomites)"', expansion: ['Alcohol kills enveloped', 'Naked survives the gut'] },
    { hook: 'Replication "A PURR": Attach, Penetrate, Uncoat, Replicate, Release', expansion: ['RNA cytoplasm (except flu/retro)', 'DNA nucleus (except pox)'] },
  ],

  traps: [
    {
      questionCategory: 'Enveloped vs naked virus stability',
      wrongInstinct: 'Having an envelope makes a virus more robust and harder to kill',
      rightAnswer: 'The opposite: the lipid ENVELOPE is FRAGILE — easily disrupted by drying, heat, acid, bile, detergents and alcohol — so ENVELOPED viruses are LESS stable in the environment and spread by close contact/droplet/blood/sexual routes, whereas NAKED (non-enveloped) viruses are HARDY and survive fomites and the gastrointestinal tract for faecal-oral transmission',
      why: 'The envelope\'s lipid nature makes enveloped viruses easy to inactivate (hand hygiene, alcohol), while naked viruses persist on surfaces and through the gut — a distinction that drives transmission routes and infection control.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A non-enveloped (naked) virus is characteristically:',
      options: [
        { id: 'a', text: 'Fragile and spread mainly by blood or sexual contact' },
        { id: 'b', text: 'Hardy — resistant to acid, bile and drying — and often spread faecal-orally' },
        { id: 'c', text: 'Unable to survive outside the body' },
        { id: 'd', text: 'Always a DNA virus' },
      ],
      answerId: 'b',
      explanation: 'Naked viruses lack a fragile lipid envelope, so they resist acid, bile, detergents and drying and survive on fomites and through the gut — favouring faecal-oral transmission (e.g. enteroviruses, rotavirus, norovirus, hepatitis A). Enveloped viruses are fragile and spread by close contact/blood/sexual routes.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which step of the viral replication cycle principally determines a virus\'s tissue tropism?',
      options: [
        { id: 'a', text: 'Release' },
        { id: 'b', text: 'Attachment to a specific host cell receptor' },
        { id: 'c', text: 'Assembly' },
        { id: 'd', text: 'Uncoating' },
      ],
      answerId: 'b',
      explanation: 'Attachment depends on the interaction between viral surface proteins and specific host cell receptors, so it determines which cells/tissues a virus can infect (tropism) — e.g. HIV gp120 binding CD4. Subsequent steps (penetration, uncoating, replication, assembly, release) follow.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default virologyPrinciplesClassification;
