import { readData, writeData } from "./data/dataManager.js";

async function simpleEvent(event) {
  const data = await readData("player", "player");
  writeData("journal", { year: data.age, log: event });
}

export { simpleEvent };
