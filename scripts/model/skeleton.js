import places from "../../assets/places.json" with { type: "json" };
import { firstName, lastName } from "full-name-generator";
import { Stats } from "../data/stats.js";

class Skeleton {
  constructor({
    id,
    birthday,
    age,
    sex,
    location,
    firstname,
    lastname,
    relations,
    stats,
  } = {}) {
    this.id = id ?? Skeleton.#newId();
    this.birthday = birthday ?? Skeleton.#newBirthday();
    this.age = age ?? 0;
    this.sex = sex ?? Skeleton.#newSex();
    this.location = location ?? Skeleton.#newLocation();
    this.firstname =
      firstname ?? Skeleton.#newFirstName(this.location, this.sex);
    this.lastname = lastname ?? Skeleton.#newLastName(this.location, this.sex);
    this.relations = relations;
    this.stats = stats ?? new Stats({ relations });
  }

  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static #newFirstName(location, sex) {
    return firstName(places[location]["iso"], sex === "male" ? 0 : 1, 1);
  }

  static #newLastName(location, sex) {
    return lastName(places[location]["iso"], sex === "male" ? 0 : 1, 1);
  }

  static #newId() {
    const x = "1234567890abcdefghijklmnopqrstuvwxyz";
    let id = "";
    while (id.length < 16) {
      id += x.charAt(Skeleton.randomInt(0, x.length));
    }
    return id;
  }

  static #newBirthday() {
    return `${Skeleton.randomInt(1, 12)}/${Skeleton.randomInt(1, 28)}`;
  }

  static #newSex() {
    return Skeleton.randomInt(0, 1) === 0 ? "male" : "female";
  }

  static #newLocation() {
    // if (Skeleton.randomInt(1, 100) < 90 && player.location !== undefined) {
    //     return player.location;
    // } else {
    const loc = Object.keys(places);
    return loc[Skeleton.randomInt(0, loc.length)];
    // }
  }

  get getId() {
    return this.id;
  }

  get getBirthday() {
    return this.birthday;
  }

  get getSge() {
    return this.age;
  }

  get getDex() {
    return this.sex;
  }

  get getLocation() {
    return this.location;
  }

  get getFirstName() {
    return this.firstname;
  }

  get getLastName() {
    return this.lastname;
  }

  get getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }

  get getStats() {
    return this.stats;
  }

  get getRelations() {
    return this.relations;
  }

  set setId(value) {
    this.id = value;
  }

  set setBirthday(value) {
    this.birthday = value;
  }

  set setAge(value) {
    this.age = value;
  }

  set setSex(value) {
    this.sex = value;
  }

  set setLocation(value) {
    this.location = value;
  }

  set setFirstName(value) {
    this.firstname = value;
  }

  set setLastName(value) {
    this.lastname = value;
  }

  set setStats(value) {
    this.stats = Math.max(0, Math.min(value, 100));
  }

  set setRelations(value) {
    this.relations = value;
  }
}

export { Skeleton };
