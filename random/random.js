console.log("hej")
let slumptal = Math.random()

console.log(slumptal)

let coinflip = Math.round(slumptal)

console.log(`Coin Flip: ${coinflip}`)

if (coinflip == 1){
    console.log("Head")
} else{
    console.log("Tails")
}

let sexor = 0

for (let i = 0; i < 1000000; i++){
    let tärning = Math.floor(Math.random()*6)+1

    if (tärning == 6){
        sexor++;
    }
}

console.log(`Antalet sexor är: ${sexor}`)

let andel = sexor/100000
console.log(andel)
console.log(`Teoretisk sannolikhet ${1/6}`)
