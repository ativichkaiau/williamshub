// Stylized ECG rhythm-strip renderer (recognizable, not clinical-grade).
// Draws a named rhythm as an SVG trace on light "ECG paper" with a pink grid,
// so it reads as an EKG on both light and dark cards.

type Rhythm =
  | 'sinus'
  | 'sinus-brady'
  | 'first-degree'
  | 'mobitz-i'
  | 'mobitz-ii'
  | 'third-degree'
  | 'pac'
  | 'pvc'
  | 'afib'
  | 'flutter'
  | 'vt'
  | 'vf'
  | 'stemi'
  | 'electrical-alternans';

type Pt = [number, number];
const BASE = 80;
const H = 120;

function pWave(p: Pt[], x: number): number {
  p.push([x, BASE], [x + 6, BASE - 8], [x + 12, BASE]);
  return x + 12;
}
function flat(p: Pt[], x: number, len: number, y = BASE): number {
  p.push([x, y], [x + len, y]);
  return x + len;
}
function qrsNarrow(p: Pt[], x: number, y = BASE): number {
  p.push([x, y], [x + 2, y + 6], [x + 6, y - 42], [x + 11, y + 13], [x + 14, y]);
  return x + 14;
}
function qrsWide(p: Pt[], x: number): number {
  p.push([x, BASE], [x + 6, BASE + 9], [x + 15, BASE - 34], [x + 27, BASE + 15], [x + 33, BASE]);
  return x + 33;
}
function tWave(p: Pt[], x: number, y = BASE, inv = false): number {
  p.push([x, y], [x + 10, y + (inv ? 13 : -12)], [x + 20, BASE]);
  return x + 20;
}
function sinusBeat(p: Pt[], x: number, opts: { pr?: number; st?: number } = {}): number {
  const { pr = 14, st = 0 } = opts;
  x = pWave(p, x);
  x = flat(p, x, pr);
  x = qrsNarrow(p, x);
  const y = BASE - st;
  x = flat(p, x, 8, y);
  x = tWave(p, x, y);
  return x;
}

function build(rhythm: Rhythm): Pt[] {
  const p: Pt[] = [];
  let x = 12;
  switch (rhythm) {
    case 'sinus':
      for (let i = 0; i < 4; i++) x = flat(p, sinusBeat(p, x), 30);
      return p;
    case 'sinus-brady':
      for (let i = 0; i < 3; i++) x = flat(p, sinusBeat(p, x), 72);
      return p;
    case 'first-degree':
      for (let i = 0; i < 4; i++) x = flat(p, sinusBeat(p, x, { pr: 36 }), 22);
      return p;
    case 'mobitz-i':
      for (const pr of [10, 24, 38]) x = flat(p, sinusBeat(p, x, { pr }), 16);
      x = pWave(p, x);
      x = flat(p, x, 46); // dropped QRS → pause
      x = sinusBeat(p, x, { pr: 10 });
      return p;
    case 'mobitz-ii':
      for (let i = 0; i < 2; i++) x = flat(p, sinusBeat(p, x, { pr: 14 }), 16);
      x = pWave(p, x);
      x = flat(p, x, 34); // dropped QRS, constant PR
      for (let i = 0; i < 2; i++) x = flat(p, sinusBeat(p, x, { pr: 14 }), 16);
      return p;
    case 'third-degree': {
      // P waves and (wide) QRS march independently → AV dissociation
      const seq = ['p', 'p', 'qrs', 'p', 'p', 'p', 'qrs', 'p'] as const;
      for (const s of seq) x = s === 'p' ? flat(p, pWave(p, x), 16) : flat(p, qrsWide(p, x), 8);
      return p;
    }
    case 'pac':
      x = flat(p, sinusBeat(p, x), 30);
      x = flat(p, sinusBeat(p, x), 8); // early atrial beat (P too soon)
      x = flat(p, sinusBeat(p, x), 40); // non-compensatory pause
      x = sinusBeat(p, x);
      return p;
    case 'pvc':
      x = flat(p, sinusBeat(p, x), 24);
      x = flat(p, sinusBeat(p, x), 8);
      x = qrsWide(p, x); // early wide bizarre beat, no P
      x = tWave(p, x, BASE, true);
      x = flat(p, x, 34); // full compensatory pause
      x = sinusBeat(p, x);
      return p;
    case 'afib': {
      for (const g of [42, 60, 50, 72, 56]) {
        for (let i = 0; i < g; i += 6) p.push([x + i, BASE + Math.sin((x + i) * 0.7) * 3]);
        x += g;
        x = qrsNarrow(p, x);
      }
      return p;
    }
    case 'flutter':
      for (let i = 0; i < 16; i++) {
        p.push([x, BASE - 9], [x + 13, BASE + 3]); // sawtooth F wave
        x += 13;
        if (i % 2 === 1) x = qrsNarrow(p, x);
      }
      return p;
    case 'vt':
      for (let i = 0; i < 7; i++) {
        p.push([x, BASE], [x + 9, BASE - 30], [x + 22, BASE + 28], [x + 32, BASE]);
        x += 36;
      }
      return p;
    case 'vf':
      for (x = 12; x < 460; x += 7)
        p.push([x, BASE + Math.sin(x * 0.5) * Math.sin(x * 0.17) * 24]);
      return p;
    case 'stemi':
      for (let i = 0; i < 3; i++) x = flat(p, sinusBeat(p, x, { st: 15 }), 26);
      return p;
    case 'electrical-alternans':
      for (const amp of [42, 22, 42, 22, 42, 22]) {
        x = pWave(p, x);
        x = flat(p, x, 14);
        p.push([x, BASE], [x + 2, BASE + 6], [x + 6, BASE - amp], [x + 11, BASE + 10], [x + 14, BASE]);
        x += 14;
        x = flat(p, x, 8);
        x = tWave(p, x);
        x = flat(p, x, 24);
      }
      return p;
    default:
      return p;
  }
}

export default function EcgStrip({ rhythm }: { rhythm: string }) {
  const pts = build(rhythm as Rhythm);
  const width = Math.max(120, ...pts.map((q) => q[0])) + 12;
  const d = pts.map((q) => `${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ');
  const gridId = `ecg-grid-${rhythm}`;
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${width} ${H}`}
      preserveAspectRatio="none"
      role="img"
      aria-label={`ECG rhythm strip: ${rhythm}`}
      className="block h-24 w-full"
    >
      <defs>
        <pattern id={gridId} width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M8 0H0V8" fill="none" stroke="#fca5a5" strokeOpacity="0.4" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect x="0" y="0" width={width} height={H} rx="8" fill="#fff7f7" />
      <rect x="0" y="0" width={width} height={H} rx="8" fill={`url(#${gridId})`} />
      <polyline points={d} fill="none" stroke="#dc2626" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
