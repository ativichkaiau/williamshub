import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpGeneticDiseaseMechanisms: Lecture = {
  id: 'rbp-genetic-disease-mechanisms',
  title: 'Mechanisms of Genetic Disease',
  system: 'molecular',
  source: 'Ch 6 — Genetic and Pediatric Diseases',
  updated: '2026-09-21',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 6 Genetic and Pediatric Diseases' },
    { kind: 'mechanism', label: 'Variant effects, inheritance & chromosome abnormalities' },
    { kind: 'disease', label: 'Imprinting, anticipation & chromosomal disorders' },
  ],

  highYield: [
    '**Map the mutation type to its consequence and the severity ranking stops being arbitrary.** A **missense** change swaps one amino acid for another: **conservative** swaps (similar chemistry) are often tolerated, **non-conservative** ones are not — sickle cell disease is a single **GAG to GTG** at codon 6 of beta globin, trading a charged glutamate for a hydrophobic valine and creating the sticky patch that lets deoxygenated haemoglobin polymerise. A **nonsense** change creates a premature stop; because **nonsense-mediated decay** destroys any transcript whose stop codon lies more than about **50 to 55 nucleotides upstream of the last exon junction**, the usual result is **no protein at all** rather than a short one. A **frameshift** — an insertion or deletion whose size is **not a multiple of three** — misreads **every** downstream codon and, since roughly **1 codon in 20 is a stop**, almost always hits a premature termination within 20 to 30 codons. That is the whole reason **frameshift usually outranks missense in severity: missense changes one residue out of hundreds, a frameshift destroys everything downstream of it**. The corollary students forget is the mirror image: **an indel of exactly three nucleotides is IN FRAME**, and the most important cystic fibrosis allele, **delta-F508**, deletes one phenylalanine and still causes severe disease — because position, not frame, is what matters there. **Splice-site** mutations at the invariant **GT donor and AG acceptor** dinucleotides cause **exon skipping or intron retention**, which is itself usually a frameshift; **promoter and regulatory** mutations change the **amount** of a normal protein rather than its sequence, which is why beta thalassaemia comes in **beta-plus** (reduced) and **beta-zero** (absent) flavours from mutations of different classes in the same gene.',
    '**Dominant versus recessive is a statement about the MECHANISM of the allele, not about how harmful it is.** **Autosomal dominant** disease mostly involves **non-enzyme proteins** — structural proteins, receptors and regulators — by one of three mechanisms: **haploinsufficiency**, where 50 per cent of normal product is not enough (LDL receptor in familial hypercholesterolaemia); **dominant negative**, where the abnormal subunit poisons the normal one (a single abnormal pro-alpha chain wrecks a whole type I collagen triple helix in osteogenesis imperfecta, which is why a **missense there is worse than a null allele** — an exact inversion of the usual ranking); and **gain of function** (constitutively active FGFR3 in achondroplasia, over 99 per cent penetrant, over 80 per cent de novo, with a **paternal age effect**). **Autosomal recessive** disease is mostly **enzyme deficiency**, because enzymes normally operate far below saturation and **50 per cent activity is usually plenty** — which is why nearly every inborn error of metabolism is recessive and why carriers are healthy. For **X-linked recessive** disease, the single most discriminating pedigree feature is that **an affected father never has an affected son**, because he gives his son a Y. Two words must then be used precisely, because students merge them: **penetrance** is the fraction of genotype carriers who show ANY phenotype — all-or-none, a property of a population, and the reason a dominant pedigree can skip a generation (BRCA1 breast cancer penetrance is roughly 70 per cent by age 80). **Expressivity** is how SEVERELY the affected are affected — a gradient, a property of an individual; neurofibromatosis type 1 is essentially 100 per cent penetrant with wildly variable expressivity, from a handful of cafe-au-lait macules to disfiguring plexiform neurofibromas. **Penetrance asks how many; expressivity asks how much.** Baseline pedigree rules are in [[mendelian-inheritance-patterns]].',
    '**Break one: MITOCHONDRIAL inheritance is exclusively maternal, and heteroplasmy explains why one family can contain every severity.** Sperm mitochondria are **ubiquitinated and destroyed after fertilisation**, and the oocyte contributes on the order of **100,000 mtDNA copies** against a sperm contribution of about a hundred — so an **affected mother can transmit to every child of both sexes, while an affected father transmits to none**. That asymmetry alone identifies the pattern on a pedigree. **Heteroplasmy** is the second half: a single cell contains thousands of mtDNA molecules, mutant and wild-type mixed, and they **segregate randomly at each cell division**, so siblings, tissues and even the same tissue over time carry different mutant loads. Disease appears only above a **tissue-specific threshold, commonly quoted around 60 to 90 per cent mutant load** — and because the threshold is set by **oxidative demand**, the tissues that fail first are predictable: **central nervous system, skeletal and cardiac muscle, retina, cochlea, renal tubule and pancreatic beta cell**. That single fact generates the disease list without memorising it: **LHON** (optic nerve), **MELAS**, **MERRF** and **Leigh syndrome**. One complication is worth stating because it catches people: **mtDNA encodes only 13 polypeptides plus 22 tRNAs and 2 rRNAs**, so most mitochondrial proteins are **nuclear**-encoded — a mitochondrial disease can therefore be inherited autosomally, and **a mitochondrial phenotype showing father-to-child transmission is nuclear, not mtDNA**. Clinical detail in [[add-mitochondrial-disorders-pathophysiology-and-clinical-fea]].',
    '**Break two: GENOMIC IMPRINTING means parental origin itself carries information, and Prader-Willi and Angelman are the cleanest proof in medicine.** A subset of genes is **silenced on one parental allele by methylation marks laid down in the germline**, so the functional dose is **one, not two** — and a lesion of whichever copy happens to be active behaves like a complete null. The **same 15q11-q13 deletion** therefore produces **two entirely different diseases depending on which parent supplied it**. Lose the **paternal** contribution (deletion in about **70 per cent**, **maternal uniparental disomy** in about **25 per cent**) and you get **Prader-Willi syndrome**: neonatal **hypotonia and feeding failure**, then **relentless hyperphagia and obesity from 1 to 6 years**, hypogonadism, small hands and feet, and mild intellectual disability. Lose the **maternal** contribution (maternal deletion, or paternal uniparental disomy) and you get **Angelman syndrome**, because **UBE3A is expressed only from the maternal allele in neurons**: severe intellectual disability, **absent speech**, an **ataxic puppet-like gait**, seizures and inappropriate laughter. One deletion, one variable, two diseases. The testing corollary is practical and examinable: **methylation analysis detects all the mechanisms — deletion, uniparental disomy and imprinting-centre defect — because all of them end in the same methylation state, whereas a chromosomal microarray sees only the deletion.** A normal microarray therefore does not exclude Angelman syndrome.',
    '**Break three: ANTICIPATION, because a triplet repeat expands as it passes through meiosis.** A polymerase copying a long tandem array **slips**, so the array grows between generations: a premutation becomes a full mutation, and **onset falls and severity rises down the pedigree**. Two asymmetries do the examining. In **Huntington disease** — **CAG** in exon 1 of **HTT**, producing a **polyglutamine tract with a toxic gain of function**; **40 or more repeats fully penetrant, 36 to 39 reduced penetrance, 26 or fewer normal** — the largest expansions come through the **father**, because repeat instability lives in spermatogenesis, so **juvenile Huntington disease is almost always paternally inherited**. In **fragile X syndrome** — **CGG** in the **5-prime untranslated region of FMR1**, where **over 200 repeats causes hypermethylation and SILENCES the gene**, a loss of function rather than a toxic protein — expansion from premutation (**55 to 200**) to full mutation occurs **only in maternal transmission**, during oogenesis. Hence the pedigree that Mendel cannot explain: a **normal transmitting male** passes his premutation unchanged to **all** his daughters, whose sons are then at risk, so the disease appears to skip a generation by rule rather than by chance. A premutation is not silent either — it causes **fragile X-associated tremor and ataxia syndrome** in older male carriers and **primary ovarian insufficiency in roughly 20 per cent** of female carriers, both through **RNA toxicity**, a different mechanism from the full mutation. The organising rule: **a repeat in a coding exon makes a toxic protein; a repeat in an untranslated region silences the gene or makes a toxic RNA.** More in [[add-genetic-anticipation-and-triplet-repeat-disorders]].',
    '**Classify chromosomal disorders by MECHANISM, because the mechanism — not the phenotype — sets the recurrence risk.** **Nondisjunction** accounts for about **95 per cent of trisomy 21** and is overwhelmingly maternal meiosis I; its risk climbs steeply with maternal age (roughly **1 in 1500 at 20, 1 in 900 at 30, 1 in 350 at 35, 1 in 100 at 40, 1 in 30 at 45**) because an oocyte is **arrested in prophase I from fetal life until ovulation**, so a 40-year-old egg has held its bivalents together on ageing cohesin for four decades. Recurrence risk after a nondisjunction trisomy is about **1 per cent**, or the maternal-age risk if that is higher. **Robertsonian translocation** accounts for about **4 per cent**: two **acrocentric** chromosomes (**13, 14, 15, 21, 22**) fuse at the centromere and the short arms, which carry only ribosomal RNA genes, are lost — so the **carrier is phenotypically normal with only 45 chromosomes**, while a proportion of gametes are unbalanced. This is the discriminator with real counselling consequences: a **der(14;21) carrier mother has a recurrence risk of roughly 10 to 15 per cent**, a carrier father roughly **1 to 2 per cent** (unbalanced sperm are selected against), and a **der(21;21) carrier has a recurrence risk of 100 per cent**, because every viable gamete is unbalanced. Translocation Down syndrome is **not related to maternal age**, and the only way to tell it apart from trisomy is to **count the chromosomes: a child with Down syndrome and 46 chromosomes is a translocation case, and both parents must then be karyotyped**. **Mosaicism** (about **1 to 2 per cent**) arises from **post-zygotic mitotic** nondisjunction, so the phenotype is milder and proportional to the affected cell fraction, and recurrence risk is that of the population. The reverse trap is **gonadal mosaicism**: unaffected parents of a child with an apparently de novo dominant disorder such as osteogenesis imperfecta or Duchenne muscular dystrophy have a recurrence risk of **several per cent, not zero**, because a mutant clone sits in one parent germ line — the mechanism is mosaicism confined to the gonad, and it is the reason de novo is never the same as zero risk.',
  ],

  mechanism: {
    title: 'Why one 15q deletion produces two different diseases',
    steps: [
      {
        id: 's1',
        label: 'In the germ line, genes at 15q11-q13 are methylated according to the SEX of the parent making the gamete',
        detail: 'The imprint is an epigenetic mark, not a sequence change. It is erased and reset every generation, which is why an allele that was silent in a mother can be active in her son.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'Imprinting silences one parental allele, so these genes run on a functional dose of one rather than two',
        detail: 'This removes the normal diploid safety margin. For an imprinted gene there is no spare copy, so a lesion of the active allele behaves exactly like a homozygous null.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'A 15q11-q13 deletion therefore removes either the working copy or the already-silent one, depending on which parent supplied that chromosome',
        detail: 'The deletion is physically identical in both cases. Parent of origin is the only variable, which is what makes this pair the cleanest demonstration that parental origin carries information.',
        emphasis: 'key',
      },
      {
        id: 's4',
        label: 'No active paternal contribution: Prader-Willi syndrome',
        detail: 'Paternal deletion in roughly 70 per cent, maternal uniparental disomy in roughly 25 per cent. Neonatal hypotonia and poor feeding give way to hyperphagia and obesity between 1 and 6 years, with hypogonadism and mild intellectual disability.',
        emphasis: 'danger',
      },
      {
        id: 's5',
        label: 'No active maternal contribution: Angelman syndrome',
        detail: 'Maternal deletion or paternal uniparental disomy. UBE3A is expressed only from the maternal allele in neurons, so its loss gives severe intellectual disability, absent speech, an ataxic gait, seizures and inappropriate laughter.',
        emphasis: 'danger',
      },
      {
        id: 's6',
        label: 'Deletion, uniparental disomy and imprinting-centre defect all converge on the same methylation state',
        detail: 'That convergence is why methylation testing detects every mechanism in one assay while a chromosomal microarray, which measures dosage, sees only the deletion. A normal microarray does not exclude either syndrome.',
        emphasis: 'key',
      },
    ],
  },

  examFindings: [
    {
      sign: 'A pedigree in which no affected man has an affected son, but every one of his daughters is a carrier',
      mechanism: 'X-linked recessive inheritance — a father gives his son a Y and his daughter his only X, so the absence of male-to-male transmission is the single most discriminating pedigree feature',
      significance: 'key',
    },
    {
      sign: 'An affected woman transmits to all of her children of both sexes, while her equally affected brother transmits to none of his',
      mechanism: 'Mitochondrial inheritance — sperm mitochondria are destroyed after fertilisation, so the oocyte supplies essentially the entire mtDNA complement of the zygote',
      significance: 'key',
    },
    {
      sign: 'Age of onset falling by roughly a decade in each generation, with the youngest and most severe case inherited from an affected father',
      mechanism: 'Anticipation in Huntington disease — CAG repeat instability is greatest during spermatogenesis, so the largest expansions pass through the paternal line and juvenile disease is nearly always paternally inherited',
      significance: 'key',
    },
    {
      sign: 'A floppy neonate who feeds poorly and needs tube feeding, then becomes relentlessly hyperphagic and obese between 1 and 6 years',
      mechanism: 'Prader-Willi syndrome — loss of the active paternal 15q11-q13 contribution, by paternal deletion in about 70 per cent or maternal uniparental disomy in about 25 per cent',
      significance: 'key',
    },
    {
      sign: 'A child with Down syndrome whose karyotype shows 46 chromosomes rather than 47',
      mechanism: 'Robertsonian translocation Down syndrome — the extra 21q is fused to another acrocentric chromosome, so the count is normal while the dosage is not; both parents must now be karyotyped',
      significance: 'key',
    },
    {
      sign: 'A girl with swirled hyperpigmentation following Blaschko lines and no affected male relatives anywhere in the pedigree',
      mechanism: 'X-linked dominant disease that is lethal in males, such as incontinentia pigmenti — the swirls are lyonisation made visible, each stripe a clone descended from a cell that inactivated a different X',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'G-banded karyotype at roughly 500-band resolution',
      meaning: 'Resolves imbalances of about 5 to 10 megabases and is the only routine test that sees BALANCED rearrangements, because a translocation or inversion with no net gain or loss is invisible to any dosage-based method. It is therefore the right test to ask whether a parent is a translocation carrier, and the wrong test for a point mutation.',
    },
    {
      clue: 'Chromosomal microarray',
      meaning: 'First-line for unexplained intellectual disability or multiple congenital anomalies, detecting copy-number change down to tens of kilobases. Remember what it is: a dosage test. It is blind to balanced translocations and inversions by definition, blind to point mutations, blind to repeat expansions, and blind to uniparental disomy unless the platform is SNP-based.',
    },
    {
      clue: 'Methylation analysis at 15q11-q13, for example by methylation-specific MLPA',
      meaning: 'Detects Prader-Willi and Angelman syndromes by all three mechanisms in a single assay, because deletion, uniparental disomy and imprinting-centre defect all produce the same abnormal methylation pattern. A microarray finds only the deletion, which is about 70 per cent of cases, so a normal microarray is not an exclusion.',
    },
    {
      clue: 'Dedicated repeat sizing by Southern blot or triplet-repeat-primed PCR',
      meaning: 'Standard sequencing and exome sequencing cannot count a long, GC-rich tandem array — the array either fails to amplify or is read through inaccurately. Fragile X and Huntington disease need their own assay, and this is the commonest reason a reassuring exome report is false reassurance.',
    },
    {
      clue: 'Mitochondrial DNA testing performed on the RIGHT tissue',
      meaning: 'Heteroplasmy differs between tissues, and mutant mtDNA is selected against in the rapidly dividing leucocyte pool, so blood heteroplasmy falls with age. A negative blood test in suspected MELAS or MERRF should be repeated on urinary epithelium or skeletal muscle before the diagnosis is abandoned.',
    },
    {
      clue: 'Parental testing and segregation analysis around a variant of uncertain significance',
      meaning: 'The same variant means different things in different pedigrees. A de novo finding in an unaffected-parent trio argues for pathogenicity; inheritance from an unaffected parent argues against it unless the condition is recessive, imprinted or incompletely penetrant. And a de novo result never makes recurrence risk zero, because gonadal mosaicism in a parent gives a risk of several per cent.',
    },
  ],

  treatment: [
    {
      logic: 'Quote the recurrence risk from the mechanism, never from the diagnosis',
      detail: 'Down syndrome is the worked example, because the child looks identical in every case and the numbers are not close. **Trisomy 21 from maternal nondisjunction: about 1 per cent**, or the maternal-age risk if that is higher. **A der(14;21) carrier mother: roughly 10 to 15 per cent.** **A der(14;21) carrier father: roughly 1 to 2 per cent**, because unbalanced sperm are selected against. **A der(21;21) carrier of either sex: 100 per cent**, since every viable gamete is unbalanced. **Mosaic trisomy: the population risk.** One phenotype, four answers — and you cannot choose between them without the child karyotype, then both parent karyotypes if the child has 46 chromosomes. The same discipline applies elsewhere: an **autosomal recessive** condition is **25 per cent per pregnancy regardless of how many children are already affected**, because gametes have no memory; an apparently **de novo dominant** mutation carries **several per cent, not zero**, because of gonadal mosaicism; and **mitochondrial** disease is genuinely unpredictable, because heteroplasmy segregates at random.',
    },
    {
      logic: 'Choose the assay from the suspected mechanism, because no single test sees everything',
      detail: 'Each method answers exactly one physical question about DNA, so name the category first and order second. **Dosage: microarray.** **Balance: karyotype.** **Parent of origin: methylation analysis.** **Repeat length: targeted repeat sizing.** **Maternal-line energy failure: mtDNA in the correct tissue.** **Base sequence: gene panel or exome.** A normal exome excludes **none** of the first five — it does not count a CGG array, it cannot read a methylation mark, and a balanced translocation produces no sequence change at all. This is why a child with absent speech, an ataxic gait and a normal microarray still needs methylation testing before Angelman syndrome can be set aside. Downstream paediatric consequences of these mechanisms are in [[rbp-paediatric-congenital-disease]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Penetrance counts people, expressivity measures damage',
      expansion: [
        'Penetrance: what fraction of carriers show anything at all. All-or-none, a property of a population. Incomplete penetrance is what makes a dominant pedigree skip a generation.',
        'Expressivity: how severely the affected are affected. A gradient, a property of an individual.',
        'BRCA1 is the penetrance example — roughly 70 per cent lifetime breast cancer risk, so 30 per cent of carriers never develop it.',
        'Neurofibromatosis type 1 is the expressivity example — essentially everyone with the gene shows something, but that something ranges from a few macules to disfiguring tumours.',
        'A gap in the pedigree means penetrance. Everyone affected but unequally means expressivity.',
      ],
    },
    {
      hook: 'Three ways to break Mendel: Mother, Parent, Ratchet',
      expansion: [
        'Mother — mitochondrial: only she transmits, to every child of both sexes; heteroplasmy and a tissue threshold explain why her children differ so much.',
        'Parent — imprinting: the same 15q deletion is Prader-Willi from the father and Angelman from the mother, so parental origin itself is information.',
        'Ratchet — anticipation: the repeat expands through meiosis, so onset falls each generation; paternal transmission drives Huntington disease, maternal transmission drives fragile X.',
        'None of the three breaks the rule that the phenotype follows the gene. They break the rule that the pedigree alone can tell you which gene.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Recurrence risk in Down syndrome',
      wrongInstinct: 'Down syndrome is Down syndrome, so quote the usual figure of about 1 per cent.',
      rightAnswer: 'Karyotype the child first. Forty-seven chromosomes means nondisjunction and about 1 per cent; forty-six means a Robertsonian translocation, which is 10 to 15 per cent if the mother carries it, 1 to 2 per cent if the father does, and 100 per cent for a der(21;21) carrier.',
      why: 'The phenotype is identical in every case, so the chromosome count is the only thing separating a 1 per cent risk from a certainty — and it is a test that takes one blood sample.',
    },
    {
      questionCategory: 'A normal exome in a child with intellectual disability',
      wrongInstinct: 'Sequencing is the most comprehensive test available, so a normal exome rules out a genetic cause.',
      rightAnswer: 'Exome sequencing reads single bases. It does not count repeats, does not read methylation and does not see chromosomal balance, so fragile X needs repeat sizing, Angelman syndrome needs methylation analysis and a balanced translocation needs a karyotype.',
      why: 'Each assay answers one physical question about DNA, and what is the sequence is a different question from how many copies of this triplet, which parent supplied this allele, and is anything swapped.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 4-year-old boy has severe intellectual disability, no speech, an ataxic wide-based gait, seizures and frequent unprovoked laughter. A chromosomal microarray is normal. What is the appropriate next test, and why does the normal microarray fail to exclude the diagnosis?',
      options: [
        { id: 'a', text: 'Methylation analysis at 15q11-q13, because Angelman syndrome also arises from paternal uniparental disomy and imprinting-centre defects, which change methylation without changing copy number' },
        { id: 'b', text: 'Repeat sizing of FMR1, because the microarray cannot count CGG repeats and fragile X is the likeliest cause of this phenotype' },
        { id: 'c', text: 'A G-banded karyotype, because the microarray cannot detect the 15q deletion at standard resolution' },
        { id: 'd', text: 'Mitochondrial DNA sequencing on blood, because ataxia and seizures indicate an energy-failure phenotype' },
      ],
      answerId: 'a',
      explanation: 'The phenotype is Angelman syndrome, from loss of maternally expressed UBE3A in neurons. Maternal deletion accounts for about 70 per cent and is the only mechanism a dosage-based microarray can see; paternal uniparental disomy and imprinting-centre defects leave copy number normal while producing the same abnormal methylation. Methylation analysis detects all of them in one assay, which is why it, not the microarray, is the definitive test. A karyotype would be even less sensitive than the microarray for a deletion of this size.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A couple have a child with Down syndrome. The child karyotype shows 46 chromosomes with a der(14;21). The mother is then found to carry the same translocation and has 45 chromosomes with a normal phenotype. How should their recurrence risk be counselled, and why is the mother healthy?',
      options: [
        { id: 'a', text: 'About 1 per cent, the standard figure after any trisomy 21, and she is healthy because balanced carriers are always healthy' },
        { id: 'b', text: 'Roughly 10 to 15 per cent, and she is healthy because the lost acrocentric short arms carry only ribosomal RNA genes, so her total functional gene dosage is normal' },
        { id: 'c', text: 'Effectively zero, because the translocation is balanced and balanced rearrangements are not transmitted' },
        { id: 'd', text: 'One hundred per cent, because every gamete from a Robertsonian translocation carrier is unbalanced' },
      ],
      answerId: 'b',
      explanation: 'A Robertsonian translocation fuses two acrocentric chromosomes at the centromere and discards their short arms, which contain only redundant ribosomal RNA gene clusters — so the carrier has 45 chromosomes and normal functional dosage. Meiotic segregation, however, produces a proportion of unbalanced gametes, giving a carrier mother a recurrence risk of roughly 10 to 15 per cent and a carrier father roughly 1 to 2 per cent, since unbalanced sperm are selected against. The 100 per cent figure applies only to a der(21;21) carrier, where no viable balanced gamete can be formed. The 1 per cent figure applies to nondisjunction trisomy, which this is not — and the chromosome count is what distinguishes them.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A woman with MELAS has three children whose severity ranges from profound to trivial. Her brother, who is affected to the same degree as she is, has four entirely unaffected children. Which single mechanism accounts for BOTH observations?',
      options: [
        { id: 'a', text: 'Incomplete penetrance of an autosomal dominant allele with a paternal age effect' },
        { id: 'b', text: 'Maternal-only transmission of mtDNA combined with heteroplasmy and a tissue-specific threshold' },
        { id: 'c', text: 'Genomic imprinting, with the causative locus silenced on the paternal allele' },
        { id: 'd', text: 'X-linked dominant inheritance with skewed X inactivation in the offspring' },
      ],
      answerId: 'b',
      explanation: 'Two facts do all the work. Sperm mitochondria are ubiquitinated and destroyed after fertilisation while the oocyte supplies on the order of 100,000 mtDNA copies, so an affected woman transmits to every child and an affected man to none — which explains her brother unaffected children. Within her own children, mutant and wild-type mtDNA segregate randomly at each cell division, so each child inherits and then develops a different mutant load, and symptoms appear only where that load exceeds the threshold for a tissue oxidative demand — which explains the range of severity. Imprinting concerns nuclear parental origin, not organelle transmission, and would not produce the sex asymmetry seen here.',
      tests: 'mechanism',
    },
  ],
};

export default rbpGeneticDiseaseMechanisms;
