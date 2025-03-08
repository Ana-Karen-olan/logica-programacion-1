function obtenerNumeros() {
    if (typeof window !== "undefined") {
        // Código para el navegador
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));
        let num3 = parseFloat(prompt("Ingrese el tercer número:"));

        procesarNumeros(num1, num2, num3);
    } else {
        // Node.js
        const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Ingrese el primer número: ", (num1) => {
            rl.question("Ingrese el segundo número: ", (num2) => {
                rl.question("Ingrese el tercer número: ", (num3) => {
                    procesarNumeros(parseFloat(num1), parseFloat(num2), parseFloat(num3));
                    rl.close();
                });
            });
        });
    }
}

function procesarNumeros(num1, num2, num3) {
    // Validación de números
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Por favor, ingrese solo números válidos.");
        return;
    }

    let numeros = [num1, num2, num3];

    // Ordenar de mayor a menor
    let descendiendo = [...numeros].sort((a, b) => b - a);

    // Ordenar de menor a mayor
    let ascendente = [...numeros].sort((a, b) => a - b);

    // Mostrar en consola
    console.log("De mayor a menor:", descendiendo.join(", "));
    console.log("De menor a mayor:", ascendente.join(", "));

    if (typeof document !== "undefined") {
        // Mostrar en el DOM
        let resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
            <p><strong>De mayor a menor:</strong> ${descendiendo.join(", ")}</p>
            <p><strong>De menor a mayor:</strong> ${ascendente.join(", ")}</p>
        `;
    }

    // Verificar si los números son iguales
    if (num1 === num2 && num2 === num3) {
        console.log("Los tres números son iguales.");
        if (typeof document !== "undefined") {
            resultadoDiv.innerHTML += "<p><strong>Todos los números son iguales.</strong></p>";
        }
    }
}

// Ejecutar la función
obtenerNumeros();
