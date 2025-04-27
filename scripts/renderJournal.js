import journal from "../journal.json" with {type: 'json'};

function renderJournal() {
    const line = 16;
    let length = 0;
    const finalRender = [];
    for (let i = journal.length; i !== 0; i--) {
        if (length >= line) break;
        finalRender.push(`Year ${i}\n`);
        length++

        for (let j = 0; j < journal[journal.length - i].length; j++) {
            if (length >= line) break;
            finalRender.push(`${journal[journal.length - i][j]} \n`)
            length++
        }
    }
    return finalRender;
}

export { renderJournal }
