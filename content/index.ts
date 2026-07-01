import type { Lecture } from '../lib/types';
import { subjectOfSource, subjectSlug } from './curriculum';
// L1 — Cardiac Arrhythmias
import avBlock from './lectures/av-block';
import atrialFibrillation from './lectures/atrial-fibrillation';
import atrialFlutter from './lectures/atrial-flutter';
import prematureContractions from './lectures/premature-contractions';
import ventricularTachycardia from './lectures/ventricular-tachycardia';
import ventricularFibrillation from './lectures/ventricular-fibrillation';
// L2 — Abnormal ECG
import stemiLocalization from './lectures/stemi-localization';
import bundleBranchBlock from './lectures/bundle-branch-block';
import escapeRhythmsSinusDysfunction from './lectures/escape-rhythms-sinus-dysfunction';
// L3 — Congenital Heart Disease
import vsd from './lectures/vsd';
import asd from './lectures/asd';
import pda from './lectures/pda';
import tetralogyOfFallot from './lectures/tetralogy-of-fallot';
// L4 — Antiarrhythmic Drugs
import antiarrhythmicDrugs from './lectures/antiarrhythmic-drugs';
// L5 — Vascular Disorders
import atherosclerosis from './lectures/atherosclerosis';
import arteriosclerosisPatterns from './lectures/arteriosclerosis-patterns';
import aorticAneurysm from './lectures/aortic-aneurysm';
import aorticDissection from './lectures/aortic-dissection';
// L6 — Ischemic Heart Disease
import ihdOverview from './lectures/ihd-overview';
import myocardialInfarctionPathology from './lectures/myocardial-infarction-pathology';
import miComplications from './lectures/mi-complications';
// L7 — Coagulation & Hemostasis
import antiplatelets from './lectures/antiplatelets';
import anticoagulants from './lectures/anticoagulants';
import fibrinolytics from './lectures/fibrinolytics';
// L8 — Valvular Heart Disease
import aorticStenosis from './lectures/aortic-stenosis';
import mitralStenosis from './lectures/mitral-stenosis';
import mitralValveProlapse from './lectures/mitral-valve-prolapse';
import rheumaticHeartDisease from './lectures/rheumatic-heart-disease';
import infectiveEndocarditis from './lectures/infective-endocarditis';
import nonbacterialEndocarditis from './lectures/nonbacterial-endocarditis';
// L9 — Acute Coronary Syndrome
import acsSpectrum from './lectures/acs-spectrum';
import acsManagement from './lectures/acs-management';
// L10 — Cardiomyopathy & Myocarditis
import cardiomyopathyOverview from './lectures/cardiomyopathy-overview';
import dilatedCardiomyopathy from './lectures/dilated-cardiomyopathy';
import hypertrophicCardiomyopathy from './lectures/hypertrophic-cardiomyopathy';
import restrictiveCardiomyopathy from './lectures/restrictive-cardiomyopathy';
import arvc from './lectures/arvc';
import myocarditis from './lectures/myocarditis';
// L11 — Cardiogenic Shock
import cardiogenicShock from './lectures/cardiogenic-shock';
import scaiShockClassification from './lectures/scai-shock-classification';
import cardiacArrest from './lectures/cardiac-arrest';
// L12 — Heart Failure
import heartFailureOverview from './lectures/heart-failure-overview';
import hfrefSystolic from './lectures/hfref-systolic';
import hfpefDiastolic from './lectures/hfpef-diastolic';
import rightSidedHf from './lectures/right-sided-hf';
// L13 — Antianginal Drugs
import antianginalPrinciples from './lectures/antianginal-principles';
import organicNitrates from './lectures/organic-nitrates';
import betaBlockersCcbAngina from './lectures/beta-blockers-ccb-angina';
// L14 — Pathology of Heart Failure
import hfPathologyOverview from './lectures/hf-pathology-overview';
import cardiacHypertrophyRemodeling from './lectures/cardiac-hypertrophy-remodeling';
import hfOrganPathology from './lectures/hf-organ-pathology';
// L15 — Drugs Used in Heart Failure
import hfPharmacologyPillars from './lectures/hf-pharmacology-pillars';
import digoxinInotropes from './lectures/digoxin-inotropes';
import hfOtherDrugs from './lectures/hf-other-drugs';
// L16 — Hypertension
import htnClassification from './lectures/htn-classification';
import htnPathophysiology from './lectures/htn-pathophysiology';
import hypertensiveTargetOrganDamage from './lectures/hypertensive-target-organ-damage';
// L17 — Shock
import shockMechanismsTypes from './lectures/shock-mechanisms-types';
import vasopressorsInotropes from './lectures/vasopressors-inotropes';
// L18 — Antihypertensive Drugs
import antihypertensiveOverview from './lectures/antihypertensive-overview';
import htnDiureticsRaas from './lectures/htn-diuretics-raas';
import htnCcbSympatholytics from './lectures/htn-ccb-sympatholytics';
// L19 — Vascular Diseases II
import vasculitisOverview from './lectures/vasculitis-overview';
import largeMediumVasculitis from './lectures/large-medium-vasculitis';
import smallVesselAndVenous from './lectures/small-vessel-and-venous';
// L20 — Cardiac Tumors
import cardiacTumorsOverview from './lectures/cardiac-tumors-overview';
import cardiacMyxoma from './lectures/cardiac-myxoma';
import rhabdomyomaAndTumors from './lectures/rhabdomyoma-and-tumors';
// L21 — Pericardial Disease
import pericardialEffusion from './lectures/pericardial-effusion';
import cardiacTamponade from './lectures/cardiac-tamponade';
import pericarditis from './lectures/pericarditis';
import constrictiveTuberculousPericarditis from './lectures/constrictive-tuberculous-pericarditis';

