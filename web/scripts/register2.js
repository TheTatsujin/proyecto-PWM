export function registerFormActions(){
    document.querySelector("#email").addEventListener("input", e =>
        addValidation(e, /\w+@\w+\.\w+/.test(e.target.value), "Please enter a valid email address")
    );

    document.querySelector("#phoneNumber").addEventListener("input", e =>
        addValidation(e, /[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{3}/.test(e.target.value), "Please enter a valid phone number")
    );

    document.querySelector("#password").addEventListener("input", e =>
        addValidation(e,/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(e.target.value), "Please enter a valid password")
    );

    document.querySelector("#confirmPassword").addEventListener("input", e =>
        addValidation(e, e.target.value === document.querySelector("#password").value, "Passwords must match")
    );

    document.querySelector("#register-form").addEventListener("submit", async _=> registerUser());
}


function addValidation(event, validCondition, errorMessage){
    event.preventDefault();
    if(!validCondition){
        event.target.setCustomValidity(errorMessage);
        event.target.reportValidity();
    } else event.target.setCustomValidity("");
}


function getFormData(){
    return {
        data: {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            phoneNumber: document.querySelector("#phoneNumber").value,
            birthdate: document.querySelector("#birthdate").value,
            password: document.querySelector("#password").value,
            confirmPassword: document.querySelector("#confirmPassword").value,
            termsConditions: !!document.querySelector("#termsConditions").value,
            receiveInformation: !!document.querySelector("#receiveInformation").value,
            notifications: !!document.querySelector("#notifications").value,
        }
    }
}

async function registerUser() {
    const dataForm = getFormData();
    let response;

    try {
        response = await fetch("http://localhost:1337/api/userpages", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataForm),
        });
    }
    catch (error) {
        console.error("Error:", error);
    }

    if (response.ok) {
        sessionStorage.setItem("login", dataForm.email);
        location.href = "../pages/index.html";
    }
    else response.json().then(err => console.log(err));

}
