import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpGeneticDiseaseMechanisms: Lecture = {
  "id": "rbp-genetic-disease-mechanisms",
  "title": "Mechanisms of Genetic Disease",
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
      "label": "Variant effects, inheritance & chromosome abnormalities"
    }
  ],
  "highYield": [
    "**A variant’s effect depends on what it changes.** Missense changes alter an amino acid; nonsense changes introduce a stop signal; splice variants can disrupt RNA processing. Insertions or deletions shift the reading frame only when the net coding change is not a multiple of three. Copy-number and regulatory changes can alter dosage without changing a protein sequence.",
    "**Inheritance describes transmission, not guaranteed expression.** Autosomal dominant disease may reflect haploinsufficiency, gain of function or dominant-negative effects. Autosomal recessive disease often reflects loss of both functional copies. X-linked patterns depend on sex chromosomes and X inactivation. Penetrance, expressivity and new variants can obscure a pedigree.",
    "**Repeat expansions can be unstable between generations.** Some disorders show anticipation, with earlier onset or greater severity associated with expansion. Effects may involve altered proteins, RNA toxicity or gene silencing; not all repeat diseases have identical parent-of-origin behaviour.",
    "**Mitochondrial disease depends on distribution as well as inheritance.** Pathogenic mitochondrial DNA variants usually follow maternal transmission. Heteroplasmy and tissue thresholds influence phenotype; relatives can differ markedly. Mitochondrial function also depends on nuclear genes, which follow their own inheritance patterns.",
    "**Chromosomal and imprinting disorders require mechanistic classification.** Nondisjunction, translocations and mosaicism have different implications. Balanced rearrangements can leave a carrier healthy but affect gametes. Imprinting changes expression by parent of origin; deletion, uniparental disomy or imprinting defects can therefore produce related syndromes. Continue with [[rbp-paediatric-congenital-disease]]."
  ],
  "mechanism": {
    "title": "From a genetic change to a phenotype",
    "steps": [
      {
        "id": "s1",
        "label": "A sequence, dosage or regulatory change occurs",
        "detail": "The alteration may be inherited, arise de novo or be confined to a mosaic population.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Expression or protein function changes",
        "detail": "Effects include loss of function, gain of function and disturbed regulation.",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "Cellular pathways are affected",
        "detail": "A metabolic, structural, signalling or developmental process becomes abnormal.",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "Tissue susceptibility shapes the phenotype",
        "detail": "Expression patterns, energy demand and compensatory pathways matter.",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "Inheritance and modifiers influence presentation",
        "detail": "Penetrance, environment, mosaicism and other variants can modify severity.",
        "emphasis": "normal"
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Affected individuals in successive generations",
      "mechanism": "Supports dominant transmission, but a pedigree needs consideration of penetrance and ascertainment.",
      "significance": "key"
    },
    {
      "sign": "Affected siblings with unaffected parents",
      "mechanism": "Suggests recessive inheritance, while de novo variants and parental mosaicism can provide other explanations.",
      "significance": "key"
    },
    {
      "sign": "Different severity among maternal relatives with a mitochondrial DNA variant",
      "mechanism": "Can reflect heteroplasmy, tissue distribution and threshold effects.",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "Karyotype",
      "meaning": "Detects many large chromosomal changes and balanced rearrangements, with limited resolution for small sequence or copy-number changes."
    },
    {
      "clue": "Chromosomal microarray",
      "meaning": "Detects genomic copy-number changes but usually not balanced rearrangements or all sequence variants."
    },
    {
      "clue": "Targeted sequencing, repeat or methylation testing",
      "meaning": "Choose according to the suspected mechanism; one sequencing assay does not detect every category of genetic disease."
    }
  ],
  "treatment": [
    {
      "logic": "Separate variant detection from pathogenicity",
      "detail": "Population frequency, segregation, functional evidence and phenotype help interpret a finding; uncertainty is a legitimate classification."
    },
    {
      "logic": "Base recurrence estimates on the mechanism",
      "detail": "A de novo event, parental balanced translocation and inherited sequence variant do not carry the same family implications."
    }
  ],
  "mnemonics": [
    {
      "hook": "Sequence, dosage, expression",
      "expansion": [
        "Sequence: altered coding or splice information.",
        "Dosage: too many or too few copies.",
        "Expression: altered regulation or imprinting."
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "An insertion in a coding region",
      "wrongInstinct": "Every insertion causes a frameshift.",
      "rightAnswer": "A net change divisible by three can preserve the reading frame.",
      "why": "The resulting protein may still be abnormal even without a frameshift."
    },
    {
      "questionCategory": "A normal microarray",
      "wrongInstinct": "All genetic disorders have been excluded.",
      "rightAnswer": "The test covers some classes of variation, not all.",
      "why": "Balanced rearrangements, repeats and sequence variants may need different assays."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A coding exon loses exactly three nucleotides without affecting splicing. What is the most direct predicted effect?",
      "options": [
        {
          "id": "a",
          "text": "An obligatory frameshift"
        },
        {
          "id": "b",
          "text": "An in-frame deletion of one amino acid"
        },
        {
          "id": "c",
          "text": "Loss of the whole chromosome"
        },
        {
          "id": "d",
          "text": "Uniparental disomy"
        }
      ],
      "answerId": "b",
      "explanation": "Deletion of a complete codon preserves the reading frame, although the missing amino acid may still alter protein function.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "A mother and two children carry the same mitochondrial DNA variant but differ greatly in severity. Which mechanism can explain this?",
      "options": [
        {
          "id": "a",
          "text": "Paternal transmission of mitochondrial DNA is required"
        },
        {
          "id": "b",
          "text": "Every tissue must have the same mutant fraction"
        },
        {
          "id": "c",
          "text": "Heteroplasmy with tissue-dependent thresholds"
        },
        {
          "id": "d",
          "text": "The variant cannot be pathogenic"
        }
      ],
      "answerId": "c",
      "explanation": "Different proportions and distributions of mutant mitochondrial DNA can produce different levels of tissue dysfunction.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "A healthy parent carries a balanced translocation. Why can a child be affected?",
      "options": [
        {
          "id": "a",
          "text": "Every balanced translocation is lethal"
        },
        {
          "id": "b",
          "text": "The parent cannot form gametes"
        },
        {
          "id": "c",
          "text": "Only protein folding changes"
        },
        {
          "id": "d",
          "text": "Meiotic segregation can produce unbalanced chromosome content"
        }
      ],
      "answerId": "d",
      "explanation": "A balanced carrier may retain the necessary genetic material but form gametes with gains or losses, giving offspring an unbalanced rearrangement.",
      "tests": "mechanism"
    }
  ]
};

export default rbpGeneticDiseaseMechanisms;
