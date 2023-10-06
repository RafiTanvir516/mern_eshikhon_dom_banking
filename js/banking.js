function moneyInput(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const depositAmmount = parseFloat(inputText);
    inputField.value ="";
    return depositAmmount;
}

function updateTotal(depositId,depositAmmount) {
    const depositTxtField = document.getElementById(depositId);
    const previousDepositText = depositTxtField.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    depositTxtField.innerText = previousDepositAmount + depositAmmount;
}

function getCurrentBalance() {
    const depositTxtField = document.getElementById("balance");
    const previousDepositText = depositTxtField.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    return previousDepositAmount;
}

function updateBalance(depositAmmount,boolean) {
    const depositTxtField = document.getElementById("balance");
    const previousDepositAmount = getCurrentBalance();
    if(boolean == true){
        depositTxtField.innerText = previousDepositAmount + depositAmmount;
    }else{
        depositTxtField.innerText = previousDepositAmount - depositAmmount;
    }
}

document.getElementById("depositButton").addEventListener("click", function () {
    const depositAmmount = moneyInput("depositAmmount")

    // money adding
    if(depositAmmount > 0){
        updateTotal("depositResult",depositAmmount)
        // balance site
        updateBalance(depositAmmount,true)
    }

})


document.getElementById("withdrawButton").addEventListener("click", function () {
    const withdrawAmount = moneyInput("withdrawAmount");
    const previousDepositAmount = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < previousDepositAmount){
        updateTotal("withdraw",withdrawAmount);
        updateBalance(withdrawAmount,false);
    }else if(withdrawAmount > previousDepositAmount){
        alert("tui shala chor")
    }
})