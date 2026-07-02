import type { Lecture } from '../../lib/types';

export const diagnosticPathologyMethods: Lecture = {
  id: 'diagnostic-pathology-methods',
  title: 'Diagnostic Methods: Stains, IHC & Flow Cytometry',
  system: 'pathology',
  source: 'L1 — Introduction to Pathology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L1 Methods' },
    { kind: 'mechanism', label: 'H&E, special stains, IHC, flow' },
    { kind: 'exam', label: 'Special stains for organisms; HER2 IHC' },
  ],

  highYield: [
    '**HEMATOXYLIN & EOSIN (H&E) is the routine, "gold-standard" tissue stain. HEMATOXYLIN is BASIC → binds acidic/BASOPHILIC structures (DNA/RNA) → stains NUCLEI (and rough ER) blue/purple. EOSIN is ACIDIC → binds basic/ACIDOPHILIC structures → stains CYTOPLASM/collagen/most proteins pink/red. Most diagnoses start from H&E morphology. PAPANICOLAOU (Pap) stain is the multichromatic stain for CYTOLOGY (cervical screening/Pap smear), giving transparent cells with clear chromatin.**',
    '**SPECIAL STAINS demonstrate specific organisms/substances that H&E shows poorly — high-yield pairings: ACID-FAST (Ziehl-Neelsen, carbol-fuchsin) → MYCOBACTERIA (mycolic-acid wall); GOMORI METHENAMINE SILVER (GMS) → FUNGI and PNEUMOCYSTIS (black); PERIODIC ACID-SCHIFF (PAS) → glycogen, mucin, glycoprotein and FUNGI (e.g. CANDIDA); MUCICARMINE → mucin and the CRYPTOCOCCUS capsule (red/pink); Congo red → amyloid; Prussian blue → iron/haemosiderin.**',
    '**IMMUNOHISTOCHEMISTRY (IHC) uses ANTIBODIES against specific antigens (visualised by a chromogen like DAB) to: subclassify tumours (e.g. characteristic patterns in LYMPHOMA/undifferentiated tumours), identify the primary site of a metastasis, detect predictive/therapeutic markers (HER2, EGFR, hormone receptors → guide targeted therapy), and highlight normal structures (e.g. basal cells in prostate). Diagnosis is anchored on H&E, with IHC as confirmation. IMMUNOFLUORESCENCE (fluorophore-labelled antibodies) is used e.g. in renal/skin immune-deposit disease.**',
    '**FLOW CYTOMETRY analyses cells in SUSPENSION (blood, bone marrow, fluids), measuring surface/intracellular markers cell-by-cell with lasers — essential for immunophenotyping HAEMATOLOGIC MALIGNANCIES (leukaemias/lymphomas: CD markers, clonality). MOLECULAR methods (PCR, FISH, sequencing) detect mutations/translocations for diagnosis, prognosis and targeted therapy. FROZEN SECTION gives rapid intra-operative answers (e.g. margins, is it malignant?).**',
    '**The take-home: H&E (hematoxylin→basophilic NUCLEI blue; eosin→acidophilic CYTOPLASM pink); Pap = cytology. SPECIAL STAINS: AFB→mycobacteria, GMS→fungi/Pneumocystis, PAS→Candida/glycogen, mucicarmine→Cryptococcus, Congo red→amyloid, Prussian blue→iron. IHC (HER2/EGFR, tumour markers) confirms H&E; FLOW CYTOMETRY → haematologic malignancy; molecular for mutations.** The conceptual scope is [[intro-pathology-scope]]; pigments needing special stains are [[intracellular-accumulations-calcification]].',
  ],

  mechanism: {
    title: 'H&E (hematoxylin→basophilic nuclei blue; eosin→acidophilic cytoplasm pink); special stains for organisms (AFB/GMS/PAS/mucicarmine); IHC confirms H&E (HER2/markers); flow cytometry for haematologic malignancy',
    steps: [
      { id: 's1', label: 'Hematoxylin = basic → binds acidic/basophilic (DNA/RNA) → nuclei blue/purple', emphasis: 'key' },
      { id: 's2', label: 'Eosin = acidic → binds basic/acidophilic (proteins) → cytoplasm pink/red', emphasis: 'key' },
      { id: 's3', label: 'Special stains: AFB→mycobacteria, GMS→fungi/Pneumocystis, PAS→Candida/glycogen, mucicarmine→Cryptococcus', emphasis: 'key' },
      { id: 's4', label: 'IHC (antibody + chromogen) confirms H&E: tumour subtyping, HER2/EGFR predictive markers', emphasis: 'key' },
      { id: 's5', label: 'Flow cytometry = cells in suspension → immunophenotype leukaemia/lymphoma; molecular for mutations', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Nuclei stained blue/purple and cytoplasm pink on routine sections', mechanism: 'H&E (hematoxylin/eosin)', significance: 'key' },
    { sign: 'Red acid-fast bacilli in tissue', mechanism: 'Ziehl-Neelsen (AFB) stain for mycobacteria', significance: 'key' },
    { sign: 'Black fungal hyphae or Pneumocystis on silver stain', mechanism: 'Gomori methenamine silver (GMS)', significance: 'key' },
    { sign: 'HER2 overexpression demonstrated in a breast cancer', mechanism: 'Immunohistochemistry (predictive marker)', significance: 'supportive' },
    { sign: 'Immunophenotyping of a leukaemia by surface CD markers', mechanism: 'Flow cytometry', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The stain that colours mycobacteria', meaning: 'Acid-fast (Ziehl-Neelsen)' },
    { clue: 'The stain for fungi and Pneumocystis', meaning: 'GMS (silver) / PAS' },
    { clue: 'The technique detecting HER2/EGFR/hormone receptors', meaning: 'Immunohistochemistry' },
    { clue: 'The method for immunophenotyping blood/marrow malignancy', meaning: 'Flow cytometry' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Diagnostic techniques turn tissue into a diagnosis: H&E provides the morphologic foundation, special stains reveal specific organisms (AFB for mycobacteria, GMS/PAS for fungi, mucicarmine for Cryptococcus) and substances (Congo red amyloid, Prussian blue iron), immunohistochemistry subclassifies tumours and detects predictive markers (HER2, EGFR, hormone receptors) that direct targeted therapy, flow cytometry immunophenotypes haematologic malignancies, and molecular tests find actionable mutations. Frozen section gives rapid intra-operative answers. The conceptual framework is [[intro-pathology-scope]].' },
  ],

  mnemonics: [
    { hook: 'H&E: "Hematoxylin = basic → Blue nuclei; Eosin = acidic → pink cytoplasm"', expansion: ['Pap = cytology', 'H&E first, then confirm'] },
    { hook: 'Organism stains: "AFB=mycobacteria, GMS=fungi/PCP, PAS=Candida, mucicarmine=Cryptococcus"', expansion: ['IHC = HER2/EGFR/markers', 'Flow = haematologic malignancy'] },
  ],

  traps: [
    {
      questionCategory: 'What hematoxylin and eosin each stain',
      wrongInstinct: 'Hematoxylin is acidic and stains the pink cytoplasm; eosin is basic and stains the blue nucleus',
      rightAnswer: 'It is the reverse: HEMATOXYLIN is a BASIC dye that binds ACIDIC/basophilic structures (nucleic acids — DNA in the nucleus, RNA in ribosomes) staining NUCLEI blue/purple, while EOSIN is an ACIDIC dye that binds BASIC/acidophilic structures (cytoplasmic proteins, collagen) staining CYTOPLASM pink/red — "basophilic structures take the basic hematoxylin"',
      why: 'Students often invert the pairing; remembering that the basic dye (hematoxylin) stains the acidic nucleus (and the acidic dye eosin stains basic cytoplasmic proteins) is essential for interpreting basophilia/eosinophilia on H&E.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On an H&E-stained section, the cell nucleus appears blue/purple because:',
      options: [
        { id: 'a', text: 'Eosin (acidic) binds the nucleic acids' },
        { id: 'b', text: 'Hematoxylin (basic) binds the acidic nucleic acids (DNA/RNA)' },
        { id: 'c', text: 'The nucleus is acidophilic' },
        { id: 'd', text: 'Silver is deposited in the nucleus' },
      ],
      answerId: 'b',
      explanation: 'Hematoxylin is a basic dye that binds acidic (basophilic) structures — the DNA/RNA of the nucleus (and ribosomal RNA) — staining them blue/purple; eosin, an acidic dye, stains basic cytoplasmic proteins pink/red.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which special stain is used to demonstrate the capsule of Cryptococcus neoformans in tissue?',
      options: [
        { id: 'a', text: 'Mucicarmine' },
        { id: 'b', text: 'Acid-fast (Ziehl-Neelsen)' },
        { id: 'c', text: 'Congo red' },
        { id: 'd', text: 'Prussian blue' },
      ],
      answerId: 'a',
      explanation: 'Mucicarmine stains mucin and the polysaccharide capsule of Cryptococcus neoformans red/pink. Acid-fast stains mycobacteria, Congo red demonstrates amyloid, and Prussian blue demonstrates iron/haemosiderin.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default diagnosticPathologyMethods;
