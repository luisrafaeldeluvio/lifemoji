const journalContainer = document.querySelector(".js-journal");
const journalStyle = window.getComputedStyle(journalContainer);
const journalAmount = Math.floor(
  ((parseInt(journalStyle.height) / parseInt(journalStyle.fontSize)) * 0.85) /
    2,
);

function loadJournal() {
  const journal = [];
  const request = window.indexedDB.open("gameData", 1);
  let amount = journalAmount;

  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("journal", "readonly");
      const store = transaction.objectStore("journal");
      const cursorReq = store.openCursor(null, "prev");

      cursorReq.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor && amount > 0) {
          journal.push(cursor.value);
          amount--;
          cursor.continue();
        } else {
          resolve(journal);
        }
      };
    };
  });
}

async function renderJournal() {
  const journal = await loadJournal();
  const value = Object.groupBy(journal, ({ year }) => year);
  const keys = Object.keys(value);
  const render = [];

  keys.forEach((i) => {
    render.push(`Year ${i} \n`);
    for (const j in value[i]) {
      render.push(`    ${value[i][j].log} \n`);
    }
  });

  return render.join("");
}

export { renderJournal };
