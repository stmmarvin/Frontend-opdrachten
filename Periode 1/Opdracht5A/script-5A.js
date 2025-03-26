let formEl = document.querySelector("form"),
  dialogEl = document.querySelector("dialog#result"),
  dialogContent = dialogEl.querySelector("div.content");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  dialogContent.innerHTML = "";

  let inputEls = formEl.querySelectorAll("input,textarea");

  inputEls.forEach((el) => {
    let newEl = document.createElement("div");
    newEl.id = el.name + "-result";
    newEl.innerHTML = `<strong>${el.name}:</strong> ${el.value}`;

    dialogContent.appendChild(newEl);
  });
  dialogEl.showModal();
});

document
  .querySelector("dialog div#dialog-close")
  .addEventListener("click", () => {
    dialogEl.close();
  });
