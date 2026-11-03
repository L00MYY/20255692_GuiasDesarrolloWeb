// Accedemos al contenedor donde se mostrará el resultado
const containerResultado = document.querySelector("#idContainerResultado");

// Accedemos al botón por medio de la API DOM
const btnCalcular = document.querySelector("#idBtnCalculator");

// Agregamos el evento click al botón calcular
btnCalcular.addEventListener("click", calcularTabla);

function calcularTabla() {
    // Capturando el valor del campo
    const inputTabla = document.querySelector("#inputTabla").value;

    // Inicializamos nuestro contador
    let contador = 1;

    // Verificamos que el dato colocado sea un número entero positivo
    if (inputTabla > 0) {
        let tabla = `<h2>Tabla de multiplicar del ${inputTabla}</h2>`;
        // Utilizaremos do while para generar la tabla de multiplicar
        do {
            let resultado = contador * inputTabla;
            tabla += `<div class="row text-center">`;
            tabla += `<div class="col-md-1 colum">${contador}</div>`;
            tabla += `<div class="col-md-1 colum-green">x</div>`;
            tabla += `<div class="col-md-1 colum">${inputTabla}</div>`;
            tabla += `<div class="col-md-1 colum-green">=</div>`;
            tabla += `<div class="col-md-1 colum">${resultado}</div>`;
            tabla += `</div>`;

            // Incrementamos el valor del contador
            contador++;
        } while (contador <= 12);

        document.querySelector("#inputTabla").value = 1;
        document.querySelector("#inputTabla").focus();
        containerResultado.innerHTML = tabla;
    } else {
        alert("No se ha ingresado un número válido");
    }
}