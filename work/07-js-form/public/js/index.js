"use strict";
(function () {


const form = document.querySelector('register');
const nameField = document.querySelector('form-name');
const emailField = document.querySelector('form-email');
const confirmEmailField = document.querySelector('form-confirm');
const tierSelect = document.querySelector('form-tier');
const requiredFields = [nameField, emailField, confirmEmailField];


form.addEventListener('submit', handleSubmit);
requiredFields.forEach(field => {
  field.addEventListener('change', handleRequiredFieldChange);
});


function handleSubmit(event) {
  event.preventDefault();

  
  if (!areAllFieldsProvided(requiredFields)) {
    showErrorMessage(nameField, 'Please fill out all required fields.');
    return;
  }

  
  if (emailField.value !== confirmEmailField.value) {
    showErrorMessage(confirmEmailField, 'Emails do not match.');
    return;
  }

 
  form.submit();
}

function handleRequiredFieldChange(event) {
  const field = event.target;

  
  if (isFieldProvided(field)) {
    hideErrorMessage(field);
  }
}


function areAllFieldsProvided(fields) {
  return fields.every(isFieldProvided);
}

function isFieldProvided(field) {
  return field.value.trim() !== '';
}

function showErrorMessage(field, message) {
  const errorMessage = field.parentNode.querySelector('.error-message');
  errorMessage.innerText = message;
  errorMessage.classList.add('visible');
}

function hideErrorMessage(field) {
  const errorMessage = field.parentNode.querySelector('.error-message');
  errorMessage.innerText = '';
  errorMessage.classList.remove('visible');
}
});
