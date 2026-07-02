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

// ── HGD (Human Genetics and Developmental Biology) ───────────────────────────
// L1 — Genes & Embryonic Development
import developmentalAnatomyPeriodsTerms from './lectures/developmental-anatomy-periods-terms';
import developmentalGeneticRegulation from './lectures/developmental-genetic-regulation';
import gametogenesisFemaleTract from './lectures/gametogenesis-female-tract';
// L2 — Pre-embryonic Development
import capacitationFertilization from './lectures/capacitation-fertilization';
import cleavageBlastocystImplantation from './lectures/cleavage-blastocyst-implantation';
import bilaminarDiscWeekTwo from './lectures/bilaminar-disc-week-two';
import preembryonicClinicalApplications from './lectures/preembryonic-clinical-applications';
// L3 — Third Week & Germ Layer Derivatives
import gastrulationBodyAxis from './lectures/gastrulation-body-axis';
import notochordNeurulationNeuralCrest from './lectures/notochord-neurulation-neural-crest';
import germLayerDerivativesFolding from './lectures/germ-layer-derivatives-folding';
import gastrulationClinicalStemCells from './lectures/gastrulation-clinical-stem-cells';
// L4 — Congenital Anomalies & Teratology
import congenitalAnomalyClassification from './lectures/congenital-anomaly-classification';
import teratogenesisCriticalPeriods from './lectures/teratogenesis-critical-periods';
// L5 — Placenta & Extraembryonic Membranes
import placentaDevelopmentCirculation from './lectures/placenta-development-circulation';
import extraembryonicMembranesCord from './lectures/extraembryonic-membranes-cord';
import placentaClinicalAbnormalities from './lectures/placenta-clinical-abnormalities';
// L6 — Cell Cycle & Human Chromosomes
import chromosomeStructureChromatin from './lectures/chromosome-structure-chromatin';
import mitosisCellCycleCheckpoints from './lectures/mitosis-cell-cycle-checkpoints';
import meiosisRecombination from './lectures/meiosis-recombination';
import karyotypeChromosomeAnalysis from './lectures/karyotype-chromosome-analysis';
// L7 — Chromosome Aberrations
import numericalChromosomeAbnormalities from './lectures/numerical-chromosome-abnormalities';
import chromosomeCopyStructureAbnormalities from './lectures/chromosome-copy-structure-abnormalities';
// L8 — Cytogenetic Nomenclature
import cytogeneticNomenclatureBasics from './lectures/cytogenetic-nomenclature-basics';
import structuralRearrangementNomenclature from './lectures/structural-rearrangement-nomenclature';
// L9 — Autosomal Chromosome Syndromes
import autosomalTrisomies from './lectures/autosomal-trisomies';
import autosomalDeletionSyndromes from './lectures/autosomal-deletion-syndromes';
import microdeletionImprintingSyndromes from './lectures/microdeletion-imprinting-syndromes';
// L10 — Sex Chromosome Abnormalities
import xInactivationSexDetermination from './lectures/x-inactivation-sex-determination';
import sexChromosomeAneuploidies from './lectures/sex-chromosome-aneuploidies';
import dsdFragileX from './lectures/dsd-fragile-x';
// L11 — Mendelian, Multifactorial & Population Genetics
import mendelianInheritancePatterns from './lectures/mendelian-inheritance-patterns';
import inheritanceModifiers from './lectures/inheritance-modifiers';
import multifactorialPopulationGenetics from './lectures/multifactorial-population-genetics';
// L12 — Prenatal Diagnosis
import prenatalScreeningDiagnosis from './lectures/prenatal-screening-diagnosis';
import thalassemiaPreventionScreening from './lectures/thalassemia-prevention-screening';
import translocationsInversions from './lectures/translocations-inversions';
import mosaicismChimerism from './lectures/mosaicism-chimerism';

// ── MFN (Metabolism of Fuel Nutrients in Human) ─────────────────────────────
// L1 — Nutrients, Digestion & Absorption
import {
  fuelNutrientsEnergyBalance,
  carbohydrateDigestionAbsorption,
  proteinDigestionAminoAcidAbsorption,
  lipidDigestionChylomicrons,
  malabsorptionPatterns,
} from './lectures/mfn-nutrients-digestion';
// L2 — Bioenergetics
import {
  freeEnergyAtpCoupling,
  pdhTcaCycle,
  electronTransportOxphos,
  etcInhibitorsUncouplingShuttles,
  tcaAmphibolicAnaplerosis,
} from './lectures/mfn-bioenergetics';
// L3 — Carbohydrate Metabolism
import {
  glucoseTransportGlycolysis,
  pentoseFructoseGalactose,
  glycogenSynthesisBreakdown,
  gluconeogenesisCoriAlanine,
  bloodGlucoseHomeostasis,
} from './lectures/mfn-carbohydrates';
// L4 — Amino Acid Metabolism (including one-carbon-carrier SDL)
import {
  aminoNitrogenHandling,
  ureaCycleHyperammonemia,
  aminoCarbonSkeletonDisorders,
  oneCarbonCarriers,
  aminoAcidDerivedProducts,
} from './lectures/mfn-amino-acids';
// L5 — Lipid Metabolism (including cholesterol and lipoprotein SDLs)
import {
  tagStorageMobilization,
  fattyAcidSynthesisEicosanoids,
  betaOxidationCarnitine,
  ketoneBodyMetabolism,
  cholesterolBileSteroids,
  lipoproteinsAtherogenesis,
  alternativeFattyAcidOxidation,
} from './lectures/mfn-lipids';
// L6 — Integrative Metabolism
import {
  organSpecificFuelMetabolism,
  fedFastingStarvation,
  exerciseStressFuelIntegration,
  metabolicJunctionPoints,
} from './lectures/mfn-integration';

