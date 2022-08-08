const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkBtn = document.querySelector('#check-btn');
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener('click', function validateBillAndCashAmount(){
    message.style.display="none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const changeAmount = cashGiven.value - billAmount.value;
            calculateChange(changeAmount);

        }else{
            showMessage("The cash should atleast equal to bill amount or more than bill amount");
        } 
    }else{
        showMessage("Bill amount should be greater than 0..")
    }
})

function calculateChange(change){
    for(let i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(change / availableNotes[i]);
        change %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes; 
    }

}

function showMessage(error){
    message.style.display="block";
    message.innerText = error;
}
