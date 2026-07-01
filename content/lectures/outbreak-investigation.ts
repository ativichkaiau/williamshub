import type { Lecture } from '../../lib/types';
import { EPIDEMIC_CURVE } from '../../lib/figures';

export const outbreakInvestigation: Lecture = {
  id: 'outbreak-investigation',
  title: 'Outbreak Investigation: Steps, Epidemic Curve & the Box Jellyfish Case',
  system: 'research',
  source: 'L5 — Outbreak Investigation',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L5 Outbreak Investigation' },
    { kind: 'mechanism', label: 'Field epidemiology' },
    { kind: 'exam', label: 'Epidemic curve · case def' },
  ],

  highYield: [
    '**Definitions.** *Endemic* = usual baseline level in an area. *Outbreak/epidemic* = cases **clearly in excess of the expected** baseline. *Pandemic* = an epidemic across countries/continents. An outbreak can be as few as two linked cases (e.g. a novel toxin) if that exceeds expected.',
    '**Steps of an outbreak investigation** (memorise the sequence): (1) **verify the diagnosis** & (2) **confirm the outbreak exists** (compare to expected), (3) **establish a case definition** (person + place + time + clinical criteria), (4) **find cases** & count, (5) **descriptive epidemiology by person, place, time** — including the **epidemic curve**, (6) **generate a hypothesis** about source/mode, (7) **test it with an analytic study** (usually case-control or cohort), (8) **implement control measures**, (9) **communicate**, and (10) maintain **surveillance**. Control measures need not wait for the analysis — act early if lives are at risk.',
    '**The epidemic curve (histogram of cases over time) reveals the source.** A **single sharp peak within one incubation period → point source** (one common exposure, e.g. a meal). **Successive taller waves ~one incubation apart → propagated** (person-to-person). A continuous plateau → continuous common source.',
    '**Key measures.** **Attack rate = number of cases ÷ population at risk** (an incidence proportion during the outbreak). Working **backward from the epidemic curve** using the incubation period pinpoints the likely exposure time.',
    '**Case study — lethal box jellyfish in Thailand (Thaikruea et al.).** A real applied investigation: proving the existence of lethal *Chironex*-type box jellyfish, building a case definition and surveillance ("toxic jellyfish network"), identifying **vinegar as the appropriate first aid** (inactivates nematocysts), and driving prevention (warning signs, nets). It shows field epidemiology turning scattered case reports into evidence, policy, and lives saved.',
  ],

  mechanism: {
    title: 'From "excess cases" to controlled outbreak',
    steps: [
      { id: 's1', label: 'Verify diagnosis + confirm the outbreak (vs expected)', emphasis: 'key' },
      { id: 's2', label: 'Write a case definition (person, place, time, clinical)' },
      { id: 's3', label: 'Describe by person/place/time → epidemic curve', emphasis: 'key' },
      { id: 's4', label: 'Hypothesise source → test with case-control/cohort' },
      { id: 's5', label: 'Control measures + communicate + ongoing surveillance', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Single sharp peak within one incubation period', mechanism: 'Point-source outbreak (one common exposure)', significance: 'key' },
    { sign: 'Successive taller waves ~1 incubation apart', mechanism: 'Propagated (person-to-person) spread', significance: 'key' },
    { sign: 'Attack rate = cases ÷ population at risk', mechanism: 'Compares exposure groups to find the source', significance: 'key' },
    { sign: 'Case definition = person + place + time + clinical criteria', mechanism: 'Standardises who counts as a "case"', significance: 'supportive' },
    { sign: 'Vinegar first aid for box jellyfish', mechanism: 'Inactivates undischarged nematocysts (Thaikruea case)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Epidemic curve = one narrow spike', meaning: 'Point source → hunt a single common exposure (meal/water)' },
    { clue: 'Cases climbing in waves over weeks', meaning: 'Propagated → person-to-person; interrupt transmission' },
    { clue: 'Highest attack rate among those who ate the potato salad', meaning: 'Hypothesised vehicle → confirm with analytic study' },
    { clue: 'Scattered fatal beach stings with no system to capture them', meaning: 'Set up ad-hoc/active surveillance (box jellyfish network)' },
  ],

  treatment: [
    { logic: 'Field-epi principle', detail: 'Act on control measures as soon as a plausible source is identified — you do not have to wait for the full analytic study when lives are at stake. Then confirm, communicate, and sustain surveillance.' },
  ],

  mnemonics: [
    { hook: 'Outbreak steps: "Verify, Confirm, Define, Find, Describe, Hypothesise, Test, Control, Communicate"', expansion: ['Descriptive (person/place/time) before analytic (case-control/cohort)'] },
    { hook: 'Curve shape: Spike = Single source; Waves = spread', expansion: ['Point-source vs propagated'] },
  ],

  traps: [
    {
      questionCategory: 'When to start control measures',
      wrongInstinct: 'You must finish the analytic study before implementing any control measures',
      rightAnswer: 'Control measures can and should begin as soon as a plausible source is identified — especially when severe/fatal',
      why: 'Outbreak investigation and control run in parallel; delaying action to "finish the study" costs lives (a core field-epidemiology principle).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An epidemic curve shows a single sharp peak with all cases occurring within one incubation period. This pattern indicates:',
      options: [
        { id: 'a', text: 'A propagated (person-to-person) outbreak' },
        { id: 'b', text: 'A point-source outbreak' },
        { id: 'c', text: 'An endemic disease' },
        { id: 'd', text: 'A pandemic' },
      ],
      answerId: 'b',
      explanation: 'A single tight peak within one incubation period points to one common exposure = point source. Successive rising waves suggest propagated spread.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which is the correct early step, done BEFORE generating a hypothesis about the source?',
      options: [
        { id: 'a', text: 'Conduct a case-control study' },
        { id: 'b', text: 'Establish a case definition and describe cases by person, place, and time' },
        { id: 'c', text: 'Publish the findings' },
        { id: 'd', text: 'Calculate the odds ratio' },
      ],
      answerId: 'b',
      explanation: 'Descriptive epidemiology (case definition + person/place/time, including the epidemic curve) precedes and generates the hypothesis, which is then tested with an analytic study.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Epidemic curve: point-source vs propagated', svg: EPIDEMIC_CURVE, caption: 'Shape reveals the source. Single peak within one incubation = point source; rising waves = propagated (person-to-person).' },
  ],
};

export default outbreakInvestigation;
