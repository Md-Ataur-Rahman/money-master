document.getElementById('calculate-btn').addEventListener('click', function() {
    const incomeText = document.getElementById('income-input').value;
    const foodText = document.getElementById('food-input').value;
    const rentText = document.getElementById('rent-input').value;
    const clothesText = document.getElementById('clothes-input').value;
    const incomeValue = parseFloat(incomeText);
    const foodValue = parseFloat(foodText);
    const rentValue = parseFloat(rentText);
    const clothesValue = parseFloat(clothesText);
    const totalExpenses = foodValue + rentValue + clothesValue;

    const totalExpensesText = document.getElementById('total-expenses');
    const balancExpensesText = document.getElementById('balance-expenses');

    totalExpensesText.innerText = totalExpenses;
    balancExpensesText.innerText = incomeValue - totalExpenses;

});


document.getElementById('save-btn').addEventListener('click', function () {
    const savingAmount = document.getElementById('saving-amount');
    const saveInput = document.getElementById('save-input');
    const saveNumber = parseInt(saveInput.value);
    const incomeText = document.getElementById('income-input').value;
    const incomeValue = parseFloat(incomeText);
    const balancExpensesText = document.getElementById('balance-expenses');
    const balancExpensesNumber = parseInt(balancExpensesText.innerText);
    const remainingBalance = document.getElementById('remaining-balance');
    savingAmount.innerText = (incomeValue * saveNumber) / 100;
    const savingAmountNumber = parseInt(savingAmount.innerText);
    const totalRemainigBalance = balancExpensesNumber - savingAmountNumber;
    remainingBalance.innerText = totalRemainigBalance;
    
})

