// Accediendo a los elementos html
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRdMasculino = document.getElementById("idRdMasculino");
const inputRdFemenino = document.getElementById("idRdFemenino");
const cmbPais = document.getElementById("idCmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idNombrePais");

const buttonAgregarPaciente = document.getElementById("idBtnAgregar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAddPais");

const notificacion = document.getElementById("idNotificación");
// Componente de Bootstrap
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("idMensaje");

// Componente modal
const idModal = document.getElementById("idModal");

// Arreglo global de pacientes
let arrayPaciente = [];

// Índice para edición
let indiceEdicion = -1;

// ========== LOCALSTORAGE (Ejercicio 2) ==========
function guardarEnLocalStorage() {
    localStorage.setItem("pacientes", JSON.stringify(arrayPaciente));
}

function cargarDesdeLocalStorage() {
    const datos = localStorage.getItem("pacientes");
    if (datos) {
        arrayPaciente = JSON.parse(datos);
    }
}

// ========== LIMPIAR FORMULARIO ==========
const limpiarForm = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = 0;
    inputDireccion.value = "";
    inputNombrePais.value = "";
    indiceEdicion = -1;
    inputNombre.focus();
};

// ========== AGREGAR / EDITAR PACIENTE ==========
const addPaciente = function () {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo = inputRdMasculino.checked == true ? "Hombre" : inputRdFemenino.checked == true ? "Mujer" : "";
    let pais = cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    if (nombre !== "" && apellido !== "" && fechaNacimiento !== "" && sexo !== "" && pais !== "" && direccion !== "") {
        if (indiceEdicion === -1) {
            // Agregando información al arreglo paciente
            arrayPaciente.push(new Array(nombre, apellido, fechaNacimiento, sexo, labelPais, direccion));
            mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        } else {
            // Editando paciente existente
            arrayPaciente[indiceEdicion] = new Array(nombre, apellido, fechaNacimiento, sexo, labelPais, direccion);
            mensaje.innerHTML = "Paciente actualizado correctamente";
        }
        toast.show();
        guardarEnLocalStorage();
        limpiarForm();
        imprimirPacientes();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

// ========== IMPRIMIR FILAS ==========
function imprimirFilas() {
    let $fila = "";
    let contador = 1;

    arrayPaciente.forEach((element) => {
        $fila += `<tr>
            <td scope="row" class="text-center fw-bold">${contador}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td>${element[3]}</td>
            <td>${element[4]}</td>
            <td>${element[5]}</td>
            <td>
                <button onclick="editarPaciente(${contador - 1})" type="button" class="btn btn-primary btn-sm" alt="Editar">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button onclick="eliminarPaciente(${contador - 1})" type="button" class="btn btn-danger btn-sm" alt="Eliminar">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </td>
        </tr>`;
        contador++;
    });
    return $fila;
}

// ========== IMPRIMIR PACIENTES ==========
const imprimirPacientes = () => {
    let $table = `<div class="table-responsive">
        <table class="table table-striped table-hover table-bordered">
            <tr>
                <th scope="col" class="text-center" style="width:5%">#</th>
                <th scope="col" class="text-center" style="width:15%">Nombre</th>
                <th scope="col" class="text-center" style="width:15%">Apellido</th>
                <th scope="col" class="text-center" style="width:10%">Fecha nacimiento</th>
                <th scope="col" class="text-center" style="width:10%">Sexo</th>
                <th scope="col" class="text-center" style="width:10%">País</th>
                <th scope="col" class="text-center" style="width:25%">Dirección</th>
                <th scope="col" class="text-center" style="width:10%">Opciones</th>
            </tr>
            ${imprimirFilas()}
        </table>
    </div>`;
    document.getElementById("idTablaPacientes").innerHTML = $table;
};

// ========== EDITAR PACIENTE (Ejercicio 1) ==========
function editarPaciente(indice) {
    const paciente = arrayPaciente[indice];
    inputNombre.value = paciente[0];
    inputApellido.value = paciente[1];
    inputFechaNacimiento.value = paciente[2];
    if (paciente[3] === "Hombre") {
        inputRdMasculino.checked = true;
    } else {
        inputRdFemenino.checked = true;
    }
    // Seleccionar país
    for (let i = 0; i < cmbPais.options.length; i++) {
        if (cmbPais.options[i].text === paciente[4]) {
            cmbPais.selectedIndex = i;
            break;
        }
    }
    inputDireccion.value = paciente[5];
    indiceEdicion = indice;
    inputNombre.focus();
    mensaje.innerHTML = "Editando paciente...";
    toast.show();
}

// ========== ELIMINAR PACIENTE (Ejercicio 1) ==========
function eliminarPaciente(indice) {
    if (confirm("¿Está seguro de eliminar este paciente?")) {
        arrayPaciente.splice(indice, 1);
        guardarEnLocalStorage();
        imprimirPacientes();
        mensaje.innerHTML = "Paciente eliminado correctamente";
        toast.show();
    }
}

// ========== AGREGAR PAÍS ==========
let contadorGlobalOption = cmbPais.children.length;
const addPais = () => {
    let paisNew = inputNombrePais.value;

    if (paisNew !== "") {
        // Creando nuevo option con la API DOM
        let option = document.createElement("option");
        option.textContent = paisNew;
        option.value = contadorGlobalOption + 1;
        contadorGlobalOption++;

        // Agregando el nuevo option en el select
        cmbPais.appendChild(option);

        mensaje.innerHTML = "País agregado correctamente";
        toast.show();
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

// ========== EVENTOS ==========
buttonLimpiarPaciente.onclick = () => {
    limpiarForm();
};

buttonAgregarPaciente.onclick = () => {
    addPaciente();
};

buttonMostrarPaciente.onclick = () => {
    imprimirPacientes();
};

buttonAgregarPais.onclick = () => {
    addPais();
};

// Se agrega el focus en el campo nombre país del modal
idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = "";
    inputNombrePais.focus();
});

// ========== INICIALIZACIÓN ==========
// Cargar datos al iniciar (Ejercicio 2)
cargarDesdeLocalStorage();
limpiarForm();
imprimirPacientes();