// ── HNS-2 (Human Nervous & Special Senses System-2) ──────────────────────────
// L1 — Clinical Neuroanatomy I
import neuroLocalizationFramework from './lectures/neuro-localization-framework';
import spinalCordSyndromes from './lectures/spinal-cord-syndromes';
import brainstemSyndromes from './lectures/brainstem-syndromes';
import cortexAndStroke from './lectures/cortex-and-stroke';
import basalGangliaCerebellum from './lectures/basal-ganglia-cerebellum';
import limbicHypothalamus from './lectures/limbic-hypothalamus';
// L2 — Clinical Neuroanatomy II
import extraocularMuscles from './lectures/extraocular-muscles';
import gazePathwaysIno from './lectures/gaze-pathways-ino';
import vestibularSystemReflexes from './lectures/vestibular-system-reflexes';
import pupillaryReflexesHorner from './lectures/pupillary-reflexes-horner';
// L3 — Common Ear Disorders
import hearingBalanceBasics from './lectures/hearing-balance-basics';
import externalEarDisorders from './lectures/external-ear-disorders';
import middleEarDisorders from './lectures/middle-ear-disorders';
import innerEarDisorders from './lectures/inner-ear-disorders';
// L4 — Common Eye Disorders
import visualPathwayFields from './lectures/visual-pathway-fields';
import retinalVascularOcclusions from './lectures/retinal-vascular-occlusions';
import amdDiabeticRetinopathy from './lectures/amd-diabetic-retinopathy';
import pediatricInfectiveRetina from './lectures/pediatric-infective-retina';
import opticNerveDiscEdema from './lectures/optic-nerve-disc-edema';
// L5 — CNS Trauma & Hemorrhage
import cnsCellularReactions from './lectures/cns-cellular-reactions';
import traumaticBrainSpinalInjury from './lectures/traumatic-brain-spinal-injury';
import raisedIcpHerniation from './lectures/raised-icp-herniation';
import epiduralSubduralHematoma from './lectures/epidural-subdural-hematoma';
import sahAneurysmAvmIph from './lectures/sah-aneurysm-avm-iph';
// L6 — Metabolic & Regulatory Disorders
import alteredMentalStatusComa from './lectures/altered-mental-status-coma';
import wernickeKorsakoff from './lectures/wernicke-korsakoff';
import hepaticUremicEncephalopathy from './lectures/hepatic-uremic-encephalopathy';
import periodicParalysis from './lectures/periodic-paralysis';
// L7 — CNS Pharmacology & Stimulants
import cnsPharmacologyFoundations from './lectures/cns-pharmacology-foundations';
import cnsNeurotransmitters from './lectures/cns-neurotransmitters';
import cnsStimulants from './lectures/cns-stimulants';
// L8 — Antiepileptic Drugs
import aedsPrinciplesTargets from './lectures/aeds-principles-targets';
import aedsSodiumChannelBlockers from './lectures/aeds-sodium-channel-blockers';
import aedsGabaAndAbsence from './lectures/aeds-gaba-and-absence';
import aedsBroadSpectrum from './lectures/aeds-broad-spectrum';
// L9 — Antiparkinson Agents
import levodopaAndAdjuncts from './lectures/levodopa-and-adjuncts';
import dopamineAgonistsAntimuscarinics from './lectures/dopamine-agonists-antimuscarinics';
// L10 — CNS Neoplasms
import astrocytomaGlioblastoma from './lectures/astrocytoma-glioblastoma';
import otherGliomas from './lectures/other-gliomas';
import pediatricEmbryonalTumors from './lectures/pediatric-embryonal-tumors';
import meningiomaSchwannomaPituitary from './lectures/meningioma-schwannoma-pituitary';
import cnsLymphomaMetastases from './lectures/cns-lymphoma-metastases';
// L11 — Drugs for Ear Disorders
import ototopicalDrugs from './lectures/ototopical-drugs';
import vertigoVestibularDrugs from './lectures/vertigo-vestibular-drugs';
// L12 — Cognition & Consciousness
import cognitiveDomainsDementiaWorkup from './lectures/cognitive-domains-dementia-workup';
import alzheimerAndDementias from './lectures/alzheimer-and-dementias';
import disordersOfConsciousness from './lectures/disorders-of-consciousness';
// L13 — Antimigraine Drugs
import migrainePathophysiologyAcute from './lectures/migraine-pathophysiology-acute';
import migraineProphylaxis from './lectures/migraine-prophylaxis';
// L14 — Sedatives & Hypnotics
import sedativeHypnoticsBenzodiazepines from './lectures/sedative-hypnotics-benzodiazepines';
import barbituratesAndAnxiolytics from './lectures/barbiturates-and-anxiolytics';
// L15 — Opioid Analgesics
import opioidReceptorsMechanism from './lectures/opioid-receptors-mechanism';
import opioidEffectsToxicity from './lectures/opioid-effects-toxicity';
// L16 — Antipsychotics
import antipsychoticsDopamineEps from './lectures/antipsychotics-dopamine-eps';
import atypicalAntipsychoticAgents from './lectures/atypical-antipsychotic-agents';
// L17 — Antidepressants
import antidepressantsSsriSnri from './lectures/antidepressants-ssri-snri';
import tcaMaoiAtypicalAntidepressants from './lectures/tca-maoi-atypical-antidepressants';
import moodStabilizersBipolar from './lectures/mood-stabilizers-bipolar';
// L18 — CNS Infections & Immune Disorders
import bacterialMeningitis from './lectures/bacterial-meningitis';
import subacuteChronicMeningitis from './lectures/subacute-chronic-meningitis';
import encephalitisMyelitis from './lectures/encephalitis-myelitis';
import neurotoxinsFacialPalsy from './lectures/neurotoxins-facial-palsy';

