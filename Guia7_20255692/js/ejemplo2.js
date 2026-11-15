// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
// aquí se está utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];
const buttonRecorrer = document.getElementById("btnRecorrer");

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

// Recorrer el formulario
const recorrerFormulario = function () {
  let totText = 0;
  let totRadio = 0;
  let totCheck = 0;
  let totDate = 0;
  let totSelect = 0;
  let totFile = 0;
  let totPass = 0;
  let totEmail = 0;

  // Recorriendo elementos del formulario
  let elementos = formulario.elements;
  let totalElementos = elementos.length;

  for (let index = 0; index < totalElementos; index++) {
    // Accediendo a cada hijo del formulario
    let elemento = elementos[index];

    // Verificando el tipo de control en el formulario
    let tipoElemento = elemento.type;

    // Verificando el tipo de nodo
    let tipoNode = elemento.nodeName;

    // Contabilizando el total de INPUT TYPE = TEXT
    if (tipoElemento === "text" && tipoNode === "INPUT") {
      console.log(elemento);
      totText++;
    }
    // Contabilizando el total de INPUT TYPE = PASSWORD
    else if (tipoElemento === "password" && tipoNode === "INPUT") {
      console.log(elemento);
      totPass++;
    }
    // Contabilizando el total de INPUT TYPE = EMAIL
    else if (tipoElemento === "email" && tipoNode === "INPUT") {
      console.log(elemento);
      totEmail++;
    }
    // Contabilizando el total de INPUT TYPE = RADIO
    else if (tipoElemento === "radio" && tipoNode === "INPUT") {
      console.log(elemento);
      totRadio++;
    }
    // Contabilizando el total de INPUT TYPE = CHECKBOX
    else if (tipoElemento === "checkbox" && tipoNode === "INPUT") {
      console.log(elemento);
      totCheck++;
    }
    // Contabilizando el total de INPUT TYPE = FILE
    else if (tipoElemento === "file" && tipoNode === "INPUT") {
      console.log(elemento);
      totFile++;
    }
    // Contabilizando el total de INPUT TYPE = DATE
    else if (tipoElemento === "date" && tipoNode === "INPUT") {
      console.log(elemento);
      totDate++;
    }
    // Contabilizando el total de SELECT
    else if (tipoNode === "SELECT") {
      console.log(elemento);
      totSelect++;
    }
  }

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
  bodyModal.replaceChildren(contenedor);

  // Función que permite mostrar el modal de Bootstrap
  modal.show();
};

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

  const nombres = formulario.elements["nombres"].value.trim();
  if (nombres === "") {
    errores.push("Los nombres no pueden estar vacíos.");
  }

  const fechaNacimiento = formulario.elements["fechaNacimiento"].value;
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

  const correo = formulario.elements["correo"].value.trim();
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correo === "") {
    errores.push("El correo electrónico es obligatorio.");
  } else if (!regexCorreo.test(correo)) {
    errores.push("El correo electrónico no tiene un formato válido.");
  }

  const password = formulario.elements["password"].value;
  const repetirPassword = formulario.elements["repetirPassword"].value;

  if (password === "") {
    errores.push("La contraseña es obligatoria.");
  }

  if (password !== repetirPassword) {
    errores.push("Los campos contraseña y repetir contraseña deben ser iguales.");
  }

  const interesesSeleccionados = formulario.querySelectorAll('input[name="intereses"]:checked');
  if (interesesSeleccionados.length === 0) {
    errores.push("Debe seleccionar al menos una opción para “algunos intereses”.");
  }

  const carreraSeleccionada = formulario.querySelector('input[name="carrera"]:checked');
  if (!carreraSeleccionada) {
    errores.push("Debe seleccionar una carrera.");
  }

  const pais = formulario.elements["pais"].value;
  if (pais === "") {
    errores.push("Debe seleccionar un país de origen.");
  }

  if (errores.length > 0) {
    mostrarErrores(errores);
    return;
  }

  const intereses = Array.from(interesesSeleccionados)
    .map((interes) => interes.value)
    .join(", ");

  const avatarInput = formulario.elements["avatar"];
  const avatar = avatarInput.files.length > 0 ? avatarInput.files[0].name : "Sin archivo seleccionado";

  mostrarDatosValidados({
    nombres,
    fechaNacimiento,
    correo,
    intereses,
    carrera: carreraSeleccionada.value,
    pais,
    avatar,
  });
};

// Agregando eventos a los botones
button.onclick = () => {
  validarFormulario();
};

buttonRecorrer.onclick = () => {
  recorrerFormulario();
};