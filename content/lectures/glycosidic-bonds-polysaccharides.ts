import type { Lecture } from '../../lib/types';

export const glycosidicBondsPolysaccharides: Lecture = {
  id: 'glycosidic-bonds-polysaccharides',
  title: 'Glycosidic Bonds & Polysaccharides',
  system: 'molecular',
  source: 'L11 — Carbohydrate Chemistry',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L11 Carbohydrate Chemistry' },
    { kind: 'disease', label: 'Polysaccharides' },
    { kind: 'mechanism', label: 'Glycosidic linkage' },
    { kind: 'exam', label: 'Starch vs cellulose' },
  ],

  highYield: [
    '**Glycosidic bonds** join sugars at the anomeric carbon: **α-1,4** (linear glucose chains), **α-1,6** (branch points), **β-1,4** (structural).',
    '**Disaccharides**: **maltose** (glucose α-1,4 glucose), **lactose** (galactose β-1,4 glucose), **sucrose** (glucose α-1,2 fructose — non-reducing).',
    'Storage polysaccharides are **α-glucose polymers**: **starch** = **amylose** (α-1,4, helical, stains blue with iodine) + **amylopectin** (α-1,4 with α-1,6 branches); **glycogen** = like amylopectin but **more highly branched** (animal storage).',
    'Structural polysaccharides use **β-1,4**: **cellulose** (β-1,4 glucose — **humans cannot digest it**) and **chitin** (β-1,4 N-acetylglucosamine).',
    '**Glycosaminoglycans (GAGs)** = repeating disaccharides (amino sugar + uronic acid), sulfated (**heparin** is an anticoagulant; hyaluronic acid, chondroitin) — form proteoglycans in the ECM. **Glycoproteins**: **N-linked** (to asparagine) vs **O-linked** (to serine/threonine) — cell recognition & signaling.',
  ],

  mechanism: {
    title: 'Linkage type sets structure & digestibility',
    steps: [
      { id: 's1', label: 'α-1,4 chains + α-1,6 branches = storage (starch/glycogen)', emphasis: 'key' },
      { id: 's2', label: 'β-1,4 = structural (cellulose/chitin), indigestible in humans' },
      { id: 's3', label: 'GAGs: repeating sulfated disaccharides (heparin)' },
      { id: 's4', label: 'Glycoproteins: N-linked (Asn) vs O-linked (Ser/Thr)' },
    ],
  },

  examFindings: [
    { sign: 'Iodine turns starch blue', mechanism: 'Amylose helix binds iodine', significance: 'supportive' },
    { sign: 'Humans cannot digest cellulose', mechanism: 'No enzyme for β-1,4 glucose bonds', significance: 'key' },
    { sign: 'Heparin used clinically as an anticoagulant', mechanism: 'A sulfated glycosaminoglycan', significance: 'key' },
  ],

  investigations: [
    { clue: 'Glycosidic bond type (α vs β; 1,4 vs 1,6)', meaning: 'Digestible storage vs structural' },
    { clue: 'Branching frequency', meaning: 'Glycogen (highly branched) vs amylopectin' },
    { clue: 'N- vs O-linkage', meaning: 'Glycoprotein attachment site' },
  ],

  treatment: [
    { logic: 'Heparin (a GAG) for anticoagulation', detail: 'Clinical use of sugar chemistry.' },
    { logic: 'Glycosylation determines protein fate/recognition', detail: 'Cell surface & targeting.' },
  ],

  mnemonics: [
    { hook: 'α = digestible (starch/glycogen); β = structural/indigestible (cellulose)', expansion: ['Bond geometry decides'] },
    { hook: 'Glycogen = amylopectin but MORE branched (α-1,6)', expansion: ['Animal storage'] },
  ],

  traps: [
    {
      questionCategory: 'Why cellulose is indigestible',
      wrongInstinct: 'Humans cannot digest cellulose because it is a different sugar than starch',
      rightAnswer: 'Cellulose and starch are both glucose polymers; humans lack an enzyme to hydrolyze the β-1,4 linkage of cellulose (but can digest the α-1,4 of starch)',
      why: 'The difference is the bond configuration (β vs α), not the monomer — amylase cleaves α-1,4 but not β-1,4, so cellulose passes as fiber.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Starch and cellulose are both polymers of glucose, yet humans can digest starch but not cellulose. The reason is that:',
      options: [
        { id: 'a', text: 'Cellulose is made of galactose, not glucose' },
        { id: 'b', text: 'Cellulose uses β-1,4 linkages that human enzymes cannot cleave' },
        { id: 'c', text: 'Starch has no glycosidic bonds' },
        { id: 'd', text: 'Cellulose is a monosaccharide' },
      ],
      answerId: 'b',
      explanation: 'Human amylases cleave the α-1,4 bonds of starch but not the β-1,4 bonds of cellulose, so cellulose passes through undigested as dietary fiber.',
      tests: 'exam',
    },
  ],
};

export default glycosidicBondsPolysaccharides;
