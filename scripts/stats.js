class Stats {
  constructor({
    relations,
    joy,
    health,
    smarts,
    looks,
    karma,
    relationship,
    generosity,
    money,
  } = {}) {
    switch (relations) {
      case "player":
        this._joy = joy ?? Stats.newStat();
        this._health = health ?? Stats.newStat();
        this._smarts = smarts ?? Stats.newStat();
        this._looks = looks ?? Stats.newStat();
        this._karma = karma ?? Stats.newStat();
        break;
      case "parent":
        this._relationship = relationship ?? Stats.newStat();
        this._generosity = generosity ?? Stats.newStat();
        this._money = money ?? Stats.newStat();
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
