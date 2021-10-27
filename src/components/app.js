import Services from "./Services/Services";
import Сalculator from "./Сalculator/Сalculator";
import Burger from "./Burger/Burger";

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
});
