let p_jämna = document.querySelector("#jämna")
let p_talserie2 = document.querySelector("#talserie2")
let p_summa = document.querySelector("#summa")
let p_klass = document.querySelector("#klass")
let summa = 0 



for (let i = 1; i<=10; i++){
p_jämna.innerHTML += `${i} `
}

for (let j=10; j>0; j--){
p_talserie2.innerHTML += `${j} `
}

for (let i = 0; i<10; i++){
console.log(`${i} I will not write all over the walls `)
}

for (let i=0; i<10; i++){
    p_summa.innerHTML +=`${i}+ `
    summa += i 
}

p_summa.innerHTML += ` = ${summa} `


//skapa en lista med elever
let elever = ["Kokchun", "Henrik", "Thomas", "Tatiana", "Zsofia", "David"]

p_klass.innerHTML = "Klass IT19A <br/>"

for (let k = 0; k < elever.length; k++){
    p_klass.innerHTML += `${k+1}. ${elever[k]} <br/>`
}

