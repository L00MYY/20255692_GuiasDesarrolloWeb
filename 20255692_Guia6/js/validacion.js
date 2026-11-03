// Expresiones regulares para cada campo
const regexCarnet = /^[A-Z]{2}[0-9]{3}$/;
const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
const regexDui = /^\d{8}-\d{1}$/;
const regexNit = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexEdad = /^\d{1,3}$/;

const form = document.getElementById("idFormValidacion");
const resultadoDiv = document.getElementById("idResultadoValidacion");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valido = true;

    // Validar cada campo
    const campos = [
        { input: document.getElementById("valCarnet"), regex: regexCarnet },
        { input: document.getElementById("valNombre"), regex: regexNombre },
        { input: document.getElementById("valDui"), regex: regexDui },
        { input: document.getElementById("valNit"), regex: regexNit },
        { input: document.getElementById("valFecha"), regex: regexFecha },
        { input: document.getElementById("valCorreo"), regex: regexCorreo },
        { input: document.getElementById("valEdad"), regex: regexEdad }
    ];

    campos.forEach(({ input, regex }) => {
        if (!regex.test(input.value.trim())) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            valido = false;
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
    });

    if (valido) {
        resultadoDiv.innerHTML = `
            <div class="alert alert-success">
                <h5><i class="bi bi-check-circle-fill"></i> ¡Todos los datos son válidos!</h5>
                <p>La información del estudiante ha sido validada correctamente.</p>
            </div>`;
        form.reset();
        document.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
    } else {
        resultadoDiv.innerHTML = `
            <div class="alert alert-danger">
                <h5><i class="bi bi-exclamation-triangle-fill"></i> Errores de validación</h5>
                <p>Corrija los campos marcados en rojo e intente nuevamente.</p>
            </div>`;
    }
});

// Validación en tiempo real (opcional)
const validacionesEnTiempoReal = [
    { id: "valCarnet", regex: regexCarnet },
    { id: "valNombre", regex: regexNombre },
    { id: "valDui", regex: regexDui },
    { id: "valNit", regex: regexNit },
    { id: "valFecha", regex: regexFecha },
    { id: "valCorreo", regex: regexCorreo },
    { id: "valEdad", regex: regexEdad }
];

validacionesEnTiempoReal.forEach(({ id, regex }) => {
    const input = document.getElementById(id);
    input.addEventListener("input", () => {
        if (regex.test(input.value.trim())) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        } else {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        }
    });
});