import type { Lecture } from '../../lib/types';

export const ghpAdrenocorticalSteroidSynthesis: Lecture = {
  id: 'ghp-adrenocortical-steroid-synthesis',
  title: 'Adrenocortical Steroid Synthesis & Zonation',
  system: 'endocrine',
  source: 'Ch 78 — Adrenocortical Hormones',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'Ch 78 Adrenocortical Hormones' },
    { kind: 'mechanism', label: 'One cholesterol trunk, three zones, three separate controllers' },
    { kind: 'exam', label: 'Aldosterone answers to renin and potassium, not to ACTH' },
  ],

  highYield: [
    '**Three cortical zones, three products, and the reason is enzymatic rather than anatomical.** Outside in: **zona glomerulosa makes aldosterone, zona fasciculata makes cortisol, zona reticularis makes androgens** — salt, then sugar, then sex, with the medulla underneath being chromaffin tissue and not cortex at all. The zonation is enforced by which enzymes each layer expresses. **Glomerulosa alone expresses aldosterone synthase (CYP11B2)**, so it alone can complete the final oxidation to aldosterone, and **glomerulosa alone lacks 17-alpha-hydroxylase (CYP17A1)**, which is precisely why it can make neither cortisol nor any androgen. Fasciculata carries CYP17A1 with hydroxylase activity and so stops at cortisol; reticularis adds strong **17,20-lyase activity with cytochrome b5 and the sulphotransferase SULT2A1**, which is what carries the pathway on to DHEA and DHEA sulphate. Learn the enzymes and the products stop needing to be memorised.',
    '**Every adrenal steroid comes off one trunk, and the trunk has a single rate-limiting valve that ACTH controls.** All of them begin as **cholesterol**, taken up mainly from LDL and stored as cholesteryl ester droplets. The committed step is delivery of that cholesterol from the outer to the inner mitochondrial membrane by **StAR protein**, followed by side-chain cleavage to pregnenolone by **CYP11A1**. **ACTH binds the melanocortin-2 receptor, raises cAMP and activates protein kinase A**, which phosphorylates StAR within minutes and, over days to weeks, maintains the trophic bulk of fasciculata and reticularis. Two consequences matter clinically. **Steroids are not stored** — unlike the thyroid, which holds months of finished hormone in colloid, the adrenal synthesises on demand and the hormone diffuses out as it is made, so output can multiply within minutes but there is no reserve to draw on when the gland fails. And **prolonged ACTH deficiency atrophies the inner two zones while glomerulosa persists**, because glomerulosa is held up by a different controller entirely.',
    '**The controller split is the single most clinically productive fact in the chapter: aldosterone is governed by the renin-angiotensin system and by plasma potassium, not principally by ACTH.** Angiotensin II and a rising potassium both depolarise the glomerulosa cell and drive aldosterone synthase; ACTH gives only a modest, non-sustained push. From that one asymmetry the two adrenal insufficiencies separate themselves without further memorising. **Secondary adrenal insufficiency**, from pituitary disease or, far more often, from exogenous glucocorticoid suppressing the axis, removes ACTH — so cortisol and adrenal androgens fail while **aldosterone is preserved**. There is therefore **no hyperkalaemia, no significant salt wasting, and no hyperpigmentation**, since ACTH and its POMC-derived peptides are low rather than high. **Primary adrenal failure** destroys the whole cortex, so **aldosterone goes too**: hyperkalaemia, salt wasting, volume depletion with postural hypotension, a metabolic acidosis, and hyperpigmentation driven by the enormous compensatory ACTH. The RAAS half of that logic is developed in [[hen1-aldosterone-raas]].',
    '**Any enzyme block in this pathway can be read off three questions, which is far more useful than memorising the congenital adrenal hyperplasias separately.** First, **is cortisol produced?** If not, negative feedback is lost, ACTH rises, the cortex hypertrophies and everything upstream of the block piles up — hence the word hyperplasia. Second, **does a mineralocorticoid-active precursor accumulate?** Deoxycorticosterone has real mineralocorticoid activity, so blocks that let it build up give **hypertension with hypokalaemia**, while blocks below it give **salt wasting**. Third, **is the block above or below CYP17A1?** Above it, no androgens can be made at all; below it, the trapped precursor is shunted down the androgen arm and the patient virilises. Apply the three: **21-hydroxylase deficiency** gives no cortisol, no aldosterone and excess androgen — **virilisation with salt wasting**. **11-beta-hydroxylase deficiency** gives no cortisol, accumulated deoxycorticosterone and excess androgen — **virilisation with hypertension and hypokalaemia**. **17-alpha-hydroxylase deficiency** gives no cortisol, accumulated deoxycorticosterone and no sex steroids at all — **hypertension with sexual infantilism**.',
    '**21-hydroxylase deficiency is the worked example, and it accounts for about 90 to 95% of congenital adrenal hyperplasia.** The enzyme sits on the branch that both cortisol and aldosterone must cross, so a severe defect fails both while leaving the androgen arm not merely intact but flooded: substrate dams up as **17-hydroxyprogesterone**, which is the diagnostic marker and the reason it is the screening analyte. Loss of cortisol feedback drives ACTH up, ACTH drives the trunk harder, and the extra flow has nowhere to go but into androgens. The presentation follows mechanically. **A 46,XX newborn is virilised with ambiguous genitalia**, since exposure began in utero, whereas **a 46,XY newborn looks entirely normal at birth** — which is exactly why boys present later and more dangerously. **A salt-wasting crisis at one to three weeks** brings hyponatraemia, hyperkalaemia, acidosis, hypoglycaemia and shock. Treatment is a glucocorticoid to replace cortisol and to suppress the ACTH drive that is generating the androgens, with a mineralocorticoid and, in infancy, added salt. Non-classical partial deficiency instead surfaces in adolescence as hirsutism and oligomenorrhoea that mimics polycystic ovary syndrome.',
    '**The adrenal androgens are weak, they matter almost entirely in women and children, and DHEA sulphate is the marker that localises an androgen excess to the adrenal.** DHEA, DHEA sulphate and androstenedione have little intrinsic potency and act mainly after peripheral conversion to testosterone and dihydrotestosterone. In men, testicular testosterone dwarfs them, so adrenal androgen status is close to irrelevant; in women they supply a substantial share of total androgen and drive **adrenarche at about six to eight years**, with pubic and axillary hair appearing before gonadal puberty. Because **DHEA sulphate is essentially adrenal-specific and has a long half-life**, a markedly raised level points at the adrenal — and a very high level in a virilising patient raises adrenocortical carcinoma. The same pathway is the target of the drugs that block steroidogenesis: **metyrapone** blocks 11-beta-hydroxylase and is used diagnostically to test ACTH reserve, **ketoconazole and osilodrostat** inhibit steroidogenic enzymes therapeutically, and **a single induction dose of etomidate can suppress cortisol synthesis** — an easily forgotten cause of unexplained hypotension in intensive care. The zona reticularis in its own right is covered in [[hen1-adrenal-androgens]].',
  ],

  mechanism: {
    title: 'Cholesterol → StAR and CYP11A1 under ACTH → the branch point set by zone-specific enzymes → three products under three separate controllers',
    steps: [
      { id: 's1', label: 'LDL-derived cholesterol is esterified and stored in lipid droplets; the adrenal stores precursor, never finished hormone', detail: 'Contrast with the thyroid colloid depot — no steroid reserve means output rises within minutes but fails within hours', emphasis: 'normal' },
      { id: 's2', label: 'StAR moves cholesterol to the inner mitochondrial membrane and CYP11A1 cleaves it to pregnenolone — the rate-limiting, ACTH-regulated step', emphasis: 'key' },
      { id: 's3', label: 'ACTH acts through the melanocortin-2 receptor, cAMP and PKA — acutely on StAR, chronically as trophic support for fasciculata and reticularis', emphasis: 'key' },
      { id: 's4', label: 'Glomerulosa lacks CYP17A1 and uniquely holds CYP11B2, so it makes aldosterone and nothing else', emphasis: 'key' },
      { id: 's5', label: 'Fasciculata uses CYP17A1 hydroxylase activity to reach cortisol; reticularis adds 17,20-lyase and SULT2A1 to reach DHEA and DHEA sulphate', emphasis: 'normal' },
      { id: 's6', label: 'Three controllers, not one — renin-angiotensin and potassium for aldosterone, ACTH for cortisol and androgens', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's6',
        title: 'Why the two adrenal insufficiencies differ',
        steps: [
          { id: 'b1', label: 'Secondary: ACTH lost, glomerulosa still driven by renin and potassium, so aldosterone survives', emphasis: 'key' },
          { id: 'b2', label: 'No hyperkalaemia, no significant salt wasting, no hyperpigmentation — hyponatraemia may still appear through cortisol-dependent water handling', emphasis: 'normal' },
          { id: 'b3', label: 'Primary: whole cortex destroyed, so aldosterone fails as well', emphasis: 'key' },
          { id: 'b4', label: 'Hyperkalaemia, salt wasting, postural hypotension, acidosis and hyperpigmentation from the compensatory ACTH surge', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Hyperpigmentation of palmar creases, buccal mucosa and recent scars in a patient with fatigue and postural hypotension', mechanism: 'Loss of cortisol feedback drives POMC transcription; ACTH and related peptides stimulate melanocortin-1 receptors on melanocytes, so pigmentation marks a primary and never a secondary cause', significance: 'key' },
    { sign: 'A patient with panhypopituitarism who is hypotensive and hyponatraemic but has a normal serum potassium', mechanism: 'Secondary insufficiency removes ACTH only; glomerulosa continues under renin and potassium control, so aldosterone and therefore potassium handling are preserved', significance: 'key' },
    { sign: 'A three-week-old boy with vomiting, poor feeding, shock, sodium 122 mmol/L and potassium 7.1 mmol/L', mechanism: 'Salt-wasting 21-hydroxylase deficiency — both cortisol and aldosterone fail, and unlike an affected girl he had no virilised genitalia at birth to prompt earlier diagnosis', significance: 'key' },
    { sign: 'A virilised child who is hypertensive and hypokalaemic rather than salt-wasting', mechanism: 'An 11-beta-hydroxylase block dams up deoxycorticosterone, which has genuine mineralocorticoid activity, while precursor still shunts into the androgen arm', significance: 'key' },
    { sign: 'A young woman with hirsutism, clitoromegaly, rapid virilisation over months and a DHEA sulphate several times the upper limit', mechanism: 'DHEA sulphate is effectively adrenal-specific with a long half-life, so a markedly raised level localises the source and, with rapid onset, raises adrenocortical carcinoma', significance: 'key' },
    { sign: 'Unexplained hypotension and a low random cortisol in an intubated patient given etomidate for induction', mechanism: 'Etomidate inhibits 11-beta-hydroxylase, and because the adrenal stores no finished steroid a single dose can measurably suppress cortisol synthesis for hours to a day', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The enzymatic reason zona glomerulosa cannot make cortisol or androgens', meaning: 'It does not express 17-alpha-hydroxylase (CYP17A1); it uniquely expresses aldosterone synthase (CYP11B2), which is why it makes aldosterone alone' },
    { clue: 'The rate-limiting step of all adrenal steroidogenesis and the hormone that regulates it', meaning: 'StAR-mediated cholesterol transfer to the inner mitochondrial membrane with CYP11A1 side-chain cleavage, driven acutely by ACTH through cAMP and protein kinase A' },
    { clue: 'Why chronic ACTH deficiency does not cause hyperkalaemia', meaning: 'Aldosterone is controlled by angiotensin II and plasma potassium, so glomerulosa is sustained even when the inner two zones atrophy — the single fact that separates secondary from primary insufficiency' },
    { clue: 'The screening analyte for classical congenital adrenal hyperplasia', meaning: 'Raised 17-hydroxyprogesterone, the substrate dammed immediately above a 21-hydroxylase block' },
    { clue: 'Why one enzyme block causes hypertension and another causes salt wasting', meaning: 'Blocks that allow deoxycorticosterone to accumulate produce mineralocorticoid excess with hypokalaemia; blocks below it remove mineralocorticoid activity and produce salt wasting' },
    { clue: 'The androgen measurement that localises virilisation to the adrenal', meaning: 'DHEA sulphate, which is essentially adrenal in origin and has a long half-life — very high values in rapid virilisation suggest adrenocortical carcinoma' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The clinically useful version of this chapter is not the enzyme map but its consequence: **the adrenal cortex is three glands sharing one blood supply and one cholesterol trunk, answering to different masters**. Because ACTH runs only the inner two, losing ACTH and losing the gland are different diseases with different electrolytes, different pigmentation and different emergency management. Because the gland stores no hormone, adrenal output can rise in minutes and can also fail in hours. And because a block dams substrate above it and shunts the excess sideways, a single missing enzyme produces a predictable triad rather than a list to memorise. What cortisol then does once it is made is in [[ghp-cortisol-actions-stress-response]].' },
    { logic: 'Where it is examined', detail: 'The dominant stem gives **adrenal insufficiency and asks for the potassium**, expecting the candidate to know that it is normal in secondary disease and high in primary. A close second gives **a virilised infant and asks whether they are hypertensive or salt-wasting**, which discriminates 11-beta-hydroxylase from 21-hydroxylase deficiency. A third asks for **the rate-limiting step**, where StAR and CYP11A1 rather than any named hydroxylase is the answer. A fourth asks **why hyperpigmentation appears in one form of insufficiency and not the other**. The HPA axis control that sits above all of these is in [[hen1-cortisol-hpa-axis]].' },
  ],

  mnemonics: [
    {
      hook: 'Salt, Sugar, Sex — the deeper you go, the sweeter it gets',
      expansion: [
        'Glomerulosa — salt — aldosterone — driven by renin and potassium',
        'Fasciculata — sugar — cortisol — driven by ACTH',
        'Reticularis — sex — DHEA and DHEA sulphate — driven by ACTH',
        'Medulla underneath is chromaffin tissue, catecholamines, and not cortex at all',
      ],
    },
    {
      hook: 'Read any block with three questions: cortisol, deoxycorticosterone, and which side of CYP17',
      expansion: [
        'Cortisol absent means ACTH rises and the gland hypertrophies — the hyperplasia in the name',
        'Deoxycorticosterone accumulating means hypertension with hypokalaemia; nothing accumulating means salt wasting',
        'Block below CYP17 shunts precursor into androgens and virilises; block above it abolishes androgens entirely',
        '21-hydroxylase: virilise and salt-waste · 11-beta: virilise and hypertensive · 17-alpha: infantile and hypertensive',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Electrolytes in adrenal insufficiency',
      wrongInstinct: 'Any adrenal insufficiency causes hyperkalaemia, so a normal potassium argues against the diagnosis',
      rightAnswer: 'Hyperkalaemia belongs to primary adrenal failure; secondary insufficiency spares aldosterone entirely and the potassium is normal',
      why: 'Aldosterone is a renin and potassium story, not an ACTH story — so removing ACTH does not remove aldosterone, and this is the fact the question is built around.',
    },
    {
      questionCategory: 'Why a newborn boy with congenital adrenal hyperplasia presents later than a girl',
      wrongInstinct: 'Boys are affected less severely, since they show no genital abnormality at birth',
      rightAnswer: 'The biochemical defect is identical; the girl is virilised in utero and so is detected at birth, while the boy looks normal until he collapses in a salt-wasting crisis',
      why: 'Absence of a visible clue is the danger rather than evidence of mild disease, which is the entire justification for newborn biochemical screening.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 46-year-old on long-term high-dose prednisolone for vasculitis stops it abruptly and becomes unwell with nausea, weakness and a blood pressure of 88/54 mmHg. Sodium is 128 mmol/L, potassium 4.1 mmol/L, and there is no hyperpigmentation. Which statement best explains the potassium?',
      options: [
        { id: 'a', text: 'Aldosterone secretion is preserved because zona glomerulosa is driven by angiotensin II and potassium rather than by ACTH' },
        { id: 'b', text: 'Exogenous glucocorticoid has a direct mineralocorticoid effect that persists for weeks after stopping' },
        { id: 'c', text: 'Zona glomerulosa has atrophied but renal potassium handling is independent of aldosterone' },
        { id: 'd', text: 'The potassium will inevitably rise over the next several days as the whole cortex atrophies' },
      ],
      answerId: 'a',
      explanation: 'Exogenous steroid suppresses hypothalamic and pituitary output, so ACTH falls and the ACTH-dependent zona fasciculata and reticularis atrophy. Zona glomerulosa is not ACTH-dependent in any sustained way: it answers to angiotensin II and to plasma potassium, so aldosterone secretion and therefore potassium handling are preserved. That is why secondary insufficiency gives a normal potassium and no significant salt wasting, and why the absence of hyperpigmentation fits — ACTH here is low, not high. The hyponatraemia is still expected, because cortisol deficiency impairs free water excretion.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 2-year-old is referred with pubic hair, accelerated growth and clitoromegaly. Blood pressure is 128/84 mmHg, sodium 141 mmol/L and potassium 3.1 mmol/L. The most likely enzyme deficiency is:',
      options: [
        { id: 'a', text: '21-hydroxylase' },
        { id: 'b', text: '11-beta-hydroxylase' },
        { id: 'c', text: '17-alpha-hydroxylase' },
        { id: 'd', text: 'Aldosterone synthase' },
      ],
      answerId: 'b',
      explanation: 'Virilisation places the block below CYP17A1, so precursor can be shunted into the androgen arm — that excludes 17-alpha-hydroxylase deficiency, which abolishes sex steroid synthesis and presents with sexual infantilism. Hypertension with hypokalaemia rather than salt wasting places it above the step where deoxycorticosterone would be consumed, so deoxycorticosterone accumulates and acts as a mineralocorticoid; that is 11-beta-hydroxylase deficiency. A 21-hydroxylase block would virilise but waste salt, and aldosterone synthase deficiency causes salt wasting without any effect on androgens.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Which step is rate-limiting for adrenocortical steroid synthesis, and how does ACTH act on it acutely?',
      options: [
        { id: 'a', text: '21-hydroxylation of progesterone; ACTH increases transcription of CYP21A2 over several hours' },
        { id: 'b', text: 'StAR-mediated cholesterol delivery to the inner mitochondrial membrane for CYP11A1 side-chain cleavage; ACTH raises cAMP and protein kinase A phosphorylates StAR within minutes' },
        { id: 'c', text: 'Hepatic cholesterol synthesis; ACTH stimulates HMG-CoA reductase in the liver' },
        { id: 'd', text: 'Release of stored cortisol from adrenal secretory granules; ACTH triggers exocytosis' },
      ],
      answerId: 'b',
      explanation: 'The committed and rate-limiting step is getting cholesterol across to the inner mitochondrial membrane, performed by StAR, after which CYP11A1 cleaves the side chain to pregnenolone. ACTH signals through the melanocortin-2 receptor, cAMP and protein kinase A, phosphorylating StAR within minutes and separately maintaining trophic bulk over days. Option d is the standard distractor and is wrong in principle: steroids are lipophilic and diffuse out as they are made, so the adrenal stores cholesteryl ester precursor but never finished hormone — which is why it can respond within minutes and also why it has no reserve when it fails.',
      tests: 'mechanism',
    },
  ],
};

export default ghpAdrenocorticalSteroidSynthesis;
