// skapar en variabel som heter name och tilldelar det värdet "Kokchun"
let name = "Milton" // sträng
let age = 17 // heltal, int 

console.log(`Hej ${name} du är ${age} år gammal`)

// if-sats - att göra val
if (age >= 18){
    console.log("Du är vuxen")
} else {
    console.log("Du är barn")
}

// DOM - Document Object Model
let text = document.querySelector("#text")
text.innerHTML = `${name} är ${age} år gammal`


// skapar variabler för p-taggarna
let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let sub = document.querySelector("#subtraktion")
let add = document.querySelector("#addition")

mult.innerHTML = `multiplikation`
div.innerHTML = `division`
sub.innerHTML = `subtraktion`
add.innerHTML = `addition`

// Skapar variabel för knappen
let button = document.querySelector("#knapp")

// Lägger till en eventlyssnare till knappen
button.addEventListener("click", math)

function math(event){
    console.log("math-funktion körs")

    let num1 = parseFloat(document.querySelector("#number1").value)
    let num2 = parseFloat(document.querySelector("#number2").value)

    add.innerHTML = `${num1}+${num2}=${num1+num2}`
    sub.InnerHTML = `${num1}-${num2}=${num1-num2}`
    mult.InnerHTML = `${num1}*${num2}=${num1*num2}`
}