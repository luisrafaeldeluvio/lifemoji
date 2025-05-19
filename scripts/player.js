import { Npc } from "./npc.js";

class Player extends Npc {
  constructor({
    id,
    birthday,
    age,
    sex,
    location,
    firstname,
    lastname,
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
    });
    this._npcIds = [];
  }

  get npcIds() {
    return this._npcIds;
  }

  set npcIds(value) {
    this._npcIds.push(value);
  }
}

export { Player };
