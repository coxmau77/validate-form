// Personalizacion de errores
/*{
    badInput: "Validitystate message - badInput",
    customError: "Validitystate message - customError",
    patternMismatch: "Validitystate message - patternMismatch",
    rangeOverflow: "Validitystate message - rangeOverflow",
    rangeUnderflow: "Validitystate message - rangeUnderflow",
    stepMismatch: "Validitystate message - stepMismatch",
    tooLong: "Validitystate message - tooLong",
    tooShort: "Validitystate message - tooShort",
    typeMismatch: "Validitystate message - typeMismatch",
    valid: "Validitystate message - valid",
    valueMissing: "Validitystate message - valueMissing"
}*/
export const errorType = ["regexerror", "badInput", "customError", "patternMismatch", "rangeOverflow", "rangeUnderflow", "stepMismatch", "tooLong", "tooShort", "typeMismatch", "valid", "valueMissing"];
export const errorMessage = {
    nombre: {
        badInput: "mensaje badInput error",
        customError: "mensaje personalizado customError",
        patternMismatch: "Por favor, ingrese un nombre válido.",
        rangeOverflow: "mensaje personalizado segun el error - rangeOverflow",
        rangeUnderflow: "mensaje personalizado segun el error - rangeUnderflow",
        stepMismatch: "mensaje personalizado segun el error",
        tooLong: "mensaje personalizado segun el error - stepMismatch",
        tooShort: `Por favor, el nombre debe ser mayor a 3 caracteres.`,
        typeMismatch: "Por favor, introduce un nombre válido.",
        valid: "mensaje personalizado segun el error - valid",
        valueMissing: "El campo nombre no puede estar vacío.",
        regexerror: "no regex"
    },
    email: {
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "Por favor, ingrese un email válido.",
        tooShort: "Por favor, ingrese un e-mail válido.",
    },
    identificacion: {
        valueMissing: "El campo identificación no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un número de identificación válido.",
        tooShort: "El campo no tiene caracteres suficientes.",
    },
    cuil: {
        valueMissing: "El campo cuil/cuit no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un cuil/cuit válido.",
        customError: "El cuil/cuit ingresado no existe.",
        tooShort: "El campo no tiene caracteres suficientes.",
        valid: "La info del input CUIL es correcta - valid",
    },
    fecha_nacimiento: {
        valueMissing: "El campo fecha nacimiento no puede estar vacío.",
        customError: "Debes ser mayor de 18 años para registrarte.",
        valid: "La info del input fecha nacimiento es correcta - valid",
    },
    terminos: {
        valueMissing: "Debes aceptar los términos antes de continuar.",
    },
};