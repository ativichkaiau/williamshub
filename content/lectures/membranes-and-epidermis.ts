import type { Lecture } from '../../lib/types';
import { SKIN_LAYERS } from '../../lib/figures';

export const membranesAndEpidermis: Lecture = {
  id: 'membranes-and-epidermis',
  title: 'Body Membranes & the Epidermis',
  system: 'histology',
  source: 'L5 — Membrane & Integument',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L5 Membrane & Integument' },
    { kind: 'mechanism', label: 'Epidermal layers' },
    { kind: 'exam', label: 'Strata & cells' },
  ],

  highYield: [
    '**A body membrane = epithelium + underlying connective tissue.** Four types: **mucous** (mucosa — lines tracts open to the outside: GI, respiratory, urogenital; epithelium + lamina propria ± muscularis mucosae), **serous** (serosa — lines closed cavities: pleura/peritoneum/pericardium; mesothelium + thin CT), **synovial** (joint cavities; CT lined by synoviocytes, **no epithelium**), and **cutaneous** (the skin itself).',
    '**Skin = epidermis (keratinized stratified squamous epithelium) + dermis (CT).** The epidermis is avascular and renews from the base; thick skin (palms/soles) has 5 layers, thin skin (rest) lacks the stratum lucidum.',
    '**Epidermal layers, base → surface: Basale → Spinosum → Granulosum → Lucidum → Corneum.** **Basale** = single layer of stem/**mitotic** cells on the BM; **spinosum** = "prickle cells" joined by desmosomes; **granulosum** = keratohyalin granules; **lucidum** = thick skin only; **corneum** = flat, dead, anucleate keratin scales (barrier).',
    '**Keratinocytes** (95%) make keratin and migrate up over ~4 weeks, dying to form the barrier. Keratin intermediate filaments + desmosomes give the epidermis its mechanical strength (see [[cell-junctions]]).',
    '**Non-keratinocyte residents.** **Melanocytes** (basale) — make **melanin** (packaged in melanosomes, transferred to keratinocytes → UV protection; number is similar across skin colours, activity differs). **Langerhans cells** (spinosum) — dendritic **antigen-presenting** immune cells. **Merkel cells** (basale) — **touch** mechanoreceptors linked to nerve endings.',
  ],

  mechanism: {
    title: 'Membranes classify by cavity; epidermis renews upward',
    steps: [
      { id: 's1', label: 'Membrane = epithelium + CT: mucous/serous/synovial/cutaneous', emphasis: 'key' },
      { id: 's2', label: 'Epidermis: Basale→Spinosum→Granulosum→Lucidum→Corneum', emphasis: 'key' },
      { id: 's3', label: 'Basale = mitosis; corneum = dead keratin barrier' },
      { id: 's4', label: 'Melanocyte (melanin/UV), Langerhans (immune APC), Merkel (touch)', emphasis: 'key' },
      { id: 's5', label: 'Thick skin has lucidum; thin skin does not (has hair)' },
    ],
  },

  examFindings: [
    { sign: 'Anucleate flattened keratin scales at the surface', mechanism: 'Stratum corneum (keratinized barrier)', significance: 'key' },
    { sign: 'Prickle cells with intercellular bridges', mechanism: 'Stratum spinosum (desmosomes)', significance: 'supportive' },
    { sign: 'Clear cells in the basal layer', mechanism: 'Melanocytes (melanin) or Merkel cells', significance: 'key' },
    { sign: 'Dendritic CD1a⁺ cell in the epidermis', mechanism: 'Langerhans cell (antigen-presenting)', significance: 'supportive' },
    { sign: 'Stratum lucidum present', mechanism: 'Thick (glabrous) skin — palms/soles', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Membrane lining a joint cavity with no epithelium', meaning: 'Synovial membrane' },
    { clue: 'Membrane lining the peritoneal cavity (mesothelium)', meaning: 'Serous membrane' },
    { clue: 'Epidermal cell that makes and donates pigment', meaning: 'Melanocyte' },
    { clue: 'Epidermal immune cell derived from bone marrow', meaning: 'Langerhans cell' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Epidermal biology underlies psoriasis (hyperproliferation/parakeratosis), skin cancers (basal/squamous cell from keratinocytes, melanoma from melanocytes), and blistering diseases (pemphigus = spinosum desmosomes; pemphigoid = basal hemidesmosomes). Dermis and appendages: [[dermis-sensory-skin-appendages]].' },
  ],

  mnemonics: [
    { hook: 'Epidermis: "Come, Let\'s Get Sun Burnt" (top→bottom: Corneum, Lucidum, Granulosum, Spinosum, Basale)', expansion: ['Basale = base = mitosis'] },
    { hook: 'Melanocyte = melanin, Merkel = mechanoreceptor, Langerhans = Lymphocyte-like (immune)', expansion: ['The 3 non-keratinocytes'] },
  ],

  traps: [
    {
      questionCategory: 'Which layer divides?',
      wrongInstinct: 'The stratum corneum actively divides to renew the skin',
      rightAnswer: 'The stratum BASALE contains the dividing stem cells; the corneum is dead, anucleate keratin',
      why: 'Renewal is bottom-up: mitosis at the base, cells mature and die as they ascend to form the surface barrier.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which epidermal cell produces melanin and transfers it to surrounding keratinocytes?',
      options: [
        { id: 'a', text: 'Langerhans cell' },
        { id: 'b', text: 'Merkel cell' },
        { id: 'c', text: 'Melanocyte' },
        { id: 'd', text: 'Keratinocyte' },
      ],
      answerId: 'c',
      explanation: 'Melanocytes (in the stratum basale) synthesise melanin in melanosomes and transfer it to keratinocytes for UV protection. Langerhans = immune APC; Merkel = touch receptor.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which membrane consists of connective tissue lined by cells but has NO epithelium?',
      options: [
        { id: 'a', text: 'Mucous membrane' },
        { id: 'b', text: 'Serous membrane' },
        { id: 'c', text: 'Synovial membrane' },
        { id: 'd', text: 'Cutaneous membrane' },
      ],
      answerId: 'c',
      explanation: 'The synovial membrane lining joint cavities is made of connective tissue with synoviocytes but lacks a true epithelium. Mucous, serous, and cutaneous membranes all have an epithelial layer.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Skin layers', svg: SKIN_LAYERS, caption: 'Epidermis (Basale→Corneum) with melanocytes/Langerhans/Merkel, over dermis with appendages and sensory receptors.' },
  ],
};

export default membranesAndEpidermis;
