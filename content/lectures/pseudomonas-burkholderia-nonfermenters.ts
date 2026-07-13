import type { Lecture } from '../../lib/types';

export const pseudomonasBurkholderiaNonfermenters: Lecture = {
  id: 'pseudomonas-burkholderia-nonfermenters',
  title: 'Pseudomonas, Burkholderia & Non-Fermenters',
  system: 'microbiology',
  source: 'L14 — Gram-Negative Bacilli II',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L14 Non-fermenters' },
    { kind: 'mechanism', label: 'Oxidase+ aerobes; melioidosis' },
    { kind: 'exam', label: 'Pseudomonas pyocyanin; melioidosis (Thailand)' },
  ],

  highYield: [
    'Non-fermenting Gram-negative rods do NOT ferment glucose (aerobic, mostly OXIDASE-POSITIVE) and are environmental, often MULTIDRUG-RESISTANT opportunists. PSEUDOMONAS AERUGINOSA is oxidase-positive, produces blue-green PYOCYANIN/pyoverdin pigment and a fruity/grape odour, and thrives in moisture. It causes infections in specific settings: BURNS and wounds, VENTILATOR-associated pneumonia, CYSTIC FIBROSIS (mucoid biofilm), "hot-tub" folliculitis, malignant otitis externa and osteomyelitis (diabetics, puncture wounds through shoes), and neutropenic sepsis (ecthyma gangrenosum).',
    '*Pseudomonas* is intrinsically resistant to many antibiotics (efflux, low permeability, β-lactamases), so ANTI-PSEUDOMONAL agents are needed (e.g. piperacillin-tazobactam, ceftazidime/cefepime, carbapenems [not ertapenem], fluoroquinolones, aminoglycosides), often in combination. It is a major nosocomial pathogen.',
    'BURKHOLDERIA PSEUDOMALLEI causes MELIOIDOSIS — highly endemic in NORTHEAST THAILAND and SE Asia; acquired from SOIL/water (inoculation, inhalation) especially in rice farmers and DIABETICS. It is a facultative intracellular organism producing protean disease: pneumonia, abscesses (lung, liver, spleen, skin), and sepsis, with a "safety-pin" bipolar-staining appearance. Treatment is prolonged — an intensive IV phase (CEFTAZIDIME or a carbapenem) then months of oral ERADICATION (co-trimoxazole) — because relapse is common. *B. cepacia* is a CF/nosocomial pathogen.',
    'Other non-fermenters: ACINETOBACTER BAUMANNII (nosocomial, ventilator/wound, extensively drug-resistant) and STENOTROPHOMONAS MALTOPHILIA (resistant to carbapenems; treat with co-trimoxazole). These are classic hospital multidrug-resistant Gram-negatives.',
    '**The take-home: non-fermenters = aerobic, oxidase+, drug-resistant opportunists. PSEUDOMONAS AERUGINOSA = pyocyanin/moisture → burns, VAP, CYSTIC FIBROSIS, hot-tub folliculitis, diabetic osteomyelitis; needs anti-pseudomonal drugs. BURKHOLDERIA PSEUDOMALLEI = MELIOIDOSIS (NE Thailand, soil, diabetics; abscesses/sepsis; ceftazidime then months of co-trimoxazole). Acinetobacter/Stenotrophomonas = resistant nosocomial.** Curved rods (*Vibrio*) are [[vibrio-campylobacter-helicobacter]]; resistance is [[antibiotic-resistance-mechanisms]].',
  ],

  mechanism: {
    title: 'Non-fermenters (aerobic, oxidase+, resistant): Pseudomonas aeruginosa (pyocyanin/moisture → burns/VAP/CF/diabetic; anti-pseudomonal drugs); Burkholderia pseudomallei = melioidosis (NE Thailand soil/diabetics; prolonged Rx); Acinetobacter/Stenotrophomonas',
    steps: [
      { id: 's1', label: 'Non-fermenters: aerobic, oxidase+, environmental, multidrug-resistant', emphasis: 'key' },
      { id: 's2', label: 'P. aeruginosa: pyocyanin/blue-green, moisture; burns, VAP, CF, hot-tub folliculitis', emphasis: 'key' },
      { id: 's3', label: 'Pseudomonas intrinsically resistant → needs anti-pseudomonal agents (± combination)', emphasis: 'danger' },
      { id: 's4', label: 'B. pseudomallei = melioidosis: NE Thailand/SE Asia soil, diabetics; abscesses/sepsis', emphasis: 'danger' },
      { id: 's5', label: 'Melioidosis Rx: IV ceftazidime/carbapenem → months oral co-trimoxazole (relapse-prone)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Blue-green pigmented, fruity-smelling Gram-negative rod from a burn wound', mechanism: 'Pseudomonas aeruginosa (pyocyanin)', significance: 'key' },
    { sign: 'Chronic mucoid Pseudomonas colonisation in cystic fibrosis', mechanism: 'Biofilm adaptation', significance: 'key' },
    { sign: 'Pneumonia, liver/splenic abscesses and sepsis in a NE-Thai diabetic rice farmer', mechanism: 'Melioidosis (Burkholderia pseudomallei)', significance: 'key' },
    { sign: 'Osteomyelitis after a nail puncture through a shoe', mechanism: 'Pseudomonas aeruginosa', significance: 'supportive' },
    { sign: 'Extensively drug-resistant ventilator-associated pneumonia', mechanism: 'Acinetobacter baumannii', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The blue-green pigment of Pseudomonas', meaning: 'Pyocyanin (+ pyoverdin)' },
    { clue: 'The soil organism causing melioidosis in NE Thailand', meaning: 'Burkholderia pseudomallei' },
    { clue: 'The host most predisposed to melioidosis', meaning: 'Diabetics (soil/water exposure)' },
    { clue: 'The oral eradication drug for melioidosis', meaning: 'Co-trimoxazole (months)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Non-fermenting Gram-negative rods are drug-resistant opportunists whose management hinges on recognition. *Pseudomonas aeruginosa* (pyocyanin, moisture-loving) infects burns, ventilated patients, cystic-fibrosis lungs and diabetic feet and needs specific anti-pseudomonal antibiotics. *Burkholderia* pseudomallei causes melioidosis — essential in Northeast Thailand, where soil/water exposure and diabetes predispose to abscesses and sepsis — and requires a prolonged two-phase regimen (IV ceftazidime/carbapenem then months of oral co-trimoxazole) because relapse is common. *Acinetobacter* and *Stenotrophomonas* are resistant nosocomial pathogens. Curved rods are [[vibrio-campylobacter-helicobacter]]; resistance is [[antibiotic-resistance-mechanisms]].' },
  ],

  mnemonics: [
    { hook: 'Pseudomonas "loves water + burns": pyocyanin, VAP, CF, hot-tub, diabetic osteomyelitis', expansion: ['Oxidase+, intrinsically resistant', 'Needs anti-pseudomonal drugs'] },
    { hook: '"Melioidosis = Burkholderia pseudomallei, NE Thailand soil + diabetics"', expansion: ['IV ceftazidime → months co-trimoxazole', 'Relapse-prone; abscesses/sepsis'] },
  ],

  traps: [
    {
      questionCategory: 'Melioidosis in the endemic setting',
      wrongInstinct: 'A febrile diabetic rice farmer in northeast Thailand with abscesses and sepsis just has ordinary bacterial sepsis',
      rightAnswer: 'In NORTHEAST THAILAND and SE Asia, a DIABETIC with soil/water exposure (e.g. rice farming) presenting with pneumonia, multi-organ ABSCESSES and sepsis should be evaluated for MELIOIDOSIS (Burkholderia pseudomallei) — it needs SPECIFIC prolonged therapy (IV ceftazidime or a carbapenem, then months of oral co-trimoxazole eradication), and standard empiric regimens may miss it, with high mortality and relapse if untreated',
      why: 'Melioidosis is endemic and often overlooked, yet it demands a specific, prolonged regimen distinct from ordinary sepsis cover; recognising the diabetic + soil-exposure + abscess picture in the endemic region is life-saving.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A diabetic rice farmer in northeast Thailand presents with pneumonia, splenic abscesses and sepsis. Which organism and treatment approach fit best?',
      options: [
        { id: 'a', text: 'Burkholderia pseudomallei; IV ceftazidime/carbapenem then months of oral co-trimoxazole' },
        { id: 'b', text: 'Vibrio cholerae; oral rehydration' },
        { id: 'c', text: 'Streptococcus pyogenes; penicillin' },
        { id: 'd', text: 'Helicobacter pylori; triple therapy' },
      ],
      answerId: 'a',
      explanation: 'Melioidosis (Burkholderia pseudomallei) is endemic in northeast Thailand, acquired from soil/water especially by diabetics, causing pneumonia, abscesses and sepsis. It requires an intensive IV phase (ceftazidime or a carbapenem) followed by months of oral eradication (co-trimoxazole) because relapse is common.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which feature is characteristic of Pseudomonas aeruginosa?',
      options: [
        { id: 'a', text: 'A blue-green pigment (pyocyanin) and preference for moist environments' },
        { id: 'b', text: 'Lactose fermentation on MacConkey' },
        { id: 'c', text: 'Being an obligate anaerobe' },
        { id: 'd', text: 'Lacking a cell wall' },
      ],
      answerId: 'a',
      explanation: 'Pseudomonas aeruginosa is an aerobic, oxidase-positive non-fermenter that produces blue-green pyocyanin (and pyoverdin) with a fruity odour and thrives in moisture, causing infections in burns, ventilated patients, cystic fibrosis and diabetic wounds; it is intrinsically multidrug-resistant.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default pseudomonasBurkholderiaNonfermenters;
