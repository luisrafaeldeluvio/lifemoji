import { firstName, lastName } from 'full-name-generator';

import places from "../assets/places.json" with {type: 'json'};

class Npc {
    constructor({
        id, birthday, age, sex, location,
        firstname, lastname, relations
    } = {}) {
        this._id = id ?? Npc.newId();
        this._birthday = birthday ?? Npc.newBirthday();
        this._age = age ?? 0;
        this._sex = sex ?? Npc.newSex();
        this._location = location ?? Npc.newLocation();
        this._firstname = firstname ?? Npc.newFirstName(this._location, this._sex);
        this._lastname = lastname ?? Npc.newLastName(this._location, this._sex);
        this._relations = relations;
    }

    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static newFirstName(location, sex) {
        return firstName(places[location]['iso'], (sex === 'male') ? 0 : 1, 1)
    }

    static newLastName(location, sex) {
        return lastName(places[location]['iso'], (sex === 'male') ? 0 : 1, 1)
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
        return `${Npc.randomInt(1,12)}/${Npc.randomInt(1,28)}`
    }

    static newSex()  {
        return (Npc.randomInt(0, 1) === 0) ? "male" : "female";
    }

    static newLocation() {
        // if (Npc.randomInt(1, 100) < 90 && player._location !== undefined) {
        //     return player._location;
        // } else {
            const loc = Object.keys(places);
            return loc[Npc.randomInt(0, loc.length)];
        // }
    }

    get id() {
        return this._id
    }

    get birthday() {
        return this._birthday;
    }

    get age() {
        return this._age;
    }

    get sex() {
        return this._sex;
    }

    get location() {
        return this._location;
    }

    get firstName() {
        return this._firstname;
    }

    get lastName() {
        return this._lastname;
    }

    get fullName() {
        return `${this._firstname} ${this._lastname}`;
    }

    set birthday(value) {
        this._birthday = value;
    }

    set age(value) {
        this._age = value;
    }

    set sex(value) {
        this._sex = value;
    }

    set location(value) {
        this._location = value;
    }

    set firstName(value) {
        this._firstname = value;
    }

    set lastName(value) {
        this._lastname = value;
    }

    //npcs stats of their own
    //interaction methods
}

export { Npc };