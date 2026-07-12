import type { Lecture } from '../../lib/types';

export const fcp1HistorySymptomAnalysis: Lecture = {
  id: 'fcp1-history-symptom-analysis',
  title: 'Analysing a Symptom: SOCRATES, Chronology & Pertinent Findings',
  system: 'clinical',
  source: 'L1 — Medical History Taking',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L1 History Taking' },
    { kind: 'mechanism', label: 'Chronology → differential' },
    { kind: 'exam', label: 'SOCRATES · OLDCARTS' },
    { kind: 'investigation', label: 'Pertinent positives/negatives' },
  ],

  highYield: [
    '**Every symptom deserves a systematic analysis.** Two interchangeable frameworks: **SOCRATES** (Site, Onset, Character, Radiation, Associations, Time course, Exacerbating/relieving, Severity) and **OLDCARTS** (Onset, Location, Duration, Character, Aggravating/Alleviating, Radiation, Timing, Severity). They fit inside the HPI of [[fcp1-history-taking-framework]].',
    '**Chronology is king.** Establish the exact **onset** and **tempo**: a **sudden, maximal-at-onset** symptom suggests a vascular or mechanical catastrophe, while a **gradual** course points to inflammatory, infective or neoplastic processes. Ask about progression, pattern (constant vs intermittent) and duration.',
    '**Associated symptoms build the syndrome.** A cluster of features — not a single symptom — defines a diagnosis. Deliberately ask the **pertinent positives** (features you expect if your leading diagnosis is right) and **pertinent negatives** (features whose absence argues against a cannot-miss cause).',
    '**Grade severity and functional impact**, and screen for **red flags** specific to that symptom (for example weight loss, night sweats, neurological deficit, haemodynamic compromise). Red flags drive urgency and escalation.',
    '**Character and radiation are strong discriminators** — colicky waves suggest a hollow viscus, tearing pain radiating to the back suggests dissection, pain reproduced by palpation suggests a musculoskeletal source.',
  ],

  mechanism: {
    title: 'From a raw symptom to a ranked differential',
    steps: [
      { id: 's1', label: 'Anchor the timeline: exact onset and tempo (sudden = danger)', emphasis: 'danger' },
      { id: 's2', label: 'Characterise fully with SOCRATES / OLDCARTS', emphasis: 'key' },
      { id: 's3', label: 'Gather associated symptoms → assemble the syndrome' },
      { id: 's4', label: 'Ask pertinent positives & negatives → narrow the differential', emphasis: 'key' },
      { id: 's5', label: 'Grade severity & screen red flags → set urgency', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sudden, “worst ever”, maximal-at-onset symptom', mechanism: 'Instantaneous onset points to a vascular or mechanical event (rupture, embolism, torsion)', significance: 'key' },
    { sign: 'Colicky, waxing-and-waning pain', mechanism: 'Peristalsis against an obstructed hollow viscus (gut, ureter, biliary tree)', significance: 'key' },
    { sign: 'Pain reproduced by local palpation or movement', mechanism: 'Points to a somatic musculoskeletal or chest-wall source rather than a visceral one', significance: 'supportive' },
    { sign: 'Deliberately documented pertinent negatives', mechanism: 'Absence of red-flag features argues against the cannot-miss diagnosis and supports a benign cause', significance: 'supportive' },
  ],

  investigations: [
    { clue: '“The worst headache of my life, hit me instantly”', meaning: 'Thunderclap onset — subarachnoid haemorrhage until excluded' },
    { clue: 'Exertional chest tightness relieved within minutes of rest', meaning: 'The relieving factor and timing fit stable angina' },
    { clue: 'Weight loss, drenching night sweats and a growing lymph node', meaning: 'Constitutional “B” symptoms — a sinister red-flag cluster' },
    { clue: 'A symptom with no red flags and a clear benign trigger', meaning: 'Pertinent negatives support a self-limiting cause and reassurance' },
  ],

  treatment: [
    { logic: 'Nail the chronology before anything else', detail: 'Onset and tempo alone reshape the differential — sudden onset moves vascular and surgical emergencies to the top of the list.' },
    { logic: 'Always ask the negatives that exclude the cannot-miss diagnosis', detail: 'For chest pain, headache or abdominal pain, the pertinent negatives you elicit are what let you safely down-triage a patient.' },
  ],

  mnemonics: [
    { hook: 'SOCRATES = Site, Onset, Character, Radiation, Associations, Time course, Exacerbating/relieving, Severity', expansion: ['Best for pain but works for any symptom', 'Onset carries the most diagnostic weight', 'Associations build the syndrome'] },
    { hook: 'OLDCARTS = Onset, Location, Duration, Character, Aggravating/Alleviating, Radiation, Timing, Severity', expansion: ['A parallel checklist to SOCRATES', 'Use whichever you can recall under pressure'] },
  ],

  traps: [
    {
      questionCategory: 'Symptom chronology',
      wrongInstinct: 'Treat “sudden” and “gradual” onset as interchangeable detail',
      rightAnswer: 'Pin down whether the symptom was maximal at onset (sudden) or built up over time (gradual)',
      why: 'A truly instantaneous, maximal-at-onset symptom (thunderclap headache, tearing chest pain) signals a vascular catastrophe and changes the whole workup and its urgency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 45-year-old describes a headache that reached maximum intensity within a second, “like being hit on the back of the head”. Which feature of the analysis most raises concern for a serious cause?',
      options: [
        { id: 'a', text: 'The site of the pain' },
        { id: 'b', text: 'The instantaneous, maximal-at-onset time course' },
        { id: 'c', text: 'The mild associated photophobia' },
        { id: 'd', text: 'The severity score of 6 out of 10' },
      ],
      answerId: 'b',
      explanation: 'A thunderclap onset — maximal within seconds — is the red flag that mandates exclusion of subarachnoid haemorrhage. Onset and tempo carry the greatest diagnostic weight in symptom analysis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'When taking a history for suspected pulmonary embolism, you specifically ask about leg swelling, immobility and recent surgery even though the patient has not mentioned them. These questions are best described as eliciting:',
      options: [
        { id: 'a', text: 'The severity of the symptom' },
        { id: 'b', text: 'Pertinent positives and negatives' },
        { id: 'c', text: 'The past medical history' },
        { id: 'd', text: 'The social history' },
      ],
      answerId: 'b',
      explanation: 'Directed questions about expected risk factors and associated features are pertinent positives (if present) or pertinent negatives (if absent). They refine the probability of the leading diagnosis.',
      tests: 'exam',
    },
  ],
};

export default fcp1HistorySymptomAnalysis;
