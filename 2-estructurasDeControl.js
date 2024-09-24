// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

// Ejemplo de uso
verificarParidad(4); // El número es par
verificarParidad(7); // El número es impar

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad >= 18 && edad <= 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}

// Ejemplo de uso
clasificarEdad(15); // Menor de edad
clasificarEdad(30); // Adulto
clasificarEdad(70); // Adulto mayor

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    if (numero < 0) {
        console.log("Por favor, introduce un número entero positivo.");
        return; // Salir de la función si el número no es positivo
    }

    while (numero >= 0) {
        console.log(numero);
        numero--; // Decrementar el número
    }
}

// Ejemplo de uso
cuentaRegresiva(5);
// Salida:
// 5
// 4
// 3
// 2
// 1
// 0

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0; // Inicializamos el contador

    do {
        console.log("Estoy aprendiendo JavaScript");
        contador++; // Incrementamos el contador
    } while (contador < 5); // El bucle se repite mientras el contador sea menor que 5
}

// Ejemplo de uso
repetirMensaje();
// Salida:
// Estoy aprendiendo JavaScript
// Estoy aprendiendo JavaScript
// Estoy aprendiendo JavaScript
// Estoy aprendiendo JavaScript
// Estoy aprendiendo JavaScript

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    if (numero < 0) {
        console.log("Por favor, introduce un número entero positivo.");
        return; // Salir de la función si el número no es positivo
    }

    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            console.log(i); // Imprimir el número si es par
        }
    }
}

// Ejemplo de uso
imprimirPares(10);
// Salida:
// 0
// 2
// 4
// 6
// 8
// 10

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break; // Detener el bucle si i es igual a 6
        }
        console.log(i); // Imprimir el número
    }
}

// Ejemplo de uso
detenerEnSeis();
// Salida:
// 1
// 2
// 3
// 4
// 5

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue; // Saltar el número 5
        }
        console.log(i); // Imprimir el número
    }
}

// Ejemplo de uso
saltarCinco();
// Salida:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    let diaSemana;

    switch (dia) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        case 6:
            diaSemana = "Sábado";
            break;
        case 7:
            diaSemana = "Domingo";
            break;
        default:
            diaSemana = "Número no válido. Debe ser del 1 al 7.";
            break;
    }

    return diaSemana; // Devolver el día de la semana correspondiente
}

// Ejemplo de uso
console.log(obtenerDiaSemana(1)); // Lunes
console.log(obtenerDiaSemana(2)); // Martes
console.log(obtenerDiaSemana(3)); // Miérsoles
console.log(obtenerDiaSemana(4)); // Jueves
console.log(obtenerDiaSemana(5)); // Viernes
console.log(obtenerDiaSemana(6)); // Sábado
console.log(obtenerDiaSemana(7)); // Domingo
console.log(obtenerDiaSemana(8)); // Número no válido. Debe ser del 1 al 7.

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    switch (letra.toLowerCase()) { // Convertimos la letra a minúsculas para hacer la comparación más sencilla
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return `${letra} es una vocal.`;
        default:
            return `${letra} no es una vocal.`;
    }
}

// Ejemplo de uso
console.log(esVocal('a')); // a es una vocal.
console.log(esVocal('B')); // B no es una vocal.
console.log(esVocal('e')); // e es una vocal.
console.log(esVocal('z')); // z no es una vocal.

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return "Todos son positivos.";
    } else if (a < 0 || b < 0 || c < 0) {
        if (a < 0 && b < 0 && c < 0) {
            return "Todos son negativos.";
        } else {
            return "Al menos uno es negativo.";
        }
    } else {
        return "Todos son cero o positivos y negativos.";
    }
}

// Ejemplo de uso
console.log(evaluarNumeros(5, 10, 3));  // Todos son positivos.
console.log(evaluarNumeros(-1, 2, 3));  // Al menos uno es negativo.
console.log(evaluarNumeros(-1, -2, -3)); // Todos son negativos.
console.log(evaluarNumeros(0, 0, 0));    // Todos son cero o positivos y negativos.