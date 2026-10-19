// Mengambil elemen form login dari HTML
const formLogin = document.getElementById("formLogin");

// Mengambil input username atau email
const username = document.getElementById("username");

// Mengambil input password
const password = document.getElementById("password");

// Mengambil tempat untuk menampilkan pesan validasi
const pesan = document.getElementById("pesan");

// Menjalankan fungsi ketika tombol login ditekan
formLogin.addEventListener("submit", function(event) {

    // Mencegah halaman dimuat ulang saat form dikirim
    event.preventDefault();

    // Mengambil username dan menghapus spasi di awal dan akhir
    const user = username.value.trim();

    // Mengambil isi password yang dimasukkan
    const pass = password.value;

    // Menghapus pesan validasi sebelumnya
    pesan.innerHTML = "";

    // Memeriksa apakah username atau email kosong
    if (user === "") {
        tampilkanPesan(
            "Username atau email wajib diisi.",
            "danger"
        );

        // Mengarahkan kursor ke input username
        username.focus();

        // Menghentikan pemeriksaan selanjutnya
        return;
    }

    // Memeriksa format email jika input mengandung tanda @
    if (user.includes("@") &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user)) {

        tampilkanPesan(
            "Format email tidak valid.",
            "danger"
        );

        // Mengarahkan kursor ke input username atau email
        username.focus();

        // Menghentikan pemeriksaan selanjutnya
        return;
    }

    // Memeriksa apakah password kosong
    if (pass === "") {
        tampilkanPesan(
            "Password wajib diisi.",
            "danger"
        );

        // Mengarahkan kursor ke input password
        password.focus();

        // Menghentikan pemeriksaan selanjutnya
        return;
    }

    // Memeriksa apakah password kurang dari 8 karakter
    if (pass.length < 8) {
        tampilkanPesan(
            "Password harus minimal 8 karakter.",
            "danger"
        );

        // Mengarahkan kursor ke input password
        password.focus();

        // Menghentikan pemeriksaan selanjutnya
        return;
    }

    // Menampilkan pesan jika semua validasi berhasil
    tampilkanPesan(
        "Validasi berhasil! Form memenuhi ketentuan. Ini bukan login akun sebenarnya.",
        "success"
    );

});

// Fungsi untuk menampilkan pesan validasi
function tampilkanPesan(teks, jenis) {

    // Membuat kotak pesan menggunakan komponen Bootstrap
    pesan.innerHTML = `
        <div class="alert alert-${jenis}" role="alert">
            ${teks}
        </div>
    `;
}