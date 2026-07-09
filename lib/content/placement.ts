// First-class module placement: where a module sits in the curriculum
// (subject / lectureNo / lectureTitle). Derived from the `source` string today,
// with a typed API + optional explicit overrides so grouping/subject/order stop
// depending on ad-hoc string parsing scattered around the app.
//
// Incremental migration: derivation is the default; `content/placement-overrides`
// lets a module declare typed fields, and contentIssues() warns at build when a
// source has no subject, no lecture number, or collides on its set slug.

import { subjectOfSource, lectureSetSlug } from '../../content';
import { placementOverrides } from '../../content/placement-overrides';
import type { Lecture } from '../types';

export interface Placement {
  subject: string | null; // subject code, e.g. 'HCVS-2'
  lectureNo: number | null; // 1..n within the subject (parsed from 'L<n>')
  lectureTitle: string; // e.g. 'Cardiac Arrhythmias'
  source: string; // the raw source string
  setSlug: string; // slug of the lecture-set (whole-lecture) route
}

function parseSource(source: string): { lectureNo: number | null; lectureTitle: string } {
  const full = source.match(/^L(\d+)\s*[—–-]\s*(.+)$/i);
  if (full) return { lectureNo: parseInt(full[1], 10), lectureTitle: full[2].trim() };
  const n = source.match(/^L(\d+)/i);
  return { lectureNo: n ? parseInt(n[1], 10) : null, lectureTitle: source };
}

const _cache = new Map<string, Placement>();

export function placementOf(lecture: Lecture): Placement {
  const hit = _cache.get(lecture.id);
  if (hit) return hit;
  const derived = parseSource(lecture.source);
  const ov = placementOverrides[lecture.id] ?? {};
  const placement: Placement = {
    subject: ov.subject ?? subjectOfSource[lecture.source] ?? null,
    lectureNo: ov.lectureNo ?? derived.lectureNo,
    lectureTitle: ov.lectureTitle ?? derived.lectureTitle,
    source: lecture.source,
    setSlug: lectureSetSlug(lecture.source),
  };
  _cache.set(lecture.id, placement);
  return placement;
}

// ── Build-time verification ─────────────────────────────────────────────────

export type ContentIssueKind = 'no-subject' | 'no-lecture-no' | 'slug-collision' | 'override-mismatch';

export interface ContentIssue {
  moduleId: string;
  source: string;
  kind: ContentIssueKind;
  detail: string;
}

export function contentIssues(lectures: Lecture[]): ContentIssue[] {
  const issues: ContentIssue[] = [];
  const slugOwner = new Map<string, string>(); // setSlug → first source that claimed it

  for (const l of lectures) {
    const p = placementOf(l);

    if (!p.subject) {
      issues.push({ moduleId: l.id, source: l.source, kind: 'no-subject', detail: 'source has no entry in subjectOfSource' });
    }
    // "Additional Topics" sources are intentionally unnumbered — don't warn.
    if (p.lectureNo == null && !l.source.startsWith('Additional Topics')) {
      issues.push({ moduleId: l.id, source: l.source, kind: 'no-lecture-no', detail: 'source does not start with "L<n>"' });
    }

    const owner = slugOwner.get(p.setSlug);
    if (owner && owner !== l.source) {
      issues.push({ moduleId: l.id, source: l.source, kind: 'slug-collision', detail: `setSlug "${p.setSlug}" already used by "${owner}"` });
    } else if (!owner) {
      slugOwner.set(p.setSlug, l.source);
    }

    const ov = placementOverrides[l.id];
    const derivedSubject = subjectOfSource[l.source] ?? null;
    if (ov?.subject && derivedSubject && ov.subject !== derivedSubject) {
      issues.push({ moduleId: l.id, source: l.source, kind: 'override-mismatch', detail: `override subject "${ov.subject}" ≠ derived "${derivedSubject}"` });
    }
  }
  return issues;
}
