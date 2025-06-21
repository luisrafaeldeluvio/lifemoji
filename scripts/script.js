import { Npc } from "./model/npc.js";
import { Player } from "./model/player.js";
import { renderJournal } from "./data/renderJournal.js";
import { simpleEvent } from "./events.js";
import { readSave, readKey, writeSave } from "./data/saveManager.js";
import { loadPlayer } from "./data/playerData.js";
import { loadNpc } from "./data/npcData.js";
import { Dialog } from "./createDialog.js";

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

const player = await loadPlayer();

document.querySelector(".js-growup").addEventListener("click", () => {
  ageUp();
});

async function ageUp() {
  player.age++;
  player.stats._joy++;
  writeSave("player", player);
  console.log(player);
  await simpleEvent(
    `your age is ${player.age}, your happiness is ${player.stats._joy}`,
  );
  updateRender();
}

async function updateRender() {
  const query = {
    ".js-journal": await renderJournal(),
    ".js-fullname": player.fullName,
    ".js-stat-joy": player.stats._joy,
    ".js-stat-health": player.stats._health,
    ".js-stat-smarts": player.stats._smarts,
    ".js-stat-looks": player.stats._looks,
    ".js-profile": `${player.sex}, ${player.age}`,
  };

  for (const [key, value] of Object.entries(query)) {
    document.querySelector(key).innerHTML = value;
  }
}

updateRender();

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
