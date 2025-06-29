import { Npc } from "../model/npc.js";
import { readData } from "./dataManager.js";

async function loadNpc(key) {
  const data = await readData("npc", key);
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
