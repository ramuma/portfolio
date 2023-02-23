(function () {
  const button = document.querySelector(".main-nav__toggle");
  const mainNav = document.querySelector(".main-nav");

  mainNav.classList.remove("main-nav--nojs");
  mainNav.classList.add("main-nav--closed");

  button.addEventListener("click", () => {
    if (mainNav.classList.contains("main-nav--opened")) {
      mainNav.classList.remove("main-nav--opened")
      mainNav.classList.add("main-nav--closed");
    } else {
      mainNav.classList.remove("main-nav--closed")
      mainNav.classList.add("main-nav--opened");
    }
  });
})();
