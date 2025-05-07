import { writeSave } from "./saveManager.js";

function simpleEvent(event) {
  writeSave("journal", { year: 3, log: event });
}

export { simpleEvent };
