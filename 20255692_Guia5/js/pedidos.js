// Arreglo donde se almacenan los pedidos
const pedidos = [];

// Referencias al DOM
const formPedido = document.querySelector("#formPedido");
const inputProducto = document.querySelector("#producto");
const inputPrecio = document.querySelector("#precio");
const inputCantidad = document.querySelector("#cantidad");
const mensajeError = document.querySelector("#mensajeError");

const inputPrecioMaximo = document.querySelector("#precioMaximo");
const btnFiltrar = document.querySelector("#btnFiltrar");
const btnMostrarTodos = document.querySelector("#btnMostrarTodos");
const btnLimpiar = document.querySelector("#btnLimpiar");

const cuerpoTabla = document.querySelector("#cuerpoTabla");
const totalUnidadesEl = document.querySelector("#totalUnidades");
const totalMontoEl = document.querySelector("#totalMonto");


function validarPedido(producto, precio, cantidad) {
    if (!producto || producto.trim() === "") {
        return "El nombre del producto no puede estar vacío.";
    }
    if (isNaN(precio) || precio <= 0) {
        return "El precio debe ser un número mayor que cero.";
    }
    if (isNaN(cantidad) || !Number.isInteger(cantidad) || cantidad <= 0) {
        return "La cantidad debe ser un número entero positivo.";
    }
    return null;
}

// ---------------------------------------------------------
// Funciones de procesamiento de datos
// ---------------------------------------------------------
function agregarPedido(pedido) {
    pedidos.push(pedido);
}

function calcularSubtotal(pedido) {
    return pedido.precio * pedido.cantidad;
}

function calcularTotales(lista) {
    const totalUnidades = lista.reduce((acc, p) => acc + p.cantidad, 0);
    const totalMonto = lista.reduce((acc, p) => acc + calcularSubtotal(p), 0);
    return { totalUnidades, totalMonto };
}

function filtrarPorPrecioMaximo(lista, precioMaximo) {
    return lista.filter((p) => p.precio <= precioMaximo);
}


function renderizarTabla(lista) {
    cuerpoTabla.innerHTML = lista
        .map(
            (p) => `
            <tr>
                <td>${p.producto}</td>
                <td>$${p.precio.toFixed(2)}</td>
                <td>${p.cantidad}</td>
                <td>$${calcularSubtotal(p).toFixed(2)}</td>
            </tr>`
        )
        .join("");
}

function renderizarTotales(lista) {
    const { totalUnidades, totalMonto } = calcularTotales(lista);
    totalUnidadesEl.textContent = totalUnidades;
    totalMontoEl.textContent = totalMonto.toFixed(2);
}

function renderizarTodo(lista) {
    renderizarTabla(lista);
    renderizarTotales(lista);
}

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje || "";
}

// ---------------------------------------------------------
// Eventos
// ---------------------------------------------------------
formPedido.addEventListener("submit", (e) => {
    e.preventDefault();

    const producto = inputProducto.value;
    const precio = parseFloat(inputPrecio.value);
    const cantidad = parseInt(inputCantidad.value, 10);

    const error = validarPedido(producto, precio, cantidad);
    if (error) {
        mostrarError(error);
        return;
    }

    mostrarError("");
    agregarPedido({ producto: producto.trim(), precio, cantidad });
    renderizarTodo(pedidos);

    formPedido.reset();
    inputProducto.focus();
});

btnFiltrar.addEventListener("click", () => {
    const precioMaximo = parseFloat(inputPrecioMaximo.value);

    if (isNaN(precioMaximo)) {
        mostrarError("Ingrese un precio máximo válido para filtrar.");
        return;
    }

    mostrarError("");
    const filtrados = filtrarPorPrecioMaximo(pedidos, precioMaximo);
    renderizarTodo(filtrados);
});

btnMostrarTodos.addEventListener("click", () => {
    mostrarError("");
    renderizarTodo(pedidos);
});

btnLimpiar.addEventListener("click", () => {
    pedidos.length = 0;
    mostrarError("");
    renderizarTodo(pedidos);
    formPedido.reset();
    inputPrecioMaximo.value = "";
});