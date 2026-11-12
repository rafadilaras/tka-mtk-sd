"use client";

import React from "react";
import { Chapter } from "@/data/chapters";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
} from "lucide-react";

export interface ChapterMenuProps {
  chapters: Chapter[];
  onSelectChapter: (chapterId: string) => void;
}


export const ChapterMenu: React.FC<ChapterMenuProps> = ({
  chapters,
  onSelectChapter,
}) => {
  return (
    <div className="w-full max-w-5xl space-y-8">
      {/* Introduction Banner */}
      <div className="text-center space-y-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-800">
          <BookOpen className="h-3.5 w-3.5" />
          Kurikulum TKA Matematika SD Kelas 6
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Pilih Bab Latihan Soal
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
          Tersedia 6 bab lengkap dengan pembahasan soal terstruktur untuk
          mempersiapkan diri menghadapi Tes Kemampuan Akademik (TKA) Matematika.
        </p>
      </div>

      {/* Chapters Grid: 3 columns on large screens */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => {

          return (
            <Card
              key={chapter.id}
              className="group flex flex-col justify-between border-slate-200/90 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <CardHeader className="space-y-4 pb-4">

                <div className="space-y-1.5">
                  <CardTitle className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors sm:text-lg">
                    {chapter.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {chapter.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardFooter className="pt-2">
                <Button
                  onClick={() => onSelectChapter(chapter.id)}
                  className="w-full gap-2 text-sm font-semibold group-hover:bg-blue-700"
                >
                  <span>Mulai Latihan</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
