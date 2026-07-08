// Generated practice questions — a per-module question bank built from the
// lecture content + Active-Integration graph. Offline/build-time only (the app
// never calls AI at request time); the bank is baked or computed server-side and
// can be practised in the Hub or exported to WilliamsPod.

export type QuestionKind = 'recall' | 'mechanism' | 'trap' | 'integration' | 'clinical';

export interface BankQuestion {
  id: string;
  moduleId: string; // the lecture this question belongs to
  stem: string;
  options: { id: string; text: string }[];
  answerId: string;
  explanation: string;
  kind: QuestionKind;
  linkedModuleIds?: string[]; // for integration questions — the modules it bridges
  origin: 'authored' | 'deterministic' | 'ai';
}

/** moduleId → its questions. */
export type QuestionBank = Record<string, BankQuestion[]>;
