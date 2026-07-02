// MedCMU curriculum: Year → Subject (block). Lectures attach to a subject via
// `subjectOfSource` below. Only HCVS-2 (Year 3) has content so far.

export interface Subject {
  code: string;
  name: string;
}

export interface CurriculumYear {
  year: number;
  label: string;
  note?: string;
  subjects: Subject[];
}

export const curriculum: CurriculumYear[] = [
  {
    year: 1,
    label: 'Year 1',
    subjects: [
      { code: 'MBH', name: 'Molecular Basis of Human Body' },
      { code: 'HGD', name: 'Human Genetics and Developmental Biology' },
      { code: 'MFN', name: 'Metabolism of Fuel Nutrients in Human' },
      { code: 'ABM', name: 'Applied Biochemistry in Medicine' },
      { code: 'BMR', name: 'Intro to Biomedical Research' },
    ],
  },
  {
    year: 2,
    label: 'Year 2',
    subjects: [
      { code: 'BHCB', name: 'Basic Histology and Cell Biology' },
      { code: 'HIM', name: 'Human Immunology' },
      { code: 'EHP', name: 'Essential Human Physiology' },
      { code: 'HGA', name: 'Human Gross Anatomy' },
      { code: 'HEN-1', name: 'Human Endocrine System-1' },
      { code: 'HMS-1', name: 'Human Musculoskeletal System-1' },
      { code: 'HCVS-1', name: 'Human Cardiovascular System-1' },
      { code: 'HRS-1', name: 'Human Respiratory System-1' },
      { code: 'HGB-1', name: 'Human Gastrointestinal and Biliary Tract System-1' },
      { code: 'HRP-1', name: 'Human Reproductive System and Perinatal Period-1' },
      { code: 'HRU-1', name: 'Human Renal and Urinary System-1' },
      { code: 'HNS-1', name: 'Human Nervous and Special Senses System-1' },
      { code: 'MHI', name: 'Microbiology of Human Infectious Diseases' },
      { code: 'PHI', name: 'Parasitology of Human Infectious Diseases' },
      { code: 'BAP', name: 'Basic Human Anatomical Pathology' },
      { code: 'BCP', name: 'Basic Clinical Pharmacology' },
    ],
  },
  {
    year: 3,
    label: 'Year 3',
    subjects: [
      { code: 'HHL', name: 'Human Hematopoietic and Lymphoreticular System' },
      { code: 'HEN-2', name: 'Human Endocrine System-2' },
      { code: 'HMS-2', name: 'Human Musculoskeletal System-2' },
      { code: 'HCVS-2', name: 'Human Cardiovascular System-2' },
      { code: 'HRS-2', name: 'Human Respiratory System-2' },
      { code: 'HGB-2', name: 'Human Gastrointestinal and Biliary Tract System-2' },
      { code: 'HRP-2', name: 'Human Reproductive System and Perinatal Period-2' },
      { code: 'HRU-2', name: 'Human Renal and Urinary System-2' },
      { code: 'HNS-2', name: 'Human Nervous and Special Senses System-2' },
      { code: 'ACP', name: 'Applied Clinical Pharmacology' },
      { code: 'BEH', name: 'Behavioral Science' },
      { code: 'ERS-1', name: 'Essential Research Skill-1' },
      { code: 'ICH', name: 'Intro to Community Health' },
      { code: 'IFH', name: 'Intro to Family Health' },
      { code: 'FCP-1', name: 'Fundamentals of Clinical Practice-1' },
    ],
  },
];

