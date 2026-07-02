import type { Lecture } from '../../lib/types';

export const bacterialPhysiologyGrowthIdentification: Lecture = {
  id: 'bacterial-physiology-growth-identification',
  title: 'Bacterial Physiology, Growth & Identification',
  system: 'microbiology',
  source: 'L8 — Introduction to Medical Bacteriology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L8 Growth & ID' },
    { kind: 'mechanism', label: 'Oxygen classes; media; growth curve' },
    { kind: 'exam', label: 'MacConkey; selective vs differential' },
  ],

  highYield: [
    '**Most medical bacteria are CHEMOORGANOTROPHS (carbon + energy from organic compounds). They make ATP by RESPIRATION (glycolysis → Krebs → electron transport; O2 = final acceptor in aerobic, ~38 ATP) or FERMENTATION (no ETC, ~2 ATP). This underlies the OXYGEN classes: obligate AEROBES, obligate ANAEROBES (lack catalase/superoxide dismutase, killed by O2), FACULTATIVE anaerobes (grow either way), and MICROAEROPHILES (low O2).**',
    '**Bacteria grow by BINARY FISSION with a GROWTH CURVE: LAG (adapting, making enzymes) → LOG/exponential (max growth, most antibiotic-susceptible) → STATIONARY (growth = death, nutrients/waste limiting) → DEATH. Generation (doubling) time varies hugely — E. coli ~20 min but M. tuberculosis ~15–20 h (why TB is slow to culture and treat).**',
    '**CULTURE MEDIA are classified by purpose: PLAIN (non-fastidious); ENRICHED (add blood/serum/egg for fastidious organisms, e.g. blood/chocolate agar); DIFFERENTIAL (distinguish organisms by appearance — blood agar shows haemolysis); SELECTIVE (inhibitors suppress unwanted flora); and TRANSPORT media (preserve specimens). MACCONKEY agar is both selective (bile salts/crystal violet inhibit Gram-positives) AND differential (pink lactose-fermenters vs colourless non-fermenters).**',
    '**IDENTIFICATION is PHENOTYPIC — microscopy/Gram stain, colony morphology, biochemical tests (catalase, oxidase, coagulase, fermentation), serology, antibiogram — or GENOTYPIC (16S rRNA/DNA sequencing). MALDI-TOF mass spectrometry now gives rapid protein-fingerprint identification. KOCH\'S POSTULATES conceptually link an organism to a disease. Antibiotic susceptibility testing then guides therapy.**',
    '**The take-home: medical bacteria = chemoorganotrophs; respiration (O2, ~38 ATP) vs fermentation (~2 ATP) → OXYGEN classes (aerobe/anaerobe/facultative/microaerophile). Growth curve LAG→LOG (most susceptible)→STATIONARY→DEATH; TB doubles slowly. MEDIA: enriched/differential/SELECTIVE (MacConkey = both). ID: phenotypic (Gram/biochemical), genotypic, MALDI-TOF.** Structure/staining is [[bacterial-structure-cell-wall]]; genetics/resistance is [[bacterial-gene-transfer]]/[[antibiotic-resistance-mechanisms]].',
  ],

  mechanism: {
    title: 'Chemoorganotrophs; respiration vs fermentation → oxygen classes; growth curve (lag→log→stationary→death); media (enriched/differential/selective; MacConkey both); ID phenotypic/genotypic/MALDI-TOF',
    steps: [
      { id: 's1', label: 'Chemoorganotroph: ATP by respiration (O2, ~38 ATP) or fermentation (~2 ATP)', emphasis: 'key' },
      { id: 's2', label: 'Oxygen classes: aerobe / anaerobe / facultative / microaerophile', emphasis: 'key' },
      { id: 's3', label: 'Growth curve: lag → log (most antibiotic-susceptible) → stationary → death', emphasis: 'key' },
      { id: 's4', label: 'Media: enriched (fastidious), differential (haemolysis), selective (MacConkey = both)', emphasis: 'key' },
      { id: 's5', label: 'ID: phenotypic (Gram/colony/biochemical), genotypic (16S), MALDI-TOF', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Pink colonies on MacConkey agar', mechanism: 'Lactose fermenter (e.g. E. coli/Klebsiella)', significance: 'key' },
    { sign: 'Colourless colonies on MacConkey agar', mechanism: 'Non-lactose fermenter (e.g. Salmonella/Shigella)', significance: 'key' },
    { sign: 'An organism killed by exposure to oxygen', mechanism: 'Obligate anaerobe (lacks catalase/SOD)', significance: 'key' },
    { sign: 'A slow-growing organism taking weeks to culture', mechanism: 'Long generation time (e.g. M. tuberculosis)', significance: 'supportive' },
    { sign: 'Rapid organism identification by protein mass spectrum', mechanism: 'MALDI-TOF mass spectrometry', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The agar that is both selective and differential for Gram-negatives', meaning: 'MacConkey agar' },
    { clue: 'The growth phase of maximum antibiotic susceptibility', meaning: 'Log (exponential) phase' },
    { clue: 'The oxygen class killed by oxygen', meaning: 'Obligate anaerobe' },
    { clue: 'The rapid mass-spectrometry ID method', meaning: 'MALDI-TOF' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Bacterial physiology drives the laboratory: oxygen requirements dictate culture conditions (anaerobic vs aerobic), generation time explains why TB is slow to grow and treat, and media selection (enriched for fastidious organisms; MacConkey selective/differential for enteric Gram-negatives) plus phenotypic/genotypic/MALDI-TOF identification and susceptibility testing deliver the diagnosis and guide antibiotics. Structure/staining is [[bacterial-structure-cell-wall]]; genetics and resistance are [[bacterial-gene-transfer]] and [[antibiotic-resistance-mechanisms]].' },
  ],

  mnemonics: [
    { hook: 'Growth curve: "Lag, Log, Stationary, Death" (Log = most drug-susceptible)', expansion: ['Respiration ~38 ATP; fermentation ~2', 'TB doubles ~15–20 h'] },
    { hook: 'MacConkey: "Pink = lactose fermenter; colourless = non-fermenter" (selective + differential)', expansion: ['Enriched = fastidious', 'MALDI-TOF = rapid ID'] },
  ],

  traps: [
    {
      questionCategory: 'Selective vs differential media',
      wrongInstinct: 'Selective and differential media mean the same thing',
      rightAnswer: 'A SELECTIVE medium contains inhibitors that SUPPRESS unwanted organisms so only the target grows, whereas a DIFFERENTIAL medium lets organisms be DISTINGUISHED by their appearance/reaction (e.g. colour, haemolysis); MacConkey agar is BOTH — bile salts/crystal violet select for Gram-negatives while the lactose/pH indicator differentiates pink fermenters from colourless non-fermenters',
      why: 'Confusing the two misreads what a plate is doing; recognising MacConkey as selective (Gram-negatives only) AND differential (lactose fermentation) explains how a single plate both isolates and begins to identify enteric pathogens.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On MacConkey agar, a lactose-fermenting Gram-negative rod such as E. coli produces:',
      options: [
        { id: 'a', text: 'Colourless (pale) colonies' },
        { id: 'b', text: 'Pink colonies' },
        { id: 'c', text: 'No growth at all' },
        { id: 'd', text: 'Green metallic colonies only' },
      ],
      answerId: 'b',
      explanation: 'MacConkey agar contains lactose and a pH indicator; lactose fermenters (E. coli, Klebsiella) acidify the medium and form pink colonies, whereas non-fermenters (Salmonella, Shigella) remain colourless. Bile salts/crystal violet also make it selective for Gram-negatives.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'An obligate anaerobe is killed by oxygen mainly because it lacks:',
      options: [
        { id: 'a', text: 'A cell wall' },
        { id: 'b', text: 'Detoxifying enzymes such as catalase and superoxide dismutase' },
        { id: 'c', text: 'Ribosomes' },
        { id: 'd', text: 'DNA' },
      ],
      answerId: 'b',
      explanation: 'Obligate anaerobes lack (or have insufficient) catalase and superoxide dismutase, so they cannot detoxify the reactive oxygen species (superoxide, hydrogen peroxide) generated in the presence of oxygen, and are killed by it — hence the need for anaerobic culture.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default bacterialPhysiologyGrowthIdentification;
