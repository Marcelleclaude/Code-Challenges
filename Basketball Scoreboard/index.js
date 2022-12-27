let homeScore= document.getElementById("home-score")
console.log(homeScore)

let guestScore=document.getElementById("guest-score")
console.log(guestScore)

//let resetGuestScore= document.getElementById("reset-el"). innerHTML=0

let scoreboard = 0
function home1(){
    scoreboard += +1
    homeScore.textContent = scoreboard
    console.log(scoreboard)
}
function home2(){
    scoreboard += +2
    homeScore.textContent = scoreboard
    console.log(scoreboard)
}
function home3(){
    scoreboard += +3
    homeScore.textContent = scoreboard
    console.log(scoreboard)
}

//Guest score
let guestScoreboard=0

function guest1(){
guestScoreboard += +1
guestScore.textContent=guestScoreboard
console.log(guestScoreboard)
}

function guest2(){
    guestScoreboard += +2
    guestScore.textContent=guestScoreboard
    console.log(guestScoreboard)   
}

function guest3(){
    guestScoreboard += +3
    guestScore.textContent= guestScoreboard
    console.log(guestScoreboard)
}
function reset(){
     guestScore.innerHTML=0

}

   