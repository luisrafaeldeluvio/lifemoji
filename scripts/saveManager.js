const request = window.indexedDB.open("PlayerData", 1);

request.onerror = (err) => {
  console.error(err);
};

function initSave() {
  request.onupgradeneeded = () => {
    const db = request.result;
    const playerStore = db.createObjectStore("player", { keyPath: "id" });
    const journalStore = db.createObjectStore("journal", {
      autoIncrement: true,
    });

    journalStore.createIndex("journal_logs", ["year", "log"], {
      unique: false,
    });
  };

  request.onsuccess = () => {
    const db = request.result;
    const playerTransaction = db.transaction("player", "readwrite");
    const journalTransaction = db.transaction("journal", "readwrite");
    const playerStore = playerTransaction.objectStore("player");
    const journalStore = journalTransaction.objectStore("journal");

    const playerPutReq = playerStore.put({
      id: "player",
      first_name: "",
      last_name: "",
      age: 0,
      sex: "",
    });

    playerPutReq.onsuccess = () => {
      const getReq = playerStore.get("player");

      getReq.onsuccess = () => {
        console.log(getReq.result);
      };
    };

    journalStore.put({ year: 1, log: "Hello World" });
    journalStore.put({ year: 1, log: "Hello" });
    journalStore.put({ year: 1, log: "World" });
    journalStore.put({ year: 1, log: "Herld" });

    playerTransaction.oncomplete = () => {
      db.close();
    };
  };
}

function readSave(STORE) {
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(STORE, "readonly");
    const store = transaction.objectStore(STORE);

    const getReq = store.get(STORE);

    getReq.onsuccess = () => {
      return getReq.result;
    };

    getReq.onerror = (e) => {
      console.error(e);
    };
  };
}

function writeSave(STORE, DATA) {
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(STORE, "readwrite");
    const store = transaction.objectStore(STORE);

    store.put(DATA);
  };
}

initSave();

export { readSave, writeSave };
