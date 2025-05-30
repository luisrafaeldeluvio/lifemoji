import { loadPlayer } from "./data/playerData";

class Dialog {
  constructor({
    title,
    text,
    stats = [],
    buttons = {
      button1: {
        text,
        action: new Function(),
      },
      button2: {
        text,
        action: new Function(),
      },
      button3: {
        text,
        action: new Function(),
      },
      button4: {
        text,
        action: new Function(),
      },
    },
  } = {}) {
    this.title = title;
    this.text = text;
    this.stats = stats;
    this.buttons = buttons;
    this.createDialog();
  }

  async createDialog() {
    const dialog = document.createElement("dialog");
    dialog.className = "dialog";

    if (this.title) {
      const element = document.createElement("h1");
      element.innerText = this.title;
      element.className = "dialog-title";
      dialog.appendChild(element);
    }

    if (this.text) {
      const element = document.createElement("p");
      element.innerText = this.text;
      element.className = "dialog-text";
      dialog.appendChild(element);
    }

    if (this.stats.length > 0) {
      const player = await loadPlayer();

      const element = document.createElement("div");
      element.className = "dialog-statsContainer";

      for (const i of this.stats) {
        const elem = document.createElement("span");
        elem.innerText = `${i}: ${player._stats[`_${i}`]}`;
        elem.className = "dialog-stats";
        element.appendChild(elem);
      }
      dialog.appendChild(element);
    }

    if (Object.keys(this.buttons).length > 0) {
      const element = document.createElement("div");
      element.className = "dialog-buttonsContainer";

      for (const i of Object.entries(this.buttons)) {
        const elem = document.createElement("button");
        elem.innerText = `${i[1].text}`;
        elem.className = "dialog-buttons";
        element.appendChild(elem);
      }
      dialog.appendChild(element);
    }

    const location = document.getElementsByClassName("playerInfo")[0];

    document.body.insertBefore(dialog, location);
    document.getElementsByClassName("dialog")[0].showModal();
  }

  onAction(buttonNum) {
    this.buttons[buttonNum].action();
  }
}

export { Dialog };
