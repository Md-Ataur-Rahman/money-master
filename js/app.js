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
    const totalExpenses = setExpensesElement('total');
    const balanceExpenses = setExpensesElement('balance');

    if(
     (!isNaN(incomeValue) || (incomeValue === null) || (incomeValue === "")) &&
     (!isNaN(foodValue) || (foodValue === null) || (foodValue === "")) && 
     (!isNaN(rentValue) || (rentValue === null) || (rentValue === "")) && 
     (!isNaN(clothesValue) || (clothesValue === null) || (clothesValue === ""))
     ) {
        totalExpenses.innerText = foodValue + rentValue + clothesValue;
        balanceExpenses.innerText = incomeValue - totalExpenses.innerText;
    }else {
        totalExpenses.innerText = 0;
        balanceExpenses.innerText = 0;
        return alert('Please Enter The Valid Data. Like a Number');
    }
});


document.getElementById('save-btn').addEventListener('click', function () {    
    const saveAmount = getInnerText('saving-amount');
    const incomeValue = setInputElement('income');
    const saveValue = setInputElement('save');
    const balanceExpenses = getInnerText('balance-expenses');
    const remainingBalance = getInnerText('remaining-balance');


    if(
     (!isNaN(incomeValue) || (incomeValue === null) || (incomeValue === "")) && 
     (!isNaN(saveValue) || (saveValue === null) || (saveValue === ""))
    ) {
        saveAmount.innerText = (incomeValue * saveValue) / 100;
        remainingBalance.innerText = parseInt(balanceExpenses.innerText) - parseInt(saveAmount.innerText);
    } else {
        saveAmount.innerText = 0;
        return alert('Please Enter The Valid Data. Like a Number');
    }   
})

