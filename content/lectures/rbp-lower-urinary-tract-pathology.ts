import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpLowerUrinaryTractPathology: Lecture = {
  id: 'rbp-lower-urinary-tract-pathology',
  title: 'Bladder & Lower Urinary Tract Pathology',
  system: 'repro',
  source: 'Ch 17 — Male Genital System and Lower Urinary Tract',
  updated: '2026-09-22',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'Ch 17 Male Genital System and Lower Urinary Tract' },
    { kind: 'mechanism', label: 'Field cancerisation of the urothelium by urinary carcinogens' },
    { kind: 'disease', label: 'Urothelial carcinoma, cystitis and congenital bladder anomalies' },
  ],

  highYield: [
    '**Urothelial carcinoma is a FIELD disease, not a lump — that one idea explains multifocality, relentless recurrence, lifelong cystoscopy and the shape of the operation.** The entire lining from renal pelvis through ureter and bladder to proximal urethra is one continuous urothelium bathed in the same urine, so a carcinogen delivered in urine does not expose a spot, it exposes a **surface**. The result is disease that is **multifocal in space and recurrent in time**: about **50 to 70%** of resected non-muscle-invasive tumours recur, frequently at a different site, and a new tumour years later is usually new field rather than incomplete surgery. Three practical consequences follow and are worth more than any list. First, **the presenting symptom is PAINLESS visible haematuria across the whole stream** — painless because a friable tumour bleeds without obstructing or inflaming — and a single episode in an adult over 40 demands full evaluation, since the bleeding is characteristically **intermittent** and stopping means nothing. Second, evaluating the bladder alone is not evaluating the field: **cystoscopy plus upper tract imaging** is the work-up, because a synchronous or later tumour in the renal pelvis or ureter is part of the same process. Third, the operation follows the field: an upper tract tumour is treated by **nephroureterectomy including a cuff of bladder**, because a retained ureteric stump is retained field, and after any resection **surveillance cystoscopy is lifelong** ([[rbp-cystic-obstructive-renal-tumours]]).',
    '**The chemical story is worth learning as a mechanism, because it explains why the BLADDER is the target organ of chemicals the bladder never metabolises.** Aromatic amines such as **beta-naphthylamine and benzidine**, of aniline dye and rubber industry fame, are absorbed and then handled entirely by the **liver**: they are **N-hydroxylated** by cytochrome P450 and then **conjugated with glucuronide**, which detoxifies them and makes them water-soluble for excretion. The conjugate is then concentrated in the **urine**, where the relatively **acid pH hydrolyses the glucuronide back off**, liberating the reactive electrophilic hydroxylamine onto the urothelium that is storing it. So the liver does the activating, the kidney does the delivering, and the bladder — which simply holds the fluid longest — takes the damage; that is also why the exposure is uniform across the whole lining and why latency is long, **15 to 40 years** from exposure to tumour ([[rbp-carcinogenesis-tumour-progression]]). The rest of the list works the same way. **Cigarette smoking is the dominant risk in the West, raising risk 2 to 6 fold and accounting for roughly 50 to 80% of cases in men.** **Cyclophosphamide** is excreted as **acrolein**, which causes haemorrhagic cystitis acutely and carcinoma later, and is the reason mesna and hydration are given with it. **Phenacetin** abuse and **aristolochic acid** hit the upper tract particularly. And the classic geographic exception: **Schistosoma haematobium** eggs lodged in the bladder wall provoke chronic granulomatous inflammation and **squamous metaplasia**, so the cancer that follows is **SQUAMOUS cell carcinoma, not urothelial** — a majority of bladder cancers in historically endemic Egypt and the Middle East, against **3 to 7%** in Western series where squamous carcinoma instead follows long-term catheters, stones and chronic infection ([[rbp-chronic-inflammation-repair]]).',
    '**Two molecular pathways run in parallel and produce two different diseases that happen to line the same organ: papillary and low-grade, or flat and high-grade.** The **papillary** pathway is built on **deletions of chromosome 9**, including **CDKN2A at 9p21**, with **activating FGFR3 mutations in around 70%** of low-grade papillary tumours. Morphology: delicate branching fronds each on a **fibrovascular core**, covered by urothelium that is only mildly thickened and mildly atypical, with preserved polarity — and the graded series runs **papilloma, papillary urothelial neoplasm of low malignant potential, low-grade papillary carcinoma, then high-grade papillary carcinoma**. Natural history: it **recurs repeatedly and invades rarely**, so 10-year survival for the low-grade end is about **98%**. The **flat** pathway is built on **TP53 and RB loss**. Its lesion is **carcinoma in situ**: full-thickness cytological malignancy in a **flat** mucosa, with large hyperchromatic pleomorphic nuclei and, critically, **loss of cohesion** — the cells fall off into the urine. **Flat carcinoma in situ is by definition HIGH grade**, may look like nothing at cystoscopy or like an innocuous red velvety patch, and **progresses to muscle-invasive disease in 50 to 75% if untreated**. The clinical translation of those two morphologies is the point: the papillary tumour is seen and not shed, so **cystoscopy finds it and urine cytology is often falsely negative** because the cells are bland and stay stuck together; the flat lesion is shed and not seen, so **urine cytology is sensitive for it while cystoscopy can miss it entirely**. The two tests are not duplicates — each covers the other one’s blind spot.',
    '**Grade tells you what the cells are; STAGE tells you what operation the patient needs — and the whole staging decision sits at one anatomical layer, the muscularis propria.** The ladder is short: **pTa** non-invasive papillary, **pTis** flat carcinoma in situ, **pT1** invasion through the basement membrane into the **lamina propria**, and **pT2** invasion into the **muscularis propria (detrusor)**. Everything from pTa to pT1 is **non-muscle-invasive disease**, about **75 to 80%** of tumours at presentation, and is managed by **transurethral resection plus intravesical therapy and lifelong surveillance** with the bladder left in place. **pT2 is the watershed**: muscle invasion means **radical cystectomy, usually with neoadjuvant cisplatin-based chemotherapy**, and even then 5-year survival is roughly **50%**, falling steeply once nodes are involved. Hence a rule that looks like pedantry and is actually the most important line on the pathology report: **the resection specimen must contain muscularis propria**, because a specimen without detrusor cannot exclude pT2 — so an under-sampled resection is not reassurance, it is an untested hypothesis, and the correct response is a prompt re-resection rather than surveillance. Two further pieces of the same logic: **intravesical BCG**, which works by provoking a local T-cell mediated immune response against tumour, is the treatment of choice for carcinoma in situ and high-grade non-muscle-invasive disease, while **mitomycin** is used for low-grade disease; and **grade and stage move together but are not the same axis** — a low-grade tumour can be big and still pTa, while a small high-grade tumour can already be pT2.',
    '**Non-neoplastic bladder disease is worth knowing for three lesions that get mistaken for tumour and one that explains a whole pattern of pain.** **Acute and chronic cystitis** is usually coliform — Escherichia coli, Proteus, Klebsiella, Enterobacter — and gives frequency, urgency, suprapubic pain and dysuria with a normal upper tract; variants include **haemorrhagic cystitis** after cyclophosphamide or adenovirus, **follicular cystitis** with lymphoid follicles in the mucosa, **eosinophilic cystitis**, and **polypoid cystitis**, whose oedematous broad projections are raised by an indwelling catheter and are routinely mistaken for papillary tumour. **Malakoplakia** is the one with a mechanism worth the name: soft **yellow mucosal plaques 3 to 4 cm across**, made of sheets of **foamy macrophages (von Hansemann cells)** containing **laminated, mineralised concretions — Michaelis-Gutmann bodies** that stain with PAS and for calcium and iron. It follows chronic Escherichia coli infection in **immunosuppressed** patients and reflects **defective phagolysosomal killing**: the macrophage ingests bacteria it cannot digest, and the undigested bacterial debris mineralises inside it, so the plaque is a monument to failed digestion rather than a tumour. **Interstitial cystitis (chronic pelvic pain syndrome)** affects mainly women, gives suprapubic pain **worse with bladder filling and RELIEVED by voiding**, with **sterile urine**, mucosal fissures and, in the ulcerative form, a **Hunner lesion** with mast cells in the wall — the pain pattern is the diagnosis, because infection hurts on voiding while this hurts on filling. Finally, chronic irritation makes the urothelium change its mind about what it is: **cystitis cystica and cystitis glandularis** (Brunn nests becoming cystic or intestinalised) and **squamous metaplasia** are the metaplastic responses, and the glandular one is the background from which the rare bladder **adenocarcinoma** arises.',
    '**Congenital and obstructive lesions are geography problems, and each announces itself at a predictable site.** **Exstrophy** is failure of the anterior abdominal wall and anterior bladder to close, leaving the posterior bladder wall open on the abdominal surface; it travels with **epispadias**, and the chronically exposed mucosa undergoes **glandular metaplasia with a long-term risk of ADENOcarcinoma**. **Urachal remnants** persist along the tract from the bladder dome to the umbilicus: they may form a midline cyst or a discharging umbilical sinus, and — the examinable point — **carcinoma arising in a urachal remnant is at the DOME and is typically adenocarcinoma**, an anatomically specific exception to the urothelial rule. **Diverticula** are outpouchings of mucosa between hypertrophied detrusor bundles; a few are congenital, most are **acquired from chronic outflow obstruction**, classically prostatic ([[rbp-prostate-pathology]]), and their significance is entirely about **stasis** — urine that sits produces infection, stones, and occasionally a carcinoma that is detected late because the diverticulum has **no muscle wall** to hold it in. **Vesicoureteric reflux** is the commonest and most serious congenital anomaly, delivering infected urine to the renal papillae and scarring the kidney. Above the bladder, **ureteropelvic junction obstruction** is the commonest cause of hydronephrosis in infants and children, and **retroperitoneal fibrosis** encases the ureters and pulls them **medially**, an imaging sign that distinguishes it from other causes of obstruction. Below it, **urethral caruncle** — a small, red, painful, friable polyp at the external meatus of a postmenopausal woman — is inflammatory and benign, and its whole clinical importance is not being mistaken for carcinoma.',
  ],

  mechanism: {
    title: 'Why one exposure produces many tumours over many years',
    steps: [
      { id: 's1', label: 'An aromatic amine or tobacco carcinogen is absorbed and N-hydroxylated in the liver, then conjugated with glucuronide for excretion', detail: 'The activating chemistry happens in the liver, not the bladder. The conjugate is harmless while it is in the blood.', emphasis: 'normal' },
      { id: 's2', label: 'The conjugate is concentrated in urine, where acid pH hydrolyses it and releases the reactive electrophile onto the urothelium', detail: 'The urine is the delivery system, and the bladder simply holds it longest. This is why the bladder is the target organ of a chemical it never metabolises.', emphasis: 'key' },
      { id: 's3', label: 'The entire lining from renal pelvis to urethra is exposed at once, and mutant clones arise across the whole surface: a field defect', detail: 'Multifocal in space and recurrent in time. Latency from exposure to tumour is 15 to 40 years, and about 50 to 70% of resected tumours recur.', emphasis: 'key' },
      { id: 's4', label: 'On the flat pathway, TP53 and RB are lost: flat carcinoma in situ, high grade by definition, discohesive and easily missed at cystoscopy', detail: 'Cells shed into the urine, which is why cytology detects it while the mucosa may look normal or only slightly reddened.', emphasis: 'key' },
      { id: 's5', label: 'Invasion through the basement membrane into the lamina propria (pT1), then into the muscularis propria (pT2)', detail: 'pT2 is the watershed that converts transurethral resection plus surveillance into radical cystectomy, so the specimen must contain detrusor muscle to be stageable.', emphasis: 'danger' },
      { id: 's6', label: 'Muscle-invasive disease spreads to pelvic nodes and then to liver, lung and bone; 5-year survival is around 50% even after radical cystectomy', detail: 'Untreated carcinoma in situ reaches this point in 50 to 75% of cases, which is why a flat lesion with no mass is still an indication for intravesical BCG.', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'The papillary fork: recurring but rarely invading',
        steps: [
          { id: 'b1', label: 'Chromosome 9 deletions including CDKN2A, with activating FGFR3 mutations in about 70%', emphasis: 'key' },
          { id: 'b2', label: 'Delicate fronds on fibrovascular cores with preserved polarity: low-grade papillary carcinoma, cohesive and bland, so urine cytology is often negative', emphasis: 'normal' },
          { id: 'b3', label: 'Repeated recurrence with rare progression: about 98% 10-year survival, and cystoscopy rather than cytology is the surveillance test', emphasis: 'normal' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Painless visible haematuria throughout the stream in a 66-year-old smoker, which stops spontaneously after two days', mechanism: 'A friable urothelial tumour bleeding into the lumen without obstructing or inflaming, which is why it is painless. Bleeding is intermittent by nature, so spontaneous cessation carries no reassurance; the single episode is the indication for cystoscopy and upper tract imaging, because the field extends beyond the bladder', significance: 'key' },
    { sign: 'Frequency, urgency and dysuria with repeatedly sterile urine, and a cystoscopy showing only a flat red velvety patch', mechanism: 'Flat carcinoma in situ. It produces irritative symptoms with no mass and no infection, and the mucosa may look normal or only slightly reddened, so the diagnosis rests on biopsy and on urine cytology, which is sensitive here because the high-grade cells are discohesive and shed', significance: 'key' },
    { sign: 'Terminal haematuria and sterile pyuria in a man who has worked in irrigation canals in the Nile delta, with a thin rim of calcification in the bladder wall on plain film', mechanism: 'Chronic Schistosoma haematobium infection. Eggs lodged in the wall provoke granulomatous inflammation, fibrosis and calcification, and the metaplastic squamous epithelium they induce is the precursor of squamous cell carcinoma rather than urothelial carcinoma', significance: 'key' },
    { sign: 'Soft, raised, yellow mucosal plaques several centimetres across at cystoscopy in a renal transplant recipient with recurrent Escherichia coli infection', mechanism: 'Malakoplakia. Macrophages ingest bacteria they cannot digest because phagolysosomal killing is defective, and the undigested debris mineralises within them as laminated Michaelis-Gutmann bodies. The plaques look neoplastic and are entirely inflammatory, which is exactly why they are biopsied', significance: 'supportive' },
    { sign: 'Suprapubic pain that builds as the bladder fills and is relieved by voiding, with sterile urine in a middle-aged woman', mechanism: 'Interstitial cystitis. The pain follows distension rather than micturition, which inverts the pattern of bacterial cystitis, and the urine stays sterile. Cystoscopy under anaesthesia may show mucosal fissures or a Hunner lesion, with mast cells in the wall on biopsy', significance: 'key' },
    { sign: 'A small, red, exquisitely tender friable polyp at the external urethral meatus of a 70-year-old woman, bleeding on contact', mechanism: 'Urethral caruncle: an inflammatory polypoid lesion of ulcerated, highly vascular granulation tissue covered by inflamed epithelium. It is entirely benign, and its clinical weight lies in being distinguished from urethral carcinoma by biopsy rather than by appearance', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Urine cytology reported as negative while cystoscopy shows a 2 cm delicate papillary lesion; a second patient has positive cytology with a normal-looking bladder', meaning: 'The two blind spots of the two pathways, demonstrated side by side. Low-grade papillary tumours are made of bland, cohesive cells that stay attached, so they are seen and not shed and cytology misses them. Flat carcinoma in situ is high grade and discohesive, so its cells are shed and detected in urine while the mucosa can look unremarkable. Cytology and cystoscopy cover for each other and neither replaces the other' },
    { clue: 'A transurethral resection report of high-grade urothelial carcinoma invading the lamina propria, with the note that muscularis propria is not represented in the specimen', meaning: 'The tumour is unstageable at the level that matters, since without detrusor in the block pT2 cannot be excluded. This is an indication for prompt re-resection rather than surveillance, because the difference between pT1 and pT2 is the difference between keeping the bladder with intravesical therapy and radical cystectomy with neoadjuvant chemotherapy' },
    { clue: 'Molecular testing of a small papillary bladder tumour shows an activating FGFR3 mutation and deletions on chromosome 9', meaning: 'The papillary, low-grade pathway. This genotype predicts a tumour that recurs repeatedly but invades rarely, with about 98% 10-year survival at the low-grade end, so management is resection with intravesical mitomycin and continued cystoscopic surveillance. TP53 and RB loss would indicate the flat, high-grade route with its very different trajectory' },
    { clue: 'CT urography performed for haematuria shows the expected bladder tumour and also a filling defect in the right renal pelvis', meaning: 'Synchronous upper tract disease, which is the field defect made visible rather than metastasis. It justifies imaging the whole urinary tract in every case of unexplained haematuria, and it changes the operation: an upper tract tumour is treated by nephroureterectomy including a cuff of bladder, because a retained ureteric stump is retained field' },
    { clue: 'Bladder biopsy showing keratinising squamous epithelium with dysplasia, dense fibrosis and calcified ova with a terminal spine surrounded by granulomas', meaning: 'Schistosoma haematobium with squamous metaplasia progressing to squamous cell carcinoma. The terminal spine identifies the species, and the sequence is chronic irritation to metaplasia to dysplasia to carcinoma. This is the classic geographic exception to the rule that bladder cancer is urothelial, and it is why treating the infection does not remove the need for surveillance' },
    { clue: 'Biopsy of a yellow bladder plaque showing sheets of foamy macrophages containing laminated basophilic concretions that stain with PAS and for calcium', meaning: 'Malakoplakia. The von Hansemann macrophages and their Michaelis-Gutmann bodies represent defective phagolysosomal degradation of ingested bacteria, typically Escherichia coli in an immunosuppressed host. The diagnosis is reassuring precisely because the lesion mimics carcinoma at cystoscopy, and management is antibiotics plus reduction of immunosuppression rather than resection' },
  ],

  treatment: [
    {
      logic: 'Treat the field rather than the tumour: resect what you can see, instil into what you cannot, and never stop looking',
      detail: 'Because the carcinogen exposed the whole lining at once, removing a tumour leaves the field behind, which is why **50 to 70% of non-muscle-invasive tumours recur**. The plan therefore has three parts. **Transurethral resection** removes visible disease and provides the staging specimen. **Intravesical therapy** treats the surface: **BCG**, which provokes a local T-cell mediated antitumour response, for carcinoma in situ and high-grade non-muscle-invasive disease, and **mitomycin** for low-grade disease, often as a single immediate post-resection instillation to kill floating cells before they implant. **Surveillance is lifelong**, cystoscopy for the papillary lesions the urine will not reveal and cytology for the flat ones the eye will not see, with periodic upper tract imaging because the renal pelvis and ureter are the same field — and an upper tract tumour is removed by **nephroureterectomy with a bladder cuff** for the same reason. The one intervention that shrinks the field itself is **stopping smoking**, which is worth stating plainly to a patient who assumes the damage is already done ([[rbp-cystic-obstructive-renal-tumours]]).',
    },
    {
      logic: 'Let the detrusor decide the operation, and treat the non-neoplastic bladder by its mechanism rather than by its symptom',
      detail: 'Staging turns on one layer. **pTa, pTis and pT1 keep the bladder**; **pT2 invasion of the muscularis propria means radical cystectomy with urinary diversion, preceded by cisplatin-based neoadjuvant chemotherapy**, which improves survival over surgery alone, with 5-year survival around **50%** and much less with nodal disease. That is why a specimen lacking detrusor gets **re-resected** rather than followed. For the non-neoplastic bladder, each condition is treated at its mechanism: bacterial cystitis by the organism; **cyclophosphamide haemorrhagic cystitis is prevented by hydration and MESNA**, which neutralises acrolein in urine; **malakoplakia by prolonged antibiotics and by reducing immunosuppression**, since the defect is in macrophage killing rather than in the bacterium; **interstitial cystitis** by bladder-directed measures rather than repeated antibiotic courses, since the urine is sterile; and **schistosomiasis with praziquantel — which kills the worm but does NOT reverse established squamous metaplasia**, so surveillance continues. Chronic outflow obstruction is treated at its cause, since it is the obstruction, not the bladder, that generates the trabeculation, diverticula, stasis, stones and infection ([[rbp-prostate-pathology]]).',
    },
  ],

  mnemonics: [
    {
      hook: 'One carcinogen, one lining, many tumours',
      expansion: [
        'The liver activates the amine and conjugates it; the kidney delivers it; the bladder stores it longest and takes the damage',
        'Acid urine hydrolyses the conjugate and releases the reactive electrophile onto the whole urothelium at once',
        'So the lesion is a surface, not a spot: multifocal in space and recurrent in time, with 15 to 40 years of latency',
        'Therefore image the upper tract as well as the bladder, and remove the ureter with a bladder cuff for an upper tract tumour',
        'And therefore surveillance is lifelong, because each recurrence is new field rather than old surgery',
      ],
    },
    {
      hook: 'Flat is high and shed; papillary is low and seen',
      expansion: [
        'Flat carcinoma in situ is high grade by definition, driven by TP53 and RB loss',
        'Its cells are discohesive, so they fall into the urine: cytology is sensitive, cystoscopy can look normal',
        'Papillary tumours are usually low grade, driven by chromosome 9 deletions and FGFR3 mutation',
        'Their cells are bland and cohesive, so cytology is often falsely negative and cystoscopy is the test that finds them',
        'Untreated carcinoma in situ progresses to muscle invasion in 50 to 75%, while low-grade papillary disease recurs but rarely invades',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Follow-up after a completely resected bladder tumour',
      wrongInstinct: 'The low-grade papillary tumour was resected completely with clear margins and the cytology is negative, so the patient can be discharged',
      rightAnswer: 'Keep him under lifelong cystoscopic surveillance with periodic upper tract imaging. Between 50 and 70% recur, and negative cytology is expected in low-grade disease rather than reassuring',
      why: 'The carcinogen was delivered in urine to the entire urothelium, so the disease is a field and not a lesion — complete excision removes the tumour and leaves every other exposed cell in place, which is why recurrences appear at new sites and in the upper tract',
    },
    {
      questionCategory: 'Bladder cancer in a patient from an endemic area',
      wrongInstinct: 'Bladder cancer is urothelial, so a schistosomiasis-associated tumour is a urothelial carcinoma provoked by chronic inflammation',
      rightAnswer: 'Schistosoma haematobium causes SQUAMOUS cell carcinoma. The eggs drive chronic granulomatous inflammation and squamous metaplasia, and the carcinoma arises from that metaplastic epithelium',
      why: 'Carcinomas arise from the epithelium that is actually present at the site, and chronic irritation has already replaced urothelium with squamous epithelium — the same logic that makes long-term catheters and bladder stones produce squamous carcinoma in non-endemic countries',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 63-year-old man had a solitary low-grade papillary urothelial carcinoma of the bladder resected completely two years ago, with clear margins. He now has painless haematuria, and imaging shows a filling defect in the left renal pelvis. What does this pattern demonstrate?',
      options: [
        { id: 'a', text: 'Haematogenous metastasis from the original bladder tumour to the kidney' },
        { id: 'b', text: 'Incomplete resection of the original tumour, with local regrowth extending up the ureter' },
        { id: 'c', text: 'A field defect: the whole urothelium was exposed to urinary carcinogens, so new primary tumours arise across the surface and surveillance must include the upper tract' },
        { id: 'd', text: 'A second unrelated malignancy, since renal pelvic tumours are not related to bladder tumours' },
      ],
      answerId: 'c',
      explanation: 'Carcinogens reach the urothelium dissolved in urine, so the exposed unit is the entire lining from renal pelvis to proximal urethra rather than any one site. That is why urothelial carcinoma is multifocal in space and recurrent in time, with 50 to 70% of resected non-muscle-invasive tumours recurring, often elsewhere. A new tumour two years later with clear original margins is new field rather than residual disease, and it is not a metastasis, since low-grade papillary tumours rarely invade at all. The practical consequences are that the upper tract is imaged as part of every haematuria work-up, that surveillance cystoscopy is lifelong, and that an upper tract tumour is removed by nephroureterectomy with a cuff of bladder, because a retained ureteric stump is retained field.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 45-year-old man from the Nile delta has terminal haematuria and sterile pyuria of several years. Plain film shows a thin rim of bladder wall calcification. Biopsy shows calcified ova with terminal spines surrounded by granulomas, with adjacent keratinising epithelial dysplasia. Which malignancy is he at risk of, and why?',
      options: [
        { id: 'a', text: 'Urothelial carcinoma, because all bladder carcinogens act on urothelium' },
        { id: 'b', text: 'Squamous cell carcinoma, because chronic egg-induced inflammation drives squamous metaplasia and the carcinoma arises from that metaplastic epithelium' },
        { id: 'c', text: 'Adenocarcinoma, arising from a urachal remnant at the dome' },
        { id: 'd', text: 'Small cell carcinoma, reflecting neuroendocrine differentiation induced by chronic parasitic infection' },
      ],
      answerId: 'b',
      explanation: 'Schistosoma haematobium eggs deposited in the bladder wall provoke chronic granulomatous inflammation with fibrosis and calcification, and the urothelium responds by squamous metaplasia. A carcinoma then arises from the epithelium that is actually present, so it is squamous rather than urothelial — the classic geographic exception, historically the majority of bladder cancers in endemic Egypt against 3 to 7% of Western cases. The same reasoning explains squamous carcinoma arising on long-term catheters and bladder stones in non-endemic countries. Urachal adenocarcinoma is anatomically specific to the dome, and treating the infection with praziquantel does not reverse established metaplasia, so surveillance continues.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A 70-year-old woman has frequency, urgency and dysuria with repeatedly sterile urine. Cystoscopy shows a flat, slightly reddened patch with no mass. Urine cytology shows large, highly atypical, discohesive cells. Biopsy shows full-thickness cytological malignancy in flat mucosa with no invasion. Which statement is correct?',
      options: [
        { id: 'a', text: 'This is a low-grade lesion, since no mass and no invasion are present, and surveillance alone is appropriate' },
        { id: 'b', text: 'This is flat carcinoma in situ, which is high grade by definition, progresses to muscle-invasive disease in 50 to 75% untreated, and is treated with intravesical BCG' },
        { id: 'c', text: 'The positive cytology with a normal-looking bladder indicates contamination, since carcinoma in situ does not shed cells' },
        { id: 'd', text: 'Immediate radical cystectomy is mandatory, because carcinoma in situ is by definition muscle-invasive disease' },
      ],
      answerId: 'b',
      explanation: 'Flat carcinoma in situ is high grade by definition and belongs to the TP53 and RB pathway, quite distinct from the chromosome 9 and FGFR3 papillary pathway. Its cells lose cohesion, which is why they shed into urine and make cytology sensitive, and why the mucosa may look normal or merely reddened at cystoscopy — the opposite blind spot to low-grade papillary disease, which is seen but not shed. Irritative symptoms with sterile urine are the characteristic presentation. Untreated it progresses to muscle invasion in 50 to 75%, so it is treated actively with intravesical BCG, which provokes a local T-cell mediated antitumour response, rather than watched. It is not itself muscle-invasive, so cystectomy is reserved for BCG failure or established pT2 disease.',
      tests: 'investigation',
    },
  ],
};

export default rbpLowerUrinaryTractPathology;
