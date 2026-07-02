import type { Lecture } from '../../lib/types';
import { VITAMINS_DEFICIENCY } from '../../lib/figures';

export const fatSolubleVitamins: Lecture = {
  id: 'fat-soluble-vitamins',
  title: 'Fat-Soluble Vitamins (A, D, E, K)',
  system: 'gi',
  source: 'L18 — Vitamins & Trace Elements',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L18 Vitamins' },
    { kind: 'mechanism', label: 'Fat-soluble' },
    { kind: 'exam', label: 'A/D/E/K deficiency' },
  ],

  highYield: [
    '**The fat-soluble vitamins A, D, E and K are absorbed with dietary fat and STORED in the body — so fat malabsorption (coeliac disease, cholestasis, chronic pancreatitis, cystic fibrosis, orlistat) causes deficiency of ALL of them, and excess (A, D) can cause TOXICITY.** This storage/toxicity potential distinguishes them from water-soluble vitamins.',
    '**Vitamin A (retinol) is essential for vision (rhodopsin), epithelial integrity and immunity. Deficiency → NIGHT BLINDNESS, then xerophthalmia, Bitot spots and keratomalacia (a leading cause of preventable childhood blindness).** Excess is teratogenic (avoid high-dose/retinoids in pregnancy) and causes raised intracranial pressure and hepatotoxicity.',
    '**Vitamin D (via skin synthesis + diet → liver 25-hydroxylation → kidney 1α-hydroxylation to calcitriol) raises calcium and phosphate for bone. Deficiency → RICKETS in children (bowed legs, costochondral "rosary") and OSTEOMALACIA in adults (bone pain, fractures), with hypocalcaemia.** It links to the renal/PTH calcium axis and to CKD.',
    '**Vitamin E (tocopherol) is an antioxidant protecting membranes; deficiency (rare, mainly in fat malabsorption) causes HAEMOLYTIC ANAEMIA and a spinocerebellar/peripheral NEUROPATHY (ataxia).** Vitamin K is a cofactor for γ-carboxylation of clotting factors II, VII, IX, X (and proteins C, S); deficiency → BLEEDING/prolonged PT (warfarin blocks this pathway; newborns are given vitamin K).',
    '**Mnemonic anchors: A = eyes/skin (night blindness, teratogen); D = bones (rickets/osteomalacia); E = antioxidant (haemolysis/neuropathy); K = clotting (bleeding).** Because they are stored, deficiency reflects chronic malabsorption and A/D can be toxic in excess — a key contrast with the water-soluble vitamins in [[water-soluble-vitamins-trace-elements]].',
  ],

  mechanism: {
    title: 'Absorbed with fat, stored (toxicity risk); A eyes, D bones, E antioxidant, K clotting',
    steps: [
      { id: 's1', label: 'A/D/E/K absorbed with fat + stored → fat malabsorption depletes all', emphasis: 'key' },
      { id: 's2', label: 'A: vision/epithelium; deficiency → night blindness; excess = teratogen/↑ICP', emphasis: 'key' },
      { id: 's3', label: 'D: Ca/PO₄ for bone; deficiency → rickets (child)/osteomalacia (adult)', emphasis: 'key' },
      { id: 's4', label: 'E: antioxidant; deficiency → haemolysis + neuropathy/ataxia' },
      { id: 's5', label: 'K: γ-carboxylation of II/VII/IX/X; deficiency → bleeding (warfarin blocks)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Night blindness progressing to xerophthalmia', mechanism: 'Vitamin A deficiency', significance: 'key' },
    { sign: 'Rickets (children) / osteomalacia (adults)', mechanism: 'Vitamin D deficiency (impaired bone mineralisation)', significance: 'key' },
    { sign: 'Bleeding with a prolonged prothrombin time', mechanism: 'Vitamin K deficiency (factors II, VII, IX, X)', significance: 'key' },
    { sign: 'Haemolytic anaemia + ataxia/neuropathy', mechanism: 'Vitamin E deficiency', significance: 'supportive' },
    { sign: 'Deficiency of A, D, E and K together', mechanism: 'Fat malabsorption (cholestasis, pancreatic insufficiency, orlistat)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The earliest symptom of vitamin A deficiency', meaning: 'Night blindness' },
    { clue: 'The vitamin whose deficiency causes rickets/osteomalacia', meaning: 'Vitamin D' },
    { clue: 'The clotting factors dependent on vitamin K', meaning: 'II, VII, IX, X (and proteins C and S)' },
    { clue: 'Why fat malabsorption depletes A, D, E and K together', meaning: 'They are all absorbed with dietary fat' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Fat malabsorption (cholestasis, chronic pancreatitis — [[acute-chronic-pancreatitis]], coeliac, orlistat — [[obesity-pharmacotherapy]]) deficient in all four; vitamin D links to the renal calcium/PTH axis ([[renal-calcium-phosphate-handling]]); vitamin K underlies warfarin action and newborn prophylaxis. Their storage means A/D toxicity is possible — unlike the water-soluble vitamins in [[water-soluble-vitamins-trace-elements]].' },
  ],

  mnemonics: [
    { hook: 'Fat-soluble roles: "A = eyes, D = bones, E = antioxidant, K = Klotting"', expansion: ['Stored → toxicity (A, D)', 'Fat malabsorption depletes all four'] },
    { hook: 'Vitamin K "1972" factors: II, VII, IX, X', expansion: ['γ-carboxylation', 'Warfarin blocks; give newborns vitamin K'] },
  ],

  traps: [
    {
      questionCategory: 'Toxicity potential of vitamins',
      wrongInstinct: 'Taking large doses of any vitamin is harmless because excess is simply excreted',
      rightAnswer: 'FAT-SOLUBLE vitamins (A, D, E, K) are STORED, so excess — especially vitamin A (teratogenic, raised ICP, hepatotoxic) and vitamin D (hypercalcaemia) — can cause TOXICITY, unlike most water-soluble vitamins that are excreted',
      why: 'The storage that protects against short-term deficiency also allows accumulation to toxic levels; assuming all vitamins are harmless in excess ignores the real risks of hypervitaminosis A and D.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with chronic cholestasis develops easy bruising and a prolonged prothrombin time that corrects with vitamin supplementation. The deficient vitamin is:',
      options: [
        { id: 'a', text: 'Vitamin A' },
        { id: 'b', text: 'Vitamin K' },
        { id: 'c', text: 'Vitamin C' },
        { id: 'd', text: 'Folate' },
      ],
      answerId: 'b',
      explanation: 'Vitamin K is required for γ-carboxylation of clotting factors II, VII, IX and X; fat malabsorption from cholestasis reduces its absorption, causing bleeding and a prolonged prothrombin time that responds to vitamin K.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Why does fat malabsorption tend to cause deficiency of vitamins A, D, E and K together?',
      options: [
        { id: 'a', text: 'They share the same transport protein in blood' },
        { id: 'b', text: 'They are all absorbed together with dietary fat' },
        { id: 'c', text: 'They are all synthesised in the colon' },
        { id: 'd', text: 'They are all water-soluble' },
      ],
      answerId: 'b',
      explanation: 'A, D, E and K are fat-soluble and absorbed with dietary lipids; conditions that impair fat absorption (cholestasis, pancreatic insufficiency, coeliac disease, orlistat) therefore reduce absorption of all four simultaneously.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Vitamins & key deficiencies', svg: VITAMINS_DEFICIENCY, caption: 'Fat-soluble (A, D, E, K) and water-soluble vitamins with their characteristic deficiency states.' },
  ],
};

export default fatSolubleVitamins;
