import type { Lecture } from '../../lib/types';

export const nasalSinusInflammatoryPathology: Lecture = {
  id: 'nasal-sinus-inflammatory-pathology',
  title: 'Rhinitis, Nasal Polyps & Sinonasal Inflammation',
  system: 'respiratory',
  source: 'L2 — Common Pathology of the Upper Respiratory Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L2 Upper Resp Pathology' },
    { kind: 'disease', label: 'Nasal polyps' },
    { kind: 'exam', label: 'Sinonasal granulomatosis' },
  ],

  highYield: [
    '**Rhinitis is inflammation of the nasal mucosa; the commonest forms are allergic and infectious (the common cold).** Allergic rhinitis is an **IgE-mediated (type I) hypersensitivity** with mucosal oedema, eosinophils and a boggy pale mucosa; the common cold is viral (rhinovirus). Chronic inflammation predisposes to secondary bacterial sinusitis (see [[otitis-media-sinusitis-epiglottitis]]).',
    '**Nasal polyps are focal protrusions of oedematous, inflamed sinonasal mucosa** (not neoplasms). They arise with chronic rhinosinusitis, allergy and cystic fibrosis. The classic association is the **aspirin-exacerbated respiratory disease / Samter triad: asthma + chronic rhinosinusitis with nasal polyps + aspirin (NSAID) sensitivity.**',
    '**Acute vs chronic sinusitis** turns on impaired drainage from the ostiomeatal complex: oedematous mucosa blocks the ostium → stasis → infection. Chronic sinusitis shows a thickened mucosa with mixed inflammation; think of **fungal sinusitis (including invasive mucormycosis)** in diabetics/immunocompromised patients.',
    '**Granulomatosis with polyangiitis (GPA, formerly Wegener) is a key sinonasal "great mimic":** necrotising granulomatous inflammation of the upper (and lower) airway with a **saddle-nose deformity, nasal crusting/septal perforation**, plus lung nodules and glomerulonephritis; **c-ANCA (anti-PR3) positive**. It is not a simple infection and needs immunosuppression.',
    '**Nasopharyngeal angiofibroma is a benign but locally aggressive, highly vascular tumour of adolescent males** presenting with **recurrent epistaxis and nasal obstruction** — biopsy is dangerous (bleeding). It is benign histologically but destructive, straddling the line between "inflammatory-looking" and neoplastic sinonasal masses (tumours proper: [[nasopharyngeal-laryngeal-tumors]]).',
  ],

  mechanism: {
    title: 'Inflammation/oedema → obstruction, polyps; watch for GPA & fungi',
    steps: [
      { id: 's1', label: 'Allergic rhinitis = IgE/type I → eosinophils, boggy mucosa', emphasis: 'key' },
      { id: 's2', label: 'Chronic inflammation/oedema → nasal polyps', emphasis: 'key' },
      { id: 's3', label: 'Samter triad: asthma + polyps + aspirin sensitivity', emphasis: 'key' },
      { id: 's4', label: 'Ostium obstruction → sinusitis; invasive fungi in diabetes/immunosuppression', emphasis: 'danger' },
      { id: 's5', label: 'GPA (c-ANCA): saddle nose, septal perforation, lung + kidney' },
    ],
  },

  examFindings: [
    { sign: 'Pale boggy nasal mucosa with eosinophils', mechanism: 'Allergic (IgE-mediated) rhinitis', significance: 'key' },
    { sign: 'Asthma + nasal polyps + aspirin sensitivity', mechanism: 'Samter triad (AERD)', significance: 'key' },
    { sign: 'Saddle-nose deformity + septal perforation + c-ANCA', mechanism: 'Granulomatosis with polyangiitis', significance: 'key' },
    { sign: 'Black necrotic nasal turbinate in a diabetic', mechanism: 'Invasive mucormycosis (angioinvasive fungus)', significance: 'supportive' },
    { sign: 'Recurrent epistaxis + nasal mass in an adolescent boy', mechanism: 'Nasopharyngeal angiofibroma (do not biopsy)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The hypersensitivity type behind allergic rhinitis', meaning: 'Type I (IgE-mediated)' },
    { clue: 'The triad of asthma, nasal polyps and aspirin sensitivity', meaning: 'Samter triad / aspirin-exacerbated respiratory disease' },
    { clue: 'The ANCA associated with sinonasal granulomatosis', meaning: 'c-ANCA (anti-PR3) — granulomatosis with polyangiitis' },
    { clue: 'The vascular nasal tumour of adolescent males', meaning: 'Nasopharyngeal angiofibroma' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Allergic rhinitis and polyps are managed with intranasal steroids/antihistamines ([[cough-cold-allergy-drugs]]); AERD patients must avoid NSAIDs. GPA needs immunosuppression, and invasive fungal sinusitis needs urgent antifungals + debridement. Sinonasal malignancies (NPC, SCC) are in [[nasopharyngeal-laryngeal-tumors]]; obstruction predisposes to bacterial sinusitis ([[otitis-media-sinusitis-epiglottitis]]).' },
  ],

  mnemonics: [
    { hook: 'Samter triad = "ASA": Asthma, Sinonasal polyps, Aspirin sensitivity', expansion: ['Aspirin/NSAID shunts arachidonic acid to leukotrienes', 'Avoid NSAIDs in these patients'] },
    { hook: 'GPA sinonasal = "saddle nose + c-ANCA + kidney"', expansion: ['Necrotising granulomas, septal perforation', 'Anti-PR3', 'Lung nodules + glomerulonephritis'] },
  ],

  traps: [
    {
      questionCategory: 'Nature of a nasal polyp',
      wrongInstinct: 'A nasal polyp is a benign neoplasm arising from epithelium',
      rightAnswer: 'Nasal polyps are inflammatory — protrusions of oedematous, chronically inflamed mucosa (rich in eosinophils), NOT true neoplasms; they reflect chronic rhinosinusitis, allergy, CF or AERD',
      why: 'Calling a polyp a tumour misframes management; they are treated as inflammatory disease (steroids, allergen/NSAID avoidance), and recurrence reflects ongoing inflammation, not neoplastic growth.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with asthma and recurrent nasal polyps develops severe bronchospasm after taking ibuprofen. This triad is best explained by:',
      options: [
        { id: 'a', text: 'IgA deficiency' },
        { id: 'b', text: 'Aspirin-exacerbated respiratory disease (Samter triad)' },
        { id: 'c', text: 'Cystic fibrosis' },
        { id: 'd', text: 'Granulomatosis with polyangiitis' },
      ],
      answerId: 'b',
      explanation: 'Asthma + nasal polyps + NSAID sensitivity is the Samter triad (AERD); COX inhibition shunts arachidonic acid toward bronchoconstrictor leukotrienes. These patients must avoid aspirin/NSAIDs.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A saddle-nose deformity with nasal crusting, septal perforation, lung nodules and glomerulonephritis, with a positive c-ANCA, indicates:',
      options: [
        { id: 'a', text: 'Allergic rhinitis' },
        { id: 'b', text: 'Nasal polyposis' },
        { id: 'c', text: 'Granulomatosis with polyangiitis' },
        { id: 'd', text: 'Common cold' },
      ],
      answerId: 'c',
      explanation: 'This multisystem necrotising granulomatous vasculitis of the upper and lower airway plus kidney, with c-ANCA (anti-PR3), is granulomatosis with polyangiitis — an immunological disease requiring immunosuppression, not an infection.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nasalSinusInflammatoryPathology;
