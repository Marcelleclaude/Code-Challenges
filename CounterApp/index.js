//document.getElementById("count-el").innerText=5

//to store the data you need to create variables.

// let count=0

// console.log(count);//the console bsically prints out what you put in. its like a system.print

// //// 1. Create two variables, myAge and humanDogRatio
// let myAge=26
// let humanDogRatio=7

// // 2. Multiply the two together and store the result in myDogAge 
// let myDogAge=myAge* humanDogRatio
// // 3. Log myDogAge to the console
// console.log(myDogAge);

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70


//Sudo code:
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

//I need to create the increment function so when you click the incremnet button it works

let welcomeEl=document.getElementById("welcome-el")
let name= "Claude"
let greeting= "Welcome back "
welcomeEl.innerText= greeting + name
welcomeEl.innerText +="👋"//same thing as if i did welcome=welcone+1

let countEl=document.getElementById("count-el")
console.log(countEl)

function increment(){
    console.log("The button was clicked")
}

let count=0
function increment(){
    count = count +1
    console.log("the Button was clicked")
    countEl.innerText=count//text inside of the brackets
    console.log(count)
}

increment()
// 1. Create a function, save(), which logs out the count when it's called

let saveEl=document.getElementById("save-el")

function save(){
    let saving = count + " - "
    saveEl.textContent += saving
    countEl.textContent=0 
    count=0
}





