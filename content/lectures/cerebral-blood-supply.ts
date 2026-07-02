import type { Lecture } from '../../lib/types';
import { CIRCLE_OF_WILLIS } from '../../lib/figures';

export const cerebralBloodSupply: Lecture = {
  id: 'cerebral-blood-supply',
  title: 'Cerebral Blood Supply & Circle of Willis',
  system: 'neuro',
  source: 'L6 — Blood Supply of the Brain',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L6 Cerebral Circulation' },
    { kind: 'mechanism', label: 'Anterior & posterior circulations' },
    { kind: 'exam', label: 'ACA/MCA/PCA territories' },
  ],

  highYield: [
    '**The brain is supplied by TWO paired arterial systems that join at the CIRCLE OF WILLIS: an ANTERIOR circulation from the INTERNAL CAROTID arteries (→ anterior + middle cerebral arteries) supplying most of the cerebral hemispheres, and a POSTERIOR circulation from the VERTEBRAL arteries (→ basilar → posterior cerebral arteries) supplying the brainstem, cerebellum and occipital lobe.**',
    '**The CIRCLE OF WILLIS is an anastomotic ring at the base of the brain linking the two systems: anterior cerebral arteries joined by the ANTERIOR communicating artery, and the internal carotid/posterior cerebral joined by the POSTERIOR communicating arteries.** It provides COLLATERAL flow if one vessel is occluded — though the circle is complete in only a minority of people.',
    '**The three cerebral artery TERRITORIES map to deficits. ANTERIOR cerebral (ACA) → medial hemisphere → contralateral LEG weakness/sensory loss. MIDDLE cerebral (MCA) → lateral hemisphere → contralateral FACE & ARM weakness/sensory loss, plus APHASIA if the dominant hemisphere. POSTERIOR cerebral (PCA) → occipital lobe → contralateral HOMONYMOUS HEMIANOPIA (visual loss).**',
    '**Deep structures (internal capsule, basal ganglia, thalamus) are fed by small LENTICULOSTRIATE perforating branches of the MCA — the classic site of hypertensive lacunar strokes and haemorrhage.** Berry (saccular) aneurysms form at branch points of the circle (esp. the anterior communicating artery) and rupture into the subarachnoid space (SAH). Venous drainage is via cortical veins → dural venous sinuses → internal jugular veins.',
    '**The take-home: internal carotid = anterior circulation (ACA leg, MCA face/arm + language), vertebrobasilar = posterior circulation (brainstem, cerebellum, PCA = vision); the circle of Willis links them for collateral flow.** Clinical stroke syndromes are in HNS-2 ([[cortex-and-stroke]]); the perfused cortex is mapped in [[cortical-areas-language]].',
  ],

  mechanism: {
    title: 'Carotid (anterior: ACA/MCA) + vertebrobasilar (posterior: PCA) join at circle of Willis; territories → deficits',
    steps: [
      { id: 's1', label: 'Anterior circulation = internal carotid → ACA + MCA (cerebral hemispheres)', emphasis: 'key' },
      { id: 's2', label: 'Posterior circulation = vertebral → basilar → PCA (brainstem, cerebellum, occiput)', emphasis: 'key' },
      { id: 's3', label: 'Circle of Willis links them (ant + post communicating arteries) → collateral', emphasis: 'key' },
      { id: 's4', label: 'ACA = leg; MCA = face/arm + aphasia; PCA = homonymous hemianopia', emphasis: 'key' },
      { id: 's5', label: 'Lenticulostriate (MCA) → deep structures (lacunar stroke); berry aneurysm → SAH', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Contralateral leg weakness/sensory loss', mechanism: 'Anterior cerebral artery (ACA) territory (medial hemisphere)', significance: 'key' },
    { sign: 'Contralateral face & arm weakness ± aphasia', mechanism: 'Middle cerebral artery (MCA) territory (dominant hemisphere)', significance: 'key' },
    { sign: 'Contralateral homonymous hemianopia', mechanism: 'Posterior cerebral artery (PCA) — occipital cortex', significance: 'key' },
    { sign: 'Pure motor/sensory lacunar stroke', mechanism: 'Lenticulostriate perforator occlusion (internal capsule)', significance: 'key' },
    { sign: 'Sudden "worst-ever" thunderclap headache', mechanism: 'Ruptured berry aneurysm (subarachnoid haemorrhage)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The two arterial systems supplying the brain', meaning: 'Internal carotid (anterior) and vertebrobasilar (posterior)' },
    { clue: 'The anastomotic ring linking them', meaning: 'The circle of Willis' },
    { clue: 'The artery whose occlusion causes contralateral face/arm weakness and aphasia', meaning: 'The middle cerebral artery (MCA)' },
    { clue: 'The vessels supplying the internal capsule/basal ganglia', meaning: 'Lenticulostriate branches of the MCA' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Arterial territories are the anatomy behind every stroke localisation — ACA (leg), MCA (face/arm + language), PCA (vision) — and the circle of Willis explains collateral flow and berry-aneurysm SAH. Clinical stroke syndromes, imaging and thrombolysis are in HNS-2 ([[cortex-and-stroke]]). The perfused functional cortex is in [[cortical-areas-language]]; venous drainage links to [[ventricles-csf-circulation]].' },
  ],

  mnemonics: [
    { hook: 'Territories: "ACA = leg, MCA = face/arm + language, PCA = vision"', expansion: ['MCA is the commonest stroke', 'Lenticulostriate → lacunes'] },
    { hook: 'Two systems: "Carotid up front, Vertebrobasilar out back, joined by the Circle"', expansion: ['Ant + post communicating arteries', 'Berry aneurysm at branch points'] },
  ],

  traps: [
    {
      questionCategory: 'ACA vs MCA territory deficits',
      wrongInstinct: 'A hemisphere stroke weakens the whole opposite side equally',
      rightAnswer: 'The homunculus is split between territories: the ANTERIOR cerebral artery supplies the MEDIAL cortex (the LEG area) → contralateral LEG-predominant deficit, whereas the MIDDLE cerebral artery supplies the LATERAL cortex (FACE and ARM area) → contralateral face/arm deficit (with aphasia if dominant) — the pattern localises the vessel',
      why: 'Because the motor/sensory homunculus drapes from the lateral (face/arm, MCA) over the top to the medial surface (leg, ACA), the distribution of weakness pinpoints which artery is occluded rather than being uniform.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has right-sided face and arm weakness with expressive aphasia, but a relatively spared leg. The most likely occluded artery is the:',
      options: [
        { id: 'a', text: 'Left anterior cerebral artery' },
        { id: 'b', text: 'Left middle cerebral artery' },
        { id: 'c', text: 'Right posterior cerebral artery' },
        { id: 'd', text: 'Basilar artery' },
      ],
      answerId: 'b',
      explanation: 'The MCA supplies the lateral hemisphere — the face and arm region of the homunculus and (on the dominant, usually left, side) the language areas — so occlusion gives contralateral face/arm weakness with aphasia and relative leg sparing. The ACA supplies the medial leg area.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The circle of Willis is functionally important chiefly because it:',
      options: [
        { id: 'a', text: 'Filters the cerebrospinal fluid' },
        { id: 'b', text: 'Provides collateral anastomotic flow between the anterior and posterior circulations' },
        { id: 'c', text: 'Drains venous blood from the brain' },
        { id: 'd', text: 'Produces cerebrospinal fluid' },
      ],
      answerId: 'b',
      explanation: 'The circle of Willis is an arterial anastomotic ring linking the internal carotid (anterior) and vertebrobasilar (posterior) systems via the anterior and posterior communicating arteries, allowing collateral flow if one vessel is occluded (though it is anatomically complete in only a minority).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Circle of Willis', svg: CIRCLE_OF_WILLIS, caption: 'Anterior (internal carotid → ACA/MCA) and posterior (vertebrobasilar → PCA) circulations linked by the communicating arteries, with the ACA/MCA/PCA territories.' },
  ],
};

export default cerebralBloodSupply;
