import type { Lecture } from '../lib/types';
import { subjectOfSource, subjectSlug } from './curriculum';
import { additionalTopics, additionalTopicSubjects } from './additional-topics';
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

// ── HEN-1 (Human Endocrine System-1) ─────────────────────────────────────────
// L1–L3 — endocrine foundations and hypothalamic–pituitary system
import { hen1FoundationsPituitary } from './lectures/hen1-foundations-pituitary';
// L4–L6 — thyroid, parathyroid and mineral physiology
import { hen1ThyroidParathyroid } from './lectures/hen1-thyroid-parathyroid';
// L7–L8 — diabetes diagnosis, endocrine pancreas and adipose tissue
import { hen1PancreasDiabetes } from './lectures/hen1-pancreas-diabetes';
// L9–L10 — adrenal development, anatomy and physiology
import { hen1Adrenal } from './lectures/hen1-adrenal';

// ── HGB-1 (Human Gastrointestinal and Biliary Tract System-1) ────────────────
// L1–L2 — digestive and accessory-organ histology
import {
  oralMucosaTongueTaste,
  giWallEsophagusHistology,
  stomachGlandsHistology,
  intestinalAnalHistology,
  salivaryGlandHistology,
  liverLobuleSinusoid,
  liverAcinusGallbladder,
  pancreasHistology,
} from './lectures/hgb1-histology';
// L3–L4 — development, chewing and swallowing
import {
  foregutAccessoryDevelopment,
  midgutRotationFixation,
  hindgutAnorectalDevelopment,
  masticationMechanicsReflex,
  swallowingPhasesReflex,
  esophagealPeristalsisSphincters,
} from './lectures/hgb1-development-swallowing';
// L5–L6 — general, integrative and motor physiology
import {
  giSmoothMuscleElectricalActivity,
  entericAutonomicReflexControl,
  giHormonesParacrinesNeurocrines,
  integratedMealResponse,
  gastricAccommodationMixing,
  gastricEmptyingFeedback,
  smallIntestinalMotility,
  colonicMotilityDefecation,
} from './lectures/hgb1-general-motility';
// L7–L8 — secretion, digestion and absorption
import {
  salivaryEsophagealMucusSecretion,
  gastricAcidMechanismControl,
  gastricEnzymesIntrinsicBarrier,
  intestinalFluidSecretion,
  proteinNucleicAcidDigestion,
  carbohydrateDigestionAbsorptionHgb,
  lipidDigestionAbsorptionHgb,
  vitaminAbsorption,
  mineralWaterAbsorption,
} from './lectures/hgb1-secretion-digestion';
// L9 — bile secretion
import {
  bileCompositionAcidSynthesis,
  enterohepaticBileCirculation,
  bileFormationGallbladderEmptying,
} from './lectures/hgb1-bile';

// ── HRP-1 (Human Reproductive System and Perinatal Period-1) ────────────────
// L1–L9 — reproductive anatomy, histology, endocrine control and cycles
import { hrp1AnatomyHistology } from './lectures/hrp1-anatomy-histology';
import { hrp1EndocrineCycles } from './lectures/hrp1-endocrine-cycles';
// L10–L12 — gestational hormones, lactation and menopause
import { hrp1GestationLactationMenopause } from './lectures/hrp1-gestation-lactation-menopause';
// L13–L16 — pregnancy, safeguarding and psychosexual health
import { hrp1PregnancyPsychosexual } from './lectures/hrp1-pregnancy-psychosexual';
// L17–L18 — reproductive development and semen analysis
import { hrp1DevelopmentSemen } from './lectures/hrp1-development-semen';

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

// ── ERS-1 (Essential Research Skill-1, Year 3) ──
import ersResearchQuestionProtocol from './lectures/ers-research-question-protocol';
import ersStudyDesigns from './lectures/ers-study-designs';
import ersMeasuresFrequencyAssociation from './lectures/ers-measures-frequency-association';
import ersCausalInference from './lectures/ers-causal-inference';
import ersDiagnosticTests from './lectures/ers-diagnostic-tests';
import ersBiostatistics from './lectures/ers-biostatistics';
import ersStatisticalTests from './lectures/ers-statistical-tests';
import ersRct from './lectures/ers-rct';
import ersSystematicReviewMetaAnalysis from './lectures/ers-systematic-review-meta-analysis';
import ersCriticalAppraisal from './lectures/ers-critical-appraisal';
import ersResearchEthics from './lectures/ers-research-ethics';
import ersCohortCaseControl from './lectures/ers-cohort-case-control';
import ersStandardisationRates from './lectures/ers-standardisation-rates';
import ersBiasTypes from './lectures/ers-bias-types';
import ersPretestPosttestProbability from './lectures/ers-pretest-posttest-probability';
import ersDistributionsConfidenceIntervals from './lectures/ers-distributions-confidence-intervals';
import ersSampleSizePower from './lectures/ers-sample-size-power';
import ersTrialTypesAnalysis from './lectures/ers-trial-types-analysis';
import ersMetaAnalysisInterpretation from './lectures/ers-meta-analysis-interpretation';
import ersEvidenceBasedMedicine from './lectures/ers-evidence-based-medicine';

// ── HRP-2 (Human Reproductive System & Perinatal Period-2, Year 3) ──
import hrp2Vulvovaginitis from './lectures/hrp2-vulvovaginitis';
import hrp2BacterialStiPid from './lectures/hrp2-bacterial-sti-pid';
import hrp2ViralStiAntivirals from './lectures/hrp2-viral-sti-antivirals';
import hrp2PerinatalInfections from './lectures/hrp2-perinatal-infections';
import hrp2CervixPathology from './lectures/hrp2-cervix-pathology';
import hrp2UterineCorpusPathology from './lectures/hrp2-uterine-corpus-pathology';
import hrp2GestationalTrophoblasticDisease from './lectures/hrp2-gestational-trophoblastic-disease';
import hrp2OvaryPathology from './lectures/hrp2-ovary-pathology';
import hrp2BreastPathology from './lectures/hrp2-breast-pathology';
import hrp2MaleReproPathology from './lectures/hrp2-male-repro-pathology';
import hrp2AbnormalUterineBleeding from './lectures/hrp2-abnormal-uterine-bleeding';
import hrp2HpoAmenorrheaPuberty from './lectures/hrp2-hpo-amenorrhea-puberty';
import hrp2PregnancyDisorders from './lectures/hrp2-pregnancy-disorders';
import hrp2PerinatalJaundice from './lectures/hrp2-perinatal-jaundice';
import hrp2FemaleHormonesDrugs from './lectures/hrp2-female-hormones-drugs';
import hrp2AndrogenDrugs from './lectures/hrp2-androgen-drugs';
import hrp2UterineContractionDrugs from './lectures/hrp2-uterine-contraction-drugs';
// HRP-2 second/third modules per lecture
import hrp2OvarianGermCellTumors from './lectures/hrp2-ovarian-germ-cell-tumors';
import hrp2OvarianSexCordStromal from './lectures/hrp2-ovarian-sex-cord-stromal';
import hrp2BenignBreastDisease from './lectures/hrp2-benign-breast-disease';
import hrp2BreastCarcinomaTypes from './lectures/hrp2-breast-carcinoma-types';
import hrp2TesticularPathology from './lectures/hrp2-testicular-pathology';
import hrp2ProstatePenilePathology from './lectures/hrp2-prostate-penile-pathology';
import hrp2VulvarVaginalNeoplasia from './lectures/hrp2-vulvar-vaginal-neoplasia';
import hrp2CervicalCancerScreening from './lectures/hrp2-cervical-cancer-screening';
import hrp2LeiomyomaAdenomyosis from './lectures/hrp2-leiomyoma-adenomyosis';
import hrp2Endometriosis from './lectures/hrp2-endometriosis';
import hrp2Choriocarcinoma from './lectures/hrp2-choriocarcinoma';
import hrp2VulvarDermatoses from './lectures/hrp2-vulvar-dermatoses';
import hrp2PidTuboOvarian from './lectures/hrp2-pid-tubo-ovarian';
import hrp2SyphilisStages from './lectures/hrp2-syphilis-stages';
import hrp2GenitalHerpesHivPregnancy from './lectures/hrp2-genital-herpes-hiv-pregnancy';
import hrp2NeonatalSepsisGbs from './lectures/hrp2-neonatal-sepsis-gbs';
import hrp2DysmenorrheaMenorrhagia from './lectures/hrp2-dysmenorrhea-menorrhagia';
import hrp2Pcos from './lectures/hrp2-pcos';
import hrp2MenopausePoi from './lectures/hrp2-menopause-poi';
import hrp2GestationalDiabetes from './lectures/hrp2-gestational-diabetes';
import hrp2RhIsoimmunisation from './lectures/hrp2-rh-isoimmunisation';
import hrp2JaundiceManagement from './lectures/hrp2-jaundice-management';
import hrp2HormonalContraception from './lectures/hrp2-hormonal-contraception';
import hrp2MenopauseHrtDrugs from './lectures/hrp2-menopause-hrt-drugs';
import hrp2AndrogenDeprivationAnabolic from './lectures/hrp2-androgen-deprivation-anabolic';
import hrp2LabourInductionTocolysis from './lectures/hrp2-labour-induction-tocolysis';

// ── HHL (Human Hematopoietic & Lymphoreticular System) — 27 lectures ──
import hhlAboSystem from './lectures/hhl-abo-system';
import hhlAcuteLeukemiaApproach from './lectures/hhl-acute-leukemia-approach';
import hhlAiha from './lectures/hhl-aiha';
import hhlAll from './lectures/hhl-all';
import hhlAlphaBetaThalassemia from './lectures/hhl-alpha-beta-thalassemia';
import hhlAml from './lectures/hhl-aml';
import hhlAnemiaApproachIndices from './lectures/hhl-anemia-approach-indices';
import hhlAnemiaClassification from './lectures/hhl-anemia-classification';
import hhlAnticoagulants from './lectures/hhl-anticoagulants';
import hhlAntimalarialTreatment from './lectures/hhl-antimalarial-treatment';
import hhlAntimalarialsMechanisms from './lectures/hhl-antimalarials-mechanisms';
import hhlAntiplatelets from './lectures/hhl-antiplatelets';
import hhlAplasticAnemia from './lectures/hhl-aplastic-anemia';
import hhlB12FolateMegaloblastic from './lectures/hhl-b12-folate-megaloblastic';
import hhlBloodComponents from './lectures/hhl-blood-components';
import hhlBloodDonation from './lectures/hhl-blood-donation';
import hhlCll from './lectures/hhl-cll';
import hhlCoagulationDisorders from './lectures/hhl-coagulation-disorders';
import hhlComponentStorageProcessing from './lectures/hhl-component-storage-processing';
import hhlDicThrombosis from './lectures/hhl-dic-thrombosis';
import hhlEbvAssociatedDiseases from './lectures/hhl-ebv-associated-diseases';
import hhlEbvMononucleosis from './lectures/hhl-ebv-mononucleosis';
import hhlFebrileAllergicReactions from './lectures/hhl-febrile-allergic-reactions';
import hhlFilariasisClinical from './lectures/hhl-filariasis-clinical';
import hhlFilariasisParasitology from './lectures/hhl-filariasis-parasitology';
import hhlG6pdMembraneDefects from './lectures/hhl-g6pd-membrane-defects';
import hhlHdn from './lectures/hhl-hdn';
import hhlHematinicsEsa from './lectures/hhl-hematinics-esa';
import hhlHematopoiesisSites from './lectures/hhl-hematopoiesis-sites';
import hhlHemoglobinSwitching from './lectures/hhl-hemoglobin-switching';
import hhlHemoglobinopathiesDiagnosis from './lectures/hhl-hemoglobinopathies-diagnosis';
import hhlHemolyticTransfusionReactions from './lectures/hhl-hemolytic-transfusion-reactions';
import hhlHodgkinLymphoma from './lectures/hhl-hodgkin-lymphoma';
import hhlIronChelators from './lectures/hhl-iron-chelators';
import hhlIronDeficiency from './lectures/hhl-iron-deficiency';
import hhlIronMetabolismStudies from './lectures/hhl-iron-metabolism-studies';
import hhlLeishmania from './lectures/hhl-leishmania';
import hhlLeukocyteQuantitative from './lectures/hhl-leukocyte-quantitative';
import hhlLymphNodeHistology from './lectures/hhl-lymph-node-histology';
import hhlLymphadenitisReactive from './lectures/hhl-lymphadenitis-reactive';
import hhlLymphaticDevelopment from './lectures/hhl-lymphatic-development';
import hhlMahaPnh from './lectures/hhl-maha-pnh';
import hhlMalariaLifecycle from './lectures/hhl-malaria-lifecycle';
import hhlMalariaMicroscopy from './lectures/hhl-malaria-microscopy';
import hhlMalariaPathophysiology from './lectures/hhl-malaria-pathophysiology';
import hhlMalariaRdtMolecular from './lectures/hhl-malaria-rdt-molecular';
import hhlMolecularDiagnosticsHeme from './lectures/hhl-molecular-diagnostics-heme';
import hhlMolecularTechniques from './lectures/hhl-molecular-techniques';
import hhlMpn from './lectures/hhl-mpn';
import hhlMultipleMyeloma from './lectures/hhl-multiple-myeloma';
import hhlNonHodgkinLymphoma from './lectures/hhl-non-hodgkin-lymphoma';
import hhlPrimaryHemostasisDisorders from './lectures/hhl-primary-hemostasis-disorders';
import hhlRbcDegradationBilirubin from './lectures/hhl-rbc-degradation-bilirubin';
import hhlRbcInclusionsArrangement from './lectures/hhl-rbc-inclusions-arrangement';
import hhlRbcMembraneMetabolism from './lectures/hhl-rbc-membrane-metabolism';
import hhlRbcMorphologyShapes from './lectures/hhl-rbc-morphology-shapes';
import hhlRhSystem from './lectures/hhl-rh-system';
import hhlSchistosomiasisClinical from './lectures/hhl-schistosomiasis-clinical';
import hhlSchistosomiasisLifecycle from './lectures/hhl-schistosomiasis-lifecycle';
import hhlSevereFalciparumMalaria from './lectures/hhl-severe-falciparum-malaria';
import hhlSpleenThymusMalt from './lectures/hhl-spleen-thymus-malt';
import hhlTargetedTherapyClasses from './lectures/hhl-targeted-therapy-classes';
import hhlThrombolyticsAntifibrinolytics from './lectures/hhl-thrombolytics-antifibrinolytics';
import hhlTkiCml from './lectures/hhl-tki-cml';
import hhlTraliTacoInfectious from './lectures/hhl-trali-taco-infectious';
import hhlTrypanosoma from './lectures/hhl-trypanosoma';
import hhlWbcMorphologicAnomalies from './lectures/hhl-wbc-morphologic-anomalies';
import hhlWbcNormalDifferential from './lectures/hhl-wbc-normal-differential';