// ── MBH (Molecular Basis of Human Body) ──────────────────────────────────────
// L1 — Amino Acids & Proteins
import aminoAcidsProteinsStructure from './lectures/amino-acids-proteins-structure';
import collagenElastin from './lectures/collagen-elastin';
import hemoglobinMyoglobin from './lectures/hemoglobin-myoglobin';
import proteinMisfoldingAmyloid from './lectures/protein-misfolding-amyloid';
// L2 — Enzymes & Cofactors
import enzymeCatalysisClassification from './lectures/enzyme-catalysis-classification';
import enzymeKinetics from './lectures/enzyme-kinetics';
import enzymeInhibitionRegulation from './lectures/enzyme-inhibition-regulation';
import coenzymesCofactors from './lectures/coenzymes-cofactors';
// L3 — Nucleic Acids
import nucleotidesStructureRoles from './lectures/nucleotides-structure-roles';
import dnaStructureForms from './lectures/dna-structure-forms';
import chromatinPackaging from './lectures/chromatin-packaging';
import rnaTypes from './lectures/rna-types';
// L4 — Nucleotide Metabolism
import purinePyrimidineSynthesis from './lectures/purine-pyrimidine-synthesis';
import nucleotideDegradationGout from './lectures/nucleotide-degradation-gout';
import nucleotideDrugsDisorders from './lectures/nucleotide-drugs-disorders';
// L5 — DNA Replication
import dnaReplicationMachinery from './lectures/dna-replication-machinery';
import eukaryoticReplicationTelomeres from './lectures/eukaryotic-replication-telomeres';
// L6 — DNA Repair & Human Genome
import mutationsDnaDamage from './lectures/mutations-dna-damage';
import dnaRepairMechanisms from './lectures/dna-repair-mechanisms';
import humanGenomeOrganization from './lectures/human-genome-organization';
// L7 — Transcription & RNA Processing
import transcriptionMechanism from './lectures/transcription-mechanism';
import rnaProcessing from './lectures/rna-processing';
// L8 — Translation & Protein Processing
import geneticCodeTranslation from './lectures/genetic-code-translation';
import proteinTargetingPtm from './lectures/protein-targeting-ptm';
// L9 — Control of Gene Expression
import epigeneticsTranscriptionalControl from './lectures/epigenetics-transcriptional-control';
import postTranscriptionalTranslationalControl from './lectures/post-transcriptional-translational-control';
// L10 — Molecular Techniques
import cloningPcrSequencing from './lectures/cloning-pcr-sequencing';
import geneTherapyCrispr from './lectures/gene-therapy-crispr';
// L11 — Carbohydrate Chemistry
import carbohydrateStructureIsomerism from './lectures/carbohydrate-structure-isomerism';
import glycosidicBondsPolysaccharides from './lectures/glycosidic-bonds-polysaccharides';
// L12 — Lipid Chemistry
import fattyAcidsMembranes from './lectures/fatty-acids-membranes';
import cholesterolSteroidsLipoproteins from './lectures/cholesterol-steroids-lipoproteins';