// ── ABM (Applied Biochemistry in Medicine) ──────────────────────────────────
// Cases 1–3 — liver injury, cholestasis & ammonia
import {
  acetaminophenOverdosePattern,
  napqiGlutathioneNac,
  cholestaticLabPattern,
  cholangitisBileVitaminLoss,
  alcoholAldh2Cirrhosis,
  hepaticEncephalopathyAmmonia,
} from './lectures/abm-cases-01-03';
// Cases 4–6 — carbohydrate redox & inborn errors
import {
  g6pdOxidativeHemolysis,
  hemolysisWorkupTriggers,
  galactokinaseCataracts,
  galactosemiaDifferentialDiet,
  aldolaseBPhosphateTrap,
  hfiMetabolicComplications,
} from './lectures/abm-cases-04-06';
// Cases 7–9 — lipid transport & oxidation disorders
import {
  familialChylomicronemiaLpl,
  fcsPancreatitisMct,
  homozygousFamilialHypercholesterolemia,
  ldlRetentionXanthomas,
  mcadHypoketoticHypoglycemia,
  mcadDiagnosisPrevention,
} from './lectures/abm-cases-07-09';
// Cases 10–12 — insulin resistance & fuel-state adaptation
import {
  prediabetesOgtthba1c,
  obesityInsulinResistance,
  alcoholicKetoacidosisRedox,
  thiamineWernickeRecovery,
  nutritionalKetosisVsKetoacidosis,
  ketogenicFastingExerciseAdaptation,
} from './lectures/abm-cases-10-12';
// Cases 13–15 — molecular oncology
import {
  brca1TnbcHomologousRepair,
  parpSyntheticLethality,
  egfrMutantLungAdenocarcinoma,
  osimertinibResistance,
  colonCancerEpigeneticSilencing,
  colonMolecularWorkupTherapy,
} from './lectures/abm-cases-13-15';

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

// ── HGA (Human Gross Anatomy) · Part 1: Upper Limb & Back ─────────────────────
// L1 — Pectoral Girdle, Superficial Back & Axilla
import pectoralGirdleBones from './lectures/pectoral-girdle-bones';
import superficialBackPectoralMuscles from './lectures/superficial-back-pectoral-muscles';
import axillaBrachialPlexus from './lectures/axilla-brachial-plexus';
// L2 — Humerus, Shoulder Region & Cubital Fossa
import shoulderRegionRotatorCuff from './lectures/shoulder-region-rotator-cuff';
import armCompartmentsHumerusFractures from './lectures/arm-compartments-humerus-fractures';
import cubitalFossa from './lectures/cubital-fossa';
// L3 — Forearm, Wrist Bones & Dorsum of Hand
import radiusUlnaCarpalsFractures from './lectures/radius-ulna-carpals-fractures';
import forearmFlexorCompartment from './lectures/forearm-flexor-compartment';
import forearmExtensorCompartmentSnuffbox from './lectures/forearm-extensor-compartment-snuffbox';
// L4 — Palm of Hand & Joints of Upper Limb
import palmIntrinsicMuscles from './lectures/palm-intrinsic-muscles';
import handNerveLesions from './lectures/hand-nerve-lesions';
import upperLimbJoints from './lectures/upper-limb-joints';
// L5 — Deep Back & Joints of Vertebral Column
import intrinsicBackMusclesSuboccipital from './lectures/intrinsic-back-muscles-suboccipital';
import vertebralColumnJointsDiscs from './lectures/vertebral-column-joints-discs';

// ── HGA Part 2: Head, Neck & Thorax ──────────────────────────────────────────
// L6 — Face, Scalp, Parotid & Temporal Regions
import faceMusclesInnervation from './lectures/face-muscles-innervation';
import scalpLayers from './lectures/scalp-layers';
import parotidTemporalRegions from './lectures/parotid-temporal-regions';
// L7 — Triangles & Root of the Neck
import neckTrianglesFascia from './lectures/neck-triangles-fascia';
import anteriorTriangleCarotid from './lectures/anterior-triangle-carotid';
import thyroidRootOfNeck from './lectures/thyroid-root-of-neck';
// L8 — Thorax, Pleura, Trachea & Lungs
import thoracicWallIntercostalSpace from './lectures/thoracic-wall-intercostal-space';
import pleuraPleuralCavity from './lectures/pleura-pleural-cavity';
import tracheaBronchiLungs from './lectures/trachea-bronchi-lungs';
// L9 — Mediastinum & Heart
import mediastinumDivisionsContents from './lectures/mediastinum-divisions-contents';
import greatVesselsMediastinalNerves from './lectures/great-vessels-mediastinal-nerves';
import heartChambersPericardium from './lectures/heart-chambers-pericardium';
import heartValvesCoronarySupply from './lectures/heart-valves-coronary-supply';

