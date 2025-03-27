const userSessionKey = "user-session";

window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        sessionStorage.removeItem("user-session");
        location.reload();
    }
});


export async function updateHeaderWithUserSection() {
    const headerEmptyUserSection = document.querySelector("#header_right-nav");
    if (!headerEmptyUserSection) return;
    if (isUserLogged())
        headerEmptyUserSection.innerHTML = await fetchUserIconTemplate();
    else
        headerEmptyUserSection.innerHTML = await fetchLoginButtonTemplate();
}


export function logoutButtonAction(){
    const logoutButton = document.querySelector("#btn-logout");
    if (!logoutButton) return;
    logoutButton.addEventListener("click", () => {
        sessionStorage.removeItem("user-session");
        localStorage.removeItem("user-session");
        location.replace(location.origin + "/proyecto-PWM/web/pages/index.html");
    });
}

function isUserLogged() {
    return sessionStorage.getItem("user-session") != null || localStorage.getItem("user-session") !== null;
}

function fetchUserIconTemplate() {
    return fetch("../templates/user-icon.html").then(res => res.text());
}

function fetchLoginButtonTemplate() {
    return fetch("../templates/login-button.html").then(res => res.text());
}

function getUserDataFrom() {
    return fetch("../json/data/user.json");
}

// STRAPI
export function updateSession() {
    getUserDataFrom()
        .then(response => response.json())
        .then(newUserData => {
            const storedUserData = sessionStorage.getItem(userSessionKey);
            if (storedUserData) {
                const parsedStoredData = JSON.parse(storedUserData);
                if (JSON.stringify(parsedStoredData) !== JSON.stringify(newUserData["user-data"])) {
                    sessionStorage.setItem(userSessionKey, JSON.stringify(newUserData["user-data"]));
                }
            }
        })
        .catch(error => console.error("Error al obtener los datos:", error));
}