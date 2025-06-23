import { simpleEvent } from "./events.js";
import { playerData } from "./data/playerData.js";
import { updateRender } from "./updateRender.js";
import { writeSave } from "./data/saveManager.js";

const player = playerData;

async function ageUp() {
  player.age++;
  player.stats._joy++;
  writeSave("player", player);
  await simpleEvent(
    `your age is ${player.age}, your happiness is ${player.stats._joy}`,
  );
  updateRender();
}

export { ageUp };
