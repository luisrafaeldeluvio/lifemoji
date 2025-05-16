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
        if (cursor && maxLine > 0) {
          journal.push(cursor.value);
          maxLine--;
          cursor.continue();
        } else {
          resolve(
            journal.sort((a, b) => parseFloat(a.year) - parseFloat(b.year))
          );
        }
      };
    };
  });
}

async function renderJournal() {
  const journal = await loadJournal();
  const sorted = Object.groupBy(journal, ({ year }) => year);
  const keys = Object.keys(sorted);
  const render = [];

  keys.forEach((i) => {
    render.push(`Year ${i} \n`);
    for (const j in sorted[i]) {
      render.push(`${sorted[i][j].log} \n`);
    }
  });

  if (render.length > 18) {
    render.splice(0, render.length - 18);
  }
  return render.join("");
} //push to frontend

export { loadJournal, renderJournal };
