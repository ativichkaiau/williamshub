import type { Lecture } from '../../lib/types';

export const ghpEndocytosisLysosomalDigestion: Lecture = {
  id: 'ghp-endocytosis-lysosomal-digestion',
  title: 'Endocytosis & Lysosomal Digestion',
  system: 'physiology',
  source: 'Ch 2 — The Cell and Its Functions',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 2 The Cell and Its Functions' },
    { kind: 'mechanism', label: 'Vesicle uptake and acid hydrolysis' },
    { kind: 'exam', label: 'Pinocytosis vs phagocytosis' },
  ],

  highYield: [
    '**Endocytosis is the ONLY bulk route by which large, water-soluble macromolecules enter a cell** — the bilayer excludes them, so there is no diffusive or carrier alternative. It is **energy-requiring** and comes in two forms: **pinocytosis** and **phagocytosis**.',
    '**Pinocytosis ("cell drinking") happens continuously in essentially EVERY cell** and forms small vesicles of roughly **100–200 nm**. The selective version is **clathrin-mediated receptor-mediated endocytosis**: ligand binds its receptor → **clathrin** and adaptin assemble a coated pit → the membrane invaginates → the GTPase **dynamin** pinches off the neck → the coat sheds and the vesicle becomes an **early endosome**. The textbook example is **LDL uptake via the LDL receptor** — the pathway that fails in **familial hypercholesterolaemia**.',
    '**Phagocytosis ("cell eating") is restricted to specialised cells — mainly macrophages and neutrophils** — and takes particles larger than ~0.5 µm: bacteria, dead cells, debris. It needs (1) **receptor binding**, hugely enhanced by **opsonisation with IgG (Fc receptor) or C3b (complement receptor)**, and (2) **actin polymerisation driving pseudopods** around the particle to seal it into a **phagosome**.',
    '**Fusion with a lysosome creates the phagolysosome (digestive vesicle).** Lysosomes carry **more than 40 acid hydrolases** — proteases, nucleases, lipases, glycosidases, phosphatases — with a **pH optimum near 5**, maintained by a **V-type H⁺-ATPase**. That acidity is a **safety device**: enzymes that leak into cytosol at **pH 7.2 are largely inactive**. Bacterial killing adds **lysozyme** (digests the cell wall), **lactoferrin** (sequesters iron) and **oxidising agents** (H₂O₂, superoxide from NADPH oxidase).',
    '**Digestion products diffuse out for reuse; what cannot be digested becomes a residual body**, which is either exocytosed or retained as **lipofuscin**, the golden-brown "wear-and-tear" pigment of ageing neurons and cardiac myocytes.',
    '**Autophagy is the lysosome digesting the cell\'s OWN worn organelles** — a double-membraned **autophagosome** engulfs the organelle and fuses with a lysosome. It performs routine organelle turnover, is **upregulated in starvation** to liberate amino acids, and mediates involutional atrophy. Failure of the hydrolases themselves produces the **lysosomal storage diseases** (Tay–Sachs, Gaucher, Pompe).',
  ],

  mechanism: {
    title: 'Engulf → acidify → digest → recycle',
    steps: [
      { id: 's1', label: 'Receptor binds ligand, or opsonin (IgG/C3b) binds the particle', emphasis: 'key' },
      { id: 's2', label: 'Clathrin coat (pinocytosis) or actin pseudopods (phagocytosis) engulf it', emphasis: 'key' },
      { id: 's3', label: 'Dynamin pinches the neck → endosome or phagosome' },
      { id: 's4', label: 'Lysosome fuses; V-type H⁺-ATPase drops the pH to ~5', emphasis: 'key' },
      { id: 's5', label: 'Acid hydrolases digest; products diffuse to cytosol for reuse' },
      { id: 's6', label: 'Undigested remnant = residual body → exocytosed or stored as lipofuscin' },
    ],
  },

  examFindings: [
    { sign: 'Every cell pinocytoses continuously, but only macrophages and neutrophils phagocytose', mechanism: 'Phagocytosis requires specialised surface receptors plus an actin-based pseudopod machine', significance: 'key' },
    { sign: 'Opsonisation with IgG or C3b dramatically increases particle uptake', mechanism: 'Fc and complement receptors cluster and trigger pseudopod extension around the particle', significance: 'key' },
    { sign: 'Lysosomal interior is held near pH 5 by a V-type H⁺-ATPase', mechanism: 'Acid hydrolases have an acidic pH optimum, so leaked enzyme is near-inert in cytosol at pH 7.2', significance: 'key' },
    { sign: 'LDL enters cells through clathrin-coated pits', mechanism: 'Receptor-mediated endocytosis; receptor loss causes familial hypercholesterolaemia', significance: 'key' },
    { sign: 'Golden-brown lipofuscin granules accumulate in old neurons and cardiac myocytes', mechanism: 'Residual bodies of indigestible lipid-protein complexes retained over a lifetime', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Coat protein that forms the pit in receptor-mediated endocytosis', meaning: 'Clathrin with adaptin; dynamin then pinches off the vesicle neck' },
    { clue: 'Continuous, largely non-selective uptake of extracellular fluid and macromolecules by all cells', meaning: 'Pinocytosis' },
    { clue: 'Vesicle formed when a lysosome fuses with a phagosome', meaning: 'Phagolysosome, also called the digestive vesicle' },
    { clue: 'Indigestible residue remaining after lysosomal digestion', meaning: 'Residual body — exocytosed, or retained as lipofuscin' },
    { clue: 'Lysosomal digestion of the cell\'s own worn-out organelles', meaning: 'Autophagy, via a double-membraned autophagosome; increased in starvation' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This is how the innate immune system actually kills, how cholesterol is cleared from plasma, and how the cell renews itself — one vesicular machine serving all three. The organelles supplying that machine are covered in [[ghp-cell-organelles-functions]], and the actin motor that drives pseudopod extension is the same one used for crawling in [[ghp-cell-motility-cilia]].' },
    { logic: 'Where it breaks', detail: 'Defective killing rather than defective engulfment: **chronic granulomatous disease** (NADPH oxidase, no oxidative burst) and **Chédiak–Higashi** (failed phagolysosome fusion). Defective hydrolases give the **lysosomal storage diseases**; defective receptors give familial hypercholesterolaemia. Membrane context: [[fatty-acids-membranes]].' },
  ],

  mnemonics: [
    { hook: 'DRINK versus EAT', expansion: ['PINOcytosis = drinking: every cell, clathrin, small vesicles, continuous', 'PHAGOcytosis = eating: phagocytes only, actin pseudopods, big particles, needs opsonins'] },
    { hook: 'The lysosome is a stomach at pH 5 — Acid, Autophagy, and Ash (lipofuscin) is what is left', expansion: ['Acidity is the safety catch: leaked enzymes are inactive at cytosolic pH 7.2', 'Autophagy rises in starvation to release amino acids'] },
  ],

  traps: [
    {
      questionCategory: 'How macromolecules cross the membrane',
      wrongInstinct: 'Large proteins enter the cell by simple diffusion or by a specific carrier protein',
      rightAnswer: 'They enter almost exclusively by endocytosis, chiefly pinocytosis',
      why: 'The hydrophobic core excludes large water-soluble molecules entirely; carriers move small solutes, not proteins. Vesicular uptake is the only bulk route.',
    },
    {
      questionCategory: 'Why lysosomal enzymes do not digest the cell',
      wrongInstinct: 'The lysosomal membrane is chemically indestructible, so the enzymes can never escape',
      rightAnswer: 'The enzymes are ACID hydrolases — at cytosolic pH 7.2 they are largely inactive even when they do leak',
      why: 'Containment is chemical as much as physical: the pH optimum, not an unbreakable membrane, is the real safeguard.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with familial hypercholesterolaemia has a mutation preventing LDL receptors from clustering in coated pits. Which process is directly impaired?',
      options: [
        { id: 'a', text: 'Phagocytosis of LDL particles by hepatocytes' },
        { id: 'b', text: 'Clathrin-mediated receptor-mediated endocytosis' },
        { id: 'c', text: 'Facilitated diffusion of cholesterol across the plasma membrane' },
        { id: 'd', text: 'Autophagy of lipid droplets' },
      ],
      answerId: 'b',
      explanation: 'LDL is internalised by clathrin-coated pits after receptor binding. Receptors that cannot cluster in the pit never enter the vesicle, so plasma LDL rises. Phagocytosis is limited to macrophages and neutrophils and handles particles far larger than LDL, and cholesterol is not taken up by a facilitated-diffusion carrier.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Lysosomal enzymes that leak into the cytosol cause remarkably little damage. The best explanation is that:',
      options: [
        { id: 'a', text: 'The cytosol contains a high concentration of specific enzyme inhibitors' },
        { id: 'b', text: 'The enzymes are acid hydrolases with a pH optimum near 5 and are largely inactive at cytosolic pH 7.2' },
        { id: 'c', text: 'Leaked enzymes are immediately re-captured by the Golgi apparatus' },
        { id: 'd', text: 'The enzymes require Ca²⁺ concentrations found only inside lysosomes' },
      ],
      answerId: 'b',
      explanation: 'A V-type H⁺-ATPase keeps the lysosome near pH 5, which is where its more than 40 hydrolases work. Outside that acid compartment their activity collapses, so the pH optimum itself is the safety mechanism. Massive lysosomal rupture can still cause cell death, which is why the protection is relative, not absolute.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which finding is the expected long-term consequence of repeated lysosomal digestion of indigestible material in a long-lived, non-dividing cell such as a cardiac myocyte?',
      options: [
        { id: 'a', text: 'Accumulation of lipofuscin-containing residual bodies' },
        { id: 'b', text: 'Progressive enlargement of the nucleolus' },
        { id: 'c', text: 'Proliferation of peroxisomes' },
        { id: 'd', text: 'Loss of the glycocalyx' },
      ],
      answerId: 'a',
      explanation: 'Undigestible remnants persist as residual bodies. In cells that cannot dilute them by division, they accumulate over decades as lipofuscin, the brown wear-and-tear pigment of ageing myocardium and neurons. A large nucleolus marks high ribosome production, not failed digestion.',
      tests: 'exam',
    },
  ],
};

export default ghpEndocytosisLysosomalDigestion;
