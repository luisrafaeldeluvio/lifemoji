function removeOpenMod() {
  for (const element of document.querySelector(".main__journal").children) {
    element.classList.remove("main__journal--opened");
  }
}

function addNavListener() {
  for (const element of document.querySelector(".main__secondary-nav ul")
    .children) {
    element.addEventListener("click", () => {
      removeOpenMod();
      document
        .querySelector(`.main__journal__${element.id}`)
        .classList.add("main__journal--opened");
    });
  }

  for (const element of document.querySelector(".main__primary-nav ul")
    .children) {
    element.addEventListener("click", () => {
      removeOpenMod();

      document
        .querySelector(`.main__journal__${element.id}`)
        .classList.add("main__journal--opened");
    });
  }
}

export { addNavListener };
