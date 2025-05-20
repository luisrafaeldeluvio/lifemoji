import { Npc } from "./npc.js";
import { Player } from "./player.js";
import { loadJournal, renderJournal } from "./renderJournal.js";
import { simpleEvent } from "./events.js";
import { readSave, readKey, writeSave } from "./saveManager.js";
import { Stats } from "./stats.js";

function newPlayer() {
  const playerA = new Player({ age: 24, relations: "player" });
  const npc = new Npc({ relations: "parents" });
  const npc2 = new Npc({ relations: "parents" });
  playerA.npcIds = npc.id;
  playerA.npcIds = npc2.id;
  writeSave("player", playerA);
  writeSave("npc", npc);
  writeSave("npc", npc2);
}

// newPlayer();

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
  npcIds: data._npcIds,
});

console.log(player);

document.getElementById("growup").addEventListener("click", async () => {
  player.age++;
  player.stats._joy++;
  writeSave("player", player);
  console.log(player);
  simpleEvent(player.age, "Hello World2288!");
  document.getElementsByClassName("main-journalContainer")[0].innerHTML =
    await renderJournal();
});

document.getElementsByClassName("main-journalContainer")[0].innerHTML =
  await renderJournal();

document.getElementsByClassName("profileInfo")[0].innerHTML = `${
  player.firstName
}, ${player.sex === "male" ? "M" : "F"}${player.age}`;

document.getElementById("playerInfo-fullname").innerHTML = player.fullName;

document.getElementById("playerInfo-joyStat").innerHTML += player.stats._joy;
document.getElementById("playerInfo-healthStat").innerHTML +=
  player.stats._health;
document.getElementById("playerInfo-smartsStat").innerHTML +=
  player.stats._smarts;
document.getElementById("playerInfo-looksStat").innerHTML +=
  player.stats._looks;

const npc = new Npc({ relations: "parent" });

console.log(npc);
