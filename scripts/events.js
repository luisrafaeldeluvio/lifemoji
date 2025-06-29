import { readData, readKey, writeData } from "./data/saveManager.js";

async function simpleEvent(event) {
  const key = await readKey("player");
  const data = await readData("player", key);
  writeData("journal", { year: data.age, log: event });
}

export { simpleEvent };
