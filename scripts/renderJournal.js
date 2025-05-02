import journal from "../journal.json" with {type: 'json'};

function renderJournal() {
    let length = 0;
    const line = 18;
    const finalRender = [];
    const journalObject = Object.keys(journal);
    for (let i in journalObject) {
        if (length >= line) break;
        length++
        const year = (Number(journalObject.length - i)).toString();
        
        for (let j in journal[year]) {
            if (length >= line) break;
            length++
            finalRender.push((journal[year][j]));
        }
        finalRender.push(`Year ${year}`)
    }
    return finalRender.reverse();
}

export { renderJournal }