import { Skeleton } from "./skeleton.js";

class Player extends Skeleton {
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
