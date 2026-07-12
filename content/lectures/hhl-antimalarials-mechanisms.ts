import type { Lecture } from '../../lib/types';

export const hhlAntimalarialsMechanisms: Lecture = {
  id: 'hhl-antimalarials-mechanisms',
  title: 'Antimalarial Drugs: Classes & Mechanisms',
  system: 'heme',
  source: 'L26 — Antimalarial Drugs',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L26 Antimalarials' },
    { kind: 'treatment', label: 'Artemisinins · quinolines · antifolates' },
    { kind: 'mechanism', label: 'Heme detox · radical cure' },
  ],

  highYield: [
    '**Blood schizonticides** kill the erythrocytic stage (treat the illness): **artemisinins** (fastest-acting), **quinolines** (chloroquine, mefloquine, quinine, lumefantrine) and **antifolates** (sulfadoxine–pyrimethamine).',
    '**Artemisinins:** the **endoperoxide bridge is cleaved by parasite iron/heme → free radicals** that kill the parasite. Very fast but **short half-life → always given in combination (ACT)**.',
    '**Chloroquine:** blocks **heme detoxification** (inhibits conversion of toxic heme to inert hemozoin) → free heme kills the parasite. **Resistance via the PfCRT transporter** is widespread in falciparum.',
    '**Antifolates:** **pyrimethamine (DHFR)** + **sulfadoxine (DHPS)** give **sequential blockade** of folate synthesis.',
    '**Primaquine and tafenoquine are the ONLY drugs that kill liver hypnozoites (radical cure)** and are **gametocytocidal** — but they cause **oxidative hemolysis in G6PD deficiency**, so **test G6PD first**. See [[hhl-antimalarial-treatment]].',
  ],

  mechanism: {
    title: 'Map each drug to the parasite stage it kills',
    steps: [
      { id: 's1', label: 'Liver hypnozoites (vivax/ovale) → primaquine / tafenoquine only', emphasis: 'key' },
      { id: 's2', label: 'Blood erythrocytic stage → artemisinins / quinolines / antifolates', emphasis: 'key' },
      { id: 's3', label: 'Artemisinin: iron-heme cleaves endoperoxide → free radicals kill parasite', emphasis: 'key' },
      { id: 's4', label: 'Chloroquine: inhibits heme detox → toxic free heme; PfCRT efflux = resistance', emphasis: 'key' },
      { id: 's5', label: 'Primaquine in G6PD deficiency → oxidative intravascular hemolysis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dark urine and falling Hb after starting primaquine', mechanism: 'Oxidative intravascular hemolysis in a G6PD-deficient patient', significance: 'key' },
    { sign: 'Tinnitus, headache, nausea on quinine (cinchonism)', mechanism: 'Dose-related quinine toxicity', significance: 'supportive' },
    { sign: 'QT prolongation with quinine / mefloquine / lumefantrine', mechanism: 'Quinoline cardiac conduction effect', significance: 'supportive' },
    { sign: 'Neuropsychiatric symptoms on mefloquine', mechanism: 'CNS adverse effect of the drug', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'G6PD status before primaquine or tafenoquine', meaning: 'Screens for the deficiency that causes drug-induced hemolysis' },
    { clue: 'Falling Hb, high LDH, hemoglobinuria after an 8-aminoquinoline', meaning: 'G6PD-deficient oxidative hemolysis' },
    { clue: 'Infection from a chloroquine-resistant area', meaning: 'PfCRT-mediated resistance — use an ACT instead' },
    { clue: 'ECG QT when combining quinolines', meaning: 'Monitors additive conduction risk' },
  ],

  treatment: [
    { logic: 'Match the drug to the stage', detail: 'Blood schizonticides clear symptoms; primaquine/tafenoquine clear hypnozoites and gametocytes.' },
    { logic: 'Always combine artemisinins (ACT)', detail: 'The short half-life is covered by a longer-acting partner drug, which also protects against resistance.' },
    { logic: 'Test G6PD before radical cure', detail: 'Prevents severe oxidative hemolysis from primaquine/tafenoquine.' },
  ],

  mnemonics: [
    { hook: 'Only Primaquine/tafenoquine Purge the liver (hypnozoites) — but they Puncture G6PD-deficient RBCs', expansion: ['8-aminoquinolines = radical cure + gametocytocidal', 'Hemolysis risk in G6PD deficiency → test first'] },
    { hook: 'Artemisinin = Activated by iron → free radicals', expansion: ['Endoperoxide bridge cleaved by heme iron', 'Fast, short half-life → always combined'] },
  ],

  traps: [
    {
      questionCategory: 'Prescribing radical cure safely',
      wrongInstinct: 'Give primaquine to every vivax patient to prevent relapse',
      rightAnswer: 'Check G6PD status FIRST — primaquine (and tafenoquine) cause severe oxidative hemolysis in G6PD deficiency',
      why: '8-aminoquinolines are oxidant drugs; in G6PD-deficient red cells they trigger acute intravascular hemolysis, so screening precedes the dose.',
    },
    {
      questionCategory: 'Which parasites chloroquine still covers',
      wrongInstinct: 'Chloroquine is adequate for falciparum',
      rightAnswer: 'PfCRT-mediated resistance makes chloroquine unreliable for falciparum; it remains useful mainly for (chloroquine-sensitive) vivax',
      why: 'Widespread PfCRT efflux mutations defeat chloroquine in falciparum, which is why ACT is first-line there.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which drug class is required to eradicate the dormant hepatic hypnozoites of P. vivax, and what must be checked before giving it?',
      options: [
        { id: 'a', text: 'Artemisinins; check renal function' },
        { id: 'b', text: '8-aminoquinolines (primaquine/tafenoquine); check G6PD status' },
        { id: 'c', text: 'Antifolates; check folate level' },
        { id: 'd', text: 'Chloroquine; check the QT interval' },
      ],
      answerId: 'b',
      explanation: 'Only the 8-aminoquinolines primaquine and tafenoquine kill hypnozoites (radical cure). They cause oxidative hemolysis in G6PD deficiency, so G6PD status must be checked first.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'What is the mechanism by which artemisinins kill malaria parasites?',
      options: [
        { id: 'a', text: 'Inhibition of dihydrofolate reductase' },
        { id: 'b', text: 'Blockade of heme polymerisation into hemozoin' },
        { id: 'c', text: 'Iron/heme-mediated cleavage of the endoperoxide bridge generating cytotoxic free radicals' },
        { id: 'd', text: 'Inhibition of the parasite mitochondrial electron transport chain' },
      ],
      answerId: 'c',
      explanation: 'Artemisinins contain an endoperoxide bridge cleaved by parasite iron/heme, generating free radicals that damage parasite proteins and lipids — a fast-acting but short-lived effect, hence combination therapy.',
      tests: 'mechanism',
    },
  ],
};

export default hhlAntimalarialsMechanisms;
