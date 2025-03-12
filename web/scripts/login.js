function addLoginSubmitEventListener() {
    setTimeout(function() {
        addClearValidationErrorsWhenInput() // [TODO REMOVE THIS COMMENT] Just here to use the timeout
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
                mail.setCustomValidity("This address is not registered.");
                mail.reportValidity();
                return false;
            }
            if (userData["password"] !== atob(password.value)) {
                password.setCustomValidity("This password is not correct.");
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
