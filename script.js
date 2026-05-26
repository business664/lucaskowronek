// Sprach-Umschalter
function setLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

var saved = localStorage.getItem("lang")
  || (navigator.language && navigator.language.startsWith("en") ? "en" : "de");

document.addEventListener("DOMContentLoaded", function () {
  setLang(saved);

  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  // Scroll-Reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll("section").forEach(function (s) {
    s.classList.add("reveal");
    io.observe(s);
  });
});
