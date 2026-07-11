import type { Lecture } from '../../lib/types';

export const hrp2PerinatalInfections: Lecture = {
  id: 'hrp2-perinatal-infections',
  title: 'Perinatal (Congenital TORCH) Infections',
  system: 'repro',
  source: 'L4 — Perinatal (Congenital TORCH) Infections',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L4 Perinatal Infection' },
    { kind: 'disease', label: 'TORCH' },
    { kind: 'mechanism', label: 'Vertical transmission' },
    { kind: 'exam', label: 'Cataracts · calcifications' },
  ],

  highYield: [
    '**TORCH = Toxoplasma, Other (syphilis, VZV, parvovirus B19, HIV, Zika), Rubella, CMV, Herpes** — pathogens that cross the placenta (or infect at birth) to cause **congenital malformation, growth restriction, or neonatal disease**.',
    '**Earlier infection = worse malformation** (organogenesis); later infection tends to cause active neonatal disease. Common shared signs: **IUGR, hepatosplenomegaly, jaundice, thrombocytopenia (“blueberry-muffin” rash), chorioretinitis**.',
    '**Discriminators:** **Rubella** → **cataracts, PDA/pulmonary artery stenosis, sensorineural deafness** (classic triad). **CMV** (commonest congenital infection) → **periventricular calcifications**, deafness, microcephaly. **Toxoplasma** → **diffuse intracranial calcifications**, chorioretinitis, hydrocephalus.',
    '**Congenital syphilis** → rhinitis (“snuffles”), rash, Hutchinson teeth, saber shins; prevent with **maternal penicillin**. **Neonatal HSV** → acquired at delivery, can cause disseminated/CNS disease → **aciclovir** and caesarean for active lesions.',
    '**Prevention is the theme:** rubella **vaccination pre-pregnancy** (live — not during); avoid cat litter/undercooked meat (toxoplasma); screen and treat maternal **syphilis/HIV/HBV**; hygiene for CMV.',
  ],

  mechanism: {
    title: 'Maternal infection → placental/birth transmission → fetal injury',
    steps: [
      { id: 's1', label: 'Maternal (often mild) infection' },
      { id: 's2', label: 'Transplacental spread or exposure at delivery', emphasis: 'key' },
      { id: 's3', label: 'Early → malformation (organogenesis)', emphasis: 'key' },
      { id: 's4', label: 'Late → active neonatal disease' },
      { id: 's5', label: 'Shared: IUGR, HSM, jaundice, thrombocytopenia, chorioretinitis' },
    ],
  },

  examFindings: [
    { sign: 'Cataracts + PDA + deafness → congenital rubella', mechanism: 'First-trimester rubella infection', significance: 'key' },
    { sign: 'Periventricular calcifications + deafness → congenital CMV', mechanism: 'Commonest congenital infection', significance: 'key' },
    { sign: 'Diffuse intracranial calcifications + chorioretinitis → toxoplasmosis', mechanism: 'Transplacental Toxoplasma gondii', significance: 'key' },
    { sign: '“Blueberry-muffin” rash', mechanism: 'Dermal extramedullary haematopoiesis (rubella/CMV)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Neonate: cataracts, murmur (PDA), fails hearing screen', meaning: 'Congenital rubella syndrome' },
    { clue: 'Neonate: microcephaly, periventricular calcifications', meaning: 'Congenital CMV' },
    { clue: 'Neonate: hydrocephalus, diffuse cerebral calcifications, chorioretinitis', meaning: 'Congenital toxoplasmosis' },
    { clue: 'Infant: snuffles, rash, later Hutchinson teeth', meaning: 'Congenital syphilis' },
  ],

  treatment: [
    { logic: 'Prevent, screen, treat the mother', detail: 'Pre-pregnancy rubella vaccine; antenatal screening for syphilis/HIV/HBV; toxoplasma exposure avoidance; treat maternal infections.' },
    { logic: 'Neonatal antivirals/antibiotics', detail: 'Aciclovir for neonatal HSV; penicillin for congenital syphilis; ganciclovir for symptomatic CMV.' },
  ],

  mnemonics: [
    { hook: 'Rubella = Cataracts, Cardiac (PDA), Cochlear (deafness)', expansion: ['CMV = periVentricular calcifications', 'Toxo = diffuse/scattered calcifications'] },
    { hook: 'CMV calcifications hug the Ventricles; Toxo scatters everywhere', expansion: ['Both cause chorioretinitis'] },
  ],

  traps: [
    {
      questionCategory: 'CMV vs toxoplasma calcification pattern',
      wrongInstinct: 'Diffuse scattered intracranial calcifications indicate CMV',
      rightAnswer: 'CMV calcifications are periventricular; toxoplasmosis causes diffuse/scattered calcifications',
      why: 'The distribution of calcification is a classic exam discriminator between the two commonest calcifying congenital infections.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A neonate has congenital cataracts, a continuous murmur (PDA), and sensorineural deafness. The most likely congenital infection is:',
      options: [
        { id: 'a', text: 'Cytomegalovirus' },
        { id: 'b', text: 'Toxoplasmosis' },
        { id: 'c', text: 'Rubella' },
        { id: 'd', text: 'Herpes simplex' },
      ],
      answerId: 'c',
      explanation: 'The triad of cataracts, patent ductus arteriosus (or pulmonary artery stenosis) and sensorineural deafness is classic for congenital rubella syndrome.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Periventricular intracranial calcifications with microcephaly and deafness in a neonate suggest which congenital infection?',
      options: [
        { id: 'a', text: 'Rubella' },
        { id: 'b', text: 'Cytomegalovirus' },
        { id: 'c', text: 'Syphilis' },
        { id: 'd', text: 'Parvovirus B19' },
      ],
      answerId: 'b',
      explanation: 'Congenital CMV — the most common congenital infection — classically causes periventricular calcifications, microcephaly and sensorineural hearing loss.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'In general, congenital infection during the first trimester (organogenesis) tends to cause:',
      options: [
        { id: 'a', text: 'Structural malformations' },
        { id: 'b', text: 'Only mild disease' },
        { id: 'c', text: 'No fetal effects' },
        { id: 'd', text: 'Active neonatal sepsis only' },
      ],
      answerId: 'a',
      explanation: 'Infection during organogenesis (first trimester) tends to produce structural malformations, whereas later infection more often causes active neonatal disease/growth effects.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2PerinatalInfections;
