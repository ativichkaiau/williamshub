import type { Lecture } from '../../lib/types';

export const ghpThyroidMetabolicActions: Lecture = {
  "id": "ghp-thyroid-metabolic-actions",
  "title": "Metabolic Actions of Thyroid Hormone",
  "system": "endocrine",
  "source": "Ch 77 — Thyroid Metabolic Hormones",
  "updated": "2026-09-15",
  "tags": [
    {
      "kind": "system",
      "label": "Endocrine"
    },
    {
      "kind": "lecture",
      "label": "Ch 77 Thyroid Metabolic Hormones"
    },
    {
      "kind": "mechanism",
      "label": "Sets basal rate, permits catecholamines, builds the infant brain"
    },
    {
      "kind": "exam",
      "label": "Thyrotoxicosis looks adrenergic with normal catecholamine levels"
    }
  ],
  "highYield": [
    "**Thyroid hormone is the dominant hormonal setter of basal metabolic rate, and it moves it further than any other single influence — from 40 to 50% below normal in myxoedema to 60 to 100% above normal in thyrotoxicosis.** T3 acts through nuclear receptors on gene transcription, so the effect builds over days and outlasts the hormone. The machinery is deliberately wasteful: **more Na⁺-K⁺-ATPase pumping units**, so a larger share of cellular ATP is spent restoring ion gradients; **mitochondrial biogenesis with a greater respiratory capacity**; **partial uncoupling of oxidative phosphorylation**, which produces heat instead of ATP; and **futile substrate cycles** in which a pathway and its reverse run together and the difference is dissipated. Oxygen consumption therefore rises in almost every tissue — with a short list of classical exceptions that includes **brain, testis, spleen, uterus and the anterior pituitary itself**, which is why thyrotoxicosis raises whole-body heat production without raising cerebral metabolic rate. The wider accounting of what sets basal rate sits in [[ghp-bmr-determinants-measurement]].",
    "**Thyroid hormone is permissive for catecholamines, and this single fact explains why thyrotoxicosis looks like an adrenergic storm while circulating catecholamines are normal or even low.** T3 increases the transcription of **beta-1 adrenoceptors** and improves post-receptor coupling, so the same sympathetic outflow produces a larger response at the heart, the vasculature and the tremulous muscle. Nothing about the sympathetic nervous system has changed; the amplifier gain has. Two consequences follow directly. **Beta blockade relieves the tachycardia, tremor, anxiety, lid lag and sweating within hours, long before any antithyroid drug can work**, because it acts on the amplified limb rather than on hormone production. And the converse presentation is equally derivable: **in hypothyroidism the same permissive loss gives bradycardia, cool skin and a blunted response to sympathetic stress**. Permissiveness also travels the other way in reverse, since propranolol at high dose adds a modest block of T4 to T3 conversion.",
    "**The cardiovascular picture of thyrotoxicosis is two separate effects added together, and they are usually examined as one.** T3 acts directly on the myocyte to raise **SERCA2a** and **alpha-myosin heavy chain** and to lower **phospholamban**, giving faster calcium reuptake and therefore both stronger contraction and faster relaxation. Independently it relaxes resistance arterioles, partly through direct vascular smooth muscle action and partly through the metabolite and heat load of the tissues, so **systemic vascular resistance falls by as much as half**. Together they produce the recognisable set: **wide pulse pressure, bounding pulse, resting tachycardia, a raised cardiac output and a high-output state**. The fall in resistance also drops effective renal perfusion pressure, activating the renin-angiotensin system and expanding plasma volume, which further loads the heart. In an older patient the same physiology presents differently — **atrial fibrillation, angina or decompensated heart failure with few classical features**, the apathetic thyrotoxicosis that is missed because the examiner expects agitation.",
    "**Thyroid hormone is irreplaceable for fetal and infant brain development, and that window closes — which is what makes congenital hypothyroidism a screening emergency rather than a clinic problem.** T3 drives **neuronal migration, dendritic and axonal arborisation, synaptogenesis and myelination**, work that is scheduled rather than continuous. The fetal thyroid does not function until about **10 to 12 weeks**, so **first-trimester cortical development depends on maternal T4 crossing the placenta** — the reason maternal hypothyroidism early in pregnancy carries neurodevelopmental consequences and the reason replacement must be optimised before conception. After birth the deficit is clinically silent for weeks, because maternal hormone and the infant colloid store buy time and the classical signs of prolonged jaundice, hypotonia, a large fontanelle, an umbilical hernia and a hoarse cry appear late. **Screening at 48 to 72 hours and starting levothyroxine at 10 to 15 micrograms per kilogram per day within the first two weeks preserves normal intelligence; the same diagnosis made at six months does not.** Nothing else in endocrinology has so short a therapeutic window, and the hormone itself is in [[ghp-thyroid-synthesis-storage-release]].",
    "**Thyroid hormone accelerates both synthesis and degradation of every major substrate, so the net effect depends on which limb is faster — and at excess the catabolic limb wins.** Glucose absorption, glycogenolysis, gluconeogenesis and insulin degradation all rise together, which is why thyrotoxicosis destabilises established diabetes without commonly causing it. Lipolysis and free fatty acid turnover rise, while **T3 up-regulates the hepatic LDL receptor** — the cleanest entry in the module, because it predicts that **hypothyroidism raises LDL cholesterol** through impaired clearance and that treating the thyroid, not adding a statin, is the first step. Protein synthesis rises at physiological levels and is why the hormone is required for normal growth alongside growth hormone, but at thyrotoxic levels degradation overtakes it and gives **proximal myopathy and weight loss despite a large appetite**. In children the growth signature is diagnostic: **hypothyroidism arrests linear growth with delayed bone age while weight is maintained or rises**, which separates it at a glance from nutritional or systemic causes of short stature, where weight falls first.",
    "**The bedside signs are all readouts of speed, and the therapeutic risks sit at both ends of the dose.** A delayed relaxation phase of the ankle reflex in hypothyroidism is literally slowed calcium reuptake by SERCA in skeletal muscle, the same protein the hormone regulates in the heart; the brisk reflexes and fine 8 to 10 Hz tremor of thyrotoxicosis are its mirror. Heat handling follows from the calorigenic action, giving **cold intolerance with a low core temperature and a risk of myxoedema coma at one extreme, and heat intolerance with sweating and cutaneous vasodilatation at the other** — the thermal accounting is in [[ghp-body-temperature-heat-balance]]. Because the actions are dose-graded rather than all-or-none, **over-replacement is a real harm and not merely a laboratory abnormality**: a suppressed TSH on thyroxine carries an increased risk of **atrial fibrillation and of accelerated bone loss**, most sharply in older and postmenopausal patients. The clinical corollary is that thyroid replacement is titrated to a target TSH rather than to symptomatic satisfaction."
  ],
  "mechanism": {
    "title": "T3 enters the nucleus → transcribes pumps, mitochondria and receptors → basal rate rises, catecholamine gain rises → cardiac, thermal and growth phenotype follows",
    "steps": [
      {
        "id": "s1",
        "label": "T4 is deiodinated to T3 inside the target cell, which binds nuclear thyroid hormone receptors on DNA response elements",
        "detail": "Genomic action explains the delay of days to weeks between hormone level and clinical effect, in both directions",
        "emphasis": "normal"
      },
      {
        "id": "s2",
        "label": "Transcription of Na⁺-K⁺-ATPase subunits, mitochondrial proteins and uncoupling pathways increases oxygen consumption and obligatory heat production",
        "emphasis": "key"
      },
      {
        "id": "s3",
        "label": "Basal metabolic rate shifts across a range no other hormone matches — roughly minus 40 to 50% to plus 60 to 100%",
        "emphasis": "key"
      },
      {
        "id": "s4",
        "label": "Beta-1 adrenoceptor density and coupling rise, amplifying the response to an unchanged sympathetic outflow",
        "detail": "The permissive action, and the reason beta blockade works so well symptomatically in thyrotoxicosis",
        "emphasis": "key"
      },
      {
        "id": "s5",
        "label": "SERCA2a up and phospholamban down raise contractility and lusitropy, while arteriolar relaxation halves systemic vascular resistance",
        "emphasis": "key"
      },
      {
        "id": "s6",
        "label": "Net result is a wide pulse pressure high-output circulation, heat intolerance, catabolic weight loss and, in the developing brain, scheduled maturation that cannot be deferred",
        "emphasis": "normal"
      }
    ],
    "branches": [
      {
        "fromId": "s6",
        "title": "The developmental branch",
        "steps": [
          {
            "id": "b1",
            "label": "Fetal thyroid inactive until 10 to 12 weeks, so early cortical development runs on maternal T4",
            "emphasis": "key"
          },
          {
            "id": "b2",
            "label": "Neuronal migration, arborisation, synaptogenesis and myelination are scheduled events, not continuous ones",
            "emphasis": "normal"
          },
          {
            "id": "b3",
            "label": "Deficiency is clinically silent in the newborn, which is exactly why biochemical screening exists",
            "emphasis": "key"
          },
          {
            "id": "b4",
            "label": "Treatment delayed beyond the first weeks leaves irreversible intellectual disability — the window does not reopen",
            "emphasis": "danger"
          }
        ]
      }
    ]
  },
  "examFindings": [
    {
      "sign": "Resting tachycardia, fine tremor, lid lag and warm sweaty palms in a patient whose plasma catecholamines measure normal",
      "mechanism": "T3 up-regulates beta-1 adrenoceptor number and coupling, so an unchanged sympathetic outflow produces an exaggerated response — permissiveness, not excess catecholamine",
      "significance": "key"
    },
    {
      "sign": "Wide pulse pressure with a bounding collapsing pulse and a systolic flow murmur in thyrotoxicosis",
      "mechanism": "Raised contractility and stroke volume push systolic pressure up while a 40 to 50% fall in systemic vascular resistance drops diastolic pressure — the two ends separate",
      "significance": "key"
    },
    {
      "sign": "Delayed relaxation phase of the ankle jerk in hypothyroidism, with normal power",
      "mechanism": "Reduced SERCA-mediated calcium reuptake slows skeletal muscle relaxation; it is a direct bedside readout of the same protein T3 regulates in cardiac muscle",
      "significance": "key"
    },
    {
      "sign": "An 80-year-old in new atrial fibrillation with weight loss, proximal weakness and no tremor, agitation or goitre",
      "mechanism": "Apathetic thyrotoxicosis — the cardiac and catabolic actions persist while the adrenergic-appearing features that prompt the diagnosis in younger patients are absent",
      "significance": "key"
    },
    {
      "sign": "An LDL cholesterol that falls substantially on levothyroxine alone, with no change in diet or lipid-lowering therapy",
      "mechanism": "T3 up-regulates the hepatic LDL receptor, so hypothyroid hypercholesterolaemia is a clearance defect that corrects once euthyroid — treat the thyroid before the lipid",
      "significance": "supportive"
    },
    {
      "sign": "A child whose linear growth has arrested while weight is preserved or rising, with a bone age well behind chronological age",
      "mechanism": "Thyroid hormone is required with growth hormone for epiphyseal maturation; the dissociation of height from weight is what separates endocrine from nutritional short stature",
      "significance": "key"
    }
  ],
  "investigations": [
    {
      "clue": "The hormone with the widest effect on basal metabolic rate, and the four mechanisms it uses",
      "meaning": "Thyroid hormone, acting through Na⁺-K⁺-ATPase expression, mitochondrial biogenesis, partial uncoupling and futile substrate cycling"
    },
    {
      "clue": "Tissues whose oxygen consumption is not increased by thyroid hormone",
      "meaning": "Brain, testis, spleen, uterus and anterior pituitary — the classical exemptions, and the reason cerebral metabolic rate is unchanged in thyrotoxicosis"
    },
    {
      "clue": "Why a beta blocker relieves thyrotoxic symptoms within hours while a thionamide takes weeks",
      "meaning": "The symptoms arise from thyroid-induced amplification of catecholamine signalling; blocking the receptor works immediately, whereas blocking synthesis must wait for the stored hormone to clear"
    },
    {
      "clue": "Why systolic and diastolic pressures move in opposite directions in thyrotoxicosis",
      "meaning": "Contractility and stroke volume rise while systemic vascular resistance falls, producing the wide pulse pressure of a high-output circulation"
    },
    {
      "clue": "Why congenital hypothyroidism is screened biochemically at 48 to 72 hours rather than diagnosed clinically",
      "meaning": "Maternal hormone and the infant colloid store mask it for weeks; by the time the classical signs appear, the developmental window for normal cognition has already closed"
    },
    {
      "clue": "The two harms of a suppressed TSH in a patient on levothyroxine",
      "meaning": "Atrial fibrillation and accelerated bone loss — which is why replacement is titrated to a TSH target rather than to how the patient says they feel"
    }
  ],
  "treatment": [
    {
      "logic": "Why it matters",
      "detail": "Three actions generate almost every clinical feature, and they are worth naming separately rather than learning as a list of symptoms. **Calorigenic** — the hormone sets the idle speed of the whole body, so heat, appetite, weight and pulse all follow it. **Permissive** — it sets the gain on catecholamines, so thyrotoxicosis borrows the sympathetic phenotype without borrowing sympathetic activity, and beta blockade is the fastest symptomatic lever available. **Developmental** — it builds the infant brain on a fixed schedule, which converts a biochemical abnormality into a time-critical emergency. The endocrine block treatment of the same actions is in [[hen1-thyroid-physiologic-actions]]."
    },
    {
      "logic": "Where it is examined",
      "detail": "The favourite stem asks **why a thyrotoxic patient looks adrenergic when catecholamines are normal**, and it wants the word permissive and the beta-receptor up-regulation behind it. The second favourite asks **why the pulse pressure widens**, and it wants two mechanisms and not one. A third gives **a hypothyroid patient with a raised LDL** and asks what to do first, where the answer is thyroxine because the defect is hepatic LDL receptor expression. A fourth gives a **well-looking newborn with a screening result** and tests whether the candidate understands that clinical normality is expected and irrelevant. Expect a fifth that punishes over-replacement with atrial fibrillation in an older patient."
    }
  ],
  "mnemonics": [
    {
      "hook": "Thyroid sets the SPEED, lends the AMPLIFIER, builds the BRAIN",
      "expansion": [
        "Speed: basal metabolic rate, minus 40 to 50% to plus 60 to 100%",
        "Amplifier: beta-1 receptor up-regulation, so normal catecholamines produce an adrenergic patient",
        "Brain: migration, arborisation, synaptogenesis and myelination on a fixed schedule",
        "Everything else — pulse pressure, cholesterol, reflexes, bone age — is one of these three viewed from somewhere else"
      ]
    },
    {
      "hook": "Both taps open, drain wider — synthesis and breakdown both rise, breakdown wins at excess",
      "expansion": [
        "Glucose: absorption, glycogenolysis and gluconeogenesis up, plus faster insulin degradation",
        "Lipid: lipolysis up and hepatic LDL receptors up, so hypothyroidism raises LDL by impaired clearance",
        "Protein: synthesis up at physiological levels, catabolism wins at thyrotoxic levels — proximal myopathy",
        "Net: weight loss despite a large appetite in excess, weight gain that is mostly fluid in deficiency"
      ]
    }
  ],
  "traps": [
    {
      "questionCategory": "The mechanism behind the adrenergic features of thyrotoxicosis",
      "wrongInstinct": "Thyroid hormone raises circulating catecholamine concentrations, so the patient is effectively in a sympathetic surge",
      "rightAnswer": "Catecholamine levels are normal or low; T3 up-regulates beta-1 adrenoceptors and their coupling, amplifying an unchanged signal",
      "why": "Permissiveness is the concept being tested, and it is what makes beta blockade so effective symptomatically while doing nothing at all to hormone production."
    },
    {
      "questionCategory": "Timing of treatment in congenital hypothyroidism",
      "wrongInstinct": "The baby is feeding, alert and clinically well, so replacement can wait for a confirmatory venous sample and a specialist appointment",
      "rightAnswer": "Start levothyroxine on the screening result within the first two weeks, taking confirmatory bloods at the same visit",
      "why": "Clinical normality at birth is expected, because maternal hormone masks the deficiency — and the developmental window closes long before the classical signs appear."
    }
  ],
  "quiz": [
    {
      "id": "q1",
      "stem": "A 28-year-old with untreated Graves disease has a heart rate of 124, a fine tremor and a blood pressure of 158/54 mmHg. Plasma noradrenaline and adrenaline are within the reference range. Propranolol is started and the tremor and tachycardia settle within hours. The best explanation is:",
      "options": [
        {
          "id": "a",
          "text": "Propranolol rapidly lowers free T4 and free T3 concentrations"
        },
        {
          "id": "b",
          "text": "Thyroid hormone increases beta-1 adrenoceptor expression and coupling, so a normal sympathetic outflow produces an exaggerated response"
        },
        {
          "id": "c",
          "text": "Thyrotoxicosis increases adrenal medullary catecholamine secretion, which the assay failed to detect"
        },
        {
          "id": "d",
          "text": "Propranolol blocks the nuclear thyroid hormone receptor in cardiac and skeletal muscle"
        }
      ],
      "answerId": "b",
      "explanation": "This is the permissive action of thyroid hormone. T3 increases the transcription of beta-1 adrenoceptors and improves post-receptor coupling, so the gain on an unchanged catecholamine signal is raised — which is why the clinical picture is adrenergic while measured catecholamines are normal or low. Beta blockade acts on that amplified limb and therefore relieves tremor, tachycardia, anxiety and sweating within hours, long before any change in hormone production. High-dose propranolol does modestly inhibit T4 to T3 conversion, but that is a slow secondary effect, not the reason for the immediate response, and no beta blocker touches the nuclear receptor.",
      "tests": "mechanism"
    },
    {
      "id": "q2",
      "stem": "A newborn screening sample taken at 60 hours shows a capillary TSH of 120 mU/L. Confirmatory venous results cannot be obtained the same day. The infant is feeding well, alert and has an entirely normal examination. The most appropriate action is:",
      "options": [
        {
          "id": "a",
          "text": "Reassure and repeat the screening test at six weeks, since the examination is normal"
        },
        {
          "id": "b",
          "text": "Take confirmatory venous thyroid function tests and start levothyroxine without waiting for the result"
        },
        {
          "id": "c",
          "text": "Arrange a thyroid scan first, since treatment before imaging will make the aetiology undiagnosable"
        },
        {
          "id": "d",
          "text": "Treat only if the infant develops prolonged jaundice, hypotonia or a hoarse cry"
        }
      ],
      "answerId": "b",
      "explanation": "A normal newborn examination is the expected finding, not a reassuring one: transplacental maternal thyroxine and the infant colloid store mask deficiency for weeks, and the classical signs appear only after the developmental window has begun to close. Thyroid hormone drives neuronal migration, arborisation, synaptogenesis and myelination on a fixed schedule, so starting levothyroxine at 10 to 15 micrograms per kilogram per day within the first two weeks preserves normal cognition while delay does not. Confirmatory bloods are drawn at the same visit, and imaging, if wanted, can be arranged without delaying treatment.",
      "tests": "treatment"
    },
    {
      "id": "q3",
      "stem": "A 54-year-old with newly diagnosed primary hypothyroidism has an LDL cholesterol of 4.9 mmol/L. Her dietary history is unremarkable and she takes no lipid-lowering therapy. Which statement best describes the mechanism and the correct first step?",
      "options": [
        {
          "id": "a",
          "text": "Reduced hepatic LDL receptor expression impairs LDL clearance; treat the hypothyroidism and reassess the lipid profile"
        },
        {
          "id": "b",
          "text": "Increased hepatic cholesterol synthesis drives the rise; start a high-intensity statin immediately"
        },
        {
          "id": "c",
          "text": "Reduced lipolysis raises circulating LDL directly; start a fibrate"
        },
        {
          "id": "d",
          "text": "The association is incidental, since thyroid status does not measurably affect lipid metabolism"
        }
      ],
      "answerId": "a",
      "explanation": "T3 up-regulates the hepatic LDL receptor, so hypothyroid hypercholesterolaemia is predominantly a clearance defect rather than an overproduction state. It commonly corrects substantially with levothyroxine alone, which is why thyroid function should be checked in any new dyslipidaemia and treated before committing a patient to lifelong lipid-lowering therapy. Starting a statin in an untreated hypothyroid patient also carries a higher risk of myopathy, adding a practical reason to sequence it this way.",
      "tests": "investigation"
    }
  ]
};

export default ghpThyroidMetabolicActions;
