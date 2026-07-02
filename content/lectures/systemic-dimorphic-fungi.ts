import type { Lecture } from '../../lib/types';

export const systemicDimorphicFungi: Lecture = {
  id: 'systemic-dimorphic-fungi',
  title: 'Systemic Dimorphic Fungi',
  system: 'microbiology',
  source: 'L23 — Dimorphic Pathogenic Fungi',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L23 Dimorphics' },
    { kind: 'mechanism', label: 'Mould 25°C / yeast 37°C; inhaled' },
    { kind: 'exam', label: 'Histoplasma/Coccidioides/Blastomyces geography' },
  ],

  highYield: [
    '**The systemic ("endemic") dimorphic fungi are MOULD in the environment (25°C) and YEAST in tissue (37°C) — "mould in the cold, yeast in the heat." They are acquired by INHALING spores from soil, usually cause a self-limited flu-like PULMONARY illness in the immunocompetent, but DISSEMINATE in the immunocompromised (HIV/AIDS, steroids). They are defined by GEOGRAPHY and tissue morphology.**',
    '**HISTOPLASMA CAPSULATUM (Ohio/Mississippi valleys; BAT and BIRD droppings, caves) → tissue yeasts INSIDE MACROPHAGES (small intracellular yeasts); pulmonary histoplasmosis mimics TB, with disseminated disease in AIDS (hepatosplenomegaly, pancytopenia, oral ulcers). BLASTOMYCES (overlapping US regions) → BROAD-BASED BUDDING yeast; pulmonary + verrucous SKIN and BONE lesions.**',
    '**COCCIDIOIDES (southwestern USA/Mexico deserts, "Valley fever"; risk after dust exposure/earthquakes) → forms distinctive tissue SPHERULES packed with endospores (not a budding yeast); causes pneumonia with erythema nodosum ("desert rheumatism") and can disseminate (meningitis), especially in pregnancy and certain ethnicities. PARACOCCIDIOIDES (Latin America) → "CAPTAIN\'S WHEEL"/mariner\'s-wheel multiple budding yeast; chronic pulmonary + mucosal (oral) lesions in adult men.**',
    '**Diagnosis: histopathology/culture (handle as a laboratory hazard), plus antigen/serology. Treatment: mild disease may be observed; significant/disseminated disease → ITRACONAZOLE (or fluconazole for coccidioidal meningitis), with AMPHOTERICIN B for severe/disseminated infection. The exam keys are GEOGRAPHY + tissue morphology: intracellular yeast (Histoplasma), broad-based bud (Blastomyces), spherule (Coccidioides), captain\'s wheel (Paracoccidioides).**',
    '**The take-home: dimorphic ("mould cold/yeast hot"), INHALED, disseminate in immunocompromised. HISTOPLASMA (bird/bat droppings; intracellular yeast; TB-mimic/AIDS). BLASTOMYCES (broad-based bud; lung/skin/bone). COCCIDIOIDES ("Valley fever"; SPHERULE; erythema nodosum). PARACOCCIDIOIDES (Latin America; CAPTAIN\'S WHEEL). Treat itraconazole/amphotericin.** The SE-Asian dimorph and sporotrichosis are [[talaromyces-sporothrix]]; fungal biology is [[fungal-biology-classification]].',
  ],

  mechanism: {
    title: 'Dimorphic (mould 25°C/yeast 37°C), inhaled, disseminate in immunocompromised; by geography + tissue form: Histoplasma (intracellular yeast, bird/bat), Blastomyces (broad-based bud), Coccidioides (spherule), Paracoccidioides (captain\'s wheel)',
    steps: [
      { id: 's1', label: 'Dimorphic: mould 25°C / yeast 37°C; inhaled spores; endemic by geography', emphasis: 'key' },
      { id: 's2', label: 'Self-limited pulmonary illness → disseminates in HIV/immunosuppression', emphasis: 'danger' },
      { id: 's3', label: 'Histoplasma: intracellular yeast in macrophages (bird/bat droppings; TB-mimic/AIDS)', emphasis: 'key' },
      { id: 's4', label: 'Blastomyces = broad-based bud (lung/skin/bone); Coccidioides = spherule ("Valley fever", erythema nodosum)', emphasis: 'key' },
      { id: 's5', label: 'Paracoccidioides = captain\'s wheel (Latin America); treat itraconazole/amphotericin', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'TB-like pulmonary illness after cave/bird-dropping exposure; yeasts within macrophages', mechanism: 'Histoplasmosis', significance: 'key' },
    { sign: 'Broad-based budding yeast with lung, skin and bone lesions', mechanism: 'Blastomycosis', significance: 'key' },
    { sign: 'Pneumonia with erythema nodosum after desert dust exposure ("Valley fever")', mechanism: 'Coccidioidomycosis (spherules)', significance: 'key' },
    { sign: 'Chronic pulmonary and oral mucosal lesions in a Latin American man; "captain\'s wheel" yeast', mechanism: 'Paracoccidioidomycosis', significance: 'supportive' },
    { sign: 'Disseminated dimorphic fungal disease in AIDS', mechanism: 'Loss of T-cell immunity', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The dimorphic fungus living inside macrophages', meaning: 'Histoplasma capsulatum' },
    { clue: 'The tissue form of Coccidioides', meaning: 'Spherule (with endospores)' },
    { clue: 'The broad-based budding dimorphic fungus', meaning: 'Blastomyces' },
    { clue: 'The drugs for significant/disseminated disease', meaning: 'Itraconazole (mild) / amphotericin B (severe)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The endemic dimorphic fungi are inhaled soil organisms (mould at 25°C, yeast at 37°C) that usually cause a self-limited pneumonia but disseminate in immunocompromised hosts. They are identified by geography and tissue morphology — Histoplasma (intracellular yeast, bird/bat droppings, TB-mimic and AIDS disseminator), Blastomyces (broad-based bud; lung/skin/bone), Coccidioides (spherule; "Valley fever" with erythema nodosum, disseminates in pregnancy), and Paracoccidioides (captain\'s wheel; Latin American men). Mild disease may be observed; significant/disseminated disease is treated with itraconazole or amphotericin B. The SE-Asian dimorph is [[talaromyces-sporothrix]].' },
  ],

  mnemonics: [
    { hook: 'Tissue forms: "Histo = inside macrophages; Blasto = Broad-based Bud; Cocci = spheruLe; Paracocci = captain\'s wheeL"', expansion: ['Mould cold / yeast hot', 'Inhaled; disseminate in AIDS'] },
    { hook: '"Valley fever = Coccidioides (desert dust) + erythema nodosum"', expansion: ['Histoplasma = bird/bat/caves', 'Itraconazole/amphotericin'] },
  ],

  traps: [
    {
      questionCategory: 'Dimorphic fungi in the immunocompetent vs immunocompromised',
      wrongInstinct: 'The endemic dimorphic fungi always cause severe systemic disease in anyone infected',
      rightAnswer: 'In IMMUNOCOMPETENT hosts, inhaling these dimorphic fungi usually causes a SELF-LIMITED, often subclinical flu-like PULMONARY illness that resolves without treatment; it is in the IMMUNOCOMPROMISED (HIV/AIDS, steroids, transplant) — or with a heavy inoculum — that they DISSEMINATE to cause serious multi-organ disease requiring antifungal therapy',
      why: 'Assuming all infections are severe over-treats the many self-limited immunocompetent cases and understates the danger in the immunocompromised; host immunity is the key determinant of outcome and treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which dimorphic fungus classically survives inside macrophages, is associated with bird/bat droppings and caves, and can mimic tuberculosis?',
      options: [
        { id: 'a', text: 'Histoplasma capsulatum' },
        { id: 'b', text: 'Coccidioides immitis' },
        { id: 'c', text: 'Blastomyces dermatitidis' },
        { id: 'd', text: 'Paracoccidioides brasiliensis' },
      ],
      answerId: 'a',
      explanation: 'Histoplasma capsulatum forms small intracellular yeasts within macrophages, is acquired from soil enriched with bird/bat droppings (caves), causes a TB-like pulmonary illness, and disseminates in AIDS (hepatosplenomegaly, pancytopenia, oral ulcers).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Coccidioidomycosis ("Valley fever"), acquired by inhaling arthroconidia from southwestern-US desert soil, forms which characteristic tissue structure?',
      options: [
        { id: 'a', text: 'Spherules containing endospores' },
        { id: 'b', text: 'Broad-based budding yeasts' },
        { id: 'c', text: 'A "captain\'s wheel" of multiple buds' },
        { id: 'd', text: 'Yeasts inside macrophages' },
      ],
      answerId: 'a',
      explanation: 'Coccidioides forms distinctive spherules packed with endospores in tissue (not a budding yeast); it causes "Valley fever" — pneumonia with erythema nodosum — and can disseminate, especially in pregnancy and certain ethnic groups.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default systemicDimorphicFungi;
