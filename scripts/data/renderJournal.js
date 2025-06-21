function loadJournal() {
  const journalContainer = document.querySelector(".js-journal");
  const journalStyle = window.getComputedStyle(journalContainer);
  let journalAmount =
    Math.floor(
      (parseInt(journalStyle.height) / parseInt(journalStyle.fontSize)) * 0.85,
    ) / 2;
  let majournalAmountxLine = 18;
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
        if (cursor && journalAmount > 0) {
          journal.push(cursor.value);
          journalAmount--;
          cursor.continue();
        } else {
          resolve(
            journal.sort((a, b) => parseFloat(a.year) - parseFloat(b.year)),
          );
        }
      };
    };
  });
}

async function renderJournal() {
  const journal = await loadJournal();
  const sortedValue = Object.groupBy(journal, ({ year }) => year);
  const keys = Object.keys(sortedValue);

  const render = [];
  const journalContainer = document.querySelector(".js-journal");
  const journalStyle = window.getComputedStyle(journalContainer);
  const journalAmount =
    Math.floor(
      (parseInt(journalStyle.height) / parseInt(journalStyle.fontSize)) * 0.85,
    ) / 2;

  keys.forEach((i) => {
    render.push(`Year ${i} \n`);
    for (const j in sortedValue[i]) {
      render.push(`    ${sortedValue[i][j].log} \n`);
    }
    console.log(render);
  });

  // if (render.length > journalAmount) {
  //   render.splice(0, render.length - journalAmount);
  // }

  console.log(sortedValue, keys, journalAmount);

  return render.join("");
} //push to frontend

export { loadJournal, renderJournal };
