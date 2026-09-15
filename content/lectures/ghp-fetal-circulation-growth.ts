import type { Lecture } from '../../lib/types';

export const ghpFetalCirculationGrowth: Lecture = {
  id: 'ghp-fetal-circulation-growth',
  title: 'Fetal Circulation, Oxygen Transport & Growth',
  system: 'repro',
  source: 'Ch 84 — Fetal & Neonatal Physiology',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'Ch 84 Fetal & Neonatal Physiology' },
    { kind: 'mechanism', label: 'Two ventricles in parallel; streaming feeds heart and brain first' },
    { kind: 'exam', label: 'HbF is left-shifted because gamma chains bind 2,3-BPG poorly' },
  ],

  highYield: [
    "**The fetal ventricles work largely in parallel because the placenta performs gas exchange and the lungs have high vascular resistance.** Blood can bypass the liver through the ductus venosus, pass from right to left atrium through the foramen ovale and bypass much of the pulmonary circuit through the ductus arteriosus. The right ventricle supplies the larger share of combined output, but the proportions vary with gestation and physiology. Shunts can sustain circulation despite some severe structural heart defects; they do not make every defect harmless before birth. Review the anatomy in [[fetal-circulation-shunts]].",
    "**Preferential streaming delivers relatively well-oxygenated blood toward the heart and brain.** Umbilical venous blood enters the liver, with a portion passing through the ductus venosus into the inferior vena cava. In human fetuses, ductus venosus shunting is often roughly 20–30% and changes with gestation and compromise; it is not a fixed half of umbilical flow. The relatively oxygenated stream is preferentially directed across the foramen ovale toward the left ventricle and ascending aorta. Superior vena caval blood preferentially enters the right ventricle and much of that output passes through the ductus arteriosus into the descending aorta. Streaming is preferential rather than complete separation.",
    "**HbF helps oxygen loading at the low oxygen tensions of fetal blood.** Its gamma chains bind 2,3-BPG less strongly than the beta chains of HbA, so the low-affinity deoxygenated state is less stabilised and the oxygen-dissociation curve shifts left. At a given oxygen tension, HbF therefore generally has a higher saturation under comparable conditions. A relatively high fetal haemoglobin concentration also supports oxygen content. These are separate mechanisms: affinity affects the dissociation curve, while concentration affects carrying capacity. Placental carbon dioxide transfer promotes maternal oxygen unloading and fetal loading through the double Bohr effect.",
    "**The placenta handles exchange, while fetal organs still develop and perform functions of their own.** Glucose crosses mainly by facilitated transport, whereas amino-acid transport can maintain higher fetal concentrations. Maternal insulin does not cross the placenta in physiologically significant amounts. Fatty acids also reach the fetus through regulated placental uptake, metabolism and transfer; fetal lipid accretion is not explained by glucose conversion alone. Fetal urine contributes importantly to amniotic fluid, while placental exchange provides the main route for net removal of many fetal metabolic wastes. Exchange depends on maternal and fetal flows as well as the properties of the placental barrier. See [[hrp1-placenta-villi-barrier-circulation]].",
    "**Fetal growth depends strongly on substrate availability, insulin and the IGF system.** Pituitary growth hormone is less important for fetal growth than it becomes after birth, so congenital GH deficiency need not cause a markedly small newborn. Placental insufficiency can restrict nutrient and oxygen delivery and alter flow distribution. Maternal hyperglycaemia, conversely, can increase fetal glucose exposure and stimulate fetal insulin secretion, promoting excessive growth. After delivery removes the maternal glucose supply, persistent fetal hyperinsulinaemia can cause neonatal hypoglycaemia; maternal insulin transfer is not the explanation.",
    "**Birth changes the pressure relationships that made the shunts useful.** Lung aeration lowers pulmonary vascular resistance and increases pulmonary venous return. Removing the low-resistance placental circuit raises systemic resistance. Left atrial pressure then tends to exceed right atrial pressure, promoting functional closure of the foramen ovale, while increased oxygen and reduced prostaglandin support promote ductal constriction. In duct-dependent congenital heart disease, loss of the duct can unmask inadequate pulmonary or systemic flow. Timing and clinical severity vary; the transition is developed in [[ghp-neonatal-transition-adaptation]].",
  ],

  mechanism: {
    title: 'Placenta → ductus venosus jet → streaming → heart and brain get the best blood',
    steps: [
      { id: 's1', label: 'Umbilical vein leaves the placenta at PO2 about 32 to 35 mmHg and 80 per cent saturation — the best blood in the fetus', detail: 'It can never exceed uterine venous PO2, because the intervillous space is a pool rather than a countercurrent exchanger.', emphasis: 'key' },
      { id: 's2', label: 'Roughly half is jetted past the liver through the ductus venosus into the inferior vena cava at high velocity', detail: 'Velocity is the point: a coherent jet resists mixing and can therefore be aimed.' },
      { id: 's3', label: 'The crista dividens streams that jet across the foramen ovale to left atrium, left ventricle and ascending aorta', detail: 'Coronary and cerebral circulations are served first, so the fetus is selectively rather than uniformly oxygenated.', emphasis: 'key' },
      { id: 's4', label: 'Superior vena caval blood streams across the tricuspid valve to the right ventricle and, past high pulmonary resistance, through the ductus arteriosus to the descending aorta', detail: 'Hence preductal saturation about 65 per cent versus postductal 55 to 60 in a healthy fetus.', emphasis: 'key' },
      { id: 's5', label: 'Both ventricles therefore pump in PARALLEL into the systemic circuit; only 8 to 13 per cent of combined output reaches the lungs', detail: 'Either ventricle can carry the fetus alone, which is why severe structural lesions stay silent in utero.', emphasis: 'key' },
      { id: 's6', label: 'HbF with P50 about 19 mmHg, plus haemoglobin of 170 to 180 g/L, makes oxygen content adequate at a PO2 that would be lethal in an adult', detail: 'The gamma chain has serine where the beta chain has histidine 143, so it grips 2,3-BPG weakly and less haemoglobin is held in the T state.', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'When placental supply falls',
        steps: [
          { id: 'b1', label: 'Chronic insufficiency → redistribution to brain, heart and adrenal, away from kidney, gut, muscle and skin', emphasis: 'key' },
          { id: 'b2', label: 'Asymmetric growth restriction with a spared head, and oligohydramnios as renal perfusion and fetal urine output fall' },
          { id: 'b3', label: 'Acute hypoxia → chemoreflex bradycardia with peripheral vasoconstriction; once acidosis turns metabolic the reserve is spent', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Preductal saturation higher than postductal in a normal fetus and in the first minutes of life', mechanism: 'Streaming sends the oxygenated ductus venosus jet to the ascending aorta while ductal flow enters the aorta beyond the head vessels', significance: 'key' },
    { sign: 'A fetus with hypoplastic left heart or transposition that is well grown and haemodynamically stable in utero', mechanism: 'The circuit is parallel and shunted, so either ventricle can support the whole fetus until birth closes the shunts', significance: 'key' },
    { sign: 'Fetal bradycardia causing an immediate fall in output, where an adult would compensate', mechanism: 'The immature myocardium sits near the flat part of its Starling curve, so output depends on rate far more than on stroke volume', significance: 'key' },
    { sign: 'Head circumference on the 50th centile with abdominal circumference below the 3rd, and reduced liquor', mechanism: 'Redistribution spares the brain while the liver loses glycogen and renal hypoperfusion cuts fetal urine output', significance: 'key' },
    { sign: 'A macrosomic infant with organomegaly and abundant fat but a normally sized brain', mechanism: 'Maternal glucose crosses and maternal insulin does not, so fetal hyperinsulinaemia drives growth in insulin-responsive tissues', significance: 'key' },
    { sign: 'Near-normal birth size in an infant later shown to have congenital growth hormone deficiency', mechanism: 'Fetal growth is driven by substrate, insulin and the IGFs; growth hormone only becomes the dominant signal after birth', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Umbilical artery Doppler with absent or reversed end-diastolic flow', meaning: 'Placental bed resistance has risen steeply, so the low-resistance sink that normally takes 40 per cent of combined output is failing — the fetus is running on redistribution' },
    { clue: 'Cord gases showing the umbilical VEIN with the higher pH and PO2 and the ARTERY with the lower', meaning: 'The naming is fetal, not oxygen-based: the vein returns from the placenta, the arteries carry fetal output to it, so the artery is what reports fetal status' },
    { clue: 'Haemoglobin electrophoresis at birth showing 70 to 80 per cent HbF', meaning: 'The gamma to beta switch is largely postnatal and complete by about six months, which is why sickle cell disease and beta thalassaemia present after the newborn period rather than at birth' },
    { clue: 'Symmetric growth restriction from early in gestation, with head and abdomen equally affected', meaning: 'An insult acting during the hyperplastic phase — aneuploidy, congenital infection, early placental failure — rather than the late substrate limitation that produces asymmetry' },
    { clue: 'Blood glucose of 1.6 mmol/L at one hour in a large-for-dates baby of a diabetic mother', meaning: 'Fetal hyperinsulinaemia developed against a maternal glucose supply that has just been cut at the cord; insulin persists for hours after the substrate has gone' },
    { clue: 'A fetal scalp or cord sample showing a metabolic rather than a respiratory acidosis', meaning: 'Compensation has been exhausted and anaerobic metabolism has begun; respiratory acidosis alone reflects transient impaired CO2 clearance during contractions' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The parallel circuit is what buys time in congenital heart disease, and it is also what takes it away: a lesion invisible for nine months becomes critical within hours of the shunts closing, so the newborn examination and pre- and postductal saturations are screening for something the fetal circulation was actively concealing. Redistribution explains why a growth-restricted fetus is monitored by **umbilical artery Doppler and liquor volume rather than by size alone** — both are downstream of the same reflex. And the substrate story sets management on both sides: **tight maternal glycaemic control prevents fetal hyperinsulinaemia and macrosomia**, while a growth-restricted fetus is delivered when the risk of continued hypoxia exceeds the risk of prematurity. The switch from HbF also has a practical edge — **haemoglobinopathies of the beta chain hide behind HbF for months**, and pulse oximetry and blood gas interpretation in a neonate must allow for a curve shifted well to the left of the adult one.' },
    { logic: 'Where it is examined', detail: 'Four favourites. **Why HbF has a higher affinity** — because gamma chains bind 2,3-BPG poorly, not because the haem binds oxygen more tightly; the proof is that stripped of BPG the two haemoglobins are nearly identical. **Why fetal PO2 is so low yet the fetus thrives** — content, not tension, through a left-shifted curve, a high haemoglobin, a high combined output and preferential streaming. **Why severe structural heart disease is silent in utero** — a parallel circuit with three shunts. And **which hormone drives fetal growth** — insulin and the IGFs responding to substrate, with growth hormone irrelevant until after birth. The transition that dismantles all of this is [[ghp-neonatal-transition-adaptation]].' },
  ],

  mnemonics: [
    {
      hook: 'Gamma does not grip BPG',
      expansion: [
        'The 2,3-BPG pocket sits between the beta chains and depends on positive residues including histidine 143',
        'Gamma chains carry serine there, so BPG binds weakly and less haemoglobin is held in the low-affinity T state',
        'Result: P50 about 19 mmHg versus 27 in the adult, which is what makes placental loading possible',
      ],
    },
    {
      hook: 'Parallel in the womb, series at the door',
      expansion: [
        'In utero both ventricles pump into the systemic circuit and only about a tenth of the output sees the lung',
        'So either ventricle alone can run the whole fetus, and major lesions stay silent',
        'At birth the shunts close and the pumps go into series, at which point the same lesion becomes critical within hours',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Why fetal haemoglobin has a higher oxygen affinity',
      wrongInstinct: 'The gamma chain binds oxygen itself more tightly than the beta chain does',
      rightAnswer: 'The gamma chain binds 2,3-BPG poorly, so less haemoglobin is stabilised in the T state and the curve shifts left',
      why: 'Stripped of 2,3-BPG, HbF and HbA have almost identical oxygen affinity — the difference lives in the allosteric pocket, not the binding site.',
    },
    {
      questionCategory: 'Whether low fetal oxygen tension means the fetus is hypoxic',
      wrongInstinct: 'A descending aortic PO2 of 25 to 30 mmHg would be lethal in an adult, so the fetus must exist in a state of chronic hypoxia',
      rightAnswer: 'Oxygen delivery is adequate because content and distribution are adequate, not because tension is',
      why: 'A left-shifted curve, a haemoglobin of 170 to 180 g/L, a combined output of about 450 mL per kg per minute and streaming that feeds heart and brain first together make a low PO2 survivable by design.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Fetal blood has a higher oxygen affinity than maternal blood at the same pH and temperature. Which statement best explains the difference?',
      options: [
        { id: 'a', text: 'Gamma chains contain an extra haem group, increasing oxygen-carrying capacity per molecule' },
        { id: 'b', text: 'Gamma chains bind 2,3-BPG weakly, so less haemoglobin is stabilised in the low-affinity T state' },
        { id: 'c', text: 'Fetal red cells contain far more carbonic anhydrase, which shifts the curve to the left' },
        { id: 'd', text: 'Fetal blood has a higher haemoglobin concentration, and concentration determines affinity' },
      ],
      answerId: 'b',
      explanation: '2,3-BPG binds in the central cavity between the beta chains and is held by positive residues including histidine 143; the gamma chain has a neutral serine at that position, so it binds BPG poorly. Because BPG stabilises deoxyhaemoglobin, less bound BPG means less T state and a left shift, with a P50 near 19 mmHg against the adult 27. The decisive evidence is that once BPG is stripped away, HbF and HbA have nearly identical affinity. The high fetal haemoglobin concentration raises oxygen CONTENT but has no effect on the position of the curve.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A fetus with severe aortic stenosis and a hypoplastic left ventricle is well grown and shows no signs of cardiac compromise on antenatal scanning, yet collapses at 36 hours of age. Which feature of the fetal circulation best explains the antenatal stability?',
      options: [
        { id: 'a', text: 'Fetal myocardium is more compliant than adult myocardium and compensates by increasing stroke volume' },
        { id: 'b', text: 'Placental gas exchange is so efficient that systemic perfusion is not required in utero' },
        { id: 'c', text: 'The ventricles work in parallel with shunts connecting the two sides, so the right ventricle can supply the systemic circulation through the ductus arteriosus' },
        { id: 'd', text: 'Pulmonary vascular resistance is low in utero, allowing the lungs to act as a reservoir that offloads the left ventricle' },
      ],
      answerId: 'c',
      explanation: 'The fetal circuit is parallel rather than series: with a patent foramen ovale and ductus arteriosus and very high pulmonary vascular resistance, both ventricles eject into the systemic circulation and the right ventricle already performs about two-thirds of the combined output. These shunts can maintain systemic flow despite severe left-sided obstruction in utero, although fetal compromise can still occur. Closure of the duct after birth converts the pumps to series and removes that support, which is exactly why collapse occurs at one to three days and why prostaglandin E1 is used to hold the duct open. Fetal myocardium is stiffer, not more compliant, and pulmonary resistance in utero is high.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A woman with poorly controlled type 1 diabetes delivers a 4.6 kg infant who becomes hypoglycaemic at 45 minutes of age. Which single mechanism best accounts for both the size and the hypoglycaemia?',
      options: [
        { id: 'a', text: 'Maternal insulin crossed the placenta and continues to act after delivery' },
        { id: 'b', text: 'Maternal glucose crossed by facilitated diffusion and drove fetal hyperinsulinaemia, which persists once the supply is cut' },
        { id: 'c', text: 'Fetal growth hormone secretion was increased by chronic maternal hyperglycaemia' },
        { id: 'd', text: 'Free fatty acids crossed the placenta in excess and were stored as fat, suppressing neonatal gluconeogenesis' },
      ],
      answerId: 'b',
      explanation: 'Glucose crosses the placenta by facilitated diffusion down a concentration gradient, whereas maternal insulin does not cross in physiologically significant amounts. Maternal hyperglycaemia therefore produces fetal hyperglycaemia, islet hyperplasia and hyperinsulinaemia, and since insulin with the IGFs is the anabolic driver of fetal growth the result is macrosomia with organomegaly and a normally sized brain. When the cord is cut the glucose supply stops while the raised insulin persists for hours, suppressing glycogenolysis and ketogenesis and producing early hypoglycaemia. Growth hormone plays little part in fetal growth, and placental fatty-acid transfer also contributes to fetal lipid supply.',
      tests: 'mechanism',
    },
  ],
};

export default ghpFetalCirculationGrowth;
