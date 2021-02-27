const footerForm = document.querySelector(".footer__form");
const footerInput = document.querySelector('.footer__input')
let emailValue = "";
footerForm.addEventListener('submit', function(event) {
    emailValue = this[0].value;
    if (emailValue === '') {
        event.preventDefault();
        footerInput.placeholder = "Error,enter email"
    } else {
        this.submit;
        footerInput.value = "";
    }
});

footerInput.addEventListener("input", function(event) {
    if (footerInput.validity.typeMismatch) {
        footerInput.setCustomValidity("Error,enter email");
    } else {
        footerInput.setCustomValidity("");
    }
});