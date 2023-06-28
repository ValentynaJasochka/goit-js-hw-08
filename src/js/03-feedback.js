import _ from 'lodash';

form = document.querySelector('.feedback-form');

const LOCAL_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
console.log(formData);

form.addEventListener('input', _.throttle(saveFormData, 500));

function saveFormData(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

reloadPage();

function reloadPage() {
  if (formData) {
    const { email, message } = form.elements;
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

form.addEventListener('submit', saveFormSubmit);

function saveFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
  formData = {};
}
