import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpPaediatricCongenitalDisease: Lecture = {
  "id": "rbp-paediatric-congenital-disease",
  "title": "Congenital Malformation & Paediatric Disease",
  "system": "molecular",
  "source": "Ch 6 — Genetic and Pediatric Diseases",
  "updated": "2026-09-16",
  "tags": [
    {
      "kind": "system",
      "label": "Pathology"
    },
    {
      "kind": "lecture",
      "label": "Ch 6 Genetic and Pediatric Diseases"
    },
    {
      "kind": "mechanism",
      "label": "Developmental errors, neonatal injury & childhood tumours"
    }
  ],
  "highYield": [
    "**Congenital means present at birth, not necessarily inherited.** Genetic, environmental and multifactorial causes can alter development. Conversely, an inherited disorder may present much later. Timing and tissue susceptibility influence the effect of a developmental insult.",
    "**Malformation, deformation and disruption identify different processes.** Malformation is an intrinsic error in development. Deformation reflects abnormal mechanical forces on developing tissue. Disruption destroys or interrupts previously developing tissue, as with some amniotic-band injuries. A sequence is a cascade from one initiating abnormality; a syndrome has a recognised shared cause or pattern.",
    "**Prematurity exposes organs before functional maturation is complete.** Surfactant deficiency raises alveolar surface tension and favours collapse in neonatal respiratory distress syndrome. Immature cerebral vessels and intestine contribute to risks of intraventricular haemorrhage and necrotising enterocolitis, whose causes are multifactorial.",
    "**Oligohydramnios illustrates a developmental sequence.** Severe reduction in amniotic fluid, including from bilateral renal agenesis or prolonged membrane rupture, can lead to compression deformities and pulmonary hypoplasia. The downstream pattern does not by itself identify the initiating cause.",
    "**Childhood tumours differ from common adult carcinomas.** Embryonal tumours can resemble primitive developmental tissues. Neuroblastoma, Wilms tumour and retinoblastoma illustrate distinct lineages and genetic associations. A small round blue cell appearance is a morphological starting point, not a complete diagnosis. See [[rbp-genetic-disease-mechanisms]]."
  ],
  "mechanism": {
    "title": "Surfactant deficiency in the premature lung",
    "steps": [
      {
        "id": "s1",
        "label": "Type II pneumocytes are immature",
        "detail": "Surfactant production may be insufficient.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Alveolar surface tension rises",
        "detail": "Small air spaces become harder to keep open.",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "Atelectasis and reduced compliance develop",
        "detail": "Work of breathing increases and gas exchange is impaired.",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "Hypoxaemia and epithelial injury worsen function",
        "detail": "Protein-rich leakage and damaged cells can form hyaline membranes.",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "The lung requires support while maturing",
        "detail": "The mechanism explains preventive and supportive strategies, without making every neonatal respiratory problem surfactant deficiency.",
        "emphasis": "normal"
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Limb constriction or amputation associated with amniotic bands",
      "mechanism": "A disruption pattern, rather than a primary failure to specify the limb.",
      "significance": "key"
    },
    {
      "sign": "Pulmonary hypoplasia with compression deformities and oligohydramnios",
      "mechanism": "A sequence with several possible initiating causes.",
      "significance": "key"
    },
    {
      "sign": "Respiratory distress soon after premature birth",
      "mechanism": "Surfactant deficiency is an important consideration alongside infection and other cardiopulmonary disorders.",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "Prenatal imaging and genetic assessment",
      "meaning": "Use the anomaly pattern to guide testing; a normal screen does not exclude all developmental disorders."
    },
    {
      "clue": "Neonatal lung histology with hyaline membranes",
      "meaning": "Reflects epithelial injury and protein-rich material in affected air spaces, interpreted with gestation and clinical course."
    },
    {
      "clue": "A childhood small round blue cell tumour",
      "meaning": "Needs lineage-specific pathological and sometimes molecular assessment rather than diagnosis by colour alone."
    }
  ],
  "treatment": [
    {
      "logic": "Distinguish cause from downstream pattern",
      "detail": "Identifying a sequence helps avoid treating every component as a separate inherited defect."
    },
    {
      "logic": "Developmental timing changes vulnerability",
      "detail": "Organogenesis and later growth have different susceptible processes; exposure alone cannot predict one fixed outcome."
    }
  ],
  "mnemonics": [
    {
      "hook": "Build, bend, break",
      "expansion": [
        "Malformation: an error in building the structure.",
        "Deformation: mechanical reshaping.",
        "Disruption: damage to a structure already developing."
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "Congenital and inherited",
      "wrongInstinct": "Every birth defect was transmitted by a parent.",
      "rightAnswer": "Congenital describes timing; inheritance describes transmission.",
      "why": "Developmental disease can result from new genetic changes, exposures or interacting causes."
    },
    {
      "questionCategory": "A sequence",
      "wrongInstinct": "Each feature needs an independent primary cause.",
      "rightAnswer": "One initiating abnormality can generate multiple secondary effects.",
      "why": "Severe oligohydramnios can alter lung growth and body shape together."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "Amniotic bands damage a previously developing limb. Which category applies?",
      "options": [
        {
          "id": "a",
          "text": "Malformation"
        },
        {
          "id": "b",
          "text": "Disruption"
        },
        {
          "id": "c",
          "text": "Metastasis"
        },
        {
          "id": "d",
          "text": "Hyperplasia"
        }
      ],
      "answerId": "b",
      "explanation": "Disruption denotes extrinsic interruption or destruction of tissue that had been developing, unlike an intrinsic malformation.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "How does surfactant deficiency cause neonatal atelectasis?",
      "options": [
        {
          "id": "a",
          "text": "It lowers surface tension excessively"
        },
        {
          "id": "b",
          "text": "It directly creates a cardiac shunt"
        },
        {
          "id": "c",
          "text": "It increases alveolar surface tension"
        },
        {
          "id": "d",
          "text": "It prevents every respiratory infection"
        }
      ],
      "answerId": "c",
      "explanation": "Surfactant normally lowers surface tension. Deficiency increases the tendency of air spaces to collapse and reduces compliance.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "Bilateral renal agenesis produces oligohydramnios followed by compression deformities and pulmonary hypoplasia. What describes the linked findings?",
      "options": [
        {
          "id": "a",
          "text": "A developmental sequence"
        },
        {
          "id": "b",
          "text": "Four unrelated inherited diseases"
        },
        {
          "id": "c",
          "text": "A paraneoplastic syndrome"
        },
        {
          "id": "d",
          "text": "A maternal antibody disorder"
        }
      ],
      "answerId": "a",
      "explanation": "A sequence links multiple downstream abnormalities to one initiating event; here low amniotic fluid alters mechanical conditions and lung development.",
      "tests": "disease"
    }
  ]
};

export default rbpPaediatricCongenitalDisease;
