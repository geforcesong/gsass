class Dialog {
  static getInstance() {
    if (!Dialog._instance) {
      Dialog._instance = new Dialog();
    }
    return Dialog._instance;
  }

  show(data) {
    const popup = this.createPopupNode(data);
    document.body.classList.add("of-hidden");
    document.body.appendChild(popup);
    requestAnimationFrame(() => {
      popup.classList.add("active");
    });
  }

  hide(el) {
    const popup = el.currentTarget.closest(".popup");
    popup.classList.toggle("active");
    document.body.classList.remove("of-hidden");
    popup.remove();
  }

  createPopupNode(data) {
    const popup = document.createElement("div");
    popup.className = "popup";
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    const content = document.createElement("div");
    content.innerHTML = data;
    content.className = "content";
    const closeBtn = document.createElement("div");
    closeBtn.className = "close-btn f3 br-full";
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", this.hide);
    content.appendChild(closeBtn);
    popup.appendChild(overlay);
    popup.appendChild(content);
    return popup;
  }
}

export default Dialog;