// Get All Input value With it function getInput()
// Started
function getInput(elem) {
    const getElement = document.getElementById(elem);
    const getElementValue = parseInt(getElement.value);
    return getElementValue;
}
// Ended

// Get All tags with id it function name getInnertext()
// Started
function getInnerText(elem) {
    const getInnerText = document.getElementById(elem);
    return getInnerText;
}
// Ended

// Get All Input Fields it function name setInputElement()
// Started
function setInputElement(elemInput) {
    const elemInputValue = getInput(elemInput + '-input');     
    return elemInputValue;
}
// ended

// Get All Expenses it function name setExpensesElement()
// Started
function setExpensesElement(elemExpenses) {
    const elemExpensesValue = getInnerText(elemExpenses + '-expenses');
    return elemExpensesValue;
}
// Ended

// calculate-btn Start 

document.getElementById('calculate-btn').addEventListener('click', function() {
    // Decalare data and get data by funtions
    
    const incomeValue = setInputElement('income');
    const foodValue = setInputElement('food');
    const rentValue = setInputElement('rent');
    const clothesValue = setInputElement('clothes');
    const totalExpenses = setExpensesElement('total');
    const balanceExpenses = setExpensesElement('balance');

    // Here's the validations part Start

    if(
     (!isNaN(incomeValue) || (incomeValue === null) || (incomeValue === "")) &&
     (!isNaN(foodValue) || (foodValue === null) || (foodValue === "")) && 
     (!isNaN(rentValue) || (rentValue === null) || (rentValue === "")) && 
     (!isNaN(clothesValue) || (clothesValue === null) || (clothesValue === ""))
     ) {
        totalExpenses.innerText = foodValue + rentValue + clothesValue;
        balanceExpenses.innerText = incomeValue - totalExpenses.innerText;
        if(parseInt(totalExpenses.innerText) > incomeValue) {
            return alert('Sorry, Your Total Expenses Value larger than Income.Please Gives The Average Number in Your Income And Give The Positive Numeber');
        }
    }else {
        totalExpenses.innerText = 0;
        balanceExpenses.innerText = 0;
        return alert('Please Enter The Valid Data. Like a Number');
    }
    // Here's the validations part End
});

// calculate-btn End

// save-btn start

document.getElementById('save-btn').addEventListener('click', function () {    
    // Decalare data and get data by funtions

    const saveAmount = getInnerText('saving-amount');
    const incomeValue = setInputElement('income');
    const saveValue = setInputElement('save');
    const balanceExpenses = getInnerText('balance-expenses');
    const remainingBalance = getInnerText('remaining-balance');

    // Here's the validations part Start

    if(
     (!isNaN(incomeValue) || (incomeValue === null) || (incomeValue === "")) && 
     (!isNaN(saveValue) || (saveValue === null) || (saveValue === "") ())
    ) {
        saveAmount.innerText = (incomeValue * saveValue) / 100;
        remainingBalance.innerText = parseInt(balanceExpenses.innerText) - parseInt(saveAmount.innerText);
        if(parseInt(saveAmount.innerText) > parseInt(balanceExpenses.innerText)) {
            return alert('Sorry, Your Remaing Value larger than Balance Expenses, Please Gives The Average Number in Your Balance Expenses And Give The Positive Numeber');
        }
    } else {
        saveAmount.innerText = 0;
        return alert('Please Enter The Valid Data. Like a Number');
    }   
    // Here's the validations part End
})

// save-btn End