// ── HGA Part 3: Skull & Deep Head Regions ────────────────────────────────────
// L10 — Infratemporal & Pterygopalatine Fossae
import tmjMusclesMastication from './lectures/tmj-muscles-mastication';
import infratemporalFossaNervesVessels from './lectures/infratemporal-fossa-nerves-vessels';
import pterygopalatineFossa from './lectures/pterygopalatine-fossa';
// L11 — Skull & Cranial Fossae
import skullBonesSutures from './lectures/skull-bones-sutures';
import cranialFossaeForamina from './lectures/cranial-fossae-foramina';
import meningesDuralSinuses from './lectures/meninges-dural-sinuses';
// L12 — Orbit, Eye & Ear
import orbitLacrimalApparatus from './lectures/orbit-lacrimal-apparatus';
import extraocularMusclesOrbitalNerves from './lectures/extraocular-muscles-orbital-nerves';
import earExternalMiddleInternal from './lectures/ear-external-middle-internal';
// L13 — Nasal Cavity & Paranasal Sinuses
import nasalCavityWallsMeatuses from './lectures/nasal-cavity-walls-meatuses';
import nasalBloodSupplyEpistaxis from './lectures/nasal-blood-supply-epistaxis';
import paranasalSinuses from './lectures/paranasal-sinuses';
// L14 — Pharynx & Larynx
import pharynxConstrictorsTonsils from './lectures/pharynx-constrictors-tonsils';
import larynxCartilagesCavity from './lectures/larynx-cartilages-cavity';
import laryngealMusclesNerves from './lectures/laryngeal-muscles-nerves';

// ── HGA Part 4: Oral Cavity & Abdomen ────────────────────────────────────────
// L15 — Mouth & Oral Cavity
import oralCavityLipsTeeth from './lectures/oral-cavity-lips-teeth';
import palateTongue from './lectures/palate-tongue';
import salivaryGlandsOralClinical from './lectures/salivary-glands-oral-clinical';
// L16 — Anterior Abdominal Wall & Stomach
import abdominalWallRectusSheath from './lectures/abdominal-wall-rectus-sheath';
import inguinalCanalHernias from './lectures/inguinal-canal-hernias';
import peritoneumStomach from './lectures/peritoneum-stomach';
// L17 — Posterior Abdominal Wall & Urinary System
import posteriorAbdominalWallDiaphragm from './lectures/posterior-abdominal-wall-diaphragm';
import lumbarPlexus from './lectures/lumbar-plexus';
import kidneyUreterAnatomy from './lectures/kidney-ureter-anatomy';
import bladderUrethra from './lectures/bladder-urethra';
// L18 — Intestines, Liver & Biliary System
import smallLargeIntestine from './lectures/small-large-intestine';
import liverBiliaryPancreas from './lectures/liver-biliary-pancreas';
import giBloodSupplyPortalSystem from './lectures/gi-blood-supply-portal-system';

// ── HGA Part 5: Lower Limb ────────────────────────────────────────────────────
// L19 — Lower Limb Bones & Anterior/Medial Thigh
import lowerLimbBonesHipJoint from './lectures/lower-limb-bones-hip-joint';
import femoralTriangleAnteriorThigh from './lectures/femoral-triangle-anterior-thigh';
import medialThighAdductors from './lectures/medial-thigh-adductors';
// L20 — Gluteal Region, Posterior Thigh & Popliteal Fossa
import glutealRegionNerves from './lectures/gluteal-region-nerves';
import posteriorThighSciatic from './lectures/posterior-thigh-sciatic';
import poplitealFossa from './lectures/popliteal-fossa';
// L21 — Leg & Foot
import legCompartments from './lectures/leg-compartments';
import ankleFootBonesArches from './lectures/ankle-foot-bones-arches';
import soleOfFoot from './lectures/sole-of-foot';

// ── BMR (Intro to Biomedical Research) ──
import historyAncientToRenaissance from './lectures/history-ancient-to-renaissance';
import historyGermTheoryModernMedicine from './lectures/history-germ-theory-modern-medicine';
import researchQuestionFinerPico from './lectures/research-question-finer-pico';
import hypothesisObjectives from './lectures/hypothesis-objectives';
import literatureReviewPurposeSearch from './lectures/literature-review-purpose-search';
import citationSynthesisConceptualFramework from './lectures/citation-synthesis-conceptual-framework';
import studyDesignsHierarchy from './lectures/study-designs-hierarchy';
import samplingMethods from './lectures/sampling-methods';
import variablesConfoundingBias from './lectures/variables-confounding-bias';
import outbreakInvestigation from './lectures/outbreak-investigation';
import dataTypesDescriptiveStats from './lectures/data-types-descriptive-stats';
import inferentialStatsPValue from './lectures/inferential-stats-p-value';
import researchEthicsHistoryBelmont from './lectures/research-ethics-history-belmont';
import informedConsentIrb from './lectures/informed-consent-irb';
import publicationTypesImrad from './lectures/publication-types-imrad';
import peerReviewJournalMetrics from './lectures/peer-review-journal-metrics';
import academicAuthorship from './lectures/academic-authorship';

