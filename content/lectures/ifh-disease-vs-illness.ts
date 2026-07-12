import type { Lecture } from '../../lib/types';

export const ifhDiseaseVsIllness: Lecture = {
  id: 'ifh-disease-vs-illness',
  title: 'Disease vs Illness',
  system: 'community',
  source: 'L2 — Patient-Centered Medicine & Communication',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L2 PCM & Communication' },
    { kind: 'mechanism', label: 'FIFE' },
    { kind: 'exam', label: 'Illness experience · explanatory model' },
  ],

  highYield: [
    '**Disease and illness are not the same thing.** **Disease** is the biomedical **pathology** — the objective abnormality the clinician diagnoses (the “it”). **Illness** is the patient’s **subjective lived experience** of being unwell — the meaning, fears and impact (the “I”). A third lens, **sickness**, is the social role of being unwell.',
    '**You can have one without the other.** **Disease without illness** = asymptomatic **hypertension** or early diabetes (pathology present, patient feels well). **Illness without disease** = medically unexplained symptoms where the person suffers but no pathology is found. Chasing only the disease misses half the patient.',
    '**Explore the illness experience with FIFE:** **F**eelings (fears, worries), **I**deas (the patient’s explanatory model — what they think is wrong), **F**unction (effect on daily life and work), **E**xpectations (what they want from this visit). ICE (Ideas, Concerns, Expectations) is the equivalent shorthand.',
    '**The illness drives behaviour.** A patient with “normal numbers” can stay frightened, and a hidden fear (e.g. “this headache is a brain tumour”) shapes adherence and satisfaction more than the pathology does. Eliciting **Ideas** and **Feelings** surfaces and addresses these.',
    '**Addressing both is patient-centred care.** Integrating disease and illness is the first component of the [[ifh-patient-centered-clinical-method]], rests on good [[ifh-clinical-communication-skills]], and reflects the [[ifh-biopsychosocial-model]] and the generalist ethos of [[ifh-family-medicine-principles]].',
  ],

  mechanism: {
    title: 'Presenting problem → pursue disease AND explore illness (FIFE) → integrate → manage both',
    steps: [
      { id: 's1', label: 'Patient presents with a problem' },
      { id: 's2', label: 'Pursue the disease — history, examination, investigations' },
      { id: 's3', label: 'Explore the illness with FIFE (feelings, ideas, function, expectations)', emphasis: 'key' },
      { id: 's4', label: 'Integrate disease + illness into one shared understanding', emphasis: 'key' },
      { id: 's5', label: 'Manage the pathology AND the lived experience' },
    ],
  },

  examFindings: [
    { sign: 'Disease is the pathology; illness is the experience of it', mechanism: 'Objective abnormality vs subjective suffering and meaning', significance: 'key' },
    { sign: 'Disease can exist without illness, and illness without disease', mechanism: 'Asymptomatic hypertension vs medically unexplained symptoms', significance: 'key' },
    { sign: 'FIFE structures the exploration of the illness', mechanism: 'Feelings, Ideas, Function, Expectations map the patient’s world', significance: 'key' },
    { sign: 'Ignoring the illness lowers adherence and satisfaction', mechanism: 'Unspoken fears and expectations go unaddressed', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Diabetes numbers are on target but the patient is frightened about the future', meaning: 'Illness experience needs addressing even when the disease is “controlled”' },
    { clue: 'Chest pain with entirely normal tests, yet the patient stays distressed', meaning: 'Illness without demonstrable disease — explore the Ideas and Feelings' },
    { clue: 'Asking “What do you think is causing this?”', meaning: 'Eliciting the patient’s Ideas — their explanatory model' },
    { clue: 'Back pain has stopped the patient going to work', meaning: 'The Function domain of FIFE — impact on daily life' },
  ],

  treatment: [
    { logic: 'Elicit FIFE in every consultation', detail: 'Routinely ask about feelings, ideas, function and expectations — not just the biomedical story — so the illness is on the table alongside the disease.' },
    { logic: 'Manage the disease and the illness together', detail: 'Pair the biomedical plan with explicit acknowledgement of the fears, impact and expectations you uncovered.' },
  ],

  mnemonics: [
    { hook: 'FIFE = the illness experience', expansion: ['Feelings (fears, worries)', 'Ideas (what they think is wrong)', 'Function (impact on daily life)', 'Expectations (what they want)'] },
    { hook: 'Disease is the doctor’s “it”; Illness is the patient’s “I”', expansion: ['Disease = objective pathology', 'Illness = subjective, individual experience'] },
  ],

  traps: [
    {
      questionCategory: 'Disease vs illness',
      wrongInstinct: 'Treating the disease automatically resolves the illness',
      rightAnswer: 'The illness — fears, impact and expectations — must be explored in its own right; controlling the pathology does not guarantee the patient feels well',
      why: 'A patient can have on-target results yet remain frightened, non-adherent and dissatisfied.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with asymptomatic, well-controlled hypertension feels completely well. Which statement best captures this situation?',
      options: [
        { id: 'a', text: 'Disease is present without illness' },
        { id: 'b', text: 'Illness is present without disease' },
        { id: 'c', text: 'Both disease and illness are absent' },
        { id: 'd', text: 'Disease and illness always occur together' },
      ],
      answerId: 'a',
      explanation: 'Hypertension is a biomedical pathology (disease), but because the patient feels well there is no subjective experience of being unwell (no illness). Disease and illness can occur independently of each other.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'In the FIFE framework, which element captures how the complaint is affecting the patient’s ability to work and carry out daily activities?',
      options: [
        { id: 'a', text: 'Feelings' },
        { id: 'b', text: 'Ideas' },
        { id: 'c', text: 'Function' },
        { id: 'd', text: 'Expectations' },
      ],
      answerId: 'c',
      explanation: 'Function refers to the impact of the problem on daily life and functioning. Feelings are the emotions and fears, Ideas are the patient’s explanatory model, and Expectations are what they want from the encounter.',
      tests: 'exam',
    },
  ],
};

export default ifhDiseaseVsIllness;
