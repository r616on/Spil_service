export default class Burger {
  constructor(element) {
    if (typeof element === "string") {
      this.element = document.querySelector(element);
      this.burger = document.querySelector(".burger");
      this.nav = document.querySelector(".header__nav");
    }
  }

  bindToDOM() {
    document.addEventListener("click", (evt) => this.onClickAllDoc(evt));
  }
  onClickAllDoc(e) {
    if (e.target.closest(".burger")) {
      if (this.burger.classList.contains("active")) {
        this.burger.classList.remove("active");
        this.nav.classList.remove("active");
      } else {
        this.burger.classList.add("active");
        this.nav.classList.add("active");
      }
    } else {
      if (this.burger.classList.contains("active")) {
        this.burger.classList.remove("active");
        this.nav.classList.remove("active");
      }
    }
    if (
      e.target.closest(".nav__item") &&
      this.burger.classList.contains("active")
    ) {
      this.burger.classList.remove("active");
      this.nav.classList.remove("active");
    }
  }
  onClick(e) {}
}
