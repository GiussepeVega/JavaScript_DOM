// setTmieout
setTimeout(function(){
    console.log("Este msg se va a imprimir en 2 segundos")
}, 2000)

// setInterval
setInterval(()=>{
    console.log("Esto imprimira cada 2 segundos")
}, 2000)

// fecha y hora 
function fecha(){
    let today = new Date()

    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    if(month < 10){
        month = "0" + month
    }
    if(day < 10){
        day = "0" + day
    }
    
    let fecha = day + "/" + month + "/" + year
    document.getElementById("fech1").innerHTML=fecha
    document.getElementById("fech1").style.fontSize="25px"
    document.getElementById("fech1").style.color="blue"
}

function fechaEscrita(){
    let today = new Date()
    // dias de la semana:
    let diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    // nro de orden del dia
    let day = today.getDay()
    // nro del dia
    let date = today.getDate()
    // meses del año:
    let mesesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let month = today.getMonth()
    let year = today.getFullYear()
    
    let fechaEscrita = diasSemana[day] + " " + date + " de " + mesesAño[month] + " del " + year
    document.getElementById("fech2").innerHTML=fechaEscrita
    document.getElementById("fech2").style.fontSize="25px"
    document.getElementById("fech2").style.color="blue"
}

function hora(){
    let hora = new Date()
    let hour = hora.getHours()
    let minutes = hora.getMinutes()
    let seconds = hora.getSeconds()
    let texto = ""
    if(hour < 10){
        hour = "0" + hour
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }
    if(hour > 12){
        texto = "PM"
    }
    else{
        texto = "AM"
    }

    let horaCompleta = hour + ":" + minutes + ":" + seconds + " " + texto
    document.getElementById("hor").innerHTML=horaCompleta
    document.getElementById("hor").style.color="red"
    document.getElementById("hor").style.fontSize="25px"
    setTimeout("hora()", 1000)
}

fecha()
hora()
fechaEscrita()
// asi tambien puede funcionar, usando setInterval
// setInterval("hora()", 1000);