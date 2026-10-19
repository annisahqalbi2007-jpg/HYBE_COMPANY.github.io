// 1. DATA INFORMASI ARTIS HYBE
const dataArtis = {
    // Data grup BTS
    "BTS": {
        nama: "BTS",
        namaLain: "Bangtan Sonyeondan / Beyond the Scene",
        gambar: "Gambar/BTS.jpg",
        debut: "2013",
        agensi: "BIGHIT MUSIC",
        anggota: "RM, Jin, SUGA, j-hope, Jimin, V, Jung Kook",
        deskripsi: "BTS adalah grup musik asal Korea Selatan yang debut pada tahun 2013 di bawah Big Hit Entertainment, yang kini dikenal sebagai BIGHIT MUSIC di bawah HYBE.",
        tambahan: "BTS dikenal melalui musik, penampilan panggung, dan karya yang mengangkat tema pertumbuhan diri, persahabatan, serta kehidupan. Grup ini memiliki penggemar dari berbagai negara.",
        karya: [
            ["Dynamite", "Lagu pop berbahasa Inggris yang dirilis pada 2020."],
            ["Butter", "Lagu pop yang dirilis pada 2021 dan memiliki irama yang ceria."],
            ["Spring Day", "Lagu yang dikenal dengan tema kerinduan dan kenangan."]
        ]
    },

    // Data grup TXT
    "TXT": {
        nama: "TOMORROW X TOGETHER (TXT)",
        namaLain: "Tomorrow X Together",
        gambar: "Gambar/TXT.jpg",
        debut: "2019",
        agensi: "BIGHIT MUSIC",
        anggota: "Soobin, Yeonjun, Beomgyu, Taehyun, Huening Kai",
        deskripsi: "TXT adalah grup musik asal Korea Selatan yang debut pada tahun 2019 di bawah BIGHIT MUSIC.",
        tambahan: "TXT dikenal melalui lagu-lagu yang mengangkat tema pertumbuhan, persahabatan, mimpi, dan kehidupan anak muda.",
        karya: [
            ["Blue Hour", "Lagu pop dengan nuansa ceria yang dirilis pada 2020."],
            ["0X1=LOVESONG", "Lagu tentang cinta dan perasaan anak muda."],
            ["Deja Vu", "Lagu yang dirilis pada 2024 dan memiliki melodi yang menarik."]
        ]
    },

    // Data grup ENHYPEN
    "ENHYPEN": {
        nama: "ENHYPEN",
        namaLain: "Connect, Discover, Grow",
        gambar: "Gambar/ENHYPEN.jpg",
        debut: "2020",
        agensi: "BELIFT LAB",
        anggota: "Jungwon, Jay, Jake, Sunghoon, Sunoo, Ni-ki",
        deskripsi: "ENHYPEN adalah grup musik asal Korea Selatan yang debut pada tahun 2020 di bawah BELIFT LAB.",
        tambahan: "ENHYPEN dikenal dengan konsep musik yang kuat, penampilan panggung yang menarik, dan karya yang memiliki alur cerita khas.",
        karya: [
            ["Given-Taken", "Lagu debut ENHYPEN yang dirilis pada 2020."],
            ["Drunk-Dazed", "Lagu energik yang dirilis pada 2021."],
            ["Bite Me", "Lagu yang dirilis pada 2023."]
        ]
    },

    // Data grup SEVENTEEN
    "SEVENTEEN": {
        nama: "SEVENTEEN",
        namaLain: "SVT",
        gambar: "Gambar/SEVENTEEN.jpg",
        debut: "2015",
        agensi: "PLEDIS Entertainment",
        anggota: "S.Coups, Jeonghan, Joshua, Jun, Hoshi, Wonwoo, Woozi, DK, Mingyu, The8, Seungkwan, Vernon, Dino",
        deskripsi: "SEVENTEEN adalah grup musik asal Korea Selatan yang debut pada tahun 2015 di bawah PLEDIS Entertainment.",
        tambahan: "SEVENTEEN dikenal karena keterlibatan anggotanya dalam pembuatan musik dan koreografi serta penampilan panggung yang kompak.",
        karya: [
            ["Very Nice", "Lagu populer yang dirilis pada 2016."],
            ["Don't Wanna Cry", "Lagu yang dirilis pada 2017."],
            ["Super", "Lagu yang dirilis pada 2023."]
        ]
    },

    // Data grup LE SSERAFIM
    "LE SSERAFIM": {
        nama: "LE SSERAFIM",
        namaLain: "I'm Fearless",
        gambar: "Gambar/LE SSERAFIM.jpg",
        debut: "2022",
        agensi: "SOURCE MUSIC",
        anggota: "Kim Chaewon, Sakura, Huh Yunjin, Kazuha, Hong Eunchae",
        deskripsi: "LE SSERAFIM adalah grup musik asal Korea Selatan yang debut pada tahun 2022 di bawah SOURCE MUSIC.",
        tambahan: "LE SSERAFIM mengusung konsep keberanian, kepercayaan diri, dan semangat menghadapi tantangan.",
        karya: [
            ["FEARLESS", "Lagu debut yang dirilis pada 2022."],
            ["ANTIFRAGILE", "Lagu tentang menjadi lebih kuat saat menghadapi tantangan."],
            ["UNFORGIVEN", "Lagu yang dirilis pada 2023."]
        ]
    },

    // Data grup ILLIT
    "ILLIT": {
        nama: "ILLIT",
        namaLain: "I Will Be It",
        gambar: "Gambar/ILLIT.jpg",
        debut: "2024",
        agensi: "BELIFT LAB",
        anggota: "Yunah, Minju, Moka, Wonhee, Iroha",
        deskripsi: "ILLIT adalah grup musik asal Korea Selatan yang debut pada tahun 2024 di bawah BELIFT LAB.",
        tambahan: "ILLIT dikenal melalui musik bernuansa segar dan konsep yang menggambarkan dunia anak muda.",
        karya: [
            ["Magnetic", "Lagu populer ILLIT yang dirilis pada 2024."],
            ["Lucky Girl Syndrome", "Lagu dengan nuansa ceria dan optimistis."],
            ["Cherish (My Love)", "Lagu yang dirilis pada 2024."]
        ]
    },

     // Data grup CORTIS
    "CORTIS": {
        nama: "CORTIS",
        namaLain: "Color Outside The Lines",
        gambar: "Gambar/CORTIS.jpg",
        debut: "2025",
        agensi: "BIGHIT MUSIC",
        anggota: "Martin, James, Juhoon, Seonghyeon, Keonho",
        deskripsi: "CORTIS adalah grup musik asal Korea Selatan di bawah BIGHIT MUSIC, bagian dari HYBE.",
        tambahan: "CORTIS dikenal dengan keterlibatan anggotanya dalam proses kreatif musik dan konten visual.",
        karya: [
            ["What You Want", "Lagu dari CORTIS."],
            ["GO!", "Lagu dari CORTIS."],
            ["COLOR OUTSIDE THE LINES", "Album mini debut CORTIS."]
        ]
    },
    
    // Data grup NewJeans
    "NEWJEANS": {
        nama: "NewJeans",
        namaLain: "NJZ",
        gambar: "Gambar/NEWJEANS.jpg",
        debut: "2022",
        agensi: "ADOR",
        anggota: "Minji, Hanni, Danielle, Haerin, Hyein",
        deskripsi: "NewJeans adalah grup perempuan Korea Selatan yang debut pada tahun 2022 di bawah ADOR.",
        tambahan: "NewJeans dikenal melalui musik pop dengan nuansa segar serta lagu-lagu seperti Attention, Hype Boy, dan Ditto.",
        karya: [
            ["Attention", "Lagu debut NewJeans yang dirilis pada 2022."],
            ["Hype Boy", "Lagu populer dengan melodi yang mudah diingat."],
            ["Ditto", "Lagu yang dirilis pada 2022."]
        ]
    },

    // Data solois Lee Hyun
    "LEE HYUN": {
        nama: "Lee Hyun",
        namaLain: "이현",
        gambar: "Gambar/LEE HYUN.jpg",
        debut: "2007",
        agensi: "BIGHIT MUSIC",
        anggota: "Solois",
        deskripsi: "Lee Hyun adalah penyanyi Korea Selatan yang dikenal melalui aktivitas solonya serta pernah menjadi anggota grup 8Eight dan Homme.",
        tambahan: "Lee Hyun memiliki perjalanan karier yang berkaitan dengan Big Hit Entertainment dan dikenal melalui karya vokalnya.",
        karya: [
            ["You Are the Best of My Life", "Salah satu lagu solo Lee Hyun."],
            ["Will You Come?", "Karya musik Lee Hyun."],
            ["With You", "Karya musik Lee Hyun."]
        ]
    },
    
    // Data grup BOYNEXTDOOR
    "BOYNEXTDOOR": {
        nama: "BOYNEXTDOOR",
        namaLain: "BND",
        gambar: "Gambar/BOYNEXTDOOR.jpg",
        debut: "2023",
        agensi: "KOZ ENTERTAINMENT",
        anggota: "Sungho, Riwoo, Jaehyun, Taesan, Leehan, Woonhak",
        deskripsi: "BOYNEXTDOOR adalah boy group Korea Selatan yang debut pada 30 Mei 2023 di bawah KOZ ENTERTAINMENT.",
        tambahan: "BOYNEXTDOOR dikenal melalui lagu-lagu yang menceritakan kehidupan sehari-hari, perasaan, dan pengalaman anak muda.",
        karya: [
            ["One and Only", "Salah satu lagu debut BOYNEXTDOOR."],
            ["But I Like You", "Lagu yang menggambarkan perasaan suka kepada seseorang."],
            ["Earth, Wind & Fire", "Lagu dengan irama energik yang dirilis pada 2024."]
        ]
    },

    // Data grup &TEAM
    "&TEAM": {
        nama: "&TEAM",
        namaLain: "Enteam",
        gambar: "Gambar/&TEAM.jpg",
        debut: "2022",
        agensi: "HYBE LABELS JAPAN",
        anggota: "EJ, Fuma, K, Nicholas, Yuma, Jo, Harua, Taki, Maki",
        deskripsi: "&TEAM adalah grup global yang debut pada 7 Desember 2022 di bawah HYBE LABELS JAPAN.",
        tambahan: "&TEAM memiliki sembilan anggota dan membawa konsep persatuan, koneksi, serta kerja sama dalam perjalanan musik mereka.",
        karya: [
            ["Under the skin", "Lagu yang menjadi bagian dari perjalanan debut &TEAM."],
            ["Scent of you", "Lagu dari album debut First Howling: ME."],
            ["Firework", "Lagu &TEAM yang dirilis pada 2023."]
        ]
    },

    // Data grup TWS
    "TWS": {
        nama: "TWS",
        namaLain: "Twenty Four Seven With Us",
        gambar: "Gambar/TWS.jpg",
        debut: "2024",
        agensi: "PLEDIS ENTERTAINMENT",
        anggota: "Shinyu, Dohoon, Youngjae, Hanjin, Jihoon, Kyungmin",
        deskripsi: "TWS adalah boy group Korea Selatan yang debut pada 22 Januari 2024 di bawah PLEDIS ENTERTAINMENT.",
        tambahan: "TWS dikenal melalui konsep musik yang segar dan lagu-lagu yang menggambarkan persahabatan serta kehidupan anak muda.",
        karya: [
            ["Plot Twist", "Lagu debut TWS yang dirilis pada 2024."],
            ["If I'm S, Can You Be My N?", "Lagu TWS yang dirilis pada 2024."],
            ["hey! hey!", "Lagu TWS yang dirilis pada 2024."]
        ]
    }
};

