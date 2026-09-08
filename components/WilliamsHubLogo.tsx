// WilliamsHub brand mark — the Williams "W" logo (public/williams-mark.png),
// paired with a compact wordmark and a spaced "STUDY HUB" subtitle.

export function WilliamsHubMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <span
      className={`clay-node relative inline-flex shrink-0 items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.26) }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/williams-mark.png" alt="" width={size} height={size} className="h-full w-full object-cover" />
    </span>
  );
}

export default function WilliamsHubLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <WilliamsHubMark size={36} />
      <span className="flex flex-col leading-none">
        <span className="text-[18px] font-semibold leading-none tracking-[-0.04em] text-slate-900 dark:text-white">
          Williams<span className="text-[#2E5BFF] dark:text-[#7AA0FF]">Hub</span>
        </span>
        <span className="mt-[5px] text-[8px] font-medium uppercase leading-none tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Study&nbsp;Hub
        </span>
      </span>
    </span>
  );
}
