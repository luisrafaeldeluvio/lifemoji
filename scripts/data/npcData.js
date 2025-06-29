import { Npc } from "../model/npc.js";
import { readSave } from "./saveManager.js";

async function loadNpc(key) {
  const data = await readSave("npc", key);
  return new Npc({
    id: data.id,
    birthday: data.birthday,
    age: data.age,
    sex: data.sex,
    stats: data.stats,
    location: data.location,
    firstname: data.firstname,
    lastname: data.lastname,
    relations: data.relations,
  });
}

export { loadNpc };
