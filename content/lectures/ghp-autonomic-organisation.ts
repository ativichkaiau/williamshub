import type { Lecture } from '../../lib/types';

export const ghpAutonomicOrganisation: Lecture = {
  id: 'ghp-autonomic-organisation',
  title: 'Autonomic Organisation: Two Divisions, One Ganglionic Rule',
  system: 'neuro',
  source: 'Ch 60 — The Autonomic Nervous System & the Adrenal Medulla',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'Ch 60 The Autonomic Nervous System' },
    { kind: 'mechanism', label: 'Preganglionic to postganglionic relay' },
    { kind: 'exam', label: 'Denervation supersensitivity' },
  ],

  highYield: [
    '**The two divisions are told apart by four anatomical facts, and everything else follows from them.** Sympathetic outflow is **thoracolumbar** — preganglionic cell bodies in the **intermediolateral horn from T1 to L2** — and its ganglia are **paravertebral (the sympathetic chain) or prevertebral (coeliac, superior and inferior mesenteric)**, close to the cord and far from the target. Parasympathetic outflow is **craniosacral** — **CN III, VII, IX, X and S2–S4**, with roughly **three quarters of all parasympathetic fibres in the vagus** — and its ganglia sit **in the wall of the effector organ**. Hence the fibre lengths: sympathetic **short pre, long post**; parasympathetic **long pre, very short post**.',
    '**Divergence is the reason one division shouts and the other whispers.** A single sympathetic preganglionic fibre synapses with up to **20 postganglionic neurons**, and the chain lets one segment recruit many levels — the structural basis of **mass discharge**. The parasympathetic ratio is nearer **1:1**, with the ganglion sitting on the organ itself, so the vagus can slow the heart without touching the gut. Do not memorise "sympathetic is diffuse, parasympathetic is discrete" — derive it from where the ganglion sits and how far the signal fans out.',
    '**Every preganglionic fibre in BOTH divisions is cholinergic and acts on nicotinic receptors.** The ganglion is a **relay, not a decision point**, so it uses the fast ionotropic **nicotinic NN** receptor — the same family as the motor endplate. Divergence in chemistry happens only at the **postganglionic terminal**: parasympathetic releases **acetylcholine onto muscarinic** receptors, sympathetic releases **noradrenaline**, with two standing exceptions — **eccrine sweat glands** and the **sympathetic vasodilator fibres to skeletal muscle**, which are **sympathetic cholinergic and muscarinic**. The practical consequence is enormous: a **ganglion blocker (hexamethonium, trimethaphan)** hits the one shared step and silences **both divisions simultaneously**.',
    '**The adrenal medulla is a sympathetic ganglion whose cells lost their axons.** Preganglionic fibres from about **T5–T11** run in the **greater splanchnic nerve, pass through the chain without synapsing**, and end directly on **chromaffin cells** — modified postganglionic neurons that secrete into blood instead of onto tissue. Output is roughly **80% adrenaline, 20% noradrenaline**, and adrenaline is uniquely adrenal because **PNMT**, the enzyme that methylates noradrenaline, is induced by the **high cortisol** arriving from the cortex in corticomedullary portal blood. Because clearance is hepatic and renal rather than by neuronal reuptake, the hormonal effect **outlasts direct nerve stimulation by five to ten times** — and it reaches organs whose direct innervation has been lost.',
    '**Both divisions fire tonically, and tone is what lets a single nerve do two opposite jobs.** Sympathetic vasoconstrictor fibres discharge at about **one impulse per second**, holding arterioles near **half-maximal constriction**, so vasodilation is simply **withdrawal of tone**. Vagal tone holds resting heart rate near **70 against an intrinsic sinus rate of about 100** — which is why full muscarinic blockade with **atropine takes the rate to roughly 100**, not to infinity. Lose the tone and the effector does not go neutral, it **swings**: this is exactly what happens in high spinal block and in ganglionic blockade.',
    '**Denervation supersensitivity is the late, testable consequence of losing a postganglionic nerve.** Over **days to weeks** the effector becomes up to **tenfold more sensitive** to circulating agonist, because **neuronal reuptake is gone** and **receptors are upregulated**. Exam appearances: a **third-order (postganglionic) Horner pupil dilates to dilute phenylephrine** that leaves the normal pupil unchanged; a **transplanted heart** speeds up only gradually with exercise, driven entirely by circulating catecholamines, and **does not respond to atropine or carotid sinus massage** because there is no vagus to block.',
  ],

  mechanism: {
    title: 'One cholinergic relay, then two different transmitters — plus a hormonal bypass at the adrenal medulla',
    steps: [
      { id: 's1', label: 'Preganglionic cell body fires: intermediolateral horn T1–L2 (sympathetic) or CN III/VII/IX/X and S2–S4 (parasympathetic)', emphasis: 'key' },
      { id: 's2', label: 'Preganglionic axon releases acetylcholine onto nicotinic NN receptors — identical in BOTH divisions', emphasis: 'key' },
      { id: 's3', label: 'Sympathetic: short preganglionic to chain or prevertebral ganglion, long postganglionic, divergence up to 1:20 → mass discharge' },
      { id: 's4', label: 'Parasympathetic: long preganglionic to a ganglion in the organ wall, very short postganglionic, ratio near 1:1 → discrete action' },
      { id: 's5', label: 'Adrenal medulla bypasses the rule — preganglionic fibres synapse on chromaffin cells, releasing 80% adrenaline into blood', emphasis: 'key' },
      { id: 's6', label: 'Block the shared nicotinic step and both divisions fall silent at once: tone is lost and pressure collapses on standing', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Resting heart rate rises from about 70 to about 100 after full muscarinic blockade with atropine, and goes no higher', mechanism: 'Tonic vagal restraint is removed, exposing the intrinsic sinoatrial rate — tone was holding the rate down, not creating it', significance: 'key' },
    { sign: 'A ganglion blocker produces dry mouth, blurred near vision, ileus, urinary retention AND severe postural hypotension together', mechanism: 'The nicotinic ganglionic relay is shared, so sympathetic vasoconstrictor tone and parasympathetic secretomotor tone are lost simultaneously', significance: 'key' },
    { sign: 'In third-order Horner syndrome the affected pupil dilates widely to dilute phenylephrine that leaves the normal pupil unchanged', mechanism: 'Denervation supersensitivity at the postganglionic terminal — loss of noradrenaline reuptake plus upregulation of alpha-1 receptors', significance: 'key' },
    { sign: 'A transplanted heart accelerates slowly with exercise and does not slow with carotid sinus massage or speed up with atropine', mechanism: 'The organ is denervated; rate is set entirely by circulating adrenal catecholamines acting on supersensitive receptors', significance: 'key' },
    { sign: 'Sweating is abolished by atropine even though the fibres reach the skin through the sympathetic chain', mechanism: 'Postganglionic sympathetic fibres to eccrine sweat glands are cholinergic and act on muscarinic receptors', significance: 'supportive' },
    { sign: 'An adrenal phaeochromocytoma secretes adrenaline as well as noradrenaline, while an extra-adrenal paraganglioma secretes noradrenaline alone', mechanism: 'PNMT, which converts noradrenaline to adrenaline, is induced by the high cortisol reaching the medulla in corticomedullary portal blood', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Preganglionic cell bodies in the intermediolateral horn from T1 to L2', meaning: 'Thoracolumbar outflow — the sympathetic division; no sympathetic fibres leave the cord above T1 or below L2' },
    { clue: 'Cranial nerves III, VII, IX and X plus sacral segments S2 to S4', meaning: 'Craniosacral outflow — the parasympathetic division, with about three quarters of its fibres travelling in the vagus' },
    { clue: 'A ganglion lying within the wall of the effector organ', meaning: 'Parasympathetic — long preganglionic, very short postganglionic fibre and near 1:1 divergence, hence discrete organ-by-organ control' },
    { clue: 'Nicotinic NN receptors on the postsynaptic ganglion cell', meaning: 'The relay shared by both divisions — the reason a single ganglion blocker removes sympathetic and parasympathetic activity together' },
    { clue: 'Preganglionic fibres from T5 to T11 running in the greater splanchnic nerve without synapsing in the chain', meaning: 'The adrenal medullary pathway — chromaffin cells are the postganglionic neurons, secreting about 80% adrenaline and 20% noradrenaline into blood' },
    { clue: 'A tenfold rise in effector sensitivity to circulating agonist developing over days to weeks after nerve loss', meaning: 'Denervation supersensitivity — loss of neuronal reuptake plus receptor upregulation' },
  ],

  treatment: [
    { logic: 'Why the architecture is the answer key', detail: 'Most autonomic questions are answered by asking **where the ganglion sits** and **which transmitter acts there**. The ganglionic synapse is **cholinergic and nicotinic in both divisions**, so it is the single point at which one drug can silence the entire autonomic nervous system; everything distal to it is **receptor-specific**, which is the subject of [[ghp-autonomic-receptors-effects]]. Chemically these are ordinary fast synapses — see [[ghp-synaptic-transmission]] — using the same ionotropic receptor family as the [[ghp-neuromuscular-junction]].' },
    { logic: 'Where it shows up clinically', detail: 'Tone is the hidden variable in almost every clinical scenario. **Resting vagal tone** holds heart rate near 70 against an intrinsic rate near 100, and **tonic sympathetic vasoconstrictor discharge** holds arterioles half-constricted — the outflow traced in [[ghp-vasomotor-centre-sympathetic-control]]. Remove either and the effector swings rather than settling at neutral, which is what makes high spinal block, ganglionic blockade and denervation supersensitivity behave the way they do. Course cross-links: [[autonomic-sympathetic-parasympathetic]], [[autonomic-nervous-system]].' },
  ],

  mnemonics: [
    {
      hook: 'Sympathetic = Short pre, Long post. Parasympathetic = Long pre, Short post',
      expansion: [
        'Sympathetic ganglia lie beside the cord (chain) or on the aorta (prevertebral) — near the origin, far from the target',
        'Parasympathetic ganglia lie in the organ wall — far from the origin, sitting on the target',
        'Short pre plus 1:20 divergence gives mass discharge',
        'Long pre plus near 1:1 gives discrete, organ-by-organ control',
      ],
    },
    {
      hook: 'The ganglion never decides, it only relays — so ALL preganglionic fibres are nicotinic',
      expansion: [
        'Preganglionic sympathetic and preganglionic parasympathetic fibres both release acetylcholine',
        'Both act on nicotinic NN receptors on the ganglion cell',
        'Therefore hexamethonium blocks BOTH divisions at once',
        'The divisions diverge only at the postganglionic terminal: noradrenaline versus muscarinic acetylcholine',
        'Sweat glands are the exception that proves the rule — sympathetic fibres, cholinergic terminal',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Which transmitter is released where',
      wrongInstinct: 'Sympathetic means noradrenaline at every synapse along the pathway',
      rightAnswer: 'Every preganglionic fibre, sympathetic included, releases acetylcholine onto nicotinic receptors; noradrenaline appears only at the postganglionic terminal',
      why: 'That shared cholinergic relay is exactly why one ganglion blocker abolishes both divisions.',
    },
    {
      questionCategory: 'What the adrenal medulla actually is',
      wrongInstinct: 'The adrenal medulla is an endocrine gland supplied by postganglionic sympathetic fibres',
      rightAnswer: 'It is a modified sympathetic ganglion whose chromaffin cells are postganglionic neurons without axons, secreting into blood',
      why: 'Its nerve supply is preganglionic and cholinergic, which is why nicotinic agonists release catecholamines from it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A healthy volunteer is given a drug that competitively blocks nicotinic receptors on autonomic ganglion cells. Which combination of effects is expected?',
      options: [
        { id: 'a', text: 'Loss of parasympathetic activity only, since preganglionic parasympathetic fibres are cholinergic and sympathetic ones are not' },
        { id: 'b', text: 'Loss of sympathetic activity only, since sympathetic ganglia lie outside the effector organs' },
        { id: 'c', text: 'Loss of both divisions — dry mouth, blurred near vision, ileus, urinary retention and marked postural hypotension' },
        { id: 'd', text: 'No autonomic effect at all, because ganglionic transmission uses muscarinic receptors' },
      ],
      answerId: 'c',
      explanation: 'Preganglionic fibres of both divisions are cholinergic and act on nicotinic NN receptors, so blocking that shared relay removes tonic parasympathetic activity (secretion, accommodation, gut motility, bladder emptying) and tonic sympathetic vasoconstrictor tone at the same time — hence the antimuscarinic-looking picture combined with severe postural hypotension. Ganglionic transmission is nicotinic, not muscarinic, and the endplate uses a different nicotinic subtype, so skeletal muscle power is preserved at usual doses.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Three weeks after injury to the postganglionic sympathetic fibres supplying one eye, a drop of dilute phenylephrine dilates the affected pupil widely while leaving the normal pupil unchanged. What best explains the asymmetry?',
      options: [
        { id: 'a', text: 'Denervation supersensitivity — loss of noradrenaline reuptake at the lost terminal plus upregulation of alpha-1 receptors on the dilator muscle' },
        { id: 'b', text: 'Phenylephrine is absorbed only through a cornea that has lost its trigeminal innervation' },
        { id: 'c', text: 'The denervated iris dilator has hypertrophied and generates more force for the same stimulus' },
        { id: 'd', text: 'Parasympathetic tone to the affected pupil has been lost, so any agonist appears more effective' },
      ],
      answerId: 'a',
      explanation: 'When a postganglionic sympathetic terminal is lost, the noradrenaline transporter that would normally clear applied agonist is gone and the effector upregulates its receptors, so a concentration too weak to move a normal pupil produces full dilation over days to weeks. The lesion is sympathetic, so parasympathetic tone is intact; corneal absorption and muscle hypertrophy do not occur.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Sweating on a hot day is abolished by atropine, yet the fibres supplying eccrine sweat glands travel in the sympathetic chain. Which statement resolves this?',
      options: [
        { id: 'a', text: 'Eccrine sweat glands are supplied by the sacral parasympathetic outflow' },
        { id: 'b', text: 'Postganglionic sympathetic fibres to eccrine sweat glands are cholinergic and act on muscarinic receptors' },
        { id: 'c', text: 'Atropine blocks nicotinic receptors within the sympathetic ganglion' },
        { id: 'd', text: 'Thermal sweating depends entirely on circulating adrenaline from the adrenal medulla' },
      ],
      answerId: 'b',
      explanation: 'Eccrine sweat glands are one of the two standing exceptions to the rule that postganglionic sympathetic fibres are noradrenergic — their terminals release acetylcholine onto muscarinic receptors, which is why an antimuscarinic dries the skin and why anticholinergic toxicity presents as hot, dry and flushed. Atropine has no action at nicotinic receptors, and the innervation is sympathetic in origin, not sacral.',
      tests: 'exam',
    },
  ],
};

export default ghpAutonomicOrganisation;
