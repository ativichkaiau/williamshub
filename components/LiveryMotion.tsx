'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Drives the livery motion defined in globals.css:
//   · --scroll-progress (0→1) feeds the header timing stripe and the
//     parallax drift on the page-edge hatch.
//   · [data-reveal] sections get data-revealed as they enter the viewport,
//     once each — the CSS handles the actual transition.
//
// Everything is gated on the .motion class, which layout.tsx sets pre-paint
// only when the reader hasn't asked for reduced motion. If it's absent this
// component does nothing at all and the page renders static.

export default function LiveryMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('motion')) return;

    // ── Lap progress ──────────────────────────────────────────────────
    let frame = 0;
    const setProgress = () => {
      frame = 0;
      const max = root.scrollHeight - root.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, root.scrollTop / max)) : 0;
      root.style.setProperty('--scroll-progress', p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(setProgress);
    };
    setProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // ── Reveal on entry ───────────────────────────────────────────────
    // Drop the gate rather than transition to visible: wherever the reveal
    // fails, the rendering steps are starved, so a transition would never
    // advance either. Removing .motion stops the hiding rules matching at all,
    // which paints the content immediately and needs no frames.
    const revealAll = () => {
      root.classList.remove('motion');
      for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])')) {
        el.dataset.revealed = '';
      }
    };

    // No observer, no hiding: show everything rather than gate content on an
    // API that isn't there.
    if (typeof IntersectionObserver === 'undefined') {
      revealAll();
      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (frame) cancelAnimationFrame(frame);
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = '';
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    // Re-scan on a rAF so a burst of DOM changes costs one query, not many.
    let scan = 0;
    const observeAll = () => {
      scan = 0;
      for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])')) {
        io.observe(el);
      }
    };
    observeAll();

    // Client-side navigation and interactive lists mount new sections after
    // this effect runs, so keep watching for them.
    const mo = new MutationObserver(() => {
      if (!scan) scan = requestAnimationFrame(observeAll);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net. Observer callbacks are delivered on the rendering steps, so
    // anywhere those are starved (throttled webviews, headless capture) they
    // may never arrive — and reveal styling would leave the page permanently
    // blank. If something is on screen and *nothing* has revealed, take that
    // as proof the observer isn't delivering and just show everything. On a
    // healthy browser the top section reveals in ~50ms, so this never fires.
    const safety = window.setTimeout(() => {
      if (document.querySelector('[data-reveal][data-revealed]')) return;
      const pending = [...document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])')];
      const onScreen = pending.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      });
      if (onScreen) revealAll();
    }, 1200);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
      if (scan) cancelAnimationFrame(scan);
      window.clearTimeout(safety);
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
