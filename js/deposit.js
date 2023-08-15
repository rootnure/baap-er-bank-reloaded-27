/* 
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
2-5. convert string deposit amount to a number type

3. clear the deposit input field after getting the value

4. get the previous deposit total

5. calculate new deposit total and set the value to the deposit total

6. get current balance

7. calculate new balance and set the new balance total
*/

// step-1:
document.querySelector("#btn-deposit").addEventListener('click', function () {
    // step-2:
    const newDepositAmount = getInputValueById("deposit-field");

    // step-4:
    const previousTotalDeposit = getInnerTextValueById("deposit-total");
    
    // step-5:
    const newDepositTotal = newDepositAmount + previousTotalDeposit;
    setInnerTextValueById("deposit-total", newDepositTotal);

    // step-6:
    const previousBalance = getInnerTextValueById("balance-total");

    // step-7:
    const newBalanceTotal = previousBalance + newDepositAmount;
    setInnerTextValueById("balance-total", newBalanceTotal);
})