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
    this.id = "player";
    this.npcIds = npcIds ?? [];
  }

  get getNpcIds() {
    return this.npcIds;
  }

  set setNpcIds(value) {
    this.npcIds.push(value);
  }
}

export { Player };
