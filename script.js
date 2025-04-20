import { fullName } from 'full-name-generator';

import places from "./places.json" with {type: 'json'};

class Stats {
    constructor({
        JOY = this.newStat(),
        HEALTH = this.newStat(),
        SMARTS = this.newStat(),
        LOOKS = this.newStat(),
        KARMA = this.newStat()
    } = {}) {
        this._joy = JOY;
        this._health = HEALTH;
        this._smarts = SMARTS;
        this._looks = LOOKS;
        this._karma = KARMA;
    }

    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    newStat() {
        return Stats.randomInt(1, 100);
    }

    get joy() {
        return this._joy;
    }

    get health() {
        return this._health;
    }

    get smarts() {
        return this._smarts;
    }

    get looks() {
        return this._looks;
    }

    get karma() {
        return this._karma;
    }

    set joy(n) {
        this._joy += n;
    }

    set health(n) {
        this._health += n;
    }

    set smarts(n) {
        this._smarts += n;
    }

    set looks(n) {
        this._looks += n;
    }

    set karma(n) {
        this._karma += n;
    }
}

class Npc {
    constructor({
        BIRTHDAY = Npc.newBirthday(),
        SEX = Npc.newSex(),
        LOCATION
    } = {}) {
        this._id = Npc.newId();
        this._birthday = BIRTHDAY;
        this._sex = SEX;
        this._stats = new Stats();
        this._location = LOCATION;
    }

    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static newId() {
        const x = '1234567890abcdefghijklmnopqrstuvwxyz';
        let id = '';
        while (id.length < 16) {
            id += x.charAt(Npc.randomInt(0, x.length));
        }
        return id;
    }

    static newBirthday() {
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'Agust',
            'September', 'October', 'November', 'December'
        ]
        return `${months[Npc.randomInt(0,11)]} ${Npc.randomInt(1,28)}`;
    }

    static newSex()  {
        return (Npc.randomInt(0, 1) === 0) ? "male" : "female";
    }

    get id() {
        return this._id
    }

    get birthday() {
        return this._birthday;
    }

    get sex() {
        return this._sex;
    }

    get stats() {
        return this._stats;
    }

    get location() {
        return this._location;
    }
}

class Player extends Npc {
    constructor (LOCATION) {
        super();
        this._location = LOCATION;
    }

}


let player = new Player('italy')
let npc = new Npc({ LOCATION: player._location})

console.log(npc);
console.log(player.location);




// Testing area, dont include -----------------------------------------------

// const y = []

// for (let id = 0; id < 1; id++) {
//     y.push(new Npc())
// }

// //const x = y.find(a => a.stats.karma === 1)


// y[0].stats.karma = 2000;

// console.log(y[0].stats.karma);

//console.log(x);