import { Npc } from "./npc.js";

class Player extends Npc {
    constructor ({
        birthday, sex,
        stats, location,
        firstname, lastname, age
    } = {}) {
        super({
            birthday, sex,
            stats, location,
            firstname, lastname, age
        });
    }

}

export { Player };