import { Npc } from "./model/npc.js";
import { Player } from "./model/player.js";
import { loadJournal, renderJournal } from "./data/renderJournal.js";
import { simpleEvent } from "./events.js";
import { readSave, readKey, writeSave } from "./data/saveManager.js";
import { loadPlayer } from "./data/playerData.js";
import { loadNpc } from "./data/npcData.js";

function newPlayer() {
  const playerA = new Player({ age: 24, relations: "player" });
  const npc = new Npc({ relations: "parent" });
  const npc2 = new Npc({ relations: "parent" });
  playerA.npcIds = npc.id;
  playerA.npcIds = npc2.id;
  console.log(playerA, npc, npc2);

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

const npc = await loadNpc("wvyg08s0ksfiw707");
npc.askForMoney();

console.log(npc);
