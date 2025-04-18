import { fullName } from 'full-name-generator';

class stats {
    constructor({
        joy = this.newStats(),
        health = this.newStats(),
        smarts = this.newStats(),
        looks = this.newStats(),
        karma = this.newStats()
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

    newStats() {
        return stats.randomInt(1, 100);
    }
}

class npc {  // npc extends stats?
    constructor({
        birthday = npc.newBirthday(),
        sex = npc.newSex()
    } = {}) {
        this.id = npc.newId();
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
            id += x.charAt(npc.randomInt(0, x.length));
        }
        return id;
    }

    static newBirthday() {
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'Agust',
            'September', 'October', 'November', 'December'
        ]
        return `${months[npc.randomInt(0,11)]} ${npc.randomInt(1,28)}`;
    }

    static newSex()  {
        return (npc.randomInt(0, 1) === 0) ? "male" : "female";
    }
}

const y = []

y.push(new npc({ sex: 'male'}))
y.push(new npc())

console.log(y);

