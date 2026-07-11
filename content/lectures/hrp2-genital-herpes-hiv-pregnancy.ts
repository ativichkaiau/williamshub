import type { Lecture } from '../../lib/types';

export const hrp2GenitalHerpesHivPregnancy: Lecture = {
  id: 'hrp2-genital-herpes-hiv-pregnancy',
  title: 'Genital Herpes & HIV in Pregnancy',
  system: 'repro',
  source: 'L3 — Viral STIs & Antiviral Therapy',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L3 Viral STIs' },
    { kind: 'disease', label: 'HSV · HIV' },
    { kind: 'mechanism', label: 'Vertical transmission' },
    { kind: 'treatment', label: 'Aciclovir · ART' },
  ],

  highYield: [
    '**Genital herpes (HSV-2 > HSV-1):** painful recurrent vesicles/ulcers with tender inguinal nodes; **latency in sacral ganglia**. Diagnose clinically ± PCR; treat **aciclovir/valaciclovir** (episodic or suppressive — not curative).',
    '**Neonatal HSV** is acquired at delivery, worst with a **primary** outbreak near term (high viral shedding, no maternal antibody) → **caesarean section if active genital lesions** at delivery; suppressive aciclovir from ~36 weeks.',
    '**HIV:** untreated, vertical transmission occurs **in utero, intrapartum, or via breastfeeding**. **Antiretroviral therapy (ART) in pregnancy** to suppress viral load, appropriate mode of delivery, neonatal prophylaxis, and **avoiding breastfeeding** (where formula is safe) reduce transmission to <1–2%.',
    '**Combined principle:** these chronic viral STIs are **controlled, not cured** — the perinatal focus is **preventing mother-to-child transmission** (timing of delivery for HSV; ART + delivery planning for HIV).',
  ],

  mechanism: {
    title: 'Latency/chronicity → risk at delivery → prevent transmission',
    steps: [
      { id: 's1', label: 'HSV latency → recurrent genital lesions', emphasis: 'key' },
      { id: 's2', label: 'Primary HSV near term → high neonatal risk → caesarean', emphasis: 'danger' },
      { id: 's3', label: 'HIV transmits in utero/intrapartum/breastfeeding', emphasis: 'key' },
      { id: 's4', label: 'ART + delivery planning → transmission <1–2%', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Painful recurrent genital vesicles', mechanism: 'HSV reactivation from sacral ganglia', significance: 'key' },
    { sign: 'Active genital HSV lesions at delivery → caesarean', mechanism: 'Reduce neonatal HSV', significance: 'key' },
    { sign: 'Undetectable maternal HIV viral load on ART', mechanism: 'Minimises vertical transmission', significance: 'key' },
    { sign: 'Avoid breastfeeding in HIV where safe alternatives exist', mechanism: 'Prevents postnatal transmission', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pregnant woman with a first (primary) HSV outbreak at term', meaning: 'Plan caesarean; suppressive aciclovir' },
    { clue: 'Pregnant woman newly diagnosed with HIV', meaning: 'Start ART; plan delivery; neonatal prophylaxis' },
    { clue: 'Recurrent genital vesicles in a non-pregnant patient', meaning: 'Episodic or suppressive aciclovir' },
    { clue: 'Well-controlled HIV with low viral load at term', meaning: 'Vaginal delivery may be appropriate' },
  ],

  treatment: [
    { logic: 'HSV in pregnancy', detail: 'Aciclovir; caesarean for active genital lesions at delivery; suppressive aciclovir from ~36 weeks if history of genital herpes.' },
    { logic: 'HIV in pregnancy', detail: 'ART to suppress viral load, mode of delivery by viral load, neonatal antiretroviral prophylaxis, avoid breastfeeding where formula is safe.' },
  ],

  mnemonics: [
    { hook: 'Active genital HSV at delivery → Cut (caesarean)', expansion: ['Primary near term is highest risk'] },
    { hook: 'HIV PMTCT: ART + delivery plan + no breastfeeding (where safe)', expansion: ['Cuts transmission to <1–2%'] },
  ],

  traps: [
    {
      questionCategory: 'Delivery in genital herpes',
      wrongInstinct: 'A past history of genital herpes alone mandates caesarean delivery',
      rightAnswer: 'Caesarean is indicated for ACTIVE genital lesions/prodrome at delivery, not merely a past history',
      why: 'The risk is from viral shedding at delivery; without active lesions, vaginal delivery is usually appropriate (with suppressive therapy).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman has active genital herpes lesions at the onset of labour. The recommended mode of delivery is:',
      options: [
        { id: 'a', text: 'Vaginal delivery with aciclovir' },
        { id: 'b', text: 'Caesarean section' },
        { id: 'c', text: 'Forceps delivery' },
        { id: 'd', text: 'No change to management' },
      ],
      answerId: 'b',
      explanation: 'Active genital HSV lesions at delivery carry a high risk of neonatal herpes, so caesarean section is recommended.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'The cornerstone of preventing mother-to-child transmission of HIV is:',
      options: [
        { id: 'a', text: 'Aciclovir prophylaxis' },
        { id: 'b', text: 'Maternal antiretroviral therapy to suppress viral load' },
        { id: 'c', text: 'Exclusive breastfeeding' },
        { id: 'd', text: 'Delaying delivery' },
      ],
      answerId: 'b',
      explanation: 'Maternal ART to achieve an undetectable viral load, with appropriate delivery planning and neonatal prophylaxis, is the key to preventing vertical HIV transmission.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2GenitalHerpesHivPregnancy;
