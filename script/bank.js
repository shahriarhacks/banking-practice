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
    return totalBlance;
})


document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-amount');
    const newWithdrwString = withdrawAmount.value;
    const newWithdraw = parseFloat(newWithdrwString);

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const prevWithdrawTotalmountString = withdrawTotalAmount.innerText;
    const prevWithdrawTotalmount = parseFloat(prevWithdrawTotalmountString);
    const totalWithdrawAmount = prevWithdrawTotalmount + newWithdraw;
    withdrawTotalAmount.innerText = totalWithdrawAmount;

    const totalBlanceAmount = document.getElementById("blance-total");
    const prevTotalBlanceAmount = totalBlanceAmount.innerText;
    const prevTotalBlance = parseFloat(prevTotalBlanceAmount);
    const calcTotalBlance = prevTotalBlance - newWithdraw;
    totalBlanceAmount.innerText = calcTotalBlance;

    withdrawAmount.value = "";
})