let num1=8
let num2=2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let sumEl = document.getElementById("sum-el")

function add(){
    let addition =num1 + num2
    console.log("num1 and num2 have been added")
    sumEl.textContent= "sum :" + addition
}

function substract(){
    let substraction  = num1 - num2
    console.log("num1 and num2 have been substracted")
    sumEl.textContent = "sum :" + substraction
    
}

function divide(){
    let division=num1/num2
    sumEl.textContent = "sum :" + division
}


function multiply(){
    let multiplication= num1 * num2
    sumEl.textContent = "sum :" + multiplication
}
