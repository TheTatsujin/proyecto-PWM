export function recoveryFormAction() {
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
    validityListener();
}

function emailCheck(email) {
    return fetch("../json/data/user.json")
        .then(res => res.json())
        .then(userData => {
            console.log(email.value);
            for (const user of userData["user-data"]) {
                console.log(user["email"]);
                if (user["email"] === email.value) return true;
            }
            email.setCustomValidity("Enter a registered email address.");
            email.reportValidity();
            return false;
        }).catch(err => console.log(err));
}

function validityListener() {
    document.getElementById("email").addEventListener("input", () => clearValidityWhenInput());
}

function clearValidityWhenInput() {
    document.getElementById("email").setCustomValidity("");
}