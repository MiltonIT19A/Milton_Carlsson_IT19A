let namn = "Milton" // den här variabeln har ett globalt scope

function sayHello(){
    let age = 17 // lokal variabel, synlig i funktionen och inte utanför
    console.log(`Hej ${namn}`)
}

// Anropar funktioner sayHello
sayHello()
sayHello()


function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log(`2+5=${addera(2,5)}`)


function subtrahera(tal1, tal2){
    let summa = tal1-tal2
    return summa
}

console.log(`8-7=${subtrahera(8,7)}`)


function dividera(tal1, tal2){
    if (tal2 == 0){
        return "Du får ej dela med 0"
    }
    let kvot = tal1/tal2
    return kvot
}

console.log(`8/2=${dividera(8,2)}`)

function multiplicera(tal1, tal2){
    let summa = tal1*tal2
    return summa
}

console.log(`5*2=${multiplicera(5,2)}`)

function cirkelArea(radie){
    let area = Math.PI*radie**2
    return area
}

// anropa cirkelArea: 
let area10 = cirkelArea(10)
console.log(`Arean av en cirkel med radie 10 l.e. är ${area10} a.e.`)