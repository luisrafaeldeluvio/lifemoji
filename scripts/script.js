import { Npc } from "./npc.js";
import { Player } from "./player.js";
import { renderJournal } from "./renderJournal.js";
import { simpleEvent } from "./events.js";
import { readSave, writeSave } from "./saveManager.js";

const playerA = new Player();

console.log(playerA);

writeSave("player", playerA);

// document.getElementById("playerInfo-fullname").innerHTML = playerA.fullName;

// document.getElementById("playerInfo-joyStat").innerHTML += playerA.stats.joy;
// document.getElementById("playerInfo-healthStat").innerHTML +=
//   playerA.stats.health;
// document.getElementById("playerInfo-smartsStat").innerHTML +=
//   playerA.stats.smarts;
// document.getElementById("playerInfo-looksStat").innerHTML +=
//   playerA.stats.looks;
