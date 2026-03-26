// Небольшой JS для UX-эффектов.
// Backend не используется.

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const downloadBtn = document.querySelector(".download-btn");
  const fileLinks = document.querySelectorAll('a[href="#"]');

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      alert("Меню можно подключить позже.");
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      alert("Здесь можно подключить скачивание фотографии.");
    });
  }

  fileLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "#") {
        e.preventDefault();
        alert("Файл можно подключить позже.");
      }
    });
  });
});