import sawCut from "../../img/Services/udalenieDerevev.png";
import crowning from "../../img/Services/crowning.png";
import exportD from "../../img/Services/export.png";
import obrezka from "../../img/Services/obrezka.png";

export default class Services {
  constructor(element) {
    if (typeof element === "string") {
      this.element = document.querySelector(element);
      this.arr = [
        {
          id: 1,
          title: "Спил деревьев",
          src: sawCut,
          text: "Оказываем услуги по спилу, валке деревьев под ключ любой сложности.Для оценки Вашего объекта звоните по телефону или пишите в WhatsApp",
        },
        {
          id: 2,
          title: "Кронирование деревьев",
          src: crowning,
          text: "Оказываем услуги по спилу, валке деревьев под ключ любой сложности.Для оценки Вашего объекта звоните по телефону или пишите в WhatsApp",
        },
        {
          id: 3,
          title: "Обрезка кустарников",
          src: obrezka,
          text: "Оказываем услуги по спилу, валке деревьев под ключ любой сложности.Для оценки Вашего объекта звоните по телефону или пишите в WhatsApp",
        },
        {
          id: 4,
          title: "Вывоз порубочных остатков",
          src: exportD,
          text: "Оказываем услуги по спилу, валке деревьев под ключ любой сложности.Для оценки Вашего объекта звоните по телефону или пишите в WhatsApp",
        },
      ];
      this.img = this.element.querySelector(".our-services__img");
      this.textTitle = this.element.querySelector(".our-services__text__title");
      this.textBody = this.element.querySelector(".our-services__text__body");
    }
  }
  bindToDOM() {
    this.element.addEventListener("click", (evt) => this.onClick(evt));
  }
  onClick(e) {
    if (e.target.closest(".our-services__name__item")) {
      e.preventDefault();
      const elementArr = Array.from(
        this.element.querySelectorAll(".our-services__name__item")
      );
      elementArr.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });
      const element = e.target.closest(".our-services__name__item");
      element.classList.add("active");
      this.img.src = this.arr[element.dataset.id - 1].src;
      this.textTitle.innerText = this.arr[element.dataset.id - 1].title;
      this.textBody.innerText = this.arr[element.dataset.id - 1].text;

      console.log(element.dataset.id);
      console.log(this.img.src);
    }
  }
}
