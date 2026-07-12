import type { Lecture } from '../../lib/types';

export const fcp1Dysphagia: Lecture = {
  id: 'fcp1-dysphagia',
  title: 'Approach to Dysphagia',
  system: 'clinical',
  source: 'L15 — Dyspepsia, Reflux & Dysphagia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L15 Dyspepsia, Reflux & Dysphagia' },
    { kind: 'disease', label: 'Stricture · cancer · achalasia' },
    { kind: 'mechanism', label: 'Oropharyngeal vs oesophageal' },
    { kind: 'investigation', label: 'Endoscopy · barium · manometry' },
  ],

  highYield: [
    'First split dysphagia into **oropharyngeal (transfer)** — trouble **initiating** the swallow with **coughing, choking, nasal regurgitation and aspiration** — versus **oesophageal (transport)**, where food **sticks seconds later** behind the sternum.',
    '**Oropharyngeal dysphagia is usually neuromuscular** (stroke, Parkinson disease, myasthenia, bulbar palsy — [[fcp1-weakness-umn-lmn]]); the immediate danger is **aspiration**.',
    'For oesophageal dysphagia, the pattern splits mechanical from motility: **mechanical (structural) narrowing gives solids-first, progressive dysphagia** (peptic stricture — [[fcp1-dyspepsia-reflux]], cancer, or a ring), whereas **motility disorders give dysphagia to solids AND liquids from the outset** (achalasia, spasm, scleroderma).',
    '**Progressive dysphagia to solids with weight loss in an older patient is oesophageal cancer until proven otherwise** — a major red flag needing **urgent upper endoscopy with biopsy** ([[fcp1-weight-loss-approach]], [[fcp1-ent-red-flags]]).',
    'Distinguish **odynophagia** (painful swallowing — infective, pill-induced or ulcerative oesophagitis) from dysphagia; **endoscopy is first-line** for oesophageal dysphagia, with **barium swallow and manometry** for suspected motility disorders.',
  ],

  mechanism: {
    title: 'Where and what: transfer vs transport, solids vs both',
    steps: [
      { id: 's1', label: 'Oropharyngeal (transfer): trouble initiating, cough/choke/aspirate', emphasis: 'key' },
      { id: 's2', label: 'Oesophageal (transport): food sticks seconds later', emphasis: 'key' },
      { id: 's3', label: 'Mechanical → solids first, then liquids, progressive', emphasis: 'key' },
      { id: 's4', label: 'Motility → solids AND liquids from the start', emphasis: 'key' },
      { id: 's5', label: 'Progressive solid dysphagia + weight loss → cancer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Coughing, choking or nasal regurgitation on swallowing', mechanism: 'Oropharyngeal (transfer) dysphagia — aspiration risk', significance: 'key' },
    { sign: 'Progressive dysphagia, solids then liquids, with weight loss', mechanism: 'Mechanical obstruction — oesophageal cancer or stricture', significance: 'key' },
    { sign: 'Dysphagia to solids and liquids equally from the outset', mechanism: 'Motility disorder such as achalasia', significance: 'key' },
    { sign: 'Painful swallowing (odynophagia)', mechanism: 'Infective, pill-induced or ulcerative oesophagitis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Progressive solid-food dysphagia, weight loss, older patient', meaning: 'Urgent upper endoscopy with biopsy — exclude cancer' },
    { clue: 'Dysphagia to solids and liquids with a dilated oesophagus tapering at the lower end', meaning: 'Achalasia — confirm with manometry' },
    { clue: 'A benign stricture on endoscopy in a long-standing refluxer', meaning: 'Peptic stricture from GERD' },
    { clue: 'Oropharyngeal dysphagia after a stroke', meaning: 'Swallow assessment for aspiration risk — nil by mouth until safe' },
  ],

  treatment: [
    { logic: 'Endoscopy first for oesophageal dysphagia', detail: 'It visualises and biopsies mucosal lesions; barium swallow and manometry add information when a motility disorder is suspected.' },
    { logic: 'Protect the airway in oropharyngeal dysphagia', detail: 'Formal swallow assessment and nil by mouth until safe swallowing is confirmed, to prevent aspiration; then treat the underlying neuromuscular cause.' },
  ],

  mnemonics: [
    { hook: 'Solids-then-liquids progressive = mechanical; solids-AND-liquids from the start = motility', expansion: ['Transfer (oropharyngeal) = cough, choke, aspirate', 'Progressive solids + weight loss = cancer → scope'] },
  ],

  traps: [
    {
      questionCategory: 'Pattern of dysphagia',
      wrongInstinct: 'Any difficulty with both solids and liquids means advanced obstruction',
      rightAnswer: 'Dysphagia to solids AND liquids from the onset points to a motility disorder like achalasia, not mechanical obstruction',
      why: 'Mechanical narrowing progresses solids-then-liquids; simultaneous solid and liquid dysphagia from the start is the motility signature.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old has 3 months of progressive dysphagia, first to solids then to liquids, with 6 kg of weight loss. The most likely diagnosis and best next step are:',
      options: [
        { id: 'a', text: 'Achalasia; reassure' },
        { id: 'b', text: 'Oesophageal cancer; urgent endoscopy with biopsy' },
        { id: 'c', text: 'Globus sensation; speech therapy' },
        { id: 'd', text: 'Diffuse oesophageal spasm; a calcium channel blocker' },
      ],
      answerId: 'b',
      explanation: 'Progressive solids-then-liquids dysphagia with weight loss in an older patient is oesophageal cancer until proven otherwise and needs urgent endoscopy with biopsy.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A patient has dysphagia to solids and liquids equally from the start, with regurgitation of undigested food and a tapered lower oesophagus on barium swallow. The diagnosis is:',
      options: [
        { id: 'a', text: 'Peptic stricture' },
        { id: 'b', text: 'Oesophageal carcinoma' },
        { id: 'c', text: 'Achalasia' },
        { id: 'd', text: 'Schatzki ring' },
      ],
      answerId: 'c',
      explanation: 'Dysphagia to solids and liquids from the outset indicates a motility disorder; the tapered (bird-beak) lower oesophagus and food regurgitation are classic for achalasia.',
      tests: 'disease',
    },
  ],
};

export default fcp1Dysphagia;
