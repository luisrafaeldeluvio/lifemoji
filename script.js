import { fullName } from 'full-name-generator';

class Stats {
    constructor({
        joy = this.newStat(),
        health = this.newStat(),
        smarts = this.newStat(),
        looks = this.newStat(),
        karma = this.newStat()
    } = {}) {
        this.joy = joy;
        this.health = health;
        this.smarts = smarts;
        this.looks = looks;
        this.karma = karma;
    }

    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    newStat() {
        return Stats.randomInt(1, 100);
    }
}

class Npc {
    constructor({
        birthday = Npc.newBirthday(),
        sex = Npc.newSex()
    } = {}) {
        this.id = Npc.newId();
        this.birthday = birthday;
        this.sex = sex;
        this.stats = new stats();
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

    get getId() {
        return this.id
    }

    get getBirthday() {
        return this.birthday;
    }

    get getSex() {
        return this.sex;
    }
}

// class Player extends Npc {}

const y = []

for (let id = 0; id < 100; id++) {
    y.push(new Npc())
}

const x = y.find(a => a.birthday === 'January 1')

console.log(x);

