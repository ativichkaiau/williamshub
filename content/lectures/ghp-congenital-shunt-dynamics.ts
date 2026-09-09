import type { Lecture } from '../../lib/types';
import { FETAL_CIRCULATION } from '../../lib/figures';

export const ghpCongenitalShuntDynamics: Lecture = {
  id: 'ghp-congenital-shunt-dynamics',
  title: 'Congenital Shunts: Left-to-Right versus Right-to-Left',
  system: 'cardiovascular',
  source: 'Ch 23 — Heart Valves & Heart Sounds; Valvular & Congenital Defects',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 23 Valves & Heart Sounds' },
    { kind: 'mechanism', label: 'Shunt direction follows resistance' },
    { kind: 'exam', label: 'Cyanotic vs acyanotic' },
  ],

  highYield: [
    '**One rule governs every congenital shunt: blood crosses from the high-resistance side to the low-resistance side.** Because systemic resistance normally far exceeds pulmonary resistance, an ordinary hole shunts **left to right** — pulmonary blood flow exceeds systemic (**Qp:Qs > 1**), the lungs are over-circulated, and the patient is **acyanotic**. Only when right-sided resistance exceeds left does flow reverse and **deoxygenated blood enter the systemic circulation → cyanosis**. Direction is set by **resistance, not by anatomy**.',
    '**Patent ductus arteriosus — the shunt that runs all cycle long.** The ductus normally closes functionally within **1–8 days** of birth as arterial oxygen rises and prostaglandins fall. If it persists, aortic pressure exceeds pulmonary pressure in **both systole and diastole**, so flow is uninterrupted: a **continuous "machinery" murmur peaking around S2** below the left clavicle, plus a **wide pulse pressure and bounding pulses** from diastolic runoff. With a large duct, **half or more of left ventricular output can recirculate through the lungs**, forcing the LV to pump roughly **twice** the effective output. **Indomethacin or ibuprofen** closes it; **prostaglandin E1** keeps it open when the duct is the only source of systemic or pulmonary flow.',
    '**Atrial septal defect — a compliance shunt, and the defect itself is silent.** Atrial pressures are nearly equal, so flow crosses because the **right ventricle is more compliant** than the left. What you hear is not the hole but the **increased flow across the pulmonary valve** (soft ejection systolic murmur) and, diagnostically, **wide fixed splitting of S2** — the shunt supplies a constant extra right-heart volume that abolishes the normal respiratory variation. Result: **right atrial and right ventricular volume overload**, and a route for **paradoxical embolism**.',
    '**Ventricular septal defect — the louder the murmur, the smaller the hole.** A **restrictive** (small) VSD keeps a large systolic pressure gradient, producing a **loud pansystolic murmur at the lower left sternal border with a thrill** but little haemodynamic burden. A **large non-restrictive** VSD equalises ventricular pressures, so the murmur may be **quiet** while the shunt is huge: pulmonary over-circulation with **left atrial and left ventricular volume overload** (the shunted blood returns through the lungs) and the right ventricle exposed to systemic pressures.',
    '**Tetralogy of Fallot — the classic right-to-left shunt.** Four features: **(1) large VSD, (2) overriding aorta, (3) right ventricular outflow obstruction, (4) RV hypertrophy**. The **degree of outflow obstruction is what determines everything**: when RV outflow resistance exceeds systemic resistance, deoxygenated blood is diverted across the VSD into the aorta → **cyanosis, clubbing, secondary polycythaemia (haematocrit up to 60–70%)** and **hypoxic "tet" spells**. The murmur comes from the **pulmonary stenosis, not the VSD** — and a **shorter, softer** murmur with **more** cyanosis means **worse** obstruction. **Squatting raises systemic resistance**, which reduces the right-to-left shunt and aborts a spell.',
    '**Two discriminators worth memorising.** First, a right-to-left shunt causes hypoxaemia that **does not correct with 100% oxygen**, because the blood bypasses ventilated alveoli entirely — unlike V/Q mismatch. Second, an untreated large left-to-right shunt remodels pulmonary arterioles until **pulmonary vascular resistance exceeds systemic**; the shunt then **reverses (Eisenmenger syndrome)** and the previously pink child becomes **cyanosed** — at which point closing the defect is no longer possible.',
  ],

  mechanism: {
    title: 'Resistance decides direction; direction decides the colour of the patient',
    steps: [
      { id: 's1', label: 'A communication exists between the circulations (duct, atrial or ventricular septum)' },
      { id: 's2', label: 'Systemic resistance normally exceeds pulmonary → flow runs left to right, patient acyanotic', emphasis: 'key' },
      { id: 's3', label: 'Pulmonary over-circulation volume-loads the receiving chambers → murmur, failure, recurrent chest infections' },
      { id: 's4', label: 'Chronic high flow remodels pulmonary arterioles → pulmonary vascular resistance climbs', emphasis: 'key' },
      { id: 's5', label: 'If pulmonary resistance exceeds systemic, the shunt reverses → Eisenmenger syndrome, late cyanosis, inoperable', emphasis: 'danger' },
      { id: 's6', label: 'In tetralogy the obstruction is present from birth, so flow is right to left from the start → early cyanosis, spells relieved by squatting', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Continuous machinery murmur below the left clavicle with bounding pulses and a wide pulse pressure', mechanism: 'Patent ductus — aortic pressure exceeds pulmonary pressure in both systole and diastole, so flow never stops', significance: 'key' },
    { sign: 'Wide fixed splitting of the second heart sound with a soft pulmonary flow murmur', mechanism: 'Atrial septal defect — a constant extra right-heart volume abolishes the respiratory variation in pulmonary valve closure', significance: 'key' },
    { sign: 'Loud harsh pansystolic murmur with a thrill at the lower left sternal border in a thriving infant', mechanism: 'Small restrictive ventricular septal defect — big gradient, small shunt', significance: 'key' },
    { sign: 'Cyanosis and clubbing in a child who squats after exertion', mechanism: 'Tetralogy of Fallot — squatting raises systemic resistance and reduces the right-to-left shunt', significance: 'key' },
    { sign: 'Arterial oxygen saturation that fails to normalise on 100% oxygen', mechanism: 'True anatomical right-to-left shunt bypassing ventilated alveoli', significance: 'key' },
    { sign: 'A previously acyanotic child with a large shunt who becomes cyanosed as the murmur fades', mechanism: 'Eisenmenger physiology — pulmonary resistance has overtaken systemic and the shunt has reversed', significance: 'key' },
    { sign: 'Raised haematocrit of 65% with a normal white count', mechanism: 'Secondary polycythaemia from chronic hypoxaemia in a cyanotic lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pulmonary-to-systemic flow ratio (Qp:Qs) greater than 1', meaning: 'A net left-to-right shunt' },
    { clue: 'A step-up in oxygen saturation between the right atrium and the right ventricle on catheterisation', meaning: 'The shunt enters at ventricular level — a VSD' },
    { clue: 'An oxygen step-up already present in the right atrium', meaning: 'Shunt at atrial level — an ASD' },
    { clue: 'Boot-shaped heart with reduced pulmonary vascular markings on chest radiograph', meaning: 'Tetralogy of Fallot — RV hypertrophy with diminished pulmonary blood flow' },
    { clue: 'Cardiomegaly with plethoric lung fields', meaning: 'A large left-to-right shunt over-circulating the lungs' },
    { clue: 'Differential cyanosis — pink fingers, blue toes', meaning: 'Reversed ductal shunting with pulmonary hypertension distal to the left subclavian artery' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The whole subject reduces to a **resistance comparison plus a timing question**: which way does blood cross, and how long before the pulmonary bed remodels beyond rescue? That is why large shunts are repaired **before** pulmonary vascular disease is established, and why a falling murmur with rising cyanosis is a disaster rather than an improvement. Embryological origin of the septa and duct: [[heart-tube-looping-septation]]; the pulmonary bed that takes the damage: [[pulmonary-circulation-features]] and [[pulmonary-hypertension-cor-pulmonale]].' },
    { logic: 'Physiology that translates directly into management', detail: 'A **tet spell** is treated by everything that raises systemic resistance or reduces the outflow gradient — knee-to-chest position, oxygen, fluids, morphine, and a beta-blocker or phenylephrine; never a vasodilator, which would deepen the shunt. The duct is manipulated pharmacologically in both directions (**prostaglandin inhibitors** to close, **prostaglandin E1** to maintain). Broader classification: [[congenital-anomaly-classification]]; systemic and pulmonary circuit comparison: [[systemic-pulmonary-circulation]]; the murmur vocabulary this builds on: [[ghp-heart-sounds-valve-lesions]].' },
  ],

  mnemonics: [
    { hook: 'Blue = Right-to-left; Pink = Left-to-right (until it turns blue)', expansion: ['Left-to-right (PDA, ASD, VSD): acyanotic, over-circulated lungs, volume overload', 'Right-to-left (tetralogy): cyanotic from birth, under-circulated lungs', 'Eisenmenger converts the first group into the second'] },
    { hook: 'PROVe the tetralogy', expansion: ['Pulmonary stenosis (the severity determinant)', 'Right ventricular hypertrophy', 'Overriding aorta', 'VSD — and the murmur comes from the P, not the V'] },
    { hook: 'Small hole, big noise', expansion: ['Restrictive VSD keeps a large gradient → loud murmur, small shunt', 'Non-restrictive VSD equalises pressures → quiet murmur, huge shunt', 'Softening murmur plus new cyanosis = shunt reversal'] },
  ],

  traps: [
    {
      questionCategory: 'What actually makes the noise',
      wrongInstinct: 'The murmur of tetralogy of Fallot comes from the ventricular septal defect',
      rightAnswer: 'It comes from turbulent flow across the right ventricular outflow obstruction; the large VSD is non-restrictive and therefore silent',
      why: 'No gradient, no turbulence — and a quieter murmur here means tighter obstruction and deeper cyanosis.',
    },
    {
      questionCategory: 'Response to supplemental oxygen',
      wrongInstinct: 'Giving 100% oxygen should substantially correct the hypoxaemia in a cyanotic congenital lesion',
      rightAnswer: 'It barely improves, because the shunted blood never contacts alveolar gas — unlike V/Q mismatch, which corrects well',
      why: 'The hyperoxia test separates anatomical shunt from lung disease in a blue neonate.',
    },
    {
      questionCategory: 'Direction of an atrial shunt',
      wrongInstinct: 'Blood crosses an ASD left to right because left atrial pressure greatly exceeds right atrial pressure',
      rightAnswer: 'Atrial pressures are nearly equal; the shunt is driven by the greater compliance of the right ventricle, which is why the defect itself is silent',
      why: 'A compliance shunt, not a pressure shunt — hence a flow murmur at the pulmonary valve and fixed splitting rather than a murmur from the hole.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 4-year-old has a continuous murmur below the left clavicle, bounding peripheral pulses and a wide pulse pressure. Why is the murmur continuous rather than confined to systole?',
      options: [
        { id: 'a', text: 'Pulmonary arterial pressure exceeds aortic pressure throughout the cycle' },
        { id: 'b', text: 'Aortic pressure exceeds pulmonary arterial pressure in both systole and diastole, so flow never ceases' },
        { id: 'c', text: 'The murmur is produced by simultaneous aortic stenosis and regurgitation' },
        { id: 'd', text: 'Turbulence persists because the ductus is anatomically narrow' },
      ],
      answerId: 'b',
      explanation: 'A patent ductus connects two vessels whose pressure difference persists through the whole cardiac cycle, so shunting and therefore turbulence are uninterrupted, peaking around S2. The diastolic component also drains the aorta, which is why the pulse pressure is wide and the pulses bounding. Reversed pressures (a) would abolish the left-to-right flow and cause differential cyanosis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In tetralogy of Fallot, which component determines the severity of cyanosis?',
      options: [
        { id: 'a', text: 'The size of the ventricular septal defect' },
        { id: 'b', text: 'The degree of aortic override' },
        { id: 'c', text: 'The severity of right ventricular outflow tract obstruction' },
        { id: 'd', text: 'The thickness of the right ventricular wall' },
      ],
      answerId: 'c',
      explanation: 'The outflow obstruction sets right-sided resistance, and cyanosis appears in proportion to how far that resistance exceeds systemic resistance and diverts deoxygenated blood across the VSD into the aorta. The VSD is large and non-restrictive in all cases, the override is anatomically fixed, and the hypertrophy is a consequence of the obstruction rather than a cause of the shunt.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A 22-year-old with a large uncorrected ventricular septal defect is now centrally cyanosed, and the previously loud pansystolic murmur has almost disappeared. What has happened?',
      options: [
        { id: 'a', text: 'The defect has closed spontaneously' },
        { id: 'b', text: 'Pulmonary vascular resistance now exceeds systemic resistance and the shunt has reversed' },
        { id: 'c', text: 'Left ventricular failure has reduced the shunt volume' },
        { id: 'd', text: 'Infective endocarditis has destroyed the tricuspid valve' },
      ],
      answerId: 'b',
      explanation: 'This is Eisenmenger syndrome: years of pulmonary over-circulation remodel the arterioles until pulmonary resistance overtakes systemic, the shunt reverses right to left, and the patient becomes cyanosed while the murmur fades as the interventricular gradient disappears. Spontaneous closure (a) would leave the patient pink and asymptomatic, and closing the defect at this stage is contraindicated.',
      tests: 'disease',
    },
  ],

  figures: [
    { title: 'Patent ductus arteriosus', murmur: 'pda', caption: 'Continuous machinery murmur peaking around S2 — flow persists through systole and diastole.' },
    { title: 'Ventricular septal defect', murmur: 'vsd', caption: 'Pansystolic plateau at the lower left sternal border; a loud murmur means a small, restrictive defect.' },
    { title: 'Atrial septal defect', murmur: 'asd', caption: 'Soft pulmonary flow murmur with wide fixed splitting of S2 — the defect itself is silent.' },
    { title: 'Tetralogy of Fallot', murmur: 'tof', caption: 'Ejection systolic murmur of right ventricular outflow obstruction; it shortens as the obstruction tightens and cyanosis deepens.' },
    { title: 'Fetal shunts and their fate', svg: FETAL_CIRCULATION, caption: 'The ductus arteriosus and foramen ovale are normal fetal shunts; failure to close converts them into the acyanotic lesions of childhood.' },
  ],
};

export default ghpCongenitalShuntDynamics;
