import { writeSave } from "./saveManager.js";

function simpleEvent(year, event) {
  writeSave("journal", { year: year, log: event });
}

export { simpleEvent };
