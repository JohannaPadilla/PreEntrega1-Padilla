function envio(){
    let envio = prompt("Ingrese una de las opciones de la lista (debe colocarlo respentado mayusculas y minusculas): ")

    if(envio === "Cuyo"){
        alert("Su envio demorara 4 dias")
    } else if (envio === "Patagonia"){
        alert("Su envio demorara 5 dias")
    } else if (envio === "Pampeana"){
        alert("Su envio demorara 7 dias")
    } else if (envio === "Noroeste"){
        alert("Su envio demorara 8 dias")
    } else if (envio === "Noreste"){
        alert("Su envio demorara 9 dias")
    } else if (envio === "CABA"){
        alert("Su envio demorara 1 dia")
    } else if (envio === "GBA"){
        alert("Su envio demorara 3 dias")
    } else {
        alert("La region no esta registrada, comuniquese con el asesor.")
    }
}

function peso(){
    let peso = parseInt(prompt("Ingrese el peso de su paquete: "))
    while(peso <= 70){
        let peso_envio = parseInt(prompt("Ingrese el peso del siguiente paquete: "))
        peso = peso + peso_envio
        if(peso > 70){
            alert("Supero el peso maximo")
            break;
        }
        alert("Su peso actual es de: " + peso)
    }
}