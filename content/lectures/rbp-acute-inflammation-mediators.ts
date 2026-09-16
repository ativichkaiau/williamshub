import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpAcuteInflammationMediators: Lecture = {
  id: 'rbp-acute-inflammation-mediators',
  title: 'Acute Inflammation & Its Mediators',
  system: 'pathology',
  source: 'Ch 2 — Inflammation and Repair',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 2 Inflammation and Repair' },
    { kind: 'mechanism', label: 'Three vascular changes, one adhesion cascade, one respiratory burst' },
    { kind: 'exam', label: 'No pus with a huge neutrophil count means the cells never left the vessel' },
  ],

  highYield: [
    "**Do not memorise the cardinal signs — derive them from three vascular changes.** Arteriolar vasodilatation (histamine first, then nitric oxide and PGI2) raises local blood flow, and that single change produces both rubor and calor. Increased permeability of the POSTCAPILLARY VENULE lets a protein-rich exudate escape, collapsing the intravascular oncotic gradient, and that produces tumor. Bradykinin and PGE2 sensitise local nociceptors, and that produces dolor. Functio laesa is simply the sum of a swollen, painful part. The fourth consequence is mechanical: losing plasma concentrates the red cells, viscosity rises, flow slows to stasis, and stasis is what pushes leukocytes out of the axial stream and against the wall. Redness, heat, swelling and pain are therefore four readings of two dials — calibre and permeability. The vascular sequence in detail is in [[acute-inflammation]].",
    "**Exudate versus transudate is a statement about the endothelium, not about turbidity or cell count.** An exudate has specific gravity above 1.020 and protein above 3 g/dL because the barrier has been breached and plasma proteins have walked out; a transudate has specific gravity below 1.012 and low protein because the barrier is intact and the problem is Starling forces. At the bedside the Light criteria make the same call: any one of fluid/serum protein above 0.5, fluid/serum LDH above 0.6, or fluid LDH above two-thirds the upper reference limit of serum LDH. The discriminator is that you measure the protein rather than look at the fluid — a cloudy chylous effusion can be a transudate and a clear early parapneumonic effusion can be an exudate.",
    "**The four permeability mechanisms are separated by their KINETICS, and the timing is what the question is testing.** Endothelial contraction (histamine, bradykinin, leukotrienes, substance P) opens interendothelial gaps within minutes and is finished in 15 to 30 minutes — immediate and transient, venules only. Direct endothelial injury (severe burns, lytic infection) causes an immediate sustained leak at every level of the microcirculation that lasts hours to days until the endothelium is repaired. Delayed prolonged leakage begins after a latent period of 2 to 12 hours and runs for days — this is sunburn, and the latency is the reason antihistamines do nothing for it. Leukocyte-mediated injury adds a late component in venules and pulmonary capillaries, and VEGF drives increased transcytosis. Ask when the swelling appeared and you have named the mechanism.",
    "**The adhesion cascade is an argument about bond strength, not a list of molecules.** Selectin bonds (E- and P-selectin on cytokine-activated endothelium binding sialyl-Lewis X on the leukocyte) have very fast off-rates, so they form and break faster than flow can drag the cell away — the cell cannot stop, but it can tumble, and that is ROLLING. Chemokines displayed on the endothelial surface (CXCL8 chief among them) then signal through the rolling cell to flip its integrins from a bent low-affinity conformation to an extended high-affinity one; LFA-1 and Mac-1 (both carrying the beta-2 chain CD18) grip ICAM-1 and VLA-4 grips VCAM-1, and only now does the cell stop. PECAM-1 (CD31) at the junctions lets it squeeze through, collagenases open the basement membrane, and a gradient of C5a, LTB4, CXCL8 and bacterial f-Met-Leu-Phe peptides takes it the rest of the way. Weak and reversible to slow down, strong and sustained to stop, then out. More on the recruitment molecules in [[inflammatory-mediators-leukocytes]].",
    "**The leukocyte adhesion deficiencies are the natural experiment that proves each step, and the clinical tell is the absence of pus.** LAD-1 loses the beta-2 integrin chain CD18, so rolling is normal but the cell can never firmly adhere; the classic presentation is omphalitis with delayed umbilical cord separation beyond 30 days, recurrent bacterial and fungal infections, severe periodontitis and poor wound healing. LAD-2 loses the GDP-fucose transporter, so sialyl-Lewis X is never made and the cell cannot even roll; it comes with the Bombay red-cell phenotype, short stature and developmental delay, milder infections, and normal cord separation. Both share the finding that gives the game away: infected tissue with little or no pus, while the blood neutrophil count is enormous — commonly above 15,000 and often far higher during infection — because the neutrophils are produced and released perfectly well and simply cannot get out of the vessel.",
    "**Mediator kinetics is the organising idea, and it decides which drug can possibly work.** Histamine is preformed in mast-cell granules, released within seconds, and degraded within minutes — which is exactly why an antihistamine is a powerful drug for urticaria and allergic rhinitis and a weak anti-inflammatory for anything else. Everything that sustains inflammation is synthesised on demand: prostaglandins (PGE2 for pain and fever, PGI2 and PGD2 for vasodilatation), leukotrienes (LTB4 for chemotaxis, LTC4/D4/E4 for permeability and bronchoconstriction), PAF, and the cytokines TNF and IL-1 that activate endothelium and drive the systemic response. Sort the rest by origin — cell-derived (histamine, serotonin, arachidonic acid metabolites, PAF, cytokines, reactive oxygen species, nitric oxide, lysosomal enzymes) against plasma-derived and made in the liver as inactive precursors (complement, the kinins, the coagulation and fibrinolytic cascades, all triggered by activated factor XII) — and then by job: dilatation, permeability, chemotaxis, pain, fever, tissue damage.",
  ],

  mechanism: {
    title: 'Injury → dilate and leak → roll, stick, cross → kill → resolve or scar',
    steps: [
      {
        id: 's1',
        label: 'Pattern recognition: TLRs and the inflammasome read PAMPs and DAMPs, and mast cells degranulate within seconds',
        detail: 'Sentinel cells are already in the tissue. Nothing has to be recruited for the first minute of the response, which is why the wheal of an insect bite is faster than any cellular process could be.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'Arterioles dilate — histamine first, then nitric oxide and PGI2 — and local flow rises sharply',
        detail: 'One change, two cardinal signs: rubor and calor. This is also why a paradoxical early blanching is seen for a few seconds before the flare.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'Postcapillary venules leak: endothelial cells contract within 15 to 30 minutes and protein-rich exudate escapes',
        detail: 'Fibrinogen at 340 kDa only escapes once the gap is wide; the size of the molecules in the fluid is a direct read-out of the size of the breach.',
        emphasis: 'key',
      },
      {
        id: 's4',
        label: 'Plasma loss concentrates red cells, viscosity rises, flow falls to stasis, and leukocytes marginate against the wall',
        detail: 'Margination is mechanical, not chemical. Stasis is the permissive step that makes every later adhesion event possible.',
      },
      {
        id: 's5',
        label: 'Rolling on selectins → chemokine-triggered integrin activation → firm adhesion on ICAM-1 → PECAM-1 diapedesis → chemotaxis',
        detail: 'Weak reversible bonds to slow down, strong sustained bonds to stop. Neutrophils dominate the first 6 to 24 hours; monocytes take over by 24 to 48 hours because the neutrophil apoptoses and the macrophage does not.',
        emphasis: 'key',
      },
      {
        id: 's6',
        label: 'Opsonised phagocytosis and the NADPH oxidase burst kill the microbe; lipoxins and resolvins then actively switch the response off',
        detail: 'IgG Fc and C3b are the opsonins; superoxide becomes H2O2, and myeloperoxidase converts H2O2 plus chloride into hypochlorite, the most potent killing system the neutrophil has. Termination is an active programme, not simply the mediators running out.',
        emphasis: 'key',
      },
    ],
    branches: [
      {
        fromId: 's6',
        title: 'The four possible endings, and what decides which',
        steps: [
          {
            id: 'b1',
            label: 'Complete resolution — short-lived injury, limited necrosis, a labile or stable tissue, and an intact stromal framework',
            detail: 'Mediators decay, the exudate drains through lymphatics, macrophages clear debris and the tissue is restored. Lobar pneumonia resolves this way because the alveolar walls survive.',
          },
          {
            id: 'b2',
            label: 'Healing by fibrosis — substantial tissue destruction, injury in a permanent tissue, or an exudate that cannot be cleared',
            detail: 'Fibrin that is not lysed is colonised by fibroblasts and capillaries and organised into scar. This is the fate of a fibrinous pericarditis that outlives plasmin.',
            emphasis: 'key',
          },
          {
            id: 'b3',
            label: 'Abscess — a pyogenic organism is walled off and neutrophil enzymes liquefy the centre',
            detail: 'The cavity is avascular, acidic and hypoxic and the organisms are barely dividing, so antibiotics cannot sterilise it. It has to be drained.',
            emphasis: 'danger',
          },
          {
            id: 'b4',
            label: 'Progression to chronic inflammation — the stimulus is simply never removed',
            detail: 'The infiltrate turns mononuclear and injury, inflammation and repair begin to run in the same piece of tissue at the same time.',
            emphasis: 'key',
          },
        ],
      },
    ],
  },

  examFindings: [
    {
      sign: 'Recurrent bacterial infections with essentially no pus, alongside a blood neutrophil count above 20,000 per microlitre',
      mechanism: 'The adhesion cascade is broken, so neutrophils are made and released normally but cannot leave the vessel; they pile up in blood instead of tissue',
      significance: 'key',
    },
    {
      sign: 'An umbilical cord still attached at six weeks in an infant with omphalitis',
      mechanism: 'Cord separation depends on neutrophil-mediated digestion of the stump, so loss of the beta-2 integrin CD18 in LAD-1 delays it',
      significance: 'key',
    },
    {
      sign: 'Sunburn erythema and oedema that begin some hours after the exposure and peak at 12 to 24 hours',
      mechanism: 'Delayed prolonged leakage after mild thermal or ultraviolet injury; the latent period is the signature, and because histamine is not driving it, an antihistamine changes nothing',
      significance: 'key',
    },
    {
      sign: 'A wheal and flare that appears within a minute of a sting and has gone within half an hour',
      mechanism: 'Preformed mast-cell histamine causing immediate transient endothelial contraction in venules only — the one setting where H1 blockade is the right drug',
      significance: 'key',
    },
    {
      sign: 'Oculocutaneous albinism with silvery hair, peripheral neuropathy and giant azurophilic granules on the blood film',
      mechanism: 'Chediak-Higashi syndrome: the LYST trafficking defect hits melanosomes and phagolysosomes alike, so the cell arrives and engulfs but cannot deliver its lysosomal cargo',
      significance: 'key',
    },
    {
      sign: 'A hot, red, swollen, exquisitely tender joint with limited movement',
      mechanism: 'The four cardinal signs mapped straight onto their vessels — dilated arterioles for redness and heat, leaking venules for swelling, bradykinin and PGE2 for the pain that limits function',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'Dihydrorhodamine flow cytometry (or nitroblue tetrazolium) showing absent oxidative burst',
      meaning: 'NADPH oxidase failure — chronic granulomatous disease, about two-thirds of it X-linked gp91phox. These children DO form pus and granulomas; they simply cannot kill catalase-positive organisms such as Staphylococcus aureus, Serratia, Burkholderia cepacia, Nocardia and Aspergillus',
    },
    {
      clue: 'Flow cytometry showing absent CD18 on neutrophils',
      meaning: 'Leukocyte adhesion deficiency type 1: rolling is preserved but firm adhesion is impossible, so the defect is recruitment rather than killing',
    },
    {
      clue: 'Normal CD18 but absent sialyl-Lewis X (CD15s), with a Bombay red-cell phenotype',
      meaning: 'Leukocyte adhesion deficiency type 2 from a GDP-fucose transporter defect — the same fucosylation failure removes both the selectin ligand and the H antigen, which is why the blood group is the diagnostic hint',
    },
    {
      clue: 'Pleural fluid protein 4.2 g/dL with a fluid/serum LDH ratio of 0.8',
      meaning: 'An exudate by the Light criteria, so the endothelium has been breached — an inflammatory, infective or malignant process rather than a Starling-force problem. Meeting a criterion classifies the mechanism; it does not name the organism',
    },
    {
      clue: 'Left shift with toxic granulation, Dohle bodies and cytoplasmic vacuolation on the film',
      meaning: 'TNF, IL-1 and G-CSF are emptying the marrow storage pool and releasing immature forms; the morphology supports serious bacterial infection rather than a simple stress leukocytosis',
    },
    {
      clue: 'Normal nitroblue tetrazolium reduction with absent hypochlorite generation',
      meaning: 'Myeloperoxidase deficiency: superoxide and H2O2 are still made and only the halogenation step fails, so most patients are asymptomatic and disseminated candidiasis is the exception. Note that the dihydrorhodamine assay can read falsely abnormal here, because oxidation of the dye is itself myeloperoxidase-dependent',
    },
  ],

  treatment: [
    {
      logic: 'Target the mediator that is still being made when the patient walks in',
      detail: "This is the whole practical payoff of the kinetics. **Antihistamines only work where the histamine phase IS the disease** — urticaria, allergic rhinitis, the acute wheal — because by the time an established cellulitis or an inflamed joint is examined, histamine has been gone for hours and prostaglandins, leukotrienes, TNF and IL-1 are carrying the response. **NSAIDs block cyclooxygenase**, so they remove PGE2 and PGI2 and therefore vasodilatation, nociceptor sensitisation and fever — but they leave the 5-lipoxygenase arm untouched, and diverting arachidonate down it is the accepted mechanism of aspirin-exacerbated respiratory disease (asthma with nasal polyps and aspirin sensitivity), for which montelukast or zileuton is the rational answer. **Glucocorticoids act further upstream**, inducing annexin-1 to inhibit phospholipase A2 and suppressing NF-kB transcription, which is why they suppress both eicosanoid arms plus cytokine production at once — and equally why they cripple wound healing. One more mediator worth naming for its drug: bradykinin is destroyed by kininase II, which is ACE, so an ACE inhibitor lets it accumulate and gives cough and angioedema. The recruitment side of this is developed in [[inflammatory-mediators-leukocytes]].",
    },
    {
      logic: 'Read the four outcomes as a decision, not a list — and an abscess is a drainage problem',
      detail: "Which ending a lesion takes is decided by three things: how much tissue was destroyed, whether the stromal framework survived, and whether the stimulus has actually gone. Little necrosis with an intact framework and a cleared organism gives **complete resolution**. Significant destruction, or injury in a permanent tissue, or an exudate that plasmin failed to lyse, gives **healing by fibrosis**. A pyogenic organism that neutrophils liquefy but cannot clear gives an **abscess** — and that is the outcome with the sharpest management rule, because the cavity is hypoxic, acidic at a pH near 6 and packed with barely dividing organisms. Aminoglycoside uptake is oxygen-dependent and fails at that pH, beta-lactams need dividing cells, and the fibrous wall blocks penetration, so **no antibiotic regimen sterilises an undrained abscess**. Fluctuance, or failure to defervesce after several days of appropriate cover, is the signal for source control. If the stimulus is never removed the fourth ending follows and the lesion becomes [[rbp-chronic-inflammation-repair]], where injury, inflammation and repair start running simultaneously.",
    },
  ],

  mnemonics: [
    {
      hook: 'Selectins slow, integrins stop',
      expansion: [
        'Selectin to sialyl-Lewis X bonds form and break faster than flow can pull the cell away, so it tumbles rather than halting — that is rolling',
        'Chemokines on the endothelial surface flip the integrins to high affinity: LFA-1 and Mac-1 onto ICAM-1, VLA-4 onto VCAM-1, and now the cell stops dead',
        'PECAM-1 at the junction lets it through, collagenase opens the basement membrane, and C5a, LTB4, CXCL8 and bacterial peptides steer the rest',
        'LAD-1 breaks the stopping (CD18), LAD-2 breaks the slowing (sialyl-Lewis X) — and both present with infection and no pus',
      ],
    },
    {
      hook: 'Pus proves the neutrophils arrived',
      expansion: [
        'No pus with a huge blood neutrophil count means a RECRUITMENT defect: the cells were made, released and never left the vessel — leukocyte adhesion deficiency',
        'Pus and granulomas with catalase-positive organisms means a KILLING defect: the cells arrived, engulfed, and could not generate the burst — chronic granulomatous disease',
        'Giant granules with albinism and neuropathy means a DELIVERY defect: the phagolysosome never fuses properly — Chediak-Higashi',
        'So the first question in a child with recurrent bacterial infection is not which organism, it is whether there is pus',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What an antihistamine can and cannot do in inflammation',
      wrongInstinct: 'Histamine is the textbook mediator of increased vascular permeability, so an H1 blocker ought to be a general anti-inflammatory drug',
      rightAnswer: 'Histamine is preformed, released in seconds and degraded within minutes; its contribution is effectively over by 15 to 30 minutes, after which prostaglandins, leukotrienes, TNF and IL-1 sustain everything the patient is complaining of',
      why: 'Rule: the only drug that can help is the one whose mediator is still being synthesised at the moment of presentation — which confines antihistamines to urticaria, allergic rhinitis and the acute wheal.',
    },
    {
      questionCategory: 'Recurrent infection — failure to reach the tissue versus failure to kill once there',
      wrongInstinct: 'A child with recurrent bacterial infections and a high neutrophil count must have a killing defect such as chronic granulomatous disease',
      rightAnswer: 'Ask whether there is pus first. Absent pus with marked neutrophilia is a recruitment defect (LAD-1 or LAD-2); abundant pus with abscesses and granulomas caused by catalase-positive organisms is a killing defect (CGD)',
      why: 'Rule: pus is physical proof that neutrophils crossed the vessel wall, so its absence indicts adhesion and its presence indicts the respiratory burst.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A four-month-old infant has had omphalitis, two skin infections and severe gingival inflammation. The umbilical cord separated on day 45. The infected areas show erythema and induration but almost no pus. The white cell count is 34,000 per microlitre with 82 per cent neutrophils. Which defect best explains this picture?',
      options: [
        { id: 'a', text: 'NADPH oxidase deficiency affecting the gp91phox subunit' },
        { id: 'b', text: 'Deficiency of the beta-2 integrin chain CD18, preventing firm adhesion to ICAM-1' },
        { id: 'c', text: 'LYST-mediated failure of phagolysosome fusion' },
        { id: 'd', text: 'Deficiency of the terminal complement components C5 to C9' },
      ],
      answerId: 'b',
      explanation: 'Every feature points to recruitment rather than killing. Without CD18 the leukocyte can still roll on selectins but can never convert that to firm adhesion, so it does not transmigrate: infected tissue therefore has induration without pus, while the neutrophils that were never consumed accumulate in blood and drive a striking leukocytosis. Delayed cord separation beyond 30 days fits, because the cord stump is normally digested by infiltrating neutrophils. Chronic granulomatous disease (option a) produces plenty of pus, abscesses and granulomas with catalase-positive organisms, since those cells arrive and engulf normally. Chediak-Higashi (option c) gives giant granules with albinism and neuropathy. Terminal complement deficiency (option d) gives recurrent Neisseria infection, not this pattern.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient presents on day three of a spreading, tender, warm cellulitis of the lower leg. An oral antihistamine is given and produces no benefit at all. Which statement best explains why?',
      options: [
        { id: 'a', text: 'Histamine is not produced at all during bacterial infection' },
        { id: 'b', text: 'H1 receptors are not expressed on dermal venular endothelium' },
        { id: 'c', text: 'Histamine is preformed and short-lived, so its vascular effect is over within about 30 minutes; by day three the response is sustained by prostaglandins, leukotrienes, TNF and IL-1' },
        { id: 'd', text: 'Antihistamines are inactivated by neutrophil myeloperoxidase at sites of inflammation' },
      ],
      answerId: 'c',
      explanation: 'Histamine is stored preformed in mast-cell granules, released within seconds and cleared within minutes, so it dominates only the first phase of increased permeability through endothelial contraction in postcapillary venules. Anything still inflamed hours or days later is being driven by mediators synthesised on demand: PGE2 for pain and fever, PGI2 and PGD2 for vasodilatation, LTB4 for chemotaxis, LTC4 to LTE4 for permeability, and TNF and IL-1 for endothelial activation. This is precisely why antihistamines are excellent for urticaria and allergic rhinitis and useless for established inflammation, while NSAIDs and glucocorticoids are not. Histamine is indeed released in infection (option a), H1 receptors are present (option b), and option d is invented.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A fair-skinned man develops erythema and oedema of his shoulders. Nothing is visible when he leaves the beach; the redness begins about four hours later and peaks at 18 hours. Which vascular mechanism of increased permeability best fits this time course?',
      options: [
        { id: 'a', text: 'Immediate transient response from preformed mast-cell histamine' },
        { id: 'b', text: 'Delayed prolonged leakage following mild ultraviolet endothelial injury, beginning after a latent period of hours and lasting days' },
        { id: 'c', text: 'Immediate sustained leakage from direct necrotising endothelial injury at all microvascular levels' },
        { id: 'd', text: 'Reduced plasma oncotic pressure from acute hypoalbuminaemia' },
      ],
      answerId: 'b',
      explanation: 'The latent period is the whole answer. Mild thermal injury, ultraviolet exposure and some bacterial toxins produce delayed prolonged leakage that starts 2 to 12 hours after the insult and persists for days, involving venules and capillaries. An immediate transient response (option a) would have been visible on the beach and gone within half an hour, and it is the only one of these that antihistamines touch — which is exactly why they are unhelpful in sunburn. Immediate sustained leakage (option c) belongs to severe burns and lytic infection and starts at once. Option d describes a transudate and would be generalised and dependent, not confined to sun-exposed skin.',
      tests: 'exam',
    },
  ],
};

export default rbpAcuteInflammationMediators;
