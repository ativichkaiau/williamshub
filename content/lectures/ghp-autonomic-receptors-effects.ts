import type { Lecture } from '../../lib/types';

export const ghpAutonomicReceptorsEffects: Lecture = {
  id: 'ghp-autonomic-receptors-effects',
  title: 'Autonomic Receptors & Organ Effects: Deriving the Table',
  system: 'neuro',
  source: 'Ch 60 — The Autonomic Nervous System & the Adrenal Medulla',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'Ch 60 The Autonomic Nervous System' },
    { kind: 'mechanism', label: 'Receptor subtype and second messenger' },
    { kind: 'exam', label: 'Antimuscarinic toxidrome' },
  ],

  highYield: [
    '**Six adrenergic and cholinergic families explain the entire organ table, and each one is defined by its G protein.** **Alpha-1 (Gq)** raises IP3, DAG and intracellular calcium — smooth muscle **contracts**: vasoconstriction, iris dilator, internal urethral sphincter, pilomotor. **Alpha-2 (Gi)** sits mostly **presynaptically** and lowers cAMP to **shut off further noradrenaline release**. **Beta-1 (Gs)** raises cAMP in nodal and working myocardium and in the juxtaglomerular cells — **rate, conduction, contractility and renin**. **Beta-2 (Gs)** **relaxes** bronchial, uterine, gut and skeletal-muscle vascular smooth muscle and drives **glycogenolysis and potassium shift into cells**. **Beta-3 (Gs)** does **lipolysis and detrusor relaxation**. The derived rule: **alpha contracts, beta-1 is the heart, beta-2 and beta-3 relax and mobilise fuel**.',
    '**Adrenaline and noradrenaline exist as a pair because their receptor profiles differ at exactly one point: beta-2.** Noradrenaline is a strong **alpha and beta-1** agonist with **negligible beta-2**, so it raises **both systolic and diastolic pressure** and the resulting baroreflex produces **bradycardia despite direct cardiac stimulation**. Adrenaline is strong at **alpha, beta-1 AND beta-2**, so at physiological infusion rates it **raises systolic while lowering diastolic** (beta-2 dilation of muscle beds) and the heart **speeds up**. Adrenaline also has roughly **five to ten times the metabolic effect** — glycogenolysis, lipolysis, calorigenesis. One transmitter for pressure, one hormone for the whole-body emergency.',
    '**Cholinergic receptors split into fast channels and slow G proteins, and the odd-even rule sorts the muscarinic ones.** **Nicotinic** receptors (NN at ganglia and adrenal medulla, NM at the endplate) are **ligand-gated cation channels** — fast, always excitatory, and **completely unaffected by atropine**. Muscarinic receptors are GPCRs where **odd numbers are Gq and even numbers are Gi**: **M1** neural and gastric, **M2** cardiac (Gi lowers cAMP **and** the G-beta-gamma subunit directly opens **GIRK potassium channels**, hyperpolarising the node), **M3** glands, airway, detrusor, iris sphincter and ciliary muscle. The GIRK limb is why intense vagal discharge can **arrest the sinus node outright** rather than merely slowing it.',
    '**The organ table is derived from receptor distribution, not memorised.** **Eye**: alpha-1 on the radial muscle gives **mydriasis**; M3 on the sphincter gives **miosis**; M3 on the ciliary muscle **contracts** it, slackening the zonule so the lens rounds for **near vision**. **Lung**: M3 constricts and secretes; **beta-2 dilates and is driven mainly by circulating adrenaline**, since airway smooth muscle has little direct sympathetic innervation. **Gut**: parasympathetic M3 increases motility and secretion and **relaxes sphincters**, while sympathetic alpha and beta receptors inhibit motility and **contract sphincters**. **Bladder**: sympathetic **stores** (alpha-1 shuts the bladder neck, beta-3 relaxes the detrusor), parasympathetic **voids** (M3 contracts the detrusor). **Genital**: parasympathetic nitric oxide for erection, sympathetic for emission.',
    '**Dual innervation is common but neither universal nor always antagonistic.** **Sympathetic only**: adrenal medulla, eccrine sweat glands, piloerector muscles, kidney, spleen capsule and **almost all blood vessels**. In these the only control available is **raising or lowering one tonic outflow** — which is why vasodilation in most beds is withdrawal of tone rather than an active dilator signal. Where both divisions do reach an organ they are usually reciprocal, but the **salivary glands** are the standing counter-example: **parasympathetic M3 gives copious watery saliva and sympathetic stimulation gives scant, thick, protein-rich saliva** — both increase secretion.',
    '**Mass discharge versus discrete action is the functional face of the anatomy.** A sympathetic **alarm reaction** fires everything at once: pressure up, muscle blood flow up, cardiac output up, **glycogenolysis and blood glucose up**, mental activity and coagulability up, pupils dilated — and it is then **prolonged for minutes by adrenal catecholamines**, which reach even organs whose direct nerves are cut. Parasympathetic activity is the opposite: **vagal cardiac slowing without gut change, salivation without cardiac change**, micturition and defecation handled by local sacral reflexes. **1:20 divergence plus a hormonal amplifier** on one side; **1:1 with the ganglion in the organ wall** on the other.',
  ],

  mechanism: {
    title: 'Receptor subtype and its G protein predict the organ response, so the autonomic table is derived rather than learned',
    steps: [
      { id: 's1', label: 'Transmitter arrives: noradrenaline from a nerve terminal, adrenaline from the blood, or acetylcholine', emphasis: 'key' },
      { id: 's2', label: 'Alpha-1 (Gq) raises IP3 and intracellular calcium → smooth muscle contracts: vasoconstriction, mydriasis, bladder neck closure' },
      { id: 's3', label: 'Beta-1 (Gs) raises cAMP in the heart → rate, conduction and contractility rise; beta-2 (Gs) relaxes bronchi, uterus and muscle vessels and mobilises glucose', emphasis: 'key' },
      { id: 's4', label: 'Alpha-2 (Gi) on the presynaptic terminal lowers cAMP and switches off further noradrenaline release — the built-in brake' },
      { id: 's5', label: 'Muscarinic M3 (Gq) on glands and smooth muscle → secretion, bronchoconstriction, detrusor contraction, miosis and accommodation' },
      { id: 's6', label: 'Muscarinic M2 (Gi) in the heart lowers cAMP and opens GIRK potassium channels → hyperpolarisation, sinus slowing, AV block, and at the extreme sinus arrest', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A noradrenaline infusion raises both systolic and diastolic pressure while the heart rate falls', mechanism: 'Alpha-1 vasoconstriction raises total peripheral resistance; the baroreflex vagal response overrides direct beta-1 stimulation because there is no beta-2 offset', significance: 'key' },
    { sign: 'An adrenaline infusion raises systolic pressure, lowers diastolic pressure and raises heart rate', mechanism: 'Beta-2 dilation of skeletal muscle vessels holds resistance down, so no baroreflex bradycardia appears and the beta-1 effect is seen unopposed', significance: 'key' },
    { sign: 'Dry as a bone, hot, flushed, blurred near vision, agitated, tachycardic and in urinary retention after an antimuscarinic overdose', mechanism: 'M3 blockade removes secretion (including cholinergic sweating), accommodation and detrusor contraction; M2 blockade removes tonic vagal restraint of the sinus node', significance: 'key' },
    { sign: 'On a non-selective beta blocker: a blunted response to inhaled salbutamol and prolonged hypoglycaemia without a warning tachycardia', mechanism: 'Beta-2 mediates bronchodilation and glycogenolysis while beta-1 mediates the compensatory tachycardia — blocking both removes the rescue and the warning', significance: 'supportive' },
    { sign: 'Both divisions increase salivation, but the parasympathetic gives copious watery saliva and the sympathetic gives scant, thick, protein-rich saliva', mechanism: 'Dual innervation is not always antagonistic — M3 drives fluid and electrolyte secretion while adrenergic receptors drive acinar protein exocytosis with vasoconstriction', significance: 'supportive' },
    { sign: 'Alpha-1 blockade for prostatic obstruction causes first-dose postural hypotension and retrograde ejaculation', mechanism: 'The same receptor maintains arteriolar tone and holds the bladder neck and internal urethral sphincter closed during emission', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A Gq-coupled receptor raising IP3, DAG and intracellular calcium in smooth muscle', meaning: 'Alpha-1 or M3 — both contract smooth muscle; alpha-1 predominates in vessels and the bladder neck, M3 in glands, airway, detrusor and pupil sphincter' },
    { clue: 'A Gi-coupled receptor sitting on the noradrenergic nerve terminal itself', meaning: 'The alpha-2 autoreceptor — negative feedback on transmitter release, and the target of clonidine acting centrally to reduce sympathetic outflow' },
    { clue: 'A Gs-coupled receptor whose activation raises heart rate, atrioventricular conduction, contractility and renin release', meaning: 'Beta-1 — one receptor explaining why beta-1 selective blockade lowers rate, output and renin simultaneously' },
    { clue: 'A Gs-coupled receptor that relaxes bronchial and uterine smooth muscle and shifts potassium into cells', meaning: 'Beta-2 — also glycogenolysis and lipolysis; it is reached mainly by circulating adrenaline rather than by nerve fibres, which is why airway tone answers to hormone' },
    { clue: 'A ligand-gated cation channel that is fast, always excitatory and unaffected by atropine', meaning: 'A nicotinic receptor — NN at autonomic ganglia and the adrenal medulla, NM at the neuromuscular junction' },
    { clue: 'Gi coupling combined with direct opening of GIRK potassium channels and hyperpolarisation', meaning: 'Cardiac M2 — the mechanism of vagal sinus slowing and of the pauses produced by carotid sinus massage' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The organ-effect table is not a list to be learned — it is **one receptor map applied to different tissues**. Fix six statements and the rest is arithmetic: **alpha-1 = Gq = contract**, **alpha-2 = Gi = presynaptic brake**, **beta-1 = heart**, **beta-2 = relax and mobilise fuel**, **M2 = cardiac brake**, **M3 = glands and smooth muscle**. The anatomy that delivers those transmitters, and the reason the ganglionic step is nicotinic in both divisions, is in [[ghp-autonomic-organisation]]; how beta-1 and M2 actually move pacemaker rate is in [[ghp-conduction-system-autonomic-control]].' },
    { logic: 'Where it shows up clinically', detail: 'Every autonomic drug class is a single line in this table: alpha blockers and central alpha-2 agonists in [[htn-ccb-sympatholytics]], the pupil pharmacology of [[pupillary-reflexes-horner]], and the detrusor-versus-sphincter logic behind storage and voiding in [[micturition-reflex]]. When a question gives an unfamiliar agent, do not hunt for the drug — ask **which receptor, which G protein, which tissue**. Course cross-link: [[autonomic-neurotransmitters-receptors]].' },
  ],

  mnemonics: [
    {
      hook: 'Odd muscarinic receptors are Gq, even are Gi',
      expansion: [
        'M1 — neural and gastric, Gq, excitatory',
        'M2 — heart, Gi plus direct GIRK potassium opening, slows rate and atrioventricular conduction',
        'M3 — glands, airway, detrusor, iris sphincter and ciliary muscle, Gq, excitatory',
        'All nicotinic receptors are ion channels, so atropine does not touch them at any dose',
      ],
    },
    {
      hook: 'Point and Shoot: Parasympathetic erection, Sympathetic emission and ejaculation',
      expansion: [
        'Sacral S2 to S4 parasympathetic fibres release nitric oxide → arteriolar dilation → erection',
        'Thoracolumbar sympathetic outflow contracts vas, seminal vesicles and prostate → emission',
        'Same logic in the bladder: sympathetic stores (alpha-1 shuts the neck, beta-3 relaxes the detrusor)',
        'Parasympathetic voids (M3 contracts the detrusor while the sphincters relax)',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What noradrenaline does to heart rate',
      wrongInstinct: 'Noradrenaline is a sympathetic agonist, so it must produce tachycardia',
      rightAnswer: 'It usually produces reflex bradycardia, because the alpha-1 pressor effect triggers a baroreflex that overrides its direct beta-1 stimulation',
      why: 'Noradrenaline has almost no beta-2 activity, so nothing offsets the rise in resistance and the baroreflex wins.',
    },
    {
      questionCategory: 'Whether dual innervation always means opposition',
      wrongInstinct: 'If an organ receives both divisions, one must stimulate and the other must inhibit',
      rightAnswer: 'Both divisions increase salivary secretion, and sweat glands, piloerector muscles, the adrenal medulla and nearly all blood vessels have no parasympathetic supply at all',
      why: 'Ask which receptors the tissue actually carries, not which division is supposed to be the antagonist.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two volunteers each receive a catecholamine infusion. Volunteer A shows a rise in systolic and diastolic pressure with a fall in heart rate. Volunteer B shows a rise in systolic pressure, a fall in diastolic pressure and a rise in heart rate. Which pair of agents was given?',
      options: [
        { id: 'a', text: 'A received adrenaline and B received noradrenaline' },
        { id: 'b', text: 'A received noradrenaline and B received adrenaline' },
        { id: 'c', text: 'Both received adrenaline, at different infusion rates but with identical receptor effects' },
        { id: 'd', text: 'A received a pure beta-1 agonist and B received a pure alpha-1 agonist' },
      ],
      answerId: 'b',
      explanation: 'Noradrenaline is a potent alpha-1 and beta-1 agonist with negligible beta-2 action, so total peripheral resistance rises, both pressures rise, and the baroreflex answers with vagal bradycardia that overrides its direct cardiac effect. Adrenaline adds strong beta-2 activity, which dilates skeletal muscle vessels and drops diastolic pressure, so resistance does not rise, the baroreflex is not triggered, and the beta-1 tachycardia is seen instead. A pure beta-1 agonist would not raise diastolic pressure and a pure alpha-1 agonist would not raise heart rate.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient who has taken an overdose of an antimuscarinic drug is flushed and febrile with dry axillae, dilated poorly reactive pupils, blurred near vision, a heart rate of 130 and a palpable bladder. Which receptor combination accounts for the entire picture?',
      options: [
        { id: 'a', text: 'Blockade of M3 receptors on glands, ciliary muscle, iris sphincter and detrusor, plus loss of M2-mediated vagal restraint on the sinus node' },
        { id: 'b', text: 'Blockade of nicotinic receptors at autonomic ganglia in both divisions' },
        { id: 'c', text: 'Excessive stimulation of alpha-1 receptors throughout the body' },
        { id: 'd', text: 'Blockade of cardiac beta-1 receptors with sparing of alpha-1 receptors' },
      ],
      answerId: 'a',
      explanation: 'M3 blockade dries every secretion — including sweat, whose sympathetic fibres are cholinergic and muscarinic, which is why the patient is hot and dry rather than sweaty — and paralyses accommodation, the iris sphincter and the detrusor, giving blurred near vision, fixed dilated pupils and retention. M2 blockade removes tonic vagal slowing so the rate climbs above the intrinsic sinus rate. Ganglionic blockade would add profound hypotension, alpha-1 excess would cause pallor and hypertension rather than flushing, and beta-1 blockade would slow the heart.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which set of receptor actions describes the bladder during the storage phase?',
      options: [
        { id: 'a', text: 'M3 contraction of the detrusor with alpha-1 relaxation of the internal urethral sphincter' },
        { id: 'b', text: 'Beta-3 relaxation of the detrusor with alpha-1 contraction of the internal urethral sphincter' },
        { id: 'c', text: 'Beta-1 relaxation of the detrusor with M3 contraction of the internal urethral sphincter' },
        { id: 'd', text: 'Nicotinic contraction of the detrusor with muscarinic relaxation of the sphincter' },
      ],
      answerId: 'b',
      explanation: 'Storage is a sympathetic job: noradrenaline relaxes the detrusor through beta-3 receptors while closing the bladder neck through alpha-1 receptors. Voiding is parasympathetic: M3 receptors contract the detrusor as the sphincters relax. Deriving it this way explains the drug classes without extra memorising — beta-3 agonists and antimuscarinics both calm an overactive bladder, and alpha-1 blockers relieve outflow obstruction at the cost of postural hypotension.',
      tests: 'mechanism',
    },
  ],
};

export default ghpAutonomicReceptorsEffects;