// ── IFH (Intro to Family Health) — 11 lectures ──
import ifhAddictionManagement from './lectures/ifh-addiction-management';
import ifhAddictionNeurobiology from './lectures/ifh-addiction-neurobiology';
import ifhAddictionScreening from './lectures/ifh-addiction-screening';
import ifhBehaviorChangeStages from './lectures/ifh-behavior-change-stages';
import ifhBiopsychosocialModel from './lectures/ifh-biopsychosocial-model';
import ifhBriefCounselling5a from './lectures/ifh-brief-counselling-5a';
import ifhClinicalCommunicationSkills from './lectures/ifh-clinical-communication-skills';
import ifhDiseaseVsIllness from './lectures/ifh-disease-vs-illness';
import ifhFamilyAssessmentTools from './lectures/ifh-family-assessment-tools';
import ifhFamilyDefinitionsTypes from './lectures/ifh-family-definitions-types';
import ifhFamilyHealthImpact from './lectures/ifh-family-health-impact';
import ifhFamilyLifeCycle from './lectures/ifh-family-life-cycle';
import ifhFamilyMedicinePrinciples from './lectures/ifh-family-medicine-principles';
import ifhGenogram from './lectures/ifh-genogram';
import ifhHealthDataGovernance from './lectures/ifh-health-data-governance';
import ifhHealthDataQuality from './lectures/ifh-health-data-quality';
import ifhMotivationalInterviewing from './lectures/ifh-motivational-interviewing';
import ifhPatientCenteredClinicalMethod from './lectures/ifh-patient-centered-clinical-method';
import ifhPatientJourney from './lectures/ifh-patient-journey';
import ifhPreventionLevels from './lectures/ifh-prevention-levels';
import ifhScreeningPrinciples from './lectures/ifh-screening-principles';
import ifhScreeningTestMetrics from './lectures/ifh-screening-test-metrics';
import ifhSocialSupportHealth from './lectures/ifh-social-support-health';
import ifhSpecialPopulationsApproach from './lectures/ifh-special-populations-approach';
import ifhSpecialPopulationsVulnerable from './lectures/ifh-special-populations-vulnerable';
import ifhStressLifeEvents from './lectures/ifh-stress-life-events';
import ifhTcmClinicalApproach from './lectures/ifh-tcm-clinical-approach';
import ifhTcmOverview from './lectures/ifh-tcm-overview';

// ── ICH (Intro to Community Health) — 10 lectures ──
import ichDemographicEpidemiologicTransition from './lectures/ich-demographic-epidemiologic-transition';
import ichDemographyMeasures from './lectures/ich-demography-measures';
import ichDescriptiveEpiSurveillance from './lectures/ich-descriptive-epi-surveillance';
import ichDeterminantsOfHealth from './lectures/ich-determinants-of-health';
import ichDiseaseOccurrenceConcepts from './lectures/ich-disease-occurrence-concepts';
import ichDiseasePreventionStrategies from './lectures/ich-disease-prevention-strategies';
import ichEbmApplyingEvidence from './lectures/ich-ebm-applying-evidence';
import ichEbmCriticalAppraisal from './lectures/ich-ebm-critical-appraisal';
import ichEbmFiveSteps from './lectures/ich-ebm-five-steps';
import ichEconomicEvaluationHta from './lectures/ich-economic-evaluation-hta';
import ichEnvironmentalHealthOverview from './lectures/ich-environmental-health-overview';
import ichEnvironmentalRiskPrevention from './lectures/ich-environmental-risk-prevention';
import ichEpiIntroUses from './lectures/ich-epi-intro-uses';
import ichEpiStudyDesigns from './lectures/ich-epi-study-designs';
import ichHealthEconomicsConcepts from './lectures/ich-health-economics-concepts';
import ichHealthFinancingUhc from './lectures/ich-health-financing-uhc';
import ichHealthPromotion from './lectures/ich-health-promotion';
import ichHealthSystemBuildingBlocks from './lectures/ich-health-system-building-blocks';
import ichMeasuresOfAssociation from './lectures/ich-measures-of-association';
import ichMortalityMorbidityMeasures from './lectures/ich-mortality-morbidity-measures';
import ichOccupationalDiseasesDiagnosis from './lectures/ich-occupational-diseases-diagnosis';
import ichOccupationalHazards from './lectures/ich-occupational-hazards';
import ichOccupationalPreventionControls from './lectures/ich-occupational-prevention-controls';
import ichSocialDeterminantsEquity from './lectures/ich-social-determinants-equity';
import ichThaiHealthSystemSchemes from './lectures/ich-thai-health-system-schemes';

// ── BEH (Behavioral Science) — 14 lectures ──
import behAbuseNeglect from './lectures/beh-abuse-neglect';
import behAggressionViolence from './lectures/beh-aggression-violence';
import behAgingLifeCycle from './lectures/beh-aging-life-cycle';
import behBehavioralGenetics from './lectures/beh-behavioral-genetics';
import behBiopsychosocialModel from './lectures/beh-biopsychosocial-model';
import behClassicalOperantConditioning from './lectures/beh-classical-operant-conditioning';
import behCommunicationSkills from './lectures/beh-communication-skills';
import behDeathDying from './lectures/beh-death-dying';
import behDefenseMechanisms from './lectures/beh-defense-mechanisms';
import behDevelopmentPrinciples from './lectures/beh-development-principles';
import behDifficultEncounters from './lectures/beh-difficult-encounters';
import behDoctorPatientRelationship from './lectures/beh-doctor-patient-relationship';
import behEriksonPsychosocial from './lectures/beh-erikson-psychosocial';
import behFamilyDynamics from './lectures/beh-family-dynamics';
import behFamilyPsychopathology from './lectures/beh-family-psychopathology';
import behFreudStructuralTopographic from './lectures/beh-freud-structural-topographic';
import behGriefBereavement from './lectures/beh-grief-bereavement';
import behHumanisticTheory from './lectures/beh-humanistic-theory';
import behIntroBehavioralScience from './lectures/beh-intro-behavioral-science';
import behMentalStatusExam from './lectures/beh-mental-status-exam';
import behMoodAnxietyDisorders from './lectures/beh-mood-anxiety-disorders';
import behNeurobiologyBehavior from './lectures/beh-neurobiology-behavior';
import behOtherMajorDisorders from './lectures/beh-other-major-disorders';
import behPersonalityDisorders from './lectures/beh-personality-disorders';
import behPersonalityTraitTheory from './lectures/beh-personality-trait-theory';
import behPiagetAttachment from './lectures/beh-piaget-attachment';
import behPsychiatricHistory from './lectures/beh-psychiatric-history';
import behPsychologicalTesting from './lectures/beh-psychological-testing';
import behPsychosexualStages from './lectures/beh-psychosexual-stages';
import behPsychoticDisorders from './lectures/beh-psychotic-disorders';
import behResilience from './lectures/beh-resilience';
import behSocialCognitiveLearning from './lectures/beh-social-cognitive-learning';
import behStressResponse from './lectures/beh-stress-response';
import behSuccessfulAging from './lectures/beh-successful-aging';
import behSuicideAssessment from './lectures/beh-suicide-assessment';

