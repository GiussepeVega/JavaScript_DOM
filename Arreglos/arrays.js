// 1era forma de crear un arreglo en JS
let numeros = [1, 2, 3, 4, 5];

// 2da forma de crear un arreglo en JS
let frutas = new Array("Sandia","Melon","Papaya");

console.log(numeros);
console.log(frutas);

// imprimir por indices
console.log(numeros[0]) // 1
console.log(frutas[1]); // Melon

// modificar elemente de un arreglo
frutas[1] = "Naranja"
// vemos si ha cambiado el elemento de la posicion "1"
console.log(frutas)

// añadir un elemento al final de un arreglo "push()"
console.log("Metodo Push:")
frutas.push("Arandano")
console.log(frutas)

// eliminar ultimo elemento de un arreglo "pop()"
console.log("Metodo Pop:")
frutas.pop()
console.log(frutas)

// eliminar primer elemento de un arreglo "shift()"
console.log("Metodo Shift:")
frutas.shift()
console.log(frutas)

// añadir un elemento al principio de un arreglo "unshift()"
console.log("Metodo Unshift:")
frutas.unshift("Durazno")
console.log(frutas)

// metodo "Map(function)", crear un nuevo arreglo aplicando una función
// nuevo arreglo almacenando el nro de longitudes de cada palabra del arreglo frutas
console.log("Map");
let longitudes = frutas.map(function(frutas){
    return frutas.length
})
console.log(longitudes) // [7, 7, 6]

// 2do metodo
// crear nuevo arreglo con los numeros duplicados en el arreglo numeros
let numerosDobles = numeros.map(numeros=>numeros*2)
console.log(numerosDobles);  // [2, 4, 6, 8, 10]

frutas.push("Melocoton")
frutas.unshift("Arandanos")
console.log(frutas);

// metodo "Filter(function)", crea un nuevo arreglo con los elementos que cumplan una condición
console.log("Metodo filter");
console.log("Arreglo con elementos de longitud mayor a 7");
let frutasNomLargo = frutas.filter(function(fruta){
    return fruta.length > 7
})
console.log(frutasNomLargo) // [Arandanos, Melocoton]

// crear nuevo arreglo que solo obtenga nros pares del arreglo numeros
let nrosPares = numeros.filter(function(numero){
    return numero % 2 == 0
})
console.log(nrosPares); // [2, 4]

// 2do metodo 
// crear arreglo que sean mayores a 2 desde el arreglo numeros
let mayor2 = numeros.filter(numero=>numero > 2)
console.log(mayor2); // [3, 4, 5]

// imprimir cada elemento de un arreglo con un for
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

// imprimir con un for of
console.log("for of")
for(let element of numeros){
    console.log(element)
}

// -----------------------------------------------
let edades = [23, 17, 25, 39, 45, 65, 18, 30]
function imprimirArray(){
    for(let i = 0; i < edades.length; i++){
        let valor = edades[i]
        document.getElementById("elemento").innerHTML+=valor + "<br>"
    }
}

function imprimirArrayMayorANumero(){
    let numero = parseInt(document.getElementById("nro").value)
    if (isNaN(numero)) { // validar si el número es válido
        alert("Por favor, ingresa un número válido.");
        return;
    }
    let nuevoArray = edades.filter(function(number){
        return number >= numero
    })
    document.getElementById("elemento").innerHTML=""
    for(let i = 0; i < nuevoArray.length; i++){
        let valor = nuevoArray[i]
        document.getElementById("elemento").innerHTML+=valor + "<br>"
    }
}

imprimirArray()