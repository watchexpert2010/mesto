let addButton = document.querySelector('.profile__editbutton');
let popup = document.querySelector('.popup-wrapper');
let popupClose = document.querySelector('.edit-form__close-icon');
let nameInput = document.querySelector('.edit-form__name');
let jobInput = document.querySelector('.edit-form__job');
let submitForm = document.querySelector('.edit-form__input-form');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
function popupActive() {
  popup.classList.add('popup-wrapper_active');
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  nameInput.textContent = title.value;
  jobInput.textContent = subtitle.value;
}
function popupInactive() {
  popup.classList.remove('popup-wrapper_active');

}
function submitInfo (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  popupInactive();
}
submitForm.addEventListener('submit', submitInfo);
addButton.addEventListener('click', popupActive);
popupClose.addEventListener('click', popupInactive);
