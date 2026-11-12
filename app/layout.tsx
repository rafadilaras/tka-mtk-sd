import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Latihan Soal TKA Matematika SD Kelas 6",
  description:
    "Aplikasi kuis interaktif dan latihan soal Tes Kemampuan Akademik (TKA) Matematika untuk siswa kelas 6 SD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
