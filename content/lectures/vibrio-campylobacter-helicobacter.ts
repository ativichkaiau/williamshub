import type { Lecture } from '../../lib/types';

export const vibrioCampylobacterHelicobacter: Lecture = {
  id: 'vibrio-campylobacter-helicobacter',
  title: 'Vibrio, Campylobacter & Helicobacter',
  system: 'microbiology',
  source: 'L14 — Gram-Negative Bacilli II',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L14 Curved rods' },
    { kind: 'mechanism', label: 'Oxidase+ curved rods' },
    { kind: 'exam', label: 'Rice-water stools; H. pylori urease' },
  ],

  highYield: [
    'These are OXIDASE-POSITIVE, curved/comma-shaped Gram-negative rods. VIBRIO CHOLERAE (comma-shaped, motile, grows in alkaline/salty TCBS agar) causes CHOLERA: the cholera TOXIN ADP-ribosylates Gs → persistent adenylate cyclase activation → massive cAMP-driven chloride/water secretion → profuse painless "RICE-WATER" STOOLS and life-threatening dehydration. Treatment is aggressive REHYDRATION (ORS/IV); antibiotics shorten it. *V. parahaemolyticus* (seafood gastroenteritis) and *V. vulnificus* (wound sepsis/cellulitis in liver disease, from shellfish/seawater) are the other vibrios.',
    'CAMPYLOBACTER JEJUNI is a curved/S-shaped rod, MICROAEROPHILIC, growing at 42°C, and a leading cause of bacterial GASTROENTERITIS (poultry, unpasteurised milk) — inflammatory, often bloody diarrhoea with cramps. It is the commonest antecedent infection of GUILLAIN-BARRÉ SYNDROME (molecular mimicry of gangliosides) and can trigger reactive arthritis.',
    'HELICOBACTER PYLORI is a curved rod that colonises the gastric mucosa; it is strongly UREASE-POSITIVE, splitting urea to ammonia to buffer stomach acid (the basis of the UREA BREATH TEST and rapid urease/CLO test). It causes chronic gastritis, PEPTIC ULCER disease, and is a risk factor for gastric ADENOCARCINOMA and MALT LYMPHOMA. Treatment is triple/quadruple therapy (a PPI + antibiotics ± bismuth) — "test and treat".',
    'So three curved oxidase-positive rods, each with a signature: *Vibrio cholerae* (rice-water stools, cholera toxin/cAMP, rehydrate), *Campylobacter jejuni* (bloody diarrhoea → Guillain-Barré), and *H. pylori* (urease-positive → ulcers/gastric cancer, eradicate). Their toxins/enzymes (cholera toxin, urease) are the mechanistic and diagnostic keys.',
    '**The take-home: oxidase+ curved rods. VIBRIO CHOLERAE = cholera toxin (↑cAMP) → RICE-WATER stools → REHYDRATE (± antibiotics); V. vulnificus wound sepsis in liver disease. CAMPYLOBACTER JEJUNI = bloody diarrhoea (poultry) → GUILLAIN-BARRÉ. H. PYLORI = UREASE+ → peptic ulcer/gastric cancer/MALT → eradicate.** The non-fermenters (*Pseudomonas*/*Burkholderia*) are [[pseudomonas-burkholderia-nonfermenters]]; Enterobacterales are [[enterobacterales-ecoli-klebsiella]].',
  ],

  mechanism: {
    title: 'Oxidase+ curved rods: V. cholerae (cholera toxin ↑cAMP → rice-water stools, rehydrate), Campylobacter jejuni (bloody diarrhoea → Guillain-Barré), H. pylori (urease+ → ulcers/gastric cancer)',
    steps: [
      { id: 's1', label: 'All oxidase-positive, curved/comma-shaped Gram-negative rods', emphasis: 'key' },
      { id: 's2', label: 'V. cholerae: cholera toxin ADP-ribosylates Gs → ↑cAMP → rice-water stools', emphasis: 'danger' },
      { id: 's3', label: 'Cholera treatment = aggressive rehydration (ORS/IV); antibiotics shorten', emphasis: 'key' },
      { id: 's4', label: 'Campylobacter jejuni (42°C, microaerophilic): bloody diarrhoea → Guillain-Barré', emphasis: 'key' },
      { id: 's5', label: 'H. pylori: urease+ → gastritis/peptic ulcer/gastric cancer/MALT → eradicate', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Profuse painless "rice-water" watery diarrhoea with severe dehydration', mechanism: 'Cholera toxin (↑cAMP secretion)', significance: 'key' },
    { sign: 'Bloody, inflammatory diarrhoea after undercooked poultry', mechanism: 'Campylobacter jejuni', significance: 'key' },
    { sign: 'Ascending paralysis weeks after a diarrhoeal illness', mechanism: 'Guillain-Barré syndrome (post-Campylobacter)', significance: 'key' },
    { sign: 'Peptic ulcer with a positive urea breath test', mechanism: 'Helicobacter pylori (urease)', significance: 'key' },
    { sign: 'Wound sepsis/cellulitis after seawater exposure in a cirrhotic', mechanism: 'Vibrio vulnificus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The stool description in cholera', meaning: '"Rice-water" stools' },
    { clue: 'The action of cholera toxin', meaning: 'ADP-ribosylates Gs → ↑cAMP → Cl⁻/water secretion' },
    { clue: 'The diarrhoeal organism preceding Guillain-Barré', meaning: 'Campylobacter jejuni' },
    { clue: 'The enzyme underlying the H. pylori breath test', meaning: 'Urease' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These curved oxidase-positive rods each carry a high-yield mechanism: cholera toxin drives cAMP-mediated secretory diarrhoea (rice-water stools) whose treatment is rehydration; *Campylobacter jejuni* causes bloody diarrhoea and is the classic trigger of Guillain-Barré; and *Helicobacter pylori* (urease-positive) causes peptic ulcer disease and gastric cancer/MALT lymphoma, diagnosed by urease-based tests and cured by eradication therapy. The non-fermenters (*Pseudomonas*/*Burkholderia*, including melioidosis) are [[pseudomonas-burkholderia-nonfermenters]]; Enterobacterales are [[enterobacterales-ecoli-klebsiella]].' },
  ],

  mnemonics: [
    { hook: '"Cholera = Cl⁻/cAMP → rice-water → rehydrate"', expansion: ['Comma-shaped, oxidase+', 'V. vulnificus = seawater sepsis'] },
    { hook: '"Campylobacter → Guillain-Barré; H. pylori = urease → ulcers/cancer"', expansion: ['Campylobacter grows at 42°C', 'Urea breath test'] },
  ],

  traps: [
    {
      questionCategory: 'Priority treatment in cholera',
      wrongInstinct: 'The most important treatment for cholera is prompt antibiotics to kill Vibrio cholerae',
      rightAnswer: 'The life-saving priority in cholera is aggressive REHYDRATION (oral rehydration solution or IV fluids) to replace the massive cAMP-driven fluid losses — this is what prevents death from hypovolaemic shock; ANTIBIOTICS are an ADJUNCT that shorten the illness and reduce shedding but are secondary to fluid replacement',
      why: 'Cholera kills by dehydration, not by tissue invasion, so fluid replacement (not antibiotics) is the primary, life-saving intervention — a core public-health teaching point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Cholera toxin causes profuse "rice-water" diarrhoea by:',
      options: [
        { id: 'a', text: 'ADP-ribosylating Gs, raising cAMP and driving chloride/water secretion' },
        { id: 'b', text: 'Invading and destroying the colonic mucosa' },
        { id: 'c', text: 'Blocking acetylcholine release' },
        { id: 'd', text: 'ADP-ribosylating EF-2' },
      ],
      answerId: 'a',
      explanation: 'Cholera toxin ADP-ribosylates the Gs protein, locking adenylate cyclase on; the resulting sustained rise in cAMP drives massive chloride and water secretion into the gut lumen, producing painless "rice-water" stools and dehydration. Treatment is rehydration.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which organism, a common cause of bloody diarrhoea from poultry, is the classic antecedent of Guillain-Barré syndrome?',
      options: [
        { id: 'a', text: 'Campylobacter jejuni' },
        { id: 'b', text: 'Vibrio cholerae' },
        { id: 'c', text: 'Helicobacter pylori' },
        { id: 'd', text: 'Klebsiella pneumoniae' },
      ],
      answerId: 'a',
      explanation: 'Campylobacter jejuni, a microaerophilic curved rod growing at 42°C, causes inflammatory/bloody diarrhoea and is the commonest infectious trigger of Guillain-Barré syndrome through molecular mimicry between its lipo-oligosaccharide and nerve gangliosides.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default vibrioCampylobacterHelicobacter;
