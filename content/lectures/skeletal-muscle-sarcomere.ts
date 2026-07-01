import type { Lecture } from '../../lib/types';
import { SARCOMERE } from '../../lib/figures';

export const skeletalMuscleSarcomere: Lecture = {
  id: 'skeletal-muscle-sarcomere',
  title: 'Skeletal Muscle: The Sarcomere & Contraction',
  system: 'histology',
  source: 'L7 — Muscle Tissue',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L7 Muscle Tissue' },
    { kind: 'mechanism', label: 'Sliding filament' },
    { kind: 'exam', label: 'Bands · triad' },
  ],

  highYield: [
    '**Skeletal muscle fibres are long, cylindrical, multinucleate cells with PERIPHERAL nuclei** (from myoblast fusion), packed with **myofibrils** and striated. Voluntary; unbranched. **Satellite cells** provide regenerative capacity.',
    '**The sarcomere = Z-line to Z-line, the contractile unit.** **Thin filaments = actin** (+ tropomyosin/troponin); **thick filaments = myosin**. Banding: **A band** (thick filament length, dark, **constant**); **I band** (thin only, light); **H zone** (thick only); **M line** (centre); **Z line** (thin-filament anchor).',
    '**Sliding-filament theory.** On contraction the thin filaments slide over thick → the **I band and H zone SHORTEN**; the **A band stays constant**; Z lines approach. Cross-bridge cycling is powered by ATP.',
    '**Excitation–contraction coupling needs the triad.** Depolarisation travels down **T-tubules** (invaginations of the sarcolemma); at the **triad (one T-tubule + two terminal cisternae of sarcoplasmic reticulum)** it triggers **Ca²⁺ release** from the SR. **Ca²⁺ binds troponin → tropomyosin shifts → actin–myosin binding**.',
    '**Neuromuscular junction (NMJ).** The motor axon releases **acetylcholine** onto nicotinic receptors of the motor end plate → muscle action potential. Clinically: **botulinum toxin** blocks ACh release; **myasthenia gravis** = antibodies to the ACh receptor; curare blocks the receptor.',
  ],

  mechanism: {
    title: 'Nerve → Ca²⁺ → filaments slide',
    steps: [
      { id: 's1', label: 'ACh at NMJ → sarcolemma depolarises', emphasis: 'key' },
      { id: 's2', label: 'T-tubule carries signal to the triad (T-tubule + 2 SR)', emphasis: 'key' },
      { id: 's3', label: 'SR releases Ca²⁺ → binds troponin → tropomyosin moves' },
      { id: 's4', label: 'Actin–myosin cross-bridges cycle (ATP) → sliding', emphasis: 'key' },
      { id: 's5', label: 'I band + H zone shorten; A band constant' },
    ],
  },

  examFindings: [
    { sign: 'Peripheral, multiple nuclei; cross-striations', mechanism: 'Skeletal muscle fibre', significance: 'key' },
    { sign: 'A band constant on contraction; I band shortens', mechanism: 'Sliding filament (thin slides over thick)', significance: 'key' },
    { sign: 'Triad on TEM (T-tubule + 2 terminal cisternae)', mechanism: 'Ca²⁺-release apparatus at the A–I junction', significance: 'supportive' },
    { sign: 'Ptosis/diplopia worsening with use', mechanism: 'Myasthenia gravis (anti-AChR at the NMJ)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Band that does NOT change length during contraction', meaning: 'A band (thick filament length)' },
    { clue: 'Structure delivering depolarisation deep into the fibre', meaning: 'T-tubule' },
    { clue: 'Ion that binds troponin to start contraction', meaning: 'Ca²⁺ (released from sarcoplasmic reticulum)' },
    { clue: 'Cell that repairs damaged skeletal muscle', meaning: 'Satellite cell' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Sarcomere/NMJ biology underlies muscular dystrophy (dystrophin), myasthenia gravis, botulism, and malignant hyperthermia (RYR1/SR Ca²⁺). Comparison with cardiac/smooth muscle: [[cardiac-smooth-muscle]].' },
  ],

  mnemonics: [
    { hook: '"A band Always constant; I band Itsy on contraction"', expansion: ['H zone & I band shorten, A stays'] },
    { hook: 'Skeletal TRIAD (3): T-tubule + 2 SR', expansion: ['Cardiac has a DYAD (T-tubule + 1 SR)'] },
  ],

  traps: [
    {
      questionCategory: 'What shortens during contraction?',
      wrongInstinct: 'The A band shortens as the muscle contracts',
      rightAnswer: 'The A band stays CONSTANT; the I band and H zone shorten as thin filaments slide inward',
      why: 'Filaments do not shorten — they slide. The A band = thick filament length, which is unchanged.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'During skeletal muscle contraction, which of the following remains constant in length?',
      options: [
        { id: 'a', text: 'I band' },
        { id: 'b', text: 'H zone' },
        { id: 'c', text: 'A band' },
        { id: 'd', text: 'Sarcomere' },
      ],
      answerId: 'c',
      explanation: 'The A band equals the thick (myosin) filament length, which does not change. The I band, H zone, and overall sarcomere all shorten as thin filaments slide inward.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The skeletal muscle triad consists of:',
      options: [
        { id: 'a', text: 'One T-tubule and one cisterna of sarcoplasmic reticulum' },
        { id: 'b', text: 'One T-tubule flanked by two terminal cisternae of sarcoplasmic reticulum' },
        { id: 'c', text: 'Three myofibrils' },
        { id: 'd', text: 'Actin, myosin, and titin' },
      ],
      answerId: 'b',
      explanation: 'The triad = one T-tubule + two terminal SR cisternae, positioned at the A–I junction, coupling depolarisation to Ca²⁺ release. Cardiac muscle has a dyad (T-tubule + one SR).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The sarcomere', svg: SARCOMERE, caption: 'Z–Z contractile unit; thin actin + thick myosin; A band constant, I band & H zone shorten on sliding-filament contraction.' },
  ],
};

export default skeletalMuscleSarcomere;
