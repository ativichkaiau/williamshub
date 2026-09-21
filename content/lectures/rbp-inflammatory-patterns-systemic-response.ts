import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpInflammatoryPatternsSystemicResponse: Lecture = {
  id: 'rbp-inflammatory-patterns-systemic-response',
  title: 'Inflammatory Patterns & Systemic Responses',
  system: 'pathology',
  source: 'Ch 2 — Inflammation and Repair',
  updated: '2026-09-21',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 2 Inflammation and Repair' },
    { kind: 'mechanism', label: 'One cytokine signal, four systemic readouts, one failure mode' },
    { kind: 'investigation', label: 'CRP moves in hours because fibrinogen moves in days' },
  ],

  highYield: [
    '**Each morphologic pattern is a readout of how big the leak was and who caused it, so all five are derivable.** **SEROUS** inflammation is a watery, protein-poor effusion, either plasma through a small permeability increase or secretion from mesothelium — the burn blister, the early viral pleural effusion. Little protein means a small breach. **FIBRINOUS** inflammation means the breach became wide enough to let **fibrinogen** out at **340 kDa**, and in a procoagulant extravascular environment it polymerises into fibrin: shaggy, yellow-brown strands on a serosal surface, classically the **bread-and-butter pericarditis** of uraemia, transmural infarction, rheumatic fever, lupus or tuberculosis. **SUPPURATIVE** inflammation means a **pyogenic organism** arrived — Staphylococcus aureus above all, with Streptococcus pyogenes, Klebsiella, Neisseria and the coliforms — and the neutrophils it recruited liquefied the tissue into pus; walled off, that is an abscess with a necrotic core, a rim of surviving neutrophils and a fibrovascular wall. **ULCERATIVE** inflammation requires necrosis at an epithelial surface, which then sloughs and leaves an excavated defect: an acute ulcer base is packed with neutrophils and dilated vessels, while a chronic one has fibroblast proliferation, scarring and mononuclear cells at its margins. **PSEUDOMEMBRANOUS** inflammation is the surface lost AND covered by its own exudate — a coagulum of fibrin, mucin, necrotic epithelium and neutrophils, as in Clostridioides difficile colitis or diphtheria. The vascular events that generate all five are in [[rbp-acute-inflammation-mediators]].',
    '**A fibrinous exudate has exactly two fates, and the fork between them decides whether the patient is left with a disease.** Fibrin is not scar. If the stimulus is removed quickly, **plasmin lyses it** and macrophages clear the debris, and the serosa is restored completely with no residue at all. If it persists, **fibrin becomes a scaffold**: capillaries and fibroblasts grow into it within days and **organise** it into fibrous tissue. On the pericardium that produces adhesions and, at the extreme, **constrictive pericarditis** — a rigid shell that limits diastolic filling, giving a raised JVP with Kussmaul sign, an early pericardial knock, and equalised diastolic pressures. In the pleura it gives a fibrothorax; in the peritoneum it gives adhesions, which are the commonest cause of small bowel obstruction in anyone who has had abdominal surgery. The principle generalises to every exudate in the book: **anything that outlives plasmin gets organised**, and organisation is repair, not inflammation, which is why it follows the rules in [[rbp-repair-angiogenesis-fibrosis]].',
    '**The acute-phase response has one hepatic conductor, and knowing it explains why CRP and ESR are ordered for different questions.** **TNF, IL-1 and IL-6** are the drivers, and **IL-6** is the signal that reaches the liver: it raises **CRP, fibrinogen, serum amyloid A, hepcidin, haptoglobin and complement**, and simultaneously lowers **albumin and transferrin**, which is why those two are called negative acute-phase reactants and why a low albumin in acute illness is usually inflammation rather than malnutrition. Now the mechanism that matters. **CRP is a protein the hepatocyte makes on demand** — detectable within about **6 hours**, peaking near **48 hours**, with a plasma half-life of roughly **19 hours** — so it rises and falls within hours to a day or two and reports what is happening now. **ESR measures nothing of the sort.** It measures how fast red cells sediment, and they sediment faster only when they stack into **rouleaux**, which happens when **fibrinogen** neutralises the negative surface charge that normally keeps them apart. So the ESR is a proxy for the plasma fibrinogen concentration, and fibrinogen has a half-life of **3 to 5 days**: it takes days to accumulate and days to clear. **That single fact is the whole difference between the two tests** — CRP answers whether this patient is better today, ESR answers whether an indolent disease is still active this month.',
    "**Fever is the hypothalamic set point being moved, and every sign of a rising fever is the body obeying the new target.** Exogenous pyrogens such as **LPS** stimulate macrophages to release the endogenous pyrogens **IL-1, IL-6 and TNF**; these act at the circumventricular organs bordering the preoptic hypothalamus, induce **COX-2**, and generate **prostaglandin E2**, which acts on **EP3** receptors and raises the defended temperature. The patient is then below target, so the cold-defence programme runs — cutaneous vasoconstriction, cold hands, shivering and rigors, seeking blankets — all while the thermometer climbs. When the pyrogen clears or COX is inhibited the set point drops, the patient is suddenly above target, and heat-loss effectors fire: flushing and drenching sweats, the defervescence. **NSAIDs and paracetamol are antipyretic for exactly one reason: they inhibit cyclooxygenase, remove PGE2, and let the set point fall back to normal.** Two consequences follow without any extra memorising. They do not lower a normal temperature, because there is no raised set point to reset. And they are useless in **hyperthermia** — heat stroke, malignant hyperthermia, neuroleptic malignant syndrome, serotonin syndrome — where the set point was never raised and heat production or heat load has simply overwhelmed dissipation, so physical cooling, and dantrolene where the muscle is the source, are the only things that work.",
    '**The differential white count discriminates better than the total, and the exceptions are what get examined.** **Neutrophilia** above about **7.5 x 10^9 per litre** means pyogenic bacterial infection, tissue necrosis such as infarction or burns, sterile inflammation, or corticosteroids, which raise the count by demarginating neutrophils and delaying their apoptosis rather than by infection. **Lymphocytosis** means viral infection — EBV, CMV, viral hepatitis, mumps — with two bacterial exceptions worth knowing, **Bordetella pertussis**, whose toxin blocks lymphocyte exit from the blood into nodes, and chronic tuberculosis. **Eosinophilia** means allergic or parasitic disease, but with a sharp rule inside it: eosinophils respond to **tissue invasion by a multicellular parasite** — Strongyloides, hookworm, Ascaris in its migratory phase, Schistosoma, Toxocara, Trichinella — and **not** to a luminal protozoan such as Giardia or Entamoeba. Drug hypersensitivity, asthma, eosinophilic granulomatosis with polyangiitis, Hodgkin lymphoma and Addison disease complete the list. **Monocytosis** marks chronic infection: tuberculosis, brucellosis, endocarditis, malaria. Then the counterintuitive one that catches people out: **LEUKOPENIA is the expected finding in typhoid, brucellosis and rickettsial infection, and in overwhelming sepsis**, where consumption and marrow exhaustion outstrip production — and in sepsis a low count carries a **worse** prognosis than a high one. A **leukaemoid reaction** is the opposite extreme, a reactive count above **50 x 10^9 per litre** with a left shift to bands and metamyelocytes, **toxic granulation**, **Dohle bodies** and cytoplasmic vacuolation; the neutrophil **alkaline phosphatase score is HIGH** in the reaction and **LOW** in chronic myeloid leukaemia, which also shows basophilia and carries BCR-ABL1.',
    '**SIRS and sepsis are this same response scaled past the point of usefulness, and the mechanism from cytokine to organ failure is short.** Massive TNF and IL-1 release induces **iNOS**, and the resulting nitric oxide produces profound **vasodilatation** that does not respond to the usual pressors; endothelium is activated and **leaks**, so intravascular volume moves into the interstitium; endothelial **tissue factor** is expressed while thrombomodulin and protein C fall, driving microvascular thrombosis and **DIC**; and the cytokines impair mitochondrial oxygen use, so tissue cannot extract oxygen even where flow is restored. The result is hypotension with a **raised lactate** and progressive multi-organ failure. The definitions have moved with that understanding: the old **SIRS criteria** — temperature above 38 or below 36 degrees, heart rate above 90, respiratory rate above 20 or PaCO2 below 32 mmHg, white count above 12 or below 4 x 10^9 per litre or more than 10 per cent bands — are so easily met by pancreatitis, trauma, burns and myocardial infarction that they were abandoned as a definition. **Sepsis-3** now defines sepsis as suspected infection plus an acute rise in **SOFA of 2 points or more**, and septic shock as vasopressor-requiring hypotension with a **lactate above 2 mmol per litre** despite adequate fluid resuscitation.',
  ],

  mechanism: {
    title: 'One cytokine signal, four systemic readouts — and the point where it stops helping',
    steps: [
      {
        id: 's1',
        label: 'Macrophages at the site read PAMPs and DAMPs and release TNF, IL-1 and IL-6 into the circulation',
        detail: 'The same three cytokines that run the local response now act as hormones. Everything that follows is one signal read by four different organs.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'At the preoptic hypothalamus, IL-1 and TNF induce COX-2; PGE2 acts on EP3 receptors and RAISES the set point',
        detail: 'Core temperature is now below target, so the cold-defence programme runs: vasoconstriction, cold hands, shivering and rigors while the thermometer climbs.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'In the marrow, TNF, IL-1 and G-CSF empty the storage pool — neutrophilia with a left shift',
        detail: 'Toxic granulation, Dohle bodies and cytoplasmic vacuolation appear on the film. Above 50 x 10^9 per litre with mature forms this is a leukaemoid reaction, not leukaemia.',
      },
      {
        id: 's4',
        label: 'In the liver, IL-6 raises CRP, fibrinogen, serum amyloid A and hepcidin, and lowers albumin and transferrin',
        detail: 'CRP is detectable by about 6 hours and peaks near 48. Hepcidin restricts iron export, which is why prolonged inflammation produces an iron-restricted anaemia.',
        emphasis: 'key',
      },
      {
        id: 's5',
        label: 'Fibrinogen neutralises the red-cell surface charge, cells stack into rouleaux, and the ESR rises',
        detail: 'The ESR can only move as fast as fibrinogen, whose half-life is 3 to 5 days. This is why it lags the CRP by days in both directions.',
        emphasis: 'key',
      },
      {
        id: 's6',
        label: 'Unchecked, the same signal becomes the disease: iNOS vasodilatation, capillary leak, tissue factor and DIC, failed oxygen extraction',
        detail: 'Hypotension with a rising lactate and multi-organ failure. Sepsis-3 defines this as infection plus a SOFA rise of 2 or more, and septic shock as vasopressor dependence with lactate above 2 mmol per litre.',
        emphasis: 'danger',
      },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'The same temperature with the set point untouched',
        steps: [
          {
            id: 'b1',
            label: 'Hyperthermia: heat load or heat production overwhelms dissipation while the set point stays at 37',
            detail: 'Heat stroke, malignant hyperthermia, neuroleptic malignant syndrome, serotonin syndrome, thyroid storm.',
            emphasis: 'key',
          },
          {
            id: 'b2',
            label: 'The bedside tell is which programme is running as the temperature rises',
            detail: 'Shivering, rigors and cold peripheries mean the set point moved. Flushed, vasodilated and sweating means it did not.',
            emphasis: 'key',
          },
          {
            id: 'b3',
            label: 'Therefore antipyretics do nothing in hyperthermia — there is no raised set point for COX inhibition to reset',
            detail: 'Physical cooling is the treatment, with dantrolene where skeletal muscle is generating the heat.',
            emphasis: 'danger',
          },
        ],
      },
    ],
  },

  examFindings: [
    {
      sign: 'A scratchy triphasic friction rub three days after a transmural anterior myocardial infarction, with shaggy yellow-brown strands coating both pericardial surfaces',
      mechanism: 'Fibrinous pericarditis — the permeability increase was large enough to let 340 kDa fibrinogen escape, and it polymerised on the serosa',
      significance: 'key',
    },
    {
      sign: 'Raised yellow-white plaques on colonic mucosa after a course of antibiotics, or a grey adherent tonsillar membrane that bleeds when peeled',
      mechanism: 'Pseudomembrane of fibrin, mucin, necrotic epithelium and neutrophils. That it bleeds on removal separates a true adherent pseudomembrane from a loose slough',
      significance: 'key',
    },
    {
      sign: 'A tense, clear, almost acellular blister two hours after a scald',
      mechanism: 'Serous inflammation: a small permeability increase lets protein-poor fluid accumulate beneath the epidermis, with no fibrinogen and no neutrophils',
      significance: 'supportive',
    },
    {
      sign: 'A returning traveller with a temperature of 39.5 degrees, a pulse of 72, and a white count of 3.2 x 10^9 per litre',
      mechanism: 'Typhoid: leukopenia and relative bradycardia are both expected, so a normal or low white count here supports the diagnosis rather than excluding bacterial infection',
      significance: 'key',
    },
    {
      sign: 'A white count of 62 x 10^9 per litre with bands, metamyelocytes, toxic granulation and Dohle bodies, and a HIGH neutrophil alkaline phosphatase score',
      mechanism: 'Leukaemoid reaction driven by G-CSF and cytokines emptying the marrow storage pool. Chronic myeloid leukaemia gives a LOW score, with basophilia and BCR-ABL1',
      significance: 'key',
    },
    {
      sign: 'An eosinophil count of 2.4 x 10^9 per litre with urticaria and a migratory serpiginous rash, while stool microscopy shows only Giardia cysts',
      mechanism: 'Giardia is a luminal protozoan and does not invade tissue, so it does not raise eosinophils. The eosinophilia indicts a tissue-invasive helminth such as Strongyloides',
      significance: 'key',
    },
  ],

  investigations: [
    {
      clue: 'CRP and ESR ordered for different questions rather than as a pair',
      meaning: 'CRP rises within 6 hours, peaks at 48 and has a half-life near 19 hours, so it tracks response to treatment day by day. ESR reflects plasma fibrinogen, which takes days to rise and days to fall, so it is the test for following indolent disease across weeks — giant cell arteritis, polymyalgia rheumatica, osteomyelitis, myeloma.',
    },
    {
      clue: 'A very high ESR with a normal or barely raised CRP',
      meaning: 'A genuinely informative discordance. It points toward a paraprotein, which raises the ESR directly, or to systemic lupus erythematosus, where CRP characteristically stays low unless there is serositis or superimposed infection. Acute bacterial infection essentially always raises the CRP.',
    },
    {
      clue: 'Anything other than inflammation that moves the ESR',
      meaning: 'The ESR is a red-cell test as much as a protein test. Anaemia raises it, pregnancy and age raise it (a rough upper limit is age divided by 2 for men and age plus 10 divided by 2 for women), and polycythaemia, sickle cells, spherocytes and hypofibrinogenaemia all lower it, which can mask active disease.',
    },
    {
      clue: 'Procalcitonin when the question is bacterial versus viral',
      meaning: 'Procalcitonin is induced by IL-1, TNF and IL-6 in bacterial infection and actively suppressed by the interferon-gamma of viral infection, so it separates the two better than CRP does. Its strongest evidence base is for deciding when to STOP antibiotics rather than when to start them.',
    },
    {
      clue: 'The blood film rather than the white cell count',
      meaning: 'Toxic granulation, Dohle bodies and vacuolation identify a genuine bacterial stress response and distinguish it from a demargination leukocytosis caused by steroids, adrenaline or exercise, which has no left shift. A leukoerythroblastic film, with nucleated red cells and teardrop poikilocytes, means marrow infiltration instead.',
    },
    {
      clue: 'Serial lactate with a SOFA score in suspected sepsis',
      meaning: 'Lactate reflects both hypoperfusion and impaired mitochondrial oxygen use, and its clearance predicts outcome. Sepsis-3 requires suspected infection plus a SOFA rise of 2 or more; SIRS criteria are sensitive but are met by pancreatitis, trauma and infarction, which is precisely why they were dropped as the definition.',
    },
  ],

  treatment: [
    {
      logic: 'Let the kinetics choose the test, and remember the acute-phase response has a long-term price',
      detail: 'Ask what the test is for before ordering it. **CRP for the question of whether today is better than yesterday**, because it moves in hours; **ESR for whether a chronic disease is still active this month**, because it can only move as fast as fibrinogen. In suspected **giant cell arteritis** neither number delays treatment — start high-dose glucocorticoid immediately and arrange the biopsy afterwards, because the ESR and CRP remain informative for several days on steroid while the visual loss is irreversible within hours. **Procalcitonin** earns its place mainly in stopping antibiotics. And note the cost of running the hepatic response for years: sustained **serum amyloid A** in rheumatoid arthritis, chronic osteomyelitis, tuberculosis, inflammatory bowel disease or familial Mediterranean fever is cleaved and deposited as **AA amyloid** in kidney, liver and spleen, so a rising proteinuria in a patient with decades of inflammation is amyloidosis until proven otherwise — see [[protein-misfolding-amyloid]].',
    },
    {
      logic: 'Read the pattern as an instruction about what to do next',
      detail: 'Morphology is not descriptive; each pattern names a different action. A **serous** effusion needs the Starling and permeability question answered. A **fibrinous** exudate needs the stimulus removed fast enough for plasmin to win, because the alternative is organisation into adhesions or constriction. A **suppurative** collection needs **drainage** — an abscess cavity is hypoxic, acidic and full of barely dividing organisms, and no antibiotic regimen sterilises an undrained one. An **ulcer** needs its base and margins biopsied, because an acute neutrophil-rich base and a chronic fibrotic one mean different diseases. A **pseudomembrane** needs the toxin producer treated and, in diphtheria, antitoxin given before the membrane is disturbed. The one instruction that applies to all five is the same one that governs chronicity: **the stimulus has to go, or injury, inflammation and repair simply continue running together**, as in [[rbp-chronic-inflammation-repair]].',
    },
  ],

  mnemonics: [
    {
      hook: 'The pattern tells you how big the leak was and who caused it',
      expansion: [
        'Serous: a small permeability increase, protein-poor fluid — the burn blister, the early viral effusion.',
        'Fibrinous: the gap was wide enough for fibrinogen at 340 kDa — a serosal surface, a friction rub, and a fork between lysis and adhesions.',
        'Suppurative: a pyogenic organism arrived and its neutrophils liquefied the tissue — pus, and an abscess once it is walled off.',
        'Ulcerative: an epithelial surface necrosed and sloughed. Pseudomembranous: the same, then covered by its own fibrinopurulent exudate.',
      ],
    },
    {
      hook: 'CRP is the protein; ESR is the red cells stacking on the protein',
      expansion: [
        'IL-6 makes CRP in the hepatocyte on demand: up by 6 hours, peak at 48, half-life 19 hours, so it falls as fast as it rose.',
        'IL-6 also makes fibrinogen, which strips the surface charge keeping red cells apart, so they stack into rouleaux and sediment faster.',
        'Fibrinogen has a half-life of 3 to 5 days, so the ESR takes days to rise and days to fall no matter what the patient is doing.',
        'Therefore CRP answers is this better today, and ESR answers is this disease still active this month.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'The white cell count in suspected bacterial infection',
      wrongInstinct: 'The white count is normal or low, so a serious bacterial infection is unlikely and the illness is probably viral.',
      rightAnswer: 'Typhoid, brucellosis and rickettsial infection characteristically produce leukopenia, and so does overwhelming sepsis once consumption and marrow exhaustion outstrip production — where a low count predicts a worse outcome than a high one.',
      why: 'Rule: leukopenia with fever raises the stakes rather than lowering them, so read the film for toxic granulation and Dohle bodies, take cultures and treat, instead of being reassured by the count.',
    },
    {
      questionCategory: 'A pericardial friction rub that has disappeared',
      wrongInstinct: 'The rub has gone, so the pericarditis is settling and the patient is improving.',
      rightAnswer: 'A rub stops for two reasons: the fibrin has been lysed, or fluid has accumulated and separated the two inflamed surfaces. The second is on the way to tamponade, and a rub can also persist despite a large effusion, so its absence proves nothing on its own.',
      why: 'Rule: when a rub vanishes, look at the JVP, the blood pressure and the heart sounds — a rising JVP with muffled sounds and a falling pressure is fluid, not healing.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old with three weeks of headache, jaw claudication and scalp tenderness has an ESR of 96 mm in the first hour and a CRP of 48 mg/L. After 48 hours of high-dose prednisolone she is symptom-free and the CRP is 6 mg/L, but the ESR is still 78 mm in the first hour. What best explains the discrepancy?',
      options: [
        { id: 'a', text: 'The ESR result is erroneous and should be repeated' },
        { id: 'b', text: 'The glucocorticoid has not yet taken effect, so the disease is uncontrolled' },
        { id: 'c', text: 'The ESR is a proxy for plasma fibrinogen, whose half-life is 3 to 5 days, whereas CRP has a half-life near 19 hours — so both results are consistent with a rapid response' },
        { id: 'd', text: 'A second, unrelated infection has developed' },
      ],
      answerId: 'c',
      explanation: 'The two tests measure different things on different clocks. CRP is synthesised by hepatocytes under IL-6 and cleared with a half-life of about 19 hours, so it tracks disease activity within hours. The ESR only measures how fast red cells sediment, and they sediment faster when fibrinogen neutralises their surface charge and they stack into rouleaux, so the ESR is really a measure of plasma fibrinogen concentration. Fibrinogen takes days to accumulate and days to clear, which means the ESR necessarily lags the CRP in both directions. Expecting the two to move together is what generates the false impression of treatment failure.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient with end-stage renal failure who has missed dialysis develops pleuritic chest pain and a loud triphasic friction rub. At autopsy in a comparable case both pericardial surfaces are coated with shaggy yellow-brown strands. Which statement best describes this exudate and its possible outcomes?',
      options: [
        { id: 'a', text: 'It is a protein-poor serous transudate secreted by mesothelium, and it always resolves completely' },
        { id: 'b', text: 'The permeability increase was large enough to let fibrinogen escape and polymerise; the fibrin either undergoes complete fibrinolysis, or is colonised by capillaries and fibroblasts and organised into adhesions and constriction' },
        { id: 'c', text: 'It is suppurative inflammation caused by pyogenic organisms, and requires drainage' },
        { id: 'd', text: 'It represents metastatic calcification of the pericardium from the renal failure' },
      ],
      answerId: 'b',
      explanation: 'A fibrinous exudate is defined by the escape of fibrinogen, a 340 kDa molecule that only crosses a substantially breached endothelium, and by its polymerisation into fibrin outside the vessel. The shaggy appearance on the serosa is that fibrin. Its fate is a genuine fork: removal of the stimulus allows plasmin to lyse it with complete restoration, while persistence turns it into a scaffold that capillaries and fibroblasts invade, converting inflammation into repair and leaving adhesions or a constricting shell. A serous exudate contains little protein and no fibrin, and suppuration requires pyogenic organisms and pus, neither of which is present here.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 34-year-old returning from Thailand has urticaria, a migratory serpiginous rash on the buttocks and an eosinophil count of 2.4 x 10^9 per litre. Stool microscopy shows Giardia lamblia cysts. Prednisolone is being considered for the rash. Which statement is correct?',
      options: [
        { id: 'a', text: 'Giardia accounts for the eosinophilia, so treating it will resolve the blood picture' },
        { id: 'b', text: 'Eosinophilia requires tissue invasion by a multicellular parasite, so a luminal protozoan does not cause it — a tissue-invasive helminth such as Strongyloides must be excluded, especially before giving corticosteroids' },
        { id: 'c', text: 'Eosinophilia is a non-specific response seen in any infection, bacterial or parasitic' },
        { id: 'd', text: 'The eosinophil count is irrelevant and the rash should simply be treated symptomatically' },
      ],
      answerId: 'b',
      explanation: 'The eosinophil response is mounted against helminths that invade tissue, where IL-5 from Th2 cells expands the lineage and eosinophils degranulate onto a target too large to phagocytose. Luminal protozoa such as Giardia and Entamoeba do not invade tissue and characteristically produce no eosinophilia, so finding Giardia here is incidental and does not explain the count. The serpiginous migratory rash of larva currens points to Strongyloides, which matters urgently: corticosteroids given to a patient with chronic strongyloidiasis can precipitate hyperinfection and disseminated disease with Gram-negative sepsis. The eosinophil count is therefore the finding that changes management.',
      tests: 'disease',
    },
  ],
};

export default rbpInflammatoryPatternsSystemicResponse;
