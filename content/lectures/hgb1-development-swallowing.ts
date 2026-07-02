import { hgb1Lecture } from './hgb1-shared';

const l3 = 'L3 — Development of the Digestive System';
const l4 = 'L4 — Chewing & Swallowing';

export const foregutAccessoryDevelopment = hgb1Lecture({
  id: 'foregut-accessory-development',
  title: 'Foregut & Accessory Organ Development',
  source: l3,
  tags: [
    { kind: 'mechanism', label: 'Foregut budding and rotation' },
    { kind: 'exam', label: 'Pancreatic and esophageal anomalies' },
  ],
  highYield: [
    'Endoderm forms the GI epithelium and glandular parenchyma; splanchnic mesoderm forms connective tissue, smooth muscle, and serosa.',
    'The foregut forms pharynx, lower respiratory tract, esophagus, stomach, proximal duodenum, liver, biliary tree, and pancreas; it is supplied chiefly by the **celiac trunk**.',
    'Stomach rotation creates the greater/lesser curvatures and positions the vagal trunks; hepatic and pancreatic buds grow from the proximal duodenum.',
    'Ventral pancreatic rotation and fusion with the dorsal bud establish the definitive pancreas and duct system.',
  ],
  chainTitle: 'Foregut folding and budding establish the upper GI tract',
  steps: [
    { label: 'Endodermal tube is partitioned into foregut' },
    { label: 'Stomach dilates and rotates' },
    { label: 'Hepatic, biliary, and pancreatic buds emerge', emphasis: 'key' },
    { label: 'Ventral pancreas rotates and fuses dorsally' },
  ],
  examFindings: [
    { sign: 'Polyhydramnios with a blind upper esophageal pouch', mechanism: 'Esophageal atresia prevents normal fetal swallowing', significance: 'key' },
    { sign: 'Pancreatic tissue encircling the second duodenum', mechanism: 'Abnormal bifid ventral bud rotation produces annular pancreas', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Unable to pass an orogastric tube with coiled tube on radiograph', meaning: 'Supports esophageal atresia' },
    { clue: 'Double-bubble pattern with distal gas', meaning: 'May reflect partial obstruction from annular pancreas' },
  ],
  treatment: [
    { logic: 'Stabilize congenital obstruction before definitive repair', detail: 'Prevent aspiration, decompress the pouch or stomach as appropriate, and obtain surgical evaluation.' },
  ],
  mnemonic: { hook: 'Foregut feeds from the celiac', expansion: ['Stomach, liver, biliary tree, pancreas, and proximal duodenum'] },
  trap: {
    questionCategory: 'Pancreatic embryology',
    wrongInstinct: 'The dorsal bud rotates around the duodenum',
    rightAnswer: 'The ventral pancreatic bud rotates posteriorly to fuse with the dorsal bud',
    why: 'The ventral bud begins near the bile duct and moves with duodenal rotation.',
  },
  quiz: {
    stem: 'Which developmental event produces annular pancreas?',
    options: ['Failure of dorsal mesentery formation', 'Abnormal ventral pancreatic bud migration', 'Persistence of the vitelline duct', 'Failure of hindgut recanalization'],
    answer: 1,
    explanation: 'Abnormal migration of a bifid ventral pancreatic bud can encircle and obstruct the duodenum.',
  },
});

export const midgutRotationFixation = hgb1Lecture({
  id: 'midgut-rotation-fixation',
  title: 'Midgut Herniation, Rotation & Fixation',
  source: l3,
  tags: [
    { kind: 'mechanism', label: '270-degree counterclockwise rotation' },
    { kind: 'exam', label: 'Malrotation and vitelline remnants' },
  ],
  highYield: [
    'The midgut extends from distal duodenum to proximal two-thirds of transverse colon and is supplied by the **superior mesenteric artery**.',
    'Rapid elongation produces physiologic umbilical herniation; the bowel rotates a total of **270° counterclockwise** around the SMA before returning to the abdomen.',
    'Jejunoileal loops return before the cecal bud; the cecum descends to the right lower quadrant and ascending/descending colon become secondarily retroperitoneal.',
    'Persistence of the vitelline duct may produce Meckel diverticulum; malrotation creates a narrow mesenteric base vulnerable to midgut volvulus.',
  ],
  chainTitle: 'Midgut elongation requires temporary herniation and ordered return',
  steps: [
    { label: 'Primary intestinal loop herniates around SMA' },
    { label: 'Loop rotates counterclockwise during growth' },
    { label: 'Bowel returns after a total 270° rotation', emphasis: 'key' },
    { label: 'Cecum descends and mesenteries fix' },
  ],
  examFindings: [
    { sign: 'Painless lower GI bleeding in a child', mechanism: 'Ectopic gastric mucosa in a Meckel diverticulum ulcerates adjacent ileum', significance: 'key' },
    { sign: 'Bilious vomiting with acute abdominal pain', mechanism: 'Malrotation may permit midgut volvulus and ischemia', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Technetium-99m pertechnetate uptake in right lower abdomen', meaning: 'Detects ectopic gastric mucosa in Meckel diverticulum' },
    { clue: 'Corkscrew duodenum or abnormal DJ junction on upper GI study', meaning: 'Supports malrotation with volvulus' },
  ],
  treatment: [
    { logic: 'Treat suspected volvulus as a surgical emergency', detail: 'Resuscitation and urgent operative detorsion prevent progressive bowel necrosis.' },
  ],
  mnemonic: { hook: 'Midgut makes 270 counterclockwise', expansion: ['SMA is the axis', 'Cecum returns last and descends'] },
  trap: {
    questionCategory: 'Umbilical abnormalities',
    wrongInstinct: 'Omphalocele and gastroschisis are both failures of midgut return',
    rightAnswer: 'Omphalocele is covered and related to failed return; gastroschisis is an uncovered abdominal-wall defect',
    why: 'The presence of a covering sac is the rapid discriminator.',
  },
  quiz: {
    stem: 'The embryonic midgut rotates around which artery?',
    options: ['Celiac trunk', 'Superior mesenteric artery', 'Inferior mesenteric artery', 'Umbilical artery'],
    answer: 1,
    explanation: 'The SMA is the axis for the total 270-degree counterclockwise midgut rotation.',
  },
});

export const hindgutAnorectalDevelopment = hgb1Lecture({
  id: 'hindgut-anorectal-development',
  title: 'Hindgut, Cloaca & Congenital GI Anomalies',
  source: l3,
  tags: [
    { kind: 'mechanism', label: 'Cloacal partitioning' },
    { kind: 'exam', label: 'Hirschsprung and anorectal defects' },
  ],
  highYield: [
    'The hindgut forms distal one-third of transverse colon through upper anal canal and is supplied by the **inferior mesenteric artery**.',
    'The urorectal septum partitions the cloaca into anorectal canal and urogenital sinus. Upper anal canal is endodermal; lower anal canal derives from surface ectoderm.',
    'The pectinate line marks the embryologic junction and predicts different arterial, venous, lymphatic, epithelial, and sensory patterns.',
    'Hirschsprung disease results from failed neural-crest migration, leaving distal bowel without enteric ganglion cells and causing functional obstruction.',
  ],
  chainTitle: 'Cloacal partition and neural-crest migration create the distal bowel',
  steps: [
    { label: 'Hindgut terminates in common cloaca' },
    { label: 'Urorectal septum separates rectal and urinary outlets' },
    { label: 'Endoderm meets ectoderm at pectinate line', emphasis: 'key' },
    { label: 'Neural crest populates enteric plexuses' },
  ],
  examFindings: [
    { sign: 'Delayed meconium, distension, and explosive stool after rectal exam', mechanism: 'Aganglionic distal bowel remains tonically contracted in Hirschsprung disease', significance: 'key' },
    { sign: 'Anorectal fistula or imperforate anus', mechanism: 'Abnormal cloacal partitioning or anal membrane development', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Transition zone on contrast enema', meaning: 'Narrow distal aganglionic segment with dilated proximal colon' },
    { clue: 'Absent ganglion cells on rectal suction biopsy', meaning: 'Confirms Hirschsprung disease' },
  ],
  treatment: [
    { logic: 'Remove the nonfunctional segment', detail: 'Definitive Hirschsprung treatment pulls ganglionated bowel through after stabilization and decompression.' },
  ],
  mnemonic: { hook: 'Hindgut heads to the IMA', expansion: ['Neural crest failure leaves Hirschsprung bowel without ganglia'] },
  trap: {
    questionCategory: 'Anal canal embryology',
    wrongInstinct: 'The entire anal canal is hindgut endoderm',
    rightAnswer: 'Only the upper anal canal is endodermal; the lower canal comes from ectodermal proctodeum',
    why: 'Their junction persists clinically as the pectinate line.',
  },
  quiz: {
    stem: 'Which finding confirms Hirschsprung disease?',
    options: ['Ectopic gastric mucosa', 'Absent ganglion cells on rectal biopsy', 'Pancreatic tissue around duodenum', 'Persistent vitelline vessels'],
    answer: 1,
    explanation: 'Failure of neural-crest migration causes aganglionosis of the distal bowel.',
  },
});

export const masticationMechanicsReflex = hgb1Lecture({
  id: 'mastication-mechanics-reflex',
  title: 'Mastication: Muscles, Mechanics & Reflex Control',
  source: l4,
  tags: [
    { kind: 'mechanism', label: 'Chewing cycle' },
    { kind: 'exam', label: 'Trigeminal motor control' },
  ],
  highYield: [
    'Mastication breaks food into smaller particles, mixes it with saliva, lubricates the bolus, and increases surface area for digestion.',
    'Muscles of mastication are supplied by **CN V3**: masseter, temporalis, and medial pterygoid elevate; lateral pterygoid helps protrude and open the jaw.',
    'The chewing reflex alternates jaw-closing muscle inhibition and stretch-driven rebound contraction, while cortical control adjusts the cycle voluntarily.',
  ],
  chainTitle: 'Bolus contact evokes rhythmic jaw opening and closing',
  steps: [
    { label: 'Food pressure inhibits jaw-closing muscles' },
    { label: 'Jaw drops and closing muscles are stretched' },
    { label: 'Stretch reflex produces rebound closure', emphasis: 'key' },
    { label: 'Cycle repeats while tongue repositions food' },
  ],
  examFindings: [
    { sign: 'Weak jaw closure with deviation toward a lesion', mechanism: 'Ipsilateral V3 motor weakness permits the intact lateral pterygoid to push the jaw toward the weak side', significance: 'key' },
    { sign: 'Poor bolus formation with dry mouth', mechanism: 'Loss of salivary lubrication impairs efficient chewing', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Jaw strength, deviation, and masseter reflex', meaning: 'Assesses trigeminal motor function' },
    { clue: 'Oral examination and dentition', meaning: 'Identifies mechanical contributors to impaired mastication' },
  ],
  treatment: [
    { logic: 'Match food texture to chewing capacity', detail: 'Dental care, saliva support, and texture modification reduce aspiration and nutritional risk.' },
  ],
  mnemonic: { hook: 'Muscles of mastication ride V3', expansion: ['Masseter, temporalis, medial and lateral pterygoids'] },
  trap: {
    questionCategory: 'Jaw movement',
    wrongInstinct: 'Lateral pterygoid is a powerful jaw closer',
    rightAnswer: 'Lateral pterygoid protrudes and assists opening; the other major mastication muscles elevate',
    why: 'Its horizontal pull advances the mandibular condyle and disc.',
  },
  quiz: {
    stem: 'Which cranial nerve carries motor supply to the muscles of mastication?',
    options: ['CN V1', 'CN V3', 'CN VII', 'CN IX'],
    answer: 1,
    explanation: 'The mandibular division of the trigeminal nerve supplies the muscles of mastication.',
  },
});

export const swallowingPhasesReflex = hgb1Lecture({
  id: 'swallowing-phases-reflex',
  title: 'Swallowing Phases & Airway Protection',
  source: l4,
  tags: [
    { kind: 'mechanism', label: 'Deglutition reflex' },
    { kind: 'exam', label: 'Oropharyngeal dysphagia' },
  ],
  highYield: [
    'The **oral phase** is voluntary: the tongue propels the prepared bolus posteriorly. The pharyngeal and esophageal phases are predominantly reflexive.',
    'Bolus stimulation of the oropharynx activates a medullary swallowing program through CN V, IX, and X afferents; motor output coordinates tongue, pharynx, larynx, and upper esophageal sphincter.',
    'Airway protection combines soft-palate elevation, vocal-fold closure, laryngeal elevation, epiglottic deflection, brief apnea, and rapid pharyngeal clearance.',
  ],
  chainTitle: 'A voluntary oral push triggers a patterned pharyngeal reflex',
  steps: [
    { label: 'Tongue propels bolus into oropharynx' },
    { label: 'Medullary swallowing center activates' },
    { label: 'Nasopharynx and laryngeal inlet close', emphasis: 'key' },
    { label: 'Pharynx contracts as UES relaxes' },
  ],
  examFindings: [
    { sign: 'Coughing immediately after swallowing', mechanism: 'Oropharyngeal transfer or airway protection is impaired', significance: 'key' },
    { sign: 'Nasal regurgitation', mechanism: 'Incomplete soft-palate closure during pharyngeal phase', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Videofluoroscopic swallow study', meaning: 'Shows bolus transit, penetration, aspiration, and response to maneuvers' },
    { clue: 'Bedside cranial nerve and swallow assessment', meaning: 'Localizes oral/pharyngeal weakness and screens aspiration risk' },
  ],
  treatment: [
    { logic: 'Protect the airway while restoring safe bolus transfer', detail: 'Use posture, texture, pacing, and targeted swallowing therapy based on the affected phase.' },
  ],
  mnemonic: { hook: 'Oral is optional; pharyngeal is programmed', expansion: ['Close the nose', 'Close the airway', 'Open the UES'] },
  trap: {
    questionCategory: 'Dysphagia localization',
    wrongInstinct: 'Coughing at swallow onset indicates distal esophageal disease',
    rightAnswer: 'Immediate coughing points to oropharyngeal dysphagia and aspiration',
    why: 'Esophageal dysphagia usually feels like food sticking after the swallow is initiated.',
  },
  quiz: {
    stem: 'Which phase of swallowing is primarily voluntary?',
    options: ['Oral phase', 'Pharyngeal phase', 'Primary esophageal phase', 'Secondary esophageal phase'],
    answer: 0,
    explanation: 'Voluntary tongue propulsion initiates the oral phase; subsequent phases are mainly reflex coordinated.',
  },
});

export const esophagealPeristalsisSphincters = hgb1Lecture({
  id: 'esophageal-peristalsis-sphincters',
  title: 'Esophageal Peristalsis, UES & LES',
  source: l4,
  tags: [
    { kind: 'mechanism', label: 'Primary and secondary peristalsis' },
    { kind: 'exam', label: 'Achalasia versus reflux' },
  ],
  highYield: [
    'Primary peristalsis continues the pharyngeal wave; distension-triggered secondary peristalsis clears retained material without a new swallow.',
    'The upper esophageal sphincter limits air entry and pharyngeal reflux. The lower esophageal sphincter (LES) maintains tonic pressure and relaxes ahead of the bolus.',
    'Vagal and myenteric inhibitory neurons using NO/VIP mediate distal esophageal and LES relaxation; loss of these neurons causes **achalasia**.',
    'Transient LES relaxations are a major reflux mechanism; diaphragmatic crura and the intra-abdominal esophageal segment augment the antireflux barrier.',
  ],
  chainTitle: 'Peristaltic contraction follows an advancing relaxation wave',
  steps: [
    { label: 'Swallow opens UES and initiates primary wave' },
    { label: 'Inhibitory neurons relax distal esophagus and LES', emphasis: 'key' },
    { label: 'Sequential contraction drives bolus distally' },
    { label: 'LES regains resting tone after entry' },
  ],
  examFindings: [
    { sign: 'Progressive dysphagia to solids and liquids', mechanism: 'Achalasia impairs LES relaxation and esophageal emptying', significance: 'key' },
    { sign: 'Heartburn and acid regurgitation', mechanism: 'Incompetent or transiently relaxed LES permits gastroesophageal reflux', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Elevated integrated relaxation pressure with absent peristalsis on manometry', meaning: 'Diagnostic pattern of achalasia' },
    { clue: 'Bird-beak narrowing on contrast swallow', meaning: 'Supports failure of LES relaxation' },
  ],
  treatment: [
    { logic: 'Reduce outflow resistance in achalasia', detail: 'Pneumatic dilation or myotomy disrupts LES muscle; botulinum toxin is an option when definitive therapy is unsuitable.' },
  ],
  mnemonic: { hook: 'Achalasia: absent relaxation and absent peristalsis', expansion: ['Solids and liquids from the start'] },
  trap: {
    questionCategory: 'Esophageal dysphagia',
    wrongInstinct: 'Achalasia is caused by excessive excitatory ganglion cells',
    rightAnswer: 'Achalasia reflects loss of inhibitory myenteric neurons',
    why: 'Reduced NO/VIP signaling prevents coordinated LES relaxation.',
  },
  quiz: {
    stem: 'Loss of which signaling best explains impaired LES relaxation in achalasia?',
    options: ['Gastrin and histamine', 'Nitric oxide and VIP', 'Secretin and CCK', 'Somatostatin and prostaglandin'],
    answer: 1,
    explanation: 'Inhibitory myenteric neurons release NO and VIP to relax the LES ahead of a swallow.',
  },
});
