import type { Lecture } from '../../lib/types';

export const arbovirusesMosquitoBorne: Lecture = {
  id: 'arboviruses-mosquito-borne',
  title: 'Arboviruses (Mosquito-borne)',
  system: 'microbiology',
  source: 'L5 — RNA Viruses III (Arboviruses)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L5 Arboviruses' },
    { kind: 'mechanism', label: 'Vector-borne enveloped RNA' },
    { kind: 'exam', label: 'Dengue; Zika; JE' },
  ],

  highYield: [
    '**ARBOVIRUSES ("ARthropod-BOrne") are transmitted by mosquito/tick vectors and are highly relevant in the tropics (Thailand). The major mosquito genera: AEDES (day-biting — DENGUE, ZIKA, CHIKUNGUNYA, yellow fever) and CULEX (JAPANESE ENCEPHALITIS, West Nile). Most are FLAVIVIRUSES (+ssRNA) or togaviruses (chikungunya).**',
    '**DENGUE (4 serotypes) → high fever, severe myalgia ("breakbone"), rash, thrombocytopenia. SECONDARY infection with a DIFFERENT serotype risks SEVERE DENGUE (dengue haemorrhagic fever/shock) via ANTIBODY-DEPENDENT ENHANCEMENT — plasma leakage, bleeding, shock. Warning signs (abdominal pain, persistent vomiting, mucosal bleeding, rising haematocrit with falling platelets) prompt urgent fluid management.**',
    '**ZIKA (Aedes; also sexual/vertical) → usually mild, but CONGENITAL infection causes MICROCEPHALY and can trigger Guillain-Barré syndrome. CHIKUNGUNYA → fever + severe, prolonged ARTHRALGIA. JAPANESE ENCEPHALITIS (Culex; pig/bird reservoir) → encephalitis (a leading cause in Asia; vaccine-preventable). YELLOW FEVER → haemorrhagic fever with jaundice (live vaccine).**',
    '**Diagnosis: NS1 antigen/PCR (early) and IgM serology (dengue); PCR/serology for others. Management is SUPPORTIVE with careful fluid balance (dengue — AVOID NSAIDs/aspirin because of bleeding risk); prevention is VECTOR CONTROL (eliminate standing water, repellents) and vaccines (JE, yellow fever, dengue in some settings).**',
    '**The take-home: arboviruses (Aedes = dengue/Zika/chikungunya/yellow fever; Culex = JE/West Nile) — DENGUE (breakbone fever; secondary heterotypic infection → severe dengue via antibody-dependent enhancement; supportive fluids, no NSAIDs), ZIKA (microcephaly, GBS), CHIKUNGUNYA (arthralgia), JE (encephalitis, vaccine), yellow fever (vaccine). Vector control is key.** The enveloped RNA context is [[virology-principles-classification]]; the mosquito vectors overlap PHI ([[mosquito-borne-diseases]]).',
  ],

  mechanism: {
    title: 'Mosquito-borne (Aedes: dengue/Zika/chikungunya; Culex: JE); dengue secondary infection → severe (ADE); supportive + vector control',
    steps: [
      { id: 's1', label: 'Aedes (day-biter): dengue, Zika, chikungunya, yellow fever; Culex: JE, West Nile', emphasis: 'key' },
      { id: 's2', label: 'Dengue: breakbone fever, thrombocytopenia; 4 serotypes', emphasis: 'key' },
      { id: 's3', label: 'Secondary heterotypic dengue → severe (antibody-dependent enhancement): leak/shock/bleed', emphasis: 'danger' },
      { id: 's4', label: 'Zika → microcephaly/GBS; chikungunya → arthralgia; JE → encephalitis (vaccine)', emphasis: 'key' },
      { id: 's5', label: 'Supportive fluids (avoid NSAIDs in dengue); vector control + vaccines', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'High fever, severe myalgia, rash and thrombocytopenia in the tropics', mechanism: 'Dengue (flavivirus)', significance: 'key' },
    { sign: 'Plasma leakage, bleeding and shock in a second dengue infection', mechanism: 'Severe dengue (antibody-dependent enhancement)', significance: 'key' },
    { sign: 'Microcephaly in a neonate after maternal infection', mechanism: 'Congenital Zika', significance: 'key' },
    { sign: 'Fever with severe, prolonged joint pain', mechanism: 'Chikungunya', significance: 'key' },
    { sign: 'Encephalitis from a Culex-borne virus (pig/bird reservoir)', mechanism: 'Japanese encephalitis (vaccine-preventable)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The mosquito vector of dengue/Zika/chikungunya', meaning: 'Aedes (day-biting)' },
    { clue: 'The mechanism of severe dengue in secondary infection', meaning: 'Antibody-dependent enhancement (different serotype)' },
    { clue: 'The congenital consequence of Zika', meaning: 'Microcephaly' },
    { clue: 'Drugs to avoid in dengue', meaning: 'NSAIDs/aspirin (bleeding risk)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Arboviruses are major tropical infections managed supportively with vector control and vaccines. Dengue is the standout: recognising warning signs and the antibody-dependent-enhancement risk of severe dengue in secondary heterotypic infection guides careful fluid management and avoidance of NSAIDs/aspirin. Zika (microcephaly/GBS), chikungunya (arthralgia) and JE (encephalitis, vaccine) each have distinct clinical/preventive implications. The mosquito vectors overlap PHI ([[mosquito-borne-diseases]]); enveloped RNA context is [[virology-principles-classification]].' },
  ],

  mnemonics: [
    { hook: '"Aedes = dengue/Zika/chikungunya/yellow fever (day-biter); Culex = JE/West Nile"', expansion: ['Dengue = breakbone + low platelets', 'Zika = microcephaly'] },
    { hook: 'Severe dengue = "2nd different serotype → antibody-dependent enhancement → leak/shock"', expansion: ['No NSAIDs/aspirin', 'Supportive fluids'] },
  ],

  traps: [
    {
      questionCategory: 'Severe dengue and prior immunity',
      wrongInstinct: 'Having had dengue once makes future dengue infections milder because of immunity',
      rightAnswer: 'Prior dengue gives lifelong immunity only to that SEROTYPE; infection with a DIFFERENT serotype can be MORE severe because non-neutralising cross-reactive antibodies enhance viral uptake (ANTIBODY-DEPENDENT ENHANCEMENT), causing plasma leakage, haemorrhage and shock (severe dengue) — so a second, heterotypic infection is the high-risk scenario',
      why: 'Counter-intuitively, previous exposure increases the risk of severe disease on heterotypic re-infection, which shapes clinical vigilance and vaccine strategy in dengue-endemic areas.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Severe dengue (haemorrhagic fever/shock) is most associated with:',
      options: [
        { id: 'a', text: 'A first infection with any serotype' },
        { id: 'b', text: 'Secondary infection with a different serotype (antibody-dependent enhancement)' },
        { id: 'c', text: 'Vaccination' },
        { id: 'd', text: 'Culex mosquito transmission' },
      ],
      answerId: 'b',
      explanation: 'Severe dengue characteristically occurs with a secondary infection by a different serotype: pre-existing non-neutralising antibodies enhance viral entry (antibody-dependent enhancement), driving plasma leakage, bleeding and shock. Management is careful fluid balance, avoiding NSAIDs/aspirin.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which arbovirus, transmitted by day-biting Aedes mosquitoes, causes congenital microcephaly?',
      options: [
        { id: 'a', text: 'Japanese encephalitis virus' },
        { id: 'b', text: 'Zika virus' },
        { id: 'c', text: 'Chikungunya virus' },
        { id: 'd', text: 'West Nile virus' },
      ],
      answerId: 'b',
      explanation: 'Zika virus (Aedes-borne, also sexually and vertically transmitted) is usually mild but causes congenital Zika syndrome including microcephaly, and can trigger Guillain-Barré syndrome. Japanese encephalitis (Culex) causes encephalitis; chikungunya causes prolonged arthralgia.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default arbovirusesMosquitoBorne;
