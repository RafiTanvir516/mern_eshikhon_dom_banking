// login section

document.getElementById("submitButton").addEventListener("click", function () {
    const emailInputField = document.getElementById("emailInput");
    const inputEmail = emailInputField.value;

    // password
    const passField = document.getElementById("passInput");
    const inputPass = passField.value;

    if(inputEmail == "admin@gmail.com" && inputPass == 123456){
        window.location.href = "banking.html"
    }
})