// ── HIM (Human Immunology) ──
import immuneSystemOverviewCells from './lectures/immune-system-overview-cells';
import lymphoidOrgans from './lectures/lymphoid-organs';
import innateBarriersPrr from './lectures/innate-barriers-prr';
import innateNkInterferon from './lectures/innate-nk-interferon';
import antibodyStructure from './lectures/antibody-structure';
import antibodyClassesFunctions from './lectures/antibody-classes-functions';
import complementPathways from './lectures/complement-pathways';
import complementFunctionsRegulation from './lectures/complement-functions-regulation';
import tCellActivation from './lectures/t-cell-activation';
import cd4HelperSubsets from './lectures/cd4-helper-subsets';
import cd8CtlNkEffectors from './lectures/cd8-ctl-nk-effectors';
import mhcStructureGenetics from './lectures/mhc-structure-genetics';
import antigenProcessingPresentation from './lectures/antigen-processing-presentation';
import bCellDevelopmentTolerance from './lectures/b-cell-development-tolerance';
import tCellDevelopmentThymicSelection from './lectures/t-cell-development-thymic-selection';
import primaryImmunodeficiencyAntibodyT from './lectures/primary-immunodeficiency-antibody-t';
import primaryImmunodeficiencyPhagocyteComplement from './lectures/primary-immunodeficiency-phagocyte-complement';
import secondaryImmunodeficiencyHiv from './lectures/secondary-immunodeficiency-hiv';
// HIM L9–L17
import humoralResponseBActivation from './lectures/humoral-response-b-activation';
import germinalCenterAntibodyResponse from './lectures/germinal-center-antibody-response';
import immunityBacteriaExtracellularIntracellular from './lectures/immunity-bacteria-extracellular-intracellular';
import immunityVirusesFungiParasites from './lectures/immunity-viruses-fungi-parasites';
import mucosalImmuneSystem from './lectures/mucosal-immune-system';
import oralToleranceMicrobiota from './lectures/oral-tolerance-microbiota';
import toleranceAutoimmunityMechanisms from './lectures/tolerance-autoimmunity-mechanisms';
import autoimmuneDiseaseExamples from './lectures/autoimmune-disease-examples';
import hypersensitivityType12 from './lectures/hypersensitivity-type-1-2';
import hypersensitivityType34 from './lectures/hypersensitivity-type-3-4';
import antigenAntibodyPrinciples from './lectures/antigen-antibody-principles';
import immunoassaysTechniques from './lectures/immunoassays-techniques';
import transplantAllorecognitionRejection from './lectures/transplant-allorecognition-rejection';
import transplantMatchingImmunosuppression from './lectures/transplant-matching-immunosuppression';
import tumorAntigensImmunosurveillance from './lectures/tumor-antigens-immunosurveillance';
import tumorEvasionImmunotherapy from './lectures/tumor-evasion-immunotherapy';
import vaccinesImmunization from './lectures/vaccines-immunization';
import immunotherapyModulation from './lectures/immunotherapy-modulation';

// ── EHP (Essential Human Physiology) ──
import diffusionOsmosisBasics from './lectures/diffusion-osmosis-basics';
import osmolarityTonicityCellVolume from './lectures/osmolarity-tonicity-cell-volume';
import homeostasisFeedbackControl from './lectures/homeostasis-feedback-control';
import bodyFluidCompartments from './lectures/body-fluid-compartments';
import membraneTransportPassive from './lectures/membrane-transport-passive';
import membraneTransportActiveVesicular from './lectures/membrane-transport-active-vesicular';
import actionPotentialGenesis from './lectures/action-potential-genesis';
import actionPotentialPropagationRefractory from './lectures/action-potential-propagation-refractory';
import restingMembranePotentialNernst from './lectures/resting-membrane-potential-nernst';
import goldmanRmpRegulation from './lectures/goldman-rmp-regulation';
import neurotransmittersTypesLifecycle from './lectures/neurotransmitters-types-lifecycle';
import synapticTransmissionEpspIpsp from './lectures/synaptic-transmission-epsp-ipsp';
import cellSignalingModesReceptors from './lectures/cell-signaling-modes-receptors';
import secondMessengerSystems from './lectures/second-messenger-systems';
import synapticPlasticityLtp from './lectures/synaptic-plasticity-ltp';
import autonomicSympatheticParasympathetic from './lectures/autonomic-sympathetic-parasympathetic';
import autonomicNeurotransmittersReceptors from './lectures/autonomic-neurotransmitters-receptors';
import reflexArcStretchWithdrawal from './lectures/reflex-arc-stretch-withdrawal';
import apoptosisNecrosis from './lectures/apoptosis-necrosis';
import cellularAgingTheories from './lectures/cellular-aging-theories';

// ── HMS-1 (Human Musculoskeletal System-1) ──
import mskEmbryoSomites from './lectures/msk-embryo-somites';
import mskEmbryoLimbJoints from './lectures/msk-embryo-limb-joints';
import nmjStructureTransmission from './lectures/nmj-structure-transmission';
import nmjDrugsDisorders from './lectures/nmj-drugs-disorders';
import muscleContractionCrossbridge from './lectures/muscle-contraction-crossbridge';
import excitationContractionCoupling from './lectures/excitation-contraction-coupling';
import muscleTwitchTetanusMechanics from './lectures/muscle-twitch-tetanus-mechanics';
import motorUnitRecruitment from './lectures/motor-unit-recruitment';
import muscleEnergySystems from './lectures/muscle-energy-systems';
import muscleFiberTypesFatigue from './lectures/muscle-fiber-types-fatigue';
import fractureClassification from './lectures/fracture-classification';
import fractureHealing from './lectures/fracture-healing';

