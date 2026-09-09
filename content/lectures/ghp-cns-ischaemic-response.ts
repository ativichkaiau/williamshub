import type { Lecture } from '../../lib/types';

export const ghpCnsIschaemicResponse: Lecture = {
  id: 'ghp-cns-ischaemic-response',
  title: 'CNS Ischaemic Response & the Cushing Reaction',
  system: 'cardiovascular',
  source: 'Ch 18 — Nervous Regulation of the Circulation & Rapid Control of Arterial Pressure',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 18 Nervous Regulation of the Circulation' },
    { kind: 'mechanism', label: 'Last-ditch sympathetic discharge' },
    { kind: 'exam', label: 'Cushing triad and raised intracranial pressure' },
  ],

  highYield: [
    '**The CNS ischaemic response is the vasomotor centre defending itself.** When flow to the lower brainstem falls, the neurons of the vasoconstrictor area are not switched by any afferent — they respond **directly** to their own ischaemia, chiefly to **accumulated CO2 and H+** (and failure to wash out other metabolites). The output is the **most powerful sympathetic discharge the body can generate**, far exceeding anything the baroreflex produces.',
    '**Know the thresholds, because they define when it matters.** It is **not active in the normal range**: it begins only when mean arterial pressure falls below about **60 mmHg**, and is **most powerful at 15–20 mmHg**. It can drive pressure to **250 mmHg or more**, sustained for up to about **10 minutes**. It is therefore an **emergency, last-ditch system** — an ultimate stand to keep the brain perfused — and explicitly **not** a normal-range regulator.',
    '**The hierarchy is the exam point.** Baroreceptors buffer between **60 and 180 mmHg**; chemoreceptors take over below about **80 mmHg**; the CNS ischaemic response only fires below **60 mmHg** and dominates below 40–50. Each system hands over to a cruder, more powerful one as pressure falls. Above all, note that the CNS ischaemic response is triggered by **brainstem hypoperfusion**, not by measured arterial pressure as such — anything that obstructs cerebral flow at a normal systemic pressure will trigger it just as well.',
    '**That last point is the whole of the Cushing reaction.** When **intracranial pressure rises to and above arterial pressure**, cerebral vessels are compressed, the brainstem becomes ischaemic, and the CNS ischaemic response fires — raising systemic arterial pressure **above the intracranial pressure** so that flow is restored. It is a protective reflex with a lethal meaning: it signals a critically raised ICP and impending herniation.',
    '**The Cushing triad: hypertension (with a widening pulse pressure), BRADYCARDIA, and irregular/depressed respiration.** The bradycardia is the classic trap — it is **not** a direct part of the ischaemic discharge, which is purely sympathetic. It is the **baroreceptor reflex responding secondarily to the induced hypertension**, producing vagal slowing on top of a hypertensive patient. The respiratory irregularity comes from direct compression and ischaemia of the brainstem respiratory centres.',
    '**Time limits are absolute.** Cerebral flow below roughly **two-fifths of normal** for **3–10 minutes** causes permanent damage, and if the ischaemia is severe and prolonged the vasomotor centre itself fails — the discharge collapses and pressure falls terminally. This is the same failure that converts progressive shock into the irreversible stage.',
  ],

  mechanism: {
    title: 'Brainstem ischaemia drives the vasomotor centre directly, and the resulting hypertension is then met by a reflex bradycardia',
    steps: [
      { id: 's1', label: 'Cerebral (brainstem) blood flow falls — from low systemic pressure or from raised intracranial pressure' },
      { id: 's2', label: 'CO2 and H+ accumulate in the vasoconstrictor area; neurons are stimulated directly', emphasis: 'key' },
      { id: 's3', label: 'Massive sympathetic discharge — far greater than any baroreflex output', emphasis: 'key' },
      { id: 's4', label: 'Arterial pressure driven to 250 mmHg or more, restoring brainstem perfusion' },
      { id: 's5', label: 'Baroreceptors sense the hypertension → reflex vagal bradycardia (the Cushing bradycardia)', emphasis: 'key' },
      { id: 's6', label: 'If ischaemia persists beyond ~10 minutes the vasomotor centre fails and pressure collapses', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypertension with a widening pulse pressure, bradycardia and irregular breathing in a head-injured patient', mechanism: 'Cushing reaction — raised intracranial pressure causing brainstem ischaemia, plus reflex vagal slowing', significance: 'key' },
    { sign: 'Bradycardia in the presence of a very high arterial pressure', mechanism: 'Baroreceptor reflex responding to the pressure the ischaemic discharge itself created — a secondary, not a direct, effect', significance: 'key' },
    { sign: 'No pressor contribution at pressures above 60 mmHg', mechanism: 'The response is a last-ditch system with a threshold well below the baroreceptor operating range', significance: 'key' },
    { sign: 'Arterial pressure sustained at 250 mmHg for several minutes in severe shock', mechanism: 'Maximal direct stimulation of the vasoconstrictor area at pressures of 15–20 mmHg', significance: 'supportive' },
    { sign: 'Abrupt terminal fall in pressure after prolonged profound hypotension', mechanism: 'Vasomotor centre failure from its own sustained ischaemia — the irreversible stage', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A pressor response that begins only below 60 mmHg and peaks near 15–20 mmHg', meaning: 'CNS ischaemic response, not the baroreceptor or chemoreceptor reflex' },
    { clue: 'Stimulation of vasomotor neurons by local CO2 and H+ rather than by afferent traffic', meaning: 'Direct central chemosensitivity of the vasoconstrictor area' },
    { clue: 'Rising systemic pressure that tracks a rising intracranial pressure', meaning: 'Cushing reaction — pressure is being driven above ICP to restore cerebral perfusion' },
    { clue: 'Hypertension, bradycardia and irregular respiration together', meaning: 'Cushing triad — critically raised intracranial pressure with impending herniation' },
    { clue: 'Cerebral flow below about two-fifths of normal for 3–10 minutes', meaning: 'The window beyond which brain injury becomes permanent' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'It completes the ladder of rapid pressure control: [[ghp-baroreceptor-chemoreceptor-reflexes]] buffers the normal range, and when that is exhausted the same effector — [[ghp-vasomotor-centre-sympathetic-control]] — is driven maximally from within. It is also the physiological proof that the brain is the one tissue whose perfusion the circulation will sacrifice everything else to defend.' },
    { logic: 'Where it shows up clinically', detail: 'Two settings dominate: **profound haemorrhagic shock**, where it is the final compensation before decompensation ([[ghp-shock-stages-haemorrhagic]] and [[ghp-shock-treatment-physiology]]), and **raised intracranial pressure**, where the Cushing triad is a neurosurgical emergency. Course cross-links: [[ventricles-csf-circulation]], [[shock-mechanisms-types]].' },
  ],

  mnemonics: [
    { hook: 'Cushing = "pressure UP, pulse DOWN, breathing WRONG"', expansion: ['Hypertension with widening pulse pressure — the ischaemic discharge', 'Bradycardia — the BARORECEPTOR answer to that hypertension', 'Irregular respiration — brainstem compression itself'] },
    { hook: 'The ladder: 180–60 baro, 80–40 chemo, under 60 CNS ischaemic', expansion: ['Each step is cruder and more powerful than the last', 'CNS ischaemic peaks at 15–20 mmHg and can reach 250 mmHg', 'Beyond ~10 minutes the centre itself fails'] },
  ],

  traps: [
    {
      questionCategory: 'Origin of the bradycardia in the Cushing reaction',
      wrongInstinct: 'The CNS ischaemic response directly stimulates the vagus, producing bradycardia as part of the discharge',
      rightAnswer: 'The discharge is purely sympathetic; the bradycardia is the baroreflex reacting to the hypertension it produced',
      why: 'Blocking the baroreceptors abolishes the bradycardia but leaves the hypertension intact.',
    },
    {
      questionCategory: 'Role of the CNS ischaemic response in normal regulation',
      wrongInstinct: 'It contributes continuously to setting normal arterial pressure alongside the baroreflex',
      rightAnswer: 'It is silent above about 60 mmHg and is purely an emergency, last-ditch mechanism',
      why: 'Its threshold sits below the entire baroreceptor operating range, so it plays no part in day-to-day control.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with an expanding extradural haematoma has a blood pressure of 190/80 mmHg, a heart rate of 44/min and irregular respiration. What is the immediate cause of the bradycardia?',
      options: [
        { id: 'a', text: 'Direct vagal stimulation as part of the CNS ischaemic discharge' },
        { id: 'b', text: 'Baroreceptor reflex activation by the hypertension generated by the CNS ischaemic response' },
        { id: 'c', text: 'Chemoreceptor stimulation by systemic hypoxaemia' },
        { id: 'd', text: 'Sinoatrial node ischaemia from reduced coronary perfusion' },
      ],
      answerId: 'b',
      explanation: 'The CNS ischaemic response is a massive sympathetic discharge that drives pressure above the intracranial pressure to restore brainstem perfusion. The resulting hypertension loads the carotid sinus and aortic baroreceptors, which produce reflex vagal bradycardia. The bradycardia is therefore secondary, which is why it accompanies hypertension rather than hypotension.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'At which mean arterial pressure does the CNS ischaemic response produce its most powerful sympathetic output?',
      options: [
        { id: 'a', text: 'Around 100 mmHg' },
        { id: 'b', text: 'Around 80 mmHg' },
        { id: 'c', text: 'Around 60 mmHg' },
        { id: 'd', text: 'Around 15–20 mmHg' },
      ],
      answerId: 'd',
      explanation: 'The response begins below about 60 mmHg and is maximal at 15–20 mmHg, where brainstem ischaemia is most severe. At 100 and 80 mmHg it makes no contribution at all; 60 mmHg is merely the threshold. This is the signature of a last-ditch rather than a regulatory system.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which feature best distinguishes the CNS ischaemic response from the baroreceptor reflex?',
      options: [
        { id: 'a', text: 'It is triggered by ischaemia of the vasomotor neurons themselves rather than by afferent input from arterial stretch receptors' },
        { id: 'b', text: 'It uses parasympathetic rather than sympathetic efferents' },
        { id: 'c', text: 'It acts over hours to days rather than seconds' },
        { id: 'd', text: 'It resets within 1–2 days of sustained activation' },
      ],
      answerId: 'a',
      explanation: 'The defining feature is that the vasoconstrictor neurons are stimulated directly by their own accumulating CO2 and H+, with no sensory afferent involved. It is sympathetic, acts within seconds, and does not reset — resetting is the property of the baroreceptors that removes their long-term influence on pressure.',
      tests: 'exam',
    },
  ],
};

export default ghpCnsIschaemicResponse;