// Map each lecture `source` (L1–L4) to its subject. Add new lecture sources here
// as content for other subjects is authored.
export const subjectOfSource: Record<string, string> = {
  'L1 — Cardiac Arrhythmias': 'HCVS-2',
  'L2 — Abnormal ECG': 'HCVS-2',
  'L3 — Congenital Heart Disease': 'HCVS-2',
  'L4 — Antiarrhythmic Drugs': 'HCVS-2',
  'L5 — Vascular Disorders': 'HCVS-2',
  'L6 — Ischemic Heart Disease': 'HCVS-2',
  'L7 — Coagulation & Hemostasis': 'HCVS-2',
  'L8 — Valvular Heart Disease': 'HCVS-2',
  'L9 — Acute Coronary Syndrome': 'HCVS-2',
  'L10 — Cardiomyopathy & Myocarditis': 'HCVS-2',
  'L11 — Cardiogenic Shock': 'HCVS-2',
  'L12 — Heart Failure': 'HCVS-2',
  'L13 — Antianginal Drugs': 'HCVS-2',
  'L14 — Pathology of Heart Failure': 'HCVS-2',
  'L15 — Drugs Used in Heart Failure': 'HCVS-2',
  'L16 — Hypertension': 'HCVS-2',
  'L17 — Shock': 'HCVS-2',
  'L18 — Antihypertensive Drugs': 'HCVS-2',
  'L19 — Vascular Diseases II': 'HCVS-2',
  'L20 — Cardiac Tumors': 'HCVS-2',
  'L21 — Pericardial Disease': 'HCVS-2',

  // HNS-2 — Human Nervous and Special Senses System-2 (Year 3)
  'L1 — Clinical Neuroanatomy I': 'HNS-2',
  'L2 — Clinical Neuroanatomy II': 'HNS-2',
  'L3 — Common Ear Disorders': 'HNS-2',
  'L4 — Common Eye Disorders': 'HNS-2',
  'L5 — CNS Trauma & Hemorrhage': 'HNS-2',
  'L6 — Metabolic & Regulatory Disorders': 'HNS-2',
  'L7 — CNS Pharmacology & Stimulants': 'HNS-2',
  'L8 — Antiepileptic Drugs': 'HNS-2',
  'L9 — Antiparkinson Agents': 'HNS-2',
  'L10 — CNS Neoplasms': 'HNS-2',
  'L11 — Drugs for Ear Disorders': 'HNS-2',
  'L12 — Cognition & Consciousness': 'HNS-2',
  'L13 — Antimigraine Drugs': 'HNS-2',
  'L14 — Sedatives & Hypnotics': 'HNS-2',
  'L15 — Opioid Analgesics': 'HNS-2',
  'L16 — Antipsychotics': 'HNS-2',
  'L17 — Antidepressants': 'HNS-2',
  'L18 — CNS Infections & Immune Disorders': 'HNS-2',

  // HMS-2 — Human Musculoskeletal System-2 (Year 3)
  'L1 — Diseases of Bone': 'HMS-2',
  'L2 — Diseases of Skeletal Muscle': 'HMS-2',
  'L3 — Diseases of Joint': 'HMS-2',
  'L4 — Autacoids, NSAIDs & Salicylates': 'HMS-2',
  'L5 — Antirheumatic & Gout Drugs': 'HMS-2',
  'L6 — MSK Rehabilitation & Modalities': 'HMS-2',
  'L7 — Drugs & Bone Metabolism': 'HMS-2',
  'L8 — Musculoskeletal Tumors': 'HMS-2',

  // HEN-2 — Human Endocrine System-2 (Year 3)
  'L1 — Pituitary & Hypothalamus Pathology': 'HEN-2',
  'L2 — Pituitary & Hypothalamic Drugs': 'HEN-2',
  'L3 — Adrenal Pathology & MEN': 'HEN-2',
  'L4 — Cushing Syndrome': 'HEN-2',
  'L5 — Corticosteroids & Antagonists': 'HEN-2',
  'L6 — Thyroid & Parathyroid Pathology': 'HEN-2',
  'L7 — Clinical Pathology in Diabetes Mellitus': 'HEN-2',
  'L8 — Drugs Used in Thyroid Diseases': 'HEN-2',
  'L9 — Drugs Used in Parathyroid Diseases': 'HEN-2',
  'L10 — Investigations in Diabetes Mellitus': 'HEN-2',
  'L11 — DKA & Thyroid Storm': 'HEN-2',
  'L12 — Drugs Used in Diabetes': 'HEN-2',

  // HGD — Human Genetics and Developmental Biology (Year 1)
  'L1 — Genes & Embryonic Development': 'HGD',
  'L2 — Pre-embryonic Development': 'HGD',
  'L3 — Third Week & Germ Layer Derivatives': 'HGD',
  'L4 — Congenital Anomalies & Teratology': 'HGD',
  'L5 — Placenta & Extraembryonic Membranes': 'HGD',
  'L6 — Cell Cycle & Human Chromosomes': 'HGD',
  'L7 — Chromosome Aberrations': 'HGD',
  'L8 — Cytogenetic Nomenclature': 'HGD',
  'L9 — Autosomal Chromosome Syndromes': 'HGD',
  'L10 — Sex Chromosome Abnormalities': 'HGD',
  'L11 — Mendelian, Multifactorial & Population Genetics': 'HGD',
  'L12 — Prenatal Diagnosis': 'HGD',

  // MFN — Metabolism of Fuel Nutrients in Human (Year 1)
  'L1 — Nutrients, Digestion & Absorption': 'MFN',
  'L2 — Bioenergetics': 'MFN',
  'L3 — Carbohydrate Metabolism': 'MFN',
  'L4 — Amino Acid Metabolism': 'MFN',
  'L5 — Lipid Metabolism': 'MFN',
  'L6 — Integrative Metabolism': 'MFN',

  // ABM — Applied Biochemistry in Medicine (Year 1)
  'Case 1 — Acetaminophen Hepatotoxicity': 'ABM',
  'Case 2 — Cholangitis & Obstructive Jaundice': 'ABM',
  'Case 3 — ALDH2 Deficiency & Hepatic Encephalopathy': 'ABM',
  'Case 4 — G6PD Deficiency & Hemolysis': 'ABM',
  'Case 5 — Galactokinase Deficiency': 'ABM',
  'Case 6 — Hereditary Fructose Intolerance': 'ABM',
  'Case 7 — Familial Chylomicronemia Syndrome': 'ABM',
  'Case 8 — Familial Hypercholesterolemia': 'ABM',
  'Case 9 — MCAD Deficiency': 'ABM',
  'Case 10 — Obesity & Prediabetes': 'ABM',
  'Case 11 — Alcoholic Ketoacidosis': 'ABM',
  'Case 12 — Ketogenic Diet & Intermittent Fasting': 'ABM',
  'Case 13 — BRCA1-Mutant Triple-Negative Breast Cancer': 'ABM',
  'Case 14 — EGFR-Mutant Non-Small Cell Lung Cancer': 'ABM',
  'Case 15 — Epigenetics & Colon Cancer': 'ABM',

  // HGA — Human Gross Anatomy (Year 2) · Part 1: Upper Limb & Back
  'L1 — Pectoral Girdle, Superficial Back & Axilla': 'HGA',
  'L2 — Humerus, Shoulder Region & Cubital Fossa': 'HGA',
  'L3 — Forearm, Wrist Bones & Dorsum of Hand': 'HGA',
  'L4 — Palm of Hand & Joints of Upper Limb': 'HGA',
  'L5 — Deep Back & Joints of Vertebral Column': 'HGA',
  // Part 2: Head, Neck & Thorax
  'L6 — Face, Scalp, Parotid & Temporal Regions': 'HGA',
  'L7 — Triangles & Root of the Neck': 'HGA',
  'L8 — Thorax, Pleura, Trachea & Lungs': 'HGA',
  'L9 — Mediastinum & Heart': 'HGA',
  // Part 3: Skull & Deep Head Regions
  'L10 — Infratemporal & Pterygopalatine Fossae': 'HGA',
  'L11 — Skull & Cranial Fossae': 'HGA',
  'L12 — Orbit, Eye & Ear': 'HGA',
  'L13 — Nasal Cavity & Paranasal Sinuses': 'HGA',
  'L14 — Pharynx & Larynx': 'HGA',
  // Part 4: Oral Cavity & Abdomen
  'L15 — Mouth & Oral Cavity': 'HGA',
  'L16 — Anterior Abdominal Wall & Stomach': 'HGA',
  'L17 — Posterior Abdominal Wall & Urinary System': 'HGA',
  'L18 — Intestines, Liver & Biliary System': 'HGA',
  // Part 5: Lower Limb
  'L19 — Lower Limb Bones & Anterior/Medial Thigh': 'HGA',
  'L20 — Gluteal Region, Posterior Thigh & Popliteal Fossa': 'HGA',
  'L21 — Leg & Foot': 'HGA',

  // HCVS-1 — Human Cardiovascular System-1 (Year 2)
  'L1 — Overview of the Cardiovascular System': 'HCVS-1',
  'L2 — Histology of the Cardiovascular System': 'HCVS-1',
  'L3 — Development of the Cardiovascular System': 'HCVS-1',
  'L4 — Cardiac Electrophysiology': 'HCVS-1',
  'L5 — ECG Formation': 'HCVS-1',
  'L6 — Electrocardiography': 'HCVS-1',
  'L7 — Regulation of Blood Pressure': 'HCVS-1',
  'L8 — ECG in Clinical Practice': 'HCVS-1',
  'L9 — Echocardiography & Chest X-ray': 'HCVS-1',
  'L10 — Cardiac Cycle & Hemodynamics': 'HCVS-1',
  'L11 — Biomarkers in ACS': 'HCVS-1',
  'L12 — Ambulatory Blood Pressure Monitoring': 'HCVS-1',
  'L13 — Early Clinical Exposure (CVS)': 'HCVS-1',

  // HRS-1 — Human Respiratory System-1 (Year 2)
  'L1 — Development of the Respiratory System': 'HRS-1',
  'L2 — Structure of the Respiratory System': 'HRS-1',
  'L3 — Pulmonary Circulation': 'HRS-1',
  'L4 — Breathing & Ventilation': 'HRS-1',
  'L5 — Gas Exchange & Transport': 'HRS-1',
  'L6 — Regulation of Respiration & ABG': 'HRS-1',

  // HMS-1 — Human Musculoskeletal System-1 (Year 2)
  'L1 — Embryonic Development of the MSK System': 'HMS-1',
  'L2 — The Neuromuscular Junction': 'HMS-1',
  'L3 — Molecular Basis of Muscle Contraction': 'HMS-1',
  'L4 — Behaviour of Skeletal Muscle': 'HMS-1',
  'L5 — Energy Sources of Skeletal Muscle': 'HMS-1',
  'L6 — Fracture & Fracture Healing': 'HMS-1',

  // EHP — Essential Human Physiology (Year 2)
  'L1 — Transport of Solutes & Water': 'EHP',
  'L2 — Cellular Homeostasis': 'EHP',
  'L3 — Membrane Transport': 'EHP',
  'L4 — Genesis of the Action Potential': 'EHP',
  'L5 — Regulation of the Resting Membrane Potential': 'EHP',
  'L6 — Neurotransmitters & Neuromodulators': 'EHP',
  'L7 — Cell Communication': 'EHP',
  'L8 — Synaptic Plasticity': 'EHP',
  'L9 — Autonomic Nervous System': 'EHP',
  'L10 — Reflexes': 'EHP',
  'L11 — Cellular Aging & Cell Death': 'EHP',

  // HIM — Human Immunology (Year 2)
  'L1 — Cells & Tissues of the Immune System': 'HIM',
  'L2 — Innate Immunity': 'HIM',
  'L3 — Immunoglobulins': 'HIM',
  'L4 — Complement System': 'HIM',
  'L5 — Cell-Mediated Immunity': 'HIM',
  'L6 — MHC & Antigen Presentation': 'HIM',
  'L7 — Lymphocyte Development': 'HIM',
  'L8 — Immunodeficiency': 'HIM',
  'L9 — Humoral Immune Response': 'HIM',
  'L10 — Immunity to Microbes': 'HIM',
  'L11 — Mucosal Immunology & Microbiota': 'HIM',
  'L12 — Autoimmunity': 'HIM',
  'L13 — Hypersensitivity': 'HIM',
  'L14 — Antigen-Antibody Reactions': 'HIM',
  'L15 — Transplantation Immunology': 'HIM',
  'L16 — Tumor Immunology': 'HIM',
  'L17 — Manipulating the Immune System': 'HIM',

  // BHCB — Basic Histology and Cell Biology (Year 2)
  'L1 — Cytology': 'BHCB',
  'L2 — Cytoskeleton': 'BHCB',
  'L3 — Epithelium & Cell Adhesion': 'BHCB',
  'L4 — Glands & Connective Tissue': 'BHCB',
  'L5 — Membrane & Integument': 'BHCB',
  'L6 — Cartilage & Bone': 'BHCB',
  'L7 — Muscle Tissue': 'BHCB',
  'L8 — Nervous Tissue': 'BHCB',
  'L9 — Extracellular Matrix': 'BHCB',
  'L10 — Clinical Cell Biology': 'BHCB',

  // BMR — Intro to Biomedical Research (Year 1)
  'L1 — History of Medicine': 'BMR',
  'L2 — Introduction to Research': 'BMR',
  'L3 — Literature Review': 'BMR',
  'L4 — Research Methodology': 'BMR',
  'L5 — Outbreak Investigation': 'BMR',
  'L6 — Basic Statistics': 'BMR',
  'L7 — Human Research Ethics': 'BMR',
  'L8 — Types of Research Publication': 'BMR',
  'L9 — Academic Authorship': 'BMR',

  // MBH — Molecular Basis of Human Body (Year 1)
  'L1 — Amino Acids & Proteins': 'MBH',
  'L2 — Enzymes & Cofactors': 'MBH',
  'L3 — Nucleic Acids': 'MBH',
  'L4 — Nucleotide Metabolism': 'MBH',
  'L5 — DNA Replication': 'MBH',
  'L6 — DNA Repair & Human Genome': 'MBH',
  'L7 — Transcription & RNA Processing': 'MBH',
  'L8 — Translation & Protein Processing': 'MBH',
  'L9 — Control of Gene Expression': 'MBH',
  'L10 — Molecular Techniques': 'MBH',
  'L11 — Carbohydrate Chemistry': 'MBH',
  'L12 — Lipid Chemistry': 'MBH',
};

