import type { Lecture } from '../../lib/types';
import { TUBULAR_TRANSPORT } from '../../lib/figures';

export const ghpSecondaryActiveTransport: Lecture = {
  id: 'ghp-secondary-active-transport',
  title: 'Secondary Active Transport: Co- and Counter-Transport',
  system: 'physiology',
  source: 'Ch 4 — Transport of Substances Through the Cell Membrane',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 4 Membrane Transport' },
    { kind: 'mechanism', label: 'Sodium gradient as fuel' },
    { kind: 'mechanism', label: 'Symport vs antiport' },
    { kind: 'exam', label: 'Transcellular absorption' },
  ],

  highYield: [
    '**Secondary active transport spends no ATP of its own — it spends the Na⁺ gradient the Na⁺/K⁺-ATPase already paid for.** Sodium falling downhill into the cell releases energy, and the carrier couples that fall to dragging a second solute **uphill**. It is still **active**: poison the pump and, once the gradient decays, the uphill transport fails too. That indirect ATP dependence is exactly what exams probe.',
    '**Two geometries, and the names are literal. Cotransport (symport) = both solutes move in the SAME direction; countertransport (antiport/exchange) = opposite directions.** Both are carriers, so both are **specific, saturable and competitively inhibited**, and both stop when the sodium gradient collapses.',
    '**The symporters to know.** **SGLT1** (small intestine and late proximal tubule, **2 Na⁺ : 1 glucose** — high affinity) and **SGLT2** (early proximal tubule, **1:1**, reabsorbs about **90% of filtered glucose**; blocked by the **gliflozins**, which cause deliberate glucosuria). **Na⁺-dependent amino-acid cotransporters** work the same way, in family-specific carriers shared by gut and renal tubule. Also **NKCC2** in the thick ascending limb (**furosemide**), **NCC** in the distal tubule (**thiazides**), and the **Na⁺/I⁻ symporter** that traps iodide in the thyroid.',
    '**The antiporters to know.** **Na⁺/Ca²⁺ exchanger (NCX, 3 Na⁺ in : 1 Ca²⁺ out)** — the main calcium extruder in cardiac muscle, and the reason digoxin is inotropic. **Na⁺/H⁺ exchanger (NHE)** — defends intracellular pH and reclaims bicarbonate in the proximal tubule. **Cl⁻/HCO₃⁻ exchanger (band 3)** — the red-cell chloride shift that lets blood carry CO₂.',
    '**Moving a solute ACROSS an epithelium requires polarity, not just carriers.** The **Na⁺/K⁺-ATPase sits on the BASOLATERAL membrane**, keeping intracellular Na⁺ low; **apical Na⁺-coupled symporters** then use that inward Na⁺ pull to load glucose or amino acids into the cell **against their own gradients**; the solute leaves basolaterally by **facilitated diffusion (GLUT2)** into blood, and **water follows osmotically**. **Tight junctions** keep the apical and basolateral faces chemically distinct — lose the polarity and net absorption stops.',
    '**Clinical anchor: oral rehydration solution.** In cholera, secretion is deranged but **SGLT1 is intact** — so **glucose drags Na⁺, and Na⁺ drags water**, which is why ORS must contain both sugar and salt. The mirror images are inherited carrier defects: **glucose–galactose malabsorption (SGLT1)**, and **cystinuria** and **Hartnup disease**, where a shared amino-acid carrier fails in **both gut and kidney** — hence stones plus malabsorption from a single transporter.',
  ],

  mechanism: {
    title: 'The pump stores the energy; the carriers spend it',
    steps: [
      { id: 's1', label: 'Basolateral Na⁺/K⁺-ATPase keeps intracellular Na⁺ low', emphasis: 'key' },
      { id: 's2', label: 'A steep inward Na⁺ gradient = stored potential energy' },
      { id: 's3', label: 'Apical carrier lets Na⁺ fall in and drags a partner uphill', emphasis: 'key' },
      { id: 's4', label: 'Same direction = symport (SGLT); opposite = antiport (NCX, NHE)', emphasis: 'key' },
      { id: 's5', label: 'Solute exits basolaterally by facilitated diffusion into blood' },
      { id: 's6', label: 'Water follows osmotically → net transcellular absorption' },
    ],
  },

  examFindings: [
    { sign: 'Oral rehydration solution works in cholera even while secretion continues', mechanism: 'SGLT1 is intact — glucose-coupled Na⁺ uptake drags water back across the mucosa', significance: 'key' },
    { sign: 'Glucosuria at a normal blood glucose in a patient on an SGLT2 inhibitor', mechanism: 'Apical proximal-tubule symporter blocked → filtered glucose is not reclaimed', significance: 'key' },
    { sign: 'Digoxin raises intracellular calcium without touching a calcium channel', mechanism: 'Rising intracellular Na⁺ removes the gradient the Na⁺/Ca²⁺ exchanger needs', significance: 'key' },
    { sign: 'Cystinuria causes renal stones AND intestinal malabsorption of the same amino acids', mechanism: 'One shared dibasic amino-acid carrier is expressed in both epithelia', significance: 'supportive' },
    { sign: 'Ouabain eventually abolishes intestinal glucose absorption', mechanism: 'The Na⁺ gradient that funds SGLT1 dissipates — secondary transport is indirectly ATP-dependent', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Two solutes carried in the same direction by one protein', meaning: 'Symport (cotransport) — e.g. SGLT, NKCC2, NCC' },
    { clue: 'Two solutes carried in opposite directions by one protein', meaning: 'Antiport (countertransport/exchange) — e.g. NCX, NHE, band 3' },
    { clue: 'Uphill transport that fails once the sodium gradient runs down', meaning: 'Secondary active transport (indirectly ATP-dependent)' },
    { clue: 'Location of the Na⁺/K⁺-ATPase in an absorptive epithelium', meaning: 'Basolateral membrane — it creates the gradient the apical carriers exploit' },
    { clue: 'Transporter blocked by the gliflozins', meaning: 'SGLT2 in the early proximal tubule' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This is how the gut absorbs a meal and how the kidney reclaims the filtrate — one pump on the basolateral side funding a whole apical toolkit. The pump that pays for it is in [[ghp-primary-active-transport-na-k-atpase]], the passive-versus-active framework in [[ghp-membrane-transport-overview]], and the fate of glucose once it reaches the cell in [[glucose-transport-glycolysis]].' },
    { logic: 'Polarity is the design principle, and the drug target list follows it', detail: 'Net transport across a sheet only happens because tight junctions hold different transporters on the two faces — the epithelial architecture in [[epithelial-surface-basement-membrane]]. Diuretics (furosemide on NKCC2, thiazides on NCC), gliflozins on SGLT2 and the digoxin–NCX link are all consequences of that layout, and the calcium the exchanger handles is the same pool regulated in [[calcium-homeostasis-hormones]].' },
  ],

  mnemonics: [
    { hook: 'symPORT = same direction; ANTIport = against each other', expansion: ['SGLT: Na⁺ and glucose travel together', 'NCX and NHE: one in, one out'] },
    { hook: 'Glucose drags sodium, sodium drags water', expansion: ['The whole rationale for oral rehydration solution', 'Salt AND sugar, or it does not work'] },
  ],

  traps: [
    {
      questionCategory: 'Is secondary active transport active?',
      wrongInstinct: 'No ATP is hydrolysed by the carrier, so it is a form of passive transport',
      rightAnswer: 'It is active — the solute moves uphill, funded indirectly by ATP through the sodium gradient, and it stops when that gradient is lost',
      why: 'Classify by direction relative to the gradient and by the ultimate energy source, not by whether ATP is consumed at that specific protein.',
    },
    {
      questionCategory: 'Which side of the epithelial cell does what',
      wrongInstinct: 'The Na⁺/K⁺-ATPase must be on the apical (luminal) membrane, since that is where absorption happens',
      rightAnswer: 'It is basolateral — it keeps intracellular Na⁺ low so the apical symporters have a gradient to exploit, and it delivers Na⁺ to the blood side',
      why: 'Put the pump on the wrong face and the sodium gradient points the wrong way, so nothing is absorbed.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Ouabain is added to the serosal side of an intestinal preparation. Glucose absorption across the epithelium falls to zero within minutes. The best explanation is:',
      options: [
        { id: 'a', text: 'Ouabain directly blocks the apical SGLT1 carrier' },
        { id: 'b', text: 'Ouabain blocks the basolateral Na⁺/K⁺-ATPase, so the Na⁺ gradient driving SGLT1 collapses' },
        { id: 'c', text: 'Ouabain destroys the tight junctions' },
        { id: 'd', text: 'Glucose is normally absorbed by simple diffusion, which ouabain blocks' },
      ],
      answerId: 'b',
      explanation: 'SGLT1 is not itself an ATPase and ouabain does not bind it; the transport fails because the sodium gradient it depends on is gone. This is the defining demonstration that secondary active transport is indirectly ATP-dependent. Glucose is far too polar to cross by simple diffusion.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The Na⁺/Ca²⁺ exchanger moves 3 Na⁺ into the cell for every Ca²⁺ it moves out. This is best classified as:',
      options: [
        { id: 'a', text: 'Primary active transport, because calcium moves against its gradient' },
        { id: 'b', text: 'Facilitated diffusion, because no ATP is hydrolysed by the protein' },
        { id: 'c', text: 'Secondary active countertransport (antiport)' },
        { id: 'd', text: 'Simple diffusion through a calcium channel' },
      ],
      answerId: 'c',
      explanation: 'Calcium moves uphill, so this is active; the energy comes from the sodium gradient rather than from ATP bound to the carrier, so it is secondary. The two ions move in opposite directions, making it antiport. Primary active transport would require the protein itself to hydrolyse ATP, as the Ca²⁺-ATPase does.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why must oral rehydration solution for cholera contain glucose as well as sodium?',
      options: [
        { id: 'a', text: 'Glucose provides the calories needed to fuel the Na⁺/K⁺-ATPase directly in the lumen' },
        { id: 'b', text: 'Glucose activates SGLT1, so sodium is absorbed with it and water follows osmotically' },
        { id: 'c', text: 'Glucose neutralises cholera toxin' },
        { id: 'd', text: 'Glucose increases the osmolarity so that water is drawn into the lumen' },
      ],
      answerId: 'b',
      explanation: 'Cholera toxin deranges secretion but leaves SGLT1 intact, so glucose-coupled sodium absorption still works and water follows the reabsorbed solute. Glucose is not acting as fuel in the lumen, does not neutralise the toxin, and drawing water into the lumen would worsen the diarrhoea.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Tubular transport and the transport maximum', svg: TUBULAR_TRANSPORT, caption: 'The basolateral Na⁺/K⁺-ATPase powers apical Na⁺-coupled symport (SGLT). Carriers saturate, so glucose spills into urine once the transport maximum is exceeded.' },
  ],
};

export default ghpSecondaryActiveTransport;
