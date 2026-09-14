import type { Lecture } from '../../lib/types';

export const ghpGastricMotilityEmptying: Lecture = {
  id: 'ghp-gastric-motility-emptying',
  title: 'Gastric Motility & the Control of Emptying',
  system: 'gi',
  source: 'Ch 63 — Propulsion & Mixing of Food in the Alimentary Tract',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Gastrointestinal' },
    { kind: 'lecture', label: 'Ch 63 Propulsion & Mixing' },
    { kind: 'mechanism', label: 'Retropulsion · duodenal feedback' },
    { kind: 'exam', label: 'Enterogastric reflex · dumping' },
  ],

  highYield: [
    '**The proximal stomach is a reservoir that refuses to build pressure.** As the bolus passes, a **vagovagal reflex** (afferents to the nucleus tractus solitarius, efferents from the dorsal motor nucleus onto **inhibitory NO and VIP enteric neurons**) relaxes the fundus and proximal body — **receptive relaxation**, extended by **gastric accommodation** and by the smooth muscle property of **stress-relaxation**. The result is that volume rises to around **1.0–1.5 L** with barely any rise in intragastric pressure. Cut the vagus and this is the first thing lost: fundic pressure climbs, liquids dump early, and the patient feels full after a few mouthfuls.',
    '**The distal stomach is a grinder, and its rhythm is fixed at three per minute.** **Interstitial cells of Cajal** on the greater curvature of the mid-corpus set the **basic electrical rhythm** at about **3 slow waves per minute**. Slow waves do not themselves contract anything — they are a permission signal, and contraction occurs only where the crest crosses threshold and **spike potentials** ride on it. Acetylcholine, gastrin and stretch raise the crest so spikes fire; sympathetic activity and secretin lower it. The critical consequence: the stomach can never exceed **3 peristaltic waves per minute**, only make them stronger.',
    '**Mixing is done by failure to empty — retropulsion.** A weak wave starts in the mid-body and deepens into a powerful constrictor ring as it nears the **nearly closed pylorus**. The ring travels faster than the chyme it is chasing, so only a **few millilitres** squirt through per wave; the rest is fired **backwards at high velocity** through the narrowing ring. That backward jet is the grinding step, and it is why solid particles must be milled to about **1–2 mm** before they are allowed out. The antrum plus pylorus working this way is the **pyloric pump**.',
    '**Gastric factors push emptying, and they are weak.** Only two matter: **increased volume**, which stretches the wall and drives local myenteric reflexes that strengthen the pyloric pump, and **gastrin**, released from antral G cells by stretch and by peptides, which mildly enhances the pump. Note that stretch works through **distension, not weight** — an isocaloric meal in a larger volume empties faster at first. Neither factor can force the duodenum to accept chyme it cannot handle.',
    '**Duodenal feedback is the real regulator and it can stop emptying almost completely.** Two arms, triggered by the same four signals — **distension, acidity (pH under about 3.5–4), hypertonicity or hypotonicity, and breakdown products, above all fat**. The **enterogastric nervous reflexes** run three ways (directly through the enteric plexus, out and back as a **vagovagal** loop, and through the **prevertebral sympathetic ganglia**) and both inhibit the pump and tighten the pylorus. The **hormonal arm** is **CCK** from duodenal I cells in response to fat and protein (the most potent brake, acting largely on vagal afferents), **secretin** from S cells in response to acid, and **GIP** with fat and carbohydrate. The design rule is one line: **the stomach delivers chyme only as fast as the duodenum can neutralise, dilute and digest it.**',
    '**Fat empties slowest because fat is the hardest thing the duodenum has to process.** It must be emulsified by bile, micellised and absorbed — slow work — and it is simultaneously the strongest releaser of **CCK**. Layered on top, the duodenum meters **calories**, accepting roughly **2 kcal per minute**, and fat carries the most calories per millilitre. So the order is **carbohydrate fastest, then protein, then fat**, with liquids ahead of solids and isotonic ahead of hypertonic. A fatty meal can hold the stomach for **3–6 hours**.',
  ],

  mechanism: {
    title: 'Receptive relaxation → 3/min slow waves → retropulsion → duodenal brake',
    steps: [
      { id: 's1', label: 'Swallow triggers vagovagal receptive relaxation: about 1 L stored at almost no pressure rise', emphasis: 'key' },
      { id: 's2', label: 'ICC pacemaker on the greater curvature sets the basic electrical rhythm at 3 per minute', emphasis: 'key' },
      { id: 's3', label: 'Spikes ride the slow wave crest: antral rings deepen into the pyloric pump' },
      { id: 's4', label: 'Ring outruns the chyme at a nearly closed pylorus: a few mL pass, the rest is retropulsed and ground', emphasis: 'key' },
      { id: 's5', label: 'Duodenum senses distension, acid, hypertonicity and fat', emphasis: 'key' },
      { id: 's6', label: 'Enterogastric reflexes plus CCK, secretin and GIP stop the pump and close the pylorus', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Early satiety, bloating and vomiting of food eaten many hours earlier, with no mechanical obstruction', mechanism: 'Gastroparesis: loss of interstitial cells of Cajal and autonomic neuropathy disorganise the slow wave, so the antral pump cannot grind or deliver', significance: 'key' },
    { sign: 'Sweating, palpitations, flushing, cramps and diarrhoea 15 to 30 minutes after a sugary meal in a post-gastrectomy patient', mechanism: 'Early dumping: an unregulated hypertonic load reaches the jejunum, draws fluid into the lumen and distends it', significance: 'key' },
    { sign: 'Shakiness, sweating and confusion 1 to 3 hours after the same meal, relieved by glucose', mechanism: 'Late dumping: rapid glucose delivery spikes absorption, provoking an exaggerated GLP-1 and insulin response and reactive hypoglycaemia', significance: 'key' },
    { sign: 'Projectile non-bilious vomiting with visible peristalsis crossing the epigastrium in a 5-week-old infant', mechanism: 'The pyloric pump working at full force against a hypertrophied fixed outlet; nothing bilious appears because the obstruction is proximal to the ampulla', significance: 'key' },
    { sign: 'A fatty meal still palpable as fullness hours after an equicaloric carbohydrate meal would have cleared', mechanism: 'Fat is the most potent releaser of CCK and the strongest trigger of the enterogastric reflex', significance: 'supportive' },
    { sign: 'After truncal vagotomy, liquids empty abnormally fast while solids empty slowly', mechanism: 'Loss of receptive relaxation raises fundic pressure and squeezes liquid out, while the denervated antral pump grinds solids poorly', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cells that generate the gastric basic electrical rhythm and where they sit', meaning: 'Interstitial cells of Cajal, on the greater curvature of the mid-corpus' },
    { clue: 'Frequency of the gastric slow wave', meaning: 'About 3 per minute — the ceiling on how often the stomach can contract, whatever the stimulus' },
    { clue: 'The mechanism that mills solids down to 1 to 2 mm', meaning: 'Retropulsion — chyme jetted backwards through a closing ring at a nearly shut pylorus' },
    { clue: 'Hormone released by duodenal fat that most powerfully slows emptying', meaning: 'Cholecystokinin from I cells, acting mainly through vagal afferents' },
    { clue: 'Hormone released when duodenal pH falls below about 4.5', meaning: 'Secretin from S cells — it inhibits gastric motility while alkalinising the duodenum' },
    { clue: 'Scintigraphic emptying study: more than 10% of a solid meal still in the stomach at 4 hours', meaning: 'Delayed gastric emptying (gastroparesis), once mechanical obstruction has been excluded' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Gastric emptying is the only step in the gut where **rate itself is the regulated variable**. Everything downstream — pancreatic neutralisation of acid, bile delivery, the osmotic and caloric load the jejunum has to absorb — depends on the stomach releasing a **few millilitres at a time**. That is why the weak gastric drivers (volume, gastrin) are deliberately outmatched by the duodenal brake: it is safer for the stomach to hold food than for the duodenum to be overwhelmed. The clinical layer is at [[gastric-accommodation-mixing]] and [[gastric-emptying-feedback]]; the step before is [[ghp-swallowing-oesophageal-motility]] and the step after is [[ghp-small-large-bowel-motility]].' },
    { logic: 'Dumping syndrome is this whole chapter read backwards', detail: 'Gastrectomy, pyloroplasty or a gastric bypass removes three things at once — the **reservoir**, the **pyloric resistance** and the **feedback loop** — so a meal arrives in the jejunum as a bolus instead of a trickle. **Early dumping** (within 30 minutes) is **osmotic and mechanical**: a hypertonic load pulls fluid into the lumen, so plasma volume falls and the distended gut fires vasomotor and autonomic symptoms. **Late dumping** (1 to 3 hours) is **endocrine**: sudden glucose absorption drives an exaggerated GLP-1 and insulin release that overshoots into **hypoglycaemia**. Every part of the management follows from the mechanism — **small, dry, frequent meals**, fluids taken between rather than with food, **simple sugars avoided**, more fat and protein to slow transit, and lying down after eating.' },
  ],

  mnemonics: [
    { hook: 'Four duodenal brakes: FADS — Fat, Acid, Distension, Salts (osmolality)', expansion: ['Fat releases CCK, acid releases secretin, fat and carbohydrate release GIP', 'All four also fire the enterogastric nervous reflexes, which tighten the pylorus and stop the pump'] },
    { hook: 'Carbs Cruise, Protein Plods, Fat Fails to leave', expansion: ['Carbohydrate fastest, then protein, then fat — with liquids ahead of solids and isotonic ahead of hypertonic', 'Because the duodenum meters roughly 2 kcal per minute, and fat carries the most calories per millilitre'] },
  ],

  traps: [
    {
      questionCategory: 'Which control system actually sets the rate of emptying',
      wrongInstinct: 'Gastrin is the master hormone of the stomach, so gastrin sets how fast the stomach empties',
      rightAnswer: 'Duodenal feedback dominates — the enterogastric reflexes with CCK, secretin and GIP can stop emptying almost completely',
      why: 'Gastric factors (volume and gastrin) only push, and weakly; the duodenum holds a veto, because the downstream limit is how fast acid and fat can be handled.',
    },
    {
      questionCategory: 'What slow waves do',
      wrongInstinct: 'Slow waves are the gastric action potentials, so the more of them there are, the stronger the contraction',
      rightAnswer: 'Slow waves set rhythm and permission; spike potentials riding the crest set force — and the rate is capped at about 3 per minute',
      why: 'Acetylcholine, gastrin and stretch raise the crest so more spikes fire per wave, making contractions stronger — never more frequent.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A healthy volunteer is given a test meal of pure triglyceride. Compared with an equicaloric glucose meal, gastric emptying is markedly slower. The main mediator is:',
      options: [
        { id: 'a', text: 'Gastrin released from antral G cells' },
        { id: 'b', text: 'Cholecystokinin released from duodenal I cells' },
        { id: 'c', text: 'Motilin released from duodenal M cells' },
        { id: 'd', text: 'Increased vagal efferent traffic to the antral pump' },
      ],
      answerId: 'b',
      explanation: 'Fat reaching the duodenum is the strongest stimulus for CCK release from I cells, and CCK is the most powerful hormonal brake on emptying, acting largely through vagal afferents while it also inhibits the pyloric pump and raises pyloric tone. Gastrin and vagal drive both promote emptying. Motilin governs the interdigestive migrating motor complex, which fasting abolishes as soon as a meal is eaten.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A radiolabelled solid meal shows that most particles leaving the stomach are under 2 mm, while larger fragments are retained for hours. The mechanism responsible is:',
      options: [
        { id: 'a', text: 'Selective filtration by the pyloric mucosal folds' },
        { id: 'b', text: 'Segmentation contractions in the gastric body' },
        { id: 'c', text: 'Retropulsion of chyme backwards through a nearly closed pylorus' },
        { id: 'd', text: 'Receptive relaxation of the fundus holding large particles back' },
      ],
      answerId: 'c',
      explanation: 'The antral ring travels faster than the chyme ahead of it and meets an almost shut pylorus, so only a few millilitres escape per wave and the remainder is jetted backwards at high shear through the narrowing ring. That repeated backward jet is both the mixing and the milling step, which is why particles are not released until they are roughly 1 to 2 mm. Receptive relaxation is a proximal storage function, and segmentation belongs to the small intestine.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Three months after a partial gastrectomy, a patient becomes sweaty, tachycardic and crampy about 20 minutes after any sweet meal. The immediate cause of these symptoms is:',
      options: [
        { id: 'a', text: 'An exaggerated insulin response producing hypoglycaemia' },
        { id: 'b', text: 'A hypertonic load drawing fluid into the small bowel lumen, with distension and a fall in plasma volume' },
        { id: 'c', text: 'Reflux of bile into the gastric remnant irritating the mucosa' },
        { id: 'd', text: 'Loss of intrinsic factor with rapid onset of vitamin B12 deficiency' },
      ],
      answerId: 'b',
      explanation: 'Timing separates the two forms of dumping. At 15 to 30 minutes the problem is osmotic and mechanical: without a pylorus or duodenal feedback, a hypertonic bolus reaches the jejunum, pulls water into the lumen, distends the gut and drops plasma volume, producing cramps, diarrhoea and vasomotor symptoms. Reactive hypoglycaemia from an exaggerated GLP-1 and insulin response is late dumping, appearing 1 to 3 hours after the meal. B12 deficiency takes years and causes no postprandial episodes.',
      tests: 'exam',
    },
  ],
};

export default ghpGastricMotilityEmptying;
