window.addEventListener("DOMContentLoaded", async function () {
    await updateTemplatesIfLogged();
});

async function updateTemplatesIfLogged() {
        if (! isUserLogged()) return;
        await updateHeader()
}


function isUserLogged() {
    return sessionStorage.getItem("login") != null;
}
async function updateHeader() {
    const template = await fetchUserIconTemplate();
    let header = document.querySelector("header");
    let headerType = getHeaderType(header);
    updateWithMainHeader(header, template);
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
