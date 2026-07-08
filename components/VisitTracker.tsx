'use client';

import { useEffect } from 'react';
import { markVisited, touchStreak } from '../lib/user/activity';

// Silent: records that this module was opened (coverage) and keeps the day
// streak alive. Renders nothing.
export default function VisitTracker({ moduleId }: { moduleId: string }) {
  useEffect(() => {
    markVisited(moduleId);
    touchStreak();
  }, [moduleId]);
  return null;
}
