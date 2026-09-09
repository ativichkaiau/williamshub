import type { Lecture } from '../../lib/types';

export const ghpRenalAutoregulationTgf: Lecture = {
  id: 'ghp-renal-autoregulation-tgf',
  title: 'Renal Autoregulation & Tubuloglomerular Feedback',
  system: 'renal',
  source: 'Ch 26 — Urine Formation I — Glomerular Filtration & Renal Blood Flow',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 26 Filtration & Renal Blood Flow' },
    { kind: 'mechanism', label: 'Macula densa feedback' },
    { kind: 'exam', label: 'Why GFR stays flat' },
  ],

  highYield: [
    '**The kidney holds GFR and renal blood flow nearly constant between about 75 and 160 mmHg, and it must.** Filtration is **180 L/day** against a reabsorptive machinery that reclaims 99% of it. A small uncontrolled rise in GFR would overwhelm distal reabsorption and cause catastrophic losses — so autoregulation exists to protect **fluid balance**, not to protect the kidney from pressure.',
    '**Tubuloglomerular feedback is the renal-specific mechanism, and the macula densa is the sensor.** The **juxtaglomerular apparatus** places macula densa cells of the early distal tubule against the afferent arteriole of their own glomerulus. They sense **NaCl delivery**: if it rises, that implies GFR is too high for this nephron, and the response corrects it.',
    '**High NaCl at the macula densa constricts the afferent arteriole and suppresses renin — both lower GFR.** The signal is **adenosine** (in contrast to almost everywhere else in the body, where adenosine dilates). Low NaCl does the opposite: it **dilates the afferent** arteriole and **stimulates renin release**, raising GFR and recruiting the system described in [[ghp-renin-angiotensin-hypertension]].',
    '**The myogenic mechanism is the fast, non-specific partner.** Stretch of afferent arteriolar smooth muscle by rising pressure opens stretch-activated **Ca²⁺** channels and provokes contraction within seconds — the same intrinsic response as any vascular bed, described in [[ghp-local-blood-flow-autoregulation]]. Myogenic is quick and crude; tubuloglomerular feedback is slower and nephron-specific.',
    '**Autoregulation is not absolute, and knowing its limits is what gets tested.** Below about **75 mmHg** the afferent arteriole is maximally dilated and GFR falls with pressure — the physiology of prerenal failure. A **high-protein meal** or **hyperglycaemia** raises both renal blood flow and GFR by increasing proximal reabsorption, which lowers distal NaCl delivery and so releases tubuloglomerular restraint — the mechanism of diabetic **hyperfiltration**.',
    '**NSAIDs and ACE inhibitors attack the two arterioles from opposite ends, which is why the combination is dangerous.** Prostaglandins dilate the **afferent** arteriole and are most needed when perfusion is low; NSAIDs remove that. Angiotensin II constricts the **efferent** arteriole; ACE inhibitors remove that. Together, in a hypoperfused kidney, they abolish both compensations at once and precipitate [[acute-kidney-injury]].',
  ],

  mechanism: {
    title: 'Each nephron polices its own filtration rate',
    steps: [
      { id: 's1', label: 'GFR rises → more NaCl reaches the early distal tubule', emphasis: 'key' },
      { id: 's2', label: 'Macula densa cells sense the increased NaCl delivery', emphasis: 'key' },
      { id: 's3', label: 'Adenosine released → afferent arteriole constricts' },
      { id: 's4', label: 'Renin release simultaneously suppressed' },
      { id: 's5', label: 'Glomerular pressure falls → GFR returns toward set point', emphasis: 'key' },
      { id: 's6', label: 'Myogenic stretch response adds a faster, non-specific correction' },
    ],
  },

  examFindings: [
    { sign: 'GFR essentially unchanged as mean pressure varies from 80 to 160 mmHg', mechanism: 'Combined myogenic and tubuloglomerular autoregulation', significance: 'key' },
    { sign: 'GFR falls once mean arterial pressure drops below ~75 mmHg', mechanism: 'Afferent arteriole already maximally dilated', significance: 'key' },
    { sign: 'Glomerular hyperfiltration in early diabetes', mechanism: 'Increased proximal glucose-coupled sodium reabsorption lowers distal NaCl, releasing tubuloglomerular restraint', significance: 'key' },
    { sign: 'Acute kidney injury after NSAID plus ACE inhibitor in a dehydrated patient', mechanism: 'Afferent dilation and efferent constriction both abolished', significance: 'key' },
    { sign: 'Rise in GFR after a high-protein meal', mechanism: 'Increased proximal reabsorption reduces macula densa NaCl signal', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Flat GFR across a wide range of perfusion pressures', meaning: 'Intact autoregulation' },
    { clue: 'Raised GFR with normal or raised renal plasma flow in early diabetes', meaning: 'Hyperfiltration from suppressed tubuloglomerular feedback' },
    { clue: 'Creatinine rising after NSAID introduction in heart failure', meaning: 'Loss of prostaglandin-dependent afferent dilation' },
    { clue: 'High renin with low distal sodium delivery', meaning: 'Macula densa signalling volume depletion' },
    { clue: 'Fractional excretion of sodium below 1% with oliguria', meaning: 'Prerenal physiology with intact tubular avidity' },
  ],

  treatment: [
    {
      logic: 'Restore perfusion pressure before reaching for diuretics in oliguria',
      detail: 'Below the autoregulatory range the afferent arteriole has no dilation left, so GFR tracks pressure directly. Volume and pressure restoration is the intervention; diuresis at that point worsens the very hypoperfusion causing the oliguria.',
    },
    {
      logic: 'Avoid removing both arteriolar compensations at once',
      detail: 'In any hypoperfused kidney, **NSAIDs** remove afferent dilation and **ACE inhibitors** remove efferent constriction. Each alone is often tolerated; together — the classic “triple whammy” with a diuretic — they reliably precipitate injury.',
    },
  ],

  mnemonics: [
    { hook: 'Macula densa: salty means slow down', expansion: ['High NaCl → adenosine → afferent constricts', 'High NaCl → renin suppressed', 'Low NaCl → afferent dilates and renin released'] },
    { hook: 'Adenosine is backwards in the kidney', expansion: ['Everywhere else: vasodilator', 'Renal afferent arteriole: vasoconstrictor'] },
  ],

  traps: [
    {
      questionCategory: 'What adenosine does at the afferent arteriole',
      wrongInstinct: 'Adenosine dilates, as it does in the coronary and skeletal muscle beds',
      rightAnswer: 'At the renal afferent arteriole adenosine constricts, lowering GFR',
      why: 'It is the mediator of tubuloglomerular feedback, whose purpose is to reduce filtration',
    },
    {
      questionCategory: 'Purpose of renal autoregulation',
      wrongInstinct: 'It exists to protect the glomerulus from high pressure',
      rightAnswer: 'Its main purpose is to keep GFR stable so distal reabsorption is not overwhelmed',
      why: 'With 180 L filtered daily, small GFR swings would produce enormous fluid and solute losses',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Increased sodium chloride delivery to the macula densa produces which response?',
      options: [
        { id: 'a', text: 'Afferent arteriolar dilation and increased renin release' },
        { id: 'b', text: 'Afferent arteriolar constriction and decreased renin release' },
        { id: 'c', text: 'Efferent arteriolar dilation with unchanged renin' },
        { id: 'd', text: 'No vascular response; only tubular transport changes' },
      ],
      answerId: 'b',
      explanation: 'High distal NaCl signals that this nephron is filtering too fast. Adenosine constricts the afferent arteriole and renin release is suppressed, both of which lower glomerular pressure and return GFR toward its set point.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A dehydrated patient on an ACE inhibitor is given an NSAID and develops acute kidney injury. What is the mechanism?',
      options: [
        { id: 'a', text: 'Direct tubular toxicity from both drugs' },
        { id: 'b', text: 'Loss of prostaglandin-mediated afferent dilation together with loss of angiotensin-mediated efferent constriction' },
        { id: 'c', text: 'Obstruction raising Bowman capsule pressure' },
        { id: 'd', text: 'Immune-mediated glomerular injury' },
      ],
      answerId: 'b',
      explanation: 'In hypoperfusion the kidney defends GFR by dilating the afferent arteriole with prostaglandins and constricting the efferent with angiotensin II. NSAIDs abolish the first and ACE inhibitors the second, so both compensations are lost simultaneously.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Which mechanism best explains glomerular hyperfiltration in early diabetes mellitus?',
      options: [
        { id: 'a', text: 'Increased Bowman capsule pressure' },
        { id: 'b', text: 'Enhanced proximal sodium-glucose reabsorption reducing distal NaCl delivery and releasing tubuloglomerular feedback' },
        { id: 'c', text: 'Reduced filtration coefficient' },
        { id: 'd', text: 'Afferent arteriolar constriction' },
      ],
      answerId: 'b',
      explanation: 'Filtered glucose is reabsorbed proximally with sodium, so less NaCl reaches the macula densa. The nephron reads this as under-filtration, dilates the afferent arteriole and releases renin, raising GFR — the basis of diabetic hyperfiltration.',
      tests: 'mechanism',
    },
  ],
};

export default ghpRenalAutoregulationTgf;
