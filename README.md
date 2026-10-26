# SmartFinder

SmartFinder adalah proyek website untuk membantu pengguna menemukan partner belajar dan menyampaikan ajakan belajar.

## Fitur

- Halaman utama SmartFinder.
- Halaman pencarian partner belajar.
- Filter partner berdasarkan kata kunci dan pilihan filter yang tersedia.
- Halaman ajakan belajar dengan validasi formulir.

> Catatan: Fitur yang tampil bergantung pada file HTML, CSS, dan JavaScript yang disertakan dalam folder proyek.

## Struktur Folder

Pastikan susunan folder proyek kurang lebih seperti berikut:

```text
SmartFinder/
├── app.py
├── index.html
├── Jalankan SmartFinder.bat
├── README.md
├── assets/
│   └── css/
│       └── style.css
├── js/
│   ├── app.js
│   ├── partner.js
│   └── validasi.js
└── pages/
    ├── cari-partner.html
    └── ajakan-belajar.html
```

## Persyaratan

Untuk menjalankan SmartFinder secara lokal, siapkan:

- Windows.
- Python 3 yang terpasang dan dapat dijalankan melalui perintah `py` atau `python`.
- Browser, misalnya Google Chrome atau Microsoft Edge.
- Seluruh file proyek SmartFinder.

Website menggunakan server HTTP sederhana dari pustaka bawaan Python, sehingga tidak memerlukan instalasi framework tambahan.

## Cara Menjalankan SmartFinder

### Opsi 1: Menggunakan file BAT (disarankan)

1. Jika proyek diterima dalam bentuk `.rar` atau `.zip`, ekstrak terlebih dahulu.
2. Buka folder hasil ekstraksi `SmartFinder`.
3. Pastikan `app.py`, `index.html`, dan `Jalankan SmartFinder.bat` berada di folder utama yang sama.
4. Klik dua kali `Jalankan SmartFinder.bat`.
5. Jika browser tidak terbuka otomatis, buka browser dan kunjungi:

   **http://localhost:8000**

6. Biarkan jendela terminal tetap terbuka selama website digunakan.
7. Untuk menghentikan server, tekan `Ctrl+C` pada jendela terminal atau tutup jendela tersebut.

### Opsi 2: Menggunakan Command Prompt

1. Ekstrak proyek dan buka folder `SmartFinder`.
2. Klik kolom alamat folder di File Explorer.
3. Ketik `cmd`, lalu tekan Enter.
4. Jalankan perintah berikut:
   py app.py

   Jika perintah `py` tidak tersedia, coba:
   python app.py

5. Buka **http://localhost:8000** di browser.

## Pemecahan Masalah

### Pesan “Python tidak ditemukan”

Pastikan Python 3 sudah terpasang. Saat instalasi Python di Windows, aktifkan opsi **Add Python to PATH** jika tersedia. Setelah itu, buka terminal baru dan coba `py --version` atau `python --version`.

### Port 8000 sedang digunakan

Tutup server SmartFinder lain yang masih berjalan, lalu coba lagi. Jika port tetap digunakan, ubah nilai `PORT` di `app.py` ke port lain, misalnya `8001`, kemudian buka alamat yang sesuai, misalnya `http://localhost:8001`.

### Halaman tidak ditemukan atau file tidak tampil

Pastikan `app.py` dan `index.html` berada di folder utama SmartFinder serta folder `assets`, `js`, dan `pages` tidak terpisah dari proyek. Periksa juga nama file dan jalur relatif pada HTML.

### Website berhenti saat terminal ditutup

Itu normal. Server berjalan selama proses Python aktif. Jalankan kembali `Jalankan SmartFinder.bat` jika ingin membuka website lagi.

## Teknologi

- HTML
- CSS
- JavaScript
- Python 3 (`http.server`)

Dibuat untuk proyek SmartFinder.
