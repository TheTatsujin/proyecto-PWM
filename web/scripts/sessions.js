function addLoginSubmitEventListener() {
    setTimeout(function() {
        const loginSubmit = document.getElementById("login_form");
        loginSubmit.addEventListener("submit", ev => {
            ev.preventDefault();
            const mail = document.getElementById("login_email").value;
            const password = document.getElementById("login_password").value;
            isRegistered(mail, password).then(isLogged => {
                if (isLogged) {
                    sessionStorage.setItem("login", mail);
                }
            });
        })
    }, 1000);
}


function isRegistered(mail, password) {
    return fetch("../json/data/user.json")
        .then(response => response.json())
        .then(userData => {
            return (userData["email"] === mail && userData["password"] === atob(password));
        })
        .catch(error => console.log(error));
}
