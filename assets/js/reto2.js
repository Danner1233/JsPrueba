let x = prompt("Ingrese numero")

if (x < 0) {
    alert(x + " Es un numero negativo")
} else if(x > 0) {
    alert(x + " Es un numero positivo")
}else{

    alert ("0 es un numero neutro")
}

let x1= prompt("Ingrese primer numero")
let y = prompt("Ingrese segundo numero")

if (x1 > y) {

    alert(x1 + " Es mayor que " + y)
    
} else {

    alert(x1 + " es menor que " + y)
    
}

let c1 = prompt("Ingrese primer numero")
let c2 = prompt("Ingrese segundo numero")
let c3 = prompt("Ingrese tercero numero")

if (c1 >= c2 && c1 >= c3) {

    alert(c1 + " Es el numero mayor")
    
} else if(c2 >= c1 && c2 >= c3) {
    
alert(c2 + " Es el numero mayor")

}else{

    alert(c3 + " Es el numero mayor")

}

if (c1 <= c2 && c1 <= c3) {

    alert(c1 + " Es el numero menor")
    
} else if(c2 <= c1 && c2 <= c3) {
    
alert(c2 + " Es el numero menor")

}else{

    alert(c3 + " Es el numero menor")

}

