
const form = document.querySelector("#news-letter");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const container = document.querySelector(".container");
const successMessage = document.querySelector("#success-message");
const submittedEmail = document.querySelector("#submitted-email");
const dismissButton = document.querySelector("#dismiss-button");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!emailInput.checkValidity() || email === "") {
        emailError.textContent = "Valid email required";
        emailInput.classList.add("error");
        return;
    }

    emailError.textContent = "";
    emailInput.classList.remove("error");

    submittedEmail.textContent = email;

    container.hidden = true;
    successMessage.hidden = false;
});

dismissButton.addEventListener("click", function () {
    successMessage.hidden = true;
    container.hidden = false;

    form.reset();

    emailError.textContent = "";
    emailInput.classList.remove("error");

    emailInput.focus();
});

emailInput.addEventListener("input", function () {
    emailError.textContent = "";
    emailInput.classList.remove("error");
});
