import type { Lecture } from '../../lib/types';

export const anteriorTriangleCarotid: Lecture = {
  id: 'anterior-triangle-carotid',
  title: 'Anterior Triangle & Carotid System',
  system: 'msk',
  source: 'L7 — Triangles & Root of the Neck',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L7 Neck Triangles & Root' },
    { kind: 'disease', label: 'Anterior triangle' },
    { kind: 'mechanism', label: 'Subtriangles & carotid' },
    { kind: 'exam', label: 'Carotid sinus/body' },
  ],

  highYield: [
    'The **anterior triangle** (SCM, midline, inferior mandible) contains **4 sub-triangles**: **carotid, muscular, submandibular (digastric), and submental**.',
    '**Carotid triangle** (superior belly of omohyoid, posterior belly of digastric, anterior border of SCM) contains the **common carotid artery + its bifurcation, internal jugular vein, vagus nerve, and ansa cervicalis**. The **common carotid bifurcates at ~C4 (upper border of thyroid cartilage)** into internal and external carotid arteries.',
    'The **external carotid artery** gives (roughly ascending) **Superior thyroid, Ascending pharyngeal, Lingual, Facial, Occipital, Posterior auricular, Maxillary, Superficial temporal** ("Some Anatomists Like Freaking Out Poor Medical Students"). The **internal carotid gives NO branches in the neck**.',
    'The **carotid sinus** (baroreceptor, at the bifurcation, glossopharyngeal CN IX) senses blood pressure; the **carotid body** (chemoreceptor) senses O₂/CO₂/pH. **Carotid sinus massage** can slow the heart.',
    '**Muscular triangle** = the **infrahyoid ("strap") muscles** (sternohyoid, sternothyroid, thyrohyoid, omohyoid), mostly supplied by the **ansa cervicalis (C1–C3)**. **Submandibular triangle** contains the submandibular gland and the **hypoglossal nerve (CN XII)**; the **submental triangle** overlies mylohyoid.',
  ],

  mechanism: {
    title: 'Four sub-triangles; the carotid triangle guards the great vessels',
    steps: [
      { id: 's1', label: 'Anterior triangle → carotid/muscular/submandibular/submental', emphasis: 'key' },
      { id: 's2', label: 'Carotid triangle: common carotid bifurcation, IJV, vagus' },
      { id: 's3', label: 'ECA has branches; ICA has none in the neck' },
      { id: 's4', label: 'Carotid sinus (baro) + body (chemo) at the bifurcation' },
    ],
  },

  examFindings: [
    { sign: 'Carotid pulse at the anterior SCM border, level of thyroid cartilage', mechanism: 'Common carotid in the carotid triangle', significance: 'key' },
    { sign: 'Bradycardia with carotid sinus massage', mechanism: 'Baroreceptor reflex (CN IX)', significance: 'supportive' },
    { sign: 'Tongue deviates toward a submandibular-region injury', mechanism: 'Hypoglossal nerve (CN XII)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Carotid Doppler at the bifurcation', meaning: 'Atherosclerotic disease (common site)' },
    { clue: 'Identify ECA branches vs branchless ICA', meaning: 'Vessel identification in the neck' },
  ],

  treatment: [
    { logic: 'Anatomy underlies carotid endarterectomy / node dissection', detail: 'Protect vagus and hypoglossal nerves.' },
  ],

  mnemonics: [
    { hook: 'ECA branches: "Some Anatomists Like Freaking Out Poor Medical Students"', expansion: ['ICA: no neck branches'] },
    { hook: 'Carotid Sinus = baroreceptor (pressure); carotid Body = chemoreceptor (gases)', expansion: ['Both at the bifurcation, CN IX'] },
  ],

  traps: [
    {
      questionCategory: 'Internal carotid branches in the neck',
      wrongInstinct: 'The internal carotid artery gives off the superior thyroid and lingual arteries',
      rightAnswer: 'The INTERNAL carotid has NO branches in the neck; those are branches of the EXTERNAL carotid',
      why: 'A branchless ICA in the neck is a reliable identifier during dissection and imaging.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A vessel in the carotid triangle gives off no branches within the neck. Which artery is it?',
      options: [
        { id: 'a', text: 'External carotid artery' },
        { id: 'b', text: 'Internal carotid artery' },
        { id: 'c', text: 'Facial artery' },
        { id: 'd', text: 'Superior thyroid artery' },
      ],
      answerId: 'b',
      explanation: 'The internal carotid artery has no branches in the neck; the external carotid supplies the neck/face structures (superior thyroid, lingual, facial, etc.), which distinguishes the two at the bifurcation.',
      tests: 'exam',
    },
  ],
};

export default anteriorTriangleCarotid;
