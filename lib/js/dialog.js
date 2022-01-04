class Dialog {
  static getInstance() {
    if (!Dialog._instance) {
      Dialog._instance = new Dialog();
    }
    return Dialog._instance;
  }

  show(data, options = {}) {
    const popup = this.createPopupNode(data, options);
    document.body.classList.add("of-hidden");
    document.body.appendChild(popup);
    requestAnimationFrame(() => {
      popup.classList.add("active");
    });
    if (options.autoClose) {
      document.addEventListener("keyup", this.keyUpChecker);
    }
  }

  hideAll() {
    const popups = document.querySelectorAll(".popup");
    for (let popup of popups) {
      popup.classList.remove("active");
      popup.remove();
    }
    document.body.classList.remove("of-hidden");
    document.removeEventListener("keyup", this.keyUpChecker);
  }

  createPopupNode(data, options) {
    const popup = document.createElement("div");
    popup.className = "popup";
    const overlay = this.createOverlayElement(options);
    popup.appendChild(overlay);
    const content = document.createElement("div");
    content.innerHTML = data;
    content.className = "content";
    const closeBtn = document.createElement("div");
    closeBtn.className = "close-btn f3 br-full";
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", this.hideAll);
    content.appendChild(closeBtn);
    popup.appendChild(content);
    return popup;
  }

  createOverlayElement(options) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    if (options.autoClose) {
      overlay.addEventListener("click", this.hideAll);
    }
    return overlay;
  }

  keyUpChecker = (e) => {
    if (e?.code === "Escape") {
      this.hideAll();
    }
  };
}

export default Dialog;
