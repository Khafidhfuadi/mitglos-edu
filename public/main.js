// company logo scroll

const flavoursContainer = document.getElementById("flavoursContainer");
const flavoursScrollWidth = flavoursContainer.scrollWidth;

window.addEventListener("load", () => {
  self.setInterval(() => {
    const first = document.querySelector("#flavoursContainer .logo-card");
    const gap = document.querySelector("#flavoursContainer .gap");

    if (!isElementInViewport(first && gap)) {
      flavoursContainer.appendChild(first);
      flavoursContainer.appendChild(gap);
      flavoursContainer.scrollTo(
        flavoursContainer.scrollLeft - first.offsetWidth - gap.offsetWidth,
        0
      );
    }
    if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
      flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 2, 0);
    }
  }, 10);
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.right > 0;
}
