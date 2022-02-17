function getInput(elem) {
    const getElement = document.getElementById(elem);
    const getElementValue = parseInt(getElement.value);
    return getElementValue;
}

function getInnerText(elem) {
    const getInnerText = document.getElementById(elem);
    return getInnerText;
}
function setInputElement(elemInput) {
    const elemInputValue = getInput(elemInput + '-input');
    return elemInputValue;
}
function setExpensesElement(elemExpenses) {
    const elemExpensesValue = getInnerText(elemExpenses + '-expenses');
    return elemExpensesValue;
}
function setAmountBalance(elemTotalName) {
    const elemExpensesValue = getInnerText(elemTotalName);
    return elemExpensesValue;
}

document.getElementById('calculate-btn').addEventListener('click', function() {
    const incomeValue = setInputElement('income');
    const foodValue = setInputElement('food');
    const rentValue = setInputElement('rent');
    const clothesValue = setInputElement('clothes');
    const totalExpensesText = setExpensesElement('total');
    const balancExpensesText = setExpensesElement('balance');

    const totalExpenses = foodValue + rentValue + clothesValue;
    totalExpensesText.innerText = totalExpenses;
    balancExpensesText.innerText = incomeValue - totalExpenses;

});


document.getElementById('save-btn').addEventListener('click', function () {    
    const savingAmount = getInnerText('saving-amount');
    const incomeValue = setInputElement('income');
    const saveNumber = setInputElement('save');
    const balancExpensesText = getInnerText('balance-expenses');
    const balancExpensesNumber = parseInt(balancExpensesText.innerText);
    const remainingBalance = getInnerText('remaining-balance');




    
    savingAmount.innerText = (incomeValue * saveNumber) / 100;
    const savingAmountNumber = parseInt(savingAmount.innerText);

    const totalRemainigBalance = balancExpensesNumber - savingAmountNumber;
    remainingBalance.innerText = totalRemainigBalance;
    
})

