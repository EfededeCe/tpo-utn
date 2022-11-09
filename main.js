/*  Validacion de formulario y proceso:

Voy a presupuestar un catering segun la cantidad de personas
y el tipo de comida.

Seleccionar primero cuantas personas:

hasta 20: 1000,1500,2500 por persona
hasta 50: un 10% menos
hasta 100: un 20% menos

Seleccionar bajilla:
Si: $400 por persona

Seleccionar mobiliario (mesas, sillas, manteles)
Si: $200 por persona

Seleccionar decoración
Flores: $150 por persona
Globos: $50 por persona
Especial Cumpleaños: $300 por persona
Especial Casamiento: $500 por persona
Especial Casamiento 2: $800 por persona

Hacer la cuenta segun la cantidad de personas:
$ en un solo pago 50% antes, 50% al finalizar el evento

Ofrecer (previo un pago del 30%) pagar en 6 o 12 cuotas el monto restante:
6 cuotas con una taza del 4% mensual
12 cuotas con una taza del 8% mensual

*/

// let nombre = document.querySelector("#fullName").value; 
// let mail = document.querySelector("#email").value; 
// let tel = document.querySelector("#tel").value;

function catering() {
    document.querySelector("#catering button").classList.toggle("esconder");
    document.querySelector(".contiene-wiz").classList.toggle("mostrar");
}

lvl = "cero";
comensales = 0;

function primerWiz(){
    let radios = document.getElementsByName("lvl");
    let adentro = "adentro";
    for (let radio of radios){
        if (radio.checked){
            adentro = radio.value;
        }
    }
    lvl = adentro;
    
    switch (lvl) {
        case "economico":
            lvl = 1000
            break;
        case "medio":
            lvl = 1500
            break;
        case "lux":
                lvl = 2500
            break;
        
        default:
            "Algo malió sal..."
            break;
            }
            
    console.log(lvl);
    
    comensales = document.querySelector(".form-select").value;
    console.log(comensales);

    switch (comensales) {
        case "0":
            comensales = 0
            break;
        case "20":
            comensales = 1
            break;
        case "50":
            comensales = 0.9
            break;
        case "100":
            comensales = 0.8
            break;
    
        default:
            "Algo malió sal..."
            break;
    }

    totl = lvl * comensales;
    document.querySelector("#por-persona").innerHTML = "El precio por persona es: " + totl;

}

function siguiente() {
    if (comensales == 0 && !document.querySelector("#pErr")){
        let noSigue = document.createElement("p");
    let botonSigue = document.querySelector("#wiz-1 #por-persona");
        noSigue.innerHTML = `Complete los campos`;
        noSigue.id = "pErr";
        noSigue.style.color = "red"; 
        botonSigue.insertAdjacentElement("afterEnd",noSigue);
    } else if (comensales !== 0) {
        document.querySelector("#wiz-1").classList.add("mover-wiz")
    }
}







$(document).ready(function(){

    $("#ofertas").validate({
        rules: {
            fullName: {
                required: true,
                min: 3,
                number: false
            }



        }
    });
    

    $("#nomb").on("click", function(){
        
        let nombre = $("#fullName").val();
        console.log(nombre);
        
    });

});

