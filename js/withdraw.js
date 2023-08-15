/* 
1. add event handler with the withdraw button
2. get the withdraw amount
3. clear the withdraw input field
4. get previous withdraw total
5. calculate total withdraw and set new withdraw total
6. get previous balance and convert to number
7. calculate new balance and set the new balance
*/

// step-1
document.querySelector("#btn-withdraw").addEventListener('click', function () {
    // step-2
    const withdrawElement = document.querySelector("#withdraw-field");
    const newWithdrawAmount = parseFloat(withdrawElement.value);
    
    // step-3
    withdrawElement.value = '';

    // step-4
    const withdrawTotalElement = document.querySelector("#withdraw-total");
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    // step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const totalBalanceElement = document.querySelector("#balance-total");
    const previousBalance = parseFloat(totalBalanceElement.innerText);

    // step-7
    const newBalanceTotal = previousBalance - newWithdrawAmount;
    totalBalanceElement.innerText = newBalanceTotal;
})