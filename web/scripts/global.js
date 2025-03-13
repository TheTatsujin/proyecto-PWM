window.addEventListener("DOMContentLoaded", function () {
    updateTemplatesIfLogged();
});

function updateTemplatesIfLogged() {
        if (! isUserLogged()) return;
        document.body.style.visibility = "hidden"; // Hiding body to don't show previous templates if is unnecesary
        updateHeader()
            .then(() => document.body.style.visibility = "visible");
}


function isUserLogged() {
    return sessionStorage.getItem("login") != null;
}

async function updateHeader() {
    let header = document.querySelector("header");
    let currentHeaderTemplate = header.getAttribute("xlu-include-file");
    const template = await fetchUserIconTemplate();
    const newHeaderTemplate = await fetchNewHeader(currentHeaderTemplate);
    let doc
    if (currentHeaderTemplate === "../templates/header.html") doc = createDocWithLoggedMainHeader(newHeaderTemplate, template);
    if (currentHeaderTemplate === "../templates/second-header.html") doc = createDocWithLoggedSecondaryHeader(newHeaderTemplate, template);
    let newHeader = createNewHeaderIn(doc);
    header = document.querySelector("header");
    replaceInBody(header, newHeader);

    function createDocWithLoggedMainHeader(newHeaderTemplate, template) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(newHeaderTemplate, "text/html");
        let nav = doc.querySelector("#header_right-nav");
        nav.innerHTML = template;
        return doc;
    }
}

function createDocWithLoggedSecondaryHeader(newHeaderTemplate, template) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(newHeaderTemplate, "text/html");
    let nav = doc.querySelector("#header_right-nav2");
    nav.innerHTML = template;
    return doc;
}


function createNewHeaderIn(doc) {
    console.log(doc);
    let newHeader = document.createElement("header");
    console.log(newHeader);
    newHeader.innerHTML = doc.body.innerHTML;
    console.log("Tras inner");
    console.log(newHeader);
    return newHeader;
}

function replaceInBody(header, newHeader) {
    const body = header.parentNode;
    body.replaceChild(newHeader, header);
}

function fetchUserIconTemplate() {
    return fetch("../templates/user-icon.html")
        .then(res => res.text());
}
function fetchNewHeader(newHeader) {
    return fetch(newHeader)
        .then(res => res.text());
}
