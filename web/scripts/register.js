function addRegisterListener() {
    setTimeout(function () {
        const register = document.getElementById("register-submit");
        register.addEventListener("click", ev => {
            ev.preventDefault();
            checkRegister();
        })
    }, 1000);
};

function checkRegister() {
    const email = document.getElementById("register-email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const birthdate = document.getElementById("birthdate").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("confirm-password").value;

    if (password !== passwordConfirm) {
        passwordConfirm.setCustomValidity("The password's fields must coincide.");
    }

}