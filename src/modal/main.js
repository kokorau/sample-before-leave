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

const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", () => {
  popupBlocker.style.display = "none";
});

popupBlocker.addEventListener("click", (e) => {
  popupBlocker.style.display = "none";
});

for (const node of popupBlocker.children) {
  node.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
