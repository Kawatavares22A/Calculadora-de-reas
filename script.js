const PI = 3.14159;

function calcularAreas() {
    let A = parseFloat(document.getElementById("A").value);
    let B = parseFloat(document.getElementById("B").value);
    let C = parseFloat(document.getElementById("C").value);

    // a) área do triângulo retângulo
    let trianguloArea = (A * C) / 2.0;

    // b) área do círculo
    let circuloArea = PI * (C * C);

    // c) área do trapézio
    let trapezioArea = ((A + B) * C) / 2.0;

    // d) área do quadrado
    let quadradoArea = B * B;

    // e) área do retângulo
    let retanguloArea = A * B;

    let resultados = document.getElementById("resultados");
    resultados.innerHTML = `
        Área do triângulo: ${trianguloArea.toFixed(4)}<br>
        Área do círculo: ${circuloArea.toFixed(4)}<br>
        Área do trapézio: ${trapezioArea.toFixed(4)}<br>
        Área do quadrado: ${quadradoArea.toFixed(4)}<br>
        Área do retângulo: ${retanguloArea.toFixed(4)}<br>
    `;
}