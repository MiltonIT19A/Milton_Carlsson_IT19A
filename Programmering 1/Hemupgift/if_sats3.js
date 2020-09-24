let vikt = prompt ("Hur tungt är ditt bagage (kg)")

let längd = prompt ("Hur långt är ditt bagage (cm)")

let bredd = prompt ("hur brett är ditt bagage (cm)")

let höjd = prompt ("hur högt är ditt bagage (cm)")




if (vikt <= 8 && längd  <= 55 && bredd <= 40 && höjd <= 23){
    console.log("Ditt bagage får åka med")
} else {
    console.log("Ditt bagage får ej åka med")
}