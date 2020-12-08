let colorpicker = document.querySelector("#colorPicker")
let rektangel = document.querySelector("#rektangel")

colorpicker.addEventListener("change", colorchanger)

function colorchanger(event){
    let color = event.target.value;
    console.log(color)
    rektangel.style.backgroundcolor = color
}