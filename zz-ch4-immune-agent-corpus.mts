import { lectures } from './content/index';
const ids = new Set(lectures.map((l) => l.id));
console.log('REGISTERED_COUNT', ids.size);
const targets = process.argv.slice(2);
for (const t of targets) console.log((ids.has(t) ? 'OK   ' : 'MISS ') + t);