// ── FCP-1 (Fundamentals of Clinical Practice-1) — 38 lectures ──
import fcp1AbdominalMassApproach from './lectures/fcp1-abdominal-mass-approach';
import fcp1AbdominalMassDifferential from './lectures/fcp1-abdominal-mass-differential';
import fcp1AbdominalPainAcuteAbdomen from './lectures/fcp1-abdominal-pain-acute-abdomen';
import fcp1AbdominalPainApproach from './lectures/fcp1-abdominal-pain-approach';
import fcp1AbnormalVaginalBleeding from './lectures/fcp1-abnormal-vaginal-bleeding';
import fcp1AnemiaApproachWorkup from './lectures/fcp1-anemia-approach-workup';
import fcp1AnemiaClassification from './lectures/fcp1-anemia-classification';
import fcp1AnemiaMicrocytic from './lectures/fcp1-anemia-microcytic';
import fcp1ArthritisApproach from './lectures/fcp1-arthritis-approach';
import fcp1BleedingAssessmentTool from './lectures/fcp1-bleeding-assessment-tool';
import fcp1BleedingCoagulationTests from './lectures/fcp1-bleeding-coagulation-tests';
import fcp1BleedingPrimaryVsSecondary from './lectures/fcp1-bleeding-primary-vs-secondary';
import fcp1ChestPainCardiac from './lectures/fcp1-chest-pain-cardiac';
import fcp1ChestPainDifferential from './lectures/fcp1-chest-pain-differential';
import fcp1ChestPainRedFlags from './lectures/fcp1-chest-pain-red-flags';
import fcp1CognitiveAssessment from './lectures/fcp1-cognitive-assessment';
import fcp1ConsciousnessComaApproach from './lectures/fcp1-consciousness-coma-approach';
import fcp1ConstipationBowelHabit from './lectures/fcp1-constipation-bowel-habit';
import fcp1CoughApproach from './lectures/fcp1-cough-approach';
import fcp1Cyanosis from './lectures/fcp1-cyanosis';
import fcp1DeliriumVsDementia from './lectures/fcp1-delirium-vs-dementia';
import fcp1DevelopmentMilestones from './lectures/fcp1-development-milestones';
import fcp1DiarrheaApproach from './lectures/fcp1-diarrhea-approach';
import fcp1DizzinessVertigo from './lectures/fcp1-dizziness-vertigo';
import fcp1DyspepsiaReflux from './lectures/fcp1-dyspepsia-reflux';
import fcp1Dysphagia from './lectures/fcp1-dysphagia';
import fcp1DyspneaApproach from './lectures/fcp1-dyspnea-approach';
import fcp1DyspneaDifferential from './lectures/fcp1-dyspnea-differential';
import fcp1EdemaApproach from './lectures/fcp1-edema-approach';
import fcp1EdemaMechanisms from './lectures/fcp1-edema-mechanisms';
import fcp1EntCommonSymptoms from './lectures/fcp1-ent-common-symptoms';
import fcp1EntRedFlags from './lectures/fcp1-ent-red-flags';
import fcp1EyeRedEye from './lectures/fcp1-eye-red-eye';
import fcp1EyeVisionLoss from './lectures/fcp1-eye-vision-loss';
import fcp1FeverApproachDifferential from './lectures/fcp1-fever-approach-differential';
import fcp1FeverOfUnknownOrigin from './lectures/fcp1-fever-of-unknown-origin';
import fcp1FeverPathophysiology from './lectures/fcp1-fever-pathophysiology';
import fcp1GiBleedLower from './lectures/fcp1-gi-bleed-lower';
import fcp1GiBleedManagement from './lectures/fcp1-gi-bleed-management';
import fcp1GiBleedUpper from './lectures/fcp1-gi-bleed-upper';
import fcp1GrowthAssessment from './lectures/fcp1-growth-assessment';
import fcp1HeadachePrimarySecondary from './lectures/fcp1-headache-primary-secondary';
import fcp1HeadacheRedFlags from './lectures/fcp1-headache-red-flags';
import fcp1HematuriaApproach from './lectures/fcp1-hematuria-approach';
import fcp1HemoptysisApproach from './lectures/fcp1-hemoptysis-approach';
import fcp1HemoptysisMassive from './lectures/fcp1-hemoptysis-massive';
import fcp1HistorySymptomAnalysis from './lectures/fcp1-history-symptom-analysis';
import fcp1HistoryTakingFramework from './lectures/fcp1-history-taking-framework';
import fcp1Hyperthyroidism from './lectures/fcp1-hyperthyroidism';
import fcp1Hypothyroidism from './lectures/fcp1-hypothyroidism';
import fcp1InflammatoryVsMechanical from './lectures/fcp1-inflammatory-vs-mechanical';
import fcp1JaundiceApproach from './lectures/fcp1-jaundice-approach';
import fcp1JaundiceBilirubinMetabolism from './lectures/fcp1-jaundice-bilirubin-metabolism';
import fcp1JaundiceCholestasis from './lectures/fcp1-jaundice-cholestasis';
import fcp1LymphadenopathyApproach from './lectures/fcp1-lymphadenopathy-approach';
import fcp1MalnutritionEvaluation from './lectures/fcp1-malnutrition-evaluation';
import fcp1MedicalEthicsPrinciples from './lectures/fcp1-medical-ethics-principles';
import fcp1MedicalLawThailand from './lectures/fcp1-medical-law-thailand';
import fcp1MedicalNegligenceConfidentiality from './lectures/fcp1-medical-negligence-confidentiality';
import fcp1MonoarthritisVsPolyarthritis from './lectures/fcp1-monoarthritis-vs-polyarthritis';
import fcp1MovementHyperkinetic from './lectures/fcp1-movement-hyperkinetic';
import fcp1MovementHypokineticParkinsonism from './lectures/fcp1-movement-hypokinetic-parkinsonism';
import fcp1NauseaVomiting from './lectures/fcp1-nausea-vomiting';
import fcp1NumbnessSensory from './lectures/fcp1-numbness-sensory';
import fcp1NutritionalAssessment from './lectures/fcp1-nutritional-assessment';
import fcp1ObesityApproach from './lectures/fcp1-obesity-approach';
import fcp1ObgyneHistory from './lectures/fcp1-obgyne-history';
import fcp1PediatricAbdominalPain from './lectures/fcp1-pediatric-abdominal-pain';
import fcp1PediatricApproachCommunication from './lectures/fcp1-pediatric-approach-communication';
import fcp1PediatricHistory from './lectures/fcp1-pediatric-history';
import fcp1PediatricSeizures from './lectures/fcp1-pediatric-seizures';
import fcp1PediatricVomitingDiarrhea from './lectures/fcp1-pediatric-vomiting-diarrhea';
import fcp1PelvicMassApproach from './lectures/fcp1-pelvic-mass-approach';
import fcp1PelvicPainApproach from './lectures/fcp1-pelvic-pain-approach';
import fcp1ProfessionalismConsent from './lectures/fcp1-professionalism-consent';
import fcp1SeizureClassification from './lectures/fcp1-seizure-classification';
import fcp1SeizureVsMimics from './lectures/fcp1-seizure-vs-mimics';
import fcp1SexualAssaultForensic from './lectures/fcp1-sexual-assault-forensic';
import fcp1SexualAssaultMedical from './lectures/fcp1-sexual-assault-medical';
import fcp1ShockClassification from './lectures/fcp1-shock-classification';
import fcp1ShockManagement from './lectures/fcp1-shock-management';
import fcp1SkinLesionMorphology from './lectures/fcp1-skin-lesion-morphology';
import fcp1SkinSignsSystemicDisease from './lectures/fcp1-skin-signs-systemic-disease';
import fcp1SplenomegalyApproach from './lectures/fcp1-splenomegaly-approach';
import fcp1SyncopeApproach from './lectures/fcp1-syncope-approach';
import fcp1ThyroidApproach from './lectures/fcp1-thyroid-approach';
import fcp1TraumaPrimarySurvey from './lectures/fcp1-trauma-primary-survey';
import fcp1TraumaResuscitation from './lectures/fcp1-trauma-resuscitation';
import fcp1TraumaSecondarySurvey from './lectures/fcp1-trauma-secondary-survey';
import fcp1UrinarySymptomsLuts from './lectures/fcp1-urinary-symptoms-luts';
import fcp1WeaknessLocalization from './lectures/fcp1-weakness-localization';
import fcp1WeaknessUmnLmn from './lectures/fcp1-weakness-umn-lmn';
import fcp1WeightLossApproach from './lectures/fcp1-weight-loss-approach';

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
// EHP expansion
import ionChannelsStructureGating from './lectures/ion-channels-structure-gating';
import gradedPotentialsCableProperties from './lectures/graded-potentials-cable-properties';
import neuromuscularJunctionTransmission from './lectures/neuromuscular-junction-transmission';
import neurotransmitterSystemsCatalog from './lectures/neurotransmitter-systems-catalog';
import synapticPlasticityLtdMemory from './lectures/synaptic-plasticity-ltd-memory';
import muscleSpindleGolgiTendonOrgan from './lectures/muscle-spindle-golgi-tendon-organ';
import reflexTypesClinicalTesting from './lectures/reflex-types-clinical-testing';
import cellInjuryFreeRadicals from './lectures/cell-injury-free-radicals';

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
// HCVS-1 expansion
import coronaryCirculation from './lectures/coronary-circulation';
import cardiacIonCurrentsChannels from './lectures/cardiac-ion-currents-channels';
import cardiacElectricalAxisVectors from './lectures/cardiac-electrical-axis-vectors';
import ecgIntervalsSegments from './lectures/ecg-intervals-segments';
import ecgChamberEnlargement from './lectures/ecg-chamber-enlargement';
import jugularVenousPressureWaveform from './lectures/jugular-venous-pressure-waveform';
import frankStarlingCardiacFunction from './lectures/frank-starling-cardiac-function';
import heartSoundsMurmursAuscultation from './lectures/heart-sounds-murmurs-auscultation';

// ── HRU-1 (Human Renal and Urinary System-1) ──
import nephronKidneyHistology from './lectures/nephron-kidney-histology';
import lowerUrinaryTractHistology from './lectures/lower-urinary-tract-histology';
import kidneyDevelopmentMetanephros from './lectures/kidney-development-metanephros';
import kubCongenitalAnomalies from './lectures/kub-congenital-anomalies';
import glomerularFiltrationGfr from './lectures/glomerular-filtration-gfr';
import renalHemodynamicsAutoregulation from './lectures/renal-hemodynamics-autoregulation';
import tubularReabsorptionSecretion from './lectures/tubular-reabsorption-secretion';
import urineConcentrationCountercurrent from './lectures/urine-concentration-countercurrent';
import adhWaterRegulation from './lectures/adh-water-regulation';
import micturitionReflex from './lectures/micturition-reflex';
import bodyFluidCompartmentsRenal from './lectures/body-fluid-compartments-renal';
import volumeWaterBalanceHormones from './lectures/volume-water-balance-hormones';
import renalPotassiumHandling from './lectures/renal-potassium-handling';
import renalCalciumPhosphateHandling from './lectures/renal-calcium-phosphate-handling';
import urinalysisPhysicalChemical from './lectures/urinalysis-physical-chemical';
import urineBiochemicalComposition from './lectures/urine-biochemical-composition';
import urineMicroscopySediment from './lectures/urine-microscopy-sediment';
import renalMetabolismGluconeogenesis from './lectures/renal-metabolism-gluconeogenesis';
import renalBicarbonateReabsorption from './lectures/renal-bicarbonate-reabsorption';
import renalAcidExcretion from './lectures/renal-acid-excretion';
// HRU-1 expansion
import renalBloodSupplyVasculature from './lectures/renal-blood-supply-vasculature';
import renalClearancePrinciples from './lectures/renal-clearance-principles';
import neurogenicBladderDisorders from './lectures/neurogenic-bladder-disorders';
import sodiumBalanceEcfVolume from './lectures/sodium-balance-ecf-volume';
import proteinuriaEvaluation from './lectures/proteinuria-evaluation';
import acuteKidneyInjuryAzotemia from './lectures/acute-kidney-injury-azotemia';
import urinaryCrystalsAndStones from './lectures/urinary-crystals-and-stones';
import renalEndocrineFunctions from './lectures/renal-endocrine-functions';
import chronicKidneyDiseaseUremia from './lectures/chronic-kidney-disease-uremia';
import acidBaseDisordersCompensation from './lectures/acid-base-disorders-compensation';

// ── HRS-2 (Human Respiratory System-2) ──
import pharyngitisTonsillitisDiphtheria from './lectures/pharyngitis-tonsillitis-diphtheria';
import otitisMediaSinusitisEpiglottitis from './lectures/otitis-media-sinusitis-epiglottitis';
import nasalSinusInflammatoryPathology from './lectures/nasal-sinus-inflammatory-pathology';
import nasopharyngealLaryngealTumors from './lectures/nasopharyngeal-laryngeal-tumors';
import coughColdAllergyDrugs from './lectures/cough-cold-allergy-drugs';
import copdEmphysemaChronicBronchitis from './lectures/copd-emphysema-chronic-bronchitis';
import asthmaBronchiectasisPathology from './lectures/asthma-bronchiectasis-pathology';
import pulmonaryFibrosisPneumoconioses from './lectures/pulmonary-fibrosis-pneumoconioses';
import sarcoidosisGranulomatousLung from './lectures/sarcoidosis-granulomatous-lung';
import communityAcquiredPneumonia from './lectures/community-acquired-pneumonia';
import hospitalAspirationPneumoniaAbscess from './lectures/hospital-aspiration-pneumonia-abscess';
import fungalLungInfections from './lectures/fungal-lung-infections';
import influenzaCovidPneumonia from './lectures/influenza-covid-pneumonia';
import otherRespiratoryViruses from './lectures/other-respiratory-viruses';
import parasiticLungInfections from './lectures/parasitic-lung-infections';
import pneumoniaPathologyPatterns from './lectures/pneumonia-pathology-patterns';
import tuberculosisPathology from './lectures/tuberculosis-pathology';
import pulmonaryEmbolismEdema from './lectures/pulmonary-embolism-edema';
import ardsPulmonaryHypertensionAtelectasis from './lectures/ards-pulmonary-hypertension-atelectasis';
import nonSmallCellLungCarcinoma from './lectures/non-small-cell-lung-carcinoma';
import smallCellAndOtherLungTumors from './lectures/small-cell-and-other-lung-tumors';
import asthmaCopdPharmacology from './lectures/asthma-copd-pharmacology';
import respiratoryTractAntibiotics from './lectures/respiratory-tract-antibiotics';
import respiratoryAntiviralDrugs from './lectures/respiratory-antiviral-drugs';
import antiTuberculosisDrugs from './lectures/anti-tuberculosis-drugs';
import pleuralEffusionPneumothoraxMesothelioma from './lectures/pleural-effusion-pneumothorax-mesothelioma';
import mediastinalMasses from './lectures/mediastinal-masses';
import chestRadiographInterpretation from './lectures/chest-radiograph-interpretation';
import respiratoryClinicalApproach from './lectures/respiratory-clinical-approach';
// HRS-2 expansion
import cysticFibrosis from './lectures/cystic-fibrosis';
import pulmonaryFunctionTestsInterpretation from './lectures/pulmonary-function-tests-interpretation';
import hypersensitivityEosinophilicLungDisease from './lectures/hypersensitivity-eosinophilic-lung-disease';
import mucolyticsCoughPharmacology from './lectures/mucolytics-cough-pharmacology';
import respiratoryFailureOxygenTherapy from './lectures/respiratory-failure-oxygen-therapy';
import obstructiveSleepApnoea from './lectures/obstructive-sleep-apnoea';
import pulmonaryHypertensionCorPulmonale from './lectures/pulmonary-hypertension-cor-pulmonale';
import tuberculosisClinicalLatentMdr from './lectures/tuberculosis-clinical-latent-mdr';
import chestCtImagingPatterns from './lectures/chest-ct-imaging-patterns';
import solitaryPulmonaryNodule from './lectures/solitary-pulmonary-nodule';

// ── HGB-2 (Human Gastrointestinal and Biliary Tract System-2) ──
import esophagealDisordersPathology from './lectures/esophageal-disorders-pathology';
import gastritisAndGastropathy from './lectures/gastritis-and-gastropathy';
import gastricCarcinomaLymphoma from './lectures/gastric-carcinoma-lymphoma';
import inflammatoryBowelDisease from './lectures/inflammatory-bowel-disease';
import colorectalPolypsCarcinoma from './lectures/colorectal-polyps-carcinoma';
import appendicitisDiverticularIschemicBowel from './lectures/appendicitis-diverticular-ischemic-bowel';
import hepatitisLiverInjuryPatterns from './lectures/hepatitis-liver-injury-patterns';
import cirrhosisFattyLiverPortalHypertension from './lectures/cirrhosis-fatty-liver-portal-hypertension';
import hepatocellularCarcinomaLiverTumors from './lectures/hepatocellular-carcinoma-liver-tumors';
import acuteChronicPancreatitis from './lectures/acute-chronic-pancreatitis';
import pancreaticCarcinoma from './lectures/pancreatic-carcinoma';
import antiemeticsProkinetics from './lectures/antiemetics-prokinetics';
import laxativesAntidiarrhealsOrs from './lectures/laxatives-antidiarrheals-ors';
import pepticUlcerDisease from './lectures/peptic-ulcer-disease';
import acidSuppressionHPyloriTherapy from './lectures/acid-suppression-h-pylori-therapy';
import nutritionEnergyProteinMalnutrition from './lectures/nutrition-energy-protein-malnutrition';
import obesityPathophysiology from './lectures/obesity-pathophysiology';
import obesityPharmacotherapy from './lectures/obesity-pharmacotherapy';
import pharmacologyInLiverDisease from './lectures/pharmacology-in-liver-disease';
import hepatitisAeAcute from './lectures/hepatitis-a-e-acute';
import hepatitisBcdChronic from './lectures/hepatitis-b-c-d-chronic';
import viralGastroenteritis from './lectures/viral-gastroenteritis';
import secretoryToxigenicEnteritis from './lectures/secretory-toxigenic-enteritis';
import inflammatoryInvasiveEnteritis from './lectures/inflammatory-invasive-enteritis';
import foodPoisoningPostInfectious from './lectures/food-poisoning-post-infectious';
import intestinalRoundwormsPhasmid from './lectures/intestinal-roundworms-phasmid';
import aphasmidNematodes from './lectures/aphasmid-nematodes';
import liverFlukesCholangiocarcinoma from './lectures/liver-flukes-cholangiocarcinoma';
import intestinalFlukesTapeworms from './lectures/intestinal-flukes-tapeworms';
import fatSolubleVitamins from './lectures/fat-soluble-vitamins';
import waterSolubleVitaminsTraceElements from './lectures/water-soluble-vitamins-trace-elements';
import eatingDisorders from './lectures/eating-disorders';
// HGB-2 expansion
import gallstonesCholecystitisCholangitis from './lectures/gallstones-cholecystitis-cholangitis';
import bilirubinMetabolismJaundice from './lectures/bilirubin-metabolism-jaundice';
import liverFunctionTestsInterpretation from './lectures/liver-function-tests-interpretation';
import autoimmuneMetabolicLiverDisease from './lectures/autoimmune-metabolic-liver-disease';
import gastrointestinalBleedingApproach from './lectures/gastrointestinal-bleeding-approach';
import ibsFunctionalGiDisorders from './lectures/ibs-functional-gi-disorders';
import nutritionalAssessmentSupport from './lectures/nutritional-assessment-support';
import obesityManagementBariatricSurgery from './lectures/obesity-management-bariatric-surgery';
import gutHormonesAppetiteRegulation from './lectures/gut-hormones-appetite-regulation';
import viralHepatitisPreventionImmunization from './lectures/viral-hepatitis-prevention-immunization';

