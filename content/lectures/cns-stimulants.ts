import type { Lecture } from '../../lib/types';

export const cnsStimulants: Lecture = {
  id: 'cns-stimulants',
  title: 'CNS Stimulants',
  system: 'neuro',
  source: 'L7 — CNS Pharmacology & Stimulants',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L7 CNS Pharmacology' },
    { kind: 'disease', label: 'Stimulants' },
    { kind: 'mechanism', label: 'Mesolimbic dopamine' },
    { kind: 'exam', label: 'Amphetamine vs cocaine' },
  ],

  highYield: [
    'All psychomotor stimulants **raise dopamine in the nucleus accumbens (mesolimbic reward pathway)** → euphoria & addiction.',
    '**Amphetamine**: ↑ DA/NE release by **reversing DAT/NET, blocking VMAT, and inhibiting MAO**. Uses (rare): **narcolepsy, ADHD, obesity**. **Methylphenidate = ADHD drug of choice**; **modafinil = narcolepsy drug of choice**.',
    '**Cocaine**: **blocks reuptake (DAT > NET)** — short-acting, highly addictive; nasal use → **septal perforation**; complications = **arrhythmia, MI, stroke**.',
    '**Nicotine**: activates **nicotinic ACh receptors on dopaminergic neurons** → DA release; low-dose used for **smoking cessation** (patch/gum); strong dependence. **Methylxanthines** (caffeine, theophylline) = **adenosine-receptor antagonists**.',
    'Stimulant toxicity: **tachycardia, hypertension, hyperthermia, mydriasis, seizures, psychosis/paranoia** (amphetamine → formication “meth mites”).',
  ],

  mechanism: {
    title: 'Boost dopamine → reward, arousal, sympathomimetic toxicity',
    steps: [
      { id: 's1', label: 'Amphetamine releases / cocaine blocks reuptake' },
      { id: 's2', label: '↑ Dopamine in nucleus accumbens (reward)', emphasis: 'key' },
      { id: 's3', label: 'CNS stimulation + peripheral sympathomimetic effects' },
      { id: 's4', label: 'High dose → arrhythmia, MI, stroke, psychosis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Euphoria, hyperactivity, mydriasis, tachycardia, hyperthermia', mechanism: 'Central + peripheral catecholamine excess', significance: 'key' },
    { sign: 'Nasal septal perforation', mechanism: 'Cocaine vasoconstriction (snorting)', significance: 'key' },
    { sign: 'Formication (“meth mites”), paranoia', mechanism: 'Chronic amphetamine psychosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Urine toxicology', meaning: 'Confirms stimulant use' },
    { clue: 'ECG / cardiac markers', meaning: 'Arrhythmia, ischemia from sympathomimetic load' },
    { clue: 'Mechanism (release vs reuptake block)', meaning: 'Amphetamine vs cocaine' },
  ],

  treatment: [
    { logic: 'Supportive care; benzodiazepines for agitation/seizures', detail: 'Avoid β-blocker monotherapy in cocaine toxicity (unopposed α).' },
    { logic: 'Methylphenidate for ADHD; modafinil for narcolepsy', detail: 'Therapeutic stimulant uses.' },
    { logic: 'Nicotine replacement for cessation', detail: 'Low-dose, tapering.' },
  ],

  mnemonics: [
    { hook: 'Amphetamine RELEASES; cocaine BLOCKS reuptake', expansion: ['Both ↑ dopamine in the nucleus accumbens'] },
    { hook: 'ADHD → methylphenidate; narcolepsy → modafinil', expansion: ['Drugs of choice'] },
  ],

  traps: [
    {
      questionCategory: 'Amphetamine vs cocaine mechanism',
      wrongInstinct: 'Amphetamine works mainly by blocking dopamine reuptake like cocaine',
      rightAnswer: 'Amphetamine actively RELEASES catecholamines (reverses transporters, blocks VMAT/MAO); cocaine BLOCKS reuptake (DAT > NET)',
      why: 'Both raise synaptic dopamine, but amphetamine drives release from the terminal while cocaine simply prevents reuptake — a classic mechanism distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A stimulant increases synaptic dopamine primarily by reversing the dopamine transporter and inhibiting vesicular storage and MAO. This describes:',
      options: [
        { id: 'a', text: 'Cocaine' },
        { id: 'b', text: 'Amphetamine' },
        { id: 'c', text: 'Caffeine' },
        { id: 'd', text: 'Nicotine' },
      ],
      answerId: 'b',
      explanation: 'Amphetamine raises dopamine by reversing DAT/NET, blocking VMAT storage, and inhibiting MAO — actively releasing catecholamines, unlike cocaine which blocks reuptake.',
      tests: 'exam',
    },
  ],
};

export default cnsStimulants;
