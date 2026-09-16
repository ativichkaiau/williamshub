import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpImmunodeficiencyTransplantAmyloid: Lecture = {
  "id": "rbp-immunodeficiency-transplant-amyloid",
  "title": "Immunodeficiency, Transplant Rejection & Amyloidosis",
  "system": "immune",
  "source": "Ch 4 — Diseases of the Immune System",
  "updated": "2026-09-16",
  "tags": [
    {
      "kind": "system",
      "label": "Pathology"
    },
    {
      "kind": "lecture",
      "label": "Ch 4 Diseases of the Immune System"
    },
    {
      "kind": "mechanism",
      "label": "Immune defects, graft injury & protein deposition"
    }
  ],
  "highYield": [
    "**Repeated infections can reveal the affected immune arm.** Antibody defects predispose to many extracellular bacterial infections; T-cell defects broaden risk to opportunistic viral, fungal and intracellular infections. Phagocyte defects favour certain bacterial and fungal infections. Terminal complement defects particularly increase susceptibility to Neisseria. These patterns guide testing rather than identifying a defect by themselves.",
    "**Immunodeficiency may be inherited or acquired.** Examples include antibody production defects, severe combined immunodeficiency, HIV-associated CD4 loss, immunosuppressive treatment, malignancy and protein loss. Infection history, age, blood counts and targeted functional assays matter.",
    "**Graft rejection is defined by mechanism and tissue findings, not the calendar alone.** Hyperacute rejection involves pre-existing antibodies with rapid endothelial injury and thrombosis. Active T-cell-mediated and antibody-mediated rejection can occur at different times. Chronic graft injury includes vascular narrowing and fibrosis with several possible contributors.",
    "**Graft-versus-host disease reverses the direction of the immune attack.** Donor immune cells respond to recipient tissues, classically after allogeneic haematopoietic transplantation. Skin, gut and liver are important targets. This differs from recipient immunity attacking an organ graft.",
    "**Amyloid is extracellular fibrillar protein with a shared structural pattern.** Congo red staining with characteristic birefringence supports identification, but the precursor must be typed. AL derives from immunoglobulin light chains, AA from serum amyloid A, ATTR from transthyretin, and dialysis-associated deposits from beta-2 microglobulin. A shared stain does not mean a shared cause. See [[rbp-hypersensitivity-reactions]]."
  ],
  "mechanism": {
    "title": "Antibody-mediated graft injury",
    "steps": [
      {
        "id": "s1",
        "label": "Recipient antibodies recognise donor targets",
        "detail": "Pre-existing or newly formed donor-specific antibodies can bind graft endothelium.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Endothelium becomes a target",
        "detail": "Complement and other antibody-dependent pathways can be activated.",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "Microvascular inflammation develops",
        "detail": "Capillary injury may impair tissue perfusion.",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "Functional impairment appears",
        "detail": "The affected organ may show dysfunction, requiring evaluation for competing causes.",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "Persistent injury promotes remodelling",
        "detail": "Repeated or chronic injury can contribute to vascular and interstitial damage.",
        "emphasis": "normal"
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Recurrent meningococcal disease",
      "mechanism": "Prompts consideration of complement defects, including terminal pathway dysfunction.",
      "significance": "key"
    },
    {
      "sign": "Rash, diarrhoea and liver dysfunction after allogeneic marrow transplantation",
      "mechanism": "A compatible pattern for graft-versus-host disease, alongside infectious and drug-related differentials.",
      "significance": "key"
    },
    {
      "sign": "Proteinuria with extracellular Congo-red-positive deposits",
      "mechanism": "Renal amyloid can impair the glomerular filtration barrier.",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "Immunoglobulins, lymphocyte subsets and functional assays",
      "meaning": "Select according to the clinical pattern; a normal cell count does not prove normal function."
    },
    {
      "clue": "Graft biopsy, donor-specific antibodies and complement-related staining",
      "meaning": "Interpret together. C4d supports some antibody-mediated injury, but is neither universally required nor sufficient by itself."
    },
    {
      "clue": "Amyloid typing",
      "meaning": "Immunohistochemical or proteomic methods identify the precursor; clinical association alone may misclassify deposits."
    }
  ],
  "treatment": [
    {
      "logic": "Distinguish graft dysfunction from rejection",
      "detail": "Infection, obstruction, vascular injury and drug toxicity can resemble rejection; treatment depends on the established mechanism."
    },
    {
      "logic": "Treat the amyloid precursor process",
      "detail": "Plasma-cell, inflammatory and transthyretin disorders require different approaches. Congo red establishes a pattern rather than choosing therapy."
    }
  ],
  "mnemonics": [
    {
      "hook": "AL, AA, ATTR",
      "expansion": [
        "AL: immunoglobulin light chain.",
        "AA: serum amyloid A during sustained inflammation.",
        "ATTR: transthyretin, variant or wild type."
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "Timing of graft dysfunction",
      "wrongInstinct": "Every late episode is chronic rejection.",
      "rightAnswer": "Active rejection can occur late, and not all graft dysfunction is immune-mediated.",
      "why": "Mechanistic classification requires more than time since transplantation."
    },
    {
      "questionCategory": "A positive amyloid stain",
      "wrongInstinct": "The clinical history alone determines the amyloid type.",
      "rightAnswer": "Type the deposits when possible.",
      "why": "Different precursors can occur in patients with overlapping clinical histories."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A teenager has recurrent meningococcal meningitis and otherwise normal immunoglobulin levels. Which defect is a leading consideration?",
      "options": [
        {
          "id": "a",
          "text": "C5–C9 deficiency"
        },
        {
          "id": "b",
          "text": "Isolated IgE excess"
        },
        {
          "id": "c",
          "text": "Factor V Leiden"
        },
        {
          "id": "d",
          "text": "BCL-2 translocation"
        }
      ],
      "answerId": "a",
      "explanation": "Terminal complement components form the membrane attack complex, which is especially important in defence against Neisseria.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "Donor lymphocytes attack skin and gut after allogeneic marrow transplantation. What is this?",
      "options": [
        {
          "id": "a",
          "text": "Recipient rejection of donor kidney"
        },
        {
          "id": "b",
          "text": "Graft-versus-host disease"
        },
        {
          "id": "c",
          "text": "A type III drug reaction by definition"
        },
        {
          "id": "d",
          "text": "An inherited complement defect"
        }
      ],
      "answerId": "b",
      "explanation": "In graft-versus-host disease, immunocompetent donor cells react against recipient tissues.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "Two biopsies are Congo-red positive, one AL and the other ATTR. Why is typing necessary?",
      "options": [
        {
          "id": "a",
          "text": "Only AL can stain with Congo red"
        },
        {
          "id": "b",
          "text": "The stain measures serum antibody titre"
        },
        {
          "id": "c",
          "text": "A shared fibril pattern can come from different precursors requiring different management"
        },
        {
          "id": "d",
          "text": "All amyloid comes from a plasma-cell clone"
        }
      ],
      "answerId": "c",
      "explanation": "Amyloid proteins share structural and staining features, but AL light chains and ATTR transthyretin arise from different biological processes.",
      "tests": "investigation"
    }
  ]
};

export default rbpImmunodeficiencyTransplantAmyloid;
