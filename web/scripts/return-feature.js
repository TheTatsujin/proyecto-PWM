const Stack = JSON.parse(sessionStorage.getItem("Stack")) || [];


window.addEventListener('load', () => visitPage(window.location.href));

function redirectUser(lastPageUrl) {
    const urlObj = new URL(lastPageUrl);
    location.href = urlObj.pathname;
}

export function returnButtonDynamicRouting(){
    const returnButton = document.querySelector(".btn-return");
    if (!returnButton) return;
    returnButton.addEventListener("click", () => returnBack());
}


export function visitPage(currentPageUrl){
    const isReturned = JSON.parse(sessionStorage.getItem("isReturned"));
    const lastPageUrl = sessionStorage.getItem("lastPageUrl");

    if (lastPageUrl && !isReturned && lastPageUrl !== Stack[Stack.length - 1])
        Stack.push(lastPageUrl);

    sessionStorage.setItem("isReturned", JSON.stringify(false));
    sessionStorage.setItem("Stack", JSON.stringify(Stack));
    sessionStorage.setItem("lastPageUrl", currentPageUrl);
}

export function returnBack(){
    const lastPageUrl = Stack.pop();
    sessionStorage.setItem("isReturned", JSON.stringify(true));
    sessionStorage.setItem("Stack", JSON.stringify(Stack));
    if (lastPageUrl) redirectUser(lastPageUrl);
    else redirectUser("index.html");

}