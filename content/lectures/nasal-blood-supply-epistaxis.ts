import type { Lecture } from '../../lib/types';

export const nasalBloodSupplyEpistaxis: Lecture = {
  id: 'nasal-blood-supply-epistaxis',
  title: 'Nasal Blood Supply & Epistaxis',
  system: 'msk',
  source: 'L13 — Nasal Cavity & Paranasal Sinuses',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L13 Nasal Cavity & Sinuses' },
    { kind: 'disease', label: 'Epistaxis' },
    { kind: 'mechanism', label: 'Two carotid systems' },
    { kind: 'exam', label: 'Kiesselbach / sphenopalatine' },
  ],

  highYield: [
    'The nose is supplied from **both carotid systems**: the **internal carotid** via the **anterior and posterior ethmoidal arteries (branches of the ophthalmic artery)**, and the **external carotid** via the **sphenopalatine and greater palatine arteries (maxillary)** and the **superior labial artery (facial)**.',
    '**Kiesselbach\'s plexus (Little\'s area)**, on the **anteroinferior nasal septum**, is an anastomosis of these arteries and is the site of **~90% of nosebleeds (anterior epistaxis)** — usually mild, from digital trauma/dry air, and controllable with pressure/cautery.',
    '**Posterior epistaxis** is less common but more severe, arising from the **sphenopalatine artery** (terminal maxillary branch) at the back of the nose — it may need **posterior packing or sphenopalatine artery ligation/embolization**.',
    '**Sensory innervation** follows the trigeminal nerve: **V1 (anterior ethmoidal)** anterosuperiorly and **V2 (nasopalatine + posterior nasal branches, and greater palatine)** posteroinferiorly; the **nasopalatine nerve** crosses the septum to the anterior hard palate (incisive canal).',
    '**Special sense**: **olfaction = CN I**, whose fibres reach the olfactory bulb through the cribriform plate — distinct from the general (trigeminal) sensation of the rest of the cavity.',
  ],

  mechanism: {
    title: 'Two carotid systems anastomose at Little\'s area',
    steps: [
      { id: 's1', label: 'ICA → ethmoidal aa.; ECA → sphenopalatine/facial', emphasis: 'key' },
      { id: 's2', label: 'Kiesselbach plexus (anterior septum) = ~90% epistaxis' },
      { id: 's3', label: 'Posterior bleed → sphenopalatine artery' },
      { id: 's4', label: 'Severe posterior bleed → packing/ligation', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Nosebleed from the anterior septum, stops with pinching', mechanism: 'Kiesselbach plexus (anterior epistaxis)', significance: 'key' },
    { sign: 'Profuse bleeding from the posterior nose', mechanism: 'Sphenopalatine artery (posterior epistaxis)', significance: 'key' },
    { sign: 'Bleeding controlled by sphenopalatine artery ligation', mechanism: 'Terminal maxillary artery branch', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Anterior rhinoscopy of Little\'s area', meaning: 'Identify an anterior bleeding point' },
    { clue: 'Nasal endoscopy if posterior source suspected', meaning: 'Sphenopalatine artery territory' },
  ],

  treatment: [
    { logic: 'Anterior epistaxis: pinch, cautery, anterior pack', detail: 'Most nosebleeds.' },
    { logic: 'Posterior epistaxis: posterior pack / SPA ligation/embolization', detail: 'Severe, airway/blood-loss risk.' },
  ],

  mnemonics: [
    { hook: 'Little\'s area (Kiesselbach) = anterior septum = most nosebleeds', expansion: ['5 arteries anastomose'] },
    { hook: 'Posterior epistaxis = sphenopalatine artery', expansion: ['Terminal maxillary branch'] },
  ],

  traps: [
    {
      questionCategory: 'Source of most nosebleeds',
      wrongInstinct: 'Most nosebleeds come from the posterior sphenopalatine artery',
      rightAnswer: 'About 90% are ANTERIOR, from Kiesselbach\'s plexus (Little\'s area) on the anterior septum; the sphenopalatine artery causes the less common but more severe POSTERIOR bleeds',
      why: 'Anterior septal bleeds dominate and are usually easy to control; posterior (sphenopalatine) bleeds are the dangerous minority.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A teenager has recurrent mild nosebleeds from the front of the nasal septum. This anastomotic region is called:',
      options: [
        { id: 'a', text: 'The sphenoethmoidal recess' },
        { id: 'b', text: 'Kiesselbach\'s plexus (Little\'s area)' },
        { id: 'c', text: 'The pterygoid plexus' },
        { id: 'd', text: 'Woodruff\'s plexus' },
      ],
      answerId: 'b',
      explanation: 'Kiesselbach\'s plexus (Little\'s area) on the anteroinferior septum is an anastomosis of the anterior ethmoidal, sphenopalatine, greater palatine, and superior labial arteries — the site of ~90% of nosebleeds.',
      tests: 'exam',
    },
  ],
};

export default nasalBloodSupplyEpistaxis;
