const userSessionKey = "user-session";
const lastPageKey = "lastPage";


function startSessionFromJson(mail) {
    return getUserDataFromMail(mail)
        .then(userData => sessionStorage.setItem(userSessionKey, JSON.stringify(userData)));
}

function redirectUser() {
    const urlObj = new URL(sessionStorage.getItem(lastPageKey));
    location.href = urlObj.pathname;
}

export function loginFormAction() {
    const loginSubmit = document.querySelector("#login_form");
    const mail = document.querySelector("#login_email");
    const password = document.querySelector("#login_password");

    loginSubmit.addEventListener("submit", ev => {
        ev.preventDefault();
        isRegistered(mail, password).then(isLogged => {
            if (isLogged) startSessionFromJson(mail.value).then(_ => redirectUser());
        });
    })
}


function getUserDataFromMail(mail) {
    return fetch("../json/data/user.json")
        .catch(err => console.log(err))
        .then(response => response.json())
        .then(userDataJson => {
            const userDataList = userDataJson["user-data"];
            for (const userData of userDataList) {
                if (userData["email"] === mail) return userData;
            }
            return null;
        });
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
    return getUserDataFromMail(mail.value)
        .then(userData => {
            if(!userData) {
                mail.setCustomValidity("User is not registered");
                return false;
            }

            if (userData["password"] !== btoa(password.value)){
                password.setCustomValidity("Wrong password");
                password.reportValidity();
                return false;
            }

            return true;
        });
}


function addClearValidationErrorsWhenInput() {
    document.getElementById("login_email").addEventListener("input", () => clearValidationErrors());
    document.getElementById("login_password").addEventListener("input", () => clearValidationErrors());
}

function clearValidationErrors() {
    document.getElementById("login_email").setCustomValidity("");
    document.getElementById("login_password").setCustomValidity("");
}
