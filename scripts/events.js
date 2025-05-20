import { readSave, readKey, writeSave } from "./saveManager.js";

async function simpleEvent(event) {
  const key = await readKey("player");
  const data = await readSave("player", key);
  writeSave("journal", { year: data._age, log: event });
}

export { simpleEvent };
