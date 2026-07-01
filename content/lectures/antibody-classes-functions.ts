import type { Lecture } from '../../lib/types';
import { ANTIBODY_CLASSES } from '../../lib/figures';

export const antibodyClassesFunctions: Lecture = {
  id: 'antibody-classes-functions',
  title: 'Immunoglobulin Classes & Antibody Functions',
  system: 'immune',
  source: 'L3 — Immunoglobulins',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L3 Immunoglobulins' },
    { kind: 'mechanism', label: 'Isotype properties' },
    { kind: 'exam', label: '5 isotypes' },
  ],

  highYield: [
    '**IgG** — the **most abundant** serum antibody and the **main antibody of the secondary response**. Monomer; the **only isotype to cross the placenta** (neonatal protection). Excellent at **opsonisation, neutralisation, complement fixation, and ADCC**.',
    '**IgM** — a **pentamer** (with a J chain); the **first antibody produced in the primary response** and the naïve B-cell surface receptor (as a monomer). Its 10 binding sites make it the **best complement activator** and agglutinator, though low affinity.',
    '**IgA** — the main **mucosal/secretory** antibody. Present as a **monomer in serum** but a **dimer (J chain + secretory component)** in secretions — **saliva, tears, breast milk, gut/respiratory mucus** — where it neutralises pathogens. Passive immunity to newborns via breast milk.',
    '**IgE** — **lowest serum level**; binds mast cells/basophils via **FcεRI**. Cross-linking by allergen triggers **degranulation → type I hypersensitivity (allergy/anaphylaxis)**; also drives **antiparasitic** (helminth) defence with eosinophils. **IgD** — mostly the naïve B-cell surface receptor (with IgM); serum function unclear.',
    '**Core antibody functions** (mediated via Fab binding + Fc effector): **Neutralisation** (block toxins/viruses), **Opsonisation** (Fc tags for phagocytosis), **Complement activation** (classical pathway, esp. IgM/IgG), **ADCC** (NK via IgG), and **agglutination/precipitation**. **Class switching** in germinal centres changes the isotype (function) while keeping specificity.',
  ],

  mechanism: {
    title: 'One specificity, five effector packages',
    steps: [
      { id: 's1', label: 'IgG: abundant, 2° response, crosses placenta, opsonise/complement', emphasis: 'key' },
      { id: 's2', label: 'IgM: pentamer, FIRST (1° response), best complement', emphasis: 'key' },
      { id: 's3', label: 'IgA: secretory dimer, mucosal defence, breast milk' },
      { id: 's4', label: 'IgE: allergy/anaphylaxis + antiparasitic (mast/eos)', emphasis: 'key' },
      { id: 's5', label: 'Functions: neutralise, opsonise, complement, ADCC' },
    ],
  },

  examFindings: [
    { sign: 'Only antibody crossing the placenta', mechanism: 'IgG (neonatal passive immunity)', significance: 'key' },
    { sign: 'First antibody in a primary response; best complement activator', mechanism: 'IgM (pentamer, 10 binding sites)', significance: 'key' },
    { sign: 'Antibody in breast milk, saliva, gut mucus', mechanism: 'Secretory IgA (dimer + secretory component)', significance: 'key' },
    { sign: 'Antibody mediating anaphylaxis via mast cells', mechanism: 'IgE (FcεRI cross-linking)', significance: 'key' },
    { sign: 'High IgG anti-X with low IgM', mechanism: 'Past infection / secondary response (class-switched)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Rising IgM then IgG to a new pathogen', meaning: 'Acute (IgM first) → convalescent (IgG) infection' },
    { clue: 'Antibody protecting a breast-fed newborn\'s gut', meaning: 'Secretory IgA' },
    { clue: 'Antibody elevated in allergy and helminth infection', meaning: 'IgE' },
    { clue: 'Best isotype for classical complement activation', meaning: 'IgM (then IgG)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'IgM-then-IgG serology dates infections; IgG placental transfer underlies Rh disease and neonatal immunity; anti-IgE (omalizumab) treats allergy; IgA deficiency is the commonest primary immunodeficiency ([[primary-immunodeficiency-antibody-t]]). Structure basis: [[antibody-structure]].' },
  ],

  mnemonics: [
    { hook: '"IgM = iM first + Multimer"; "IgG = Greatest + Goes through placenta"; "IgA = mucosA"; "IgE = allErgy/Eosinophil"', expansion: ['GAMDE = serum level order'] },
    { hook: 'Functions: "NO Complement ADCC" → Neutralise, Opsonise, Complement, ADCC', expansion: ['Fab binds, Fc acts'] },
  ],

  traps: [
    {
      questionCategory: 'First vs main antibody',
      wrongInstinct: 'IgG is the first antibody produced in a primary immune response',
      rightAnswer: 'IgM is FIRST (primary response); IgG dominates later and in the secondary response',
      why: 'IgM appears first (pentamer, good complement); class switching to IgG follows and gives the durable, high-affinity secondary response.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which immunoglobulin isotype is the only one that crosses the placenta to provide passive immunity to the fetus?',
      options: [
        { id: 'a', text: 'IgM' },
        { id: 'b', text: 'IgA' },
        { id: 'c', text: 'IgG' },
        { id: 'd', text: 'IgE' },
      ],
      answerId: 'c',
      explanation: 'IgG is the only isotype transported across the placenta (via FcRn), giving the newborn passive humoral immunity. IgA is provided postnatally via breast milk.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A pentameric antibody that is the first produced in a primary response and the most efficient complement activator is:',
      options: [
        { id: 'a', text: 'IgG' },
        { id: 'b', text: 'IgM' },
        { id: 'c', text: 'IgA' },
        { id: 'd', text: 'IgD' },
      ],
      answerId: 'b',
      explanation: 'IgM is a pentamer (with J chain), appears first in the primary response, and with 10 binding sites is the best classical-pathway complement activator (though of lower affinity than switched IgG).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The 5 antibody isotypes', svg: ANTIBODY_CLASSES, caption: 'IgG (abundant, placenta), IgM (pentamer, first, complement), IgA (secretory dimer), IgE (allergy/parasite), IgD (naïve BCR).' },
  ],
};

export default antibodyClassesFunctions;
