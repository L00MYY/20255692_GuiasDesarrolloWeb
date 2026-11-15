
/* ============================================================
   CONFIGURACIÓN DE RAPIDAPI

   API: MoviesDatabase

   Endpoints:
   1. Listado: /titles
   2. Búsqueda: /titles/search/title/{title}
   3. Detalle: /titles/{id}
   ============================================================ */
const API_CONFIG = {
    host: "moviesdatabase.p.rapidapi.com",
    key: window.RAPIDAPI_KEY,
    endpoints: {
        list: "/titles",
        search: "/titles/search/title",
        detail: "/titles"
    }
};
// Encabezados necesarios para autenticar las peticiones
const API_HEADERS = {
  "X-RapidAPI-Key": API_CONFIG.key,
  "X-RapidAPI-Host": API_CONFIG.host,
};

// Elementos HTML
const inputBusqueda = document.getElementById("idBusqueda");
const buttonBuscar = document.getElementById("idBuscar");
const buttonVolver = document.getElementById("idVolver");

const divCargando = document.getElementById("idCargando");
const divError = document.getElementById("idError");
const divListado = document.getElementById("idListado");

const divDetalle = document.getElementById("idDetalle");
const divDetalleContenido = document.getElementById("idDetalleContenido");


/* ============================================================
   FUNCIONES GENERALES
   ============================================================ */

// Mostrar u ocultar indicador de carga
const mostrarCargando = (estado) => {
  divCargando.hidden = !estado;
};

// Mostrar mensaje de error
const mostrarError = (mensaje) => {
  divError.textContent = mensaje;
  divError.classList.remove("d-none");
};

// Limpiar mensaje de error
const limpiarError = () => {
  divError.textContent = "";
  divError.classList.add("d-none");
};

// Realizar petición HTTP y convertir respuesta a JSON
const fetchJSON = async (url) => {
  const respuesta = await fetch(url, {
    method: "GET",
    headers: API_HEADERS,
  });

  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}`);
  }

  return await respuesta.json();
};


/* ============================================================
   CREACIÓN DE TARJETAS
   ============================================================ */

// Crear una tarjeta para cada película
const crearTarjetaPelicula = (pelicula) => {

  const columna = document.createElement("div");
  columna.className = "col-sm-6 col-md-4 col-lg-3";

  const tarjeta = document.createElement("div");
  tarjeta.className = "card h-100 shadow-sm";

  // Imagen de la película
  const imagen = document.createElement("img");
  imagen.className = "card-img-top";
  imagen.style.height = "300px";
  imagen.style.objectFit = "cover";

  imagen.src =
    pelicula.primaryImage?.url ||
    "https://placehold.co/300x450?text=Sin+imagen";

  imagen.alt = pelicula.titleText?.text || "Película";

  // Información de la tarjeta
  const cuerpo = document.createElement("div");
  cuerpo.className = "card-body d-flex flex-column";

  const titulo = document.createElement("h5");
  titulo.className = "card-title h6";
  titulo.textContent =
    pelicula.titleText?.text || "Sin título";

  const anio = document.createElement("p");
  anio.className = "text-muted small mb-2";
  anio.textContent =
    pelicula.releaseYear?.year || "Año desconocido";

  const generos = document.createElement("p");
  generos.className = "small";

  const listaGeneros = pelicula.genres?.genres || [];

  generos.textContent = listaGeneros.length > 0
    ? listaGeneros.map(genero => genero.text).join(", ")
    : "Género no disponible";

  // Botón para consultar el detalle
  const botonDetalle = document.createElement("button");
  botonDetalle.type = "button";
  botonDetalle.className = "btn btn-primary btn-sm mt-auto";
  botonDetalle.textContent = "Ver detalles";

  botonDetalle.addEventListener("click", () => {
    cargarDetallePelicula(pelicula.id);
  });

  // Agregar elementos a la tarjeta
  cuerpo.appendChild(titulo);
  cuerpo.appendChild(anio);
  cuerpo.appendChild(generos);
  cuerpo.appendChild(botonDetalle);

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(cuerpo);

  columna.appendChild(tarjeta);

  return columna;
};


/* ============================================================
   LISTADO DE PELÍCULAS
   ============================================================ */

// Obtener películas desde la API
const cargarListadoPeliculas = async () => {

  limpiarError();
  mostrarCargando(true);

  divListado.replaceChildren();
  divDetalle.hidden = true;

  try {

    const url =
      `https://${API_CONFIG.host}${API_CONFIG.endpoints.list}` +
      "?titleType=movie&limit=12&info=base_info&startYear=2000&endYear=2026";

    const data = await fetchJSON(url);

    const peliculas = data.results || [];

    if (peliculas.length === 0) {
      mostrarError("No se encontraron películas.");
      return;
    }

    peliculas.forEach((pelicula) => {
      divListado.appendChild(crearTarjetaPelicula(pelicula));
    });

  } catch (error) {

    mostrarError(
      `No se pudo cargar el catálogo: ${error.message}`
    );

  } finally {

    mostrarCargando(false);

  }
};


/* ============================================================
   BÚSQUEDA DE PELÍCULAS
   ============================================================ */

