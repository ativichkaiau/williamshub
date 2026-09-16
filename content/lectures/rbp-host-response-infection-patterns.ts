import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpHostResponseInfectionPatterns: Lecture = {
  "id": "rbp-host-response-infection-patterns",
  "title": "Host Response & Tissue Patterns of Infection",
  "system": "pathology",
  "source": "Ch 8 — General Pathology of Infectious Diseases",
  "updated": "2026-09-16",
  "tags": [
    {
      "kind": "system",
      "label": "Pathology"
    },
    {
      "kind": "lecture",
      "label": "Ch 8 General Pathology of Infectious Diseases"
    },
    {
      "kind": "mechanism",
      "label": "Suppuration, granulomas & cytopathic patterns"
    }
  ],
  "highYield": [
    "**A tissue response narrows the differential rather than naming the organism.** Suppurative, mononuclear, granulomatous, cytopathic, necrotising and fibrosing patterns overlap. Immune status, duration, treatment and the sampled area alter the appearance.",
    "**Suppuration contains neutrophils and necrotic debris.** Pyogenic bacteria commonly cause it, but fungi and noninfectious processes can also recruit neutrophils. An abscess destroys tissue and may require organisation or scarring after clearance.",
    "**Mononuclear and granulomatous responses suggest different host–agent interactions.** Viruses and some intracellular bacteria provoke lymphocyte- and macrophage-rich lesions. Granulomas can occur with mycobacteria, fungi, foreign material and noninfectious inflammatory disease. Caseation is suggestive, not a complete microbiological diagnosis.",
    "**Immunosuppression can erase an expected pattern.** Deficient T-cell responses can impair immune granuloma formation and skin-test reactivity despite serious mycobacterial infection. Neutropenia can blunt pus formation. Absence of inflammation is not proof of absence of infection.",
    "**Cytopathic and necrotising patterns require urgent context.** Viral changes may involve inclusions, cell fusion or proliferation, sometimes with substantial inflammation. Toxin-mediated damage or vascular invasion can cause extensive necrosis. Severe pain and systemic illness may precede dramatic surface changes. Resolution versus fibrosis also depends on the surviving tissue scaffold. Review [[rbp-chronic-inflammation-repair]] and [[rbp-infectious-agents-injury-mechanisms]]."
  ],
  "mechanism": {
    "title": "Using an infection pattern diagnostically",
    "steps": [
      {
        "id": "s1",
        "label": "Describe the dominant response",
        "detail": "Identify neutrophils, mononuclear cells, granulomas, cytopathic change or necrosis.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Assess the host and timing",
        "detail": "Immunosuppression and previous therapy can change the expected appearance.",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "Build a focused differential",
        "detail": "Combine tissue pattern with site, exposures and clinical course.",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "Seek direct microbiological evidence",
        "detail": "Appropriate stains, cultures or molecular tests refine the diagnosis.",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "Reconcile discordant findings",
        "detail": "A negative stain or atypical response may reflect sampling or sensitivity, not absence of infection.",
        "emphasis": "normal"
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Sheets of macrophages without well-formed granulomas in advanced immune deficiency",
      "mechanism": "May accompany disseminated intracellular infection; microbiological evidence is needed.",
      "significance": "key"
    },
    {
      "sign": "Pain out of proportion to surface findings with rapid progression",
      "mechanism": "Raises concern for a necrotising soft-tissue infection; do not wait for classic late skin changes.",
      "significance": "key"
    },
    {
      "sign": "A lung abscess that leaves a scar",
      "mechanism": "Destruction of the local scaffold limits restoration of normal architecture.",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "Acid-fast stains and mycobacterial culture or molecular assays",
      "meaning": "Complement one another; a negative tissue stain does not exclude low-burden or poorly sampled infection."
    },
    {
      "clue": "Fungal stains such as GMS or PAS",
      "meaning": "Can reveal organisms in tissue; morphology and additional testing refine identification."
    },
    {
      "clue": "Negative tuberculin or interferon-gamma testing in marked immunosuppression",
      "meaning": "Does not reliably exclude active tuberculosis; these assess immune responses rather than directly detecting organisms."
    }
  ],
  "treatment": [
    {
      "logic": "A dangerous clinical pattern can precede confirmation",
      "detail": "Suspected necrotising soft-tissue infection requires urgent clinical and surgical assessment; biopsy should not delay necessary care."
    },
    {
      "logic": "Sample the relevant site",
      "detail": "Surface colonisers may differ from the organisms causing deep disease. Tissue location and specimen handling affect interpretation."
    }
  ],
  "mnemonics": [
    {
      "hook": "Pattern → host → proof",
      "expansion": [
        "Pattern suggests a set of possibilities.",
        "Host explains unusual or missing responses.",
        "Microbiological evidence tests the proposed cause."
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "No granuloma",
      "wrongInstinct": "Mycobacterial infection has been excluded.",
      "rightAnswer": "Granulomas may be absent in severe immune deficiency or an unrepresentative sample.",
      "why": "An immune response is not the same as a direct organism test."
    },
    {
      "questionCategory": "Neutrophilic inflammation",
      "wrongInstinct": "It proves one particular bacterium.",
      "rightAnswer": "Neutrophils occur in multiple infectious and sterile conditions.",
      "why": "Use culture, stains and context to establish the cause."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A profoundly immunosuppressed patient has suspected disseminated mycobacterial infection, but no granulomas in a node biopsy. What follows?",
      "options": [
        {
          "id": "a",
          "text": "The diagnosis is excluded"
        },
        {
          "id": "b",
          "text": "Only sarcoidosis remains possible"
        },
        {
          "id": "c",
          "text": "Impaired cellular immunity may prevent granuloma formation"
        },
        {
          "id": "d",
          "text": "All macrophages must be absent"
        }
      ],
      "answerId": "c",
      "explanation": "Well-formed immune granulomas require coordinated cellular responses. Serious infection may persist or disseminate when that response is impaired.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "A rapidly worsening limb has severe pain with few surface changes. What principle is most relevant?",
      "options": [
        {
          "id": "a",
          "text": "A normal-looking surface excludes deep infection"
        },
        {
          "id": "b",
          "text": "Deep necrotising infection can precede obvious skin findings"
        },
        {
          "id": "c",
          "text": "Wait for mature granulomas before assessment"
        },
        {
          "id": "d",
          "text": "Pain intensity identifies the exact organism"
        }
      ],
      "answerId": "b",
      "explanation": "Deep tissue injury can advance before major cutaneous signs. A compatible clinical picture warrants urgent assessment rather than reliance on surface appearance.",
      "tests": "exam"
    },
    {
      "id": "q3",
      "stem": "Why can an abscess scar while an uncomplicated pneumonia resolves with preserved architecture?",
      "options": [
        {
          "id": "a",
          "text": "Every pneumonia destroys the full scaffold"
        },
        {
          "id": "b",
          "text": "An abscess contains no inflammatory cells"
        },
        {
          "id": "c",
          "text": "Only viruses allow regeneration"
        },
        {
          "id": "d",
          "text": "An abscess can destroy the supporting matrix needed for architectural restoration"
        }
      ],
      "answerId": "d",
      "explanation": "Regeneration depends on surviving cells and a suitable scaffold. Destruction of tissue architecture favours repair by fibrosis.",
      "tests": "mechanism"
    }
  ]
};

export default rbpHostResponseInfectionPatterns;