// ── HRS-1 (Human Respiratory System-1) ──
import respiratoryDevelopmentStages from './lectures/respiratory-development-stages';
import respiratoryCongenitalAnomalies from './lectures/respiratory-congenital-anomalies';
import airwayConductingRespiratoryZones from './lectures/airway-conducting-respiratory-zones';
import alveoliPneumocytesRespiratoryMembrane from './lectures/alveoli-pneumocytes-respiratory-membrane';
import pulmonaryCirculationFeatures from './lectures/pulmonary-circulation-features';
import ventilationPerfusionMatching from './lectures/ventilation-perfusion-matching';
import lungVolumesVentilation from './lectures/lung-volumes-ventilation';
import respiratoryMechanicsCompliance from './lectures/respiratory-mechanics-compliance';
import gasExchangeDiffusion from './lectures/gas-exchange-diffusion';
import oxygenTransportDissociationCurve from './lectures/oxygen-transport-dissociation-curve';
import co2TransportBlood from './lectures/co2-transport-blood';
import controlOfBreathing from './lectures/control-of-breathing';
import abgAcidBaseInterpretation from './lectures/abg-acid-base-interpretation';

// ── HCVS-1 (Human Cardiovascular System-1) ──
import heartAnatomyChambersValves from './lectures/heart-anatomy-chambers-valves';
import systemicPulmonaryCirculation from './lectures/systemic-pulmonary-circulation';
import heartWallCardiacHistology from './lectures/heart-wall-cardiac-histology';
import bloodVesselHistology from './lectures/blood-vessel-histology';
import heartTubeLoopingSeptation from './lectures/heart-tube-looping-septation';
import fetalCirculationShunts from './lectures/fetal-circulation-shunts';
import cardiacActionPotential from './lectures/cardiac-action-potential';
import pacemakerConductionSystem from './lectures/pacemaker-conduction-system';
import ecgFormationWaves from './lectures/ecg-formation-waves';
import ecgLeadsAxis from './lectures/ecg-leads-axis';
import bloodPressureBaroreceptorReflex from './lectures/blood-pressure-baroreceptor-reflex';
import longTermBpRaas from './lectures/long-term-bp-raas';
import ecgSystematicInterpretation from './lectures/ecg-systematic-interpretation';
import echocardiographyBasics from './lectures/echocardiography-basics';
import chestXrayCardiac from './lectures/chest-xray-cardiac';
import cardiacCycleHeartSounds from './lectures/cardiac-cycle-heart-sounds';
import hemodynamicsPreloadAfterloadCardiacOutput from './lectures/hemodynamics-preload-afterload-cardiac-output';
import cardiacBiomarkersAcs from './lectures/cardiac-biomarkers-acs';
import bloodPressureMeasurementAbpm from './lectures/blood-pressure-measurement-abpm';
import cardiovascularExamination from './lectures/cardiovascular-examination';

