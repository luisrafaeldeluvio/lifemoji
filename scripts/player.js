import { Npc } from "./npc.js";

class Player extends Npc {
    constructor ({
        birthday, sex,
        stats, location,
        firstname, lastname
    }) {
        super({
            birthday, sex,
            stats, location,
            firstname, lastname
        });
    }

}

export { Player };