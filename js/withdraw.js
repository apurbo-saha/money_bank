document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked')


    const withdrawField= document.getElementById('withdraw-field');
    const newWithDrawAmountString= withdrawField.value;
    const newWithDrawAmount= parseFloat(newWithDrawAmountString);
    console.log(newWithDrawAmount);

    const withdrawTotalElement= document.getElementById('withdraw-total');
    const previousWithdrawTotalString= withdrawTotalElement.innerText;
    const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);

    


    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotal= parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal)

    if(newWithDrawAmount> previousBalanceTotal){
        alert('You have not sufficient amount in your balance');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal+newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal= previousBalanceTotal-newWithDrawAmount;
    balanceTotalElement.innerText= newBalanceTotal;
    withdrawField.value= '';

    
})