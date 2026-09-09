import type { Lecture } from '../../lib/types';
import { NERNST_EQUILIBRIUM } from '../../lib/figures';

export const ghpPrimaryActiveTransportNaKAtpase: Lecture = {
  id: 'ghp-primary-active-transport-na-k-atpase',
  title: 'Primary Active Transport & the Na⁺/K⁺-ATPase',
  system: 'physiology',
  source: 'Ch 4 — Transport of Substances Through the Cell Membrane',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 4 Membrane Transport' },
    { kind: 'mechanism', label: 'Sodium pump' },
    { kind: 'mechanism', label: 'Electrogenic transport' },
    { kind: 'exam', label: 'Digoxin and ouabain' },
  ],

  highYield: [
    '**Primary active transport = the transporter itself hydrolyses ATP to drag a solute UP its electrochemical gradient.** The transporter is therefore an enzyme, and every pump is named as one: **Na⁺/K⁺-ATPase, Ca²⁺-ATPase, H⁺/K⁺-ATPase, H⁺-ATPase**. Being carriers, all of them are **specific, saturable and competitively inhibitable**.',
    '**The Na⁺/K⁺-ATPase moves 3 Na⁺ out and 2 K⁺ in for each ATP.** The **α subunit** carries the ATPase site, the intracellular Na⁺ sites and the extracellular K⁺ sites (**also the ouabain/digoxin binding site**); the β subunit handles trafficking. It sits in **every cell in the body** and consumes roughly **20–30% of resting ATP** — and up to **~70% in neurons**, which is why the brain dies within minutes of losing oxygen.',
    '**It is electrogenic — 3 positive charges out for 2 in means one net positive charge exported per cycle.** But separate the two contributions to the resting potential: the **direct** electrogenic effect is only about **−4 to −10 mV**, while the **dominant, INDIRECT** contribution is that the pump maintains the **steep K⁺ gradient** that K⁺ leak channels then convert into a potential near **the potassium equilibrium potential (≈ −90 mV)**. Stop the pump and the potential decays over minutes, not milliseconds — proof that it is a gradient-keeper, not a battery.',
    '**The pump is also the answer to the cell-volume problem.** Cells are full of **impermeant anions (proteins, organic phosphates)** which, by Gibbs–Donnan, would pull in Na⁺ and then water until the cell burst. Continuously exporting Na⁺ makes it **functionally impermeant** and holds the osmotic balance. **Stop the pump — ouabain, ischaemia, any ATP failure — and Na⁺ and water enter: the cell swells. Cellular swelling is the earliest morphological sign of ischaemic injury.**',
    '**Other pumps worth naming.** **Ca²⁺-ATPase (SERCA in the sarcoplasmic reticulum, PMCA in the plasma membrane)** holds cytosolic Ca²⁺ near **10⁻⁷ M**, a **10,000-fold gradient** — this is what makes calcium a usable signal and what makes relaxation an active process. **H⁺/K⁺-ATPase** is the gastric parietal-cell proton pump, irreversibly blocked by **omeprazole**. **V-type H⁺-ATPase** acidifies lysosomes and endosomes. **ABC transporters (P-glycoprotein/MDR)** pump drugs out of tumour cells and cause multidrug resistance.',
    '**Clinical anchor — digoxin, in one causal line: inhibit the Na⁺/K⁺-ATPase → intracellular Na⁺ rises → the Na⁺/Ca²⁺ exchanger loses its driving gradient → intracellular Ca²⁺ rises → more forceful contraction.** The same mechanism explains its toxicity, and explains why **hypokalaemia potentiates digoxin** (less K⁺ competing for the pump binding site).',
  ],

  mechanism: {
    title: 'ATP buys the gradients that everything else spends',
    steps: [
      { id: 's1', label: '3 Na⁺ bind the inward-facing α subunit' },
      { id: 's2', label: 'ATP phosphorylates the pump → it everts → Na⁺ released outside', emphasis: 'key' },
      { id: 's3', label: '2 K⁺ bind outside → dephosphorylation → K⁺ released inside', emphasis: 'key' },
      { id: 's4', label: 'Net 3 out / 2 in → one positive charge exported = electrogenic' },
      { id: 's5', label: 'Gradients maintained → resting potential, cell volume, transport fuel', emphasis: 'key' },
      { id: 's6', label: 'ATP fails (ischaemia) or pump blocked → Na⁺ and water enter → cell swells', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cellular swelling is the first change seen in ischaemic tissue', mechanism: 'ATP depletion stops the pump; Na⁺ accumulates intracellularly and water follows', significance: 'key' },
    { sign: 'Digoxin increases the force of cardiac contraction', mechanism: 'Pump inhibition raises intracellular Na⁺, slows Na⁺/Ca²⁺ exchange, raises intracellular Ca²⁺', significance: 'key' },
    { sign: 'Hypokalaemia precipitates digoxin toxicity', mechanism: 'K⁺ and digoxin compete for the extracellular site; low K⁺ means more drug bound', significance: 'key' },
    { sign: 'Resting potential is a few millivolts more negative than the potassium equilibrium potential predicts', mechanism: 'The direct electrogenic contribution of the pump', significance: 'supportive' },
    { sign: 'Omeprazole raises gastric pH for far longer than its plasma half-life', mechanism: 'Covalent, irreversible inhibition of the H⁺/K⁺-ATPase — recovery needs new pump synthesis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A pump with 3:2 stoichiometry', meaning: 'Na⁺/K⁺-ATPase — and therefore electrogenic' },
    { clue: 'Binding site for cardiac glycosides', meaning: 'The extracellular K⁺ site of the Na⁺/K⁺-ATPase (ouabain, digoxin)' },
    { clue: 'Transporter keeping cytosolic calcium near 10⁻⁷ M', meaning: 'Ca²⁺-ATPase — SERCA in the SR, PMCA in the plasma membrane' },
    { clue: 'Proton pump of the gastric parietal cell', meaning: 'H⁺/K⁺-ATPase — the target of proton-pump inhibitors' },
    { clue: 'Earliest reversible morphological change after ischaemia', meaning: 'Cell swelling from pump failure' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Almost every cellular function is downstream of this one pump: it sets the resting potential in [[ghp-resting-membrane-potential]], it defends cell volume against the impermeant-anion problem described in [[osmolarity-tonicity-cell-volume]], and it stores the sodium gradient that funds all the carriers in [[ghp-secondary-active-transport]]. It is also the reason a cell dies quickly when ATP stops.' },
    { logic: 'Where the framework sits and where the drugs act', detail: 'Primary active transport is the ATP-paying branch of the scheme in [[ghp-membrane-transport-overview]]. Cardiac glycosides, proton-pump inhibitors and multidrug-resistance transporters are all pump pharmacology, and the ATP the pump burns comes from oxidative phosphorylation — see [[electron-transport-oxphos]] for why hypoxia and pump failure are the same event.' },
  ],

  mnemonics: [
    { hook: '3 out, 2 in — more positive leaves than enters, so the inside gets more negative', expansion: ['3 Na⁺ out, 2 K⁺ in, 1 ATP', 'Net export of one positive charge = electrogenic'] },
    { hook: 'Digoxin: pump off → Na⁺ up → Ca²⁺ up → squeeze harder', expansion: ['Na⁺/Ca²⁺ exchanger needs a low intracellular Na⁺ to expel calcium', 'Low K⁺ frees the binding site → toxicity'] },
  ],

  traps: [
    {
      questionCategory: 'How the pump sets the resting membrane potential',
      wrongInstinct: 'The −90 mV resting potential is generated directly by the electrogenic pump, so blocking it should abolish the potential at once',
      rightAnswer: 'The direct electrogenic contribution is only a few millivolts; the pump mostly acts INDIRECTLY by maintaining the K⁺ gradient that leak channels convert into a negative potential',
      why: 'Blocking the pump decays the potential over minutes as gradients dissipate — a battery would fail instantly.',
    },
    {
      questionCategory: 'Where digoxin actually binds',
      wrongInstinct: 'Digoxin works by inhibiting the sodium–calcium exchanger to trap calcium inside the cell',
      rightAnswer: 'Digoxin inhibits the Na⁺/K⁺-ATPase; the exchanger merely slows down secondarily because intracellular Na⁺ has risen',
      why: 'Naming the wrong target loses the whole causal chain — and the chain is what explains the hypokalaemia interaction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Ouabain is applied to a nerve cell. Which sequence best describes what follows?',
      options: [
        { id: 'a', text: 'The membrane potential is abolished instantly, before any ion gradients change' },
        { id: 'b', text: 'Intracellular Na⁺ rises, gradients run down over minutes, the cell depolarises and swells' },
        { id: 'c', text: 'Intracellular K⁺ rises and the cell hyperpolarises' },
        { id: 'd', text: 'Facilitated diffusion of glucose stops immediately' },
      ],
      answerId: 'b',
      explanation: 'Ouabain blocks the Na⁺/K⁺-ATPase. The direct electrogenic contribution is small, so the potential does not vanish instantly; instead the Na⁺ and K⁺ gradients dissipate over minutes, the cell depolarises, Na⁺ and water enter and the cell swells. Facilitated diffusion of glucose is gradient-independent of the pump.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient on digoxin develops hypokalaemia and becomes toxic at a previously safe dose. Why?',
      options: [
        { id: 'a', text: 'Low K⁺ increases digoxin absorption from the gut' },
        { id: 'b', text: 'K⁺ and digoxin compete for the same extracellular site on the Na⁺/K⁺-ATPase' },
        { id: 'c', text: 'Low K⁺ increases renal excretion of digoxin' },
        { id: 'd', text: 'Low K⁺ activates the sodium–calcium exchanger' },
      ],
      answerId: 'b',
      explanation: 'Digoxin binds the extracellular potassium site of the pump, so potassium is a competitive antagonist. When plasma K⁺ falls, more pump is inhibited at the same drug level and toxicity appears. Hypokalaemia does not increase absorption, and it reduces rather than increases renal clearance of digoxin.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which statement about the Na⁺/K⁺-ATPase is correct?',
      options: [
        { id: 'a', text: 'It moves 2 Na⁺ out and 3 K⁺ in, making it electroneutral' },
        { id: 'b', text: 'It uses the sodium gradient rather than ATP as its energy source' },
        { id: 'c', text: 'It exports 3 Na⁺ for every 2 K⁺ imported, making it electrogenic' },
        { id: 'd', text: 'It is present only in excitable cells' },
      ],
      answerId: 'c',
      explanation: 'The stoichiometry is 3 Na⁺ out to 2 K⁺ in per ATP, so a net positive charge leaves the cell each cycle — electrogenic. It hydrolyses ATP directly (primary active transport, not gradient-driven) and it is present in essentially every cell in the body.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Gradients the pump maintains', svg: NERNST_EQUILIBRIUM, caption: 'The pump keeps K⁺ high inside and Na⁺ high outside; K⁺ leak channels then set the resting potential close to the potassium equilibrium potential.' },
  ],
};

export default ghpPrimaryActiveTransportNaKAtpase;
