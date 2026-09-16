import { readFileSync } from 'node:fs';
import { lectures } from './content';
const set = new Set(lectures.map((l) => l.id));
const txt = readFileSync('/tmp/claude-501/ghp/link-targets.txt', 'utf8');
const targets: string[] = [];
for (const line of txt.split('\n')) {
  if (!line.trim() || line.startsWith('#')) continue;
  const id = line.trim().split(/\s+/)[0];
  if (/^[a-z0-9-]+$/.test(id)) targets.push(id);
}
console.log('targets parsed:', targets.length);
const missing = targets.filter((t) => !set.has(t));
console.log('UNREGISTERED targets:', missing.length ? missing : 'none');
const rbp = [...set].filter((i) => i.startsWith('rbp-')).sort();
console.log('registered rbp ids:', rbp.length);
console.log(rbp.join('\n'));
