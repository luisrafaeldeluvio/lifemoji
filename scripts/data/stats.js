class Stats {
  constructor({
    relations,
    joy,
    health,
    smarts,
    looks,
    karma,
    generosity,
    money,
  } = {}) {
    switch (relations) {
      case "player":
        this.joy = joy ?? Stats.newStat();
        this.health = health ?? Stats.newStat();
        this.smarts = smarts ?? Stats.newStat();
        this.looks = looks ?? Stats.newStat();
        this.karma = karma ?? Stats.newStat();
        break;
      case "parent":
        this.generosity = generosity ?? Stats.newStat();
        this.money = money ?? Stats.newStat();
        break;
      default:
        break;
    }
  }

  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static newStat() {
    return Stats.randomInt(1, 100);
  }
}

export { Stats };