// ── HMS-2 (Human Musculoskeletal System-2) ───────────────────────────────────
// L1 — Diseases of Bone
import boneBiologyRemodeling from './lectures/bone-biology-remodeling';
import developmentalBoneDisorders from './lectures/developmental-bone-disorders';
import metabolicBoneDisease from './lectures/metabolic-bone-disease';
import osteomyelitisAvnPaget from './lectures/osteomyelitis-avn-paget';
// L2 — Diseases of Skeletal Muscle
import neurogenicMuscularDystrophy from './lectures/neurogenic-muscular-dystrophy';
import inflammatoryMyopathies from './lectures/inflammatory-myopathies';
import metabolicToxicNmjMyopathy from './lectures/metabolic-toxic-nmj-myopathy';
// L3 — Diseases of Joint
import jointAnatomySynovialFluid from './lectures/joint-anatomy-synovial-fluid';
import osteoarthritisRheumatoid from './lectures/osteoarthritis-rheumatoid';
import spondyloarthropathiesCrystalArthritis from './lectures/spondyloarthropathies-crystal-arthritis';
// L4 — Autacoids, NSAIDs & Salicylates
import coxPathwayNsaids from './lectures/cox-pathway-nsaids';
import nsaidAcetaminophenSafety from './lectures/nsaid-acetaminophen-safety';
// L5 — Antirheumatic & Gout Drugs
import rheumatoidArthritisDrugs from './lectures/rheumatoid-arthritis-drugs';
import goutDrugs from './lectures/gout-drugs';
// L6 — MSK Rehabilitation & Modalities
import rehabThermotherapyElectrotherapy from './lectures/rehab-thermotherapy-electrotherapy';
import rehabModalitiesSelection from './lectures/rehab-modalities-selection';
// L7 — Drugs & Bone Metabolism
import calciumHomeostasisHormones from './lectures/calcium-homeostasis-hormones';
import osteoporosisDrugs from './lectures/osteoporosis-drugs';
// L8 — Musculoskeletal Tumors
import tumorClassificationGrading from './lectures/tumor-classification-grading';
import softTissueTumors from './lectures/soft-tissue-tumors';
import boneTumors from './lectures/bone-tumors';

