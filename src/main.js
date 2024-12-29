import "./style.css";

history.replaceState(null, document.title, window.location.href);
history.pushState(null, document.title, window.location.href);

const popupBlocker = document.getElementById("popup-blocker");

window.addEventListener(
  "popstate",
  function (event) {
    popupBlocker.style.display = "flex";
  },
  { once: true },
);
