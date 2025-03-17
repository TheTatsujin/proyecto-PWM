window.addEventListener('load', () => storePageVisited(window.location.href));
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

export function returnButtonDynamicRouting(){
    const returnButton = document.querySelector(".btn-return");
    if (!returnButton) return;
    returnButton.addEventListener("click", () => {
        const lastPageUrl = sessionStorage.getItem("lastPage");
        if (lastPageUrl) location.replace(lastPageUrl);
    });

}

export function logoutButtonAction(){
    const logoutButton = document.querySelector("#btn-logout");
    if (!logoutButton) return;
    logoutButton.addEventListener("click", () => {
        sessionStorage.removeItem("user-session");
        location.replace(location.origin + "/proyecto-PWM/web/pages/index.html");
    });
}



function isUserLogged() {
    return sessionStorage.getItem("user-session") != null;
}

function fetchUserIconTemplate() {
    return fetch("../templates/user-icon.html").then(res => res.text());
}

function fetchLoginButtonTemplate() {
    return fetch("../templates/login-button.html").then(res => res.text());
}

function storePageVisited(currentPageUrl) {
    const lastPageUrl = sessionStorage.getItem("currentPage");
    if (lastPageUrl && lastPageUrl !== currentPageUrl)
        sessionStorage.setItem("lastPage", lastPageUrl);

    sessionStorage.setItem("currentPage", currentPageUrl);
}

const userSessionKey = "user-session";

export function updateSession() { // TODO I propose to call it before templates are loaded
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

function getUserDataFrom() {
    return fetch("../json/data/user.json");
}