// ── PHI (Parasitology of Human Infectious Diseases) ──
import parasitologyHostRelationships from './lectures/parasitology-host-relationships';
import parasiteTransmissionDiagnosis from './lectures/parasite-transmission-diagnosis';
import protozoaClassificationBiology from './lectures/protozoa-classification-biology';
import entamoebaHistolyticaAmoebiasis from './lectures/entamoeba-histolytica-amoebiasis';
import freeLivingNonpathogenicAmoebae from './lectures/free-living-nonpathogenic-amoebae';
import giardiaIntestinalFlagellates from './lectures/giardia-intestinal-flagellates';
import trichomonasBalantidium from './lectures/trichomonas-balantidium';
import helminthClassificationOverview from './lectures/helminth-classification-overview';
import ascariasisLargeRoundworm from './lectures/ascariasis-large-roundworm';
import toxocariasisLarvaMigrans from './lectures/toxocariasis-larva-migrans';
import anisakiasis from './lectures/anisakiasis';
import gnathostomiasis from './lectures/gnathostomiasis';
import angiostrongyliasisEosinophilicMeningitis from './lectures/angiostrongyliasis-eosinophilic-meningitis';
import trematodesFlukesOverview from './lectures/trematodes-flukes-overview';
import cestodesTapewormsOverview from './lectures/cestodes-tapeworms-overview';
import intestinalCoccidiaCryptosporidium from './lectures/intestinal-coccidia-cryptosporidium';
import toxoplasmosis from './lectures/toxoplasmosis';
import bloodApicomplexaMalariaBabesia from './lectures/blood-apicomplexa-malaria-babesia';
import medicalMitesAcarology from './lectures/medical-mites-acarology';
import sparganosisSpirometra from './lectures/sparganosis-spirometra';
import echinococcosisHydatid from './lectures/echinococcosis-hydatid';
import medicalEntomologyVectors from './lectures/medical-entomology-vectors';
import mosquitoBorneDiseases from './lectures/mosquito-borne-diseases';
import myiasisAndFlyVectors from './lectures/myiasis-and-fly-vectors';
import bloodsuckingFlyVectors from './lectures/bloodsucking-fly-vectors';

// ── HNS-1 (Human Nervous and Special Senses System-1) ──
import reticularActivatingSystemConsciousness from './lectures/reticular-activating-system-consciousness';
import sleepCircadianRhythms from './lectures/sleep-circadian-rhythms';
import auditoryPathwayAnatomy from './lectures/auditory-pathway-anatomy';
import gustatoryOlfactoryPathways from './lectures/gustatory-olfactory-pathways';
import cerebellumAnatomyFunction from './lectures/cerebellum-anatomy-function';
import basalGangliaCircuitry from './lectures/basal-ganglia-circuitry';
import brainstemDescendingMotorTracts from './lectures/brainstem-descending-motor-tracts';
import motorSystemCorticospinalControl from './lectures/motor-system-corticospinal-control';
import cnsNeurotransmissionSystems from './lectures/cns-neurotransmission-systems';
import neuralTubeDevelopmentDefects from './lectures/neural-tube-development-defects';
import brainVesiclesNeuralCrest from './lectures/brain-vesicles-neural-crest';
import sensoryReceptorsTransduction from './lectures/sensory-receptors-transduction';
import somatosensoryAscendingPathways from './lectures/somatosensory-ascending-pathways';
import painNociceptionModulation from './lectures/pain-nociception-modulation';
import cerebralBloodSupply from './lectures/cerebral-blood-supply';
import ventriclesCsfCirculation from './lectures/ventricles-csf-circulation';
import cerebralCortexOrganization from './lectures/cerebral-cortex-organization';
import corticalAreasLanguage from './lectures/cortical-areas-language';
import cerebrumLobesWhiteMatter from './lectures/cerebrum-lobes-white-matter';
import diencephalonThalamusHypothalamus from './lectures/diencephalon-thalamus-hypothalamus';
import brainstemAnatomyOrganization from './lectures/brainstem-anatomy-organization';
import spinalCordAnatomyOrganization from './lectures/spinal-cord-anatomy-organization';
import higherCorticalFunctions from './lectures/higher-cortical-functions';
import consciousnessAttention from './lectures/consciousness-attention';
import vestibularSystemPhysiology from './lectures/vestibular-system-physiology';
import limbicSystemEmotionMemory from './lectures/limbic-system-emotion-memory';
import brainEnergyMetabolism from './lectures/brain-energy-metabolism';
import auditoryPhysiologyHearing from './lectures/auditory-physiology-hearing';
import innerEarHairCellHistology from './lectures/inner-ear-hair-cell-histology';
import tasteOlfactionReceptors from './lectures/taste-olfaction-receptors';
import visualPhototransduction from './lectures/visual-phototransduction';
// HNS-1 expansion (2026-07-02)
import cranialNervesOverview from './lectures/cranial-nerves-overview';
import autonomicNervousSystem from './lectures/autonomic-nervous-system';
import neuronsGliaNeurohistology from './lectures/neurons-glia-neurohistology';
import proprioceptorsMuscleSpindleReflexes from './lectures/proprioceptors-muscle-spindle-reflexes';
import dermatomesSpinalNerves from './lectures/dermatomes-spinal-nerves';
import synapticPlasticityLearning from './lectures/synaptic-plasticity-learning';

// ── BCP (Basic Clinical Pharmacology) ──
import drugDevelopmentBioequivalence from './lectures/drug-development-bioequivalence';
import pharmacokineticsAdme from './lectures/pharmacokinetics-adme';
import pharmacodynamicsReceptorsDoseResponse from './lectures/pharmacodynamics-receptors-dose-response';
import antifungalAgents from './lectures/antifungal-agents';
import anthelminticAgents from './lectures/anthelmintic-agents';
import antiviralAntiretroviralAgents from './lectures/antiviral-antiretroviral-agents';
import antibacterialCellWallAgents from './lectures/antibacterial-cell-wall-agents';
import antibacterialProteinSynthesisInhibitors from './lectures/antibacterial-protein-synthesis-inhibitors';
import cholinergicDrugs from './lectures/cholinergic-drugs';
import adrenergicDrugs from './lectures/adrenergic-drugs';
import antineoplasticPrinciples from './lectures/antineoplastic-principles';
import drugInteractionsMechanisms from './lectures/drug-interactions-mechanisms';
import antidotesPrinciples from './lectures/antidotes-principles';
import immunomodulatingAgents from './lectures/immunomodulating-agents';
import pharmacogenomics from './lectures/pharmacogenomics';
import adverseDrugReactionsAllergy from './lectures/adverse-drug-reactions-allergy';
// BCP expansion (2026-07-02)
import preclinicalDrugDiscovery from './lectures/preclinical-drug-discovery';
import drugAbsorptionRoutes from './lectures/drug-absorption-routes';
import drugMetabolismCyp450 from './lectures/drug-metabolism-cyp450';
import agonistsAntagonistsPharmacology from './lectures/agonists-antagonists-pharmacology';
import drugReceptorSignalTransduction from './lectures/drug-receptor-signal-transduction';
import superficialAntifungalsClinical from './lectures/superficial-antifungals-clinical';
import anthelminticDrugClasses from './lectures/anthelmintic-drug-classes';
import herpesvirusCmvAntivirals from './lectures/herpesvirus-cmv-antivirals';
import hivAntiretroviralTherapy from './lectures/hiv-antiretroviral-therapy';
import antibacterialResistanceMechanisms from './lectures/antibacterial-resistance-mechanisms';
import antimycobacterialDrugs from './lectures/antimycobacterial-drugs';
import antimuscarinicAnticholinergicDrugs from './lectures/antimuscarinic-anticholinergic-drugs';
import adrenergicAntagonistsBlockers from './lectures/adrenergic-antagonists-blockers';
import cytotoxicChemotherapyAgents from './lectures/cytotoxic-chemotherapy-agents';
import targetedCancerTherapy from './lectures/targeted-cancer-therapy';
import pharmacodynamicDrugInteractions from './lectures/pharmacodynamic-drug-interactions';
import toxidromesPoisoningApproach from './lectures/toxidromes-poisoning-approach';
import immunosuppressantDrugs from './lectures/immunosuppressant-drugs';
import immunostimulantsBiologics from './lectures/immunostimulants-biologics';
import pharmacogenomicsClinicalImplementation from './lectures/pharmacogenomics-clinical-implementation';
import adrClassificationMechanisms from './lectures/adr-classification-mechanisms';
import drugHypersensitivityScars from './lectures/drug-hypersensitivity-scars';

// ── HSC (Human Skin and Connective Tissue System) ──
import dermatologicDiagnosisMorphology from './lectures/dermatologic-diagnosis-morphology';
import skinAnatomyHistology from './lectures/skin-anatomy-histology';
import skinAging from './lectures/skin-aging';
import cutaneousImmunologyHypersensitivity from './lectures/cutaneous-immunology-hypersensitivity';
import skinPhysiologyThermoregulation from './lectures/skin-physiology-thermoregulation';
import woundHealing from './lectures/wound-healing';
import skinInfectionsBacterialFungalViral from './lectures/skin-infections-bacterial-fungal-viral';
import infestationsHelminthicSkin from './lectures/infestations-helminthic-skin';
import papulosquamousDiseases from './lectures/papulosquamous-diseases';
import vesiculobullousDiseases from './lectures/vesiculobullous-diseases';
import panniculitisVasculitisSkin from './lectures/panniculitis-vasculitis-skin';
import cutaneousConnectiveTissueDiseases from './lectures/cutaneous-connective-tissue-diseases';
import cutaneousDrugReactions from './lectures/cutaneous-drug-reactions';
import pediatricSkinDiseases from './lectures/pediatric-skin-diseases';
import hairDiseases from './lectures/hair-diseases';
import pigmentaryDisorders from './lectures/pigmentary-disorders';
import eczemaDermatitis from './lectures/eczema-dermatitis';
import acneVulgaris from './lectures/acne-vulgaris';
import skinNeoplasms from './lectures/skin-neoplasms';
import dermatologicTherapy from './lectures/dermatologic-therapy';
// HSC expansion (2026-07-02)
import skinExaminationApproach from './lectures/skin-examination-approach';
import dermatologicInvestigations from './lectures/dermatologic-investigations';
import skinSignsSystemicDisease from './lectures/skin-signs-systemic-disease';
import epidermisKeratinocyteBiology from './lectures/epidermis-keratinocyte-biology';
import dermisAppendagesGlands from './lectures/dermis-appendages-glands';
import photoagingPhotoprotection from './lectures/photoaging-photoprotection';
import skinImmuneSystemCells from './lectures/skin-immune-system-cells';
import cutaneousHypersensitivityReactions from './lectures/cutaneous-hypersensitivity-reactions';
import skinBarrierFunction from './lectures/skin-barrier-function';
import chronicWoundsLegUlcers from './lectures/chronic-wounds-leg-ulcers';
import bacterialSkinInfections from './lectures/bacterial-skin-infections';
import viralSkinInfections from './lectures/viral-skin-infections';
import scabiesPediculosisClinical from './lectures/scabies-pediculosis-clinical';
import psoriasisClinicalManagement from './lectures/psoriasis-clinical-management';
import cutaneousVasculitis from './lectures/cutaneous-vasculitis';
import cutaneousLupusDermatomyositis from './lectures/cutaneous-lupus-dermatomyositis';
import severeCutaneousDrugReactions from './lectures/severe-cutaneous-drug-reactions';
import neonatalSkinConditions from './lectures/neonatal-skin-conditions';
import vascularBirthmarksGenodermatoses from './lectures/vascular-birthmarks-genodermatoses';
import alopeciaClinicalApproach from './lectures/alopecia-clinical-approach';
import hyperpigmentationMelasma from './lectures/hyperpigmentation-melasma';
import atopicDermatitisClinical from './lectures/atopic-dermatitis-clinical';
import contactDermatitisClinical from './lectures/contact-dermatitis-clinical';
import acneManagement from './lectures/acne-management';
import melanomaClinical from './lectures/melanoma-clinical';
import keratinocyteCarcinomas from './lectures/keratinocyte-carcinomas';
import topicalDermatologicTherapy from './lectures/topical-dermatologic-therapy';
import systemicDermatologicTherapy from './lectures/systemic-dermatologic-therapy';

