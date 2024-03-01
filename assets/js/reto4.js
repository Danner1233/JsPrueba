// Paso 1: Solicitar la entrada de 10 números
let numeros = [];
for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(numero);
}

// Paso 2: Calcular la suma de los últimos 5 números
let sumaUltimos5 = 0;
for (let i = 5; i < numeros.length; i++) {
    sumaUltimos5 += numeros[i];
}

// Paso 3: Imprimir la suma de los últimos 5 números
document.write("La suma de los últimos 5 números es: " + sumaUltimos5);
