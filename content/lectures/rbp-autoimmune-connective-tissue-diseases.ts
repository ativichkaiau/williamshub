import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpAutoimmuneConnectiveTissueDiseases: Lecture = {
  id: 'rbp-autoimmune-connective-tissue-diseases',
  title: 'Systemic Autoimmune Disease Patterns',
  system: 'pathology',
  source: 'Ch 4 — Diseases of the Immune System',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 4 Diseases of the Immune System' },
    { kind: 'mechanism', label: 'Self-tolerance, its failure & systemic autoimmunity' },
    { kind: 'investigation', label: 'Autoantibody discriminators' },
  ],

  highYield: [
    '**Tolerance is built twice, and every named tolerance disease is one of those gates failing.** **Central tolerance** works on immature cells: in the thymus, **negative selection** deletes strongly self-reactive thymocytes, and **AIRE** forces medullary epithelium to express **tissue-restricted antigens** so that insulin and thyroglobulin are audited before a T cell ever leaves; in the marrow, a self-reactive B cell first attempts **receptor editing** and is deleted only if editing fails. **Peripheral tolerance** catches the escapees: **anergy** when signal 1 arrives without **B7–CD28** costimulation, active suppression by **FoxP3 regulatory T cells** using **IL-10 and TGF-β**, the brakes **CTLA-4 and PD-1**, and **activation-induced cell death** through **Fas–FasL**. Each gate has a human knockout — **AIRE gives APECED**, **FoxP3 gives IPEX**, **Fas gives ALPS**, and **checkpoint-inhibitor drugs give autoimmune toxicity on purpose**. Tolerance is therefore **active maintenance, not absence of self-reactive cells**; the underlying machinery is in [[tolerance-autoimmunity-mechanisms]].',
    '**There are four ways a silenced clone wakes up, and each has a disease attached to it.** **Molecular mimicry**: a microbial epitope resembles a self-epitope, so anti-streptococcal **M protein** antibody cross-reacts with **cardiac myosin** and rheumatic fever appears **2 to 4 weeks** after a pharyngitis — see [[add-rheumatic-fever-pathogenesis-and-sequelae]]. **Epitope spreading**: the response begins against one epitope and widens to others on the same molecule and then to neighbouring molecules, which is why an autoantibody profile **broadens over years** and why early disease can be serologically monotonous. **Release of sequestered antigen**: tissue that was never presented to the thymus is exposed by trauma — sympathetic ophthalmia after penetrating eye injury, post-infarction pericarditis. **Bystander activation**: infection supplies the **costimulation** an anergic autoreactive cell was missing, so the infection does not need to look like self at all. The common structure is that **an infection or an injury, not the autoantigen, is the trigger**.',
    '**Genetics loads the gun and is honestly an association, not a verdict.** **HLA** haplotypes are the strongest genetic links because they set which self-peptides are presented and how tightly: **HLA-B27** with ankylosing spondylitis, **DR3 and DR2** with SLE, **DR4** with rheumatoid arthritis, **DQ2 and DQ8** with coeliac disease. The honest statement is that **about 90% of ankylosing spondylitis patients carry B27, yet only a few per cent of B27 carriers ever develop it** — high sensitivity, poor positive predictive value, so the allele is neither necessary nor sufficient. Non-HLA alleles such as **PTPN22** shift signalling thresholds. The **female predominance** is large and real — roughly **9:1** in SLE, **9 to 10:1** in Sjögren disease, about **3:1** in rheumatoid arthritis — and the mechanism is still contested: **X-linked gene dosage**, with **TLR7 escaping X inactivation**, is currently the best-supported explanation, with oestrogen effects on B-cell survival a second candidate. State it as an association, because that is what the evidence supports.',
    '**In lupus, ANA rules out and anti-dsDNA or anti-Sm rules in — reverse the usual instinct.** **ANA** is positive in **over 95%** of lupus, so a **negative ANA makes SLE very unlikely**; but at a **1:40** cut-off roughly a **third of healthy adults** are positive and about **5%** remain positive at **1:160**, so a positive result rules nothing in. **Anti-dsDNA** and **anti-Sm** are the specific pair, and they behave differently: **anti-dsDNA titre tracks disease activity**, particularly **nephritis**, so a **rising anti-dsDNA with falling C3 and C4 predicts a flare**, while **anti-Sm** is highly specific but present in only about **20 to 30%** and does **not** track activity. Two more are worth committing: **anti-histone** dominates **drug-induced lupus** (**hydralazine, procainamide, isoniazid**), which characteristically **spares kidney and CNS** and resolves on withdrawal; and **antiphospholipid antibodies** produce the paradox of a **prolonged aPTT in the tube with thrombosis in the patient**, plus a **false-positive VDRL**. Fuller treatment in [[add-systemic-lupus-erythematosus-immunopathogenesis-and-clin]].',
    '**In scleroderma the antibody, not the skin, names the organ that will kill the patient.** **Anti-centromere** marks **limited cutaneous** disease — the **CREST** pattern of calcinosis, Raynaud, oesophageal dysmotility, sclerodactyly and telangiectasia — where skin involvement stays distal to elbows and knees, progression is slow, and the late killer is **pulmonary arterial hypertension**. **Anti-Scl-70 (anti-topoisomerase I)** marks **diffuse cutaneous** disease, with rapid proximal and truncal skin thickening, early **interstitial lung disease**, and clearly worse survival. **Anti-RNA-polymerase III** carries the highest risk of **scleroderma renal crisis**. The unifying lesion is **obliterative small-vessel injury plus excess collagen**: a fibrotic vasculopathy, which is why Raynaud is almost universal and why the oesophagus loses its lower two-thirds of smooth muscle to fibrosis.',
    '**Sjögren disease is exocrine destruction with two consequences students under-weight: lymphoma and fetal heart block.** Lymphocytic infiltration destroys **lacrimal and salivary glands**, giving **keratoconjunctivitis sicca and xerostomia**, and the dryness explains the derivative signs — **rampant dental caries**, difficulty swallowing dry food, **parotid enlargement**. **Anti-Ro (SSA)** and **anti-La (SSB)** are the markers, and **anti-Ro is also the antibody of so-called ANA-negative lupus**. Two hard endpoints: the sustained polyclonal B-cell drive raises **marginal-zone (MALT) lymphoma** risk roughly **15 to 20-fold**, so new unilateral persistent parotid swelling must be biopsied; and **anti-Ro crosses the placenta** and attacks the developing conduction system, causing **congenital complete heart block** at about **18 to 24 weeks**, which is **irreversible** and is the reason anti-Ro-positive pregnancies get serial fetal echocardiography. Mixed connective-tissue disease is the overlap phenotype defined by **high-titre anti-U1-RNP**. The hypersensitivity mechanisms behind all of this are in [[rbp-hypersensitivity-reactions]].',
  ],

  mechanism: {
    title: 'How a silenced autoreactive clone becomes systemic disease',
    steps: [
      {
        id: 's1',
        label: 'Central tolerance deletes or edits most self-reactive clones before they are ever released',
        detail: 'Thymic negative selection with AIRE-driven display of tissue-restricted antigens, and receptor editing in the marrow. Over 95% of thymocytes die in the thymus.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'The escapees are held in the periphery by anergy, regulatory T cells and checkpoints',
        detail: 'Signal 1 without B7 to CD28 gives anergy; FoxP3 regulatory cells suppress through IL-10 and TGF-beta; CTLA-4 and PD-1 raise the activation threshold.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'A susceptibility haplotype makes self-peptide presentation just a little too efficient',
        detail: 'HLA-DR3 and DR2 in lupus, DR4 in rheumatoid arthritis. This shifts the threshold; it does not create the disease, which is why most carriers stay well.',
        emphasis: 'normal',
      },
      {
        id: 's4',
        label: 'An infection supplies the missing costimulation or a cross-reactive epitope',
        detail: 'Molecular mimicry or bystander activation converts an anergic clone into an activated one. The trigger is environmental even though the susceptibility is genetic.',
        emphasis: 'key',
      },
      {
        id: 's5',
        label: 'Ultraviolet light and apoptosis expose nuclear antigen faster than it can be cleared',
        detail: 'Defective clearance of apoptotic debris leaves nucleosomes in circulation, and nucleic acid engaging TLR7 and TLR9 drives interferon-alpha production.',
        emphasis: 'danger',
      },
      {
        id: 's6',
        label: 'Autoantibody plus antigen makes immune complexes, and epitope spreading makes the process self-sustaining',
        detail: 'Complexes deposit in glomeruli, skin and small vessels; the response widens from one epitope to many, so the disease no longer needs its original trigger.',
        emphasis: 'danger',
      },
    ],
  },

  examFindings: [
    {
      sign: 'Malar erythema that spares the nasolabial folds, worsening after sun exposure',
      mechanism: 'Ultraviolet light drives keratinocyte apoptosis and exposes nuclear antigen, so complexes deposit at the dermoepidermal junction; the folds are shaded and spared',
      significance: 'key',
    },
    {
      sign: 'Symmetrical small-joint arthritis that is non-erosive, with painless oral ulcers',
      mechanism: 'Lupus synovitis inflames without destroying cartilage, unlike rheumatoid disease; painless ulcers separate lupus from the painful ulcers of Behcet disease',
      significance: 'key',
    },
    {
      sign: 'Raynaud phenomenon with sclerodactyly, calcinosis, telangiectasia and dysphagia',
      mechanism: 'Obliterative small-vessel disease plus fibrosis of skin and of oesophageal smooth muscle — the limited cutaneous (CREST) pattern, anti-centromere positive',
      significance: 'key',
    },
    {
      sign: 'Abrupt malignant hypertension, acute kidney injury and a microangiopathic blood film in early diffuse scleroderma',
      mechanism: 'Scleroderma renal crisis — intimal proliferation in interlobular arteries triggers a renin surge; anti-RNA-polymerase III carries the highest risk',
      significance: 'key',
    },
    {
      sign: 'Dry gritty eyes, dry mouth, rampant dental caries and bilateral parotid enlargement',
      mechanism: 'Lymphocytic destruction of lacrimal and salivary glands; a Schirmer strip wetted under 5 mm in 5 minutes confirms the tear deficit',
      significance: 'key',
    },
    {
      sign: 'Sterile vegetations on both surfaces of a mitral leaflet at autopsy',
      mechanism: 'Libman-Sacks endocarditis — immune complex and fibrin deposition, distinguished from infective endocarditis by involving both faces of the valve',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'Antinuclear antibody (ANA)',
      meaning: 'Use it as a rule-out test. Sensitivity in lupus exceeds 95%, so a negative result makes SLE very unlikely; but a third of healthy adults are positive at 1:40 and about 5% at 1:160, so a positive result alone rules nothing in.',
    },
    {
      clue: 'Anti-double-stranded DNA titre with paired C3 and C4',
      meaning: 'The one lupus serology that genuinely tracks activity. Rising anti-dsDNA with falling complement predicts a flare, most usefully nephritis, and is the reason both are measured together rather than either alone.',
    },
    {
      clue: 'Anti-Smith antibody',
      meaning: 'Highly specific for SLE but present in only about 20 to 30%, so it confirms rather than screens. Unlike anti-dsDNA it stays flat through flares, so do not follow it serially.',
    },
    {
      clue: 'Anti-histone antibody in a patient on hydralazine, procainamide or isoniazid',
      meaning: 'Drug-induced lupus, which characteristically spares kidney and central nervous system and resolves on stopping the drug. Anti-dsDNA is usually absent, which is the discriminator from idiopathic SLE.',
    },
    {
      clue: 'Anti-centromere versus anti-Scl-70 in a patient with Raynaud and skin thickening',
      meaning: 'The single most useful prognostic split in scleroderma. Anti-centromere means limited disease with pulmonary arterial hypertension as the late threat; anti-Scl-70 means diffuse disease with early interstitial lung disease and worse survival.',
    },
    {
      clue: 'Anti-Ro (SSA) identified in a pregnant woman',
      meaning: 'Triggers surveillance rather than treatment of the mother. The antibody crosses the placenta and can cause irreversible congenital complete heart block at 18 to 24 weeks, so serial fetal echocardiography starts from about 16 weeks.',
    },
  ],

  treatment: [
    {
      logic: 'Treat the organ, not the titre — with one deliberate exception',
      detail: 'Autoantibody level is usually a poor guide to therapy: a persistently positive **ANA** or **anti-Sm** in a well patient needs no escalation, and chasing titres leads to over-treatment. The exception is **anti-dsDNA with C3 and C4** in lupus, which genuinely tracks **nephritis activity** and is worth following serially. Everything else is decided by organ assessment — **urine protein-creatinine ratio and active sediment** for the kidney, **pulmonary function and high-resolution CT** for the lung — because it is the **organ involvement, not the label, that determines prognosis**.',
    },
    {
      logic: 'In scleroderma renal crisis give an ACE inhibitor, and avoid high-dose corticosteroids entirely',
      detail: 'Renal crisis is a **renin-driven** emergency: intimal proliferation narrows interlobular arteries, renin surges, and the patient presents with **malignant hypertension, acute kidney injury and microangiopathic haemolysis**. An **ACE inhibitor** is the specific answer and is started even when the creatinine is already rising, because it targets the mechanism rather than the blood pressure alone. The mirror-image rule matters just as much: **corticosteroids above roughly 15 mg prednisolone daily precipitate renal crisis** in diffuse scleroderma, so the reflex to give steroids for an inflammatory-looking disease is actively harmful here.',
    },
  ],

  mnemonics: [
    {
      hook: 'Centromere is CREST and the lung squeezes; Scl-70 is diffuse and the lung scars',
      expansion: [
        'Anti-centromere: limited cutaneous, distal skin only, slow, and pulmonary arterial hypertension is the late killer.',
        'Anti-Scl-70 (topoisomerase I): diffuse cutaneous, proximal and truncal skin, early interstitial lung fibrosis, worse survival.',
        'Anti-RNA-polymerase III: the highest risk of scleroderma renal crisis — ACE inhibitor, never high-dose steroid.',
      ],
    },
    {
      hook: 'ANA rules out, dsDNA and Sm rule in, only dsDNA tracks',
      expansion: [
        'ANA: sensitivity over 95% in lupus, so a negative result excludes; specificity poor, so a positive result proves nothing.',
        'Anti-dsDNA and anti-Sm: specific, so they confirm the diagnosis.',
        'Anti-dsDNA alone follows activity, and it is read together with falling C3 and C4 to predict a nephritis flare.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What a positive ANA is for',
      wrongInstinct: 'A positive ANA supports a diagnosis of lupus, so a higher titre means a stronger case.',
      rightAnswer: 'ANA is a rule-out test. Use a negative result to exclude SLE, and use anti-dsDNA or anti-Sm to rule it in.',
      why: 'Sensitivity over 95% with poor specificity gives a test that excludes well and confirms badly — so the direction of inference has to be reversed, not the cut-off raised.',
    },
    {
      questionCategory: 'Limited versus diffuse scleroderma',
      wrongInstinct: 'Limited skin involvement means limited danger, so anti-centromere disease is the benign one.',
      rightAnswer: 'Limited disease kills late through pulmonary arterial hypertension; diffuse disease kills early through interstitial lung disease and renal crisis. Both are lethal, on different clocks.',
      why: 'Skin extent describes distribution; the autoantibody names the organ at risk, which is why the serology is prognostically more useful than the examination.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman with known SLE is clinically stable. Over three months her anti-dsDNA titre rises steadily while C3 and C4 fall. Anti-Sm is unchanged. What does this pattern most strongly indicate?',
      options: [
        { id: 'a', text: 'An impending flare, most likely lupus nephritis' },
        { id: 'b', text: 'Successful treatment, since complement is being produced more slowly' },
        { id: 'c', text: 'Drug-induced lupus from a recently started medication' },
        { id: 'd', text: 'A laboratory artefact, since autoantibody levels never track disease activity' },
      ],
      answerId: 'a',
      explanation: 'Anti-dsDNA is the one lupus autoantibody whose titre tracks activity, and complement falls because it is being consumed by immune complexes. Rising anti-dsDNA with falling C3 and C4 is the classic pre-flare signature and points particularly at the kidney. Anti-Sm is specific for the diagnosis but stays flat, which is why it is not followed serially.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Two patients both have Raynaud phenomenon and skin thickening. One is anti-centromere positive with skin change confined to the fingers; the other is anti-Scl-70 positive with rapidly progressive truncal thickening. Which statement about their organ risk is correct?',
      options: [
        { id: 'a', text: 'Both carry equal risk of every complication, so the antibodies add nothing' },
        { id: 'b', text: 'The anti-centromere patient faces pulmonary arterial hypertension late; the anti-Scl-70 patient faces interstitial lung disease early' },
        { id: 'c', text: 'The anti-centromere patient has no risk of internal organ disease' },
        { id: 'd', text: 'The anti-Scl-70 patient is protected from renal complications' },
      ],
      answerId: 'b',
      explanation: 'Anti-centromere marks limited cutaneous disease, where progression is slow and pulmonary arterial hypertension is the late killer. Anti-Scl-70 marks diffuse disease with early interstitial fibrosis and worse survival; anti-RNA-polymerase III adds the highest risk of renal crisis. Limited skin disease is not limited internal disease.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A woman with Sjogren disease and anti-Ro (SSA) antibodies is 14 weeks pregnant and entirely well. What is the specific fetal risk that changes her antenatal management?',
      options: [
        { id: 'a', text: 'Neonatal thyrotoxicosis requiring cord thyroid function tests' },
        { id: 'b', text: 'Fetal haemolytic anaemia requiring maternal plasma exchange' },
        { id: 'c', text: 'Irreversible congenital complete heart block developing around 18 to 24 weeks' },
        { id: 'd', text: 'Transient neonatal myasthenia resolving within days' },
      ],
      answerId: 'c',
      explanation: 'Anti-Ro is IgG and crosses the placenta, where it damages the developing atrioventricular conduction system. The resulting complete heart block appears at roughly 18 to 24 weeks and does not recover, which is why anti-Ro-positive pregnancies are monitored with serial fetal echocardiography from about 16 weeks rather than treated reactively at delivery.',
      tests: 'exam',
    },
  ],
};

export default rbpAutoimmuneConnectiveTissueDiseases;
