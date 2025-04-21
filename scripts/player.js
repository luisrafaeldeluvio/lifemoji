import { Npc } from "./npc.js";

class Player extends Npc {
    constructor ({LOCATION}) {
        super();
        this._location = LOCATION ?? this._location;
    }

}

export { Player };