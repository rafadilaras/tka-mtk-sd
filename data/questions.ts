export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  topic?: string;
  explanation?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    topic: "Operasi Hitung Campuran",
    question: "Hasil perhitungan dari 2.450 + 1.250 : 25 - 175 adalah ...",
    options: ["2.325", "2.350", "2.425", "2.475"],
    correctAnswer: "2.325",
    explanation:
      "Kerjakan pembagian terlebih dahulu: 1.250 : 25 = 50. Kemudian lanjutkan penjumlahan dan pengurangan: 2.450 + 50 - 175 = 2.500 - 175 = 2.325.",
  },
  {
    id: 2,
    topic: "Pecahan",
    question:
      "Ibu membeli 2 1/2 kg gula pasir. Sebanyak 3/4 kg digunakan untuk membuat kue bolu dan 0,5 kg digunakan untuk membuat es teh manis. Berapa kg sisa gula pasir yang masih dimiliki Ibu?",
    options: ["1 1/4 kg", "1 1/2 kg", "1 3/4 kg", "2 1/4 kg"],
    correctAnswer: "1 1/4 kg",
    explanation:
      "Ubah ke bentuk desimal atau pecahan sejenis: 2 1/2 kg = 2,5 kg. Jumlah gula terpakai: 3/4 kg (0,75 kg) + 0,5 kg = 1,25 kg. Sisa gula: 2,5 kg - 1,25 kg = 1,25 kg = 1 1/4 kg.",
  },
  {
    id: 3,
    topic: "Volume Bangun Ruang",
    question:
      "Sebuah bak penampungan air berbentuk balok memiliki panjang 120 cm, lebar 80 cm, dan tinggi 100 cm. Jika bak tersebut terisi air sebanyak 3/4 bagian, berapakah volume air di dalam bak tersebut?",
    options: ["640 liter", "720 liter", "840 liter", "960 liter"],
    correctAnswer: "720 liter",
    explanation:
      "Volume balok total = p × l × t = 120 × 80 × 100 = 960.000 cm³ = 960 liter (karena 1 liter = 1.000 cm³). Volume air (3/4 bagian) = 3/4 × 960 liter = 720 liter.",
  },
  {
    id: 4,
    topic: "Operasi Hitung Campuran & Pecahan",
    question:
      "Di perpustakaan sekolah terdapat 480 buku. Sebanyak 35% adalah buku fiksi, 3/8 adalah buku pengetahuan umum, dan sisanya buku pelajaran. Berapa banyak buku pelajaran di perpustakaan tersebut?",
    options: ["120 buku", "132 buku", "144 buku", "156 buku"],
    correctAnswer: "132 buku",
    explanation:
      "Buku fiksi = 35% × 480 = 168 buku. Buku pengetahuan umum = 3/8 × 480 = 180 buku. Sisa buku pelajaran = 480 - (168 + 180) = 480 - 348 = 132 buku.",
  },
  {
    id: 5,
    topic: "Volume Bangun Ruang",
    question:
      "Sebuah drum minyak berbentuk tabung memiliki jari-jari alas 35 cm dan tinggi 100 cm. Hitunglah volume drum minyak tersebut! (Gunakan π = 22/7)",
    options: ["175.000 cm³", "220.000 cm³", "350.000 cm³", "385.000 cm³"],
    correctAnswer: "385.000 cm³",
    explanation:
      "Volume tabung = π × r² × t = (22/7) × 35 × 35 × 100 = 22 × 5 × 35 × 100 = 385.000 cm³.",
  },
];
