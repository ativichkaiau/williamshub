import type { Lecture } from '../../lib/types';

export const fcp1AbnormalVaginalBleeding: Lecture = {
  id: 'fcp1-abnormal-vaginal-bleeding',
  title: 'Approach to Abnormal Vaginal Bleeding: PALM-COEIN & Pregnancy',
  system: 'clinical',
  source: 'L5 — OB-Gyne History Taking & Vaginal Bleeding',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L5 OB-Gyne History' },
    { kind: 'mechanism', label: 'Pregnant vs not → cause' },
    { kind: 'disease', label: 'AUB · ectopic · endometrial Ca' },
    { kind: 'investigation', label: 'β-hCG · TVUSS · biopsy' },
  ],

  highYield: [
    '**The first branch point is always: is she pregnant?** Send a **β-hCG**. In **early pregnancy**, bleeding means miscarriage, **ectopic** (the danger) or molar pregnancy; in **late pregnancy**, placenta praevia or abruption. If not pregnant, work up as **abnormal uterine bleeding (AUB)**.',
    '**Classify non-pregnant AUB with PALM-COEIN.** The **PALM** causes are structural — **Polyp, Adenomyosis, Leiomyoma (fibroid), Malignancy/hyperplasia**; the **COEIN** causes are non-structural — **Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not-otherwise-classified**.',
    '**Postmenopausal bleeding is endometrial cancer until proven otherwise.** It demands prompt **transvaginal ultrasound (TVUSS)** to measure endometrial thickness and **endometrial sampling/biopsy** — never dismiss it as “just spotting”.',
    '**Assess severity and haemodynamics first.** Heavy or ongoing bleeding can cause shock; chronic **heavy menstrual bleeding** commonly causes **iron-deficiency anaemia** ([[fcp1-anemia-microcytic]]). Stabilise before you investigate the cause.',
    '**This approach builds on the OB-Gyne history** — see [[fcp1-obgyne-history]] for LMP, cycle and GPAL — and it overlaps the assessment of a [[fcp1-pelvic-mass-approach]] when a fibroid or ovarian lesion is found.',
  ],

  mechanism: {
    title: 'A safe sequence for abnormal vaginal bleeding',
    steps: [
      { id: 's1', label: 'Assess haemodynamics — resuscitate heavy or unstable bleeding first', emphasis: 'danger' },
      { id: 's2', label: 'Pregnancy test: pregnant vs non-pregnant', emphasis: 'key' },
      { id: 's3', label: 'If pregnant: locate & date — exclude ectopic, miscarriage, praevia, abruption', emphasis: 'danger' },
      { id: 's4', label: 'If non-pregnant: classify the cause by PALM-COEIN', emphasis: 'key' },
      { id: 's5', label: 'Postmenopausal bleeding → exclude endometrial cancer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Any bleeding after the menopause', mechanism: 'Postmenopausal bleeding is endometrial carcinoma until excluded by imaging and biopsy', significance: 'key' },
    { sign: 'Amenorrhoea with pain, adnexal tenderness and shock', mechanism: 'The picture of a ruptured ectopic pregnancy — a surgical emergency', significance: 'key' },
    { sign: 'A bulky, irregular, enlarged uterus', mechanism: 'Suggests uterine fibroids (leiomyoma, the “L” of PALM)', significance: 'supportive' },
    { sign: 'Pallor and tachycardia with heavy bleeding', mechanism: 'Signals significant blood loss and/or chronic iron-deficiency anaemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Positive β-hCG with an empty uterus on transvaginal ultrasound', meaning: 'Ectopic pregnancy until proven otherwise — urgent gynaecology involvement' },
    { clue: 'Postmenopausal bleeding with a thickened endometrium on TVUSS', meaning: 'Proceed to endometrial biopsy to exclude hyperplasia or carcinoma' },
    { clue: 'Heavy menstrual bleeding with microcytic anaemia', meaning: 'Iron-deficiency anaemia from chronic blood loss — treat and investigate the source ([[fcp1-anemia-microcytic]])' },
    { clue: 'Irregular, unpredictable bleeding at the extremes of reproductive age', meaning: 'Fits ovulatory dysfunction — the “O” of PALM-COEIN' },
  ],

  treatment: [
    { logic: 'Stabilise first, then diagnose', detail: 'For heavy or haemodynamically significant bleeding, resuscitate (airway, breathing, circulation, large-bore access, fluids/blood) before working through the differential.' },
    { logic: 'Never dismiss postmenopausal bleeding', detail: 'It always warrants prompt endometrial evaluation with transvaginal ultrasound and biopsy to exclude cancer, even when the bleeding is light or single-episode.' },
  ],

  mnemonics: [
    { hook: 'AUB causes = PALM-COEIN (structural PALM vs non-structural COEIN)', expansion: ['PALM = Polyp, Adenomyosis, Leiomyoma, Malignancy/hyperplasia', 'COEIN = Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not-otherwise-classified', 'First, though: exclude pregnancy'] },
  ],

  traps: [
    {
      questionCategory: 'Postmenopausal bleeding',
      wrongInstinct: 'Reassure a postmenopausal woman that a single small bleed is probably atrophic and harmless',
      rightAnswer: 'Treat all postmenopausal bleeding as endometrial cancer until excluded with ultrasound and biopsy',
      why: 'Endometrial carcinoma classically presents as postmenopausal bleeding; even light, one-off bleeding requires prompt endometrial evaluation because early diagnosis is curable.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 62-year-old, ten years postmenopausal, reports a single episode of light vaginal bleeding. The most appropriate next step is:',
      options: [
        { id: 'a', text: 'Reassure her it is normal atrophic spotting and discharge' },
        { id: 'b', text: 'Arrange transvaginal ultrasound and endometrial sampling to exclude carcinoma' },
        { id: 'c', text: 'Start hormone replacement therapy empirically' },
        { id: 'd', text: 'Repeat a review only in one year' },
      ],
      answerId: 'b',
      explanation: 'Postmenopausal bleeding is endometrial cancer until proven otherwise and warrants prompt transvaginal ultrasound and endometrial biopsy, regardless of how light or brief the bleed.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 28-year-old with 7 weeks of amenorrhoea presents with vaginal bleeding and right iliac fossa pain. Her β-hCG is positive and transvaginal ultrasound shows an empty uterus. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Complete miscarriage' },
        { id: 'b', text: 'Ectopic pregnancy' },
        { id: 'c', text: 'Endometrial polyp' },
        { id: 'd', text: 'Ovulatory dysfunction' },
      ],
      answerId: 'b',
      explanation: 'A positive pregnancy test with an empty uterus and pain is an ectopic pregnancy until proven otherwise — a potentially life-threatening diagnosis requiring urgent gynaecological assessment.',
      tests: 'disease',
    },
  ],
};

export default fcp1AbnormalVaginalBleeding;
