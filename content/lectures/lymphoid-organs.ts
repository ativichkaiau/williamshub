import type { Lecture } from '../../lib/types';
import { LYMPHOID_ORGANS } from '../../lib/figures';

export const lymphoidOrgans: Lecture = {
  id: 'lymphoid-organs',
  title: 'Lymphoid Organs: Primary & Secondary',
  system: 'immune',
  source: 'L1 — Cells & Tissues of the Immune System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L1 Cells & Tissues' },
    { kind: 'mechanism', label: 'Develop vs deploy' },
    { kind: 'exam', label: 'Node/spleen zones' },
  ],

  highYield: [
    '**Primary (central) lymphoid organs = where lymphocytes are MADE and MATURE.** **Bone marrow** = site of all haematopoiesis and where **B cells mature**. **Thymus** = where **T cells mature** (positive + negative selection); it involutes with age. Central tolerance is established here.',
    '**Secondary (peripheral) lymphoid organs = where mature lymphocytes MEET antigen** and are activated: **lymph nodes, spleen, and MALT** (tonsils, Peyer\'s patches, appendix, mucosal tissue).',
    '**Lymph node zones.** **Cortex/follicles = B cells** (primary follicle; **secondary follicle with a germinal centre** when active). **Paracortex = T cells** (and where dendritic cells present antigen). **Medulla = plasma cells + macrophages**. Nodes filter **lymph**.',
    '**Spleen** filters **blood**: **white pulp** = immune tissue (**PALS = T cells** around the central arteriole; follicles = B cells); **red pulp** = removes old/damaged RBCs. The spleen is critical for defence against **encapsulated bacteria** — asplenia predisposes to overwhelming pneumococcal/meningococcal sepsis.',
    '**Germinal centres** (in secondary follicles) are the sites of **B-cell affinity maturation (somatic hypermutation) and class switching**, helped by follicular helper T (Tfh) cells. Naïve lymphocytes continuously **recirculate** between blood and secondary organs, entering nodes via **high endothelial venules**.',
  ],

  mechanism: {
    title: 'Make/mature (primary) → meet antigen (secondary)',
    steps: [
      { id: 's1', label: 'Bone marrow: haematopoiesis + B-cell maturation', emphasis: 'key' },
      { id: 's2', label: 'Thymus: T-cell maturation/selection', emphasis: 'key' },
      { id: 's3', label: 'Lymph node: cortex=B, paracortex=T, filters lymph', emphasis: 'key' },
      { id: 's4', label: 'Spleen: white pulp immune, red pulp RBC clearance' },
      { id: 's5', label: 'Germinal centre = affinity maturation + class switch' },
    ],
  },

  examFindings: [
    { sign: 'Germinal centre in a lymphoid follicle', mechanism: 'Active B-cell response (affinity maturation/class switch)', significance: 'key' },
    { sign: 'Paracortex expansion in a node', mechanism: 'T-cell zone activation (e.g. viral infection)', significance: 'supportive' },
    { sign: 'PALS around the splenic central arteriole', mechanism: 'T-cell zone of white pulp', significance: 'supportive' },
    { sign: 'Overwhelming pneumococcal sepsis post-splenectomy', mechanism: 'Loss of splenic clearance of encapsulated bacteria', significance: 'key' },
    { sign: 'Thymic hypoplasia with T-cell deficiency', mechanism: 'DiGeorge (no thymus → no T-cell maturation)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Organ where T lymphocytes complete maturation', meaning: 'Thymus (primary lymphoid organ)' },
    { clue: 'B-cell zone of a lymph node', meaning: 'Cortex / follicles' },
    { clue: 'Organ filtering blood and clearing encapsulated bacteria', meaning: 'Spleen' },
    { clue: 'Mucosal lymphoid tissue in the gut', meaning: 'MALT (e.g. Peyer\'s patches)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Asplenic/hyposplenic patients need vaccination against encapsulated organisms; thymic aplasia (DiGeorge) causes T-cell immunodeficiency; germinal-centre biology underlies antibody quality and lymphoma origin. Cell types: [[immune-system-overview-cells]].' },
  ],

  mnemonics: [
    { hook: 'Primary = "Produce/mature" (bone marrow B, thymus T); Secondary = "See antigen"', expansion: ['Node = lymph, spleen = blood, MALT = mucosa'] },
    { hook: 'Node: "outer B, inner T" (cortex B, paracortex T)', expansion: ['Germinal centre = active B'] },
  ],

  traps: [
    {
      questionCategory: 'Where do B cells mature?',
      wrongInstinct: 'B cells mature in the thymus like T cells',
      rightAnswer: 'B cells mature in the BONE MARROW; the thymus is for T-cell maturation',
      why: 'Both begin in marrow, but only T cells migrate to the thymus to mature. "B = Bone marrow, T = Thymus."',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a lymph node, the paracortex is populated predominantly by:',
      options: [
        { id: 'a', text: 'B cells' },
        { id: 'b', text: 'T cells' },
        { id: 'c', text: 'Plasma cells' },
        { id: 'd', text: 'Neutrophils' },
      ],
      answerId: 'b',
      explanation: 'The paracortex is the T-cell zone (with dendritic cells presenting antigen). B cells reside in cortical follicles; plasma cells accumulate in the medulla.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A splenectomised patient is at particularly high risk of overwhelming infection by:',
      options: [
        { id: 'a', text: 'Intracellular viruses' },
        { id: 'b', text: 'Encapsulated bacteria (e.g. Streptococcus pneumoniae)' },
        { id: 'c', text: 'Dermatophyte fungi' },
        { id: 'd', text: 'Helminths' },
      ],
      answerId: 'b',
      explanation: 'The spleen clears encapsulated bacteria and supports antibody responses to them, so asplenia predisposes to overwhelming pneumococcal/meningococcal/Haemophilus sepsis — hence vaccination.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Lymphoid organs', svg: LYMPHOID_ORGANS, caption: 'Primary (bone marrow = B, thymus = T) where lymphocytes mature; secondary (node, spleen, MALT) where they meet antigen.' },
  ],
};

export default lymphoidOrgans;
