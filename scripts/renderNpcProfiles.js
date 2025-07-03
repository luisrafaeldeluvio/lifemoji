function renderNpcProfiles() {
  console.log(true);

  const parent = document.querySelector(".main__journal__social");

  console.log(parent.children);

  for (let i of parent.querySelectorAll("div")) {
    console.log(i);
    let k = 0;
    for (let j = 0; j < 9; j++) {
      i.innerHTML += `<section class="profile profile--size-small card card--no-shadow">
                <img src="./assets/smart_car.jpg" alt="profile" />
                <div class="profile__text">
                  <span class="text--m js-profile">male, ${j + k}</span>
                </div>
              </section>`;
    }
    k++;
  }
}

export { renderNpcProfiles };
