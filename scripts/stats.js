class Stats {
    constructor({
        JOY = this.newStat(),
        HEALTH = this.newStat(),
        SMARTS = this.newStat(),
        LOOKS = this.newStat(),
        KARMA = this.newStat()
    } = {}) {
        this._joy = JOY;
        this._health = HEALTH;
        this._smarts = SMARTS;
        this._looks = LOOKS;
        this._karma = KARMA;
    }

    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    newStat() {
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
        this._joy += n;
    }

    set health(n) {
        this._health += n;
    }

    set smarts(n) {
        this._smarts += n;
    }

    set looks(n) {
        this._looks += n;
    }

    set karma(n) {
        this._karma += n;
    }
}

export { Stats };