function addRegisterListener() {
    setTimeout(function () {
        const register = document.getElementById("register-submit");
        register.addEventListener("click", ev => {
            ev.preventDefault();
            const email = document.getElementById("register-email");
            const phoneNumber = document.getElementById("phone-number");
            const password = document.getElementById("password");
            const passwordConfirm = document.getElementById("confirm-password");
            checkRegister(email, phoneNumber, password, passwordConfirm);
        })
    }, 1000);
}

function checkRegister(email, phoneNumber, password, passwordConfirm) {

    if (password !== passwordConfirm) {
        passwordConfirm.setCustomValidity("Password and confirmation fields must coincide.");
        passwordConfirm.reportValidity();
        return false;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
        password.setCustomValidity("Password must contain at least 8 characters, lowercase and uppercase.");
        password.reportValidity();
        return false;
    }
    return true;

}

function addClearValidationErrorsWhenInput() {
    document.getElementById("register_email").addEventListener("input", () => clearValidationErrors());
    document.getElementById("password").addEventListener("input", () => clearValidationErrors());
    document.getElementById("confirm-password").addEventListener("input", () => clearValidationErrors());
    document.getElementById("phone-number").addEventListener("input", () => clearValidationErrors());
}

function clearValidationErrors() {
    document.getElementById("register_email").setCustomValidity("");
    document.getElementById("password").setCustomValidity("");
    document.getElementById("confirm-password").setCustomValidity("");
    document.getElementById("phone-number").setCustomValidity("");
}


//phone pattern="6[0-9]{2}[- ]?[0-9]{3}[- ]?[0-9]{3}"
// password pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"