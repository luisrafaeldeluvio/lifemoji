import { renderJournal } from "./data/renderJournal.js";
import { playerData } from "./data/playerData.js";

const player = playerData;

async function updateRender() {
  const query = {
    ".js-journal": await renderJournal(),
    ".js-fullname": player.fullName,
    ".js-stat-joy": player.stats._joy,
    ".js-stat-health": player.stats._health,
    ".js-stat-smarts": player.stats._smarts,
    ".js-stat-looks": player.stats._looks,
    ".js-profile": `${player.sex}, ${player.age}`,
  };

  for (const [key, value] of Object.entries(query)) {
    document.querySelector(key).innerHTML = value;
  }
}

export { updateRender };
