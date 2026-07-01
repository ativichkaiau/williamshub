import type { Lecture } from '../../lib/types';

export const historyAncientToRenaissance: Lecture = {
  id: 'history-ancient-to-renaissance',
  title: 'Ancient → Renaissance Medicine: Hippocrates, Galen & the Birth of Observation',
  system: 'research',
  source: 'L1 — History of Medicine',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L1 History of Medicine' },
    { kind: 'mechanism', label: 'Humoral theory → anatomy' },
    { kind: 'exam', label: 'Who did what, when' },
  ],

  highYield: [
    '**Medicine began as magic-religion, then became observation.** The earliest written medical records are Egyptian papyri: the **Edwin Smith Papyrus** (surgical/trauma cases, rational cause-and-effect) and the **Ebers Papyrus** (remedies, spells). Every ancient culture (Egyptian, Mesopotamian, Ayurvedic, Chinese, Greek) sought a *natural* explanation for disease — the seed of research.',
    '**Hippocrates (c. 460–370 BC) = "Father of Medicine."** His revolution: disease has **natural, not supernatural, causes**; emphasis on **observation, prognosis, and ethics** (the **Hippocratic Oath**). He taught *against* superstition and toward bedside recording of the natural course of illness.',
    '**Humoral theory** (Hippocrates, systematised by Galen): health = balance of **4 humors** — blood, phlegm, yellow bile, black bile. Disease = imbalance → treated by "rebalancing" (e.g. bloodletting, purging). Wrong mechanism, but the *framework of a testable model of disease* lasted ~2000 years.',
    '**Galen (129–c. 216 AD)** — Greek physician in Rome, surgeon to gladiators. He dissected **animals** (human dissection was banned) and extrapolated to humans, so many "facts" were wrong, yet his authority went unchallenged for over a millennium — a cautionary tale about **argument-from-authority vs evidence**.',
    '**The Renaissance restored direct observation.** **Andreas Vesalius (1543, *De Humani Corporis Fabrica*)** dissected *humans* and corrected Galen → founded modern anatomy. **William Harvey (1628)** used measurement + experiment to prove **blood circulates** (the heart is a pump), overturning Galen — an early model of the experimental method. The **microscope** (Leeuwenhoek, Hooke) opened the unseen world.',
  ],

  mechanism: {
    title: 'From authority → observation → experiment',
    steps: [
      { id: 's1', label: 'Ancient papyri: first written, rational case records' },
      { id: 's2', label: 'Hippocrates: natural causes, observation, ethics (Oath)' },
      { id: 's3', label: 'Humoral theory: a (wrong) but testable disease model', emphasis: 'key' },
      { id: 's4', label: 'Galen: animal dissection → dogma held for ~1400 yrs' },
      { id: 's5', label: 'Vesalius corrects anatomy; Harvey proves circulation by experiment', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Hippocratic Oath', mechanism: 'First codified medical ethics — "do no harm"', significance: 'key' },
    { sign: '4 humors (blood, phlegm, yellow + black bile)', mechanism: 'Balance = health; imbalance = disease', significance: 'key' },
    { sign: 'Galen dissected animals, not humans', mechanism: 'Human dissection banned → errors persisted as dogma', significance: 'supportive' },
    { sign: 'Vesalius = modern anatomy; Harvey = circulation', mechanism: 'Direct human dissection + experiment overturned Galen', significance: 'key' },
  ],

  investigations: [
    { clue: 'A "case report" with rational cause and treatment in antiquity', meaning: 'Edwin Smith Papyrus (surgical trauma cases)' },
    { clue: 'Claim overturned only after direct human dissection', meaning: 'Galenic anatomy corrected by Vesalius (1543)' },
    { clue: 'Physiology proven by measuring blood volume moved per beat', meaning: 'Harvey’s quantitative argument for circulation' },
  ],

  treatment: [
    { logic: 'Lesson for the researcher', detail: 'Authority is not evidence; observation and experiment beat received wisdom. Every model (even humoral theory) must be testable and falsifiable.' },
  ],

  mnemonics: [
    { hook: '"Hippocrates Observes, Galen Assumes, Vesalius Verifies"', expansion: ['Observation → dogma → re-observation/experiment'] },
    { hook: '4 humors = Blood, Phlegm, Yellow bile, Black bile', expansion: ['Sanguine, phlegmatic, choleric, melancholic'] },
  ],

  traps: [
    {
      questionCategory: 'Who founded modern anatomy?',
      wrongInstinct: 'Galen — he wrote the anatomy textbooks',
      rightAnswer: 'Vesalius (1543) founded modern anatomy by dissecting humans and correcting Galen’s animal-based errors',
      why: 'Galen’s prestige made his errors persist; the Renaissance advance was returning to *direct human observation*.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which figure is credited with shifting medicine toward natural (rather than supernatural) causes and codifying medical ethics?',
      options: [
        { id: 'a', text: 'Galen' },
        { id: 'b', text: 'Hippocrates' },
        { id: 'c', text: 'Vesalius' },
        { id: 'd', text: 'William Harvey' },
      ],
      answerId: 'b',
      explanation: 'Hippocrates is the "Father of Medicine": natural causes of disease, careful observation/prognosis, and the Hippocratic Oath. Galen systematised humoral theory; Vesalius founded anatomy; Harvey proved circulation.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Galen’s anatomical errors persisted for over a thousand years mainly because:',
      options: [
        { id: 'a', text: 'He performed thousands of accurate human dissections' },
        { id: 'b', text: 'His work was lost until the Renaissance' },
        { id: 'c', text: 'He extrapolated from animal dissection and his authority went unchallenged' },
        { id: 'd', text: 'The microscope had not been invented' },
      ],
      answerId: 'c',
      explanation: 'Human dissection was banned, so Galen dissected animals and extrapolated. His authority became dogma until Vesalius returned to direct human dissection — a lesson in authority vs evidence.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default historyAncientToRenaissance;
