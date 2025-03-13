function addValidationsListener() {
    setTimeout(function () {
        validityListener();
    }, 1000)
}

function addSubmitListener() {
    setTimeout(function (){
        const submit = document.getElementById("recovery-form");
        submit.addEventListener("submit", ev => {
            ev.preventDefault();
            const email = document.getElementById("email");
            emailCheck(email).then(valid => {
                if (valid) {
                    window.alert("Email sent! Please check your mailbox.")
                }
            })
        })
    }, 1000)

}

function emailCheck(email) {
    return fetch("../json/data/user.json")
        .then(res => res.json())
        .then(userData => {
            if (userData["email"] !== email.value) {
                email.setCustomValidity("Enter a valid email address.");
                email.reportValidity();
                return false;
            }
            return true;
        }).catch(err => console.log(err));
}

function validityListener() {
    document.getElementById("email").addEventListener("input", () => clearValidityWhenInput());
}

function clearValidityWhenInput() {
    document.getElementById("email").setCustomValidity("");
}