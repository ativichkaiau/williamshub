import type { Lecture } from '../../lib/types';

export const ototopicalDrugs: Lecture = {
  id: 'ototopical-drugs',
  title: 'Ototopical Drugs',
  system: 'neuro',
  source: 'L11 — Drugs for Ear Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L11 Ear Drugs' },
    { kind: 'disease', label: 'Otitis externa' },
    { kind: 'mechanism', label: 'Topical delivery' },
    { kind: 'exam', label: 'Ototoxicity / intact TM' },
  ],

  highYield: [
    'Ear drops give **very high local concentration with low systemic exposure** — good for **otitis externa** (bacterial ~90%; **Pseudomonas > S. aureus**). Classes: **antibiotic, antifungal, acidifying, cerumenolytic, steroid/anesthetic**.',
    '**Antibiotic drops**: **quinolones (ofloxacin, ciprofloxacin) are safest — no inner-ear toxicity (FDA-approved for middle-ear use)**; **aminoglycosides (neomycin, gentamicin), polymyxin, chloramphenicol are potentially OTOTOXIC** and cause contact dermatitis. Often combined with a **steroid** (reduce inflammation/edema).',
    '**Antifungal drops** (clotrimazole, miconazole) for **otomycosis** (Aspergillus ~80–90%, Candida) — an azole blocks **ergosterol synthesis**.',
    '**Acidifying agents** (acetic acid/Burow solution) restore the acidic canal pH to **prevent recurrent otitis externa** in swimmers/hearing-aid users. **Cerumenolytics** (hydrogen-peroxide/glycerin, sodium bicarbonate, docusate) soften wax.',
    '**Golden rule: confirm the tympanic membrane is intact** before ototoxic or wax-softening drops — a perforation lets the drug reach the middle/inner ear and cause **cochleovestibular toxicity**. Steroid drops can predispose to otomycosis; consider systemic therapy in severe/immunocompromised infection.',
  ],

  mechanism: {
    title: 'Deliver high local drug — but protect the inner ear',
    steps: [
      { id: 's1', label: 'Topical drug floods the external canal' },
      { id: 's2', label: 'Kills bacteria/fungi or restores acidity/softens wax', emphasis: 'key' },
      { id: 's3', label: 'Quinolones safe; aminoglycosides ototoxic' },
      { id: 's4', label: 'Perforated TM → drug reaches inner ear → toxicity', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Painful, swollen, discharging canal (bacterial OE)', mechanism: 'Pseudomonas/S. aureus otitis externa', significance: 'key' },
    { sign: 'Itchy, damp ear with fungal debris', mechanism: 'Otomycosis (Aspergillus)', significance: 'key' },
    { sign: 'New vertigo/SNHL after ear drops', mechanism: 'Ototoxicity through a perforation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Otoscopy to confirm an intact tympanic membrane', meaning: 'Determines which drops are safe' },
    { clue: 'Culture in refractory/severe cases', meaning: 'Guides antibiotic/antifungal choice' },
    { clue: 'Assess immune status', meaning: 'Systemic therapy for immunocompromised/severe disease' },
  ],

  treatment: [
    { logic: 'Aural toilet + quinolone drops for bacterial OE', detail: 'Safe with perforation; add steroid for inflammation.' },
    { logic: 'Azole drops for otomycosis; acidifying drops to prevent recurrence', detail: 'Keep the ear dry.' },
    { logic: 'Systemic antibiotics for severe/chronic/immunocompromised infection', detail: 'Topicals may not suffice.' },
  ],

  mnemonics: [
    { hook: 'Quinolone drops = safe (no ototoxicity); aminoglycoside drops = ototoxic', expansion: ['Check the eardrum first'] },
    { hook: 'Acidify to prevent recurrent OE (swimmer’s ear)', expansion: ['Burow/acetic acid restores pH'] },
  ],

  traps: [
    {
      questionCategory: 'Choosing ear drops with a possible perforation',
      wrongInstinct: 'Any antibiotic ear drop is fine as long as it covers the likely organisms',
      rightAnswer: 'If the tympanic membrane may be perforated, avoid ototoxic (aminoglycoside/chloramphenicol) and wax-softening drops — use a non-ototoxic quinolone',
      why: 'With a perforation, ototoxic drops reach the inner ear and can cause permanent cochleovestibular damage; quinolones are the safe choice for middle-ear exposure.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with otitis externa and a possibly perforated eardrum needs antibiotic drops. The safest choice regarding inner-ear toxicity is:',
      options: [
        { id: 'a', text: 'Neomycin' },
        { id: 'b', text: 'A fluoroquinolone (e.g. ofloxacin)' },
        { id: 'c', text: 'Gentamicin' },
        { id: 'd', text: 'Chloramphenicol' },
      ],
      answerId: 'b',
      explanation: 'Fluoroquinolone ear drops (ofloxacin, ciprofloxacin) lack inner-ear toxicity and are approved for middle-ear use, making them the safe choice when the tympanic membrane may be perforated. Aminoglycosides and chloramphenicol are potentially ototoxic.',
      tests: 'treatment',
    },
  ],
};

export default ototopicalDrugs;
