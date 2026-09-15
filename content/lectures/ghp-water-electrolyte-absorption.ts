import type { Lecture } from '../../lib/types';

export const ghpWaterElectrolyteAbsorption: Lecture = {
  id: 'ghp-water-electrolyte-absorption',
  title: 'Water & Electrolyte Absorption',
  system: 'gi',
  source: 'Ch 66 — Digestion & Absorption in the Gastrointestinal Tract',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 66 Digestion & Absorption' },
    { kind: 'mechanism', label: 'Na⁺ absorbed → water follows osmotically' },
    { kind: 'exam', label: 'Colonic reserve · stool K⁺ and HCO₃⁻ loss' },
  ],

  highYield: [
    '**The gut handles about 9 litres a day and lets 100 mL go — the arithmetic is the point.** Roughly **2 L is drunk** and **7 L is secreted** (saliva, gastric juice, bile, pancreatic juice, intestinal secretion), so the small intestine faces a load **five times the plasma volume every day**. It absorbs **7–8 L**, only **1.5 L crosses the ileocaecal valve**, the colon takes nearly all of that, and **about 100 mL** leaves in stool. Net recovery is **98–99%**. This is why a shortfall of a few per cent — trivial anywhere else in physiology — produces litres of diarrhoea.',
    '**There is no water pump anywhere in the gut. Water only ever follows solute.** Water crosses through **aquaporins and leaky tight junctions** purely by **osmosis**, so absorbing water means absorbing solute first, and **sodium is the solute that does the work**. The engine is the **basolateral Na⁺/K⁺ ATPase**: it holds intracellular Na⁺ low, making every apical Na⁺ entry step downhill, and it pumps Na⁺ into the lateral intercellular space, which becomes transiently **hypertonic** and draws water across. Every therapy in this territory — oral rehydration, osmotic laxatives, antisecretory drugs — is a manipulation of solute, never of water.',
    '**Sodium is absorbed by a different mechanism in each segment, and exams live on the difference.** **Jejunum**: **NHE3** (Na⁺/H⁺ exchange, coupled to bicarbonate reclamation) plus **nutrient-coupled entry** on SGLT1 and the amino acid carriers, with heavy **solvent drag** through the leakiest junctions in the tract — absorption here is essentially **isotonic**. **Ileum**: **electroneutral coupled NaCl absorption**, NHE3 paired with the **Cl⁻/HCO₃⁻ exchanger DRA**. **Colon**: **electrogenic Na⁺ entry through ENaC**, strongly **upregulated by aldosterone**, with **no nutrient coupling at all** — which is exactly why oral rehydration solution works in the small bowel and not in the colon.',
    '**Tightness rises and permeability falls as you go distal — the gradient the colon exploits.** The jejunum is **leaky** and can only absorb isotonically; the ileum is tighter; the **colon has the tightest junctions in the tract** and can therefore hold a steep gradient, absorbing Na⁺ against a concentration difference until luminal Na⁺ falls to about **25–30 mmol/L**. That final concentrating step is what turns 1.5 L of ileal effluent into a formed stool. The price is that the colon also **secretes K⁺** — stool K⁺ runs **75–90 mmol/L** — so **large-volume diarrhoea and villous adenoma both cause hypokalaemia**.',
    '**Chloride and bicarbonate explain the acid-base consequences of losing gut fluid.** In the jejunum Cl⁻ follows Na⁺ **paracellularly**. In the ileum and colon Cl⁻ is **absorbed in exchange for secreted HCO₃⁻**, which buffers the short-chain fatty acids bacteria generate. The result is that **distal gut fluid is bicarbonate-rich**, so losing it gives a **hyperchloraemic, normal-anion-gap metabolic acidosis with hypokalaemia** — the exact mirror image of the hypochloraemic hypokalaemic alkalosis of vomiting. Absorbed short-chain fatty acids themselves stimulate colonic Na⁺ absorption and feed the colonocyte, which is why fermentable fibre is antidiarrhoeal.',
    '**Calcium and iron are the two regulated absorptions, and both live in the duodenum.** **Calcium** entry is **calcitriol-dependent**: vitamin D induces apical **TRPV6**, the cytosolic shuttle **calbindin**, and the basolateral **Ca²⁺ ATPase**, with a parallel unregulated paracellular route when intake is high — so vitamin D deficiency and proximal mucosal disease both cause hypocalcaemia. **Iron** needs **gastric acid and ascorbate** plus **duodenal cytochrome b** to reduce Fe³⁺ to Fe²⁺ for **DMT1**, then **ferroportin with hephaestin** to hand it to transferrin. Because **there is no route for excreting iron, absorption is the only regulated step** — and **hepcidin** degrades ferroportin to close it.',
  ],

  mechanism: {
    title: '9 L in → Na⁺ pumped out → water follows → colon concentrates the last 1.5 L',
    steps: [
      { id: 's1', label: 'About 9 L reaches the lumen daily — roughly 2 L drunk and 7 L secreted', emphasis: 'key' },
      { id: 's2', label: 'Basolateral Na⁺/K⁺ ATPase holds cell Na⁺ low, so every apical Na⁺ entry step is downhill', emphasis: 'key' },
      { id: 's3', label: 'Jejunum uses NHE3 and nutrient coupling; ileum uses coupled NaCl; colon uses ENaC under aldosterone', emphasis: 'key' },
      { id: 's4', label: 'Na⁺ pumped into the lateral intercellular space makes it transiently hypertonic' },
      { id: 's5', label: 'Water follows osmotically through aquaporins and tight junctions — it is never pumped', emphasis: 'key' },
      { id: 's6', label: 'Only 1.5 L reaches the colon and 100 mL leaves in stool; exceed the colonic ceiling and diarrhoea follows', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Stool water stays under about 100 mL a day although 9 L passes through the lumen', mechanism: 'Solute-driven absorption recovers 98 to 99 per cent, most of it in the small intestine', significance: 'key' },
    { sign: 'Diarrhoea appears once ileocaecal flow exceeds roughly 5 L a day', mechanism: 'The colon can raise its absorption several-fold but has a finite ceiling; beyond it the excess simply passes', significance: 'key' },
    { sign: 'Hypokalaemia with a hyperchloraemic normal-anion-gap acidosis after days of watery stool', mechanism: 'Distal gut fluid is rich in potassium and bicarbonate, so losing it strips both', significance: 'key' },
    { sign: 'Stool sodium falls and stool potassium rises during volume depletion', mechanism: 'Aldosterone upregulates colonic ENaC and the basolateral pump, trading sodium retention for potassium loss', significance: 'supportive' },
    { sign: 'Iron deficiency after gastrectomy or years of acid suppression', mechanism: 'Acid is needed to solubilise and reduce ferric iron before DMT1 can carry it', significance: 'key' },
    { sign: 'Hypocalcaemia and osteomalacia in coeliac disease or vitamin D deficiency', mechanism: 'Active duodenal calcium uptake depends on calcitriol-induced TRPV6 and calbindin in exactly the segment coeliac disease destroys', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Apical sodium channel of the colon that aldosterone upregulates', meaning: 'ENaC — electrogenic and nutrient-independent, which is why oral rehydration does not work colonically' },
    { clue: 'Exchanger carrying most jejunal sodium absorption and setting the brush-border acid microclimate', meaning: 'NHE3, the Na⁺/H⁺ exchanger — also the target inhibited by cAMP in secretory diarrhoea' },
    { clue: 'Segment with the leakiest junctions, where absorption is isotonic and solvent drag is greatest', meaning: 'Jejunum' },
    { clue: 'Calcitriol-induced shuttle that ferries calcium across the duodenal cytosol', meaning: 'Calbindin, working with apical TRPV6 and a basolateral calcium ATPase' },
    { clue: 'Apical carrier for ferrous iron in the duodenum', meaning: 'DMT1, after duodenal cytochrome b reduces Fe³⁺ to Fe²⁺' },
    { clue: 'The only regulated step in whole-body iron balance', meaning: 'Absorption — hepcidin closes it by degrading ferroportin, since there is no excretory route' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Almost every fluid decision in gastroenterology comes back to one sentence: **move the solute and the water follows**. That is why **oral rehydration exploits nutrient-coupled sodium uptake**, why **osmotic laxatives work by adding non-absorbable solute**, why **magnesium and lactulose cause diarrhoea in overdose**, and why giving plain water to a patient losing litres of isotonic stool produces hyponatraemia rather than repletion. It also explains the electrolyte fingerprint of the loss: **stool is potassium-rich and bicarbonate-rich**, so replacement fluid must contain both. The transport step behind oral rehydration: [[ghp-carbohydrate-protein-digestion]]. The clinical-layer version of this ground: [[mineral-water-absorption]].' },
    { logic: 'Where it is examined', detail: 'Three stems. **Where most water is absorbed** — the small intestine, not the colon, despite the colon being the more efficient concentrator. **Why potassium falls and bicarbonate is lost in diarrhoea** — the colon secretes potassium and exchanges chloride for bicarbonate. And **why a proton pump inhibitor causes iron deficiency but not folate deficiency** — the reduction step, not the surface, is acid-dependent. Secretion, the other half of the balance: [[intestinal-fluid-secretion]]. What the colon does with the last 1.5 L: [[colonic-motility-defecation]].' },
  ],

  mnemonics: [
    { hook: 'Water is a passenger, never the driver', expansion: ['No epithelium in the gut pumps water — absorption is always osmotic', 'Sodium is the fare; the Na⁺/K⁺ ATPase pays it', 'Therefore every treatment moves solute, and water follows'] },
    { hook: 'Down the tract: Jejunum leaks, Ileum swaps, Colon tightens', expansion: ['Jejunum: leaky junctions, NHE3 plus nutrient coupling, isotonic absorption, solvent drag', 'Ileum: electroneutral coupled NaCl with chloride for bicarbonate exchange', 'Colon: tight junctions, ENaC under aldosterone, potassium secreted, final concentrator'] },
  ],

  traps: [
    {
      questionCategory: 'How water is absorbed by the intestine',
      wrongInstinct: 'There is an active water transport process in the small bowel that can be stimulated directly',
      rightAnswer: 'Water movement is entirely osmotic and secondary to solute, above all to sodium',
      why: 'No water pump exists anywhere in the gut, so the only way to rehydrate through the lumen is to give absorbable solute.',
    },
    {
      questionCategory: 'Which segment absorbs most of the daily fluid load',
      wrongInstinct: 'The colon, since its job is to dry the stool',
      rightAnswer: 'The small intestine absorbs 7 to 8 of the 9 litres; the colon only ever sees about 1.5 L',
      why: 'The colon is the most efficient concentrator per litre but has the smallest share of the load and a hard ceiling on capacity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has a high-output ileostomy losing 4 L of effluent a day. Which statement best explains why the losses are so much greater than normal stool volume?',
      options: [
        { id: 'a', text: 'The small intestine normally absorbs almost nothing, so the colon is the only absorptive organ' },
        { id: 'b', text: 'Roughly 1.5 L normally crosses the ileocaecal valve and the colon concentrates it to about 100 mL, a step now bypassed' },
        { id: 'c', text: 'Ileostomy fluid is hypertonic and draws water from the plasma into the lumen' },
        { id: 'd', text: 'Loss of the ileum abolishes the basolateral sodium-potassium pump' },
      ],
      answerId: 'b',
      explanation: 'The small intestine absorbs most of the 9 L daily load, but the final concentrating step belongs to the colon, whose tight junctions let it absorb sodium down to about 25 to 30 mmol/L and reduce 1.5 L to around 100 mL. A stoma proximal to the colon delivers that unconcentrated ileal effluent straight out. The effluent is essentially isotonic, and the sodium pump is a cellular feature of the remaining bowel, not something lost with the colon.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A child with four days of profuse watery diarrhoea has potassium 2.8 mmol/L, chloride 116 mmol/L, bicarbonate 12 mmol/L and a normal anion gap. The acid-base and electrolyte picture arises because distal intestinal fluid is:',
      options: [
        { id: 'a', text: 'Rich in potassium and bicarbonate, both of which are lost in the stool' },
        { id: 'b', text: 'Rich in hydrogen ion and chloride, as in vomiting' },
        { id: 'c', text: 'Hypotonic, so free water is lost preferentially' },
        { id: 'd', text: 'Rich in unmeasured organic anions, which widens the anion gap' },
      ],
      answerId: 'a',
      explanation: 'The colon secretes potassium into the lumen and absorbs chloride in exchange for bicarbonate, so stool from the distal gut carries both potassium and bicarbonate away. The result is hypokalaemia with a hyperchloraemic, normal-anion-gap metabolic acidosis. Vomiting does the opposite and produces a hypochloraemic hypokalaemic alkalosis, and the normal gap here excludes an unmeasured anion.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A woman on long-term proton pump inhibitor therapy develops iron deficiency anaemia despite adequate dietary iron and a normal duodenal biopsy. The mechanism is that gastric acid is required to:',
      options: [
        { id: 'a', text: 'Activate ferroportin at the basolateral membrane' },
        { id: 'b', text: 'Solubilise iron and support its reduction from the ferric to the ferrous form for DMT1' },
        { id: 'c', text: 'Release hepcidin from the liver' },
        { id: 'd', text: 'Cleave iron from haem in the duodenal lumen' },
      ],
      answerId: 'b',
      explanation: 'Dietary non-haem iron arrives as poorly soluble ferric salt. Acid keeps it in solution and, with ascorbate and duodenal cytochrome b, supports reduction to the ferrous form that DMT1 can carry. Suppress acid and that step fails even though the mucosa is intact — which is also why haem iron, absorbed by a different route, is affected far less. Ferroportin and hepcidin act on export and its regulation, not on luminal solubility.',
      tests: 'mechanism',
    },
  ],
};

export default ghpWaterElectrolyteAbsorption;