// ── HRU-2 (Human Renal and Urinary System-2) ──
import renalDefenseMechanisms from './lectures/renal-defense-mechanisms';
import utiPathogenesisMicrobiology from './lectures/uti-pathogenesis-microbiology';
import urinalysisUrineExamination from './lectures/urinalysis-urine-examination';
import urinaryTractPathology from './lectures/urinary-tract-pathology';
import utiClinicalManagement from './lectures/uti-clinical-management';
import nephroticSyndrome from './lectures/nephrotic-syndrome';
import nephriticSyndrome from './lectures/nephritic-syndrome';
import interstitialNephritisObstruction from './lectures/interstitial-nephritis-obstruction';
import cysticKidneyDiseases from './lectures/cystic-kidney-diseases';
import urinarySystemNeoplasms from './lectures/urinary-system-neoplasms';
import renovascularDisorders from './lectures/renovascular-disorders';
import acuteKidneyInjury from './lectures/acute-kidney-injury';
import chronicKidneyDisease from './lectures/chronic-kidney-disease';
import diureticsPharmacology from './lectures/diuretics-pharmacology';
import drugDosingCkd from './lectures/drug-dosing-ckd';
import glomerularDiseaseOverview from './lectures/glomerular-disease-overview';
import fluidElectrolyteDisorders from './lectures/fluid-electrolyte-disorders';
import urinaryIncontinenceDrugs from './lectures/urinary-incontinence-drugs';
import acidBaseDisorders from './lectures/acid-base-disorders';
import bloodGasAnionGap from './lectures/blood-gas-anion-gap';
// HRU-2 expansion (2026-07-02): sub-topic deep-dives (to 2.5:1)
import urinaryTractHostDefenses from './lectures/urinary-tract-host-defenses';
import uropathogenicEcoliVirulence from './lectures/uropathogenic-ecoli-virulence';
import catheterAssociatedUti from './lectures/catheter-associated-uti';
import urineMicroscopyCastsCrystals from './lectures/urine-microscopy-casts-crystals';
import urineDipstickChemistry from './lectures/urine-dipstick-chemistry';
import nephrolithiasisUrolithiasis from './lectures/nephrolithiasis-urolithiasis';
import acutePyelonephritisClinical from './lectures/acute-pyelonephritis-clinical';
import minimalChangeFsgs from './lectures/minimal-change-fsgs';
import membranousMembranoproliferativeGn from './lectures/membranous-membranoproliferative-gn';
import igaNephropathyPostinfectiousGn from './lectures/iga-nephropathy-postinfectious-gn';
import obstructiveUropathyHydronephrosis from './lectures/obstructive-uropathy-hydronephrosis';
import acuteInterstitialNephritis from './lectures/acute-interstitial-nephritis';
import polycysticKidneyDisease from './lectures/polycystic-kidney-disease';
import renalCellCarcinoma from './lectures/renal-cell-carcinoma';
import bladderUrothelialCarcinoma from './lectures/bladder-urothelial-carcinoma';
import renalArteryStenosis from './lectures/renal-artery-stenosis';
import akiPrerenalIntrinsicPostrenal from './lectures/aki-prerenal-intrinsic-postrenal';
import ckdMineralBoneDisorder from './lectures/ckd-mineral-bone-disorder';
import renalReplacementTherapy from './lectures/renal-replacement-therapy';
import loopThiazideDiuretics from './lectures/loop-thiazide-diuretics';
import potassiumSparingOsmoticDiuretics from './lectures/potassium-sparing-osmotic-diuretics';
import nephrotoxicDrugs from './lectures/nephrotoxic-drugs';
import glomerularDiseaseImmuneMechanisms from './lectures/glomerular-disease-immune-mechanisms';
import sodiumWaterDisorders from './lectures/sodium-water-disorders';
import potassiumDisorders from './lectures/potassium-disorders';
import highAnionGapMetabolicAcidosis from './lectures/high-anion-gap-metabolic-acidosis';

// ── MHI (Microbiology of Human Infectious Diseases) — virology block ──
import virologyPrinciplesClassification from './lectures/virology-principles-classification';
import nonenvelopedRnaViruses from './lectures/nonenveloped-rna-viruses';
import envelopedRnaVirusesOrthomyxoParamyxo from './lectures/enveloped-rna-viruses-orthomyxo-paramyxo';
import otherEnvelopedRnaViruses from './lectures/other-enveloped-rna-viruses';
import retrovirusesHiv from './lectures/retroviruses-hiv';
import arbovirusesMosquitoBorne from './lectures/arboviruses-mosquito-borne';
import dnaVirusesHerpesviruses from './lectures/dna-viruses-herpesviruses';
import dnaVirusesOther from './lectures/dna-viruses-other';
// MHI bacteriology block (L8–L19, 2026-07-02)
import bacterialStructureCellWall from './lectures/bacterial-structure-cell-wall';
import bacterialPhysiologyGrowthIdentification from './lectures/bacterial-physiology-growth-identification';
import bacterialGeneTransfer from './lectures/bacterial-gene-transfer';
import antibioticResistanceMechanisms from './lectures/antibiotic-resistance-mechanisms';
import staphylococcusAureus from './lectures/staphylococcus-aureus';
import coagulaseNegativeStaphylococci from './lectures/coagulase-negative-staphylococci';
import streptococcusPyogenesAgalactiae from './lectures/streptococcus-pyogenes-agalactiae';
import streptococcusPneumoniaeEnterococci from './lectures/streptococcus-pneumoniae-enterococci';
import bacillusAnthracisCereus from './lectures/bacillus-anthracis-cereus';
import corynebacteriumListeria from './lectures/corynebacterium-listeria';
import enterobacteralesEcoliKlebsiella from './lectures/enterobacterales-ecoli-klebsiella';
import salmonellaShigellaYersinia from './lectures/salmonella-shigella-yersinia';
import vibrioCampylobacterHelicobacter from './lectures/vibrio-campylobacter-helicobacter';
import pseudomonasBurkholderiaNonfermenters from './lectures/pseudomonas-burkholderia-nonfermenters';
import neisseriaMeningitidisGonorrhoeae from './lectures/neisseria-meningitidis-gonorrhoeae';
import haemophilusBordetellaSmallGramNegativeRods from './lectures/haemophilus-bordetella-small-gram-negative-rods';
import clostridiaAnaerobicPathogens from './lectures/clostridia-anaerobic-pathogens';
import bacteroidesGramNegativeAnaerobes from './lectures/bacteroides-gram-negative-anaerobes';
import rickettsiaOrientiaCoxiella from './lectures/rickettsia-orientia-coxiella';
import chlamydiaSpecies from './lectures/chlamydia-species';
import mycobacteriumTuberculosisLeprae from './lectures/mycobacterium-tuberculosis-leprae';
import nocardiaActinomyces from './lectures/nocardia-actinomyces';
import spirochetesTreponemaBorreliaLeptospira from './lectures/spirochetes-treponema-borrelia-leptospira';
import mycoplasmaUreaplasma from './lectures/mycoplasma-ureaplasma';
// MHI mycology block (L20–L25, 2026-07-02)
import fungalBiologyClassification from './lectures/fungal-biology-classification';
import antifungalAgentsLabDiagnosis from './lectures/antifungal-agents-lab-diagnosis';
import mycotoxinsAflatoxin from './lectures/mycotoxins-aflatoxin';
import mushroomPoisoningSyndromes from './lectures/mushroom-poisoning-syndromes';
import candidaCandidiasis from './lectures/candida-candidiasis';
import cryptococcusMalassezia from './lectures/cryptococcus-malassezia';
import systemicDimorphicFungi from './lectures/systemic-dimorphic-fungi';
import talaromycesSporothrix from './lectures/talaromyces-sporothrix';
import dermatophytesTinea from './lectures/dermatophytes-tinea';
import opportunisticMoldsAspergillusMucorales from './lectures/opportunistic-molds-aspergillus-mucorales';
import mycetomaEumycetoma from './lectures/mycetoma-eumycetoma';
import chromoblastomycosisSubcutaneousMycoses from './lectures/chromoblastomycosis-subcutaneous-mycoses';

