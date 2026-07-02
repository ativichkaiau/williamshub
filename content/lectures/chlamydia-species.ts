import type { Lecture } from '../../lib/types';

export const chlamydiaSpecies: Lecture = {
  id: 'chlamydia-species',
  title: 'Chlamydia species',
  system: 'microbiology',
  source: 'L17 — Rickettsia & Chlamydia',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L17 Chlamydia' },
    { kind: 'mechanism', label: 'EB/RB developmental cycle' },
    { kind: 'exam', label: 'Trachoma; STI; atypical pneumonia' },
  ],

  highYield: [
    '**Chlamydiae are OBLIGATE INTRACELLULAR bacteria with a unique two-form DEVELOPMENTAL CYCLE: the ELEMENTARY BODY (EB) is the small, infectious, extracellular form that enters cells; inside, it becomes the RETICULATE BODY (RB), the metabolically active, replicating form (forms cytoplasmic inclusions), which reorganises back into EBs to infect new cells. They are "energy parasites" (use host ATP), do not Gram-stain well, and are treated with intracellular-penetrating agents — DOXYCYCLINE or AZITHROMYCIN (not β-lactams).**',
    '**CHLAMYDIA TRACHOMATIS is the key species, by serovar. Serovars A–C cause TRACHOMA — chronic follicular conjunctivitis, the leading infectious cause of BLINDNESS worldwide (scarring/entropion). Serovars D–K cause the commonest bacterial STI: urethritis/cervicitis (often ASYMPTOMATIC → PID, infertility, ectopic risk; reactive arthritis), NEONATAL conjunctivitis and PNEUMONIA (from the birth canal — "staccato" cough, afebrile). Serovars L1–L3 cause LYMPHOGRANULOMA VENEREUM (painless genital ulcer → tender inguinal buboes).**',
    '**CHLAMYDOPHILA PNEUMONIAE causes ATYPICAL ("walking") PNEUMONIA and bronchitis (person-to-person). CHLAMYDOPHILA PSITTACI causes PSITTACOSIS — atypical pneumonia acquired from BIRDS (parrots/poultry), an occupational/exposure clue. Diagnosis is by NAAT (PCR) for genital/ocular disease and serology for the respiratory species.**',
    '**So the exam framework for C. trachomatis is by serovar: A–C = trachoma (blindness), D–K = genital STI + neonatal disease, L1–L3 = LGV (buboes); plus C. pneumoniae (atypical pneumonia) and C. psittaci (bird-associated psittacosis). Treat gonorrhoea empirically for co-existing Chlamydia. The EB/RB cycle explains why they are intracellular and β-lactam-unresponsive.**',
    '**The take-home: Chlamydia = obligate intracellular, EB (infectious) ↔ RB (replicating) cycle; treat with DOXYCYCLINE/AZITHROMYCIN. C. TRACHOMATIS by serovar: A–C TRACHOMA (blindness), D–K genital STI/PID + neonatal conjunctivitis/pneumonia, L1–L3 LGV (buboes). C. PNEUMONIAE (atypical pneumonia); C. PSITTACI (birds → psittacosis).** Rickettsiae are [[rickettsia-orientia-coxiella]]; gonorrhoea co-infection is [[neisseria-meningitidis-gonorrhoeae]].',
  ],

  mechanism: {
    title: 'Obligate intracellular EB↔RB cycle (energy parasite; doxycycline/azithromycin, not β-lactams); C. trachomatis by serovar (A–C trachoma, D–K STI/neonatal, L1–L3 LGV); C. pneumoniae/psittaci atypical pneumonia',
    steps: [
      { id: 's1', label: 'EB = infectious extracellular form; RB = replicating intracellular form (inclusions)', emphasis: 'key' },
      { id: 's2', label: 'Obligate intracellular energy parasite → doxycycline/azithromycin (not β-lactams)', emphasis: 'key' },
      { id: 's3', label: 'C. trachomatis A–C = trachoma → leading infectious cause of blindness', emphasis: 'danger' },
      { id: 's4', label: 'C. trachomatis D–K = genital STI (PID/infertility) + neonatal conjunctivitis/pneumonia', emphasis: 'key' },
      { id: 's5', label: 'L1–L3 = LGV (buboes); C. pneumoniae/psittaci (birds) = atypical pneumonia', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Chronic follicular conjunctivitis with scarring in an endemic area', mechanism: 'Trachoma (C. trachomatis A–C)', significance: 'key' },
    { sign: 'Asymptomatic cervicitis progressing to PID and infertility', mechanism: 'Genital chlamydia (serovars D–K)', significance: 'key' },
    { sign: 'Neonatal conjunctivitis and afebrile "staccato" pneumonia at 1–3 months', mechanism: 'Perinatal C. trachomatis', significance: 'key' },
    { sign: 'Painless genital ulcer with tender inguinal buboes', mechanism: 'Lymphogranuloma venereum (L1–L3)', significance: 'supportive' },
    { sign: 'Atypical pneumonia after exposure to pet birds', mechanism: 'Psittacosis (C. psittaci)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The infectious vs replicating chlamydial forms', meaning: 'Elementary body (infectious) / reticulate body (replicating)' },
    { clue: 'The C. trachomatis serovars causing blindness', meaning: 'A–C (trachoma)' },
    { clue: 'The serovars causing genital STI and neonatal disease', meaning: 'D–K' },
    { clue: 'The chlamydial species from birds', meaning: 'C. psittaci (psittacosis)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Chlamydiae are obligate intracellular pathogens (EB/RB cycle) treated with intracellular-active doxycycline or azithromycin, not β-lactams. C. trachomatis is organised by serovar — A–C (trachoma, a leading cause of preventable blindness), D–K (the commonest bacterial STI, causing asymptomatic infection → PID/infertility and neonatal conjunctivitis/pneumonia), and L1–L3 (LGV with buboes) — while C. pneumoniae and bird-associated C. psittaci cause atypical pneumonia. Because gonorrhoea and chlamydia co-occur, gonorrhoea is treated with empiric chlamydia cover. Rickettsiae are [[rickettsia-orientia-coxiella]]; gonorrhoea is [[neisseria-meningitidis-gonorrhoeae]].' },
  ],

  mnemonics: [
    { hook: 'C. trachomatis serovars: "A–C = eyes (trachoma), D–K = down there (STI/neonatal), L = LGV (buboes)"', expansion: ['EB = infectious, RB = replicating', 'Doxycycline/azithromycin'] },
    { hook: '"pSittaci = birdS (psittacosis); pneumoniae = atypical pneumonia"', expansion: ['Obligate intracellular', 'Treat gonorrhoea for chlamydia too'] },
  ],

  traps: [
    {
      questionCategory: 'Chlamydia elementary vs reticulate body',
      wrongInstinct: 'The reticulate body is the form that spreads chlamydia from person to person',
      rightAnswer: 'It is the ELEMENTARY BODY (EB) that is the small, metabolically inert, INFECTIOUS extracellular form that transmits infection and enters host cells; once inside, it differentiates into the RETICULATE BODY (RB), the larger, metabolically active, REPLICATING form that is NOT infectious and stays intracellular before reorganising back into EBs — so EB = infectious/transmission, RB = replication',
      why: 'Reversing EB and RB misstates the chlamydial life cycle: the infectious, transmissible form is the elementary body, while the reticulate body is the non-infectious replicating stage — a classic exam distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which Chlamydia trachomatis serovars cause trachoma, the leading infectious cause of blindness worldwide?',
      options: [
        { id: 'a', text: 'Serovars A–C' },
        { id: 'b', text: 'Serovars D–K' },
        { id: 'c', text: 'Serovars L1–L3' },
        { id: 'd', text: 'All serovars equally' },
      ],
      answerId: 'a',
      explanation: 'Serovars A–C cause trachoma (chronic follicular conjunctivitis leading to scarring and blindness); D–K cause genital STI and neonatal disease; and L1–L3 cause lymphogranuloma venereum (genital ulcer with inguinal buboes).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Why are β-lactam antibiotics not used to treat chlamydial infections?',
      options: [
        { id: 'a', text: 'Chlamydiae are obligate intracellular organisms best treated with intracellular-penetrating agents like doxycycline/azithromycin' },
        { id: 'b', text: 'Chlamydiae are viruses' },
        { id: 'c', text: 'They have a thick capsule' },
        { id: 'd', text: 'They are fungi' },
      ],
      answerId: 'a',
      explanation: 'Chlamydiae are obligate intracellular bacteria (with the EB/RB developmental cycle) that replicate inside host cells, so treatment uses agents that penetrate cells and act intracellularly — doxycycline or azithromycin — rather than β-lactams.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default chlamydiaSpecies;
