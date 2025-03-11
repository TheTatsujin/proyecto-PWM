document.getElementById("login-submit").addEventListener("onclick", function(e) {
    e.preventDefault();
    console.log("login submit");
})


function checkLogin() {
    const mail = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;
    console.log(mail, password);
    fetch("../json/data/user.json")
        .then(response => response.json())
        .then(userData => {
            console.log(userData["email"] === mail && userData["password"] === password);
            return userData["email"] === mail && userData["password"] === password;
        })
        .catch(error => console.log(error));
}