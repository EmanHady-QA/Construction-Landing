// ===== 1) الأزرار اللي بتنقل لقسم معين (data-scroll="id") =====
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
  });
});

// ===== 2) فورم Request a Quote =====
// ملحوظة: زي النسخة الأصلية، الفورم بيفضّي نفسه بس ومبيبعتش البيانات لأي مكان.
const form = document.getElementById("quote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
});
