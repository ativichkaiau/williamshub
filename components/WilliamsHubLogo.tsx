// WilliamsHub brand mark — the Williams "W" logo (public/williams-mark.png),
// clipped into the app's rounded clay tile. Paired with the heavy wordmark and a
// spaced "STUDY HUB" subtitle.

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
