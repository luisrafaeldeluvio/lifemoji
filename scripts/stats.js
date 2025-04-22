class Stats {
    constructor({
        joy = Stats.newStat(),
        health = Stats.newStat(),
        smarts = Stats.newStat(),
        looks = Stats.newStat(),
        karma = Stats.newStat()
    } = {}) {
        this._joy = joy;
        this._health = health;
        this._smarts = smarts;
        this._looks = looks;
        this._karma = karma;
    }

    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static clamp(e) {
        return Math.max(0, Math.min(e, 100));
    }

    static newStat() {
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
        this._joy = Stats.clamp(n);
    }

    set health(n) {
        this._health = Stats.clamp(n);
    }

    set smarts(n) {
        this._smarts = Stats.clamp(n);
    }

    set looks(n) {
        this._looks = Stats.clamp(n);
    }

    set karma(n) {
        this._karma = Stats.clamp(n);
    }
}

export { Stats };