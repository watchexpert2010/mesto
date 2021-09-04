//popup

let editButton = document.querySelector('.profile__editbutton');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-icon');
let nameInput = document.querySelector('.popup__input-line_value_name');
let jobInput = document.querySelector('.popup__input-line_value_job');
let submitForm = document.querySelector('.popup__input-form');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
function popupActive() {
  popup.classList.add('popup_active');
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
}
function popupInactive() {
  popup.classList.remove('popup_active');
}
function submitInfo (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  popupInactive();
}
submitForm.addEventListener('submit', submitInfo);
editButton.addEventListener('click', popupActive);
popupClose.addEventListener('click', popupInactive);

//addButton-popup

let addButton = document.querySelector('.profile__addbutton');
let addButtonPopup = document.querySelector('.addcard-popup');
let addCardClose = document.querySelector('.addcard-popup__close-icon');

let addCardPlaceInput = document.querySelector('.addcard-popup__input-line_value_place');
let addCardLinkInput = document.querySelector('.addcard-popup__input-line_value_link');

function addCardPopupActive() {
  addButtonPopup.classList.add('addcard-popup_active');
}

function addCardPopupInactive() {
  addButtonPopup.classList.remove('addcard-popup_active');
}

addButton.addEventListener('click', addCardPopupActive);
addCardClose.addEventListener('click', addCardPopupInactive);

//cards

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const postsElement = document.querySelector('.elements__list');
const postTemplate = document.querySelector('#cards-template').content;
const cardsName = document.querySelector('.elements__title');
const cardsUrl = document.querySelector('elements__city');


const addPost = (post) => {
  const postElement = postTemplate.querySelector('.elements__element').cloneNode(true);
  postElement.querySelector('.elements__title').textContent = post.name;
  postElement.querySelector('.elements__city').style.backgroundImage = `url(${post.link})`
  postsElement.append(postElement);
};

initialCards.forEach((post) => {
  addPost(post);
});
