import Services from "./Services/Services";
import Сalculator from "./Сalculator/Сalculator";
import Burger from "./Burger/Burger";
import { Fancybox } from "@fancyapps/ui";
import Swiper from "swiper";

import backgroundImage from "../img/buner_background.jpg";
document.addEventListener("DOMContentLoaded", () => {
  const baner = document.querySelector(".header__baner");
  baner.style.backgroundImage = `url(${backgroundImage})`;

  const burger = new Burger(".header");
  burger.bindToDOM();

  const services = new Services(".our-services");
  services.bindToDOM();

  const calculator = new Сalculator(".calculator");
  calculator.bindToDOM();

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 9,
    breakpoints: {
      // when window width is >= 320px
      315: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      785: {
        slidesPerView: 2,
        spaceBetween: 9,
      },
      // when window width is >= 640px
      1185: {
        slidesPerView: 3,
        spaceBetween: 9,
      },
    },
    autoplay: {
      // Пауза между прокруткой
      delay: 1000,
      // Закончить на последнем слайде
      stopOnLastSlide: false,
      // Отключить после ручного переключения
      disableOnInteraction: true,
    },
  });
});
