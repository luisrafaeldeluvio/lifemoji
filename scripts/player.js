import { Npc } from "./npc.js";

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
      stats,
      location,
      firstname,
      lastname,
      age,
    });
  }
}

export { Player };