// ── HEN-2 (Human Endocrine System-2) ─────────────────────────────────────────
// L1 — Pituitary & Hypothalamus Pathology
import pituitaryAdenomasHyperpituitarism from './lectures/pituitary-adenomas-hyperpituitarism';
import hypopituitarism from './lectures/hypopituitarism';
import posteriorPituitarySyndromes from './lectures/posterior-pituitary-syndromes';
import craniopharyngioma from './lectures/craniopharyngioma';
// L2 — Pituitary & Hypothalamic Drugs
import gnrhGonadotropinDrugs from './lectures/gnrh-gonadotropin-drugs';
import growthHormoneProlactinDrugs from './lectures/growth-hormone-prolactin-drugs';
import posteriorPituitaryDrugs from './lectures/posterior-pituitary-drugs';
// L3 — Adrenal Pathology & MEN
import hyperaldosteronism from './lectures/hyperaldosteronism';
import adrenalCushingPathology from './lectures/adrenal-cushing-pathology';
import adrenalInsufficiency from './lectures/adrenal-insufficiency';
import congenitalAdrenalHyperplasia from './lectures/congenital-adrenal-hyperplasia';
import pheochromocytomaParaganglioma from './lectures/pheochromocytoma-paraganglioma';
import neuroblastoma from './lectures/neuroblastoma';
import multipleEndocrineNeoplasia from './lectures/multiple-endocrine-neoplasia';
// L4 — Cushing Syndrome
import cushingDiagnosisWorkup from './lectures/cushing-diagnosis-workup';
import cushingManagementSteroidWithdrawal from './lectures/cushing-management-steroid-withdrawal';
// L5 — Corticosteroids & Antagonists
import corticosteroidPharmacology from './lectures/corticosteroid-pharmacology';
import corticosteroidAntagonists from './lectures/corticosteroid-antagonists';
// L6 — Thyroid & Parathyroid Pathology
import hyperthyroidismGraves from './lectures/hyperthyroidism-graves';
import hypothyroidismGoiter from './lectures/hypothyroidism-goiter';
import thyroiditis from './lectures/thyroiditis';
import thyroidNeoplasms from './lectures/thyroid-neoplasms';
import hyperparathyroidism from './lectures/hyperparathyroidism';
import hypoparathyroidism from './lectures/hypoparathyroidism';
// L7 — Clinical Pathology in Diabetes Mellitus
import type1DiabetesPathogenesis from './lectures/type1-diabetes-pathogenesis';
import insulinResistanceType2Diabetes from './lectures/insulin-resistance-type2-diabetes';
import diabetesComplicationsOverview from './lectures/diabetes-complications-overview';
// L8 — Drugs Used in Thyroid Diseases
import thyroidHormoneReplacement from './lectures/thyroid-hormone-replacement';
import thioamidesAntithyroidDrugs from './lectures/thioamides-antithyroid-drugs';
import iodideRadioiodineThyrotoxicosis from './lectures/iodide-radioiodine-thyrotoxicosis';
// L9 — Drugs Used in Parathyroid Diseases
import severeHypercalcemiaTherapy from './lectures/severe-hypercalcemia-therapy';
import secondaryHyperparathyroidismCkd from './lectures/secondary-hyperparathyroidism-ckd';
import hypoparathyroidismTreatment from './lectures/hypoparathyroidism-treatment';
// L10 — Investigations in Diabetes Mellitus
import diabetesDiagnosticCriteriaGdm from './lectures/diabetes-diagnostic-criteria-gdm';
import glucoseSpecimensMonitoring from './lectures/glucose-specimens-monitoring';
import hba1cFructosamine from './lectures/hba1c-fructosamine';
import diabetesKetoneAlbuminuriaTests from './lectures/diabetes-ketone-albuminuria-tests';
// L11 — DKA & Thyroid Storm
import dkaHhsRecognition from './lectures/dka-hhs-recognition';
import dkaHhsManagement from './lectures/dka-hhs-management';
import thyroidStormRecognitionManagement from './lectures/thyroid-storm-recognition-management';
// L12 — Drugs Used in Diabetes
import insulinTherapyRegimens from './lectures/insulin-therapy-regimens';
import insulinSecretagogues from './lectures/insulin-secretagogues';
import incretinBasedTherapy from './lectures/incretin-based-therapy';
import metforminThiazolidinediones from './lectures/metformin-thiazolidinediones';
import sglt2AlphaGlucosidaseSelection from './lectures/sglt2-alpha-glucosidase-selection';

