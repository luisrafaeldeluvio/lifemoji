import { Npc } from "./npc.js";
import { Stats } from "./stats.js";

class Player extends Npc {
  constructor({
    id,
    birthday,
    age,
    sex,
    stats,
    location,
    firstname,
    lastname,
  } = {}) {
    super({
      id,
      birthday,
      sex,
      location,
      firstname,
      lastname,
      age,
    });
    this._stats = stats ?? new Stats();
  }
}

export { Player };
