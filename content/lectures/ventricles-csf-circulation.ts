import type { Lecture } from '../../lib/types';
import { VENTRICLES_CSF } from '../../lib/figures';

export const ventriclesCsfCirculation: Lecture = {
  id: 'ventricles-csf-circulation',
  title: 'Ventricles, CSF & Meninges',
  system: 'neuro',
  source: 'L6 — Ventricular System & CSF',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L6 CSF & Meninges' },
    { kind: 'mechanism', label: 'CSF flow & absorption' },
    { kind: 'exam', label: 'Hydrocephalus' },
  ],

  highYield: [
    'Cerebrospinal fluid (CSF) is produced by the CHOROID PLEXUS in the ventricles (~500 mL/day, ~150 mL circulating at any time) and flows in a fixed path: LATERAL ventricles → (interventricular foramina of Monro) → THIRD ventricle → (cerebral aqueduct) → FOURTH ventricle → out the foramina of Luschka & Magendie into the SUBARACHNOID SPACE.',
    '**CSF is reabsorbed into the venous blood (dural sinuses) through the ARACHNOID GRANULATIONS.** It cushions and buoys the brain (reducing its effective weight ~30-fold), removes waste, and maintains a stable chemical environment. The brain is wrapped in THREE MENINGES: DURA (tough outer), ARACHNOID (middle), PIA (delicate, adherent) — CSF lies in the SUBARACHNOID space (between arachnoid and pia).',
    'HYDROCEPHALUS = excess CSF with raised pressure/ventricular dilatation. NON-COMMUNICATING (obstructive) = a block WITHIN the ventricular system (e.g. aqueduct stenosis) so CSF cannot reach the subarachnoid space; COMMUNICATING = impaired ABSORPTION at the arachnoid granulations (e.g. after meningitis/SAH), the ventricles still communicating.',
    '**The meningeal spaces define the intracranial haemorrhages: EXTRADURAL (arterial, middle meningeal artery, "lucid interval", lens-shaped); SUBDURAL (bridging veins, crescent-shaped, elderly/alcoholics); SUBARACHNOID (ruptured berry aneurysm, thunderclap headache).** A LUMBAR PUNCTURE samples subarachnoid CSF (below the cord, ~L3/4) for meningitis, SAH and pressure.',
    '**The take-home: choroid plexus makes CSF → lateral→III→(aqueduct)→IV→subarachnoid → arachnoid granulations absorb it; blockage within = obstructive hydrocephalus, failed absorption = communicating.** The meninges frame the extradural/subdural/subarachnoid bleeds. Raised ICP and herniation are in HNS-2 ([[raised-icp-herniation]]); the blood supply is in [[cerebral-blood-supply]].',
  ],

  mechanism: {
    title: 'Choroid plexus → lateral→III→(aqueduct)→IV→subarachnoid → arachnoid granulations; blocks → hydrocephalus',
    steps: [
      { id: 's1', label: 'Choroid plexus makes CSF (~500 mL/day; ~150 mL present)', emphasis: 'key' },
      { id: 's2', label: 'Lateral → foramina of Monro → III → aqueduct → IV → Luschka/Magendie', emphasis: 'key' },
      { id: 's3', label: 'Into subarachnoid space → absorbed at arachnoid granulations → dural sinuses', emphasis: 'key' },
      { id: 's4', label: 'Obstructive (non-communicating) hydrocephalus = block WITHIN ventricles', emphasis: 'danger' },
      { id: 's5', label: 'Communicating hydrocephalus = failed absorption at granulations', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Ventricular dilatation with raised intracranial pressure', mechanism: 'Hydrocephalus (excess CSF)', significance: 'key' },
    { sign: 'Dilated ventricles above an aqueduct block, normal subarachnoid space', mechanism: 'Non-communicating (obstructive) hydrocephalus', significance: 'key' },
    { sign: 'Enlarged ventricles after meningitis/SAH', mechanism: 'Communicating hydrocephalus (failed absorption)', significance: 'key' },
    { sign: 'Lens-shaped (biconvex) haematoma with a lucid interval', mechanism: 'Extradural haemorrhage (middle meningeal artery)', significance: 'key' },
    { sign: 'Crescent-shaped haematoma in an elderly patient', mechanism: 'Subdural haemorrhage (bridging veins)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Where CSF is produced', meaning: 'The choroid plexus of the ventricles' },
    { clue: 'Where CSF is absorbed', meaning: 'The arachnoid granulations (into the dural venous sinuses)' },
    { clue: 'The block causing non-communicating hydrocephalus', meaning: 'Obstruction within the ventricular system (e.g. aqueduct stenosis)' },
    { clue: 'The space sampled by a lumbar puncture', meaning: 'The subarachnoid space (below the spinal cord, ~L3/4)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The CSF pathway explains hydrocephalus (obstructive vs communicating) and where to sample CSF (lumbar puncture in the subarachnoid space), while the meningeal layers frame extradural/subdural/subarachnoid bleeds. Raised ICP and brain herniation are in HNS-2 ([[raised-icp-herniation]]); the arterial supply and berry aneurysms (SAH) are in [[cerebral-blood-supply]]; the ventricles sit within the [[cerebrum-lobes-white-matter]].' },
  ],

  mnemonics: [
    { hook: 'CSF flow: "Lateral → Monro → III → Aqueduct → IV → Luschka/Magendie → subarachnoid"', expansion: ['Made by choroid plexus', 'Absorbed at arachnoid granulations'] },
    { hook: 'Hydrocephalus: "Non-communicating = block inside; Communicating = absorption fails"', expansion: ['Aqueduct stenosis = obstructive', 'Post-meningitis = communicating'] },
  ],

  traps: [
    {
      questionCategory: 'Communicating vs non-communicating hydrocephalus',
      wrongInstinct: '"Communicating" hydrocephalus means the CSF is flowing normally, so it is the harmless type',
      rightAnswer: '"Communicating" refers only to the fact that the ventricles still COMMUNICATE with the subarachnoid space — the problem is failed ABSORPTION at the arachnoid granulations (e.g. after meningitis or SAH); "non-communicating" (obstructive) means a block WITHIN the ventricular system. Both raise pressure and can be dangerous',
      why: 'The terms describe WHERE the CSF problem lies (obstruction within the ventricles vs impaired absorption downstream), not severity — both cause hydrocephalus, and the distinction guides where CSF flow fails.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Cerebrospinal fluid flows from the third ventricle to the fourth ventricle through the:',
      options: [
        { id: 'a', text: 'Interventricular foramina of Monro' },
        { id: 'b', text: 'Cerebral aqueduct (of Sylvius)' },
        { id: 'c', text: 'Foramina of Luschka and Magendie' },
        { id: 'd', text: 'Arachnoid granulations' },
      ],
      answerId: 'b',
      explanation: 'CSF passes from the lateral ventricles through the foramina of Monro to the third ventricle, then through the cerebral aqueduct to the fourth ventricle, and out the foramina of Luschka and Magendie into the subarachnoid space. Aqueduct stenosis is a classic cause of obstructive hydrocephalus.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A biconvex (lens-shaped) haematoma with a lucid interval after temporal trauma is characteristic of a ruptured:',
      options: [
        { id: 'a', text: 'Bridging vein (subdural haemorrhage)' },
        { id: 'b', text: 'Middle meningeal artery (extradural haemorrhage)' },
        { id: 'c', text: 'Berry aneurysm (subarachnoid haemorrhage)' },
        { id: 'd', text: 'Choroid plexus vessel' },
      ],
      answerId: 'b',
      explanation: 'An extradural (epidural) haemorrhage is typically arterial — from the middle meningeal artery after a temporal skull fracture — producing a lens-shaped (biconvex) haematoma and a classic lucid interval before deterioration. Subdural bleeds (bridging veins) are crescent-shaped.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Ventricular system and CSF', svg: VENTRICLES_CSF, caption: 'CSF production (choroid plexus), the flow path through the ventricles to the subarachnoid space, absorption at the arachnoid granulations, and the meningeal layers.' },
  ],
};

export default ventriclesCsfCirculation;
