import type { Lecture } from '../../lib/types';

export const ifhFamilyHealthImpact: Lecture = {
  id: 'ifh-family-health-impact',
  title: 'How Families Shape Health',
  system: 'community',
  source: 'L4 — Family Influences on Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L4 Family Influences on Health' },
    { kind: 'mechanism', label: 'Family as the unit of care' },
    { kind: 'treatment', label: 'Caregiver burden · Sick role' },
  ],

  highYield: [
    '**The family is the unit of care** and the most powerful everyday influence on health behaviour — it shapes diet, exercise, smoking, help-seeking and adherence. This is the applied core of the [[ifh-family-medicine-principles]].',
    '**Family influence cuts both ways.** Family **support** improves chronic-disease control and adherence; family **conflict, over-involvement or enabling** worsens them. The family is either a **resource or a stressor** — rarely neutral.',
    '**The caregiver is a “hidden patient.”** Chronic illness loads carers physically, emotionally and financially → **caregiver burden**, burnout and their own morbidity. Screening the caregiver is part of the plan — pair with [[ifh-family-assessment-tools]] and [[ifh-family-life-cycle]].',
    '**Family stress can precipitate or aggravate illness.** Major events (loss, conflict, transitions) act as stressors — see [[ifh-stress-life-events]] — and systems concepts like **homeostasis** and **somatization** explain how a symptom can stabilise a family (e.g. a child’s pain that flares with parental conflict).',
    '**The sick role (Parsons).** Illness **exempts** a person from normal duties but **obliges** them to seek help and try to recover; families **legitimise** this role — and can reinforce it through **secondary gain**. This is where [[ifh-disease-vs-illness]] meets the family system.',
  ],

  mechanism: {
    title: 'Family context → shapes behaviour → modulates disease & caregiving → stress feeds back to health',
    steps: [
      { id: 's1', label: 'Family sets health behaviours & beliefs (diet, smoking, help-seeking)', emphasis: 'key' },
      { id: 's2', label: 'In chronic disease, family support or conflict changes adherence & control', emphasis: 'key' },
      { id: 's3', label: 'Illness loads the caregiver → caregiver burden (“hidden patient”)', emphasis: 'key' },
      { id: 's4', label: 'Family events & stress can precipitate or aggravate illness' },
      { id: 's5', label: 'Family legitimises the sick role — as support, or as secondary gain' },
    ],
  },

  examFindings: [
    { sign: 'The family is a unit of care, not just a backdrop', mechanism: 'It is the strongest everyday influence on health behaviour and adherence', significance: 'key' },
    { sign: 'Family support improves chronic-disease outcomes; conflict or enabling worsens them', mechanism: 'Support aids adherence and monitoring; dysfunction undermines them', significance: 'key' },
    { sign: 'The caregiver is a “hidden patient”', mechanism: 'Caregiving burden produces real physical and psychological morbidity', significance: 'key' },
    { sign: 'The sick role exempts duties but obliges the person to seek recovery', mechanism: 'Parsons — families can legitimise it or reinforce secondary gain', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A diabetic’s control improves sharply after his wife cooks with him and joins his visits', meaning: 'Family support as a health resource — enlist it deliberately in the plan' },
    { clue: 'The exhausted daughter caring for a parent with dementia develops insomnia and high BP', meaning: 'Caregiver burden — treat the caregiver as a patient in their own right' },
    { clue: 'A child’s recurrent abdominal pain resolves on school holidays and flares with parental conflict', meaning: 'Family stress / somatization — the symptom is embedded in family dynamics' },
    { clue: 'A patient’s symptoms consistently earn attention and relief from household chores', meaning: 'Secondary gain reinforcing the sick role — address the family system, not just the complaint' },
  ],

  treatment: [
    { logic: 'Treat the family, not just the patient', detail: 'Mobilise family support for chronic-disease and behaviour-change plans; enlist the family via a genogram or family APGAR when relevant.' },
    { logic: 'Screen and support the caregiver', detail: 'Ask about caregiver burden explicitly — the “hidden patient” needs respite, support and their own care to prevent care breakdown.' },
    { logic: 'Name the family process', detail: 'When symptoms track family stress or secondary gain, address the system rather than escalating investigations.' },
  ],

  mnemonics: [
    { hook: 'Family = Resource or Risk', expansion: ['Resource — support, adherence, monitoring', 'Risk — conflict, enabling, secondary gain', 'Either way, it is the unit of care'] },
  ],

  traps: [
    {
      questionCategory: 'Caregiver as patient',
      wrongInstinct: 'In chronic illness, only the diagnosed patient needs care',
      rightAnswer: 'The caregiver is a “hidden patient” at real risk of burnout and illness, and needs assessment too',
      why: 'Caregiver collapse is a leading cause of care breakdown and institutionalisation — screening for burden is part of managing the patient.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An elderly woman caring full-time for her husband with dementia develops depression, insomnia and worsening hypertension. This is best described as…',
      options: [
        { id: 'a', text: 'Caregiver burden (the “hidden patient”)' },
        { id: 'b', text: 'Malingering' },
        { id: 'c', text: 'The sick role' },
        { id: 'd', text: 'Secondary gain' },
      ],
      answerId: 'a',
      explanation: 'The physical and psychological toll of sustained caregiving is caregiver burden; because the carer’s own illness is easily overlooked, they are called the “hidden patient” and should be assessed directly.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Parsons’ concept that an ill person is exempted from normal duties but is obliged to seek help and try to recover is called…',
      options: [
        { id: 'a', text: 'The sick role' },
        { id: 'b', text: 'The symptom iceberg' },
        { id: 'c', text: 'Allostatic load' },
        { id: 'd', text: 'The family APGAR' },
      ],
      answerId: 'a',
      explanation: 'Talcott Parsons’ sick role frames illness as a social state: the person is excused normal obligations but is expected to want to get well and to cooperate with help — a role families can legitimise or, through secondary gain, reinforce.',
      tests: 'lecture',
    },
  ],
};

export default ifhFamilyHealthImpact;
