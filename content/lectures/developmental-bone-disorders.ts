import type { Lecture } from '../../lib/types';

export const developmentalBoneDisorders: Lecture = {
  id: 'developmental-bone-disorders',
  title: 'Developmental Bone Disorders',
  system: 'msk',
  source: 'L1 — Diseases of Bone',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L1 Diseases of Bone' },
    { kind: 'disease', label: 'Skeletal dysplasia' },
    { kind: 'mechanism', label: 'Gene defects' },
    { kind: 'exam', label: 'Achondroplasia / OI' },
  ],

  highYield: [
    '**Achondroplasia** = most common skeletal dysplasia/dwarfism: **gain-of-function FGFR3** mutation (FGFR3 normally *inhibits* endochondral growth) → short proximal limbs, large head/frontal bossing, normal trunk & intelligence. **Autosomal dominant** (often new paternal mutation). **Thanatophoric dysplasia** = a more severe, lethal FGFR3 gain-of-function.',
    '**Osteogenesis imperfecta (brittle bone disease)** = defective **type I collagen (COL1A1/COL1A2 — a glycine substitution)** → **skeletal fragility/fractures, blue sclerae, hearing loss, dental imperfections**.',
    '**Osteopetrosis** = **defective osteoclast function** (failed resorption-pit acidification — CLCN7, TCIRG1, carbonic anhydrase II) → **dense but brittle bone (fractures), Erlenmeyer-flask deformity, marrow failure (anemia), cranial-nerve compression**; treated with hematopoietic stem-cell transplant.',
    '**Cleidocranial dysplasia** = **RUNX2** loss-of-function → absent/hypoplastic clavicles, delayed suture closure (wormian bones), dental anomalies.',
    'General: **dysostosis** = localized (e.g. syndactyly, polydactyly); **dysplasia** = global disorganization (whole skeleton).',
  ],

  mechanism: {
    title: 'Gene defect → specific skeletal phenotype',
    steps: [
      { id: 's1', label: 'FGFR3 gain-of-function → inhibited growth-plate (achondroplasia)', emphasis: 'key' },
      { id: 's2', label: 'Type I collagen defect → brittle bone (OI)' },
      { id: 's3', label: 'Osteoclast failure → dense brittle bone (osteopetrosis)' },
      { id: 's4', label: 'RUNX2 loss → cleidocranial dysplasia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Short-limbed dwarfism, large head, normal trunk & IQ', mechanism: 'Achondroplasia (FGFR3 gain-of-function)', significance: 'key' },
    { sign: 'Multiple fractures + blue sclerae + hearing loss', mechanism: 'Osteogenesis imperfecta (type I collagen)', significance: 'key' },
    { sign: 'Dense bones that fracture + marrow failure', mechanism: 'Osteopetrosis (osteoclast dysfunction)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Genetic testing (FGFR3, COL1A1/2, RUNX2)', meaning: 'Confirms the dysplasia' },
    { clue: 'Radiographs (Erlenmeyer flask, wormian bones)', meaning: 'Osteopetrosis / cleidocranial dysplasia' },
    { clue: 'Sclerae, teeth, hearing', meaning: 'Type I collagen (OI) clues' },
  ],

  treatment: [
    { logic: 'Osteopetrosis: hematopoietic stem-cell transplant', detail: 'Donor osteoclasts restore resorption.' },
    { logic: 'OI: bisphosphonates + supportive orthopedics', detail: 'Reduce fracture rate.' },
  ],

  mnemonics: [
    { hook: 'Achondroplasia = FGFR3 gain-of-function (FGFR3 normally brakes growth)', expansion: ['Short proximal limbs, big head'] },
    { hook: 'Osteopetrosis = osteoclast failure → dense but brittle bone', expansion: ['Marrow failure; treat with HSCT'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of FGFR3 mutation in achondroplasia',
      wrongInstinct: 'Achondroplasia is a loss-of-function of FGFR3',
      rightAnswer: 'Achondroplasia is a GAIN-of-function of FGFR3 — since FGFR3 normally inhibits chondrocyte proliferation, overactivity stunts endochondral bone growth',
      why: 'The counterintuitive point is that constitutively active (gain-of-function) FGFR3 suppresses the growth plate, producing short-limbed dwarfism.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child with brittle bones and recurrent fractures has strikingly blue sclerae and early hearing loss. The underlying defect involves:',
      options: [
        { id: 'a', text: 'FGFR3 gain-of-function' },
        { id: 'b', text: 'Type I collagen (COL1A1/COL1A2)' },
        { id: 'c', text: 'Osteoclast acidification (CLCN7)' },
        { id: 'd', text: 'RUNX2 loss-of-function' },
      ],
      answerId: 'b',
      explanation: 'Osteogenesis imperfecta results from defective type I collagen (usually a glycine substitution in COL1A1/COL1A2), producing brittle bones, blue sclerae, hearing loss, and dental imperfections.',
      tests: 'exam',
    },
  ],
};

export default developmentalBoneDisorders;
