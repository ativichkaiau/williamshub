import type { Lecture } from '../../lib/types';

export const ghpMalabsorptionBowelDisorders: Lecture = {
  id: 'ghp-malabsorption-bowel-disorders',
  title: 'Malabsorption, Diarrhoea & Constipation',
  system: 'gi',
  source: 'Ch 66 — Physiology of Gastrointestinal Disorders',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 66 GI Disorders' },
    { kind: 'mechanism', label: 'Lumen · mucosa · lymphatic — three failure layers' },
    { kind: 'exam', label: 'Osmotic vs secretory · stool gap · fasting test' },
  ],

  highYield: [
    '**Malabsorption has exactly three layers, and naming the layer is the whole diagnosis.** **(1) Luminal — digestion fails**: pancreatic insufficiency (chronic pancreatitis, cystic fibrosis; note the reserve is enormous, so **more than 90% of exocrine function must be lost** before steatorrhoea appears), bile salt deficiency from cholestasis, ileal resection or bacterial deconjugation. **(2) Mucosal — the absorbing surface is gone**: coeliac disease, tropical sprue, Crohn disease, giardiasis, short bowel. **(3) Post-mucosal — the export route is blocked**: intestinal lymphangiectasia, Whipple disease, lymphoma, tuberculosis. All three give the same greasy stool, and the biopsy is what separates them: **normal in layers 1 and 3, abnormal only in layer 2**.',
    '**Coeliac disease is an immunological lesion with a geographical signature.** Gliadin peptides are **deamidated by tissue transglutaminase**, presented on **HLA-DQ2 or DQ8**, and drive a T-cell response producing **villous atrophy, crypt hyperplasia and intraepithelial lymphocytosis**. Because the injury is **proximal and worst in the duodenum and jejunum**, the deficiencies arrive in a fixed order: **iron, folate and calcium first**, with **vitamin B₁₂ preserved** until disease is extensive — because B₁₂ needs the **terminal ileum**, which coeliac disease spares. **Secondary lactase deficiency** is almost universal, since lactase lives at the villus tip that has been shaved off.',
    '**Diarrhoea has four physiological mechanisms and each has one clean discriminator.** **Osmotic**: unabsorbed solute holds water; **stops with fasting**; **stool osmotic gap above 100 mOsm/kg** (calculated as 290 minus twice the sum of stool Na⁺ and K⁺); volume usually under a litre — lactase deficiency, lactulose, magnesium salts, sorbitol. **Secretory**: active Cl⁻ secretion through **CFTR** driven by cAMP (cholera, heat-labile toxin, VIPoma), cGMP (heat-stable toxin) or Ca²⁺; **persists unchanged through a fast**; **gap under 50**; volume can exceed 10 L/day. **Inflammatory**: mucosal destruction adds blood, pus and protein and removes absorptive surface — small-volume bloody stool with fever and tenesmus, faecal leucocytes and calprotectin. **Motility-related**: see the next point.',
    '**Motility causes diarrhoea in both directions — that derived rule is worth more than a list.** **Too fast** (hyperthyroidism, post-vagotomy, dumping, carcinoid, diarrhoea-predominant irritable bowel) steals **contact time**: the transport machinery is intact but never gets to finish. **Too slow** produces **stasis, bacterial overgrowth and deconjugated bile salts**, which are themselves mucosal irritants and secretagogues — so the stagnant gut ends up with a **malabsorptive diarrhoea**. Anything that fixes one will worsen the other, which is why transit must be characterised before it is treated.',
    '**Constipation is either transit or evacuation, and megacolon is where the two extremes meet.** **Slow transit** means too few mass movements — low fibre, immobility, **opioids acting on enteric mu receptors**, hypothyroidism, **hypokalaemia and hypercalcaemia**. **Defecatory failure** means the rectum fills but cannot empty: a failed **rectoanal inhibitory reflex**, or **paradoxical puborectalis contraction** in dyssynergic defecation. Habitually ignoring the call to stool lets the rectum **accommodate**, the urge fades, and the loop reinforces itself. **Hirschsprung disease** is the congenital extreme — failed craniocaudal **neural crest migration** leaves an **aganglionic distal segment** with an **absent rectoanal inhibitory reflex**; **Chagas disease** destroys the same plexus that it destroys in achalasia, and gives acquired megacolon.',
    '**In severe diarrhoea the physiology that kills is volume and acid-base, not the stool itself.** The loss is **essentially isotonic**, so the **extracellular compartment contracts** first: tachycardia, postural hypotension, oliguria, then hypovolaemic shock with lactic acidosis added by hypoperfusion. Because distal gut fluid is **potassium-rich and bicarbonate-rich**, the fingerprint is **hypokalaemia with a hyperchloraemic normal-anion-gap metabolic acidosis** — the exact opposite of the alkalosis of vomiting. Children decompensate fastest because the loss is far larger relative to body water. The therapeutic split follows from the physiology: **oral rehydration while perfusion is adequate, intravenous isotonic fluid once it is not**.',
  ],

  mechanism: {
    title: 'Absorption minus secretion = stool water — and the four ways that balance breaks',
    steps: [
      { id: 's1', label: 'Every segment both secretes and absorbs; stool volume is only the difference between them', emphasis: 'key' },
      { id: 's2', label: 'Osmotic: unabsorbed solute holds water in the lumen — remove the substrate and it stops', emphasis: 'key' },
      { id: 's3', label: 'Secretory: cAMP or cGMP opens CFTR, chloride pours out, sodium and water follow — fasting changes nothing', emphasis: 'key' },
      { id: 's4', label: 'Inflammatory: the mucosa is destroyed, adding blood and protein while losing absorptive surface' },
      { id: 's5', label: 'Motility: too fast steals contact time, too slow invites overgrowth and deconjugated bile salts' },
      { id: 's6', label: 'Loss outruns the colonic ceiling → isotonic fluid, potassium and bicarbonate leave → shock with hypokalaemic normal-gap acidosis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Diarrhoea that stops completely within 24 to 48 hours of fasting', mechanism: 'Osmotic — no substrate in the lumen means no osmotic gradient to hold water', significance: 'key' },
    { sign: 'Stool osmotic gap under 50 with litres of stool that continue unchanged through a fast', mechanism: 'Secretory — the epithelium is actively pumping chloride out regardless of what is eaten', significance: 'key' },
    { sign: 'Small-volume bloody stools with fever, tenesmus and faecal leucocytes', mechanism: 'Inflammatory — mucosal destruction plus loss of the rectal reservoir function', significance: 'key' },
    { sign: 'Steatorrhoea with a completely normal small bowel biopsy', mechanism: 'The failure is luminal (lipase or bile salt) or post-mucosal (lymphatic), never mucosal', significance: 'key' },
    { sign: 'Iron and folate deficiency with a normal vitamin B₁₂ in untreated coeliac disease', mechanism: 'The injury is proximal; B₁₂ absorption belongs to the terminal ileum, which is spared', significance: 'supportive' },
    { sign: 'Low albumin with lymphopenia alongside fat malabsorption', mechanism: 'Lymphatic obstruction blocks chylomicron export and leaks protein and lymphocytes into the lumen', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Stool osmotic gap above 100 mOsm/kg', meaning: 'Osmotic diarrhoea — unabsorbed solute is holding the water' },
    { clue: 'Diarrhoea unchanged by a 48-hour fast, with large volumes and a narrow osmotic gap', meaning: 'Secretory diarrhoea — toxin, hormone or bile salt driving chloride secretion' },
    { clue: 'Low faecal elastase with a normal duodenal biopsy', meaning: 'Exocrine pancreatic insufficiency — luminal digestion failure, over 90 per cent of function lost' },
    { clue: 'Villous atrophy with crypt hyperplasia and intraepithelial lymphocytes', meaning: 'Coeliac disease — T-cell mediated, HLA-DQ2 or DQ8 restricted' },
    { clue: 'Absent ganglion cells on rectal biopsy with an absent rectoanal inhibitory reflex', meaning: 'Hirschsprung disease — and the biopsy must come from the narrow segment' },
    { clue: 'Hypokalaemia with a hyperchloraemic normal-anion-gap metabolic acidosis', meaning: 'Large-volume diarrhoea stripping potassium and bicarbonate — the opposite of the vomiting picture' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Mechanism dictates therapy here more sharply than in almost any other chapter. **Osmotic diarrhoea is treated by removing the solute** — withdraw the lactose, the sorbitol, the magnesium — and nothing else is needed. **Secretory diarrhoea needs the drive stopped and the losses replaced**, and because the absorptive machinery is intact, **oral rehydration works even at enormous stool volumes**. **Inflammatory diarrhoea needs the inflammation treated**, and antimotility drugs are dangerous in it. **Malabsorption is treated at its layer**: enzymes for the lumen, a gluten-free diet for the mucosa, medium-chain triglyceride for the lymphatic block. Where all that fluid should have been absorbed: [[ghp-water-electrolyte-absorption]]. Rehydration and antidiarrhoeal pharmacology: [[laxatives-antidiarrheals-ors]].' },
    { logic: 'Where it is examined', detail: 'Three stems, all of them mechanism-first. **The fasting test plus the stool osmotic gap** separates osmotic from secretory and is the single most examined discriminator in the chapter. **A normal biopsy in a patient with steatorrhoea** is not reassurance — it relocates the lesion to the lumen or the lymphatics. And **which deficiency appears first** tells you which segment is diseased: iron and folate mean proximal, B₁₂ and bile salt loss mean terminal ileum. The clinical-layer patterns: [[malabsorption-patterns]]. The bedside approach: [[fcp1-diarrhea-approach]]. Where the fat absorption itself breaks: [[ghp-fat-digestion-absorption]].' },
  ],

  mnemonics: [
    { hook: 'Four diarrhoeas, four discriminators: Osmotic stops, Secretory persists, Inflammatory bleeds, Motility hurries or stagnates', expansion: ['Osmotic: stops with fasting, stool gap over 100', 'Secretory: unchanged by fasting, stool gap under 50, huge volumes', 'Inflammatory: blood, pus, fever, tenesmus, small volumes', 'Motility: too fast steals contact time, too slow breeds overgrowth'] },
    { hook: 'Three layers of malabsorption: the Lumen digests, the Mucosa absorbs, the Lymphatic exports', expansion: ['Lumen: pancreas and bile salts — biopsy normal', 'Mucosa: coeliac, sprue, Crohn, giardia — biopsy abnormal', 'Lymphatic: lymphangiectasia, Whipple, lymphoma — biopsy normal, albumin low', 'All three produce the same greasy stool, so locate the layer before you treat'] },
  ],

  traps: [
    {
      questionCategory: 'Which segment is diseased in Hirschsprung megacolon',
      wrongInstinct: 'The hugely dilated proximal bowel is the abnormal segment',
      rightAnswer: 'The narrow distal segment is the aganglionic one; the dilated bowel above it is normal and simply obstructed',
      why: 'It determines where the diagnostic biopsy is taken and how far the resection must go, and the same reversal catches people in acquired megacolon.',
    },
    {
      questionCategory: 'What steatorrhoea tells you about the mucosa',
      wrongInstinct: 'Fat malabsorption means the small bowel mucosa must be damaged',
      rightAnswer: 'Fat absorption can fail entirely in the lumen or entirely at the lymphatic exit, with a completely normal biopsy',
      why: 'The three-layer split is the point of the chapter: the same stool has three mechanisms and three different treatments.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient passes 3 L of watery stool a day. Stool sodium is 118 mmol/L and potassium 22 mmol/L, and the diarrhoea continues unchanged through a 48-hour fast. These findings indicate:',
      options: [
        { id: 'a', text: 'An osmotic diarrhoea from an unabsorbed dietary solute' },
        { id: 'b', text: 'A secretory diarrhoea with active chloride secretion' },
        { id: 'c', text: 'An inflammatory diarrhoea from mucosal ulceration' },
        { id: 'd', text: 'Rapid transit from a motility disorder' },
      ],
      answerId: 'b',
      explanation: 'The stool osmotic gap is 290 minus twice the sum of sodium and potassium, here 290 minus 280, which is 10 — so essentially all the stool osmoles are electrolytes actively secreted by the epithelium, not an unabsorbed solute. Persistence through a fast confirms it, since an osmotic diarrhoea has no substrate once eating stops. Inflammatory stool is small-volume and bloody, and a transit disorder would not sustain 3 L a day while fasting.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A child with cholera has lost several litres of stool. Blood gases show pH 7.24, bicarbonate 11 mmol/L, chloride 115 mmol/L and potassium 2.9 mmol/L with a normal anion gap. The best explanation is that the stool lost:',
      options: [
        { id: 'a', text: 'Hydrogen ion and chloride, as in vomiting' },
        { id: 'b', text: 'Predominantly free water, concentrating the plasma' },
        { id: 'c', text: 'Bicarbonate and potassium in an essentially isotonic fluid' },
        { id: 'd', text: 'Unmeasured organic anions that widen the anion gap' },
      ],
      answerId: 'c',
      explanation: 'Distal intestinal fluid is rich in bicarbonate, secreted in exchange for absorbed chloride, and in potassium secreted by the colon. Losing it isotonically contracts the extracellular volume and simultaneously produces a hyperchloraemic, normal-anion-gap acidosis with hypokalaemia. Vomiting gives the mirror picture, and the loss is isotonic rather than free water, which is why plain water replacement causes hyponatraemia.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A neonate has failed to pass meconium in 48 hours, has abdominal distension, and a contrast study shows a narrow distal rectosigmoid with grossly dilated bowel above it. Anorectal manometry shows no rectoanal inhibitory reflex. The diseased bowel is:',
      options: [
        { id: 'a', text: 'The dilated proximal segment, which has lost its muscular tone' },
        { id: 'b', text: 'The narrow distal segment, which lacks myenteric and submucosal ganglion cells' },
        { id: 'c', text: 'The entire colon, which is uniformly aganglionic' },
        { id: 'd', text: 'The internal anal sphincter alone, which is hypertrophied' },
      ],
      answerId: 'b',
      explanation: 'In Hirschsprung disease craniocaudal neural crest migration fails, so the distal segment has no ganglion cells, cannot relax, and stays tonically contracted and narrow. The dilated bowel above it is histologically normal and merely obstructed, which is why the diagnostic biopsy must be taken from the narrow segment and why resection is defined by where ganglion cells reappear. The absent rectoanal inhibitory reflex reflects the missing intrinsic inhibitory neurons.',
      tests: 'disease',
    },
  ],
};

export default ghpMalabsorptionBowelDisorders;
