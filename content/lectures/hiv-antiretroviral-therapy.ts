import type { Lecture } from '../../lib/types';

export const hivAntiretroviralTherapy: Lecture = {
  id: 'hiv-antiretroviral-therapy',
  title: 'HIV Antiretroviral Therapy',
  system: 'pharmacology',
  source: 'L6 — Antiviral & Antiretroviral Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L6 Antiretrovirals' },
    { kind: 'mechanism', label: 'ART classes & the viral cycle' },
    { kind: 'exam', label: 'HAART; HLA-B*57:01; PrEP' },
  ],

  highYield: [
    'HIV is treated with COMBINATION antiretroviral therapy (ART/HAART) — ≥3 drugs from ≥2 CLASSES — to suppress replication below detection and prevent RESISTANCE (HIV mutates rapidly under single-drug pressure). Each class blocks a different step of the viral life cycle.',
    'Classes: NRTIs (nucleoside/tide reverse-transcriptase inhibitors — tenofovir, emtricitabine, abacavir, lamivudine, zidovudine; the "backbone"); NNRTIs (efavirenz, rilpivirine); PROTEASE inhibitors ("-navir", usually ritonavir/cobicistat-BOOSTED); INTEGRASE strand-transfer inhibitors ("-tegravir" — dolutegravir/bictegravir, now first-line anchor); and ENTRY inhibitors (maraviroc/CCR5, fusion inhibitors).',
    'Signature toxicities/interactions: ABACAVIR hypersensitivity linked to HLA-B*57:01 (SCREEN before use — [[pharmacogenomics]]); tenofovir → renal/bone; zidovudine → anaemia/marrow; efavirenz → CNS effects/teratogenicity; PROTEASE inhibitors → CYP3A4 interactions + metabolic syndrome/lipodystrophy; integrase inhibitors are generally well tolerated (weight gain).',
    'Beyond treatment, ART: makes the virus UNTRANSMITTABLE when suppressed (U=U); is used as PRE-EXPOSURE PROPHYLAXIS (PrEP — tenofovir/emtricitabine) and POST-EXPOSURE PROPHYLAXIS (PEP); and PREVENTS mother-to-child transmission. Adherence is critical — poor adherence breeds resistance. Watch for IMMUNE RECONSTITUTION inflammatory syndrome when starting ART with a low CD4 count.',
    '**The take-home: HIV = COMBINATION ART (≥3 drugs, ≥2 classes: NRTI backbone + integrase inhibitor/NNRTI/boosted-PI) to suppress and prevent resistance; screen HLA-B*57:01 before abacavir; PIs cause CYP interactions; ART also = U=U, PrEP/PEP and prevents vertical transmission.** The broader antiviral overview is [[antiviral-antiretroviral-agents]]; herpes/CMV agents in [[herpesvirus-cmv-antivirals]]; HLA screening in [[pharmacogenomics]].',
  ],

  mechanism: {
    title: 'Combination ART (≥3 drugs, ≥2 classes) blocks distinct cycle steps → suppress + prevent resistance; class-specific toxicities; U=U/PrEP/PEP',
    steps: [
      { id: 's1', label: 'Combination ART: ≥3 drugs, ≥2 classes → suppress virus + prevent resistance', emphasis: 'key' },
      { id: 's2', label: 'NRTI backbone + integrase inhibitor (first-line anchor) / NNRTI / boosted PI', emphasis: 'key' },
      { id: 's3', label: 'Screen HLA-B*57:01 before abacavir (hypersensitivity)', emphasis: 'danger' },
      { id: 's4', label: 'PIs → CYP3A4 interactions + metabolic syndrome; tenofovir renal/bone; efavirenz CNS/teratogenic', emphasis: 'key' },
      { id: 's5', label: 'ART = U=U, PrEP/PEP, prevents vertical transmission; adherence prevents resistance', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Life-threatening hypersensitivity to an NRTI', mechanism: 'Abacavir — HLA-B*57:01 (screen first)', significance: 'key' },
    { sign: 'Many drug interactions and lipodystrophy on ART', mechanism: 'Protease inhibitor CYP3A4 effects', significance: 'key' },
    { sign: 'Rapid resistance when a single antiretroviral is used', mechanism: 'HIV mutation under monotherapy (hence combination ART)', significance: 'key' },
    { sign: 'Untransmittable HIV with sustained viral suppression', mechanism: 'U=U (undetectable = untransmittable)', significance: 'supportive' },
    { sign: 'Prophylaxis with tenofovir/emtricitabine before exposure', mechanism: 'Pre-exposure prophylaxis (PrEP)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The minimum composition of standard HIV therapy', meaning: '≥3 drugs from ≥2 classes (combination ART)' },
    { clue: 'The first-line anchor class now favoured', meaning: 'Integrase strand-transfer inhibitors ("-tegravir")' },
    { clue: 'The allele screened before abacavir', meaning: 'HLA-B*57:01' },
    { clue: 'The preventive uses of ART', meaning: 'U=U, PrEP/PEP, prevention of mother-to-child transmission' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Combination ART is essential to suppress HIV and prevent resistance; class choice balances efficacy, tolerability and interactions (integrase inhibitors are first-line anchors; PIs cause CYP3A4 interactions — [[drug-interactions-mechanisms]]). Pharmacogenomic screening (HLA-B*57:01 before abacavir — [[pharmacogenomics]]) prevents hypersensitivity, and ART\'s preventive roles (U=U, PrEP/PEP, vertical transmission) are public-health cornerstones. This complements the antiviral overview of [[antiviral-antiretroviral-agents]] and herpes/CMV agents of [[herpesvirus-cmv-antivirals]].' },
  ],

  mnemonics: [
    { hook: 'ART suffixes: "-vir(ine) NRTI/NNRTI backbone, -navir protease, -tegravir integrase"', expansion: ['≥3 drugs, ≥2 classes', 'Integrase = first-line anchor'] },
    { hook: '"Screen HLA-B*57:01 before Abacavir"; ART = U=U + PrEP/PEP', expansion: ['PIs → CYP interactions', 'Adherence prevents resistance'] },
  ],

  traps: [
    {
      questionCategory: 'Why HIV is never treated with one drug',
      wrongInstinct: 'A single potent antiretroviral should suppress HIV if the drug is strong enough',
      rightAnswer: 'HIV replicates rapidly with an error-prone reverse transcriptase, so under SINGLE-drug pressure it quickly selects RESISTANT mutants — therefore treatment always uses a COMBINATION of ≥3 drugs from ≥2 classes (attacking different steps) to suppress replication fully and prevent resistance; monotherapy predictably fails',
      why: 'The high mutation rate means monotherapy selects resistance within weeks; combination therapy is the defining principle of successful HIV treatment (and of PrEP/PEP regimens).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Before prescribing abacavir, testing is recommended for which allele to avoid a severe hypersensitivity reaction?',
      options: [
        { id: 'a', text: 'HLA-B*15:02' },
        { id: 'b', text: 'HLA-B*57:01' },
        { id: 'c', text: 'HLA-B*58:01' },
        { id: 'd', text: 'HLA-DR4' },
      ],
      answerId: 'b',
      explanation: 'Abacavir hypersensitivity is strongly associated with HLA-B*57:01, so patients are screened before starting it (a pharmacogenomic safeguard). HLA-B*15:02 relates to carbamazepine and HLA-B*58:01 to allopurinol SCARs.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The rationale for using at least three antiretroviral drugs from two classes in HIV is to:',
      options: [
        { id: 'a', text: 'Reduce cost' },
        { id: 'b', text: 'Achieve full viral suppression and prevent the emergence of resistance' },
        { id: 'c', text: 'Avoid the need for adherence' },
        { id: 'd', text: 'Increase toxicity deliberately' },
      ],
      answerId: 'b',
      explanation: 'HIV mutates rapidly, so single-drug therapy quickly selects resistance. Combining ≥3 drugs from ≥2 classes that block different steps of the life cycle achieves durable viral suppression and prevents resistance — the basis of HAART.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hivAntiretroviralTherapy;
