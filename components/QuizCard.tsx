"use client";

import React from "react";
import { Question } from "@/data/chapters";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";

export interface QuizCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  chapterTitle?: string;
  onSelectOption: (option: string) => void;
  onPreviousQuestion: () => void;
  onNextQuestion: () => void;
  onJumpToQuestion: (index: number) => void;
  onSubmitQuiz: () => void;
  onBackToMenu?: () => void;
  selectedOption?: string | null;
  answeredQuestionIds: Record<number, string>;
  allQuestionIds: number[];
  disabled?: boolean;
}

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  chapterTitle,
  onSelectOption,
  onPreviousQuestion,
  onNextQuestion,
  onJumpToQuestion,
  onSubmitQuiz,
  onBackToMenu,
  selectedOption = null,
  answeredQuestionIds,
  allQuestionIds,
  disabled = false,
}) => {
  const isFirstQuestion = currentIndex === 0;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const totalAnswered = Object.keys(answeredQuestionIds).length;

  return (
    <div className="w-full max-w-3xl space-y-4">
      {/* Question Jump Palette (Melompati Soal) */}
      <Card className="border-slate-200/90 bg-white/95 p-4 shadow-sm backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-xs font-bold text-blue-600">
              #
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 sm:text-sm">
              Navigasi Soal
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Dijawab ({totalAnswered}/{totalQuestions})
            </span>
          </div>
        </div>

        {/* Number Buttons Grid */}
        <div className="mt-3.5 flex flex-wrap gap-2 sm:gap-2.5">
          {allQuestionIds.map((qId, idx) => {
            const isCurrent = idx === currentIndex;
            const isAnswered = Boolean(answeredQuestionIds[qId]);

            return (
              <button
                key={`jump-${qId}`}
                type="button"
                onClick={() => onJumpToQuestion(idx)}
                className={cn(
                  "relative flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-all duration-150 sm:h-10 sm:w-10 sm:text-sm",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1",
                  isCurrent
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500 ring-offset-2"
                    : isAnswered
                      ? "border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-400"
                      : "border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:border-slate-300",
                )}
                title={`Lompat ke Soal ${idx + 1}`}
              >
                {idx + 1}
                {isAnswered && !isCurrent && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Main Question Card */}
      <Card className="border-slate-200/90 shadow-xl shadow-slate-200/50">
        <CardHeader className="space-y-4 pb-4">
          {/* Header Controls: Back to Chapters & Question Counter */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              {onBackToMenu && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onBackToMenu}
                  className="-ml-2 h-8 px-2 text-xs text-slate-500 hover:text-slate-900"
                >
                  <ArrowLeft className="mr-1 h-3.5 w-3.5" />
                  Daftar Bab
                </Button>
              )}

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                <BookOpen className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-semibold tracking-wide text-slate-700">
                Soal {currentIndex + 1} dari {totalQuestions}
              </span>
            </div>

            {chapterTitle && (
              <Badge
                variant="secondary"
                className="max-w-[220px] truncate font-medium text-slate-600 sm:max-w-none"
              >
                {chapterTitle}
              </Badge>
            )}
          </div>

          {/* Question Prompt */}
          <CardTitle className="text-base font-semibold leading-relaxed text-slate-900 sm:text-lg">
            {question.question}
          </CardTitle>
        </CardHeader>

        {/* Answer Options */}
        <CardContent className="pt-2">
          <div className="grid grid-cols-1 gap-3 sm:gap-3.5">
            {question.options.map((option, idx) => {
              const label = OPTION_LABELS[idx] || String(idx + 1);
              const isSelected = selectedOption === option;

              return (
                <button
                  key={`${question.id}-option-${idx}`}
                  type="button"
                  onClick={() => onSelectOption(option)}
                  disabled={disabled}
                  className={cn(
                    "group relative flex w-full items-center gap-3.5 rounded-xl border p-4 text-left font-medium transition-all duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                    isSelected
                      ? "border-blue-600 bg-blue-50/70 text-blue-900 ring-1 ring-blue-600 shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50/80 hover:text-slate-900 hover:shadow-sm",
                  )}
                >
                  {/* Option Badge (A, B, C, D) */}
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors",
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700",
                    )}
                  >
                    {label}
                  </span>

                  {/* Option Text */}
                  <span className="flex-1 text-sm sm:text-base">{option}</span>

                  {/* Check Indicator */}
                  {isSelected && (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </CardContent>

        {/* Footer Navigation: Previous, Next, and Submit */}
        <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
          {/* Previous Button (Kembali) */}
          <Button
            type="button"
            variant="outline"
            onClick={onPreviousQuestion}
            disabled={isFirstQuestion}
            className="gap-1.5 border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Sebelumnya</span>
          </Button>

          <div className="flex items-center gap-2">
            {/* Next Button */}
            {!isLastQuestion ? (
              <Button
                type="button"
                onClick={onNextQuestion}
                className="gap-1.5 bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              >
                <span>Selanjutnya</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : null}

            {/* Submit Button (Always available or prominent on last question) */}
            <Button
              type="button"
              onClick={onSubmitQuiz}
              variant={isLastQuestion ? "default" : "secondary"}
              className={cn(
                "gap-1.5 font-semibold",
                isLastQuestion
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-600/20"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200",
              )}
            >
              <Send className="h-4 w-4" />
              <span>Selesai &amp; Nilai</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
