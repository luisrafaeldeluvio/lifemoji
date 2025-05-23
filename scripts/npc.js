import { simpleEvent } from "./events.js";
import { loadPlayer } from "./playerData.js";
import { readSave, writeSave } from "./saveManager.js";
import { Skeleton } from "./skeleton.js";
class Npc extends Skeleton {
  constructor({
    id,
    birthday,
    age,
    sex,
    location,
    firstname,
    lastname,
    relations,
    stats,
  } = {}) {
    super({
      id,
      birthday,
      sex,
      stats,
      location,
      firstname,
      lastname,
      age,
      relations,
    });
  }

  async conversation(npcId) {
    const npcData = await readSave("npc", npcId);
    simpleEvent(`You talked with ${npcData._firstname}`);
  }

  async spendTime(npcId) {
    const npcData = await readSave("npc", npcId);
    simpleEvent(`You spent time with ${npcData._firstname}`);
  }

  async askForMoney(npcId) {
    const npcData = await readSave("npc", npcId);

    let player = await loadPlayer();

    // if (!(npcData._stats._generosity < Npc.randomInt(0, 100))) return;

    console.log(player.money, npcData._stats._generosity);

    player.money += 100;
    writeSave("player", player);

    simpleEvent(`i asked ${npcData._firstname} for money. i got 100`);
  }
}

export { Npc };
