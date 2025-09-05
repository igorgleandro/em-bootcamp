//get input elements

const billInput=document.getElementById("billInput")
const peopleInput=document.getElementById("peopleInput")
const tipInputButtons = document.querySelectorAll(".select-tip-button")
const custumTipInput = document.getElementById("customInput")


//get result elements

const totalAmount = document.querySelector(".total-amount")
const totalAmountPerPerson = document.querySelector(".total-amount-person")


//function to update results

function updateResults(tipAmount,totalAmountValue){
    totalAmount.textContent = `$${tipAmount.toFixed(2)}`
    totalAmountPerPerson.textContent = `$${totalAmountValue.toFixed(2)}`
}


//calculate tip as the user enters the percentage

tipInputButtons.forEach((inputButton) => {
inputButton.addEventListener("click", (e) =>{
    e.preventDefault()

    tipPercentage = parseFloat(inputButton.innerText.replace("%",""))/100

    amount = parseFloat(billInput.value)
    people = peopleInput.value

    const tipAmount = (amount * tipPercentage)/ people
    const totalAmountValue = (amount/people)+tipAmount

    updateResults(tipAmount,totalAmountValue)

    })
})

//calculate tip as the user enters the cutom percentage

function calculateCustomTip(){
    amount = parseFloat(billInput.value)
    people = peopleInput.value
    customTipPercentage = parseFloat(custumTipInput.value) /100

    if (people <=0){
    document.querySelector(".error").classList.toggle("active")
    peopleInput.classList.toggle(".error-active")
    return 
    }

    const customTip = (amount * customTipPercentage)/people
    const totalAmountValue= (amount/people)+ customTip

    updateResults(customTip,totalAmountValue)

}

//clear results

document.querySelector(".reset-btn").addEventListener("click", () =>{
totalAmount.innerHTML ="$0.00"
totalAmountPerPerson.innerHTML = "$0.00"

billInput.value= ""
peopleInput.value=""
})
