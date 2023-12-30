"use strict";
(function (){
  
  const buttonMenu = document.querySelector(".button-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  const cardSubscribeButton = document.querySelectorAll('.card-btn');
  const subscribeDialog = document.querySelector('.subscribe');
  const subscribeButton = document.querySelector('.form__button--subscribe');
  const cancelButton = document.querySelector('.form__button--cancel');  
 //const form = document.querySelector(".form");
  console.log('iiFE finished');

  

// buttonMenu.addEventListener("click", toggleMenuVisibility);

cardSubscribeButton.forEach(
  (cardButton) => {
    cardButton.addEventListener('click', function() {
      subscribeDialog.showModal();
      console.log("triggered");
    });
  }
);
cancelButton.addEventListener('click', function() {
    subscribeDialog.close();
});
  
})();


  const validateForm = (event) => {
    if (event.type == "change") {
      const inputEl = event.target;
      if (inputEl.name == "email") {
        validateEmail(inputEl);
        validateConfirmEmail(document.querySelector("#form__confirm-email"));
      } else if (inputEl.name == "confirm-email") {
        validateConfirmEmail(inputEl);
      }
    } else {
      const validEmail = validateEmail(document.querySelector("#form__email"));
      const validConfirmEmail = validateConfirmEmail(
        document.querySelector("#form__confirm-email")
      );
      if (validEmail && validConfirmEmail) {
        console.log("submit success");
        subscribeDialog.close();
      } else {
        event.preventDefault();
      }
    }
  };
  

  const form = document.querySelector(".subscribe-form");
  form.addEventListener("change", validateForm);
  form.addEventListener("submit", validateForm);
  

  function validateEmail(inputEl) {
    if (inputEl.value.trim().length === 0) {
      document.querySelector(".form__error-email").innerText =
        "This field is required";
      inputEl.classList.add("form__input--invalid");
      return false;
    } else if (!inputEl.value.includes("@")) {
      document.querySelector(".form__error-email").innerText =
        "This field must be a valid email address including a @";
      inputEl.classList.add("form__input--invalid");
      return false;
    } else {
      document.querySelector(".form__error-email").innerText = "";
      inputEl.classList.remove("form__input--invalid");
      return true;
    }
  }
  
 
  function validateConfirmEmail(inputEl) {
    const emailEl = document.querySelector("#form__email");
  
    if (inputEl.value === emailEl.value) {
      document.querySelector(".form__error-confirm-email").innerText = "";
      inputEl.classList.remove("form__input--invalid");
      return true;
    } else {
      document.querySelector(".form__error-confirm-email").innerText =
        "This field must match the provided email address";
      inputEl.classList.add("form__input--invalid");
      return false;
    }
  }