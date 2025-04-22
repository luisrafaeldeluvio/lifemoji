import { Stats } from './stats.js';
import { Npc } from './npc.js';
import { Player } from "./player.js";
import { player } from "./playerCurrent.js";

Object.assign(player, new Player({location: 'italy'}))
let npc = new Npc()
npc.stats.joy += 1

//console.log(npc.location);
console.log(player);

console.log(player.sex);