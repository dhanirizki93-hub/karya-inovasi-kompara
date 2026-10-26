/**
 * DATA PEMBELAJARAN INFORMATIKA KELAS X - FASE E
 * FOKUS EKSKLUSIF: 4 PILAR BERPIKIR KOMPUTASIONAL (COMPUTATIONAL THINKING)
 * Dirancang untuk meningkatkan literasi membaca-analitis dan penalaran kritis murid.
 * TIDAK ADA SISTEM PENILAIAN / SKOR.
 */

const APP_DATA = {
  // 1. DATA RINGKAS & PADAT 4 PILAR BERPIKIR KOMPUTASIONAL (BAHASA MURID)
  pillars: [
    {
      id: "dekomposisi",
      title: "Dekomposisi",
      enTitle: "Decomposition",
      icon: "fa-puzzle-piece",
      badge: "Pilar 1",
      colorTheme: "blue",
      image3D: "assets/dekomposisi_3d.jpg?v=3.3",
      tagline: "Pecah Masalah Besar Jadi Bagian Kecil yang Mudah Dikerjakan",
      overview: "Dekomposisi adalah teknik membagi masalah rumit menjadi beberapa bagian kecil agar lebih mudah diselesaikan satu demi satu tanpa rasa pusing.",
      whyImportant: "Memikirkan seluruh masalah sekaligus membuat kita stres dan bingung. Dengan memecahnya, fokus kita terarah dan tugas selesai lebih cepat.",
      characteristics: [
        "Membagi tugas besar menjadi beberapa sub-tugas kecil yang mandiri.",
        "Menentukan prioritas mana yang harus diselesaikan lebih dulu.",
        "Memudahkan pembagian tugas saat kerja kelompok."
      ],
      realWorldCases: [
        {
          title: "Merapikan Kamar Berantakan",
          problem: "Kamar tidur acak-acakan setelah seminggu ujian.",
          decompositionSolution: [
            "1. Area Kasur: Lipat selimut & rapikan sprei.",
            "2. Meja Belajar: Susun buku pelajaran & simpan pulpen.",
            "3. Lemari: Gantung seragam & pisahkan baju kotor.",
            "4. Lantai: Sapu bungkus snack & pel bersih."
          ]
        },
        {
          title: "Tugas Video Kelompok",
          problem: "Tugas membuat video presentasi 2 menit.",
          decompositionSolution: [
            "1. Pra-produksi: Tulis naskah & bagi peran bicara.",
            "2. Produksi: Rekam video dengan HP & mic earphone.",
            "3. Editing: Potong bagian salah & tambah musik santai."
          ]
        }
      ],
      literacyGuide: "Tandai tugas utama dalam teks bacaan, lalu uraikan menjadi daftar langkah-langkah kecil."
    },

    {
      id: "pola",
      title: "Pengenalan Pola",
      enTitle: "Pattern Recognition",
      icon: "fa-shapes",
      badge: "Pilar 2",
      colorTheme: "emerald",
      image3D: "assets/pola_3d.jpg?v=3.3",
      tagline: "Kenali Kesamaan, Tren, dan Keteraturan yang Berulang",
      overview: "Pengenalan pola adalah kemampuan melihat keteraturan atau tren yang berulang dari suatu situasi, sehingga kita bisa memakai solusi masa lalu untuk masalah baru yang serupa.",
      whyImportant: "Banyak hal di hidup kita terjadi berulang kali. Jika kita tahu polanya, kita bisa memprediksi kejadian berikutnya tanpa perlu mencari solusi dari nol.",
      characteristics: [
        "Melihat kesamaan ciri atau tren antarkejadian.",
        "Mengenali waktu atau siklus yang sering terulang.",
        "Mampu memprediksi hal selanjutnya berdasarkan pola lampau."
      ],
      realWorldCases: [
        {
          title: "Antrean Kantin Sekolah",
          problem: "Sering kehabisan jajan dan terjebak antrean mengular.",
          decompositionSolution: [
            "Pola: Antrean selalu melonjak di jam istirahat (09.45 & 12.15).",
            "Solusi: Beli tepat saat bel berbunyi atau titip teman yang piket."
          ]
        },
        {
          title: "Jadwal Bel & Ritme Jam Istirahat Sekolah",
          problem: "Sering salah menduga waktu persiapan masuk kelas dan jajan tergesa-gesa.",
          decompositionSolution: [
            "Pola: Bel istirahat memiliki durasi tetap (30 menit) dan pola kepadatan memuncak 15 menit pertama.",
            "Solusi: Mengatur waktu menuju kantin di awal atau menjelang akhir istirahat."
          ]
        }
      ],
      literacyGuide: "Cari kata kunci frekuensi dalam teks, seperti 'selalu', 'setiap jam', 'cenderung', atau 'meningkat'."
    },

    {
      id: "abstraksi",
      title: "Abstraksi",
      enTitle: "Abstraction",
      icon: "fa-filter",
      badge: "Pilar 3",
      colorTheme: "amber",
      image3D: "assets/abstraksi_3d.jpg?v=3.3",
      tagline: "Fokus pada yang Penting Saja, Abaikan yang Tidak Relevan",
      overview: "Abstraksi adalah keterampilan menyaring informasi dengan memusatkan perhatian hanya pada inti masalah dan mengabaikan detail tambahan yang tidak berpengaruh pada solusi.",
      whyImportant: "Dunia ini penuh informasi yang tidak semuanya kita butuhkan. Tanpa abstraksi, kita akan kelelahan memproses detail yang tidak berguna dan kehilangan fokus.",
      characteristics: [
        "Memilih fakta penentu yang paling penting.",
        "Membuang rincian hiasan atau basa-basi cerita.",
        "Membuat model ringkas (seperti garis peta rute atau bagan alur)."
      ],
      realWorldCases: [
        {
          title: "Peta Ojek Online (Gojek / Grab)",
          problem: "Driver butuh rute cepat mengantar murid pulang dari sekolah.",
          decompositionSolution: [
            "Detail diabaikan: Warna pagar rumah tetangga, kucing lewat, pohon mangga.",
            "Info penting dijaga: Titik jemput gerbang sekolah, jalur rute, titik rumah, & waktu tempuh."
          ]
        },
        {
          title: "Katalog Buku Perpustakaan",
          problem: "Mencari buku materi informatika di antara ribuan rak.",
          decompositionSolution: [
            "Detail diabaikan: Warna sampul buku, berat buku, jenis font cetakan.",
            "Info penting dijaga: Judul buku, nama pengarang, dan kode nomor rak."
          ]
        }
      ],
      literacyGuide: "Garis bawahi hanya fakta kunci penentu solusi; lewati kalimat basa-basi pengantar cerita."
    },

    {
      id: "algoritma",
      title: "Perancangan Algoritma",
      enTitle: "Algorithm Design",
      icon: "fa-route",
      badge: "Pilar 4",
      colorTheme: "purple",
      image3D: "assets/algoritma_3d.jpg?v=3.3",
      tagline: "Susun Langkah yang Teratur, Runtut, dan Tidak Ambigu",
      overview: "Perancangan algoritma adalah menyusun langkah-langkah kerja secara teratur, logis, jelas, dan berurutan dari awal sampai akhir untuk mencapai tujuan tertentu.",
      whyImportant: "Ide solusi yang bagus tidak akan berhasil jika urutan langkahnya salah atau membingungkan. Algoritma memastikan setiap tindakan dieksekusi secara tepat.",
      characteristics: [
        "Langkah tersusun secara kronologis dan logis (sekuensial).",
        "Instruksi jelas, pasti, dan tidak membingungkan (tidak ambigu).",
        "Pasti selesai dan tuntas setelah sejumlah langkah (berhingga)."
      ],
      realWorldCases: [
        {
          title: "Rutinitas Misi Pagi ke Sekolah",
          problem: "Sering panik dan terlambat masuk sekolah.",
          decompositionSolution: [
            "1. Bangun 05.30: Langsung rapikan tempat tidur.",
            "2. Mandi & Sarapan: Pakai seragam sekolah rapi.",
            "3. Cek Cuaca (IF/ELSE): JIKA hujan bawa payung, JIKA cerah langsung berangkat.",
            "4. Berangkat: Tiba di gerbang sekolah 06.45 sebelum bel berbunyi."
          ]
        },
        {
          title: "Cuci Tangan Higienis (WHO)",
          problem: "Mencegah kuman sebelum jajan di kantin sekolah.",
          decompositionSolution: [
            "1. Basahi tangan dengan air mengalir.",
            "2. Ratakan sabun di telapak & sela jari minimal 20 detik.",
            "3. Bilas hingga busa hilang lalu keringkan."
          ]
        }
      ],
      literacyGuide: "Perhatikan kata penghubung urutan kronologis seperti 'pertama', 'kemudian', 'setelah itu', 'jika... maka', dan 'terakhir'."
    }
  ],

  // 2. KAJIAN LITERASI MENDALAM: STUDI KASUS NYATA (HOTS TANPA PENILAIAN)
  literacyCases: [
    {
      id: "literasi-1",
      title: "Antrean Makan Siang & Sampah Plastik di Kantin Sekolah",
      category: "Kehidupan di Sekolah",
      readTime: "3 menit membaca",
      icon: "fa-utensils",
      colorTheme: "emerald",
      story: `Jam istirahat kedua di SMA hanya berdurasi 30 menit. Ratusan murid langsung menyerbu kantin sekolah untuk membeli makanan dan es teh manis. Akibatnya, antrean menjadi sangat panjang dan banyak murid baru sempat makan beberapa suap sebelum bel masuk berbunyi. Selain itu, tong sampah di depan kelas meluap penuh dengan gelas plastik sekali pakai.

Pengurus OSIS dan perwakilan kelas ingin mencari solusi cerdas: bagaimana agar murid bisa jajan dengan cepat tanpa antre berdesakan, sekaligus mengurangi tumpukan sampah plastik di sekolah?`,
      computationalBreakdown: {
        dekomposisi: {
          title: "1. Memecah Masalah Menjadi Bagian Kecil",
          description: "OSIS membagi masalah besar ini menjadi 3 hal penting: (a) Waktu jajan (kapan jam paling ramai di kantin?), (b) Kebiasaan wadah (kenapa murid jarang bawa tumbler dari rumah?), dan (c) Sistem pembayaran (antrean lama karena menunggu uang kembalian)."
        },
        pola: {
          title: "2. Melihat Kebiasaan yang Berulang",
          description: "Dari pengamatan seminggu, ditemukan pola jelas: 80% antrean menumpuk di 10 menit pertama setelah bel istirahat. Sampah plastik terbanyak berasal dari gelas es teh saset di 4 stan minuman favorit."
        },
        abstraksi: {
          title: "3. Memilih Info Penting & Mengabaikan Detail Hiasan",
          description: "OSIS hanya fokus pada dua data utama: lama waktu antre murid dan jumlah gelas plastik per hari. Mereka mengabaikan hal yang tidak penting, seperti merek makanan ringan atau warna sedotan."
        },
        algoritma: {
          title: "4. Menyusun Langkah Solusi yang Teratur",
          description: "OSIS membuat rencana aksi nyata:\n1. Ajak murid membawa tumbler dari rumah dan beri diskon Rp1.000 di kantin.\n2. Buka sistem pesan bareng per kelas sebelum bel agar makanan siap diambil.\n3. Sediakan kupon bayar atau uang pas agar tidak perlu menunggu kembalian.\n4. Timbang sampah plastik tiap Jumat untuk mengecek kemajuan."
        }
      },
      pillarQuestions: {
        dekomposisi: {
          pillarName: "Dekomposisi",
          icon: "fa-puzzle-piece",
          colorTheme: "blue",
          question: "Selain masalah antrean dan wadah tumbler, hal kecil apa lagi yang perlu dipecah jika kamu ingin mengajak pedagang kantin ikut bekerja sama?",
          hint: "Pikirkan modal pedagang untuk wadah makanan dan tempat cuci mangkuk/gelas.",
          sampleAnalysis: "Pecah menjadi 3 sub-masalah: (1) Modal pedagang: Biaya beralih dari plastik ke piring atau gelas guna-ulang, (2) Fasilitas: Lokasi cuci wadah makan yang bersih dan higienis di area kantin, dan (3) Alur murid: Tempat pengembalian piring dan gelas kotor setelah makan agar tidak berserakan di meja."
        },
        pola: {
          pillarName: "Pengenalan Pola",
          icon: "fa-shapes",
          colorTheme: "emerald",
          question: "Jika 80% murid menumpuk di 10 menit pertama istirahat, perubahan jadwal apa yang bisa dirancang sekolah agar kantin tidak padat di waktu yang sama?",
          hint: "Pikirkan pola pembagian waktu istirahat bergilir antar jenjang kelas (Kelas X, XI, XII).",
          sampleAnalysis: "Sekolah bisa menerapkan jadwal istirahat bergilir selang 10 menit: Kelas X istirahat pukul 11.45, Kelas XI pukul 11.55, dan Kelas XII pukul 12.05. Pola kerumunan tunggal yang tajam akan terbagi merata, antrean stan menjadi pendek, dan murid tidak perlu terburu-buru saat makan."
        },
        abstraksi: {
          pillarName: "Abstraksi",
          icon: "fa-filter",
          colorTheme: "amber",
          question: "Saat mencatat laporan sampah kantin tiap minggu, data apa yang wajib dicatat dan detail apa yang sebaiknya diabaikan?",
          hint: "Bedakan antara fakta penentu (berat sampah, jumlah gelas) dengan detail kemasan (merek/warna).",
          sampleAnalysis: "Data wajib dicatat: Berat total sampah plastik (kg) dan stan kantin yang menghasilkan sampah terbanyak. Data yang diabaikan: Gambar atau merek kemasan minuman, warna sedotan, dan bentuk kantong plastik karena tidak berpengaruh pada solusi pengurangan sampah."
        },
        algoritma: {
          pillarName: "Perancangan Algoritma",
          icon: "fa-route",
          colorTheme: "purple",
          question: "Buat aturan langkah cerdas (aturan JIKA - MAKA / IF-ELSE) di stan kantin untuk murid yang mau membeli es teh!",
          hint: "Gunakan kondisi jika murid membawa tumbler sendiri vs jika tidak membawa tumbler.",
          sampleAnalysis: "Alur Keputusan di Kasir Kantin:\n1. Murid memesan minuman.\n2. JIKA murid membawa tumbler sendiri MAKA:\n     Tuangkan es teh ke tumbler dan beri potongan harga Rp1.000.\n   JIKA TIDAK membawa tumbler MAKA:\n     Sajikan di gelas guna-ulang kantin dengan jaminan koin Rp2.000 (uang kembali saat gelas ditaruh di rak cuci).\n3. Minuman siap dinikmati tanpa menghasilkan sampah plastik baru!"
        }
      },
      criticalThought: "Bagaimana cara mengajak teman sekelasmu agar konsisten membawa tumbler sendiri dari rumah setiap hari?"
    },

    {
      id: "literasi-2",
      title: "Misi Berangkat Sekolah Tepat Waktu Tanpa Kena Poin Terlambat",
      category: "Rutinitas Harian Murid",
      readTime: "3 menit membaca",
      icon: "fa-bicycle",
      colorTheme: "blue",
      story: `Rian adalah murid kelas X yang rumahnya berjarak 6 km dari sekolah. Gerbang sekolah ditutup tepat pukul 06.45 oleh guru piket. Murid yang terlambat 1 menit saja akan dicatat poin pelanggarannya dan harus menunggu di luar gerbang sampai upacara atau sesi pembiasaan pagi selesai.

Rian memiliki beberapa pilihan perjalanan: naik angkot, pesan ojek online, atau bersepeda/nebeng motor. Namun di jalan ada pasar tumpah pagi hari, lampu merah simpang empat, dan palang pintu kereta api yang sering tutup. Rian ingin menyusun strategi agar selalu tiba di sekolah pukul 06.35 dengan tenang dan aman.`,
      computationalBreakdown: {
        dekomposisi: {
          title: "1. Membagi Waktu Pagi Menjadi Bagian Jelas",
          description: "Rian memecah waktu paginya: bersiap di rumah (mandi & seragam: 20 menit), waktu tunggu kendaraan (5-10 menit), waktu tempuh di jalan (15-20 menit), dan jalan dari gerbang ke kelas (3 menit)."
        },
        pola: {
          title: "2. Mengenali Pola Kemacetan & Jadwal Jalanan",
          description: "Rian mencatat pola penting: Hari Senin jalanan selalu macet 2 kali lipat karena ada upacara serentak. Kereta api selalu melintas di persimpangan pukul 06.20 WIB, dan jika hujan, ojek online lebih susah didapat."
        },
        abstraksi: {
          title: "3. Memilih Jalur Penting & Mengabaikan Hal Lain",
          description: "Saat mengecek peta di HP, Rian hanya melihat garis jalan (hijau/merah macet) dan perkiraan menit sampai. Rian mengabaikan foto toko, warung, atau pemandangan pohon di pinggir jalan."
        },
        algoritma: {
          title: "4. Membuat Aturan Keputusan Berangkat",
          description: "Rian menyusun aturan sederhana:\n- JIKA hari Senin atau cuaca mendung/hujan: Berangkat pukul 06.00 lewat jalan lingkar perumahan.\n- JIKA hari Selasa-Jumat dan cuaca cerah: Berangkat pukul 06.15 lewat jalan utama.\n- JIKA ojol tidak dapat dalam 5 menit: Langsung jalan ke pangkalan angkot terdekat."
        }
      },
      pillarQuestions: {
        dekomposisi: {
          pillarName: "Dekomposisi",
          icon: "fa-puzzle-piece",
          colorTheme: "blue",
          question: "Bagaimana cara memisahkan total waktu perjalanan pagi Rian menjadi waktu yang pasti (tetap) dan waktu yang tidak pasti (bisa berubah)?",
          hint: "Bandingkan waktu jalan kaki yang pasti dengan waktu menunggu angkot atau lampu merah.",
          sampleAnalysis: "Waktu Pasti (Tetap): Waktu jalan kaki dari rumah ke halte (5 menit) dan dari gerbang sekolah ke meja kelas (3 menit). Waktu Tidak Pasti (Berubah): Waktu tunggu angkot/ojol tiba (3-10 menit), durasi palang pintu kereta api menutup (5-8 menit), dan antrean macet di pasar tumpah."
        },
        pola: {
          pillarName: "Pengenalan Pola",
          icon: "fa-shapes",
          colorTheme: "emerald",
          question: "Mengapa jalanan menuju sekolah selalu lebih macet parah pada hari Senin pagi pukul 06.30 WIB dibanding hari lainnya?",
          hint: "Hubungkan dengan jam upacara bendera sekolah dan jam masuk kantor awal pekan.",
          sampleAnalysis: "Hari Senin memiliki pola khusus: Seluruh sekolah dan perkantoran mewajibkan upacara/apel awal pekan serentak tepat pukul 07.00. Akibatnya, ribuan orang keluar rumah pada jam yang persis sama (06.15–06.30 WIB), ditambah pedagang pasar yang baru membongkar barang dagangan di bahu jalan."
        },
        abstraksi: {
          pillarName: "Abstraksi",
          icon: "fa-filter",
          colorTheme: "amber",
          question: "Mengapa sketsa jalan berupa garis sederhana lebih membantu Rian memilih jalan tikus dibanding foto satelit Google Maps?",
          hint: "Pikirkan kecepatan otak memproses informasi saat terburu-buru di jalan.",
          sampleAnalysis: "Foto satelit menampilkan ribuan detail visual yang tidak dibutuhkan (atap rumah, warna genteng, pohon rimbun) sehingga membuat mata bingung. Sketsa garis sederhana hanya menampilkan persimpangan jalan dan arah belok, sehingga Rian bisa memutuskan rute dalam 2 detik."
        },
        algoritma: {
          pillarName: "Perancangan Algoritma",
          icon: "fa-route",
          colorTheme: "purple",
          question: "Susunlah alur langkah pagi teratur (pukul 05.30 sampai 06.40 WIB) agar seorang murid tidak panik dan pasti tiba sebelum gerbang sekolah dikunci!",
          hint: "Tuliskan langkah bangun, cek cuaca, pilih kendaraan, dan target waktu tiba.",
          sampleAnalysis: "1. Pukul 05.30: Bangun, mandi, dan pakai seragam sekolah rapi.\n2. Pukul 05.50: Sarapan dan masukkan buku pelajaran sesuai jadwal hari ini.\n3. Pukul 06.05: Cek cuaca. Jika hujan, langsung pesan ojek dengan jas hujan atau jalan ke halte lebih awal.\n4. Pukul 06.15: Mulai melaju di jalan.\n5. Pukul 06.35: Tiba di depan sekolah dengan tenang dan sempat menyapa teman sebelum bel."
        }
      },
      criticalThought: "Bagaimana cara membuat rute cadangan jika jalan utama yang biasa kamu lewati tiba-tiba ditutup karena perbaikan jalan?"
    },

    {
      id: "literasi-3",
      title: "Kerja Kelompok Bikin Video Tugas & Manajemen Waktu Murid",
      category: "Belajar & Kerja Sama Murid",
      readTime: "3 menit membaca",
      icon: "fa-users-gear",
      colorTheme: "purple",
      story: `Kelompok Salsa (beranggotakan 4 murid kelas X) mendapat tugas Informatika untuk membuat video presentasi 3 menit tentang pemanfaatan internet sehat di sekolah. Waktu pengumpulan tugas tinggal 4 hari lagi.

Tiap anggota punya kesibukan berbeda: ada yang ikut ekskul futsal, ada yang aktif di Pramuka, dan ada yang harus les sore. Pada tugas kelompok sebelumnya, mereka sempat bertengkar karena pekerjaan menumpuk di satu orang saja sementara yang lain hanya "numpang nama". Salsa ingin menerapkan 4 pilar berpikir komputasional agar kerja kelompok kali ini adil, cepat selesai, dan hasilnya bagus.`,
      computationalBreakdown: {
        dekomposisi: {
          title: "1. Membagi Tugas Besar Menjadi 4 Bagian Adil",
          description: "Salsa memecah proyek video menjadi 4 tugas mandiri yang jelas: (1) Menyusun naskah & poin materi, (2) Rekam video & audio pakai kamera HP, (3) Edit video & tambah teks di aplikasi CapCut, (4) Cek hasil akhir bersama & kumpulkan ke guru."
        },
        pola: {
          title: "2. Mengenali Pola Waktu & Hambatan Kerja Kelompok",
          description: "Salsa melihat pola dari pengalaman lalu: bagian yang paling rawan tertunda adalah proses edit video. Jika naskahnya terlambat dibuat, seluruh proses rekaman dan editing akan tertunda dan berujung lembur tengah malam."
        },
        abstraksi: {
          title: "3. Memilih Ide Utama & Menghapus Bagian Rumit",
          description: "Karena durasi video dibatasi 3 menit, mereka hanya memasukkan 3 tips internet sehat yang paling sering dihadapi murid SMA. Teori panjang yang membosankan dan animasi yang tidak perlu dihilangkan agar video tetap padat dan menarik."
        },
        algoritma: {
          title: "4. Membuat Jadwal Kerja 4 Hari yang Jelas",
          description: "Salsa menyusun alur kerja harian:\n- Hari 1: Tulis naskah bersama di Google Docs (30 menit).\n- Hari 2: Rekam video sepulang sekolah di teras kelas.\n- Hari 3: Editor menyatukan klip dan menambahkan teks rangkuman.\n- Hari 4: Tonton bersama selama 5 menit, perbaiki jika ada salah ketik, lalu upload ke Google Classroom."
        }
      },
      pillarQuestions: {
        dekomposisi: {
          pillarName: "Dekomposisi",
          icon: "fa-puzzle-piece",
          colorTheme: "blue",
          question: "Bagaimana cara membagi peran dalam kelompok 4 orang agar setiap murid bekerja sesuai keahliannya dan tidak ada yang hanya numpang nama?",
          hint: "Bagi tugas sesuai peran: pembuat naskah, pembicara depan kamera, perekam kamera, dan editor video.",
          sampleAnalysis: "Pembagian Peran Jelas: Murid 1 bertugas merangkum materi dan menulis naskah teks. Murid 2 dan 3 bertindak sebagai pembicara di video dengan suara lantang. Murid 4 bertugas memegang kamera HP dan mengedit video di aplikasi HP. Semua orang memiliki tanggung jawab nyata dan nilai yang adil!"
        },
        pola: {
          pillarName: "Pengenalan Pola",
          icon: "fa-shapes",
          colorTheme: "emerald",
          question: "Mengapa tugas kelompok sering berantakan jika dikerjakan pada malam terakhir sebelum batas pengumpulan (sistem kebut semalam)?",
          hint: "Pikirkan masalah teknis yang sering terjadi: memori HP penuh, sinyal lemot, atau editor mengantuk.",
          sampleAnalysis: "Sistem kebut semalam memiliki pola kegagalan berulang: (1) Anggota kelompok sudah mengantuk sehingga banyak salah ketik naskah, (2) Kuota internet atau sinyal tiba-tiba lemot saat proses upload video, dan (3) Jika ada bagian yang keliru, tidak ada waktu tersisa untuk merekam ulang."
        },
        abstraksi: {
          pillarName: "Abstraksi",
          icon: "fa-filter",
          colorTheme: "amber",
          question: "Dalam membuat video edukasi 3 menit, informasi apa yang harus ditampilkan di layar dan apa yang sebaiknya dibuang?",
          hint: "Ingat aturan abstraksi: penonton malas membaca teks panjang di layar video.",
          sampleAnalysis: "Wajib ditampilkan: Poin-poin kata kunci singkat, contoh nyata di sekolah, dan suara pembicara yang jelas. Sebaiknya dibuang: Teks paragraf panjang yang menutupi layar, transisi video berlebihan yang bikin pusing, dan musik latar yang terlalu keras hingga suara pembicara tenggelam."
        },
        algoritma: {
          pillarName: "Perancangan Algoritma",
          icon: "fa-route",
          colorTheme: "purple",
          question: "Rancang aturan 3 langkah pengecekan mutu (Quality Control) sebelum video tugas diunggah ke Google Classroom!",
          hint: "Susun langkah cek suara, cek tulisan nama anggota kelompok, dan cek durasi video.",
          sampleAnalysis: "Aturan Cek Sebelum Kumpul:\n1. Cek Durasi: Pastikan panjang video pas (antara 2,5 sampai 3 menit).\n2. Cek Identitas: Pastikan nama dan nomor absen seluruh anggota kelompok tertulis lengkap di awal video.\n3. Cek Audio: Putar video dan pastikan suara terdengar jelas tanpa jeda mendadak. Jika semua centang hijau, kirim tugas tepat waktu!"
        }
      },
      criticalThought: "Bagaimana jika ada satu anggota kelompok yang mendadak sakit di hari rekaman? Langkah apa yang harus segera diambil agar tugas tetap selesai tepat waktu?"
    }
  ],

  // 3. GLOSARIUM KOSAKATA LITERASI 4 PILAR BERPIKIR KOMPUTASIONAL
  glossary: [
    {
      term: "Abstraksi (Abstraction)",
      category: "Pilar 3",
      definition: "Keterampilan memilih dan memfokuskan perhatian pada aspek-aspek inti yang penting, serta menyisihkan detail-detail tambahan yang tidak mempengaruhi hasil pemecahan masalah."
    },
    {
      term: "Algoritma (Algorithm)",
      category: "Pilar 4",
      definition: "Serangkaian instruksi atau prosedur langkah demi langkah yang teratur, logis, tidak ambigu, dan memiliki akhir yang pasti untuk menyelesaikan suatu tujuan spesifik."
    },
    {
      term: "Beban Kognitif (Cognitive Load)",
      category: "Konsep Belajar",
      definition: "Jumlah upaya mental yang dibutuhkan oleh memori kerja otak untuk memproses informasi dalam satu waktu. Dekomposisi membantu menurunkan beban kognitif ini."
    },
    {
      term: "Berpikir Komputasional (Computational Thinking)",
      category: "Fondasi",
      definition: "Proses berpikir dalam memformulasikan persoalan dan solusinya secara terstruktur sehingga dapat dieksekusi secara efektif oleh manusia, mesin komputer, atau kombinasi keduanya."
    },
    {
      term: "Dekomposisi (Decomposition)",
      category: "Pilar 1",
      definition: "Teknik membedah atau memecah masalah yang rumit dan besar menjadi bagian-bagian sub-masalah yang lebih sederhana, kecil, dan mudah ditangani satu per satu."
    },
    {
      term: "Generalisasi Pola (Pattern Generalization)",
      category: "Pilar 2",
      definition: "Menyimpulkan aturan atau rumus umum dari berbagai pola yang teramati, sehingga solusi tersebut dapat dipakai kembali untuk masalah serupa di masa depan."
    },
    {
      term: "Instruksi Sekuensial (Sequential)",
      category: "Pilar 4",
      definition: "Pelaksanaan perintah secara berurutan langkah demi langkah dari awal hingga akhir tanpa ada langkah yang melompat secara sembarangan."
    },
    {
      term: "Model Representasi",
      category: "Pilar 3",
      definition: "Bentuk tiruan sederhana dari kenyataan (seperti bagan alur, graf rute, atau diagram tabel) hasil dari proses abstraksi informasi."
    },
    {
      term: "Pengenalan Pola (Pattern Recognition)",
      category: "Pilar 2",
      definition: "Kemampuan mengidentifikasi kesamaan karakteristik, tren, siklus waktu, atau keteraturan berulang yang ada di dalam sekumpulan data atau situasi."
    },
    {
      term: "Percabangan Logika (Condition / IF-THEN)",
      category: "Pilar 4",
      definition: "Penentuan jalur langkah dalam algoritma berdasarkan suatu kondisi benar atau salah (misalnya: JIKA hujan MAKA bawa payung)."
    },
    {
      term: "Sub-masalah (Sub-problem)",
      category: "Pilar 1",
      definition: "Bagian kecil dari masalah utama yang dihasilkan melalui proses dekomposisi agar dapat dianalisis dan diselesaikan secara lebih fokus."
    },
    {
      term: "Tidak Ambigu (Definiteness)",
      category: "Pilar 4",
      definition: "Karakteristik instruksi algoritma yang memiliki makna tunggal, jelas, tegas, dan tidak menimbulkan kebingungan atau multi-tafsir."
    }
  ]
};
