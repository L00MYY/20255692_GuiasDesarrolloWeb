// ==========================================================
// REFERENCIAS
// ==========================================================
const formulario = document.forms["frmRegistro"];
const btnRegistro = formulario.elements["btnRegistro"];
const btnRecorrer = document.getElementById("idBtnRecorrer"); 

// MODAL BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});
const bodyModal = document.getElementById("idBodyModal");

// Helper para mostrar contenido en el modal (sin innerHTML)
const mostrarEnModal = function (contenido) {
  bodyModal.replaceChildren(contenido);
  modal.show();
};

// ==========================================================
// EJEMPLO 3: RECORRER EL FORMULARIO Y MOSTRAR EL RESUMEN
// ==========================================================
const recorrerFormulario = function () {
  let totText = 0;
  let totRadio = 0;
  let totCheck = 0;
  let totDate = 0;
  let totSelect = 0;
  let totFile = 0;
  let totPass = 0;
  let totEmail = 0;

  const elementos = formulario.elements;
  const totalElementos = elementos.length;

  for (let index = 0; index < totalElementos; index++) {
    const elemento = elementos[index];
    const tipoElemento = elemento.type;
    const tipoNode = elemento.nodeName;

    if (tipoElemento === "text" && tipoNode === "INPUT") {
      console.log(elemento); totText++;
    } else if (tipoElemento === "password" && tipoNode === "INPUT") {
      console.log(elemento); totPass++;
    } else if (tipoElemento === "email" && tipoNode === "INPUT") {
      console.log(elemento); totEmail++;
    } else if (tipoElemento === "radio" && tipoNode === "INPUT") {
      console.log(elemento); totRadio++;
    } else if (tipoElemento === "checkbox" && tipoNode === "INPUT") {
      console.log(elemento); totCheck++;
    } else if (tipoElemento === "file" && tipoNode === "INPUT") {
      console.log(elemento); totFile++;
    } else if (tipoElemento === "date" && tipoNode === "INPUT") {
      console.log(elemento); totDate++;
    } else if (tipoNode === "SELECT") {
      console.log(elemento); totSelect++;
    }
  }

  // Construyendo el resultado SOLO con DOM
  const contenedor = document.createElement("div");

  const titulo = document.createElement("h5");
  titulo.textContent = "Resumen de controles encontrados";
  contenedor.appendChild(titulo);

  const lista = document.createElement("ul");
  lista.className = "list-group";

  const agregarItem = (etiqueta, valor) => {
    const item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between align-items-center";

    const texto = document.createElement("span");
    texto.textContent = etiqueta;

    const numero = document.createElement("strong");
    numero.textContent = valor;

    item.appendChild(texto);
    item.appendChild(numero);
    lista.appendChild(item);
  };

  agregarItem('Total de input[type="text"]', totText);
  agregarItem('Total de input[type="password"]', totPass);
  agregarItem('Total de input[type="radio"]', totRadio);
  agregarItem('Total de input[type="checkbox"]', totCheck);
  agregarItem('Total de input[type="date"]', totDate);
  agregarItem('Total de input[type="email"]', totEmail);
  agregarItem('Total de input[type="file"]', totFile);
  agregarItem("Total de select", totSelect);

  contenedor.appendChild(lista);
  mostrarEnModal(contenedor);
};

// ==========================================================
// EJERCICIO COMPLEMENTARIO 1: VALIDAR FORMULARIO
// ==========================================================
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
  mostrarEnModal(contenedor);
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
  agregarFila("Apellidos", datos.apellidos);
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

  mostrarEnModal(contenedor);
};

const validarFormulario = function () {
  const errores = [];

  // a) Campos no vacíos
  const nombres = document.getElementById("idNombre").value.trim();
  const apellidos = document.getElementById("idApellidos").value.trim();
  if (nombres === "") errores.push("Los nombres no pueden estar vacíos.");
  if (apellidos === "") errores.push("Los apellidos no pueden estar vacíos.");

  // b) Fecha no superior a la actual
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

  // c) Correo con expresión regular
  const correo = document.getElementById("idCorreo").value.trim();
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo === "") {
    errores.push("El correo electrónico es obligatorio.");
  } else if (!regexCorreo.test(correo)) {
    errores.push("El correo electrónico no tiene un formato válido.");
  }

  // d) Contraseñas iguales
  const password = document.getElementById("idPassword").value;
  const repetirPassword = document.getElementById("idPasswordRepetir").value;
  if (password === "") errores.push("La contraseña es obligatoria.");
  if (password !== repetirPassword) {
    errores.push("Los campos contraseña y repetir contraseña deben ser iguales.");
  }

  // e) Al menos un interés seleccionado
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

  // f) Carrera seleccionada
  const carreraSeleccionada = formulario.querySelector(
    'input[name="idRdCarrera"]:checked'
  );
  if (!carreraSeleccionada) {
    errores.push("Debe seleccionar una carrera.");
  }

  // g) País seleccionado
  const paisSelect = document.getElementById("idCmPais");
  if (paisSelect.selectedIndex === 0) {
    errores.push("Debe seleccionar un país de origen.");
  }
  const pais = paisSelect.options[paisSelect.selectedIndex].textContent.trim();

  if (errores.length > 0) {
    mostrarErrores(errores);
    return;
  }

  const intereses = Array.from(interesesSeleccionados)
    .map((interes) => interes.labels[0].textContent.trim())
    .join(", ");

  const avatarInput = document.getElementById("idArchivo");
  const avatar =
    avatarInput.files.length > 0
      ? avatarInput.files[0].name
      : "Sin archivo seleccionado";

  mostrarDatosValidados({
    nombres,
    apellidos,
    fechaNacimiento,
    correo,
    intereses,
    carrera: carreraSeleccionada.labels[0].textContent.trim(),
    pais,
    avatar,
  });
};


btnRegistro.onclick = () => {
  validarFormulario();
};

if (btnRecorrer) {
  btnRecorrer.onclick = () => {
    recorrerFormulario();
  };
}