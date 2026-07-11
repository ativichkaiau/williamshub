import type { Lecture } from '../../lib/types';

export const hrp2BacterialStiPid: Lecture = {
  id: 'hrp2-bacterial-sti-pid',
  title: 'Bacterial STIs & Pelvic Inflammatory Disease',
  system: 'repro',
  source: 'L2 — Bacterial STIs & PID',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L2 Bacterial STIs' },
    { kind: 'disease', label: 'Gonorrhoea · chlamydia · syphilis' },
    { kind: 'mechanism', label: 'Ascending infection' },
    { kind: 'investigation', label: 'NAAT · dark-field · RPR' },
    { kind: 'treatment', label: 'Ceftriaxone + doxycycline' },
  ],

  highYield: [
    '**Gonorrhoea (*Neisseria gonorrhoeae*, Gram-negative diplococci):** purulent cervicitis/urethritis, often asymptomatic in women. Diagnose by **NAAT**. Treat **ceftriaxone** (IM); rising resistance.',
    '**Chlamydia (*Chlamydia trachomatis* D–K):** the **commonest** bacterial STI, frequently **silent** → a major cause of **tubal infertility**. **NAAT** diagnosis; treat **doxycycline** (azithromycin in pregnancy). **Co-treat empirically for both GC and chlamydia** because of frequent co-infection.',
    '**Syphilis (*Treponema pallidum*, spirochaete):** **Primary** = painless **chancre** (dark-field microscopy); **Secondary** = diffuse rash incl. **palms & soles**, condylomata lata; **Tertiary** = gummas, aortitis, neurosyphilis. Serology: **non-treponemal (VDRL/RPR)** screen/monitor + **treponemal (TPHA/FTA-ABS)** confirm. Treat **penicillin**.',
    '**PID = ascending infection** (GC/chlamydia) of the upper tract → endometritis, salpingitis, tubo-ovarian abscess. **Cervical-motion (“chandelier”) tenderness**, lower-abdominal pain, fever. Sequelae: **infertility, ectopic pregnancy, chronic pain**; **Fitz-Hugh–Curtis** (perihepatitis).',
    '**Genital ulcers:** **painless** → syphilis (or granuloma inguinale/LGV); **painful** → **chancroid** (*Haemophilus ducreyi*) or **HSV**. Always screen for **co-existing STIs (incl. HIV)** and treat partners.',
  ],

  mechanism: {
    title: 'Sexual transmission → local infection → ascension/systemic spread',
    steps: [
      { id: 's1', label: 'Pathogen colonises the cervix/urethra' },
      { id: 's2', label: 'Often asymptomatic (chlamydia, GC in women)', emphasis: 'key' },
      { id: 's3', label: 'Ascends → PID (salpingitis, TOA)', emphasis: 'key' },
      { id: 's4', label: 'Tubal scarring → infertility, ectopic pregnancy', emphasis: 'danger' },
      { id: 's5', label: 'Syphilis spreads systemically in stages' },
    ],
  },

  examFindings: [
    { sign: 'Painless chancre → primary syphilis', mechanism: 'Treponema at the inoculation site', significance: 'key' },
    { sign: 'Rash on palms and soles → secondary syphilis', mechanism: 'Haematogenous treponemal dissemination', significance: 'key' },
    { sign: 'Cervical-motion tenderness → PID', mechanism: 'Inflamed adnexa/peritoneum', significance: 'key' },
    { sign: 'Painful ulcer → chancroid or HSV', mechanism: 'H. ducreyi or herpes (vs painless syphilis)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Positive NAAT for N. gonorrhoeae on a cervical swab', meaning: 'Gonorrhoea → ceftriaxone; also cover chlamydia' },
    { clue: 'Painless genital ulcer, spirochaetes on dark-field microscopy', meaning: 'Primary syphilis → penicillin' },
    { clue: 'Positive RPR confirmed by TPHA', meaning: 'Syphilis (non-treponemal screen + treponemal confirmation)' },
    { clue: 'Young woman: fever, pelvic pain, cervical-motion tenderness', meaning: 'Pelvic inflammatory disease → empirical broad cover' },
  ],

  treatment: [
    { logic: 'Dual therapy for cervicitis', detail: 'Ceftriaxone (GC) plus doxycycline/azithromycin (chlamydia) given the high co-infection rate.' },
    { logic: 'Penicillin for syphilis at every stage', detail: 'Dose/duration by stage; neurosyphilis needs IV penicillin. Watch for Jarisch-Herxheimer reaction.' },
  ],

  mnemonics: [
    { hook: 'Painless = Syphilis; Painful = Chancroid (“you do cry” — ducreyi)', expansion: ['Syphilis rash hits palms & soles', 'Chancroid ulcer is painful, ragged'] },
    { hook: 'Chlamydia is Common & Covert → treat empirically WITH gonorrhoea', expansion: ['Co-infection is frequent', 'Silent tubal damage → infertility'] },
  ],

  traps: [
    {
      questionCategory: 'Painful vs painless ulcer',
      wrongInstinct: 'A painful genital ulcer is typical of syphilis',
      rightAnswer: 'The syphilitic chancre is painLESS; painful ulcers suggest chancroid or herpes',
      why: 'Pain is a key discriminator — remember “syphilis is painless, chancroid you cry.”',
    },
    {
      questionCategory: 'Syphilis serology',
      wrongInstinct: 'A positive VDRL/RPR confirms active syphilis',
      rightAnswer: 'Non-treponemal tests (VDRL/RPR) screen and can be falsely positive; confirm with a treponemal test (TPHA/FTA-ABS)',
      why: 'RPR/VDRL have biological false positives (pregnancy, SLE, infections); treponemal tests confirm true infection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A sexually active woman has mucopurulent cervicitis. Alongside treating gonorrhoea, empirical treatment for which organism is standard?',
      options: [
        { id: 'a', text: 'Treponema pallidum' },
        { id: 'b', text: 'Chlamydia trachomatis' },
        { id: 'c', text: 'Trichomonas vaginalis' },
        { id: 'd', text: 'Candida albicans' },
      ],
      answerId: 'b',
      explanation: 'Gonorrhoea and chlamydia frequently co-exist, so cervicitis is treated with ceftriaxone plus a chlamydia agent (doxycycline/azithromycin) empirically.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A patient has a maculopapular rash involving the palms and soles. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Primary syphilis' },
        { id: 'b', text: 'Secondary syphilis' },
        { id: 'c', text: 'Chancroid' },
        { id: 'd', text: 'Gonorrhoea' },
      ],
      answerId: 'b',
      explanation: 'A rash involving the palms and soles (with condylomata lata) is characteristic of secondary syphilis, the disseminated stage.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Untreated chlamydial and gonococcal infection in women most importantly causes which long-term complication via ascending infection?',
      options: [
        { id: 'a', text: 'Cervical cancer' },
        { id: 'b', text: 'Tubal infertility and ectopic pregnancy' },
        { id: 'c', text: 'Endometrial carcinoma' },
        { id: 'd', text: 'Ovarian torsion' },
      ],
      answerId: 'b',
      explanation: 'Ascending infection causes PID with tubal scarring, leading to infertility and a raised risk of ectopic pregnancy. Cervical cancer is caused by HPV, not these bacteria.',
      tests: 'mechanism',
    },
  ],
};

export default hrp2BacterialStiPid;
