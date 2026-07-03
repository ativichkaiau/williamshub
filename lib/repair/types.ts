// Repair Queue — personalised "what to fix" list, populated from WilliamsPod
// mistakes via WilliamsSync. Personal data → lives in localStorage (never in the
// content bundle). See lib/repair/store.ts for the client store.

/** How the mistake was classified by WilliamsPod. */
export type ErrorType =
  | 'recall_error' // didn't know / forgot the fact
  | 'mechanism_error' // broke down on the cause→effect chain
  | 'frame_error' // answered the wrong KIND of question (misread the frame)
  | 'trap_error' // fell for a distractor
  | 'overthinking_error' // talked self out of the right answer
  | 'timing_error' // ran out of time / rushed
  | 'confidence_error' // right instinct, low confidence → changed answer
  | 'integration_error'; // missed a cross-module / cross-subject link

export type RepairPriority = 'low' | 'medium' | 'high' | 'critical';

/** Canonical reason codes (the "why" behind the repair). */
export type RepairReason =
  | 'missed_high_yield'
  | 'weak_mechanism'
  | 'misread_question_frame'
  | 'fell_for_distractor'
  | 'second_guessed'
  | 'ran_out_of_time'
  | 'low_confidence'
  | 'missed_cross_link'
  | 'other';

/** One actionable repair recommendation for a module. */
export interface RepairQueueItem {
  id: string;
  user_id: string;
  module_id: string;
  lecture_id: string;
  subject_id: string;
  reason: RepairReason;
  error_type: ErrorType;
  priority: RepairPriority;
  recommended_action: string;
  source_question_id: string | null;
  created_at: string; // ISO
  completed_at: string | null; // ISO when marked done, else null
}
