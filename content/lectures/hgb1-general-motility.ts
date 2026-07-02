import { hgb1Lecture } from './hgb1-shared';

const l5 = 'L5 — General & Integrative GI Physiology';
const l6 = 'L6 — Gastric & Intestinal Motility';

export const giSmoothMuscleElectricalActivity = hgb1Lecture({
  id: 'gi-smooth-muscle-electrical-activity',
  title: 'GI Smooth Muscle, Slow Waves & Spike Potentials',
  source: l5,
  tags: [
    { kind: 'mechanism', label: 'Electrical control of contraction' },
    { kind: 'exam', label: 'Interstitial cells of Cajal' },
  ],
  highYield: [
    'GI smooth muscle behaves as an electrical syncytium through gap junctions. **Interstitial cells of Cajal (ICC)** generate and propagate rhythmic slow waves.',
    'Slow waves rhythmically vary membrane potential but usually do not directly cause contraction; spike potentials appear when the crest reaches threshold.',
    'Spike opening of voltage-gated Ca²⁺ channels raises cytosolic Ca²⁺, activates calmodulin–MLCK, and produces contraction.',
    'Depolarizing input (stretch, acetylcholine, parasympathetic activity) increases spikes; norepinephrine and sympathetic input generally hyperpolarize and inhibit.',
  ],
  chainTitle: 'Pacemaker slow waves gate calcium spikes and force',
  steps: [
    { label: 'ICC generate rhythmic slow waves' },
    { label: 'Excitatory input depolarizes wave crest toward threshold' },
    { label: 'Ca²⁺-dependent spikes appear', emphasis: 'key' },
    { label: 'Ca²⁺–calmodulin activates MLCK and contraction' },
  ],
  examFindings: [
    { sign: 'Rhythmic membrane oscillations without contraction', mechanism: 'Slow waves have not reached spike threshold', significance: 'key' },
    { sign: 'Stronger contraction after stretch or acetylcholine', mechanism: 'Depolarization increases spike number during each slow-wave crest', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Electrical slow-wave frequency', meaning: 'Sets the maximum regional contraction frequency' },
    { clue: 'Spike number per slow wave', meaning: 'Correlates with contractile strength' },
  ],
  treatment: [
    { logic: 'Separate pacemaking from excitation', detail: 'A slow wave determines timing; neural and hormonal inputs alter whether threshold and contraction occur.' },
  ],
  mnemonic: { hook: 'Slow waves set the schedule; spikes squeeze', expansion: ['ICC pace', 'Calcium spikes contract'] },
  trap: {
    questionCategory: 'GI electrophysiology',
    wrongInstinct: 'Every slow wave is an action potential that causes contraction',
    rightAnswer: 'Slow waves set membrane rhythm; threshold-crossing spikes trigger meaningful contraction',
    why: 'Slow waves can occur without opening enough calcium channels to generate force.',
  },
  quiz: {
    stem: 'Which cells act as the principal pacemakers for GI slow waves?',
    options: ['Enterochromaffin cells', 'Interstitial cells of Cajal', 'Paneth cells', 'Vagal motor neurons'],
    answer: 1,
    explanation: 'ICC form pacemaker networks that generate and transmit slow-wave electrical activity.',
  },
});

export const entericAutonomicReflexControl = hgb1Lecture({
  id: 'enteric-autonomic-reflex-control',
  title: 'Enteric Nervous System, Autonomics & GI Reflexes',
  source: l5,
  tags: [
    { kind: 'mechanism', label: 'Short and long GI reflexes' },
    { kind: 'exam', label: 'Myenteric vs submucosal plexus' },
  ],
  highYield: [
    'The ENS can organize local reflexes independently: sensory neurons detect stretch/chemistry, interneurons integrate, and motor neurons control muscle, glands, and vessels.',
    'The **myenteric (Auerbach) plexus** chiefly regulates motility; the **submucosal (Meissner) plexus** chiefly regulates secretion, absorption, and mucosal blood flow.',
    'Parasympathetic vagal/pelvic input generally promotes GI activity; sympathetic input generally reduces motility/secretion and contracts sphincters.',
    'Short reflexes remain within the ENS; long reflexes pass through prevertebral ganglia or CNS, including vagovagal and gastrocolic responses.',
  ],
  chainTitle: 'Luminal input is converted into coordinated secretion and motility',
  steps: [
    { label: 'Mechanical or chemical receptor senses a meal' },
    { label: 'Enteric interneurons integrate local input' },
    { label: 'Ascending excitation and descending inhibition coordinate movement', emphasis: 'key' },
    { label: 'Autonomic pathways modulate the enteric program' },
  ],
  examFindings: [
    { sign: 'Proximal contraction with distal relaxation', mechanism: 'Enteric peristaltic reflex propels luminal contents', significance: 'key' },
    { sign: 'Defecation urge after a meal', mechanism: 'Gastrocolic reflex increases colonic mass movement', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Transit or manometry pattern', meaning: 'Assesses coordinated motor output of enteric circuits' },
    { clue: 'Autonomic history and medication review', meaning: 'Identifies extrinsic modifiers of motility and secretion' },
  ],
  treatment: [
    { logic: 'Target the dominant enteric output', detail: 'Prokinetics enhance propulsion; antimuscarinics reduce selected secretory and motor responses.' },
  ],
  mnemonic: { hook: 'Auerbach moves; Meissner moistens', expansion: ['Myenteric = muscle', 'Submucosal = secretion'] },
  trap: {
    questionCategory: 'Enteric plexus function',
    wrongInstinct: 'The ENS cannot function without vagal input',
    rightAnswer: 'The ENS can execute short local reflexes independently, while autonomic input modulates them',
    why: 'Complete sensory–interneuron–motor circuits exist within the gut wall.',
  },
  quiz: {
    stem: 'Which plexus most directly coordinates GI muscular motility?',
    options: ['Submucosal plexus', 'Myenteric plexus', 'Celiac ganglion', 'Dorsal root ganglion'],
    answer: 1,
    explanation: 'The myenteric plexus lies between muscle layers and primarily controls motility.',
  },
});

export const giHormonesParacrinesNeurocrines = hgb1Lecture({
  id: 'gi-hormones-paracrines-neurocrines',
  title: 'GI Hormones, Paracrines & Neurocrines',
  source: l5,
  tags: [
    { kind: 'mechanism', label: 'Meal-triggered chemical regulation' },
    { kind: 'exam', label: 'Gastrin, CCK, secretin and GIP' },
  ],
  highYield: [
    '**Gastrin** increases gastric acid and mucosal growth; **CCK** stimulates pancreatic enzymes and gallbladder contraction while slowing gastric emptying.',
    '**Secretin** responds to duodenal acid and stimulates pancreatic/biliary bicarbonate; **GIP** responds to oral nutrients and enhances glucose-dependent insulin release.',
    'Motilin organizes the fasting migrating motor complex; somatostatin broadly inhibits GI secretion; histamine from ECL cells stimulates parietal H2 receptors.',
    'ACh is generally excitatory for secretion/motility; NO and VIP relax smooth muscle, including sphincters.',
  ],
  chainTitle: 'Luminal nutrients recruit complementary regulatory signals',
  steps: [
    { label: 'Protein and distension release gastrin' },
    { label: 'Fat/amino acids release CCK; acid releases secretin', emphasis: 'key' },
    { label: 'Pancreas and biliary system deliver enzymes plus bicarbonate' },
    { label: 'Feedback slows gastric delivery to match digestion' },
  ],
  examFindings: [
    { sign: 'Gallbladder contraction after a fatty meal', mechanism: 'I-cell CCK release', significance: 'key' },
    { sign: 'Bicarbonate-rich pancreatic secretion after duodenal acid', mechanism: 'S-cell secretin release', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Fasting gastrin interpreted with gastric pH', meaning: 'Separates hypergastrinemia from acid feedback versus autonomous secretion' },
    { clue: 'Meal stimulus and target-organ response', meaning: 'Identifies the likely hormone and source cell' },
  ],
  treatment: [
    { logic: 'Use receptor physiology to predict drug effects', detail: 'H2 blockade lowers acid, while somatostatin analogues suppress several secretory pathways.' },
  ],
  mnemonic: { hook: 'CCK contracts the gallbladder; Secretin secretes bicarbonate', expansion: ['Gastrin grows and acidifies', 'GIP gives insulin'] },
  trap: {
    questionCategory: 'Incretin physiology',
    wrongInstinct: 'GIP stimulates insulin regardless of blood glucose',
    rightAnswer: 'GIP enhances glucose-dependent insulin secretion after oral nutrients',
    why: 'The glucose dependence limits insulin release when glycemia is low.',
  },
  quiz: {
    stem: 'Acid entering the duodenum most directly increases release of which hormone?',
    options: ['Gastrin', 'Secretin', 'Motilin', 'Somatostatin'],
    answer: 1,
    explanation: 'Duodenal S cells release secretin, which promotes bicarbonate-rich pancreatic and biliary fluid.',
  },
});

export const integratedMealResponse = hgb1Lecture({
  id: 'integrated-meal-response',
  title: 'Integrated GI Response to a Meal (SDL)',
  source: l5,
  tags: [
    { kind: 'mechanism', label: 'Cephalic, gastric and intestinal phases' },
    { kind: 'exam', label: 'Integrated postprandial physiology' },
  ],
  highYield: [
    'The cephalic phase uses vagal signals triggered by sight, smell, taste, and chewing to prime salivary, gastric, pancreatic, and biliary function.',
    'The gastric phase couples distension and peptides to local/vagovagal reflexes plus gastrin, supporting storage, mixing, acid secretion, and controlled emptying.',
    'The intestinal phase coordinates CCK, secretin, GIP/GLP-1, pancreatic secretion, bile delivery, segmentation, absorption, and feedback inhibition of gastric emptying.',
    'After absorption, portal blood carries water-soluble nutrients to liver; long-chain lipid leaves through intestinal lymph as chylomicrons.',
  ],
  chainTitle: 'A meal is processed by overlapping anticipatory and feedback phases',
  steps: [
    { label: 'Cephalic vagal priming begins before food arrives' },
    { label: 'Gastric distension and peptides increase mixing/secretion' },
    { label: 'Duodenal acid and fat recruit secretin and CCK', emphasis: 'key' },
    { label: 'Absorption plus ileal/duodenal feedback meters delivery' },
  ],
  examFindings: [
    { sign: 'Reduced gastric emptying after duodenal fat', mechanism: 'CCK and enterogastric feedback match delivery to digestive capacity', significance: 'key' },
    { sign: 'Larger insulin response to oral than IV glucose', mechanism: 'GIP and GLP-1 create the incretin effect', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Timing relative to meal entry', meaning: 'Distinguishes cephalic, gastric, and intestinal control' },
    { clue: 'Portal versus lymphatic nutrient route', meaning: 'Predicts first-pass handling of absorbed substrate' },
  ],
  treatment: [
    { logic: 'Interpret symptoms by phase and organ coordination', detail: 'Postprandial symptoms may reflect secretion, emptying, digestion, absorption, or colonic processing rather than one isolated organ.' },
  ],
  mnemonic: { hook: 'Prime, process, pace', expansion: ['Cephalic primes', 'Gastric processes', 'Intestinal paces and absorbs'] },
  trap: {
    questionCategory: 'Nutrient transport',
    wrongInstinct: 'All absorbed nutrients enter portal capillaries directly',
    rightAnswer: 'Long-chain lipids enter lacteals as chylomicrons before reaching systemic blood',
    why: 'Their lipoprotein particles are too large for ordinary intestinal capillaries.',
  },
  quiz: {
    stem: 'Which event belongs mainly to the cephalic phase of digestion?',
    options: ['Vagal priming triggered by food aroma', 'Ileal bile-acid reabsorption', 'Colonic mass movement', 'Fat-triggered ileal brake'],
    answer: 0,
    explanation: 'Sensory and cognitive food cues activate vagal pathways before the meal reaches the stomach.',
  },
});

export const gastricAccommodationMixing = hgb1Lecture({
  id: 'gastric-accommodation-mixing',
  title: 'Gastric Accommodation, Mixing & Retropulsion',
  source: l6,
  tags: [
    { kind: 'mechanism', label: 'Reservoir and antral pump' },
    { kind: 'exam', label: 'Vagovagal receptive relaxation' },
  ],
  highYield: [
    'The proximal stomach acts as a reservoir: swallowing and gastric distension trigger vagovagal **receptive relaxation/accommodation** with little pressure rise.',
    'Peristaltic waves strengthen toward the antrum. As the pylorus narrows, most contents are driven backward by retropulsion for mixing and particle reduction.',
    'Only liquids and sufficiently small particles pass the pylorus efficiently during the fed state; indigestible solids are cleared mainly during fasting motor activity.',
  ],
  chainTitle: 'The proximal reservoir receives while the distal pump grinds',
  steps: [
    { label: 'Vagovagal reflex relaxes fundus for storage' },
    { label: 'Slow-wave contractions strengthen toward antrum' },
    { label: 'Pyloric closure causes retropulsion', emphasis: 'key' },
    { label: 'Small particles enter duodenum' },
  ],
  examFindings: [
    { sign: 'Early satiety after vagal or fundic dysfunction', mechanism: 'Impaired accommodation raises intragastric pressure with small meals', significance: 'key' },
    { sign: 'Antral mixing wave with little net emptying', mechanism: 'Pyloric closure redirects contents proximally', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Gastric accommodation study or meal test', meaning: 'Assesses proximal stomach reservoir function' },
    { clue: 'Antroduodenal manometry', meaning: 'Characterizes antral and pyloric motor coordination' },
  ],
  treatment: [
    { logic: 'Match meal pattern to reservoir capacity', detail: 'Smaller, more frequent meals can reduce symptoms when accommodation is impaired.' },
  ],
  mnemonic: { hook: 'Fundus fills; antrum mills', expansion: ['Pylorus meters'] },
  trap: {
    questionCategory: 'Gastric mixing',
    wrongInstinct: 'Every antral contraction empties most of its contents into duodenum',
    rightAnswer: 'Pyloric narrowing sends most antral contents backward by retropulsion',
    why: 'This repeated backflow is central to grinding and mixing.',
  },
  quiz: {
    stem: 'Which process permits the proximal stomach to accept a meal with little rise in pressure?',
    options: ['Mass movement', 'Receptive relaxation', 'Segmentation', 'Secondary peristalsis'],
    answer: 1,
    explanation: 'Vagovagal receptive relaxation and accommodation expand proximal gastric volume without a large pressure increase.',
  },
});

export const gastricEmptyingFeedback = hgb1Lecture({
  id: 'gastric-emptying-feedback',
  title: 'Gastric Emptying & Duodenal Feedback',
  source: l6,
  tags: [
    { kind: 'mechanism', label: 'Pyloric pump and enterogastric brake' },
    { kind: 'exam', label: 'Fat, acid and hypertonicity slow emptying' },
  ],
  highYield: [
    'Emptying reflects the balance between proximal tone/antral pump and pyloric/duodenal resistance. Liquids generally empty faster than solids.',
    'Gastric distension and gastrin promote the pyloric pump; duodenal distension, acid, fat, hypertonicity, and irritants inhibit gastric emptying.',
    'Neural enterogastric reflexes and hormones—especially **CCK**, with secretin and GIP—allow the duodenum to meter incoming chyme.',
    'The caloric composition and particle size of a meal therefore matter more than volume alone.',
  ],
  chainTitle: 'Duodenal capacity feeds back to the gastric pump',
  steps: [
    { label: 'Antral contractions press chyme toward pylorus' },
    { label: 'Duodenum detects acid, fat, osmotic load, or stretch' },
    { label: 'Neural and hormonal feedback tightens the brake', emphasis: 'key' },
    { label: 'Emptying slows until neutralization and digestion catch up' },
  ],
  examFindings: [
    { sign: 'Fatty meal empties more slowly than carbohydrate solution', mechanism: 'Duodenal fat strongly releases CCK and activates inhibitory feedback', significance: 'key' },
    { sign: 'Early dumping after gastric surgery', mechanism: 'Loss of reservoir/pyloric control delivers hyperosmotic chyme too rapidly', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Four-hour gastric emptying scintigraphy', meaning: 'Quantifies delayed solid-meal emptying' },
    { clue: 'Meal composition and medication review', meaning: 'Identifies physiologic or pharmacologic causes of altered emptying' },
  ],
  treatment: [
    { logic: 'Reduce the load and correct the cause', detail: 'Meal modification and selected prokinetics support delayed emptying after obstruction is excluded.' },
  ],
  mnemonic: { hook: 'Duodenum applies the FAT brake', expansion: ['Fat', 'Acid', 'Tonicity'] },
  trap: {
    questionCategory: 'Gastric-emptying control',
    wrongInstinct: 'CCK accelerates gastric emptying to deliver fat faster',
    rightAnswer: 'CCK slows gastric emptying while promoting pancreatic enzymes and gallbladder contraction',
    why: 'The delay gives the small intestine time to digest the lipid load.',
  },
  quiz: {
    stem: 'Which duodenal stimulus most strongly slows gastric emptying?',
    options: ['Isotonic water', 'Fatty acids', 'Neutral pH', 'Low caloric density'],
    answer: 1,
    explanation: 'Duodenal fat activates CCK and enterogastric feedback, strongly braking gastric delivery.',
  },
});

export const smallIntestinalMotility = hgb1Lecture({
  id: 'small-intestinal-motility',
  title: 'Small-Intestinal Segmentation, Peristalsis & MMC',
  source: l6,
  tags: [
    { kind: 'mechanism', label: 'Fed and fasting motility patterns' },
    { kind: 'exam', label: 'Migrating motor complex' },
  ],
  highYield: [
    'Segmentation alternates ring contractions to mix chyme with secretions and repeatedly expose it to absorptive mucosa, with limited net propulsion.',
    'Peristalsis uses contraction behind and relaxation ahead of a bolus. Distension is a key trigger; the overall gradient moves contents aborally.',
    'During fasting, the **migrating motor complex (MMC)** sweeps residual material and bacteria distally about every 90–120 minutes; motilin participates.',
    'The ileocecal sphincter limits reflux of colonic contents, while ileal distension promotes its relaxation and cecal distension increases its tone.',
  ],
  chainTitle: 'Fed mixing gives way to fasting housekeeping',
  steps: [
    { label: 'Meal interrupts fasting MMC' },
    { label: 'Segmentation mixes and supports absorption' },
    { label: 'Peristalsis advances contents as needed' },
    { label: 'Fasting motilin-associated MMC clears residue', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'Alternating contractions without major forward transit', mechanism: 'Segmentation mixes chyme locally', significance: 'key' },
    { sign: 'Cyclic fasting contractions abolished by a meal', mechanism: 'Fasting MMC switches to fed pattern', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Small-bowel transit study', meaning: 'Measures net propulsion through the small intestine' },
    { clue: 'Antroduodenal manometry', meaning: 'Distinguishes fed contractions from fasting MMC phases' },
  ],
  treatment: [
    { logic: 'Preserve cyclic propulsion when managing dysmotility', detail: 'Continuous grazing can suppress fasting MMC activity; prokinetic choice depends on the suspected motor defect.' },
  ],
  mnemonic: { hook: 'Segmentation stirs; peristalsis pushes; MMC sweeps', expansion: ['Fed mixes', 'Fasting cleans'] },
  trap: {
    questionCategory: 'Small-bowel movement',
    wrongInstinct: 'Segmentation is the main rapid propulsive pattern',
    rightAnswer: 'Segmentation mainly mixes; peristalsis and the MMC provide propulsion',
    why: 'Opposing segmental movements repeatedly redistribute chyme over short distances.',
  },
  quiz: {
    stem: 'Which pattern clears residual contents from the small intestine during fasting?',
    options: ['Segmentation', 'Migrating motor complex', 'Gastrocolic reflex', 'Receptive relaxation'],
    answer: 1,
    explanation: 'The motilin-associated MMC is the fasting housekeeping wave of stomach and small intestine.',
  },
});

export const colonicMotilityDefecation = hgb1Lecture({
  id: 'colonic-motility-defecation',
  title: 'Colonic Motility, Mass Movements & Defecation',
  source: l6,
  tags: [
    { kind: 'mechanism', label: 'Haustration and defecation reflex' },
    { kind: 'exam', label: 'Internal versus external sphincter' },
  ],
  highYield: [
    'Haustral/segmenting contractions mix colonic contents and support water/electrolyte absorption; infrequent **mass movements** propel feces long distances toward the rectum.',
    'Meals can trigger mass movement through gastrocolic and duodenocolic reflexes. Rectal distension initiates the intrinsic and parasympathetic defecation reflexes.',
    'The internal anal sphincter is involuntary smooth muscle and relaxes in the rectoanal inhibitory reflex; the external sphincter is voluntary skeletal muscle supplied by the pudendal nerve.',
    'Defecation requires rectal contraction, sphincter coordination, pelvic-floor relaxation, and—when appropriate—increased abdominal pressure.',
  ],
  chainTitle: 'Rectal filling converts colonic propulsion into a coordinated outlet response',
  steps: [
    { label: 'Mass movement fills rectum' },
    { label: 'Rectal stretch activates enteric and sacral reflexes' },
    { label: 'Internal sphincter relaxes while rectum contracts', emphasis: 'key' },
    { label: 'Voluntary external sphincter and pelvic floor permit or defer passage' },
  ],
  examFindings: [
    { sign: 'Defecation urge shortly after breakfast', mechanism: 'Meal-evoked gastrocolic reflex increases colonic mass movement', significance: 'supportive' },
    { sign: 'Absent rectoanal inhibitory reflex', mechanism: 'Distal aganglionosis prevents internal sphincter relaxation in Hirschsprung disease', significance: 'key' },
  ],
  investigations: [
    { clue: 'Anorectal manometry', meaning: 'Assesses rectal sensation, sphincter pressures, and inhibitory reflex' },
    { clue: 'Balloon expulsion or defecography', meaning: 'Evaluates coordinated outlet relaxation' },
  ],
  treatment: [
    { logic: 'Treat transit and outlet disorders differently', detail: 'Fiber/fluids and laxatives address stool transit; pelvic-floor dyssynergia responds best to biofeedback.' },
  ],
  mnemonic: { hook: 'Internal is involuntary; external exits by choice', expansion: ['Rectum relaxes internal, pudendal controls external'] },
  trap: {
    questionCategory: 'Anal sphincter control',
    wrongInstinct: 'Both anal sphincters are smooth muscle under autonomic control',
    rightAnswer: 'Internal sphincter is smooth muscle; external sphincter is skeletal muscle under pudendal control',
    why: 'Voluntary continence depends on somatic control of the external sphincter.',
  },
  quiz: {
    stem: 'Which nerve provides the main voluntary motor supply to the external anal sphincter?',
    options: ['Vagus nerve', 'Pudendal nerve', 'Pelvic splanchnic nerve', 'Hypogastric nerve'],
    answer: 1,
    explanation: 'The external anal sphincter is skeletal muscle supplied by somatic fibers in the pudendal nerve.',
  },
});
