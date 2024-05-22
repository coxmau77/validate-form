// Importamos las funciones necesarias que se encuentran en otros documentos js
import esUnCuil from "./validar-cuil.js";
import esMayorDeEdad from "./vaidar-edad.js";

// Seleccionamos todos los campos que son obligatorios
const camposForm = document.querySelectorAll("[required]");

// Recorremos el nodeList de los campos obligatorios
camposForm.forEach(campo => {
    // El evento 'blur' se activa cuando quitemos el foco del campo, entonces cuando eso suceda se va a ejecutar la funcion que verifica el campo, inputValidate(param)
    campo.addEventListener("blur", () => verificarCampo(campo));
});

// Funcion para verificar cada campo que se recibe por parametro
function verificarCampo(campo) {
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

}