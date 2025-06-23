import { simpleEvent } from "../events.js";
import { playerData } from "../data/playerData.js";
import { readSave, writeSave } from "../data/saveManager.js";
import { Skeleton } from "./skeleton.js";
// import { Dialog } from "../createDialog.js";

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

  #saveNpcData() {
    writeSave(
      "npc",
      {
        _id: this._id,
        _birthday: this._birthday,
        _sex: this._sex,
        _stats: this._stats,
        _location: this._location,
        _firstname: this._firstname,
        _lastname: this._lastname,
        _age: this._age,
        _relations: this._relations,
      },
      this._key,
    );
  }

  async conversation() {
    this._stats._relationship += 10;
    this.#saveNpcData();
    simpleEvent(`You talked with ${this._firstname}`);
  }

  async spendTime() {
    simpleEvent(`You spent time with ${this._firstname}`);
    // new Dialog({
    //   text: `I spent time with ${this.firstName}`,
    // });
  }

  async askForMoney() {
    if (this._stats._generosity > Npc.randomInt(0, 100)) {
      simpleEvent(`${this._firstname} refused to give me money.`);
      return;
    }

    let player = playerData;
    player.money += 100;
    writeSave("player", player);
    simpleEvent(`i asked ${this._firstname} for money. i got 100`);
  }
}

export { Npc };
