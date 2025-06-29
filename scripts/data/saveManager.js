const request = window.indexedDB.open("gameData", 1);

request.onupgradeneeded = () => {
  const db = request.result;

  const playerDataStore = db.createObjectStore("player", { keyPath: "id" });

  const npcDataStore = db.createObjectStore("npc", { keyPath: "id" });
  npcDataStore.createIndex("relations", "relations");

  const journalDataStore = db.createObjectStore("journal", {
    autoIncrement: true,
  });
  journalDataStore.createIndex("year", "year", {
    unique: false,
  });
};

function readData(store, key) {
  const request = window.indexedDB.open("gameData", 1);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(store, "readonly");
      const txStore = transaction.objectStore(store);

      const getReq = txStore.get(key);

      getReq.onsuccess = () => resolve(getReq.result);

      transaction.oncomplete = () => db.close;
    };
    request.onerror = (event) => {
      console.error("Error opening IndexedDB:", event.target.error);
      reject(event.target.error);
    };
  });
}

function readDataByIndex(store, index, key) {
  const request = window.indexedDB.open("gameData", 1);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(store, "readonly");
      const txStore = transaction.objectStore(store);

      const txIndex = txStore.index(index);
      const getAllReq = txIndex.getAll(key);

      getAllReq.onsuccess = () => {
        resolve(getAllReq.result);
      };

      transaction.oncomplete = () => db.close;
    };
    request.onerror = (event) => {
      console.error("Error opening IndexedDB:", event.target.error);
      reject(event.target.error);
    };
  });
}

function writeData(store, data, key) {
  const request = window.indexedDB.open("gameData", 1);
  request.onsuccess = () => {
    const db = request.result;
    const transaction = db.transaction(store, "readwrite");
    const txStore = transaction.objectStore(store);

    txStore.put(data, key);

    transaction.oncomplete = () => db.close;
  };
  request.onerror = (event) => {
    console.error("Error opening IndexedDB:", event.target.error);
  };
}

function readKey(store) {
  const request = window.indexedDB.open("gameData", 1);
  return new Promise((resolve, reject) => {
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(store, "readonly");
      const txStore = transaction.objectStore(store);
      const cursorReq = txStore.openKeyCursor(null, "prev");

      cursorReq.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          resolve(cursor.key);
        }
      };

      transaction.oncomplete = () => db.close;
    };
    request.onerror = (event) => {
      console.error("Error opening IndexedDB:", event.target.error);
      reject(event.target.error);
    };
  });
}

export { readData, readKey, readDataByIndex, writeData };
