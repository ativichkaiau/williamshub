import type { Lecture } from '../../lib/types';

export const ghpHighAltitudeAcclimatisation: Lecture = {
  id: 'ghp-high-altitude-acclimatisation',
  title: 'High Altitude & Acclimatisation',
  system: 'physiology',
  source: 'Ch 43 — Aviation, High-Altitude & Space Physiology',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 43 High-Altitude Physiology' },
    { kind: 'mechanism', label: 'Acclimatisation sequence' },
    { kind: 'exam', label: 'Why the kidney sets the pace' },
  ],

  highYield: [
    '**Altitude does not change the composition of air — it changes the pressure that composition acts on.** Oxygen stays **21%** all the way up, so inspired PO₂ falls in lockstep with barometric pressure: about **760 mmHg** at sea level, **523** at 3,000 m, **349** at 6,000 m. Every gas partial pressure in the body is scaled down by the same factor, which is exactly the mirror image of what depth does in [[ghp-diving-gas-partial-pressures]].',
    '**Alveolar PO₂ falls faster than inspired PO₂, because water vapour does not care about altitude.** Saturated airway gas always carries **47 mmHg** of water vapour whatever the barometric pressure, so that fixed 47 takes a progressively larger slice of a shrinking total. Add alveolar CO₂ and the alveolar PO₂ at 6,000 m is barely a third of the sea-level **104 mmHg**. At roughly **19,000 m** barometric pressure equals 47 mmHg and body fluids would boil at body temperature — the reason above that altitude the problem is pressurisation, not oxygen.',
    '**Acute hypoxia costs judgement before it costs consciousness, which is what makes it dangerous.** Around **3,500–4,000 m** an unacclimatised person gets headache, lassitude, euphoria and slowed thinking; above roughly **5,500 m** twitching, convulsions and coma follow. The insidious part is that self-assessment fails early, so useful consciousness after sudden decompression at high flight altitude is measured in **seconds to a couple of minutes**, not hours.',
    '**Hyperventilation is the first response and it brakes itself within minutes.** Peripheral chemoreceptors only fire briskly once arterial PO₂ drops below about **60–70 mmHg**, and the ventilation they buy — roughly a **65%** rise — blows off CO₂. The resulting **respiratory alkalosis** inhibits the central chemoreceptors, so the acute response is capped well below what the hypoxia deserves; the control logic is in [[ghp-chemoreceptor-control]].',
    '**The kidney releases that brake, and only then does ventilation reach its full value.** Over **2–5 days** bicarbonate is excreted in the urine and CSF bicarbonate falls, so pH at the central chemoreceptors returns towards normal while PaCO₂ stays low. Ventilation then climbs to **four to five times** the sea-level value. This is why a day-one arterial gas shows an uncompensated alkalosis and a day-five gas shows a low PaCO₂, a low bicarbonate and a near-normal pH.',
    '**Everything else is slow, and a lifelong native has advantages an adult can never acclimatise into.** **2,3-BPG** rises within a day or two and right-shifts the curve for tissue unloading; **erythropoietin** appears within hours but the haematocrit needs **weeks to months** to climb from about 40–45% towards **60%** with haemoglobin near **20 g/dL**; capillary density, mitochondria and oxidative enzymes increase over months. Natives raised at altitude instead have larger chests and lung volumes, greater diffusing capacity and a bigger right heart from childhood, and many Himalayan populations achieve this with **higher ventilation rather than extreme polycythaemia** — the excessive-red-cell pattern is what fails as chronic mountain sickness.',
  ],

  mechanism: {
    title: 'From falling barometric pressure to a working acclimatised state',
    steps: [
      { id: 's1', label: 'Barometric pressure falls; oxygen fraction stays 21% → inspired PO₂ falls proportionally', emphasis: 'key' },
      { id: 's2', label: 'Fixed 47 mmHg water vapour takes a larger share → alveolar PO₂ falls even faster', emphasis: 'key' },
      { id: 's3', label: 'Peripheral chemoreceptors drive a ~65% rise in ventilation', emphasis: 'key' },
      { id: 's4', label: 'Respiratory alkalosis inhibits central chemoreceptors and caps the response', emphasis: 'danger' },
      { id: 's5', label: 'Renal bicarbonate excretion over 2–5 days removes the brake → ventilation up to 5x', emphasis: 'key' },
      { id: 's6', label: 'Weeks to months: 2,3-BPG, polycythaemia, capillarity and mitochondrial density rise' },
    ],
  },

  examFindings: [
    { sign: 'Tachypnoea with tingling and light-headedness on the first day at altitude', mechanism: 'Hypoxic ventilatory drive producing an uncompensated respiratory alkalosis', significance: 'key' },
    { sign: 'Resting tachycardia and raised cardiac output in the first days, settling later', mechanism: 'Acute compensation for low arterial oxygen content that recedes as haemoglobin rises', significance: 'supportive' },
    { sign: 'Ruddy plethoric complexion and haematocrit near 60% in a long-term resident', mechanism: 'Erythropoietin-driven polycythaemia raising oxygen-carrying capacity', significance: 'key' },
    { sign: 'Loud pulmonary component of the second sound with a right ventricular heave', mechanism: 'Chronic hypoxic pulmonary vasoconstriction raising pulmonary artery pressure', significance: 'key' },
    { sign: 'Barrel chest with a large vital capacity in an Andean highlander', mechanism: 'Developmental enlargement of lungs and thorax available only to those raised at altitude', significance: 'key' },
    { sign: 'Headache, cyanosis and lethargy in a resident with haematocrit above 65%', mechanism: 'Excessive polycythaemia and hyperviscosity — loss of successful acclimatisation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Day-one gas: low PaO₂, low PaCO₂, raised pH, normal bicarbonate', meaning: 'Acute hypoxic hyperventilation with the alkalotic brake still fully applied' },
    { clue: 'Day-five gas: low PaCO₂, low bicarbonate, pH near 7.40', meaning: 'Renal compensation complete — ventilation is no longer limited by alkalosis' },
    { clue: 'Reticulocyte count rising within two to four days of arrival', meaning: 'Erythropoietin response under way, weeks before the haematocrit reflects it' },
    { clue: 'Raised red cell 2,3-BPG', meaning: 'Right-shifted dissociation curve favouring unloading at the tissues' },
    { clue: 'Echocardiogram showing raised pulmonary artery pressure and right ventricular hypertrophy', meaning: 'Sustained hypoxic pulmonary vasoconstriction, the cost of chronic altitude residence' },
    { clue: 'Falling arterial saturation on exertion despite weeks of residence', meaning: 'Diffusion limitation at low alveolar PO₂ — the reserve that natives have and visitors do not' },
  ],

  treatment: [
    {
      logic: 'Ascend at a rate the kidney can match',
      detail: 'Ventilation responds in minutes but is capped until **bicarbonate is excreted over 2–5 days**, so staged ascent with rest days is not folklore — it is waiting for renal compensation. Above about **3,000 m**, limiting the gain in sleeping altitude to roughly **300–500 m per day** keeps the hypoxic stimulus inside what the acclimatisation sequence can absorb, and prevents the illnesses covered in [[ghp-altitude-illness-space]].',
    },
    {
      logic: 'Use acetazolamide to fast-forward the renal step, and descent when acclimatisation fails',
      detail: 'Carbonic anhydrase inhibition forces **bicarbonate loss in the urine**, producing a mild metabolic acidosis that releases the central brake days earlier than nature would. When acclimatisation instead fails into excessive polycythaemia with pulmonary hypertension, the treatment is **descent**, with supplemental oxygen and occasionally phlebotomy as holding measures — matching oxygen to the type of hypoxia as in [[ghp-respiratory-insufficiency-hypoxia]].',
    },
  ],

  mnemonics: [
    { hook: 'Minutes, days, weeks, months', expansion: ['Minutes — hyperventilation', 'Days — renal bicarbonate loss and 2,3-BPG', 'Weeks — polycythaemia', 'Months — capillaries and mitochondria'] },
    { hook: 'The 47 that never falls', expansion: ['Water vapour is 47 mmHg at any altitude', 'It takes a bigger share of a smaller total', 'At 47 mmHg barometric pressure body fluids boil'] },
  ],

  traps: [
    {
      questionCategory: 'Why ventilation does not rise maximally on day one',
      wrongInstinct: 'The peripheral chemoreceptors are simply too weak to respond fully',
      rightAnswer: 'The alkalosis their own hyperventilation creates inhibits the central chemoreceptors',
      why: 'Renal bicarbonate excretion over 2–5 days is what unlocks the full ventilatory response',
    },
    {
      questionCategory: 'Which adaptation explains improvement in the first week',
      wrongInstinct: 'Polycythaemia — more red cells carrying more oxygen',
      rightAnswer: 'Increased ventilation, completed by renal compensation, plus a raised 2,3-BPG',
      why: 'Haematocrit needs weeks to months to change meaningfully; the gas exchange changes arrive first',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'At 6,000 m the barometric pressure is roughly 349 mmHg. Why does alveolar PO₂ fall by a greater fraction than inspired PO₂?',
      options: [
        { id: 'a', text: 'The oxygen fraction of air decreases with altitude' },
        { id: 'b', text: 'Water vapour remains a fixed 47 mmHg, taking a larger share of a smaller total pressure' },
        { id: 'c', text: 'Haemoglobin extracts more oxygen from alveolar gas at altitude' },
        { id: 'd', text: 'Dead space ventilation increases proportionally with altitude' },
      ],
      answerId: 'b',
      explanation: 'Airway gas is fully saturated at body temperature, so it always carries 47 mmHg of water vapour regardless of barometric pressure. As total pressure falls, that fixed 47 mmHg plus alveolar CO₂ consume a progressively larger proportion of what is left, squeezing alveolar PO₂ down faster than the inspired value. The oxygen fraction itself stays 21% at every altitude.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A climber at 4,500 m has an arterial gas on day five showing pH 7.42, PaCO₂ 22 mmHg and bicarbonate 14 mmol/L. What change permitted this degree of hyperventilation?',
      options: [
        { id: 'a', text: 'A rise in 2,3-BPG shifting the dissociation curve' },
        { id: 'b', text: 'Polycythaemia raising arterial oxygen content' },
        { id: 'c', text: 'Renal excretion of bicarbonate normalising pH at the central chemoreceptors' },
        { id: 'd', text: 'Increased capillary density in skeletal muscle' },
      ],
      answerId: 'c',
      explanation: 'On arrival the hypoxic drive raises ventilation but the resulting alkalosis inhibits the central chemoreceptors and caps it. Over two to five days the kidney excretes bicarbonate and CSF bicarbonate falls, so pH returns towards normal despite a persistently low PaCO₂. That removes the brake and lets ventilation reach four to five times its sea-level value.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A lifelong Andean highlander outperforms a lowlander who has acclimatised for two months at the same altitude. What best explains the difference?',
      options: [
        { id: 'a', text: 'A higher 2,3-BPG concentration unavailable to visitors' },
        { id: 'b', text: 'Developmental enlargement of thorax, lung volumes, diffusing capacity and right heart from childhood' },
        { id: 'c', text: 'A lower resting metabolic rate reducing oxygen demand' },
        { id: 'd', text: 'An absent hypoxic pulmonary vasoconstrictor response' },
      ],
      answerId: 'b',
      explanation: 'The visitor can acquire hyperventilation, renal compensation, a raised 2,3-BPG, polycythaemia and some extra capillarity, but not a larger chest and lung. Growing up in hypoxia produces bigger lung volumes, greater diffusing capacity, a larger right ventricle and denser tissue capillarity, which is why native work capacity at altitude exceeds that of even a well-acclimatised adult lowlander.',
      tests: 'mechanism',
    },
  ],
};

export default ghpHighAltitudeAcclimatisation;
