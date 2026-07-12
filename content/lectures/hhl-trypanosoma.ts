import type { Lecture } from '../../lib/types';

export const hhlTrypanosoma: Lecture = {
  id: 'hhl-trypanosoma',
  title: 'Trypanosoma: African & American Disease',
  system: 'heme',
  source: 'L23 — Haemoflagellates',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L23 Haemoflagellates' },
    { kind: 'disease', label: 'Sleeping sickness · Chagas' },
    { kind: 'mechanism', label: 'Trypomastigote in blood' },
    { kind: 'investigation', label: 'Blood film / tissue' },
  ],

  highYield: [
    '**Trypanosomes are haemoflagellates whose _trypomastigote_ circulates in blood.** Two clinical groups: **African trypanosomiasis (sleeping sickness)** and **American trypanosomiasis (Chagas disease)**.',
    '**African (_T. brucei gambiense/rhodesiense_):** **tsetse fly (_Glossina_)** bite → chancre → **haemolymphatic stage (fever, _Winterbottom sign_ = posterior cervical nodes)** → **CNS invasion → daytime somnolence/coma**.',
    '**American Chagas (_T. cruzi_):** **reduviid “kissing” bug** deposits infective forms in **faeces** rubbed into the bite/eye (**_Romaña sign_ = unilateral periorbital swelling**); **chronic dilated cardiomyopathy and mega-oesophagus/megacolon** years later.',
    '**In tissues _T. cruzi_ becomes an amastigote**; diagnosis is by **blood films (trypomastigotes)**, tissue, or serology — treatments differ (African vs Chagas).',
  ],

  mechanism: {
    title: 'Vector bite → blood trypomastigotes → organ disease',
    steps: [
      { id: 's1', label: 'Vector inoculates trypomastigotes (tsetse bite / bug faeces)', emphasis: 'normal' },
      { id: 's2', label: 'Parasites circulate in blood and lymphatics', emphasis: 'key' },
      { id: 's3', label: 'African: cross into CNS → sleeping sickness', emphasis: 'danger' },
      { id: 's4', label: 'Chagas: amastigotes in heart/gut → chronic cardiomyopathy & megaviscera', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Winterbottom sign (posterior cervical lymphadenopathy)', mechanism: 'African trypanosomiasis, haemolymphatic stage', significance: 'key' },
    { sign: 'Romaña sign (unilateral periorbital oedema)', mechanism: 'Acute Chagas at the inoculation site', significance: 'key' },
    { sign: 'Progressive daytime somnolence / coma', mechanism: 'CNS invasion in African disease', significance: 'supportive' },
    { sign: 'Dilated cardiomyopathy, megacolon/mega-oesophagus', mechanism: 'Chronic T. cruzi tissue damage', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Trypomastigotes on a blood film + Winterbottom sign', meaning: 'African trypanosomiasis (sleeping sickness)' },
    { clue: 'Periorbital swelling after a “kissing bug” exposure', meaning: 'Acute Chagas (Romaña sign)' },
    { clue: 'Young adult with new cardiomyopathy from Latin America', meaning: 'Chronic Chagas disease' },
    { clue: 'CSF examination in suspected sleeping sickness', meaning: 'Stages the disease (CNS involvement) and guides drug choice' },
  ],

  treatment: [
    { logic: 'Match drug to disease + stage', detail: 'African disease is treated by stage (early vs CNS); Chagas uses benznidazole/nifurtimox — the two syndromes are managed quite differently.' },
  ],

  mnemonics: [
    { hook: 'African = Asleep (tsetse, CNS); American = Achy heart (kissing bug, cardiomyopathy)', expansion: ['Winterbottom = African neck nodes', 'Romaña = Chagas eye swelling', 'Trypomastigote in blood'] },
  ],

  traps: [
    {
      questionCategory: 'Vector and mode of transmission',
      wrongInstinct: 'Chagas disease is transmitted directly by the bite of the reduviid bug',
      rightAnswer: 'T. cruzi is transmitted when infected reduviid-bug FAECES are rubbed into the bite wound or mucosa — not by the bite itself',
      why: 'The bug defaecates while feeding; scratching inoculates the parasite, which is why the Romaña sign appears at the eye.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Unilateral periorbital swelling (Romaña sign) at the site of inoculation is characteristic of:',
      options: [
        { id: 'a', text: 'African trypanosomiasis' },
        { id: 'b', text: 'Acute Chagas disease (T. cruzi)' },
        { id: 'c', text: 'Visceral leishmaniasis' },
        { id: 'd', text: 'Lymphatic filariasis' },
      ],
      answerId: 'b',
      explanation: 'The Romaña sign — unilateral periorbital oedema — marks acute Chagas disease at the site where reduviid-bug faeces were rubbed in.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The vector of African sleeping sickness is the:',
      options: [
        { id: 'a', text: 'Tsetse fly (Glossina)' },
        { id: 'b', text: 'Sandfly' },
        { id: 'c', text: 'Anopheles mosquito' },
        { id: 'd', text: 'Reduviid bug' },
      ],
      answerId: 'a',
      explanation: 'Trypanosoma brucei (African trypanosomiasis) is transmitted by the tsetse fly; the reduviid bug transmits American T. cruzi.',
      tests: 'mechanism',
    },
  ],
};

export default hhlTrypanosoma;
