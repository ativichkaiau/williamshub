import type { Lecture } from '../../lib/types';

export const hrp2LeiomyomaAdenomyosis: Lecture = {
  id: 'hrp2-leiomyoma-adenomyosis',
  title: 'Leiomyoma, Adenomyosis & Endometrial Polyps',
  system: 'repro',
  source: 'L6 — Pathology of the Uterine Corpus',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L6 Uterine Corpus' },
    { kind: 'disease', label: 'Fibroids · adenomyosis' },
    { kind: 'mechanism', label: 'Oestrogen-driven' },
    { kind: 'exam', label: 'Bulky vs boggy uterus' },
  ],

  highYield: [
    '**Leiomyoma (fibroid)** = benign, oestrogen-sensitive smooth-muscle tumour; commonest uterine tumour; **whorled, well-circumscribed**. By location: **submucosal** (bleeding/subfertility), **intramural** (bulk), **subserosal** (mass). Grows in pregnancy, regresses after menopause; can undergo **red (carneous) degeneration** in pregnancy.',
    '**Adenomyosis** = endometrial glands/stroma **within the myometrium** → a diffusely **enlarged, “boggy”, tender uterus** with **menorrhagia and dysmenorrhoea**; definitive diagnosis is on **hysterectomy** histology (MRI can suggest it).',
    '**Endometrial polyp** = localised overgrowth → intermenstrual bleeding; **tamoxifen** predisposes. **Endometritis** = endometrial inflammation (retained products, PID, IUD); **chronic endometritis** shows **plasma cells**.',
    '**Leiomyosarcoma** (rare, arises de novo) — a **rapidly growing** uterine mass with **necrosis, cytological atypia and high mitotic count**; distinguish from a benign, slowly-growing fibroid.',
  ],

  mechanism: {
    title: 'Benign hormone-driven myometrial/endometrial change',
    steps: [
      { id: 's1', label: 'Oestrogen drives leiomyoma growth', emphasis: 'key' },
      { id: 's2', label: 'Location decides symptoms (submucosal → bleeding)' },
      { id: 's3', label: 'Adenomyosis = endometrium in myometrium (boggy uterus)', emphasis: 'key' },
      { id: 's4', label: 'Leiomyosarcoma = necrosis, atypia, high mitoses', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Firm, bulky, irregular uterus → fibroids', mechanism: 'Smooth-muscle tumours', significance: 'key' },
    { sign: 'Diffusely enlarged, boggy, tender uterus → adenomyosis', mechanism: 'Myometrial endometrial tissue', significance: 'key' },
    { sign: 'Red (carneous) degeneration in pregnancy', mechanism: 'Fibroid outgrows blood supply', significance: 'supportive' },
    { sign: 'Rapidly growing mass with high mitoses → leiomyosarcoma', mechanism: 'Malignant smooth muscle', significance: 'key' },
  ],

  investigations: [
    { clue: 'Menorrhagia with a bulky, whorled myometrial mass', meaning: 'Leiomyoma (submucosal component bleeds)' },
    { clue: 'Menorrhagia + dysmenorrhoea + boggy tender uterus', meaning: 'Adenomyosis' },
    { clue: 'Intermenstrual bleeding, focal endometrial lesion', meaning: 'Endometrial polyp (consider tamoxifen use)' },
    { clue: 'Chronic endometrial inflammation with plasma cells', meaning: 'Chronic endometritis' },
  ],

  treatment: [
    { logic: 'Symptom-directed', detail: 'Fibroids: medical (tranexamic acid, GnRH agonist to shrink pre-op) or surgical (myomectomy/hysterectomy). Adenomyosis: hormonal control or hysterectomy.' },
  ],

  mnemonics: [
    { hook: 'Fibroid = firm & whorled (bulky); Adenomyosis = boggy & tender', expansion: ['Both oestrogen-driven, cause menorrhagia'] },
  ],

  traps: [
    {
      questionCategory: 'Fibroid vs leiomyosarcoma',
      wrongInstinct: 'A benign leiomyoma commonly transforms into leiomyosarcoma',
      rightAnswer: 'Leiomyosarcoma arises de novo and is rare; benign fibroids very rarely transform',
      why: 'A rapidly enlarging mass (especially post-menopause) with atypia and high mitoses suggests sarcoma, but this is not usually malignant transformation of a fibroid.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 42-year-old has menorrhagia, secondary dysmenorrhoea and a diffusely enlarged, soft, tender uterus. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Leiomyoma' },
        { id: 'b', text: 'Adenomyosis' },
        { id: 'c', text: 'Endometrial carcinoma' },
        { id: 'd', text: 'Endometrial polyp' },
      ],
      answerId: 'b',
      explanation: 'A diffusely enlarged, boggy, tender uterus with menorrhagia and dysmenorrhoea is characteristic of adenomyosis (endometrial tissue within the myometrium).',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Which fibroid location most typically causes heavy menstrual bleeding and subfertility?',
      options: [
        { id: 'a', text: 'Subserosal' },
        { id: 'b', text: 'Submucosal' },
        { id: 'c', text: 'Pedunculated subserosal' },
        { id: 'd', text: 'Cervical' },
      ],
      answerId: 'b',
      explanation: 'Submucosal fibroids distort the endometrial cavity, causing heavy menstrual bleeding and impairing implantation (subfertility).',
      tests: 'exam',
    },
  ],
};

export default hrp2LeiomyomaAdenomyosis;
