import type { Lecture } from '../../lib/types';

export const ghpVasomotorCentreSympatheticControl: Lecture = {
  id: 'ghp-vasomotor-centre-sympathetic-control',
  title: 'Vasomotor Centre & Sympathetic Control of the Circulation',
  system: 'cardiovascular',
  source: 'Ch 18 — Nervous Regulation of the Circulation & Rapid Control of Arterial Pressure',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 18 Nervous Regulation of the Circulation' },
    { kind: 'mechanism', label: 'Sympathetic vasoconstrictor tone' },
    { kind: 'exam', label: 'Neurogenic shock after spinal block' },
  ],

  highYield: [
    '**The vasomotor centre sits in the reticular substance of the lower pons and upper medulla, and has three functional areas.** The **vasoconstrictor area (C-1)**, bilateral in the anterolateral upper medulla, projects noradrenergic drive down to the **intermediolateral horn** of the cord and out through the sympathetic chain. The **vasodilator area (A-1)**, anterolateral lower medulla, works by **inhibiting C-1** — there is no separate vasodilator outflow to most vessels. The **sensory area (A-2)** is the **nucleus tractus solitarius**, which receives **CN IX and CN X** afferents from baroreceptors and chemoreceptors and then reflexly sets the output of the other two.',
    '**Sympathetic vasoconstrictor tone is continuous, not on-demand.** C-1 fires tonically at roughly **0.5–2 impulses per second**, holding arterioles at about **half-maximal constriction**. This is why vessels can be dilated simply by withdrawing tone. Abolish it — **total spinal anaesthesia, high cord transection, ganglionic blockade** — and mean arterial pressure collapses from ~**100 to ~50 mmHg**: this is **neurogenic (vasomotor) shock**, hypotension with warm dry skin and no compensatory tachycardia.',
    '**One centre controls resistance, capacitance and the heart simultaneously.** Sympathetic fibres constrict **arterioles** (raising **total peripheral resistance**), constrict **veins** (reducing capacitance, raising **mean systemic filling pressure** and therefore venous return), and — from the **medial part of the centre** — drive the heart via **beta-1** receptors to raise rate and contractility. The **lateral/adjacent vagal route** (dorsal motor nucleus and nucleus ambiguus) is reciprocally inhibited. The venous limb is the one students forget, yet it is how sympathetic discharge raises cardiac output rather than merely raising resistance.',
    '**Distribution is deliberately uneven.** Innervation is dense to **kidney, gut, spleen and skin** but sparse to **skeletal muscle, coronary and cerebral** vessels — so a mass discharge shunts blood from expendable beds toward the heart and brain. **Capillaries have no innervation at all**; the fibres end on arterioles, metarterioles and small veins.',
    '**Nervous control is the fast system — its whole value is speed.** Full activation can **double arterial pressure in 5–10 seconds**; complete inhibition drops it toward 50 mmHg in **10–40 seconds**. Compare **hormonal** reinforcement (adrenal medullary adrenaline and noradrenaline, minutes) and the **renal–body fluid** system (hours to days but the only long-term controller). Sympathetic discharge also recruits **skeletal muscle and abdominal wall contraction**, compressing the venous reservoirs and squeezing blood centrally — the **abdominal compression reflex**, worth 10–15 mmHg of filling pressure and the reason a tensed patient tolerates haemorrhage better than a flaccid one.',
    '**Two special outflows are exam favourites.** The **sympathetic vasodilator system** (cholinergic fibres to skeletal muscle, driven from the anterior hypothalamus) produces anticipatory muscle vasodilation in the **alerting/defence reaction** but is **not** what causes exercise hyperaemia — local metabolic control does that. Its pathological cousin is **vasovagal syncope**: emotional stimulus → massive vagal bradycardia plus muscle vasodilation → abrupt fall in pressure and fainting.',
  ],

  mechanism: {
    title: 'Tonic medullary discharge sets arteriolar tone, venous capacitance and cardiac drive within seconds',
    steps: [
      { id: 's1', label: 'Vasoconstrictor area C-1 fires tonically at 0.5–2 impulses/sec', emphasis: 'key' },
      { id: 's2', label: 'Descends to intermediolateral cell column → sympathetic chain → noradrenaline on alpha-1' },
      { id: 's3', label: 'Arteriolar constriction → total peripheral resistance rises' },
      { id: 's4', label: 'Venoconstriction → capacitance falls → mean systemic filling pressure and venous return rise', emphasis: 'key' },
      { id: 's5', label: 'Medial centre drives heart (beta-1) while vagal cardioinhibitory route is withdrawn' },
      { id: 's6', label: 'Arterial pressure can double within 5–10 seconds; loss of tone drops it to ~50 mmHg', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Mean arterial pressure falls from 100 to about 50 mmHg after total spinal anaesthesia or cord transection', mechanism: 'Loss of tonic vasoconstrictor discharge unmasks the true passive tone of the vasculature', significance: 'key' },
    { sign: 'Hypotension with warm, dry, well-perfused skin and no tachycardia (neurogenic shock)', mechanism: 'Both the vasoconstrictor and the cardiac sympathetic outflow are lost, so the usual compensations cannot appear', significance: 'key' },
    { sign: 'Arterial pressure doubles within 5–10 seconds of maximal sympathetic stimulation', mechanism: 'Simultaneous arteriolar constriction, venoconstriction and cardiac stimulation from one centre', significance: 'key' },
    { sign: 'Skin blanching and gut/renal flow falling while cerebral and coronary flow are preserved', mechanism: 'Dense sympathetic innervation of skin, splanchnic and renal beds; sparse innervation of brain and heart', significance: 'supportive' },
    { sign: 'Fainting after emotional shock, with bradycardia rather than tachycardia', mechanism: 'Vasovagal reaction — vagal cardioinhibition plus sympathetic cholinergic muscle vasodilation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A tonic firing rate of roughly 1–2 impulses per second in vasoconstrictor fibres', meaning: 'Sympathetic vasomotor tone — vessels held at about half-maximal constriction' },
    { clue: 'Nucleus tractus solitarius in the posterolateral medulla', meaning: 'Sensory area A-2, the entry point for baroreceptor and chemoreceptor afferents' },
    { clue: 'Anterolateral lower medulla, area A-1', meaning: 'Vasodilator area — acts by inhibiting the vasoconstrictor area, not by its own outflow' },
    { clue: 'Sympathetic fibres ending on small veins and venous reservoirs', meaning: 'Capacitance control — the route by which sympathetic discharge raises venous return' },
    { clue: 'Sympathetic cholinergic fibres to skeletal muscle arterioles', meaning: 'Sympathetic vasodilator system — alerting reaction and vasovagal syncope, not exercise hyperaemia' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The vasomotor centre is the **effector arm of every rapid pressure reflex** — the reflexes that command it are in [[ghp-baroreceptor-chemoreceptor-reflexes]], and its most extreme output is the last-ditch discharge of [[ghp-cns-ischaemic-response]]. Because it constricts veins as well as arterioles it raises [[ghp-mean-systemic-filling-pressure]], which is how sympathetic drive shifts the whole [[ghp-cardiac-output-venous-return-curves]] relationship rather than just narrowing pipes.' },
    { logic: 'Where it shows up clinically', detail: 'Neurogenic shock, spinal and epidural hypotension, and the compensated phase of haemorrhage all turn on this outflow — see [[ghp-shock-stages-haemorrhagic]]. Note the division of labour: this centre buys **seconds**, but chronic pressure is set by the kidney in [[ghp-renal-body-fluid-pressure-control]]. Course cross-links: [[blood-pressure-baroreceptor-reflex]], [[hemodynamics-preload-afterload-cardiac-output]].' },
  ],

  mnemonics: [
    { hook: 'C-1 Constricts, A-1 Abolishes constriction, A-2 (NTS) Accepts the afferents', expansion: ['C-1 upper medulla — tonic vasoconstrictor outflow', 'A-1 lower medulla — inhibits C-1, hence vasodilation', 'A-2 tractus solitarius — CN IX and CN X input, then sets both'] },
    { hook: 'Sympathetic discharge does FOUR things at once: Arterioles, Veins, Heart, Adrenals', expansion: ['Arterioles → resistance up', 'Veins → capacitance down, filling pressure up', 'Heart → rate and contractility up', 'Adrenals → catecholamines to reinforce and prolong'] },
  ],

  traps: [
    {
      questionCategory: 'How vasodilation is actually produced',
      wrongInstinct: 'The vasodilator area sends its own dilator fibres out to the systemic arterioles',
      rightAnswer: 'The vasodilator area works by inhibiting the tonically firing vasoconstrictor area',
      why: 'Most systemic vasodilation is withdrawal of existing tone, not addition of a dilator signal.',
    },
    {
      questionCategory: 'What sympathetic stimulation does to cardiac output',
      wrongInstinct: 'Sympathetic discharge raises pressure purely by raising total peripheral resistance, so output must fall',
      rightAnswer: 'It also constricts the veins, raising mean systemic filling pressure and venous return, so output rises',
      why: 'The capacitance limb is what lets a mass discharge raise resistance and cardiac output together.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops total spinal anaesthesia during an attempted epidural. Mean arterial pressure falls from 105 to about 50 mmHg, the skin is warm and dry, and the heart rate does not rise. What single change best explains the whole picture?',
      options: [
        { id: 'a', text: 'Direct depression of myocardial contractility by the local anaesthetic reaching the coronary circulation' },
        { id: 'b', text: 'Loss of tonic sympathetic vasoconstrictor and cardiac outflow below the level of the block' },
        { id: 'c', text: 'Massive release of nitric oxide from the vascular endothelium' },
        { id: 'd', text: 'Activation of the CNS ischaemic response by brainstem hypoperfusion' },
      ],
      answerId: 'b',
      explanation: 'Abolishing tonic vasomotor discharge removes both the arteriolar and venous constriction that hold pressure at 100 mmHg, and it removes the cardiac sympathetic drive that would otherwise produce a compensatory tachycardia — hence warm skin and a normal or slow pulse. Endothelial and myocardial mechanisms would not explain the absent tachycardia, and the CNS ischaemic response would raise pressure, not lower it.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Maximal sympathetic stimulation raises both arterial pressure and cardiac output. Which effect is chiefly responsible for the rise in cardiac output?',
      options: [
        { id: 'a', text: 'Constriction of the veins, which lowers vascular capacitance and raises mean systemic filling pressure' },
        { id: 'b', text: 'Constriction of the arterioles, which raises total peripheral resistance' },
        { id: 'c', text: 'Sympathetic cholinergic dilation of skeletal muscle arterioles' },
        { id: 'd', text: 'Loss of vagal tone to the atrioventricular node' },
      ],
      answerId: 'a',
      explanation: 'Venoconstriction shifts blood out of the capacitance reservoirs, raising mean systemic filling pressure and therefore the pressure gradient for venous return — and venous return sets cardiac output. Arteriolar constriction raises resistance, which by itself would reduce output. The sympathetic vasodilator system is cholinergic and does not drive exercise or reflex output; vagal withdrawal contributes to rate but is secondary to the filling change.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which statement about the sympathetic vasodilator system is correct?',
      options: [
        { id: 'a', text: 'It is the principal mechanism increasing skeletal muscle blood flow during sustained exercise' },
        { id: 'b', text: 'It consists of adrenergic fibres acting on beta-2 receptors in the renal circulation' },
        { id: 'c', text: 'It is cholinergic, is driven from the anterior hypothalamus, and contributes to the alerting reaction and to vasovagal syncope' },
        { id: 'd', text: 'It maintains resting vasomotor tone in the systemic arterioles' },
      ],
      answerId: 'c',
      explanation: 'The system is sympathetic cholinergic to skeletal muscle, relayed through the hypothalamus and vasomotor centre, and figures in anticipatory (defence) vasodilation and vasovagal fainting. Exercise hyperaemia is driven by local metabolic control, not by this pathway, and resting tone comes from the tonic vasoconstrictor outflow.',
      tests: 'exam',
    },
  ],
};

export default ghpVasomotorCentreSympatheticControl;
