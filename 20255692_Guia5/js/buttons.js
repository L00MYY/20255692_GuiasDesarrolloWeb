function aviso() {
    alert("Bienvenido al mundo JavaScript");
}

function confirmacion() {
    // Los valores que puede almacenar la variable confirmacion
    // son true o false
    let confirmacion = confirm("¿Desea salir de la Sesión?");

    alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos() {
    let nombre = prompt("¿Cual es su nombre?");
    // Notese que en campo del promt se mostrara 0 por defecto
    let edad = prompt("¿Cual es su edad?", 0);

    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo() {
    let parrafo = prompt(
        "Escriba la información que desea visualizar en el parrafo"
    );

    /* Utilizaremos la API DOM para acceder al elemento
    <p id="idParrafo"></p> que hemos creado en nuestro documento HTML*/

    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}

// Con el atributo defer en la etiqueta <script>, el DOM ya está listo,
// por lo que podemos asignar los eventos directamente.
document.querySelector("#idBtnAviso").addEventListener("click", aviso);
document.querySelector("#idBtnCapturar").addEventListener("click", capturarDatos);
document.querySelector("#idBtnConfirmacion").addEventListener("click", confirmacion);
document.querySelector("#idBtnDibujar").addEventListener("click", dibujarParrafo);