// funcion normal
function sumar(){
    let nro1 = 5
    let nro2 = 25
    let suma = nro1 + nro2
    console.log("La suma es: " + suma)
}

sumar()

// funcion con retorno
function sumarR(){
    let nro1 = 5
    let nro2 = 25
    let suma = nro1 + nro2
    return suma
}

let rpta = sumarR()
console.log(rpta)
// o sino:
// console.log("la suma es: " + suma())

// funcion con parametros
function sumarP(nro1, nro2){
    let suma = nro1 + nro2
    console.log("La suma es: " + suma)
}

sumarP(15, 25)

// funciones anonimas
const f_anonima = function(){
    console.log("Esta es una funcion anonima")
}

f_anonima();

// funciones flecha
// let msg = ()=>console.log("hola")
// msg()

// funcion flecha con parametros
let prueba = (nombre)=>{
    console.log("Tu nombre es: " + nombre)
}

prueba("Horacio")

// comillas invertidas
let prueba2 = (nombre)=>{
    console.log(`Hola: ${nombre}`)
}

prueba2("comilla invertida")
let msg = ()=>console.log("hola")
msg()
// -------------------------------------------
function calculador(){
    let operador = document.getElementById("operador").value
    let numero1 = parseInt(document.getElementById("nro1").value)
    let numero2 = parseInt(document.getElementById("nro2").value)
    let result = ""
    switch (operador) {
        case "+":
            result = numero1 + numero2
            break;
        case "-":
            result = numero1 - numero2
            break;
        case "*":
            result = numero1 * numero2
            break;
        case "/":
            result = numero1 / numero2
            break;
        default:
            break;
    }
    document.getElementById("result").innerHTML=`Tu resultado es: ${result}`
    return result
}
