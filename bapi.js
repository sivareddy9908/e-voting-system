function signup() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    
        
        localStorage.setItem(email,pass);

}
function login(){
    const loginForm = document.querySelector("#login");

    var x = localStorage.getItem(document.getElementById("login_email").value);
    if(x === document.getElementById("login_pass").value){
        location.replace("logged_in.html");
    }
else{
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

setFormMessage(loginForm, "error", "Invalid username/password combination");
});
}
}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".match-error");

    messageElement.textContent = message;
    messageElement.classList.remove("match-error--success", "match-error--error");
    messageElement.classList.add(`match-error--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#Create-account");

    document.querySelector("#dont-have-account").addEventListener("click", e => {
        e.preventDefault(); /* this prevents opening default a href link .It just work with id have account */
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#have-account").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".Username").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

