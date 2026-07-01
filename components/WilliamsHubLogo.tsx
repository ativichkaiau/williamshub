// WilliamsHub brand mark — styled after the Williams F1 wordmark:
// a bold angular "W", heavy tight-tracked wordmark, and a spaced "STUDY HUB"
// subtitle echoing the "F1 TEAM" line. Williams cobalt-blue + white.

export function WilliamsHubMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      className={`clay-node inline-flex shrink-0 items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.26),
        background: 'linear-gradient(135deg,#2E5BFF 0%,#0A1A7A 100%)',
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 58" width={size * 0.64} height={size * 0.64} fill="none">
        {/* angular Williams-style W */}
        <path
          d="M6 9 L19 49 L32 26 L45 49 L58 9"
          stroke="#fff"
          strokeWidth="9"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
      </svg>
    </span>
  );
}

export default function WilliamsHubLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <WilliamsHubMark size={40} />
      <span className="flex flex-col leading-none">
        <span className="text-[19px] font-black leading-none tracking-[-0.015em] text-slate-900 dark:text-white">
          Williams<span className="text-[#2E5BFF] dark:text-[#7AA0FF]">Hub</span>
        </span>
        <span className="mt-[5px] text-[8.5px] font-bold uppercase leading-none tracking-[0.36em] text-slate-400 dark:text-slate-500">
          Study&nbsp;Hub
        </span>
      </span>
    </span>
  );
}
