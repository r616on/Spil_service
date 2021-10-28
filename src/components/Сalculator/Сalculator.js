export default class Сalculator {
  constructor(element) {
    if (typeof element === "string") {
      this.element = document.querySelector(element);
      this.type = this.element.querySelector(".type-of-tree");
      this.typeTitle = this.element.querySelector(".type-of-tree__title");
      this.diameter = this.element.querySelector(".calculator__diameter");
      this.heightCounter = this.element.querySelector(".tree-height__counter");
      this.crampedConditions = this.element.querySelector(".conditions_btn");
      this.totalNum = this.element.querySelector(".total__num");
      this.arrDiametr = [0, 500, 1000, 1500, 2000, 2500, 3000, 4000];
    }
  }
  calculate() {
    const type = +this.typeTitle.dataset.id;
    const diametr = +this.diameter.dataset.size;
    const heightCounter = +this.heightCounter.innerText;
    let crampedConditions = 0;
    if (this.crampedConditions.classList.contains("active")) {
      crampedConditions = 1000;
    }
    let price;
    function addpoint(price) {
      price = [...String(price)];
      price.splice([price.length - 3], 0, ".");
      price = String(price).replace(/[\s,%]/g, "");
      return price;
    }
    if (heightCounter === 0) {
      return;
    }
    if (type === 3 || type === 6) {
      price =
        500 * heightCounter + +this.arrDiametr[diametr] + crampedConditions;
      this.totalNum.innerText = addpoint(price);
    } else if (type === 1 || type === 2) {
      price =
        430 * heightCounter + +this.arrDiametr[diametr] + crampedConditions;
      this.totalNum.innerText = addpoint(price);
    } else if (type === 5) {
      price =
        350 * heightCounter + +this.arrDiametr[diametr] + crampedConditions;
      this.totalNum.innerText = addpoint(price);
    } else if (type === 4) {
      price =
        300 * heightCounter + +this.arrDiametr[diametr] + crampedConditions;
      this.totalNum.innerText = addpoint(price);
    }
  }
  bindToDOM() {
    document.addEventListener("click", (evt) => this.onClickAllDoc(evt));
    this.element.addEventListener("click", (evt) => this.onClick(evt));

    ////observers
    const observerTypeTitle = new MutationObserver((mutationRecords) => {
      this.calculate();
    });
    observerTypeTitle.observe(this.typeTitle, {
      attributes: true,
    });
    const observerDiameter = new MutationObserver((mutationRecords) => {
      this.calculate();
    });
    observerDiameter.observe(this.diameter, {
      attributes: true,
    });
    const observerHeightCounter = new MutationObserver((mutationRecords) => {
      this.calculate();
    });
    observerHeightCounter.observe(this.heightCounter, {
      childList: true,
    });
    const observerCrampedConditions = new MutationObserver(
      (mutationRecords) => {
        this.calculate();
      }
    );
    observerCrampedConditions.observe(this.crampedConditions, {
      attributes: true,
    });
    ////
  }
  onClickAllDoc(e) {
    if (e.target.closest(".type-of-tree")) {
      this.type.classList.toggle("active");
    } else {
      if (this.type.classList.contains("active")) {
        this.type.classList.remove("active");
      }
    }
  }
  onClick(e) {
    if (e.target.closest(".diameter__item")) {
      this.diameter.dataset.size =
        e.target.closest(".diameter__item").dataset.size;
      const sizeArr = Array.from(
        this.element.querySelectorAll(".diameter__item")
      );
      sizeArr.forEach((item) => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        }
      });
      e.target.closest(".diameter__item").classList.add("active");
    }
    if (e.target.closest(".opions__item")) {
      this.typeTitle.dataset.id = e.target.closest(".opions__item").dataset.id;
      this.element.querySelector(".type-of-tree__title").innerText =
        e.target.closest(".opions__item").innerText;
    }
    //////
    if (e.target.closest(".tree-height__icon")) {
      if (e.target.closest(".tree-height__icon").classList.contains("left")) {
        if (+this.heightCounter.innerText > 0) {
          this.heightCounter.innerText = +this.heightCounter.innerText - 1;
        }
      } else if (
        e.target.closest(".tree-height__icon").classList.contains("right")
      ) {
        this.heightCounter.innerText = +this.heightCounter.innerText + 1;
      }
    }
    /////
    if (e.target.closest(".conditions_btn")) {
      e.target.closest(".conditions_btn").classList.toggle("active");
    }
  }
}
