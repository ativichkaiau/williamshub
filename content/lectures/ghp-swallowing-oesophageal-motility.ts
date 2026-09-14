import type { Lecture } from '../../lib/types';

export const ghpSwallowingOesophagealMotility: Lecture = {
  id: 'ghp-swallowing-oesophageal-motility',
  title: 'Swallowing & Oesophageal Motility',
  system: 'gi',
  source: 'Ch 63 — Propulsion & Mixing of Food in the Alimentary Tract',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Gastrointestinal' },
    { kind: 'lecture', label: 'Ch 63 Propulsion & Mixing' },
    { kind: 'mechanism', label: 'Deglutition reflex · peristalsis' },
    { kind: 'exam', label: 'Airway protection · achalasia' },
  ],

  highYield: [
    '**Swallowing has three phases, and only the first is yours.** The **voluntary (oral)** phase is a single decision: the tongue presses the bolus upward and backward against the hard palate and tips it into the pharynx. From the moment the bolus touches the pharyngeal wall the **pharyngeal** phase (about **1–2 seconds**) and the **oesophageal** phase (**8–10 seconds** for solids) are entirely **reflex** and cannot be stopped. The exam point is the handover: voluntary initiation, involuntary execution.',
    '**The pharyngeal phase is an airway-closing sequence that happens to move food.** In order: the **soft palate elevates** and shuts the posterior nares; the **palatopharyngeal folds** pull medially into a sagittal slit that admits only well-chewed material; the **vocal cords adduct** and the **larynx is pulled up and forward** by the hyoid muscles, so the **epiglottis** swings back over the glottis; and the **respiratory centre is reflexly inhibited** for a fraction of a second (**deglutition apnoea**). Only when the airway is sealed does the **upper oesophageal sphincter relax** — larynx-forward traction is itself part of opening it.',
    '**It must be reflex because it is a timing problem, not a strength problem.** The food path and the airway cross, and the crossing has to be shut in a fixed order in under a second — faster and more reproducibly than voluntary control can deliver. So the sequence is hard-wired as a **fixed-action pattern** in the medulla: once the afferent volley arrives, the whole programme runs. Damage anywhere in the loop converts an automatic seal into a **fraction of a second of open airway**, which is aspiration.',
    '**The swallowing centre is medullary and the cranial nerves are examinable.** Afferents from the tonsillar pillars and posterior pharynx travel in the **trigeminal (V)** and **glossopharyngeal (IX)** nerves to the **nucleus tractus solitarius**; the programme is generated in the medulla and lower pons and the efferents leave via the **nucleus ambiguus** in **V, IX, X and XII**. The **vagus** is the motor supply of the oesophagus itself. A brainstem stroke, motor neurone disease or myasthenia therefore all present as an **oropharyngeal** dysphagia with choking on the first swallow.',
    '**Primary peristalsis is the swallow continuing; secondary peristalsis is the oesophagus cleaning up.** The pharyngeal wave runs straight on down the oesophagus at about **3 cm/s**, reaching the stomach in **8–10 seconds** (faster upright, where gravity does much of the work — liquids arrive in about **1 second**). If any bolus is left behind, **distension** of the oesophageal wall triggers **secondary peristalsis**, driven partly by the **myenteric plexus** alone and partly by a **vagovagal loop** through the medulla, and it repeats until the oesophagus is empty. The same wave is what clears refluxed acid.',
    '**Two sphincters, and reflux is prevented by more than just the lower one.** The **upper oesophageal sphincter (cricopharyngeus, striated)** is tonically shut so that breathing does not inflate the oesophagus. The **lower oesophageal sphincter** holds about **30 mmHg** above intragastric pressure and undergoes **receptive relaxation** more than two seconds before the wave arrives, via vagal **inhibitory myenteric neurons releasing nitric oxide and VIP**. It is backed up by the **crural diaphragm** pinching the hiatus, the **oblique angle of His** acting as a flap valve, and the short **intra-abdominal segment** that any rise in abdominal pressure squeezes shut — which is exactly what a hiatus hernia takes away.',
  ],

  mechanism: {
    title: 'Bolus to pharynx → airway sealed → UOS opens → peristalsis → LOS relaxes',
    steps: [
      { id: 's1', label: 'Voluntary: tongue drives the bolus up and back into the pharynx', emphasis: 'key' },
      { id: 's2', label: 'Bolus touches tonsillar pillars: V and IX afferents reach the medullary swallowing centre', emphasis: 'key' },
      { id: 's3', label: 'Airway sealed in order: nares, cords, larynx up, epiglottis over, breathing inhibited', emphasis: 'danger' },
      { id: 's4', label: 'Cricopharyngeus relaxes as the larynx is pulled up and forward', emphasis: 'key' },
      { id: 's5', label: 'Pharyngeal wave becomes primary peristalsis at 3 cm/s, 8 to 10 seconds' },
      { id: 's6', label: 'Vagal NO and VIP neurons relax the LOS ahead of the wave; bolus enters the stomach', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Coughing and a wet, gurgling voice within a second of swallowing thin liquids', mechanism: 'Pharyngeal-phase failure: the wave arrives before the larynx is sealed, so liquid enters the airway', significance: 'key' },
    { sign: 'Fluid returning down the nose on swallowing', mechanism: 'The soft palate fails to elevate and close the posterior nares (vagal or palatal weakness)', significance: 'key' },
    { sign: 'Dysphagia to solids AND liquids from the very beginning, with regurgitation of undigested food hours later', mechanism: 'Achalasia: an aperistaltic body cannot push, and a non-relaxing LOS will not open, so both consistencies stick', significance: 'key' },
    { sign: 'Progressive dysphagia to solids first, liquids only much later, with weight loss', mechanism: 'A narrowing lumen — stricture or carcinoma — still has peristalsis, so liquids pass until the stenosis is severe', significance: 'key' },
    { sign: 'Relief obtained by standing tall, throwing the shoulders back or drinking more water', mechanism: 'Raising the hydrostatic column and recruiting secondary peristalsis pushes the bolus through a non-relaxing sphincter', significance: 'supportive' },
    { sign: 'Retrosternal burning worse lying flat and after a large meal', mechanism: 'Loss of LOS tone, crural pinch or intra-abdominal segment lets gastric contents up when the pressure gradient reverses', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cranial nerves carrying the afferent limb of the swallowing reflex', meaning: 'Trigeminal (V) and glossopharyngeal (IX), from the tonsillar pillars and posterior pharynx' },
    { clue: 'Efferent nerves of the pharyngeal phase and their nucleus', meaning: 'V, IX, X and XII, leaving from the nucleus ambiguus' },
    { clue: 'A peristaltic wave triggered by a retained bolus rather than by a swallow', meaning: 'Secondary peristalsis — myenteric circuits plus a vagovagal loop; also the acid-clearance mechanism' },
    { clue: 'Transmitters released by the inhibitory myenteric neurons that open the LOS', meaning: 'Nitric oxide and vasoactive intestinal peptide' },
    { clue: 'Manometry: absent peristalsis in the body with incomplete LOS relaxation', meaning: 'Achalasia — the diagnostic pairing, since either finding alone is non-specific' },
    { clue: 'Barium swallow: dilated body tapering to a smooth symmetrical beak', meaning: 'Achalasia (the bird-beak); an irregular shouldered narrowing suggests carcinoma instead' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Swallowing is the one place where the reflex is not an efficiency but a **life-support mechanism** — the airway shares a corridor with food and is defended by timing alone. Read every dysphagia by asking **where** it fails: at the **pharyngeal** phase, symptoms are immediate — coughing, nasal regurgitation, a wet voice within a second (a neurological problem); at the **oesophageal** phase, symptoms come seconds later, felt retrosternally, as food sticking. The clinical layer sits at [[swallowing-phases-reflex]] and [[esophageal-peristalsis-sphincters]]; the pathology at [[esophageal-disorders-pathology]].' },
    { logic: 'Achalasia is a loss of inhibition, not an excess of contraction', detail: 'The lesion is **degeneration of the inhibitory myenteric neurons** that make **nitric oxide and VIP** in the distal oesophagus and LOS. Excitatory cholinergic neurons are spared, so their tone becomes **unopposed** — the sphincter simply never receives the signal to let go, and the body loses its peristaltic co-ordination at the same time. The consequences follow logically: food dams up, the oesophagus dilates, and chronic stasis carries a real risk of **squamous carcinoma**. **Chagas disease** destroys the same plexus and reproduces the picture. Every effective treatment is mechanical or chemical **removal of tone** — pneumatic dilatation, myotomy, botulinum toxin, nitrates or calcium channel blockers — because the neurons are not coming back. Once the bolus is through, control passes to the stomach: [[ghp-gastric-motility-emptying]].' },
  ],

  mnemonics: [
    { hook: 'The pharyngeal phase shuts four doors before it opens one', expansion: ['Nose (soft palate up), Cords (adducted), Epiglottis (over the glottis), Breath (respiration inhibited)', 'Only then does the fifth door open — the cricopharyngeus relaxes as the larynx is pulled up and forward'] },
    { hook: 'A-CHALASIA = no relaxation', expansion: ['The inhibitory NO and VIP neurons are gone, so the sphincter never lets go', 'Unopposed cholinergic tone plus an aperistaltic body: dysphagia to solids and liquids together, from day one'] },
  ],

  traps: [
    {
      questionCategory: 'What the pattern of dysphagia is telling you',
      wrongInstinct: 'Dysphagia to both solids and liquids means the obstruction must be severe and advanced',
      rightAnswer: 'Solids and liquids together from the start is a MOTILITY problem; solids first, progressing to liquids, is a narrowing lumen',
      why: 'A mechanical stricture still has working peristalsis, so liquids slip past until the calibre is critical; an aperistaltic oesophagus cannot push anything.',
    },
    {
      questionCategory: 'The mechanism of the non-relaxing LOS in achalasia',
      wrongInstinct: 'The sphincter muscle is hypertrophied or in spasm and needs to be relaxed pharmacologically',
      rightAnswer: 'Inhibitory myenteric neurons releasing nitric oxide and VIP have been lost, leaving normal cholinergic tone unopposed',
      why: 'It is a failure of the relaxation signal, not an excess of contraction — which is why the body is aperistaltic too, and why the lesion is permanent.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a lateral medullary infarct coughs and develops a wet voice within a second of every sip of water. The step that has most directly failed is:',
      options: [
        { id: 'a', text: 'Voluntary transfer of the bolus from the mouth into the pharynx' },
        { id: 'b', text: 'Reflex laryngeal elevation with vocal cord adduction and epiglottic closure' },
        { id: 'c', text: 'Receptive relaxation of the lower oesophageal sphincter' },
        { id: 'd', text: 'Secondary peristalsis clearing a retained bolus from the oesophagus' },
      ],
      answerId: 'b',
      explanation: 'Symptoms arriving within a second of the swallow localise to the pharyngeal phase, and the medulla houses the swallowing centre whose efferents run through the nucleus ambiguus. With the airway-sealing sequence disrupted, liquid reaches the larynx during the swallow itself — hence immediate coughing and a wet voice from fluid on the cords. LOS relaxation and secondary peristalsis are oesophageal events and would produce symptoms seconds later, felt retrosternally.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Oesophageal manometry shows absent peristalsis in the body and a lower oesophageal sphincter that fails to relax on swallowing. The underlying abnormality is:',
      options: [
        { id: 'a', text: 'Excess release of acetylcholine from excitatory myenteric neurons' },
        { id: 'b', text: 'Loss of inhibitory myenteric neurons that release nitric oxide and VIP' },
        { id: 'c', text: 'Fibrous replacement of the smooth muscle of the distal oesophagus' },
        { id: 'd', text: 'Failure of the vagal afferent limb reaching the nucleus tractus solitarius' },
      ],
      answerId: 'b',
      explanation: 'This is achalasia. Normal LOS opening depends on vagally driven inhibitory myenteric neurons releasing nitric oxide and VIP just ahead of the peristaltic wave. When those neurons degenerate, the surviving cholinergic tone is unopposed and the sphincter never relaxes, while the same neuronal loss in the body destroys the sequencing that peristalsis depends on. The defect is loss of inhibition rather than added excitation, fibrosis or an afferent failure.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'After a large hiatus hernia develops, a patient has frequent reflux despite a lower oesophageal sphincter pressure measured in the normal range. The best explanation is:',
      options: [
        { id: 'a', text: 'Secondary peristalsis has been abolished by the hernia' },
        { id: 'b', text: 'Gastric acid secretion rises when the stomach herniates through the hiatus' },
        { id: 'c', text: 'The crural diaphragm pinch, the angle of His and the intra-abdominal segment have all been lost' },
        { id: 'd', text: 'The upper oesophageal sphincter can no longer maintain its resting tone' },
      ],
      answerId: 'c',
      explanation: 'The antireflux barrier is not the LOS alone. The crural diaphragm acts as an external sphincter at the hiatus, the acute angle of His works as a flap valve, and the short intra-abdominal segment is squeezed shut by any rise in abdominal pressure. A hernia slides the junction into the chest and removes all three at once, so reflux occurs even with an intrinsically normal sphincter pressure. Acid output is unchanged, and the upper sphincter is unaffected.',
      tests: 'exam',
    },
  ],
};

export default ghpSwallowingOesophagealMotility;