export * from './curriculum';

// Registry of all lecture modules, ordered chronologically by lecture (L1 → L21).
// Each module belongs to exactly ONE lecture (its `source`). Add new modules here.
export const lectures: Lecture[] = [
  // L1
  avBlock, atrialFibrillation, atrialFlutter, prematureContractions, ventricularTachycardia, ventricularFibrillation,
  // L2
  stemiLocalization, bundleBranchBlock, escapeRhythmsSinusDysfunction,
  // L3
  vsd, asd, pda, tetralogyOfFallot,
  // L4
  antiarrhythmicDrugs,
  // L5
  atherosclerosis, arteriosclerosisPatterns, aorticAneurysm, aorticDissection,
  // L6
  ihdOverview, myocardialInfarctionPathology, miComplications,
  // L7
  antiplatelets, anticoagulants, fibrinolytics,
  // L8
  aorticStenosis, mitralStenosis, mitralValveProlapse, rheumaticHeartDisease, infectiveEndocarditis, nonbacterialEndocarditis,
  // L9
  acsSpectrum, acsManagement,
  // L10
  cardiomyopathyOverview, dilatedCardiomyopathy, hypertrophicCardiomyopathy, restrictiveCardiomyopathy, arvc, myocarditis,
  // L11
  cardiogenicShock, scaiShockClassification, cardiacArrest,
  // L12
  heartFailureOverview, hfrefSystolic, hfpefDiastolic, rightSidedHf,
  // L13
  antianginalPrinciples, organicNitrates, betaBlockersCcbAngina,
  // L14
  hfPathologyOverview, cardiacHypertrophyRemodeling, hfOrganPathology,
  // L15
  hfPharmacologyPillars, digoxinInotropes, hfOtherDrugs,
  // L16
  htnClassification, htnPathophysiology, hypertensiveTargetOrganDamage,
  // L17
  shockMechanismsTypes, vasopressorsInotropes,
  // L18
  antihypertensiveOverview, htnDiureticsRaas, htnCcbSympatholytics,
  // L19
  vasculitisOverview, largeMediumVasculitis, smallVesselAndVenous,
  // L20
  cardiacTumorsOverview, cardiacMyxoma, rhabdomyomaAndTumors,
  // L21
  pericardialEffusion, cardiacTamponade, pericarditis, constrictiveTuberculousPericarditis,

  // ── HNS-2 ──
  // L1 Clinical Neuroanatomy I
  neuroLocalizationFramework, spinalCordSyndromes, brainstemSyndromes, cortexAndStroke, basalGangliaCerebellum, limbicHypothalamus,
  // L2 Clinical Neuroanatomy II
  extraocularMuscles, gazePathwaysIno, vestibularSystemReflexes, pupillaryReflexesHorner,
  // L3 Common Ear Disorders
  hearingBalanceBasics, externalEarDisorders, middleEarDisorders, innerEarDisorders,
  // L4 Common Eye Disorders
  visualPathwayFields, retinalVascularOcclusions, amdDiabeticRetinopathy, pediatricInfectiveRetina, opticNerveDiscEdema,
  // L5 CNS Trauma & Hemorrhage
  cnsCellularReactions, traumaticBrainSpinalInjury, raisedIcpHerniation, epiduralSubduralHematoma, sahAneurysmAvmIph,
  // L6 Metabolic & Regulatory Disorders
  alteredMentalStatusComa, wernickeKorsakoff, hepaticUremicEncephalopathy, periodicParalysis,
  // L7 CNS Pharmacology & Stimulants
  cnsPharmacologyFoundations, cnsNeurotransmitters, cnsStimulants,
  // L8 Antiepileptic Drugs
  aedsPrinciplesTargets, aedsSodiumChannelBlockers, aedsGabaAndAbsence, aedsBroadSpectrum,
  // L9 Antiparkinson Agents
  levodopaAndAdjuncts, dopamineAgonistsAntimuscarinics,
  // L10 CNS Neoplasms
  astrocytomaGlioblastoma, otherGliomas, pediatricEmbryonalTumors, meningiomaSchwannomaPituitary, cnsLymphomaMetastases,
  // L11 Drugs for Ear Disorders
  ototopicalDrugs, vertigoVestibularDrugs,
  // L12 Cognition & Consciousness
  cognitiveDomainsDementiaWorkup, alzheimerAndDementias, disordersOfConsciousness,
  // L13 Antimigraine Drugs
  migrainePathophysiologyAcute, migraineProphylaxis,
  // L14 Sedatives & Hypnotics
  sedativeHypnoticsBenzodiazepines, barbituratesAndAnxiolytics,
  // L15 Opioid Analgesics
  opioidReceptorsMechanism, opioidEffectsToxicity,
  // L16 Antipsychotics
  antipsychoticsDopamineEps, atypicalAntipsychoticAgents,
  // L17 Antidepressants
  antidepressantsSsriSnri, tcaMaoiAtypicalAntidepressants, moodStabilizersBipolar,
  // L18 CNS Infections & Immune Disorders
  bacterialMeningitis, subacuteChronicMeningitis, encephalitisMyelitis, neurotoxinsFacialPalsy,

  // ── MBH (Molecular Basis of Human Body) ──
  // L1 Amino Acids & Proteins
  aminoAcidsProteinsStructure, collagenElastin, hemoglobinMyoglobin, proteinMisfoldingAmyloid,
  // L2 Enzymes & Cofactors
  enzymeCatalysisClassification, enzymeKinetics, enzymeInhibitionRegulation, coenzymesCofactors,
  // L3 Nucleic Acids
  nucleotidesStructureRoles, dnaStructureForms, chromatinPackaging, rnaTypes,
  // L4 Nucleotide Metabolism
  purinePyrimidineSynthesis, nucleotideDegradationGout, nucleotideDrugsDisorders,
  // L5 DNA Replication
  dnaReplicationMachinery, eukaryoticReplicationTelomeres,
  // L6 DNA Repair & Human Genome
  mutationsDnaDamage, dnaRepairMechanisms, humanGenomeOrganization,
  // L7 Transcription & RNA Processing
  transcriptionMechanism, rnaProcessing,
  // L8 Translation & Protein Processing
  geneticCodeTranslation, proteinTargetingPtm,
  // L9 Control of Gene Expression
  epigeneticsTranscriptionalControl, postTranscriptionalTranslationalControl,
  // L10 Molecular Techniques
  cloningPcrSequencing, geneTherapyCrispr,
  // L11 Carbohydrate Chemistry
  carbohydrateStructureIsomerism, glycosidicBondsPolysaccharides,
  // L12 Lipid Chemistry
  fattyAcidsMembranes, cholesterolSteroidsLipoproteins,

  // ── HMS-2 (Human Musculoskeletal System-2) ──
  // L1 Diseases of Bone
  boneBiologyRemodeling, developmentalBoneDisorders, metabolicBoneDisease, osteomyelitisAvnPaget,
  // L2 Diseases of Skeletal Muscle
  neurogenicMuscularDystrophy, inflammatoryMyopathies, metabolicToxicNmjMyopathy,
  // L3 Diseases of Joint
  jointAnatomySynovialFluid, osteoarthritisRheumatoid, spondyloarthropathiesCrystalArthritis,
  // L4 Autacoids, NSAIDs & Salicylates
  coxPathwayNsaids, nsaidAcetaminophenSafety,
  // L5 Antirheumatic & Gout Drugs
  rheumatoidArthritisDrugs, goutDrugs,
  // L6 MSK Rehabilitation & Modalities
  rehabThermotherapyElectrotherapy, rehabModalitiesSelection,
  // L7 Drugs & Bone Metabolism
  calciumHomeostasisHormones, osteoporosisDrugs,
  // L8 Musculoskeletal Tumors
  tumorClassificationGrading, softTissueTumors, boneTumors,

  // ── HEN-2 (Human Endocrine System-2) ──
  // L1 Pituitary & Hypothalamus Pathology
  pituitaryAdenomasHyperpituitarism, hypopituitarism, posteriorPituitarySyndromes, craniopharyngioma,
  // L2 Pituitary & Hypothalamic Drugs
  gnrhGonadotropinDrugs, growthHormoneProlactinDrugs, posteriorPituitaryDrugs,
  // L3 Adrenal Pathology & MEN
  hyperaldosteronism, adrenalCushingPathology, adrenalInsufficiency, congenitalAdrenalHyperplasia,
  pheochromocytomaParaganglioma, neuroblastoma, multipleEndocrineNeoplasia,
  // L4 Cushing Syndrome
  cushingDiagnosisWorkup, cushingManagementSteroidWithdrawal,
  // L5 Corticosteroids & Antagonists
  corticosteroidPharmacology, corticosteroidAntagonists,
  // L6 Thyroid & Parathyroid Pathology
  hyperthyroidismGraves, hypothyroidismGoiter, thyroiditis, thyroidNeoplasms,
  hyperparathyroidism, hypoparathyroidism,
  // L7 Clinical Pathology in Diabetes Mellitus
  type1DiabetesPathogenesis, insulinResistanceType2Diabetes, diabetesComplicationsOverview,
  // L8 Drugs Used in Thyroid Diseases
  thyroidHormoneReplacement, thioamidesAntithyroidDrugs, iodideRadioiodineThyrotoxicosis,
  // L9 Drugs Used in Parathyroid Diseases
  severeHypercalcemiaTherapy, secondaryHyperparathyroidismCkd, hypoparathyroidismTreatment,
  // L10 Investigations in Diabetes Mellitus
  diabetesDiagnosticCriteriaGdm, glucoseSpecimensMonitoring, hba1cFructosamine, diabetesKetoneAlbuminuriaTests,
  // L11 DKA & Thyroid Storm
  dkaHhsRecognition, dkaHhsManagement, thyroidStormRecognitionManagement,
  // L12 Drugs Used in Diabetes
  insulinTherapyRegimens, insulinSecretagogues, incretinBasedTherapy,
  metforminThiazolidinediones, sglt2AlphaGlucosidaseSelection,
];

