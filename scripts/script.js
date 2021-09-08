const editButton = document.querySelector('.profile__editbutton');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileClose = document.querySelector('.popup-profile__close-icon');
const nameInput = document.querySelector('.popup-profile__input-line_value_name');
const jobInput = document.querySelector('.popup-profile__input-line_value_job');
const submitForm = document.querySelector('.popup-profile__input-form');
const ProfileTitle = document.querySelector('.profile__title');
const ProfileSubtitle = document.querySelector('.profile__subtitle');

const addButton = document.querySelector('.profile__addbutton');
const popupCard = document.querySelector('.addcard-popup');
const buttonClosePopupCard = document.querySelector('.addcard-popup__close-icon');

const postingFormElement = document.querySelector('.addcard-popup__input-form');
const addCardPlaceInput = document.querySelector('.addcard-popup__input-line_value_place');
const addCardLinkInput = document.querySelector('.addcard-popup__input-line_value_link');

const postsElement = document.querySelector('.elements__list');
const postTemplate = document.querySelector('#cards-template').content;
const cardsName = document.querySelector('.elements__title');
const cardsUrl = document.querySelector('.elements__city');

function ProfilePopupActive() {
  popupProfile.classList.add('popup-profile_active');
  nameInput.value = ProfileTitle.textContent;
  jobInput.value = ProfileSubtitle.textContent;
}

function ProfilePopupInactive() {
  popupProfile.classList.remove('popup-profile_active');
}

function submitInfo(evt) {
  evt.preventDefault();
  ProfileTitle.textContent = nameInput.value;
  ProfileSubtitle.textContent = jobInput.value;
  ProfilePopupInactive();
}

function addCardPopupActive() {
  popupCard.classList.add('addcard-popup_active');
}

function addCardPopupInactive() {
  popupCard.classList.remove('addcard-popup_active');
}

const handleDeleteCard = (event) => {
  event.target.closest('.elements__element').remove();
};

const addPost = (post) => {
  const postElement = postTemplate.querySelector('.elements__element').cloneNode(true);
  postElement.querySelector('.elements__title').textContent = post.name;
  postElement.querySelector('.elements__city').style.backgroundImage = `url(${post.link})`;
  postElement.querySelector('.elements__trash-button').addEventListener('click', handleDeleteCard);
  postElement.querySelector('.elements__heart').addEventListener('click', likeButtonPressed);
  postElement.querySelector('.elements__description').addEventListener('click', imagePopup);
  postElement.querySelector('.image-popup__close-icon').addEventListener('click', imagePopupClose);

  postsElement.prepend(postElement);

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

const handleCardFormSubmit = (event) => {
  event.preventDefault();

  addPost({
    name: addCardPlaceInput.value,
    link: addCardLinkInput.value
  });

  postingFormElement.reset();
  addCardPopupInactive();
};

initialCards.forEach((post) => {
  addPost(post);
});

postingFormElement.addEventListener('submit', handleCardFormSubmit);
submitForm.addEventListener('submit', submitInfo);
editButton.addEventListener('click', ProfilePopupActive);
popupProfileClose.addEventListener('click', ProfilePopupInactive);
addButton.addEventListener('click', addCardPopupActive);
buttonClosePopupCard.addEventListener('click', addCardPopupInactive);
