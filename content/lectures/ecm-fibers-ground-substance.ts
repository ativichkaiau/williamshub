import type { Lecture } from '../../lib/types';
import { ECM_COMPONENTS } from '../../lib/figures';

export const ecmFibersGroundSubstance: Lecture = {
  id: 'ecm-fibers-ground-substance',
  title: 'Extracellular Matrix: Fibres & Ground Substance',
  system: 'histology',
  source: 'L9 — Extracellular Matrix',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L9 ECM' },
    { kind: 'mechanism', label: 'Collagen & GAGs' },
    { kind: 'exam', label: 'Collagen types · GAGs' },
  ],

  highYield: [
    '**The ECM = fibrous proteins + ground substance**, secreted mainly by fibroblasts (and chondrocytes/osteoblasts). It gives tissues their mechanical properties and is the medium for cell signalling and diffusion.',
    '**Collagen types by number (high-yield).** **I** — bone, tendon, skin, most CT (~90%, strong). **II** — cartilage, vitreous. **III** — **reticular** fibres (mesh of lymphoid organs, marrow, early wound). **IV** — **basement membrane** (network, non-fibrillar). Collagen is a triple helix rich in **glycine, proline, hydroxyproline** (hydroxylation needs **vitamin C**).',
    '**Elastic fibres = elastin core + fibrillin microfibril scaffold** → stretch and recoil (aorta/elastic arteries, skin, lung, elastic cartilage). Fibrillin defect → **Marfan**; elastin loss → aneurysm/emphysema.',
    '**Ground substance = highly hydrated gel of GAGs and proteoglycans.** **GAGs** are long, negatively-charged sugar chains: **sulfated** (chondroitin, keratan, heparan, dermatan) and the **non-sulfated hyaluronan** (huge, binds massive water). GAGs attach to core proteins → **proteoglycans** (e.g. **aggrecan** — the cartilage "bottlebrush"), which trap water and **resist compression**.',
    '**Turnover matters.** ECM is continuously synthesised and degraded (matrix metalloproteinases). **Collagen I crosslinks (e.g. CTX-1) released into blood are markers of bone resorption** — used clinically to monitor osteoporosis/postmenopausal bone loss (see [[ecm-adhesion-integrins-clinical]]).',
  ],

  mechanism: {
    title: 'Fibres (tensile) + gel (compressive)',
    steps: [
      { id: 's1', label: 'Fibroblast secretes collagen, elastin, ground substance', emphasis: 'key' },
      { id: 's2', label: 'Collagen I bone/tendon, II cartilage, III reticular, IV BM', emphasis: 'key' },
      { id: 's3', label: 'Elastic fibre = elastin + fibrillin → recoil' },
      { id: 's4', label: 'GAGs/proteoglycans (aggrecan) trap water → resist compression', emphasis: 'key' },
      { id: 's5', label: 'Turnover by MMPs; collagen crosslinks = resorption markers' },
    ],
  },

  examFindings: [
    { sign: 'Basement membrane collagen', mechanism: 'Type IV (network, non-fibrillar)', significance: 'key' },
    { sign: 'Reticular fibre mesh in a lymph node', mechanism: 'Type III collagen', significance: 'key' },
    { sign: 'Scurvy: poor wound healing, bleeding gums', mechanism: 'Vitamin-C-dependent proline hydroxylation fails → weak collagen', significance: 'supportive' },
    { sign: 'Aggrecan "bottlebrush" holding water in cartilage', mechanism: 'Proteoglycan + GAGs resist compression', significance: 'key' },
    { sign: 'Tall, arachnodactyly, aortic root dilation', mechanism: 'Fibrillin defect (Marfan) → elastic fibre', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Collagen type forming basement membranes', meaning: 'Type IV' },
    { clue: 'The largest, non-sulfated GAG that binds huge amounts of water', meaning: 'Hyaluronan' },
    { clue: 'Vitamin required to hydroxylate proline/lysine in collagen', meaning: 'Vitamin C (deficiency = scurvy)' },
    { clue: 'Serum marker of type I collagen breakdown in bone', meaning: 'CTX-1 (bone resorption marker)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'ECM defects cause disease: type I → osteogenesis imperfecta/Ehlers-Danlos, IV → Alport, fibrillin → Marfan, vitamin-C loss → scurvy. GAG accumulation = mucopolysaccharidoses. Collagen-turnover markers monitor osteoporosis. Adhesion side: [[ecm-adhesion-integrins-clinical]].' },
  ],

  mnemonics: [
    { hook: 'Collagen 1-2-3-4: "boNE, carTWOlage, reTHREEcular, FLOOR (BM)"', expansion: ['Type by number'] },
    { hook: 'GAGs are negative → pull in water (turgor)', expansion: ['Hyaluronan = non-sulfated, huge'] },
  ],

  traps: [
    {
      questionCategory: 'Basement membrane collagen',
      wrongInstinct: 'Basement membranes are made of type I collagen',
      rightAnswer: 'Basement membranes = type IV collagen (a network, non-fibrillar); type I is bone/tendon/skin',
      why: 'Type IV forms sheets, not fibres. "Floor/four" = basement membrane; type III = reticular mesh.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which collagen type forms the network of the basement membrane?',
      options: [
        { id: 'a', text: 'Type I' },
        { id: 'b', text: 'Type II' },
        { id: 'c', text: 'Type III' },
        { id: 'd', text: 'Type IV' },
      ],
      answerId: 'd',
      explanation: 'Type IV collagen forms the non-fibrillar network of basement membranes. Type I = bone/tendon/skin, II = cartilage, III = reticular fibres.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The property of cartilage ground substance to resist compression is due mainly to:',
      options: [
        { id: 'a', text: 'Type I collagen fibres' },
        { id: 'b', text: 'Highly hydrated, negatively charged proteoglycans (aggrecan/GAGs)' },
        { id: 'c', text: 'Elastin' },
        { id: 'd', text: 'Fibronectin' },
      ],
      answerId: 'b',
      explanation: 'Sulfated GAGs on aggrecan core proteins are strongly anionic and trap water, generating turgor that resists compression. Collagen provides tensile (not compressive) strength.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'ECM components', svg: ECM_COMPONENTS, caption: 'Fibres (collagen types I–IV, elastic) + ground substance (GAGs/proteoglycan aggrecan, hyaluronan) + adhesion glycoproteins.' },
  ],
};

export default ecmFibersGroundSubstance;
