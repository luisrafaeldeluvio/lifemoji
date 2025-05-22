import places from "../assets/places.json" with {type: 'json'};
import { firstName, lastName } from 'full-name-generator';
import { Stats } from "./stats.js";

class Skeleton {
    constructor({
        id, birthday, age, sex, location,
        firstname, lastname, relations, stats
    } = {}) {
        this.id = id ?? Npc.#newId();
        this.birthday = birthday ?? Npc.#newBirthday();
        this.age = age ?? 0;
        this.sex = sex ?? Npc.#newSex();
        this.location = location ?? Npc.#newLocation();
        this.firstname = firstname ?? Npc.#newFirstName(this.location, this.sex);
        this.lastname = lastname ?? Npc.#newLastName(this.location, this.sex);
        this.relations = relations;
        this.stats = stats ?? new Stats({relations});
    }

    static #randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static #newFirstName(location, sex) {
        return firstName(places[location]['iso'], (sex === 'male') ? 0 : 1, 1)
    }

    static #newLastName(location, sex) {
        return lastName(places[location]['iso'], (sex === 'male') ? 0 : 1, 1)
    }

    static #newId() {
        const x = '1234567890abcdefghijklmnopqrstuvwxyz';
        let id = '';
        while (id.length < 16) {
            id += x.charAt(Npc.#randomInt(0, x.length));
        }
        return id;
    }

    static #newBirthday() {
        return `${Npc.#randomInt(1,12)}/${Npc.#randomInt(1,28)}`
    }

    static #newSex()  {
        return (Npc.#randomInt(0, 1) === 0) ? "male" : "female";
    }

    static #newLocation() {
        // if (Npc.#randomInt(1, 100) < 90 && player.location !== undefined) {
        //     return player.location;
        // } else {
            const loc = Object.keys(places);
            return loc[Npc.#randomInt(0, loc.length)];
        // }
    }

    get id() {
        return this.id
    }

    get birthday() {
        return this.birthday;
    }

    get age() {
        return this.age;
    }

    get sex() {
        return this.sex;
    }

    get location() {
        return this.location;
    }

    get firstName() {
        return this.firstname;
    }

    get lastName() {
        return this.lastname;
    }

    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }

    get stats() {
    return this.stats;
  }

    set birthday(value) {
        this.birthday = value;
    }

    set age(value) {
        this.age = value;
    }

    set sex(value) {
        this.sex = value;
    }

    set location(value) {
        this.location = value;
    }

    set firstName(value) {
        this.firstname = value;
    }

    set lastName(value) {
        this.lastname = value;
    }

    set stats(value) {
    this.stats = Math.max(0, Math.min(value, 100));;
  }
}

export { Skeleton };