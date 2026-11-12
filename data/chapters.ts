export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const chapters: Chapter[] = [
  {
    id: "bab-1",
    title: "Bab 1: Operasi Hitung & Bilangan Bulat (Aplikasi Cerita)",
    description:
      "Aturan olimpiade skor, perubahan suhu, FPB/KPK lampu & bantuan sosial, panen jeruk, kapal selam, KABATAKU, dan konversi satuan.",
    questions: [
      {
        id: 101,
        question:
          "Dalam sebuah olimpiade matematika yang terdiri dari 50 soal, ditetapkan aturan: jawaban benar mendapat skor 4, salah mendapat skor -2, dan tidak dijawab mendapat skor -1. Budi menjawab 44 soal dan 37 di antaranya dijawab dengan benar. Total skor yang diperoleh Budi adalah...",
        options: ["136", "134", "128", "122"],
        correctAnswer: "128",
        explanation:
          "Benar: 37 × 4 = 148. Salah: 7 × (-2) = -14. Kosong: 6 × (-1) = -6. Skor = 148 - 14 - 6 = 128.",
      },
      {
        id: 102,
        question:
          "Suhu di dalam lemari es mula-mula -8°C. Karena listrik padam, suhu di dalam lemari es naik 3°C setiap 15 menit. Suhu di dalam lemari es setelah listrik padam selama 1 jam 15 menit adalah...",
        options: ["7°C", "4°C", "-5°C", "-2°C"],
        correctAnswer: "7°C",
        explanation:
          "1 jam 15 menit = 75 menit. Kenaikan terjadi 75 / 15 = 5 kali. Kenaikan = 5 × 3°C = 15°C. Suhu akhir = -8°C + 15°C = 7°C.",
      },
      {
        id: 103,
        question:
          "Panitia bakti sosial memiliki 84 buku tulis, 56 pensil, dan 140 krayon. Barang-barang tersebut akan dibagikan kepada sejumlah anak panti asuhan dengan jumlah dan jenis yang sama banyak. Banyak buku tulis yang diterima setiap anak adalah...",
        options: ["28 buah", "14 buah", "5 buah", "3 buah"],
        correctAnswer: "3 buah",
        explanation:
          "FPB dari 84, 56, dan 140 adalah 28 anak. Buku tulis per anak = 84 / 28 = 3 buah.",
      },
      {
        id: 104,
        question:
          "Lampu merah menyala setiap 12 detik, lampu kuning setiap 15 detik, dan lampu hijau setiap 20 detik. Ketiga lampu menyala bersama-sama pada pukul 18.15.20. Ketiga lampu akan menyala bersama-sama lagi pada pukul...",
        options: ["18.16.20", "18.15.35", "18.16.00", "18.17.20"],
        correctAnswer: "18.16.20",
        explanation:
          "KPK dari 12, 15, dan 20 adalah 60 detik (1 menit). 18.15.20 + 1 menit = 18.16.20.",
      },
      {
        id: 105,
        question:
          "Pak Rahmat memiliki 3 petak kebun jeruk. Hasil panen kebun pertama 1.250 kg, kebun kedua 1.435 kg, dan kebun ketiga 1.115 kg. Sebanyak 2.500 kg jeruk dijual kepada tengkulak dan sisanya dikemas ke dalam beberapa keranjang yang masing-masing berisi 25 kg. Banyak keranjang yang dibutuhkan adalah...",
        options: ["48", "52", "56", "62"],
        correctAnswer: "52",
        explanation:
          "Total panen = 3.800 kg. Sisa jeruk = 3.800 - 2.500 = 1.300 kg. Keranjang = 1.300 / 25 = 52 buah.",
      },
      {
        id: 106,
        question:
          "Kapal selam berada pada kedalaman 125 meter di bawah permukaan laut. Kapal tersebut naik 45 meter untuk memantau keadaan, kemudian turun kembali sejauh 60 meter. Posisi kapal selam sekarang berada pada kedalaman...",
        options: [
          "140 meter di bawah permukaan laut",
          "110 meter di bawah permukaan laut",
          "80 meter di bawah permukaan laut",
          "20 meter di bawah permukaan laut",
        ],
        correctAnswer: "140 meter di bawah permukaan laut",
        explanation:
          "-125 + 45 - 60 = -140 meter (kedalaman 140 meter di bawah permukaan laut).",
      },
      {
        id: 107,
        question: "Hasil dari (7.250 - 4.800) : 25 × 12 adalah...",
        options: ["1.054", "1.176", "1.224", "1.450"],
        correctAnswer: "1.176",
        explanation: "2.450 : 25 = 98. 98 × 12 = 1.176.",
      },
      {
        id: 108,
        question:
          "Di sebuah agen beras terdapat persediaan 125 karung beras. Tiap karung beratnya 50 kg. Beras tersebut akan disalurkan kepada 25 warung sama banyak. Berat beras yang diterima setiap warung adalah...",
        options: ["150 kg", "200 kg", "250 kg", "300 kg"],
        correctAnswer: "250 kg",
        explanation: "125 × 50 / 25 = 5 × 50 = 250 kg.",
      },
      {
        id: 109,
        question:
          "FPB dan KPK dari bilangan 48, 72, dan 96 berturut-turut adalah...",
        options: ["12 dan 288", "24 dan 288", "24 dan 144", "12 dan 144"],
        correctAnswer: "24 dan 288",
        explanation:
          "48 = 2⁴ × 3, 72 = 2³ × 3², 96 = 2⁵ × 3. FPB = 2³ × 3 = 24. KPK = 2⁵ × 3² = 288.",
      },
      {
        id: 110,
        question:
          "Bu Siska membeli 2,5 kuintal beras, 75 kg gula pasir, dan 150 pon tepung terigu. Total berat belanjaan Bu Siska adalah... kg. (1 kuintal = 100 kg, 1 pon = 0,5 kg)",
        options: ["475 kg", "400 kg", "325 kg", "250 kg"],
        correctAnswer: "400 kg",
        explanation: "250 kg + 75 kg + 75 kg = 400 kg.",
      },
    ],
  },
  {
    id: "bab-2",
    title: "Bab 2: Pecahan & Desimal (Aplikasi Analisis)",
    description:
      "Analisis pembagian tanah, kapasitas drum air, perbandingan pecahan, sisa kue, gaji bulanan, pita, beras, dan diskon belanja.",
    questions: [
      {
        id: 201,
        question:
          "Pak Darmo memiliki sebidang tanah seluas 3,6 hektar. Sepertiga bagian dari tanah tersebut dibangun rumah, 25% bagian dijadikan kolam ikan, dan sisanya digunakan untuk taman. Luas taman Pak Darmo adalah...",
        options: ["1,5 hektar", "1,2 hektar", "1,0 hektar", "0,9 hektar"],
        correctAnswer: "1,5 hektar",
        explanation:
          "Rumah = 1,2 Ha. Kolam = 0,9 Ha. Taman = 3,6 - (1,2 + 0,9) = 1,5 Ha.",
      },
      {
        id: 202,
        question:
          "Sebuah drum air mula-mula berisi 1/4 bagian. Drum tersebut kemudian diisi lagi air sebanyak 45 liter sehingga isinya menjadi 5/8 bagian. Kapasitas penuh drum tersebut adalah...",
        options: ["100 liter", "120 liter", "150 liter", "180 liter"],
        correctAnswer: "120 liter",
        explanation:
          "5/8 - 1/4 = 3/8 bagian. 3/8 × total = 45 liter. Kapasitas penuh = 45 × 8 / 3 = 120 liter.",
      },
      {
        id: 203,
        question:
          "Urutan pecahan dari yang nilainya paling besar ke paling kecil dari pecahan: 7/8 ; 85% ; 0,86 ; 4/5 adalah...",
        options: [
          "7/8 ; 0,86 ; 85% ; 4/5",
          "0,86 ; 7/8 ; 85% ; 4/5",
          "7/8 ; 85% ; 0,86 ; 4/5",
          "4/5 ; 85% ; 0,86 ; 7/8",
        ],
        correctAnswer: "7/8 ; 0,86 ; 85% ; 4/5",
        explanation:
          "7/8 = 0,875 ; 0,86 = 0,860 ; 85% = 0,850 ; 4/5 = 0,800. Urutan: 7/8 ; 0,86 ; 85% ; 4/5.",
      },
      {
        id: 204,
        question:
          "Ibu memotong kue menjadi beberapa bagian. Adik memakan 1/4 bagian, kakak memakan 1/3 bagian, dan ibu memakan 1/6 bagian. Sisa kue tersebut sekarang adalah...",
        options: ["1/4 bagian", "1/3 bagian", "1/2 bagian", "1/6 bagian"],
        correctAnswer: "1/4 bagian",
        explanation: "1 - (3/12 + 4/12 + 2/12) = 1 - 9/12 = 3/12 = 1/4.",
      },
      {
        id: 205,
        question:
          "Pak Anton menerima gaji bulanan. 20% dari gajinya ditabung, 1/3 bagian untuk biaya pendidikan, dan sisanya Rp2.800.000 untuk keperluan dapur. Gaji bulanan Pak Anton adalah...",
        options: ["Rp4.800.000", "Rp5.400.000", "Rp6.000.000", "Rp7.200.000"],
        correctAnswer: "Rp6.000.000",
        explanation:
          "Sisa pecahan = 1 - (1/5 + 1/3) = 1 - 8/15 = 7/15. (7/15) × Gaji = 2.800.000 → Gaji = Rp6.000.000.",
      },
      {
        id: 206,
        question: "Hasil dari 3 1/2 × 1,5 : 25% adalah...",
        options: ["18", "21", "24", "28"],
        correctAnswer: "21",
        explanation: "7/2 × 3/2 × 4/1 = 21/4 × 4 = 21.",
      },
      {
        id: 207,
        question:
          "Jarak rumah Siti ke sekolah 1,5 km. Siti sudah berjalan sejauh 3/4 km, lalu berlari sejauh 250 meter. Sisa jarak yang harus ditempuh Siti adalah...",
        options: ["500 meter", "450 meter", "400 meter", "250 meter"],
        correctAnswer: "500 meter",
        explanation: "1.500 m - (750 m + 250 m) = 1.500 - 1.000 = 500 meter.",
      },
      {
        id: 208,
        question:
          "Panjang pita Sari 2,4 meter. 1/3 bagian pita tersebut diberikan kepada Ana, dan 0,5 meter digunakan untuk mengikat kado. Sisa pita Sari adalah...",
        options: ["0,9 meter", "1,1 meter", "1,5 meter", "1,6 meter"],
        correctAnswer: "1,1 meter",
        explanation:
          "Diberikan Ana = 1/3 × 2,4 = 0,8 m. Sisa = 2,4 - 0,8 - 0,5 = 1,1 meter.",
      },
      {
        id: 209,
        question:
          "Koperasi memiliki persediaan 4 1/2 kuintal beras. Kemarin terjual 1,75 kuintal dan hari ini terjual 1 3/4 kuintal. Sisa beras di koperasi adalah...",
        options: ["1,0 kuintal", "1,25 kuintal", "1,5 kuintal", "2,0 kuintal"],
        correctAnswer: "1,0 kuintal",
        explanation: "4,5 - 1,75 - 1,75 = 1,0 kuintal.",
      },
      {
        id: 210,
        question:
          "Ayah membeli baju seharga Rp150.000 dan mendapat diskon 15%. Ayah membayar dengan selembar uang Rp200.000. Kembalian yang diterima ayah adalah...",
        options: ["Rp65.000", "Rp72.500", "Rp85.000", "Rp95.000"],
        correctAnswer: "Rp72.500",
        explanation:
          "Diskon = 15% × Rp150.000 = Rp22.500. Harga bayar = Rp127.500. Kembalian = 200.000 - 127.500 = Rp72.500.",
      },
    ],
  },
  {
    id: "bab-3",
    title: "Bab 3: Lingkaran (Luas Gabungan & Irisan)",
    description:
      "Perhitungan pohon di sekeliling taman, putaran roda, pelat besi berlubang, pagar 3/4 lingkaran, luas arsir, dan lintasan lari gabungan.",
    questions: [
      {
        id: 301,
        question:
          "Sebuah taman berbentuk lingkaran memiliki diameter 28 meter. Di sekeliling taman tersebut akan ditanami pohon pucuk merah dengan jarak antar pohon 4 meter. Banyak pohon yang dibutuhkan adalah... (π = 22/7)",
        options: ["18 pohon", "22 pohon", "24 pohon", "28 pohon"],
        correctAnswer: "22 pohon",
        explanation:
          "Keliling = 22/7 × 28 = 88 m. Banyak pohon = 88 / 4 = 22 pohon.",
      },
      {
        id: 302,
        question:
          "Roda sepeda Andi memiliki jari-jari 35 cm. Jika roda tersebut berputar sebanyak 200 kali, jarak yang ditempuh Andi adalah... (π = 22/7)",
        options: ["2,2 km", "4,4 km", "220 m", "440 m"],
        correctAnswer: "440 m",
        explanation:
          "Keliling = 2 × 22/7 × 35 = 220 cm. Jarak = 220 cm × 200 = 44.000 cm = 440 m.",
      },
      {
        id: 303,
        question:
          "Di atas sebuah pelat besi berbentuk persegi panjang berukuran 40 cm × 30 cm dilubangi berbentuk lingkaran dengan jari-jari 7 cm. Luas sisa pelat besi tersebut adalah...",
        options: ["1.046 cm²", "1.100 cm²", "1.154 cm²", "1.200 cm²"],
        correctAnswer: "1.046 cm²",
        explanation:
          "Luas pelat = 1.200 cm². Luas lingkaran = 22/7 × 7 × 7 = 154 cm². Sisa = 1.200 - 154 = 1.046 cm².",
      },
      {
        id: 304,
        question:
          "Pak Karta memiliki kebun berbentuk 3/4 lingkaran dengan jari-jari 14 meter. Sekeliling kebun tersebut akan dipagari kawat. Panjang kawat minimal yang dibutuhkan adalah...",
        options: ["66 meter", "80 meter", "94 meter", "108 meter"],
        correctAnswer: "94 meter",
        explanation:
          "Keliling = (3/4 × 2 × 22/7 × 14) + (2 × 14) = 66 + 28 = 94 meter.",
      },
      {
        id: 305,
        question:
          "Luas daerah yang diarsir pada sebuah persegi berukuran sisi 14 cm yang di dalamnya terdapat lingkaran penuh yang menyinggung keempat sisinya adalah...",
        options: ["42 cm²", "154 cm²", "196 cm²", "248 cm²"],
        correctAnswer: "42 cm²",
        explanation:
          "Luas persegi = 196 cm². Luas lingkaran = 154 cm². Luas arsir = 196 - 154 = 42 cm².",
      },
      {
        id: 306,
        question:
          "Sebuah kolam berbentuk setengah lingkaran memiliki luas 308 m². Diameter kolam tersebut adalah... (π = 22/7)",
        options: ["7 meter", "14 meter", "21 meter", "28 meter"],
        correctAnswer: "28 meter",
        explanation:
          "1/2 × 22/7 × r² = 308 → 11/7 × r² = 308 → r² = 196 → r = 14 m. Diameter = 28 meter.",
      },
      {
        id: 307,
        question:
          "Sebuah lapangan berbentuk lingkaran memiliki keliling 132 meter. Luas lapangan tersebut adalah... (π = 22/7)",
        options: ["1.386 m²", "1.256 m²", "2.464 m²", "5.544 m²"],
        correctAnswer: "1.386 m²",
        explanation:
          "2 × 22/7 × r = 132 → r = 21 m. Luas = 22/7 × 21 × 21 = 1.386 m².",
      },
      {
        id: 308,
        question:
          "Jari-jari lingkaran A adalah dua kali jari-jari lingkaran B. Jika luas lingkaran B adalah 154 cm², maka luas lingkaran A adalah...",
        options: ["308 cm²", "462 cm²", "616 cm²", "1.232 cm²"],
        correctAnswer: "616 cm²",
        explanation:
          "Jika r dikali 2, maka luas dikali 2² = 4. 154 × 4 = 616 cm².",
      },
      {
        id: 309,
        question:
          "Panjang lintasan lari berbentuk gabungan persegi panjang dan dua setengah lingkaran di ujungnya. Panjang persegi panjang 50 m dan lebarnya 14 m. Jika seorang pelari berlari 2 putaran, jarak yang ditempuh adalah...",
        options: ["228 meter", "288 meter", "456 meter", "576 meter"],
        correctAnswer: "288 meter",
        explanation:
          "Keliling 1 putaran = (2 × panjang lurus) + keliling 1 lingkaran = (2 × 50) + (22/7 × 14) = 100 + 44 = 144 m. 2 putaran = 288 m.",
      },
      {
        id: 310,
        question:
          "Jarak pusat roda ke tepi luar adalah 28 cm. Roda tersebut menggelinding sejauh 880 meter. Roda tersebut berputar sebanyak...",
        options: ["100 kali", "250 kali", "500 kali", "1.000 kali"],
        correctAnswer: "500 kali",
        explanation:
          "Jari-jari = 28 cm. Keliling = 176 cm. Jarak = 88.000 cm. Banyak putaran = 88.000 / 176 = 500 kali.",
      },
    ],
  },
  {
    id: "bab-4",
    title: "Bab 4: Bangun Ruang (Debit, Volume & Luas Permukaan Gabungan)",
    description:
      "Perhitungan debit kolam renang, bak mandi, kubus tumpuk, balok + limas, selimut kaleng, prisma siku-siku, kerucut, drum, dan kawat kandang.",
    questions: [
      {
        id: 401,
        question:
          "Sebuah bak mandi berbentuk balok dengan ukuran bagian dalam panjang 120 cm, lebar 80 cm, dan tinggi 60 cm. Bak tersebut sudah berisi air sepertiga bagian. Air yang harus ditambahkan agar bak mandi tersebut penuh adalah...",
        options: ["576 liter", "384 liter", "288 liter", "192 liter"],
        correctAnswer: "384 liter",
        explanation:
          "Volume total = 12 × 8 × 6 = 576 liter. Kurang 2/3 bagian: 2/3 × 576 = 384 liter.",
      },
      {
        id: 402,
        question:
          "Kolam renang berukuran panjang 20 m, lebar 15 m, dan kedalaman 2 m. Kolam tersebut diisi menggunakan pompa air dengan debit 5.000 liter/menit. Waktu yang dibutuhkan agar kolam penuh adalah...",
        options: ["1,5 jam", "2 jam", "2,5 jam", "3 jam"],
        correctAnswer: "2 jam",
        explanation:
          "Volume = 20 × 15 × 2 = 600 m³ = 600.000 liter. Waktu = 600.000 / 5.000 = 120 menit = 2 jam.",
      },
      {
        id: 403,
        question:
          "Dua buah kubus berukuran sama memiliki volume gabungan 2.000 cm³. Luas permukaan gabungan bangun tersebut saat ditumpuk menempel adalah...",
        options: ["800 cm²", "1.000 cm²", "1.200 cm²", "1.600 cm²"],
        correctAnswer: "1.000 cm²",
        explanation:
          "1 kubus = 1.000 cm³, rusuk = 10 cm. Luas 1 sisi = 100 cm². Ditumpuk menempel menyisakan 10 sisi luar: 10 × 100 = 1.000 cm².",
      },
      {
        id: 404,
        question:
          "Bangun gabungan terdiri dari balok (p=10 cm, l=10 cm, t=15 cm) dan limas segiempat beraturan menempel di atasnya dengan tinggi limas 12 cm. Volume total bangun ruang tersebut adalah...",
        options: ["1.500 cm³", "1.800 cm³", "1.900 cm³", "2.700 cm³"],
        correctAnswer: "1.900 cm³",
        explanation:
          "Volume balok = 1.500 cm³. Volume limas = 1/3 × 100 × 12 = 400 cm³. Total volume = 1.900 cm³.",
      },
      {
        id: 405,
        question:
          "Sebuah kaleng susu berbentuk tabung dengan diameter alas 14 cm dan tinggi 20 cm. Pada kaleng tersebut ditempel kertas label yang menutupi seluruh selimut tabung. Luas kertas label tersebut adalah...",
        options: ["440 cm²", "616 cm²", "880 cm²", "1.188 cm²"],
        correctAnswer: "880 cm²",
        explanation: "Luas selimut = π × d × t = 22/7 × 14 × 20 = 880 cm².",
      },
      {
        id: 406,
        question:
          "Volume sebuah prisma segitiga siku-siku adalah 1.200 cm³. Jika sisi penyiku alasnya 8 cm dan 15 cm, maka tinggi prisma tersebut adalah...",
        options: ["10 cm", "15 cm", "20 cm", "25 cm"],
        correctAnswer: "20 cm",
        explanation:
          "Luas alas = 1/2 × 8 × 15 = 60 cm². Tinggi prisma = 1.200 / 60 = 20 cm.",
      },
      {
        id: 407,
        question:
          "Sebuah kerucut memiliki volume 1.232 cm³ dan jari-jari alas 7 cm. Tinggi kerucut tersebut adalah... (π = 22/7)",
        options: ["12 cm", "18 cm", "24 cm", "30 cm"],
        correctAnswer: "24 cm",
        explanation:
          "Volume = 1/3 × π × r² × t → 1.232 = 1/3 × 154 × t → t = 1.232 × 3 / 154 = 24 cm.",
      },
      {
        id: 408,
        question:
          "Balok A dan Kubus B memiliki volume yang sama. Jika panjang balok A = 16 cm, lebarnya 8 cm, dan tingginya 4 cm, maka panjang rusuk kubus B adalah...",
        options: ["6 cm", "8 cm", "10 cm", "12 cm"],
        correctAnswer: "8 cm",
        explanation:
          "Volume balok = 16 × 8 × 4 = 512 cm³. Akar pangkat tiga dari 512 = 8 cm.",
      },
      {
        id: 409,
        question:
          "Sebuah drum tabung penuh berisi 3.080 liter minyak goreng. Jika kedalaman (tinggi) drum 2 meter, maka diameter alas drum tersebut adalah... (1 liter = 1 dm³)",
        options: ["7 dm", "14 dm", "21 dm", "28 dm"],
        correctAnswer: "14 dm",
        explanation:
          "Tinggi = 20 dm. Vol = 22/7 × r² × 20 = 3.080 → r² = 49 → r = 7 dm. Diameter = 14 dm.",
      },
      {
        id: 410,
        question:
          "Pak Tarno membuat kandang berbentuk kubus dari kawat besi. Panjang rusuknya 45 cm. Jika ia memiliki kawat 25 meter, kawat yang tersisa adalah...",
        options: ["3,4 meter", "5,4 meter", "14,2 meter", "19,6 meter"],
        correctAnswer: "19,6 meter",
        explanation:
          "1 kubus punya 12 rusuk: 12 × 45 cm = 540 cm = 5,4 meter. Sisa kawat = 25 - 5,4 = 19,6 meter.",
      },
    ],
  },
  {
    id: "bab-5",
    title: "Bab 5: Pengolahan Data (Statistika Analitis)",
    description:
      "Rata-rata gabungan, data penjualan hilang, nilai tengah genap, selisih sudut diagram lingkaran, pergantian pemain, dan modus data analitis.",
    questions: [
      {
        id: 501,
        question:
          "Rata-rata nilai ulangan matematika dari 18 siswa adalah 75. Setelah nilai ulangan Budi dan Wati dimasukkan, rata-rata kelas menjadi 76. Jika nilai Budi 10 lebih tinggi dari nilai Wati, nilai ulangan Budi adalah...",
        options: ["75", "80", "85", "90"],
        correctAnswer: "90",
        explanation:
          "Total 18 siswa = 1.350. Total 20 siswa = 1.520. Budi + Wati = 170. B = W + 10 → 2W + 10 = 170 → W = 80, Budi = 90.",
      },
      {
        id: 502,
        question:
          "Tabel penjualan baju dalam seminggu: Senin(30), Selasa(25), Rabu(35), Kamis(40), Jumat(35), Sabtu(45). Jika rata-rata penjualan seminggu adalah 36 potong, banyak baju yang terjual pada hari Minggu adalah...",
        options: ["38 potong", "42 potong", "48 potong", "50 potong"],
        correctAnswer: "42 potong",
        explanation:
          "Total 7 hari = 36 × 7 = 252. Total Senin-Sabtu = 210. Minggu = 252 - 210 = 42 potong.",
      },
      {
        id: 503,
        question:
          "Data berat badan (kg) 10 siswa: 32, 34, 34, 35, 33, 36, 34, 35, 33, 37. Median dari data tersebut adalah...",
        options: ["33,5 kg", "34 kg", "34,5 kg", "35 kg"],
        correctAnswer: "34 kg",
        explanation:
          "Urutan data: 32, 33, 33, 34, 34, 34, 35, 35, 36, 37. Nilai tengah ke-5 dan 6 adalah 34 dan 34. Median = (34 + 34) / 2 = 34.",
      },
      {
        id: 504,
        question:
          "Dalam diagram lingkaran tentang ekstrakurikuler 120 siswa. Sepak bola 120°, Basket 90°, Catur 60°, dan sisanya Renang. Selisih siswa yang ikut Renang dan Catur adalah...",
        options: ["10 orang", "15 orang", "20 orang", "30 orang"],
        correctAnswer: "10 orang",
        explanation:
          "Renang = 360° - 120° - 90° - 60° = 90°. Selisih sudut = 90° - 60° = 30°. Selisih orang = 30/360 × 120 = 10 orang.",
      },
      {
        id: 505,
        question:
          "Rata-rata tinggi badan 5 pemain voli adalah 172 cm. Jika satu pemain dengan tinggi 180 cm diganti oleh pemain baru, rata-ratanya menjadi 173 cm. Tinggi pemain baru tersebut adalah...",
        options: ["183 cm", "185 cm", "187 cm", "189 cm"],
        correctAnswer: "185 cm",
        explanation:
          "Rata-rata naik 1 cm untuk 5 orang, berarti pemain baru membawa tambahan total 5 cm. 180 + 5 = 185 cm.",
      },
      {
        id: 506,
        question:
          "Suatu data berjumlah 20 memiliki rata-rata 8,5. Jika 4 data terendah yang bernilai 5 diabaikan, maka rata-rata data yang tersisa menjadi...",
        options: ["9,15", "9,375", "9,50", "9,65"],
        correctAnswer: "9,375",
        explanation:
          "Total nilai = 20 × 8,5 = 170. Nilai dibuang = 4 × 5 = 20. Sisa nilai = 150. Sisa data = 16. Rata-rata baru = 150 / 16 = 9,375.",
      },
      {
        id: 507,
        question:
          "Diketahui hasil panen kuintal: Padi(45), Jagung(30), Kedelai(x), Kacang(20). Jika modus data tersebut adalah Kedelai, dan median dari seluruh hasil panen (4 komoditas) adalah 35, maka berat kedelai adalah...",
        options: ["35 kuintal", "40 kuintal", "46 kuintal", "50 kuintal"],
        correctAnswer: "40 kuintal",
        explanation:
          "Urutan data: 20, 30, x, 45. Median = (30 + x) / 2 = 35 → 30 + x = 70 → x = 40 kuintal.",
      },
      {
        id: 508,
        question:
          "Data berat badan (kg): 40, 41, 42, 43, 44. Jika rata-ratanya adalah 42 kg, dan masing-masing anak beratnya ditambah 3 kg, rata-rata barunya adalah...",
        options: ["42 kg", "43 kg", "44 kg", "45 kg"],
        correctAnswer: "45 kg",
        explanation:
          "Sifat rata-rata: jika semua data ditambah n, maka rata-rata juga bertambah n. 42 + 3 = 45 kg.",
      },
      {
        id: 509,
        question:
          "Rata-rata ujian 15 anak laki-laki adalah 78. Rata-rata 10 anak perempuan adalah 83. Rata-rata seluruh siswa adalah...",
        options: ["79,5", "80,0", "80,5", "81,0"],
        correctAnswer: "80,0",
        explanation:
          "((15 × 78) + (10 × 83)) / 25 = (1.170 + 830) / 25 = 2.000 / 25 = 80,0.",
      },
      {
        id: 510,
        question:
          "Modus dari sekumpulan data: 7, 8, 7, 6, 9, 8, 8, 7, x, 9, 6 adalah 7. Nilai x yang memenuhi adalah...",
        options: ["6", "7", "8", "9"],
        correctAnswer: "7",
        explanation:
          "Frekuensi saat ini: 6(2), 7(3), 8(3), 9(2). Agar modusnya 7, frekuensi 7 harus paling banyak, maka x = 7.",
      },
    ],
  },
  {
    id: "bab-6",
    title: "Bab 6: Perbandingan, Skala, dan Kecepatan (Jarak & Waktu)",
    description:
      "Waktu berpapasan, menyusul kecepatan berbeda, perbandingan uang & siswa, skala peta/model, berbalik nilai, dan kereta melewati jembatan.",
    questions: [
      {
        id: 601,
        question:
          "Jarak kota A dan B adalah 275 km. Roni berangkat dari kota A ke kota B pada pukul 07.00 dengan kecepatan 52 km/jam. Pada waktu bersamaan, Bima berangkat dari kota B ke kota A dengan kecepatan 58 km/jam. Mereka akan berpapasan pada pukul...",
        options: ["09.00", "09.30", "10.00", "10.30"],
        correctAnswer: "09.30",
        explanation:
          "Waktu papasan = Jarak / (V1 + V2) = 275 / (52 + 58) = 275 / 110 = 2,5 jam. 07.00 + 2 jam 30 menit = 09.30.",
      },
      {
        id: 602,
        question:
          "Kakak bersepeda dengan kecepatan 15 km/jam berangkat pukul 06.00. Adik menyusul menggunakan sepeda motor dengan kecepatan 45 km/jam berangkat pukul 06.40. Adik dapat menyusul kakak pada pukul...",
        options: ["07.00", "07.10", "07.20", "07.30"],
        correctAnswer: "07.00",
        explanation:
          "Selisih waktu 40 menit (2/3 jam). Selisih jarak = 15 × 2/3 = 10 km. Waktu susul = 10 / (45 - 15) = 10 / 30 = 1/3 jam (20 menit). Adik berangkat 06.40 + 20 menit = 07.00.",
      },
      {
        id: 603,
        question:
          "Perbandingan uang Ali, Budi, dan Cici adalah 3 : 4 : 5. Jika selisih uang Ali dan Cici adalah Rp40.000, maka jumlah uang mereka bertiga adalah...",
        options: ["Rp180.000", "Rp200.000", "Rp240.000", "Rp300.000"],
        correctAnswer: "Rp240.000",
        explanation:
          "Selisih perbandingan Ali dan Cici = 5 - 3 = 2. Uang total = (3 + 4 + 5) / 2 × 40.000 = 12 / 2 × 40.000 = Rp240.000.",
      },
      {
        id: 604,
        question:
          "Sebuah peta berskala 1 : 2.500.000. Jarak kota P dan Q pada peta adalah 8 cm. Sebuah bus berangkat dari kota P ke Q dengan kecepatan 80 km/jam. Waktu yang ditempuh bus adalah...",
        options: ["2,0 jam", "2,5 jam", "3,0 jam", "3,5 jam"],
        correctAnswer: "2,5 jam",
        explanation:
          "Jarak sebenarnya = 8 × 2.500.000 cm = 20.000.000 cm = 200 km. Waktu = 200 / 80 = 2,5 jam.",
      },
      {
        id: 605,
        question:
          "Perbandingan siswa laki-laki dan perempuan 5 : 7. Jika ada tambahan 4 siswa laki-laki, perbandingannya menjadi 1 : 1. Banyak siswa keseluruhan sebelum ada tambahan adalah...",
        options: ["24 orang", "36 orang", "48 orang", "60 orang"],
        correctAnswer: "24 orang",
        explanation:
          "Selisih rasio perempuan dan laki-laki adalah 2 unit. Tambahan 4 orang menutupi selisih 2 unit tersebut, jadi 1 unit = 2 orang. Total awal = 12 unit × 2 = 24 orang.",
      },
      {
        id: 606,
        question:
          "Suatu pekerjaan dapat diselesaikan oleh 15 orang dalam waktu 24 hari. Jika pekerjaan ingin diselesaikan dalam waktu 18 hari, tambahan pekerja yang dibutuhkan adalah...",
        options: ["5 orang", "10 orang", "15 orang", "20 orang"],
        correctAnswer: "5 orang",
        explanation:
          "Perbandingan berbalik nilai. 15 × 24 = x × 18 → 360 = 18x → x = 20 orang. Tambahan = 20 - 15 = 5 orang.",
      },
      {
        id: 607,
        question:
          "Pak Budi membangun model gedung dengan skala 1 : 200. Jika tinggi gedung pada model adalah 45 cm dan lebarnya 15 cm, luas bagian depan gedung sebenarnya adalah...",
        options: ["2.700 m²", "3.000 m²", "6.750 m²", "27.000 m²"],
        correctAnswer: "2.700 m²",
        explanation:
          "Tinggi nyata = 45 × 200 = 9.000 cm = 90 m. Lebar nyata = 15 × 200 = 3.000 cm = 30 m. Luas = 90 × 30 = 2.700 m².",
      },
      {
        id: 608,
        question:
          "Perbandingan kelereng Andi dan Budi 2 : 3. Perbandingan kelereng Budi dan Candra 4 : 5. Jika total kelereng mereka 140 butir, kelereng Budi berjumlah...",
        options: ["32 butir", "48 butir", "60 butir", "72 butir"],
        correctAnswer: "48 butir",
        explanation:
          "Samakan rasio B. A:B = 8:12, B:C = 12:15. A:B:C = 8:12:15. Total rasio = 35. Kelereng Budi = 12 / 35 × 140 = 48.",
      },
      {
        id: 609,
        question:
          "Kereta api X melaju dengan kecepatan 72 km/jam. Kereta tersebut melewati jembatan yang panjangnya 200 meter. Jika panjang kereta 100 meter, waktu yang dibutuhkan kereta untuk benar-benar melewati jembatan adalah...",
        options: ["5 detik", "10 detik", "15 detik", "20 detik"],
        correctAnswer: "15 detik",
        explanation:
          "Jarak tempuh = panjang jembatan + panjang kereta = 300 meter. Kecepatan 72 km/jam = 20 m/detik. Waktu = 300 / 20 = 15 detik.",
      },
      {
        id: 610,
        question:
          "Jarak A ke B adalah 120 km. Jika Budi mengendarai motor dan ingin tiba 1 jam lebih cepat dari waktu normal tempuhnya yaitu 4 jam, kecepatan rata-rata yang harus ditempuh Budi adalah...",
        options: ["30 km/jam", "40 km/jam", "50 km/jam", "60 km/jam"],
        correctAnswer: "40 km/jam",
        explanation:
          "Waktu normal = 4 jam. Waktu target = 3 jam. Kecepatan = 120 / 3 = 40 km/jam.",
      },
    ],
  },
];
