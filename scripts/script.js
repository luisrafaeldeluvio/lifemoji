import { Npc } from "./npc.js";
import { Player } from "./player.js";
import { loadJournal, renderJournal } from "./renderJournal.js";
import { simpleEvent } from "./events.js";
import {
  readSave,
  readKey,
  readSaveByIndex,
  writeSave,
} from "./saveManager.js";

function newPlayer() {
  const playerA = new Player();
  writeSave("player", playerA);
}

const b = await readKey("player");
const a = await readSave("player", b);
console.log(a);

//const loadData = await readSave("player");

// simpleEvent("Hello World2288!");

// const playerData = await readSave("player", "quiglr7bppvuk681");
// console.log("Player data:", playerData);

renderJournal();

// const Journal = await readSaveByIndex("journal", "year", 1);
// console.log(Journal[3]);

// document.getElementById("playerInfo-fullname").innerHTML = playerA.fullName;

// document.getElementById("playerInfo-joyStat").innerHTML += playerA.stats.joy;
// document.getElementById("playerInfo-healthStat").innerHTML +=
//   playerA.stats.health;
// document.getElementById("playerInfo-smartsStat").innerHTML +=
//   playerA.stats.smarts;
// document.getElementById("playerInfo-looksStat").innerHTML +=
//   playerA.stats.looks;
