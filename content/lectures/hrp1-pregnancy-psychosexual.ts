import { hrp1Lecture } from './hrp1-shared';

const l13 = 'L13 — Pregnancy & Puerperium';
const l14 = 'L14 — Child Abuse & Trauma';
const l15 = 'L15 — Human Sexual Response & Sexual Dysfunction';
const l16 = 'L16 — Gender Identity';

export const hrp1PregnancyPsychosexual = [
  hrp1Lecture({
    id: 'hrp1-prenatal-care-risk-screening',
    title: 'Pregnancy Diagnosis, Prenatal Care & Risk Screening',
    source: l13,
    tags: [
      { kind: 'investigation', label: 'Antenatal screening and diagnosis' },
      { kind: 'exam', label: 'Presumptive, probable and positive signs' },
    ],
    highYield: [
      'Pregnancy evidence progresses from presumptive symptoms to probable findings and **positive confirmation by fetal cardiac activity or ultrasound**.',
      'Early prenatal care establishes gestational age, maternal conditions, medications/exposures, infection and genetic risks, blood group, and baseline health.',
      'Screening estimates risk; diagnostic testing confirms a condition. Informed consent should explain timing, limitations, false results, and options.',
      'Programs commonly screen for aneuploidy, hemoglobinopathy, infection, preeclampsia and gestational diabetes according to local guidance and individual risk.',
    ],
    chainTitle: 'Early confirmation opens a timed pathway of maternal and fetal risk assessment',
    steps: [
      { label: 'Confirm pregnancy and location/viability when indicated' },
      { label: 'Date gestation and identify maternal risk' },
      { label: 'Offer time-sensitive screening with consent', emphasis: 'key' },
      { label: 'Use diagnostic testing only when appropriate and chosen' },
    ],
    examFindings: [
      { sign: 'Fetal cardiac activity on ultrasound', mechanism: 'Direct fetal evidence is a positive sign of pregnancy', significance: 'key' },
      { sign: 'Amenorrhea, nausea and breast tenderness', mechanism: 'Common hormonal symptoms are presumptive but not specific', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Ultrasound plus hCG in early uncertain pregnancy', meaning: 'Assesses location, dating and viability' },
      { clue: 'Risk-based prenatal laboratory/screening panel', meaning: 'Identifies preventable maternal–fetal complications' },
    ],
    treatment: [
      { logic: 'Start preventive care early and individualize screening', detail: 'Folic acid, vaccination review, medication safety, and timely referrals reduce avoidable risk.' },
    ],
    mnemonic: { hook: 'Confirm, date, screen, prevent', expansion: ['Screening estimates; diagnosis confirms'] },
    trap: {
      questionCategory: 'Prenatal testing',
      wrongInstinct: 'A positive screening result is a definitive fetal diagnosis',
      rightAnswer: 'Screening changes probability and may lead to diagnostic testing',
      why: 'Screening tests intentionally trade certainty for lower invasiveness and broad reach.',
    },
    quiz: {
      stem: 'Which is a positive rather than presumptive sign of pregnancy?',
      options: ['Nausea', 'Amenorrhea', 'Fetal cardiac activity on ultrasound', 'Breast tenderness'],
      answer: 2,
      explanation: 'Direct visualization or detection of fetal cardiac activity confirms pregnancy.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-maternal-adaptation-pregnancy',
    title: 'Maternal Anatomic, Cardiovascular & Metabolic Adaptation',
    source: l13,
    tags: [
      { kind: 'mechanism', label: 'Physiologic adaptation to pregnancy' },
      { kind: 'exam', label: 'Normal changes vs pathology' },
    ],
    highYield: [
      '**Plasma volume and cardiac output rise; systemic vascular resistance falls**, producing physiologic hemodilution and often a midpregnancy blood-pressure nadir.',
      'Ventilation rises through increased tidal volume, causing compensated mild respiratory alkalosis; diaphragm elevates as uterus enlarges.',
      'GFR rises, urinary collecting systems dilate, and pregnancy is hypercoagulable; venous stasis increases thromboembolic risk.',
      'Insulin resistance, lipid use, weight gain, uterine/breast growth, ligament laxity, and GI slowing support fetal growth but can mimic disease.',
    ],
    chainTitle: 'Maternal systems expand delivery capacity while preserving fetal substrate',
    steps: [
      { label: 'Placental vasodilation lowers vascular resistance' },
      { label: 'Plasma volume and cardiac output increase', emphasis: 'key' },
      { label: 'Respiratory and renal clearance increase' },
      { label: 'Metabolism shifts toward fetal nutrient availability' },
    ],
    examFindings: [
      { sign: 'Soft systolic flow murmur with increased pulse', mechanism: 'Higher blood volume/output increases flow across normal valves', significance: 'supportive' },
      { sign: 'Unilateral leg swelling or hypoxia', mechanism: 'Not a routine change; evaluate thrombosis/embolism urgently', significance: 'key' },
    ],
    investigations: [
      { clue: 'Pregnancy-adjusted reference ranges', meaning: 'Prevents labeling normal hemodilution or respiratory changes as disease' },
      { clue: 'Symptom-triggered assessment for preeclampsia, VTE or cardiopulmonary disease', meaning: 'Separates physiologic adaptation from dangerous pathology' },
    ],
    treatment: [
      { logic: 'Know normal adaptations, but do not normalize red flags', detail: 'Severe dyspnea, focal swelling, hypertension, bleeding, or neurologic symptoms require prompt evaluation.' },
    ],
    mnemonic: { hook: 'Volume, ventilation, filtration rise', expansion: ['Resistance falls', 'Clotting tendency rises'] },
    trap: {
      questionCategory: 'Pregnancy physiology',
      wrongInstinct: 'Every fall in hemoglobin indicates iron deficiency',
      rightAnswer: 'Plasma-volume expansion causes physiologic hemodilution, though true deficiency must still be assessed',
      why: 'Plasma volume rises more than red-cell mass.',
    },
    quiz: {
      stem: 'Which cardiovascular change is normal in pregnancy?',
      options: ['Falling plasma volume', 'Increased cardiac output', 'Markedly increased systemic vascular resistance', 'Progressive severe hypertension'],
      answer: 1,
      explanation: 'Cardiac output and plasma volume rise while systemic resistance generally falls.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-labor-stages-mechanics',
    title: 'Labor Recognition, Stages & Cardinal Movements',
    source: l13,
    tags: [
      { kind: 'mechanism', label: 'Power, passenger and passage' },
      { kind: 'exam', label: 'True labor and fetal position' },
    ],
    highYield: [
      'True labor consists of regular painful contractions producing **progressive cervical change**; false labor lacks sustained progression.',
      'First stage runs to full dilation, second to fetal delivery, third to placental delivery, and fourth is immediate recovery/observation.',
      'Progress depends on powers (contractions/pushing), passenger (fetus), and passage (pelvis/soft tissues), with position and support also important.',
      'Cardinal movements in vertex birth include engagement, descent, flexion, internal rotation, extension, restitution/external rotation, and expulsion.',
    ],
    chainTitle: 'Coordinated uterine force moves a flexed fetal head through the pelvic axis',
    steps: [
      { label: 'Engagement and descent' },
      { label: 'Flexion and internal rotation' },
      { label: 'Extension beneath pubic arch', emphasis: 'key' },
      { label: 'Restitution, shoulder rotation and expulsion' },
    ],
    examFindings: [
      { sign: 'Contractions with progressive dilation/effacement', mechanism: 'Defines true labor', significance: 'key' },
      { sign: 'Leopold maneuvers identify lie/presentation', mechanism: 'Abdominal palpation estimates fetal orientation', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Serial cervical and fetal assessments', meaning: 'Measures labor progress and tolerance' },
      { clue: 'Fetal heart-rate monitoring according to risk/context', meaning: 'Assesses fetal response to labor' },
    ],
    treatment: [
      { logic: 'Respond to the specific cause of abnormal progress', detail: 'Power, passenger, and passage problems require different interventions.' },
    ],
    mnemonic: { hook: 'Engage, descend, flex, rotate, extend, restitute, expel', expansion: ['The cardinal movement sequence'] },
    trap: {
      questionCategory: 'Labor diagnosis',
      wrongInstinct: 'Painful contractions alone prove true labor',
      rightAnswer: 'Progressive cervical change is the discriminator',
      why: 'False labor can be uncomfortable but does not produce sustained dilation/effacement.',
    },
    quiz: {
      stem: 'What separates true labor from false labor most reliably?',
      options: ['Maternal anxiety', 'Progressive cervical change', 'Back discomfort', 'Time of day'],
      answer: 1,
      explanation: 'True labor produces progressive dilation and effacement.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-puerperium-postpartum-care',
    title: 'Puerperium, Involution & Postpartum Care',
    source: l13,
    tags: [
      { kind: 'mechanism', label: 'Postpartum physiologic recovery' },
      { kind: 'exam', label: 'Hemorrhage and infection red flags' },
    ],
    highYield: [
      'Puerperium includes **uterine involution, placental-site healing, lochia progression**, lactation, fluid shifts, and recovery of pelvic/abdominal tissues.',
      'Lochia typically changes rubra → serosa → alba; foul odor, heavy bleeding, persistent fever, or worsening pain are abnormal.',
      'Uterine atony is a major postpartum-hemorrhage cause; retained tissue, trauma, and coagulopathy are other core categories.',
      'Postpartum care addresses bleeding, infection, blood pressure, bladder/bowel function, thrombosis, breastfeeding, mood, contraception, safety, and follow-up.',
    ],
    chainTitle: 'Placental delivery triggers uterine contraction and whole-body postpartum recovery',
    steps: [
      { label: 'Myometrium contracts and compresses placental vessels', emphasis: 'key' },
      { label: 'Uterus involutes and lochia evolves' },
      { label: 'Fluid, endocrine and lactation shifts occur' },
      { label: 'Physical and mental recovery continues for weeks' },
    ],
    examFindings: [
      { sign: 'Boggy enlarged uterus with heavy bleeding', mechanism: 'Uterine atony fails to compress placental-site vessels', significance: 'key' },
      { sign: 'Fever with uterine tenderness and foul lochia', mechanism: 'Postpartum uterine infection', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Immediate quantified bleeding and focused examination', meaning: 'Rapidly identifies hemorrhage category' },
      { clue: 'Postpartum mood and safety screening', meaning: 'Detects depression, psychosis, trauma, or unsafe environment' },
    ],
    treatment: [
      { logic: 'Treat postpartum hemorrhage as an emergency', detail: 'Resuscitation and cause-directed uterotonics/procedures proceed in parallel.' },
    ],
    mnemonic: { hook: 'Four Ts of hemorrhage', expansion: ['Tone', 'Tissue', 'Trauma', 'Thrombin'] },
    trap: {
      questionCategory: 'Postpartum bleeding',
      wrongInstinct: 'All postpartum bleeding is normal lochia',
      rightAnswer: 'Heavy, increasing, symptomatic, or unstable bleeding requires urgent evaluation',
      why: 'Normal lochia should not produce shock or uncontrolled blood loss.',
    },
    quiz: {
      stem: 'What is the most common major mechanism of postpartum hemorrhage?',
      options: ['Uterine atony', 'Ovulation', 'Hyperthyroidism', 'Cervical mucus'],
      answer: 0,
      explanation: 'Failure of uterine tone prevents compression of placental-site vessels.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-child-maltreatment-recognition',
    title: 'Child Maltreatment Types, Risk & Recognition',
    source: l14,
    tags: [
      { kind: 'mechanism', label: 'Physical, sexual, emotional abuse and neglect' },
      { kind: 'exam', label: 'History–injury mismatch' },
    ],
    highYield: [
      'Child maltreatment includes **physical, sexual, and emotional abuse; neglect; exploitation; and harmful acts or omissions** within a relationship of responsibility, trust, or power.',
      'Risk factors may occur in child, caregiver, relationship, community, and societal domains; risk is not proof and should not replace careful assessment.',
      'Red flags include inconsistent/changing history, delay in care, injury incompatible with development, patterned/multiple-age injuries, poor growth, or concerning behavior.',
      'Most findings are nonspecific; listen, examine gently, document objectively, and involve trained multidisciplinary safeguarding teams.',
    ],
    chainTitle: 'A concerning signal prompts safety-focused, evidence-preserving assessment',
    steps: [
      { label: 'Recognize injury, behavior, or care-pattern concern' },
      { label: 'Assess immediate medical and environmental safety', emphasis: 'key' },
      { label: 'Obtain developmentally appropriate history/exam' },
      { label: 'Document and activate multidisciplinary safeguarding pathway' },
    ],
    examFindings: [
      { sign: 'Injury incompatible with stated mechanism or child development', mechanism: 'History and biomechanics do not align', significance: 'key' },
      { sign: 'Multiple injuries of different ages', mechanism: 'May suggest repeated trauma but needs expert assessment', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Objective verbatim documentation and body diagrams/photos per protocol', meaning: 'Preserves clinical evidence without interpretation inflation' },
      { clue: 'Age/injury-specific imaging and laboratory evaluation', meaning: 'Detects occult injury and medical mimics' },
    ],
    treatment: [
      { logic: 'Safety comes first', detail: 'Treat injuries, protect the child, and follow local mandatory reporting/safeguarding procedures with specialist support.' },
    ],
    mnemonic: { hook: 'Recognize, respond, record, refer', expansion: ['Risk is not proof; safety is the priority'] },
    trap: {
      questionCategory: 'Safeguarding assessment',
      wrongInstinct: 'One risk factor proves maltreatment',
      rightAnswer: 'Risk factors guide vigilance; diagnosis requires integrated evidence and expert assessment',
      why: 'Bias can harm families and children if probability is mistaken for proof.',
    },
    quiz: {
      stem: 'What is the first priority when child maltreatment is suspected?',
      options: ['Confront the suspected person immediately', 'Ensure the child’s immediate safety and medical stability', 'Delay documentation', 'Promise secrecy'],
      answer: 1,
      explanation: 'Immediate safety and urgent medical needs take priority before the broader investigation.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-child-sexual-abuse-response',
    title: 'Child Sexual Abuse: Trauma-informed Clinical Response',
    source: l14,
    tags: [
      { kind: 'mechanism', label: 'Safety, disclosure and evidence preservation' },
      { kind: 'exam', label: 'Non-leading history and gentle examination' },
    ],
    highYield: [
      'Sexual abuse includes contact and noncontact acts, exploitation, grooming, and exposure; **a normal physical examination does not exclude abuse**.',
      'Use calm, nonjudgmental, developmentally appropriate, open-ended prompts; avoid repeated or leading questioning.',
      'Assess urgent injury, pregnancy/STI risk, forensic timing, mental health, suicidality, and safe disposition using trained services.',
      'Reassure the child they did the right thing by telling, that it is not their fault, and that adults will work to keep them safe—without promising absolute confidentiality.',
    ],
    chainTitle: 'A disclosure is met with belief, safety, minimal questioning, and specialist care',
    steps: [
      { label: 'Listen calmly and use open prompts' },
      { label: 'Assess immediate safety and urgent health needs', emphasis: 'key' },
      { label: 'Preserve evidence and avoid repeated examination' },
      { label: 'Coordinate forensic, safeguarding, and psychological follow-up' },
    ],
    examFindings: [
      { sign: 'Normal genital examination', mechanism: 'Many abusive acts leave no injury or heal rapidly; normal findings do not exclude abuse', significance: 'key' },
      { sign: 'Behavioral change, STI, pregnancy or genital symptoms', mechanism: 'May be concerning but each needs careful differential assessment', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Specialist forensic examination according to timing/protocol', meaning: 'Balances health care, evidence, and minimizing retraumatization' },
      { clue: 'Targeted STI/pregnancy testing and follow-up', meaning: 'Addresses medical consequences' },
    ],
    treatment: [
      { logic: 'Provide first-line support without interrogating', detail: 'Safety, validation, practical support, and specialist referral reduce further harm.' },
    ],
    mnemonic: { hook: 'Listen, believe, protect, connect', expansion: ['Open questions', 'No blame', 'Specialist pathway'] },
    trap: {
      questionCategory: 'Sexual abuse examination',
      wrongInstinct: 'A normal exam rules out sexual abuse',
      rightAnswer: 'Normal examination is common and does not exclude abuse',
      why: 'Many acts cause no visible injury and mucosal injuries heal quickly.',
    },
    quiz: {
      stem: 'Which interviewing approach is best after a child begins disclosing abuse?',
      options: ['Repeated leading questions', 'Calm open-ended prompts', 'Demand exact chronology immediately', 'Promise never to tell anyone'],
      answer: 1,
      explanation: 'Open, minimal, non-leading questioning supports the child and protects the integrity of later specialist interviewing.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-neglect-emotional-abuse-safeguarding',
    title: 'Neglect, Emotional Abuse & Safeguarding Pathways',
    source: l14,
    tags: [
      { kind: 'mechanism', label: 'Cumulative developmental harm' },
      { kind: 'exam', label: 'Failure to meet health and developmental needs' },
    ],
    highYield: [
      'Neglect is **persistent failure to meet basic physical, medical, educational, emotional, or safety needs** when caregivers can reasonably do so.',
      'Emotional abuse includes persistent rejection, humiliation, threats, isolation, exploitation, or developmentally harmful expectations.',
      'Signs may include poor growth, incomplete care, unsafe supervision, developmental/attachment problems, withdrawal, aggression, anxiety, or school difficulties.',
      'Poverty is not itself neglect; assess resources, access, caregiver capacity, and intent while mobilizing support and protecting the child.',
    ],
    chainTitle: 'Repeated unmet needs create cumulative physical and developmental injury',
    steps: [
      { label: 'Basic need is persistently unmet' },
      { label: 'Growth, attachment, health or learning is affected' },
      { label: 'Clinician distinguishes unmet access from dangerous omission', emphasis: 'key' },
      { label: 'Multidisciplinary support and protection plan begins' },
    ],
    examFindings: [
      { sign: 'Growth faltering with missed care and food insecurity', mechanism: 'Needs/access and caregiving must be assessed together', significance: 'supportive' },
      { sign: 'Child reports persistent degradation or threats', mechanism: 'Emotional abuse can harm without physical injury', significance: 'key' },
    ],
    investigations: [
      { clue: 'Longitudinal health, growth, school and social records', meaning: 'Shows cumulative pattern rather than one snapshot' },
      { clue: 'Multidisciplinary family assessment', meaning: 'Identifies danger, disability, resources, and support needs' },
    ],
    treatment: [
      { logic: 'Combine protection with practical family support', detail: 'Safe caregiving may require medical, social, financial, educational, and legal coordination.' },
    ],
    mnemonic: { hook: 'Look for a pattern of unmet needs', expansion: ['Poverty is context, not automatic proof'] },
    trap: {
      questionCategory: 'Neglect',
      wrongInstinct: 'Any poverty-related hardship equals caregiver neglect',
      rightAnswer: 'Assess capacity, access, behavior, harm, and available support',
      why: 'Safeguarding must avoid punishing deprivation while still protecting the child.',
    },
    quiz: {
      stem: 'Which principle is most appropriate when assessing possible neglect?',
      options: ['Equate poverty with neglect', 'Assess longitudinal needs, access, capacity and harm', 'Ignore school information', 'Rely on one isolated visit'],
      answer: 1,
      explanation: 'Neglect is a pattern requiring contextual, longitudinal, multidisciplinary assessment.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-trauma-asd-ptsd-first-aid',
    title: 'Trauma, Acute Stress, PTSD & Psychological First Aid',
    source: l14,
    tags: [
      { kind: 'mechanism', label: 'Post-traumatic symptom clusters' },
      { kind: 'exam', label: 'Duration and functional impairment' },
    ],
    highYield: [
      'Trauma responses can include **intrusion, avoidance, negative mood/cognition, hyperarousal, dissociation, sleep problems, regression, and somatic symptoms**.',
      'Acute stress disorder occurs in the early post-trauma period; PTSD requires persistent symptoms and impairment beyond one month.',
      'Children express trauma differently by developmental stage; play, behavior, school, attachment, and caregiver regulation are important.',
      'Psychological first aid emphasizes safety, calming, practical needs, connection, information, and linkage—not forced debriefing.',
    ],
    chainTitle: 'Threat memory and arousal can persist after danger has ended',
    steps: [
      { label: 'Trauma overwhelms coping and safety' },
      { label: 'Intrusion/avoidance/arousal responses emerge' },
      { label: 'Persistence and impairment define disorder', emphasis: 'key' },
      { label: 'Safety and evidence-based trauma care support recovery' },
    ],
    examFindings: [
      { sign: 'Nightmares, avoidance and hypervigilance >1 month with impairment', mechanism: 'Persistent trauma symptom clusters support PTSD', significance: 'key' },
      { sign: 'Temporary distress immediately after trauma', mechanism: 'An early stress response may be expected and needs support/monitoring', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Developmentally appropriate trauma and safety assessment', meaning: 'Defines symptoms, duration, impairment and current danger' },
      { clue: 'Suicide, self-harm, substance and comorbidity screening', meaning: 'Identifies urgent and treatable risks' },
    ],
    treatment: [
      { logic: 'Stabilize safety and connect to trauma-focused care', detail: 'Do not force disclosure or single-session emotional debriefing.' },
    ],
    mnemonic: { hook: 'Look, listen, link', expansion: ['Safety', 'Calming', 'Practical support', 'Connection'] },
    trap: {
      questionCategory: 'Psychological first aid',
      wrongInstinct: 'Everyone should recount the trauma in detail immediately',
      rightAnswer: 'Provide safety and support without forcing disclosure',
      why: 'Compulsory debriefing can be distressing and is not the goal of first aid.',
    },
    quiz: {
      stem: 'Which action best fits psychological first aid?',
      options: ['Force detailed retelling', 'Support safety and practical needs', 'Promise symptoms will disappear', 'Avoid assessing current danger'],
      answer: 1,
      explanation: 'Psychological first aid is humane, practical, safety-focused support.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-sexual-response-models',
    title: 'Human Sexual Response Models',
    source: l15,
    tags: [
      { kind: 'mechanism', label: 'Desire, arousal, orgasm and resolution' },
      { kind: 'exam', label: 'EPOR and biopsychosocial models' },
    ],
    highYield: [
      '**Masters–Johnson describes excitement, plateau, orgasm, and resolution; Kaplan emphasizes desire, arousal, and orgasm**.',
      'Responses vary widely by person, context, relationship, age, health, medication, and culture; phases need not be linear or all present.',
      'Arousal combines central attention/emotion with genital vasocongestion and lubrication/erection; orgasm includes rhythmic pelvic contractions and subjective release.',
      'Sexual health is biopsychosocial and requires consent, safety, respect, and freedom from coercion or discrimination.',
    ],
    chainTitle: 'Central desire and context interact with autonomic genital responses',
    steps: [
      { label: 'Stimulus/context engages desire and attention' },
      { label: 'Parasympathetic vasocongestion produces arousal' },
      { label: 'Somatic/autonomic contractions accompany orgasm', emphasis: 'key' },
      { label: 'Resolution follows with variable refractory period' },
    ],
    examFindings: [
      { sign: 'Normal genital physiology with distressing low desire', mechanism: 'Sexual domains can dissociate and require biopsychosocial assessment', significance: 'key' },
      { sign: 'Male refractory period after orgasm', mechanism: 'Temporary reduced responsiveness is common but varies', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Private, consent-based sexual history across desire/arousal/orgasm/pain', meaning: 'Localizes the affected domain' },
      { clue: 'Medication, endocrine, vascular, neurologic and relationship review', meaning: 'Identifies interacting contributors' },
    ],
    treatment: [
      { logic: 'Treat distress and goals, not deviation from a rigid response script', detail: 'Education, counseling, medical treatment, and couple/individual approaches are individualized.' },
    ],
    mnemonic: { hook: 'EPOR: excitement, plateau, orgasm, resolution', expansion: ['Kaplan adds desire as a central stage'] },
    trap: {
      questionCategory: 'Sexual response',
      wrongInstinct: 'Healthy sexual response always follows one identical linear sequence',
      rightAnswer: 'Response is variable and context-dependent',
      why: 'Models organize physiology but do not define one mandatory experience.',
    },
    quiz: {
      stem: 'Which phase follows orgasm in the Masters–Johnson model?',
      options: ['Excitement', 'Resolution', 'Desire only', 'Plateau'],
      answer: 1,
      explanation: 'The four phases are excitement, plateau, orgasm, and resolution.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-erectile-physiology-evaluation',
    title: 'Erectile Physiology & Dysfunction Evaluation',
    source: l15,
    tags: [
      { kind: 'mechanism', label: 'NO–cGMP veno-occlusive erection' },
      { kind: 'exam', label: 'Vascular risk and focused sexual history' },
    ],
    highYield: [
      'Sexual stimulation activates **parasympathetic NO, guanylyl cyclase, cGMP, smooth-muscle relaxation**, arterial inflow, and venous outflow compression.',
      'Detumescence follows sympathetic tone and phosphodiesterase-5 degradation of cGMP.',
      'Erectile dysfunction may be vascular, neurogenic, endocrine, medication-related, structural, psychogenic, relational, or mixed.',
      'ED can be an early marker of cardiovascular disease; assess blood pressure, metabolic risk, smoking, medications, and exercise tolerance.',
    ],
    chainTitle: 'NO-driven inflow plus venous trapping produces rigidity',
    steps: [
      { label: 'Arousal releases cavernosal NO' },
      { label: 'cGMP relaxes trabecular smooth muscle' },
      { label: 'Arterial inflow expands sinusoids' },
      { label: 'Subtunical veins compress and trap blood', emphasis: 'key' },
    ],
    examFindings: [
      { sign: 'Gradual ED with vascular risk factors', mechanism: 'Endothelial dysfunction reduces penile arterial/NO response', significance: 'key' },
      { sign: 'Preserved spontaneous erections with situational difficulty', mechanism: 'Suggests a substantial psychogenic/contextual component but does not exclude mixed disease', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Sexual/medical history, focused exam and cardiometabolic labs', meaning: 'Identifies common reversible causes and cardiovascular risk' },
      { clue: 'Morning testosterone when indicated', meaning: 'Assesses androgen deficiency in compatible symptoms' },
    ],
    treatment: [
      { logic: 'Treat health risk and sexual function together', detail: 'Lifestyle, medication review, relationship/psychological support, and specific ED therapy are complementary.' },
    ],
    mnemonic: { hook: 'NO → cGMP → smooth muscle relaxes → veins compress', expansion: ['PDE5 breaks cGMP down'] },
    trap: {
      questionCategory: 'ED localization',
      wrongInstinct: 'All ED is purely psychological',
      rightAnswer: 'Most cases are biopsychosocial and many have vascular/metabolic contributors',
      why: 'Penile arteries are sensitive to systemic endothelial disease.',
    },
    quiz: {
      stem: 'Which intracellular messenger mediates cavernosal smooth-muscle relaxation?',
      options: ['cGMP', 'cAMP only from glucagon', 'IP₃ from oxytocin', 'Nuclear T3 receptor'],
      answer: 0,
      explanation: 'NO activates guanylyl cyclase and increases cGMP.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-ed-treatment-pde5',
    title: 'Erectile Dysfunction Treatment & PDE5 Inhibitors',
    source: l15,
    tags: [
      { kind: 'treatment', label: 'PDE5 inhibition and second-line options' },
      { kind: 'exam', label: 'Nitrate contraindication' },
    ],
    highYield: [
      '**PDE5 inhibitors reduce cGMP breakdown** and amplify the natural NO response; sexual stimulation is still required.',
      'Concurrent nitrates are contraindicated because combined vasodilation can cause profound hypotension; cardiovascular fitness and interacting drugs matter.',
      'Headache, flushing, dyspepsia, nasal symptoms, and visual effects vary by agent.',
      'Vacuum devices, intracavernosal/intraurethral therapy, counseling, and penile prosthesis are options when oral treatment is unsuitable or ineffective.',
    ],
    chainTitle: 'PDE5 blockade prolongs an arousal-generated cGMP signal',
    steps: [
      { label: 'Sexual stimulation releases NO' },
      { label: 'cGMP accumulates and relaxes smooth muscle' },
      { label: 'PDE5 inhibitor slows cGMP degradation', emphasis: 'key' },
      { label: 'Erectile response becomes stronger/longer' },
    ],
    examFindings: [
      { sign: 'Severe hypotension after nitrate plus PDE5 inhibitor', mechanism: 'Excess cGMP-mediated vasodilation', significance: 'key' },
      { sign: 'No response without sexual stimulation', mechanism: 'Drug amplifies rather than initiates NO signaling', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Nitrate/drug and cardiac-risk review', meaning: 'Determines safety before prescribing' },
      { clue: 'Correct use, timing and adequate trials', meaning: 'Distinguishes misuse from pharmacologic failure' },
    ],
    treatment: [
      { logic: 'Escalate stepwise according to preference and safety', detail: 'Treat reversible causes and offer devices/injections/surgery when appropriate.' },
    ],
    mnemonic: { hook: 'PDE5 preserves cGMP—but never with nitrates', expansion: ['Arousal still starts the signal'] },
    trap: {
      questionCategory: 'PDE5 mechanism',
      wrongInstinct: 'PDE5 inhibitors create sexual desire and release NO by themselves',
      rightAnswer: 'They preserve cGMP generated after sexual stimulation',
      why: 'They amplify downstream signaling rather than initiate libido or nerve activation.',
    },
    quiz: {
      stem: 'Which medication class is contraindicated with PDE5 inhibitors?',
      options: ['Nitrates', 'Penicillin', 'Thyroxine', 'Oral iron'],
      answer: 0,
      explanation: 'Nitrates plus PDE5 inhibition can cause dangerous hypotension.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-premature-ejaculation',
    title: 'Premature Ejaculation: Classification & Management',
    source: l15,
    tags: [
      { kind: 'mechanism', label: 'Ejaculatory timing and control' },
      { kind: 'exam', label: 'Lifelong vs acquired patterns' },
    ],
    highYield: [
      'Premature ejaculation involves **persistently short latency, reduced perceived control, and distress/interpersonal difficulty**; stopwatch time alone is insufficient.',
      'Lifelong and acquired forms differ; variable or subjective patterns may not meet disorder criteria.',
      'Acquired PE prompts evaluation for erectile difficulty, prostatitis/urogenital symptoms, thyroid disease, medication/substance effects, anxiety, and relationship factors.',
      'Education, behavioral/psychosexual strategies, topical anesthetics, and selected serotonergic medications can help through shared decision-making.',
    ],
    chainTitle: 'Ejaculatory reflex timing is shaped by neurobiology, arousal, control, and context',
    steps: [
      { label: 'Define latency, control, distress and onset pattern' },
      { label: 'Identify lifelong vs acquired contributors', emphasis: 'key' },
      { label: 'Treat associated ED/medical/relationship factors' },
      { label: 'Add behavioral, topical or pharmacologic therapy' },
    ],
    examFindings: [
      { sign: 'New rapid ejaculation after previously normal function', mechanism: 'Acquired PE warrants search for new medical/psychosexual factors', significance: 'key' },
      { sign: 'Short latency without distress or control concern', mechanism: 'May not constitute a disorder', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Sexual history including onset, context, control and distress', meaning: 'Central to diagnosis' },
      { clue: 'Targeted physical/laboratory evaluation', meaning: 'Used only when history suggests an acquired contributor' },
    ],
    treatment: [
      { logic: 'Treat the couple/person’s distress and goals, not a number alone', detail: 'Combined psychosexual and medical approaches often outperform a single strategy.' },
    ],
    mnemonic: { hook: 'Latency + control + distress', expansion: ['Classify lifelong vs acquired'] },
    trap: {
      questionCategory: 'PE diagnosis',
      wrongInstinct: 'A short measured latency alone is sufficient',
      rightAnswer: 'Control, persistence, distress and context are also required',
      why: 'Normal sexual variability is broad.',
    },
    quiz: {
      stem: 'Which feature most strongly distinguishes acquired from lifelong premature ejaculation?',
      options: ['Presence of orgasm', 'A previous period of normal ejaculatory control', 'Any relationship', 'Age under 40'],
      answer: 1,
      explanation: 'Acquired PE begins after prior normal function and prompts evaluation for new contributors.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-male-hypogonadism-evaluation',
    title: 'Male Hypogonadism Diagnosis & Treatment Logic',
    source: l15,
    tags: [
      { kind: 'mechanism', label: 'Primary vs secondary androgen deficiency' },
      { kind: 'exam', label: 'Symptoms plus repeated morning testosterone' },
    ],
    highYield: [
      'Hypogonadism requires **compatible symptoms/signs plus consistently low testosterone**—not one isolated result.',
      'Measure morning testosterone on separate occasions; interpret SHBG/free testosterone when binding abnormalities are likely.',
      'High LH/FSH suggests primary testicular failure; low/inappropriately normal levels suggest hypothalamic–pituitary disease or functional suppression.',
      'Testosterone therapy may improve selected symptoms but suppresses spermatogenesis; fertility goals, prostate/breast health, hematocrit, sleep apnea, and cardiovascular context matter.',
    ],
    chainTitle: 'Confirmed low testosterone is localized by the gonadotropin response',
    steps: [
      { label: 'Identify compatible sexual/systemic symptoms' },
      { label: 'Confirm low morning testosterone twice', emphasis: 'key' },
      { label: 'Use LH/FSH to localize primary vs central cause' },
      { label: 'Treat cause and align therapy with fertility/safety goals' },
    ],
    examFindings: [
      { sign: 'Low libido, reduced morning erections and low testosterone', mechanism: 'Compatible androgen-deficiency phenotype', significance: 'supportive' },
      { sign: 'Infertility worsened by exogenous testosterone', mechanism: 'Feedback suppresses LH/FSH and intratesticular testosterone', significance: 'key' },
    ],
    investigations: [
      { clue: 'Repeated morning testosterone plus LH/FSH', meaning: 'Confirms and localizes deficiency' },
      { clue: 'Prolactin, iron/pituitary evaluation or karyotype when indicated', meaning: 'Defines central or primary etiology' },
    ],
    treatment: [
      { logic: 'Do not use testosterone as fertility therapy', detail: 'Gonadotropin-based or cause-specific approaches preserve spermatogenesis when conception is desired.' },
    ],
    mnemonic: { hook: 'Symptoms + two low mornings + LH/FSH', expansion: ['High LH = testes; low LH = central'] },
    trap: {
      questionCategory: 'Hypogonadism diagnosis',
      wrongInstinct: 'One random afternoon testosterone confirms disease',
      rightAnswer: 'Confirm with repeated morning measurements plus symptoms',
      why: 'Testosterone varies diurnally and with acute illness.',
    },
    quiz: {
      stem: 'Low testosterone with high LH indicates which pattern?',
      options: ['Primary testicular failure', 'Central hypogonadism', 'Normal pregnancy', 'Hyperprolactinemia only'],
      answer: 0,
      explanation: 'High LH shows pituitary compensation for a failing testis.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-gender-sexuality-terminology',
    title: 'Sex, Gender Identity, Expression & Sexual Orientation',
    source: l16,
    tags: [
      { kind: 'mechanism', label: 'Distinct dimensions of identity and sexuality' },
      { kind: 'exam', label: 'Respectful terminology' },
    ],
    highYield: [
      'Sex traits, sex assigned at birth, gender identity, gender expression, and sexual orientation are **related but distinct dimensions**.',
      'Cisgender describes identity congruent with assigned sex; transgender describes identity differing from assigned sex; nonbinary identities do not fit solely male/female categories.',
      'Sexual orientation concerns patterns of romantic/sexual attraction and is not determined by gender identity.',
      'Names, pronouns, anatomy, relationships, and healthcare needs should be asked respectfully rather than assumed.',
    ],
    chainTitle: 'Respectful care begins by separating distinct identity and health dimensions',
    steps: [
      { label: 'Ask name and pronouns' },
      { label: 'Clarify relevant anatomy and current therapies only as needed' },
      { label: 'Do not infer orientation from identity', emphasis: 'key' },
      { label: 'Tailor screening and counseling to organs, exposures and goals' },
    ],
    examFindings: [
      { sign: 'Avoidance of healthcare after prior discrimination', mechanism: 'Stigma and misgendering create barriers and minority stress', significance: 'key' },
      { sign: 'Identity not predictable from appearance', mechanism: 'Expression and identity are distinct', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Organ inventory and exposure-based history', meaning: 'Guides relevant preventive screening' },
      { clue: 'Private, affirming psychosocial assessment', meaning: 'Identifies support, safety, distress and goals without pathologizing identity' },
    ],
    treatment: [
      { logic: 'Provide person-centered, non-discriminatory care', detail: 'Clinical decisions follow anatomy, physiology, risks, informed goals, and individual context.' },
    ],
    mnemonic: { hook: 'Identity is who; expression is how; orientation is toward whom', expansion: ['Sex traits are another dimension'] },
    trap: {
      questionCategory: 'Gender terminology',
      wrongInstinct: 'Gender identity automatically determines sexual orientation',
      rightAnswer: 'They are distinct dimensions',
      why: 'People of any gender identity can have any sexual orientation.',
    },
    quiz: {
      stem: 'Which statement is correct?',
      options: ['Gender identity determines orientation', 'Identity and orientation are distinct', 'Pronouns reveal anatomy', 'Appearance proves identity'],
      answer: 1,
      explanation: 'Gender identity and sexual orientation describe different aspects of a person.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-gender-dysphoria-affirming-care',
    title: 'Gender Dysphoria Assessment & Affirming Care',
    source: l16,
    tags: [
      { kind: 'mechanism', label: 'Incongruence, distress and function' },
      { kind: 'exam', label: 'Identity is not pathology' },
    ],
    highYield: [
      '**Gender diversity itself is not a mental disorder**; gender dysphoria refers to clinically significant distress or impairment related to incongruence.',
      'Assessment explores duration, developmental context, body-related distress, social environment, safety, mental health, family/support, and personal goals.',
      'Care may include social support, psychotherapy for coping/comorbidity, puberty-related or gender-affirming medical care, and/or surgery—never a mandatory single pathway.',
      'Coexisting depression, anxiety, trauma, neurodiversity, or psychosis should be treated without using them automatically to invalidate identity.',
    ],
    chainTitle: 'Distress is reduced through safety, affirmation, informed options, and individualized care',
    steps: [
      { label: 'Listen to identity, distress and goals' },
      { label: 'Assess safety, support and coexisting conditions', emphasis: 'key' },
      { label: 'Offer developmentally appropriate informed options' },
      { label: 'Monitor well-being and treatment effects over time' },
    ],
    examFindings: [
      { sign: 'Significant distress or impaired function related to incongruence', mechanism: 'Defines the clinical problem rather than the identity itself', significance: 'key' },
      { sign: 'Improved well-being in affirming environment', mechanism: 'Reduced stigma and increased support can lower distress', significance: 'supportive' },
    ],
    investigations: [
      { clue: 'Developmentally appropriate mental-health and safety assessment', meaning: 'Identifies distress, risk, support and comorbidity' },
      { clue: 'Organ- and treatment-specific medical monitoring', meaning: 'Matches preventive care to actual anatomy and therapies' },
    ],
    treatment: [
      { logic: 'Use shared decision-making and qualified multidisciplinary care', detail: 'The goal is well-being and informed autonomy, not forcing or suppressing an identity.' },
    ],
    mnemonic: { hook: 'Identity is not the disorder; distress may need care', expansion: ['Affirm, assess, individualize'] },
    trap: {
      questionCategory: 'Gender diversity',
      wrongInstinct: 'A transgender identity itself is a psychiatric illness',
      rightAnswer: 'Clinical concern is distress/impairment, not identity',
      why: 'Pathologizing identity worsens stigma and care barriers.',
    },
    quiz: {
      stem: 'What defines gender dysphoria clinically?',
      options: ['Any gender diversity', 'Significant distress or impairment related to incongruence', 'Choice of clothing alone', 'Sexual orientation'],
      answer: 1,
      explanation: 'Dysphoria refers to clinically significant distress or functional impairment.',
    },
  }),

  hrp1Lecture({
    id: 'hrp1-inclusive-communication-sex-education',
    title: 'Inclusive Communication, Sexual Education & Coming Out',
    source: l16,
    tags: [
      { kind: 'mechanism', label: 'Safe and respectful clinical communication' },
      { kind: 'exam', label: 'Confidentiality and listening' },
    ],
    highYield: [
      'Create a **safe clinical space** with neutral language, private time when appropriate, clear confidentiality limits, and open questions.',
      'Comprehensive sexual education covers consent, relationships, anatomy, contraception, STI prevention, digital safety, diversity, pleasure, and help-seeking.',
      'Coming out is personal and may occur differently across settings; never disclose identity without permission.',
      'Listen first, avoid assumptions, correct mistakes briefly, and connect people with supportive services when desired.',
    ],
    chainTitle: 'Trust grows when autonomy, privacy, and respectful language are protected',
    steps: [
      { label: 'Explain confidentiality and its safety limits' },
      { label: 'Ask open, non-assumptive questions' },
      { label: 'Listen and use the person’s language', emphasis: 'key' },
      { label: 'Offer accurate information and chosen support' },
    ],
    examFindings: [
      { sign: 'Withholding information in a judgmental setting', mechanism: 'Anticipated stigma reduces disclosure and care access', significance: 'supportive' },
      { sign: 'Safety risk after involuntary outing', mechanism: 'Unauthorized disclosure can expose a person to violence or rejection', significance: 'key' },
    ],
    investigations: [
      { clue: 'HEADSSS-style/private psychosocial assessment when appropriate', meaning: 'Structures adolescent safety and health discussion' },
      { clue: 'Exposure- and organ-based sexual health history', meaning: 'Guides testing and prevention without identity assumptions' },
    ],
    treatment: [
      { logic: 'Protect confidentiality and autonomy', detail: 'Share identity information only with consent except where immediate safety/legal obligations require otherwise.' },
    ],
    mnemonic: { hook: 'Ask, listen, respect, protect', expansion: ['Do not assume', 'Do not out'] },
    trap: {
      questionCategory: 'Inclusive care',
      wrongInstinct: 'A clinician should announce a patient’s identity to family to encourage support',
      rightAnswer: 'Disclosure belongs to the patient unless a specific safety/legal exception applies',
      why: 'Unwanted outing can cause serious harm.',
    },
    quiz: {
      stem: 'What is the best first step when discussing sexual or gender health?',
      options: ['Assume from appearance', 'Explain privacy and ask open questions', 'Use family as interpreter automatically', 'Avoid the topic entirely'],
      answer: 1,
      explanation: 'Clear privacy and open, neutral questions create safer and more accurate care.',
    },
  }),
];
