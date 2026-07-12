import type { Lecture } from '../../lib/types';

export const ifhTcmClinicalApproach: Lecture = {
  id: 'ifh-tcm-clinical-approach',
  title: 'A Doctor’s Approach to T&CM',
  system: 'community',
  source: 'L10 — Traditional & Complementary Medicine',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L10 T&CM' },
    { kind: 'treatment', label: 'Integrate vs caution' },
    { kind: 'investigation', label: 'Herb–drug interactions' },
    { kind: 'mechanism', label: 'Ask → assess → check → decide' },
  ],

  highYield: [
    '**"Natural" does NOT mean "safe."** Herbs are **pharmacologically active** — capable of **interactions, hepatotoxicity, and contamination**. Evidence varies: some modalities (e.g. acupuncture for certain pain) have support; many have none.',
    '**Herb–drug interactions to know:** **St John’s Wort** is a potent **CYP450 / P-glycoprotein INDUCER** — it *lowers* levels of warfarin, oral contraceptives, antiretrovirals, and ciclosporin (transplant-rejection risk). **Ginkgo, garlic, ginger** *raise* bleeding risk with warfarin/antiplatelets.',
    '**Beware contamination and hepatotoxicity.** Unregulated products may be adulterated with **steroids or NSAIDs** or contaminated with **heavy metals** (lead, arsenic, mercury); some herbals cause **liver injury**. Deranged LFTs in a herbal user should raise this flag.',
    '**Ask non-judgmentally — dismissal makes patients hide it.** Using the communication skills of [[ifh-clinical-communication-skills]], invite disclosure so hidden interactions surface. This builds on routinely asking about use (see [[ifh-tcm-overview]]).',
    '**Integrate vs caution, then respect autonomy.** **Integrate** low-risk, patient-valued modalities; **caution** against unsafe, interacting, or *replacement* use. Then **inform and negotiate** rather than dismiss — the patient-centred stance of [[ifh-patient-centered-clinical-method]] and [[ifh-motivational-interviewing]].',
  ],

  mechanism: {
    title: 'Ask → assess evidence & safety → check interactions → integrate or caution → respect autonomy',
    steps: [
      { id: 's1', label: 'Ask about T&CM non-judgmentally (patients will not volunteer it)', emphasis: 'key' },
      { id: 's2', label: 'Assess the evidence and safety of the specific modality' },
      { id: 's3', label: 'Check herb–drug interactions, contamination, and hepatotoxicity', emphasis: 'danger' },
      { id: 's4', label: 'Integrate low-risk options; caution against harmful or replacement use', emphasis: 'key' },
      { id: 's5', label: 'Respect autonomy — inform, negotiate, do not dismiss' },
    ],
  },

  examFindings: [
    { sign: '"Natural" does not mean safe', mechanism: 'Herbs are pharmacologically active, so interactions and toxicity are real', significance: 'key' },
    { sign: 'St John’s Wort is a potent CYP450 / P-gp inducer', mechanism: 'It accelerates metabolism, lowering levels of warfarin, OCPs, antiretrovirals, and ciclosporin', significance: 'key' },
    { sign: 'T&CM products can be contaminated or adulterated', mechanism: 'Heavy metals, or hidden steroids/NSAIDs, cause harm the label never declares', significance: 'key' },
    { sign: 'Dismissing T&CM makes patients conceal it', mechanism: 'Non-judgmental asking keeps you informed of hidden interactions', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient on warfarin starts taking ginkgo and garlic', meaning: 'Additive antiplatelet/anticoagulant effect → increased bleeding risk' },
    { clue: 'A transplant patient on ciclosporin begins St John’s Wort', meaning: 'CYP/P-gp induction → sub-therapeutic ciclosporin → graft rejection risk' },
    { clue: 'Jaundice and deranged LFTs in a user of an unregulated herbal tonic', meaning: 'Herbal hepatotoxicity or contamination until proven otherwise' },
    { clue: 'A patient is reluctant to admit using herbal remedies', meaning: 'Non-judgmental questioning is needed to uncover a hidden, potentially dangerous interaction' },
  ],

  treatment: [
    { logic: 'Ask, assess safety, and check for interactions', detail: 'Elicit all T&CM use, review evidence and safety of the specific product, and screen for herb–drug interactions, contamination, and hepatotoxicity.' },
    { logic: 'Advise integration vs caution, respecting autonomy', detail: 'Support low-risk, valued options; caution against unsafe or replacement use; inform of risks and negotiate a safe plan rather than issuing a blunt ban.' },
  ],

  mnemonics: [
    { hook: '"Natural" ≠ safe', expansion: ['Herbs are active drugs', '→ interactions, hepatotoxicity, and contamination are all possible'] },
    { hook: 'SJW induces; the 3 G’s bleed', expansion: ['St John’s Wort → CYP/P-gp inducer → lowers drug levels', 'Ginkgo, Garlic, Ginger → increase bleeding risk'] },
  ],

  traps: [
    {
      questionCategory: '"Natural = safe" misconception',
      wrongInstinct: 'Herbal products are harmless because they are natural, so no interaction check is needed',
      rightAnswer: 'Herbs are pharmacologically active — interactions, hepatotoxicity, and contamination are real and must be screened for',
      why: 'St John’s Wort can induce drug metabolism enough to cause transplant rejection or contraceptive failure — "natural" says nothing about safety.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A transplant patient on ciclosporin starts St John’s Wort. What is the main concern?',
      options: [
        { id: 'a', text: 'It inhibits metabolism, raising ciclosporin to toxic levels' },
        { id: 'b', text: 'It induces CYP450/P-glycoprotein, lowering ciclosporin and risking rejection' },
        { id: 'c', text: 'It has no meaningful pharmacological effect' },
        { id: 'd', text: 'It only interacts with antibiotics' },
      ],
      answerId: 'b',
      explanation: 'St John’s Wort is a potent CYP450 and P-glycoprotein inducer, accelerating ciclosporin metabolism to sub-therapeutic levels and risking graft rejection.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'What is the most appropriate way to explore a patient’s use of traditional and complementary medicine?',
      options: [
        { id: 'a', text: 'Warn them that all such remedies are dangerous and forbidden' },
        { id: 'b', text: 'Ask openly and non-judgmentally so use is disclosed' },
        { id: 'c', text: 'Assume patients will mention it if it matters' },
        { id: 'd', text: 'Avoid the topic to save consultation time' },
      ],
      answerId: 'b',
      explanation: 'Non-judgmental questioning encourages disclosure so hidden interactions surface; dismissal or assuming spontaneous disclosure drives the information underground.',
      tests: 'treatment',
    },
  ],
};

export default ifhTcmClinicalApproach;
