import type { Lecture } from '../../lib/types';

export const ghpTranslationRibosomes: Lecture = {
  id: 'ghp-translation-ribosomes',
  title: 'Translation on the Ribosome',
  system: 'molecular',
  source: 'Ch 3 — Genetic Control of Protein Synthesis & Cell Reproduction',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'Ch 3 Genetic Control' },
    { kind: 'mechanism', label: 'Codon–anticodon reading' },
    { kind: 'mechanism', label: 'Ribosome A/P/E sites' },
    { kind: 'exam', label: '70S vs 80S selectivity' },
  ],

  highYield: [
    '**tRNA is the adaptor that turns a nucleic-acid language into a protein one.** Its **anticodon pairs antiparallel with the mRNA codon**, while its 3′ **CCA end** carries the amino acid. The **aminoacyl-tRNA synthetase** (one per amino acid) charges it at a cost of **ATP → AMP + PPi (two high-energy bonds)** and proofreads the pairing — **fidelity is decided here, not at the ribosome**, which is why the synthetases are called the second genetic code.',
    '**The ribosome is a ribozyme with three seats.** Eukaryotes: **40S + 60S = 80S**; prokaryotes: **30S + 50S = 70S**. **A site** accepts the incoming aminoacyl-tRNA, **P site** holds the growing peptide, **E site** ejects the spent tRNA. **Peptidyl transferase activity belongs to the large-subunit rRNA, not to protein** — catalysis by RNA.',
    '**Initiation.** Eukaryotes: the small subunit binds the **5′ cap** and **scans to the first AUG** (Kozak context), bringing **Met-tRNA**; the large subunit then joins. Prokaryotes: the **Shine–Dalgarno sequence** positions the 30S subunit directly and the first residue is **formyl-methionine** — which is why bacterial fMet peptides are potent neutrophil chemoattractants.',
    '**Elongation is a three-beat cycle repeated once per codon: (1) codon recognition in the A site (eEF-1α/EF-Tu + GTP), (2) peptide bond transfer from P to A by peptidyl transferase, (3) translocation of the ribosome one codon along (eEF-2/EF-G + GTP).** Cost is about **four high-energy phosphate bonds per amino acid** — protein synthesis is the most expensive thing a cell does. **Termination**: a stop codon has no tRNA, so a **release factor** enters the A site, hydrolyses the chain free and the subunits dissociate.',
    '**One message, many machines, two destinations.** A **polyribosome (polysome)** is several ribosomes translating one mRNA simultaneously — amplification without extra transcription. **Free cytosolic ribosomes** make cytosolic, nuclear, mitochondrial and peroxisomal proteins; **ribosomes bound to rough ER** make **secreted, lysosomal and membrane proteins**. The decision is made mid-translation: an **N-terminal signal peptide** is caught by the **signal recognition particle (SRP)**, which pauses the ribosome and docks it on the ER.',
    '**Clinical anchor: the 70S/80S difference is the basis of an entire antibiotic pharmacology.** **30S** — aminoglycosides, tetracyclines; **50S** — macrolides, chloramphenicol, clindamycin, linezolid. Human toxins hit the eukaryotic machine instead: **diphtheria toxin ADP-ribosylates eEF-2** (translocation arrests) and **ricin depurinates 28S rRNA**. A **nonsense mutation** introduces a premature stop → truncated, non-functional protein (e.g. **Duchenne muscular dystrophy**).',
  ],

  mechanism: {
    title: 'Charge the tRNA, read the codons three beats at a time, release at a stop',
    steps: [
      { id: 's1', label: 'Synthetase charges tRNA — fidelity set here', emphasis: 'key' },
      { id: 's2', label: 'Small subunit scans from the 5′ cap to the first AUG' },
      { id: 's3', label: 'Anticodon pairs with the A-site codon' },
      { id: 's4', label: 'Peptidyl transferase (rRNA) forms the peptide bond', emphasis: 'key' },
      { id: 's5', label: 'Translocation: A → P → E, ribosome advances one codon' },
      { id: 's6', label: 'Stop codon → release factor → polypeptide freed', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Many ribosomes strung along a single mRNA', mechanism: 'Polyribosome — parallel translation multiplies output from one transcript', significance: 'key' },
    { sign: 'A secreted protein is made on rough ER, an enzyme of glycolysis on free ribosomes', mechanism: 'N-terminal signal peptide captured by SRP diverts the ribosome to the ER', significance: 'key' },
    { sign: 'An aminoglycoside kills bacteria without poisoning the patient', mechanism: 'Bacterial 70S ribosome differs from the human 80S', significance: 'key' },
    { sign: 'Diphtheria toxin arrests all protein synthesis in the cell', mechanism: 'ADP-ribosylation of eEF-2 blocks translocation', significance: 'supportive' },
    { sign: 'A short, non-functional dystrophin on Western blot', mechanism: 'Nonsense mutation creates a premature stop codon', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Three bases on tRNA complementary and antiparallel to the codon', meaning: 'The anticodon' },
    { clue: 'Enzyme that couples an amino acid to its own tRNA', meaning: 'Aminoacyl-tRNA synthetase — the fidelity checkpoint, one per amino acid' },
    { clue: 'Ribosomal site occupied by the growing peptide chain', meaning: 'The P (peptidyl) site; incoming charged tRNA enters the A site' },
    { clue: 'Catalytic component that forms the peptide bond', meaning: 'Large-subunit rRNA (peptidyl transferase) — a ribozyme' },
    { clue: 'Hydrophobic 15–30 residue N-terminal tag', meaning: 'Signal peptide → SRP → rough ER → secretory pathway' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Translation is where the genome finally becomes function, and where the cell spends most of its energy budget. The message being read was made and processed in [[ghp-transcription-genetic-code]]; the destination organelles — rough ER, Golgi, lysosome — are handled in [[ghp-cell-organelles-functions]], and proteins that reach the lysosome by this route are the substrate of [[ghp-endocytosis-lysosomal-digestion]].' },
    { logic: 'Selective toxicity is a structural accident worth exploiting', detail: 'Bacteria build proteins on a **70S** ribosome and we use **80S**, so drugs that jam the bacterial A site or block translocation spare the host. Growth-factor and hormone signals ultimately act by changing how much protein a cell makes, which is also how cells decide to divide — see [[ghp-cell-cycle-mitosis-apoptosis]].' },
  ],

  mnemonics: [
    { hook: 'A = Arrival, P = Peptide, E = Exit', expansion: ['Charged tRNA arrives at A', 'Chain sits at P', 'Empty tRNA leaves via E'] },
    { hook: 'Buy AT 30, CCEL at 50', expansion: ['30S inhibitors: Aminoglycosides, Tetracyclines', '50S inhibitors: Chloramphenicol, Clindamycin, Erythromycin (macrolides), Linezolid'] },
  ],

  traps: [
    {
      questionCategory: 'Where translational accuracy is enforced',
      wrongInstinct: 'The ribosome checks that the right amino acid is attached to each tRNA',
      rightAnswer: 'The ribosome only checks codon–anticodon pairing; the aminoacyl-tRNA synthetase decides which amino acid goes on which tRNA',
      why: 'Mischarge a tRNA and the ribosome will insert the wrong residue without complaint — accuracy is bought upstream, by the synthetase.',
    },
    {
      questionCategory: 'Free vs ER-bound ribosomes',
      wrongInstinct: 'Rough ER ribosomes are a different kind of ribosome, committed to secretion from the start',
      rightAnswer: 'They are the same ribosomes; translation begins free in the cytosol and only the emergence of a signal peptide (via SRP) docks them onto the ER',
      why: 'Destination is decided by the nascent protein sequence, not by a pre-assigned ribosome pool.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Diphtheria toxin ADP-ribosylates eukaryotic elongation factor 2. Which step of translation stops?',
      options: [
        { id: 'a', text: 'Charging of tRNA by its synthetase' },
        { id: 'b', text: 'Scanning of the mRNA for the start codon' },
        { id: 'c', text: 'Translocation of the ribosome along the mRNA' },
        { id: 'd', text: 'Release of the finished polypeptide' },
      ],
      answerId: 'c',
      explanation: 'eEF-2 powers translocation, the GTP-dependent step that moves the ribosome one codon onward. Inactivating it freezes elongation. Charging is synthetase-dependent, scanning is initiation-factor dependent, and release needs release factors.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A protein destined for secretion is being synthesised. What determines that its ribosome ends up on the rough endoplasmic reticulum?',
      options: [
        { id: 'a', text: 'A poly-A tail on the mRNA' },
        { id: 'b', text: 'An N-terminal signal peptide recognised by the signal recognition particle' },
        { id: 'c', text: 'The ribosome being 60S rather than 40S' },
        { id: 'd', text: 'Glycosylation of the ribosome' },
      ],
      answerId: 'b',
      explanation: 'Translation starts free in the cytosol; when the N-terminal signal peptide emerges, SRP binds it, pauses elongation and docks the complex on the ER. Poly-A tails are on every eukaryotic mRNA regardless of destination, and subunit size is not a targeting signal.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Several ribosomes are seen attached along one strand of mRNA. The functional consequence is:',
      options: [
        { id: 'a', text: 'Several different proteins are produced from one transcript' },
        { id: 'b', text: 'Many copies of the same protein are made simultaneously from one transcript' },
        { id: 'c', text: 'The mRNA is being degraded' },
        { id: 'd', text: 'Splicing is occurring in the cytoplasm' },
      ],
      answerId: 'b',
      explanation: 'This is a polyribosome: each ribosome independently reads the same open reading frame, so output is amplified without extra transcription. Multiple protein products from one gene come from alternative splicing, which happens in the nucleus before export.',
      tests: 'exam',
    },
  ],
};

export default ghpTranslationRibosomes;