export const lectureById: Record<string, Lecture> = Object.fromEntries(
  lectures.map((l) => [l.id, l]),
);

// Group by source lecture for the catalog.
export const lecturesBySource = lectures.reduce<Record<string, Lecture[]>>((acc, l) => {
  (acc[l.source] ??= []).push(l);
  return acc;
}, {});

// Group by subject (block) for the curriculum browser.
export const lecturesBySubject = lectures.reduce<Record<string, Lecture[]>>((acc, l) => {
  const code = subjectOfSource[l.source];
  if (code) (acc[code] ??= []).push(l);
  return acc;
}, {});

// Consolidated "whole lecture" sets — every module of one lecture on a single page.
// Slugs are namespaced by subject so lecture numbers can restart per block
// (HCVS-2 L1 → `hcvs-2-l1`, HNS-2 L1 → `hns-2-l1`) without colliding.
export function lectureSetSlug(source: string): string {
  const m = source.match(/^L(\d+)/i);
  const base = m ? `l${m[1]}` : source.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const code = subjectOfSource[source];
  return code ? `${subjectSlug(code)}-${base}` : base;
}

export interface LectureSet {
  slug: string;
  source: string;
  items: Lecture[];
}

// Numeric sort so L10–L19 follow L9 (not L1).
export const lectureSets: LectureSet[] = Object.entries(lecturesBySource)
  .map(([source, items]) => ({ slug: lectureSetSlug(source), source, items }))
  .sort((a, b) => a.source.localeCompare(b.source, undefined, { numeric: true }));

export const lectureSetBySlug: Record<string, LectureSet> = Object.fromEntries(
  lectureSets.map((s) => [s.slug, s]),
);
