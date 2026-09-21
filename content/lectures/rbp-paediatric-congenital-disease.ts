import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpPaediatricCongenitalDisease: Lecture = {
  id: 'rbp-paediatric-congenital-disease',
  title: 'Congenital Malformation & Paediatric Disease',
  system: 'molecular',
  source: 'Ch 6 — Genetic and Pediatric Diseases',
  updated: '2026-09-21',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 6 Genetic and Pediatric Diseases' },
    { kind: 'mechanism', label: 'Developmental errors, neonatal injury & childhood tumours' },
    { kind: 'disease', label: 'Prematurity, growth restriction & embryonal tumours' },
  ],

  highYield: [
    '**Five words, used precisely, each with its own recurrence risk — this is not vocabulary pedantry, it changes what you tell the family.** A **malformation** is an **intrinsically abnormal developmental process**: the blueprint was wrong from the start, the insult acted during organogenesis, and the cause is usually genetic or multifactorial. Worked example: a **ventricular septal defect**, or holoprosencephaly. A **deformation** is **normally formed tissue distorted by an extrinsic mechanical force**, almost always late and almost always uterine constraint — oligohydramnios, a uterine leiomyoma, twins, a breech lie. Worked example: **talipes equinovarus** in an oligohydramnios pregnancy; the foot was built correctly and then bent. Because the structure itself is normal, **deformations frequently correct after birth once the force is removed**, which is the practical discriminator from a malformation, which does not. A **disruption** is the **destruction of tissue that had already formed normally**. Worked example: **amniotic band sequence**, where a strand from a ruptured amnion encircles a formed limb and amputates it — and because it is an accident rather than a genetic programme, **the recurrence risk is essentially zero**, which matters more to a family than the word does. A **sequence** is **one anomaly cascading into several**. Worked example: **oligohydramnios (Potter) sequence** — bilateral renal agenesis, therefore no fetal urine, therefore no amniotic fluid, therefore both **compression** (flattened facies, low-set ears, clubfeet, breech) and **failure of lung distension** (pulmonary hypoplasia, which is what actually kills). One cause, five findings, all downstream. A **syndrome** is **one cause producing several anomalies that are NOT derivable from one another**: trisomy 21 gives an atrioventricular septal defect, duodenal atresia, a single palmar crease and Alzheimer-type pathology by 40, and none of those causes the others. Mechanisms behind the causes are in [[rbp-genetic-disease-mechanisms]].',
    '**Teratogen TIMING is the organising principle, and it derives the outcome rather than describing it.** **Weeks 0 to 2, before implantation and before differentiation: ALL OR NONE.** The blastomeres are still totipotent, so either enough cells die and the conceptus is lost — usually before a missed period — or the survivors replace the lost ones and nothing is left behind. This is the fact that reassures a woman who took something before she knew she was pregnant. **Weeks 3 to 8, the embryonic period: MAXIMAL susceptibility to structural malformation**, because organogenesis is happening — cells are committing to lineages and laying down organ primordia, a process with no spare capacity. Within that window **each organ opens its own narrow critical period**, which is precisely why **the same agent produces different outcomes at different times**: **thalidomide** given on **days 21 to 40** produces limb reduction defects, and given outside that window produces nothing at all. The **neural tube closes by day 28**, which is why folate must be taken **before** conception rather than when the pregnancy is confirmed; the palate closes around weeks 8 to 9. **Week 9 to term, the fetal period:** organs already exist, so the target shifts from **form to GROWTH and FUNCTION**. Alcohol is the worked example that spans both windows — exposure in the embryonic period sets the **facial dysmorphology** (short palpebral fissures, smooth philtrum, thin vermilion border) because the midface is being modelled then, while continued fetal-period exposure produces **microcephaly, growth restriction and the neurobehavioural deficit**, which is the part that lasts. Rubella makes the same point in reverse: before 8 weeks it causes cataract, deafness and patent ductus arteriosus, while after 20 weeks it causes almost nothing structural. The rule to carry is that **is this a teratogen is an unanswerable question until you say at which week** — effect is a function of dose and of the developmental clock together. Chemical and toxic injury mechanisms: [[environmental-chemical-tobacco-injury]].',
    '**Prematurity and growth restriction are different measurements, and the complications barely overlap.** **Prematurity is a statement about TIME** — birth before **37 completed weeks** — and the baby may be perfectly grown for its gestation; the problem is that organs are being used before they are finished. **Growth restriction is a statement about SIZE** — conventionally below the **10th centile** for gestational age — and the baby may be term; the problem is a growth insult. A newborn can be either, both or neither. The premature infant gets **respiratory distress syndrome, necrotising enterocolitis, intraventricular haemorrhage and retinopathy of prematurity**; the growth-restricted term infant gets **perinatal asphyxia, meconium aspiration, hypoglycaemia** (no glycogen or fat laid down) and **polycythaemia** (chronic hypoxia driving erythropoietin). Then the discriminator that names the cause: **SYMMETRIC** restriction — head, abdomen and length all proportionately small — means the insult was **EARLY and intrinsic to the fetus**, acting when growth is by **hyperplasia**: **chromosomal abnormality, congenital infection or a fetal toxin such as alcohol**. Growth potential was reduced from the beginning, so everything is small together, and the neurological prognosis is the worse of the two because the brain was never built. **ASYMMETRIC** restriction — abdominal circumference falling away while head circumference is preserved — means the insult was **LATE and extrinsic**, acting in the third trimester when growth is by **hypertrophy** and glycogen and fat are being deposited: **placental insufficiency** in pre-eclampsia or maternal hypertension, or maternal malnutrition. The fetus redistributes cardiac output to brain, heart and adrenals — **brain sparing** — so the head stays normal while the liver shrinks and subcutaneous fat disappears.',
    '**Every complication of prematurity is the same sentence with a different organ: it was used before it was finished.** **Respiratory distress syndrome** — type II pneumocytes do not produce adequate surfactant until about **weeks 32 to 35** (a **lecithin to sphingomyelin ratio of 2 or more** marks maturity). Without surfactant, the Laplace relationship means **small alveoli empty into large ones**: diffuse atelectasis, stiff non-compliant lungs, right-to-left shunting and hypoxaemia, with protein-rich plasma leaking through the damaged alveolocapillary barrier to form the eosinophilic **hyaline membranes** that name the disease. **Necrotising enterocolitis** — an immature mucosal barrier, immature motility and an immature mucosal immune response, plus enteral feeding and bacterial colonisation, allow a mucosal injury to propagate transmurally through the terminal ileum and right colon; the radiological signature is **pneumatosis intestinalis**, which is literally gas made by luminal bacteria that have crossed into the bowel wall, with portal venous gas and free air marking perforation. **Intraventricular haemorrhage** — the **germinal matrix** is a transient, densely cellular and richly vascular structure in the subependymal region over the head of the caudate that supplies migrating neurons and glia and **involutes by weeks 32 to 34**. Its vessels are thin-walled and unsupported by stroma, and the preterm brain has **poor cerebral autoregulation**, so any swing in blood pressure, carbon dioxide or venous pressure ruptures them — which explains both where the bleed happens and why it stops being a risk after about 34 weeks. **Retinopathy of prematurity** is biphasic: relative **hyperoxia after birth suppresses VEGF** and peripheral retinal vascularisation arrests, then the maturing, metabolically hungry retina becomes hypoxic and drives a **VEGF surge** with disordered neovascularisation, fibrovascular proliferation, traction and detachment. Note what that means practically — **oxygen and positive pressure, the treatments for the first problem, cause the third and cause bronchopulmonary dysplasia**, which is why saturation targets are deliberately restrictive rather than maximal.',
    '**Sudden infant death syndrome is a diagnosis of exclusion, and the exclusion has three required parts.** It is the sudden death of an infant **under 1 year** that remains unexplained after **(1) a complete autopsy, (2) examination of the death scene and (3) review of the clinical history** — all three, because the differential contains entities that leave no external mark and some of them are visible only at the scene: **inflicted injury, accidental suffocation or overlay, an unrecognised metabolic disorder such as medium-chain acyl-CoA dehydrogenase deficiency, a long QT channelopathy and occult infection**. Peak incidence is **2 to 4 months** and almost all deaths occur during sleep. The **triple-risk model** organises this: a **vulnerable infant** (a postulated brainstem abnormality in arousal and cardiorespiratory control, centred on the arcuate nucleus), in a **critical developmental window** (2 to 4 months, when cardiorespiratory control is being remodelled), meeting an **exogenous stressor** (prone or side sleeping, soft bedding, bed-sharing, overheating, a covered face). The model earns its place because it predicts that an intervention aimed only at the third element will work — and it did: **supine sleeping campaigns from 1990 cut incidence by half or more**, the largest modifiable effect in the field. **Modifiable: supine position, a firm separate sleep surface, no soft bedding or bumpers, avoid overheating, no smoking in pregnancy or the household; breastfeeding and immunisation are protective; room-share without bed-sharing.** Non-modifiable associations are prematurity, low birth weight, male sex and young maternal age. And the honest negative: the **thymic, pleural and epicardial petechiae** classically described are frequent but non-specific, so they support nothing on their own — true SIDS has no diagnostic autopsy finding, which is exactly why the scene and the history are part of the definition. Newborn metabolic screening context: [[add-phenylketonuria-genetic-basis-and-dietary-management]].',
    '**Childhood cancer is a different biology, and small round blue cell tumour is a genuine diagnostic category rather than a description.** Adult cancer is mostly **carcinoma**, arising in epithelium after decades of accumulated mutation. Childhood cancer is mostly **EMBRYONAL** — tumours of residual immature blastemal tissue that failed to complete differentiation, carrying the **-blastoma** suffix: **neuroblastoma, nephroblastoma (Wilms tumour), retinoblastoma, hepatoblastoma, medulloblastoma**. They typically require a small number of genetic events rather than a long mutational history, which is why they present early, are often bilateral or multifocal when a germline allele is involved, and are frequently **astonishingly chemosensitive and radiosensitive** — the cells are proliferating and still apoptosis-competent. **Knudson two-hit model**, derived from retinoblastoma, states it exactly: a **hereditary** case carries one defective **RB1** allele in every cell and needs only **one** somatic hit, so it presents early, is often **bilateral or multifocal**, and carries a lifetime risk of second primaries, classically **osteosarcoma**; a **sporadic** case needs **two** somatic hits in the same cell, so it is later and unilateral. The **small round blue cell tumour** is a morphological pattern — sheets of monotonous cells with scant cytoplasm and a high nuclear to cytoplasmic ratio, so the slide is essentially blue — shared by at least six tumours with completely different treatments: **neuroblastoma, Ewing sarcoma, rhabdomyosarcoma, lymphoblastic lymphoma, Wilms tumour and medulloblastoma**. That is why it is a category requiring **immunohistochemistry and molecular testing to resolve**: **synaptophysin, chromogranin and PHOX2B** with **Homer-Wright rosettes** and raised urinary **VMA and HVA** for neuroblastoma; membranous **CD99** with **EWSR1-FLI1** from **t(11;22)** for Ewing sarcoma; **desmin and myogenin** for rhabdomyosarcoma, with **PAX3-FOXO1** marking the alveolar subtype; **TdT** for lymphoblastic lymphoma. **Morphology narrows the list; immunohistochemistry decides.** One paediatric oddity worth carrying: **neuroblastoma in infants can regress spontaneously or mature into a benign ganglioneuroma**, which adult carcinoma essentially never does. Tumour nomenclature and biology: [[rbp-neoplasia-nomenclature-biology]].',
  ],

  mechanism: {
    title: 'Why the same teratogen produces a different disease at each stage',
    steps: [
      {
        id: 's1',
        label: 'Weeks 0 to 2 — blastomeres are still totipotent, so injury is all or none',
        detail: 'Any surviving cell can replace a lost one, so either enough die and the conceptus is lost before a missed period, or the survivors rebuild and nothing is left behind. No partial structural damage is possible, because no structure has been specified yet.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'Around day 15 gastrulation begins and cells commit to lineages, losing the ability to substitute for one another',
        detail: 'This is the moment the all-or-none rule expires. From here a lost cell is a lost structure, because its neighbours can no longer become what it was going to be.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'Weeks 3 to 8 — organogenesis opens a narrow critical window for each organ in turn',
        detail: 'Susceptibility is maximal here because organ primordia are being laid down with no spare capacity. The neural tube closes by day 28 and the palate around weeks 8 to 9, so each structure is vulnerable for only a few days.',
        emphasis: 'danger',
      },
      {
        id: 's4',
        label: 'An agent acting inside an organ window malforms that organ and leaves the others untouched',
        detail: 'Thalidomide on days 21 to 40 produces limb reduction defects and produces nothing outside that range. Rubella before 8 weeks gives cataract, deafness and a patent ductus; after 20 weeks it gives almost no structural damage.',
        emphasis: 'danger',
      },
      {
        id: 's5',
        label: 'Week 9 to term — the organs now exist, so the target shifts from form to growth and function',
        detail: 'Fetal-period injury produces growth restriction, microcephaly and functional and behavioural deficit rather than gross malformation. Alcohol spans both windows, which is why it produces the facial features of an embryonic insult alongside the growth and neurobehavioural consequences of a fetal one.',
        emphasis: 'key',
      },
      {
        id: 's6',
        label: 'Therefore the question is never whether an agent is teratogenic, but at which week it was given',
        detail: 'Effect is a joint function of dose and developmental clock. Read the clock backwards from the defect and you get the timing of the insult, which is how a malformation is separated from a deformation or a disruption at the bedside.',
        emphasis: 'key',
      },
    ],
  },

  examFindings: [
    {
      sign: 'A newborn with a flattened face, low-set ears, clubbed feet and fatal respiratory failure, found at autopsy to have no kidneys',
      mechanism: 'Oligohydramnios (Potter) sequence — no fetal urine means no amniotic fluid, which both compresses the fetus and denies the lung the distension it needs to grow; pulmonary hypoplasia, not the renal agenesis, is the immediate cause of death',
      significance: 'key',
    },
    {
      sign: 'Short palpebral fissures, a smooth philtrum and a thin vermilion border, with microcephaly and growth restriction',
      mechanism: 'Fetal alcohol spectrum disorder — the facial features were set in weeks 3 to 8 while the midface was being modelled, while the growth and neurobehavioural deficits accumulated through the fetal period',
      significance: 'key',
    },
    {
      sign: 'A 29-week infant grunting and flaring within hours of birth, with diffuse ground-glass lungs and air bronchograms on the film',
      mechanism: 'Respiratory distress syndrome — surfactant deficiency raises alveolar surface tension so small alveoli empty into large ones, and plasma protein leaking through the injured barrier forms hyaline membranes',
      significance: 'key',
    },
    {
      sign: 'A preterm infant with feeding intolerance, abdominal distension and bloody stools, with gas within the bowel wall on the abdominal film',
      mechanism: 'Necrotising enterocolitis — pneumatosis intestinalis is gas produced by luminal bacteria that have crossed an immature mucosal barrier, with portal venous gas and free air signalling progression to perforation',
      significance: 'key',
    },
    {
      sign: 'A 2-year-old with an abdominal mass that crosses the midline, periorbital ecchymosis, and raised urinary VMA and HVA',
      mechanism: 'Neuroblastoma — it arises in adrenal medulla or sympathetic chain, so it crosses the midline and metastasises to orbital bone, and it secretes catecholamine metabolites; Wilms tumour, by contrast, is intrarenal, smooth and does not cross the midline',
      significance: 'key',
    },
    {
      sign: 'A newborn limb with a circumferential constriction ring and amputation of the digits beyond it',
      mechanism: 'Disruption, not malformation — the limb was specified and built normally and an amniotic band then destroyed it, which is why the recurrence risk is essentially zero',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'Lecithin to sphingomyelin ratio, or lamellar body count, on amniotic fluid',
      meaning: 'A ratio of 2 or more indicates surfactant sufficiency, reached around 32 to 35 weeks. It is now rarely measured because antenatal steroids are given on gestational age instead, but it is the number underneath the 34-week boundary and it explains why that boundary exists.',
    },
    {
      clue: 'Umbilical artery Doppler with the head to abdominal circumference ratio',
      meaning: 'This separates the two growth restrictions. A preserved head circumference with a falling abdominal circumference and absent or reversed umbilical end-diastolic flow is asymmetric, late and placental. Proportionate smallness present from early gestation with a normal-looking placenta is symmetric, and points inside the fetus.',
    },
    {
      clue: 'Karyotype or microarray plus congenital infection serology in symmetric growth restriction',
      meaning: 'Symmetric restriction says the growth potential itself was reduced, which localises the problem to the fetus — aneuploidy, congenital infection or a toxin. The same panel in asymmetric restriction is usually wasted, because there the lesion is in the placenta and the fetus is normal.',
    },
    {
      clue: 'Cranial ultrasound through the anterior fontanelle in an infant born before 32 weeks',
      meaning: 'A deliberately time-limited screen, because the germinal matrix sits subependymally over the head of the caudate and involutes by 32 to 34 weeks. Grading runs from matrix-confined, to intraventricular without dilatation, to intraventricular with ventricular dilatation, to parenchymal venous infarction.',
    },
    {
      clue: 'The sudden infant death work-up: complete autopsy, death-scene examination and history review',
      meaning: 'The diagnosis cannot be made without all three, because it is defined by exclusion. Medium-chain acyl-CoA dehydrogenase deficiency shows on the newborn acylcarnitine screen, long QT syndrome needs molecular autopsy and family ECGs, and accidental suffocation or inflicted injury may be visible only at the scene.',
    },
    {
      clue: 'An immunohistochemical panel on a small round blue cell tumour',
      meaning: 'The panel converts a pattern into a diagnosis. Synaptophysin, chromogranin and PHOX2B with Homer-Wright rosettes indicate neuroblastoma; membranous CD99 with an EWSR1 rearrangement indicates Ewing sarcoma; desmin and myogenin indicate rhabdomyosarcoma; TdT indicates lymphoblastic lymphoma. MYCN amplification is then scored separately, because it changes treatment intensity rather than the diagnosis.',
    },
  ],

  treatment: [
    {
      logic: 'Read the developmental clock before you attribute the defect, because the category sets the counselling',
      detail: 'Work backwards from the lesion to the week. A **malformation** means the insult acted in **weeks 3 to 8**, so the work-up is genetic and the recurrence risk is real. A **deformation** means a **mechanical force acted late** on a normally built structure, so it will often correct with time, positioning or splinting once the force is gone, and the family needs an obstetric explanation rather than a genetic one. A **disruption** means a normal structure was **destroyed by an accident**, so the recurrence risk is **essentially zero** and a genetic work-up is not indicated. A **sequence** means you must stop and look for **one** initiating cause rather than investigating five findings separately. Getting the category wrong converts a reassuring conversation into an unnecessary investigation, or an inherited condition into a missed one.',
    },
    {
      logic: 'In prematurity, every intervention buys one organ at the cost of another',
      detail: '**Antenatal betamethasone between 24 and 34 weeks** induces surfactant production and is the single highest-yield intervention in preterm birth; **exogenous surfactant and CPAP** then rescue the lung that arrives anyway. But **supplemental oxygen and positive pressure directly produce bronchopulmonary dysplasia and retinopathy of prematurity** — the treatment for the first disease causes the next two — which is why oxygen saturation targets are deliberately **restrictive rather than maximal** and why CPAP is preferred to intubation where it will do. **Human milk feeding lowers the incidence of necrotising enterocolitis.** Sudden infant death risk reduction has the same shape of logic: the vulnerable infant and the critical window cannot be changed, so the entire lever is the **exogenous stressor** — **supine sleep, a firm separate surface, no soft bedding, no overheating and no smoke exposure**.',
    },
  ],

  mnemonics: [
    {
      hook: 'Built wrong, bent, broken, or a row of dominoes',
      expansion: [
        'Malformation: built wrong from the start, during weeks 3 to 8. A ventricular septal defect.',
        'Deformation: built right, then bent by an outside force late in gestation. Clubfoot from uterine constraint, and it often straightens once the force is removed.',
        'Disruption: built right, then broken. An amniotic band amputating a formed limb, with essentially no recurrence risk.',
        'Sequence: one domino knocks over the rest. Renal agenesis to oligohydramnios to pulmonary hypoplasia.',
        'Syndrome: one hand knocks over several separate dominoes at once. Trisomy 21.',
      ],
    },
    {
      hook: 'Weeks 0 to 2 all or none, 3 to 8 form, 9 to birth function',
      expansion: [
        'Weeks 0 to 2: totipotent cells, so the conceptus is either lost or entirely repaired. Nothing survives to be malformed.',
        'Weeks 3 to 8: organogenesis, so this is when structure is damaged — and each organ has its own few-day window, which is why one drug gives one defect.',
        'Week 9 to term: organs already exist, so the damage is to growth and function — microcephaly, growth restriction, behaviour.',
        'Alcohol crosses both: the face comes from the embryonic window, the brain and the growth from the fetal one.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A small newborn',
      wrongInstinct: 'Small means premature, so expect respiratory distress syndrome and intraventricular haemorrhage.',
      rightAnswer: 'Measure the clock and the size separately. Prematurity is birth before 37 weeks and predicts respiratory distress syndrome, necrotising enterocolitis, intraventricular haemorrhage and retinopathy of prematurity. Growth restriction is size below the 10th centile for gestational age and predicts asphyxia, meconium aspiration, hypoglycaemia and polycythaemia.',
      why: 'One is a statement about time and the other about mass, so a term growth-restricted infant and a well-grown preterm infant are at risk of almost entirely different things.',
    },
    {
      questionCategory: 'Asymmetric growth restriction with a normal head circumference',
      wrongInstinct: 'The head measurement is normal, so the brain escaped and the fetus is coping.',
      rightAnswer: 'A preserved head circumference is brain sparing — active redistribution of cardiac output away from liver, gut and kidney to defend the brain — so it marks compensation already under way, not safety.',
      why: 'The reassuring measurement is the output of a defence, and defences fail; absent or reversed umbilical artery end-diastolic flow in the same fetus says that this one is close to failing.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A fetus with bilateral renal agenesis is born with a flattened face, low-set ears and bilateral clubfeet, and dies within hours of respiratory failure. Which term describes the relationship between these findings, and what is the immediate cause of death?',
      options: [
        { id: 'a', text: 'A sequence, and death is from pulmonary hypoplasia, because without amniotic fluid the lung was never distended enough to grow' },
        { id: 'b', text: 'A syndrome, and death is from renal failure, because the kidneys are absent from birth' },
        { id: 'c', text: 'Multiple independent malformations, and death is from the cardiac defect that accompanies them' },
        { id: 'd', text: 'A disruption, and death is from mechanical compression of the chest wall during delivery' },
      ],
      answerId: 'a',
      explanation: 'A sequence is one initiating anomaly cascading into several downstream ones. Here absent kidneys mean no fetal urine, which means oligohydramnios, which produces both the compression features (flattened facies, low-set ears, clubfeet) and the failure of lung distension. Pulmonary hypoplasia is what kills, not the renal agenesis itself, because the placenta performed the renal function until delivery and nothing replaces the lung afterwards. A syndrome would mean one cause producing several anomalies that are not derivable from one another, which is the opposite of what is happening here.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A woman takes the same drug twice: once at 10 days after conception, and again at 5 weeks. The first exposure leaves no trace at all, while the second produces a limb reduction defect. What single principle accounts for both outcomes?',
      options: [
        { id: 'a', text: 'The second dose was cumulative, so only total exposure matters and the threshold was crossed on the second occasion' },
        { id: 'b', text: 'Susceptibility depends on developmental stage — before implantation, totipotent blastomeres give an all-or-none result, whereas weeks 3 to 8 are organogenesis, when each organ has a narrow critical window' },
        { id: 'c', text: 'The placenta did not form until 5 weeks, so the drug could not reach the conceptus on the first occasion' },
        { id: 'd', text: 'The first exposure caused an identical defect that was repaired by fetal wound healing during the second trimester' },
      ],
      answerId: 'b',
      explanation: 'Before implantation the cells are totipotent, so a surviving cell can replace a lost one: either the conceptus is lost outright, usually before a missed period, or it recovers completely. Nothing partial can survive because no structure has been specified. By week 5 gastrulation has committed cells to lineages and the limb buds are within their own narrow critical period, so an agent acting then damages that structure and leaves the rest untouched. This is why thalidomide is teratogenic only on roughly days 21 to 40, and why the question of whether an agent is a teratogen cannot be answered without stating the week.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 3-year-old has a retroperitoneal mass. The biopsy shows sheets of monotonous small cells with scant cytoplasm and a high nuclear to cytoplasmic ratio. The report describes a small round blue cell tumour. Why is that not yet a diagnosis, and what resolves it?',
      options: [
        { id: 'a', text: 'It is a descriptive pattern shared by several tumours with different treatments, and immunohistochemistry with molecular testing resolves it' },
        { id: 'b', text: 'It is a diagnosis, and neuroblastoma can be assumed in a retroperitoneal mass at this age' },
        { id: 'c', text: 'The specimen is inadequate, and only a repeat biopsy with more tissue can establish any diagnosis' },
        { id: 'd', text: 'It is a benign pattern that requires only observation until the mass enlarges' },
      ],
      answerId: 'a',
      explanation: 'Small round blue cell tumour names what the slide looks like at low power, not what the tumour is. At least six entities share the appearance — neuroblastoma, Ewing sarcoma, rhabdomyosarcoma, lymphoblastic lymphoma, Wilms tumour and medulloblastoma — and their treatments diverge completely. Immunohistochemistry with molecular testing decides: synaptophysin, chromogranin and PHOX2B with Homer-Wright rosettes for neuroblastoma; membranous CD99 with an EWSR1 rearrangement for Ewing sarcoma; desmin and myogenin for rhabdomyosarcoma; TdT for lymphoblastic lymphoma. Morphology narrows the list and immunohistochemistry closes it, after which MYCN amplification status is scored to set treatment intensity.',
      tests: 'investigation',
    },
  ],
};

export default rbpPaediatricCongenitalDisease;
