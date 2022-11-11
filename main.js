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

// Validar formulario de Contacto








// Formulario de Proceso

        // Inicialización de variables
// Divs de los wizards
let wiz1 = document.querySelector("#wiz-1");
let wiz2 = document.querySelector("#wiz-2");
let wiz3 = document.querySelector("#wiz-3");

// Inicializo donde guardo respuestas del formulario
let lvl = "";
let comensales = 0;

// Selecciono los 3 botones "siguiente" del wizzard
let btnSigue = document.querySelectorAll(".btn-siguiente");
console.log(btnSigue);

// Selecciono los 3 botones "anterior" del wizzard
let btnAnterior = document.querySelectorAll(".btn-anterior");

// Creo el parrafo del error para el wizard
let noSigue = document.createElement("p");
noSigue.innerHTML = `Complete los campos`;
noSigue.id = "pErr";
noSigue.style.color = "red";



// Entra el div para mostrar el wizard con un onclick
function catering() {
    document.querySelector("#catering button").classList.add("esconder");
    document.querySelector(".contiene-wiz").classList.add("mostrar");
}


// Validación primer wizard 
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



// Continúo el formulario, muevo el wizard que corresponda, si los campos están seleccionados
function siguiente() {
    if(wiz2.classList.contains("mover-wiz") && !wiz3.classList.contains("mover-wiz")){
            wiz3.classList.add("mover-wiz")
    }
    if(wiz1.classList.contains("mover-wiz") && !wiz2.classList.contains("mover-wiz")){
            wiz2.classList.add("mover-wiz")
    }
    if (!wiz1.classList.contains("mover-wiz")){
        if (comensales == 0 && !document.querySelector("#pErr")){
            btnAnterior[0].insertAdjacentElement("beforeBegin",noSigue);
        } else if (comensales !== 0) {
            wiz1.classList.add("mover-wiz")
        }
    }
}
console.log();

// Vuelvo atras en el formulario, muestro nuevamente el wizard que corresponda
function anterior(){
    if (!wiz1.classList.contains("mover-wiz")){
            document.querySelector("#catering button").classList.remove("esconder");
            document.querySelector(".contiene-wiz").classList.remove("mostrar");
        }
        if(wiz1.classList.contains("mover-wiz") && !wiz2.classList.contains("mover-wiz")){
                wiz1.classList.remove("mover-wiz")
        }
    if(wiz2.classList.contains("mover-wiz") && !wiz3.classList.contains("mover-wiz")){
        wiz2.classList.remove("mover-wiz")
    }
}




// Agrego los Listeners a los botones siguiente
btnSigue[0].addEventListener("click", siguiente);
btnSigue[1].addEventListener("click", siguiente);
btnSigue[2].addEventListener("click", siguiente);

// Agrego los Listeners a los botones anterior
btnAnterior[0].addEventListener("click", anterior)
btnAnterior[1].addEventListener("click", anterior)
btnAnterior[2].addEventListener("click", anterior)




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

