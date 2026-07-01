import type { Lecture } from '../../lib/types';

export const salivaryGlandsOralClinical: Lecture = {
  id: 'salivary-glands-oral-clinical',
  title: 'Salivary Glands & Oral Clinical Anatomy',
  system: 'msk',
  source: 'L15 — Mouth & Oral Cavity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L15 Mouth & Oral Cavity' },
    { kind: 'disease', label: 'Salivary glands' },
    { kind: 'mechanism', label: 'Parasympathetic secretomotor' },
    { kind: 'exam', label: 'Submandibular ganglion' },
  ],

  highYield: [
    'Three **major salivary glands**: **parotid** (serous; Stensen duct → opposite the 2nd maxillary molar), **submandibular** (mixed; Wharton duct → sublingual caruncle), and **sublingual** (mucous; opens along the sublingual fold).',
    '**Parasympathetic (secretomotor) supply**: the **submandibular + sublingual glands** get **CN VII** fibres via the **chorda tympani → lingual nerve → submandibular ganglion**; the **parotid** gets **CN IX** fibres via the **lesser petrosal → otic ganglion → auriculotemporal nerve**.',
    'The **lingual nerve** loops just below the submandibular duct — so it is **at risk during submandibular gland/duct surgery**: injury causes loss of **general sensation AND taste over the ipsilateral anterior 2/3 of the tongue** (it also carries the hitch-hiking chorda tympani).',
    '**Sublingual drug administration** (e.g. glyceryl trinitrate for angina) works because the thin sublingual mucosa and rich **deep lingual veins** give rapid absorption straight into the systemic circulation (bypassing first-pass metabolism).',
    'Palatal **nerve blocks**: the **nasopalatine nerve** (at the incisive papilla) anesthetizes the anterior hard palate/6 anterior maxillary teeth; the **greater palatine nerve** (near the 2nd/3rd molars) anesthetizes the posterior hard palate.',
  ],

  mechanism: {
    title: 'VII drives the submandibular/sublingual; IX drives the parotid',
    steps: [
      { id: 's1', label: 'Chorda tympani (VII) → submandibular ganglion → subm/subl glands', emphasis: 'key' },
      { id: 's2', label: 'Lesser petrosal (IX) → otic ganglion → parotid' },
      { id: 's3', label: 'Lingual nerve at risk in submandibular surgery' },
      { id: 's4', label: 'Sublingual drugs → deep lingual veins → systemic', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Loss of taste + sensation of anterior tongue after submandibular gland removal', mechanism: 'Lingual nerve injury (carries chorda tympani)', significance: 'key' },
    { sign: 'Rapid relief of angina with a sublingual tablet', mechanism: 'Absorption via deep lingual veins', significance: 'supportive' },
    { sign: 'Dry mouth after parasympathetic disruption', mechanism: 'Loss of secretomotor drive', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Test taste + sensation of the anterior tongue', meaning: 'Lingual nerve / chorda tympani' },
    { clue: 'Sialography / ultrasound of a swollen gland', meaning: 'Ductal stone/obstruction' },
  ],

  treatment: [
    { logic: 'Protect the lingual nerve in submandibular surgery', detail: 'It hooks under the duct.' },
    { logic: 'Sublingual route for fast systemic drug delivery', detail: 'Bypasses first-pass metabolism.' },
  ],

  mnemonics: [
    { hook: 'Submandibular/sublingual = VII (chorda tympani → submandibular ganglion); parotid = IX (otic ganglion)', expansion: ['Two ganglia, two nerves'] },
    { hook: 'Lingual nerve wraps UNDER the submandibular duct', expansion: ['Injured in gland surgery'] },
  ],

  traps: [
    {
      questionCategory: 'Parasympathetic supply of the parotid vs submandibular',
      wrongInstinct: 'The facial nerve provides secretomotor fibres to all salivary glands including the parotid',
      rightAnswer: 'CN VII (chorda tympani → submandibular ganglion) supplies the submandibular/sublingual; the PAROTID is supplied by CN IX (lesser petrosal → otic ganglion)',
      why: 'The parotid is the exception — its secretomotor drive comes from the glossopharyngeal nerve, not the facial nerve.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'After removal of the submandibular gland, a patient loses taste and general sensation over the ipsilateral anterior two-thirds of the tongue. Which nerve was injured?',
      options: [
        { id: 'a', text: 'Hypoglossal nerve' },
        { id: 'b', text: 'Lingual nerve (carrying the chorda tympani)' },
        { id: 'c', text: 'Glossopharyngeal nerve' },
        { id: 'd', text: 'Inferior alveolar nerve' },
      ],
      answerId: 'b',
      explanation: 'The lingual nerve loops beneath the submandibular duct and is vulnerable during gland surgery; it carries general sensation (V3) and the hitch-hiking chorda tympani (taste, VII) for the anterior two-thirds of the tongue.',
      tests: 'exam',
    },
  ],
};

export default salivaryGlandsOralClinical;
