import places from "../assets/places.json" with {type: 'json'};
import { firstName, lastName } from 'full-name-generator';
import { Stats } from "./stats.js";

class Skeleton {

    constructor({
        id, birthday, age, sex, location,
        firstname, lastname, relations, stats
    } = {}) {
        this._id = id ?? Skeleton.#newId();
        this._birthday = birthday ?? Skeleton.#newBirthday();
        this._age = age ?? 0;
        this._sex = sex ?? Skeleton.#newSex();
        this._location = location ?? Skeleton.#newLocation();
        this._firstname = firstname ?? Skeleton.#newFirstName(this._location, this._sex);
        this._lastname = lastname ?? Skeleton.#newLastName(this._location, this._sex);
        this._relations = relations;
        this._stats = stats ?? new Stats({relations});
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
            id += x.charAt(Skeleton.#randomInt(0, x.length));
        }
        return id;
    }

    static #newBirthday() {
        return `${Skeleton.#randomInt(1,12)}/${Skeleton.#randomInt(1,28)}`
    }

    static #newSex()  {
        return (Skeleton.#randomInt(0, 1) === 0) ? "male" : "female";
    }

    static #newLocation() {
        // if (Skeleton._randomInt(1, 100) < 90 && player.location !== undefined) {
        //     return player.location;
        // } else {
            const loc = Object.keys(places);
            return loc[Skeleton.#randomInt(0, loc.length)];
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

    get stats() {
        return this._stats;
    }

    get relations() {
        return this._relations;
    }

    set id(value) {
        this._id = value;
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

    set stats(value) {
        this._stats = Math.max(0, Math.min(value, 100));;
    }

    set relations(value) {
        this._relations = value;
    }
}

export { Skeleton };