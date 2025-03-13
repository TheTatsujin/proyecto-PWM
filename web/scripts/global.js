window.addEventListener("DOMContentLoaded", function () {
    updateTemplatesIfLogged();
});

function updateTemplatesIfLogged() {
        if (! isUserLogged()) return;
        document.body.style.visibility = "hidden"; // Hiding body while we are dinamically changing templates
        updateHeader()
            .then(() => document.body.style.visibility = "visible");
}


function isUserLogged() {
    return sessionStorage.getItem("login") != null;
}
async function updateHeader() {
    const template = await fetchUserIconTemplate();
    let header = document.querySelector("header");
    let headerType = getHeaderType(header);
    if (headerType === "second-header") {
        updateWithSecondHeader(header, template);
    }
    if (headerType === "header") {
        updateWithMainHeader(header, template);
    }

}

function getHeaderType(header) {
    let headerType = header.getAttribute("template-id");
    return headerType;
}

function updateWithSecondHeader(header, template) {
    let buttonToRemove = header.querySelector("#account-section");
    buttonToRemove.remove();
    header.insertAdjacentHTML("beforeend", template);
}

function updateWithMainHeader(header, template) {
    let right_nav = header.querySelector("#header_right-nav");
    right_nav.innerHTML = template;
}

function fetchUserIconTemplate() {
    return fetch("../templates/user-icon.html")
        .then(res => res.text());
}