// ── BAP (Basic Human Anatomical Pathology) — general pathology (Year 2) ──
import introPathologyScope from './lectures/intro-pathology-scope';
import diagnosticPathologyMethods from './lectures/diagnostic-pathology-methods';
import cellInjuryMechanisms from './lectures/cell-injury-mechanisms';
import necrosisPatterns from './lectures/necrosis-patterns';
import apoptosisCellDeath from './lectures/apoptosis-cell-death';
import cellularAdaptationsGrowth from './lectures/cellular-adaptations-growth';
import metaplasiaDysplasia from './lectures/metaplasia-dysplasia';
import intracellularAccumulationsCalcification from './lectures/intracellular-accumulations-calcification';
import acuteInflammation from './lectures/acute-inflammation';
import inflammatoryMediatorsLeukocytes from './lectures/inflammatory-mediators-leukocytes';
import chronicInflammationGranuloma from './lectures/chronic-inflammation-granuloma';
import tissueRepairWoundHealing from './lectures/tissue-repair-wound-healing';
import edemaHyperemiaCongestion from './lectures/edema-hyperemia-congestion';
import hemostasisThrombosisEmbolism from './lectures/hemostasis-thrombosis-embolism';
import infarctionShock from './lectures/infarction-shock';
import neoplasiaNomenclature from './lectures/neoplasia-nomenclature';
import neoplasiaDifferentiationInvasion from './lectures/neoplasia-differentiation-invasion';
import carcinogenesisMolecular from './lectures/carcinogenesis-molecular';
import cancerSpreadStagingClinical from './lectures/cancer-spread-staging-clinical';
import environmentalChemicalTobaccoInjury from './lectures/environmental-chemical-tobacco-injury';
import physicalNutritionalInjury from './lectures/physical-nutritional-injury';

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

  // ── HEN-1 (Human Endocrine System-1) ──
  // L1–L3 Endocrine foundations and hypothalamic–pituitary system
  ...hen1FoundationsPituitary,
  // L4–L6 Thyroid, parathyroid and mineral physiology
  ...hen1ThyroidParathyroid,
  // L7–L8 Diabetes diagnosis, endocrine pancreas and adipose tissue
  ...hen1PancreasDiabetes,
  // L9–L10 Adrenal development, anatomy and physiology
  ...hen1Adrenal,

  // ── HGB-1 (Human Gastrointestinal and Biliary Tract System-1) ──
  // L1 Histology of the Digestive Tract
  oralMucosaTongueTaste, giWallEsophagusHistology, stomachGlandsHistology, intestinalAnalHistology,
  // L2 Histology of Accessory Digestive Organs
  salivaryGlandHistology, liverLobuleSinusoid, liverAcinusGallbladder, pancreasHistology,
  // L3 Development of the Digestive System
  foregutAccessoryDevelopment, midgutRotationFixation, hindgutAnorectalDevelopment,
  // L4 Chewing & Swallowing
  masticationMechanicsReflex, swallowingPhasesReflex, esophagealPeristalsisSphincters,
  // L5 General & Integrative GI Physiology
  giSmoothMuscleElectricalActivity, entericAutonomicReflexControl,
  giHormonesParacrinesNeurocrines, integratedMealResponse,
  // L6 Gastric & Intestinal Motility
  gastricAccommodationMixing, gastricEmptyingFeedback, smallIntestinalMotility, colonicMotilityDefecation,
  // L7 GI Secretion
  salivaryEsophagealMucusSecretion, gastricAcidMechanismControl,
  gastricEnzymesIntrinsicBarrier, intestinalFluidSecretion,
  // L8 Digestion & Absorption
  proteinNucleicAcidDigestion, carbohydrateDigestionAbsorptionHgb,
  lipidDigestionAbsorptionHgb, vitaminAbsorption, mineralWaterAbsorption,
  // L9 Bile Secretion
  bileCompositionAcidSynthesis, enterohepaticBileCirculation, bileFormationGallbladderEmptying,

  // ── HRP-1 (Human Reproductive System and Perinatal Period-1) ──
  // L1–L9 Reproductive anatomy, histology, endocrine control and cycles
  ...hrp1AnatomyHistology,
  ...hrp1EndocrineCycles,
  // L10–L12 Gestational hormones, lactation and menopause
  ...hrp1GestationLactationMenopause,
  // L13–L16 Pregnancy, safeguarding and psychosexual health
  ...hrp1PregnancyPsychosexual,
  // L17–L18 Reproductive development and semen analysis
  ...hrp1DevelopmentSemen,

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

  // ── ERS-1 (Essential Research Skill-1, Year 3) ──
  ersResearchQuestionProtocol, ersStudyDesigns, ersMeasuresFrequencyAssociation,
  ersCausalInference, ersDiagnosticTests, ersBiostatistics, ersStatisticalTests,
  ersRct, ersSystematicReviewMetaAnalysis, ersCriticalAppraisal,
  // L1–L10 second modules
  ersResearchEthics, ersCohortCaseControl, ersStandardisationRates, ersBiasTypes,
  ersPretestPosttestProbability, ersDistributionsConfidenceIntervals, ersSampleSizePower,
  ersTrialTypesAnalysis, ersMetaAnalysisInterpretation, ersEvidenceBasedMedicine,

  // ── HRP-2 (Human Reproductive System & Perinatal Period-2, Year 3) ──
  hrp2Vulvovaginitis, hrp2BacterialStiPid, hrp2ViralStiAntivirals, hrp2PerinatalInfections,
  hrp2CervixPathology, hrp2UterineCorpusPathology, hrp2GestationalTrophoblasticDisease,
  hrp2OvaryPathology, hrp2BreastPathology, hrp2MaleReproPathology, hrp2AbnormalUterineBleeding,
  hrp2HpoAmenorrheaPuberty, hrp2PregnancyDisorders, hrp2PerinatalJaundice,
  hrp2FemaleHormonesDrugs, hrp2AndrogenDrugs, hrp2UterineContractionDrugs,
  // HRP-2 second/third modules per lecture (→ 2.5 core modules per lecture)
  hrp2OvarianGermCellTumors, hrp2OvarianSexCordStromal, hrp2BenignBreastDisease,
  hrp2BreastCarcinomaTypes, hrp2TesticularPathology, hrp2ProstatePenilePathology,
  hrp2VulvarVaginalNeoplasia, hrp2CervicalCancerScreening, hrp2LeiomyomaAdenomyosis,
  hrp2Endometriosis, hrp2Choriocarcinoma, hrp2VulvarDermatoses, hrp2PidTuboOvarian,
  hrp2SyphilisStages, hrp2GenitalHerpesHivPregnancy, hrp2NeonatalSepsisGbs,
  hrp2DysmenorrheaMenorrhagia, hrp2Pcos, hrp2MenopausePoi, hrp2GestationalDiabetes,
  hrp2RhIsoimmunisation, hrp2JaundiceManagement, hrp2HormonalContraception,
  hrp2MenopauseHrtDrugs, hrp2AndrogenDeprivationAnabolic, hrp2LabourInductionTocolysis,

  // ── HHL (Human Hematopoietic & Lymphoreticular System) — 27 lectures, 68 core modules ──
  // L1 Development of Blood & Lymphatics
  hhlHematopoiesisSites, hhlLymphaticDevelopment,
  // L2 Red Blood Cell Structure & Function
  hhlRbcDegradationBilirubin, hhlRbcMembraneMetabolism,
  // L3 Abnormal Red Cell Morphology
  hhlRbcInclusionsArrangement, hhlRbcMorphologyShapes,
  // L4 White Blood Cells: Morphology & Non-neoplastic
  hhlLeukocyteQuantitative, hhlWbcMorphologicAnomalies, hhlWbcNormalDifferential,
  // L5 Histology of the Lymphoid System
  hhlLymphNodeHistology, hhlSpleenThymusMalt,
  // L6 Classification of Anemia & Aplastic Anemia
  hhlAnemiaApproachIndices, hhlAnemiaClassification, hhlAplasticAnemia,
  // L7 Thalassemia & Hemoglobinopathies
  hhlAlphaBetaThalassemia, hhlHemoglobinSwitching, hhlHemoglobinopathiesDiagnosis,
  // L8 Nutritional Anemia
  hhlB12FolateMegaloblastic, hhlIronDeficiency, hhlIronMetabolismStudies,
  // L9 Hemolytic Anemia
  hhlAiha, hhlG6pdMembraneDefects, hhlMahaPnh,
  // L10 Pathology of Lymph Node & Lymphoma
  hhlHodgkinLymphoma, hhlLymphadenitisReactive, hhlNonHodgkinLymphoma,
  // L11 Drugs for Anemia & Iron Chelation
  hhlHematinicsEsa, hhlIronChelators,
  // L12 Drugs Affecting Hemostasis
  hhlAnticoagulants, hhlAntiplatelets, hhlThrombolyticsAntifibrinolytics,
  // L13 Myeloproliferative Neoplasms, MM & CLL
  hhlCll, hhlMpn, hhlMultipleMyeloma,
  // L14 Platelet & Hemostatic Disorders
  hhlCoagulationDisorders, hhlDicThrombosis, hhlPrimaryHemostasisDisorders,
  // L15 Acute Leukemia
  hhlAcuteLeukemiaApproach, hhlAll, hhlAml,
  // L16 Targeted Therapy for Leukemia
  hhlTargetedTherapyClasses, hhlTkiCml,
  // L17 ABO & Rh Blood Groups; HDN
  hhlAboSystem, hhlHdn, hhlRhSystem,
  // L18 Molecular Basis in Hematology
  hhlMolecularDiagnosticsHeme, hhlMolecularTechniques,
  // L19 Blood Donation & Blood Products
  hhlBloodComponents, hhlBloodDonation, hhlComponentStorageProcessing,
  // L20 Blood Transfusion Reactions
  hhlFebrileAllergicReactions, hhlHemolyticTransfusionReactions, hhlTraliTacoInfectious,
  // L21 Lymphatic Filariasis
  hhlFilariasisClinical, hhlFilariasisParasitology,
  // L22 Schistosomiasis
  hhlSchistosomiasisClinical, hhlSchistosomiasisLifecycle,
  // L23 Haemoflagellates
  hhlLeishmania, hhlTrypanosoma,
  // L24 Malaria: Biology & Clinical Disease
  hhlMalariaLifecycle, hhlMalariaPathophysiology, hhlSevereFalciparumMalaria,
  // L25 Malaria: Laboratory Diagnosis
  hhlMalariaMicroscopy, hhlMalariaRdtMolecular,
  // L26 Antimalarial Drugs
  hhlAntimalarialTreatment, hhlAntimalarialsMechanisms,
  // L27 EBV & Infectious Mononucleosis
  hhlEbvAssociatedDiseases, hhlEbvMononucleosis,

  // ── IFH (Intro to Family Health) — 11 lectures, 28 core modules ──
  // L1 Patient Journey & Introduction to Family Health
  ifhFamilyMedicinePrinciples, ifhPatientJourney,
  // L2 Patient-Centered Medicine & Communication
  ifhClinicalCommunicationSkills, ifhDiseaseVsIllness, ifhPatientCenteredClinicalMethod,
  // L3 Family Assessment Tools & Basic Health Data
  ifhFamilyAssessmentTools, ifhGenogram,
  // L4 Family Influences on Health
  ifhFamilyDefinitionsTypes, ifhFamilyHealthImpact, ifhFamilyLifeCycle,
  // L5 Psychosocial Influences on Health
  ifhBiopsychosocialModel, ifhSocialSupportHealth, ifhStressLifeEvents,
  // L6 Health Screening & Prevention
  ifhPreventionLevels, ifhScreeningPrinciples, ifhScreeningTestMetrics,
  // L7 Counselling, Health Promotion & Motivational Interviewing
  ifhBehaviorChangeStages, ifhBriefCounselling5a, ifhMotivationalInterviewing,
  // L8 Caring for Special Populations
  ifhSpecialPopulationsApproach, ifhSpecialPopulationsVulnerable,
  // L9 Addiction and Health
  ifhAddictionManagement, ifhAddictionNeurobiology, ifhAddictionScreening,
  // L10 Traditional & Complementary Medicine
  ifhTcmClinicalApproach, ifhTcmOverview,
  // L11 Health Data for Quality Improvement
  ifhHealthDataGovernance, ifhHealthDataQuality,

  // ── ICH (Intro to Community Health) — 10 lectures, 25 core modules ──
  // L1 Health Promotion & Disease Prevention
  ichDiseasePreventionStrategies, ichHealthPromotion,
  // L2 Demography
  ichDemographicEpidemiologicTransition, ichDemographyMeasures,
  // L3 Determinants of Health
  ichDeterminantsOfHealth, ichSocialDeterminantsEquity,
  // L4 Health Care Systems & Health Policy in Thailand
  ichHealthFinancingUhc, ichHealthSystemBuildingBlocks, ichThaiHealthSystemSchemes,
  // L5 Environmental Health Determinants
  ichEnvironmentalHealthOverview, ichEnvironmentalRiskPrevention,
  // L6 Occupational Medicine
  ichOccupationalDiseasesDiagnosis, ichOccupationalHazards, ichOccupationalPreventionControls,
  // L9 Health Economics in Thailand
  ichEconomicEvaluationHta, ichHealthEconomicsConcepts,
  // L10 Epidemiological Principles
  ichDescriptiveEpiSurveillance, ichDiseaseOccurrenceConcepts, ichEpiIntroUses,
  // L11 Epidemiological Methods
  ichEpiStudyDesigns, ichMeasuresOfAssociation, ichMortalityMorbidityMeasures,
  // L12 Practical Evidence-Based Medicine
  ichEbmApplyingEvidence, ichEbmCriticalAppraisal, ichEbmFiveSteps,

  // ── BEH (Behavioral Science) — 14 lectures, 35 core modules ──
  // L1 Introduction to Behavioral Science
  behBiopsychosocialModel, behIntroBehavioralScience,
  // L2 Doctor-Patient Relationship & Communication
  behCommunicationSkills, behDifficultEncounters, behDoctorPatientRelationship,
  // L3 Psychiatric Assessment & Psychological Testing
  behMentalStatusExam, behPsychiatricHistory, behPsychologicalTesting,
  // L4 Mental Disorders (DSM-5-TR)
  behMoodAnxietyDisorders, behOtherMajorDisorders, behPsychoticDisorders,
  // L5 Genetics & Biology of Behavior
  behBehavioralGenetics, behNeurobiologyBehavior,
  // L6 Growth and Development
  behDevelopmentPrinciples, behEriksonPsychosocial, behPiagetAttachment,
  // L7 Family & its Psychopathology
  behFamilyDynamics, behFamilyPsychopathology,
  // L8 Learning & Humanistic Theory
  behClassicalOperantConditioning, behHumanisticTheory, behSocialCognitiveLearning,
  // L9 Psychodynamic Theories & Defense Mechanisms
  behDefenseMechanisms, behFreudStructuralTopographic, behPsychosexualStages,
  // L10 Elderly Life Cycle & Successful Aging
  behAgingLifeCycle, behSuccessfulAging,
  // L11 Personality & Trait Theory
  behPersonalityDisorders, behPersonalityTraitTheory,
  // L12 Stress & Resilience
  behResilience, behStressResponse,
  // L13 Death, Dying & Bereavement
  behDeathDying, behGriefBereavement,
  // L14 Abuse, Suicide & Violence
  behAbuseNeglect, behAggressionViolence, behSuicideAssessment,

  // ── FCP-1 (Fundamentals of Clinical Practice-1) — 38 lectures, 93 core modules ──
  // L1 Medical History Taking
  fcp1HistorySymptomAnalysis, fcp1HistoryTakingFramework,
  // L2 Pediatric History Taking
  fcp1PediatricApproachCommunication, fcp1PediatricHistory,
  // L3 Growth & Development Assessment
  fcp1DevelopmentMilestones, fcp1GrowthAssessment,
  // L4 Nutritional Assessment
  fcp1MalnutritionEvaluation, fcp1NutritionalAssessment,
  // L5 OB-Gyne History Taking & Vaginal Bleeding
  fcp1AbnormalVaginalBleeding, fcp1ObgyneHistory,
  // L6 Fever
  fcp1FeverApproachDifferential, fcp1FeverOfUnknownOrigin, fcp1FeverPathophysiology,
  // L7 Obesity & Weight Loss
  fcp1ObesityApproach, fcp1WeightLossApproach,
  // L8 Edema
  fcp1EdemaApproach, fcp1EdemaMechanisms,
  // L9 Shock & Syncope
  fcp1ShockClassification, fcp1ShockManagement, fcp1SyncopeApproach,
  // L10 Approach to the Trauma Patient
  fcp1TraumaPrimarySurvey, fcp1TraumaResuscitation, fcp1TraumaSecondarySurvey,
  // L11 Chest Pain
  fcp1ChestPainCardiac, fcp1ChestPainDifferential, fcp1ChestPainRedFlags,
  // L12 Dyspnea & Cyanosis
  fcp1Cyanosis, fcp1DyspneaApproach, fcp1DyspneaDifferential,
  // L13 Cough & Hemoptysis
  fcp1CoughApproach, fcp1HemoptysisApproach, fcp1HemoptysisMassive,
  // L14 Abdominal Pain, Nausea & Vomiting
  fcp1AbdominalPainAcuteAbdomen, fcp1AbdominalPainApproach, fcp1NauseaVomiting,
  // L15 Dyspepsia, Reflux & Dysphagia
  fcp1DyspepsiaReflux, fcp1Dysphagia,
  // L16 Change in Bowel Habit
  fcp1ConstipationBowelHabit, fcp1DiarrheaApproach,
  // L17 Gastrointestinal Hemorrhage
  fcp1GiBleedLower, fcp1GiBleedManagement, fcp1GiBleedUpper,
  // L18 Jaundice
  fcp1JaundiceApproach, fcp1JaundiceBilirubinMetabolism, fcp1JaundiceCholestasis,
  // L19 Abdominal Mass
  fcp1AbdominalMassApproach, fcp1AbdominalMassDifferential,
  // L20 Common Pediatric GI Symptoms
  fcp1PediatricAbdominalPain, fcp1PediatricVomitingDiarrhea,
  // L21 Approach to Anemia
  fcp1AnemiaApproachWorkup, fcp1AnemiaClassification, fcp1AnemiaMicrocytic,
  // L22 Lymphadenopathy & Splenomegaly
  fcp1LymphadenopathyApproach, fcp1SplenomegalyApproach,
  // L23 Bleeding Tendency
  fcp1BleedingAssessmentTool, fcp1BleedingCoagulationTests, fcp1BleedingPrimaryVsSecondary,
  // L24 Headache, Dizziness & Vertigo
  fcp1DizzinessVertigo, fcp1HeadachePrimarySecondary, fcp1HeadacheRedFlags,
  // L25 Weakness & Numbness
  fcp1NumbnessSensory, fcp1WeaknessLocalization, fcp1WeaknessUmnLmn,
  // L26 Seizures & Abnormal Movements
  fcp1PediatricSeizures, fcp1SeizureClassification, fcp1SeizureVsMimics,
  // L27 Movement Disorders
  fcp1MovementHyperkinetic, fcp1MovementHypokineticParkinsonism,
  // L28 Cognitive Impairment & Disorders of Consciousness
  fcp1CognitiveAssessment, fcp1ConsciousnessComaApproach, fcp1DeliriumVsDementia,
  // L29 Approach to Thyroid Disease
  fcp1Hyperthyroidism, fcp1Hypothyroidism, fcp1ThyroidApproach,
  // L30 Approach to Arthritis
  fcp1ArthritisApproach, fcp1InflammatoryVsMechanical, fcp1MonoarthritisVsPolyarthritis,
  // L31 Skin Signs (Adult & Pediatric)
  fcp1SkinLesionMorphology, fcp1SkinSignsSystemicDisease,
  // L32 Common ENT Symptoms
  fcp1EntCommonSymptoms, fcp1EntRedFlags,
  // L33 Common Eye Symptoms
  fcp1EyeRedEye, fcp1EyeVisionLoss,
  // L34 Urinary Symptoms
  fcp1HematuriaApproach, fcp1UrinarySymptomsLuts,
  // L35 Pelvic Mass & Pelvic Pain
  fcp1PelvicMassApproach, fcp1PelvicPainApproach,
  // L36 Sexual Assault
  fcp1SexualAssaultForensic, fcp1SexualAssaultMedical,
  // L37 Medical Ethics & Professionalism
  fcp1MedicalEthicsPrinciples, fcp1ProfessionalismConsent,
  // L38 Medical Law for Physicians
  fcp1MedicalLawThailand, fcp1MedicalNegligenceConfidentiality,

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
  actionPotentialGenesis, actionPotentialPropagationRefractory, ionChannelsStructureGating, gradedPotentialsCableProperties,
  // L5 Regulation of the Resting Membrane Potential
  restingMembranePotentialNernst, goldmanRmpRegulation,
  // L6 Neurotransmitters & Neuromodulators
  neurotransmittersTypesLifecycle, synapticTransmissionEpspIpsp, neuromuscularJunctionTransmission, neurotransmitterSystemsCatalog,
  // L7 Cell Communication
  cellSignalingModesReceptors, secondMessengerSystems,
  // L8 Synaptic Plasticity
  synapticPlasticityLtp, synapticPlasticityLtdMemory,
  // L9 Autonomic Nervous System
  autonomicSympatheticParasympathetic, autonomicNeurotransmittersReceptors,
  // L10 Reflexes
  reflexArcStretchWithdrawal, muscleSpindleGolgiTendonOrgan, reflexTypesClinicalTesting,
  // L11 Cellular Aging & Cell Death
  apoptosisNecrosis, cellularAgingTheories, cellInjuryFreeRadicals,

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
  heartAnatomyChambersValves, systemicPulmonaryCirculation, coronaryCirculation,
  // L2 Histology of the Cardiovascular System
  heartWallCardiacHistology, bloodVesselHistology,
  // L3 Development of the Cardiovascular System
  heartTubeLoopingSeptation, fetalCirculationShunts,
  // L4 Cardiac Electrophysiology
  cardiacActionPotential, pacemakerConductionSystem, cardiacIonCurrentsChannels,
  // L5 ECG Formation
  ecgFormationWaves, cardiacElectricalAxisVectors,
  // L6 Electrocardiography
  ecgLeadsAxis, ecgIntervalsSegments,
  // L7 Regulation of Blood Pressure
  bloodPressureBaroreceptorReflex, longTermBpRaas,
  // L8 ECG in Clinical Practice
  ecgSystematicInterpretation, ecgChamberEnlargement,
  // L9 Echocardiography & Chest X-ray
  echocardiographyBasics, chestXrayCardiac,
  // L10 Cardiac Cycle & Hemodynamics
  cardiacCycleHeartSounds, hemodynamicsPreloadAfterloadCardiacOutput, jugularVenousPressureWaveform, frankStarlingCardiacFunction,
  // L11 Biomarkers in ACS
  cardiacBiomarkersAcs,
  // L12 Ambulatory Blood Pressure Monitoring
  bloodPressureMeasurementAbpm,
  // L13 Early Clinical Exposure (CVS)
  cardiovascularExamination, heartSoundsMurmursAuscultation,

  // ── HRU-1 (Human Renal and Urinary System-1) ──
  // L1 Microscopic Anatomy of the Kidney & Urinary Tract
  nephronKidneyHistology, lowerUrinaryTractHistology, renalBloodSupplyVasculature,
  // L2 Development of the Kidney & Urinary Tract
  kidneyDevelopmentMetanephros, kubCongenitalAnomalies,
  // L3 Glomerular Filtration, Hemodynamics & Tubular Transport
  glomerularFiltrationGfr, renalHemodynamicsAutoregulation, tubularReabsorptionSecretion, renalClearancePrinciples,
  // L4 Urinary Concentration & Dilution
  urineConcentrationCountercurrent, adhWaterRegulation,
  // L5 Micturition
  micturitionReflex, neurogenicBladderDisorders,
  // L6 Body Fluids & Water Balance
  bodyFluidCompartmentsRenal, volumeWaterBalanceHormones, sodiumBalanceEcfVolume,
  // L7 Renal Handling of Electrolytes
  renalPotassiumHandling, renalCalciumPhosphateHandling,
  // L8 Urinalysis I: Physical & Chemical
  urinalysisPhysicalChemical, proteinuriaEvaluation, acuteKidneyInjuryAzotemia,
  // L9 Biochemistry of Urine
  urineBiochemicalComposition,
  // L10 Urinalysis II: Urine Sediment
  urineMicroscopySediment, urinaryCrystalsAndStones,
  // L11 Renal Metabolism
  renalMetabolismGluconeogenesis, renalEndocrineFunctions, chronicKidneyDiseaseUremia,
  // L12 Renal Acid-Base Balance
  renalBicarbonateReabsorption, renalAcidExcretion, acidBaseDisordersCompensation,

  // ── HRS-2 (Human Respiratory System-2) ──
  // L1 Bacterial Infection of the Upper Respiratory Tract
  pharyngitisTonsillitisDiphtheria, otitisMediaSinusitisEpiglottitis,
  // L2 Common Pathology of the Upper Respiratory Tract
  nasalSinusInflammatoryPathology, nasopharyngealLaryngealTumors,
  // L3 Respiratory Pharmacology
  coughColdAllergyDrugs, mucolyticsCoughPharmacology,
  // L4 Pathology of Obstructive Lung Diseases
  copdEmphysemaChronicBronchitis, asthmaBronchiectasisPathology, cysticFibrosis, pulmonaryFunctionTestsInterpretation,
  // L5 Pathology of Restrictive Lung Diseases
  pulmonaryFibrosisPneumoconioses, sarcoidosisGranulomatousLung, hypersensitivityEosinophilicLungDisease,
  // L6 Bacterial Infection of the Lower Respiratory Tract
  communityAcquiredPneumonia, hospitalAspirationPneumoniaAbscess,
  // L7 Fungal Lung Infections
  fungalLungInfections,
  // L8 Viral Respiratory Pathogens & Lung Infection
  influenzaCovidPneumonia, otherRespiratoryViruses,
  // L9 Parasitic Lung Infection
  parasiticLungInfections,
  // L10 Pathology of Pulmonary Infection
  pneumoniaPathologyPatterns, tuberculosisPathology,
  // L11 Ventilation & Circulatory Disorders of the Lung
  pulmonaryEmbolismEdema, ardsPulmonaryHypertensionAtelectasis, obstructiveSleepApnoea, pulmonaryHypertensionCorPulmonale,
  // L12 Pulmonary Neoplasms
  nonSmallCellLungCarcinoma, smallCellAndOtherLungTumors, solitaryPulmonaryNodule,
  // L13 Drugs for Lower Respiratory Disease
  asthmaCopdPharmacology,
  // L14 Antibiotics for Respiratory Diseases
  respiratoryTractAntibiotics,
  // L15 Antiviral Drugs in Respiratory Infection
  respiratoryAntiviralDrugs,
  // L16 Anti-Tuberculosis Drugs
  antiTuberculosisDrugs, tuberculosisClinicalLatentMdr,
  // L17 Pathology of the Mediastinum & Pleura
  pleuralEffusionPneumothoraxMesothelioma, mediastinalMasses,
  // L18 Chest Radiology
  chestRadiographInterpretation, chestCtImagingPatterns,
  // L19 Early Clinical Exposure (HRS-II)
  respiratoryClinicalApproach, respiratoryFailureOxygenTherapy,

  // ── HGB-2 (Human Gastrointestinal and Biliary Tract System-2) ──
  // L1 Pathology of the Upper GI Tract
  esophagealDisordersPathology, gastritisAndGastropathy, gastricCarcinomaLymphoma, gastrointestinalBleedingApproach,
  // L2 Pathology of the Lower GI Tract
  inflammatoryBowelDisease, colorectalPolypsCarcinoma, appendicitisDiverticularIschemicBowel,
  // L3 Pathology of the Liver
  hepatitisLiverInjuryPatterns, cirrhosisFattyLiverPortalHypertension, hepatocellularCarcinomaLiverTumors, gallstonesCholecystitisCholangitis, bilirubinMetabolismJaundice, liverFunctionTestsInterpretation, autoimmuneMetabolicLiverDisease,
  // L4 Pathology of the Exocrine Pancreas
  acuteChronicPancreatitis, pancreaticCarcinoma,
  // L5 Drugs in GI Disorders & ORS
  antiemeticsProkinetics, laxativesAntidiarrhealsOrs, ibsFunctionalGiDisorders,
  // L6 Peptic Ulcer Disease
  pepticUlcerDisease, acidSuppressionHPyloriTherapy,
  // L7 Nutrition & Malnutrition
  nutritionEnergyProteinMalnutrition, nutritionalAssessmentSupport,
  // L8 Obesity
  obesityPathophysiology, obesityManagementBariatricSurgery, gutHormonesAppetiteRegulation,
  // L9 Drugs in Obesity
  obesityPharmacotherapy,
  // L10 Pharmacology in Liver Disease
  pharmacologyInLiverDisease,
  // L11 Viral Hepatitis
  hepatitisAeAcute, hepatitisBcdChronic, viralHepatitisPreventionImmunization,
  // L12 Viral Gastroenteritis
  viralGastroenteritis,
  // L13 Bacterial GI Infection I
  secretoryToxigenicEnteritis, inflammatoryInvasiveEnteritis,
  // L14 Bacterial GI Infection II
  foodPoisoningPostInfectious,
  // L15 Intestinal Roundworms
  intestinalRoundwormsPhasmid,
  // L16 Aphasmid Nematodes
  aphasmidNematodes,
  // L17 GI Flukes & Tapeworms
  liverFlukesCholangiocarcinoma, intestinalFlukesTapeworms,
  // L18 Vitamins & Trace Elements
  fatSolubleVitamins, waterSolubleVitaminsTraceElements,
  // L19 Eating Disorders
  eatingDisorders,

  // ── PHI (Parasitology of Human Infectious Diseases) ──
  // L1 Introduction to Parasitology
  parasitologyHostRelationships, parasiteTransmissionDiagnosis,
  // L2 Introduction to Protozoology
  protozoaClassificationBiology,
  // L3 Amoebae & Free-Living Amoebae
  entamoebaHistolyticaAmoebiasis, freeLivingNonpathogenicAmoebae,
  // L4 Flagellates & Ciliates
  giardiaIntestinalFlagellates, trichomonasBalantidium,
  // L5 Introduction to Helminths & Ascariasis
  helminthClassificationOverview, ascariasisLargeRoundworm,
  // L6 Toxocariasis & Anisakiasis
  toxocariasisLarvaMigrans, anisakiasis,
  // L7 Gnathostomiasis & Angiostrongyliasis
  gnathostomiasis, angiostrongyliasisEosinophilicMeningitis,
  // L8 Trematodes & Cestodes
  trematodesFlukesOverview, cestodesTapewormsOverview,
  // L9 Apicomplexa
  intestinalCoccidiaCryptosporidium, toxoplasmosis, bloodApicomplexaMalariaBabesia,
  // L10 Medical Acarology (Mites)
  medicalMitesAcarology,
  // L11 Sparganosis & Echinococcosis
  sparganosisSpirometra, echinococcosisHydatid,
  // L12 Medical Entomology & Mosquito Vectors
  medicalEntomologyVectors, mosquitoBorneDiseases,
  // L13 Medical Flies
  myiasisAndFlyVectors, bloodsuckingFlyVectors,

  // ── HNS-1 (Human Nervous and Special Senses System-1) ── reordered 2026-07-02
  // L1 Spinal Cord
  spinalCordAnatomyOrganization, dermatomesSpinalNerves,
  // L2 Brainstem
  brainstemAnatomyOrganization, cranialNervesOverview,
  // L3 Cerebral Cortex
  cerebralCortexOrganization, corticalAreasLanguage,
  // L4 Forebrain: Cerebrum
  cerebrumLobesWhiteMatter,
  // L5 Forebrain: Diencephalon
  diencephalonThalamusHypothalamus,
  // L6 Blood Supply, Ventricles & CSF
  cerebralBloodSupply, ventriclesCsfCirculation,
  // L7 Sensory Receptors
  sensoryReceptorsTransduction,
  // L8 Ascending Sensory Pathways & Pain
  somatosensoryAscendingPathways, painNociceptionModulation,
  // L9 Motor System
  motorSystemCorticospinalControl, proprioceptorsMuscleSpindleReflexes,
  // L10 Neurotransmission
  cnsNeurotransmissionSystems, synapticPlasticityLearning,
  // L11 Brainstem Motor Centers
  brainstemDescendingMotorTracts,
  // L12 Basal Ganglia
  basalGangliaCircuitry,
  // L13 Cerebellum
  cerebellumAnatomyFunction,
  // L14 Auditory, Gustatory & Olfactory Pathways
  auditoryPathwayAnatomy, gustatoryOlfactoryPathways,
  // L15 Physiology of Hearing
  auditoryPhysiologyHearing,
  // L16 Phototransduction
  visualPhototransduction,
  // L17 Histology of the Ear & Chemical Senses
  innerEarHairCellHistology, tasteOlfactionReceptors,
  // L18 Limbic System
  limbicSystemEmotionMemory,
  // L19 Brain Metabolism
  brainEnergyMetabolism, neuronsGliaNeurohistology,
  // L20 Reticular Activating System, Sleep & Circadian Rhythms
  reticularActivatingSystemConsciousness, sleepCircadianRhythms,
  // L21 Vestibular System
  vestibularSystemPhysiology,
  // L22 Development of the Nervous System
  neuralTubeDevelopmentDefects, brainVesiclesNeuralCrest,
  // L23 Integrative Functions of the Brain
  higherCorticalFunctions, consciousnessAttention, autonomicNervousSystem,

  // ── BCP (Basic Clinical Pharmacology) ──
  // L1 Drug Development
  drugDevelopmentBioequivalence,
  // L2 Pharmacokinetics
  pharmacokineticsAdme,
  // L3 Pharmacodynamics
  pharmacodynamicsReceptorsDoseResponse,
  // L4 Antifungals
  antifungalAgents,
  // L5 Anthelmintics
  anthelminticAgents,
  // L6 Antivirals
  antiviralAntiretroviralAgents,
  // L7 Antibacterials
  antibacterialCellWallAgents, antibacterialProteinSynthesisInhibitors,
  // L8 Cholinergic drugs
  cholinergicDrugs,
  // L9 Adrenergic drugs
  adrenergicDrugs,
  // L10 Antineoplastics
  antineoplasticPrinciples,
  // L11 Drug interactions
  drugInteractionsMechanisms,
  // L12 Antidotes
  antidotesPrinciples,
  // L13 Immunomodulators
  immunomodulatingAgents,
  // L14 Pharmacogenomics
  pharmacogenomics,
  // L15 Drug allergy & ADR
  adverseDrugReactionsAllergy,
  // BCP expansion (2026-07-02): sub-topic deep-dives per lecture
  preclinicalDrugDiscovery, drugAbsorptionRoutes, drugMetabolismCyp450,
  agonistsAntagonistsPharmacology, drugReceptorSignalTransduction,
  superficialAntifungalsClinical, anthelminticDrugClasses,
  herpesvirusCmvAntivirals, hivAntiretroviralTherapy,
  antibacterialResistanceMechanisms, antimycobacterialDrugs,
  antimuscarinicAnticholinergicDrugs, adrenergicAntagonistsBlockers,
  cytotoxicChemotherapyAgents, targetedCancerTherapy,
  pharmacodynamicDrugInteractions, toxidromesPoisoningApproach,
  immunosuppressantDrugs, immunostimulantsBiologics,
  pharmacogenomicsClinicalImplementation, adrClassificationMechanisms,
  drugHypersensitivityScars,

  // ── HSC (Human Skin and Connective Tissue System) ──
  // L1 Dermatologic diagnosis
  dermatologicDiagnosisMorphology,
  // L2 Skin anatomy & histology
  skinAnatomyHistology,
  // L3 Skin aging
  skinAging,
  // L4 Cutaneous immunology
  cutaneousImmunologyHypersensitivity,
  // L5 Skin physiology & thermoregulation
  skinPhysiologyThermoregulation,
  // L6 Wound healing
  woundHealing,
  // L7 Skin infections
  skinInfectionsBacterialFungalViral,
  // L8 Infestations & helminths
  infestationsHelminthicSkin,
  // L9 Papulosquamous & vesiculobullous
  papulosquamousDiseases, vesiculobullousDiseases,
  // L10 Panniculitis & vasculitis
  panniculitisVasculitisSkin,
  // L11 Connective tissue diseases
  cutaneousConnectiveTissueDiseases,
  // L12 Cutaneous drug reactions
  cutaneousDrugReactions,
  // L13 Pediatric skin
  pediatricSkinDiseases,
  // L14 Hair diseases
  hairDiseases,
  // L15 Pigmentary disorders
  pigmentaryDisorders,
  // L16 Eczema & dermatitis
  eczemaDermatitis,
  // L17 Acne
  acneVulgaris,
  // L18 Skin neoplasms
  skinNeoplasms,
  // L19 Dermatologic therapy
  dermatologicTherapy,
  // HSC expansion (2026-07-02): L1 diagnosis deep-dives
  skinExaminationApproach, dermatologicInvestigations, skinSignsSystemicDisease,
  // HSC expansion (2026-07-02): L2-L19 sub-topic deep-dives (to 2.5:1)
  epidermisKeratinocyteBiology, dermisAppendagesGlands, photoagingPhotoprotection,
  skinImmuneSystemCells, cutaneousHypersensitivityReactions, skinBarrierFunction,
  chronicWoundsLegUlcers, bacterialSkinInfections, viralSkinInfections,
  scabiesPediculosisClinical, psoriasisClinicalManagement, cutaneousVasculitis,
  cutaneousLupusDermatomyositis, severeCutaneousDrugReactions, neonatalSkinConditions,
  vascularBirthmarksGenodermatoses, alopeciaClinicalApproach, hyperpigmentationMelasma,
  atopicDermatitisClinical, contactDermatitisClinical, acneManagement,
  melanomaClinical, keratinocyteCarcinomas, topicalDermatologicTherapy,
  systemicDermatologicTherapy,

  // ── HRU-2 (Human Renal and Urinary System-2) ──
  // L1 Renal defense
  renalDefenseMechanisms,
  // L2 Infectious UTI
  utiPathogenesisMicrobiology,
  // L3 Urine collection & examination
  urinalysisUrineExamination,
  // L4 Urinary tract pathology
  urinaryTractPathology,
  // L5 UTI clinical
  utiClinicalManagement,
  // L6 Nephrotic & nephritic
  nephroticSyndrome, nephriticSyndrome,
  // L7 Interstitial & mechanical
  interstitialNephritisObstruction,
  // L8 Cystic diseases
  cysticKidneyDiseases,
  // L9 Neoplasms
  urinarySystemNeoplasms,
  // L10 Renovascular
  renovascularDisorders,
  // L11 AKI & CKD
  acuteKidneyInjury, chronicKidneyDisease,
  // L12 Diuretics
  diureticsPharmacology,
  // L13 Drug dosing in CKD
  drugDosingCkd,
  // L14 Glomerular disease overview
  glomerularDiseaseOverview,
  // L15 Fluid & electrolyte disorders
  fluidElectrolyteDisorders,
  // L16 Incontinence drugs
  urinaryIncontinenceDrugs,
  // L17 Acid–base
  acidBaseDisorders,
  // L18 Blood gas & anion gap
  bloodGasAnionGap,
  // HRU-2 expansion (2026-07-02): sub-topic deep-dives (to 2.5:1)
  urinaryTractHostDefenses, uropathogenicEcoliVirulence, catheterAssociatedUti,
  urineMicroscopyCastsCrystals, urineDipstickChemistry, nephrolithiasisUrolithiasis,
  acutePyelonephritisClinical, minimalChangeFsgs, membranousMembranoproliferativeGn,
  igaNephropathyPostinfectiousGn, obstructiveUropathyHydronephrosis, acuteInterstitialNephritis,
  polycysticKidneyDisease, renalCellCarcinoma, bladderUrothelialCarcinoma,
  renalArteryStenosis, akiPrerenalIntrinsicPostrenal, ckdMineralBoneDisorder,
  renalReplacementTherapy, loopThiazideDiuretics, potassiumSparingOsmoticDiuretics,
  nephrotoxicDrugs, glomerularDiseaseImmuneMechanisms, sodiumWaterDisorders,
  potassiumDisorders, highAnionGapMetabolicAcidosis,

  // ── MHI (Microbiology of Human Infectious Diseases) — virology block ──
  // L1 Introduction to medical virology
  virologyPrinciplesClassification,
  // L2 RNA viruses I (non-enveloped)
  nonenvelopedRnaViruses,
  // L3 RNA viruses II (enveloped)
  envelopedRnaVirusesOrthomyxoParamyxo, otherEnvelopedRnaViruses,
  // L4 Retroviruses
  retrovirusesHiv,
  // L5 RNA viruses III (arboviruses)
  arbovirusesMosquitoBorne,
  // L6 DNA viruses I (herpesviruses)
  dnaVirusesHerpesviruses,
  // L7 DNA viruses II
  dnaVirusesOther,
  // MHI bacteriology block (L8–L19, 2026-07-02): 2 modules/lecture
  bacterialStructureCellWall, bacterialPhysiologyGrowthIdentification,
  bacterialGeneTransfer, antibioticResistanceMechanisms,
  staphylococcusAureus, coagulaseNegativeStaphylococci,
  streptococcusPyogenesAgalactiae, streptococcusPneumoniaeEnterococci,
  bacillusAnthracisCereus, corynebacteriumListeria,
  enterobacteralesEcoliKlebsiella, salmonellaShigellaYersinia,
  vibrioCampylobacterHelicobacter, pseudomonasBurkholderiaNonfermenters,
  neisseriaMeningitidisGonorrhoeae, haemophilusBordetellaSmallGramNegativeRods,
  clostridiaAnaerobicPathogens, bacteroidesGramNegativeAnaerobes,
  rickettsiaOrientiaCoxiella, chlamydiaSpecies,
  mycobacteriumTuberculosisLeprae, nocardiaActinomyces,
  spirochetesTreponemaBorreliaLeptospira, mycoplasmaUreaplasma,
  // MHI mycology block (L20–L25, 2026-07-02): 2 modules/lecture
  fungalBiologyClassification, antifungalAgentsLabDiagnosis,
  mycotoxinsAflatoxin, mushroomPoisoningSyndromes,
  candidaCandidiasis, cryptococcusMalassezia,
  systemicDimorphicFungi, talaromycesSporothrix,
  dermatophytesTinea, opportunisticMoldsAspergillusMucorales,
  mycetomaEumycetoma, chromoblastomycosisSubcutaneousMycoses,

  // ── BAP (Basic Human Anatomical Pathology) — general pathology (Year 2) ──
  // L1 Introduction to Pathology
  introPathologyScope, diagnosticPathologyMethods,
  // L2 Cell Injury & Cell Death
  cellInjuryMechanisms, necrosisPatterns, apoptosisCellDeath,
  // L3 Adaptive Responses to Cell Injury
  cellularAdaptationsGrowth, metaplasiaDysplasia,
  // L4 Intracellular Accumulations
  intracellularAccumulationsCalcification,
  // L5 Inflammation & Repair
  acuteInflammation, inflammatoryMediatorsLeukocytes, chronicInflammationGranuloma, tissueRepairWoundHealing,
  // L6 Hemodynamic Disorders
  edemaHyperemiaCongestion, hemostasisThrombosisEmbolism, infarctionShock,
  // L7 Neoplasm
  neoplasiaNomenclature, neoplasiaDifferentiationInvasion, carcinogenesisMolecular, cancerSpreadStagingClinical,
  // L8 Environmental & Occupational Pathology
  environmentalChemicalTobaccoInjury, physicalNutritionalInjury,
  // Additional (supplementary) topics — extra modules per subject (see
  // content/additional-topics). Plain (no highlighter markup), same structure.
  ...additionalTopics,
];

// Register the additional-topic sources → subject so they group and resolve
// exactly like any lecture source. Must run before the by-subject / set
// aggregations below (which read subjectOfSource).
Object.assign(subjectOfSource, additionalTopicSubjects);

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
//
// A few subjects reuse a lecture number for two distinct lectures (HNS-1 has two
// L6 and two L17). Since the slug keys on `{subject}-l{n}`, those two would map to
// the same slug and one whole-lecture page would shadow the other. Pin the second
// lecture of each such pair to an explicit, unique slug (keyed by exact source);
// every other slug is unchanged.
const SET_SLUG_OVERRIDES: Record<string, string> = {
  'L6 — Ventricular System & CSF': 'l6-ventricles-csf',
  'L17 — Histology of Chemical Senses': 'l17-chemical-senses',
};

export function lectureSetSlug(source: string): string {
  const m = source.match(/^L(\d+)/i);
  const base = SET_SLUG_OVERRIDES[source] ?? (m ? `l${m[1]}` : source.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
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
