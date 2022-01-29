document.querySelector("#btnPopup").addEventListener("click", () => {
  GS.Dialog.getInstance().show(
    `<p class="f3 mt-0">Popup Title</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        eaque neque assumenda, nesciunt nulla quidem, quae deserunt dolor
        illo ipsa corrupti molestiae corporis nisi placeat ipsam sequi magni
        necessitatibus distinctio!
      </p>`,
    { autoClose: true }
  );
});

document.querySelector("#btnPopup1").addEventListener("click", () => {
    GS.Dialog.getInstance().show(
      `<p class="f3 mt-0">Popup Title</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          eaque neque assumenda, nesciunt nulla quidem, quae deserunt dolor
          illo ipsa corrupti molestiae corporis nisi placeat ipsam sequi magni
          necessitatibus distinctio!
        </p>`
    );
  });
  