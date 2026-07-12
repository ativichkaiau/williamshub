import type { Lecture } from '../../lib/types';

export const behBiopsychosocialModel: Lecture = {
  id: 'beh-biopsychosocial-model',
  title: 'The Biopsychosocial Model',
  system: 'community',
  source: 'L1 — Introduction to Behavioral Science',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L1 Biopsychosocial Model' },
    { kind: 'mechanism', label: 'Bio · Psycho · Social' },
    { kind: 'exam', label: 'Biomedical vs biopsychosocial' },
    { kind: 'investigation', label: 'Disease vs illness' },
  ],

  highYield: [
    '**George Engel (1977) proposed the biopsychosocial model** in Science as a corrective to the dominant biomedical model. It holds that health and illness always emerge from **interacting biological, psychological and social factors**, and it is the organising framework for behavioural medicine ([[beh-intro-behavioral-science]]).',
    '**The biomedical model is reductionist and dualist:** it treats disease as nothing but a deviation from a biological norm and splits mind from body. Its blind spot is everything psychological and social — which is why it struggles to explain adherence, the placebo effect, and why identical pathology produces very different patient outcomes.',
    '**The three domains.** **Biological** = genes, biochemistry, pathophysiology, drugs. **Psychological** = mood, cognition, coping, personality, behaviour and beliefs. **Social** = family, culture, socioeconomic status, work and support networks. These are **nested systems that interact continuously**, not three separate silos.',
    '**Disease is not the same as illness or sickness.** **Disease** = the biological pathology; **illness** = the patient’s subjective experience of feeling unwell; **sickness** = the social role and its meaning. The biomedical model sees only disease; the biopsychosocial model holds all three ([[beh-doctor-patient-relationship]]).',
    '**Clinically it drives the formulation.** Sorting a case into biological, psychological and social contributors — each matched to a targeted intervention — explains variable recovery and links directly to stress physiology ([[beh-stress-response]]) and to family influence on illness ([[beh-family-dynamics]]).',
  ],

  mechanism: {
    title: 'Biological + psychological + social → one integrated formulation and plan',
    steps: [
      { id: 's1', label: 'Biological — genes, pathophysiology, biochemistry, medication' },
      { id: 's2', label: 'Psychological — mood, cognition, coping, personality, behaviour', emphasis: 'key' },
      { id: 's3', label: 'Social — family, culture, socioeconomic status, work, support' },
      { id: 's4', label: 'The three domains interact continuously (nested systems)', emphasis: 'key' },
      { id: 's5', label: 'Integrate into one formulation → targeted plan per axis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Engel proposed the biopsychosocial model in 1977', mechanism: 'A response to the reductionist, dualist biomedical model', significance: 'key' },
    { sign: 'The biomedical model reduces illness to biological deviation alone', mechanism: 'It excludes psychological and social contributors by design', significance: 'key' },
    { sign: 'The biopsychosocial model adds to biology — it does not reject it', mechanism: 'Biology remains one of three interacting domains', significance: 'key' },
    { sign: 'Disease ≠ illness ≠ sickness', mechanism: 'Pathology, the felt experience, and the social role are distinct', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Two patients with the same myocardial infarction recover very differently', meaning: 'Psychological and social factors modulate outcome beyond the pathology' },
    { clue: 'A patient’s chronic back pain flares after losing their job', meaning: 'Social and psychological input feeding a biological symptom' },
    { clue: 'A stroke patient treated for the lesion while post-stroke depression is missed', meaning: 'A biomedical blind spot — the psychological domain ignored' },
    { clue: 'A formulation written across biological, psychological and social axes', meaning: 'The biopsychosocial method applied — comprehensive, intervention-ready' },
  ],

  treatment: [
    { logic: 'Build every formulation across all three axes', detail: 'List the biological, psychological and social contributors explicitly so none is silently dropped, then match each to an intervention.' },
    { logic: 'Match intervention to the dominant driver', detail: 'A socially driven presentation needs social action (support, resources); a psychologically driven one needs psychological care — not more biological tests.' },
  ],

  mnemonics: [
    { hook: '“BPS” — Bio, Psycho, Social', expansion: ['Bio = genes, pathophysiology, drugs', 'Psycho = mood, cognition, coping, behaviour', 'Social = family, culture, work, socioeconomic status'] },
  ],

  traps: [
    {
      questionCategory: 'Biomedical versus biopsychosocial model',
      wrongInstinct: 'The biopsychosocial model replaces or rejects biology in favour of psychology and society',
      rightAnswer: 'It keeps biology as one of three interacting domains, adding the psychological and social rather than removing the biological',
      why: 'Engel expanded the model; he did not swap one reductionism for another — biology still matters, just not exclusively.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Who introduced the biopsychosocial model, and why?',
      options: [
        { id: 'a', text: 'Sigmund Freud, to formalise the unconscious mind' },
        { id: 'b', text: 'George Engel, as a corrective to the reductionist biomedical model' },
        { id: 'c', text: 'Abraham Maslow, to describe human needs' },
        { id: 'd', text: 'Thomas Szasz, to classify doctor–patient interactions' },
      ],
      answerId: 'b',
      explanation: 'George Engel proposed the biopsychosocial model in 1977 as an explicit alternative to the biomedical model, which reduced illness to biological deviation and excluded psychological and social factors.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'Two patients have identical heart attacks but very different recoveries. Which factor does the purely biomedical model fail to account for?',
      options: [
        { id: 'a', text: 'The size of the infarct' },
        { id: 'b', text: 'The coronary anatomy' },
        { id: 'c', text: 'Psychosocial factors such as mood, coping and social support' },
        { id: 'd', text: 'The serum troponin level' },
      ],
      answerId: 'c',
      explanation: 'The biomedical model captures the biological pathology but not the psychological and social factors — mood, coping, support, work — that the biopsychosocial model uses to explain divergent outcomes from identical disease.',
      tests: 'mechanism',
    },
  ],
};

export default behBiopsychosocialModel;
