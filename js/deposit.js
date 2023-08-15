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
    const depositField = document.querySelector("#deposit-field");
    // step-2-5:
    const newDepositAmount = parseFloat(depositField.value);
    
    // step-3:
    depositField.value = '';

    // step-4:
    const depositTotalElement = document.querySelector("#deposit-total");
    const previousTotalDeposit = parseFloat(depositTotalElement.innerText);
    
    // step-5:
    const newDepositTotal = newDepositAmount + previousTotalDeposit;
    depositTotalElement.innerText = newDepositTotal;

    // step-6:
    const totalBalanceElement = document.querySelector("#balance-total");
    const previousBalance = parseFloat(totalBalanceElement.innerText);

    // step-7:
    const newBalanceTotal = previousBalance + newDepositAmount;
    totalBalanceElement.innerText = newBalanceTotal;
})