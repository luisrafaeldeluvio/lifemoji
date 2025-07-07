import { readData, readDataByIndex, writeData } from "./data/dataManager.js";

const npcList = await readDataByIndex("npc", "relations");

async function renderNpcProfiles() {
  const parent = document.querySelector(".journal__social");

  for (let i of parent.querySelectorAll("div")) {
    for (let j = 0; j < 9; j++) {
      i.innerHTML += `
        <section class="profile profile--size-small card card--no-shadow">
          <img src="./assets/smart_car.jpg" alt="profile" />
          <div class="profile__text">
            <span class="text--m js-profile">${npcList[j]}</span>
          </div>
        </section>`;

      // TODO: Add a click listener to each profile
      //       that opens a modal with more details about the profile.
      console.log(npcList[0]);
    }
  }
}

export { renderNpcProfiles };
