import { simpleEvent } from "./events.js";
import { readSave, readKey, writeSave } from "./data/saveManager.js";
import { playerData } from "./data/playerData.js";
import { loadNpc } from "./data/npcData.js";
import { Dialog } from "./createDialog.js";
import { updateRender } from "./updateRender.js";
import { ageUp } from "./ageUp.js";
import { Player } from "./model/player.js";
import { Npc } from "./model/npc.js";

// console.log(true);

// function newPlayer() {
//   const playerA = new Player({ relations: "player" });
//   const npc = new Npc({ relations: "parent" });
//   const npc2 = new Npc({ relations: "parent" });
//   playerA.npcIds = npc.id;
//   playerA.npcIds = npc2.id;
//   console.log(playerA, npc, npc2);

//   writeSave("player", playerA);
//   writeSave("npc", npc);
//   writeSave("npc", npc2);
// }

// newPlayer();

const player = await playerData();

console.log(player);

document.querySelector(".js-growup").addEventListener("click", () => {
  ageUp();
});

updateRender();

function addNavListener() {
  for (const element of document.querySelector(".main__secondary-nav ul")
    .children) {
    element.addEventListener("click", () => {
      for (const element of document.querySelector(".main__journal").children) {
        element.classList.remove("main__journal--opened");
      }

      document
        .querySelector(`.main__journal__${element.id}`)
        .classList.add("main__journal--opened");
    });
  }

  for (const element of document.querySelector(".main__primary-nav ul")
    .children) {
    element.addEventListener("click", () => {
      for (const element of document.querySelector(".main__journal").children) {
        element.classList.remove("main__journal--opened");
      }

      document
        .querySelector(`.main__journal__${element.id}`)
        .classList.add("main__journal--opened");
    });
  }
}

addNavListener();

// const npc = await loadNpc("eu6o7m1116mj6np5");

// console.log(npc);
// npc.spendTime();

// const dialog = new Dialog({
//   text: "text flavor or something",
//   title: "you",
//   stats: ["smarts", "health"],
//   buttons: {
//     button1: {
//       text: "hello",
//       action: () => {
//         console.log("this is a functioin from the button1");
//       },
//     },
//     button2: {
//       text: "hello2",
//       action: () => {
//         console.log("this is a functioin from the button2");
//       },
//     },
//     button3: {
//       text: "hello3",
//       action: () => {
//         console.log("this is a functioin from the button3");
//       },
//     },
//     button4: {
//       text: "hello4",
//       action: () => {
//         console.log("this is a functioin from the button4");
//       },
//     },
//   },
// });

// const x = new Dialog({
//   title: "seoncd dialog",
// });

// const xy = new Dialog({
//   title: "third dialog",
//   buttons: {
//     button1: {
//       text: "test",
//       action: () => {
//         console.log("this is a functioin from the button4");
//       },
//     },
//   },
// });
