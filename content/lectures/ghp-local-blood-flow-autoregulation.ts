import type { Lecture } from '../../lib/types';

export const ghpLocalBloodFlowAutoregulation: Lecture = {
  id: 'ghp-local-blood-flow-autoregulation',
  title: 'Local Blood Flow Control & Autoregulation',
  system: 'cardiovascular',
  source: 'Ch 17 — Local & Humoral Control of Blood Flow by the Tissues',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 17 Local & Humoral Control' },
    { kind: 'mechanism', label: 'Metabolic vs myogenic' },
    { kind: 'exam', label: 'Hyperaemia · autoregulation' },
  ],

  highYield: [
    '**Every tissue controls its own blood flow according to its own need — the circulation is a federation, not a dictatorship.** Total flow is only the sum of what each tissue takes. Flow is matched to **metabolic rate**, so it rises with oxygen consumption almost linearly, and each tissue takes only the **minimum** it needs: supplying more would force the heart to pump output it cannot sustain.',
    '**The vasodilator (metabolite) theory: working tissue releases substances that open its own arterioles.** Increased metabolism or falling oxygen liberates **adenosine**, **CO₂**, **H⁺**, **K⁺**, **lactate** and **phosphate**, which diffuse to the arterioles and relax them. Adenosine is the classic candidate in **cardiac** muscle. Flow rises until the metabolites are washed out — an inherently **self-limiting negative-feedback** loop.',
    '**The oxygen-demand theory says the same thing from the other side: smooth muscle needs O₂ to stay contracted.** Vascular smooth muscle requires oxygen to sustain tone, so **falling tissue PO₂ relaxes it directly**. Supporting this, **precapillary sphincters open and close cyclically (vasomotion)**, and the *proportion* of time they stay open rises as oxygen falls — flow is regulated by duty cycle, not just calibre.',
    '**Reactive and active hyperaemia are the two experiments that prove local control.** **Reactive hyperaemia**: occlude an artery, and on release flow overshoots several-fold and repays the oxygen debt — metabolites accumulated during the block. **Active hyperaemia**: flow rises the moment a tissue becomes active. Both happen with the nerves cut, which is the point — they are intrinsic to the tissue.',
    '**Autoregulation keeps flow nearly constant despite changing pressure, by two mechanisms.** The **metabolic** mechanism: a pressure rise over-delivers oxygen, washes out vasodilators, so the arteriole constricts. The **myogenic** mechanism: stretch of vascular smooth muscle by raised pressure directly opens stretch-activated **Ca²⁺** entry and provokes contraction. Together they hold flow roughly flat between about **70 and 175 mmHg**, which is exactly what [[ghp-hemodynamics-pressure-flow-resistance]] predicts must require a change in resistance.',
    '**Two tissues break the rules, and both are exam favourites.** The **kidney** adds **tubuloglomerular feedback** — the macula densa senses distal NaCl and adjusts afferent arteriolar tone. The **brain** responds mainly to **CO₂ and H⁺** rather than oxygen, so hypercapnia is a potent cerebral vasodilator. Skin is the third exception: its flow serves **thermoregulation**, not its own metabolism, so it is driven by sympathetic tone as in [[ghp-vasomotor-centre-sympathetic-control]].',
  ],

  mechanism: {
    title: 'Tissue need sets its own flow',
    steps: [
      { id: 's1', label: 'Metabolic rate rises, or arterial O₂ delivery falls', emphasis: 'key' },
      { id: 's2', label: 'Adenosine, CO₂, H⁺, K⁺, lactate accumulate in the interstitium' },
      { id: 's3', label: 'Falling PO₂ also removes the O₂ that smooth muscle needs to hold tone' },
      { id: 's4', label: 'Arterioles dilate; precapillary sphincters stay open a greater fraction of the time', emphasis: 'key' },
      { id: 's5', label: 'Flow rises, metabolites wash out, PO₂ recovers' },
      { id: 's6', label: 'Stimulus removed → tone returns: negative feedback matches flow to need', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Limb flushes and flow overshoots after a cuff is released', mechanism: 'Reactive hyperaemia from metabolites accumulated during occlusion', significance: 'key' },
    { sign: 'Exercising muscle blood flow rises many-fold within seconds', mechanism: 'Active hyperaemia driven by locally released vasodilator metabolites', significance: 'key' },
    { sign: 'Flow stays near-constant while perfusion pressure varies widely', mechanism: 'Metabolic washout plus myogenic stretch-induced constriction', significance: 'key' },
    { sign: 'Cerebral vessels dilate during hypercapnia', mechanism: 'Brain arterioles respond chiefly to CO₂ and H⁺ rather than O₂', significance: 'supportive' },
    { sign: 'Local control persists in a denervated or transplanted organ', mechanism: 'The mechanism is intrinsic to the tissue, not neural', significance: 'key' },
  ],

  investigations: [
    { clue: 'Flow–pressure curve with a broad flat segment', meaning: 'Intact autoregulation across that pressure range' },
    { clue: 'Post-occlusion flow overshoot proportional to occlusion time', meaning: 'Metabolite accumulation scales with the oxygen debt incurred' },
    { clue: 'Rising venous lactate and falling venous O₂ saturation in a working bed', meaning: 'Extraction has increased because flow has not yet matched demand' },
    { clue: 'Loss of the autoregulatory plateau in chronic hypertension', meaning: 'The curve has shifted rightward, raising the lower limit of tolerated pressure' },
    { clue: 'Cerebral flow tracking arterial PCO₂ almost linearly', meaning: 'CO₂-dominant control characteristic of the cerebral circulation' },
  ],

  treatment: [
    {
      logic: 'Restore perfusion pressure before blaming the local vessels',
      detail: 'Autoregulation only defends flow **within** its range; below roughly **70 mmHg** the arterioles are already maximally dilated and flow falls with pressure. Correcting systemic pressure — the concern of [[ghp-renal-body-fluid-pressure-control]] — is what restores flow at that point.',
    },
    {
      logic: 'In chronic hypertension, lower pressure gradually',
      detail: 'The autoregulatory range **shifts rightward** with sustained hypertension, so a pressure that is normal for others can sit **below** this patient’s lower limit and cause hypoperfusion. Gradual reduction lets the range shift back.',
    },
  ],

  mnemonics: [
    { hook: 'A CHecK for dilators: Adenosine, CO₂, H⁺, K⁺', expansion: ['All rise with metabolism', 'All diffuse to arterioles', 'All relax smooth muscle', 'All wash out once flow rises'] },
    { hook: 'Metabolic washes, myogenic stretches', expansion: ['Metabolic: pressure ↑ → dilators washed out → constrict', 'Myogenic: pressure ↑ → wall stretched → Ca²⁺ entry → constrict'] },
  ],

  traps: [
    {
      questionCategory: 'What actually drives exercise hyperaemia',
      wrongInstinct: 'Sympathetic vasodilator nerves open the muscle vessels',
      rightAnswer: 'Locally released metabolites dilate the arterioles — it occurs in denervated muscle',
      why: 'Local control is intrinsic; neural traffic modulates it but is not required',
    },
    {
      questionCategory: 'Which stimulus the brain responds to',
      wrongInstinct: 'Cerebral vessels dilate mainly to falling oxygen, like everywhere else',
      rightAnswer: 'Cerebral arterioles are governed chiefly by CO₂ and H⁺',
      why: 'It is why hyperventilation lowers intracranial pressure and hypoventilation raises it',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An arterial cuff is inflated on a forearm for five minutes. On release, flow briefly rises to several times baseline. What is the mechanism?',
      options: [
        { id: 'a', text: 'Reflex sympathetic withdrawal triggered by the cuff' },
        { id: 'b', text: 'Accumulated vasodilator metabolites and tissue hypoxia during occlusion' },
        { id: 'c', text: 'Increased cardiac output on release of the obstruction' },
        { id: 'd', text: 'Myogenic contraction of the arterioles' },
      ],
      answerId: 'b',
      explanation: 'This is reactive hyperaemia. During occlusion adenosine, CO₂, H⁺ and K⁺ accumulate while PO₂ falls, so the arterioles are maximally dilated when flow is restored; the overshoot repays the oxygen debt and subsides as metabolites wash out.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Perfusion pressure to an organ is raised from 100 to 140 mmHg, yet measured flow barely changes. Which pair of mechanisms best explains this?',
      options: [
        { id: 'a', text: 'Baroreceptor reflex and vagal withdrawal' },
        { id: 'b', text: 'Increased capillary recruitment and lymphatic drainage' },
        { id: 'c', text: 'Metabolic washout of vasodilators and myogenic stretch-induced constriction' },
        { id: 'd', text: 'Angiogenesis and collateral vessel opening' },
      ],
      answerId: 'c',
      explanation: 'Autoregulation. The pressure rise over-delivers oxygen and washes out vasodilator metabolites, while stretch of vascular smooth muscle directly triggers Ca²⁺ entry and contraction. Both raise resistance so flow stays near-constant.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which local stimulus is the dominant regulator of cerebral arteriolar tone?',
      options: [
        { id: 'a', text: 'Carbon dioxide and hydrogen ion concentration' },
        { id: 'b', text: 'Tissue oxygen tension alone' },
        { id: 'c', text: 'Circulating angiotensin II' },
        { id: 'd', text: 'Sympathetic alpha-adrenergic tone' },
      ],
      answerId: 'a',
      explanation: 'The brain is the classic exception: its arterioles track CO₂ and H⁺ far more than oxygen. This underlies the fall in cerebral blood flow with hyperventilation and the rise with hypoventilation.',
      tests: 'mechanism',
    },
  ],
};

export default ghpLocalBloodFlowAutoregulation;
