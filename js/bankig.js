//handle by element
document.getElementById('deposit-button').addEventListener('click',function(){
//get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount= parseFloat(newDepositText)
    const depositTotal= document.getElementById('deposit-total')
    const previousDeposittext= depositTotal.innerText
    const previousDepositAmount= parseFloat(previousDeposittext)
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    
    depositTotal.innerText=newDepositTotal;

   //update accout balance
   const balanceTotal = document.getElementById('balance-total')
   const balanceTotalText = balanceTotal.innerText
   const priviousBalanceTotalAmount = parseFloat(balanceTotalText)
   const newBalanceTotal = priviousBalanceTotalAmount + newDepositAmount
   balanceTotal.innerText= newBalanceTotal

    //clear the input
    depositInput.value = '';
    
})
//handle withdwar eleven halder
document.getElementById('withdraw-button').addEventListener('click',function(){
const withdrawInput= document.getElementById('withdraw-input');
 const newWithdrawText= withdrawInput.value;
 const newWithdrawAmount = parseFloat(newWithdrawText)
 const withdrawTotal = document.getElementById('withdraw-total')
 const priviousWithdrawtext = withdrawTotal.innerText ;
 const priviousWithdrawAmount = parseFloat(priviousWithdrawtext)
 const newWithdrawTotal=newWithdrawAmount + priviousWithdrawAmount;
 withdrawTotal.innerText = newWithdrawTotal;
 //update balance

 const balanceTotal = document.getElementById('balance-total')
   const balanceTotalText = balanceTotal.innerText
   const priviousBalanceTotalAmount = parseFloat(balanceTotalText)
   const newBalanceTotal = priviousBalanceTotalAmount - newWithdrawAmount
   balanceTotal.innerText= newBalanceTotal

 console.log(newWithdrawTotal)
    //clear input

    withdrawInput.value = '';



})