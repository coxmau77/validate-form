// Importamos las funciones necesarias que se encuentran en otros documentos js
import esUnCuil from "./validar-cuil.js";
import esMayorDeEdad from "./vaidar-edad.js";
import { tipoError, mensajes } from "./customError.js";

// Seleccionamos todos los campos que son obligatorios
const camposForm = document.querySelectorAll("[required]");

// Recorremos el nodeList de los campos obligatorios
camposForm.forEach(campo => {
    // El evento 'blur' se activa cuando quitemos el foco del campo, entonces cuando eso suceda se va a ejecutar la funcion que verifica el campo, inputValidate(param)
    campo.addEventListener("blur", () => verificarCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault()); // evita que muestre el popup predeterminado del navegador
});



// Funcion para verificar cada campo que se recibe por parametro
function verificarCampo(campo) {

    let mensaje = "";
    campo.setCustomValidity("");

    // console.log(campo, campo.name); // devuelve el atributo name del campo
    if (campo.name == "cuil" && campo.value.length >= 11) {
        esUnCuil(campo)
    }

    // Verificamos el campo para definir la edad
    if (campo.name === "fecha_nacimiento" && campo.value != "") {
        esMayorDeEdad(campo);
    } else {
        esMayorDeEdad(campo);
    }

    // console.log(campo.validity);
    tipoError.forEach(error => {

        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error];
            console.info(mensaje);
        }
    });

    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    const validarInputCheck = campo.checkValidity();
    if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
    } else {
        mensajeError.textContent = ""
    }

}