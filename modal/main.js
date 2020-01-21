const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementById("close-btn");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", closeOutside);
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
function closeOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    console.log(modal);
    console.log(e.target);
  }
}
