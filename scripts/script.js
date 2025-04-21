import { firstName, lastName } from 'full-name-generator';

import places from "../places.json" with {type: 'json'};

import { Stats } from './stats.js';
import { Npc } from './npc.js';
import { Player } from "./player.js";
import { player } from "./playerCurrent.js";






Object.assign(player, new Player({LOCATION: 'italy'}))
let npc = new Npc()

console.log(npc);
console.log(player);
//console.log(Object.keys(places));


// Testing area, dont include -----------------------------------------------

// const y = []

// for (let id = 0; id < 1; id++) {
//     y.push(new Npc())
// }

// //const x = y.find(a => a.stats.karma === 1)


// y[0].stats.karma = 2000;

// console.log(y[0].stats.karma);

//console.log(x);