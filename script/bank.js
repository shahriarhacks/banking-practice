document.getElementById('deposite-button').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposite-amount');
    const newDepositeString = depositAmount.value;
    const newDeposite = parseFloat(newDepositeString);

    const depositeTotalAmount = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalAmount.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    const totalDeposite = newDeposite + previousDepositeTotal;
    depositeTotalAmount.innerText = totalDeposite;

    const previousBalanceAmount = document.getElementById('blance-total');
    const previousBalanceAmountString = previousBalanceAmount.innerText;
    const previousBalance = parseFloat(previousBalanceAmountString);
    const totalBlance = previousBalance + newDeposite;
    previousBalanceAmount.innerText = totalBlance;

    depositAmount.value = '';
})