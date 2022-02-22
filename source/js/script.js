const ECS_KEY = 'Escape';
const mainNav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__list-box');
const tariffsList = document.querySelector('.price__tariffs-list');
const sliderList = document.querySelector('.slider');
const modalBuy = document.querySelector('.modal-buy');

// Закрытие модального окна
const closeModal = (modalClass) => {
  const modal = document.querySelector(`.${modalClass}`);
  const closeButton = modal.querySelector('.close-button');

  // по клавише escape
  const onKeydown = (evt) => {
    if (evt.key === ECS_KEY) {
      evt.preventDefault();
      modal.classList.add(`${modalClass}--closed`);
      modal.classList.remove(`${modalClass}--opened`);
      document.removeEventListener('keydown', onKeydown);
    }
  };
  // по клику на пустую область модального окна
  const onModalClick = (evt) => {
    if (!evt.target.closest(`.${modalClass}__wrapper`)) {
      modal.classList.add(`${modalClass}--closed`);
      modal.classList.remove(`${modalClass}--opened`);
    }
  };
  // по кнопке закрытия
  const onButtonClick = (evt) => {
    evt.preventDefault();
    modal.classList.add(`${modalClass}--closed`);
    modal.classList.remove(`${modalClass}--opened`);
  };

  document.addEventListener('keydown', onKeydown);
  modal.addEventListener('click', onModalClick);
  closeButton.addEventListener('click', onButtonClick);
};

closeModal('modal-buy');
closeModal('modal-success');

// Открыть или скрыть меню
if (mainNav.classList.contains('main-nav--no-js')) {
  mainNav.classList.remove('main-nav--no-js');
}

const onClickMenuToggle = (evt) => {
  evt.preventDefault();
  menuToggle.classList.toggle('main-nav__toggle--closed');
  menuToggle.classList.toggle('main-nav__toggle--opened');
  menu.classList.toggle('main-nav__list-box--closed');
  menu.classList.toggle('main-nav__list-box--opened');
}

menuToggle.addEventListener('click', onClickMenuToggle);

// Нажатие на кнопку 'Купить тур сейчас' открывает модальное окно
function buyTour (evt) {
  if (evt.target.matches('a.button--buy')) {
    evt.preventDefault();
    modalBuy.classList.remove('modal-buy--closed');
    modalBuy.classList.add('modal-buy--opened');
  }
}

tariffsList.addEventListener('click', buyTour);
sliderList.addEventListener('click', buyTour);
