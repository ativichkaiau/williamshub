import type { Lecture } from '../../lib/types';

export const ghpShockStagesHaemorrhagic: Lecture = {
  id: 'ghp-shock-stages-haemorrhagic',
  title: 'Circulatory Shock: Stages & Haemorrhagic Shock',
  system: 'cardiovascular',
  source: 'Ch 24 — Circulatory Shock & Its Treatment',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 24 Circulatory Shock' },
    { kind: 'mechanism', label: 'Compensation then vicious cycle' },
    { kind: 'exam', label: 'Percent blood loss vs pressure' },
  ],

  highYield: [
    '**Shock is defined by PERFUSION, not by pressure and not by cardiac output.** It is **generalised inadequate blood flow relative to tissue demand**, so that delivery of oxygen and substrate fails and cells begin to be damaged. The trap follows directly: shock can exist with a **normal or even raised cardiac output** — in **septic shock, beriberi, thyrotoxicosis and large arteriovenous fistulae**, output is high but flow is **maldistributed** (shunted past exchange vessels) or the cells cannot use the oxygen delivered. Equally, a young trauma patient can have a **normal blood pressure and already be in shock**, because reflex vasoconstriction defends pressure long after flow has fallen.',
    '**Every low-output cause is one of two things: a bad pump, or bad venous return.** **Cardiogenic** = the heart cannot eject (infarction, arrhythmia, valve failure, tamponade). **Decreased venous return** = either **too little blood** (haemorrhage, plasma loss in burns, dehydration), **too much container** (loss of vasomotor tone — neurogenic, anaphylactic), or **obstruction** to flow. Venous return is the far more common route, which is why **mean systemic filling pressure** is the quantity that actually collapses.',
    '**Learn the haemorrhage numbers — this is the classic graph question.** Removing about **10% of blood volume produces essentially no fall in arterial pressure or cardiac output**: the reflexes absorb it completely. Between roughly **10% and 20–25%** cardiac output falls **before and further than** arterial pressure, because vasoconstriction defends pressure at the cost of flow — a **plateau of normal pressure sitting on a falling output** is the fingerprint of compensated shock. Beyond about **35–45%** loss, both fall toward zero and death follows without treatment; around **50%** is almost uniformly fatal.',
    '**Three stages, and the middle one is where treatment decides the outcome.** **(1) Nonprogressive / compensated** — reflexes are strong enough that the patient recovers with no therapy. **(2) Progressive** — shock now **causes more shock** through positive feedback; recovery needs outside intervention. **(3) Irreversible** — cellular injury has gone so far that **no therapy works**: transfusion raises cardiac output briefly, then it falls again and the patient dies. The irreversible boundary is largely **cellular ATP depletion** — ATP is degraded through adenosine to **uric acid**, which is lost from the cell and cannot be salvaged, so restoring flow no longer restores function.',
    '**The compensatory set, in order of speed.** **Seconds:** the **baroreceptor reflex** — arteriolar constriction (sparing coronary and cerebral beds), venoconstriction, tachycardia and increased contractility. **Below a mean pressure of about 50 mmHg** the **CNS ischaemic response** takes over: brainstem ischaemia produces the **most powerful sympathetic discharge in the body**, maximal near **15–20 mmHg** — the last-ditch defence, not an everyday reflex. **Minutes:** falling capillary hydrostatic pressure tips the Starling balance so **interstitial fluid is reabsorbed into the capillaries** (an internal autotransfusion of up to a litre or more), aided by **reverse stress-relaxation** of vessels shrinking around the smaller volume. **Minutes to hours:** **angiotensin II**, **vasopressin** and adrenal **catecholamines** constrict and conserve; **aldosterone**, ADH and **thirst** then restore volume over hours to days.',
    '**Progressive shock is Guyton’s vicious cycle in the flesh — a positive-feedback loop with a gain above 1.** **Cardiac depression:** low pressure lowers **coronary** flow, weakening the very pump that generates the pressure. **Vasomotor failure:** the medullary centre, at first maximally driven, is finally **depressed and then paralysed** by its own ischaemia — sympathetic tone is lost late. **Microvascular sludging:** stagnant flow plus acidosis agglutinates cells and plugs capillaries; in sepsis this becomes **DIC**. **Capillary leak:** prolonged hypoxia and acidosis raise **permeability**, so plasma escapes and the volume falls again. **Toxins from ischaemic tissue:** histamine, lysosomal enzymes, myocardial depressant factor, and **endotoxin translocated across the ischaemic gut**. Each arrow feeds back into the one before it.',
  ],

  mechanism: {
    title: 'Compensation buys time; when the loop gain exceeds 1, shock feeds itself',
    steps: [
      { id: 's1', label: 'Blood loss or vasodilation → mean systemic filling pressure falls → venous return falls' },
      { id: 's2', label: 'Cardiac output falls first; baroreceptor vasoconstriction defends arterial pressure', emphasis: 'key' },
      { id: 's3', label: 'Below ~50 mmHg the CNS ischaemic response fires — maximal sympathetic discharge', emphasis: 'key' },
      { id: 's4', label: 'Capillary reabsorption, renin–angiotensin, ADH and thirst refill the compartment' },
      { id: 's5', label: 'Compensation outrun: coronary hypoperfusion weakens the pump, vasomotor centre paralyses, capillaries leak and sludge, gut endotoxin escapes', emphasis: 'danger' },
      { id: 's6', label: 'Cellular ATP degraded to uric acid → irreversible: transfusion no longer rescues', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Normal arterial pressure with a clearly reduced cardiac output after 15% blood loss', mechanism: 'Reflex vasoconstriction defends pressure while flow has already fallen', significance: 'key' },
    { sign: 'Cold, pale, clammy peripheries with tachycardia and a narrow pulse pressure', mechanism: 'Maximal sympathetic vasoconstriction plus a small stroke volume', significance: 'key' },
    { sign: 'Oliguria appearing early, before hypotension', mechanism: 'Renal vasoconstriction and angiotensin-driven sodium and water conservation', significance: 'key' },
    { sign: 'Rising blood lactate with a widening base deficit', mechanism: 'Anaerobic metabolism in underperfused tissue — the direct marker of inadequate perfusion', significance: 'key' },
    { sign: 'Transient improvement after transfusion followed by renewed decline', mechanism: 'The hallmark of irreversible shock — cellular energy stores cannot be restored', significance: 'key' },
  ],

  investigations: [
    { clue: 'Arterial pressure normal, cardiac output low, extremities cold', meaning: 'Nonprogressive (compensated) shock — the stage that still self-corrects' },
    { clue: 'Mean arterial pressure below 50 mmHg with an explosive sympathetic response', meaning: 'CNS ischaemic response — a terminal-range defence, not a routine reflex' },
    { clue: 'Falling cardiac output despite an adequate transfusion volume', meaning: 'Progressive shock — a positive-feedback cycle is running' },
    { clue: 'Blood loss of roughly 35 to 45 percent of volume without treatment', meaning: 'The usually lethal range; near 50 percent is almost uniformly fatal' },
    { clue: 'Patchy hepatic necrosis and acute tubular necrosis at post-mortem', meaning: 'End-organ evidence of prolonged progressive shock' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The whole chapter is one idea: shock is a **failure of flow**, and the body defends **pressure** in preference to flow — so a normal blood pressure never excludes it. Read this against the loop that drives it in [[ghp-positive-feedback-control-systems]], the reflex that buys the first seconds in [[ghp-baroreceptor-chemoreceptor-reflexes]], and the last-ditch brainstem defence in [[ghp-cns-ischaemic-response]].' },
    { logic: 'Where the flow actually goes', detail: 'Venous return, not the heart, is what collapses in haemorrhage, so the curves in [[ghp-cardiac-output-venous-return-curves]] and the filling pressure in [[ghp-mean-systemic-filling-pressure]] explain the whole picture. The internal autotransfusion is pure Starling arithmetic — see [[ghp-starling-forces-filtration]]. For the bedside classification and the non-haemorrhagic causes, see [[fcp1-shock-classification]] and [[ghp-shock-types-distributive]].' },
  ],

  mnemonics: [
    { hook: 'Ten, Twenty, Forty', expansion: ['~10% loss — nothing happens, reflexes absorb it', '~20% — cardiac output falls while pressure holds (compensated)', '~35–45% — lethal without treatment; ~50% almost always fatal'] },
    { hook: 'The five vicious Cs of progressive shock', expansion: ['Coronary hypoperfusion → weaker pump', 'Centre (vasomotor) paralysis → tone lost', 'Clogging — sludged blood and microthrombi', 'Capillary leak → volume falls again', 'Contaminants — gut endotoxin and tissue toxins'] },
  ],

  traps: [
    {
      questionCategory: 'What actually defines shock',
      wrongInstinct: 'Shock means hypotension, or shock means a low cardiac output',
      rightAnswer: 'Shock is inadequate tissue perfusion for metabolic need; it occurs with a normal or high cardiac output in sepsis, beriberi, thyrotoxicosis and large arteriovenous fistulae, and with a normal pressure in early compensated haemorrhage',
      why: 'Pressure and output are surrogates; lactate and organ function measure the thing itself.',
    },
    {
      questionCategory: 'Which variable falls first in haemorrhage',
      wrongInstinct: 'Arterial pressure and cardiac output fall together, in step with the volume lost',
      rightAnswer: 'Cardiac output falls first and further; arterial pressure is held near normal until roughly 20–25% has been lost, because total peripheral resistance rises',
      why: 'Pressure equals output times resistance — the reflex trades flow for pressure.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A previously well 22-year-old has lost an estimated 15% of his blood volume. Blood pressure is 118/86, heart rate 112, extremities cool, urine output 15 mL/h. Which statement best describes his circulation?',
      options: [
        { id: 'a', text: 'He is not in shock, because arterial pressure is normal' },
        { id: 'b', text: 'Cardiac output has already fallen; a rise in peripheral resistance is holding pressure up' },
        { id: 'c', text: 'The CNS ischaemic response is the mechanism maintaining his pressure' },
        { id: 'd', text: 'He has entered irreversible shock' },
      ],
      answerId: 'b',
      explanation: 'This is compensated (nonprogressive) shock: baroreceptor-driven vasoconstriction raises total peripheral resistance and narrows the pulse pressure, so mean pressure is defended while flow has already fallen — hence the cool skin and oliguria. Option a mistakes pressure for perfusion. The CNS ischaemic response (c) only fires below a mean pressure of about 50 mmHg. Nothing here suggests the irreversible stage (d).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which finding most specifically indicates that shock has become irreversible rather than merely progressive?',
      options: [
        { id: 'a', text: 'Mean arterial pressure below 50 mmHg' },
        { id: 'b', text: 'Serum lactate of 6 mmol/L' },
        { id: 'c', text: 'Cardiac output rises after transfusion, then falls again despite a restored blood volume' },
        { id: 'd', text: 'Cold, mottled peripheries with anuria' },
      ],
      answerId: 'c',
      explanation: 'Irreversibility is a cellular, not a haemodynamic, statement: adenine nucleotides have been degraded through adenosine to uric acid and lost from the cell, so restoring volume and flow no longer restores function — the classic experimental signature is transient improvement after transfusion followed by renewed decline. Options a, b and d are all severe but describe states that can still be reversed.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Late in prolonged severe haemorrhagic shock, total peripheral resistance is observed to FALL. The best explanation is:',
      options: [
        { id: 'a', text: 'Baroreceptors have reset to the lower pressure' },
        { id: 'b', text: 'Ischaemia of the medullary vasomotor centre has depressed and then paralysed sympathetic outflow' },
        { id: 'c', text: 'Angiotensin II production has increased' },
        { id: 'd', text: 'Reverse stress-relaxation has increased vascular capacity' },
      ],
      answerId: 'b',
      explanation: 'The vasomotor centre is first maximally driven by hypotension, but it is itself perfused tissue: with severe enough and long enough ischaemia it is depressed and finally paralysed, so vasoconstrictor tone is lost and pressure falls further — one of the classic positive-feedback arms of progressive shock. Baroreceptor resetting (a) takes days and would not abolish tone; angiotensin II (c) raises resistance; reverse stress-relaxation (d) is compensatory and shrinks the vasculature around the reduced volume.',
      tests: 'mechanism',
    },
  ],
};

export default ghpShockStagesHaemorrhagic;
