// modulosoperator 
console.log(`${5%2}`)

let tal = 25

// avgöra om talet är jämt eller udda

// tal1%2 är 0: jämt
// tal1%2 är 1: udda

if (tal%2 === 0){
    console.log("talet är jämt")
} else {
    console.log("talet är udda")
}

// upgift
// 1. låt användaren skriva in ett tal
// 2. avgör om talet är positivt, 0 eller negativt

let tal1 = prompt ("skriv ett tal")

if (tal1 > 0){
    console.log("talet är positivt")
} else if (tal1 == 0) {
    console.log("talet är 0") 
} else {
    console.log("talet är negativt")
}
