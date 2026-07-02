import { hgb1Lecture } from './hgb1-shared';

const l1 = 'L1 — Histology of the Digestive Tract';
const l2 = 'L2 — Histology of Accessory Digestive Organs';

export const oralMucosaTongueTaste = hgb1Lecture({
  id: 'oral-mucosa-tongue-taste',
  title: 'Oral Mucosa, Tongue & Taste Buds',
  source: l1,
  tags: [
    { kind: 'mechanism', label: 'Mucosal specialization' },
    { kind: 'exam', label: 'Papillae and taste buds' },
  ],
  highYield: [
    'Oral mucosa is divided into **lining mucosa** (nonkeratinized; lips, cheeks, soft palate, floor), **masticatory mucosa** (keratinized/parakeratinized; gingiva and hard palate), and specialized dorsal tongue mucosa.',
    'The tongue core contains skeletal-muscle bundles in three planes. Filiform papillae are keratinized and mechanical; fungiform, foliate, and circumvallate papillae contain taste buds.',
    '**Circumvallate papillae** sit anterior to the sulcus terminalis and receive serous von Ebner gland ducts that flush their trenches.',
    'Taste buds contain receptor, supporting, and basal cells; apical microvilli project through a taste pore to contact dissolved tastants.',
  ],
  chainTitle: 'Mechanical stress determines epithelial specialization',
  steps: [
    { label: 'Identify oral region and friction load' },
    { label: 'Lining vs masticatory vs specialized mucosa' },
    { label: 'Papilla shape narrows tongue location/function', emphasis: 'key' },
    { label: 'Taste bud + afferent nerve transduces dissolved stimulus' },
  ],
  examFindings: [
    { sign: 'Keratinized stratified squamous epithelium on hard palate/gingiva', mechanism: 'Resists mastication-related abrasion', significance: 'key' },
    { sign: 'Numerous taste buds along a deep trench', mechanism: 'Circumvallate papilla with von Ebner serous glands', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Papilla shape and presence of taste buds', meaning: 'Distinguishes filiform from gustatory papillae' },
    { clue: 'Keratinization and submucosal attachment', meaning: 'Identifies lining versus masticatory mucosa' },
  ],
  treatment: [
    { logic: 'Use structure to infer function on histology', detail: 'Keratinization signals abrasion resistance; serous glands support taste-pore clearance.' },
  ],
  mnemonic: { hook: 'Filiform feels; the other three taste', expansion: ['Circumvallate circles a trench'] },
  trap: {
    questionCategory: 'Tongue papillae',
    wrongInstinct: 'Filiform papillae contain the greatest number of taste buds',
    rightAnswer: 'Filiform papillae are mechanical and generally lack taste buds',
    why: 'Their keratinized pointed shape grips food rather than sampling chemicals.',
  },
  quiz: {
    stem: 'Which tongue papilla is most closely associated with von Ebner serous glands?',
    options: ['Filiform', 'Circumvallate', 'Conical', 'None of the papillae'],
    answer: 1,
    explanation: 'Von Ebner glands empty into trenches around circumvallate papillae and flush tastants from taste buds.',
  },
});

export const giWallEsophagusHistology = hgb1Lecture({
  id: 'gi-wall-esophagus-histology',
  title: 'GI Wall Plan & Esophageal Histology',
  source: l1,
  tags: [
    { kind: 'mechanism', label: 'Four-layer wall organization' },
    { kind: 'exam', label: 'Esophageal muscle transition' },
  ],
  highYield: [
    'The tubular GI wall follows four layers: **mucosa** (epithelium, lamina propria, muscularis mucosae), submucosa, muscularis externa, and serosa/adventitia.',
    'Meissner submucosal plexus regulates secretion/blood flow; Auerbach myenteric plexus lies between circular and longitudinal muscle and regulates motility.',
    'The esophagus has nonkeratinized stratified squamous epithelium and submucosal mucous glands; its muscularis externa changes from skeletal → mixed → smooth muscle.',
    'Most thoracic esophagus has adventitia; the short intraperitoneal abdominal segment has serosa. The abrupt squamocolumnar junction marks transition to gastric cardia.',
  ],
  chainTitle: 'Layer and epithelium identify GI segment',
  steps: [
    { label: 'Recognize mucosa, submucosa, muscularis externa, outer covering' },
    { label: 'Locate Meissner and Auerbach plexuses' },
    { label: 'Stratified squamous + submucosal glands → esophagus', emphasis: 'key' },
    { label: 'Muscle type estimates upper, middle, or lower third' },
  ],
  examFindings: [
    { sign: 'Nonkeratinized stratified squamous epithelium', mechanism: 'Protects esophagus from food abrasion', significance: 'key' },
    { sign: 'Skeletal muscle in upper third and smooth muscle in lower third', mechanism: 'Transition from voluntary initiation to autonomic peristalsis', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Submucosal mucous glands', meaning: 'Strong clue for esophagus among GI segments' },
    { clue: 'Outer adventitia rather than serosa', meaning: 'Suggests thoracic retroperitoneal/fixed segment' },
  ],
  treatment: [
    { logic: 'Name the layer before naming pathology', detail: 'Plexus, vessel, gland, and tumor spread questions depend on exact wall location.' },
  ],
  mnemonic: { hook: 'Mucosa, Submucosa, Muscle, Serosa', expansion: ['Meissner in submucosa; Myenteric between muscles'] },
  trap: {
    questionCategory: 'GI plexus location',
    wrongInstinct: 'Auerbach plexus sits in the lamina propria',
    rightAnswer: 'Auerbach plexus lies between circular and longitudinal muscularis externa',
    why: 'Its position matches its main role in coordinated motility.',
  },
  quiz: {
    stem: 'Which structure lies between the circular and longitudinal layers of muscularis externa?',
    options: ['Meissner plexus', 'Auerbach plexus', 'Muscularis mucosae', 'Brunner glands'],
    answer: 1,
    explanation: 'The myenteric (Auerbach) plexus occupies the plane between the two muscularis externa layers.',
  },
});

export const stomachGlandsHistology = hgb1Lecture({
  id: 'stomach-glands-histology',
  title: 'Stomach Regions, Gastric Pits & Gland Cells',
  source: l1,
  tags: [
    { kind: 'mechanism', label: 'Regional gastric gland specialization' },
    { kind: 'exam', label: 'Parietal versus chief cells' },
  ],
  highYield: [
    'The stomach has simple columnar surface mucous epithelium forming gastric pits; **there are no villi**. Muscularis externa uniquely has inner oblique, middle circular, and outer longitudinal layers.',
    'Fundus/body oxyntic glands have short pits and long glands: parietal cells secrete HCl/intrinsic factor; chief cells secrete pepsinogen and gastric lipase.',
    'Cardiac and pyloric regions have predominantly mucous glands; pylorus has deeper pits and contains gastrin-secreting G cells and somatostatin D cells.',
    'Surface mucous cells produce a bicarbonate-rich protective gel; mucous neck cells differ in location and mucus character.',
  ],
  chainTitle: 'Pit-to-gland ratio and cell color identify gastric region',
  steps: [
    { label: 'Simple columnar surface + pits confirms stomach' },
    { label: 'Short pit/long gland → fundus/body' },
    { label: 'Eosinophilic parietal + basophilic chief cells', emphasis: 'key' },
    { label: 'Deep pits/mucous glands → pylorus' },
  ],
  examFindings: [
    { sign: 'Large eosinophilic cell with central nucleus', mechanism: 'Mitochondria-rich parietal cell producing acid and intrinsic factor', significance: 'key' },
    { sign: 'Basophilic basal cytoplasm with apical granules', mechanism: 'RER-rich chief cell storing pepsinogen', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Gastric pit depth relative to gland length', meaning: 'Separates fundic from pyloric mucosa' },
    { clue: 'Loss of parietal cells', meaning: 'Predicts achlorhydria and impaired vitamin B12 absorption' },
  ],
  treatment: [
    { logic: 'Connect cell identity to secretion', detail: 'Parietal-cell injury affects both acid and intrinsic factor; chief-cell secretion requires acid activation downstream.' },
  ],
  mnemonic: { hook: 'Parietal is Pink and Pumps protons', expansion: ['Chief is blue and makes zymogen'] },
  trap: {
    questionCategory: 'Stomach surface',
    wrongInstinct: 'Gastric rugae are microscopic villi',
    rightAnswer: 'Rugae are gross folds involving mucosa/submucosa; stomach mucosa has pits but no villi',
    why: 'Villi are a small-intestinal absorptive specialization.',
  },
  quiz: {
    stem: 'Which gastric cell secretes both hydrochloric acid and intrinsic factor?',
    options: ['Chief cell', 'Parietal cell', 'G cell', 'Surface mucous cell'],
    answer: 1,
    explanation: 'Parietal cells generate HCl and intrinsic factor; chief cells release pepsinogen.',
  },
});

export const intestinalAnalHistology = hgb1Lecture({
  id: 'intestinal-anal-histology',
  title: 'Small Intestine, Colon, Appendix & Anal Canal Histology',
  source: l1,
  tags: [
    { kind: 'mechanism', label: 'Regional absorptive specialization' },
    { kind: 'exam', label: 'Brunner glands and Peyer patches' },
  ],
  highYield: [
    'Small-intestinal surface area rises through plicae circulares, villi, and enterocyte microvilli. Crypts contain stem, goblet, enteroendocrine, and antimicrobial Paneth cells.',
    '**Duodenum:** submucosal Brunner glands; **jejunum:** tall villi/prominent plicae without Brunner glands or large Peyer patches; **ileum:** shorter villi and aggregated Peyer patches.',
    'Colon has no villi, abundant straight crypts, many goblet cells, and taeniae coli. Appendix resembles colon but has a narrow irregular lumen and prominent circumferential lymphoid tissue.',
    'Anal canal transitions from colorectal simple columnar to stratified squamous epithelium across the pectinate region; internal sphincter is smooth muscle and external sphincter skeletal.',
  ],
  chainTitle: 'Mucosal architecture localizes the intestinal segment',
  steps: [
    { label: 'Villi present → small intestine; absent → colon/appendix' },
    { label: 'Brunner glands → duodenum' },
    { label: 'Peyer patches → ileum', emphasis: 'key' },
    { label: 'Squamous transition + sphincters → anal canal' },
  ],
  examFindings: [
    { sign: 'Submucosal mucous glands', mechanism: 'Duodenal Brunner glands neutralize gastric acid', significance: 'key' },
    { sign: 'Numerous lymphoid follicles around a small lumen', mechanism: 'Appendix-associated mucosal immunity', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Villus height, plicae, glands, and lymphoid aggregates', meaning: 'Distinguishes duodenum, jejunum, and ileum' },
    { clue: 'Crypt-rich mucosa without villi', meaning: 'Identifies large intestine' },
  ],
  treatment: [
    { logic: 'Use a feature combination, not one cell type', detail: 'Goblet cells occur throughout intestine; architecture and submucosal structures provide the segment diagnosis.' },
  ],
  mnemonic: { hook: 'D has Duodenal glands; I has Immune Peyer patches; colon has Crypts only', expansion: ['Jejunum is the clean middle'] },
  trap: {
    questionCategory: 'Paneth-cell location',
    wrongInstinct: 'Paneth cells line villus tips',
    rightAnswer: 'Paneth cells sit at crypt bases and release antimicrobial products',
    why: 'Their granules protect the stem-cell niche near the bottom of crypts.',
  },
  quiz: {
    stem: 'Which finding most strongly identifies ileum?',
    options: ['Brunner glands', 'Aggregated Peyer patches', 'Gastric pits', 'Submucosal esophageal glands'],
    answer: 1,
    explanation: 'Large aggregated lymphoid nodules (Peyer patches) are characteristic of ileum.',
  },
});

export const salivaryGlandHistology = hgb1Lecture({
  id: 'salivary-gland-histology',
  title: 'Salivary Acini, Ducts & Major Glands',
  source: l2,
  tags: [
    { kind: 'mechanism', label: 'Acinar secretion and duct modification' },
    { kind: 'exam', label: 'Parotid vs submandibular vs sublingual' },
  ],
  highYield: [
    'Serous acini are dark, round, enzyme-rich units with small lumina; mucous tubules are pale with flattened basal nuclei. Myoepithelial cells help expel secretion.',
    'Duct sequence: intercalated (low cuboidal) → striated (columnar with basal mitochondrial infoldings) → excretory ducts.',
    '**Parotid** is almost entirely serous and commonly contains adipocytes; **submandibular** is mixed but serous-predominant; **sublingual** is mixed but mucous-predominant.',
    'Striated ducts reabsorb NaCl and secrete K+/HCO3−, making final saliva hypotonic; they are well developed in parotid/submandibular and sparse in sublingual gland.',
  ],
  chainTitle: 'Acinus makes primary fluid; ducts modify it',
  steps: [
    { label: 'Serous or mucous secretory end piece' },
    { label: 'Myoepithelial contraction moves secretion' },
    { label: 'Intercalated → striated → excretory duct', emphasis: 'key' },
    { label: 'Ion exchange produces hypotonic final saliva' },
  ],
  examFindings: [
    { sign: 'Pure serous acini with abundant adipose', mechanism: 'Parotid-gland histology', significance: 'key' },
    { sign: 'Pale mucous units with serous demilunes', mechanism: 'Mixed salivary gland, especially sublingual', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Acinar composition and striated-duct abundance', meaning: 'Identifies major salivary gland' },
    { clue: 'Basal striations in duct cells', meaning: 'Mitochondria and membrane infoldings for active ion transport' },
  ],
  treatment: [
    { logic: 'Identify gland before interpreting a lesion', detail: 'Normal adipose in parotid and mucous predominance in sublingual gland prevent false calls.' },
  ],
  mnemonic: { hook: 'Parotid pure serous; Submandibular mostly serous; Sublingual mostly mucous', expansion: ['P-S-S: Pure, Serous, Slime'] },
  trap: {
    questionCategory: 'Salivary duct function',
    wrongInstinct: 'Striated ducts secrete digestive enzymes',
    rightAnswer: 'Acini produce enzymes; striated ducts chiefly modify electrolyte composition',
    why: 'Basal mitochondrial striations reflect active ion transport.',
  },
  quiz: {
    stem: 'Which major salivary gland is almost entirely serous and often contains adipocytes?',
    options: ['Sublingual', 'Parotid', 'Submandibular', 'Minor palatal gland'],
    answer: 1,
    explanation: 'Parotid is a pure serous gland with conspicuous intercalated/striated ducts and increasing adipose with age.',
  },
});

export const liverLobuleSinusoid = hgb1Lecture({
  id: 'liver-lobule-sinusoid',
  title: 'Liver Lobules, Sinusoids & Resident Cells',
  source: l2,
  tags: [
    { kind: 'mechanism', label: 'Opposing blood and bile flow' },
    { kind: 'exam', label: 'Portal triad and central vein' },
  ],
  highYield: [
    'The classic hepatic lobule is centered on a central vein with portal triads at corners; hepatocyte plates and sinusoids radiate between them.',
    'Portal-vein and hepatic-artery blood mixes in sinusoids and flows **toward the central vein**; bile flows in canaliculi in the opposite direction toward portal bile ducts.',
    'Fenestrated sinusoidal endothelium faces the space of Disse. Kupffer macrophages occupy sinusoids; stellate (Ito) cells in Disse store vitamin A and become collagen-producing myofibroblasts in fibrosis.',
    'Hepatocytes have sinusoidal basolateral domains for exchange and apical domains that form bile canaliculi through tight junctions.',
  ],
  chainTitle: 'Portal blood traverses hepatocyte plates while bile exits the other way',
  steps: [
    { label: 'Portal vein + hepatic artery enter at triad' },
    { label: 'Mixed blood crosses fenestrated sinusoids' },
    { label: 'Exchange occurs across space of Disse', emphasis: 'key' },
    { label: 'Blood drains central; bile drains portal' },
  ],
  examFindings: [
    { sign: 'Macrophage within sinusoidal lumen', mechanism: 'Kupffer cell clears microbes and debris from portal blood', significance: 'supportive' },
    { sign: 'Perisinusoidal collagen in chronic injury', mechanism: 'Activated stellate cells drive hepatic fibrosis', significance: 'key' },
  ],
  investigations: [
    { clue: 'Central vein versus portal triad orientation', meaning: 'Determines direction of blood and bile flow' },
    { clue: 'Reticulin/hepatocyte plate architecture', meaning: 'Assesses lobular framework and distortion' },
  ],
  treatment: [
    { logic: 'Trace flow before assigning injury zone', detail: 'Oxygen, nutrients, and toxins arrive from portal areas and change along the sinusoid.' },
  ],
  mnemonic: { hook: 'Blood to center; bile to border', expansion: ['Kupffer in sinusoid, Ito in Disse'] },
  trap: {
    questionCategory: 'Bile-flow direction',
    wrongInstinct: 'Bile follows blood toward the central vein',
    rightAnswer: 'Bile flows through canaliculi toward portal bile ductules, opposite sinusoidal blood',
    why: 'Hepatocyte apical canaliculi connect to the canals of Hering at the lobular periphery.',
  },
  quiz: {
    stem: 'Which liver cell is the principal source of collagen during hepatic fibrosis?',
    options: ['Kupffer cell', 'Activated stellate cell', 'Cholangiocyte', 'Sinusoidal endothelial cell'],
    answer: 1,
    explanation: 'Activated hepatic stellate cells transform into myofibroblast-like collagen-producing cells.',
  },
});

export const liverAcinusGallbladder = hgb1Lecture({
  id: 'liver-acinus-gallbladder',
  title: 'Liver Acinus, Biliary Tree & Gallbladder',
  source: l2,
  tags: [
    { kind: 'mechanism', label: 'Acinar zonation and bile drainage' },
    { kind: 'exam', label: 'Zone 1 vs zone 3' },
  ],
  highYield: [
    'The hepatic acinus organizes parenchyma by perfusion: **zone 1 periportal** receives the most oxygen/nutrients; **zone 3 centrilobular** receives the least and has high CYP activity.',
    'Zone 3 is vulnerable to ischemia and many CYP-activated toxins; zone 1 is exposed first to portal toxins and supports oxidative metabolism/gluconeogenesis.',
    'Canaliculi → canals of Hering → interlobular bile ducts → hepatic ducts. Cholangiocytes line ducts and modify bile.',
    'Gallbladder has tall simple columnar absorptive epithelium with folds, irregular smooth muscle, and no muscularis mucosae or submucosa; Rokitansky-Aschoff sinuses are mucosal outpouchings into muscle.',
  ],
  chainTitle: 'Perfusion creates metabolic zones; canaliculi create the biliary tree',
  steps: [
    { label: 'Portal blood reaches zone 1 first' },
    { label: 'Oxygen falls toward zone 3', emphasis: 'key' },
    { label: 'Bile enters canaliculi → ductules → ducts' },
    { label: 'Gallbladder concentrates and stores bile' },
  ],
  examFindings: [
    { sign: 'Centrilobular necrosis after shock', mechanism: 'Zone 3 has the lowest oxygen tension', significance: 'key' },
    { sign: 'Folded mucosa directly over irregular muscle', mechanism: 'Gallbladder lacks submucosa and muscularis mucosae', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Injury centered near central vein vs portal tract', meaning: 'Localizes acinar zone and likely mechanism' },
    { clue: 'Rokitansky-Aschoff sinuses', meaning: 'Mucosal herniation associated with chronic gallbladder disease' },
  ],
  treatment: [
    { logic: 'Use zonation to predict toxic and ischemic injury', detail: 'Acetaminophen and hypoxia classically emphasize zone 3.' },
  ],
  mnemonic: { hook: 'Zone 1 first blood; Zone 3 first to die in low oxygen', expansion: ['Bile flows toward portal ducts'] },
  trap: {
    questionCategory: 'Gallbladder wall',
    wrongInstinct: 'Gallbladder has the standard four GI wall layers',
    rightAnswer: 'Gallbladder lacks a muscularis mucosae and submucosa',
    why: 'Its folded mucosa lies directly on an irregular smooth-muscle layer.',
  },
  quiz: {
    stem: 'Which hepatic acinar zone is most vulnerable to ischemic injury?',
    options: ['Zone 1 periportal', 'Zone 2', 'Zone 3 centrilobular', 'All zones receive identical oxygen'],
    answer: 2,
    explanation: 'Zone 3 is farthest from incoming portal/arterial blood and has the lowest oxygen tension.',
  },
});

export const pancreasHistology = hgb1Lecture({
  id: 'pancreas-histology',
  title: 'Exocrine & Endocrine Pancreas Histology',
  source: l2,
  tags: [
    { kind: 'mechanism', label: 'Acinar enzymes and islet hormones' },
    { kind: 'exam', label: 'Centroacinar cells' },
  ],
  highYield: [
    'Exocrine pancreas is a compound serous acinar gland: acinar cells show basophilic basal RER and apical zymogen granules.',
    '**Centroacinar cells** mark the beginning of intercalated ducts within an acinus. Pancreas has no striated ducts and no myoepithelial cells.',
    'Duct/centroacinar cells secrete bicarbonate-rich fluid; acinar cells secrete digestive enzymes and zymogens.',
    'Pale, highly vascular islets of Langerhans contain beta (insulin), alpha (glucagon), delta (somatostatin), and PP cells; islets are more numerous toward the tail.',
  ],
  chainTitle: 'Pale endocrine islands sit within enzyme-rich exocrine tissue',
  steps: [
    { label: 'Acinar RER synthesizes digestive proteins' },
    { label: 'Apical zymogen granules release to lumen' },
    { label: 'Centroacinar/intercalated ducts add bicarbonate', emphasis: 'key' },
    { label: 'Islet hormones enter fenestrated capillaries' },
  ],
  examFindings: [
    { sign: 'Pale cell cluster among dark serous acini', mechanism: 'Islet of Langerhans within exocrine pancreas', significance: 'key' },
    { sign: 'Pale cell in center of an acinus', mechanism: 'Centroacinar cell beginning the duct system', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Centroacinar cells and absent striated ducts', meaning: 'Distinguishes pancreas from parotid gland' },
    { clue: 'Islet distribution and vascularity', meaning: 'Identifies endocrine component' },
  ],
  treatment: [
    { logic: 'Separate acinar from duct failure', detail: 'Acinar loss reduces enzymes; duct/CFTR dysfunction reduces bicarbonate and flow.' },
  ],
  mnemonic: { hook: 'Pancreas puts a duct cell in the acinus center', expansion: ['Centroacinar = pancreas clue'] },
  trap: {
    questionCategory: 'Pancreas versus parotid',
    wrongInstinct: 'Both serous glands have striated ducts',
    rightAnswer: 'Parotid has striated ducts; pancreas instead has centroacinar cells and islets',
    why: 'These are the high-yield distinguishing structures.',
  },
  quiz: {
    stem: 'Which feature most strongly distinguishes exocrine pancreas from parotid gland?',
    options: ['Serous acini', 'Zymogen granules', 'Centroacinar cells', 'Intercalated ducts'],
    answer: 2,
    explanation: 'Centroacinar cells are characteristic of pancreas; both organs otherwise have serous secretory units.',
  },
});
