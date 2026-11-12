"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  CheckCircle2,
  LayoutGrid,
  RotateCcw,
  XCircle,
} from "lucide-react";

export interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  chapterTitle?: string;
  onRetry: () => void;
  onBackToChapters: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  chapterTitle,
  onRetry,
  onBackToChapters,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const incorrectCount = totalQuestions - score;

  const getFeedback = () => {
    if (percentage >= 80) {
      return {
        title: "Luar Biasa! 🎉",
        message: "Pemahaman kamu pada bab ini sudah sangat matang.",
        variant: "success" as const,
        badgeText: "Sangat Baik",
      };
    }
    if (percentage >= 60) {
      return {
        title: "Bagus Sekali! 👍",
        message: "Hasil yang baik, terus pertahankan dan tingkatkan latihanmu.",
        variant: "default" as const,
        badgeText: "Cukup Baik",
      };
    }
    return {
      title: "Tetap Semangat! 💪",
      message: "Jangan berkecil hati, ulangi bab ini untuk memperdalam konsep.",
      variant: "destructive" as const,
      badgeText: "Perlu Latihan",
    };
  };

  const feedback = getFeedback();

  return (
    <Card className="w-full max-w-lg border-slate-200/90 text-center shadow-xl shadow-slate-200/50">
      <CardHeader className="space-y-4 pb-4 pt-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
          <Award className="h-10 w-10 text-blue-600" />
        </div>

        <div className="space-y-1">
          {chapterTitle && (
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {chapterTitle}
            </p>
          )}

          <Badge variant={feedback.variant} className="my-1.5">
            {feedback.badgeText}
          </Badge>

          <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {feedback.title}
          </CardTitle>

          <p className="text-sm text-slate-500 sm:text-base">
            {feedback.message}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-2">
        {/* Main Score Display */}
        <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Nilai Akhir Bab
          </p>
          <div className="mt-1 flex items-baseline justify-center gap-1">
            <span className="text-5xl font-extrabold tracking-tight text-blue-600">
              {percentage}
            </span>
            <span className="text-xl font-medium text-slate-400">/ 100</span>
          </div>
        </div>

        {/* Breakdown Stats */}
        <div className="grid grid-cols-2 gap-3 text-left">
          <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Benar</p>
              <p className="text-lg font-bold text-slate-900">
                {score}{" "}
                <span className="text-xs font-normal text-slate-400">soal</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-rose-100 bg-rose-50/50 p-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
              <XCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Salah</p>
              <p className="text-lg font-bold text-slate-900">
                {incorrectCount}{" "}
                <span className="text-xs font-normal text-slate-400">soal</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2.5 pb-8 pt-2 sm:flex-row">
        {/* Retry Chapter Button */}
        <Button
          onClick={onRetry}
          variant="default"
          size="lg"
          className="w-full gap-2 text-sm font-semibold sm:flex-1 shadow-md shadow-blue-500/20"
        >
          <RotateCcw className="h-4 w-4" />
          Ulangi Bab Ini
        </Button>

        {/* Back to Chapters Button */}
        <Button
          onClick={onBackToChapters}
          variant="outline"
          size="lg"
          className="w-full gap-2 text-sm font-semibold sm:flex-1 border-slate-300 hover:bg-slate-100"
        >
          <LayoutGrid className="h-4 w-4" />
          Kembali ke Daftar Bab
        </Button>
      </CardFooter>
    </Card>
  );
};
