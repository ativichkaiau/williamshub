import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpHepaticInjuryHepatitis: Lecture = {
  id: 'rbp-hepatic-injury-hepatitis',
  title: 'Patterns of Hepatic Injury & Viral Hepatitis',
  system: 'gi',
  source: 'Ch 15 — Liver, Gallbladder, and Biliary Tract',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 15 Liver, Gallbladder, and Biliary Tract' },
    { kind: 'mechanism', label: 'Zonation and the limited vocabulary of hepatic injury' },
    { kind: 'disease', label: 'Viral hepatitis: route, chronicity and serology' },
  ],

  highYield: [
    '**The liver answers hundreds of different insults with the same five words — degeneration, necrosis, inflammation, fibrosis, regeneration — so the diagnostic information is never in the finding itself but in WHERE the finding sits and WHAT PATTERN it makes.** The address that matters most is the zone. Blood enters the lobule at the portal tract and leaves at the central vein, so oxygen falls along that path from about **60 to 65 mmHg in zone 1** (periportal) to about **30 to 35 mmHg in zone 3** (pericentral, centrilobular). Zone 3 is therefore the **lowest-oxygen** compartment, and it is simultaneously the **highest-P450** compartment, because **CYP2E1** and its relatives are concentrated there. One zone is both the most starved and the most chemically dangerous, and that single fact predicts two apparently unrelated lesions: **shock and right heart failure necrose zone 3** because it runs out of oxygen first, and **paracetamol necroses zone 3** because that is where the toxic metabolite **NAPQI** is made. Carbon tetrachloride, halothane and chronic alcohol behave the same way for the same reason. Zone 1 is hit instead by agents that need no bioactivation and are consumed on first pass — yellow phosphorus, and the periportal necrosis of **eclampsia** — and zone 1 is also where **iron** deposits first in haemochromatosis, because it is the first tissue the portal blood meets. Ask the zone before you name the toxin. Lobular architecture and the resident cell populations are set out in [[liver-lobule-sinusoid]].',
    '**Ballooning, Councilman bodies and steatosis are the three cellular words, and the most dangerous one is the one that looks mildest.** **Ballooning degeneration** is a swollen hepatocyte two to three times normal size with wispy, clumped, rarefied cytoplasm — membrane pump failure letting water in, the morphological edge between reversible and irreversible injury, and the defining lesion of **steatohepatitis** whether alcoholic or metabolic. **Apoptosis** produces the **Councilman (acidophil) body**: a shrunken, rounded, intensely eosinophilic hepatocyte with a pyknotic or absent nucleus and, critically, **no surrounding inflammation**, because the cell is packaged rather than spilled. **Steatosis** splits into two lesions that share a name and share nothing else. **Macrovesicular** steatosis is a **single large droplet that displaces the nucleus to the cell margin** — alcohol, obesity, type 2 diabetes, corticosteroids — and it is an accounting problem: triglyceride is arriving or being made faster than it is exported, and it is reversible within weeks. **Microvesicular** steatosis is **many tiny droplets with the nucleus still central**, giving foamy cytoplasm, and it means the **mitochondrial beta-oxidation machinery has failed** — **Reye syndrome**, **acute fatty liver of pregnancy**, **valproate**, high-dose tetracycline, nucleoside analogues. Microvesicular disease produces lactic acidosis, hypoglycaemia, encephalopathy and death while the transaminases stay unimpressively raised, because hepatocytes are failing rather than lysing. The general cell-death vocabulary is developed in [[rbp-necrosis-apoptosis-adaptations]].',
    '**Necrosis patterns are a severity map, and each pattern carries a different prognosis, so name the pattern and you have already staged the disease.** **Spotty necrosis** is scattered single-cell dropout with small lymphocyte and macrophage clusters filling the gap — the lobular signature of ordinary acute viral hepatitis, and it heals without a trace because the reticulin framework survives. **Interface hepatitis** (the older term is **piecemeal necrosis**) is destruction at the **limiting plate**, the single row of periportal hepatocytes that faces the portal tract: lymphocytes spill out of an expanded portal tract and erode that boundary. This is the cardinal sign that the disease is **chronic and ACTIVE**, and it is the dominant item in every grading system — chronic hepatitis B and C, autoimmune hepatitis and Wilson disease all produce it. **Confluent necrosis** merges adjacent dead cells, and when the dead zone links one vascular landmark to another it becomes **bridging necrosis** — **portal to portal**, **portal to central**, or **central to central**. Bridging matters because the collapsed reticulin bridge is the **scaffold on which a fibrous septum is laid down**: it is the moment the disease stops being reversible inflammation and becomes architecture. **Submassive** necrosis takes out whole zones, usually zone 3; **massive** necrosis destroys most of the parenchyma and gives acute liver failure, with a **shrunken, flabby liver whose capsule wrinkles** and whose weight can fall to **500 to 700 g** from a normal 1400 to 1600 g.',
    '**Grade and stage answer different questions and are driven by different findings: grade is the fire, stage is the damage.** **Grade** is necroinflammatory activity — how much interface hepatitis, how much lobular and portal inflammation — and it moves up and down with treatment, flares and immunosuppression. **Stage** is fibrosis, and it climbs a fixed ladder: portal tract expansion, then periportal septa, then **bridging septa**, then cirrhosis. A biopsy reporting florid interface hepatitis with no septa is a high-grade, low-stage lesion — dangerous but early. Two aetiologies also announce themselves morphologically. Chronic **hepatitis B** gives **ground-glass hepatocytes**: finely granular, pale pink, glassy cytoplasm produced by **HBsAg packed into hypertrophied smooth endoplasmic reticulum**, highlighted by **orcein** or immunostaining — a chronic-carriage finding that is **never seen in acute infection**, because the antigen needs time to accumulate. Chronic **hepatitis C** gives a triad of **dense portal lymphoid aggregates, sometimes with true germinal centres**, **bile duct epithelial injury without duct loss**, and **macrovesicular steatosis** (strongly so with genotype 3). Neither finding is quantitative; both are signposts to cause when the pattern alone is generic. Serial biopsy and the non-invasive surrogates are handled in [[hepatitis-liver-injury-patterns]].',
    '**Sort the hepatitis viruses by ROUTE and by CAPACITY FOR CHRONICITY and the whole table collapses into two rules.** **A and E are faecal-oral and do not chronify** in the immunocompetent — hepatitis A is diagnosed by **anti-HAV IgM** and always resolves, and hepatitis E is usually the same, with **one lethal exception: in the third trimester of pregnancy HEV carries a 20 to 25% mortality**, far above its 1 to 3% baseline. Genotype 3 HEV is the second exception, chronifying in transplant recipients and other deeply immunosuppressed hosts. **B, C and D are blood-borne**, with hepatitis B additionally sexual and perinatal. The chronicity figures are the examinable part: **hepatitis C chronifies in roughly 80 to 85%** of those infected, while **hepatitis B chronifies in under 5% of immunocompetent adults but in about 90% of neonates infected perinatally**. That inversion is the rule worth carrying — **age at infection predicts chronicity**, because a mature immune system mounts a broad, vigorous CD8 response and clears the virus while a neonatal one is tolerised. It also explains global epidemiology at a stroke: regions where hepatitis B is endemic are the regions where transmission is vertical. **Hepatitis D is a defective RNA virus that cannot make its own envelope and must borrow HBsAg**, so it exists only alongside B — and the two ways of acquiring it have opposite prognoses. **Coinfection** (both viruses at once) is usually self-limited, because clearing B clears D. **Superinfection** of an established chronic B carrier chronifies in about **80%** and accelerates to cirrhosis. Finally, neither B nor C is directly cytopathic: **CD8 T cells kill the infected hepatocyte**, which is why a profoundly immunosuppressed carrier has a huge viral load and a quiet biopsy, and why immune reconstitution, or hepatitis B reactivation after rituximab, produces a destructive flare.',
    '**Read a hepatitis B panel as four questions in sequence and you can interpret any combination without memorising a grid.** Question one, **is there virus now? HBsAg.** Present means current infection; present beyond **6 months** defines chronic infection. Question two, **is there immunity? Anti-HBs.** Present means protected, whether by vaccine or by resolved infection. Question three, **has this person ever met the whole virus? Anti-HBc.** The vaccine contains **surface antigen only**, so anti-HBc is what separates the vaccinated (**anti-HBs alone**) from the naturally recovered (**anti-HBs plus anti-HBc**). Question four, **how infectious? HBeAg**, a secreted product of the precore and core region, marks **high replication and high infectivity**; seroconversion to **anti-HBe** marks a fall in replication. The one combination that catches everyone is the **window period**: HBsAg has already been cleared but anti-HBs has not yet risen, so both are negative and the only positive marker is **anti-HBc IgM**. A negative surface antigen therefore does not exclude acute hepatitis B. Two further traps sit in the same panel. The **precore mutant** cannot make HBeAg yet replicates briskly, so an HBeAg-negative patient may still have a high viral load — **HBV DNA arbitrates, not HBeAg**. And **isolated anti-HBc** in an otherwise negative panel usually means remote resolved infection with waning antibody, which still carries a **reactivation risk under chemotherapy or anti-CD20 therapy**. What this injury does to architecture, and what happens when the fibrosis becomes irreversible, continues in [[rbp-cirrhosis-portal-hypertension]].',
  ],

  mechanism: {
    title: 'From a zonal insult to a staged chronic hepatitis',
    steps: [
      { id: 's1', label: 'Portal blood enters at zone 1 and leaves at the central vein, so oxygen falls from about 60 to 65 mmHg periportally to about 30 to 35 mmHg pericentrally', detail: 'The gradient is built into the direction of sinusoidal flow; there is no way to perfuse zone 3 as well as zone 1.', emphasis: 'normal' },
      { id: 's2', label: 'Zone 3 also carries the highest CYP2E1, so it is both the most starved zone and the zone that manufactures the most toxic metabolite', detail: 'This is why shock, right heart failure and paracetamol all produce centrilobular necrosis despite having nothing else in common.', emphasis: 'key' },
      { id: 's3', label: 'Injured hepatocytes balloon; isolated cells die by apoptosis as Councilman bodies, which provoke no inflammation because the cell is packaged rather than spilled', emphasis: 'normal' },
      { id: 's4', label: 'CD8 T cells recognising viral peptide, plus Kupffer cells, convert scattered spotty necrosis into interface hepatitis once lymphocytes breach the limiting plate', detail: 'Interface hepatitis at the limiting plate is the definition of chronic active disease and the main driver of grade.', emphasis: 'key' },
      { id: 's5', label: 'Confluent necrosis links portal tract to central vein, and the reticulin framework collapses into a bridge', emphasis: 'key' },
      { id: 's6', label: 'Stellate cells deposit collagen along the collapsed bridges, converting a reversible inflammatory grade into an architectural stage', detail: 'Once septa connect vascular landmarks, blood can shunt past hepatocytes and the lesion has become structural.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Urine the colour of dark tea several days before the sclerae look yellow, in a young traveller with anorexia and right upper quadrant ache', mechanism: 'Canalicular excretion fails first, so conjugated bilirubin refluxes into plasma; being water soluble it is filtered and appears in urine while total serum bilirubin is still below the roughly 2.5 to 3 mg/dL needed for visible scleral icterus', significance: 'key' },
    { sign: 'Sudden distaste for cigarettes and for the smell of fried food in the week before jaundice', mechanism: 'The prodromal phase of acute viral hepatitis, driven by circulating cytokines rather than by cholestasis; it precedes any visible sign and is often the only clue in an anicteric case', significance: 'supportive' },
    { sign: 'Urticarial rash, low-grade fever and symmetrical small-joint polyarthritis about a week before the onset of jaundice', mechanism: 'Circulating HBsAg-antibody immune complexes deposit in skin and synovium, a type III reaction; this serum-sickness-like prodrome is characteristic of acute hepatitis B and is absent in hepatitis A', significance: 'key' },
    { sign: 'A liver that can no longer be percussed below the costal margin, with a shrinking span over 48 hours, in a patient who is becoming drowsy', mechanism: 'Massive necrosis destroys parenchymal volume, so the organ shrinks and its capsule wrinkles; a falling liver span during acute hepatitis is an ominous sign, not a sign of recovery', significance: 'key' },
    { sign: 'Asterixis and fetor hepaticus developing on day 3 after a staggered paracetamol overdose, with an INR that keeps climbing', mechanism: 'Zone 3 necrosis from NAPQI has removed enough hepatocyte mass that both ammonia clearance and clotting factor synthesis fail; the rising INR reflects the short half-life of factor VII and is the earliest quantitative signal of hepatic failure', significance: 'key' },
    { sign: 'Palpable purpura over the shins with numbness of the feet in a patient with long-standing chronic hepatitis C', mechanism: 'Mixed type II cryoglobulinaemia, in which a monoclonal IgM with rheumatoid factor activity binds polyclonal IgG; the complexes precipitate in small vessels and produce leukocytoclastic vasculitis and vasa nervorum ischaemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Biopsy showing lymphocytes crossing the limiting plate with dropout of periportal hepatocytes, but trichrome shows no septa', meaning: 'Interface hepatitis: chronic ACTIVE hepatitis, high grade and low stage. Grade is the fire and stage is the damage, so this patient has an aggressive but still architecturally intact liver, which is exactly the situation in which treatment changes the outcome' },
    { clue: 'Scattered hepatocytes with finely granular, pale pink glassy cytoplasm that stains with orcein', meaning: 'Ground-glass hepatocytes: HBsAg accumulated in hypertrophied smooth endoplasmic reticulum. This takes time to build up, so it means CHRONIC hepatitis B and effectively excludes acute infection' },
    { clue: 'Dense portal lymphoid aggregates with germinal centres, focal bile duct epithelial damage without duct loss, and macrovesicular steatosis', meaning: 'The chronic hepatitis C triad. Bile duct injury here does not progress to ductopenia, which is what separates it from the duct destruction of primary biliary cholangitis' },
    { clue: 'Reticulin stain showing framework collapse bridging portal tracts to central veins, while trichrome shows only faint blue in those bands', meaning: 'Confluent bridging NECROSIS, not established bridging fibrosis. Reticulin shows collapsed scaffold, trichrome shows deposited collagen, and the distinction decides whether the patient is staged as severe acute injury or as advanced chronic disease' },
    { clue: 'HBsAg negative, anti-HBs negative, anti-HBc IgM positive, ALT 1800 U/L', meaning: 'The window period of acute hepatitis B. Surface antigen has cleared before surface antibody has appeared, so core IgM is the only marker left; a negative HBsAg does not exclude acute hepatitis B' },
    { clue: 'Foamy microvesicular fat with central nuclei, ALT only three times the upper limit of normal, lactate 6 mmol/L and glucose 2.6 mmol/L', meaning: 'Mitochondrial beta-oxidation failure — Reye syndrome, acute fatty liver of pregnancy or valproate. The modest transaminase rise is the trap: hepatocytes here are failing metabolically rather than lysing, so enzyme release understates how sick the liver is' },
  ],

  treatment: [
    {
      logic: 'Ask the zone before you name the poison, and ask the pattern before you name the prognosis',
      detail: 'Zonal necrosis is a fingerprint. **Centrilobular (zone 3)** necrosis means either **hypoperfusion** — shock, right heart failure, hepatic vein outflow obstruction — or a toxin requiring **CYP2E1 bioactivation**, chiefly **paracetamol**, carbon tetrachloride and halothane; the two causes coincide in zone 3 because it is simultaneously the least oxygenated and the most enzymatically active part of the lobule. **Periportal (zone 1)** necrosis points elsewhere entirely: directly acting toxins consumed on first pass, the periportal necrosis of **eclampsia**, and the periportal iron of haemochromatosis. Then read the extent. **Spotty** necrosis resolves completely because the reticulin framework survives. **Bridging** necrosis is the turning point, since the collapsed bridge becomes the template for a fibrous septum. **Massive** necrosis is acute liver failure, and the bedside sign is a liver span that is falling rather than rising. Note that the one true antidote in this chapter, **N-acetylcysteine**, works by restoring **glutathione**, the exact molecule NAPQI depletes — which is why the antidote is most effective before necrosis is complete.',
    },
    {
      logic: 'Interpret a hepatitis B panel by asking four questions in order, never by matching a row in a table',
      detail: 'One: **is there virus now?** **HBsAg** positive means current infection, and beyond **6 months** it means chronic infection. Two: **is there immunity?** **Anti-HBs** means protected. Three: **has this person met the whole virus?** **Anti-HBc** says yes, and since the vaccine contains surface antigen only, it is the marker that separates **vaccination (anti-HBs alone)** from **resolved natural infection (anti-HBs plus anti-HBc)**. Four: **how infectious?** **HBeAg** means high replication; **anti-HBe** means it has fallen. Three combinations then behave counterintuitively. The **window period** has both surface markers negative and only **anti-HBc IgM** positive — acute infection, not absence of infection. The **precore mutant** is HBeAg-negative and still replicating, so **HBV DNA arbitrates infectivity, not HBeAg**. And **isolated anti-HBc** usually means remote infection with waned antibody, which matters because those patients can **reactivate** under rituximab or cytotoxic chemotherapy. Reactivation is an immune phenomenon: B and C do not kill hepatocytes themselves, **CD8 T cells do**, so restoring immunity to a tolerated high viral load produces a destructive flare.',
    },
  ],

  mnemonics: [
    {
      hook: 'The vowels hit the bowels — and only the consonants stay',
      expansion: [
        'A and E are the vowels: faecal-oral, and they do not chronify in an immunocompetent host',
        'The exception that kills: hepatitis E in the third trimester, 20 to 25% mortality',
        'B, C and D are blood-borne; B is also sexual and perinatal',
        'C chronifies in about 80 to 85%; B in under 5% of adults but about 90% of neonates',
        'So age at infection predicts chronicity — mature immunity clears, neonatal tolerance keeps',
        'D borrows the HBsAg envelope: coinfection usually resolves, superinfection chronifies in about 80%',
      ],
    },
    {
      hook: 'Zone 3 is last for oxygen and first for poison',
      expansion: [
        'Oxygen falls from about 60 to 65 mmHg in zone 1 to about 30 to 35 mmHg in zone 3',
        'CYP2E1 is concentrated in zone 3, so it makes the most NAPQI from paracetamol',
        'Therefore shock, right heart failure and paracetamol all necrose the same centrilobular ring',
        'Zone 1 takes the direct toxins consumed on first pass, and the periportal necrosis of eclampsia',
        'Zone 1 also loads iron first in haemochromatosis, being the first tissue portal blood meets',
        'Name the zone before you name the agent — the zone narrows the list faster than the history does',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Excluding acute hepatitis B from a negative surface antigen',
      wrongInstinct: 'HBsAg is negative, so whatever this hepatitis is, it is not hepatitis B',
      rightAnswer: 'Anti-HBc IgM positive with both HBsAg and anti-HBs negative is the window period of acute hepatitis B',
      why: 'The rule is that surface antigen and surface antibody are never simultaneously informative during clearance — antigen falls before antibody rises, and core IgM is the only marker that spans the gap, so a panel with all three negative rules out hepatitis B while core IgM alone rules it in',
    },
    {
      questionCategory: 'Judging how dangerous a fatty liver is',
      wrongInstinct: 'The fat is only mild and the ALT is barely three times normal, so this is benign steatosis and can be reviewed later',
      rightAnswer: 'Microvesicular steatosis with foamy cytoplasm and a preserved central nucleus is mitochondrial beta-oxidation failure and is a medical emergency',
      why: 'Droplet size names the lesion: ONE large droplet pushing the nucleus to the cell margin is a triglyceride accounting problem and is reversible, while MANY small droplets around a central nucleus means the mitochondria have stopped oxidising fat — so the liver fails without lysing, and the transaminases stay low precisely because the hepatocytes are not bursting',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 24-year-old woman is admitted 36 hours after a staggered paracetamol overdose. Liver biopsy is not performed, but at post-mortem the liver shows confluent necrosis forming a ring around every central vein, with the periportal hepatocytes intact. Which property of that zone best explains the distribution?',
      options: [
        { id: 'a', text: 'Zone 3 receives the highest concentration of portal antigens because it is the first tissue portal blood meets' },
        { id: 'b', text: 'Zone 3 has both the lowest oxygen tension and the highest CYP2E1 activity in the lobule' },
        { id: 'c', text: 'Zone 3 contains the highest density of Kupffer cells, so immune-mediated killing concentrates there' },
        { id: 'd', text: 'Zone 3 hepatocytes lack glutathione entirely, unlike zones 1 and 2' },
      ],
      answerId: 'b',
      explanation: 'Sinusoidal blood flows from portal tract to central vein, so oxygen falls from about 60 to 65 mmHg in zone 1 to about 30 to 35 mmHg in zone 3. Zone 3 also concentrates CYP2E1, which converts paracetamol to NAPQI. The same zone is therefore both the most hypoxic and the most bioactivating, which is why shock, right heart failure and paracetamol converge on an identical centrilobular pattern. Option a describes zone 1, which is the first tissue portal blood reaches and the first to load iron in haemochromatosis. Glutathione is present in all zones but is depleted fastest where NAPQI is produced, so option d overstates the case.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 31-year-old man has malaise and jaundice with ALT 1600 U/L. Serology shows HBsAg negative, anti-HBs negative, anti-HBc IgM positive, anti-HAV IgM negative. What does this panel indicate?',
      options: [
        { id: 'a', text: 'Successful hepatitis B vaccination with an unrelated acute hepatitis' },
        { id: 'b', text: 'Chronic hepatitis B with a precore mutant strain' },
        { id: 'c', text: 'Acute hepatitis B in the window period' },
        { id: 'd', text: 'Remote resolved hepatitis B with no current infection' },
      ],
      answerId: 'c',
      explanation: 'Surface antigen clears before surface antibody appears, and in that interval core IgM is the only positive marker — the window period. Vaccination gives anti-HBs alone and never anti-HBc, because the vaccine contains surface antigen only, so option a is impossible. A precore mutant is HBeAg-negative but remains HBsAg-positive, so option b fails on the same marker. Remote resolved infection would show anti-HBc of IgG class, usually with anti-HBs, and would not accompany an ALT of 1600.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Two patients acquire hepatitis B. One is a 35-year-old who becomes acutely jaundiced with ALT 2400 U/L and clears HBsAg within three months. The other is a neonate infected at delivery who remains asymptomatic with normal transaminases and a very high viral load. Which statement best explains the difference in outcome?',
      options: [
        { id: 'a', text: 'The neonatal strain is more cytopathic, causing tolerance through hepatocyte depletion' },
        { id: 'b', text: 'Hepatitis B is not directly cytopathic; a vigorous CD8 response clears the virus and causes the hepatitis, while a tolerised neonatal response does neither' },
        { id: 'c', text: 'Neonates lack HBsAg receptors, so the virus persists extracellularly without infecting hepatocytes' },
        { id: 'd', text: 'Maternal antibody neutralises the virus in the neonate, preventing both clearance and injury' },
      ],
      answerId: 'b',
      explanation: 'Hepatitis B does not kill hepatocytes directly. The liver injury and the viral clearance are the same event: cytotoxic CD8 T cells killing infected cells. A mature adult immune response is broad and vigorous, so it produces both a florid hepatitis and clearance in over 95% of cases. A neonate is tolerised, so it produces neither, which is why the child is asymptomatic with a high viral load and why about 90% of perinatal infections become chronic. This is the general rule that age at infection predicts chronicity, and it also explains why immunosuppressed carriers have quiet biopsies and why immune reconstitution produces a destructive flare.',
      tests: 'disease',
    },
  ],
};

export default rbpHepaticInjuryHepatitis;
