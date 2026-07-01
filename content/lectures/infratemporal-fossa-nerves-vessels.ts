import type { Lecture } from '../../lib/types';

export const infratemporalFossaNervesVessels: Lecture = {
  id: 'infratemporal-fossa-nerves-vessels',
  title: 'Infratemporal Fossa: Mandibular Nerve & Maxillary Artery',
  system: 'msk',
  source: 'L10 — Infratemporal & Pterygopalatine Fossae',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L10 Infratemporal & PPF' },
    { kind: 'disease', label: 'V3 / maxillary artery' },
    { kind: 'mechanism', label: 'Branches & relations' },
    { kind: 'exam', label: 'Inferior alveolar block' },
  ],

  highYield: [
    'The **mandibular nerve (CN V3)** enters the infratemporal fossa through the **foramen ovale**. Its **anterior trunk is mostly MOTOR** (to the muscles of mastication) + the sensory **buccal nerve**; its **posterior trunk is mostly SENSORY**: **auriculotemporal, lingual, inferior alveolar** (+ the motor **nerve to mylohyoid**).',
    'The **lingual nerve (V3)** carries general sensation from the **anterior 2/3 of the tongue**; it is joined by the **chorda tympani (CN VII)**, which adds **taste (anterior 2/3)** and **preganglionic parasympathetic fibres to the submandibular ganglion** (submandibular + sublingual glands).',
    'The **inferior alveolar nerve** enters the **mandibular foramen** to supply the lower teeth and exits as the **mental nerve** (chin/lower lip). An **inferior alveolar nerve block** anesthetizes the mandibular teeth; complications: transient **facial (Bell-like) palsy** (needle too posterior → parotid/CN VII) or **trismus** (too medial → medial pterygoid).',
    'The **maxillary artery** (larger terminal branch of the external carotid) has **3 parts**: **1st (mandibular)** → **middle meningeal artery** (via foramen spinosum) + inferior alveolar; **2nd (pterygoid)** → muscular branches (masseteric, deep temporal, pterygoid, buccal); **3rd (pterygopalatine)** → deep-face branches.',
    'The **pterygoid venous plexus** surrounds the muscles; it is **valveless** and communicates with the **cavernous sinus** (via emissary veins) and the facial vein → a route for **spread of infection to the cavernous sinus**. The **otic ganglion** (below foramen ovale) relays CN IX secretomotor fibres (via lesser petrosal) onto the auriculotemporal nerve to the parotid.',
  ],

  mechanism: {
    title: 'V3 through foramen ovale; maxillary artery in 3 parts',
    steps: [
      { id: 's1', label: 'V3 exits foramen ovale: anterior motor / posterior sensory', emphasis: 'key' },
      { id: 's2', label: 'Lingual n. + chorda tympani = taste + submandibular ganglion' },
      { id: 's3', label: 'Maxillary a. 1st part → middle meningeal (foramen spinosum)' },
      { id: 's4', label: 'Pterygoid plexus (valveless) → cavernous sinus', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Numb lower teeth + lip after a dental injection', mechanism: 'Inferior alveolar nerve block', significance: 'key' },
    { sign: 'Loss of taste + general sensation of the anterior 2/3 tongue', mechanism: 'Lingual nerve (with chorda tympani) lesion', significance: 'key' },
    { sign: 'Facial droop after a posteriorly misplaced dental block', mechanism: 'Anesthetic reaching CN VII in the parotid', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Map V3 sensory vs motor deficits', meaning: 'Anterior (motor) vs posterior (sensory) trunk' },
    { clue: 'Taste + sensation of anterior tongue', meaning: 'Chorda tympani (VII) + lingual (V3)' },
  ],

  treatment: [
    { logic: 'Correct block technique at the mandibular foramen', detail: 'Avoid too-posterior (VII) or too-medial (trismus) placement.' },
    { logic: 'Treat pterygoid-plexus/facial infection promptly', detail: 'Cavernous sinus spread risk.' },
  ],

  mnemonics: [
    { hook: 'V3 anterior trunk = motor (mastication) + buccal; posterior = sensory (auriculotemporal, lingual, inferior alveolar)', expansion: ['Foramen ovale'] },
    { hook: 'Lingual n. general sensation + chorda tympani taste = anterior 2/3 tongue', expansion: ['Chorda → submandibular ganglion'] },
  ],

  traps: [
    {
      questionCategory: 'Taste vs sensation of the tongue',
      wrongInstinct: 'The lingual nerve carries taste from the anterior tongue',
      rightAnswer: 'The lingual nerve (V3) carries GENERAL sensation; TASTE from the anterior 2/3 travels in the chorda tympani (CN VII), which joins the lingual nerve',
      why: 'Two different modalities share one nerve trunk — general sensation is V3, taste is hitch-hiking facial-nerve fibres.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The chorda tympani joins the lingual nerve in the infratemporal fossa. Which functions does it add?',
      options: [
        { id: 'a', text: 'General sensation to the posterior 1/3 of the tongue' },
        { id: 'b', text: 'Taste from the anterior 2/3 and parasympathetic fibres to the submandibular ganglion' },
        { id: 'c', text: 'Motor supply to the tongue muscles' },
        { id: 'd', text: 'Sympathetic fibres to the parotid gland' },
      ],
      answerId: 'b',
      explanation: 'The chorda tympani (a branch of CN VII) carries taste from the anterior 2/3 of the tongue and preganglionic parasympathetic fibres to the submandibular ganglion (for the submandibular/sublingual glands); it hitch-hikes on the lingual nerve.',
      tests: 'exam',
    },
  ],
};

export default infratemporalFossaNervesVessels;
