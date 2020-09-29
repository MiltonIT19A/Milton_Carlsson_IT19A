let p_klass = document.querySelector("#klass")

let elever = ["Svenska", "Engelska", "Programmering", "Matte", "Idrott"]

p_klass.innerHTML = "Mina lektioner <br/>" 

for (let k = 0; k < elever.length; k++){
    p_klass.innerHTML += `${k+1}. ${elever[k]} <br/>`
}

