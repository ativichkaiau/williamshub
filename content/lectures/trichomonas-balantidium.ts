import type { Lecture } from '../../lib/types';

export const trichomonasBalantidium: Lecture = {
  id: 'trichomonas-balantidium',
  title: 'Trichomonas & Balantidium',
  system: 'parasitology',
  source: 'L4 — Flagellates & Ciliates',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Parasitology' },
    { kind: 'lecture', label: 'L4 Flagellates & Ciliates' },
    { kind: 'disease', label: 'Trichomoniasis' },
    { kind: 'exam', label: 'Balantidium (ciliate)' },
  ],

  highYield: [
    '**Trichomonas vaginalis is a UROGENITAL flagellate — a SEXUALLY transmitted protozoan (NOT faecal–oral) that has NO cyst stage (only the trophozoite, which transmits directly).** It is one of the commonest curable STIs.',
    '**In women it causes vaginitis with a frothy, malodorous, YELLOW-GREEN discharge, itching, and a "STRAWBERRY CERVIX" (punctate haemorrhages); the vaginal pH is raised (>4.5).** Men are usually asymptomatic carriers (or have urethritis). Diagnosis is by seeing motile, jerky, pear-shaped flagellated trophozoites on a wet mount (or NAAT).',
    '**Treatment is METRONIDAZOLE (or tinidazole), and — crucially — the SEXUAL PARTNER must be treated too** to prevent reinfection (as with any STI). Being an STI without a cyst stage, it is prevented by safe sexual practices, not by sanitation.',
    '**Balantidium coli is the ONLY pathogenic CILIATE and the LARGEST human protozoan.** Acquired FAECAL–ORAL (cysts), often ZOONOTICALLY from PIGS (the reservoir), it invades the colon to cause a dysentery that can resemble amoebiasis (ulcers, bloody/mucoid diarrhoea). The trophozoite is large and covered in cilia with a characteristic macronucleus.',
    '**Contrast the two: Trichomonas = a non-invasive UROGENITAL STI flagellate (no cyst); Balantidium = an invasive INTESTINAL ciliate (faecal–oral, pig zoonosis) causing dysentery.** Both are treated with metronidazole (*Balantidium* may use tetracycline). They complete the flagellate/ciliate group alongside *Giardia* ([[giardia-intestinal-flagellates]]).',
  ],

  mechanism: {
    title: 'Trichomonas = urogenital STI flagellate (no cyst); Balantidium = intestinal ciliate (pig zoonosis)',
    steps: [
      { id: 's1', label: 'Trichomonas vaginalis = SEXUALLY transmitted; NO cyst (trophozoite only)', emphasis: 'key' },
      { id: 's2', label: 'Vaginitis: frothy yellow-green discharge, strawberry cervix, pH >4.5', emphasis: 'key' },
      { id: 's3', label: 'Treat metronidazole + TREAT THE PARTNER (STI)', emphasis: 'key' },
      { id: 's4', label: 'Balantidium coli = only pathogenic ciliate, largest protozoan', emphasis: 'key' },
      { id: 's5', label: 'Balantidium: faecal–oral cyst, PIG reservoir → colonic dysentery' },
    ],
  },

  examFindings: [
    { sign: 'Frothy yellow-green vaginal discharge + strawberry cervix', mechanism: 'Trichomonas vaginalis vaginitis', significance: 'key' },
    { sign: 'Motile pear-shaped flagellate on a vaginal wet mount', mechanism: 'Trichomonas trophozoite (no cyst stage)', significance: 'key' },
    { sign: 'Asymptomatic male partner reinfecting the patient', mechanism: 'Untreated STI — treat the partner', significance: 'key' },
    { sign: 'Dysentery with a large ciliated trophozoite (pig contact)', mechanism: 'Balantidium coli (only pathogenic ciliate)', significance: 'supportive' },
    { sign: 'Vaginal pH greater than 4.5', mechanism: 'Trichomoniasis (and bacterial vaginosis)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The sexually transmitted flagellate with no cyst stage', meaning: 'Trichomonas vaginalis' },
    { clue: 'The cervical sign of trichomoniasis', meaning: 'Strawberry cervix (punctate haemorrhages)' },
    { clue: 'The only pathogenic ciliate (and largest human protozoan)', meaning: 'Balantidium coli' },
    { clue: 'The animal reservoir of Balantidium', meaning: 'Pigs' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: '*Trichomonas* is a common curable STI — treat the patient AND partner with metronidazole (prevention is safe sex, not sanitation, as there is no environmental cyst). *Balantidium* is a pig-zoonotic invasive ciliate causing an amoebiasis-like dysentery ([[entamoeba-histolytica-amoebiasis]]). Both complete the flagellate/ciliate group of [[protozoa-classification-biology]] and [[giardia-intestinal-flagellates]].' },
  ],

  mnemonics: [
    { hook: 'Trichomonas = "STI flagellate, no cyst, strawberry cervix" (treat both partners)', expansion: ['Frothy yellow-green discharge, pH >4.5', 'Metronidazole'] },
    { hook: 'Balantidium = "Big ciliate from Boars/pigs" (only pathogenic ciliate)', expansion: ['Faecal–oral, colonic dysentery', 'Largest human protozoan'] },
  ],

  traps: [
    {
      questionCategory: 'How Trichomonas is transmitted and treated',
      wrongInstinct: 'Trichomonas vaginalis is spread faecal–orally by cysts like other intestinal protozoa',
      rightAnswer: 'Trichomonas vaginalis is a SEXUALLY transmitted flagellate with NO cyst stage — it spreads directly as the trophozoite, so prevention is safe sex (not sanitation) and BOTH partners must be treated to prevent reinfection',
      why: 'Treating it like a faecal–oral cyst-forming protozoan misses that it is an STI: cure requires partner treatment and the absence of a cyst stage means environmental measures are irrelevant.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman has a frothy, malodorous yellow-green vaginal discharge with a "strawberry cervix" and vaginal pH above 4.5. Motile pear-shaped flagellates are seen on wet mount. The correct management includes:',
      options: [
        { id: 'a', text: 'Metronidazole for the patient only' },
        { id: 'b', text: 'Metronidazole for the patient and her sexual partner' },
        { id: 'c', text: 'Sanitation advice' },
        { id: 'd', text: 'No treatment needed' },
      ],
      answerId: 'b',
      explanation: 'This is trichomoniasis, a sexually transmitted flagellate infection with no cyst stage. Treatment is metronidazole (or tinidazole) for the patient and the sexual partner to prevent reinfection.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Balantidium coli is notable as the:',
      options: [
        { id: 'a', text: 'Only pathogenic ciliate and largest human protozoan, acquired from pigs' },
        { id: 'b', text: 'Only sexually transmitted protozoan' },
        { id: 'c', text: 'Cause of primary amoebic meningoencephalitis' },
        { id: 'd', text: 'A non-pathogenic commensal' },
      ],
      answerId: 'a',
      explanation: 'Balantidium coli is the only pathogenic ciliate and the largest human protozoan; it is acquired faecal–orally, often zoonotically from pigs, and invades the colon to cause a dysentery that can resemble amoebiasis.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default trichomonasBalantidium;
