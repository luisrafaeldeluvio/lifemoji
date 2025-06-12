import { Npc } from "./model/npc.js";
import { Player } from "./model/player.js";
import { loadJournal, renderJournal } from "./data/renderJournal.js";
import { simpleEvent } from "./events.js";
import { readSave, readKey, writeSave } from "./data/saveManager.js";
import { loadPlayer } from "./data/playerData.js";
import { loadNpc } from "./data/npcData.js";
import { Dialog } from "./createDialog.js";

// function newPlayer() {
//   const playerA = new Player({ age: 24, relations: "player" });
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

console.log(player);

document.querySelector(".js-growup").addEventListener("click", async () => {
  player.age++;
  player.stats.joy++;
  writeSave("player", player);
  console.log(player);
  simpleEvent("Hello World2288!");
  document.querySelector(".js-journal").innerHTML = await renderJournal();
});

// const npc = await loadNpc("eu6o7m1116mj6np5");

// console.log(npc);
// npc.spendTime();

document.querySelector(".js-journal").innerHTML = await renderJournal();

// TODO:
// a function or method for managing multiple dialogs
// once the close button have been deleted, delete the dialog elem from the dom tree, then load the next dialog from the QUEUE

const dialog = new Dialog({
  text: "text flavor or something",
  title: "you",
  stats: ["smarts", "health"],
  buttons: {
    button1: {
      text: "hello",
      action: () => {
        console.log("this is a functioin from the button2");
      },
    },
    button2: {
      text: "hello2",
      action: () => {
        console.log("this is a functioin from the button2");
      },
    },
    button3: {
      text: "hello3",
      action: () => {
        console.log("this is a functioin from the button3");
      },
    },
    button4: {
      text: "hello4",
      action: () => {
        console.log("this is a functioin from the button4");
      },
    },
  },
});
await dialog.createDialog();


//add a close button
document
  .querySelectorAll(".js-dialog-button")[0]
  .addEventListener("click", () => {
    dialog.close();
  });
dialog.onAction("button1");
console.log(document.querySelector(".dialog"));
