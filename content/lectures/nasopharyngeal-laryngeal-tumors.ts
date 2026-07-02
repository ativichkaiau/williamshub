import type { Lecture } from '../../lib/types';

export const nasopharyngealLaryngealTumors: Lecture = {
  id: 'nasopharyngeal-laryngeal-tumors',
  title: 'Nasopharyngeal & Laryngeal Tumours',
  system: 'respiratory',
  source: 'L2 — Common Pathology of the Upper Respiratory Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L2 Upper Resp Pathology' },
    { kind: 'disease', label: 'Nasopharyngeal carcinoma' },
    { kind: 'exam', label: 'EBV' },
  ],

  highYield: [
    '**Nasopharyngeal carcinoma (NPC) is strongly linked to Epstein–Barr virus (EBV)**, with geographic clustering (Southern China, Southeast Asia — high relevance here) and dietary nitrosamines. It often presents late with a **neck mass (cervical nodal metastasis)**, nasal obstruction/epistaxis, and **serous otitis media** from Eustachian tube blockage.',
    '**The undifferentiated (non-keratinising) type of NPC is the most EBV-associated and, despite being aggressive, is radiosensitive.** Histology shows syncytial tumour cells in a lymphocyte-rich background ("lymphoepithelioma"); **EBV-encoded RNA (EBER) in situ hybridisation** confirms it. Because the nasopharynx is hidden, nodal spread is often the first sign.',
    '**Laryngeal squamous cell carcinoma is a smoking- and alcohol-related cancer** (glottic tumours present early with **persistent hoarseness**; a hoarse voice >2–3 weeks in a smoker demands laryngoscopy). Glottic tumours have a relatively good prognosis (early symptoms, sparse lymphatics); supraglottic/subglottic present later with nodal spread.',
    '**Benign laryngeal lesions to distinguish:** **vocal cord nodules ("singer\'s nodules")** — bilateral, from voice overuse; **vocal cord polyps** — usually unilateral, smokers; **laryngeal papillomas** — caused by **HPV 6/11** (juvenile-onset recurrent respiratory papillomatosis can be multiple and recur; adult usually single). These cause hoarseness but are not malignant.',
    '**The unifying alarm symptom is persistent change in voice, unilateral nasal/ear symptoms, or a neck mass in an adult** — these mandate endoscopic evaluation and biopsy to exclude malignancy, since early upper-aerodigestive cancers are curable but easily dismissed as benign.',
  ],

  mechanism: {
    title: 'EBV → NPC; smoking → laryngeal SCC; HPV → papilloma',
    steps: [
      { id: 's1', label: 'NPC: EBV + genetic/dietary; SE-Asian clustering', emphasis: 'key' },
      { id: 's2', label: 'NPC presents with cervical node mass + serous otitis media', emphasis: 'key' },
      { id: 's3', label: 'Undifferentiated NPC = most EBV-linked, radiosensitive (EBER+)' },
      { id: 's4', label: 'Laryngeal SCC: smoking/alcohol; glottic → early hoarseness', emphasis: 'key' },
      { id: 's5', label: 'Benign: nodules (overuse), polyps (smokers), papilloma (HPV 6/11)' },
    ],
  },

  examFindings: [
    { sign: 'Cervical node mass + nasal obstruction + unilateral serous otitis media', mechanism: 'Nasopharyngeal carcinoma (Eustachian blockage)', significance: 'key' },
    { sign: 'EBER-positive lymphoepithelial tumour of the nasopharynx', mechanism: 'EBV-associated undifferentiated NPC', significance: 'key' },
    { sign: 'Persistent hoarseness in a smoker', mechanism: 'Glottic squamous cell carcinoma until proven otherwise', significance: 'key' },
    { sign: 'Bilateral vocal cord nodules in a heavy voice user', mechanism: 'Singer\'s nodules (benign)', significance: 'supportive' },
    { sign: 'Recurrent laryngeal papillomas in a child', mechanism: 'HPV 6/11 (recurrent respiratory papillomatosis)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The virus strongly associated with nasopharyngeal carcinoma', meaning: 'Epstein–Barr virus (EBV; EBER on ISH)' },
    { clue: 'The alarm symptom of glottic cancer', meaning: 'Persistent hoarseness (>2–3 weeks in a smoker)' },
    { clue: 'The virus causing laryngeal papillomas', meaning: 'HPV types 6 and 11' },
    { clue: 'Why NPC often presents with a neck mass', meaning: 'Early cervical lymph node metastasis from a hidden primary' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'NPC is treated with radiotherapy (± chemo) given its radiosensitivity and location; laryngeal SCC by stage (voice-preserving where possible). A persistent unilateral nasal/ear symptom or hoarseness in an adult must prompt endoscopy — early cancers are curable. Distinguish from inflammatory sinonasal disease ([[nasal-sinus-inflammatory-pathology]]); lung primaries are in [[non-small-cell-lung-carcinoma]].' },
  ],

  mnemonics: [
    { hook: 'NPC = "EBV + Ear (serous otitis) + neck node" in SE Asia', expansion: ['Undifferentiated/lymphoepithelioma, EBER+', 'Radiosensitive'] },
    { hook: 'Hoarseness in a smoker = glottic SCC until proven otherwise', expansion: ['Nodules = bilateral/overuse', 'Polyps = unilateral/smokers', 'Papilloma = HPV 6/11'] },
  ],

  traps: [
    {
      questionCategory: 'Persistent hoarseness in an adult smoker',
      wrongInstinct: 'Persistent hoarseness in a smoker is most likely a benign vocal cord nodule',
      rightAnswer: 'Persistent hoarseness (>2–3 weeks), especially in a smoker/drinker, must be evaluated by laryngoscopy to exclude GLOTTIC squamous cell carcinoma — benign nodules are usually bilateral and occur in voice-overusers',
      why: 'Glottic cancer is curable when caught early precisely because it causes hoarseness early; attributing it to a benign nodule risks missing a treatable malignancy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient from Southern China presents with a cervical lymph node mass, nasal obstruction and unilateral serous otitis media. The undifferentiated tumour is EBER-positive. The diagnosis is:',
      options: [
        { id: 'a', text: 'Laryngeal squamous cell carcinoma' },
        { id: 'b', text: 'Nasopharyngeal carcinoma (EBV-associated)' },
        { id: 'c', text: 'Nasal polyp' },
        { id: 'd', text: 'Vocal cord nodule' },
      ],
      answerId: 'b',
      explanation: 'EBV-associated undifferentiated nasopharyngeal carcinoma is common in Southeast/East Asia, presents with cervical nodal metastasis and Eustachian obstruction (serous otitis media), and is confirmed by EBER in situ hybridisation.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Recurrent respiratory papillomatosis of the larynx in a child is caused by:',
      options: [
        { id: 'a', text: 'Epstein–Barr virus' },
        { id: 'b', text: 'Human papillomavirus types 6 and 11' },
        { id: 'c', text: 'Smoking' },
        { id: 'd', text: 'Group A Streptococcus' },
      ],
      answerId: 'b',
      explanation: 'Laryngeal papillomas are caused by HPV 6 and 11 (the low-risk types); juvenile-onset disease can be multiple and recurrent, whereas adult lesions are often solitary. They cause hoarseness but are benign.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nasopharyngealLaryngealTumors;
