import type { Lecture } from '../../lib/types';

export const ghpCerebralBloodFlowMetabolism: Lecture = {
  id: 'ghp-cerebral-blood-flow-metabolism',
  title: 'Cerebral Blood Flow, Metabolism & Intracranial Pressure',
  system: 'neuro',
  source: 'Ch 61 — Cerebral Blood Flow, Cerebrospinal Fluid & Brain Metabolism',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neurology' },
    { kind: 'lecture', label: 'Ch 61 Cerebral Flow & CSF' },
    { kind: 'mechanism', label: 'CO₂-dominant autoregulation' },
    { kind: 'exam', label: 'Monro–Kellie · Cushing' },
  ],

  highYield: [
    '**The brain is metabolically extravagant and has almost no reserve, which is why it fails within seconds.** It is about **2% of body weight** but takes roughly **15% of cardiac output** and **20% of resting oxygen**. It stores essentially no glycogen and depends on **continuous glucose and oxygen** — consciousness is lost in **5–10 seconds** of arrested flow, and irreversible injury follows within minutes.',
    '**Carbon dioxide is the dominant regulator of cerebral flow, not oxygen — this is the single most examinable difference from other beds.** Flow rises almost linearly with **PaCO₂** across the physiological range, because CO₂ crosses into brain extracellular fluid and generates **H⁺**, the actual vasodilator stimulus. Oxygen matters only once **PaO₂ falls below about 50 mmHg**, at which point hypoxic vasodilation takes over.',
    '**That CO₂ dependence is directly therapeutic and directly dangerous.** Deliberate **hyperventilation** lowers PaCO₂, constricts cerebral vessels and rapidly reduces intracranial pressure — useful as a short-term rescue. But sustained hypocapnia risks **ischaemia** by over-constricting, and the effect wanes as bicarbonate re-equilibrates, so it buys minutes, not treatment.',
    '**Cerebral autoregulation holds flow near-constant between roughly 60 and 140 mmHg mean arterial pressure.** Outside that window flow follows pressure passively — hypoperfusion below it, and hyperperfusion with breakthrough oedema above it. Chronic hypertension **shifts the whole range rightward**, so a "normal" pressure can under-perfuse that patient, the same rightward shift seen in [[ghp-local-blood-flow-autoregulation]].',
    '**The Monro–Kellie doctrine explains why the skull turns any added volume into pressure.** The cranium is rigid and holds **brain, blood and CSF** in fixed total volume. An expanding mass is initially compensated by displacing **CSF and venous blood**, so pressure barely moves — then compensation exhausts and the pressure–volume curve turns **steeply exponential**. This is why a patient can deteriorate abruptly after appearing stable.',
    '**Perfusion depends on the gradient, so rising ICP strangles flow: CPP = MAP − ICP.** As ICP climbs, cerebral perfusion pressure falls. The brainstem response is the **Cushing reflex** — **hypertension, bradycardia and irregular respiration** — a sympathetic surge raising MAP to preserve perfusion, with reflex vagal slowing. It is a **late, ominous** sign of impending herniation, not an early warning.',
  ],

  mechanism: {
    title: 'A rigid box with no metabolic reserve',
    steps: [
      { id: 's1', label: 'Brain takes ~15% of cardiac output, ~20% of O₂, stores no fuel', emphasis: 'key' },
      { id: 's2', label: 'PaCO₂ rises → H⁺ in brain ECF → arteriolar dilation → flow rises', emphasis: 'key' },
      { id: 's3', label: 'Autoregulation holds flow constant across MAP ~60–140 mmHg' },
      { id: 's4', label: 'Added intracranial volume first displaces CSF and venous blood' },
      { id: 's5', label: 'Compensation exhausts → pressure rises steeply for small volume gains', emphasis: 'danger' },
      { id: 's6', label: 'CPP = MAP − ICP falls → Cushing reflex → herniation risk', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypertension with bradycardia and irregular breathing', mechanism: 'Cushing reflex defending perfusion against rising intracranial pressure', significance: 'key' },
    { sign: 'Abrupt deterioration after a period of apparent stability', mechanism: 'Exhausted compliance on the steep part of the pressure–volume curve', significance: 'key' },
    { sign: 'Falling conscious level with a dilating unilateral pupil', mechanism: 'Uncal herniation compressing the third nerve', significance: 'key' },
    { sign: 'Headache worse on lying flat and on coughing', mechanism: 'Raised intracranial pressure with impaired venous drainage', significance: 'supportive' },
    { sign: 'Papilloedema on fundoscopy', mechanism: 'Transmitted pressure along the optic nerve sheath', significance: 'key' },
    { sign: 'Loss of consciousness within seconds of circulatory arrest', mechanism: 'No cerebral substrate reserve', significance: 'key' },
  ],

  investigations: [
    { clue: 'Cerebral blood flow tracking PaCO₂ almost linearly', meaning: 'Normal CO₂-dominant cerebral vasoreactivity' },
    { clue: 'Cerebral perfusion pressure below 50–60 mmHg', meaning: 'Inadequate perfusion despite an acceptable mean arterial pressure' },
    { clue: 'Rightward-shifted autoregulatory curve in chronic hypertension', meaning: 'A normal pressure may under-perfuse this patient' },
    { clue: 'Effacement of sulci and basal cisterns on imaging', meaning: 'Compensatory reserve already consumed' },
    { clue: 'Transient ICP fall with hyperventilation', meaning: 'Intact CO₂ reactivity — a short-term rescue only' },
  ],

  treatment: [
    {
      logic: 'Defend cerebral perfusion pressure, not blood pressure alone',
      detail: 'Because **CPP = MAP − ICP**, lowering an elevated blood pressure in a patient with raised ICP can drop perfusion into ischaemia. Treat the **ICP** and preserve MAP, rather than treating the number that happens to be abnormal.',
    },
    {
      logic: 'Use hyperventilation only as a bridge',
      detail: 'Lowering **PaCO₂** constricts cerebral vessels and cuts ICP within minutes, but sustained hypocapnia risks **ischaemia** and the effect fades as bicarbonate equilibrates. It buys time for definitive decompression — it is not therapy.',
    },
  ],

  mnemonics: [
    { hook: 'The brain follows CO₂, not O₂', expansion: ['CO₂ → H⁺ in brain ECF → vasodilation', 'Oxygen matters only below ~50 mmHg', 'Opposite emphasis to most other beds'] },
    { hook: 'Cushing: up, down, irregular', expansion: ['Blood pressure up', 'Heart rate down', 'Respiration irregular', 'A late sign, not an early one'] },
  ],

  traps: [
    {
      questionCategory: 'What regulates cerebral blood flow',
      wrongInstinct: 'Falling oxygen is the main stimulus, as in other tissues',
      rightAnswer: 'Carbon dioxide and H⁺ dominate; oxygen contributes only below about 50 mmHg',
      why: 'It is why hyperventilation lowers intracranial pressure and hypoventilation raises it',
    },
    {
      questionCategory: 'Reading the Cushing reflex',
      wrongInstinct: 'Hypertension with bradycardia is an early warning to act on',
      rightAnswer: 'It is a late brainstem response signalling imminent herniation',
      why: 'Compensation has already been exhausted by the time it appears',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A head-injured patient develops blood pressure 200/110, heart rate 44 and irregular respiration. What does this indicate?',
      options: [
        { id: 'a', text: 'Early compensated raised intracranial pressure' },
        { id: 'b', text: 'Cushing reflex — a late sign of critically raised intracranial pressure' },
        { id: 'c', text: 'Spinal shock' },
        { id: 'd', text: 'Hypovolaemic shock' },
      ],
      answerId: 'b',
      explanation: 'The triad of hypertension, bradycardia and irregular respiration is a brainstem response raising mean arterial pressure to preserve perfusion as ICP climbs, with reflex vagal slowing. It signals exhausted compensation and impending herniation.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which stimulus is the dominant regulator of cerebral arteriolar tone under normal conditions?',
      options: [
        { id: 'a', text: 'Arterial PCO₂ acting via hydrogen ion concentration' },
        { id: 'b', text: 'Arterial PO₂' },
        { id: 'c', text: 'Circulating catecholamines' },
        { id: 'd', text: 'Plasma glucose concentration' },
      ],
      answerId: 'a',
      explanation: 'CO₂ crosses into brain extracellular fluid and generates H⁺, the actual vasodilator signal, so flow tracks PaCO₂ near-linearly. Oxygen becomes important only once PaO₂ falls below roughly 50 mmHg.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why can a patient with an expanding intracranial mass remain stable and then deteriorate abruptly?',
      options: [
        { id: 'a', text: 'The mass suddenly accelerates in growth' },
        { id: 'b', text: 'CSF and venous blood displacement compensates until exhausted, after which pressure rises steeply' },
        { id: 'c', text: 'Autoregulation is abolished from the outset' },
        { id: 'd', text: 'Cerebral metabolic rate suddenly increases' },
      ],
      answerId: 'b',
      explanation: 'By the Monro–Kellie doctrine the rigid cranium holds a fixed total volume. Early compensation displaces CSF and venous blood so pressure barely changes, but once that reserve is spent the pressure–volume relationship becomes steeply exponential.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCerebralBloodFlowMetabolism;
