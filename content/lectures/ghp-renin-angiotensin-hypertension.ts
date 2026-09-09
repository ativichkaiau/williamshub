import type { Lecture } from '../../lib/types';

export const ghpReninAngiotensinHypertension: Lecture = {
  id: 'ghp-renin-angiotensin-hypertension',
  title: 'Renin–Angiotensin System & Hypertension',
  system: 'cardiovascular',
  source: 'Ch 19 — Dominant Role of the Kidney in Long-Term Blood Pressure Control',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 19 Kidney & Long-Term Blood Pressure' },
    { kind: 'mechanism', label: 'Renin to angiotensin II to aldosterone' },
    { kind: 'exam', label: 'Goldblatt kidney vs essential hypertension' },
  ],

  highYield: [
    '**Renin is an enzyme, not a vasoconstrictor** — this is the commonest single error. It is stored in the **juxtaglomerular cells of the afferent arteriole** and released by three stimuli: **falling renal perfusion pressure**, **reduced NaCl delivery to the macula densa**, and **renal sympathetic stimulation via beta-1 receptors**. Once released it cleaves the liver-derived α2-globulin **angiotensinogen** to **angiotensin I** (10 amino acids, only weakly active), and **ACE** — chiefly on **pulmonary capillary endothelium** — strips two more residues to give **angiotensin II** (8 amino acids) within seconds. Angiotensin II has a half-life of only **1–2 minutes** before angiotensinases destroy it.',
    '**Angiotensin II raises pressure by two routes with completely different time courses, and the exam wants the slower one.** (1) **Rapid: direct vasoconstriction**, far more arteriolar than venous, so total peripheral resistance climbs within minutes. (2) **Slower but far more powerful: it makes the kidney retain salt and water** — direct stimulation of proximal tubular Na reabsorption, **constriction of the efferent arteriole** (which lowers renal blood flow, raises filtration fraction and peritubular oncotic pressure, and so increases reabsorption), plus stimulation of **aldosterone** from the zona glomerulosa acting on the distal tubule and collecting duct. It also drives **thirst** and **ADH** release. The renal effect is what **shifts the renal function curve to the right** — and that, not the vasoconstriction, is how it sets chronic pressure.',
    '**The system exists to make you salt-tolerant.** With it intact, salt intake can vary many-fold with almost no change in pressure: high salt suppresses renin and angiotensin II, so pressure natriuresis is unopposed; low salt raises them, so salt is retained. **Fix angiotensin II at a constant level — by blocking it or by infusing it — and salt sensitivity appears immediately.** In acute haemorrhage the same system matters: with the renin-angiotensin system blocked, pressure falls roughly twice as far as it otherwise would.',
    '**Goldblatt hypertension shows renin-dependence turning into volume-dependence.** In the **one-kidney** Goldblatt model (clamp one renal artery, remove the other), renin and angiotensin II surge for a day or so, then **fall back toward normal as retained salt and water take over** — early renin-dependent, late volume-dependent. In the **two-kidney** model (clamp one artery, leave the other intact), the untouched kidney keeps excreting the retained load, so volume never expands much and **renin stays persistently high** — a genuinely renin-dependent hypertension. The clinical counterpart is **renal artery stenosis**; a **renin-secreting juxtaglomerular tumour** gives the same biochemistry (high renin, high aldosterone, **hypokalaemia**, hypertension). Note the pitfall: **ACE inhibitors or ARBs in bilateral renal artery stenosis precipitate acute kidney injury**, because efferent constriction is the only thing sustaining GFR.',
    '**Primary (essential) hypertension is 90–95% of all hypertension, and its unifying defect is renal.** Cardiac output is often near normal while **total peripheral resistance is raised**, but the constant finding is a **renal function curve shifted to the right**, so a normal salt load can only be excreted at an elevated pressure. Roughly half of patients are **salt-sensitive** (flattened curve). **Excess weight is the largest single attributable risk**, acting through raised cardiac output, increased **renal sympathetic** activity, increased RAAS activity and physical compression of the kidneys by visceral and perirenal fat.',
    '**Therapy is judged by one question: does it move the renal function curve back to the left?** **Diuretics** raise excretion at any given pressure; **ACE inhibitors, ARBs and aldosterone antagonists** remove the angiotensin-driven rightward shift; **sympatholytics and vasodilators** lower renal vascular resistance. Untreated, the lethal consequences are **heart failure and coronary disease**, **stroke or intracerebral haemorrhage**, and **progressive renal failure** — with a MAP of 150 mmHg or more, life expectancy falls by years.',
  ],

  mechanism: {
    title: 'Renin is an enzyme that generates a hormone whose lasting effect is renal salt retention, not vasoconstriction',
    steps: [
      { id: 's1', label: 'Low renal perfusion, low macula densa NaCl or beta-1 sympathetic drive → juxtaglomerular cells release renin', emphasis: 'key' },
      { id: 's2', label: 'Renin cleaves angiotensinogen → angiotensin I (weak)' },
      { id: 's3', label: 'ACE on pulmonary endothelium → angiotensin II within seconds; half-life 1–2 min' },
      { id: 's4', label: 'Fast arm: arteriolar vasoconstriction → total peripheral resistance rises' },
      { id: 's5', label: 'Slow arm: tubular Na reabsorption + efferent constriction + aldosterone → salt and water retained', emphasis: 'key' },
      { id: 's6', label: 'Renal function curve shifts RIGHT → equilibrium pressure resets upward', emphasis: 'key' },
      { id: 's7', label: 'Sustained rightward shift with normal salt intake = hypertension and its end-organ damage', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypertension with high plasma renin, high aldosterone and hypokalaemia', mechanism: 'Renin-driven aldosterone excess — renal artery stenosis or a renin-secreting juxtaglomerular tumour', significance: 'key' },
    { sign: 'Renin high for the first day after renal artery clamping, then falling toward normal while pressure stays up', mechanism: 'One-kidney Goldblatt hypertension converting from renin-dependent to volume-dependent', significance: 'key' },
    { sign: 'Persistently elevated renin when one renal artery is clamped and the other kidney is intact', mechanism: 'Two-kidney Goldblatt — the normal kidney excretes the retained load, so volume expansion never suppresses renin', significance: 'key' },
    { sign: 'Creatinine rises sharply after starting an ACE inhibitor in a patient with bilateral renal artery stenosis', mechanism: 'Angiotensin II mediated efferent arteriolar constriction was the only support for glomerular filtration pressure', significance: 'key' },
    { sign: 'Blood pressure becomes markedly salt-sensitive when angiotensin II is held at a fixed level', mechanism: 'Loss of the normal reciprocal suppression and stimulation of angiotensin II by salt intake', significance: 'supportive' },
    { sign: 'Established essential hypertension with normal cardiac output but raised total peripheral resistance', mechanism: 'A rightward-shifted renal function curve plus autoregulatory vasoconstriction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'An enzyme released by juxtaglomerular cells of the afferent arteriole', meaning: 'Renin — it initiates the cascade but has no direct vascular action of its own' },
    { clue: 'Conversion occurring chiefly across the pulmonary circulation', meaning: 'Angiotensin-converting enzyme on lung capillary endothelium generating angiotensin II' },
    { clue: 'Efferent arteriolar constriction with a rising filtration fraction', meaning: 'Angiotensin II preserving GFR while increasing proximal tubular reabsorption' },
    { clue: 'High renin with high aldosterone and low potassium', meaning: 'Secondary hyperaldosteronism — renovascular disease or a reninoma, not primary aldosteronism (where renin is low)' },
    { clue: 'A renal function curve displaced to the right at normal salt intake', meaning: 'The final common pathway of essential hypertension, whatever the initiating cause' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Angiotensin II is the **hormonal lever on the renal function curve** — it is the mechanism by which almost every secondary hypertension acts on the system described in [[ghp-renal-body-fluid-pressure-control]]. Its fast vasoconstrictor arm reinforces the neural response in [[ghp-vasomotor-centre-sympathetic-control]] and is a major reason pressure holds up in [[ghp-shock-stages-haemorrhagic]]. Its efferent-arteriolar action is also the humoral counterpart to [[ghp-humoral-endothelial-control]].' },
    { logic: 'Where it shows up clinically', detail: 'Renovascular hypertension, the acute kidney injury caused by blocking the axis in bilateral stenosis, primary versus secondary hyperaldosteronism, and the rationale for **ACE inhibitors, ARBs, aldosterone antagonists and diuretics** all follow from this one cascade. Course cross-links: [[renal-artery-stenosis]], [[long-term-bp-raas]], [[htn-diuretics-raas]], [[renal-endocrine-functions]].' },
  ],

  mnemonics: [
    { hook: 'Renin is a KNIFE, angiotensin II is the WEAPON, aldosterone is the SPONGE', expansion: ['Renin cuts angiotensinogen — an enzyme, never a vasoconstrictor', 'Angiotensin II constricts arterioles fast', 'Aldosterone soaks up sodium slowly, and slow wins long-term'] },
    { hook: 'Three triggers for renin: LOW pressure, LOW salt at the macula densa, HIGH sympathetic', expansion: ['Renal perfusion pressure falls', 'NaCl delivery to macula densa falls', 'Beta-1 stimulation of juxtaglomerular cells'] },
    { hook: 'ONE-kidney Goldblatt goes volume; TWO-kidney Goldblatt stays renin', expansion: ['One kidney: no escape route for salt, so volume expands and renin falls back', 'Two kidneys: the healthy one excretes the load, so renin stays high', 'Both are cured by relieving the stenosis'] },
  ],

  traps: [
    {
      questionCategory: 'What renin actually does',
      wrongInstinct: 'Renin is a potent vasoconstrictor hormone released by the kidney',
      rightAnswer: 'Renin is a proteolytic enzyme; the vasoconstrictor is angiotensin II, two steps downstream',
      why: 'Renin has no direct vascular action at all — its entire effect depends on angiotensinogen being available to cleave.',
    },
    {
      questionCategory: 'How angiotensin II sustains chronic hypertension',
      wrongInstinct: 'Chronically raised pressure is maintained by the direct vasoconstrictor action of angiotensin II',
      rightAnswer: 'It is maintained by the renal action — salt and water retention that shifts the renal function curve rightward',
      why: 'Vasoconstriction alone would be defeated by pressure natriuresis; only a shifted renal curve can hold pressure up indefinitely.',
    },
    {
      questionCategory: 'Interpreting renin in a hypertensive patient',
      wrongInstinct: 'High aldosterone with hypertension and hypokalaemia means primary aldosteronism',
      rightAnswer: 'Check the renin — high renin points to renovascular disease or a renin-secreting tumour; primary aldosteronism has SUPPRESSED renin',
      why: 'Renin is the discriminator between a secondary drive on the adrenal and an autonomous adrenal lesion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In an experimental animal, angiotensin II is infused at a fixed rate that prevents any physiological variation in its level, while renal function and salt intake are manipulated. Compared with a control animal, what is the most striking finding?',
      options: [
        { id: 'a', text: 'Arterial pressure becomes far more sensitive to changes in salt intake' },
        { id: 'b', text: 'Arterial pressure becomes completely independent of salt intake' },
        { id: 'c', text: 'The baroreceptor reflex no longer resets' },
        { id: 'd', text: 'Renal blood flow rises because of efferent arteriolar dilation' },
      ],
      answerId: 'a',
      explanation: 'Normally, high salt suppresses angiotensin II and low salt raises it, which is precisely what buffers pressure against wide swings in salt intake. Fixing angiotensin II removes that reciprocal adjustment, so the renal function curve can no longer move with intake and marked salt sensitivity appears. Angiotensin II constricts the efferent arteriole and lowers renal blood flow, and it has no bearing on baroreceptor resetting.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A renal artery is clamped in a dog whose contralateral kidney is left completely intact. Several weeks later the animal is hypertensive. What is the expected plasma renin activity, and why?',
      options: [
        { id: 'a', text: 'Suppressed, because volume expansion has switched off juxtaglomerular secretion' },
        { id: 'b', text: 'Persistently elevated, because the intact kidney excretes the retained salt and water so volume expansion never suppresses renin from the clamped kidney' },
        { id: 'c', text: 'Normal, because renin returns to baseline within 48 hours in every Goldblatt model' },
        { id: 'd', text: 'Undetectable, because the stenosis prevents renin from reaching the systemic circulation' },
      ],
      answerId: 'b',
      explanation: 'This is the two-kidney Goldblatt model. The clamped kidney senses low perfusion pressure and keeps secreting renin, while the healthy kidney disposes of the retained salt and water, so the volume expansion that would normally suppress renin never develops. In the one-kidney model, by contrast, volume expansion does occur and renin falls back toward normal after the first day or two.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 68-year-old with hypertension and known bilateral renal artery stenosis is started on an ACE inhibitor. Serum creatinine rises sharply within a week. What is the mechanism?',
      options: [
        { id: 'a', text: 'Direct tubular toxicity of the ACE inhibitor' },
        { id: 'b', text: 'Loss of angiotensin II mediated efferent arteriolar constriction, which had been maintaining glomerular filtration pressure behind the stenoses' },
        { id: 'c', text: 'Excessive aldosterone causing sodium retention and glomerular congestion' },
        { id: 'd', text: 'Afferent arteriolar constriction caused by the drug' },
      ],
      answerId: 'b',
      explanation: 'With reduced perfusion pressure to both kidneys, angiotensin II mediated efferent constriction is what keeps glomerular capillary pressure and GFR adequate. Removing that constriction drops filtration pressure and GFR falls, so creatinine rises. The effect is haemodynamic and usually reversible on stopping the drug, not toxic; ACE inhibition lowers rather than raises aldosterone.',
      tests: 'treatment',
    },
  ],
};

export default ghpReninAngiotensinHypertension;
