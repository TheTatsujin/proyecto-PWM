window.addEventListener('load', () => storePageVisited(window.location.href));
window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        sessionStorage.removeItem("login");
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

export function logoutButton(){
    const logoutButton = document.querySelector("#btn-logout");
    if (!logoutButton) return;
    logoutButton.addEventListener("click", () => {
        sessionStorage.removeItem("login");
        location.replace(location.origin + "/proyecto-PWM/web/pages/index.html");
    });
}



function isUserLogged() {
    return sessionStorage.getItem("login") != null;
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

