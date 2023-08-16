/* 
1. add event handler with the withdraw button
2. get the withdraw amount
3. clear the withdraw input field
4. get previous withdraw total
5. calculate total withdraw and set new withdraw total
6. get previous balance and convert to number
7. calculate new balance and set the new balance
*/

// step-1:
document.querySelector("#btn-withdraw").addEventListener('click', function () {
    // step-2:
    const newWithdrawAmount = getInputValueById("withdraw-field");

    // step-4:
    const previousTotalWithdraw = getElementValueById("withdraw-total");
    
    // step-5:
    const newDepositTotal = newWithdrawAmount + previousTotalWithdraw;
    setTextElementValueById("withdraw-total", newDepositTotal);

    // step-6:
    const previousBalance = getElementValueById("balance-total");

    // step-7:
    const newBalanceTotal = previousBalance - newWithdrawAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
})