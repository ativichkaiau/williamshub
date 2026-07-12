import type { Lecture } from '../../lib/types';

export const behAggressionViolence: Lecture = {
  id: 'beh-aggression-violence',
  title: 'Aggression, Agitation & De-escalation',
  system: 'community',
  source: 'L14 — Abuse, Suicide & Violence',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L14 Aggression & Violence' },
    { kind: 'mechanism', label: 'Safety → de-escalate' },
    { kind: 'exam', label: 'Warning signs' },
    { kind: 'treatment', label: 'Least-restrictive care' },
  ],

  highYield: [
    '**A past history of violence is the single strongest predictor of future violence.** Other risk factors: **substance intoxication or withdrawal**, **psychosis** (especially paranoia or command hallucinations), agitation, impulsivity, access to weapons, and organic/delirious states ([[beh-psychotic-disorders]]).',
    '**Agitation is a medical emergency until proven otherwise.** Always **rule out organic causes** — delirium, hypoglycaemia, hypoxia, intoxication, head injury — before assuming a primary psychiatric cause ([[beh-mental-status-exam]]).',
    '**Recognize the prodrome of impending violence:** pacing, clenched fists or jaw, loud or pressured speech, glaring, and invading personal space. These warning signs let you act before an assault.',
    '**Safety and environment come first:** keep an exit accessible, position yourself near the door at an angle, remove potential weapons, never turn your back or get cornered, and bring a team — never assess a high-risk patient alone.',
    '**Verbal de-escalation is first-line and resolves most agitation:** stay calm, respect personal space, listen and validate feelings, offer choices, and set clear limits without provoking. **Medication, then physical restraint or seclusion, is a last resort** — the least-restrictive option, applied per protocol with close monitoring ([[beh-difficult-encounters]], [[beh-suicide-assessment]]).',
  ],

  mechanism: {
    title: 'Managing the agitated patient: safety → medical work-up → de-escalate → restrain (last resort)',
    steps: [
      { id: 's1', label: 'Ensure safety first — space, exits, team, remove hazards', emphasis: 'key' },
      { id: 's2', label: 'Recognize warning signs (pacing, clenched fists, loud voice)', emphasis: 'key' },
      { id: 's3', label: 'Rule out organic causes (delirium, intoxication, hypoglycaemia)', emphasis: 'key' },
      { id: 's4', label: 'Verbal de-escalation — calm, listen, validate, offer choices', emphasis: 'key' },
      { id: 's5', label: 'Medication then physical restraint only as a last resort', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A past history of violence is the single strongest predictor of future violence', mechanism: 'Prior behaviour reflects both propensity and capability, outweighing most single factors', significance: 'key' },
    { sign: 'Agitation is treated as a medical emergency until organic causes are excluded', mechanism: 'Delirium, intoxication and metabolic derangements present as agitation and are missed if assumed psychiatric', significance: 'key' },
    { sign: 'Verbal de-escalation is first-line and resolves most agitation without force', mechanism: 'Calm engagement, validation and offering choices reduce arousal before it escalates', significance: 'key' },
    { sign: 'Restraint and seclusion are last resorts, least-restrictive and closely monitored', mechanism: 'Coercive measures carry physical and psychological harm, so they follow failed de-escalation only', significance: 'key' },
  ],

  investigations: [
    { clue: 'A patient paces, clenches their fists, raises their voice and steps into staff space', meaning: 'Prodromal warning signs of imminent violence' },
    { clue: 'A confused, agitated older patient with acute onset and fluctuating attention', meaning: 'Delirium — an organic cause to work up medically, not assume psychiatric' },
    { clue: 'A clinician stands at an angle between the patient and an open door with the team nearby', meaning: 'Correct safety positioning for a potentially violent encounter' },
    { clue: 'Offering a distressed patient clear choices and calmly acknowledging their frustration', meaning: 'Verbal de-escalation in practice' },
  ],

  treatment: [
    { logic: 'Safety and environment first', detail: 'Secure exits, remove hazards, position defensively and bring a team before engaging a potentially violent patient.' },
    { logic: 'De-escalate verbally as first-line', detail: 'Stay calm, respect space, listen and validate, offer choices, and set limits without arguing or threatening.' },
    { logic: 'Escalate to medication then restraint only if needed', detail: 'Offer oral medication first; use physical restraint or seclusion as a last resort, least-restrictive and with close monitoring per protocol.' },
  ],

  mnemonics: [
    { hook: 'De-escalation: "Calm, Space, Listen, Limits"', expansion: ['Calm, non-threatening tone and posture', 'Respect personal Space (do not crowd)', 'Listen and validate the feeling', 'Set clear Limits and offer choices'] },
  ],

  traps: [
    {
      questionCategory: 'First step with the agitated patient',
      wrongInstinct: 'Reach immediately for sedation or physical restraint to control the patient',
      rightAnswer: 'Ensure safety, exclude organic causes, and attempt verbal de-escalation first',
      why: 'Restraint is a last resort; skipping de-escalation and a medical work-up risks harm and misses reversible causes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which factor is the single strongest predictor of future violence in a patient?',
      options: [
        { id: 'a', text: 'A past history of violence' },
        { id: 'b', text: 'A diagnosis of depression' },
        { id: 'c', text: 'Older age' },
        { id: 'd', text: 'Female sex' },
      ],
      answerId: 'a',
      explanation: 'A past history of violence is the strongest single predictor of future violence. Substance use and psychosis add risk, but prior violence carries the most weight.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'An acutely agitated patient is brought to the emergency department. After ensuring staff safety, what is the most appropriate next priority?',
      options: [
        { id: 'a', text: 'Apply physical restraints immediately' },
        { id: 'b', text: 'Exclude organic causes and attempt verbal de-escalation' },
        { id: 'c', text: 'Discharge the patient to reduce tension' },
        { id: 'd', text: 'Leave the patient alone until they calm down' },
      ],
      answerId: 'b',
      explanation: 'After securing safety, rule out organic causes of agitation (such as delirium, intoxication or hypoglycaemia) and use verbal de-escalation first. Restraint is a last resort.',
      tests: 'treatment',
    },
  ],
};

export default behAggressionViolence;
