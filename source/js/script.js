const mainNav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".main-nav__toggle");
const menu = document.querySelector(".main-nav__list-box");
const tariffsList = document.querySelector(".price__tariffs-list");
const sliderList = document.querySelector(".slider");
const modalBuy = document.querySelector(".modal-buy");
const modalSuccess = document.querySelector(".modal-success");
const closeButtonBuy = modalBuy.querySelector(".close-button");
const closeButtonSuccess = modalSuccess.querySelector(".close-button");

// Открыть или скрыть меню
if (mainNav.classList.contains("main-nav--no-js")) {
  mainNav.classList.remove("main-nav--no-js");
}

const onClickMenuToggle = (evt) => {
  evt.preventDefault();
  menuToggle.classList.toggle("main-nav__toggle--closed");
  menuToggle.classList.toggle("main-nav__toggle--opened");
  menu.classList.toggle("main-nav__list-box--closed");
  menu.classList.toggle("main-nav__list-box--opened");
}

menuToggle.addEventListener("click", onClickMenuToggle);

// Нажатие на кнопку "Купить тур сейчас" открывает модальное окно
function buyTour (evt) {
  if (evt.target.matches("a.button--buy")) {
    evt.preventDefault();
    modalBuy.classList.remove("modal-buy--closed");
  }
}

tariffsList.addEventListener('click', buyTour);
sliderList.addEventListener('click', buyTour);

// Закрытие модального окна
// по клавише escape
const onKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalBuy.classList.add("modal-buy--closed");
    document.removeEventListener('keydown', onKeydown);
  }
};
// по клику на пустую область модального окна
const onModalClick = (evt) => {
  if (!evt.target.closest(".modal-buy__wrapper")) {
    modalBuy.classList.add("modal-buy--closed");
  }
};
// по кнопке закрытия
const onButtonClick = (evt) => {
  evt.preventDefault();
  modalBuy.classList.add("modal-buy--closed");
};

document.addEventListener('keydown', onKeydown);
modalBuy.addEventListener('click', onModalClick);
closeButtonBuy.addEventListener('click', onButtonClick);
