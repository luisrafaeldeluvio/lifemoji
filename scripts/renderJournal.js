// function renderJournal() {
//   let length = 0;
//   const line = 18;
//   const finalRender = [];
//   const journalObject = Object.keys(journal);
//   for (let i in journalObject) {
//     if (length >= line) break;
//     length++;
//     const year = Number(journalObject.length - i).toString();

//     for (let j in journal[year]) {
//       if (length >= line) break;
//       length++;
//       finalRender.push(journal[year][j]);
//     }
//     finalRender.push(`Year ${year}`);
//   }
//   return finalRender.reverse();
// }

import { readSaveByIndex } from "./saveManager.js";

function loadJournal() {
  let maxLine = 18;
  const journal = [];

  const request = window.indexedDB.open("PlayerData", 1);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("journal", "readonly");
      const store = transaction.objectStore("journal");
      const cursorReq = store.openCursor(null, "prev");

      cursorReq.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          journal.push(cursor.value);

          maxLine--;

          if (maxLine !== 0) {
            cursor.continue();
          } else {
            resolve(
              journal.sort((a, b) => parseFloat(a.year) - parseFloat(b.year))
            );
          }
        }
      };
    };
  });
}

async function renderJournal() {
  const journal = await loadJournal();
  const sorted = Object.groupBy(journal, ({ year }) => year);
  const keys = Object.keys(sorted);

  keys.forEach((i) => {
    console.log(i); //year
    for (const j in sorted[i]) {
      console.log(sorted[i][j].log);
    }
  });
} //push to frontend

export { loadJournal, renderJournal };
