let counter = 0; // для поочередного отображения модальных окон
const modals = document.getElementsByClassName("modal");
const overlay = document.getElementsByClassName("overlay").item(0);
const modalButtons = document.getElementsByClassName("modal__footer-button");

document.querySelector(".button--send-review").addEventListener("click", (event) => {
  event.preventDefault();
  showModal();
})

for (let button of modalButtons) {
  button.addEventListener("click", () => {
    closeModal();
  });
}

function showModal() {
  modals[counter % 2].style.display = "block";
  overlay.style.display = "block";
  counter++;
}

function closeModal() {
  for (let modal of modals) {
    modal.style.display = "none";
  }
  overlay.style.display = "none";
}
