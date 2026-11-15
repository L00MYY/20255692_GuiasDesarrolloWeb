// Referencias al formulario y al botón de envío
const formulario = document.getElementById("idNombre").form;
const button = formulario.elements["btnRegistro"];

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

const mostrarErrores = function (errores) {
  const contenedor = document.createElement("div");
  contenedor.className = "alert alert-danger mb-0";

  const titulo = document.createElement("h5");
  titulo.textContent = "Se encontraron los siguientes errores:";
  contenedor.appendChild(titulo);

  const lista = document.createElement("ul");
  lista.className = "mb-0";

  errores.forEach((error) => {
    const item = document.createElement("li");
    item.textContent = error;
    lista.appendChild(item);
  });

  contenedor.appendChild(lista);
  bodyModal.replaceChildren(contenedor);
  modal.show();
};

const mostrarDatosValidados = function (datos) {
  const contenedor = document.createElement("div");

  const titulo = document.createElement("h5");
  titulo.className = "mb-3";
  titulo.textContent = "Datos validados del formulario";
  contenedor.appendChild(titulo);

  const tabla = document.createElement("table");
  tabla.className = "table table-bordered table-striped align-middle";

  const thead = document.createElement("thead");
  const filaHead = document.createElement("tr");

  const thCampo = document.createElement("th");
  thCampo.textContent = "Campo";

  const thValor = document.createElement("th");
  thValor.textContent = "Valor";

  filaHead.appendChild(thCampo);
  filaHead.appendChild(thValor);
  thead.appendChild(filaHead);

  const tbody = document.createElement("tbody");

  const agregarFila = (campo, valor) => {
    const fila = document.createElement("tr");

    const tdCampo = document.createElement("td");
    tdCampo.textContent = campo;

    const tdValor = document.createElement("td");
    tdValor.textContent = valor;

    fila.appendChild(tdCampo);
    fila.appendChild(tdValor);
    tbody.appendChild(fila);
  };

  agregarFila("Nombres", datos.nombres);
  agregarFila("Fecha de nacimiento", datos.fechaNacimiento);
  agregarFila("Correo electrónico", datos.correo);
  agregarFila("Contraseña", "********");
  agregarFila("Intereses", datos.intereses);
  agregarFila("Carrera", datos.carrera);
  agregarFila("País de origen", datos.pais);
  agregarFila("Avatar", datos.avatar);

  tabla.appendChild(thead);
  tabla.appendChild(tbody);
  contenedor.appendChild(tabla);

  bodyModal.replaceChildren(contenedor);
  modal.show();
};

const validarFormulario = function () {
  const errores = [];

  const nombres = document.getElementById("idNombre").value.trim();
  if (nombres === "") {
    errores.push("Los nombres no pueden estar vacíos.");
  }

  const fechaNacimiento = document.getElementById("idFechaNac").value;
  if (fechaNacimiento === "") {
    errores.push("La fecha de nacimiento es obligatoria.");
  } else {
    const fechaIngresada = new Date(fechaNacimiento + "T00:00:00");
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);

    if (fechaIngresada > fechaActual) {
      errores.push("La fecha de nacimiento no puede superar la fecha actual.");
    }
  }

  const correo = document.getElementById("idCorreo").value.trim();
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correo === "") {
    errores.push("El correo electrónico es obligatorio.");
  } else if (!regexCorreo.test(correo)) {
    errores.push("El correo electrónico no tiene un formato válido.");
  }

  const password = document.getElementById("idPassword").value;
  const repetirPassword = document.getElementById("idPasswordRepetir").value;

  if (password === "") {
    errores.push("La contraseña es obligatoria.");
  }

  if (password !== repetirPassword) {
    errores.push("Los campos contraseña y repetir contraseña deben ser iguales.");
  }

  const interesesSeleccionados = [
    "idCkProgramacion",
    "idCkBD",
    "idCkRedes",
    "idCkSeguridad",
  ]
    .map((id) => document.getElementById(id))
    .filter((interes) => interes.checked);
  if (interesesSeleccionados.length === 0) {
    errores.push("Debe seleccionar al menos una opción para “algunos intereses”.");
  }

  const carreraSeleccionada = formulario.querySelector(
    'input[name="idRdCarrera"]:checked'
  );
  if (!carreraSeleccionada) {
    errores.push("Debe seleccionar una carrera.");
  }

  const paisSelect = document.getElementById("idCmPais");
  const pais = paisSelect.options[paisSelect.selectedIndex].textContent.trim();
  if (paisSelect.selectedIndex === 0) {
    errores.push("Debe seleccionar un país de origen.");
  }

  if (errores.length > 0) {
    mostrarErrores(errores);
    return;
  }

  const intereses = Array.from(interesesSeleccionados)
    .map((interes) => interes.labels[0].textContent.trim())
    .join(", ");

  const avatarInput = document.getElementById("idArchivo");
  const avatar = avatarInput.files.length > 0 ? avatarInput.files[0].name : "Sin archivo seleccionado";

  mostrarDatosValidados({
    nombres,
    fechaNacimiento,
    correo,
    intereses,
    carrera: carreraSeleccionada.labels[0].textContent.trim(),
    pais,
    avatar,
  });
};

// Agregando eventos a los botones
button.onclick = () => {
  validarFormulario();
};
