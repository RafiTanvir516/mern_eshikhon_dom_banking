document.getElementById("depositButton").addEventListener("click", function () {
    const depositField = document.getElementById("depositAmmount");
    const depositInput = depositField.value;
    const depositAmmount = parseFloat(depositInput);

    // deposit site
    const depositTxtField = document.getElementById("depositResult");
    const previousDepositText = depositTxtField.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    depositTxtField.innerText = previousDepositAmount + depositAmmount;

    // balance site

    const balanceTxtField = document.getElementById("balance");
    const previousBalanceTxt = balanceTxtField.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceTxt);
    balanceTxtField.innerText = previousBalanceAmount + depositAmmount;

    depositField.value ="";
})


document.getElementById("withdrawButton").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdrawAmount");
    const withdrawInput = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawInput);

    // withdraw add

    const balanceTxtField = document.getElementById("balance");
    const previousBalanceTxt = balanceTxtField.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceTxt);
    const newBalance = previousBalanceAmount - withdrawAmount;
    balanceTxtField.innerText = newBalance;

    // withdraw amount add 

    const withdrawTxtField = document.getElementById("withdraw");
    const previousWithdrawTxt = withdrawTxtField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTxt)
    const newWithdraw = previousWithdrawAmount + withdrawAmount;
    withdrawTxtField.innerText = newWithdraw;
    withdrawField.value = "";
})