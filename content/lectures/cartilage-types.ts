import type { Lecture } from '../../lib/types';
import { CARTILAGE_TYPES } from '../../lib/figures';

export const cartilageTypes: Lecture = {
  id: 'cartilage-types',
  title: 'Cartilage: Hyaline, Elastic & Fibrocartilage',
  system: 'histology',
  source: 'L6 — Cartilage & Bone',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L6 Cartilage & Bone' },
    { kind: 'mechanism', label: 'Matrix & growth' },
    { kind: 'exam', label: 'Three cartilage types' },
  ],

  highYield: [
    '**Cartilage = avascular, aneural specialised connective tissue.** **Chondrocytes** sit in **lacunae** within a firm ECM of **collagen + proteoglycan (aggrecan) + water**; nutrients diffuse in (hence slow healing). Most cartilage is wrapped by a **perichondrium** (except articular and fibrocartilage).',
    '**Hyaline cartilage (most common).** **Type II collagen** in a glassy matrix. Locations: **articular surfaces, costal cartilage, trachea/bronchi, nose, and the fetal skeleton + epiphyseal growth plate**. Chondrocytes often in **isogenous groups**.',
    '**Elastic cartilage.** Type II collagen **plus elastic fibres** → flexible, springy. Locations: **external ear (pinna), epiglottis, auditory tube**. Retains shape after bending.',
    '**Fibrocartilage.** Dominated by **type I collagen** (tough, tensile); has **NO perichondrium**. Alternating chondrocytes and dense collagen bundles. Locations: **intervertebral discs, menisci, pubic symphysis, and tendon/ligament insertions**.',
    '**Two growth modes.** **Appositional** — new cartilage added at the surface from the **perichondrium** (chondroblasts). **Interstitial** — chondrocytes divide **within** lacunae, expanding from inside (important at the growth plate). Cartilage calcifies with age and is the template for endochondral bone ([[ossification]]).',
  ],

  mechanism: {
    title: 'Match the fibre to the cartilage',
    steps: [
      { id: 's1', label: 'Chondrocytes in lacunae; avascular matrix (aggrecan + collagen)', emphasis: 'key' },
      { id: 's2', label: 'Hyaline = type II (articular, trachea, growth plate)', emphasis: 'key' },
      { id: 's3', label: 'Elastic = type II + elastic fibres (ear, epiglottis)' },
      { id: 's4', label: 'Fibrocartilage = type I, NO perichondrium (disc, meniscus)', emphasis: 'key' },
      { id: 's5', label: 'Growth: appositional (perichondrium) + interstitial (internal)' },
    ],
  },

  examFindings: [
    { sign: 'Glassy matrix, chondrocytes in isogenous groups, on a joint surface', mechanism: 'Hyaline cartilage (type II)', significance: 'key' },
    { sign: 'Cartilage with a dark network of elastic fibres in the ear', mechanism: 'Elastic cartilage', significance: 'key' },
    { sign: 'Rows of chondrocytes between thick collagen bundles, no perichondrium', mechanism: 'Fibrocartilage (type I)', significance: 'key' },
    { sign: 'Chondrocytes dividing inside lacunae', mechanism: 'Interstitial growth', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cartilage of the intervertebral disc / meniscus', meaning: 'Fibrocartilage (type I, no perichondrium)' },
    { clue: 'Cartilage of the epiglottis and pinna', meaning: 'Elastic cartilage' },
    { clue: 'Cartilage forming the epiphyseal growth plate', meaning: 'Hyaline cartilage' },
    { clue: 'Growth by adding cells at the perichondrial surface', meaning: 'Appositional growth' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Articular hyaline cartilage loss = osteoarthritis; disc fibrocartilage failure = herniation; the hyaline growth plate drives long-bone growth (achondroplasia = FGFR3 defect). Cartilage is the scaffold for endochondral bone ([[ossification]]).' },
  ],

  mnemonics: [
    { hook: 'Hyaline = "high-line everywhere" (type II); Fibro = "fibrous type I, no cover"; Elastic = "ear + epiglottis"', expansion: ['Type II in hyaline & elastic; type I in fibro'] },
    { hook: 'Fibrocartilage has NO perichondrium', expansion: ['The odd one out'] },
  ],

  traps: [
    {
      questionCategory: 'Collagen type in cartilage',
      wrongInstinct: 'All cartilage is made of type I collagen',
      rightAnswer: 'Hyaline and elastic cartilage = type II collagen; only FIBROcartilage = type I',
      why: 'Type II is the default cartilage collagen; fibrocartilage is the tough type-I exception (and lacks a perichondrium).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which cartilage type lacks a perichondrium and is rich in type I collagen?',
      options: [
        { id: 'a', text: 'Hyaline cartilage' },
        { id: 'b', text: 'Elastic cartilage' },
        { id: 'c', text: 'Fibrocartilage' },
        { id: 'd', text: 'Articular cartilage' },
      ],
      answerId: 'c',
      explanation: 'Fibrocartilage (intervertebral disc, meniscus, pubic symphysis) has type I collagen and no perichondrium. Hyaline and elastic cartilage are type II with a perichondrium (articular hyaline is the exception with no perichondrium but still type II).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Growth of cartilage by division of chondrocytes within existing lacunae is termed:',
      options: [
        { id: 'a', text: 'Appositional growth' },
        { id: 'b', text: 'Interstitial growth' },
        { id: 'c', text: 'Endochondral ossification' },
        { id: 'd', text: 'Intramembranous ossification' },
      ],
      answerId: 'b',
      explanation: 'Interstitial growth expands cartilage from within (chondrocytes dividing in lacunae). Appositional growth adds new cartilage at the perichondrial surface.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Three cartilage types', svg: CARTILAGE_TYPES, caption: 'Hyaline (type II; articular/trachea/growth plate), elastic (type II + elastic; ear/epiglottis), fibrocartilage (type I, no perichondrium; disc/meniscus).' },
  ],
};

export default cartilageTypes;
