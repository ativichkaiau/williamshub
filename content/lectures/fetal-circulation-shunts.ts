import type { Lecture } from '../../lib/types';
import { FETAL_CIRCULATION } from '../../lib/figures';

export const fetalCirculationShunts: Lecture = {
  id: 'fetal-circulation-shunts',
  title: 'Fetal Circulation & the Three Shunts',
  system: 'cardiovascular',
  source: 'L3 — Development of the Cardiovascular System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L3 CVS Development' },
    { kind: 'mechanism', label: 'Bypass lungs & liver' },
    { kind: 'exam', label: '3 shunts · remnants' },
  ],

  highYield: [
    '**In the fetus, the placenta (not the lungs) oxygenates blood**, and the lungs are fluid-filled with **high vascular resistance**. So three **shunts** divert blood away from the liver and lungs; each closes at birth and leaves an adult **ligament remnant**.',
    '**Shunt 1 — Ductus venosus:** carries oxygenated blood from the **umbilical vein → IVC, bypassing the liver**. Closes → **ligamentum venosum**.',
    '**Shunt 2 — Foramen ovale:** an interatrial flap that shunts blood **right atrium → left atrium, bypassing the lungs**. Closes (as LA pressure rises after birth) → **fossa ovalis** (a **patent foramen ovale** persists if it doesn\'t seal).',
    '**Shunt 3 — Ductus arteriosus:** connects the **pulmonary artery → aorta, bypassing the lungs**. Closes → **ligamentum arteriosum**. It is kept **open by prostaglandins (PGE₂)** in utero; after birth **rising O₂ and falling prostaglandins close it** — **NSAIDs (indomethacin) close a patent ductus; PGE₁ keeps it open** when needed (duct-dependent lesions).',
    '**Umbilical vessels:** the **umbilical VEIN carries OXYGENATED blood to the fetus** (→ remnant **ligamentum teres**), while the **two umbilical arteries carry deoxygenated blood back to the placenta** (→ **medial umbilical ligaments**). At birth, the **first breath expands the lungs → pulmonary resistance falls → foramen ovale and ductus arteriosus close**, establishing the adult series circulation.',
  ],

  mechanism: {
    title: 'Placenta oxygenates; shunts bypass liver + lungs',
    steps: [
      { id: 's1', label: 'Ductus venosus: umbilical vein → IVC (bypass liver)', emphasis: 'key' },
      { id: 's2', label: 'Foramen ovale: RA → LA (bypass lungs)', emphasis: 'key' },
      { id: 's3', label: 'Ductus arteriosus: pulmonary artery → aorta (bypass lungs)', emphasis: 'key' },
      { id: 's4', label: 'Umbilical vein = oxygenated (the reversed vessel)' },
      { id: 's5', label: 'First breath → ↓pulmonary resistance → shunts close', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Ductus arteriosus kept open by prostaglandins', mechanism: 'PGE₂ in utero; NSAIDs close it, PGE₁ keeps it open', significance: 'key' },
    { sign: 'Umbilical vein carries the most oxygenated fetal blood', mechanism: 'From placenta to fetus (the reversed vessel)', significance: 'key' },
    { sign: 'Foramen ovale → fossa ovalis', mechanism: 'Closes as LA pressure rises after birth', significance: 'supportive' },
    { sign: 'Ligamentum venosum, teres, arteriosum in the adult', mechanism: 'Remnants of ductus venosus, umbilical vein, ductus arteriosus', significance: 'supportive' },
    { sign: 'Patent ductus arteriosus (machinery murmur)', mechanism: 'Failure of the ductus to close after birth', significance: 'key' },
  ],

  investigations: [
    { clue: 'Shunt bypassing the liver', meaning: 'Ductus venosus (→ ligamentum venosum)' },
    { clue: 'Shunt between the atria', meaning: 'Foramen ovale (→ fossa ovalis)' },
    { clue: 'Drug closing a patent ductus arteriosus', meaning: 'Indomethacin/NSAID (inhibits prostaglandins)' },
    { clue: 'Vessel carrying oxygenated blood to the fetus', meaning: 'Umbilical vein' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Fetal-shunt physiology explains PDA management (NSAID to close; PGE₁ to keep patent in duct-dependent congenital defects), patent foramen ovale (paradoxical embolism), and neonatal transition. Adult remnants are common anatomy questions. Septation defects: [[heart-tube-looping-septation]].' },
  ],

  mnemonics: [
    { hook: '3 shunts: "Venosus (bypass liver), Ovale (bypass lungs, RA→LA), Arteriosus (bypass lungs, PA→aorta)"', expansion: ['Umbilical VEIN = oxygenated'] },
    { hook: 'Ductus: "PGE keeps it Patent; NSAIDs Nix it (close)"', expansion: ['O₂ ↑ + PG ↓ at birth → closes'] },
  ],

  traps: [
    {
      questionCategory: 'Prostaglandins and the ductus arteriosus',
      wrongInstinct: 'Prostaglandins close the ductus arteriosus and NSAIDs keep it open',
      rightAnswer: 'Prostaglandins (PGE) KEEP the ductus arteriosus OPEN; NSAIDs (indomethacin) inhibit prostaglandins and CLOSE it',
      why: 'This is reversed from the usual "inflammation" intuition. Clinically: PGE₁ maintains a duct-dependent lesion; NSAIDs close a PDA.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the fetus, the ductus arteriosus shunts blood from the:',
      options: [
        { id: 'a', text: 'Umbilical vein to the IVC' },
        { id: 'b', text: 'Right atrium to the left atrium' },
        { id: 'c', text: 'Pulmonary artery to the aorta, bypassing the lungs' },
        { id: 'd', text: 'Aorta to the pulmonary artery' },
      ],
      answerId: 'c',
      explanation: 'The ductus arteriosus connects the pulmonary artery to the aorta, diverting blood away from the high-resistance fetal lungs. It closes at birth to become the ligamentum arteriosum.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patent ductus arteriosus in a newborn can often be closed pharmacologically with:',
      options: [
        { id: 'a', text: 'Prostaglandin E1' },
        { id: 'b', text: 'An NSAID such as indomethacin (prostaglandin inhibitor)' },
        { id: 'c', text: 'Adrenaline' },
        { id: 'd', text: 'A calcium channel blocker' },
      ],
      answerId: 'b',
      explanation: 'Prostaglandins keep the ductus open; inhibiting them with an NSAID (indomethacin/ibuprofen) closes a PDA. Conversely, PGE₁ is given to keep the duct open in duct-dependent congenital heart disease.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Fetal circulation', svg: FETAL_CIRCULATION, caption: 'Three shunts: ductus venosus (bypass liver), foramen ovale (RA→LA), ductus arteriosus (PA→aorta); umbilical vein oxygenated; closure at birth.' },
  ],
};

export default fetalCirculationShunts;
