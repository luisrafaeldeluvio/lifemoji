import { simpleEvent } from "../events.js";
import { playerData } from "../data/playerData.js";
import { readData, writeData } from "../data/dataManager.js";
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
    writeData(
      "npc",
      {
        id: this.id,
        birthday: this.birthday,
        sex: this.sex,
        stats: this.stats,
        location: this.location,
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age,
        relations: this.relations,
      },
      this.key,
    );
  }

  async conversation() {
    this.stats.relationship += 10;
    this.#saveNpcData();
    simpleEvent(`You talked with ${this.firstname}`);
  }

  async spendTime() {
    simpleEvent(`You spent time with ${this.firstname}`);
    // new Dialog({
    //   text: `I spent time with ${this.firstName}`,
    // });
  }

  async askForMoney() {
    if (this.stats.generosity > Npc.randomInt(0, 100)) {
      simpleEvent(`${this.firstname} refused to give me money.`);
      return;
    }

    let player = playerData;
    player.money += 100;
    writeData("player", player);
    simpleEvent(`i asked ${this.firstname} for money. i got 100`);
  }
}

export { Npc };
