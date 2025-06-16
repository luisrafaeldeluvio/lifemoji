import { loadPlayer } from "./data/playerData";

class Dialog {
  static isqueued = false;
  static dialogcount = 0;
  static queueddialog = [];

  constructor({ title, text, stats = [], buttons = {} } = {}) {
    this.title = title;
    this.text = text;
    this.stats = stats;
    this.buttons = buttons;
    this.pushDialog();
  }

  createListener() {
    document
      .querySelectorAll(".js-dialog-button")[0] //the first button
      .addEventListener("click", () => {
        this.close();
        this.onAction("button1");
      });
  }

  async createDialog(title, text, stats, buttons) {
    const dialog = document.createElement("dialog");
    dialog.setAttribute("closedby", "closerequest");
    dialog.className = "dialog";

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

    const location = document.querySelector(".main");

    document.body.insertBefore(dialog, location);
    this.createListener();
    document.querySelector(".dialog").showModal();
  }

  async pushDialog() {
    // new Promise((resolve, reject) => {
    // if (Dialog.queueddialog.length > 0) {
    //   console.log(0);
    // }

    console.log(`isqueued = ${Dialog.isqueued}`);

    if (Dialog.isqueued) {
      Dialog.queueddialog.push({
        title: this.title,
        text: this.text,
        stats: this.stats,
        buttons: this.buttons,
      });

      console.log(`promise rejected, isqueued = ${Dialog.isqueued}`);

      console.log(
        Array.isArray(Dialog.queueddialog),
        typeof Dialog.queueddialog,
        // Object.keys(Dialog.queueddialog),
        // Object.entries(Dialog.queueddialog),
        Dialog.queueddialog.length,
        Dialog.queueddialog,
      );

      return;
    }

    if (!Dialog.isqueued) {
      if (Dialog.queueddialog.length > 0) {
        console.log(Dialog.queueddialog[0]);
        const dialogdata = Dialog.queueddialog[0];
        this.createDialog(
          dialogdata.title,
          dialogdata.text,
          dialogdata.stats,
          dialogdata.buttons,
        );
        Dialog.queueddialog.shift();
        return;
      }

      Dialog.isqueued = true;
      console.log(`promise resolved: isqueued = ${Dialog.isqueued}`);
      this.createDialog(this.title, this.text, this.stats, this.buttons);
    }
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

  close() {
    document.querySelector(".dialog").remove();
    console.log("DIALOG CLOSED");
    Dialog.isqueued = false;
    this.pushDialog();
  }
}

export { Dialog };
