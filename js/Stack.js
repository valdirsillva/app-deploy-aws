class Stack {
  #counter;
  #progressBarColor = [
    "colorRed",
    "colorOrange",
    "colorBlue",
    "colorLimegreen",
    "colorGreen",
  ];


  #colors = {
    colorRed: '',
    colorOrange: '',
    colorBlue: '',
    colorLimegreen: '',
    colorGreen: '',
  };

  constructor() {
    this.#counter = 0;

    this.#colors.colorRed = document.querySelector(".barra-vermelha");
    this.#colors.colorOrange = document.querySelector(".barra-laranja");
    this.#colors.colorBlue = document.querySelector(".barra-azul");
    this.#colors.colorLimegreen = document.querySelector(".barra-limegreen");
    this.#colors.colorGreen = document.querySelector(".barra-verde");
  }

  execute() {
    setInterval(() => {
      const currentColor = this.#progressBarColor[this.#counter];

      this.#counter++;

      switch (currentColor) {
        case "colorRed":
          this.#colors.colorRed.classList.add("active");
          break;
        case "colorOrange":
          this.#colors.colorOrange.classList.add("active");
          break;
        case "colorBlue":
          this.#colors.colorBlue.classList.add("active");
          break;
        case "colorLimegreen":
          this.#colors.colorLimegreen.classList.add("active");
          break;
        case "colorGreen":
          this.#colors.colorGreen.classList.add("active");
          break;
      }
      // Zera a pilha
      this.resetStack(this.#counter);
    }, 1000);
  }

  resetStack(counter) {
    if (counter === 6) {
      this.#colors.colorRed.classList.remove("active");
      this.#colors.colorOrange.classList.remove("active");
      this.#colors.colorBlue.classList.remove("active");
      this.#colors.colorLimegreen.classList.remove("active");
      this.#colors.colorGreen.classList.remove("active");

      this.#counter = 0;
    }
  }
}

console.log('Chegamos ate aqui')


