import { simpleEvent } from "./events.js";
import { playerData } from "./data/playerData.js";
import { updateRender } from "./updateRender.js";
import { writeSave } from "./data/saveManager.js";

async function ageUp() {
  const player = await playerData();
  player.age++;
  player.stats.joy++;
  writeSave("player", player);
  await simpleEvent(
    `your age is ${player.age}, your happiness is ${player.stats.joy}`,
  );
  updateRender();
}

export { ageUp };
