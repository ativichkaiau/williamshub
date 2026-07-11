import type { Lecture } from '../../lib/types';

export const hrp2NeonatalSepsisGbs: Lecture = {
  id: 'hrp2-neonatal-sepsis-gbs',
  title: 'Neonatal Sepsis & Group B Streptococcus',
  system: 'repro',
  source: 'L4 — Perinatal (Congenital TORCH) Infections',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L4 Perinatal Infection' },
    { kind: 'disease', label: 'GBS · neonatal sepsis' },
    { kind: 'mechanism', label: 'Intrapartum acquisition' },
    { kind: 'treatment', label: 'Intrapartum penicillin' },
  ],

  highYield: [
    '**Group B Streptococcus (Streptococcus agalactiae)** colonises the maternal vagina/rectum and is the leading cause of **early-onset neonatal sepsis** (<7 days: pneumonia, sepsis) acquired **intrapartum**.',
    '**Prevention = intrapartum antibiotic prophylaxis (IV penicillin)** for GBS-positive mothers (screening ~35–37 weeks) or those with risk factors (prolonged rupture of membranes, preterm labour, intrapartum fever, previous GBS baby).',
    '**Early-onset (<72 h–7 d)** = GBS, **E. coli** — from the birth canal; **late-onset (>7 d)** = GBS, coliforms, staphylococci, often nosocomial/community. Neonatal sepsis presents **non-specifically**: temperature instability, poor feeding, lethargy, respiratory distress, apnoea.',
    '**Chorioamnionitis** (intra-amniotic infection: maternal fever, uterine tenderness, fetal tachycardia) raises neonatal sepsis risk. **Listeria** (unpasteurised dairy) causes granulomatosis infantiseptica. **Have a low threshold to investigate and start empirical antibiotics** in a sick neonate.',
  ],

  mechanism: {
    title: 'Maternal colonisation → intrapartum transmission → neonatal sepsis',
    steps: [
      { id: 's1', label: 'GBS colonises maternal genital tract', emphasis: 'key' },
      { id: 's2', label: 'Intrapartum transmission to the neonate', emphasis: 'key' },
      { id: 's3', label: 'Early-onset sepsis/pneumonia (<7 days)', emphasis: 'danger' },
      { id: 's4', label: 'Intrapartum penicillin prevents early-onset GBS', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Early-onset neonatal sepsis → GBS/E. coli', mechanism: 'Acquired from the birth canal', significance: 'key' },
    { sign: 'Non-specific signs: poor feeding, temperature instability, apnoea', mechanism: 'Neonatal sepsis presentation', significance: 'key' },
    { sign: 'Maternal fever + uterine tenderness + fetal tachycardia', mechanism: 'Chorioamnionitis', significance: 'supportive' },
    { sign: 'Listeria after unpasteurised dairy', mechanism: 'Transplacental/intrapartum', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'GBS-positive vaginal-rectal screen at 36 weeks', meaning: 'Intrapartum IV penicillin prophylaxis' },
    { clue: 'Neonate at 24 h: grunting, poor feeding, temperature instability', meaning: 'Early-onset sepsis → cultures + empirical antibiotics' },
    { clue: 'Prolonged rupture of membranes + maternal fever', meaning: 'Chorioamnionitis → treat, anticipate neonatal sepsis' },
    { clue: 'Neonatal sepsis after unpasteurised cheese exposure', meaning: 'Listeria monocytogenes' },
  ],

  treatment: [
    { logic: 'Prevent GBS with intrapartum penicillin', detail: 'IV benzylpenicillin during labour for GBS carriers/risk factors greatly reduces early-onset disease.' },
    { logic: 'Treat suspected sepsis empirically', detail: 'Blood cultures then broad-spectrum antibiotics (e.g. ampicillin + gentamicin) without delay in a sick neonate.' },
  ],

  mnemonics: [
    { hook: 'GBS = early-onset sepsis → intrapartum penicillin prevents it', expansion: ['Early <7 d from birth canal; late >7 d'] },
  ],

  traps: [
    {
      questionCategory: 'When GBS prophylaxis is given',
      wrongInstinct: 'Treat GBS colonisation with oral antibiotics during the antenatal period',
      rightAnswer: 'Give INTRAPARTUM IV penicillin — antenatal treatment does not prevent recolonisation by delivery',
      why: 'GBS recolonises, so prophylaxis is timed to labour (intrapartum) to protect the neonate at the moment of transmission.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The most effective measure to prevent early-onset neonatal group B streptococcal sepsis is:',
      options: [
        { id: 'a', text: 'Antenatal oral penicillin for two weeks' },
        { id: 'b', text: 'Intrapartum intravenous penicillin' },
        { id: 'c', text: 'Neonatal vaccination' },
        { id: 'd', text: 'Caesarean delivery' },
      ],
      answerId: 'b',
      explanation: 'Intrapartum IV penicillin for GBS-colonised mothers (or those with risk factors) is the proven way to prevent early-onset neonatal GBS disease.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Early-onset neonatal sepsis (within the first few days of life) is most characteristically acquired:',
      options: [
        { id: 'a', text: 'From the maternal birth canal around delivery' },
        { id: 'b', text: 'From the hospital environment weeks later' },
        { id: 'c', text: 'Transplacentally in the first trimester' },
        { id: 'd', text: 'Via breastfeeding' },
      ],
      answerId: 'a',
      explanation: 'Early-onset sepsis (GBS, E. coli) is acquired intrapartum from the maternal genital tract, unlike late-onset sepsis which is often nosocomial/community.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2NeonatalSepsisGbs;
