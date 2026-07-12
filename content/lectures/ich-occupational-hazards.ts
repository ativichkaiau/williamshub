import type { Lecture } from '../../lib/types';

export const ichOccupationalHazards: Lecture = {
  id: 'ich-occupational-hazards',
  title: 'Occupational Hazards',
  system: 'community',
  source: 'L6 — Occupational Medicine',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L6 Occupational Medicine' },
    { kind: 'mechanism', label: 'Hazard × exposure = risk' },
    { kind: 'exam', label: 'Hazard vs risk' },
    { kind: 'disease', label: '5 hazard classes' },
  ],

  highYield: [
    '**Five occupational hazard classes: Physical, Chemical, Biological, Ergonomic and Psychosocial.** **Physical** — noise, heat, vibration, radiation. **Chemical** — dusts, fumes, solvents, gases. **Biological** — bacteria/viruses (TB, blood-borne via needlestick). **Ergonomic** — repetitive motion, awkward posture, manual handling. **Psychosocial** — stress, shift work, violence, burnout.',
    '**Hazard vs risk is THE core distinction.** A **hazard** is the intrinsic potential to cause harm (the agent itself); **risk** is the probability × severity that harm actually occurs given exposure. Practically, **Risk = Hazard × Exposure** — a highly hazardous agent with no exposure carries little risk.',
    '**Physical hazards are the classic testables:** chronic **noise → noise-induced hearing loss**, **heat → heat stress/stroke**, **ionising radiation → cancer/ARS** ([[ich-occupational-diseases-diagnosis]]).',
    '**Ergonomic hazards cause work-related musculoskeletal disorders (WMSDs)** — the single most common category of occupational health complaint (low-back pain, carpal tunnel, tendinopathy).',
    '**The five classes mirror the environmental hazard categories** ([[ich-environmental-health-overview]]); the workplace simply concentrates exposure. Once hazards are ranked by risk, they are controlled via the **hierarchy of controls** ([[ich-occupational-prevention-controls]]).',
  ],

  mechanism: {
    title: 'From hazard to harm: identify the class → a hazard is only potential → assess exposure → Risk = Hazard × Exposure',
    steps: [
      { id: 's1', label: 'Identify the hazard class: Physical · Chemical · Biological · Ergonomic · Psychosocial', emphasis: 'key' },
      { id: 's2', label: 'A hazard is only the potential to cause harm' },
      { id: 's3', label: 'Assess exposure: intensity × duration × frequency' },
      { id: 's4', label: 'Risk = Hazard × Exposure', emphasis: 'key' },
      { id: 's5', label: 'Rank the highest-risk hazards for control first' },
    ],
  },

  examFindings: [
    { sign: 'Hazard = potential to harm; Risk = likelihood harm actually occurs', mechanism: 'Risk adds exposure and probability to the intrinsic hazard — Risk = Hazard × Exposure', significance: 'key' },
    { sign: 'A high-hazard agent with no exposure = low risk', mechanism: 'Without a completed exposure there is no realised probability of harm', significance: 'key' },
    { sign: 'Ergonomic hazards produce work-related musculoskeletal disorders (WMSDs)', mechanism: 'Repetition, force and awkward posture cumulatively injure muscles, tendons and nerves', significance: 'supportive' },
    { sign: 'Psychosocial factors (shift work, stress, violence) are genuine occupational hazards', mechanism: 'They act through chronic stress physiology and fatigue/error pathways, not just morale', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A loom weaver working an 8-hour shift at ~95 dB', meaning: 'Physical hazard (noise) with high exposure → high risk of noise-induced hearing loss' },
    { clue: 'A nurse sustains a needlestick from an HBV/HIV-positive patient', meaning: 'Biological hazard — a blood-borne exposure incident' },
    { clue: 'A data-entry clerk with wrist pain and a fixed awkward posture', meaning: 'Ergonomic hazard → a work-related musculoskeletal disorder' },
    { clue: 'A painter using solvents in an unventilated room', meaning: 'Chemical hazard with high exposure — inhalational solvent risk' },
  ],

  treatment: [
    { logic: 'Classify, then quantify', detail: 'Name the hazard class and estimate exposure (intensity × duration × frequency) before deciding it is “high risk”.' },
    { logic: 'Feed the risk ranking into control', detail: 'Tackle the highest-risk hazards first through the hierarchy of controls ([[ich-occupational-prevention-controls]]).' },
  ],

  mnemonics: [
    { hook: 'Five classes: Please Check Before Entering Plant', expansion: ['Physical, Chemical, Biological, Ergonomic, Psychosocial'] },
    { hook: 'Risk = Hazard × Exposure', expansion: ['No exposure → no realised risk, however dangerous the agent', 'Reducing exposure reduces risk even when the hazard is fixed'] },
  ],

  traps: [
    {
      questionCategory: 'Hazard versus risk',
      wrongInstinct: 'Hazard and risk are interchangeable words',
      rightAnswer: 'Hazard is the intrinsic potential to harm; risk is the probability that harm occurs given exposure (Risk = Hazard × Exposure)',
      why: 'A very hazardous agent that no one is exposed to poses little risk — the exam tests exactly this separation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A sealed drum of a highly toxic solvent is stored safely with no worker contact. In occupational terms, this situation is best described as:',
      options: [
        { id: 'a', text: 'High hazard and high risk' },
        { id: 'b', text: 'High hazard but low risk' },
        { id: 'c', text: 'Low hazard and high risk' },
        { id: 'd', text: 'No hazard and no risk' },
      ],
      answerId: 'b',
      explanation: 'The solvent retains its intrinsic potential to harm (high hazard), but because there is no exposure the probability of harm is low (low risk). Risk = Hazard × Exposure.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A garment worker develops carpal tunnel syndrome from years of repetitive high-force sewing. Which hazard class does this exposure belong to?',
      options: [
        { id: 'a', text: 'Physical' },
        { id: 'b', text: 'Chemical' },
        { id: 'c', text: 'Ergonomic' },
        { id: 'd', text: 'Psychosocial' },
      ],
      answerId: 'c',
      explanation: 'Repetitive, forceful, awkward-posture work is an ergonomic hazard and produces work-related musculoskeletal disorders such as carpal tunnel syndrome. Physical hazards are agents like noise, heat and radiation.',
      tests: 'disease',
    },
  ],
};

export default ichOccupationalHazards;
