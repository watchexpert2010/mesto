let addButton = document.querySelector('.profile__editbutton');
let popup = document.querySelector('.edit-form');
let popupClose = document.querySelector('.edit-form__close-icon');
function popupActive() {
  popup.classList.add('edit-form_active');
}
function popupInactive() {
  popup.classList.remove('edit-form_active');
}
let nameInput = document.querySelector('.edit-form__field1');
let jobInput = document.querySelector('.edit-form__field2');
let submitForm = document.querySelector('.edit-form__input');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
function submitInfo (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  popupInactive();
}
submitForm.addEventListener('submit', submitInfo);
addButton.addEventListener('click', popupActive);
popupClose.addEventListener('click', popupInactive);
