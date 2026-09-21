import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpIntestinalInflammatoryMalabsorption: Lecture = {
  id: 'rbp-intestinal-inflammatory-malabsorption',
  title: 'Malabsorption & Inflammatory Bowel Disease',
  system: 'gi',
  source: 'Ch 14 — Oral Cavity and Gastrointestinal Tract',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 14 Oral Cavity and Gastrointestinal Tract' },
    { kind: 'mechanism', label: 'Depth and continuity generate every IBD complication' },
    { kind: 'investigation', label: 'Duodenal and ileocolonic biopsy morphology' },
  ],

  highYield: [
    '**Coeliac disease has one morphology and it is worth reading as a sentence, not a list: villous atrophy with crypt hyperplasia and intraepithelial lymphocytes.** Deamidated **gliadin** peptides, modified by **tissue transglutaminase**, are presented on **HLA-DQ2 (about 95%) or HLA-DQ8** to CD4 T cells, which drive **interferon gamma** and **IL-15**. IL-15 then licenses **intraepithelial CD8 lymphocytes** expressing **NKG2D** to kill enterocytes that display stress-induced **MIC-A**. Each part of the morphology follows from that: enterocytes are destroyed faster than they can be replaced, so **villi flatten** (absorptive surface lost); the crypts respond by proliferating, so **crypts lengthen and the crypt-to-villus ratio inverts**; and the killers themselves are visible as **more than 25 intraepithelial lymphocytes per 100 enterocytes**. The earliest change is the lymphocytosis with normal villi, which is why a biopsy read as normal architecture is not a negative biopsy until the intraepithelial count is done. Serology and clinical course are in [[add-celiac-disease-pathophysiology-and-diagnosis]].',
    '**Coeliac disease is DUODENAL and proximal, and that one anatomical fact predicts which deficiencies appear and in what order.** Gluten is presented to the mucosa it meets first, so injury is maximal in the **duodenum and proximal jejunum** and fades distally. **Iron** is absorbed almost exclusively in the **duodenum and proximal jejunum** by **DMT1**, and **folate** by **PCFT** in the same segment — exactly the damaged territory. **B12** is absorbed at the **terminal ileum** by the intrinsic-factor-cubilin route, which coeliac disease rarely reaches. Therefore the order is fixed: **unexplained iron deficiency anaemia, then folate deficiency, and only in extensive long-standing disease B12 deficiency**. That is why iron deficiency with no bleeding source is a standard route to a coeliac diagnosis, and why a **microcytic** picture fits coeliac far better than a macrocytic one. The same logic works in reverse for **Crohn** disease, which favours the terminal ileum and therefore takes out **B12 and bile salts** while sparing iron absorption. Contrast the other malabsorption patterns in [[malabsorption-patterns]].',
    '**The rest of malabsorption separates cleanly on what the biopsy shows and where it shows it.** **Tropical sprue** looks like coeliac histologically but injures the **distal** small bowel as much as the proximal, so **B12 and folate deficiency dominate**, it follows residence in an endemic region, and it responds to **tetracycline and folate** rather than to gluten withdrawal. **Whipple disease** is unmistakable: **foamy macrophages distending the lamina propria, packed with PAS-positive diastase-resistant granules** that are *Tropheryma whipplei* organisms, obstructing **lymphatics** so that fat accumulates and villi become clubbed — it is a lymphatic transport failure rather than a mucosal one, which is why it causes steatorrhoea with a relatively preserved epithelium and why it also involves joints, heart and brain. **Lactase deficiency** is the one with a **completely normal biopsy** — the enzyme is missing from an intact brush border — producing osmotic diarrhoea with a **stool osmotic gap above 125 mOsm/kg** and a low stool pH from colonic fermentation. **Abetalipoproteinaemia** is also normal on routine stains until you notice **lipid-vacuolated enterocytes**, because **MTP** failure blocks chylomicron export, and it gives **acanthocytes** on the film.',
    '**Crohn disease is TRANSMURAL and SKIPS, and every complication it has is a restatement of those two words.** Transmural means inflammation crosses muscularis propria into serosa. From that alone: **fissures** deepen into **fistulae** (entero-enteric, enterovesical, enterocutaneous, perianal) because a tract that reaches serosa must open somewhere; **strictures** form because full-thickness fibrosis contracts a whole ring of bowel, giving the **string sign**; **adhesions and creeping fat** wrap the serosa; and **free perforation is uncommon** precisely because that serosal inflammation has already stuck the loops together. Skipping means normal mucosa between diseased segments, the **cobblestone** appearance of **linear serpiginous ulcers** separated by surviving oedematous mucosa, and disease anywhere from **mouth to anus** with the **terminal ileum** favoured. Histology adds **non-caseating granulomas** in about **35%** of cases — helpful when present, never required. Losing terminal ileum costs **B12** and **bile salt** reabsorption, so steatorrhoea follows, and unabsorbed **oxalate** binds less calcium and is absorbed instead, giving **calcium oxalate stones**. Clinical management is in [[inflammatory-bowel-disease]].',
    '**Ulcerative colitis is MUCOSAL and CONTINUOUS from the rectum proximally, and its complications follow just as directly — but they are a different set.** Mucosal means inflammation stops at the submucosa. So there are **no fistulae, no strictures worth the name and no creeping fat**; instead the exposed mucosa bleeds, giving **bloody diarrhoea with mucus as the rule rather than the exception**. Continuous means the disease begins in the **rectum in essentially every case** and extends proximally without skipping — proctitis, left-sided colitis, or pancolitis, and it stops at the ileocaecal valve except for the trivial **backwash ileitis**. Histology is **crypt abscesses with neutrophils in crypt lumina, crypt distortion and branching, and basal plasmacytosis**, with **PSEUDOPOLYPS** — islands of regenerating mucosa left standing between confluent ulcers, so they are surviving mucosa, not neoplasms. The feared complication is **TOXIC MEGACOLON**: inflammation reaching the muscularis propria damages the **myenteric plexus**, tone is lost, the colon dilates beyond **6 cm**, the wall thins and perforation risk climbs. Crohn rarely does this because its transmural fibrosis makes a rigid narrow tube rather than a floppy wide one. The granuloma of Crohn is the same lesion discussed in [[rbp-chronic-inflammation-repair]].',
    '**Colitis-associated dysplasia is a third disease that neither Crohn nor ulcerative colitis is usually taught to own, and its surveillance rules come from the two variables that drive it — EXTENT and DURATION.** Long-standing colonic inflammation drives carcinogenesis without needing an adenoma, so the lesions are typically **FLAT, multifocal and endoscopically subtle**, and **TP53 mutation occurs EARLY** while **APC loss occurs LATE** — the exact reverse of the sporadic adenoma sequence. Risk begins to rise after about **8–10 years** of disease and is proportional to how much colon is involved: **pancolitis** carries a risk several-fold higher than left-sided disease, and **proctitis alone barely raises it at all**. That gives the rule: surveillance colonoscopy starts **8–10 years** after symptom onset for extensive colitis, with **chromoendoscopy** or extensive random biopsies precisely because flat dysplasia is invisible to white light. Crohn colitis of equal extent and duration carries a comparable risk, so the discriminator is not which disease but how much colon has been inflamed for how long. Coexisting **primary sclerosing cholangitis** shortens the clock further and starts surveillance at diagnosis.',
  ],

  mechanism: {
    title: 'Gluten to villous atrophy to deficiency pattern',
    steps: [
      { id: 's1', label: 'Gliadin peptides resist digestion and cross a permeable epithelium into the lamina propria', detail: 'Gliadin is proline and glutamine rich, so brush border and pancreatic proteases cannot fully degrade it; 33-mer fragments survive intact.', emphasis: 'normal' },
      { id: 's2', label: 'Tissue transglutaminase deamidates glutamine to glutamate, sharply increasing binding affinity for HLA-DQ2 and DQ8', detail: 'The negative charge created is what lets the peptide sit in the DQ2 groove — which is why the genetic restriction is near absolute and a DQ2 or DQ8 negative result effectively excludes coeliac disease.', emphasis: 'key' },
      { id: 's3', label: 'CD4 T cells respond with interferon gamma and IL-15; B cells make antibody to transglutaminase itself', emphasis: 'normal' },
      { id: 's4', label: 'IL-15 licenses intraepithelial CD8 lymphocytes bearing NKG2D to kill stressed enterocytes displaying MIC-A', detail: 'Over 25 intraepithelial lymphocytes per 100 enterocytes is the earliest change, present before any architectural abnormality.', emphasis: 'key' },
      { id: 's5', label: 'Enterocyte loss outpaces replacement: villi flatten, crypts hypertrophy, the crypt to villus ratio inverts', emphasis: 'key' },
      { id: 's6', label: 'Because injury is duodenal and proximal, iron and folate absorption fail first while ileal B12 absorption is preserved', detail: 'Hence iron deficiency anaemia as a presenting feature, folate deficiency next, and B12 deficiency only in extensive long-standing disease. Persistent symptoms on a strict diet raise refractory coeliac disease and enteropathy-associated T-cell lymphoma.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Flattened villi with elongated hyperplastic crypts and more than 25 intraepithelial lymphocytes per 100 enterocytes in a duodenal biopsy', mechanism: 'CD8 intraepithelial lymphocytes licensed by IL-15 kill enterocytes faster than crypts can replace them; the crypt hyperplasia is the failed compensation, and the lymphocytes are the killers caught in the act', significance: 'key' },
    { sign: 'Lamina propria distended by foamy macrophages containing PAS-positive diastase-resistant granules, with dilated lacteals', mechanism: 'Whipple disease. Tropheryma whipplei laden macrophages obstruct mucosal lymphatics, so absorbed fat cannot leave — a transport failure with a comparatively intact absorptive epithelium', significance: 'key' },
    { sign: 'Thickened rigid ileal segment with a narrow lumen, deep linear serpiginous ulcers, cobblestoned intervening mucosa and mesenteric fat creeping over the serosa', mechanism: 'Transmural Crohn inflammation: full-thickness fibrosis narrows the ring, ulcers cut deep between surviving oedematous mucosa, and serosal involvement draws mesenteric fat around the bowel', significance: 'key' },
    { sign: 'Non-caseating epithelioid granulomas in the bowel wall or a draining lymph node', mechanism: 'Present in roughly 35% of Crohn cases and strongly supportive when found, but absence proves nothing. Caseation would redirect the diagnosis to tuberculosis, which also favours the ileocaecal region', significance: 'supportive' },
    { sign: 'Continuous granular friable mucosa from the anal verge proximally with a sharp transition to normal colon', mechanism: 'Ulcerative colitis always begins at the rectum and extends without skipping; the sharp demarcation is itself the discriminator from the patchy involvement of Crohn colitis', significance: 'key' },
    { sign: 'Neutrophils within crypt lumina, branched and distorted crypts, and plasma cells between the crypt bases and the muscularis mucosae', mechanism: 'Crypt abscesses mark activity, crypt architectural distortion marks chronicity, and basal plasmacytosis is the earliest feature separating chronic idiopathic colitis from acute infectious colitis', significance: 'key' },
  ],

  investigations: [
    { clue: 'IgA anti-tissue-transglutaminase strongly positive with a total IgA that is undetectable', meaning: 'Selective IgA deficiency is about ten times commoner in coeliac disease, so the IgA-based test can be falsely negative. Total IgA must be measured alongside it, and IgG-based deamidated gliadin peptide or IgG transglutaminase used instead' },
    { clue: 'Stool osmotic gap of 160 mOsm/kg with a stool pH of 5.2 and a normal duodenal biopsy', meaning: 'Osmotic diarrhoea from an unabsorbed solute with colonic bacterial fermentation acidifying the stool, in the presence of a structurally intact mucosa — the signature of disaccharidase deficiency rather than mucosal disease' },
    { clue: 'Faecal calprotectin of 640 micrograms per gram', meaning: 'Calprotectin comes from neutrophil cytosol, so it measures neutrophil traffic into the lumen. It separates inflammatory from functional bowel disease and tracks mucosal healing, but it does not distinguish Crohn from colitis or from infection' },
    { clue: 'MR enterography showing a 12 cm ileal segment with mural thickening, mucosal hyperenhancement, an enterovesical tract and proximal dilatation', meaning: 'Confirms the transmural nature of Crohn disease. A fistula and a stricture in the same segment are findings ulcerative colitis structurally cannot produce, because mucosal inflammation cannot cross the muscularis propria' },
    { clue: 'Abdominal radiograph with transverse colon diameter of 8 cm and loss of haustration in a patient with bloody diarrhoea and fever', meaning: 'Toxic megacolon. Inflammation has reached the muscularis propria and damaged the myenteric plexus, so tone is lost and the wall thins. Colonoscopy and barium are contraindicated because insufflation risks perforation' },
    { clue: 'Chromoendoscopy with targeted and random biopsies showing flat high-grade dysplasia in a patient with 14 years of pancolitis', meaning: 'Colitis-associated neoplasia, where TP53 mutation comes early and APC loss late, and lesions are flat and multifocal rather than polypoid. Flat high-grade dysplasia in extensive colitis is an indication for colectomy, not for local resection' },
  ],

  treatment: [
    {
      logic: 'Withdraw the antigen, then explain any failure to respond rather than escalating blindly',
      detail: 'Strict lifelong **gluten withdrawal** normalises the intraepithelial lymphocyte count within months and restores villous architecture over **1–2 years**, and it is the only intervention that removes the driver. When symptoms persist on a genuinely strict diet, the differential is a short list worth working through in order: **continued covert exposure** (much the commonest), a **second diagnosis** such as lactase deficiency from the damaged brush border or small intestinal bacterial overgrowth, **microscopic colitis**, and finally **refractory coeliac disease**, in which an aberrant intraepithelial lymphocyte clone loses surface CD3 and CD8 and carries a real risk of **enteropathy-associated T-cell lymphoma**. Deficiencies are replaced along the anatomical map: **iron and folate** in coeliac disease, **B12 and fat-soluble vitamins** where the terminal ileum is diseased.',
    },
    {
      logic: 'Let depth and continuity choose the operation, because surgery cures one disease and not the other',
      detail: 'Ulcerative colitis is **mucosal and confined to the colon**, so **proctocolectomy removes all the diseased tissue and is curative** — which is why colectomy is definitive for refractory disease, for toxic megacolon and for flat high-grade dysplasia. Crohn disease can occur anywhere from mouth to anus and is **transmural**, so resection removes a segment but never the disease: recurrence at the anastomosis is the expectation, and repeated resections end in **short bowel syndrome**. Hence the operative principle in Crohn is **minimal resection for a specific mechanical problem** — an obstructing stricture, a fistula, an abscess — with **strictureplasty** preferred over resection where it preserves length. Medical strategy differs for the same reason: the goal in Crohn is **transmural** healing, not just a clean-looking mucosa.',
    },
  ],

  mnemonics: [
    {
      hook: 'Crohn cuts deep and jumps; colitis stays shallow and creeps',
      expansion: [
        'Deep means transmural: fissures become fistulae, full-thickness fibrosis becomes strictures and the string sign, serosal inflammation gives creeping fat and adhesions',
        'Deep also means free perforation is uncommon, because the loops are already stuck together',
        'Jumps means skip lesions, cobblestoning, mouth to anus, terminal ileum favoured, and non-caseating granulomas in about a third',
        'Shallow means mucosal only: no fistulae, no true strictures, but a raw bleeding surface and bloody mucoid diarrhoea',
        'Creeps means rectum first and continuous proximally, with crypt abscesses, pseudopolyps and toxic megacolon as the lethal complication',
      ],
    },
    {
      hook: 'The deficiency names the segment',
      expansion: [
        'Duodenum and proximal jejunum absorb iron via DMT1 and folate via PCFT — the coeliac territory',
        'So coeliac disease gives iron deficiency first, folate next, B12 only late',
        'Terminal ileum absorbs B12 with intrinsic factor and reabsorbs bile salts — the Crohn territory',
        'So ileal Crohn gives B12 deficiency and bile salt loss with steatorrhoea',
        'Bile salt loss also means unbound oxalate is absorbed instead of excreted: calcium oxalate stones',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a duodenal biopsy with normal villous architecture in suspected coeliac disease',
      wrongInstinct: 'Normal villi exclude coeliac disease, so look elsewhere',
      rightAnswer: 'Count the intraepithelial lymphocytes — more than 25 per 100 enterocytes with normal villi is Marsh 1 coeliac disease, the earliest stage',
      why: 'Rule: the lymphocytosis precedes the atrophy, because the killing starts before the crypts fail to keep up. Architecture is a late readout, so a biopsy is only negative once the intraepithelial count has been done on adequately oriented, non-tangential sections',
    },
    {
      questionCategory: 'Predicting which patient with inflammatory bowel disease needs dysplasia surveillance',
      wrongInstinct: 'Ulcerative colitis carries the cancer risk and Crohn disease does not, so surveil the colitics',
      rightAnswer: 'Risk is set by EXTENT and DURATION of colonic inflammation, not by which diagnosis is written down — Crohn colitis of equal extent and duration carries comparable risk, while ulcerative proctitis alone barely raises it',
      why: 'Rule: surveillance starts 8 to 10 years after symptom onset for extensive colitis of either type, immediately if primary sclerosing cholangitis coexists, and the lesions are flat with TP53 mutated early, so chromoendoscopy or extensive random biopsies replace looking for a polyp',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 31-year-old woman has iron deficiency anaemia with no bleeding source. Duodenal biopsy shows flat villi, elongated crypts and 48 intraepithelial lymphocytes per 100 enterocytes. Her serum B12 is normal. What best explains the normal B12 alongside severe iron deficiency?',
      options: [
        { id: 'a', text: 'B12 stores are large enough to mask malabsorption for several years in every case' },
        { id: 'b', text: 'Coeliac injury is duodenal and proximal, which is where iron and folate are absorbed, whereas B12 is absorbed at the terminal ileum and is usually spared' },
        { id: 'c', text: 'Intrinsic factor secretion is increased in coeliac disease, compensating for mucosal loss' },
        { id: 'd', text: 'Iron deficiency in coeliac disease is caused by occult blood loss rather than malabsorption' },
      ],
      answerId: 'b',
      explanation: 'Gluten meets the mucosa it reaches first, so injury is maximal in the duodenum and proximal jejunum and fades distally. Iron is absorbed by DMT1 and folate by PCFT in exactly that segment, while B12 requires the intrinsic factor and cubilin route at the terminal ileum, which coeliac disease rarely reaches. The deficiency order is therefore iron, then folate, then B12 only in extensive long-standing disease. Hepatic B12 stores do last years, but that is not what makes this pattern specific to coeliac disease.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 24-year-old with known inflammatory bowel disease develops pneumaturia and faecaluria. Which feature of the underlying disease makes this complication possible?',
      options: [
        { id: 'a', text: 'Continuous involvement of the colon from the rectum proximally' },
        { id: 'b', text: 'Transmural inflammation, which allows a fissure to extend through the full thickness of the wall and open into an adjacent viscus' },
        { id: 'c', text: 'The presence of crypt abscesses within the mucosa' },
        { id: 'd', text: 'Pseudopolyp formation between areas of confluent ulceration' },
      ],
      answerId: 'b',
      explanation: 'An enterovesical fistula requires a tract that has crossed the entire bowel wall, which only transmural inflammation can create. That is Crohn disease, and the same depth generates fissures, strictures from full-thickness fibrosis, creeping fat and adhesions. Ulcerative colitis stops at the submucosa, so it cannot produce a fistula at all; its complications are the ones generated by a raw continuous mucosal surface, namely bleeding and toxic megacolon. Crypt abscesses and pseudopolyps are mucosal findings that do not confer the ability to perforate into another organ.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A patient with pancolitis of 10 years duration undergoes surveillance. Which statement about the neoplastic risk is correct?',
      options: [
        { id: 'a', text: 'Lesions follow the sporadic adenoma-carcinoma sequence, so polypectomy of visible adenomas is sufficient' },
        { id: 'b', text: 'Dysplasia is typically flat and multifocal with TP53 mutation occurring early and APC loss late, so chromoendoscopy or extensive random biopsies are required' },
        { id: 'c', text: 'Risk is determined by the diagnostic label, so Crohn colitis of identical extent carries no meaningful risk' },
        { id: 'd', text: 'Ulcerative proctitis carries the same risk as pancolitis because both involve the rectum' },
      ],
      answerId: 'b',
      explanation: 'Colitis-associated neoplasia arises from a field of chronic inflammation rather than from a discrete adenoma, so it is flat, multifocal and easily missed on white light endoscopy, and its molecular order is reversed with TP53 mutated early and APC lost late. Risk scales with extent and duration of inflamed colon, beginning to rise after about 8 to 10 years, so pancolitis carries a substantially higher risk than left-sided disease and proctitis alone barely raises it. Crohn colitis of comparable extent and duration carries comparable risk.',
      tests: 'investigation',
    },
  ],
};

export default rbpIntestinalInflammatoryMalabsorption;
