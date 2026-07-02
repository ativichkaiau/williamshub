import type { Lecture } from '../../lib/types';

export const otherRespiratoryViruses: Lecture = {
  id: 'other-respiratory-viruses',
  title: 'RSV, Parainfluenza, Adenovirus & Measles',
  system: 'respiratory',
  source: 'L8 — Viral Respiratory Pathogens & Lung Infection',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L8 Respiratory Viruses' },
    { kind: 'disease', label: 'Bronchiolitis' },
    { kind: 'exam', label: 'Croup' },
  ],

  highYield: [
    '**Respiratory syncytial virus (RSV) is the leading cause of bronchiolitis and pneumonia in infants** (<2 years). It causes small-airway inflammation with **wheeze, tachypnoea, and hyperinflation**; the name comes from **syncytia (multinucleated giant cells)** formed by its fusion (F) protein. High-risk infants (prematurity, congenital heart/lung disease) can receive **palivizumab (anti-F monoclonal) prophylaxis**.',
    '**Parainfluenza virus is the classic cause of croup (acute laryngotracheobronchitis)** in young children: a **barking/"seal" cough, inspiratory stridor and hoarseness**, worse at night. The frontal neck X-ray shows subglottic narrowing — the **"steeple sign."** It is usually self-limited; treat with **corticosteroids (± nebulised adrenaline** if severe). Distinguish from bacterial epiglottitis ([[otitis-media-sinusitis-epiglottitis]]).',
    '**Adenovirus causes pharyngoconjunctival fever, acute respiratory disease and pneumonia** (outbreaks in crowded settings), and rhinovirus/coronaviruses cause the **common cold** (mostly upper-tract, self-limited). Human metapneumovirus causes an RSV-like illness in children and the elderly.',
    '**Measles (rubeola, a paramyxovirus) is a systemic infection with prominent respiratory involvement:** prodromal **cough, coryza, conjunctivitis (the "3 C\'s") and pathognomonic KOPLIK spots**, then a descending maculopapular rash. Pneumonia (with **Warthin–Finkeldey multinucleated giant cells**) is the commonest cause of measles death; late complication **subacute sclerosing panencephalitis (SSPE)**. It is vaccine-preventable (MMR).',
    '**The pattern to learn is age + syndrome:** infant + wheeze = RSV bronchiolitis; toddler + barking cough/stridor = parainfluenza croup; child + 3 C\'s + Koplik spots = measles; any age + coryza = rhinovirus/coronavirus cold. Most are supportive-care diagnoses, but recognising croup vs epiglottitis and vaccinating against measles are the high-yield actions.',
  ],

  mechanism: {
    title: 'Age + syndrome maps to the virus (mostly supportive care)',
    steps: [
      { id: 's1', label: 'RSV: infant bronchiolitis/pneumonia; syncytia (F protein); palivizumab prophylaxis', emphasis: 'key' },
      { id: 's2', label: 'Parainfluenza: croup — barking cough, stridor, steeple sign', emphasis: 'key' },
      { id: 's3', label: 'Adenovirus (pharyngoconjunctival fever); rhinovirus/coronavirus = common cold' },
      { id: 's4', label: 'Measles: 3 C\'s + Koplik spots → rash; giant-cell pneumonia; SSPE late', emphasis: 'key' },
      { id: 's5', label: 'Croup ≠ epiglottitis (viral, steeple, self-limited vs Hib emergency)' },
    ],
  },

  examFindings: [
    { sign: 'Wheezy, hyperinflated infant with a preceding coryza', mechanism: 'RSV bronchiolitis', significance: 'key' },
    { sign: 'Barking cough, inspiratory stridor, steeple sign', mechanism: 'Parainfluenza croup (laryngotracheobronchitis)', significance: 'key' },
    { sign: 'Cough, coryza, conjunctivitis + Koplik spots', mechanism: 'Measles prodrome (pathognomonic Koplik spots)', significance: 'key' },
    { sign: 'Multinucleated giant cells (syncytia) in respiratory tissue', mechanism: 'RSV or measles (Warthin–Finkeldey) fusion effect', significance: 'supportive' },
    { sign: 'Pharyngitis + conjunctivitis + fever in an outbreak', mechanism: 'Adenovirus (pharyngoconjunctival fever)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The leading cause of infant bronchiolitis', meaning: 'Respiratory syncytial virus (RSV)' },
    { clue: 'The virus causing croup and the "steeple sign"', meaning: 'Parainfluenza virus' },
    { clue: 'The pathognomonic oral sign of measles', meaning: 'Koplik spots' },
    { clue: 'The prophylactic monoclonal for high-risk infants against RSV', meaning: 'Palivizumab (anti-F protein)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Most are supportive, but croup responds to corticosteroids (± nebulised adrenaline) and must be told apart from the epiglottitis emergency ([[otitis-media-sinusitis-epiglottitis]]); RSV is prevented in high-risk infants by palivizumab; measles is vaccine-preventable and its giant-cell pneumonia can be fatal. Influenza and COVID-19 are covered in [[influenza-covid-pneumonia]]; antiviral drugs (incl. RSV) in [[respiratory-antiviral-drugs]].' },
  ],

  mnemonics: [
    { hook: 'Age→virus: "infant wheeze = RSV, toddler bark = parainfluenza croup, 3 C\'s = measles"', expansion: ['RSV = syncytia, palivizumab', 'Croup = steeple sign'] },
    { hook: 'Measles = "Cough, Coryza, Conjunctivitis + Koplik" then rash', expansion: ['Warthin–Finkeldey giant cells', 'SSPE years later', 'MMR prevents'] },
  ],

  traps: [
    {
      questionCategory: 'Croup versus epiglottitis',
      wrongInstinct: 'Any child with stridor should be treated as an airway emergency needing intubation',
      rightAnswer: 'Viral CROUP (parainfluenza; barking cough, steeple sign, gradual course) is usually self-limited and treated with corticosteroids ± nebulised adrenaline, whereas bacterial EPIGLOTTITIS (Hib; drooling, tripod, thumbprint, toxic, no cough) is the airway emergency',
      why: 'Conflating the two leads to over- or under-treatment; the barking cough and steeple sign of croup contrast with the drooling, toxic, cough-less child with a thumbprint sign in epiglottitis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 9-month-old has coryza followed by wheeze, tachypnoea and hyperinflation. Respiratory tissue shows multinucleated giant cells. The most likely cause is:',
      options: [
        { id: 'a', text: 'Respiratory syncytial virus' },
        { id: 'b', text: 'Streptococcus pneumoniae' },
        { id: 'c', text: 'Parainfluenza virus' },
        { id: 'd', text: 'Mycobacterium tuberculosis' },
      ],
      answerId: 'a',
      explanation: 'RSV is the leading cause of bronchiolitis in infants; its fusion (F) protein produces syncytia (multinucleated giant cells). High-risk infants may receive palivizumab prophylaxis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 2-year-old has a barking "seal-like" cough, inspiratory stridor and a "steeple sign" on neck X-ray. The best management is:',
      options: [
        { id: 'a', text: 'Immediate intubation for epiglottitis' },
        { id: 'b', text: 'Corticosteroids (± nebulised adrenaline if severe)' },
        { id: 'c', text: 'Intravenous ceftriaxone for Hib' },
        { id: 'd', text: 'Oseltamivir' },
      ],
      answerId: 'b',
      explanation: 'This is viral croup (parainfluenza laryngotracheobronchitis); it is usually self-limited and managed with corticosteroids, adding nebulised adrenaline for severe stridor — distinct from the bacterial epiglottitis emergency.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default otherRespiratoryViruses;
