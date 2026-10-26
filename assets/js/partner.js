```javascript
// ======================================
// SMARTFINDER - PARTNER.JS
// Fitur pencarian dan filter partner
// ======================================

document.addEventListener("DOMContentLoaded", function () {
    // Mengambil elemen HTML
    const searchInput = document.getElementById("searchName");
    const subjectFilter = document.getElementById("filterSubject");
    const methodFilter = document.getElementById("filterMethod");
    const resetButton = document.getElementById("resetButton");
    const resultCount = document.getElementById("resultCount");
    const emptyMessage = document.getElementById("emptyMessage");

    const partnerCards = Array.from(
        document.querySelectorAll(".partner-card")
    );

    // Pastikan semua elemen yang diperlukan tersedia
    if (
        !searchInput ||
        !subjectFilter ||
        !methodFilter ||
        !resetButton ||
        !resultCount ||
        !emptyMessage ||
        partnerCards.length === 0
    ) {
        console.error(
            "SmartFinder: Elemen pencarian atau kartu partner tidak ditemukan."
        );
        return;
    }

    // Fungsi untuk mencari dan memfilter partner
    function filterPartners() {
        const keyword = searchInput.value.trim().toLowerCase();
        const selectedSubject = subjectFilter.value.toLowerCase();
        const selectedMethod = methodFilter.value.toLowerCase();

        let visibleCount = 0;

        partnerCards.forEach(function (card) {
            const name = (card.dataset.name || "").toLowerCase();
            const subject = (card.dataset.subject || "").toLowerCase();
            const method = (card.dataset.method || "").toLowerCase();

            // Memeriksa kecocokan nama
            const matchesName = name.includes(keyword);

            // Memeriksa kecocokan mata pelajaran
            const matchesSubject =
                selectedSubject === "" ||
                subject === selectedSubject;

            // Memeriksa kecocokan metode belajar
            const matchesMethod =
                selectedMethod === "" ||
                method === selectedMethod;

            // Kartu ditampilkan jika semua kriteria cocok
            const isVisible =
                matchesName && matchesSubject && matchesMethod;

            card.hidden = !isVisible;

            if (isVisible) {
                visibleCount++;
            }
        });

        // Memperbarui jumlah hasil
        resultCount.textContent =
            visibleCount + " dari " + partnerCards.length + " partner";

        // Menampilkan pesan jika tidak ada hasil
        emptyMessage.hidden = visibleCount > 0;
    }

    // Fungsi untuk mereset semua filter
    function resetFilters() {
        searchInput.value = "";
        subjectFilter.value = "";
        methodFilter.value = "";

        filterPartners();
        searchInput.focus();
    }

    // Menjalankan pencarian saat pengguna mengetik
    searchInput.addEventListener("input", filterPartners);

    // Menjalankan filter saat pilihan berubah
    subjectFilter.addEventListener("change", filterPartners);
    methodFilter.addEventListener("change", filterPartners);

    // Menjalankan reset saat tombol diklik
    resetButton.addEventListener("click", resetFilters);

    // Menampilkan semua partner saat halaman pertama dibuka
    filterPartners();

    console.log("SmartFinder: partner.js berhasil dijalankan.");
});
```