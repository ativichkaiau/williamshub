import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpOralOesophagealPathology: Lecture = {
  id: 'rbp-oral-oesophageal-pathology',
  title: 'Oral Cavity & Oesophageal Pathology',
  system: 'gi',
  source: 'Ch 14 — Oral Cavity and Gastrointestinal Tract',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 14 Oral Cavity and Gastrointestinal Tract' },
    { kind: 'mechanism', label: 'Metaplasia, dysplasia and the Barrett sequence' },
    { kind: 'disease', label: 'Oesophageal carcinoma: squamous versus adenocarcinoma' },
  ],

  highYield: [
    '**In the mouth, colour reports epithelial thickness, and thickness reports maturation — which is why the red patch is the dangerous one.** **Leukoplakia** is defined by exclusion: a white plaque that cannot be scraped off and cannot be given any other diagnosis. It is white because the lesion is **hyperkeratotic** — an extra layer of keratin scatters light. Roughly **5–25%** show dysplasia on biopsy, and about **5–6%** eventually become invasive. **Erythroplakia** is a red velvety patch, and it is red because the epithelium is **atrophic and disordered**, too thin and too immature to keratinise, so the submucosal capillaries show through. More than **50%** of erythroplakias already show severe dysplasia, carcinoma in situ or frank invasion. The intuitive ranking is exactly inverted: the thick lesion is the safer one. Oral **squamous cell carcinoma** then favours the **floor of mouth, ventral and lateral tongue and lower lip**, where a pool of saliva holds tobacco and alcohol carcinogens against thin non-keratinised mucosa. Tobacco and alcohol are **multiplicative**, not additive. The oropharyngeal subset — **tonsil and base of tongue** — is driven instead by **HPV-16**, is **p16 positive**, is basaloid and non-keratinising, and carries a distinctly better prognosis.',
    '**Reflux injures the oesophagus because squamous epithelium was never built for acid, and the biopsy shows the repair effort before it shows the ulcer.** The distal squamous mucosa has **no mucus layer, no bicarbonate secretion and no surface apical acid barrier** — the defences that protect gastric epithelium are absent by design. Acid and, crucially, **refluxed bile salts** strip surface cells, so the basal layer accelerates: **basal zone hyperplasia occupying more than 20% of epithelial thickness**, **elongation of lamina propria papillae into the upper third**, and scattered **intraepithelial eosinophils** followed by neutrophils. Those three together are the histological definition of reflux oesophagitis, and they appear in biopsies that look endoscopically normal. The mimic worth separating is **eosinophilic oesophagitis**: **15 or more eosinophils per high-power field**, **superficial layering and eosinophilic microabscesses**, concentric **rings and linear furrows** on endoscopy, and involvement of the **proximal as well as distal** oesophagus. Reflux is a distal gradient disease; an eosinophil-rich proximal biopsy is not reflux. Clinical endoscopic patterns are developed in [[esophageal-disorders-pathology]].',
    '**Barrett oesophagus is metaplasia, and metaplasia is a reprogrammed stem cell making a rational trade — acid resistance bought with replication risk.** Chronic acid and bile exposure drives oesophageal progenitor cells to switch their differentiation programme through **CDX2**, and stratified squamous epithelium is replaced by **intestinalised columnar epithelium containing GOBLET CELLS**. The new epithelium is genuinely better adapted: it secretes mucin, it tolerates low pH, and symptoms often improve. But it is a **proliferative** epithelium sitting in a field of unresolved inflammation, and every division is an opportunity for a replication error that squamous quiescence would never have produced. That is the whole lesson of metaplasia as an adaptation ([[rbp-necrosis-apoptosis-adaptations]]): the adaptation is protective at the tissue level and pro-neoplastic at the clonal level. Diagnosis needs **both** parts — **salmon-coloured columnar mucosa extending in tongues above the gastro-oesophageal junction** at endoscopy **and** goblet cells on biopsy. Segments of **3 cm or more** are long-segment, under 3 cm short-segment. It is present in about **5–10%** of patients with chronic reflux, and non-dysplastic Barrett progresses to adenocarcinoma at roughly **0.2–0.5% per year**.',
    '**Surveillance intervals are not arbitrary — they are read straight off the sequence, because you only have to look faster than the disease moves.** The route is fixed: **metaplasia, then low-grade dysplasia, then high-grade dysplasia, then intramucosal carcinoma, then submucosal invasion**, with **TP53** and **CDKN2A** loss marking the clonal expansions. Each step is detectable and each step before invasion is curable endoscopically, so the interval simply has to be shorter than the transit time. Non-dysplastic Barrett moves at well under **1% per year**, so **3–5 yearly** endoscopy suffices. **Low-grade dysplasia** progresses at roughly **10% per year**, so the interval collapses to **6–12 months** or the segment is ablated. **High-grade dysplasia** reaches carcinoma in about **20–25% within 5 years**, so it is eradicated rather than watched. The other half of the logic is that **dysplasia in Barrett is usually FLAT and endoscopically invisible**, which is why sampling is systematic — **four-quadrant biopsies every 1–2 cm** of the segment — rather than targeted at whatever looks abnormal. And the ceiling on delay is anatomical: the oesophageal **lamina propria contains lymphatics**, unlike the rest of the gut tube, so even **intramucosal** carcinoma can metastasise, at around **1–2%** for T1a rising to **20% or more** once the submucosa is breached.',
    '**One discriminator settles almost every oesophageal cancer question: squamous cell carcinoma lives in the UPPER and MIDDLE thirds and follows smoking and alcohol; adenocarcinoma lives in the LOWER third and follows Barrett and reflux.** Geography is not a memorised fact here — it is the mechanism restated. Squamous carcinoma arises from squamous epithelium, which lines the entire oesophagus, and is driven by **swallowed** carcinogens: tobacco, alcohol (again multiplicative), **N-nitroso compounds**, very hot beverages, betel quid, and the stasis states that prolong mucosal contact — **achalasia** (about **5%** lifetime risk), **Plummer-Vinson** webs, and old **lye strictures**. Adenocarcinoma cannot arise where there is no glandular epithelium, and glandular epithelium exists in the oesophagus only where reflux has made it, which is distal. Its risk factors are therefore the reflux risk factors: **Barrett**, **obesity** with raised intra-abdominal pressure, **male sex** (7 to 1), and white ethnicity — and notably the gastric side of the story ([[rbp-gastric-pathology-ulceration]]) runs the other way, since *Helicobacter pylori* colonisation lowers acid output and is mildly **protective** against distal adenocarcinoma. In the West adenocarcinoma now outnumbers squamous carcinoma; in the high-incidence belt from Iran to northern China squamous still dominates.',
    '**Oesophageal varices bleed catastrophically because of where they sit, what pressure they carry, and who the patient is — three separate failures stacking.** Portal hypertension above a **hepatic venous pressure gradient of 10 mmHg** opens portosystemic collaterals; the oesophageal route runs **left gastric (coronary) vein into the submucosal venous plexus of the distal oesophagus and on to the azygos system**. First, **position**: these are **submucosal** veins lying directly beneath a **thin squamous mucosa** with no muscular sheath and no surrounding connective tissue to tamponade a tear — unlike gastric veins buried under thick mucosa. Second, **pressure**: they carry portal, not venous, pressure, and by Laplace the wall tension rises with both pressure and the dilated radius, so they rupture without warning and without pain. Third, **the patient**: the same cirrhosis that raised the portal pressure has produced **thrombocytopenia** from hypersplenism and **coagulopathy** from failed synthesis of factors II, VII, IX and X, so the clot that should stop the bleed never forms. About **50%** of cirrhotics have varices, roughly a **third** of those bleed, and each bleed carries **15–20% six-week mortality**. The upstream liver pathology is in [[cirrhosis-fatty-liver-portal-hypertension]].',
  ],

  mechanism: {
    title: 'Reflux to oesophageal adenocarcinoma',
    steps: [
      { id: 's1', label: 'Transient lower oesophageal sphincter relaxations let acid and bile salts reach distal squamous epithelium', detail: 'Obesity and hiatus hernia raise the gradient across the sphincter; bile salts injure at neutral pH, which is why acid suppression relieves symptoms without stopping the disease.', emphasis: 'normal' },
      { id: 's2', label: 'Squamous epithelium has no mucus, no bicarbonate and no acid barrier, so surface cells are stripped', detail: 'Biopsy shows basal zone hyperplasia over 20% of thickness, papillae into the upper third and intraepithelial eosinophils before any ulcer is visible.', emphasis: 'key' },
      { id: 's3', label: 'Persistent injury reprograms the progenitor cell through CDX2 — squamous is replaced by intestinalised columnar epithelium with goblet cells', detail: 'Salmon-coloured mucosa climbs above the gastro-oesophageal junction. The metaplastic epithelium tolerates acid, so symptoms may improve as the risk rises.', emphasis: 'key' },
      { id: 's4', label: 'The new epithelium is proliferative and sits in unresolved inflammation — clones expand as TP53 and CDKN2A are lost', emphasis: 'key' },
      { id: 's5', label: 'Low-grade then high-grade dysplasia: nuclear stratification, loss of surface maturation, crowded glands, basement membrane still intact', detail: 'Flat and endoscopically invisible, which is why four-quadrant biopsies every 1 to 2 cm are taken rather than targeted samples.', emphasis: 'key' },
      { id: 's6', label: 'Invasion into lamina propria, which in the oesophagus uniquely contains lymphatics, so intramucosal carcinoma can already metastasise', detail: 'Nodal risk about 1 to 2% for T1a, rising above 20% once the submucosa is breached — the reason high-grade dysplasia is eradicated rather than watched.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Salmon-pink velvety mucosa extending in finger-like tongues above the gastro-oesophageal junction', mechanism: 'Columnar epithelium has replaced squamous, and columnar mucosa is thinner and more vascular so it looks red against the pale squamous lining', significance: 'key' },
    { sign: 'Goblet cells with acidic mucin on a biopsy taken from that salmon mucosa', mechanism: 'Intestinal differentiation driven by CDX2 — this is the cell that defines Barrett oesophagus and carries the progression risk, not the colour alone', significance: 'key' },
    { sign: 'Basal zone occupying more than one fifth of epithelial thickness with lamina propria papillae reaching the upper third', mechanism: 'Accelerated basal proliferation replacing surface cells stripped by acid and bile — the earliest histological signature of reflux, present before erosions appear', significance: 'supportive' },
    { sign: 'More than fifteen eosinophils per high-power field with superficial eosinophilic microabscesses in proximal as well as distal biopsies', mechanism: 'Type 2 immune injury rather than chemical injury; reflux is a distal gradient disease, so proximal involvement excludes it', significance: 'key' },
    { sign: 'Longitudinal mucosal tears straddling the gastro-oesophageal junction after violent retching', mechanism: 'Mallory-Weiss tears: the sphincter fails to relax against an antiperistaltic wave and the mucosa splits longitudinally. Transmural rupture of the same mechanism is Boerhaave syndrome with mediastinitis', significance: 'supportive' },
    { sign: 'Tortuous dilated submucosal veins bulging under an intact but paper-thin squamous mucosa in the distal oesophagus', mechanism: 'Portosystemic collaterals carrying portal pressure with no tissue support around them; rupture is painless and unheralded because nothing warns before the wall gives way', significance: 'key' },
  ],

  investigations: [
    { clue: 'Four-quadrant biopsies every 2 cm of a 5 cm salmon segment, with one showing crowded hyperchromatic nuclei stratified to the surface', meaning: 'High-grade dysplasia in long-segment Barrett. Systematic sampling is mandatory because Barrett dysplasia is typically flat; a targeted biopsy of the worst-looking area misses it' },
    { clue: 'Diffuse strong nuclear and cytoplasmic p16 staining in a tonsillar squamous carcinoma', meaning: 'Surrogate for transcriptionally active HPV-16, where E7 degrades RB and releases p16 from feedback suppression. It marks the better-prognosis oropharyngeal subset, distinct from tobacco-driven oral cavity carcinoma' },
    { clue: 'Barium swallow showing a smoothly tapered bird-beak narrowing with a dilated proximal body and an air-fluid level', meaning: 'Achalasia from loss of inhibitory nitric oxide and VIP myenteric neurons. The stasis is what matters pathologically: about 5% develop mid-oesophageal squamous carcinoma' },
    { clue: 'Manometry with absent peristalsis and an integrated relaxation pressure of 22 mmHg', meaning: 'Confirms failure of deglutitive sphincter relaxation. A tumour infiltrating the myenteric plexus at the junction can reproduce this exactly, so pseudoachalasia is excluded endoscopically before the diagnosis stands' },
    { clue: 'Endoscopic ultrasound showing a distal tumour breaching the muscularis mucosae into the submucosa', meaning: 'Depth, not size, sets nodal risk. Intramucosal disease can be removed endoscopically; submucosal invasion crosses into a dense lymphatic plexus and carries over 20% nodal involvement' },
    { clue: 'Hepatic venous pressure gradient of 14 mmHg', meaning: 'Varices form above 10 mmHg and bleed above 12 mmHg. The gradient is the treatable variable, which is why reducing portal pressure prevents rebleeding in a way that local therapy alone does not' },
  ],

  treatment: [
    {
      logic: 'Grade the dysplasia, then let the grade choose the interval',
      detail: 'The sequence is the protocol. **Non-dysplastic** Barrett progresses at **0.2–0.5% per year**, so endoscopy every **3–5 years** is faster than the disease. **Low-grade dysplasia** progresses at roughly **10% per year**, so the interval falls to **6–12 months** or the segment is ablated with radiofrequency energy. **High-grade dysplasia** reaches carcinoma in **20–25% over 5 years**, so it is eradicated, not observed — and because the oesophageal lamina propria carries lymphatics, waiting for visible invasion is waiting too long. Acid suppression treats the **symptom** and heals the oesophagitis but does not reverse established metaplasia, so it never substitutes for surveillance. Endoscopic mucosal resection is both staging and treatment: it delivers the **depth** that biopsy forceps cannot.',
    },
    {
      logic: 'A variceal bleed is a pressure problem wearing a bleeding-lesion disguise',
      detail: 'Local control closes the vein — **band ligation** strangles the submucosal varix and is superior to sclerotherapy because it makes no ulcer of its own. But the varix refills unless the **gradient** falls, which is why **splanchnic vasoconstriction** with terlipressin or octreotide is started before endoscopy and why **non-selective beta blockade** prevents the next bleed: blocking beta-2 leaves alpha-1 splanchnic vasoconstriction unopposed and drops portal inflow. **Antibiotic prophylaxis** is given because bacterial translocation in cirrhosis both triggers and follows the bleed and independently reduces mortality. Proton pump inhibitors do nothing here — the lesion is a ruptured vein under portal pressure, not an acid-damaged mucosa.',
    },
  ],

  mnemonics: [
    {
      hook: 'Squamous is a tube-wide cell; glandular is a reflux-made cell',
      expansion: [
        'Squamous epithelium lines the whole oesophagus, so squamous carcinoma can sit anywhere — but upper and middle thirds see swallowed carcinogens longest',
        'Smoking, alcohol, nitrosamines, hot drinks, achalasia, Plummer-Vinson webs, lye stricture — all deliver or prolong contact',
        'Glandular epithelium exists in the oesophagus only where reflux built it, and reflux is distal',
        'So adenocarcinoma is lower third: Barrett, reflux, obesity, male, white',
        'Test it backwards — a mid-oesophageal adenocarcinoma should make you look for a Barrett segment or a gastric primary',
      ],
    },
    {
      hook: 'Barrett needs a colour and a cell',
      expansion: [
        'Colour: salmon-pink columnar mucosa in tongues above the gastro-oesophageal junction, seen by the endoscopist',
        'Cell: goblet cells on the biopsy, seen by the pathologist',
        'One without the other is not a diagnosis — colour alone can be a hiatus hernia or cardia mucosa',
        'Then a number: 3 cm splits long-segment from short-segment',
        'Then a grade: no dysplasia, low grade, high grade — the grade sets the interval',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What must be present before columnar-lined oesophagus is called Barrett',
      wrongInstinct: 'Salmon-coloured columnar mucosa above the junction at endoscopy is the diagnosis',
      rightAnswer: 'Endoscopic columnar mucosa PLUS goblet cells on biopsy — intestinal metaplasia is the lesion that carries the cancer risk',
      why: 'Rule: colour aims the forceps, goblet cells make the diagnosis. This is the one place to name a genuine disagreement — the classical Robbins and North American definitions require goblet cells, while the British Society of Gastroenterology accepts columnar-lined oesophagus without them because sampling error can miss goblet cells in a short segment. Answer with goblet cells unless the question explicitly invokes the British criteria',
    },
    {
      questionCategory: 'Ranking an oral white patch against an oral red patch',
      wrongInstinct: 'The thick white plaque looks more advanced, so leukoplakia is the more urgent lesion',
      rightAnswer: 'Erythroplakia is far more dangerous: over 50% already show severe dysplasia, carcinoma in situ or invasion, against roughly 5 to 25% dysplasia in leukoplakia',
      why: 'Rule: the redness IS the atrophy. White is excess keratin scattering light; red is an epithelium too thin and too disordered to keratinise, letting submucosal vessels show through. Less maturation means more dysplasia, so thinner is worse',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 54-year-old man with 12 years of heartburn has endoscopy showing 4 cm of salmon-coloured mucosa extending above the gastro-oesophageal junction. Which single histological finding on the biopsy establishes the diagnosis and explains the cancer risk?',
      options: [
        { id: 'a', text: 'Basal zone hyperplasia with elongated lamina propria papillae' },
        { id: 'b', text: 'Intestinalised columnar epithelium containing goblet cells' },
        { id: 'c', text: 'More than fifteen intraepithelial eosinophils per high-power field' },
        { id: 'd', text: 'Gastric cardia-type mucous glands without goblet cells' },
      ],
      answerId: 'b',
      explanation: 'Goblet cells mark intestinal metaplasia, the CDX2-driven reprogramming that defines Barrett oesophagus. Basal hyperplasia with papillary elongation is reflux oesophagitis, the injury that precedes metaplasia. Dense eosinophils point to eosinophilic oesophagitis, a different disease. Cardia-type mucosa without goblet cells does not meet the classical definition. The risk follows the metaplastic cell because it is a proliferative epithelium sitting in chronic inflammation, which is how metaplasia creates the soil for dysplasia.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Two men present with dysphagia. The first has a mass 22 cm from the incisors and a 40 pack-year smoking and heavy alcohol history. The second has a mass at the gastro-oesophageal junction, a BMI of 34 and long-standing reflux. What is the single best explanation for their different histology?',
      options: [
        { id: 'a', text: 'Tumours of the upper oesophagus are simply better differentiated than those of the lower' },
        { id: 'b', text: 'Adenocarcinoma requires glandular epithelium, which exists in the oesophagus only where reflux has created Barrett metaplasia, and that is distal; squamous carcinoma arises from the native squamous lining exposed to swallowed carcinogens' },
        { id: 'c', text: 'The first tumour spread downward from the pharynx and the second upward from the stomach' },
        { id: 'd', text: 'Alcohol causes squamous carcinoma and obesity causes adenocarcinoma by direct mutagenesis of different genes' },
      ],
      answerId: 'b',
      explanation: 'The geography is the mechanism restated. Squamous epithelium lines the whole oesophagus, so squamous carcinoma follows carcinogen contact time and clusters in the upper and middle thirds with tobacco, alcohol, nitrosamines, hot beverages and stasis states such as achalasia. Adenocarcinoma cannot arise without glandular epithelium, and in the oesophagus that epithelium is made by reflux, so it is confined to the lower third and gastro-oesophageal junction with Barrett, obesity and male sex as its risk factors.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A 61-year-old with alcoholic cirrhosis vomits 1.5 litres of fresh blood without warning or pain. Endoscopy shows bleeding distal oesophageal varices. Which combination best explains why this bleed is so much more lethal than a bleeding oesophageal erosion?',
      options: [
        { id: 'a', text: 'Varices are arterial and therefore bleed at systemic pressure' },
        { id: 'b', text: 'Submucosal veins sit under thin unsupported squamous mucosa, carry portal pressure with wall tension rising as the radius dilates, and the same cirrhosis has produced thrombocytopenia and clotting factor deficiency' },
        { id: 'c', text: 'Acid digestion of the varix wall accelerates the rate of blood loss' },
        { id: 'd', text: 'Varices are located above the carina where tamponade is mechanically impossible' },
      ],
      answerId: 'b',
      explanation: 'Three failures stack. Position: submucosal veins lie beneath thin squamous mucosa with no surrounding tissue to tamponade a tear. Pressure: they transmit portal pressure, and by Laplace the tension in the wall rises with both pressure and the dilated radius, so rupture is sudden and painless. Patient: hypersplenism causes thrombocytopenia and hepatic synthetic failure lowers factors II, VII, IX and X, so haemostasis fails at the moment it is needed. Varices are venous, not arterial, and acid plays no role, which is why acid suppression does not help.',
      tests: 'investigation',
    },
  ],
};

export default rbpOralOesophagealPathology;
