import type { Lecture } from '../../lib/types';

export const fcp1EntRedFlags: Lecture = {
  id: 'fcp1-ent-red-flags',
  title: 'ENT Red Flags',
  system: 'clinical',
  source: 'L32 — Common ENT Symptoms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L32 ENT Symptoms' },
    { kind: 'disease', label: 'Head-neck cancer · airway' },
    { kind: 'exam', label: 'Stridor · neck mass' },
    { kind: 'investigation', label: 'FNA · panendoscopy' },
  ],

  highYield: [
    '**Persistent unilateral ENT symptoms are the red flag** — unilateral hearing loss/tinnitus (vestibular schwannoma, nasopharyngeal cancer with a middle-ear effusion), unilateral nasal obstruction/epistaxis (sinonasal or nasopharyngeal tumour), or a unilateral tonsil enlargement/ulcer. **Asymmetry demands a scope and imaging** [[fcp1-ent-common-symptoms]].',
    '**Hoarseness or dysphagia over 3 weeks**, especially in a **smoker or drinker**, is head-and-neck cancer until excluded → urgent laryngoscopy; work up the dysphagia as in [[fcp1-dysphagia]].',
    '**Adult neck mass:** a persistent (over 3 weeks) firm neck node, especially level II–III in an older smoker, is metastatic squamous cancer until proven otherwise. **Do NOT start with an open/excisional biopsy** — image, do a fine-needle aspiration and panendoscopy first; overlaps the lymphadenopathy approach [[fcp1-lymphadenopathy-approach]].',
    '**Airway red flags** — **stridor**, drooling, tripod posture, a muffled hot-potato voice, or a rapidly enlarging neck swelling (epiglottitis, deep-neck abscess, laryngeal tumour, foreign body, anaphylaxis) signal impending obstruction. **Do not examine the throat of a child with suspected epiglottitis** — secure the airway with senior/anaesthetic help.',
    '**Other cannot-miss problems:** severe or posterior epistaxis with haemodynamic compromise, sudden sensorineural hearing loss (treat within days), orbital or intracranial spread of sinus infection (proptosis, eye signs), and B-symptoms or fever [[fcp1-fever-approach-differential]] with lymphadenopathy — all need urgent referral.',
  ],

  mechanism: {
    title: 'The ENT symptoms that cannot wait',
    steps: [
      { id: 's1', label: 'Unilateral persistent ear/nose/throat symptom → image + scope', emphasis: 'danger' },
      { id: 's2', label: 'Hoarseness/dysphagia >3 wk in a smoker → laryngoscopy', emphasis: 'danger' },
      { id: 's3', label: 'Adult neck mass → FNA + imaging, NOT open biopsy first', emphasis: 'danger' },
      { id: 's4', label: 'Stridor / drooling / muffled voice → secure the airway', emphasis: 'danger' },
      { id: 's5', label: 'Refer red flags urgently to ENT / head-neck MDT', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Stridor, drooling, tripod posture, muffled voice', mechanism: 'Impending upper-airway obstruction', significance: 'key' },
    { sign: 'Unilateral middle-ear effusion in an adult', mechanism: 'Check the nasopharynx for a tumour', significance: 'key' },
    { sign: 'Persistent firm level II–III neck node in an older smoker', mechanism: 'Metastatic squamous-cell carcinoma', significance: 'key' },
    { sign: 'Unilateral tonsillar enlargement or ulcer', mechanism: 'Malignancy until proven otherwise', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Adult neck mass', meaning: 'Ultrasound-guided fine-needle aspiration plus cross-sectional imaging — not an open biopsy first' },
    { clue: 'Persistent hoarseness or dysphagia', meaning: 'Flexible laryngoscopy ± panendoscopy and biopsy' },
    { clue: 'Unilateral nasal or aural symptoms', meaning: 'Nasendoscopy plus imaging of the nasopharynx and sinuses' },
    { clue: 'Stridor with a suspicious airway', meaning: 'Do not instrument blindly — imaging/scope in a controlled setting' },
  ],

  treatment: [
    { logic: 'Airway first', detail: 'Stridor or impending obstruction → call for senior/anaesthetic/ENT help and prepare a definitive airway; never distress a child with suspected epiglottitis.' },
    { logic: 'Refer red flags on an urgent cancer pathway', detail: 'Persistent unilateral symptoms, hoarseness/dysphagia over 3 weeks, or an adult neck mass → urgent ENT/head-neck referral; avoid open biopsy of a neck node before assessment.' },
  ],

  mnemonics: [
    { hook: 'Unilateral and persistent = suspect cancer; stridor = secure the airway', expansion: ['Asymmetry earns a scope', 'Stridor earns an airway plan'] },
  ],

  traps: [
    {
      questionCategory: 'The adult neck lump',
      wrongInstinct: 'Excise a persistent neck node to get a tissue diagnosis',
      rightAnswer: 'In an adult (especially an older smoker) image and do a fine-needle aspiration with panendoscopy first — an upfront open biopsy worsens outcomes',
      why: 'Open biopsy of a nodal squamous metastasis can seed tissue and compromise definitive surgery or radiotherapy — find the primary first.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 58-year-old smoker has 4 weeks of hoarseness and a firm 3 cm upper-neck node. The most appropriate management is:',
      options: [
        { id: 'a', text: 'A one-week course of antibiotics' },
        { id: 'b', text: 'Excisional biopsy of the node' },
        { id: 'c', text: 'Urgent ENT referral for laryngoscopy and fine-needle aspiration' },
        { id: 'd', text: 'Reassure and review in 3 months' },
      ],
      answerId: 'c',
      explanation: 'Persistent hoarseness with a firm neck node in a smoker is metastatic head-and-neck cancer until excluded; assess with laryngoscopy and FNA, not an upfront open biopsy.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 4-year-old has high fever, drooling, a muffled voice and soft stridor, and is sitting forward refusing to lie down. The most appropriate immediate action is:',
      options: [
        { id: 'a', text: 'Lie the child down and examine the throat with a spatula' },
        { id: 'b', text: 'Urgent airway management with senior anaesthetic/ENT help, avoiding distressing the child' },
        { id: 'c', text: 'Oral antibiotics and discharge' },
        { id: 'd', text: 'Nebulised saline and review in the morning' },
      ],
      answerId: 'b',
      explanation: 'This is suspected epiglottitis with impending airway obstruction; do not examine the throat, keep the child calm and arrange a senior-led definitive airway.',
      tests: 'treatment',
    },
  ],
};

export default fcp1EntRedFlags;
