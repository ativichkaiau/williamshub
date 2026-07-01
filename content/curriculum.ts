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
    note: 'Not yet',
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
