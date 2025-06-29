import { renderJournal } from "./data/renderJournal.js";
import { playerData } from "./data/playerData.js";

async function updateRender() {
  const player = await playerData();

  const query = {
    ".js-journal": await renderJournal(),
    ".js-fullname": player.fullName,
    ".js-stat-joy": player.stats.joy,
    ".js-stat-health": player.stats.health,
    ".js-stat-smarts": player.stats.smarts,
    ".js-stat-looks": player.stats.looks,
    ".js-profile": `${player.sex}, ${player.age}`,
  };

  for (const [key, value] of Object.entries(query)) {
    document.querySelector(key).innerHTML = value;
  }
}

export { updateRender };
