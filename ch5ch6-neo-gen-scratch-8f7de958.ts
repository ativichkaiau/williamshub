import { lectures } from './content';
const ids = new Set(lectures.map((l) => l.id));
const want = [
  'neoplasia-nomenclature','neoplasia-differentiation-invasion','carcinogenesis-molecular',
  'cancer-spread-staging-clinical','add-paraneoplastic-syndromes-mechanisms-and-clinical-manifes',
  'add-genetic-basis-of-cancer-development','metaplasia-dysplasia','apoptosis-cell-death',
  'cellular-adaptations-growth','cell-injury-mechanisms','chronic-inflammation-granuloma',
  'tissue-repair-wound-healing','mendelian-inheritance-patterns',
  'add-genetic-anticipation-and-triplet-repeat-disorders','add-genetic-mosaicism-and-its-clinical-implications',
  'add-mitochondrial-disorders-pathophysiology-and-clinical-fea','add-lysosomal-storage-diseases-pathogenesis-and-clinical-fea',
  'add-cystic-fibrosis-pathophysiology-and-clinical-management','add-phenylketonuria-genetic-basis-and-dietary-management',
  'add-genetic-screening-in-pregnancy','fcp1-pediatric-history','diagnostic-pathology-methods',
  'environmental-chemical-tobacco-injury','obesity-pathophysiology','intro-pathology-scope',
  'rbp-neoplasia-nomenclature-biology','rbp-carcinogenesis-tumour-progression',
  'rbp-genetic-disease-mechanisms','rbp-paediatric-congenital-disease',
];
for (const w of want) console.log((ids.has(w) ? 'OK   ' : 'MISS ') + w);
console.log('total registered ids:', ids.size);
