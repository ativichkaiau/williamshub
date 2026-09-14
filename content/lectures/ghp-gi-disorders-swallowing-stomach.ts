import type { Lecture } from '../../lib/types';

export const ghpGiDisordersSwallowingStomach: Lecture = {
  id: 'ghp-gi-disorders-swallowing-stomach',
  title: 'Disorders of Swallowing & the Stomach',
  system: 'gi',
  source: 'Ch 66 — Physiology of Gastrointestinal Disorders',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 66 GI Disorders' },
    { kind: 'mechanism', label: 'Attack versus mucosal defence' },
    { kind: 'exam', label: 'Achalasia · reflux · ulcer · dumping · vomiting' },
  ],

  highYield: [
    '**Achalasia is a failure of inhibition, not an excess of contraction.** The myenteric plexus loses the **inhibitory neurons that release VIP and nitric oxide**, so the lower oesophageal sphincter never receives the signal to let go and its resting tone stands **unopposed**, while the body of the oesophagus loses the sequenced relaxation that makes peristalsis possible and becomes **aperistaltic**. The clinical signature follows directly: **dysphagia for solids AND liquids from the very start** (mechanical obstruction begins with solids alone), regurgitation of undigested food, progressive **megaoesophagus**, aspiration and a long-term risk of squamous carcinoma. **Chagas disease destroys the same plexus.** Manometry shows incomplete sphincter relaxation with an aperistaltic body; barium shows a dilated column tapering to a beak.',
    '**Reflux is a competence problem, and most episodes happen with a normal resting pressure.** The lower oesophageal sphincter is **physiological, not anatomical** — competence comes from intrinsic tone plus the **crural diaphragm pinch**, the **intra-abdominal segment** (which abdominal pressure compresses like a flutter valve, so rises in pressure close it rather than force it), the acute **angle of His** and the mucosal rosette. The dominant mechanism of reflux is **transient lower oesophageal sphincter relaxation**, a vagovagal reflex triggered by gastric distension. A **hiatus hernia** matters because it removes the abdominal segment and unpairs the crural pinch. Anything that lowers tone (fat, chocolate, alcohol, smoking, nitrates, calcium channel blockers, anticholinergics) or raises abdominal pressure (obesity, pregnancy) adds to it; the consequences are oesophagitis, stricture and **Barrett metaplasia**.',
    '**Peptic ulceration is a balance sheet: aggressive factors against mucosal defence.** On the attack side sit **acid and pepsin** — and note that pepsin is proteolytic only below about pH 4, so **acid is the permissive factor for both**. On the defence side sit the **mucus–bicarbonate gel** that holds the epithelial surface near **pH 7 while the lumen sits at pH 1–2**, the hydrophobic phospholipid layer, tight junctions with rapid **epithelial restitution**, and **mucosal blood flow** that carries away back-diffused H⁺. **Prostaglandins E₂ and I₂ drive the mucus, the bicarbonate and the blood flow**, which makes them the hinge of the whole system. An ulcer means the attack rose, the defence fell, or both.',
    '**The two classic ulcers fail from opposite ends of that balance, and this is the discriminator.** **Helicobacter pylori** raises the attack: **urease splits urea to ammonia**, neutralising its own microenvironment and damaging the epithelium, and **antral-predominant** infection destroys **D cells** so that **somatostatin falls**, gastrin is unrestrained and **acid output rises** — giving the classic **duodenal ulcer** where the acid load outruns duodenal bicarbonate. **NSAIDs** lower the defence: **COX-1 inhibition removes prostaglandin**, and with it mucus, bicarbonate and mucosal blood flow — **an ulcer with no rise in acid at all**, typically **gastric**. At the extreme aggressive end, a **gastrinoma (Zollinger–Ellison)** produces ulcers beyond the bulb plus diarrhoea, because the acid load inactivates pancreatic lipase.',
    '**Gastrectomy costs you a reservoir, a pylorus and a cell line — and each loss has its own syndrome.** Losing receptive relaxation and the pyloric brake dumps **hyperosmolar chyme into the jejunum**: **early dumping at 15–30 minutes** pulls up to a litre of fluid into the lumen, giving cramps, flushing, palpitations and hypotension, while **late dumping at 1–3 hours** is reactive hypoglycaemia from an exaggerated incretin and insulin response to rapid glucose absorption. Losing the **parietal cells** costs **intrinsic factor**, and therefore **vitamin B₁₂** — but only after **2–5 years**, the size of the hepatic store, so the megaloblastic anaemia and subacute combined degeneration appear late. Loss of acid and of the duodenal route also causes **iron deficiency** and **osteomalacia**.',
    '**Vomiting is a reflex with four afferent routes, and the antiemetic follows the route.** The pattern generator sits in the **dorsal medulla around the nucleus tractus solitarius**. Inputs: **(1) vagal and splanchnic afferents from the gut**, where mucosal injury releases **5-HT₃ from enterochromaffin cells** (the chemotherapy route); **(2) the chemoreceptor trigger zone in the area postrema**, which lies **outside the blood–brain barrier** and therefore samples blood-borne toxins, uraemia and opioids through **D₂ and 5-HT₃** receptors; **(3) vestibular** input through **H₁ and muscarinic** receptors in motion sickness; **(4) cortical** input from sight, smell, pain and anticipation, and raised intracranial pressure. The act itself is a fixed sequence: deep breath, **glottis closed and soft palate raised**, antral retroperistalsis, then a violent **diaphragm and abdominal wall contraction** squeezing the stomach against a relaxed sphincter. Prolonged vomiting loses H⁺ and Cl⁻, giving a **hypochloraemic hypokalaemic metabolic alkalosis with paradoxical aciduria**.',
  ],

  mechanism: {
    title: 'Acid and pepsin versus mucus, bicarbonate and blood flow — the ulcer balance',
    steps: [
      { id: 's1', label: 'The lumen sits at pH 1–2 while the epithelial surface is held near pH 7', emphasis: 'key' },
      { id: 's2', label: 'Defence: mucus-bicarbonate gel, tight junctions, restitution and blood flow, all prostaglandin driven', emphasis: 'key' },
      { id: 's3', label: 'Helicobacter antral gastritis kills D cells → somatostatin falls → gastrin and acid rise', emphasis: 'key' },
      { id: 's4', label: 'NSAIDs block COX-1 → no prostaglandin → mucus, bicarbonate and blood flow all fall', emphasis: 'key' },
      { id: 's5', label: 'Acid reaches the epithelium and activates pepsin, which is proteolytic only below pH 4', emphasis: 'key' },
      { id: 's6', label: 'Back-diffusing H⁺ outstrips what mucosal blood flow can buffer → erosion, then ulcer', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dysphagia for solids and liquids together from the outset, with regurgitation of undigested food', mechanism: 'Achalasia — a non-relaxing sphincter plus an aperistaltic body, so nothing of any consistency is propelled', significance: 'key' },
    { sign: 'Manometry showing failure of sphincter relaxation on swallowing with absent peristalsis', mechanism: 'Loss of myenteric inhibitory neurons that release VIP and nitric oxide', significance: 'key' },
    { sign: 'Heartburn worse lying flat, after a fatty meal and in late pregnancy', mechanism: 'Transient sphincter relaxations plus loss of the intra-abdominal segment and the crural pinch', significance: 'key' },
    { sign: 'Duodenal ulcer pain eased by eating; gastric ulcer pain provoked by it', mechanism: 'The duodenal lesion is acid-driven and food buffers acid; the gastric lesion is a defence failure aggravated by the secretory response to a meal', significance: 'supportive' },
    { sign: 'Flushing, cramps, palpitations and light-headedness twenty minutes after a meal in a post-gastrectomy patient', mechanism: 'Early dumping — hyperosmolar chyme in the jejunum draws up to a litre of fluid out of the plasma', significance: 'key' },
    { sign: 'Macrocytic anaemia with posterior column signs three years after total gastrectomy', mechanism: 'Intrinsic factor was lost with the parietal cells; the delay is the size of the hepatic vitamin B₁₂ store', significance: 'key' },
  ],

  investigations: [
    { clue: 'Barium swallow with a dilated oesophageal body tapering to a smooth beak', meaning: 'Achalasia — and the same picture appears in Chagas disease' },
    { clue: 'Manometry with simultaneous, high-amplitude, non-propagated contractions and chest pain', meaning: 'Diffuse oesophageal spasm — coordination lost rather than relaxation' },
    { clue: 'Urease activity on a gastric biopsy or a labelled urea breath test', meaning: 'Helicobacter pylori — the same enzyme that lets it survive the acid identifies it' },
    { clue: 'Gastric ulcer with normal acid output in a patient on long-term analgesia', meaning: 'NSAID injury — prostaglandin-dependent defence has collapsed with no rise in attack' },
    { clue: 'Ulcers distal to the duodenal bulb with diarrhoea and steatorrhoea', meaning: 'Gastrinoma — the acid load also inactivates pancreatic lipase' },
    { clue: 'Hypochloraemic hypokalaemic metabolic alkalosis with paradoxical aciduria', meaning: 'Prolonged vomiting with volume depletion — the mirror image of diarrhoeal acidosis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Each therapy here is a named move on the balance sheet. **Proton pump inhibitors cut the attack at its source**, and because pepsin is inactive above pH 4 they disarm both aggressive factors at once. **Eradication of Helicobacter** removes the cause of the hypergastrinaemia rather than masking it, which is why it changes the relapse rate in a way acid suppression alone does not. **Misoprostol**, a prostaglandin analogue, restores the defence limb directly, which is precisely what an NSAID removed. For dumping, the physiological answer is to rebuild the brake the surgeon took away: **small, dry, low-carbohydrate meals with fluids taken separately**. And after gastrectomy, **vitamin B₁₂ must be given parenterally for life**. The clinical-layer account of the ulcer: [[peptic-ulcer-disease]]. Acid secretion and its control: [[gastric-acid-mechanism-control]].' },
    { logic: 'Where it is examined', detail: 'Four stems recur. **Achalasia is a loss of inhibition** — the sphincter is not hypertrophied, its brake has been removed, and the body goes aperistaltic at the same time. **Reflux usually occurs at a normal basal pressure** through transient relaxations, so a normal manometry does not exclude it. **An NSAID ulcer has normal acid output** — the failure is entirely on the defence side. And **B₁₂ deficiency after gastrectomy takes years**, which is the clue that a stored vitamin is involved. Mucosal defence and intrinsic factor in detail: [[gastric-enzymes-intrinsic-barrier]]. The vomiting reflex at the bedside: [[fcp1-nausea-vomiting]]. Structural oesophageal disease: [[esophageal-disorders-pathology]].' },
  ],

  mnemonics: [
    { hook: 'One ulcer, two routes: Helicobacter raises the attack, NSAIDs lower the defence', expansion: ['Helicobacter in the antrum: D cells die, somatostatin falls, gastrin and acid rise, duodenal ulcer', 'NSAID: COX-1 blocked, no prostaglandin, no mucus or bicarbonate or blood flow, gastric ulcer', 'Acid is permissive for both, because pepsin only bites below pH 4'] },
    { hook: 'Four wires into the vomiting centre: Gut, Trigger zone, Vestibule, Cortex', expansion: ['Gut: vagal afferents and 5-HT₃ from enterochromaffin cells — the chemotherapy route', 'Trigger zone in the area postrema, outside the blood-brain barrier: D₂ and 5-HT₃ for toxins and opioids', 'Vestibule: H₁ and muscarinic — motion sickness', 'Cortex: sight, smell, pain, anticipation, and raised intracranial pressure'] },
  ],

  traps: [
    {
      questionCategory: 'The lesion in achalasia',
      wrongInstinct: 'The lower oesophageal sphincter muscle is hypertrophied and too strong',
      rightAnswer: 'Inhibitory myenteric neurons releasing VIP and nitric oxide are lost, so the normal sphincter is never told to relax',
      why: 'It is a neural deficit, which is why peristalsis fails in the same breath and why treatment disrupts the muscle mechanically rather than strengthening anything.',
    },
    {
      questionCategory: 'The dominant mechanism of gastro-oesophageal reflux',
      wrongInstinct: 'The sphincter must be chronically hypotensive for reflux to occur',
      rightAnswer: 'Most reflux occurs during transient sphincter relaxations triggered by gastric distension, often on a normal resting pressure',
      why: 'It explains why manometry can be normal in severe reflux and why anatomy — the hiatus hernia and the lost abdominal segment — predicts severity better than tone.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 40-year-old from rural Brazil has years of dysphagia to both solids and liquids with regurgitation of undigested food. Manometry shows an aperistaltic oesophageal body and a sphincter that fails to relax on swallowing. The underlying abnormality is:',
      options: [
        { id: 'a', text: 'Hypertrophy of the lower oesophageal sphincter smooth muscle' },
        { id: 'b', text: 'Destruction of myenteric inhibitory neurons that release VIP and nitric oxide' },
        { id: 'c', text: 'Excessive cholinergic drive to the oesophageal body' },
        { id: 'd', text: 'Fibrous stricture from chronic acid exposure' },
      ],
      answerId: 'b',
      explanation: 'Achalasia, here from Chagas disease, is a loss of inhibition: without VIP and nitric oxide neurons the sphincter is never instructed to open and its resting tone stands unopposed, while the sequenced inhibition that organises peristalsis is also lost, leaving the body aperistaltic. Dysphagia to liquids as well as solids from the outset separates this from a stricture, which obstructs solids first.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 70-year-old on daily naproxen for arthritis develops a gastric ulcer. Acid output studies are normal and urease testing for Helicobacter is negative. The mechanism of ulceration is:',
      options: [
        { id: 'a', text: 'Increased gastrin release from loss of antral D cells' },
        { id: 'b', text: 'Direct acid hypersecretion driven by the drug' },
        { id: 'c', text: 'COX-1 inhibition removing prostaglandin-dependent mucus, bicarbonate and mucosal blood flow' },
        { id: 'd', text: 'Bile reflux neutralising the gastric lumen' },
      ],
      answerId: 'c',
      explanation: 'An ulcer requires attack to exceed defence, and here the attack is measurably normal, so the lesion must be on the defence side. Prostaglandins E2 and I2 maintain the mucus and bicarbonate gel and, critically, the mucosal blood flow that removes back-diffused hydrogen ion. Blocking COX-1 strips all three at once. The D cell mechanism belongs to Helicobacter, which has been excluded.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Twenty minutes after eating, a patient who had a partial gastrectomy becomes flushed and light-headed with abdominal cramps, a pulse of 110 and a fall in blood pressure. The immediate cause is:',
      options: [
        { id: 'a', text: 'Hyperosmolar chyme entering the jejunum and drawing a large volume of fluid out of the plasma' },
        { id: 'b', text: 'Reactive hypoglycaemia from an exaggerated insulin response' },
        { id: 'c', text: 'Vitamin B12 deficiency from loss of intrinsic factor' },
        { id: 'd', text: 'Bile reflux into the gastric remnant' },
      ],
      answerId: 'a',
      explanation: 'This is early dumping. Without the reservoir and the pyloric brake, undiluted hyperosmolar chyme reaches the jejunum, and water moves osmotically into the lumen fast enough to contract the plasma volume, with autonomic and vasoactive peptide release adding the flushing and tachycardia. The reactive hypoglycaemia of late dumping comes an hour or more later, and intrinsic factor loss takes years to declare itself.',
      tests: 'exam',
    },
  ],
};

export default ghpGiDisordersSwallowingStomach;
