import type { Lecture } from '../../lib/types';

export const antiemeticsProkinetics: Lecture = {
  id: 'antiemetics-prokinetics',
  title: 'Antiemetics & Prokinetics',
  system: 'gi',
  source: 'L5 — Drugs in GI Disorders & ORS',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L5 GI Drugs & ORS' },
    { kind: 'treatment', label: 'Antiemetics' },
    { kind: 'mechanism', label: 'Prokinetics' },
  ],

  highYield: [
    '**Vomiting is coordinated by the brainstem vomiting centre, which receives inputs from the chemoreceptor trigger zone (CTZ, area postrema — outside the blood–brain barrier), the vestibular system, the GI tract (vagal 5-HT3), and higher centres.** Antiemetics are chosen by blocking the receptor most relevant to the cause.',
    'The main antiemetic classes map to receptors: 5-HT3 antagonists (ondansetron) — best for chemotherapy/post-op nausea (block vagal + CTZ 5-HT3; can prolong QT); D2 antagonists (metoclopramide, domperidone, prochlorperazine) — block the CTZ; NK1 antagonists (aprepitant) — for chemotherapy; H1 antihistamines and antimuscarinics (cyclizine, hyoscine) — best for MOTION SICKNESS/vestibular nausea.',
    '**Prokinetics increase gut motility and are useful for gastroparesis, reflux and functional dyspepsia. Metoclopramide is both antiemetic (D2 block) and prokinetic** (enhances ACh release, speeds gastric emptying) — but crossing the blood–brain barrier it causes **extrapyramidal side effects (dystonia, parkinsonism, tardive dyskinesia) and hyperprolactinaemia.**',
    '**Domperidone is a D2 antagonist that does NOT readily cross the blood–brain barrier**, so it has fewer central/extrapyramidal effects (but can prolong QT). This BBB distinction — metoclopramide (crosses → EPS) vs domperidone (largely peripheral) — is a classic exam point. Erythromycin (a motilin agonist) is another prokinetic.',
    '**Match the drug to the trigger: chemotherapy → 5-HT3 ± NK1 ± dexamethasone; motion sickness/vertigo → antihistamine/antimuscarinic; gastroparesis/reflux → prokinetic (metoclopramide/domperidone).** Beware metoclopramide\'s extrapyramidal effects (especially in the young) and the QT risk of ondansetron/domperidone.',
  ],

  mechanism: {
    title: 'Block the receptor driving the vomiting reflex; prokinetics speed emptying',
    steps: [
      { id: 's1', label: 'Vomiting centre integrates CTZ, vestibular, GI vagal (5-HT3), cortex', emphasis: 'key' },
      { id: 's2', label: '5-HT3 antagonists (ondansetron): chemo/post-op; QT risk', emphasis: 'key' },
      { id: 's3', label: 'D2 antagonists (metoclopramide/domperidone) block CTZ; antihistamines = motion', emphasis: 'key' },
      { id: 's4', label: 'Metoclopramide crosses BBB → EPS + hyperprolactinaemia', emphasis: 'danger' },
      { id: 's5', label: 'Domperidone stays peripheral (fewer EPS); prokinetics for gastroparesis/reflux' },
    ],
  },

  examFindings: [
    { sign: 'Ondansetron chosen for chemotherapy-induced nausea', mechanism: '5-HT3 receptor antagonism (vagal + CTZ)', significance: 'key' },
    { sign: 'Antihistamine/antimuscarinic for motion sickness', mechanism: 'Vestibular (H1/muscarinic) pathway block', significance: 'key' },
    { sign: 'Acute dystonia/parkinsonism from an antiemetic', mechanism: 'Metoclopramide central D2 blockade (EPS)', significance: 'key' },
    { sign: 'Fewer central effects with a peripheral D2 blocker', mechanism: 'Domperidone does not cross the BBB', significance: 'supportive' },
    { sign: 'QT prolongation with ondansetron or domperidone', mechanism: 'Class effect — caution in at-risk patients', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The antiemetic class of choice for chemotherapy nausea', meaning: '5-HT3 antagonists (e.g. ondansetron)' },
    { clue: 'The antiemetics best for motion sickness', meaning: 'Antihistamines and antimuscarinics' },
    { clue: 'Why metoclopramide causes extrapyramidal effects but domperidone less so', meaning: 'Metoclopramide crosses the blood–brain barrier; domperidone largely does not' },
    { clue: 'The dual antiemetic-prokinetic D2 antagonist', meaning: 'Metoclopramide' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Choosing the antiemetic by mechanism (5-HT3 for chemo, antihistamine for motion, prokinetic for gastroparesis) maximises benefit and avoids harm — especially metoclopramide\'s extrapyramidal effects and the QT risk of ondansetron/domperidone. These complement the other GI-disorder drugs (laxatives, antidiarrhoeals, ORS) in [[laxatives-antidiarrheals-ors]]; acid-suppression is in [[acid-suppression-h-pylori-therapy]].' },
  ],

  mnemonics: [
    { hook: 'Trigger→drug: "Chemo = 5-HT3 (ondansetron); Motion = antihistamine; Gut = prokinetic"', expansion: ['CTZ = D2 (metoclopramide/domperidone)', 'NK1 (aprepitant) for chemo'] },
    { hook: 'Metoclopramide "crosses → EPS"; Domperidone "stays out → safer centrally"', expansion: ['Both prolong QT', 'Metoclopramide → hyperprolactinaemia'] },
  ],

  traps: [
    {
      questionCategory: 'Extrapyramidal effects of antiemetics',
      wrongInstinct: 'All dopamine-antagonist antiemetics carry the same risk of extrapyramidal side effects',
      rightAnswer: 'METOCLOPRAMIDE crosses the blood–brain barrier and can cause extrapyramidal effects (dystonia, parkinsonism, tardive dyskinesia), whereas DOMPERIDONE largely does not cross the BBB and has far fewer central effects (though both can prolong QT)',
      why: 'The BBB-penetration difference explains why domperidone is preferred when central dopamine blockade must be avoided (e.g. Parkinson patients); assuming both behave identically leads to avoidable EPS.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which antiemetic class is most appropriate first-line for chemotherapy-induced nausea and vomiting?',
      options: [
        { id: 'a', text: 'Antihistamines (e.g. cyclizine)' },
        { id: 'b', text: '5-HT3 receptor antagonists (e.g. ondansetron)' },
        { id: 'c', text: 'Antimuscarinics (e.g. hyoscine)' },
        { id: 'd', text: 'Osmotic laxatives' },
      ],
      answerId: 'b',
      explanation: '5-HT3 antagonists such as ondansetron block vagal and central (CTZ) 5-HT3 receptors and are first-line for chemotherapy- and post-operative nausea (often combined with dexamethasone ± an NK1 antagonist). Antihistamines/antimuscarinics are best for motion sickness.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Compared with metoclopramide, domperidone causes fewer extrapyramidal side effects because it:',
      options: [
        { id: 'a', text: 'Does not block dopamine receptors' },
        { id: 'b', text: 'Does not readily cross the blood–brain barrier' },
        { id: 'c', text: 'Is a 5-HT3 antagonist' },
        { id: 'd', text: 'Is given only topically' },
      ],
      answerId: 'b',
      explanation: 'Both are D2 antagonists, but domperidone poorly penetrates the blood–brain barrier, so it produces fewer central (extrapyramidal) effects than metoclopramide, which does cross and can cause dystonia and parkinsonism.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default antiemeticsProkinetics;
