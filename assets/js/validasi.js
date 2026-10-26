
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("studyForm");
    const messageBox = document.getElementById("formMessage");

    if (!form || !messageBox) return;

    const studentName = document.getElementById("studentName");
    const partnerName = document.getElementById("partnerName");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const studyDate = document.getElementById("studyDate");
    const studyTime = document.getElementById("studyTime");
    const locationInput = document.getElementById("location");
    const messageInput = document.getElementById("message");
    const agreement = document.getElementById("agreement");

    form.addEventListener("submit", function (event) {
        // Cegah pengiriman formulir jika validasi gagal.
        event.preventDefault();

        messageBox.className = "ab-message";
        messageBox.textContent = "";

        let errorMessage = "";
        let invalidField = null;

        if (studentName.value.trim().length < 3) {
            errorMessage = "Nama kamu minimal 3 karakter.";
            invalidField = studentName;
        } else if (partnerName.value.trim().length < 3) {
            errorMessage = "Nama partner minimal 3 karakter.";
            invalidField = partnerName;
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
        ) {
            errorMessage = "Masukkan alamat email yang valid.";
            invalidField = email;
        } else if (!subject.value) {
            errorMessage = "Silakan pilih mata pelajaran.";
            invalidField = subject;
        } else if (!form.querySelector('input[name="method"]:checked')) {
            errorMessage = "Silakan pilih metode belajar.";
        } else if (!studyDate.value) {
            errorMessage = "Silakan tentukan tanggal belajar.";
            invalidField = studyDate;
        } else if (studyDate.value < getLocalToday()) {
            errorMessage = "Pilih tanggal hari ini atau tanggal mendatang.";
            invalidField = studyDate;
        } else if (!studyTime.value) {
            errorMessage = "Silakan tentukan waktu belajar.";
            invalidField = studyTime;
        } else if (
            form.querySelector('input[name="method"]:checked').value === "Offline" &&
            !locationInput.value.trim()
        ) {
            errorMessage = "Isi tempat pertemuan umum yang aman.";
            invalidField = locationInput;
        } else if (!agreement.checked) {
            errorMessage = "Kamu perlu menyetujui pernyataan terlebih dahulu.";
            invalidField = agreement;
        }

        if (errorMessage) {
            messageBox.textContent = errorMessage;
            messageBox.className = "ab-message error";
            messageBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            if (invalidField) invalidField.focus();
            return;
        }

        messageBox.textContent =
            "Formulir berhasil divalidasi! Ini masih demo, jadi ajakan belum dikirim ke partner dan belum tersimpan di database.";
        messageBox.className = "ab-message success";

        messageBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

    function getLocalToday() {
        const today = new Date();

        return [
            today.getFullYear(),
            String(today.getMonth() + 1).padStart(2, "0"),
            String(today.getDate()).padStart(2, "0")
        ].join("-");
    }
});
