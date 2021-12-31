function createPopupNode(html) {
  const popup = document.createElement("div");
  popup.className = "popup";
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  const content = document.createElement("div");
  content.innerHTML = html;
  content.className = "content";
  const closeBtn = document.createElement("div");
  closeBtn.className = "close-btn f3 br-full";
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", window.hideDialog);
  content.appendChild(closeBtn);
  popup.appendChild(overlay);
  popup.appendChild(content);
  return popup;
}

window.showDialog = (html) => {
  const popup = createPopupNode(html);
  document.body.appendChild(popup);
  requestAnimationFrame(() => {
    popup.classList.add("active");
  });
};

window.hideDialog = (el) => {
  const popup = el.currentTarget.closest(".popup");
  popup.classList.toggle("active");
  popup.remove();
};
