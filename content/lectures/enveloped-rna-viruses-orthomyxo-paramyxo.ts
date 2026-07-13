import type { Lecture } from '../../lib/types';

export const envelopedRnaVirusesOrthomyxoParamyxo: Lecture = {
  id: 'enveloped-rna-viruses-orthomyxo-paramyxo',
  title: 'Influenza & Paramyxoviruses',
  system: 'microbiology',
  source: 'L3 — RNA Viruses II (Enveloped)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L3 Influenza/Paramyxo' },
    { kind: 'mechanism', label: 'Antigenic shift/drift; respiratory' },
    { kind: 'exam', label: 'Influenza; measles; RSV' },
  ],

  highYield: [
    'INFLUENZA (Orthomyxovirus, −ssRNA, SEGMENTED genome, enveloped): surface HAEMAGGLUTININ (HA — attachment/entry) and NEURAMINIDASE (NA — release). ANTIGENIC DRIFT (minor point mutations → seasonal epidemics, annual vaccine) vs ANTIGENIC SHIFT (REASSORTMENT of segments between strains → a new HA/NA → PANDEMICS). Complication: secondary bacterial pneumonia (*S. aureus*/pneumococcus). Treat with neuraminidase inhibitors (oseltamivir) early.',
    'PARAMYXOVIRUSES (−ssRNA, NON-segmented, enveloped): MEASLES (highly contagious; prodrome of cough/coryza/conjunctivitis + pathognomonic KOPLIK SPOTS → cephalocaudal maculopapular rash; complications: pneumonia, and years later SUBACUTE SCLEROSING PANENCEPHALITIS; vaccine-preventable — MMR). MUMPS (parotitis; orchitis, meningitis). Both are vaccine-preventable and can cause outbreaks in the unvaccinated.',
    'RESPIRATORY paramyxoviruses: RSV (respiratory syncytial virus — the leading cause of BRONCHIOLITIS and pneumonia in infants; multinucleate syncytia; prophylaxis with palivizumab/monoclonals in high-risk babies) and PARAINFLUENZA (CROUP — laryngotracheobronchitis with a barking cough/stridor). Human metapneumovirus also causes childhood respiratory infection.',
    'Diagnosis: rapid antigen/PCR (influenza, RSV), clinical (measles/mumps + serology). Management is largely supportive (RSV/croup) with specific antivirals for influenza (oseltamivir) and vaccination the mainstay of prevention (annual influenza; MMR).',
    '**The take-home: INFLUENZA (segmented → DRIFT [epidemic] vs SHIFT/reassortment [pandemic]; HA/NA; oseltamivir; secondary bacterial pneumonia); MEASLES (Koplik spots, cephalocaudal rash, SSPE; MMR), MUMPS (parotitis/orchitis); RSV (infant bronchiolitis, syncytia), PARAINFLUENZA (croup). Vaccines are key.** The general enveloped-virus fragility is in [[virology-principles-classification]]; other enveloped RNA viruses (corona/rabies/filo) are in [[other-enveloped-rna-viruses]].',
  ],

  mechanism: {
    title: 'Influenza segmented → drift(epidemic)/shift(pandemic reassortment), HA/NA; paramyxovirus: measles(Koplik/SSPE), mumps, RSV(bronchiolitis), parainfluenza(croup)',
    steps: [
      { id: 's1', label: 'Influenza (segmented −ssRNA): HA (entry) + NA (release); oseltamivir', emphasis: 'key' },
      { id: 's2', label: 'Antigenic DRIFT (point mutation → epidemic) vs SHIFT (reassortment → pandemic)', emphasis: 'danger' },
      { id: 's3', label: 'Measles: Koplik spots → cephalocaudal rash; SSPE late; MMR vaccine', emphasis: 'key' },
      { id: 's4', label: 'Mumps: parotitis (± orchitis/meningitis); MMR', emphasis: 'key' },
      { id: 's5', label: 'RSV = infant bronchiolitis (syncytia); parainfluenza = croup', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A novel pandemic influenza strain from genome reassortment', mechanism: 'Antigenic shift (segmented genome)', significance: 'key' },
    { sign: 'Secondary bacterial pneumonia after influenza', mechanism: 'S. aureus/pneumococcus superinfection', significance: 'key' },
    { sign: 'Koplik spots then a cephalocaudal maculopapular rash', mechanism: 'Measles', significance: 'key' },
    { sign: 'Bronchiolitis with wheeze in an infant, syncytia on histology', mechanism: 'Respiratory syncytial virus (RSV)', significance: 'key' },
    { sign: 'Barking cough and inspiratory stridor in a toddler', mechanism: 'Croup (parainfluenza)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The influenza change causing pandemics', meaning: 'Antigenic shift (segment reassortment)' },
    { clue: 'The pathognomonic oral sign of measles', meaning: 'Koplik spots' },
    { clue: 'The leading cause of infant bronchiolitis', meaning: 'Respiratory syncytial virus (RSV)' },
    { clue: 'The virus causing croup', meaning: 'Parainfluenza virus' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Influenza\'s segmented genome underlies drift (annual vaccine reformulation) and shift (pandemic potential), with oseltamivir effective early and secondary bacterial pneumonia a key complication; measles/mumps are vaccine-preventable (MMR) with serious complications (SSPE, orchitis); RSV and parainfluenza cause major paediatric respiratory disease (bronchiolitis, croup) managed supportively (± palivizumab prophylaxis). Vaccination is central. The enveloped-virus context is [[virology-principles-classification]]; further enveloped RNA viruses in [[other-enveloped-rna-viruses]].' },
  ],

  mnemonics: [
    { hook: 'Influenza: "Drift = small (epidemic); Shift = swap segments (pandemic)"', expansion: ['HA entry, NA release', 'Oseltamivir = NA inhibitor'] },
    { hook: '"Measles = Koplik + cephalocaudal + SSPE; RSV = infant bronchiolitis; parainfluenza = croup"', expansion: ['MMR prevents measles/mumps', 'Palivizumab for high-risk RSV'] },
  ],

  traps: [
    {
      questionCategory: 'Antigenic drift vs shift',
      wrongInstinct: 'Antigenic drift and shift are just two names for the same influenza mutation process',
      rightAnswer: 'DRIFT is gradual accumulation of POINT mutations in HA/NA (causing SEASONAL epidemics and the need to update the vaccine yearly), whereas SHIFT is an abrupt REASSORTMENT of whole genome SEGMENTS between different influenza strains, generating a novel HA/NA to which the population has no immunity — the mechanism of PANDEMICS; only segmented viruses can undergo shift',
      why: 'Drift (minor, epidemic) and shift (major, pandemic) have different mechanisms and public-health impact; recognising that shift requires the segmented genome explains why influenza — but not most viruses — causes pandemics.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Influenza pandemics arise mainly through antigenic shift, which is:',
      options: [
        { id: 'a', text: 'Gradual point mutations in haemagglutinin' },
        { id: 'b', text: 'Reassortment of genome segments producing a novel haemagglutinin/neuraminidase' },
        { id: 'c', text: 'Loss of the viral envelope' },
        { id: 'd', text: 'Integration into host DNA' },
      ],
      answerId: 'b',
      explanation: 'Antigenic shift is the reassortment of segments between influenza strains, producing a virus with a novel HA/NA to which the population lacks immunity — causing pandemics. Antigenic drift (gradual point mutations) causes seasonal epidemics and the annual need to update the vaccine.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The leading cause of bronchiolitis and viral pneumonia in infants, forming multinucleate syncytia, is:',
      options: [
        { id: 'a', text: 'Parainfluenza virus' },
        { id: 'b', text: 'Respiratory syncytial virus (RSV)' },
        { id: 'c', text: 'Measles virus' },
        { id: 'd', text: 'Rhinovirus' },
      ],
      answerId: 'b',
      explanation: 'RSV is the leading cause of infant bronchiolitis and pneumonia; it induces multinucleate syncytia (giant cells). Management is supportive, with palivizumab (monoclonal) prophylaxis for high-risk infants. Parainfluenza causes croup.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default envelopedRnaVirusesOrthomyxoParamyxo;
