import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpInfectiousAgentsInjuryMechanisms: Lecture = {
  "id": "rbp-infectious-agents-injury-mechanisms",
  "title": "How Infectious Agents Cause Injury",
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
      "label": "Pathogen damage, toxins & immune evasion"
    }
  ],
  "highYield": [
    "**Infection is an interaction between agent, portal of entry and host defence.** Establishment, spread and severity depend on inoculum, virulence factors, tissue tropism and immune status. Colonisation, latent infection and symptomatic disease are different states.",
    "**Microbes injure through direct and indirect mechanisms.** Organisms can kill cells, release toxins, disrupt vessels or provoke immune-mediated damage. A vigorous host response can contribute substantially to injury even when it helps control microbial replication.",
    "**Exotoxins and endotoxin are different molecular categories.** Many exotoxins are proteins with specific cellular actions; some can be made into toxoids for vaccination. Lipopolysaccharide from Gram-negative bacteria activates innate signalling, especially through lipid A and the TLR4 pathway. Gram-positive organisms and fungi can also trigger sepsis through other signals.",
    "**Viruses can produce cytopathic effects or immune-mediated injury.** Inclusion bodies, cell fusion and altered growth may suggest particular viral processes, while T cells can damage infected tissue. Some viruses promote oncogenesis. The degree of inflammation varies with the organism, tissue and host.",
    "**Immune evasion is a recurring strategy.** Capsules impede phagocytosis; antigenic variation alters recognition; intracellular survival and latency protect some agents from clearance. Defects in neutrophil, antibody or T-cell function shift the differential but do not identify one pathogen by themselves. See [[rbp-host-response-infection-patterns]]."
  ],
  "mechanism": {
    "title": "From microbial entry to tissue injury",
    "steps": [
      {
        "id": "s1",
        "label": "Entry through a susceptible barrier",
        "detail": "Skin, mucosa, vectors or devices provide possible routes.",
        "emphasis": "key"
      },
      {
        "id": "s2",
        "label": "Adherence and local replication",
        "detail": "Microbial factors and tissue receptors shape tropism.",
        "emphasis": "normal"
      },
      {
        "id": "s3",
        "label": "Defences respond",
        "detail": "Innate recognition activates phagocytes, complement and inflammatory signals.",
        "emphasis": "normal"
      },
      {
        "id": "s4",
        "label": "Direct and immune-mediated injury accumulate",
        "detail": "Toxins, cytolysis, vascular effects and host responses may combine.",
        "emphasis": "normal"
      },
      {
        "id": "s5",
        "label": "Containment, persistence or dissemination follows",
        "detail": "Outcome depends on microbial properties and the host’s capacity to control them.",
        "emphasis": "normal"
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Extensive tissue injury with relatively few organisms",
      "mechanism": "Can reflect toxin effects or immune-mediated damage; burden and injury need not be proportional.",
      "significance": "key"
    },
    {
      "sign": "Inclusion bodies or multinucleated cells",
      "mechanism": "Can suggest viral cytopathic change but require organism-specific interpretation.",
      "significance": "key"
    },
    {
      "sign": "Unexpected infection after immunosuppression",
      "mechanism": "The failed defence helps organise the differential, including opportunistic and reactivated infections.",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "Culture",
      "meaning": "Can recover viable organisms and support susceptibility testing, but yield depends on sampling and previous therapy."
    },
    {
      "clue": "Nucleic acid amplification",
      "meaning": "Detects microbial genetic material; a positive result does not always establish viable invasive disease."
    },
    {
      "clue": "Serology",
      "meaning": "Can reflect exposure or immune response, with timing and immune status affecting interpretation."
    }
  ],
  "treatment": [
    {
      "logic": "Control organism and source",
      "detail": "Antimicrobial choice depends on the likely or established agent and site; an abscess or infected device may also require source control."
    },
    {
      "logic": "Vaccination can target a toxin",
      "detail": "Tetanus toxoid induces protective antitoxin responses. This illustrates a strategy for certain toxins, not a universal property of all exotoxins."
    }
  ],
  "mnemonics": [
    {
      "hook": "Agent + site + host",
      "expansion": [
        "Agent: replication, toxins and evasion.",
        "Site: portal and tissue tropism.",
        "Host: barriers, immune status and inflammatory response."
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "Sepsis mechanism",
      "wrongInstinct": "Only Gram-negative endotoxin can cause sepsis.",
      "rightAnswer": "Multiple classes of organisms can provoke dysregulated systemic responses.",
      "why": "Different microbial molecules activate overlapping innate pathways."
    },
    {
      "questionCategory": "A positive molecular test",
      "wrongInstinct": "It always proves active invasive disease.",
      "rightAnswer": "Interpret detection with symptoms, site, timing and assay characteristics.",
      "why": "Colonisation, residual nucleic acid and latent infection can complicate the result."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "Which component of Gram-negative lipopolysaccharide is central to endotoxin activity?",
      "options": [
        {
          "id": "a",
          "text": "Peptidoglycan alone"
        },
        {
          "id": "b",
          "text": "Lipid A"
        },
        {
          "id": "c",
          "text": "Viral capsid"
        },
        {
          "id": "d",
          "text": "Fungal ergosterol"
        }
      ],
      "answerId": "b",
      "explanation": "Lipid A engages innate recognition through the TLR4-associated pathway and can promote inflammatory and procoagulant responses.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "Why can a tetanus toxoid vaccine protect without containing live bacteria?",
      "options": [
        {
          "id": "a",
          "text": "It generates neutralising immunity against the toxin"
        },
        {
          "id": "b",
          "text": "It permanently eliminates every skin wound"
        },
        {
          "id": "c",
          "text": "It blocks all complement activation"
        },
        {
          "id": "d",
          "text": "It targets only Gram-negative endotoxin"
        }
      ],
      "answerId": "a",
      "explanation": "Disease is mediated by tetanus toxin, so an immune response to an inactivated toxin can protect against its effects.",
      "tests": "mechanism"
    },
    {
      "id": "q3",
      "stem": "A pathogen nucleic acid test remains positive after clinical recovery. Which inference is safest?",
      "options": [
        {
          "id": "a",
          "text": "Live invasive organisms are necessarily present"
        },
        {
          "id": "b",
          "text": "Every positive result is contamination"
        },
        {
          "id": "c",
          "text": "Detection must be interpreted with the assay, sampling site and clinical context"
        },
        {
          "id": "d",
          "text": "Treatment has certainly failed"
        }
      ],
      "answerId": "c",
      "explanation": "Nucleic acid detection is not identical to proof of viable organisms or active disease; residual material and other explanations depend on the infection and test.",
      "tests": "investigation"
    }
  ]
};

export default rbpInfectiousAgentsInjuryMechanisms;
