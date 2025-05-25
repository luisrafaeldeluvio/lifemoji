import { Npc } from "../model/npc.js";
import { readSave } from "./saveManager.js";

async function loadNpc(key) {
  const data = await readSave("npc", key);
  return new Npc({
    id: data._id,
    birthday: data._birthday,
    age: data._age,
    sex: data._sex,
    stats: data._stats,
    location: data._location,
    firstname: data._firstname,
    lastname: data._lastname,
    relations: data._relations,
  });
}

export { loadNpc };
