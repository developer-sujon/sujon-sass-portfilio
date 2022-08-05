//Ui Elements Selector
const toggleNav = document.querySelector(".nav__wrapper__toggle");
const navWrapper = document.querySelector(".nav__wrapper__ul");
let writeName = document.querySelector(".header__data__contents__heading");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__wrapper__close");
const openModal = document.querySelector(".open__modal");

const writeNameText = "Mohammd Sujon";

//Define Event Listners

//Mobile Responsive Menu
toggleNav.addEventListener("click", (e) => {
  navWrapper.classList.toggle("nav_active");
});

//Type Effect
let start = 0;
const typeWrite = () => {
  if (start < writeNameText.length) {
    writeName.innerHTML += writeNameText.charAt(start);
    start++;
    setTimeout(typeWrite, 300);
  }
};

typeWrite();

//Modal Hide/Show
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
