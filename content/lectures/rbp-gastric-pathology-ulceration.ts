import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpGastricPathologyUlceration: Lecture = {
  id: 'rbp-gastric-pathology-ulceration',
  title: 'Gastritis, Peptic Ulceration & Gastric Neoplasia',
  system: 'gi',
  source: 'Ch 14 — Oral Cavity and Gastrointestinal Tract',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 14 Oral Cavity and Gastrointestinal Tract' },
    { kind: 'mechanism', label: 'Antrum versus body: the split that predicts everything' },
    { kind: 'disease', label: 'Intestinal and diffuse gastric carcinoma' },
  ],

  highYield: [
    '**Acute gastritis is a chemical burn with neutrophils; chronic gastritis is an immune infiltrate that remodels the gland.** Acute gastritis follows anything that strips the mucus-bicarbonate layer or cuts mucosal blood flow — **NSAIDs**, alcohol, bile reflux, uraemia, shock. Histologically it is **lamina propria oedema with neutrophils**, and neutrophils above the basement membrane always mean **active** injury. Erosion stops at the muscularis mucosae; once it goes deeper it is an ulcer. Two named stress patterns: **Curling ulcers** in the proximal duodenum after **burns**, driven by hypovolaemia and splanchnic vasoconstriction, and **Cushing ulcers** in stomach, duodenum or oesophagus after **intracranial** disease, driven by vagal overdrive and hypergastrinaemia — and Cushing ulcers are the deeper, more perforation-prone of the two. Chronic gastritis is different in kind: the infiltrate is **lymphocytes and plasma cells**, and the endpoint is **atrophy with intestinal metaplasia**. Its clinical spectrum is in [[gastritis-and-gastropathy]].',
    '**One anatomical question — antrum or body — separates the two chronic gastritides and then predicts everything downstream.** *Helicobacter pylori* gastritis is **ANTRAL**. The organism sits in the surface mucus, uses **urease** to generate an ammonia cloud, and injures the epithelium with **CagA** and **VacA**, but it spares the acid-secreting mucosa. The antral inflammation destroys **D cells**, so **somatostatin falls**, **G cells lose their brake**, gastrin rises, and the intact body parietal cells obey — **acid output goes UP**. High acid delivered into the duodenum causes **gastric metaplasia** there, which *H. pylori* then colonises, and the result is a **DUODENAL ulcer**. Autoimmune gastritis is the mirror image: it is in the **BODY and FUNDUS**, where **CD4 T cells against the H-plus/K-plus ATPase** destroy **parietal cells**, so **acid output goes DOWN to achlorhydria**. Losing the parietal cell costs two products, and both matter: **acid** (hence hypochlorhydria, bacterial overgrowth, and loss of iron reduction) and **intrinsic factor** (hence **B12 malabsorption** and **pernicious anaemia**, with megaloblastic marrow and subacute combined degeneration). Achlorhydria removes the feedback on G cells, so **gastrin rises to very high levels**, driving **ECL cell hyperplasia** and eventually **type 1 gastric carcinoid** tumours.',
    '**Peptic ulceration is never about acid alone — it is a breach in the balance between aggression and defence, and the two great causes act at opposite ends of that balance.** Defence is a layered system: an adherent **mucus** gel, **bicarbonate** secreted beneath it holding the surface pH near 7 against a luminal pH of 2, an intact **epithelial tight-junction barrier**, brisk **mucosal blood flow** to buffer back-diffused protons, and **prostaglandin E2** maintaining all of it. Aggression is **acid and pepsin**. *H. pylori* attacks by **raising aggression** — it increases acid output through the somatostatin-gastrin route above — which is why it causes duodenal ulcers roughly four times more often than gastric ones. **NSAIDs** attack by **removing defence**: they inhibit **COX-1**, so mucosal prostaglandin falls, mucus and bicarbonate thin out and blood flow drops, while acid output is unchanged or even lower. That asymmetry is the exam point. Together the two explain over **90%** of ulcers, and **Zollinger-Ellison syndrome** is the rare third route — a gastrinoma raising aggression so far that ulcers appear in **unusual sites such as the distal duodenum and jejunum**, are **multiple**, and recur after standard therapy. Clinical management sits in [[peptic-ulcer-disease]].',
    '**At endoscopy, benign and malignant gastric ulcers separate on shape, edge and base — and the rule is that you biopsy the gastric ulcer anyway.** A **benign** peptic ulcer is **round to oval, small (usually under 2 cm), sharply punched out with perpendicular walls**, has a **smooth clean base** of grey fibrin over granulation tissue, and — the single most useful sign — has **mucosal folds radiating right up to the ulcer edge** because the surrounding mucosa is normal and merely tethered by scar. A **malignant** ulcer is **irregular, larger, with heaped-up everted rolled edges**, a **necrotic shaggy base**, and folds that are **clubbed, fused or stop short** of the rim because tumour has replaced them. Those signs are useful but not decisive: a proportion of malignant ulcers look entirely benign, and ulcerated carcinomas can even **heal transiently** on acid suppression, which is the trap. So the rule is asymmetric by anatomy: **every gastric ulcer is biopsied from the rim, multiple times, and re-scoped to document healing**, whereas **duodenal ulcers are essentially never malignant and are not routinely biopsied** — primary duodenal carcinoma is vanishingly rare.',
    '**Gastric adenocarcinoma is two diseases sharing a name, and the Lauren split does the work.** The **INTESTINAL** type is **bulky, ulcerated, exophytic**, made of **cohesive gland-forming cells**, arises on a background of chronic *Helicobacter* gastritis with **atrophy and intestinal metaplasia**, favours the **antrum and lesser curve**, rises with age, affects men about twice as often, and is the type that has fallen steeply in incidence as *H. pylori* prevalence fell. It has a **clear precursor**, so it is the type screening finds: this is why Japan and Korea screen endoscopically and detect early gastric cancer confined to mucosa and submucosa with **over 90% five-year survival**. The **DIFFUSE** type is the opposite on every axis: **discohesive signet-ring cells** with mucin vacuoles pushing the nucleus to the rim, infiltrating the wall singly rather than forming glands, producing a **desmoplastic rigid leather-bottle stomach — linitis plastica** with flattened rugae and a non-distensible lumen. Its mechanism is **loss of E-cadherin** through **CDH1** mutation or promoter methylation, and cells that cannot adhere cannot form glands — the morphology follows directly. It has **no identified precursor lesion**, occurs at younger ages, shows **no sex difference**, its incidence has **not** fallen, and germline **CDH1** mutation gives hereditary diffuse gastric cancer with a lifetime risk high enough to justify prophylactic gastrectomy. Tumour biology detail is in [[gastric-carcinoma-lymphoma]].',
    '**Gastric MALT lymphoma is the tumour that can be cured with antibiotics, and that fact is the whole point.** Normal gastric mucosa has **no organised lymphoid tissue**. *H. pylori* infection recruits it, and the resulting mucosa-associated lymphoid tissue is a chronically stimulated germinal-centre environment in which a **marginal zone B cell** clone expands. Critically, that clone initially remains **antigen-dependent**: it is driven by *H. pylori*-specific T-cell help, so removing the antigen removes the growth signal. **Eradication therapy alone produces remission in roughly 70–80%** of early, superficial, *H. pylori*-positive gastric MALT lymphomas — a malignant tumour regressing on a two-week course of antibiotics. The limit is genetic and is worth knowing precisely: once the clone acquires the **t(11;18)(q21;q21) API2-MALT1** translocation it constitutively activates **NF-kappaB**, becomes antigen-INDEPENDENT, and **will not respond to eradication**, which is why that translocation is tested for before relying on antibiotics. Deeper invasion, nodal involvement and transformation to diffuse large B-cell lymphoma likewise take it out of reach. The same stomach also hosts **GIST**, which is not epithelial at all: it arises from the **interstitial cells of Cajal**, is **KIT (CD117) positive**, and is driven by activating **KIT** or **PDGFRA** mutations.',
  ],

  mechanism: {
    title: 'Helicobacter colonisation to gastric carcinoma',
    steps: [
      { id: 's1', label: 'Urease-producing Helicobacter colonises the antral surface mucus and neutralises its own microenvironment', detail: 'Ammonia from urea shields the organism; flagellar motility keeps it in the mucus gel rather than the acid lumen.', emphasis: 'normal' },
      { id: 's2', label: 'CagA injected by a type IV secretion system and VacA pore formation injure epithelium; neutrophils and then lymphoid aggregates accumulate', emphasis: 'normal' },
      { id: 's3', label: 'Antral inflammation destroys D cells, somatostatin falls, gastrin is disinhibited and body parietal cells raise acid output', detail: 'This is the branch point. High acid plus duodenal gastric metaplasia gives a duodenal ulcer; the alternative branch is pangastritis with atrophy.', emphasis: 'key' },
      { id: 's4', label: 'In the pangastritis branch, chronic injury causes glandular atrophy and intestinal metaplasia with goblet and Paneth cells', detail: 'Acid output now falls, the stomach is colonised by other bacteria, and luminal nitrosamine generation rises.', emphasis: 'key' },
      { id: 's5', label: 'Metaplastic epithelium acquires dysplasia — nuclear enlargement, hyperchromasia, loss of polarity, crowded glands', emphasis: 'key' },
      { id: 's6', label: 'Invasive intestinal-type adenocarcinoma: cohesive gland-forming cells, bulky and ulcerated, antrum and lesser curve', detail: 'The parallel diffuse-type route bypasses every step above — CDH1 and E-cadherin loss, signet-ring cells, linitis plastica, no precursor lesion.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Curved bacilli in the surface mucus over antral epithelium on a Giemsa or immunostain, with neutrophils in the foveolar epithelium and lymphoid follicles below', mechanism: 'Helicobacter sits in mucus, never invades, and drives both an acute and a chronic infiltrate. Lymphoid follicles are abnormal in the stomach and are the substrate from which MALT lymphoma arises', significance: 'key' },
    { sign: 'Loss of parietal and chief cells from body and fundic glands with intestinal metaplasia, while the antrum is spared', mechanism: 'Autoimmune gastritis: CD4 T cells against the parietal cell proton pump destroy the oxyntic mucosa. The topography alone separates it from Helicobacter gastritis, which is antral', significance: 'key' },
    { sign: 'A 1.5 cm sharply punched-out ulcer with perpendicular walls, a clean grey base and mucosal folds radiating to the edge', mechanism: 'Benign peptic ulcer: surrounding mucosa is intact and only tethered by underlying scar, so folds run in undisturbed and stop at the rim', significance: 'supportive' },
    { sign: 'An ulcer with heaped everted rolled edges, a shaggy necrotic base, and folds that are clubbed and fuse short of the rim', mechanism: 'Tumour has replaced the mucosa around and beneath the ulcer, so the folds terminate in tumour rather than at the defect. Suggestive but never sufficient — biopsy still decides', significance: 'supportive' },
    { sign: 'A rigid non-distensible stomach with diffusely thickened wall and flattened rugae at resection', mechanism: 'Linitis plastica: discohesive signet-ring cells infiltrate the wall singly and provoke dense desmoplasia. E-cadherin loss means the cells cannot form glands or a mass, so they thicken the wall instead', significance: 'key' },
    { sign: 'Atrophic body mucosa with linear and micronodular chromogranin-positive cell clusters in the deep glands', mechanism: 'ECL cell hyperplasia driven by the very high gastrin of achlorhydria — the precursor of type 1 gastric carcinoid, which is a consequence of autoimmune gastritis rather than a separate disease', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low serum pepsinogen I with a pepsinogen I to II ratio below 3', meaning: 'Pepsinogen I comes only from chief cells in the body and fundus, pepsinogen II from the whole stomach. A falling ratio is a serological biopsy of oxyntic atrophy and identifies the mucosa at risk of intestinal-type carcinoma' },
    { clue: 'Serum gastrin of 900 pg/mL with a gastric pH of 7', meaning: 'Appropriate hypergastrinaemia from achlorhydria — autoimmune gastritis or profound acid suppression. In Zollinger-Ellison the gastrin is high with a LOW pH, which is the inappropriate and therefore diagnostic combination' },
    { clue: 'Urea breath test positive after four weeks off proton pump inhibitors and antibiotics', meaning: 'Detects urease activity, so it measures live organisms and confirms eradication. Acid suppression suppresses the organism without killing it and produces false negatives, which is why the washout period is part of the test' },
    { clue: 'Anti-intrinsic-factor antibody positive in a patient with macrocytosis and a raised methylmalonic acid', meaning: 'Highly specific for pernicious anaemia. Anti-parietal-cell antibody is more sensitive but far less specific; methylmalonic acid rises in B12 deficiency and not in folate deficiency, which separates the two megaloblastic causes' },
    { clue: 'Fluorescence in situ hybridisation showing t(11;18)(q21;q21) in a gastric MALT lymphoma', meaning: 'API2-MALT1 fusion gives constitutive NF-kappaB activation, so the clone no longer needs Helicobacter-driven T-cell help. This tumour will not regress with eradication and needs its own therapy' },
    { clue: 'Strong CD117 and DOG1 positivity in a spindle-cell submucosal gastric mass', meaning: 'GIST from the interstitial cells of Cajal, not an epithelial tumour. Mitotic rate and size predict behaviour, and the driver KIT or PDGFRA mutation is what tyrosine kinase inhibition targets' },
  ],

  treatment: [
    {
      logic: 'Match the intervention to which side of the aggression-defence balance failed',
      detail: 'If the failure is **excess aggression**, remove the driver: eradicate *Helicobacter* and the duodenal ulcer recurrence rate falls from roughly **60–70% per year** to under **10%**, because the somatostatin brake on gastrin is restored and acid output returns to normal. If the failure is **lost defence**, restoring defence is the specific move: stop the NSAID where possible, and where it cannot be stopped add a **proton pump inhibitor** or a **COX-2 selective** agent that spares mucosal **COX-1** prostaglandin. Acid suppression heals both kinds of ulcer, which is exactly why it misleads — a healed ulcer says nothing about whether the cause was removed. The gastric ulcer carries one extra non-negotiable step: **re-endoscopy with biopsy**, because carcinoma can heal on a proton pump inhibitor and reappear as an incurable tumour.',
    },
    {
      logic: 'Treat the lymphoma with antibiotics only while it still depends on the antigen',
      detail: 'Gastric MALT lymphoma is the clearest demonstration in pathology that a malignant clone can stay **addicted to its stimulus**. While it is early, superficial and *Helicobacter* positive, eradication alone gives remission in about **70–80%**, and the regression is real, not palliative. Two things end that window. First, **t(11;18)** — constitutive **NF-kappaB** activation makes the clone **antigen-independent**, so it must be excluded before antibiotics are relied upon. Second, **transformation** to diffuse large B-cell lymphoma, or invasion beyond the mucosa and submucosa, which moves the disease into conventional chemoimmunotherapy. The general principle — that eliminating the inflammatory stimulus can reverse a lesion built on chronic inflammation — is the same logic applied to gastric secretion physiology in [[ghp-gastric-secretion]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Antrum up, body down',
      expansion: [
        'Helicobacter is ANTRAL: kills D cells, somatostatin falls, gastrin rises, parietal cells still intact, so acid goes UP',
        'Acid up means duodenal gastric metaplasia, colonisation and a DUODENAL ulcer',
        'Autoimmune is BODY and FUNDUS: kills parietal cells, so acid goes DOWN to achlorhydria',
        'No parietal cell means no intrinsic factor: B12 malabsorption, pernicious anaemia, subacute combined degeneration',
        'Achlorhydria removes the gastrin brake: very high gastrin, ECL hyperplasia, type 1 carcinoid',
      ],
    },
    {
      hook: 'Intestinal builds glands, diffuse loses glue',
      expansion: [
        'Intestinal type: cohesive cells, forms glands, bulky ulcerated mass, antrum and lesser curve',
        'It needs a precursor — chronic gastritis, atrophy, intestinal metaplasia, dysplasia — so screening can catch it',
        'Diffuse type: E-cadherin lost through CDH1, so cells cannot stick and cannot build glands',
        'Single infiltrating signet-ring cells plus desmoplasia equals linitis plastica, the leather-bottle stomach',
        'No precursor, younger patients, no sex difference, incidence not falling — the opposite profile on every axis',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'How NSAIDs cause peptic ulcers',
      wrongInstinct: 'NSAIDs must increase acid secretion, since ulcers are acid-mediated',
      rightAnswer: 'NSAIDs inhibit COX-1 and strip mucosal defence — prostaglandin E2 falls, so mucus, bicarbonate and mucosal blood flow fall — while acid output is unchanged or slightly reduced',
      why: 'Rule: Helicobacter raises aggression, NSAIDs remove defence. They sit at opposite ends of the same balance, which is why Helicobacter ulcers are predominantly duodenal and NSAID ulcers predominantly gastric, and why eradication fixes one but not the other',
    },
    {
      questionCategory: 'What to do when a gastric ulcer has healed completely on a proton pump inhibitor',
      wrongInstinct: 'Complete endoscopic healing proves the ulcer was benign, so no further sampling is needed',
      rightAnswer: 'Biopsy the site regardless — ulcerated gastric carcinoma can re-epithelialise on acid suppression and look healed while the tumour beneath is untouched',
      why: 'Rule: every gastric ulcer gets rim biopsies and documented histological follow-up; duodenal ulcers do not, because primary duodenal carcinoma is vanishingly rare. Healing is a statement about acid, not about cells',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 46-year-old has chronic gastritis confined to the gastric body and fundus with complete loss of parietal cells, while antral biopsies are normal. Which set of findings follows directly from that topography?',
      options: [
        { id: 'a', text: 'Raised acid output, low serum gastrin, and a duodenal ulcer' },
        { id: 'b', text: 'Achlorhydria, very high serum gastrin, B12 malabsorption with megaloblastic anaemia, and ECL cell hyperplasia' },
        { id: 'c', text: 'Normal acid output with iron deficiency from occult bleeding alone' },
        { id: 'd', text: 'Raised acid output with hypergastrinaemia from a duodenal gastrinoma' },
      ],
      answerId: 'b',
      explanation: 'Parietal cells are confined to the body and fundus and make two things. Losing acid gives achlorhydria, which removes the pH brake on antral G cells so gastrin rises to very high levels and drives ECL cell hyperplasia and type 1 carcinoids. Losing intrinsic factor gives B12 malabsorption, megaloblastic anaemia and subacute combined degeneration. Option a is the Helicobacter antral pattern, where D cell loss disinhibits gastrin while intact body parietal cells raise acid. Option d would require a low gastric pH alongside the high gastrin.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A resected stomach is rigid and non-distensible with a diffusely thickened wall and flattened rugae. Histology shows single cells with cytoplasmic mucin vacuoles displacing the nucleus, infiltrating the wall without forming glands. Which molecular lesion best explains this appearance?',
      options: [
        { id: 'a', text: 'APC loss initiating a chromosomal instability sequence' },
        { id: 'b', text: 'Loss of E-cadherin through CDH1 mutation or promoter methylation' },
        { id: 'c', text: 'API2-MALT1 fusion from t(11;18)(q21;q21)' },
        { id: 'd', text: 'Activating KIT mutation in interstitial cells of Cajal' },
      ],
      answerId: 'b',
      explanation: 'This is diffuse-type gastric adenocarcinoma with signet-ring cells and linitis plastica. E-cadherin is the adherens junction protein that holds epithelial cells together; without it cells cannot adhere, so they cannot form glands and instead infiltrate singly, provoking desmoplasia that stiffens the wall. The morphology is a direct readout of the molecular defect. APC loss drives colorectal adenomas, t(11;18) defines antibiotic-unresponsive MALT lymphoma, and KIT mutation defines GIST, which is a submucosal spindle-cell tumour rather than an epithelial one.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A superficial gastric MALT lymphoma is Helicobacter positive and confined to mucosa and submucosa. Which single result would most strongly predict failure of antibiotic eradication as sole therapy?',
      options: [
        { id: 'a', text: 'Presence of t(11;18)(q21;q21) generating an API2-MALT1 fusion' },
        { id: 'b', text: 'A positive urea breath test at diagnosis' },
        { id: 'c', text: 'Lymphoepithelial lesions on the diagnostic biopsy' },
        { id: 'd', text: 'A serum gastrin at the upper limit of normal' },
      ],
      answerId: 'a',
      explanation: 'Early gastric MALT lymphoma remains antigen-dependent: the clone is sustained by Helicobacter-specific T-cell help, so removing the organism removes the growth signal and about 70 to 80% enter remission. The t(11;18) API2-MALT1 fusion produces constitutive NF-kappaB activation, which makes the clone antigen-independent and therefore unresponsive to eradication. A positive breath test simply confirms the organism is present, which favours a response. Lymphoepithelial lesions are a diagnostic feature of MALT lymphoma, not a predictor of resistance.',
      tests: 'investigation',
    },
  ],
};

export default rbpGastricPathologyUlceration;
