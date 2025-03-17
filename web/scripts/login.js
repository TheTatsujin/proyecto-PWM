const userSessionKey = "user-session";
const lastPageKey = "lastPage";
const email = "email";
const name = "name";
const userData = "user-data";

// Timeout is to wait templates to load
function validationInitialization() {

    setTimeout(function() {
        addClearValidationErrorsWhenInput()
    }, 1000);

}

function startSessionFromJson() {
    getUserDataFrom()
        .then(response => response.json())
        .then(data => data[userData])
        .then(userData => {
            sessionStorage.setItem(userSessionKey, JSON.stringify(userData));
        })
    .catch(error => console.log(error));
}



function redirectUser() {
    const urlObj = new URL(sessionStorage.getItem(lastPageKey));
    location.href = urlObj.pathname;
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
                    startSessionFromJson();
                    redirectUser();
                }
            });
        })
    }, 1000);
}


function getUserDataFrom() {
    return fetch("../json/data/user.json");
}

async function isRegisteredOnStrapi(mail, password) {
    try {
        const response = await fetch(`http://localhost:1337/api/userpages?filters[email][$eq]=${mail.value}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"
            },
        });
        const result = await response.json();
        console.log(result);

        return response.ok;
    } catch (error) {
        console.error("Error:", error);
    }
    return false;
}

function isRegistered(mail, password) {
    return getUserDataFrom()
        .then(response => response.json())
        .then(response => response[userData])
        .then(userData => {
            if (userData[email] !== mail.value) {
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
