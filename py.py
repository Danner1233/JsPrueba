# Paso 1: Solicitar la entrada de 10 números
numeros = []
for i in range(10):
    numero = float(input("Ingrese el número {}: ".format(i + 1)))
    numeros.append(numero)

# Paso 2: Calcular la suma de los últimos 5 números
suma_ultimos_5 = sum(numeros[5:])

# Paso 3: Imprimir la suma de los últimos 5 números
print("La suma de los últimos 5 números es:", suma_ultimos_5)
