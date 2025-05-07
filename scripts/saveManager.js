function initSave() {
  const request = window.indexedDB.open("PlayerData", 1);
  request.onupgradeneeded = () => {
    const db = request.result;
    const playerStore = db.createObjectStore("player", { keyPath: "_id" });
    const journalStore = db.createObjectStore("journal", {
      autoIncrement: true,
    });

    journalStore.createIndex("year", "year", {
      unique: false,
    });
  };
  // request.onsuccess = () => {
  //   const db = request.result;
  //   const playerTransaction = db.transaction("player", "readwrite");
  //   const journalTransaction = db.transaction("journal", "readwrite");
  //   const playerStore = playerTransaction.objectStore("player");
  //   const journalStore = journalTransaction.objectStore("journal");

  //   const playerPutReq = playerStore.put({
  //     id: "player",
  //     first_name: "",
  //     last_name: "",
  //     age: 0,
  //     sex: "",
  //   });

  //   playerPutReq.onsuccess = () => {
  //     const getReq = playerStore.get("player");

  //     getReq.onsuccess = () => {
  //       console.log(getReq.result);
  //     };
  //   };

  //   journalStore.put({ year: 1, log: "Hello World" });
  //   journalStore.put({ year: 1, log: "Hello" });
  //   journalStore.put({ year: 1, log: "World" });
  //   journalStore.put({ year: 1, log: "Herld" });

  //   playerTransaction.oncomplete = () => {
  //     db.close();
  //   };
  // };
}

function readSave(STORE, KEY) {
  const request = window.indexedDB.open("PlayerData", 1);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(STORE, "readonly");
      const store = transaction.objectStore(STORE);

      const getReq = store.get(KEY);

      getReq.onsuccess = () => resolve(getReq.result);

      transaction.oncomplete = () => db.close;
    };
  });
}

function readSaveByIndex(STORE, INDEX, KEY) {
  const request = window.indexedDB.open("PlayerData", 1);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(STORE, "readonly");
      const store = transaction.objectStore(STORE);

      const index = store.index(INDEX);
      const getAllReq = index.getAll(KEY);

      getAllReq.onsuccess = () => {
        resolve(getAllReq.result);
      };

      transaction.oncomplete = () => db.close;
    };
  });
}

function writeSave(STORE, DATA, KEY) {
  const request = window.indexedDB.open("PlayerData", 1);
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(STORE, "readwrite");
    const store = transaction.objectStore(STORE);

    store.put(DATA, KEY);
  };
}

function readKey(STORE) {
  const request = window.indexedDB.open("PlayerData", 1);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(STORE, "readonly");
      const store = transaction.objectStore(STORE);
      const cursorReq = store.openKeyCursor(null, "prev");

      cursorReq.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          resolve(cursor.key);
        }
      };
    };
  });
}

initSave();

export { readSave, readKey, readSaveByIndex, writeSave };
