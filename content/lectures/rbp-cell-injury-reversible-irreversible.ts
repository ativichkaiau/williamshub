import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpCellInjuryReversibleIrreversible: Lecture = {
  id: 'rbp-cell-injury-reversible-irreversible',
  title: 'Cell Injury: Reversible & Irreversible',
  system: 'pathology',
  source: 'Ch 1 — Cell Injury, Cell Death, and Adaptations',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 1 Cell Injury, Cell Death, and Adaptations' },
    { kind: 'mechanism', label: 'ATP depletion, calcium overload & membrane failure' },
    { kind: 'investigation', label: 'Enzyme leak as the readout of irreversibility' },
  ],

  highYield: [
    '**Irreversibility is defined by membrane integrity and mitochondrial permeability transition — not by swelling.** Cellular swelling, surface blebs, ribosome detachment and myelin figures are all **reversible**; they are what a living cell looks like when its pumps have stopped. The point of no return is crossed on two events: the **mitochondrial permeability transition pore** opens in the inner membrane, collapsing the proton gradient so ATP can never be regenerated, and the **plasma membrane** loses continuity. Those two, and only those two, are irreversible. Get the discriminator the right way round: **a swollen cell can be rescued, a leaking cell cannot**. The mechanistic background sits in [[cell-injury-mechanisms]].',
    '**That definition is exactly why serum enzyme release is the clinical readout of cell death.** A cell with an intact plasma membrane **cannot** spill its cytosolic contents into plasma, whatever else has gone wrong inside it. So finding **troponin**, **CK-MB**, **ALT**, **AST** or **LDH** in the blood is not an indirect inference about injury — it is direct evidence that a **barrier failed**. Troponin is a structural contractile protein rather than an enzyme, but it obeys the same rule. The corollary matters as much: the **magnitude** of the leak tracks the **mass** of cells that lost their membranes, not the moment they died, which is why a single value never dates an infarct.',
    '**Ischaemia injures faster than pure hypoxia because the anaerobic fallback itself fails.** In **hypoxia with flow preserved**, glycolysis still works: glucose keeps arriving and lactate and H+ keep washing away, so the cell buys time on glycolytic ATP. In **ischaemia**, flow stops, so **substrate delivery stops too** and **lactate and H+ accumulate**, dropping intracellular pH and inhibiting **phosphofructokinase** — the spare engine is starved of fuel and then poisoned by its own exhaust. State it as a rule: **hypoxia removes the main engine; ischaemia removes the engine and the spare**. Identical oxygen tensions therefore give very different survival times.',
    '**ATP depletion is the master lesion, and the order in which pumps fail explains the morphology.** Below roughly **5 to 10%** of normal ATP the **Na+/K+ ATPase** fails first: sodium and water enter, potassium leaves, and the cell swells — **hydropic change is the first morphologic manifestation of almost every injury**, and the hardest to see down a light microscope. Glycogen is consumed, pH falls and chromatin clumps. **Ribosomes detach** from rough ER, protein synthesis falls and lipid export fails, which is why the injured hepatocyte becomes steatotic. Then the **Ca2+ ATPases** fail, and the cell loses control of the one ion it least can afford to.',
    '**Calcium is the amplifier that turns an energy problem into structural demolition.** The resting gradient is about **0.1 µmol/L** cytosolic against **1.3 mmol/L** extracellular — a **10,000-fold** difference held up entirely by ATP. When the pumps quit, calcium floods in from the ER and then from outside and switches on four destructive families at once: **phospholipase A2** strips membrane phospholipid, **proteases** cleave the cytoskeleton and membrane proteins, **endonucleases** fragment chromatin, and **ATPases** burn the little ATP that remains. Calcium also directly opens the **permeability transition pore**, so it is both a consequence of ATP loss and the cause of the final irreversible step — a genuine vicious cycle.',
    '**Reperfusion adds damage on top of the ischaemia, by three named mechanisms.** Restoring flow floods still-damaged mitochondria with oxygen, generating a **burst of reactive oxygen species** from the electron transport chain, from **xanthine oxidase**, and from arriving **neutrophils**, at a moment when antioxidant stores are already spent. Restored delivery also drives **calcium overload** into cells whose pumps have not yet recovered. And **complement** — IgM binding neoantigens exposed by the ischaemia — plus cytokines and neutrophil adhesion mount an inflammatory attack on tissue that had survived. This is a real cost, not a reason to delay: the cells it kills are precisely the ones that were **still viable** when flow returned, and reperfusion salvages far more than it destroys. The downstream tissue consequences are in [[infarction-shock]]; the death programmes that follow are in [[rbp-necrosis-apoptosis-adaptations]].',
  ],

  mechanism: {
    title: 'Total ischaemia to the point of no return',
    steps: [
      { id: 's1', label: 'Flow stops — oxygen AND glucose delivery stop together', detail: 'Metabolites are no longer washed away, so the insult is simultaneously starvation and self-poisoning.', emphasis: 'key' },
      { id: 's2', label: 'Oxidative phosphorylation fails; ATP falls below 5 to 10% of normal', detail: 'Every ATP-dependent process is now rationed in order of how much it consumes.', emphasis: 'key' },
      { id: 's3', label: 'Na+/K+ ATPase fails — swelling, blebs, ribosome detachment', detail: 'Hydropic change, myelin figures and reduced protein synthesis. All of this is still reversible.', emphasis: 'normal' },
      { id: 's4', label: 'The glycolytic fallback stalls', detail: 'Glycogen is exhausted; lactate and H+ accumulate and inhibit phosphofructokinase. This step is what makes ischaemia faster than hypoxia.', emphasis: 'normal' },
      { id: 's5', label: 'Cytosolic calcium rises and opens the permeability transition pore', detail: 'Phospholipases, proteases, endonucleases and ATPases activate; the inner mitochondrial membrane loses its proton gradient for good.', emphasis: 'danger' },
      { id: 's6', label: 'The plasma membrane loses continuity — enzymes out, calcium in', detail: 'Irreversible. Cytosolic proteins now reach the plasma, which is the moment a blood test can see the death.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A pale, heavy, swollen organ with diffuse cytoplasmic vacuolation', mechanism: 'Failed Na+/K+ ATPase lets sodium and water in — hydropic swelling, the earliest and most reversible change', significance: 'key' },
    { sign: 'Surface blebs and loss of microvilli on electron microscopy', mechanism: 'Cytoskeletal anchorage to the plasma membrane is lost while the membrane itself is still continuous — reversible', significance: 'supportive' },
    { sign: 'Whorled myelin figures within the cytoplasm', mechanism: 'Damaged membrane phospholipid reorganises into lamellar whorls; a marker of membrane injury, not of death', significance: 'supportive' },
    { sign: 'Amorphous flocculent densities in the mitochondrial matrix on EM', mechanism: 'The morphologic correlate of the permeability transition — this one marks irreversibility', significance: 'key' },
    { sign: 'Rising serum troponin after prolonged ischaemic chest pain', mechanism: 'A structural myocyte protein has reached the plasma, which is only possible once the sarcolemma has failed', significance: 'key' },
    { sign: 'Entirely normal light microscopy in a heart infarcted two hours earlier', mechanism: 'Routine morphology lags irreversibility by 4 to 12 hours; absence of visible necrosis is not absence of death', significance: 'key' },
  ],

  investigations: [
    { clue: 'Any cytosolic protein or enzyme appearing in serum', meaning: 'Membrane integrity has been lost somewhere. Magnitude estimates the mass of cells affected; it does not date the event.' },
    { clue: 'A rising-and-falling troponin versus a flat elevation', meaning: 'A dynamic pattern with ischaemic symptoms or ECG change means acute infarction. A stable elevation means chronic injury — renal failure, structural heart disease, myocarditis.' },
    { clue: 'Rising arterial lactate with a widened anion gap', meaning: 'Anaerobic glycolysis across a whole tissue bed. It is the organ-level signature of ischaemia and tracks resuscitation.' },
    { clue: 'Electron microscopy versus H&E timing', meaning: 'EM shows mitochondrial swelling and matrix densities within minutes; H&E shows nothing for 4 to 12 hours. The two modalities are asking different questions.' },
    { clue: 'Which tissue is at risk', meaning: 'Neurons are irreversibly injured after 3 to 5 minutes of total ischaemia, cardiac myocytes after 20 to 30 minutes, skeletal muscle and fibroblasts after 2 to 3 hours. The ranking follows oxidative demand against glycolytic reserve.' },
    { clue: 'Temperature and prior brief ischaemia', meaning: 'Hypothermia and ischaemic preconditioning lengthen the tolerable window by cutting demand. This is the whole basis of cold organ preservation and of therapeutic cooling.' },
  ],

  treatment: [
    {
      logic: 'Reopen the vessel — the only intervention that changes how many cells survive',
      detail: 'Salvage is a function of **time**, because the irreversible fraction grows minute by minute from the subendocardium outward. **Reperfusion injury is a complication of success, never an argument for delay** — the cells it kills were still alive when flow returned, and they would all have died without it. Treat the injury by shortening the ischaemic time, not by withholding reperfusion. Tissue-level consequences of failing to do so are in [[infarction-shock]].',
    },
    {
      logic: 'While supply is being restored, cut demand',
      detail: 'Every intervention that lowers **ATP consumption** buys minutes: **cooling**, reducing **heart rate and wall stress**, relieving obstruction. Supplemental oxygen helps only if the patient is genuinely **hypoxaemic** — giving oxygen to a normally saturated patient does nothing for an occluded artery, because the problem is **delivery**, not content. That is the practical difference between ischaemia and hypoxia restated at the bedside, and it follows directly from [[cell-injury-mechanisms]].',
    },
  ],

  mnemonics: [
    {
      hook: 'ATP down, sodium in, calcium in, enzymes out',
      expansion: [
        'ATP down: the Na+/K+ ATPase fails first.',
        'Sodium in: water follows, the cell swells — still reversible.',
        'Calcium in: phospholipases, proteases, endonucleases, ATPases — and the permeability transition pore.',
        'Enzymes out: the membrane has failed. That is the irreversible step, and the one a blood test can see.',
      ],
    },
    {
      hook: 'Hypoxia loses the engine; ischaemia loses the engine and the spare',
      expansion: [
        'Hypoxia: oxygen is low but flow continues, so glucose arrives and lactate leaves — glycolysis keeps running.',
        'Ischaemia: flow has stopped, so substrate delivery stops and lactate accumulates.',
        'Accumulated H+ inhibits phosphofructokinase, shutting down glycolysis itself.',
        'Therefore the same oxygen tension kills faster when it is caused by lost flow.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What actually defines the point of no return',
      wrongInstinct: 'Severe cellular swelling means the cell has passed the point of no return.',
      rightAnswer: 'Swelling is the hallmark of REVERSIBLE injury. Irreversibility requires mitochondrial permeability transition plus loss of plasma membrane integrity.',
      why: 'A swollen cell with a sealed membrane can still be rescued; a cell leaking troponin has already lost the barrier that made rescue possible.',
    },
    {
      questionCategory: 'Hypoxia versus ischaemia',
      wrongInstinct: 'They are the same insult under two names, so they injure at the same rate.',
      rightAnswer: 'Ischaemia is faster because losing flow also stops glucose delivery and metabolite washout, so anaerobic glycolysis fails as well.',
      why: 'Hypoxia leaves the glycolytic fallback running; ischaemia starves it and then acidifies it into shutdown.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cardiac myocyte is examined by electron microscopy during progressive coronary occlusion. Which observed change indicates that the transition to irreversible injury has occurred?',
      options: [
        { id: 'a', text: 'Hydropic swelling of the cytoplasm with dilated endoplasmic reticulum' },
        { id: 'b', text: 'Detachment of ribosomes from the rough endoplasmic reticulum' },
        { id: 'c', text: 'Amorphous matrix densities in mitochondria with discontinuity of the plasma membrane' },
        { id: 'd', text: 'Whorled myelin figures within the cytoplasm' },
      ],
      answerId: 'c',
      explanation: 'Swelling, ribosome detachment and myelin figures are all features of reversible injury. Irreversibility is defined by mitochondrial permeability transition — seen as flocculent matrix densities — together with loss of plasma membrane continuity.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Two identical muscle preparations are deprived of oxygen. One is perfused with an oxygen-free, glucose-containing buffer; in the other, all flow is stopped. The preparation with no flow reaches irreversible injury considerably sooner. What best explains this?',
      options: [
        { id: 'a', text: 'Stopping flow paradoxically increases oxygen delivery to the tissue' },
        { id: 'b', text: 'Without flow, glucose delivery also stops and lactate and H+ accumulate, so anaerobic glycolysis fails too' },
        { id: 'c', text: 'Lysosomal enzymes require perfusion pressure in order to remain inactive' },
        { id: 'd', text: 'All oxygen-deprived cells become irreversibly injured after an identical fixed interval' },
      ],
      answerId: 'b',
      explanation: 'Hypoxia with preserved flow leaves the glycolytic fallback intact: substrate arrives and acid is washed out. Ischaemia removes both, and the falling intracellular pH inhibits phosphofructokinase, shutting glycolysis down. That is why ischaemia injures faster than pure hypoxia.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Serum troponin I is markedly elevated six hours after the onset of prolonged chest pain. Considered purely as a statement about the cells that released it, what does the presence of an intracellular myocyte protein in plasma establish?',
      options: [
        { id: 'a', text: 'Those cells are reversibly injured and will recover their function' },
        { id: 'b', text: 'Their plasma membranes lost integrity, allowing intracellular contents to escape' },
        { id: 'c', text: 'They died by apoptosis, with their membranes intact throughout' },
        { id: 'd', text: 'They are undergoing compensatory hypertrophy' },
      ],
      answerId: 'b',
      explanation: 'An intact plasma membrane retains intracellular proteins regardless of how sick the cell is. Detecting them in plasma proves the barrier failed, which is the defining event of irreversible injury and necrosis. It does not, however, date the death or identify its cause.',
      tests: 'investigation',
    },
  ],
};

export default rbpCellInjuryReversibleIrreversible;
