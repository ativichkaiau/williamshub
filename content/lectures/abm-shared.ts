import type {
  Emphasis,
  ExamFinding,
  Investigation,
  Lecture,
  SystemId,
  Tag,
  TreatmentLogic,
} from '../../lib/types';

type QuizIndex = 0 | 1 | 2 | 3;

export interface AbmLectureSpec {
  id: string;
  title: string;
  source: string;
  system?: SystemId;
  tags: Tag[];
  highYield: string[];
  chainTitle: string;
  steps: { label: string; emphasis?: Emphasis }[];
  examFindings: ExamFinding[];
  investigations: Investigation[];
  treatment: TreatmentLogic[];
  mnemonic: { hook: string; expansion: string[] };
  trap: {
    questionCategory: string;
    wrongInstinct: string;
    rightAnswer: string;
    why: string;
  };
  quiz: {
    stem: string;
    options: [string, string, string, string];
    answer: QuizIndex;
    explanation: string;
  };
}

export function abmLecture(spec: AbmLectureSpec): Lecture {
  const optionIds = ['a', 'b', 'c', 'd'] as const;

  return {
    id: spec.id,
    title: spec.title,
    system: spec.system ?? 'molecular',
    source: spec.source,
    updated: '2026-07-01',
    tags: [
      { kind: 'system', label: 'Applied Biochemistry' },
      { kind: 'lecture', label: spec.source },
      ...spec.tags,
    ],
    highYield: spec.highYield,
    mechanism: {
      title: spec.chainTitle,
      steps: spec.steps.map((step, index) => ({
        id: `s${index + 1}`,
        label: step.label,
        emphasis: step.emphasis,
      })),
    },
    examFindings: spec.examFindings,
    investigations: spec.investigations,
    treatment: spec.treatment,
    mnemonics: [spec.mnemonic],
    traps: [spec.trap],
    quiz: [
      {
        id: 'q1',
        stem: spec.quiz.stem,
        options: spec.quiz.options.map((text, index) => ({ id: optionIds[index], text })),
        answerId: optionIds[spec.quiz.answer],
        explanation: spec.quiz.explanation,
        tests: 'mechanism',
      },
    ],
  };
}
