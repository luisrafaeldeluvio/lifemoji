import { Npc } from "./npc.js";
import { Player } from "./player.js";
import { loadJournal, renderJournal } from "./renderJournal.js";
import { simpleEvent } from "./events.js";
import { readSave, readKey, writeSave } from "./saveManager.js";
import { loadPlayer } from "./playerData.js";

function newPlayer() {
  const playerA = new Player({ age: 24, relations: "player" });
  const npc = new Npc({ relations: "parents" });
  const npc2 = new Npc({ relations: "parents" });
  playerA.npcIds = npc.id;
  playerA.npcIds = npc2.id;
  console.log(playerA);

  writeSave("player", playerA);
  writeSave("npc", npc);
  writeSave("npc", npc2);
}

// newPlayer();

const player = await loadPlayer();

console.log(player);

document.getElementById("growup").addEventListener("click", async () => {
  player.age++;
  player.stats.joy++;
  writeSave("player", player);
  console.log(player);
  simpleEvent("Hello World2288!");
  document.getElementsByClassName("main-journalContainer")[0].innerHTML =
    await renderJournal();
});

const npc = new Npc({ relations: "parent" });
// npc.conversation("klklbnhl19ww6tzu"); //////
npc.askForMoney("n64bwp8t18ip2i1g");

console.log(npc);
