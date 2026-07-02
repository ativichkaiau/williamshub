import type { Lecture } from '../../lib/types';

export const otherEnvelopedRnaViruses: Lecture = {
  id: 'other-enveloped-rna-viruses',
  title: 'Coronaviruses, Rabies & Haemorrhagic Fever Viruses',
  system: 'microbiology',
  source: 'L3 — RNA Viruses II (Enveloped)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L3 Corona/Rabies/Filo' },
    { kind: 'mechanism', label: 'Enveloped RNA; zoonoses' },
    { kind: 'exam', label: 'SARS-CoV-2; rabies; Ebola' },
  ],

  highYield: [
    '**CORONAVIRUSES (+ssRNA, enveloped, "crown" of spike proteins): cause common colds and the epidemic/pandemic respiratory diseases SARS, MERS and COVID-19 (SARS-CoV-2 — spike binds ACE2; ranges from mild URTI to pneumonia/ARDS, thrombosis, multisystem disease; controlled by vaccines and antivirals). Zoonotic origin (bats/intermediate hosts).**',
    '**RABIES (Rhabdovirus, bullet-shaped, −ssRNA): transmitted by animal BITE (dog, bat); the virus travels retrograde up peripheral NERVES to the CNS → encephalitis with hydrophobia/aerophobia, agitation → almost invariably FATAL once symptomatic. Long, variable incubation allows POST-EXPOSURE PROPHYLAXIS (wound care + rabies immunoglobulin + vaccine) to prevent disease. Negri bodies are the histological hallmark.**',
    '**VIRAL HAEMORRHAGIC FEVERS: FILOVIRUSES (EBOLA, Marburg — severe haemorrhagic fever, high mortality, human-to-human via body fluids, outbreaks needing strict isolation); ARENAVIRUSES (Lassa — rodent-borne); Hantavirus (rodent — pulmonary/renal syndromes). BUNYAVIRALES and others cause zoonotic febrile/haemorrhagic illness.**',
    '**TOGAVIRUS/rubella: RUBELLA (German measles — mild rash + lymphadenopathy, but CONGENITAL RUBELLA SYNDROME if infected in early pregnancy → cataracts, deafness, cardiac defects → MMR vaccine). Many of these are ZOONOSES or vaccine-preventable; barrier precautions and vaccination are key.**',
    '**The take-home: CORONAVIRUS (colds + SARS/MERS/COVID-19, spike→ACE2), RABIES (bite → retrograde nerve spread → fatal encephalitis; post-exposure prophylaxis works because of long incubation; Negri bodies), FILOVIRUS (Ebola/Marburg haemorrhagic fever, body-fluid spread), RUBELLA (congenital rubella syndrome → MMR).** The enveloped-virus fragility/spread is in [[virology-principles-classification]]; mosquito-borne enveloped RNA viruses are in [[arboviruses-mosquito-borne]].',
  ],

  mechanism: {
    title: 'Corona (SARS/MERS/COVID, spike→ACE2), rabies (bite→nerve→fatal encephalitis; PEP), filovirus (Ebola haemorrhagic fever), rubella (congenital syndrome)',
    steps: [
      { id: 's1', label: 'Coronavirus: colds + SARS/MERS/COVID-19; spike binds ACE2; zoonotic', emphasis: 'key' },
      { id: 's2', label: 'Rabies (rhabdovirus): bite → retrograde nerve spread → CNS; hydrophobia; Negri bodies', emphasis: 'danger' },
      { id: 's3', label: 'Rabies almost always fatal once symptomatic; long incubation → post-exposure prophylaxis works', emphasis: 'danger' },
      { id: 's4', label: 'Filoviruses (Ebola/Marburg) = haemorrhagic fever, body-fluid spread, isolate', emphasis: 'danger' },
      { id: 's5', label: 'Rubella → congenital rubella syndrome (cataracts/deafness/cardiac) → MMR', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Pneumonia/ARDS from a spike-protein virus binding ACE2', mechanism: 'SARS-CoV-2 (coronavirus)', significance: 'key' },
    { sign: 'Hydrophobia and fatal encephalitis after a dog bite', mechanism: 'Rabies (rhabdovirus) — retrograde nerve spread', significance: 'key' },
    { sign: 'Negri bodies in brain neurons', mechanism: 'Rabies', significance: 'key' },
    { sign: 'Severe haemorrhagic fever with high mortality in an outbreak', mechanism: 'Filovirus (Ebola/Marburg)', significance: 'key' },
    { sign: 'Cataracts, deafness and cardiac defects in a neonate', mechanism: 'Congenital rubella syndrome', significance: 'key' },
  ],

  investigations: [
    { clue: 'The receptor SARS-CoV-2 spike protein binds', meaning: 'ACE2' },
    { clue: 'How rabies reaches the CNS', meaning: 'Retrograde axonal transport up peripheral nerves' },
    { clue: 'Why post-exposure prophylaxis prevents rabies', meaning: 'The long, variable incubation period allows time to act' },
    { clue: 'The consequence of rubella infection in early pregnancy', meaning: 'Congenital rubella syndrome' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These enveloped RNA viruses include major zoonotic and vaccine-preventable threats: coronaviruses (pandemic respiratory disease, vaccines/antivirals), rabies (uniformly fatal once symptomatic, but PREVENTABLE by prompt post-exposure prophylaxis given the long incubation), filoviruses (high-mortality haemorrhagic fever needing strict isolation), and rubella (congenital rubella syndrome prevented by MMR). Recognising the bite→rabies pathway and the pregnancy risk of rubella changes urgent management. The structural context is [[virology-principles-classification]].' },
  ],

  mnemonics: [
    { hook: '"Corona = spike/ACE2 (COVID); Rabies = bite→nerve→fatal (Negri, give PEP); Filovirus = Ebola bleed"', expansion: ['Rabies PEP works (long incubation)', 'Rubella → congenital syndrome (MMR)'] },
    { hook: 'Rabies: "hydrophobia + retrograde nerve travel → prevent with post-exposure prophylaxis"', expansion: ['Fatal once symptomatic', 'Wound care + Ig + vaccine'] },
  ],

  traps: [
    {
      questionCategory: 'Rabies post-exposure prophylaxis',
      wrongInstinct: 'Because rabies is almost always fatal, nothing can be done after a bite',
      rightAnswer: 'Rabies has a LONG, variable INCUBATION period as the virus travels slowly up peripheral nerves, so prompt POST-EXPOSURE PROPHYLAXIS after a bite — thorough wound washing PLUS rabies IMMUNOGLOBULIN and VACCINE — reliably PREVENTS disease; it is only untreatable ONCE symptomatic (encephalitis) — so post-exposure prophylaxis is urgent and effective',
      why: 'The window before the virus reaches the CNS is what makes rabies preventable after exposure; assuming futility misses a life-saving, time-critical intervention.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Rabies virus reaches the central nervous system by:',
      options: [
        { id: 'a', text: 'Haematogenous spread only' },
        { id: 'b', text: 'Retrograde transport up peripheral nerves from the bite site' },
        { id: 'c', text: 'Inhalation into the lungs' },
        { id: 'd', text: 'Faecal-oral entry' },
      ],
      answerId: 'b',
      explanation: 'Rabies virus travels retrograde along peripheral nerve axons from the inoculation (bite) site to the CNS, causing fatal encephalitis (hydrophobia; Negri bodies). The slow nerve transit gives a long incubation, allowing effective post-exposure prophylaxis before symptoms.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Maternal infection in early pregnancy causing cataracts, sensorineural deafness and cardiac defects in the neonate is due to:',
      options: [
        { id: 'a', text: 'Rubella (congenital rubella syndrome)' },
        { id: 'b', text: 'Rhinovirus' },
        { id: 'c', text: 'Rotavirus' },
        { id: 'd', text: 'Rabies' },
      ],
      answerId: 'a',
      explanation: 'Rubella infection in early pregnancy causes congenital rubella syndrome — classically cataracts, sensorineural deafness and cardiac defects (e.g. PDA). It is prevented by MMR vaccination, and rubella is otherwise a mild rash illness.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default otherEnvelopedRnaViruses;
