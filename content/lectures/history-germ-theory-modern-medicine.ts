import type { Lecture } from '../../lib/types';

export const historyGermTheoryModernMedicine: Lecture = {
  id: 'history-germ-theory-modern-medicine',
  title: 'Germ Theory → Modern Medicine: Vaccines, Antisepsis, Antibiotics & EBM',
  system: 'research',
  source: 'L1 — History of Medicine',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L1 History of Medicine' },
    { kind: 'mechanism', label: 'Germ theory → EBM' },
    { kind: 'exam', label: 'Discoverer ↔ discovery' },
  ],

  highYield: [
    '**Edward Jenner (1796) — first vaccine.** Observing that milkmaids with **cowpox** were spared **smallpox**, he inoculated cowpox and showed protection → coined *vaccination* (Latin *vacca* = cow). Endpoint of the story: **smallpox is the only human disease ever eradicated (WHO, 1980)**.',
    '**Louis Pasteur & Robert Koch — germ theory of disease.** Pasteur disproved spontaneous generation, developed **pasteurisation** and attenuated vaccines (rabies, anthrax). Koch identified specific bacteria (anthrax, TB, cholera) and formalised **Koch’s postulates** — the logic for proving a microbe *causes* a disease (causal inference in microbiology).',
    '**Joseph Lister (1867) — antisepsis.** Applying germ theory, he used **carbolic acid (phenol)** on wounds/instruments → surgical mortality plummeted. Complements **Semmelweis**, who showed **handwashing** cut puerperal-fever deaths — an early natural experiment ignored because it defied authority.',
    '**Alexander Fleming (1928) — penicillin**, the first antibiotic (a *Penicillium* mould lysed staphylococci). Chain & Florey later mass-produced it. This launched the antibiotic era; parallel milestones: **anaesthesia** (ether, 1846), **Röntgen’s X-ray (1895)**, **insulin (1922)**.',
    '**The molecular & evidence eras.** **Watson–Crick DNA double helix (1953)** → molecular medicine; **CRISPR gene editing** (Doudna & Charpentier, Nobel 2020) → precise genome editing. Meanwhile clinical practice shifted to **Evidence-Based Medicine**: the RCT (Bradford Hill, streptomycin trial 1948) and systematic reviews replaced eminence with evidence.',
  ],

  mechanism: {
    title: 'Microbe found → prevented → treated → understood → proven',
    steps: [
      { id: 's1', label: 'Jenner: cowpox → smallpox vaccine (immunisation)' },
      { id: 's2', label: 'Pasteur/Koch: germ theory + Koch’s postulates (causation)', emphasis: 'key' },
      { id: 's3', label: 'Lister/Semmelweis: antisepsis + handwashing (prevention)' },
      { id: 's4', label: 'Fleming: penicillin → antibiotic era (treatment)', emphasis: 'key' },
      { id: 's5', label: 'DNA → CRISPR; RCT/EBM → evidence over eminence' },
    ],
  },

  examFindings: [
    { sign: 'Cowpox protects against smallpox', mechanism: 'Cross-immunity → Jenner’s first vaccine (1796)', significance: 'key' },
    { sign: 'Koch’s postulates', mechanism: 'Criteria to prove a specific microbe causes a specific disease', significance: 'key' },
    { sign: 'Carbolic acid drops surgical deaths (Lister)', mechanism: 'Germ theory applied → antisepsis', significance: 'supportive' },
    { sign: 'Penicillium lyses staphylococci', mechanism: 'Fleming → penicillin, the first antibiotic', significance: 'key' },
    { sign: 'Streptomycin RCT (1948)', mechanism: 'First modern randomised controlled trial → birth of EBM', significance: 'key' },
  ],

  investigations: [
    { clue: 'Proof that a specific bacterium causes a specific disease', meaning: 'Koch’s postulates' },
    { clue: 'Only human disease declared eradicated', meaning: 'Smallpox (WHO 1980) — Jenner’s legacy' },
    { clue: 'Design that lets us claim a treatment *causes* benefit', meaning: 'Randomised controlled trial (top of the evidence chain)' },
  ],

  treatment: [
    { logic: 'Lesson for the researcher', detail: 'Progress = a *mechanism* (germ theory) plus a *method to prove causation* (Koch’s postulates, then the RCT). Good ideas (Semmelweis’ handwashing) fail without evidence that persuades.' },
  ],

  mnemonics: [
    { hook: '"Jenner Prevents, Koch Proves, Lister Cleans, Fleming Cures"', expansion: ['Vaccine → causation → antisepsis → antibiotic'] },
    { hook: 'vacca = cow → vaccine', expansion: ['Cowpox origin of the word'] },
  ],

  traps: [
    {
      questionCategory: 'First antibiotic vs first vaccine',
      wrongInstinct: 'Fleming made the first vaccine',
      rightAnswer: 'Fleming discovered penicillin (first antibiotic, 1928); Jenner made the first vaccine (smallpox, 1796)',
      why: 'Vaccine = prevention by immunity (Jenner). Antibiotic = kills established bacteria (Fleming). Don’t conflate them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Koch’s postulates are best described as:',
      options: [
        { id: 'a', text: 'Ethical principles for human experimentation' },
        { id: 'b', text: 'Criteria to establish that a specific microorganism causes a specific disease' },
        { id: 'c', text: 'Rules for sterilising surgical instruments' },
        { id: 'd', text: 'A method for attenuating vaccines' },
      ],
      answerId: 'b',
      explanation: 'Koch’s postulates provide the causal logic linking a microbe to a disease (isolate from diseased hosts, culture, reproduce disease, re-isolate). Ethics = Belmont/Nuremberg; sterilisation = Lister.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which development marks the birth of modern Evidence-Based Medicine?',
      options: [
        { id: 'a', text: 'Galen’s humoral theory' },
        { id: 'b', text: 'Vesalius’ anatomy atlas' },
        { id: 'c', text: 'The 1948 streptomycin randomised controlled trial' },
        { id: 'd', text: 'Discovery of the DNA double helix' },
      ],
      answerId: 'c',
      explanation: 'Bradford Hill’s 1948 streptomycin trial is the archetypal modern RCT — randomisation to control confounding — and anchors the evidence hierarchy that defines EBM.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default historyGermTheoryModernMedicine;
