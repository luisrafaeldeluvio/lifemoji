import { loadPlayer } from "./data/playerData";

class Dialog {
  constructor({ title, text, stats = [], buttons = {} } = {}) {
    this.title = title;
    this.text = text;
    this.stats = stats;
    this.buttons = buttons;
    this.createDialog();
  }

  async createDialog() {
    const dialog = document.createElement("dialog");
    dialog.setAttribute("closedby", "closerequest");
    dialog.className = "dialog";

    if (this.title) {
      const element = document.createElement("h1");
      element.innerText = this.title;
      element.className = "dialog__title";
      dialog.appendChild(element);
    }

    if (this.text) {
      const element = document.createElement("p");
      element.innerText = this.text;
      element.className = "dialog__text";
      dialog.appendChild(element);
    }

    if (this.stats.length > 0) {
      const player = await loadPlayer();

      const element = document.createElement("div");
      element.className = "dialog__stats";

      for (const i of this.stats) {
        const elem = document.createElement("span");
        elem.innerText = `${i}: ${player._stats[`_${i}`]}`;
        elem.className = "js-dialog-stat";
        element.appendChild(elem);
      }
      dialog.appendChild(element);
    }

    if (Object.keys(this.buttons).length > 0) {
      console.log(Object.keys(this.buttons).length);

      const element = document.createElement("div");
      element.className = "dialog__buttons";

      for (const i of Object.entries(this.buttons)) {
        const elem = document.createElement("button");
        elem.innerText = `${i[1].text}`;
        elem.className = "js-dialog-button";
        element.appendChild(elem);
      }
      dialog.appendChild(element);
    }

    const location = document.querySelector(".panel");

    document.body.insertBefore(dialog, location);
    document.querySelector(".dialog").showModal();
  }

  // [ Button Example ]
  // buttons = {
  //     button1: {
  //       text,
  //       action: new Function(),
  //     },
  //     button2: {
  //       text,
  //       action: new Function(),
  //     },
  //     button3: {
  //       text,
  //       action: new Function(),
  //     },
  //     button4: {
  //       text,
  //       action: new Function(),
  //     },
  // },

  onAction(buttonNum) {
    this.buttons[buttonNum].action();
  }
}

export { Dialog };