// Buscar películas por nombre
const buscarPeliculas = async () => {

  const texto = inputBusqueda.value.trim();

  if (texto === "") {
    mostrarError("Escribe el nombre de una película.");
    return;
  }

  limpiarError();
  mostrarCargando(true);

  divListado.replaceChildren();
  divDetalle.hidden = true;

  try {

    const url =
      `https://${API_CONFIG.host}${API_CONFIG.endpoints.search}/` +
      `${encodeURIComponent(texto)}?limit=12&info=base_info`;

    const data = await fetchJSON(url);

    const peliculas = data.results || [];

    if (peliculas.length === 0) {
      mostrarError("No se encontraron películas con ese nombre.");
      return;
    }

    peliculas.forEach((pelicula) => {
      divListado.appendChild(crearTarjetaPelicula(pelicula));
    });

  } catch (error) {

    mostrarError(
      `No se pudo realizar la búsqueda: ${error.message}`
    );

  } finally {

    mostrarCargando(false);

  }
};


/* ============================================================
   CREACIÓN DE FILAS PARA EL DETALLE
   ============================================================ */

// Crear una fila con etiqueta y valor
const crearFilaDetalle = (etiqueta, valor) => {

  const fila = document.createElement("div");
  fila.className = "row border-bottom py-2";

  const colEtiqueta = document.createElement("div");
  colEtiqueta.className = "col-sm-4 fw-bold";
  colEtiqueta.textContent = etiqueta;

  const colValor = document.createElement("div");
  colValor.className = "col-sm-8";
  colValor.textContent = valor ?? "No disponible";

  fila.appendChild(colEtiqueta);
  fila.appendChild(colValor);

  return fila;
};


/* ============================================================
   MOSTRAR DETALLE DE UNA PELÍCULA
   ============================================================ */

// Construir la sección de detalle
const renderizarDetalle = (pelicula) => {

  const contenedor = document.createElement("div");

  const titulo = document.createElement("h3");
  titulo.className = "h4 mb-3";
  titulo.textContent =
    pelicula.titleText?.text || "Sin título";

  const imagen = document.createElement("img");
  imagen.className = "img-fluid rounded mb-3";
  imagen.style.maxHeight = "350px";

  imagen.src =
    pelicula.primaryImage?.url ||
    "https://placehold.co/300x450?text=Sin+imagen";

  imagen.alt = pelicula.titleText?.text || "Película";

  const sinopsis = document.createElement("p");
  sinopsis.textContent =
    pelicula.plot?.plotText?.plainText ||
    "Sin sinopsis disponible.";

  // Obtener los géneros
  const listaGeneros = pelicula.genres?.genres || [];

  const generos = listaGeneros.length > 0
    ? listaGeneros.map(genero => genero.text).join(", ")
    : "No disponible";

  // Obtener calificación
  const calificacion =
    pelicula.ratingsSummary?.aggregateRating ?? "Sin calificación";

  // Obtener duración
  const duracion =
    pelicula.runtime?.displayableProperty?.value?.plainText ||
    "No disponible";

  // Obtener fecha de estreno
  const fecha = pelicula.releaseDate;

  let fechaEstreno = "No disponible";

  if (fecha && fecha.year) {
    fechaEstreno = [
      fecha.day,
      fecha.month,
      fecha.year
    ].filter(valor => valor !== null && valor !== undefined).join("/");
  }

  // Construir contenido
  contenedor.appendChild(titulo);
  contenedor.appendChild(imagen);
  contenedor.appendChild(sinopsis);

  contenedor.appendChild(
    crearFilaDetalle("Año", pelicula.releaseYear?.year ?? "No disponible")
  );

  contenedor.appendChild(
    crearFilaDetalle("Fecha de estreno", fechaEstreno)
  );

  contenedor.appendChild(
    crearFilaDetalle("Géneros", generos)
  );

  contenedor.appendChild(
    crearFilaDetalle("Calificación", calificacion)
  );

  contenedor.appendChild(
    crearFilaDetalle("Duración", duracion)
  );

  contenedor.appendChild(
    crearFilaDetalle("Tipo", pelicula.titleType?.text ?? "No disponible")
  );

  contenedor.appendChild(
    crearFilaDetalle("ID IMDb", pelicula.id)
  );

  divDetalleContenido.replaceChildren(contenedor);

  divDetalle.hidden = false;

  divDetalle.scrollIntoView({
    behavior: "smooth"
  });
};


/* ============================================================
   CONSULTAR EL DETALLE EN LA API
   ============================================================ */

// Obtener información de una película específica
const cargarDetallePelicula = async (id) => {

  limpiarError();
  mostrarCargando(true);

  try {

    const url =
      `https://${API_CONFIG.host}${API_CONFIG.endpoints.detail}/${id}?info=base_info`;

    const data = await fetchJSON(url);

    const pelicula = data.results;

    if (!pelicula) {
      throw new Error("La API no devolvió el detalle de la película.");
    }

    renderizarDetalle(pelicula);

  } catch (error) {

    mostrarError(
      `No se pudo cargar el detalle: ${error.message}`
    );

  } finally {

    mostrarCargando(false);

  }
};


/* ============================================================
   EVENTOS
   ============================================================ */

// Buscar al pulsar el botón
buttonBuscar.addEventListener("click", buscarPeliculas);

// Buscar al presionar Enter
inputBusqueda.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    buscarPeliculas();
  }
});

// Volver al catálogo inicial
buttonVolver.addEventListener("click", () => {
  inputBusqueda.value = "";
  cargarListadoPeliculas();
});

// Cargar catálogo al entrar a la página
cargarListadoPeliculas();
