import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpRepairAngiogenesisFibrosis: Lecture = {
  id: 'rbp-repair-angiogenesis-fibrosis',
  title: 'Regeneration, Angiogenesis & Fibrosis',
  system: 'pathology',
  source: 'Ch 2 — Inflammation and Repair',
  updated: '2026-09-21',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 2 Inflammation and Repair' },
    { kind: 'mechanism', label: 'Proliferative class AND stromal framework — two gates, not one' },
    { kind: 'exam', label: 'Ten per cent at one week, seventy to eighty at three months, never a hundred' },
  ],

  highYield: [
    '**Whether a tissue regenerates or scars is decided by TWO gates, and the second one is the one that gets left out.** **Gate one is the proliferative class of the cells.** **Labile** tissues divide continuously from a stem-cell compartment — surface epithelia of skin, oral cavity, gut and urinary tract, and the haematopoietic marrow. **Stable** tissues sit quiescent in G0 but re-enter the cycle when called — liver, proximal tubule, pancreas, endothelium, fibroblast, smooth muscle. **Permanent** tissues cannot divide at all — cardiac myocytes and neurons, with skeletal muscle managing only limited repair from satellite cells — so their losses are always made good with scar, which is why a myocardial infarct is a scar and why hypertrophy is the only adaptation left to a myocyte, as in [[rbp-necrosis-apoptosis-adaptations]]. **Gate two is whether the stromal framework survived**: the basement membrane and the reticulin scaffold. That matters because the extracellular matrix is not inert packing — it supplies **polarity**, **integrin-mediated survival signals** without which anchorage-dependent cells die, and a **reservoir of latent growth factors** released on demand. A dividing cell with no scaffold has nothing to organise itself onto. The rule to carry is that **architecture beats cell type**: ask first whether the cell can divide, then whether there is anything left for it to build on, and it is the second answer that determines what the organ looks like afterwards.',
    '**The liver proves gate two, and two other organs repeat the proof.** Remove 60 to 70 per cent of a liver and the remnant restores its mass within weeks with **normal architecture**: IL-6 and TNF prime quiescent hepatocytes out of G0, then HGF and TGF-alpha drive them through the cycle against an intact reticulin framework. Injure that same liver repeatedly, let the reticulin **collapse** and fibrous septa form, and the identical proliferative capacity now produces **regenerative nodules trapped inside scar** — which is what cirrhosis is. Same cell, same ability to divide, opposite outcome, and the only variable that changed was the scaffold. The lung says it twice over: **lobar pneumonia resolves completely** because the alveolar walls and their basement membranes survive beneath the exudate, whereas **diffuse alveolar damage** destroys the basement membrane and the type II pneumocytes that proliferate afterwards build a disorganised fibrotic lung. The kidney says it a third time: tubular epithelium regenerates beautifully after acute tubular necrosis **provided the tubular basement membrane is intact**, and in cortical necrosis, where it is not, the nephron is lost for good.',
    '**Angiogenesis is VEGF-driven and runs in a fixed order, and granulation tissue is what that order looks like from the outside.** Hypoxia stops the prolyl hydroxylases that normally mark **HIF-1 alpha** for VHL-mediated destruction, so HIF-1 alpha accumulates and transcribes **VEGF**. Then: **vasodilatation** through nitric oxide and a sharp rise in **permeability** — VEGF was originally named vascular permeability factor — so plasma proteins escape and lay down a provisional fibrin matrix for cells to crawl on; **pericytes detach** and metalloproteinases digest the basement membrane; a **tip cell** selected by Notch and DLL4 migrates up the VEGF gradient while stalk cells proliferate behind it; the sprout **forms a lumen**; and finally **PDGF-BB recruits pericytes** and smooth muscle, Angiopoietin-1 acting on Tie2 stabilises the vessel, and a new basement membrane is laid down. Until that last maturation step, new vessels are **leaky**, which is exactly why granulation tissue is oedematous. What you see at the bedside by **day 3 to 5** is **soft, moist, beefy-red, granular tissue that bleeds at the lightest touch and is not tender** — the granularity is tufted capillary loops seen through a thin surface, the bleeding is vessels without pericytes, and the painlessness is because none of it is innervated. Histologically it is proliferating fibroblasts, new thin-walled capillaries and loose oedematous matrix with macrophages. It is not a granuloma and has nothing to do with one; and the so-called pyogenic granuloma is neither pyogenic nor granulomatous but simply exuberant granulation tissue.',
    '**The scar is built out of the wrong collagen first and then swapped, one cell does the contracting, and the whole thing is still being rebuilt months later.** The provisional matrix is **fibrin, fibronectin and hyaluronan**. Early granulation tissue then lays down **type III** collagen, which is thin, distensible and quick to deposit; over weeks to months it is progressively degraded and replaced by **type I**, which is thick and strong, returning the tissue toward the normal dermal ratio of roughly 80 to 90 per cent type I. **Strength comes from that swap and from cross-linking, not from bulk** — and two enzyme steps earn their cofactors a place in the answer, since **prolyl and lysyl hydroxylase** require **vitamin C**, iron and molecular oxygen, while **lysyl oxidase** requires **copper** to form the covalent cross-links. Meanwhile some fibroblasts acquire **alpha-smooth-muscle actin** under TGF-beta and mechanical tension and become **myofibroblasts**, anchored to the matrix through integrin-rich focal adhesions; these are the cells that physically pull a wound closed, and in an open defect contraction can reduce the area to a small fraction of the original. Turnover is controlled by the **matrix metalloproteinases**, zinc-dependent enzymes secreted as inactive zymogens — **collagenases** (MMP-1, 8 and 13) cleaving fibrillar collagen, **gelatinases** (MMP-2 and 9) finishing the denatured fragments and basement-membrane type IV, **stromelysins** attacking proteoglycans — held in check by the **TIMPs**. That balance is the whole point: **fibrosis is as much a failure of degradation as an excess of synthesis**, because TGF-beta simultaneously drives collagen transcription, raises TIMPs and suppresses MMPs, while pushing the balance the other way gives emphysema, aneurysm and the matrix digestion that lets a carcinoma invade. Remodelling then runs for **6 to 12 months** after re-epithelialisation is complete, which is why scars pale and flatten across a year, why revision is deliberately deferred, and why **scurvy makes old, long-healed scars break down**: collagen everywhere is being continuously taken apart and rebuilt, and only the rebuilding has failed.',
    "**Primary and secondary intention differ only in the size of the defect, and the strength timeline is the part with numbers.** **Primary intention** is a clean incision with apposed edges: a thin clot, epithelial continuity restored within **24 to 48 hours**, very little granulation tissue, negligible contraction, a fine scar. **Secondary intention** is a large open defect: abundant granulation tissue, a much larger inflammatory phase, substantial **myofibroblast contraction**, and a broad scar. The timeline is the same in both. Neutrophils at the margins by **24 hours**; macrophages taking over by **day 3** as granulation tissue moves in; neovascularisation peaking and collagen bridging the incision by **day 5**; collagen accumulating and vascularity and oedema receding through **week 2**; and by the **end of month 1** a scar of connective tissue with no inflammatory cells under an intact epidermis. Strength lags all of it: about **10 per cent** of normal at **one week** — which is precisely why the sutures are the wound at that point and why abdominal dehiscence clusters on days 5 to 8 — rising steeply over the following month as type I collagen accumulates and cross-links, reaching about **70 to 80 per cent at three months**, and then plateauing. **It never returns to 100 per cent.** Skin closed is not wound healed, and the restriction on lifting follows the collagen rather than the epidermis.",
    '**Every pathological outcome of repair is the same biology with one variable pushed too far.** **Keloid**: collagen deposition that extends **beyond the original wound margin**, retaining a high proportion of **type III** instead of completing the switch to type I; it does not regress, it recurs after simple excision, it runs in families, it is commoner in darker skin, and it favours earlobe, sternum, shoulder and upper back. **Hypertrophic scar**: raised but **confined within the margin**, and usually flattening over 12 to 24 months. **Exuberant granulation**, or proud flesh, protrudes above the surface and physically blocks re-epithelialisation. **Contracture** is myofibroblasts that never stopped, crossing a joint after a burn or deforming the palm in Dupuytren disease. **Dehiscence** is mechanical failure while strength is still around 10 to 20 per cent, heralded by serosanguinous discharge and followed later by incisional hernia. The factors that impair healing are equally derivable: **infection** is the single most important local cause because it holds the inflammatory phase open; **ischaemia** because hydroxylation of proline, collagen synthesis and bacterial killing are all oxygen-expensive; **foreign body** because it cannot be cleared; **mechanical stress** because it disrupts young matrix. Systemically, **diabetes** hits four points at once, **glucocorticoids** inhibit TGF-beta and collagen synthesis, **protein and vitamin C deficiency** starve or destabilise the collagen, and **zinc** and **copper** deficiency remove metalloenzyme and cross-linking cofactors. The clinical-layer handling of all of this is in [[tissue-repair-wound-healing]].',
  ],

  mechanism: {
    title: 'Two gates decide regeneration or scar — then the scar is built, contracted and rebuilt',
    steps: [
      {
        id: 's1',
        label: 'Gate one: can these cells divide? Labile and stable can, permanent cannot',
        detail: 'A cardiac myocyte or a neuron has no proliferative option, so its loss is replaced by scar no matter how favourable everything else is.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'Gate two: did the stromal framework survive? Basement membrane and reticulin',
        detail: 'The matrix supplies polarity, integrin survival signals and a store of latent growth factors. Without it, proliferation has nothing to organise itself onto.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'Both gates open: regeneration restores the original architecture',
        detail: 'The resected liver, the resolving lobar pneumonia, the tubule recovering after acute tubular necrosis with its basement membrane intact.',
      },
      {
        id: 's4',
        label: 'Either gate shut: macrophages switch to the M2 repair programme, and VEGF-driven angiogenesis plus fibroblast recruitment fill the defect',
        detail: 'Granulation tissue appears by day 3 to 5 — soft, beefy-red, granular and bleeding easily, because the new vessels have no pericytes yet.',
      },
      {
        id: 's5',
        label: 'TGF-beta drives collagen synthesis, raises TIMPs and suppresses MMPs; type III is exchanged for type I while myofibroblasts contract the defect',
        detail: 'Fibrosis is as much reduced degradation as increased synthesis. Lysyl oxidase then cross-links the type I collagen, and that is where strength actually comes from.',
        emphasis: 'key',
      },
      {
        id: 's6',
        label: 'Remodelling continues for 6 to 12 months; strength reaches 70 to 80 per cent and stops. If the injury persists, the programme never closes',
        detail: 'Myofibroblasts that fail to apoptose give contracture; a stimulus that will not clear gives cirrhosis, pulmonary fibrosis or a constricting serosal shell.',
        emphasis: 'danger',
      },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'The liver, where the same cell gives opposite results',
        steps: [
          {
            id: 'b1',
            label: 'Partial hepatectomy: framework intact, so hepatocytes restore mass with normal architecture in weeks',
            detail: 'IL-6 and TNF prime the quiescent hepatocyte out of G0; HGF and TGF-alpha carry it through the cycle.',
            emphasis: 'key',
          },
          {
            id: 'b2',
            label: 'Chronic or submassive injury: reticulin collapses and fibrous septa form',
            detail: 'The scaffold that told hepatocytes where to sit is gone, and the vascular relationships go with it.',
            emphasis: 'danger',
          },
          {
            id: 'b3',
            label: 'The same proliferation now produces regenerative nodules inside scar — cirrhosis',
            detail: 'Cirrhosis is what full regenerative capacity looks like on a destroyed framework. Nothing was wrong with the hepatocytes.',
            emphasis: 'danger',
          },
        ],
      },
    ],
  },

  examFindings: [
    {
      sign: 'Soft, moist, beefy-red granular tissue filling an open ulcer at day 5, bleeding at the lightest touch but completely painless',
      mechanism: 'Granulation tissue: tufted new capillary loops seen through a thin surface, fragile because pericytes have not yet been recruited, and painless because none of it is innervated',
      significance: 'key',
    },
    {
      sign: 'A firm itchy nodule extending well beyond the margins of an earlobe piercing, which has already recurred once after excision',
      mechanism: 'Keloid — collagen deposited past the original wound edge, with type III retained rather than exchanged for type I; it does not regress and simple excision makes it recur',
      significance: 'key',
    },
    {
      sign: 'A raised, red, firm scar that follows the line of a burn exactly and has flattened noticeably over 18 months',
      mechanism: 'Hypertrophic scar — excess collagen confined within the original margin, with the normal remodelling programme still operating, only exaggerated',
      significance: 'key',
    },
    {
      sign: 'Serosanguinous discharge from an apparently well-apposed midline laparotomy wound on day 6, after a bout of coughing',
      mechanism: 'Impending dehiscence: tensile strength at one week is only around 10 per cent of normal, so the sutures are still carrying the wound and a pressure spike separates the deep layers first',
      significance: 'key',
    },
    {
      sign: 'Nodules of hepatocytes surrounded by fibrous septa in a patient with longstanding hepatitis C',
      mechanism: 'Cirrhosis — hepatocytes retained full proliferative capacity, but the reticulin framework collapsed, so the regeneration is architecturally useless',
      significance: 'key',
    },
    {
      sign: 'Perifollicular haemorrhage, corkscrew hairs, bleeding gums, a non-healing wound, and old scars from years ago breaking down',
      mechanism: 'Scurvy: ascorbate-dependent prolyl and lysyl hydroxylation fails, so the triple helix is unstable. Old scars reopen because collagen everywhere is continuously degraded and rebuilt, and only the rebuilding has stopped',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'The wound strength timeline, read against the calendar',
      meaning: 'About 10 per cent of normal at one week, rising steeply through weeks 2 to 4 as type I collagen accumulates and cross-links, about 70 to 80 per cent at three months, and never 100 per cent. Epithelial continuity is restored at 24 to 48 hours and says nothing about strength, so activity restrictions follow the collagen, not the skin.',
    },
    {
      clue: 'A reticulin or trichrome stain on damaged liver or lung',
      meaning: 'This is how gate two is inspected directly. Preserved reticulin predicts regeneration with restored architecture; collapsed reticulin with trichrome-blue septa predicts a nodular fibrotic outcome however proliferative the parenchymal cells are.',
    },
    {
      clue: 'Transcutaneous oxygen tension or an ankle-brachial index at a non-healing leg ulcer',
      meaning: 'Repair is oxygen-expensive: proline hydroxylation needs molecular oxygen, collagen synthesis needs ATP, and the neutrophil respiratory burst needs oxygen to kill. A transcutaneous oxygen tension below about 30 mmHg predicts failure to heal and above about 40 mmHg predicts healing, so an ischaemic wound is a perfusion problem before it is a dressing problem.',
    },
    {
      clue: 'Quantitative wound culture rather than a surface swab',
      meaning: 'Every open wound is colonised, so growth alone means nothing. A burden above roughly 10 to the fifth organisms per gram of tissue, and any beta-haemolytic streptococcus at all, prevents healing and causes skin grafts to fail. Infection is the single most important local cause of delayed healing because it keeps the inflammatory phase from ever closing.',
    },
    {
      clue: 'HbA1c in a patient whose wound will not heal',
      meaning: 'Diabetes impairs repair at four separate points, which is why it is so hard to overcome: microangiopathy reduces perfusion, advanced glycation end-products stiffen matrix and impede remodelling, neutrophil chemotaxis and killing are depressed, and peripheral neuropathy removes the protective sensation that would stop the wound being re-injured.',
    },
    {
      clue: 'Drug history for glucocorticoids and anti-VEGF agents before elective surgery',
      meaning: 'Both impair healing by a predictable mechanism rather than a vague one. Glucocorticoids inhibit TGF-beta and collagen synthesis and give weak scars. Bevacizumab and related agents block the angiogenic step itself, so granulation tissue cannot form; wound complications and dehiscence follow, which is why surgery is spaced several weeks away from dosing.',
    },
  ],

  treatment: [
    {
      logic: 'Give the repair what it needs, in the order the biology needs it',
      detail: 'The sequence is not negotiable. **Perfusion and oxygen first**, because nothing downstream works without them. Then **debridement** of necrotic tissue, biofilm and foreign material, since anything that cannot be cleared holds the inflammatory phase open indefinitely. Then **approximation and offloading** of mechanical stress, so that young matrix is not repeatedly torn. Then the substrates: **protein, vitamin C, zinc and copper**, glycaemic control, and stopping smoking, where nicotine vasoconstricts and carbon monoxide displaces oxygen from haemoglobin. **Glucocorticoids and anti-VEGF drugs are predictable enemies of healing** — and the prediction runs both ways, which is the useful part: where **scarring rather than healing is the problem**, as in corneal inflammation or an active keloid, a steroid becomes the right drug for exactly the same reason. If a wound simply will not close, the question to ask is whether the original stimulus has actually been removed, because if it has not, injury, inflammation and repair continue running together as in [[rbp-chronic-inflammation-repair]].',
    },
    {
      logic: 'Treat a scar according to whether the collagen crossed the wound margin',
      detail: 'The height of a scar decides nothing; the **margin** decides everything. A **hypertrophic scar** stays inside the original wound edge and usually regresses over 12 to 24 months, so silicone sheeting, pressure and time are often sufficient. A **keloid** has grown past that edge, will not regress, and **recurs after simple excision** — so excision alone is the wrong operation, and the options are intralesional triamcinolone, silicone and pressure, and where excision is unavoidable it is combined with adjuvant steroid or radiotherapy. A **contracture** is a different problem again, mechanical rather than bulky: myofibroblasts that failed to apoptose are still pulling, so splinting, physiotherapy and surgical release with grafting are what help, and injecting a contracture with steroid does not. The same organise-or-lyse logic governs fibrin on a serosal surface, where the choice between resolution and adhesions is made in days: see [[rbp-inflammatory-patterns-systemic-response]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Two gates: can the cell divide, and is there anything left to build on',
      expansion: [
        'Gate one, cell class: labile renews continuously, stable can be called back into the cycle, permanent cannot — so an infarcted myocardium is always a scar.',
        'Gate two, framework: an intact basement membrane and reticulin supply polarity, integrin survival signals and stored growth factors.',
        'Both open: regeneration with restored architecture — the resected liver, the resolving lobar pneumonia, the tubule after acute tubular necrosis.',
        'Either shut: granulation tissue and scar. Cirrhosis is what full hepatocyte proliferative capacity looks like on a collapsed framework.',
      ],
    },
    {
      hook: 'Ten at one week, seventy to eighty at three months, never a hundred',
      expansion: [
        'Week 1: about 10 per cent of normal tensile strength, so the sutures are the wound — which is why dehiscence clusters on days 5 to 8.',
        'Weeks 2 to 4: strength climbs steeply as type III collagen is exchanged for type I and lysyl oxidase cross-links it.',
        'Month 3: about 70 to 80 per cent, and there it plateaus for good.',
        'Remodelling nevertheless continues for 6 to 12 months after closure, which is why scars pale and flatten over a year and why revision is deferred.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Why a liver with excellent regenerative capacity ends up cirrhotic',
      wrongInstinct: 'Hepatocytes are stable cells that regenerate extremely well, so chronic liver injury should heal by regeneration rather than by scarring.',
      rightAnswer: 'Regeneration needs a scaffold as well as a dividing cell. Once repeated injury collapses the reticulin framework, that same proliferation produces regenerative nodules trapped inside fibrous septa, which is precisely what cirrhosis is.',
      why: 'Rule: ask about the proliferative class first and the stromal framework second, and it is the second answer that decides the architecture the organ ends up with.',
    },
    {
      questionCategory: 'A thick raised scar',
      wrongInstinct: 'The scar is thick, red and raised, so it is a keloid and should be excised.',
      rightAnswer: 'Height does not distinguish them; the wound margin does. Collagen confined within the original margin is a hypertrophic scar and usually regresses over 12 to 24 months, while collagen extending beyond it is a keloid, which does not regress and recurs after simple excision.',
      why: 'Rule: trace the original wound edge before deciding — if the lesion has outgrown it, excision alone makes it worse, and adjuvant steroid, pressure or radiotherapy is required.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient undergoes resection of 60 per cent of the liver for a benign lesion and the remnant restores near-normal mass and architecture within weeks. A second patient with chronic hepatitis C, whose hepatocytes have identical proliferative capacity, develops nodules of hepatocytes separated by fibrous septa. What best accounts for the different outcomes?',
      options: [
        { id: 'a', text: 'Hepatocytes behave as permanent cells once hepatitis C is present, so they can no longer divide' },
        { id: 'b', text: 'The second patient has lost the growth factors, HGF and TGF-alpha, that drive hepatocyte proliferation' },
        { id: 'c', text: 'Regeneration requires an intact stromal framework as well as dividing cells, and repeated injury collapses the reticulin network so the same proliferation yields nodules inside scar' },
        { id: 'd', text: 'The second patient is healing by secondary rather than primary intention' },
      ],
      answerId: 'c',
      explanation: 'Both gates have to be open for regeneration to restore architecture. Hepatocytes are stable cells in both patients and divide perfectly well in both; what differs is the scaffold. After partial hepatectomy the reticulin framework and vascular relationships survive, so the new hepatocytes are placed correctly and function is fully restored. In chronic hepatitis the framework collapses and is replaced by fibrous septa, so identical proliferation produces regenerative nodules with disordered vascular connections, which is the definition of cirrhosis. This is the clearest demonstration in the chapter that architecture, not cell type, determines the outcome.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'On day 6 after a midline laparotomy the skin edges look well apposed, but a bout of coughing is followed by serosanguinous discharge from the wound. Which statement about the wound at this point is correct?',
      options: [
        { id: 'a', text: 'Collagen cross-linking is complete by day 6, so the closure is as strong as unwounded skin and the discharge must indicate infection' },
        { id: 'b', text: 'Tensile strength at one week is only about 10 per cent of normal and is still being carried largely by the sutures; it rises steeply over the next few weeks and reaches only about 70 to 80 per cent at three months' },
        { id: 'c', text: 'Because epithelial continuity is restored within 24 to 48 hours, the wound had regained full strength by day 3' },
        { id: 'd', text: 'The wound will regain 100 per cent of normal tensile strength by three months, so no restriction is needed' },
      ],
      answerId: 'b',
      explanation: 'Re-epithelialisation and tensile strength run on completely different timetables. The epidermis bridges a clean incision within 24 to 48 hours, which is why the wound looks closed, but strength depends on collagen accumulation, the exchange of type III for type I, and lysyl oxidase cross-linking, none of which is far advanced at one week. At that point the wound holds about 10 per cent of normal strength and the sutures are effectively the wound, which is why dehiscence clusters on days 5 to 8 and why serosanguinous discharge is its warning sign. Strength climbs steeply over the following month, plateaus near 70 to 80 per cent at three months, and never reaches normal.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A patient receiving bevacizumab, a monoclonal antibody against VEGF, for metastatic colorectal cancer requires an urgent laparotomy. The wound fails to granulate and dehisces at day 10. Which step in repair has been blocked, and why does that step matter so much?',
      options: [
        { id: 'a', text: 'Neutrophil recruitment, so the wound cannot be debrided of bacteria' },
        { id: 'b', text: 'Endothelial migration and proliferation, so no new capillaries and therefore no granulation tissue can form, leaving the repair bed without oxygen or substrate delivery' },
        { id: 'c', text: 'Myofibroblast contraction alone, which matters only in wounds healing by secondary intention' },
        { id: 'd', text: 'Lysyl oxidase cross-linking of collagen, which is copper-dependent' },
      ],
      answerId: 'b',
      explanation: 'VEGF drives the whole angiogenic sequence: permeability that lays down a provisional matrix, endothelial migration up the gradient, proliferation of stalk cells, lumen formation and pericyte recruitment. Granulation tissue is by definition new capillaries plus fibroblasts plus loose matrix, so blocking VEGF removes its vascular half and the defect never acquires a repair bed. Since collagen synthesis, proline hydroxylation and bacterial killing are all oxygen-dependent, a bed without vessels cannot support any of them. This is a mechanism-level prediction rather than an idiosyncratic side effect, which is why anti-VEGF therapy is separated from elective surgery by several weeks, and why hypertension and proteinuria appear with the same drugs as VEGF is withdrawn from the glomerulus.',
      tests: 'treatment',
    },
  ],
};

export default rbpRepairAngiogenesisFibrosis;
