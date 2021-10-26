import Services from "./Services/Services";

import backgroundImage from "../img/buner_background.jpg";
document.addEventListener("DOMContentLoaded", () => {
  const baner = document.querySelector(".header__baner");
  baner.style.backgroundImage = `url(${backgroundImage})`;

  const services = new Services(".our-services");
  services.bindToDOM();
});
