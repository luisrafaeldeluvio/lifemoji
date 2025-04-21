import { Stats } from "./stats.js";
import { player } from "./playerCurrent.js";
import places from "../places.json" with {type: 'json'};

class Npc {
    constructor() {
        this._id = Npc.newId();
        this._birthday = Npc.newBirthday();
        this._sex = Npc.newSex();
        this._stats = new Stats();
        this._location = Npc.newLocation();
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

    static newLocation() {
        if (Npc.randomInt(1, 100) < 90) {
            return player._location;
        } else {
            const loc = Object.keys(places);
            return loc[Npc.randomInt(0, loc.length)];
        }
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

export { Npc };