// Optional sub-grouping of a subject's lectures into "Parts" (e.g. HGA, a very
// large subject, is taught as Part 1–5). Maps a lecture `source` → part label.
// Subjects without entries here just render their lectures flat (ungrouped).
export const partOfSource: Record<string, string> = {
  // HGA Part 1 — Upper Limb & Back
  'L1 — Pectoral Girdle, Superficial Back & Axilla': 'Part 1 · Upper Limb & Back',
  'L2 — Humerus, Shoulder Region & Cubital Fossa': 'Part 1 · Upper Limb & Back',
  'L3 — Forearm, Wrist Bones & Dorsum of Hand': 'Part 1 · Upper Limb & Back',
  'L4 — Palm of Hand & Joints of Upper Limb': 'Part 1 · Upper Limb & Back',
  'L5 — Deep Back & Joints of Vertebral Column': 'Part 1 · Upper Limb & Back',
  // HGA Part 2 — Head, Neck & Thorax
  'L6 — Face, Scalp, Parotid & Temporal Regions': 'Part 2 · Head, Neck & Thorax',
  'L7 — Triangles & Root of the Neck': 'Part 2 · Head, Neck & Thorax',
  'L8 — Thorax, Pleura, Trachea & Lungs': 'Part 2 · Head, Neck & Thorax',
  'L9 — Mediastinum & Heart': 'Part 2 · Head, Neck & Thorax',
  // HGA Part 3 — Skull & Deep Head Regions
  'L10 — Infratemporal & Pterygopalatine Fossae': 'Part 3 · Skull & Deep Head Regions',
  'L11 — Skull & Cranial Fossae': 'Part 3 · Skull & Deep Head Regions',
  'L12 — Orbit, Eye & Ear': 'Part 3 · Skull & Deep Head Regions',
  'L13 — Nasal Cavity & Paranasal Sinuses': 'Part 3 · Skull & Deep Head Regions',
  'L14 — Pharynx & Larynx': 'Part 3 · Skull & Deep Head Regions',
  // HGA Part 4 — Oral Cavity & Abdomen
  'L15 — Mouth & Oral Cavity': 'Part 4 · Oral Cavity & Abdomen',
  'L16 — Anterior Abdominal Wall & Stomach': 'Part 4 · Oral Cavity & Abdomen',
  'L17 — Posterior Abdominal Wall & Urinary System': 'Part 4 · Oral Cavity & Abdomen',
  'L18 — Intestines, Liver & Biliary System': 'Part 4 · Oral Cavity & Abdomen',
  // HGA Part 5 — Lower Limb
  'L19 — Lower Limb Bones & Anterior/Medial Thigh': 'Part 5 · Lower Limb',
  'L20 — Gluteal Region, Posterior Thigh & Popliteal Fossa': 'Part 5 · Lower Limb',
  'L21 — Leg & Foot': 'Part 5 · Lower Limb',
};

export function subjectSlug(code: string): string {
  return code.toLowerCase();
}

export const subjectByCode: Record<string, Subject & { year: number }> = Object.fromEntries(
  curriculum.flatMap((y) => y.subjects.map((s) => [s.code, { ...s, year: y.year }])),
);

export const subjectBySlug: Record<string, Subject & { year: number }> = Object.fromEntries(
  Object.values(subjectByCode).map((s) => [subjectSlug(s.code), s]),
);
