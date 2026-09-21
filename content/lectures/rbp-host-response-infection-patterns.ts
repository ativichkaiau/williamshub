import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpHostResponseInfectionPatterns: Lecture = {
  id: 'rbp-host-response-infection-patterns',
  title: 'Host Response & Tissue Patterns of Infection',
  system: 'pathology',
  source: 'Ch 8 — General Pathology of Infectious Diseases',
  updated: '2026-09-21',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 8 General Pathology of Infectious Diseases' },
    { kind: 'mechanism', label: 'Five inflammatory patterns — the pattern predicts the CLASS of organism before any culture returns' },
    { kind: 'exam', label: 'A granuloma is a T-cell achievement · in sepsis the failing organs contain no organisms' },
  ],

  highYield: [
    '**The single most useful idea in the chapter: the inflammatory PATTERN predicts the CLASS of organism, so the biopsy narrows the differential before any culture returns.** Routine bacterial culture takes 24 to 48 hours, mycobacterial culture on solid media up to six weeks; the histology is on a screen within hours. Robbins reduces the tissue responses to **five patterns — suppurative, mononuclear and granulomatous, cytopathic-cytoproliferative, necrotising, and chronic inflammation with fibrosis** — and each is the readout of which effector arm the host engaged. The reasoning is a chain, not a lookup table: the organism’s **size, location (extracellular against intracellular) and pattern-recognition ligands** determine which effector can reach it; the effector determines the histology; so the histology reports backwards to the class of organism. **Extracellular and killed by opsonophagocytosis gives neutrophils. Intracellular and requiring cell-mediated immunity gives macrophages, and if the antigen persists, a granuloma. Replicating inside a cell it alters gives a cytopathic change with a lymphocytic infiltrate. Killing faster than the response can arrive gives necrosis with few cells. Persisting for months gives fibrosis.** The working order is therefore fixed: **read the pattern, then read the host, then order the stain the pattern names.**',
    '**Suppurative means an extracellular pyogen, and the pus is the host’s own doing.** Bacterial formyl-methionyl peptides, complement **C5a**, **leukotriene B4** and epithelial **CXCL8** recruit neutrophils within hours; the organisms are extracellular and capsulated, too large to be handled intracellularly and reachable only by opsonophagocytosis, so the neutrophil is the effector the tissue selects. **The liquefaction is neutrophil lysosomal hydrolase, not bacterial enzyme** — the damage is the response, again. Expect **Staphylococcus aureus, Streptococcus pyogenes and pneumoniae, Neisseria, Escherichia coli, Klebsiella, Pseudomonas**. Two morphological consequences follow and they diverge sharply. **An abscess destroys the stromal scaffold**, so regeneration is impossible, it heals by **fibrous scar**, and the avascular acidic cavity means **antibiotics alone will not cure it — it must be drained**. **Lobar pneumonia spares the alveolar framework**, so it resolves completely with restored architecture. The honest caveat, stated as a rule rather than a hedge: **fungi, some amoebae and sterile crystals also recruit neutrophils**, so suppuration narrows the differential to a class and does not name a species — which is exactly the claim being made.',
    '**Mononuclear and granulomatous means the organism is INTRACELLULAR, and a granuloma is proof that the T-cell axis is working.** Lymphocytes, plasma cells and macrophages dominate when antibody and neutrophils cannot reach the organism: **viruses, intracellular bacteria (Mycobacterium, Listeria, Brucella, Salmonella typhi, Rickettsia, Chlamydia), spirochaetes, fungi and parasites**. Two sub-signatures are worth memorising because they are nearly specific. **A plasma-cell-rich infiltrate cuffing small vessels with endothelial swelling — obliterative endarteritis — should trigger a Treponema stain**, because syphilis is the organism that reliably produces it and the spirochaete is invisible on H and E. **Epithelioid macrophages with Langhans giant cells and a lymphocyte cuff is a granuloma**, and it forms only where **CD4 Th1 cells supply interferon-gamma and macrophages respond through IL-12 and TNF**. **Caseation means mycobacteria or an endemic dimorphic fungus** — Histoplasma, Coccidioides, Blastomyces — until stains and culture say otherwise; **non-caseating opens a wider list**: sarcoidosis, Crohn disease, berylliosis (histologically identical to sarcoid), foreign body, and the stellate suppurative granuloma of cat-scratch disease. The cell biology of granuloma formation: [[rbp-chronic-inflammation-repair]].',
    '**Cytopathic-cytoproliferative means viral, and it is the one pattern where morphology frequently names the agent.** The hallmark is cell injury or proliferation with a **sparse, interstitial and perivascular LYMPHOCYTIC infiltrate rather than neutrophils** — which is why viral pneumonia is interstitial, why the chest film looks worse than the examination, and why the sputum is scant. Look for **inclusion bodies** and read their location: **CMV gives an enlarged cell with a basophilic intranuclear owl-eye inclusion AND smaller cytoplasmic inclusions**, **HSV and VZV give the Cowdry A eosinophilic intranuclear inclusion with chromatin margination and multinucleation**, **adenovirus gives the smudge cell**, **rabies gives the cytoplasmic Negri body**, **measles gives the Warthin-Finkeldey giant cell**, and **HPV gives the koilocyte** — a perinuclear halo with a raisinoid nucleus. **Syncytia** (RSV, measles, HSV) and **proliferative lesions** (molluscum, warts) belong here too. The trap, and it is a real one: **a neutrophil-rich pattern does not exclude a virus.** Early HSV oesophagitis and adenovirus can be frankly neutrophilic, and a secondary bacterial pneumonia after influenza restores full suppuration on top of the viral change — so the pattern argues probabilistically, and where it conflicts with the clinical picture, it is the stain and the molecular test that adjudicate. Which agent causes which injury: [[rbp-infectious-agents-injury-mechanisms]].',
    '**Necrotising and chronic-fibrosing are the two ends of the time axis, and both are still the host.** **Necrotising**: extensive tissue death with a **strikingly sparse cellular response**, because the organism’s toxins or its vascular invasion kill the responders as fast as they arrive. **Clostridium perfringens alpha-toxin is a phospholipase C** that hydrolyses membrane lecithin outright; **Streptococcus pyogenes necrotising fasciitis** combines SpeB protease with superantigen; **Entamoeba histolytica** liquefies liver into anchovy-paste abscess; and the **angioinvasive fungi — Aspergillus and the Mucorales — invade arterial walls, thrombose them and INFARCT the tissue**, which is the origin of the black eschar in rhino-orbital mucormycosis and of the CT halo and air-crescent signs in pulmonary aspergillosis. The bedside translation of a sparse cellular response is **pain and systemic toxicity wholly out of proportion to an unimpressive surface**. **Chronic with fibrosis**: where the response cannot clear the organism it walls it off and scars, and in each classical example **the fibrosis, not the microbe, is the disease** — schistosome eggs provoke granulomas that become **pipe-stem periportal fibrosis with portal hypertension and preserved hepatocytes**, chronic hepatitis B and C give bridging fibrosis and cirrhosis, and **Helicobacter pylori runs chronic gastritis to atrophy, intestinal metaplasia and carcinoma**.',
    '**The host’s defect subtracts the expected pattern, and the ABSENCE is itself the diagnostic finding.** **Neutropenia removes suppuration.** Below an absolute neutrophil count of about 0.5, and certainly below 0.1, there is no pus, no abscess wall and often no radiographic infiltrate — the infiltrate is made of the cells the patient does not have. The consequence is a rule with teeth: **a clear chest radiograph in a febrile neutropenic patient excludes nothing**, and the classic appearance may materialise only as the count recovers, which is deterioration on the film during clinical improvement. **T-cell deficiency removes the granuloma.** In advanced HIV with CD4 below about 100, on anti-TNF biologics or high-dose glucocorticoids, or in an infant with miliary disease, the node shows **sheets of foamy macrophages stuffed with acid-fast bacilli, no epithelioid cells and no Langhans giant cells** — and the tuberculin test and interferon-gamma release assay are negative **because they assay the very response that has failed**. The rule to carry out of this module: **in the immunosuppressed, an absent granuloma RAISES the probability of mycobacterial or fungal infection rather than lowering it, and the organism burden is highest exactly where the inflammation is least.** Which defect predicts which organism, with the CD4 thresholds: [[secondary-immunodeficiency-hiv]].',
  ],

  mechanism: {
    title: 'Local infection → bacteraemia → PAMP recognition → the endothelium becomes the effector organ → shock and failure of UNINFECTED organs',
    steps: [
      {
        id: 's1',
        label: 'A local infection is contained by one of the five patterns, and the whole future septic illness can be generated by a lesion a few centimetres across',
        detail: 'A small abscess, a pyelonephritis, a line tip. The disproportion between the size of the source and the severity of the illness is the first clue that the organism is not the thing doing the damage.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'Organisms or their molecular fragments breach into blood: bacteraemia, which on its own can be transient and silent',
        detail: 'Brushing teeth produces transient bacteraemia. Bacteraemia is a microbiological event; sepsis is a host event. Culture-negative sepsis is common because the PAMPs, not the organisms, need to arrive.',
      },
      {
        id: 's3',
        label: 'Pattern recognition on monocytes and endothelium: lipid A to TLR4, peptidoglycan and lipoteichoic acid to TLR2, microbial DNA to TLR9 — NF-kappaB within 30 to 90 minutes',
        detail: 'Hence sepsis is not a Gram-negative privilege: Gram-positives and fungi drive the identical programme through different receptors. TNF, IL-1 and IL-6 are released systemically.',
        emphasis: 'key',
      },
      {
        id: 's4',
        label: 'The endothelium becomes the effector organ: iNOS-derived nitric oxide, glycocalyx shedding and junctional loss, plus tissue factor with suppressed protein C and antithrombin',
        detail: 'Vasodilatation gives hypotension refractory to fluid; lost barrier gives capillary leak and oedema; procoagulant endothelium gives disseminated microthrombi. Sepsis-3 defines sepsis here: life-threatening organ dysfunction from a dysregulated host response, a SOFA rise of 2 or more.',
        emphasis: 'key',
      },
      {
        id: 's5',
        label: 'Microvascular occlusion plus mitochondrial dysfunction: oxygen is delivered but not used, lactate rises, and DIC makes the patient bleed and clot at once',
        detail: 'Septic shock is defined by a vasopressor requirement to hold mean arterial pressure at 65 mmHg with a lactate above 2 mmol/L despite fluid resuscitation; hospital mortality is around 40%. Consumption of platelets and fibrinogen is why the bleeding and the thrombosis are the same process.',
        emphasis: 'danger',
      },
      {
        id: 's6',
        label: 'Multi-organ failure — kidney, lung, liver, brain — in organs that contain NO organisms, and at autopsy show remarkably little cell death',
        detail: 'The failure is functional rather than structural, which is why survivors can recover renal and hepatic function completely. The organism never reached these organs; the response did.',
        emphasis: 'danger',
      },
    ],
    branches: [
      {
        fromId: 's4',
        title: 'Why every anti-mediator strategy has failed, and what actually works',
        steps: [
          { id: 'b1', label: 'Anti-endotoxin, anti-TNF, IL-1 antagonists and high-dose steroids: all tested, none improved survival', emphasis: 'key' },
          { id: 'b2', label: 'By the time sepsis is recognisable the cascade is redundant and self-sustaining — removing one mediator leaves the rest', emphasis: 'normal' },
          { id: 'b3', label: 'A later immunoparalysis phase follows, with lymphocyte apoptosis and loss of monocyte HLA-DR, so blanket suppression can be actively harmful', emphasis: 'danger' },
          { id: 'b4', label: 'What changes mortality is removing the stimulus: early effective antibiotics and source control, with fluid and vasopressor support', emphasis: 'key' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Thick creamy pus in a cavity with a fibrous rim, which recurs within days of every course of antibiotics', mechanism: 'Suppuration by extracellular pyogens. The liquefaction is neutrophil lysosomal hydrolase; the rim is the host walling the lesion off, and it is also what excludes the antibiotic. The avascular, acidic, high-inoculum interior inactivates aminoglycosides and blunts beta-lactams, so the pattern itself dictates drainage. Because the stromal scaffold has been destroyed, it will heal by scar and not by regeneration', significance: 'key' },
    { sign: 'Structureless eosinophilic debris ringed by epithelioid macrophages, Langhans giant cells and a lymphocyte cuff', mechanism: 'A caseating granuloma, which is a delayed-type hypersensitivity product rather than anything the organism secretes. Its presence proves a functioning CD4 and interferon-gamma axis, and caseation itself narrows the field to mycobacteria and the endemic dimorphic fungi — so this one field justifies ordering Ziehl-Neelsen, fungal stains, mycobacterial culture and tissue PCR before any result exists', significance: 'key' },
    { sign: 'Sheets of foamy macrophages crowded with acid-fast bacilli, with no epithelioid cells and no granulomas, in a patient with a CD4 count of 30', mechanism: 'The missing granuloma IS the finding. Epithelioid transformation requires CD4-derived interferon-gamma, so without T-cell help the macrophages accumulate organisms instead of killing them. The organism burden is highest precisely where the inflammation is least, and a negative tuberculin test or interferon-gamma release assay here measures the failed response rather than the absence of infection', significance: 'key' },
    { sign: 'A febrile neutropenic patient with a near-normal chest radiograph who develops dense infiltrates and haemoptysis as the neutrophil count recovers', mechanism: 'A pulmonary infiltrate is largely made of neutrophils, so a patient without neutrophils cannot generate one. The radiograph was measuring the host, not the fungus. Recovery of the count converts an invisible invasive aspergillosis into a visible one, which looks like deterioration on the film during clinical improvement', significance: 'key' },
    { sign: 'A plasma-cell-rich infiltrate cuffing small vessels with swollen endothelium, in a biopsy of a widespread copper-coloured rash', mechanism: 'Obliterative endarteritis with plasma cells is the syphilis signature. Treponema pallidum is too slender to be resolved on H and E, so the pattern is the only prompt available — it should trigger a Warthin-Starry silver stain or, better, Treponema immunohistochemistry', significance: 'supportive' },
    { sign: 'Pain far out of proportion to a bland-looking limb, with crepitus, a thin grey dishwater exudate and few neutrophils at the fascial plane', mechanism: 'Necrotising fasciitis. Clostridial alpha-toxin and streptococcal enzymes kill the responding leukocytes as fast as they arrive, which is why the cellular infiltrate is sparse and the skin still looks deceptively intact while fascia liquefies beneath it. The sparse response is the mechanism, and it is what makes this a surgical emergency rather than a biopsy question', significance: 'key' },
  ],

  investigations: [
    { clue: 'Ziehl-Neelsen, or auramine-rhodamine fluorescence, for acid-fast organisms', meaning: 'The mycolic-acid-rich wall retains carbol fuchsin through acid-alcohol decolourisation, which is what acid-fastness means. Sensitivity is the limitation to quote: smear positivity needs roughly 10 000 organisms per millilitre, so a negative tissue smear excludes nothing and culture or PCR must accompany it; auramine fluorescence is more sensitive and faster to screen. A modified stain with a weaker decolouriser demonstrates Nocardia, Cryptosporidium and Cyclospora, which are only partially acid-fast' },
    { clue: 'Grocott methenamine silver and periodic acid-Schiff for fungi', meaning: 'Silver impregnates cell-wall polysaccharide and prints the organism black against a pale green counterstain, which is what finds scanty organisms and is the only reliable way to see Pneumocystis cysts — invisible on H and E, where the clue is instead a foamy eosinophilic alveolar exudate. PAS shows the fungus while preserving the tissue reaction around it. Morphology then classifies: septate hyphae branching at acute angles are Aspergillus; broad, ribbon-like, pauciseptate hyphae branching at right angles are Mucorales; narrow-based against broad-based budding separates Candida and Histoplasma from Blastomyces; and mucicarmine stains the Cryptococcus capsule' },
    { clue: 'Tissue Gram stain, and the organisms it will never show', meaning: 'A Brown-Hopps or Brown-Brenn Gram stain separates Gram-positive from Gram-negative and gives morphology, but it is unreliable in formalin-fixed tissue after antibiotics have been given. More importantly it has systematic blind spots that the pattern must prompt you to cover: Mycoplasma has no cell wall and cannot be Gram-stained at all, mycobacteria need acid-fast stains, and Legionella and Treponema require silver impregnation (Dieterle or Warthin-Starry) or immunohistochemistry' },
    { clue: 'Giemsa for the intracellular organisms', meaning: 'Giemsa is the stain for organisms living inside host cells or inside red cells: Histoplasma within macrophages, Leishmania amastigotes, Plasmodium and Babesia, Toxoplasma, Borrelia, chlamydial inclusions — and Helicobacter pylori on a gastric biopsy, where it is faster and cheaper than immunohistochemistry. It pairs with the mononuclear pattern the way silver pairs with the granulomatous one' },
    { clue: 'Why H and E alone is often not enough, and what supplements it', meaning: 'An H and E section reliably shows the tissue reaction and unreliably shows the organism. Anything below about a micrometre, anything with a poorly staining wall — spirochaetes, mycobacteria, Legionella — and anything sheltering inside a macrophage is invisible or non-specific on H and E, and viral inclusions are specific but insensitive. That asymmetry is the working relationship between histology and microbiology: the PATTERN tells you which stain to order, and the stain, immunohistochemistry (CMV, HSV, Treponema), in-situ hybridisation (EBER for EBV) or broad-range 16S PCR on tissue then identifies the organism — the last of these being the recourse when antibiotics were given before any culture was taken' },
    { clue: 'A negative tuberculin skin test or interferon-gamma release assay in a profoundly immunosuppressed patient', meaning: 'Both assays measure a T-cell response to mycobacterial antigen, so they fail in exactly the patients whose T-cell response has failed — the same patients in whom granulomas are absent. The rule is therefore categorical: below a CD4 count of about 100, or on anti-TNF therapy, a negative result is uninformative and must never be used to exclude tuberculosis. Only a direct organism test — stain, culture, nucleic acid amplification — can do that' },
  ],

  treatment: [
    { logic: 'The pattern prescribes the intervention, not just the differential', detail: 'Each of the five patterns carries a therapeutic consequence that follows from its mechanism. **Suppuration with a walled cavity must be drained**, because the abscess interior is avascular, acidic and packed with dying neutrophils — aminoglycosides are inactivated at low pH, beta-lactams lose potency against a stationary-phase high-inoculum organism, and no antibiotic concentration compensates for a wall built to keep things out. **A necrotising pattern is operated on now**, before imaging and before biopsy, with broad cover plus clindamycin, which is added specifically because it inhibits ribosomal protein synthesis and switches exotoxin production off. **A granulomatous pattern is treated for months, not days**, because the organism is intracellular, metabolically quiescent and sitting in a poorly perfused caseous centre that drugs penetrate badly — the duration is a property of the pattern, and it is why directly observed therapy exists. **A biofilm on a device is not treated; the device is removed.** And a **cytopathic viral pattern** is treated only where a molecular target exists, which for most viruses it does not. Which organisms generate which of these patterns, and by what means: [[rbp-infectious-agents-injury-mechanisms]].' },
    { logic: 'In sepsis, attack the stimulus, because the response cannot be switched off', detail: 'The mechanism chain of this module has a blunt therapeutic corollary. **Every attempt to block a mediator has failed** — anti-endotoxin antibody, anti-TNF, IL-1 receptor antagonism and high-dose corticosteroids — because by the time sepsis is recognisable the cascade is redundant and self-sustaining, and because a later **immunoparalysis phase**, with lymphocyte apoptosis and loss of monocyte HLA-DR, makes indiscriminate suppression harmful. What changes mortality is removing the stimulus: **early effective antimicrobials and source control**, with fluid and vasopressor support to buy the time. The corollary that most often confuses the bedside is that **treating the organism can transiently worsen the host response** — the Jarisch-Herxheimer reaction hours after penicillin for spirochaetal disease, and the paradoxical reaction when antiretrovirals are started in tuberculosis coinfection. Neither is treatment failure; both are the thesis of this module playing out in real time, since the patient deteriorates while the organism burden falls. Matching the right stain to the pattern under the microscope: [[diagnostic-pathology-methods]].' },
  ],

  mnemonics: [
    {
      hook: 'Five patterns, five classes: pus, granuloma, inclusion, necrosis, fibrosis',
      expansion: [
        'Pus means EXTRACELLULAR and opsonisable — pyogenic bacteria, and the liquefaction is the neutrophil’s own hydrolases',
        'Granuloma means INTRACELLULAR and persistent — mycobacteria, dimorphic fungi, spirochaetes and some intracellular bacteria; caseating narrows it to mycobacteria and endemic fungi',
        'Inclusions, syncytia and koilocytes with a sparse lymphocytic infiltrate mean VIRAL, and the location of the inclusion often names the virus',
        'Necrosis with few inflammatory cells means a TOXIN or VASCULAR INVASION killing the responders — clostridia, group A streptococcus, Aspergillus and the Mucorales; and fibrosis simply means the response has been running for months',
      ],
    },
    {
      hook: 'A granuloma is a T-cell achievement — and the emptier the slide, the fuller the organism count',
      expansion: [
        'Epithelioid transformation needs CD4-derived interferon-gamma, so no T cells means no granuloma, no epithelioid cells and no Langhans giant cells',
        'The same failure removes the neutrophil infiltrate in neutropenia, which is why the febrile neutropenic patient can have a near-normal chest radiograph and invasive aspergillosis at the same time',
        'A negative tuberculin test or interferon-gamma release assay in these patients measures the failed response, not the absence of the organism',
        'So in an immunosuppressed patient an absent inflammatory pattern RAISES the probability of infection, and you order the acid-fast and fungal stains because of the absence, not despite it',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A node biopsy with no granulomas in an immunosuppressed patient',
      wrongInstinct: 'No granulomas and a negative interferon-gamma release assay, so mycobacterial infection is excluded and another diagnosis should be pursued',
      rightAnswer: 'In the immunosuppressed, an absent granuloma raises rather than lowers the probability of mycobacterial or fungal infection. Order Ziehl-Neelsen or auramine, silver and PAS stains, mycobacterial culture and tissue nucleic acid amplification regardless of the inflammatory pattern, and never use an immune-based assay to exclude',
      why: 'Granuloma formation is an achievement of CD4 cells and interferon-gamma, so below a CD4 count of about 100, or on anti-TNF therapy, the patient cannot build one — and the tuberculin test and interferon-gamma release assay measure that same failed response. The expected appearance is instead sheets of foamy macrophages crowded with organisms: the burden is highest exactly where the inflammation is least.',
    },
    {
      questionCategory: 'Multi-organ failure in septic shock',
      wrongInstinct: 'The kidneys, lungs and brain are failing, so the organism must have disseminated to them and the answer is broader antimicrobial cover',
      rightAnswer: 'The failing organs are largely uninfected. The lesion is the host response plus microvascular thrombosis, so the interventions that change mortality are EARLY and EFFECTIVE antibiotics with source control, not broader ones — and no anti-mediator strategy has ever improved survival',
      why: 'At autopsy the organs that failed show remarkably little cell death, which is why survivors recover renal and hepatic function completely — the failure is functional rather than structural. A two-centimetre abscess can generate the whole syndrome, because what disseminates is the signal: lipid A on TLR4, lipoteichoic acid on TLR2, then NF-kappaB, TNF, endothelial tissue factor and nitric oxide. Broadening cover treats an organism that was never in those organs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A skin biopsy from a widespread coppery rash on the palms and soles shows a dense lymphoplasmacytic infiltrate cuffing small dermal vessels, with markedly swollen endothelial cells narrowing the lumina. No organisms are visible on H and E. The most useful next step, and the reason for it, is:',
      options: [
        { id: 'a', text: 'Ziehl-Neelsen staining, because a plasma-cell-rich perivascular infiltrate is the earliest form of a mycobacterial granuloma' },
        { id: 'b', text: 'Warthin-Starry silver staining or Treponema immunohistochemistry, because a plasma-cell-rich obliterative endarteritis is the syphilis signature and the spirochaete is not resolvable on H and E' },
        { id: 'c', text: 'Repeat the H and E on deeper levels, because any organism present in sufficient numbers to cause this infiltrate will eventually be visible' },
        { id: 'd', text: 'Grocott methenamine silver, because plasma cells indicate a chronic fungal infection of the dermis' },
      ],
      answerId: 'b',
      explanation: 'This is the pattern-predicts-the-class reasoning working exactly as intended. A mononuclear infiltrate rich in plasma cells, arranged around small vessels with endothelial swelling and luminal narrowing — obliterative endarteritis — is the characteristic tissue response to Treponema pallidum, and in secondary syphilis it is accompanied by the copper-coloured palmoplantar rash described. The organism itself is roughly 0.2 micrometres wide and too slender to be resolved on a routine H and E section, so the pattern is the only prompt available; silver impregnation by Warthin-Starry, or better, Treponema immunohistochemistry, is what demonstrates it. Option c is the error the whole module is built to prevent: some organisms are invisible on H and E at any number of levels, which is precisely why the pattern must dictate the stain. Ziehl-Neelsen would be the right instinct for caseating granulomas, and Grocott methenamine silver for a granulomatous or necrotising pattern suggesting fungus — neither matches a plasma-cell-rich vasculocentric infiltrate.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A man with advanced HIV and a CD4 count of 28 has fever and lymphadenopathy. A node biopsy shows confluent sheets of foamy macrophages with no epithelioid cells, no Langhans giant cells and no granulomas. His interferon-gamma release assay is negative. The correct interpretation is:',
      options: [
        { id: 'a', text: 'Mycobacterial infection is effectively excluded by the combination of absent granulomas and a negative interferon-gamma release assay' },
        { id: 'b', text: 'The absent granuloma is itself the finding: epithelioid transformation requires CD4-derived interferon-gamma, so the probability of mycobacterial infection is raised, and acid-fast staining, culture and tissue PCR are mandatory' },
        { id: 'c', text: 'The foamy macrophages indicate a storage disorder, since infection would necessarily produce some organised inflammatory reaction' },
        { id: 'd', text: 'A negative interferon-gamma release assay in any patient reliably excludes active tuberculosis, so the biopsy appearance must have a non-infectious cause' },
      ],
      answerId: 'b',
      explanation: 'Granuloma formation is not a passive consequence of infection; it is an achievement of the cell-mediated arm. CD4 Th1 cells supply interferon-gamma and macrophages respond through IL-12 and TNF to become epithelioid cells and fuse into Langhans giant cells. Strip out the T-cell help and none of that can happen, so the macrophages accumulate organisms rather than killing them — the expected appearance in advanced HIV, on anti-TNF biologics, on high-dose glucocorticoids, and in infants with miliary disease. Two consequences follow. First, the organism burden is highest exactly where the inflammation is least, so the foamy macrophages are typically crowded with acid-fast bacilli on Ziehl-Neelsen. Second, the tuberculin test and the interferon-gamma release assay both measure the same failed response, so a negative result in this patient is uninformative and can never be used to exclude infection — only a direct organism test can. The rule to carry is counterintuitive and clinically consequential: in the immunosuppressed, an absent granuloma raises the probability of mycobacterial or fungal infection rather than lowering it.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A woman with a 3 cm perinephric abscess develops septic shock with acute kidney injury, ARDS and encephalopathy. Blood cultures grow Escherichia coli. Broad-spectrum antibiotics are already running at appropriate doses. Her team proposes adding further antimicrobial agents to cover the failing organs. The best assessment of that plan, and of what should be done instead, is:',
      options: [
        { id: 'a', text: 'Correct: multi-organ failure indicates metastatic seeding, so the lungs and brain require additional agents with good tissue penetration' },
        { id: 'b', text: 'Misdirected: the failing organs are largely uninfected, so the priority is drainage of the abscess for source control, with fluid and vasopressor support' },
        { id: 'c', text: 'Correct in principle, but corticosteroids and an anti-TNF agent should be added first to interrupt the cytokine cascade driving the organ failure' },
        { id: 'd', text: 'Misdirected, because Gram-negative sepsis is caused by endotoxin, and antibiotics should therefore be stopped to avoid further bacterial lysis' },
      ],
      answerId: 'b',
      explanation: 'The organs failing in septic shock contain no organisms, and at autopsy show remarkably little cell death — which is why survivors recover renal and hepatic function completely. What disseminates is the signal, not the microbe: lipid A engages TLR4 and lipoteichoic acid engages TLR2, NF-kappaB releases TNF, IL-1 and IL-6, and the endothelium becomes the effector organ, with iNOS-derived nitric oxide producing vasodilatation, glycocalyx shedding producing capillary leak, and tissue factor with suppressed protein C producing microthrombi. Adding agents to cover organs that were never infected treats the wrong thing. What changes mortality is removing the stimulus — early effective antibiotics, which are already running, and source control, which here means draining the abscess. Option c has been tested repeatedly and failed: anti-endotoxin antibody, anti-TNF, IL-1 antagonism and high-dose steroids have not improved survival, because the cascade is redundant by the time sepsis is recognisable and a later immunoparalysis phase makes blanket suppression harmful. Option d correctly identifies endotoxin but draws a lethal conclusion; the source of endotoxin is the ongoing infection.',
      tests: 'treatment',
    },
  ],
};

export default rbpHostResponseInfectionPatterns;
