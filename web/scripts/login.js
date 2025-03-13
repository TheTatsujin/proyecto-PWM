// Timeout is for wait to xlu-include-file

function validationInitialization() {
    setTimeout(function() {
        addClearValidationErrorsWhenInput()
    }, 1000);
}

function addLoginSubmitEventListener() {
    setTimeout(function() {
        const loginSubmit = document.getElementById("login_form");
        loginSubmit.addEventListener("submit", ev => {
            ev.preventDefault();
            const mail = document.getElementById("login_email");
            const password = document.getElementById("login_password");
            isRegistered(mail, password).then(isLogged => {
                if (isLogged) {
                    sessionStorage.setItem("login", mail.value);
                    location.href = "../pages/index.html";
                }
            });
        })
    }, 1000);
}

function isRegistered(mail, password) {
    return fetch("../json/data/user.json")
        .then(response => response.json())
        .then(userData => {
            if (userData["email"] !== mail.value) {
                mail.setCustomValidity("Esta dirección de correo electrónica no está registrada.");
                mail.reportValidity();
                return false;
            }
            if (userData["password"] !== atob(password.value)) {
                password.setCustomValidity("La contraseña no es correcta.");
                password.reportValidity();
                return false;
            }
            return true;
        })
        .catch(error => console.log(error));
}

function addClearValidationErrorsWhenInput() {
    document.getElementById("login_email").addEventListener("input", () => clearValidationErrors());
    document.getElementById("login_password").addEventListener("input", () => clearValidationErrors());
}

function clearValidationErrors() {
    document.getElementById("login_email").setCustomValidity("");
    document.getElementById("login_password").setCustomValidity("");
}
