import { Player } from "./player.js";
import { readKey, readSave } from "./saveManager.js";

async function loadPlayer() {
  const key = await readKey("player");
  const data = await readSave("player", key);
  return new Player({
    id: data._id,
    birthday: data._birthday,
    age: data._age,
    sex: data._sex,
    stats: data._stats,
    location: data._location,
    firstname: data._firstname,
    lastname: data._lastname,
    npcIds: data._npcIds,
    money: data._money,
  });
}

export { loadPlayer };
