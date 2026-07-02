import type { Lecture } from '../../lib/types';
import { CYSTIC_FIBROSIS } from '../../lib/figures';

export const cysticFibrosis: Lecture = {
  id: 'cystic-fibrosis',
  title: 'Cystic Fibrosis',
  system: 'respiratory',
  source: 'L4 — Pathology of Obstructive Lung Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L4 Obstructive Lung' },
    { kind: 'disease', label: 'Cystic fibrosis' },
    { kind: 'exam', label: 'CFTR / sweat test' },
  ],

  highYield: [
    '**Cystic fibrosis (CF) is an autosomal-recessive disease caused by mutations in the CFTR gene (chromosome 7; ΔF508 is the commonest), which encodes a chloride channel.** Defective CFTR gives **thick, dehydrated secretions** that obstruct and damage multiple organs — it is the classic multisystem "one gene, many organs" disease and the commonest inherited cause of bronchiectasis in the young.',
    '**Lungs dominate the prognosis: viscid mucus impairs clearance → recurrent infection and bronchiectasis. Staphylococcus aureus and Haemophilus predominate early; PSEUDOMONAS AERUGINOSA colonisation marks progression** and worsening lung function. Chronic infection/inflammation leads to respiratory failure — the main cause of death.',
    '**Pancreatic exocrine insufficiency (thick secretions block ducts) → malabsorption, steatorrhoea, fat-soluble vitamin (A, D, E, K) deficiency and failure to thrive; CF-related diabetes develops later.** The gut can present in the neonate as **meconium ileus** and later as distal intestinal obstruction.',
    '**Other features: male infertility (congenital absence of the vas deferens), nasal polyps, sinusitis, clubbing, and salty sweat.** The classic vignette is a child with **recurrent chest infections + malabsorption/failure to thrive + a "salty" taste**, or a neonate with meconium ileus.',
    '**Diagnosis: an elevated SWEAT CHLORIDE (sweat test) plus CFTR genetic testing; newborn screening uses raised immunoreactive trypsinogen (IRT).** Management is multidisciplinary — airway clearance + inhaled/IV antibiotics, pancreatic enzyme replacement + ADEK vitamins, and increasingly **CFTR modulator** drugs. It bridges the obstructive lung disease of [[asthma-bronchiectasis-pathology]] with systemic malabsorption ([[fat-soluble-vitamins]]).',
  ],

  mechanism: {
    title: 'CFTR Cl⁻ channel defect → thick secretions → lung + pancreas + gut disease',
    steps: [
      { id: 's1', label: 'Autosomal recessive CFTR mutation (ΔF508) → defective Cl⁻ channel', emphasis: 'key' },
      { id: 's2', label: 'Thick, dehydrated secretions obstruct multiple organs', emphasis: 'key' },
      { id: 's3', label: 'Lungs: recurrent infection → bronchiectasis; Pseudomonas = progression', emphasis: 'danger' },
      { id: 's4', label: 'Pancreatic insufficiency → malabsorption + ADEK deficiency; meconium ileus' },
      { id: 's5', label: 'Dx: raised sweat chloride + genetics; multidisciplinary treatment', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent chest infections + malabsorption + failure to thrive', mechanism: 'Multisystem cystic fibrosis', significance: 'key' },
    { sign: 'Pseudomonas aeruginosa colonisation of the airway', mechanism: 'CF disease progression', significance: 'key' },
    { sign: 'Meconium ileus in a neonate', mechanism: 'Thick intestinal secretions (often the first sign of CF)', significance: 'key' },
    { sign: 'Elevated sweat chloride', mechanism: 'Defective CFTR chloride transport (diagnostic)', significance: 'key' },
    { sign: 'Male infertility with absent vas deferens', mechanism: 'CFTR-related developmental defect', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The gene and commonest mutation in CF', meaning: 'CFTR (chromosome 7); ΔF508' },
    { clue: 'The diagnostic test for CF', meaning: 'Elevated sweat chloride (+ CFTR genetics)' },
    { clue: 'The organism whose colonisation marks CF progression', meaning: 'Pseudomonas aeruginosa' },
    { clue: 'The neonatal GI presentation of CF', meaning: 'Meconium ileus' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CF is the commonest inherited cause of bronchiectasis ([[asthma-bronchiectasis-pathology]]) and a major cause of childhood malabsorption (fat-soluble vitamins — [[fat-soluble-vitamins]]); Pseudomonas colonisation and respiratory failure ([[respiratory-failure-oxygen-therapy]]) drive prognosis. Management is multidisciplinary (airway clearance, antibiotics, enzyme replacement, CFTR modulators). The sweat test and CFTR genetics are the diagnostic anchors.' },
  ],

  mnemonics: [
    { hook: 'CF = "CFTR Cl⁻ channel → thick secretions" in lung, pancreas, gut, vas deferens', expansion: ['ΔF508 commonest', 'Autosomal recessive'] },
    { hook: '"Salty baby" + chest infections + malabsorption + meconium ileus = CF', expansion: ['Sweat chloride diagnostic', 'Pseudomonas = progression'] },
  ],

  traps: [
    {
      questionCategory: 'Recognising cystic fibrosis as multisystem',
      wrongInstinct: 'Cystic fibrosis is purely a lung disease',
      rightAnswer: 'CF is a MULTISYSTEM disease from a single CFTR defect — as well as bronchiectasis it causes pancreatic exocrine insufficiency (malabsorption, ADEK deficiency), meconium ileus, male infertility and CF-related diabetes; the sweat chloride test reflects the systemic channel defect',
      why: 'Framing CF as lung-only misses the pancreatic/GI/reproductive features that are often the presenting clues (failure to thrive, meconium ileus) and shapes the multidisciplinary management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The diagnosis of cystic fibrosis is confirmed by:',
      options: [
        { id: 'a', text: 'A low serum sodium' },
        { id: 'b', text: 'An elevated sweat chloride concentration (plus CFTR genetic testing)' },
        { id: 'c', text: 'A positive tuberculin test' },
        { id: 'd', text: 'High serum IgE' },
      ],
      answerId: 'b',
      explanation: 'Defective CFTR chloride transport raises sweat chloride, so an elevated sweat chloride (with CFTR mutation analysis) is diagnostic; newborn screening uses raised immunoreactive trypsinogen.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Chronic airway colonisation with which organism particularly marks disease progression in cystic fibrosis?',
      options: [
        { id: 'a', text: 'Streptococcus pneumoniae' },
        { id: 'b', text: 'Pseudomonas aeruginosa' },
        { id: 'c', text: 'Mycobacterium tuberculosis' },
        { id: 'd', text: 'Candida albicans' },
      ],
      answerId: 'b',
      explanation: 'While S. aureus and H. influenzae predominate early, chronic Pseudomonas aeruginosa colonisation is associated with accelerated decline in lung function and marks progression of cystic fibrosis lung disease.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Cystic fibrosis', svg: CYSTIC_FIBROSIS, caption: 'The CFTR defect and its multisystem consequences (lung, pancreas, gut, reproductive), with diagnosis and management.' },
  ],
};

export default cysticFibrosis;
