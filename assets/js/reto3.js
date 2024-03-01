// let x1 = prompt("ingrese el numero 1");
// let x2 = prompt("ingrese el numero 2");
// let calculadora = prompt("Ingrese operacion");
// let operacion;

// switch (calculadora) {
//   case "sumar" && "+":
//     operacion = Number(x1) + Number(x2);

//     alert(operacion);

//     break;

//   case "resta" && "-":
//     operacion = Number(x1) - Number(x2);

//     alert(operacion);

//     break;

//   case "multiplicacion" && "*":
//     operacion = Number(x1) * Number(x2);

//     alert(operacion);

//     break;

//   case "divicion" && "/":
//     operacion = Number(x1) / Number(x2);

//     alert(operacion);

//     break;

//   default:
//     break;
// }


let nombrePostulante = prompt("Ingresar nombre");
let cantidadPreguntas = 25;    //52%
let numeroPreguntas = prompt("Numero de preguntas correctas");
let Porcentaje; 

if(numeroPreguntas >= 23){
 
    alert(nombrePostulante + " tiene un nivel superior"); 
}else if (numeroPreguntas >= 19){
    
    alert(nombrePostulante + " Tiene un nivel medio "); 
}else if (numeroPreguntas >= 12){
    
    alert(nombrePostulante + " Tiene un nivel regular "); 
}else{
    
    alert(nombrePostulante + " Fuera de nivel ");
}
