// class complexEvent {
//     constructor({title, body, button, effect} = {}) {
        
//     }
// }
// import fs from 'fs';
// import { renderJournal } from './renderJournal.js';

// const journalRaw = fs.readFileSync("./journal.json", "utf-8");
// const journal = JSON.parse(journalRaw);



function simpleEvent(event) {
    document.getElementsByClassName('main-journalContainer')[0].innerHTML += event;
    // OR CREATE A NEW SPAN OR P ELEMENT FOR EVERY CALL
}

export { simpleEvent }