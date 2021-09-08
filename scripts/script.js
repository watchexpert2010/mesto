//profile-popup

const editButton = document.querySelector('.profile__editbutton');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileClose = document.querySelector('.popup-profile__close-icon');
const nameInput = document.querySelector('.popup-profile__input-line_value_name');
const jobInput = document.querySelector('.popup-profile__input-line_value_job');
const submitForm = document.querySelector('.popup-profile__input-form');
const ProfileTitle = document.querySelector('.profile__title');
const ProfileSubtitle = document.querySelector('.profile__subtitle');
function ProfilePopupActive() {
  popupProfile.classList.add('popup-profile_active');
  nameInput.value = ProfileTitle.textContent;
  jobInput.value = ProfileSubtitle.textContent;
}
function ProfilePopupInactive() {
  popupProfile.classList.remove('popup-profile_active');
}
function submitInfo (evt) {
  evt.preventDefault();
  ProfileTitle.textContent = nameInput.value;
  ProfileSubtitle.textContent = jobInput.value;
  ProfilePopupInactive();
}
submitForm.addEventListener('submit', submitInfo);
editButton.addEventListener('click', ProfilePopupActive);
popupProfileClose.addEventListener('click', ProfilePopupInactive);

//addCardsPopup + bigImagePopup

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

const addButton = document.querySelector('.profile__addbutton');
const addButtonPopup = document.querySelector('.addcard-popup');
const addCardClose = document.querySelector('.addcard-popup__close-icon');

const postingFormElement = document.querySelector('.addcard-popup__input-form');
const addCardPlaceInput = document.querySelector('.addcard-popup__input-line_value_place');
const addCardLinkInput = document.querySelector('.addcard-popup__input-line_value_link');


function addCardPopupActive() {
  addButtonPopup.classList.add('addcard-popup_active');
}

function addCardPopupInactive() {
  addButtonPopup.classList.remove('addcard-popup_active');
}

addButton.addEventListener('click', addCardPopupActive);
addCardClose.addEventListener('click', addCardPopupInactive);


const postsElement = document.querySelector('.elements__list');
const postTemplate = document.querySelector('#cards-template').content;
const cardsName = document.querySelector('.elements__title');
const cardsUrl = document.querySelector('.elements__city');

const removePostHandler = (event) => {
  event.target.closest('.elements__element').remove();
};

const addPost = (post) => {
  const postElement = postTemplate.querySelector('.elements__element').cloneNode(true);
  postElement.querySelector('.elements__title').textContent = post.name;
  postElement.querySelector('.elements__city').style.backgroundImage = `url(${post.link})`;
  postElement.querySelector('.elements__trash-button').addEventListener('click', removePostHandler);
  postElement.querySelector('.elements__heart').addEventListener('click', likeButtonPressed);
  postElement.querySelector('.elements__description').addEventListener('click', imagePopup);
  postElement.querySelector('.image-popup__close-icon').addEventListener('click', imagePopupClose);

  postsElement.append(postElement);

  function imagePopup() {
    postElement.querySelector('.image-popup').classList.add('image-popup_active');
    postElement.querySelector('.image-popup__image').src = post.link;
    postElement.querySelector('.image-popup__image').alt = post.name;
    postElement.querySelector('.image-popup__title').textContent = post.name;
  }

  function imagePopupClose() {
    postElement.querySelector('.image-popup').classList.remove('image-popup_active');
  }

  function likeButtonPressed() {
    postElement.querySelector('.elements__heart').classList.toggle('elements__heart_active');
  }
};

const postingFormHandler = (event) => {
  event.preventDefault();

  addPost({
      name: addCardPlaceInput.value,
      link: addCardLinkInput.value
  });

  postingFormElement.reset();
  addCardPopupInactive();
};

postingFormElement.addEventListener('submit', postingFormHandler);

initialCards.forEach((post) => {
  addPost(post);
});

