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

async function loadJournal() {
  let maxLine = 18;
  const journal = [];

  const request = window.indexedDB.open("PlayerData", 1);

  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction("journal", "readonly");
    const store = transaction.objectStore("journal");
    const cursorReq = store.openCursor(null, "prev");

    cursorReq.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        if (maxLine !== 0) {
          journal.push(cursor.value);
          cursor.continue();
          maxLine--;
          console.log(journal); //make it order by year
        }
      }
    };
  };

  // for (let i = 1; i < maxLine; i++) {
  //   const a = await readSaveByIndex("journal", "year", 9);
  //   for (let j in a) {
  //     console.log(a[j].log, i);
  //   }
  // }

  // console.log(a);
}

function renderJournal() {} //push to frontend

export { loadJournal, renderJournal };
