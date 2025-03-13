async function updateHeaderWithUserSection() {
    const headerEmptyUserSection = document.querySelector("#header_right-nav");

    if (isUserLogged())
        headerEmptyUserSection.innerHTML = await fetchUserIconTemplate();
    else
        headerEmptyUserSection.innerHTML = await fetchLoginButtonTemplate();

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

