import type { Lecture } from '../../lib/types';

export const salmonellaShigellaYersinia: Lecture = {
  id: 'salmonella-shigella-yersinia',
  title: 'Salmonella, Shigella & Yersinia',
  system: 'microbiology',
  source: 'L13 — Gram-Negative Bacilli I (Enterobacterales)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L13 Salmonella/Shigella' },
    { kind: 'mechanism', label: 'Non-lactose fermenters; invasion' },
    { kind: 'exam', label: 'Enteric fever; dysentery; antibiotics' },
  ],

  highYield: [
    'The NON-lactose-fermenting Enterobacterales (colourless on MacConkey) include the classic enteric pathogens SALMONELLA, SHIGELLA and YERSINIA. SALMONELLA is motile and produces H2S (black on TSI/XLD); SHIGELLA is NON-motile and does not produce H2S. Both are important causes of diarrhoeal disease with distinct clinical patterns.',
    'SALMONELLA TYPHI (typhoidal) causes ENTERIC (typhoid) FEVER — a systemic illness after invasion through Peyer\'s patches: stepwise FEVER, relative BRADYCARDIA, ROSE SPOTS, hepatosplenomegaly, and later GI bleeding/perforation; humans are the only reservoir and chronic gallbladder CARRIAGE occurs ("Typhoid Mary"). NON-TYPHOIDAL *Salmonella* causes gastroenteritis (poultry/eggs/reptiles) and, notably, OSTEOMYELITIS in SICKLE-CELL disease. Enteric fever needs antibiotics; uncomplicated gastroenteritis usually does not.',
    'SHIGELLA causes bacillary DYSENTERY — it is highly INVASIVE of colonic mucosa (very low infective dose, faecal-oral), producing fever with bloody, mucoid diarrhoea and tenesmus; *S. dysenteriae* makes SHIGA TOXIN (can cause HUS). Because of the low infectious dose and invasiveness, antibiotics ARE used (unlike EHEC/most non-typhoidal *Salmonella*).',
    'YERSINIA ENTEROCOLITICA causes enterocolitis and MESENTERIC ADENITIS mimicking APPENDICITIS ("pseudoappendicitis"), often from contaminated pork/milk and cold storage. (*Yersinia pestis* — plague — is a separate zoonotic organism.) PROTEUS (also non-lactose, swarming, UREASE-positive → struvite stones, "fishy" smell) rounds out common non-fermenters.',
    '**The take-home: NON-lactose fermenters (colourless). SALMONELLA (motile, H2S+): TYPHI → enteric fever (rose spots, relative bradycardia, gallbladder carriage); non-typhoidal → gastroenteritis + sickle-cell OSTEOMYELITIS. SHIGELLA (non-motile, invasive, low dose) → dysentery (treat with antibiotics; Shiga toxin/HUS). YERSINIA → pseudoappendicitis. PROTEUS → urease/struvite.** Lactose fermenters are [[enterobacterales-ecoli-klebsiella]]; stones are [[nephrolithiasis-urolithiasis]].',
  ],

  mechanism: {
    title: 'Non-lactose fermenters: Salmonella (motile, H2S+; Typhi→enteric fever, non-typhoidal→gastroenteritis/sickle-cell osteomyelitis) vs Shigella (non-motile, invasive, low dose→dysentery, treat); Yersinia pseudoappendicitis; Proteus urease',
    steps: [
      { id: 's1', label: 'Non-lactose fermenters (colourless on MacConkey): Salmonella, Shigella, Yersinia, Proteus', emphasis: 'key' },
      { id: 's2', label: 'S. Typhi → enteric fever (rose spots, relative bradycardia, gallbladder carriage)', emphasis: 'key' },
      { id: 's3', label: 'Non-typhoidal Salmonella → gastroenteritis; osteomyelitis in sickle-cell', emphasis: 'key' },
      { id: 's4', label: 'Shigella: invasive, very low infective dose → dysentery (Shiga toxin/HUS); DO treat', emphasis: 'danger' },
      { id: 's5', label: 'Yersinia → pseudoappendicitis; Proteus urease+ → struvite stones', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Stepwise fever, relative bradycardia and rose spots after travel', mechanism: 'Enteric (typhoid) fever — S. Typhi', significance: 'key' },
    { sign: 'Osteomyelitis caused by Salmonella in a sickle-cell patient', mechanism: 'Non-typhoidal Salmonella predilection', significance: 'key' },
    { sign: 'Fever with bloody, mucoid diarrhoea and tenesmus, very low infective dose', mechanism: 'Shigella dysentery (invasive)', significance: 'key' },
    { sign: 'Right-lower-quadrant pain mimicking appendicitis (mesenteric adenitis)', mechanism: 'Yersinia enterocolitica (pseudoappendicitis)', significance: 'supportive' },
    { sign: 'Chronic gallbladder carriage seeding others', mechanism: 'S. Typhi carrier state', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The MacConkey reaction of Salmonella/Shigella', meaning: 'Colourless (non-lactose fermenters)' },
    { clue: 'The systemic illness caused by S. Typhi', meaning: 'Enteric (typhoid) fever' },
    { clue: 'The enteric pathogen with a very low infective dose treated with antibiotics', meaning: 'Shigella' },
    { clue: 'The Enterobacterales cause of pseudoappendicitis', meaning: 'Yersinia enterocolitica' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The non-lactose-fermenting enteric pathogens present distinct syndromes with different management: S. Typhi (enteric fever) and *Shigella* dysentery require antibiotics (*Shigella* because of its low infectious dose and invasiveness), whereas uncomplicated non-typhoidal *Salmonella* gastroenteritis is usually managed supportively (antibiotics reserved for severe/high-risk cases). Recognising *Salmonella* osteomyelitis in sickle-cell disease and *Yersinia* pseudoappendicitis avoids diagnostic error, and *Proteus* urease points to struvite stones ([[nephrolithiasis-urolithiasis]]). Lactose fermenters are [[enterobacterales-ecoli-klebsiella]].' },
  ],

  mnemonics: [
    { hook: '"Salmonella = motile + H2S; Shigella = still (non-motile) + invasive"', expansion: ['Typhi = rose spots/bradycardia/carriage', 'Sickle-cell → Salmonella osteomyelitis'] },
    { hook: '"Shigella: low dose → DO treat; Yersinia → pseudoappendicitis; Proteus → urease/stones"', expansion: ['Shiga toxin → HUS', 'Non-lactose = colourless'] },
  ],

  traps: [
    {
      questionCategory: 'Antibiotics: Shigella vs non-typhoidal Salmonella',
      wrongInstinct: 'All bacterial gastroenteritis should either always or never be given antibiotics',
      rightAnswer: 'It depends on the organism: SHIGELLA dysentery IS treated with antibiotics (very low infective dose, invasive, reduces spread/duration), whereas uncomplicated NON-TYPHOIDAL SALMONELLA gastroenteritis is usually NOT (antibiotics can prolong carriage and are reserved for severe disease or high-risk hosts); enteric fever (S. Typhi) always needs antibiotics, and EHEC should NOT get antibiotics — so the decision is organism-specific',
      why: 'Blanket rules fail: treating non-typhoidal Salmonella can prolong carriage, while withholding antibiotics in Shigella or typhoid is wrong — matching the antibiotic decision to the specific pathogen is the key skill.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A returning traveller has a week of stepwise rising fever, relative bradycardia, abdominal pain and faint rose-coloured spots on the trunk. The likely diagnosis is:',
      options: [
        { id: 'a', text: 'Shigella dysentery' },
        { id: 'b', text: 'Enteric (typhoid) fever from Salmonella Typhi' },
        { id: 'c', text: 'EHEC infection' },
        { id: 'd', text: 'Cholera' },
      ],
      answerId: 'b',
      explanation: 'Stepwise fever, relative bradycardia and rose spots after travel are classic for enteric (typhoid) fever caused by Salmonella Typhi, which invades through Peyer\'s patches; humans are the only reservoir and chronic gallbladder carriage can occur. It requires antibiotics.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Non-typhoidal Salmonella is a characteristic cause of osteomyelitis in patients with:',
      options: [
        { id: 'a', text: 'Sickle-cell disease' },
        { id: 'b', text: 'Hypertension' },
        { id: 'c', text: 'Asthma' },
        { id: 'd', text: 'Migraine' },
      ],
      answerId: 'a',
      explanation: 'While S. aureus is the commonest overall cause of osteomyelitis, non-typhoidal Salmonella has a well-known predilection for causing osteomyelitis in patients with sickle-cell disease — a classic association.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default salmonellaShigellaYersinia;
