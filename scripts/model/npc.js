import { simpleEvent } from "../events.js";
import { loadPlayer } from "../data/playerData.js";
import { readSave, writeSave } from "../data/saveManager.js";
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

  async askForMoney() {
    if (!(this._stats._generosity < Npc.randomInt(0, 100))) {
      simpleEvent(`${this._firstname} refused to give me money.`);
      console.log(`${this._firstname} refused to give me money.`);

      return;
    }

    let player = await loadPlayer();

    player.money += 100;
    writeSave("player", player);
    console.log(`i asked ${this._firstname} for money. i got 100`);

    simpleEvent(`i asked ${this._firstname} for money. i got 100`);
  }
}

export { Npc };
