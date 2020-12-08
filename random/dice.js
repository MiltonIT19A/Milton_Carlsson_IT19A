let dicenumber1 = 0
let dicenumber2 = 0
let dice1_btn = document.querySelector("#dice_p1")
let dice1_btn = document.querySelector("#dice_p2")
let p1_result = document.querySelector("#p1_result")


dice1_btn.addEventListener("click", diceroll1)
dice2_btn.addEventListener("click", diceroll2)


function diceroll1(){
    dicenumber1 = 1+Math.floor(Math.random()*6)
    p1_result.innerHTML = dicenumber1
    console.log(dicenumber1)
}

function diceroll2(){
    dicenumber2 = 1+Math.floor(Math.random()*6)
    p1_result.innerHTML = dicenumber2
    console.log(dicenumber2)
}