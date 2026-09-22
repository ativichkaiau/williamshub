import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import { APPEARANCE_KEY, appearanceMode, appearanceScript, isNight, nextAppearanceCheck } from '../lib/appearance';

const local = (hour: number, minute = 0, second = 0, millisecond = 0) => new Date(2026, 8, 21, hour, minute, second, millisecond);
const boundaries: [Date, boolean][] = [
  [local(0), true],
  [local(5, 59, 59, 999), true],
  [local(6), false],
  [local(12), false],
  [local(17, 59, 59, 999), false],
  [local(18), true],
  [local(23, 59, 59, 999), true],
];

for (const [now, dark] of boundaries) {
  assert.equal(isNight('auto', now), dark, `Auto at ${now.toString()}`);
  assert.equal(isNight('light', now), false, 'Manual day must ignore the clock');
  assert.equal(isNight('dark', now), true, 'Manual night must ignore the clock');
}
assert.equal(appearanceMode(null), 'auto');
assert.equal(appearanceMode('auto'), 'auto');
assert.equal(appearanceMode('invalid'), 'auto');
assert.equal(appearanceMode('light'), 'light');
assert.equal(appearanceMode('dark'), 'dark');
assert.equal(nextAppearanceCheck(local(5, 59, 59, 900)), 100);
assert.equal(nextAppearanceCheck(local(17, 59, 59, 999)), 1);
assert.equal(nextAppearanceCheck(local(6)), 60_000);
assert.equal(nextAppearanceCheck(local(18)), 60_000);
assert.equal(nextAppearanceCheck(local(23, 59)), 60_000);

// Execute the actual inline script: hydration must agree with the first paint,
// including when localStorage is blocked and when a legacy manual choice exists.
for (const saved of [null, 'auto', 'light', 'dark', 'invalid', 'blocked']) {
  for (const [now, autoDark] of boundaries) {
    const classes = new Set(['dark']);
    const root = {
      classList: { toggle(name: string, enabled: boolean) { if (enabled) classes.add(name); else classes.delete(name); } },
      dataset: {} as Record<string, string>,
    };
    runInNewContext(appearanceScript, {
      Date: class extends Date { constructor() { super(now.getTime()); } },
      document: { documentElement: root },
      localStorage: { getItem(key: string) {
        assert.equal(key, APPEARANCE_KEY);
        if (saved === 'blocked') throw new Error('Storage unavailable');
        return saved;
      } },
    });
    const expected = saved === 'dark' ? true : saved === 'light' ? false : autoDark;
    assert.equal(classes.has('dark'), expected, `First paint: ${saved} at ${now.toString()}`);
    assert.equal(root.dataset.themeMode, saved === 'light' || saved === 'dark' ? saved : 'auto');
  }
}
console.log('appearance:verify — local-time boundaries, manual overrides, legacy preferences and first paint passed.');
