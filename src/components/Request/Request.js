export default class Request {
  constructor() {
    this.selector = ".request-сalculation";
  }

  bindToDOM() {
    document.addEventListener("click", (evt) => this.onClick(evt));
  }
  onClick(e) {
    if (e.target.closest(this.selector)) {
      e.preventDefault();
      e.target.closest(this.selector).href = "tel:+79658791828";
      e.target.closest(this.selector).innerText = "+7 (965) 879-18-28";
      e.target.closest(this.selector).classList.remove("request-сalculation");
    }
  }
}
