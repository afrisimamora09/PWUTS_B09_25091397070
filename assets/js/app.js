
document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // 1. NAVBAR MOBILE
  // ========================================
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
  
document.addEventListener("DOMContentLoaded", () => {
  // =====================================
  // PENCARIAN PARTNER BELAJAR
  // =====================================
  const searchName = document.getElementById("searchName");
  const filterSubject = document.getElementById("filterSubject");
  const filterMethod = document.getElementById("filterMethod");
  const resetButton = document.getElementById("resetButton");
  const cards = document.querySelectorAll(".sf-card");
  const resultCount = document.getElementById("resultCount");
  const emptyMessage = document.getElementById("emptyMessage");

  function filterPartners() {
    const keyword = searchName.value.trim().toLowerCase();
    const subject = filterSubject.value;
    const method = filterMethod.value;

    let visibleCount = 0;

    cards.forEach((card) => {
      const name = (card.dataset.name || "").toLowerCase();
      const cardSubject = card.dataset.subject || "";
      const cardMethod = card.dataset.method || "";

      const matches =
        name.includes(keyword) &&
        (!subject || cardSubject === subject) &&
        (!method || cardMethod === method);

      card.hidden = !matches;

      if (matches) {
        visibleCount++;
      }
    });

    resultCount.textContent =
      `${visibleCount} partner ditemukan`;

    emptyMessage.hidden = visibleCount > 0;
  }

  searchName.addEventListener("input", filterPartners);
  filterSubject.addEventListener("change", filterPartners);
  filterMethod.addEventListener("change", filterPartners);

  resetButton.addEventListener("click", () => {
    searchName.value = "";
    filterSubject.value = "";
    filterMethod.value = "";

    filterPartners();
    searchName.focus();
  });

  // Tampilkan jumlah partner saat halaman dibuka
  filterPartners();

  // =====================================
  // TAHUN OTOMATIS DI FOOTER
  // =====================================
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});


  // ========================================
  // 3. FORM AJAKAN BELAJAR
  // ========================================
  const studyForm = document.querySelector("#studyForm");
  const successMessage = document.querySelector("#successMessage");

  if (studyForm) {
    const params = new URLSearchParams(window.location.search);
    const partnerName = params.get("partner");
    const partnerInput = studyForm.querySelector('[name="partner"]');

    // Isi nama partner dari link kartu partner
    if (partnerName && partnerInput) {
      partnerInput.value = partnerName;
    }

    studyForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!studyForm.checkValidity()) {
        studyForm.reportValidity();
        return;
      }

      const formData = new FormData(studyForm);
      const invitation = Object.fromEntries(formData.entries());

      // Demo: data belum dikirim ke server/database
      console.log("Data ajakan belajar:", invitation);

      if (successMessage) {
        successMessage.hidden = false;
        successMessage.textContent =
          "Formulir berhasil divalidasi! Ini masih demo, data belum disimpan ke database.";
      }

      studyForm.reset();
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});
