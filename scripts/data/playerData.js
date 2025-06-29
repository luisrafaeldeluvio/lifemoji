import { Player } from "../model/player.js";
import { readKey, readData } from "./saveManager.js";

async function playerData() {
  const key = await readKey("player");
  const data = await readData("player", key);
  return new Player({
    id: data.id,
    birthday: data.birthday,
    age: data.age,
    sex: data.sex,
    stats: data.stats,
    location: data.location,
    firstname: data.firstname,
    lastname: data.lastname,
    npcIds: data.npcIds,
    money: data.money,
  });
}

export { playerData };
