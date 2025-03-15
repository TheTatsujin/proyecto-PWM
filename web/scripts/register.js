function clearValidationsListener() {
    setTimeout(function () {
        addClearValidationErrorsWhenInput();
    }, 1000);
}

async function addRegisterListener() {
    setTimeout(function () {
        const register = document.getElementById("register-form");
        register.addEventListener("submit", async ev => {
            ev.preventDefault();
            const email = document.getElementById("email");
            const phoneNumber = document.getElementById("phoneNumber");
            const password = document.getElementById("password");
            const passwordConfirm = document.getElementById("confirmPassword");
            const valid = await checkRegister(email, phoneNumber, password, passwordConfirm);

            if (valid) {

                const dataForm = {
                    data: {
                        name: document.getElementById("name").value,
                        email: email.value,
                        phoneNumber: phoneNumber.value,
                        birthdate: document.getElementById("birthdate").value,
                        password: password.value,
                        confirmPassword: passwordConfirm.value,
                        termsConditions: !!document.getElementById("termsConditions").value,
                        receiveInformation: !!document.getElementById("receiveInformation").value,
                        notifications: !!document.getElementById("notifications").value,
                    }
                }
                try {
                    const response = await fetch("http://localhost:1337/api/userpages", {
                        method: "POST",
                        headers: {"Content-Type": "application/json"
                        },
                        body: JSON.stringify(dataForm),
                    });
                    const result = await response.json();
                    console.log(result);

                    if (response.ok) {
                        sessionStorage.setItem("login", email.value);
                        location.href = "../pages/index.html";
                    }
                    else {
                        console.error(result);
                    }
                } catch (error) {
                    console.error("Error:", error);
                }

            }
        })
    }, 1000);
}

async function checkRegister(email, phoneNumber, password, passwordConfirm) {

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

    return fetch("../json/data/user.json")
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
    document.getElementById("email").addEventListener("submit", () => clearValidationErrors());
    document.getElementById("password").addEventListener("submit", () => clearValidationErrors());
    document.getElementById("confirmPassword").addEventListener("submit", () => clearValidationErrors());
    document.getElementById("phoneNumber").addEventListener("submit", () => clearValidationErrors());
}

function clearValidationErrors() {
    document.getElementById("email").setCustomValidity("");
    document.getElementById("password").setCustomValidity("");
    document.getElementById("confirmPassword").setCustomValidity("");
    document.getElementById("phoneNumber").setCustomValidity("");
}
