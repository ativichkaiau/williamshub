import type { Lecture } from '../../lib/types';

export const behIntroBehavioralScience: Lecture = {
  id: 'beh-intro-behavioral-science',
  title: 'Introduction to Behavioral Science',
  system: 'community',
  source: 'L1 — Introduction to Behavioral Science',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L1 Intro & Scope' },
    { kind: 'mechanism', label: 'Three disciplinary lenses' },
    { kind: 'exam', label: 'Nature vs nurture' },
    { kind: 'investigation', label: 'Behaviour & mortality' },
  ],

  highYield: [
    '**Behavioral science is the interdisciplinary study of human behaviour** — how people think, feel and act — built from **psychology, sociology and anthropology** (with input from biology, economics and neuroscience). For the physician it supplies the vocabulary of the [[beh-biopsychosocial-model]] and underpins every clinical conversation ([[beh-doctor-patient-relationship]]).',
    '**Three lenses, three levels of analysis.** **Psychology** studies the individual mind — cognition, emotion, motivation, personality and learning. **Sociology** studies groups, roles, institutions and social structure. **Anthropology** studies culture — shared meanings, beliefs and practices, and how illness is experienced differently across societies.',
    '**Behaviour is a leading cause of disease and death.** Roughly **half of premature mortality is driven by modifiable behaviour** — smoking, diet, alcohol, physical inactivity and risk-taking — so changing behaviour is a core clinical skill, not a soft extra. Adherence, health-seeking and lifestyle all sit here.',
    '**Historical arc.** Cartesian **mind–body dualism** and the reductionist **biomedical model** dominated 20th-century medicine; the great psychological schools — **psychoanalysis** ([[beh-freud-structural-topographic]]), **behaviourism** ([[beh-classical-operant-conditioning]]) and **humanism** ([[beh-humanistic-theory]]) — each explained part of behaviour, until Engel’s **biopsychosocial model (1977)** reintegrated them ([[beh-biopsychosocial-model]]).',
    '**Nature vs nurture is a false dichotomy.** Behaviour emerges from **gene–environment interaction**, not genes or environment alone; heritability is partial and context-dependent ([[beh-behavioral-genetics]]), and vulnerability plus stressor gives the **diathesis–stress** account of disorder ([[beh-neurobiology-behavior]]).',
  ],

  mechanism: {
    title: 'Three disciplinary lenses → an integrated understanding of the patient’s behaviour',
    steps: [
      { id: 's1', label: 'Psychology — the individual mind (cognition, emotion, personality, learning)', emphasis: 'key' },
      { id: 's2', label: 'Sociology — groups, roles, institutions & social structure' },
      { id: 's3', label: 'Anthropology — culture, meaning & cross-cultural variation' },
      { id: 's4', label: 'Integrate the three lenses at the bedside', emphasis: 'key' },
      { id: 's5', label: 'Behaviour drives ~half of premature mortality → a clinical target', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Behavioral science is interdisciplinary, not a single field', mechanism: 'It fuses psychology, sociology and anthropology (plus biology and economics)', significance: 'key' },
    { sign: 'Each parent discipline works at a different level of analysis', mechanism: 'Individual (psychology) → group/society (sociology) → culture (anthropology)', significance: 'key' },
    { sign: 'About half of premature deaths trace to modifiable behaviour', mechanism: 'Smoking, diet, alcohol and inactivity make behaviour a prevention target', significance: 'key' },
    { sign: 'Nature and nurture interact — never purely one or the other', mechanism: 'Genes set predispositions that the environment expresses or suppresses', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient with COPD who keeps smoking despite clear advice', meaning: 'Outcomes are driven by behaviour, not biology alone — needs a behavioural approach' },
    { clue: 'The same diagnosis experienced very differently in two cultures', meaning: 'Anthropology’s contribution — illness meaning is culturally shaped' },
    { clue: 'Worse health clustering in a low-income neighbourhood', meaning: 'Sociology’s level of analysis — social structure shapes health' },
    { clue: 'A twin study showing a trait is about 50% heritable', meaning: 'Both genes and environment contribute — points to [[beh-behavioral-genetics]]' },
  ],

  treatment: [
    { logic: 'Reach for all three lenses when a case does not fit pure biology', detail: 'Ask what individual (psychological), social and cultural factors are shaping the presentation before concluding the story is purely medical.' },
    { logic: 'Treat behaviour change as a core clinical competency', detail: 'Because behaviour underlies so much mortality, eliciting and supporting change is as much a skill as prescribing ([[beh-social-cognitive-learning]]).' },
  ],

  mnemonics: [
    { hook: 'Three lenses: “PSA” — Psychology, Sociology, Anthropology', expansion: ['Psychology = the individual mind', 'Sociology = groups & social structure', 'Anthropology = culture & meaning'] },
  ],

  traps: [
    {
      questionCategory: 'Nature versus nurture',
      wrongInstinct: 'A behaviour is either genetically determined or entirely learned from the environment',
      rightAnswer: 'Behaviour arises from gene–environment interaction; heritability is partial and context-dependent',
      why: 'Framing it as either/or ignores that genes set predispositions the environment then shapes (diathesis–stress).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which statement best captures the scope of behavioral science?',
      options: [
        { id: 'a', text: 'The laboratory study of animal conditioning only' },
        { id: 'b', text: 'An interdisciplinary study of human behaviour drawing on psychology, sociology and anthropology' },
        { id: 'c', text: 'A subspecialty of clinical pharmacology' },
        { id: 'd', text: 'The study of genetics in isolation from the environment' },
      ],
      answerId: 'b',
      explanation: 'Behavioral science integrates psychology (the individual), sociology (groups and society) and anthropology (culture), together with biology and economics, to understand human behaviour in health and illness.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'A twin study shows a personality trait is about 50% heritable. What is the best interpretation?',
      options: [
        { id: 'a', text: 'The trait is entirely genetically determined' },
        { id: 'b', text: 'The trait is entirely produced by the environment' },
        { id: 'c', text: 'Both genes and environment contribute and interact to produce the trait' },
        { id: 'd', text: 'Genetic factors are irrelevant to the trait' },
      ],
      answerId: 'c',
      explanation: 'Partial heritability means neither nature nor nurture acts alone. Genes set a predisposition that the environment expresses or suppresses — the gene–environment interaction at the heart of the nature-versus-nurture debate.',
      tests: 'mechanism',
    },
  ],
};

export default behIntroBehavioralScience;
