import type { Lecture } from '../../lib/types';

export const ghpCortisolActionsStressResponse: Lecture = {
  id: 'ghp-cortisol-actions-stress-response',
  title: 'Cortisol: Metabolic Actions & the Stress Response',
  system: 'endocrine',
  source: 'Ch 78 — Adrenocortical Hormones',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'Ch 78 Adrenocortical Hormones' },
    { kind: 'mechanism', label: 'Guarantees glucose, permits vascular tone, and is kept off the mineralocorticoid receptor by one enzyme' },
    { kind: 'exam', label: 'Refractory hypotension that answers to hydrocortisone, not to more noradrenaline' },
  ],

  highYield: [
    '**Cortisol binds the mineralocorticoid receptor with the same affinity as aldosterone, and circulates at a free concentration a hundred or more times higher — so the receptor should be permanently occupied by the wrong hormone.** It is not, because the aldosterone-responsive cells of the distal nephron express **11-beta-hydroxysteroid dehydrogenase type 2**, which converts cortisol to **cortisone**, a steroid with no affinity for the receptor. Specificity is therefore not built into the receptor at all; it is manufactured locally by destroying the competitor at the door. Break that guard and the consequence is exact and predictable. **Genetic deficiency gives the syndrome of apparent mineralocorticoid excess**; **glycyrrhetinic acid in liquorice inhibits the enzyme pharmacologically**; and **cortisol concentrations high enough to saturate it, classically in ectopic ACTH secretion, overwhelm it**. All three produce **hypertension, hypokalaemia and metabolic alkalosis with a suppressed renin and a suppressed aldosterone** — and that last pair is the discriminator, because in primary aldosteronism the aldosterone is high. The receptor and its proper ligand are dealt with in [[hen1-aldosterone-raas]].',
    '**Every metabolic action of cortisol serves one objective: guarantee a glucose supply to the brain through a prolonged stress, and charge the cost to every other tissue.** In the liver it induces **PEPCK and glucose-6-phosphatase** and so drives **gluconeogenesis**. In muscle and adipose it **antagonises insulin** by impairing GLUT4-dependent uptake, which raises blood glucose from the other direction. It supplies the substrate for that gluconeogenesis by **catabolising protein in muscle, skin, connective tissue and bone** and releasing amino acids, and by **stimulating lipolysis** to release glycerol and free fatty acids. Notice what this makes cortisol: **a hormone that is anabolic only for the liver and catabolic for everything else**, which is why the same actions that keep a starving or injured person alive for days will, sustained for months, dismantle them. Chronically the picture is a **hyperglycaemic, insulin-resistant, protein-depleted patient**. The nitrogen accounting behind the protein limb is in [[ghp-protein-turnover-nitrogen-balance]].',
    '**Cortisol is permissive for catecholamine action on the vasculature, and that permissiveness is the reason adrenal crisis kills.** Cortisol maintains **alpha-1 adrenoceptor expression and post-receptor coupling in vascular smooth muscle**, supports the synthetic enzymes for catecholamines, and preserves capillary endothelial integrity and responsiveness. Without it, noradrenaline and angiotensin II are present but cannot be acted upon. The clinical translation is one of the most useful patterns in acute medicine: **hypotension that does not respond to fluids and escalating vasopressors, but reverses within an hour or two of intravenous hydrocortisone**. The hormone is not a pressor and adds nothing to the signal — it restores the ability of the vessel to hear a signal that was there all along. Read in reverse, the same mechanism explains why **cortisol excess is hypertensive** through two routes at once: the permissive amplification of vascular tone, and the mineralocorticoid receptor spillover of the first point. Treating the crisis therefore means giving the steroid first and arguing about the diagnosis afterwards.',
    '**The anti-inflammatory and immunosuppressive actions are largely a pharmacological phenomenon, and the blood count they produce is a trap worth learning deliberately.** At physiological concentrations cortisol restrains the inflammatory response rather than abolishing it; at the doses used therapeutically it **induces annexin A1 to inhibit phospholipase A2**, cutting off both prostaglandins and leukotrienes at their shared source, **suppresses NF-kB-driven transcription of cytokines**, and impairs antigen presentation, T-cell function and fibroblast activity. The haematological signature is the examinable part. **Neutrophils rise**, which is demargination and reduced adhesion rather than any increase in production or any evidence of infection, while **lymphocytes, eosinophils, monocytes and basophils all fall** through redistribution and apoptosis. So a patient on steroids with a neutrophilia has a steroid effect, whereas a fall in eosinophils is the expected direction — and the corollary, an unexplained **eosinophilia in a hypotensive patient, points towards cortisol deficiency**. The cost of this suppression is the reason chronic steroid users present with **atypical, blunted and late infections**, where the usual signs of inflammation have been removed along with the inflammation.',
    '**The Cushing phenotype is derivable, not memorisable, and the two features worth deriving in full are the fat and the skin.** Cortisol is lipolytic, so it is not simply that fat increases — it **moves**. Peripheral limb adipose is more catecholamine-sensitive and is preferentially broken down, while **visceral, facial, supraclavicular and dorsocervical depots express more glucocorticoid receptor and more 11-beta-HSD1**, the enzyme that regenerates active cortisol locally from cortisone, and they are simultaneously being told by the hyperinsulinaemia of insulin resistance to store fat. The result is **central deposition with thin limbs** rather than uniform obesity. The skin follows from the protein catabolism: **fibroblast collagen synthesis is inhibited and existing dermal collagen is broken down**, so the dermis thins until the subdermal vasculature shows through as **purple rather than pale striae**, and capillaries without connective tissue support bruise on trivial contact. The same catabolism gives **proximal myopathy** through type II fibre loss, and **osteoporosis** through suppressed osteoblasts, reduced intestinal calcium absorption and increased urinary calcium. The endocrine block presentation of these actions is in [[hen1-cortisol-systemic-actions]].',
    '**Cortisol is secreted in a pulsatile circadian rhythm, and that single measurement fact dictates how the axis is tested.** Levels peak shortly before waking at around **06:00 to 08:00** and fall to a nadir near **midnight**, a swing of several-fold that is driven by the suprachiasmatic clock through CRH and ACTH pulses and is entrained to the sleep-wake cycle rather than to light directly. A **random cortisol is therefore close to uninterpretable**, and every useful test either fixes the timing or perturbs the system. For **suspected excess**: late-night salivary cortisol, which asks whether the nadir has been lost; 24-hour urinary free cortisol, which integrates the day; and the low-dose dexamethasone suppression test, which asks whether feedback still works. For **suspected deficiency**: an early-morning cortisol taken at the expected peak, and the short synacthen test, which asks whether the gland can respond. Two caveats sit alongside. **Oestrogen raises cortisol-binding globulin**, so total cortisol rises in pregnancy and on the combined pill while free hormone is normal. And because the axis scales output to the severity of stress, a patient whose axis is suppressed by chronic steroid **cannot mount that response and needs stress dosing** through intercurrent illness or surgery.',
  ],

  mechanism: {
    title: 'Stress → CRH and ACTH → cortisol → glucose guaranteed, vascular tone permitted, inflammation restrained → chronic excess dismantles the tissues that paid for it',
    steps: [
      { id: 's1', label: 'Stress, hypoglycaemia and the circadian clock drive hypothalamic CRH and vasopressin, then pituitary ACTH in pulses', emphasis: 'normal' },
      { id: 's2', label: 'Cortisol induces hepatic PEPCK and glucose-6-phosphatase while antagonising insulin in muscle and fat — glucose is raised from both ends', emphasis: 'key' },
      { id: 's3', label: 'Substrate for that glucose comes from protein catabolism in muscle, skin and bone and from lipolysis — anabolic for liver, catabolic for everything else', emphasis: 'key' },
      { id: 's4', label: 'Permissive action maintains alpha-1 adrenoceptor responsiveness, so catecholamines can hold vascular tone', detail: 'Its absence is the refractory hypotension of adrenal crisis, which reverses with hydrocortisone rather than with more vasopressor', emphasis: 'key' },
      { id: 's5', label: '11-beta-HSD2 inactivates cortisol to cortisone in the distal nephron, keeping it off a mineralocorticoid receptor it binds just as tightly as aldosterone', emphasis: 'key' },
      { id: 's6', label: 'Sustained excess converts a survival programme into the Cushing phenotype — central fat, thin bruising skin, proximal myopathy, osteoporosis and hyperglycaemia', emphasis: 'normal' },
    ],
    branches: [
      {
        fromId: 's5',
        title: 'When the guard enzyme is lost or overwhelmed',
        steps: [
          { id: 'b1', label: 'Liquorice, genetic deficiency, or cortisol so high it saturates the enzyme — classically ectopic ACTH', emphasis: 'normal' },
          { id: 'b2', label: 'Cortisol now activates the mineralocorticoid receptor: sodium retention, potassium and hydrogen ion loss', emphasis: 'key' },
          { id: 'b3', label: 'Hypertension with hypokalaemia and metabolic alkalosis — apparent mineralocorticoid excess', emphasis: 'key' },
          { id: 'b4', label: 'Renin AND aldosterone are both suppressed, which is what separates it from primary aldosteronism', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Septic-looking hypotension unresponsive to 3 litres of fluid and rising noradrenaline, which corrects within two hours of intravenous hydrocortisone', mechanism: 'Cortisol is permissive rather than pressor — it restores alpha-1 adrenoceptor responsiveness and capillary integrity so that catecholamines already present can act', significance: 'key' },
    { sign: 'Hypertension with potassium 2.9 mmol/L and a metabolic alkalosis in a patient with rapid-onset Cushing syndrome from small-cell lung cancer', mechanism: 'Cortisol at ectopic-ACTH concentrations saturates renal 11-beta-HSD2 and spills onto the mineralocorticoid receptor; renin and aldosterone are both suppressed', significance: 'key' },
    { sign: 'Wide purple abdominal striae and bruising after minimal trauma, in contrast to the pale silvery striae of simple weight gain', mechanism: 'Glucocorticoid inhibits fibroblast collagen synthesis and degrades dermal collagen, so the thinned dermis lets subdermal vessels show through and leaves capillaries unsupported', significance: 'key' },
    { sign: 'Central adiposity with a supraclavicular and dorsocervical pad alongside visibly wasted thighs and difficulty rising from a chair', mechanism: 'Limb adipose is lipolysed while central depots, rich in glucocorticoid receptor and 11-beta-HSD1 and driven by hyperinsulinaemia, store fat; type II muscle fibres are catabolised', significance: 'key' },
    { sign: 'Neutrophilia with lymphopenia and eosinopenia in a patient started on high-dose prednisolone, with no fever or focus of infection', mechanism: 'Neutrophil demargination and reduced adhesion raise the count without any increase in production, while lymphocytes and eosinophils are redistributed and undergo apoptosis', significance: 'supportive' },
    { sign: 'An unexplained eosinophilia alongside hyponatraemia and hypotension in a chronically unwell patient', mechanism: 'The mirror image of the steroid blood picture — loss of cortisol removes the suppression of eosinophils, and the finding should prompt testing for adrenal insufficiency', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Why the mineralocorticoid receptor is not permanently occupied by cortisol despite equal affinity and far higher concentrations', meaning: '11-beta-hydroxysteroid dehydrogenase type 2 converts cortisol to inactive cortisone in aldosterone target cells — specificity is enforced outside the receptor, not within it' },
    { clue: 'Hypertension with hypokalaemia, low renin and low aldosterone', meaning: 'Apparent mineralocorticoid excess — liquorice, a genetic 11-beta-HSD2 defect, or cortisol high enough to saturate the enzyme. Primary aldosteronism has the same electrolytes but a high aldosterone' },
    { clue: 'Why a random serum cortisol is a poor test in either direction', meaning: 'Pulsatile secretion on a circadian rhythm peaking at 06:00 to 08:00 and reaching a nadir near midnight — so testing must fix the timing or perturb the axis' },
    { clue: 'The three tests for suspected cortisol excess and the question each asks', meaning: 'Late-night salivary cortisol asks whether the nadir is lost; 24-hour urinary free cortisol integrates total output; low-dose dexamethasone asks whether negative feedback still works' },
    { clue: 'Why a patient on long-term prednisolone needs extra steroid for surgery or intercurrent illness', meaning: 'The suppressed axis cannot scale ACTH and cortisol to the stressor, and without the permissive support of vascular tone the result is a crisis rather than a normal stress response' },
    { clue: 'Why total cortisol is raised in pregnancy and on the combined oral contraceptive without any disease', meaning: 'Oestrogen raises cortisol-binding globulin, so the bound pool rises while free hormone and its actions are unchanged — the same artefact as thyroxine-binding globulin with total T4' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cortisol is best held as **one survival programme with three separable arms**, because every clinical feature belongs to one of them. **Metabolic** — guarantee glucose to the brain, funded by catabolising muscle, skin, bone and fat. **Permissive** — keep the vasculature able to answer catecholamines, which is why its absence produces hypotension that no pressor will fix and why its excess is hypertensive. **Immunological** — restrain inflammation physiologically, abolish it pharmacologically. Sustained beyond the emergency it was designed for, the same programme produces Cushing syndrome, which is why the phenotype should be derived from the arms rather than memorised as a list. Where the hormone itself comes from is in [[ghp-adrenocortical-steroid-synthesis]].' },
    { logic: 'Where it is examined', detail: 'The highest-yield stem in the chapter is **hypertension with hypokalaemia where both renin and aldosterone are low**, and it is testing whether the candidate can reconstruct 11-beta-HSD2 — liquorice and ectopic ACTH are the two usual dressings. The second is **shock that does not respond to vasopressors**, wanting the word permissive and the instruction to give hydrocortisone before the confirmatory cortisol comes back. A third offers a **steroid-treated patient with a neutrophilia** and asks whether to hunt for sepsis, where demargination is the answer. A fourth asks **why the striae are purple**, testing whether the skin finding has been derived from collagen catabolism or merely learned. A fifth gives a **random cortisol** and asks what it means, where the correct answer is very little.' },
  ],

  mnemonics: [
    {
      hook: 'Cortisol has one job and sends three bills',
      expansion: [
        'The job: keep glucose available to the brain through a prolonged stress',
        'Bill one — metabolic: gluconeogenesis, insulin antagonism, protein catabolism, lipolysis',
        'Bill two — vascular: permissive for catecholamines, so deficiency gives pressor-resistant shock',
        'Bill three — immune: inflammation restrained physiologically and abolished at pharmacological dose',
      ],
    },
    {
      hook: 'Same receptor, different doorman — hypertension plus hypokalaemia, then look at the aldosterone',
      expansion: [
        'Cortisol binds the mineralocorticoid receptor as tightly as aldosterone does',
        '11-beta-HSD2 converts cortisol to cortisone in the distal nephron and keeps it out',
        'Liquorice inhibits it, a genetic defect removes it, ectopic ACTH saturates it',
        'Aldosterone LOW means apparent mineralocorticoid excess; aldosterone HIGH means primary aldosteronism',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Hypertension with hypokalaemia and a suppressed renin',
      wrongInstinct: 'Low renin with hypokalaemic hypertension means primary aldosteronism, so proceed to adrenal imaging',
      rightAnswer: 'Check the aldosterone — if it is also suppressed, the mineralocorticoid receptor is being activated by something else, most often cortisol that has escaped 11-beta-HSD2',
      why: 'Renin is suppressed by mineralocorticoid receptor activation whatever the ligand, so only the aldosterone level distinguishes the real thing from the impostor.',
    },
    {
      questionCategory: 'Neutrophilia in a patient receiving high-dose glucocorticoid',
      wrongInstinct: 'The rising neutrophil count indicates bacterial infection and warrants broad-spectrum antibiotics',
      rightAnswer: 'Steroid-induced demargination raises the neutrophil count without increased production, and the accompanying lymphopenia and eosinopenia confirm the pattern',
      why: 'Steroids also blunt fever and the signs of inflammation, so infection must be judged on clinical grounds and cultures rather than on a count the drug itself has moved.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 63-year-old with small-cell lung carcinoma has a blood pressure of 176/98 mmHg, potassium 2.7 mmol/L, bicarbonate 34 mmol/L, suppressed plasma renin activity and a plasma aldosterone below the reference range. ACTH and cortisol are both markedly elevated. The mechanism is:',
      options: [
        { id: 'a', text: 'Autonomous aldosterone secretion from an adrenal adenoma' },
        { id: 'b', text: 'Cortisol at these concentrations saturates renal 11-beta-hydroxysteroid dehydrogenase type 2 and activates the mineralocorticoid receptor directly' },
        { id: 'c', text: 'ACTH acts directly on the renal collecting duct to promote sodium retention' },
        { id: 'd', text: 'Tumour secretion of a mineralocorticoid precursor with aldosterone-like activity' },
      ],
      answerId: 'b',
      explanation: 'Cortisol binds the mineralocorticoid receptor with the same affinity as aldosterone and is normally excluded by 11-beta-HSD2, which converts it to inactive cortisone in aldosterone target cells. Ectopic ACTH generates cortisol concentrations high enough to overwhelm that enzyme, so cortisol occupies the receptor and produces sodium retention with potassium and hydrogen ion loss: hypertension, hypokalaemia and metabolic alkalosis. The suppressed aldosterone is the key discriminator, since receptor activation by any ligand suppresses renin and hence aldosterone — in primary aldosteronism the aldosterone would be high. ACTH has no direct renal tubular action of this kind.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 45-year-old woman with known hypopituitarism is admitted with vomiting and a blood pressure of 76/40 mmHg. She remains hypotensive after 3 litres of crystalloid and escalating noradrenaline. The best explanation for why intravenous hydrocortisone restores her blood pressure is:',
      options: [
        { id: 'a', text: 'Hydrocortisone is a direct vasoconstrictor with rapid onset at the alpha-1 receptor' },
        { id: 'b', text: 'Cortisol is permissive for catecholamines, maintaining alpha-1 receptor expression, coupling and capillary integrity, so vessels regain the ability to respond to catecholamines already present' },
        { id: 'c', text: 'Hydrocortisone corrects the hyperkalaemia that is impairing myocardial contractility' },
        { id: 'd', text: 'Glucocorticoid rapidly expands plasma volume by stimulating erythropoiesis' },
      ],
      answerId: 'b',
      explanation: 'Permissiveness is the concept being tested. Cortisol is not itself a pressor: it maintains alpha-1 adrenoceptor expression and post-receptor coupling in vascular smooth muscle and preserves endothelial and capillary integrity, so without it circulating catecholamines and angiotensin II cannot be acted upon. That is why the hypotension of adrenal crisis is refractory to escalating vasopressors and reverses with replacement. Note also that this patient has secondary insufficiency, so aldosterone and potassium handling are intact and hyperkalaemia is not part of the picture.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'A patient with Cushing syndrome has marked truncal and facial fat deposition with visibly wasted limbs. Which statement best accounts for the redistribution rather than a uniform increase in adiposity?',
      options: [
        { id: 'a', text: 'Cortisol inhibits lipolysis globally, and gravity accounts for the central distribution' },
        { id: 'b', text: 'Cortisol is lipolytic in catecholamine-sensitive limb fat, while central depots rich in glucocorticoid receptor and 11-beta-HSD1 store fat under the drive of hyperinsulinaemia' },
        { id: 'c', text: 'Central fat is the only depot expressing lipoprotein lipase, so it is the only one able to accumulate triglyceride' },
        { id: 'd', text: 'Limb wasting is entirely muscular, and limb adipose tissue is in fact unchanged' },
      ],
      answerId: 'b',
      explanation: 'Cortisol is lipolytic, so the phenotype cannot be explained by simple fat gain. Peripheral limb adipose is more catecholamine-sensitive and is preferentially broken down, whereas visceral, facial, supraclavicular and dorsocervical depots express more glucocorticoid receptor and more 11-beta-HSD1, which regenerates active cortisol locally from cortisone, and are simultaneously driven to store by the hyperinsulinaemia of cortisol-induced insulin resistance. Proximal myopathy from type II fibre catabolism contributes to the appearance of the limbs, but the adipose redistribution is real and additional.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCortisolActionsStressResponse;
