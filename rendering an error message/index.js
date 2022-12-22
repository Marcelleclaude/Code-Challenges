// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errors=document.getElementById("error")

function errormsg(){
    console.log("button was clicked")
errors.textContent="Something went wrong, please try again"
//use this errors.textcontent if you want a message to showup after you click the button
}