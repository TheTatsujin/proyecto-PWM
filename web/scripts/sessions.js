function addLoginSubmitEventListener() {
    setTimeout(function() {
        const loginSubmit = document.getElementById("login-submit");
        loginSubmit.addEventListener("click", ev => {
            ev.preventDefault();
            Login();

        })
    }, 1000);
}


function Login() {
    const mail = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;
    console.log(mail, password);
    fetch("../json/data/user.json")
        .then(response => response.json())
        .then(userData => {
            return userData["email"] === mail && userData["password"] === password;
        })
        .catch(error => console.log(error));
}