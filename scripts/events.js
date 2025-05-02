function simpleEvent(event) {
  //save muna sa journal.json before pushing
  const span = document.createElement("span");
  span.innerHTML = event;
  document.getElementsByClassName("main-journalContainer")[0].appendChild(span);
}

export { simpleEvent };

// USE INDEXEDDB FOR STORING USER DATA
// USE INDEXEDDB FOR STORING USER DATA
// USE INDEXEDDB FOR STORING USER DATA
// USE INDEXEDDB FOR STORING USER DATA
// USE INDEXEDDB FOR STORING USER DATA

// PLAN OUT A BETTER WAY TO FETCH THE JOURNAL
