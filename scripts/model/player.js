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
    npcIds,
    money,
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
    this._npcIds = npcIds ?? [];
    this._money = money ?? 0;
  }

  get npcIds() {
    return this._npcIds;
  }

  get money() {
    return this._money;
  }

  set npcIds(value) {
    this._npcIds.push(value);
  }

  set money(value) {
    this._money = value;
  }
}

export { Player };
