import type { Lecture } from '../../lib/types';

export const rehabThermotherapyElectrotherapy: Lecture = {
  id: 'rehab-thermotherapy-electrotherapy',
  title: 'Thermotherapy & Electrotherapy',
  system: 'msk',
  source: 'L6 — MSK Rehabilitation & Modalities',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L6 MSK Rehabilitation' },
    { kind: 'disease', label: 'Physical modalities' },
    { kind: 'mechanism', label: 'Heat/cold/electricity' },
    { kind: 'exam', label: 'Acute → cold' },
  ],

  highYield: [
    'Physical modalities are **adjuncts** to exercise/medication (physiatrist = non-surgical functional restoration).',
    '**Heat** ↑ blood flow, nerve conduction, collagen extensibility → good for **chronic pain, muscle spasm, stiffness, myofascial pain**. **Contraindicated** in acute trauma/inflammation, ischemia/bleeding disorders, malignancy, and **impaired sensation** (burn risk). Superficial (hot pack, paraffin) vs deep (ultrasound, diathermy).',
    '**Cold (cryotherapy)** → vasoconstriction, ↓ metabolism/inflammation, ↓ nerve conduction → best for **acute injury (first 24–48 h), acute pain, spasticity**. Avoid in **Raynaud/cold hypersensitivity, arterial insufficiency, regenerating nerves**. **Rule: acute → cold; chronic → heat.**',
    '**TENS** relieves pain via the **gate-control theory** (large Aβ fibers) + endogenous opioids (low-frequency). **NMES** stimulates motor contraction → **retards disuse atrophy**. **Iontophoresis** delivers drugs transdermally (dexamethasone, lidocaine).',
    '**Electrotherapy is contraindicated with pacemakers/cardiac devices, over the pregnant abdomen/pelvis, and over malignancy or thrombosis.**',
  ],

  mechanism: {
    title: 'Match physical energy to the phase and target',
    steps: [
      { id: 's1', label: 'Heat: ↑ flow/extensibility → chronic conditions' },
      { id: 's2', label: 'Cold: ↓ inflammation/metabolism → acute injury', emphasis: 'key' },
      { id: 's3', label: 'TENS (gate control) for pain; NMES for atrophy' },
      { id: 's4', label: 'Avoid electrotherapy near pacemakers', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Acute ankle sprain within 48 h → apply cold', mechanism: 'Vasoconstriction limits swelling/inflammation', significance: 'key' },
    { sign: 'Chronic stiff arthritic joint → apply heat', mechanism: 'Increased blood flow and tissue extensibility', significance: 'key' },
    { sign: 'Muscle disuse atrophy → NMES', mechanism: 'Motor-level stimulation preserves muscle', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Phase of injury (acute vs chronic)', meaning: 'Cold vs heat' },
    { clue: 'Sensation and vascular status', meaning: 'Contraindications to thermotherapy' },
    { clue: 'Presence of a cardiac device', meaning: 'Contraindicates electrotherapy' },
  ],

  treatment: [
    { logic: 'Cold + TENS for acute injuries; avoid heat/massage', detail: 'Limit early inflammation.' },
    { logic: 'Heat + ultrasound + TENS for chronic OA', detail: 'Pain and stiffness relief.' },
    { logic: 'Always combine modalities with exercise/education', detail: 'They are adjuncts, not cures.' },
  ],

  mnemonics: [
    { hook: 'Acute → Cold; Chronic → Heat', expansion: ['Match modality to healing phase'] },
    { hook: 'TENS = gate control (Aβ fibers); NMES = motor contraction (anti-atrophy)', expansion: ['Electrotherapy'] },
  ],

  traps: [
    {
      questionCategory: 'Modality for an acute injury',
      wrongInstinct: 'Apply heat to a freshly sprained ankle to relax it and ease pain',
      rightAnswer: 'Use COLD (cryotherapy) in the acute phase (first 24–48 h) — heat increases blood flow and worsens swelling/inflammation early on',
      why: 'Acute injuries are inflammatory; heat’s vasodilation aggravates edema, whereas cold’s vasoconstriction limits it — so heat is reserved for chronic stages.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 25-year-old athlete has an acute lateral ankle sprain 18 hours ago with significant swelling. The most appropriate physical modality now is:',
      options: [
        { id: 'a', text: 'Superficial heat' },
        { id: 'b', text: 'Cold therapy (cryotherapy)' },
        { id: 'c', text: 'Deep-tissue massage over the injury' },
        { id: 'd', text: 'Spinal traction' },
      ],
      answerId: 'b',
      explanation: 'In the acute phase (first 24–48 h), cold therapy reduces blood flow, metabolism, and inflammation; heat and vigorous massage would worsen the acute swelling.',
      tests: 'treatment',
    },
  ],
};

export default rehabThermotherapyElectrotherapy;
