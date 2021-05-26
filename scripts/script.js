let addButton = document.querySelector('.profile__editbutton');
let popup = document.querySelector('.popup-wrapper');
let popupClose = document.querySelector('.edit-form__close-icon');
let nameInput = document.querySelector('.edit-form__field1');
let jobInput = document.querySelector('.edit-form__field2');
let submitForm = document.querySelector('.edit-form__input-form');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
function popupActive() {
  popup.classList.add('popup-wrapper_active');
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
