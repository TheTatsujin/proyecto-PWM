function clearValidationsListener() {
    setTimeout(function () {
        addClearValidationErrorsWhenInput();
    }, 1000);
}

function addRegisterListener() {
    setTimeout(function () {
        const register = document.getElementById("register-form");
        register.addEventListener("submit", ev => {
            ev.preventDefault();
            const email = document.getElementById("register-email");
            const phoneNumber = document.getElementById("phone-number");
            const password = document.getElementById("password");
            const passwordConfirm = document.getElementById("confirm-password");
            if (checkRegister(email, phoneNumber, password, passwordConfirm)) {
                const name = document.getElementById("name");
                const birthdate = document.getElementById("birthdate");
                sessionStorage.setItem("login", email.value);
                location.href = "../pages/index.html";
            }
        })
    }, 1000);
}

function checkRegister(email, phoneNumber, password, passwordConfirm) {

    if (!/[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{3}/.test(phoneNumber.value)) {
        phoneNumber.setCustomValidity("Phone number must be only 9 numeric digits.");
        phoneNumber.reportValidity();
        return false;
    }

    if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Password and confirmation fields must coincide.");
        passwordConfirm.reportValidity();
        return false;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password.value)) {
        password.setCustomValidity("Password must contain at least 8 characters, lowercase and uppercase.");
        password.reportValidity();
        return false;
    }

    fetch("../json/data/user.json")
        .then(response => response.json())
        .then(userData => {
            if (userData["email"] === email.value) {
                email.setCustomValidity("Email address already exists.");
                email.reportValidity();
                return false;
            }
            return true;
        }).catch(err => console.log(err));
}

function addClearValidationErrorsWhenInput() {
    document.getElementById("register-email").addEventListener("submit", () => clearValidationErrors());
    document.getElementById("password").addEventListener("submit", () => clearValidationErrors());
    document.getElementById("confirm-password").addEventListener("submit", () => clearValidationErrors());
    document.getElementById("phone-number").addEventListener("submit", () => clearValidationErrors());
}

function clearValidationErrors() {
    document.getElementById("register-email").setCustomValidity("");
    document.getElementById("password").setCustomValidity("");
    document.getElementById("confirm-password").setCustomValidity("");
    document.getElementById("phone-number").setCustomValidity("");
}
