const opcionSelect = document.querySelector(`#opcionSelect`);

if (opcionSelect != undefined && opcionSelect != null && opcionSelect) {
    opcionSelect.addEventListener("change", ejecutarAccion);

    const resetButton = document.querySelector(`#resetButton`);

    if (resetButton != undefined && resetButton != null && resetButton) {
        resetButton.addEventListener("click", function () {
            opcionSelect.selectedIndex = 0;
        });
    }
}



function ejecutarAccion() {
    var opcion = document.getElementById("opcionSelect").value;

    switch (opcion) {
        case "1":
            var palabra = prompt("Introduce una palabra:");
            var esPalindromo = verificarPalindromo(palabra);
            mostrarResultado(esPalindromo ? "Es un palíndromo" : "No es un palíndromo");
            break;

        case "2":
            var numero1 = parseFloat(prompt("Introduce el primer número:"));
            var numero2 = parseFloat(prompt("Introduce el segundo número:"));
            var mayor = obtenerMayor(numero1, numero2);
            mostrarResultado("El número mayor es: " + mayor);
            break;

        case "3":
            var frase = prompt("Introduce una frase (mínimo dos líneas):");
            var vocales = obtenerVocales(frase);
            mostrarResultado("Vocales en la frase: " + vocales.join(", "));
            break;

        default:
            mostrarResultado("Selecciona una opción válida.");
    }
}

function verificarPalindromo(palabra) {
    var palabraInvertida = palabra.split("").reverse().join("");
    return palabra === palabraInvertida;
}

function obtenerMayor(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Ingresa números válidos.";
    } else if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Los números son iguales.";
    }
}

function obtenerVocales(frase) {
    var vocales = frase.match(/[aeiou]/gi);
    return vocales || [];
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").innerHTML = "<p>" + resultado + "</p>";
}