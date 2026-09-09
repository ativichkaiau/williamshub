import type { Lecture } from '../../lib/types';

export const ghpLongTermFlowAngiogenesis: Lecture = {
  id: 'ghp-long-term-flow-angiogenesis',
  title: 'Long-Term Flow Regulation & Angiogenesis',
  system: 'cardiovascular',
  source: 'Ch 17 — Local & Humoral Control of Blood Flow by the Tissues',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 17 Local & Humoral Control' },
    { kind: 'mechanism', label: 'Vascularity remodelling' },
    { kind: 'exam', label: 'Collaterals · VEGF' },
  ],

  highYield: [
    '**Acute local control adjusts calibre in seconds; long-term control rebuilds the vessels themselves over weeks.** Acute dilation can typically restore only about **three-quarters** of what a tissue needs. If the mismatch persists, the tissue changes its **physical vascularity** — the number and size of vessels — until flow is again appropriate. This is why the long-term mechanism is far more complete than the acute one.',
    '**The trigger is sustained oxygen deficiency relative to demand, and the mediators are angiogenic factors.** Chronic hypoxia or chronically raised metabolism releases **vascular endothelial growth factor (VEGF)**, **fibroblast growth factor** and **angiogenin**. These degrade the basement membrane, let endothelial cells sprout and migrate toward the stimulus, and the sprout then tubularises and connects. Vascularity is remodelled to match need, not to match pressure.',
    '**Age matters enormously: the young remodel, the old barely do.** Vascularity changes rapidly in **neonates** and in **growing or regenerating tissue**, and only slowly in the aged. This is the physiological reason collateral development after arterial occlusion is far better in a young patient than an elderly one.',
    '**Collateral circulation is the same process applied to an obstruction.** Occlude an artery and small anastomotic channels dilate within **seconds** (neural and metabolic), then enlarge structurally over **days to months**, often restoring more than half the original supply. Because it is gradual, a **slowly** progressive stenosis may remain silent while an abrupt occlusion of the same vessel infarcts — the collateral bed never had time to grow.',
    '**Vascularity is set by the tissue’s peak requirement, not its average.** A muscle trained to high workloads grows capillaries to serve that peak. The corollary is clinical: flow reserve — the difference between resting and maximal flow — is what fails first in disease, which is why symptoms in [[coronary-circulation]] appear on exertion long before they appear at rest.',
    '**The same machinery is hijacked in disease.** Tumours secrete angiogenic factors to build their own supply, which is the rationale for anti-VEGF therapy; retinal ischaemia drives the neovascularisation of proliferative retinopathy. Angiogenesis is neither good nor bad in itself — it simply follows a sustained signal that oxygen delivery is inadequate.',
  ],

  mechanism: {
    title: 'Persistent shortfall rebuilds the vascular bed',
    steps: [
      { id: 's1', label: 'Oxygen delivery stays below demand despite maximal acute dilation', emphasis: 'key' },
      { id: 's2', label: 'Hypoxic tissue releases VEGF, FGF, angiogenin' },
      { id: 's3', label: 'Basement membrane digested; endothelial cells sprout toward the stimulus' },
      { id: 's4', label: 'Sprout tubularises, connects, and is invested with smooth muscle', emphasis: 'key' },
      { id: 's5', label: 'Vessel number and calibre rise until delivery matches peak need' },
      { id: 's6', label: 'Signal withdrawn → angiogenic drive ceases; excess vessels regress', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Slowly progressive arterial stenosis remains asymptomatic', mechanism: 'Collateral channels enlarged structurally in step with the narrowing', significance: 'key' },
    { sign: 'Abrupt occlusion of the same artery infarcts the tissue', mechanism: 'No time for collateral remodelling to occur', significance: 'key' },
    { sign: 'Capillary density rises with endurance training', mechanism: 'Vascularity is matched to peak metabolic requirement', significance: 'supportive' },
    { sign: 'Poor collateral formation in an elderly patient', mechanism: 'Angiogenic remodelling slows markedly with age', significance: 'supportive' },
    { sign: 'Neovascularisation on the retina in chronic ischaemia', mechanism: 'Sustained hypoxia drives VEGF-mediated vessel growth', significance: 'key' },
  ],

  investigations: [
    { clue: 'Angiography showing a well-developed collateral network around an occlusion', meaning: 'Long-standing, gradually progressive disease rather than acute thrombosis' },
    { clue: 'Normal resting flow but markedly reduced flow reserve on stress testing', meaning: 'Vascularity adequate at rest but unable to meet peak demand' },
    { clue: 'Raised tissue VEGF expression', meaning: 'Ongoing hypoxic angiogenic drive' },
    { clue: 'Capillary-to-fibre ratio increased on muscle biopsy', meaning: 'Structural adaptation to chronically raised demand' },
    { clue: 'Rapid revascularisation in a neonate compared with an adult', meaning: 'Age-dependent capacity for vascular remodelling' },
  ],

  treatment: [
    {
      logic: 'Buy time for collaterals rather than expecting acute dilation to compensate',
      detail: 'Acute mechanisms restore only part of the deficit, so the durable answer to a chronic obstruction is **structural**. Exercise training, by repeatedly imposing peak demand, is a genuine angiogenic stimulus — the same principle by which [[ghp-exercise-muscle-blood-flow]] raises muscle capillary density.',
    },
    {
      logic: 'Blocking angiogenesis is therapeutic where the drive is pathological',
      detail: 'Because tumours and ischaemic retina use the **same VEGF pathway** the body uses for collaterals, anti-VEGF agents help there — but the trade-off is impaired wound healing and collateral growth elsewhere.',
    },
  ],

  mnemonics: [
    { hook: 'Seconds dilate, weeks rebuild', expansion: ['Acute: calibre change, ~3/4 of the need', 'Chronic: vessel number and size, near-complete'] },
    { hook: 'Slow stenosis spares, sudden occlusion kills', expansion: ['Gradual narrowing grows collaterals in step', 'Abrupt closure gives no time to remodel'] },
  ],

  traps: [
    {
      questionCategory: 'Why a tight stenosis can be silent',
      wrongInstinct: 'The vessel cannot be significantly narrowed if the patient has no symptoms',
      rightAnswer: 'Gradual narrowing allows collateral vessels to enlarge structurally and carry the flow',
      why: 'Rate of narrowing, not just severity, determines whether tissue is compromised',
    },
    {
      questionCategory: 'What sets a tissue’s vascularity',
      wrongInstinct: 'Vessel density is matched to average resting flow',
      rightAnswer: 'It is matched to the tissue’s peak requirement',
      why: 'It is why disease shows up first as a loss of reserve during exertion',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two patients have equally severe occlusion of the same artery. One is asymptomatic; the other infarcted. What best explains the difference?',
      options: [
        { id: 'a', text: 'The asymptomatic patient has a higher cardiac output' },
        { id: 'b', text: 'The occlusion developed gradually, allowing collateral vessels to enlarge' },
        { id: 'c', text: 'The asymptomatic patient has greater myogenic tone' },
        { id: 'd', text: 'Baroreceptor reflexes maintained perfusion pressure' },
      ],
      answerId: 'b',
      explanation: 'Collateral channels dilate within seconds but enlarge structurally over days to months. A gradual stenosis grows its collateral bed in step; an abrupt occlusion gives no time for that remodelling, so the tissue infarcts.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which factor is the principal mediator of new vessel growth in chronically hypoxic tissue?',
      options: [
        { id: 'a', text: 'Adenosine' },
        { id: 'b', text: 'Angiotensin II' },
        { id: 'c', text: 'Vascular endothelial growth factor' },
        { id: 'd', text: 'Atrial natriuretic peptide' },
      ],
      answerId: 'c',
      explanation: 'VEGF, with FGF and angiogenin, is released by chronically hypoxic tissue and drives endothelial sprouting. Adenosine is an acute vasodilator, not an angiogenic factor.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A trained endurance athlete has a higher muscle capillary density than a sedentary control. This reflects which principle?',
      options: [
        { id: 'a', text: 'Vascularity is matched to the tissue’s peak metabolic requirement' },
        { id: 'b', text: 'Myogenic tone falls with training' },
        { id: 'c', text: 'Sympathetic vasoconstrictor tone is abolished in trained muscle' },
        { id: 'd', text: 'Capillary density is fixed genetically and does not adapt' },
      ],
      answerId: 'a',
      explanation: 'Long-term regulation remodels vascularity toward the peak demand the tissue repeatedly encounters, which is why training raises capillary-to-fibre ratio and flow reserve.',
      tests: 'mechanism',
    },
  ],
};

export default ghpLongTermFlowAngiogenesis;
