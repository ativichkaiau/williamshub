import type { Lecture } from '../../lib/types';

export const tuberculosisClinicalLatentMdr: Lecture = {
  id: 'tuberculosis-clinical-latent-mdr',
  title: 'Tuberculosis: Clinical, Latent & Drug-Resistant',
  system: 'respiratory',
  source: 'L16 — Anti-Tuberculosis Drugs',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L16 Anti-TB Drugs' },
    { kind: 'disease', label: 'Tuberculosis' },
    { kind: 'exam', label: 'Latent TB & MDR' },
  ],

  highYield: [
    '**Active pulmonary TB presents with a chronic productive cough (≥2–3 weeks), fever, drenching night sweats, weight loss and sometimes haemoptysis.** Diagnosis rests on **sputum for acid-fast bacilli (Ziehl–Neelsen smear) and culture (the gold standard), NAAT/GeneXpert (fast, also detects rifampin resistance), and chest X-ray** (upper-lobe/cavitary in reactivation). It is the clinical counterpart of the caseating-granuloma pathology in [[tuberculosis-pathology]].',
    '**LATENT TB infection = a positive immune test (tuberculin skin test or IGRA) WITHOUT active disease** (no symptoms, normal CXR, negative smear). About a quarter of the world is infected; ~5–10% lifetime risk of reactivation, much higher with HIV, diabetes, anti-TNF therapy or immunosuppression. **Treating latent TB (e.g. isoniazid ± rifapentine) prevents future active disease.**',
    '**The tuberculin skin test (Mantoux) measures a delayed (type IV) hypersensitivity induration; IGRA (interferon-γ release assay) is a blood test not confounded by prior BCG vaccination.** A positive test means infection/exposure, not necessarily active disease — active disease must be excluded before calling it "latent."',
    '**Drug-resistant TB is a major threat: MDR-TB is resistant to at least ISONIAZID AND RIFAMPIN (the two most important drugs); XDR-TB adds resistance to fluoroquinolones and other second-line agents.** MDR-TB requires prolonged second-line regimens (fluoroquinolones, bedaquiline, linezolid) and drives the need for adherence support.',
    '**Public-health control hinges on ADHERENCE and prevention: DIRECTLY OBSERVED THERAPY (DOT) improves completion and prevents resistance; contacts are screened; BCG vaccine offers partial protection (mainly against severe childhood/miliary TB).** This clinical/epidemiological layer complements the RIPE pharmacology of [[anti-tuberculosis-drugs]].',
  ],

  mechanism: {
    title: 'Active (smear/culture/NAAT) vs latent (IGRA/TST, no disease); MDR = INH+RIF resistant',
    steps: [
      { id: 's1', label: 'Active TB: chronic cough, fever, night sweats, weight loss, haemoptysis', emphasis: 'key' },
      { id: 's2', label: 'Dx: sputum AFB smear + culture (gold standard) + NAAT/GeneXpert + CXR', emphasis: 'key' },
      { id: 's3', label: 'Latent = positive TST/IGRA, NO active disease → treat to prevent reactivation', emphasis: 'key' },
      { id: 's4', label: 'MDR = resistant to isoniazid + rifampin; XDR adds FQ + others', emphasis: 'danger' },
      { id: 's5', label: 'DOT + contact screening; BCG (partial, severe childhood TB)' },
    ],
  },

  examFindings: [
    { sign: 'Chronic cough + night sweats + weight loss + haemoptysis', mechanism: 'Active pulmonary tuberculosis', significance: 'key' },
    { sign: 'Positive IGRA/tuberculin test with no symptoms and a normal CXR', mechanism: 'Latent TB infection', significance: 'key' },
    { sign: 'Rifampin resistance detected on GeneXpert', mechanism: 'Possible MDR-TB (rapid molecular test)', significance: 'key' },
    { sign: 'Reactivation TB after starting anti-TNF therapy', mechanism: 'Immunosuppression reactivating latent infection', significance: 'supportive' },
    { sign: 'Improved completion with directly observed therapy', mechanism: 'DOT prevents non-adherence and resistance', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The gold-standard test for active TB', meaning: 'Sputum culture (with AFB smear and NAAT/GeneXpert)' },
    { clue: 'The tests for latent TB', meaning: 'Tuberculin skin test (Mantoux) or IGRA' },
    { clue: 'The definition of MDR-TB', meaning: 'Resistance to at least isoniazid AND rifampin' },
    { clue: 'The strategy improving adherence and preventing resistance', meaning: 'Directly observed therapy (DOT)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Clinical/diagnostic TB and latent-TB treatment translate the RIPE pharmacology of [[anti-tuberculosis-drugs]] and the pathology of [[tuberculosis-pathology]] into practice; latent-TB screening/treatment (especially before immunosuppression — e.g. rheumatoid-arthritis biologics) prevents reactivation, and MDR-TB is a growing global threat. It also underlies why an old TB cavity can host an aspergilloma ([[fungal-lung-infections]]).' },
  ],

  mnemonics: [
    { hook: 'Latent = "positive test, no disease" (treat to prevent reactivation)', expansion: ['TST/IGRA positive', 'Normal CXR, negative smear'] },
    { hook: 'MDR = "resistant to the big 2 (Isoniazid + Rifampin)"; XDR adds fluoroquinolones', expansion: ['GeneXpert flags rifampin resistance', 'DOT + second-line drugs'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a positive tuberculin/IGRA test',
      wrongInstinct: 'A positive tuberculin skin test or IGRA means the patient has active tuberculosis',
      rightAnswer: 'A positive TST/IGRA indicates TB INFECTION/exposure, not necessarily ACTIVE disease — active TB must be excluded (symptoms, CXR, sputum); if there is no active disease, it is LATENT TB, treated to prevent future reactivation',
      why: 'Equating a positive immune test with active disease over-diagnoses TB; the tests show sensitisation, so the clinical picture and CXR/sputum determine whether it is latent or active — which changes the regimen entirely.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A healthy contact of a TB patient has a positive IGRA but no symptoms, a normal chest X-ray and negative sputum. This represents:',
      options: [
        { id: 'a', text: 'Active pulmonary tuberculosis' },
        { id: 'b', text: 'Latent tuberculosis infection' },
        { id: 'c', text: 'Miliary tuberculosis' },
        { id: 'd', text: 'A false result requiring no action' },
      ],
      answerId: 'b',
      explanation: 'A positive immune test (IGRA/tuberculin) with no clinical or radiological evidence of disease is latent TB infection; treatment (e.g. isoniazid) is offered to prevent future reactivation, especially in those at higher risk.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Multidrug-resistant tuberculosis (MDR-TB) is defined as resistance to at least:',
      options: [
        { id: 'a', text: 'Isoniazid and rifampin' },
        { id: 'b', text: 'Ethambutol and pyrazinamide' },
        { id: 'c', text: 'Any two anti-TB drugs' },
        { id: 'd', text: 'A fluoroquinolone alone' },
      ],
      answerId: 'a',
      explanation: 'MDR-TB is resistance to at least isoniazid and rifampin, the two most important first-line drugs; XDR-TB additionally involves resistance to fluoroquinolones and other second-line agents, requiring prolonged specialised regimens.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default tuberculosisClinicalLatentMdr;
