import type { Lecture } from '../../lib/types';

export const ghpCoronaryCirculationIschaemia: Lecture = {
  id: 'ghp-coronary-circulation-ischaemia',
  title: 'Coronary Circulation & Myocardial Ischaemia',
  system: 'cardiovascular',
  source: 'Ch 21 — Muscle & Coronary Blood Flow; Ischemic Heart Disease',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 21 Muscle & Coronary Flow' },
    { kind: 'mechanism', label: 'Diastolic perfusion' },
    { kind: 'exam', label: 'Extraction · reserve' },
  ],

  highYield: [
    '**The left ventricle is perfused in diastole, and that single fact drives most coronary pathophysiology.** During systole the intramuscular vessels are **compressed** by ventricular wall tension, so left coronary flow **falls to near zero** and then surges in diastole. The **right** ventricle, generating far lower pressure, is perfused throughout the cycle. Anything that shortens diastole — chiefly **tachycardia** — cuts left ventricular perfusion time.',
    '**The subendocardium is the most vulnerable layer of the heart.** It is squeezed hardest during systole and sits furthest from the epicardial vessels, so it is the **first to become ischaemic** and the site of subendocardial infarction. It compensates with a denser capillary plexus, but that reserve is spent early.',
    '**The heart already extracts near-maximal oxygen at rest, so it cannot meet demand by extracting more.** Coronary sinus blood is roughly **30% saturated** — extraction is about **70%** at rest, against ~25% for the body as a whole. Because that lever is nearly exhausted, **increased demand must be met almost entirely by increased flow**, which is why coronary flow reserve is the quantity that matters clinically.',
    '**Local metabolic control dominates, and adenosine is the classic mediator.** Coronary flow tracks **myocardial oxygen consumption** almost linearly. Falling myocardial PO₂ liberates **adenosine**, along with K⁺, H⁺ and CO₂, dilating the arterioles — the same metabolic logic as [[ghp-local-blood-flow-autoregulation]], but with unusually tight coupling because extraction cannot rise.',
    '**Autonomic effects on the coronaries are mostly indirect, and this is a favourite trap.** Sympathetic stimulation raises rate and contractility, so metabolic demand rises and the vessels dilate — **despite** direct α-mediated constriction. The **net** effect of sympathetic activation is increased coronary flow, driven by metabolism overriding the direct neural signal. Coronary vessels do carry both **α** (constrictor, epicardial) and **β₂** (dilator, intramuscular) receptors.',
    '**Perfusion depends on the pressure gradient across diastole, not on mean arterial pressure alone.** Effective driving pressure is roughly **aortic diastolic pressure minus left ventricular end-diastolic pressure**. So a rise in **LVEDP** — as in failure, described in [[ghp-decompensated-failure-oedema]] — or a fall in diastolic pressure, as in aortic regurgitation, both impair perfusion even with a normal mean pressure.',
  ],

  mechanism: {
    title: 'Why the heart lives on diastole',
    steps: [
      { id: 's1', label: 'Systolic wall tension compresses intramuscular coronary vessels', emphasis: 'key' },
      { id: 's2', label: 'Left coronary flow falls to near zero in systole, surges in diastole', emphasis: 'key' },
      { id: 's3', label: 'Driving pressure ≈ aortic diastolic pressure − LVEDP' },
      { id: 's4', label: 'Resting extraction already ~70% → demand must be met by flow, not extraction', emphasis: 'key' },
      { id: 's5', label: 'Rising demand lowers myocardial PO₂ → adenosine, K⁺, H⁺ released → arterioles dilate' },
      { id: 's6', label: 'Tachycardia shortens diastole → perfusion time falls as demand rises', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Angina provoked by exertion and relieved by rest', mechanism: 'Demand exceeds the flow the stenosed vessel can deliver', significance: 'key' },
    { sign: 'Ischaemia appears first in the subendocardium', mechanism: 'Greatest systolic compression and furthest from epicardial supply', significance: 'key' },
    { sign: 'Tachycardia precipitates ischaemia in coronary disease', mechanism: 'Shortened diastole reduces perfusion time while raising demand', significance: 'key' },
    { sign: 'Angina in severe aortic stenosis with normal coronary arteries', mechanism: 'Hypertrophied muscle raises demand while raised LVEDP lowers driving pressure', significance: 'key' },
    { sign: 'Wide pulse pressure with low diastolic pressure and angina', mechanism: 'Aortic regurgitation reduces the diastolic perfusion gradient', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Coronary sinus oxygen saturation around 30% at rest', meaning: 'Near-maximal resting extraction — reserve depends on flow' },
    { clue: 'Normal resting perfusion with a reversible defect on stress imaging', meaning: 'Preserved resting flow but exhausted coronary flow reserve' },
    { clue: 'ST depression appearing as heart rate rises on exercise testing', meaning: 'Subendocardial ischaemia from shortened diastolic perfusion time' },
    { clue: 'Raised left ventricular end-diastolic pressure', meaning: 'Reduced effective coronary driving pressure despite normal mean arterial pressure' },
    { clue: 'Fractional flow reserve reduced across a stenosis', meaning: 'The lesion is functionally limiting, not merely anatomically present' },
  ],

  treatment: [
    {
      logic: 'Slow the heart to buy diastolic perfusion time',
      detail: 'Rate reduction lengthens **diastole**, which simultaneously **raises supply** and **lowers demand** — a rare intervention that helps both sides of the balance at once. This is why heart rate is the first lever in stable angina.',
    },
    {
      logic: 'Reduce wall tension rather than chase vasodilation alone',
      detail: 'Lowering preload reduces **LVEDP**, widening the aortic-diastolic-to-LVEDP gradient that actually drives perfusion. Dilating an already maximally dilated arteriole downstream of a fixed stenosis achieves little — the same reserve logic that governs [[coronary-circulation]].',
    },
  ],

  mnemonics: [
    { hook: 'The left heart drinks in diastole', expansion: ['Systole compresses and stops left coronary flow', 'Diastole is when perfusion happens', 'Tachycardia steals diastole'] },
    { hook: 'Extraction maxed → only flow can rise', expansion: ['~70% extraction at rest', 'Coronary sinus ~30% saturated', 'So reserve = flow reserve'] },
  ],

  traps: [
    {
      questionCategory: 'Net autonomic effect on coronary flow',
      wrongInstinct: 'Sympathetic stimulation constricts coronaries because they carry α receptors',
      rightAnswer: 'Net coronary flow rises, because increased metabolic demand dominates the direct α effect',
      why: 'Metabolic control overrides neural control in the coronary bed',
    },
    {
      questionCategory: 'How the heart meets rising demand',
      wrongInstinct: 'It extracts more oxygen from the blood, as other tissues do',
      rightAnswer: 'It must increase flow, because resting extraction is already near-maximal',
      why: 'Coronary sinus saturation is already ~30%, leaving little extraction reserve',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with coronary stenosis develops chest pain whenever heart rate rises. Which mechanism best explains why tachycardia is so poorly tolerated?',
      options: [
        { id: 'a', text: 'Tachycardia lowers mean arterial pressure below the autoregulatory range' },
        { id: 'b', text: 'Diastole shortens, cutting perfusion time while myocardial demand rises' },
        { id: 'c', text: 'Oxygen extraction falls at higher heart rates' },
        { id: 'd', text: 'Sympathetic α-constriction directly closes the coronary arteries' },
      ],
      answerId: 'b',
      explanation: 'The left ventricle is perfused almost entirely in diastole. Tachycardia shortens diastole disproportionately, so supply falls exactly when demand is rising — the central reason rate control helps angina.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Coronary sinus blood is about 30% saturated at rest. What is the main physiological consequence?',
      options: [
        { id: 'a', text: 'The myocardium can meet extra demand largely by extracting more oxygen' },
        { id: 'b', text: 'The myocardium must meet extra demand almost entirely by increasing flow' },
        { id: 'c', text: 'The myocardium relies on anaerobic metabolism at rest' },
        { id: 'd', text: 'Coronary flow is independent of myocardial oxygen consumption' },
      ],
      answerId: 'b',
      explanation: 'Resting extraction is already ~70%, far above the ~25% whole-body figure, so there is little extraction reserve. Increased demand must be matched by increased flow, which is why coronary flow reserve is the clinically decisive quantity.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient with severe aortic stenosis reports exertional angina, yet coronary angiography is normal. What best accounts for the ischaemia?',
      options: [
        { id: 'a', text: 'Coronary vasospasm triggered by exercise' },
        { id: 'b', text: 'Hypertrophy raising demand while raised LVEDP lowers coronary driving pressure' },
        { id: 'c', text: 'Reduced oxygen-carrying capacity of the blood' },
        { id: 'd', text: 'Loss of metabolic autoregulation in the coronary bed' },
      ],
      answerId: 'b',
      explanation: 'Effective perfusion pressure is roughly aortic diastolic pressure minus LVEDP. Hypertrophied muscle raises oxygen demand while the raised end-diastolic pressure narrows the driving gradient, so ischaemia occurs with anatomically normal arteries.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCoronaryCirculationIschaemia;
