import type { Lecture } from '../../lib/types';

export const ichOccupationalDiseasesDiagnosis: Lecture = {
  id: 'ich-occupational-diseases-diagnosis',
  title: 'Occupational Disease & Diagnosis',
  system: 'community',
  source: 'L6 — Occupational Medicine',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L6 Occupational Medicine' },
    { kind: 'mechanism', label: 'Establishing work-relatedness' },
    { kind: 'investigation', label: 'Occupational history' },
    { kind: 'disease', label: 'NIHL · pneumoconioses · lead' },
  ],

  highYield: [
    '**The central question of occupational medicine is work-relatedness: is this disease caused or aggravated by work?** It is established with a structured set of criteria — (1) the **disease** is confirmed, (2) **exposure** at work is documented, (3) the exposure is **biologically plausible** for that disease, (4) the **temporal relationship** and **latency** fit, (5) the **dose** was sufficient, (6) **consistency** with literature/coworkers, and (7) **non-occupational causes are excluded**.',
    '**The occupational history is the single most important diagnostic tool.** Ask “**what do you do, and have you always done it?**” — current and past jobs, specific exposures, PPE, the **temporal pattern**, and whether **coworkers are similarly affected**. A shared pattern is a **sentinel** signal of a workplace hazard.',
    '**“Improves away from work” is the classic clue** — symptoms that ease on weekends/holidays and flare on return point to **occupational asthma** or work-aggravated disease.',
    '**Know the classic occupational diseases:** **noise-induced hearing loss** (bilateral sensorineural, **4 kHz audiometric notch**); **pneumoconioses** — **silicosis** (silica), **asbestosis + mesothelioma** (asbestos), coal-worker’s; **lead/heavy-metal** poisoning (anaemia, abdominal colic, neuropathy/wrist-drop); and **occupational asthma**.',
    '**Latency matters — the current job may not be the culprit.** Asbestos- and silica-related disease can appear **decades** after exposure, so the full work history is essential ([[ich-occupational-hazards]]). A confirmed case should trigger control and coworker screening ([[ich-occupational-prevention-controls]]).',
  ],

  mechanism: {
    title: 'Establishing work-relatedness: confirm disease → document exposure → plausibility → temporality/latency → exclude non-work causes',
    steps: [
      { id: 's1', label: 'Confirm the disease clinically' },
      { id: 's2', label: 'Document exposure at work (the occupational history)', emphasis: 'key' },
      { id: 's3', label: 'Check biological plausibility: does this exposure cause this disease?' },
      { id: 's4', label: 'Fit the temporal relationship + adequate latency and dose', emphasis: 'key' },
      { id: 's5', label: 'Exclude non-occupational causes → attribute work-relatedness', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Symptoms improve on weekends/holidays and flare back at work', mechanism: 'A work-correlated temporal pattern is the hallmark of occupational asthma / work-aggravated disease', significance: 'key' },
    { sign: 'Noise-induced hearing loss is bilateral, sensorineural, with a 4 kHz notch', mechanism: 'Chronic noise selectively damages outer hair cells tuned near 4 kHz', significance: 'key' },
    { sign: 'The occupational history is the key diagnostic tool', mechanism: 'Exposure, temporal pattern and coworker clustering rarely surface without deliberately asking', significance: 'key' },
    { sign: 'Long latency — asbestos disease appears decades after exposure', mechanism: 'Fibrosis and mesothelioma develop slowly, so a past job may be responsible', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A factory worker whose cough clears on holiday and returns each Monday', meaning: 'Occupational asthma — the temporal pattern establishes work-relatedness' },
    { clue: 'A sandblaster/stone-cutter with upper-zone nodular fibrosis on CXR', meaning: 'Silicosis from crystalline silica exposure' },
    { clue: 'A former ship-breaker with pleural plaques appearing 30 years on', meaning: 'Asbestos-related disease — remember the long latency; check the past history' },
    { clue: 'A battery-factory worker with anaemia, abdominal colic and wrist-drop', meaning: 'Lead poisoning — a classic heavy-metal occupational disease' },
  ],

  treatment: [
    { logic: 'Take a structured occupational history in every relevant case', detail: 'Current and past jobs, specific exposures, PPE, the temporal pattern, and whether coworkers are affected.' },
    { logic: 'Remove the worker from exposure, then notify and compensate', detail: 'Reporting a confirmed occupational disease triggers workplace control and workmen’s compensation ([[ich-occupational-prevention-controls]]).' },
    { logic: 'Treat a case as a sentinel event', detail: 'One confirmed diagnosis should prompt screening of similarly-exposed coworkers.' },
  ],

  mnemonics: [
    { hook: 'Occupational history: “What do you do? Have you always done it?”', expansion: ['Current + past jobs', 'Exposures + PPE', 'Temporal pattern + affected coworkers'] },
    { hook: 'Improves away from work = work-related', expansion: ['The weekend/holiday clue', 'Classic for occupational asthma'] },
  ],

  traps: [
    {
      questionCategory: 'Attributing disease to the current job',
      wrongInstinct: 'The disease must be caused by whatever the patient does now',
      rightAnswer: 'Long-latency diseases (asbestos, silica) may stem from a job held decades ago — take the FULL occupational history',
      why: 'Latency means the causative exposure and the presenting job can be many years apart.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A spray-painter reports wheeze and cough that reliably clear during holidays and return within a day of going back to work. This temporal pattern most strongly suggests:',
      options: [
        { id: 'a', text: 'Community-acquired pneumonia' },
        { id: 'b', text: 'Occupational asthma' },
        { id: 'c', text: 'Congestive heart failure' },
        { id: 'd', text: 'Idiopathic pulmonary fibrosis' },
      ],
      answerId: 'b',
      explanation: 'Symptoms that improve away from work and recur on return are the classic marker of occupational asthma. The work-correlated temporal pattern is a key criterion for establishing work-relatedness.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'An audiogram on a long-serving textile-mill weaver shows bilateral sensorineural loss with a notch at 4 kHz. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Otosclerosis' },
        { id: 'b', text: 'Presbycusis alone' },
        { id: 'c', text: 'Noise-induced hearing loss' },
        { id: 'd', text: 'Conductive loss from cerumen' },
      ],
      answerId: 'c',
      explanation: 'A bilateral sensorineural loss with a characteristic 4 kHz notch in a chronically noise-exposed worker is noise-induced hearing loss. The exposure history plus the audiometric notch establish work-relatedness.',
      tests: 'disease',
    },
  ],
};

export default ichOccupationalDiseasesDiagnosis;
