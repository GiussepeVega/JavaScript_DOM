console.log(Date())

let fecha = new Date()
console.log(fecha.getDate()) // arroja el nro del dia

let dias_semana=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
let pos = fecha.getDay() // arroja la posición del dia
console.log(pos)  // 0 --> Domingo
console.log(dias_semana[pos])

// meses
console.log(fecha.getMonth()) // retorna el nro del mes, comenzando desde 0 que representa enero y 11 representa diciembre
// arreglos meses
let meses_año=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(meses_año[fecha.getMonth()]) // 11 --> Diciembre

// año, horas y minutos
console.log(fecha.getFullYear())

console.log("Horas:")
console.log(fecha.getHours())

console.log("Minutos:")
console.log(fecha.getMinutes())

console.log("Segundos:")
console.log(fecha.getSeconds())

console.log("Milisegundos:")
console.log(fecha.getMilliseconds())

console.log("Fecha Completa:")
console.log(fecha.toDateString())

console.log("Fecha con formato: dd/mm/aaaa; hh:mm:ss")
console.log(fecha.toLocaleString())

console.log("Fecha con formato, solo fecha:")
console.log(fecha.toLocaleDateString())

console.log("Fecha con formato, solo hora:")
console.log(fecha.toLocaleTimeString())