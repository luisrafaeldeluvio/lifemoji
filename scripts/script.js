import { Npc } from './npc.js';
import { Player } from "./player.js";
import { player } from "./playerCurrent.js";
import { renderJournal } from './renderJournal.js';
import { simpleEvent } from "./events.js";

const playerA = new Player();
Object.assign(player, playerA);

console.log(playerA);

simpleEvent(renderJournal())

// for (let i in renderJournal()) {
//     console.log(simpleEvent(renderJournal[i]));
    
// }


document.getElementById("playerInfo-fullname").innerHTML = playerA.fullName

document.getElementById("playerInfo-joyStat").innerHTML += playerA.stats.joy
document.getElementById("playerInfo-healthStat").innerHTML += playerA.stats.health
document.getElementById("playerInfo-smartsStat").innerHTML += playerA.stats.smarts
document.getElementById("playerInfo-looksStat").innerHTML += playerA.stats.looks