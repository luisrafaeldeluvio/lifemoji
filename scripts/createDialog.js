import { loadPlayer } from "./data/playerData";

class Dialog {
  static isqueued = false;
  static queueddialog = [];

  constructor({ title, text, stats = [], buttons = {} } = {}) {
    this.title = title;
    this.text = text;
    this.stats = stats;
    this.buttons = buttons;
    this.pushDialog();
  }

  createListener(buttonCount) {
    for (let i = 0; i < buttonCount; i++) {
      document
        .querySelectorAll(".js-dialog-button")
        [i].addEventListener("click", () => {
          this.onAction(`button${i + 1}`);
        });
    }

    document.querySelector(".js-close-button").addEventListener("click", () => {
      this.close();
    });
  }

  async #createDialog(title, text, stats, buttons) {
    const closeButton = document.createElement("button");
    const dialog = document.createElement("dialog");
    const dialogLocation = document.querySelector(".main");

    if (title) {
      const element = document.createElement("h1");
      element.innerText = title;
      element.className = "dialog__title";
      dialog.appendChild(element);
    }

    if (text) {
      const element = document.createElement("p");
      element.innerText = text;
      element.className = "dialog__text";
      dialog.appendChild(element);
    }

    if (stats.length > 0) {
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

    if (Object.keys(buttons).length > 0) {
      const element = document.createElement("div");
      element.className = "dialog__buttons";

      for (const i of Object.entries(buttons)) {
        const elem = document.createElement("button");
        elem.innerText = `${i[1].text}`;
        elem.className = "js-dialog-button";
        element.appendChild(elem);
      }

      dialog.appendChild(element);
    }

    dialog.setAttribute("closedby", "closerequest");
    dialog.className = "dialog";

    closeButton.innerText = "x";
    closeButton.className = "dialog__close js-close-button";
    dialog.appendChild(closeButton);

    document.body.insertBefore(dialog, dialogLocation);
    document.querySelector(".dialog").showModal();
    this.createListener(Object.keys(buttons).length);
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

  #pushToQueue() {
    Dialog.queueddialog.push({
      title: this.title,
      text: this.text,
      stats: this.stats,
      buttons: this.buttons,
    });
  }

  #createDialogFromQueue() {
    const dialogdata = Dialog.queueddialog[0];
    this.#createDialog(
      dialogdata.title,
      dialogdata.text,
      dialogdata.stats,
      dialogdata.buttons,
    );
    Dialog.queueddialog.shift();
  }

  #createDialogFromConstructor() {
    Dialog.isqueued = true;
    this.#createDialog(this.title, this.text, this.stats, this.buttons);
  }

  pushDialog() {
    const x = Dialog.isqueued
      ? this.#pushToQueue()
      : Dialog.queueddialog.length > 0
        ? this.#createDialogFromQueue()
        : this.#createDialogFromConstructor();
  }

  onAction(buttonNum) {
    this.buttons[buttonNum].action();
  }

  close() {
    document.querySelector(".dialog").remove();
    Dialog.isqueued = false;

    Dialog.queueddialog.length > 0 && this.pushDialog();
  }
}

export { Dialog };
