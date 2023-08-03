function fTestaTriangulo() {
    const l1 = parseFloat(document.querySelector("#iLado1").value);
    const l2 = parseFloat(document.querySelector("#iLado2").value);
    const l3 = parseFloat(document.querySelector("#iLado3").value);
    if ((l1 + l2 > l3) && 
        (l1 + l3 > l2) &&
        (l2 + l3 > l1)) {
            document.querySelector("#pResultado").innerHTML = "Esses lados representam um Triangulo";
            document.querySelector("#pResultado").style.color = "green";
        } else {
            document.querySelector("#pResultado").innerHTML = "Essas lados não formam um Triangulo;"
            document.querySelector("#pResultado").style.color = "red";
        }
    return false; //Não enviar para a Action do Form
}

function fLimpar() {
    document.querySelector("#pResultado").innerHTML = "...";
    return true;
}