"use client";

import { useState } from "react";
import { chapters } from "@/data/chapters";
import { ChapterMenu } from "@/components/ChapterMenu";
import { QuizCard } from "@/components/QuizCard";
import { ResultScreen } from "@/components/ResultScreen";
import { Calculator, Sparkles } from "lucide-react";

export default function QuizApp() {
  // State variables for chapter, current question, answers, and result screen
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  // Active chapter and questions
  const activeChapter =
    chapters.find((ch) => ch.id === selectedChapter) || null;
  const currentQuestions = activeChapter ? activeChapter.questions : [];
  const currentQuestion = currentQuestions[currentIndex] || null;
  const allQuestionIds = currentQuestions.map((q) => q.id);

  // Calculate final score based on recorded user answers
  const score = currentQuestions.reduce((acc, q) => {
    return userAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  // Actions
  const handleSelectChapter = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setCurrentIndex(0);
    setUserAnswers({});
    setShowResult(false);
  };

  const handleSelectOption = (option: string) => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  const handlePreviousQuestion = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextQuestion = () => {
    setCurrentIndex((prev) => Math.min(currentQuestions.length - 1, prev + 1));
  };

  const handleJumpToQuestion = (index: number) => {
    if (index >= 0 && index < currentQuestions.length) {
      setCurrentIndex(index);
    }
  };

  const handleSubmitQuiz = () => {
    setShowResult(true);
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setUserAnswers({});
    setShowResult(false);
  };

  const handleBackToChapters = () => {
    setSelectedChapter(null);
    setCurrentIndex(0);
    setUserAnswers({});
    setShowResult(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-100">
      {/* App Header */}
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
          <button
            type="button"
            onClick={handleBackToChapters}
            className="flex items-center gap-3 text-left transition-opacity hover:opacity-85"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-500/30">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 sm:text-lg">
                TKA Matematika SD
              </h1>
              <p className="text-xs text-slate-500">Kelas 6 Sekolah Dasar</p>
            </div>
          </button>

          <div className="flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50/70 px-3 py-1 text-xs font-semibold text-blue-700">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Latihan Per Bab</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex flex-1 flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Screen 1: Chapter Selection Menu */}
        {selectedChapter === null && (
          <ChapterMenu
            chapters={chapters}
            onSelectChapter={handleSelectChapter}
          />
        )}

        {/* Screen 2: Active Quiz with Navigation & Jump Palette */}
        {selectedChapter !== null && !showResult && currentQuestion && (
          <QuizCard
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={currentQuestions.length}
            chapterTitle={activeChapter?.title}
            onSelectOption={handleSelectOption}
            onPreviousQuestion={handlePreviousQuestion}
            onNextQuestion={handleNextQuestion}
            onJumpToQuestion={handleJumpToQuestion}
            onSubmitQuiz={handleSubmitQuiz}
            onBackToMenu={handleBackToChapters}
            selectedOption={userAnswers[currentQuestion.id] || null}
            answeredQuestionIds={userAnswers}
            allQuestionIds={allQuestionIds}
          />
        )}

        {/* Screen 3: Result Screen */}
        {selectedChapter !== null && showResult && (
          <ResultScreen
            score={score}
            totalQuestions={currentQuestions.length}
            chapterTitle={activeChapter?.title}
            onRetry={handleRetry}
            onBackToChapters={handleBackToChapters}
          />
        )}
      </main>

      {/* App Footer */}
      <footer className="border-t border-slate-200/80 bg-white/50 py-4 text-center text-xs text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} TKA Matematika SD Kelas 6 &bull;
          Aplikasi Latihan Soal Interaktif
        </p>
      </footer>
    </div>
  );
}
