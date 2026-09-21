import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpColorectalNeoplasiaVascular: Lecture = {
  id: 'rbp-colorectal-neoplasia-vascular',
  title: 'Colorectal Neoplasia & Vascular Bowel Disease',
  system: 'gi',
  source: 'Ch 14 — Oral Cavity and Gastrointestinal Tract',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 14 Oral Cavity and Gastrointestinal Tract' },
    { kind: 'mechanism', label: 'Two carcinogenic pathways and two watershed zones' },
    { kind: 'disease', label: 'Right-sided versus left-sided colorectal carcinoma' },
  ],

  highYield: [
    '**The adenoma-carcinoma sequence is a defined order of hits, and the order is the examinable part.** **APC** goes first, and it is the gatekeeper: both alleles must be lost, after which **beta-catenin** escapes the destruction complex, translocates to the nucleus and drives **TCF-dependent MYC and cyclin D1** transcription — the adenoma exists from that moment. **KRAS** activation comes next and enlarges the lesion, sustaining growth signalling. Loss of **SMAD2 and SMAD4** on **18q** removes TGF-beta growth inhibition, and **TP53** loss comes **LAST**, at the transition from high-grade dysplasia to invasion, which is why it marks carcinoma rather than adenoma. This is the **chromosomal instability (CIN)** pathway and it accounts for roughly **80%** of sporadic colorectal cancers. The interval matters clinically: the sequence takes about **10 years** from normal mucosa to carcinoma, and that single number is why a **10-year** screening colonoscopy interval works at all. The generic machinery behind these steps sits in [[rbp-carcinogenesis-tumour-progression]].',
    '**Not all adenomas are dangerous, and three features decide which ones are: SIZE, ARCHITECTURE and DEGREE OF DYSPLASIA.** **Size** is the dominant variable — adenomas under **1 cm** carry roughly a **1%** risk of harbouring carcinoma, while those over **4 cm** approach **40%**. **Architecture** ranks **villous above tubulovillous above tubular**, because villous adenomas are typically **sessile, broad-based and larger**, and a broad base means no stalk to interrupt invasion into the submucosa; the rare large villous adenoma of the rectum can also secrete enough potassium-rich mucus to cause hypokalaemia. **Degree of dysplasia** is the third, with high-grade dysplasia meaning the cells are one hit from invasion. Note what is NOT on the list: **number** of adenomas changes surveillance intervals but not the danger of any individual lesion, and **hyperplastic polyps** — small, left-sided, with a serrated sawtooth surface confined to the upper crypt and no dysplasia — carry essentially no risk. The dangerous serrated lesion is the **SESSILE SERRATED LESION**: right-sided, flat, mucus-capped, easy to miss, with serration reaching the **crypt BASE** where it makes L-shaped and boot-shaped crypts. Polyp classification is in [[colorectal-polyps-carcinoma]].',
    '**The microsatellite instability pathway is a different disease that happens to end in the same organ, and Lynch syndrome is its hereditary form.** Here the defect is not in a growth gene but in **DNA mismatch repair** — **MLH1, MSH2, MSH6, PMS2**. Replication slippage in repetitive **microsatellite** sequences goes uncorrected, and the mutation burden lands preferentially on genes whose coding regions contain such repeats, notably **TGFBR2** and **BAX**. Consequences you can predict from that mechanism: the tumours are **RIGHT-SIDED**, **mucinous or poorly differentiated with signet-ring features**, and heavily infiltrated by **tumour-infiltrating lymphocytes with a Crohn-like peritumoural reaction** — because thousands of frameshift mutations generate abundant **neoantigens**, which is also precisely why these tumours respond to **checkpoint inhibition**. Despite ugly histology the stage-for-stage prognosis is **better**. **Lynch syndrome** is autosomal dominant germline MMR loss: it causes about **2–4%** of all colorectal cancer, presents around **45 years**, carries **few or no polyps** (so there is no polyp burden to warn you), progresses from adenoma to carcinoma in **2–3 years** rather than 10 — hence **1–2 yearly** colonoscopy from age 20 to 25 — and brings **endometrial**, ovarian, gastric and urothelial cancer with it. Sporadic MSI tumours look identical but arise by **MLH1 promoter hypermethylation** with **BRAF V600E**, and a BRAF mutation therefore argues against Lynch.',
    '**Right-sided and left-sided colorectal carcinomas present completely differently, and both presentations are derivable from anatomy rather than memorised.** On the **RIGHT**, the caecum and ascending colon have a **wide capacious lumen** and the content is **liquid**, so a tumour can grow for a long time without obstructing anything. Growth is therefore **exophytic, polypoid and fungating** into that space, and such a friable mass bleeds slowly and continuously. Slow chronic blood loss in liquid stool is neither visible nor obstructive, so the presentation is **IRON DEFICIENCY ANAEMIA, fatigue and weight loss with no bowel symptoms at all** — which is why unexplained iron deficiency in an older adult demands colonoscopy. On the **LEFT**, the descending and sigmoid colon have a **narrow lumen** and the content is **formed and solid**, so the tumour grows circumferentially as an **annular napkin-ring constriction** with the classic **apple-core** on contrast imaging. The result is **OBSTRUCTION, altered bowel habit, tenesmus, narrow-calibre stool and frank haematochezia** because blood from a distal lesion has no time to be degraded. The same anatomy explains why left-sided lesions present earlier and at a lower stage.',
    '**Ischaemic bowel disease strikes at watershed zones, and knowing the two zones tells you where to look before you have imaging.** A watershed is the territory at the far end of two arterial supplies, so it is the first to fall when perfusion pressure drops. The **splenic flexure** sits between the terminal branches of the **superior mesenteric artery** (middle colic) and the **inferior mesenteric artery** (left colic); the **rectosigmoid junction** sits between the **inferior mesenteric** (sigmoid branches) and the **internal iliac** (superior rectal versus middle rectal). The rectum itself is essentially never ischaemic because it has a third supply from the internal iliac — so a colitis that spares the rectum and hits the splenic flexure in an elderly hypotensive patient is ischaemic, not inflammatory. Damage is graded by depth and the depth predicts outcome: **MUCOSAL** infarction heals; **MURAL** involves submucosa and heals with **stricture**; **TRANSMURAL** infarction gangrenes and perforates. The surface epithelium dies first because the capillaries supplying villous and surface mucosa run the longest countercurrent path — hence **atrophic or sloughed surface epithelium over preserved deep crypts with lamina propria haemorrhage**, the diagnostic microscopic pattern. **Reperfusion injury** then adds a second insult through **xanthine oxidase**-derived radicals and neutrophil influx, which is why the worst damage can appear after flow is restored ([[rbp-embolism-infarction-shock]]).',
    '**Diverticular disease and appendicitis are both pressure diseases, and both fail at a structurally pre-weakened point.** Colonic diverticula are **FALSE (pulsion) diverticula** — mucosa and submucosa herniating through the muscle wall, with no muscularis propria in their wall, which is exactly why they perforate and bleed so readily. They form where the wall is already breached: at the **points of entry of the vasa recta** through the circular muscle, giving the two parallel rows between the mesenteric and antimesenteric taeniae. The driving force is **exaggerated segmental intraluminal pressure** in the **SIGMOID**, which by Laplace generates the highest wall tension because it has the **narrowest radius**. Because the artery and the diverticulum share the defect, **diverticular bleeding is arterial, brisk and painless**, and it is a leading cause of major lower GI haemorrhage; **diverticulitis** is a separate event — obstruction of the neck, micro-perforation and pericolic inflammation. Appendicitis follows the same logic in a blind tube: **luminal obstruction** by a faecolith (or lymphoid hyperplasia in children) raises intraluminal pressure until it exceeds **venous** then **capillary** pressure, giving congestion, ischaemia, bacterial invasion and then a **neutrophilic infiltrate of the muscularis propria** — which is the actual histological diagnostic criterion, not surface exudate alone. Clinical courses are in [[appendicitis-diverticular-ischemic-bowel]].',
  ],

  mechanism: {
    title: 'Normal crypt to invasive colorectal carcinoma',
    steps: [
      { id: 's1', label: 'Both APC alleles are lost in a colonic crypt stem cell', detail: 'The gatekeeper step. Germline loss of one allele is familial adenomatous polyposis, where hundreds to thousands of adenomas make the second hit statistically certain.', emphasis: 'key' },
      { id: 's2', label: 'Beta-catenin escapes the destruction complex, enters the nucleus and drives TCF-dependent MYC and cyclin D1', detail: 'The adenoma exists from this point: crowded hyperchromatic pencillate nuclei with loss of goblet cell maturation.', emphasis: 'key' },
      { id: 's3', label: 'KRAS activation sustains growth signalling and the adenoma enlarges, becoming more villous and more sessile', emphasis: 'normal' },
      { id: 's4', label: 'Loss of SMAD2 and SMAD4 on 18q removes TGF-beta mediated growth inhibition', emphasis: 'normal' },
      { id: 's5', label: 'TP53 is lost LAST, at the step from high-grade dysplasia to invasion through the muscularis mucosae', detail: 'This ordering is why TP53 loss marks carcinoma rather than adenoma, and why removing an adenoma at colonoscopy prevents the cancer outright.', emphasis: 'key' },
      { id: 's6', label: 'Invasion reaches submucosal lymphatics; depth of invasion, not size, then sets nodal and distant risk', detail: 'A parallel route exists: mismatch repair loss gives microsatellite instability, right-sided mucinous tumours with tumour-infiltrating lymphocytes, reached in 2 to 3 years rather than 10.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A bulky friable fungating mass in the caecum with no luminal narrowing, in a patient with a haemoglobin of 78 g/L and no bowel symptoms', mechanism: 'A capacious right colon with liquid content permits exophytic growth without obstruction, so the only expression is slow occult blood loss — the anatomy dictates the presentation', significance: 'key' },
    { sign: 'An annular constricting sigmoid lesion producing a napkin-ring narrowing with proximal dilatation', mechanism: 'A narrow left colon carrying solid stool forces circumferential rather than exophytic growth; obstruction and altered bowel habit follow from calibre and stool consistency', significance: 'key' },
    { sign: 'A right-sided mucinous poorly differentiated carcinoma with dense tumour-infiltrating lymphocytes and a Crohn-like peritumoural lymphoid reaction', mechanism: 'Mismatch repair deficiency generates thousands of frameshift neoantigens, which recruit that lymphoid response. Ugly histology with a better stage-for-stage prognosis and sensitivity to checkpoint blockade', significance: 'key' },
    { sign: 'Flat mucus-capped right-sided polyps with serration extending to the crypt base and L-shaped or boot-shaped basal crypts', mechanism: 'Sessile serrated lesions, the precursor of sporadic microsatellite-unstable carcinoma. Serration confined to the upper crypt with a normal base is a harmless hyperplastic polyp instead', significance: 'supportive' },
    { sign: 'Segmental colitis affecting the splenic flexure and descending colon with an abrupt cut-off and complete rectal sparing', mechanism: 'Watershed ischaemia between superior and inferior mesenteric territories. The rectum has a third supply from the internal iliac, so rectal sparing argues against ulcerative colitis and for ischaemia', significance: 'key' },
    { sign: 'Two parallel rows of thin-walled outpouchings in the sigmoid, each sitting where a vessel pierces the circular muscle', mechanism: 'Pulsion diverticula herniating mucosa and submucosa through pre-existing vascular gaps. Because artery and diverticulum share the defect, bleeding is arterial, brisk and painless', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Immunohistochemistry showing loss of MLH1 and PMS2 nuclear staining, with BRAF V600E detected', meaning: 'Mismatch repair deficiency arising from sporadic MLH1 promoter hypermethylation rather than Lynch syndrome. BRAF V600E is essentially never found in Lynch tumours, so it is the cheapest way to avoid an unnecessary germline test' },
    { clue: 'Isolated loss of MSH2 and MSH6 staining with no BRAF mutation in a 44-year-old', meaning: 'Strongly suggests germline MSH2 loss, that is Lynch syndrome, since MSH2 is not silenced by promoter methylation. Age, right-sided location and an absent polyp burden all fit, and it triggers family testing and endometrial surveillance' },
    { clue: 'A 4 cm sessile villous rectal adenoma with high-grade dysplasia', meaning: 'Every one of the three danger features is present. Size above 4 cm approaches a 40% chance of harbouring carcinoma, villous sessile architecture offers no stalk to interrupt submucosal invasion, and high-grade dysplasia sits one step from invasion' },
    { clue: 'Rising carcinoembryonic antigen from 2 to 28 micrograms per litre during post-resection follow-up', meaning: 'CEA is useless for diagnosis and screening because it is neither sensitive nor specific, but the trend after complete resection is a genuine recurrence monitor. A persistently high level immediately post-operatively suggests residual disease' },
    { clue: 'CT angiography showing thumbprinting of the descending colon with a patent inferior mesenteric artery in a hypotensive 80-year-old', meaning: 'Non-occlusive ischaemic colitis: thumbprinting is submucosal oedema and haemorrhage. A patent vessel does not exclude ischaemia, because a global perfusion deficit strikes watershed zones without any occlusion at all' },
    { clue: 'A dilated appendix over 6 mm with periappendiceal fat stranding, and histology showing neutrophils within the muscularis propria', meaning: 'Neutrophilic infiltration of the muscularis propria is the histological criterion for acute appendicitis. Surface exudate or luminal neutrophils alone are not sufficient, which is how an incidentally inflamed-looking appendix is correctly called normal' },
  ],

  treatment: [
    {
      logic: 'Screening works because the sequence is slow, so the interval is a statement about biology',
      detail: 'Sporadic colorectal cancer takes about **10 years** to get from normal mucosa to carcinoma through APC, KRAS and finally TP53. That interval is the entire justification for a **10-yearly** colonoscopy from **45–50** in average-risk people: look faster than the lesion moves and you always meet it as an adenoma. Removing the adenoma removes the cancer, which is the rare case of a screening test that is also definitive treatment. Where the biology is faster, the interval must shorten in proportion rather than by preference: **Lynch syndrome** completes the sequence in **2–3 years**, so colonoscopy is **1–2 yearly from age 20 to 25**; **familial adenomatous polyposis** makes the second APC hit inevitable across hundreds of crypts, so annual sigmoidoscopy begins in the **early teens** and **prophylactic colectomy** follows in the twenties. Note that Lynch patients have almost no polyp burden, so nothing warns you — the germline result is the warning.',
    },
    {
      logic: 'In ischaemic and diverticular disease, depth decides between resection and observation',
      detail: 'Ischaemic colitis is graded by how far the infarct went, and that grade is the decision. **Mucosal** infarction heals completely, so treatment is restoring perfusion, stopping vasoconstrictors and watching. **Mural** involvement heals with fibrosis, so the late problem is a **stricture** rather than the acute event. **Transmural** infarction gangrenes and perforates, so it is resected — and the discriminators pushing you there are **peritonism, a rising lactate, and pneumatosis or portal venous gas** on imaging, not the severity of the pain alone. Diverticular disease follows the identical principle: uncomplicated **diverticulitis** is pericolic inflammation managed medically, while **free perforation with generalised peritonitis** is a full-thickness failure needing resection. And because the diverticulum contains **no muscularis propria**, it has no capacity to contract down on a bleeding vessel, which is why diverticular haemorrhage is arterial and brisk yet usually painless.',
    },
  ],

  mnemonics: [
    {
      hook: 'A Polyp Kills Silently, Then Perforates',
      expansion: [
        'APC first — the gatekeeper; lose both alleles and beta-catenin goes nuclear, so the adenoma begins',
        'KRAS next — the adenoma enlarges and becomes more villous and more sessile',
        'SMAD2 and SMAD4 on 18q — TGF-beta growth inhibition is removed',
        'TP53 LAST — high-grade dysplasia becomes invasion, which is why TP53 loss means carcinoma, not adenoma',
        'About 10 years end to end, which is exactly why a 10-year screening interval is safe',
      ],
    },
    {
      hook: 'Right bleeds, left blocks',
      expansion: [
        'Right colon: wide lumen, liquid stool — a tumour can grow exophytic and fungating without obstructing',
        'So it bleeds slowly and invisibly: iron deficiency anaemia, fatigue, weight loss, no bowel symptoms',
        'Left colon: narrow lumen, formed stool — the tumour grows annular, the napkin-ring or apple-core lesion',
        'So it obstructs: altered bowel habit, tenesmus, narrow stools, and visible fresh blood because it is near the exit',
        'Same rule applies to the watersheds: splenic flexure between SMA and IMA, rectosigmoid between IMA and internal iliac, rectum spared by its third supply',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Using a molecular result to decide whether a microsatellite-unstable tumour is Lynch syndrome',
      wrongInstinct: 'Microsatellite instability with loss of MLH1 means mismatch repair is defective, so this is Lynch syndrome',
      rightAnswer: 'Test BRAF V600E or MLH1 promoter methylation first — a BRAF-mutant MLH1-deficient tumour is sporadic, arising from promoter hypermethylation in a sessile serrated lesion',
      why: 'Rule: BRAF V600E essentially excludes Lynch syndrome. Sporadic and hereditary MSI tumours are histologically indistinguishable, both right-sided, mucinous and lymphocyte-rich, so the discriminator has to be molecular. Loss of MSH2, MSH6 or PMS2 is not silenced by methylation and points to germline disease',
    },
    {
      questionCategory: 'Interpreting a segmental colitis in an elderly patient after a hypotensive episode',
      wrongInstinct: 'Colitis with bloody diarrhoea and thumbprinting means new-onset inflammatory bowel disease',
      rightAnswer: 'Splenic flexure involvement with an abrupt cut-off and complete rectal sparing is ischaemic colitis at a watershed zone',
      why: 'Rule: the rectum has a third supply from the internal iliac artery, so it is essentially never ischaemic — rectal sparing argues against ulcerative colitis, which always involves the rectum. Histology confirms it: surface epithelium is sloughed over preserved deep crypts with lamina propria haemorrhage, and a patent artery does not exclude non-occlusive ischaemia',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 72-year-old man is referred with a haemoglobin of 81 g/L, microcytosis, fatigue and weight loss. He reports entirely normal bowel habit and has never seen blood. Where is the lesion most likely to be, and why?',
      options: [
        { id: 'a', text: 'Sigmoid colon, because annular lesions bleed more heavily than exophytic ones' },
        { id: 'b', text: 'Caecum or ascending colon, because a wide lumen with liquid content allows an exophytic mass to bleed slowly for months without obstructing or producing visible blood' },
        { id: 'c', text: 'Rectum, because rectal tumours characteristically present with occult rather than overt bleeding' },
        { id: 'd', text: 'Transverse colon, because it is the watershed segment and tumours there are always occult' },
      ],
      answerId: 'b',
      explanation: 'The presentation is derivable from anatomy. The right colon is capacious and its content is liquid, so a tumour grows exophytically into the lumen without obstructing, and the blood it loses is slow, mixed into liquid stool and digested before it reaches the anus. The result is iron deficiency anaemia with no bowel symptoms. Left-sided lesions sit in a narrow lumen carrying solid stool, so they grow annularly and present with obstruction, altered habit and visible fresh blood. Unexplained iron deficiency in an older adult therefore demands colonoscopy.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A colonic adenoma shows both APC alleles lost and an activating KRAS mutation, with low-grade dysplasia and no invasion. Which additional event would most specifically indicate that invasive carcinoma has developed?',
      options: [
        { id: 'a', text: 'Nuclear accumulation of beta-catenin' },
        { id: 'b', text: 'Loss of TP53' },
        { id: 'c', text: 'Loss of MLH1 expression' },
        { id: 'd', text: 'An increase in adenoma diameter beyond 1 cm' },
      ],
      answerId: 'b',
      explanation: 'In the chromosomal instability pathway the order is fixed: APC loss creates the adenoma, KRAS enlarges it, SMAD2 and SMAD4 loss on 18q removes TGF-beta inhibition, and TP53 loss comes last, at the transition from high-grade dysplasia to invasion. That ordering is why TP53 loss marks carcinoma rather than adenoma. Nuclear beta-catenin is the immediate consequence of APC loss and is already present. MLH1 loss belongs to the separate microsatellite instability pathway. Size raises the probability of harbouring carcinoma but is not itself a molecular indicator of invasion.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'An 80-year-old develops abdominal pain and bloody diarrhoea 36 hours after an episode of severe hypotension. Colonoscopy shows segmental inflammation of the splenic flexure and descending colon with an abrupt cut-off and a completely normal rectum. Mesenteric angiography shows patent vessels. What is the diagnosis and why does the rectal sparing support it?',
      options: [
        { id: 'a', text: 'Ulcerative colitis, since the rectum can be spared when topical therapy has been used' },
        { id: 'b', text: 'Ischaemic colitis at a watershed zone; the rectum has an additional internal iliac supply so it is essentially never ischaemic, and patent vessels do not exclude non-occlusive hypoperfusion' },
        { id: 'c', text: 'Crohn colitis, since the abrupt cut-off represents a skip lesion' },
        { id: 'd', text: 'Pseudomembranous colitis, since it also follows a systemic insult and spares the rectum' },
      ],
      answerId: 'b',
      explanation: 'The splenic flexure lies at the far end of both superior and inferior mesenteric territories, so it fails first when perfusion pressure drops, and non-occlusive ischaemia needs no occluded vessel at all. The rectum receives superior, middle and inferior rectal supply including an internal iliac contribution, so it survives global hypoperfusion — which is exactly why rectal sparing argues against ulcerative colitis, a disease that begins in the rectum in essentially every case. Histology seals it: sloughed surface epithelium over preserved deep crypts with lamina propria haemorrhage.',
      tests: 'investigation',
    },
  ],
};

export default rbpColorectalNeoplasiaVascular;
