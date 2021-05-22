let addButton = document.querySelector('.profile__editbutton');
let popup = document.querySelector('.edit-form');
let popup_close = document.querySelector('.edit-form__close-icon');
function popup_active() {
  popup.classList.add('edit-form_active');
}
function popup_inactive() {
  popup.classList.remove('edit-form_active');
}
let nameInput = document.querySelector('.edit-form__field1');
let jobInput = document.querySelector('.edit-form__field2');
let submitButton = document.querySelector('.edit-form__submit-button');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
function submit() {
  nameInput.textContent = nameInput.value;
  jobInput.textContent = jobInput.value;
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  popup.classList.remove('edit-form_active');
}
submitButton.addEventListener('click', submit);
addButton.addEventListener('click', popup_active);
popup_close.addEventListener('click', popup_inactive);
