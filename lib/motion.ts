export const MOTION_CHANGE_EVENT = 'williamshub:motion-change';

export function motionEnabled(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return localStorage.getItem('wh-motion') !== 'paused';
  } catch {
    return true;
  }
}