// ── BHCB (Basic Histology and Cell Biology) ──
import histologyMethodsStaining from './lectures/histology-methods-staining';
import plasmaMembraneTransport from './lectures/plasma-membrane-transport';
import cytoplasmicOrganelles from './lectures/cytoplasmic-organelles';
import nucleusChromatinNucleolus from './lectures/nucleus-chromatin-nucleolus';
import actinMicrofilaments from './lectures/actin-microfilaments';
import microtubulesMotorsCentrosome from './lectures/microtubules-motors-centrosome';
import intermediateFilaments from './lectures/intermediate-filaments';
import epithelialClassification from './lectures/epithelial-classification';
import epithelialSurfaceBasementMembrane from './lectures/epithelial-surface-basement-membrane';
import cellJunctions from './lectures/cell-junctions';
import glandsExocrineEndocrine from './lectures/glands-exocrine-endocrine';
import connectiveTissueCells from './lectures/connective-tissue-cells';
import connectiveTissueFibersTypes from './lectures/connective-tissue-fibers-types';
import membranesAndEpidermis from './lectures/membranes-and-epidermis';
import dermisSensorySkinAppendages from './lectures/dermis-sensory-skin-appendages';
import cartilageTypes from './lectures/cartilage-types';
import boneTissueCellsOsteon from './lectures/bone-tissue-cells-osteon';
import ossification from './lectures/ossification';
import skeletalMuscleSarcomere from './lectures/skeletal-muscle-sarcomere';
import cardiacSmoothMuscle from './lectures/cardiac-smooth-muscle';
import neuronStructureTypes from './lectures/neuron-structure-types';
import neurogliaCnsPns from './lectures/neuroglia-cns-pns';
import nerveFiberMyelinSynapse from './lectures/nerve-fiber-myelin-synapse';
import ecmFibersGroundSubstance from './lectures/ecm-fibers-ground-substance';
import ecmAdhesionIntegrinsClinical from './lectures/ecm-adhesion-integrins-clinical';
import subcellularPathologyAlterations from './lectures/subcellular-pathology-alterations';
import intermediateFilamentsClinical from './lectures/intermediate-filaments-clinical';

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

  // ── HGD (Human Genetics and Developmental Biology) ──
  // L1 Genes & Embryonic Development
  developmentalAnatomyPeriodsTerms, developmentalGeneticRegulation, gametogenesisFemaleTract,
  // L2 Pre-embryonic Development
  capacitationFertilization, cleavageBlastocystImplantation,
  bilaminarDiscWeekTwo, preembryonicClinicalApplications,
  // L3 Third Week & Germ Layer Derivatives
  gastrulationBodyAxis, notochordNeurulationNeuralCrest,
  germLayerDerivativesFolding, gastrulationClinicalStemCells,
  // L4 Congenital Anomalies & Teratology
  congenitalAnomalyClassification, teratogenesisCriticalPeriods,
  // L5 Placenta & Extraembryonic Membranes
  placentaDevelopmentCirculation, extraembryonicMembranesCord, placentaClinicalAbnormalities,
  // L6 Cell Cycle & Human Chromosomes
  chromosomeStructureChromatin, mitosisCellCycleCheckpoints,
  meiosisRecombination, karyotypeChromosomeAnalysis,
  // L7 Chromosome Aberrations
  numericalChromosomeAbnormalities, chromosomeCopyStructureAbnormalities,
  translocationsInversions, mosaicismChimerism,
  // L8 Cytogenetic Nomenclature
  cytogeneticNomenclatureBasics, structuralRearrangementNomenclature,
  // L9 Autosomal Chromosome Syndromes
  autosomalTrisomies, autosomalDeletionSyndromes, microdeletionImprintingSyndromes,
  // L10 Sex Chromosome Abnormalities
  xInactivationSexDetermination, sexChromosomeAneuploidies, dsdFragileX,
  // L11 Mendelian, Multifactorial & Population Genetics
  mendelianInheritancePatterns, inheritanceModifiers, multifactorialPopulationGenetics,
  // L12 Prenatal Diagnosis
  prenatalScreeningDiagnosis, thalassemiaPreventionScreening,

  // ── MFN (Metabolism of Fuel Nutrients in Human) ──
  // L1 Nutrients, Digestion & Absorption
  fuelNutrientsEnergyBalance, carbohydrateDigestionAbsorption,
  proteinDigestionAminoAcidAbsorption, lipidDigestionChylomicrons, malabsorptionPatterns,
  // L2 Bioenergetics
  freeEnergyAtpCoupling, pdhTcaCycle, electronTransportOxphos,
  etcInhibitorsUncouplingShuttles, tcaAmphibolicAnaplerosis,
  // L3 Carbohydrate Metabolism
  glucoseTransportGlycolysis, pentoseFructoseGalactose,
  glycogenSynthesisBreakdown, gluconeogenesisCoriAlanine, bloodGlucoseHomeostasis,
  // L4 Amino Acid Metabolism
  aminoNitrogenHandling, ureaCycleHyperammonemia,
  aminoCarbonSkeletonDisorders, oneCarbonCarriers, aminoAcidDerivedProducts,
  // L5 Lipid Metabolism
  tagStorageMobilization, fattyAcidSynthesisEicosanoids,
  betaOxidationCarnitine, ketoneBodyMetabolism,
  cholesterolBileSteroids, lipoproteinsAtherogenesis, alternativeFattyAcidOxidation,
  // L6 Integrative Metabolism
  organSpecificFuelMetabolism, fedFastingStarvation,
  exerciseStressFuelIntegration, metabolicJunctionPoints,

  // ── ABM (Applied Biochemistry in Medicine) ──
  // Case 1 Acetaminophen Hepatotoxicity
  acetaminophenOverdosePattern, napqiGlutathioneNac,
  // Case 2 Cholangitis & Obstructive Jaundice
  cholestaticLabPattern, cholangitisBileVitaminLoss,
  // Case 3 ALDH2 Deficiency & Hepatic Encephalopathy
  alcoholAldh2Cirrhosis, hepaticEncephalopathyAmmonia,
  // Case 4 G6PD Deficiency & Hemolysis
  g6pdOxidativeHemolysis, hemolysisWorkupTriggers,
  // Case 5 Galactokinase Deficiency
  galactokinaseCataracts, galactosemiaDifferentialDiet,
  // Case 6 Hereditary Fructose Intolerance
  aldolaseBPhosphateTrap, hfiMetabolicComplications,
  // Case 7 Familial Chylomicronemia Syndrome
  familialChylomicronemiaLpl, fcsPancreatitisMct,
  // Case 8 Familial Hypercholesterolemia
  homozygousFamilialHypercholesterolemia, ldlRetentionXanthomas,
  // Case 9 MCAD Deficiency
  mcadHypoketoticHypoglycemia, mcadDiagnosisPrevention,
  // Case 10 Obesity & Prediabetes
  prediabetesOgtthba1c, obesityInsulinResistance,
  // Case 11 Alcoholic Ketoacidosis
  alcoholicKetoacidosisRedox, thiamineWernickeRecovery,
  // Case 12 Ketogenic Diet & Intermittent Fasting
  nutritionalKetosisVsKetoacidosis, ketogenicFastingExerciseAdaptation,
  // Case 13 BRCA1-Mutant Triple-Negative Breast Cancer
  brca1TnbcHomologousRepair, parpSyntheticLethality,
  // Case 14 EGFR-Mutant Non-Small Cell Lung Cancer
  egfrMutantLungAdenocarcinoma, osimertinibResistance,
  // Case 15 Epigenetics & Colon Cancer
  colonCancerEpigeneticSilencing, colonMolecularWorkupTherapy,

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

  // ── HGA (Human Gross Anatomy) · Part 1: Upper Limb & Back ──
  // L1 Pectoral Girdle, Superficial Back & Axilla
  pectoralGirdleBones, superficialBackPectoralMuscles, axillaBrachialPlexus,
  // L2 Humerus, Shoulder Region & Cubital Fossa
  shoulderRegionRotatorCuff, armCompartmentsHumerusFractures, cubitalFossa,
  // L3 Forearm, Wrist Bones & Dorsum of Hand
  radiusUlnaCarpalsFractures, forearmFlexorCompartment, forearmExtensorCompartmentSnuffbox,
  // L4 Palm of Hand & Joints of Upper Limb
  palmIntrinsicMuscles, handNerveLesions, upperLimbJoints,
  // L5 Deep Back & Joints of Vertebral Column
  intrinsicBackMusclesSuboccipital, vertebralColumnJointsDiscs,

  // ── HGA Part 2: Head, Neck & Thorax ──
  // L6 Face, Scalp, Parotid & Temporal Regions
  faceMusclesInnervation, scalpLayers, parotidTemporalRegions,
  // L7 Triangles & Root of the Neck
  neckTrianglesFascia, anteriorTriangleCarotid, thyroidRootOfNeck,
  // L8 Thorax, Pleura, Trachea & Lungs
  thoracicWallIntercostalSpace, pleuraPleuralCavity, tracheaBronchiLungs,
  // L9 Mediastinum & Heart
  mediastinumDivisionsContents, greatVesselsMediastinalNerves,
  heartChambersPericardium, heartValvesCoronarySupply,

  // ── HGA Part 3: Skull & Deep Head Regions ──
  // L10 Infratemporal & Pterygopalatine Fossae
  tmjMusclesMastication, infratemporalFossaNervesVessels, pterygopalatineFossa,
  // L11 Skull & Cranial Fossae
  skullBonesSutures, cranialFossaeForamina, meningesDuralSinuses,
  // L12 Orbit, Eye & Ear
  orbitLacrimalApparatus, extraocularMusclesOrbitalNerves, earExternalMiddleInternal,
  // L13 Nasal Cavity & Paranasal Sinuses
  nasalCavityWallsMeatuses, nasalBloodSupplyEpistaxis, paranasalSinuses,
  // L14 Pharynx & Larynx
  pharynxConstrictorsTonsils, larynxCartilagesCavity, laryngealMusclesNerves,

  // ── HGA Part 4: Oral Cavity & Abdomen ──
  // L15 Mouth & Oral Cavity
  oralCavityLipsTeeth, palateTongue, salivaryGlandsOralClinical,
  // L16 Anterior Abdominal Wall & Stomach
  abdominalWallRectusSheath, inguinalCanalHernias, peritoneumStomach,
  // L17 Posterior Abdominal Wall & Urinary System
  posteriorAbdominalWallDiaphragm, lumbarPlexus, kidneyUreterAnatomy, bladderUrethra,
  // L18 Intestines, Liver & Biliary System
  smallLargeIntestine, liverBiliaryPancreas, giBloodSupplyPortalSystem,

  // ── HGA Part 5: Lower Limb ──
  // L19 Lower Limb Bones & Anterior/Medial Thigh
  lowerLimbBonesHipJoint, femoralTriangleAnteriorThigh, medialThighAdductors,
  // L20 Gluteal Region, Posterior Thigh & Popliteal Fossa
  glutealRegionNerves, posteriorThighSciatic, poplitealFossa,
  // L21 Leg & Foot
  legCompartments, ankleFootBonesArches, soleOfFoot,

  // ── BMR (Intro to Biomedical Research) ──
  // L1 History of Medicine
  historyAncientToRenaissance, historyGermTheoryModernMedicine,
  // L2 Introduction to Research
  researchQuestionFinerPico, hypothesisObjectives,
  // L3 Literature Review
  literatureReviewPurposeSearch, citationSynthesisConceptualFramework,
  // L4 Research Methodology
  studyDesignsHierarchy, samplingMethods, variablesConfoundingBias,
  // L5 Outbreak Investigation
  outbreakInvestigation,
  // L6 Basic Statistics
  dataTypesDescriptiveStats, inferentialStatsPValue,
  // L7 Human Research Ethics
  researchEthicsHistoryBelmont, informedConsentIrb,
  // L8 Types of Research Publication
  publicationTypesImrad, peerReviewJournalMetrics,
  // L9 Academic Authorship
  academicAuthorship,

  // ── HIM (Human Immunology) ──
  // L1 Cells & Tissues of the Immune System
  immuneSystemOverviewCells, lymphoidOrgans,
  // L2 Innate Immunity
  innateBarriersPrr, innateNkInterferon,
  // L3 Immunoglobulins
  antibodyStructure, antibodyClassesFunctions,
  // L4 Complement System
  complementPathways, complementFunctionsRegulation,
  // L5 Cell-Mediated Immunity
  tCellActivation, cd4HelperSubsets, cd8CtlNkEffectors,
  // L6 MHC & Antigen Presentation
  mhcStructureGenetics, antigenProcessingPresentation,
  // L7 Lymphocyte Development
  bCellDevelopmentTolerance, tCellDevelopmentThymicSelection,
  // L8 Immunodeficiency
  primaryImmunodeficiencyAntibodyT, primaryImmunodeficiencyPhagocyteComplement, secondaryImmunodeficiencyHiv,
  // L9 Humoral Immune Response
  humoralResponseBActivation, germinalCenterAntibodyResponse,
  // L10 Immunity to Microbes
  immunityBacteriaExtracellularIntracellular, immunityVirusesFungiParasites,
  // L11 Mucosal Immunology & Microbiota
  mucosalImmuneSystem, oralToleranceMicrobiota,
  // L12 Autoimmunity
  toleranceAutoimmunityMechanisms, autoimmuneDiseaseExamples,
  // L13 Hypersensitivity
  hypersensitivityType12, hypersensitivityType34,
  // L14 Antigen-Antibody Reactions
  antigenAntibodyPrinciples, immunoassaysTechniques,
  // L15 Transplantation Immunology
  transplantAllorecognitionRejection, transplantMatchingImmunosuppression,
  // L16 Tumor Immunology
  tumorAntigensImmunosurveillance, tumorEvasionImmunotherapy,
  // L17 Manipulating the Immune System
  vaccinesImmunization, immunotherapyModulation,

  // ── BHCB (Basic Histology and Cell Biology) ──
  // L1 Cytology
  histologyMethodsStaining, plasmaMembraneTransport, cytoplasmicOrganelles, nucleusChromatinNucleolus,
  // L2 Cytoskeleton
  actinMicrofilaments, microtubulesMotorsCentrosome, intermediateFilaments,
  // L3 Epithelium & Cell Adhesion
  epithelialClassification, epithelialSurfaceBasementMembrane, cellJunctions,
  // L4 Glands & Connective Tissue
  glandsExocrineEndocrine, connectiveTissueCells, connectiveTissueFibersTypes,
  // L5 Membrane & Integument
  membranesAndEpidermis, dermisSensorySkinAppendages,
  // L6 Cartilage & Bone
  cartilageTypes, boneTissueCellsOsteon, ossification,
  // L7 Muscle Tissue
  skeletalMuscleSarcomere, cardiacSmoothMuscle,
  // L8 Nervous Tissue
  neuronStructureTypes, neurogliaCnsPns, nerveFiberMyelinSynapse,
  // L9 Extracellular Matrix
  ecmFibersGroundSubstance, ecmAdhesionIntegrinsClinical,
  // L10 Clinical Cell Biology
  subcellularPathologyAlterations, intermediateFilamentsClinical,

  // ── EHP (Essential Human Physiology) ──
  // L1 Transport of Solutes & Water
  diffusionOsmosisBasics, osmolarityTonicityCellVolume,
  // L2 Cellular Homeostasis
  homeostasisFeedbackControl, bodyFluidCompartments,
  // L3 Membrane Transport
  membraneTransportPassive, membraneTransportActiveVesicular,
  // L4 Genesis of the Action Potential
  actionPotentialGenesis, actionPotentialPropagationRefractory,
  // L5 Regulation of the Resting Membrane Potential
  restingMembranePotentialNernst, goldmanRmpRegulation,
  // L6 Neurotransmitters & Neuromodulators
  neurotransmittersTypesLifecycle, synapticTransmissionEpspIpsp,
  // L7 Cell Communication
  cellSignalingModesReceptors, secondMessengerSystems,
  // L8 Synaptic Plasticity
  synapticPlasticityLtp,
  // L9 Autonomic Nervous System
  autonomicSympatheticParasympathetic, autonomicNeurotransmittersReceptors,
  // L10 Reflexes
  reflexArcStretchWithdrawal,
  // L11 Cellular Aging & Cell Death
  apoptosisNecrosis, cellularAgingTheories,

  // ── HMS-1 (Human Musculoskeletal System-1) ──
  // L1 Embryonic Development of the MSK System
  mskEmbryoSomites, mskEmbryoLimbJoints,
  // L2 The Neuromuscular Junction
  nmjStructureTransmission, nmjDrugsDisorders,
  // L3 Molecular Basis of Muscle Contraction
  muscleContractionCrossbridge, excitationContractionCoupling,
  // L4 Behaviour of Skeletal Muscle
  muscleTwitchTetanusMechanics, motorUnitRecruitment,
  // L5 Energy Sources of Skeletal Muscle
  muscleEnergySystems, muscleFiberTypesFatigue,
  // L6 Fracture & Fracture Healing
  fractureClassification, fractureHealing,

  // ── HRS-1 (Human Respiratory System-1) ──
  // L1 Development of the Respiratory System
  respiratoryDevelopmentStages, respiratoryCongenitalAnomalies,
  // L2 Structure of the Respiratory System
  airwayConductingRespiratoryZones, alveoliPneumocytesRespiratoryMembrane,
  // L3 Pulmonary Circulation
  pulmonaryCirculationFeatures, ventilationPerfusionMatching,
  // L4 Breathing & Ventilation
  lungVolumesVentilation, respiratoryMechanicsCompliance,
  // L5 Gas Exchange & Transport
  gasExchangeDiffusion, oxygenTransportDissociationCurve, co2TransportBlood,
  // L6 Regulation of Respiration & ABG
  controlOfBreathing, abgAcidBaseInterpretation,

  // ── HCVS-1 (Human Cardiovascular System-1) ──
  // L1 Overview of the Cardiovascular System
  heartAnatomyChambersValves, systemicPulmonaryCirculation,
  // L2 Histology of the Cardiovascular System
  heartWallCardiacHistology, bloodVesselHistology,
  // L3 Development of the Cardiovascular System
  heartTubeLoopingSeptation, fetalCirculationShunts,
  // L4 Cardiac Electrophysiology
  cardiacActionPotential, pacemakerConductionSystem,
  // L5 ECG Formation
  ecgFormationWaves,
  // L6 Electrocardiography
  ecgLeadsAxis,
  // L7 Regulation of Blood Pressure
  bloodPressureBaroreceptorReflex, longTermBpRaas,
  // L8 ECG in Clinical Practice
  ecgSystematicInterpretation,
  // L9 Echocardiography & Chest X-ray
  echocardiographyBasics, chestXrayCardiac,
  // L10 Cardiac Cycle & Hemodynamics
  cardiacCycleHeartSounds, hemodynamicsPreloadAfterloadCardiacOutput,
  // L11 Biomarkers in ACS
  cardiacBiomarkersAcs,
  // L12 Ambulatory Blood Pressure Monitoring
  bloodPressureMeasurementAbpm,
  // L13 Early Clinical Exposure (CVS)
  cardiovascularExamination,
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
