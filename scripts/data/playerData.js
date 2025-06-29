import { Player } from "../model/player.js";
import { readData } from "./dataManager.js";

async function playerData() {
  const data = await readData("player", "player");
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
