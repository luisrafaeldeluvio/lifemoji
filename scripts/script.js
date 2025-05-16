import { Npc } from "./npc.js";
import { Player } from "./player.js";
import { loadJournal, renderJournal } from "./renderJournal.js";
import { simpleEvent } from "./events.js";
import { readSave, readKey, writeSave } from "./saveManager.js";

function newPlayer() {
  const playerA = new Player({ age: 24 });
  writeSave("player", playerA);
}

const key = await readKey("player");
const data = await readSave("player", key);

let player = new Player({
  id: data._id,
  birthday: data._birthday,
  age: data._age,
  sex: data._sex,
  stats: data._stats,
  location: data._location,
  firstname: data._firstname,
  lastname: data._lastname,
});

console.log(player);

document.getElementById("growup").addEventListener("click", async () => {
  player.age++;
  writeSave("player", player);
  console.log(player);
  simpleEvent(player.age, "Hello World2288!");
  document.getElementsByClassName("main-journalContainer")[0].innerHTML =
    await renderJournal();
});

document.getElementsByClassName("main-journalContainer")[0].innerHTML =
  await renderJournal();

document.getElementById("playerInfo-fullname").innerHTML = player.fullName;

document.getElementById("playerInfo-joyStat").innerHTML += player.stats._joy;
document.getElementById("playerInfo-healthStat").innerHTML +=
  player.stats._health;
document.getElementById("playerInfo-smartsStat").innerHTML +=
  player.stats._smarts;
document.getElementById("playerInfo-looksStat").innerHTML +=
  player.stats._looks;