// 2. MENGAMBIL PILIHAN DARI URL
const parameterURL = new URLSearchParams(window.location.search);
const jenisHalaman = parameterURL.get("jenis");

// Mengambil bagian HTML
const kontenDetail = document.getElementById("kontenDetail");
const bagianKarya = document.getElementById("bagianKarya");
const kontenAgensi = document.getElementById("kontenAgensi");

// 3. MENENTUKAN HALAMAN YANG DITAMPILKAN
if (jenisHalaman === "agensi") {

    // Menampilkan halaman Detail Agensi
    document.title = "HYBE Universe | Detail Agensi";

    kontenDetail.hidden = true;
    bagianKarya.hidden = true;
    kontenAgensi.hidden = false;

} else {

    // Menampilkan halaman Detail Artis
    kontenAgensi.hidden = true;

    const pilihan = (
        parameterURL.get("artis") || "BTS"
    ).trim().toUpperCase();

    const artis = dataArtis[pilihan] || dataArtis["BTS"];

    // Mengubah judul tab browser
    document.title = "HYBE Universe | Detail " + artis.nama;

    // Menampilkan foto artis
    document.getElementById("gambarArtis").src = artis.gambar;
    document.getElementById("gambarArtis").alt ="Foto " + artis.nama;

    // Menampilkan informasi artis
    document.getElementById("namaArtis").textContent = artis.nama;
    document.getElementById("namaLain").textContent = artis.namaLain;
    document.getElementById("deskripsiArtis").textContent = artis.deskripsi;
    document.getElementById("deskripsiTambahan").textContent = artis.tambahan;
    document.getElementById("negaraArtis").textContent ="Negara asal: Korea Selatan";
    document.getElementById("debutArtis").textContent ="Debut: " + artis.debut;
    document.getElementById("agensiArtis").textContent ="Label: " + artis.agensi;
    document.getElementById("anggotaArtis").textContent ="Anggota: " + artis.anggota;

    // Menampilkan bagian detail artis
    kontenDetail.hidden = false;
    bagianKarya.hidden = false;

    // Menampilkan daftar karya artis
    const daftarKarya = document.getElementById("daftarKarya");
    daftarKarya.innerHTML = "";

    artis.karya.forEach(function(karya) {
        daftarKarya.innerHTML += `
            <div class="col-md-4">
                <div class="info-card">
                    <h4>${karya[0]}</h4>
                    <p>${karya[1]}</p>
                </div>
            </div>
        `;
    });
}

// Mengatur menu aktif sesuai halaman yang dibuka
const menuArtis = document.getElementById("menuArtis");
const menuAgensi = document.getElementById("menuAgensi");
const parameterMenu = new URLSearchParams(window.location.search);

if (parameterMenu.get("jenis") === "agensi") {
    menuAgensi.classList.add("active");
    menuArtis.classList.remove("active");
} else {
    menuArtis.classList.add("active");
    menuAgensi.classList.remove("active");
}