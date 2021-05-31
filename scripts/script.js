let editButton = document.querySelector('.profile__editbutton');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close-icon');
let nameInput = document.querySelector('.edit-form__input-line_value_name');
let jobInput = document.querySelector('.edit-form__input-line_value_job');
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
