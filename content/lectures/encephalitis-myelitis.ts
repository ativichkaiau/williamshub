import type { Lecture } from '../../lib/types';

export const encephalitisMyelitis: Lecture = {
  id: 'encephalitis-myelitis',
  title: 'Encephalitis & Myelitis',
  system: 'neuro',
  source: 'L18 — CNS Infections & Immune Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L18 CNS Infections' },
    { kind: 'disease', label: 'Encephalitis / myelitis' },
    { kind: 'mechanism', label: 'Viral vs autoimmune' },
    { kind: 'exam', label: 'HSV / anti-NMDAR' },
  ],

  highYield: [
    '**Encephalitis** = brain-parenchyma inflammation → **altered mental status, seizures, focal deficits, behavioral change** (vs meningitis, which is meningeal irritation without parenchymal dysfunction).',
    '**HSV-1 → temporal-lobe encephalitis** (the commonest sporadic viral encephalitis); **CSF PCR is the diagnostic test of choice**, MRI shows temporal lobe change. **Treat empirically with IV acyclovir** while awaiting results. (HSV-2 → viral meningitis.)',
    '**Autoimmune encephalitis** — antibodies to neuronal surface antigens (reversible): **anti-NMDAR** (young, psychiatric/behavioral change, movement disorder, seizures; EEG **extreme delta brush**) and **anti-LGI1** (memory loss, faciobrachial dystonic seizures, **hyponatremia**). Treat with **immunotherapy (steroids/IVIG/PLEX, then rituximab) + tumor screen**.',
    '**Myelitis** = spinal cord inflammation. **Transverse myelitis** = bilateral sensorimotor/autonomic deficits with a **sensory level**; differentials include **MS** (partial TM + optic neuritis) and **NMOSD** (longitudinally extensive TM + severe optic neuritis).',
    'Acute viral myelitis: gray-matter attack (enteroviruses, flaviviruses → polio-like LMN weakness) vs transverse (HSV, VZV, CMV, EBV). Treat myelitis/AE flares with **IV methylprednisolone, PLEX, or IVIG**.',
  ],

  mechanism: {
    title: 'Infective vs immune inflammation of brain or cord',
    steps: [
      { id: 's1', label: 'Virus (HSV) or autoantibody targets neurons', emphasis: 'key' },
      { id: 's2', label: 'Encephalitis: parenchymal dysfunction (seizures, AMS)' },
      { id: 's3', label: 'Myelitis: cord inflammation with a sensory level' },
      { id: 's4', label: 'Empiric acyclovir for suspected HSV; immunotherapy for AE', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fever, confusion, seizures + temporal-lobe MRI change', mechanism: 'HSV-1 encephalitis', significance: 'key' },
    { sign: 'Young patient: psychosis + movement disorder + seizures', mechanism: 'Anti-NMDAR autoimmune encephalitis', significance: 'key' },
    { sign: 'Bilateral weakness with a sensory level', mechanism: 'Transverse myelitis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CSF HSV PCR (may be falsely negative <48–72 h)', meaning: 'HSV encephalitis' },
    { clue: 'Neuronal-surface antibody panel + EEG', meaning: 'Autoimmune encephalitis (extreme delta brush in NMDAR)' },
    { clue: 'Spine MRI + CSF (LETM in NMOSD)', meaning: 'Transverse myelitis differential' },
  ],

  treatment: [
    { logic: 'Empiric IV acyclovir for any suspected encephalitis', detail: 'Do not wait for PCR — HSV is treatable and lethal if missed.' },
    { logic: 'Autoimmune encephalitis: immunotherapy + tumor screen', detail: 'Steroids/IVIG/PLEX then rituximab.' },
    { logic: 'Myelitis flare: IV methylprednisolone ± PLEX', detail: 'Long-term: MS DMT or NMOSD immunosuppression.' },
  ],

  mnemonics: [
    { hook: 'HSV encephalitis = Temporal lobe + PCR + acyclovir (start empirically)', expansion: ['Don’t wait for results'] },
    { hook: 'Anti-NMDAR = young + psychiatric + movement + extreme delta brush', expansion: ['Screen for ovarian teratoma'] },
  ],

  traps: [
    {
      questionCategory: 'When to start acyclovir in encephalitis',
      wrongInstinct: 'Wait for the CSF HSV PCR result before starting acyclovir',
      rightAnswer: 'Start empiric IV acyclovir immediately in suspected encephalitis — HSV encephalitis is treatable but rapidly fatal, and early PCR can be falsely negative',
      why: 'Delaying antiviral therapy for a confirmatory test risks irreversible damage or death; PCR within 48–72 h of onset may be negative, so treat on suspicion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A previously well adult presents with fever, confusion, and seizures; MRI shows temporal-lobe abnormality. The best immediate management is:',
      options: [
        { id: 'a', text: 'Await CSF PCR before any treatment' },
        { id: 'b', text: 'Start empiric IV acyclovir' },
        { id: 'c', text: 'Start IV corticosteroids only' },
        { id: 'd', text: 'Start oral valacyclovir on discharge' },
      ],
      answerId: 'b',
      explanation: 'Temporal-lobe encephalitis suggests HSV-1; empiric IV acyclovir should be started immediately because HSV encephalitis is lethal if untreated and early PCR can be falsely negative.',
      tests: 'treatment',
    },
  ],
};

export default encephalitisMyelitis;
