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
    this._npcIds = [];
  }

  get stats() {
    return this._stats;
  }
  get npcIds() {
    return this._npcIds;
  }
  set stats(value) {
    this._stats = value;
  }
  set npcIds(value) {
    this._npcIds.push(value);
  }
}

export { Player };
