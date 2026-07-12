import type { Lecture } from '../../lib/types';

export const hhlLymphaticDevelopment: Lecture = {
  id: 'hhl-lymphatic-development',
  title: 'Lymphatic Development & Anomalies',
  system: 'heme',
  source: 'L1 — Development of Blood & Lymphatics',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L1 Blood & lymph dev' },
    { kind: 'mechanism', label: 'Lymph sacs bud from veins' },
    { kind: 'disease', label: 'Cystic hygroma · Milroy' },
    { kind: 'investigation', label: 'Antenatal US · karyotype' },
  ],

  highYield: [
    'The lymphatic system develops (~week 5) as **six primary lymph sacs that bud from the veins**: paired **jugular** and **iliac** sacs, a **retroperitoneal** sac and the **cisterna chyli**.',
    'The sacs anastomose to form the **thoracic duct**, which drains into the **left venous angle** (junction of the left subclavian and internal jugular veins).',
    '**Cystic hygroma (cystic lymphangioma)** = failure of the **jugular lymph sac** to join the venous system → a large posterolateral neck cyst; strongly linked to **Turner syndrome (45,X)** and **fetal hydrops**.',
    'Embryological origins to keep straight: **thymus = 3rd pharyngeal pouch (endoderm)**; **spleen = dorsal mesogastrium (mesoderm)** — mesodermal despite lying in the foregut region.',
    '**Milroy disease** = congenital **primary lymphoedema** (VEGFR3/FLT4 mutation) with lower-limb swelling from birth.',
  ],

  mechanism: {
    title: 'Lymph sacs bud from veins → ducts; failed connection → cystic hygroma',
    steps: [
      { id: 's1', label: '~Wk 5: six primary lymph sacs bud from the cardinal/subclavian veins', emphasis: 'key' },
      { id: 's2', label: 'Jugular, iliac, retroperitoneal sacs + cisterna chyli' },
      { id: 's3', label: 'Sacs anastomose → thoracic duct → drains to left venous angle', emphasis: 'key' },
      { id: 's4', label: 'Jugular sac fails to join the vein → cystic hygroma ± fetal hydrops', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fluctuant posterolateral neck swelling that transilluminates in a fetus/neonate', mechanism: 'Cystic hygroma from the jugular lymph sac', significance: 'key' },
    { sign: 'Cystic hygroma on antenatal scan', mechanism: 'Marker for Turner (45,X)/aneuploidy and fetal hydrops', significance: 'key' },
    { sign: 'Non-pitting lower-limb lymphoedema from birth', mechanism: 'Primary lymphoedema (Milroy, VEGFR3)', significance: 'supportive' },
    { sign: 'Spleen palpable in the left upper quadrant', mechanism: 'Mesodermal organ arising in the dorsal mesogastrium', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Nuchal cystic swelling + webbed neck + 45,X karyotype', meaning: 'Turner-associated cystic hygroma' },
    { clue: 'Thickened nuchal translucency / hydrops fetalis on antenatal US', meaning: 'Lymphatic sac malformation → offer karyotyping' },
    { clue: 'Congenital non-pitting leg lymphoedema with a family history', meaning: 'Milroy disease (VEGFR3/FLT4)' },
    { clue: 'T-cell immunodeficiency with absent thymus + hypocalcaemia', meaning: '3rd/4th pouch failure (DiGeorge)' },
  ],

  treatment: [
    { logic: 'Cystic hygroma: image, karyotype, then excise', detail: 'Antenatal surveillance + karyotyping; postnatal surgical excision or sclerotherapy. Large lesions can obstruct the airway.' },
    { logic: 'Primary lymphoedema is managed, not cured', detail: 'Compression, skin care and physiotherapy; Milroy disease reflects defective VEGFR3 signalling.' },
  ],

  mnemonics: [
    { hook: 'Cystic Hygroma → Turner\'s neck (jugular lymph sac)', expansion: ['Jugular sac fails to drain into the vein', 'Marker of hydrops / nuchal oedema', 'Milroy = congenital primary lymphoedema'] },
    { hook: 'Thymus = 3rd pouch (endoderm); Spleen = mesogastrium (mesoderm)', expansion: ['Spleen is mesodermal despite its foregut location', 'Coeliac trunk supplies it', 'Thymus shares the 3rd pouch with inferior parathyroids'] },
  ],

  traps: [
    {
      questionCategory: 'Cystic neck swelling in a neonate',
      wrongInstinct: 'A transilluminating lateral neck cyst is a branchial cleft cyst',
      rightAnswer: 'In a fetus/neonate a large posterolateral cystic neck mass is a cystic hygroma (jugular lymph sac) — think Turner',
      why: 'Cystic hygroma is lymphatic and linked to 45,X and hydrops; branchial cysts present later and anterolaterally.',
    },
    {
      questionCategory: 'Embryological origin of the spleen',
      wrongInstinct: 'The spleen is endodermal like the other foregut derivatives',
      rightAnswer: 'The spleen is MESODERMAL, arising in the dorsal mesogastrium',
      why: 'Though it sits in the foregut region and is supplied by the coeliac trunk, its parenchyma is mesoderm — a classic catch.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Antenatal ultrasound shows a large multiloculated cystic swelling in the fetal posterolateral neck. This lesion arises from the jugular lymph sac and is most associated with:',
      options: [
        { id: 'a', text: 'Trisomy 18' },
        { id: 'b', text: 'Turner syndrome (45,X)' },
        { id: 'c', text: 'Klinefelter syndrome' },
        { id: 'd', text: 'Fragile X syndrome' },
      ],
      answerId: 'b',
      explanation: 'Cystic hygroma results from failure of the jugular lymph sac to connect with the venous system; it is strongly associated with Turner syndrome and fetal hydrops.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'The thoracic duct forms by anastomosis of the embryonic lymph sacs. These sacs originate as outgrowths from the:',
      options: [
        { id: 'a', text: 'Pharyngeal pouches' },
        { id: 'b', text: 'Veins (cardinal/subclavian)' },
        { id: 'c', text: 'Dorsal aorta' },
        { id: 'd', text: 'Coelomic epithelium' },
      ],
      answerId: 'b',
      explanation: 'The primary lymph sacs bud from developing veins and coalesce to form the thoracic duct, which drains into the left venous angle.',
      tests: 'mechanism',
    },
  ],
};

export default hhlLymphaticDevelopment;
