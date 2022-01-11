let family = {
    incomes: [2500.87, 11238.67, 12351.75],
    expenses: [5650.89, 4350.67, 1850.99 ]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value 
    }
    return total
}

function calculateBalance() {
    const familyIncomes = sum(family.incomes)
    const familyExpenses = sum(family.expenses)

    const total = familyIncomes - familyExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`O saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()