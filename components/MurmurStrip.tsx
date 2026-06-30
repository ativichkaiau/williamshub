// Murmur-timing diagram: S1 / S2 heart sounds with the murmur's shape placed in
// systole or diastole, so the timing & shape are visible at a glance. Light "paper"
// panel so it reads on both light and dark cards.

const W = 460;
const H = 128;
const BASE = 86;
const S1 = 74;
const S2 = 256;
const NEXT = 440;
const MUR = 'rgba(13,148,136,0.38)'; // teal murmur "noise"
const SND = '#334155';

function Sound({ x, label, tall = false }: { x: number; label: string; tall?: boolean }) {
  const top = tall ? 34 : 48;
  return (
    <g>
      <rect x={x - 2.5} y={top} width={5} height={BASE - top} rx={1} fill={SND} />
      <text x={x} y={28} textAnchor="middle" fontSize="11" fontWeight="600" fill={SND}>
        {label}
      </text>
    </g>
  );
}

function Overlay({ kind }: { kind: string }) {
  const mid = (S1 + S2) / 2;
  switch (kind) {
    case 'aortic-stenosis':
    case 'hocm':
    case 'tof': // ejection systolic (crescendo–decrescendo)
      return <polygon points={`${S1},${BASE} ${mid},${BASE - 40} ${S2},${BASE}`} fill={MUR} />;
    case 'mitral-regurgitation':
    case 'vsd': // pansystolic (plateau)
      return <rect x={S1} y={BASE - 26} width={S2 - S1} height={26} fill={MUR} />;
    case 'aortic-regurgitation': // early-diastolic decrescendo
      return <polygon points={`${S2},${BASE - 34} ${S2},${BASE} ${S2 + 110},${BASE}`} fill={MUR} />;
    case 'mitral-stenosis': // opening snap + mid-diastolic rumble
      return (
        <g>
          <rect x={S2 + 26} y={BASE - 16} width={4} height={16} fill={SND} />
          <text x={S2 + 28} y={BASE + 14} textAnchor="middle" fontSize="9" fill={SND}>OS</text>
          <rect x={S2 + 48} y={BASE - 13} width={118} height={13} rx={6} fill={MUR} />
        </g>
      );
    case 'mvp': // mid-systolic click + late-systolic murmur
      return (
        <g>
          <rect x={mid} y={BASE - 18} width={4} height={18} fill={SND} />
          <text x={mid} y={BASE + 14} textAnchor="middle" fontSize="9" fill={SND}>click</text>
          <polygon points={`${mid + 6},${BASE} ${S2},${BASE - 28} ${S2},${BASE}`} fill={MUR} />
        </g>
      );
    case 'pda': // continuous "machinery" peaking around S2
      return <polygon points={`${S1},${BASE} ${S2},${BASE - 36} ${S2 + 96},${BASE}`} fill={MUR} />;
    case 'asd': // soft ejection murmur (the wide fixed split S2 is drawn separately)
      return <polygon points={`${S1 + 14},${BASE} ${mid},${BASE - 24} ${S2 - 18},${BASE}`} fill={MUR} />;
    default:
      return null;
  }
}

export default function MurmurStrip({ murmur }: { murmur: string }) {
  const loudS1 = murmur === 'mitral-stenosis';
  const splitS2 = murmur === 'asd';
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Murmur timing: ${murmur}`}
      className="block h-28 w-full"
      fontFamily="ui-sans-serif, system-ui, sans-serif"
    >
      <rect x="0" y="0" width={W} height={H} rx="8" fill="#fbfbff" />
      {/* baseline */}
      <line x1="20" y1={BASE} x2={W - 20} y2={BASE} stroke="#cbd5e1" strokeWidth="1" />
      {/* systole / diastole labels */}
      <text x={(S1 + S2) / 2} y={H - 8} textAnchor="middle" fontSize="10" fill="#94a3b8">Systole</text>
      <text x={(S2 + NEXT) / 2} y={H - 8} textAnchor="middle" fontSize="10" fill="#94a3b8">Diastole</text>
      {/* murmur overlay (under the sounds) */}
      <Overlay kind={murmur} />
      {/* heart sounds */}
      <Sound x={S1} label="S1" tall={loudS1} />
      {splitS2 ? (
        <g>
          <Sound x={S2 - 8} label="A2" />
          <Sound x={S2 + 12} label="P2" />
          <text x={S2 + 2} y={H - 24} textAnchor="middle" fontSize="9" fill="#0d9488">wide fixed split</text>
        </g>
      ) : (
        <Sound x={S2} label="S2" />
      )}
      <Sound x={NEXT} label="S1" />
    </svg>
  );
}
