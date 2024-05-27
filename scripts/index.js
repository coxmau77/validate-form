// import { validateInputName } from "./validate.name.js";+
import validateName from "./validate.name.js";
import validateCuil from "./validate.cuil.js";
import validateAge from "./validate.age.js";
import { errorType, errorMessage } from "./custom.error.js";
import setMessage from "./add.custom.message.js";

const inputForm = document.querySelectorAll('[required]');

inputForm.forEach(input => {

    input.addEventListener('blur', () => {
        inputCheck(input);
    });

    input.addEventListener('invalid', eventForm => {
        eventForm.preventDefault();
    });
});

function inputCheck(input) {
    const txtRegex = /^[A-Za-z\s]+$/;
    const inputNameList = Object.keys(errorMessage);
    let messageError = "";
    input.setCustomValidity("");

    // --

    // if (inputNameList.includes(input.name) && txtRegex.test(input.value)) {
    //     // console.info(input.name);
    //     // console.info(validateInputName());
    //     validateInputName();
    //     // console.info("Se valido input ok", inputNameList.includes(input.name) && txtRegex.test(input.value))
    // } else {
    //     console.error("no se valida regex", inputNameList.includes(input.name) && txtRegex.test(input.value))
    // }

    // validar nombre
    if (txtRegex.test(input.value)) {
        console.info("input.value:", input.value, "txtRegex.test(input.value):", txtRegex.test(input.value), "inputNameList.includes(input.name)", inputNameList.includes(input.name));
        console.log(input.validity)
        // input.validity = {
        //     regexerror: true
        // };
    }


    // Validar cuil
    if (input.name === 'cuil' && input.value.length >= 11) {
        validateCuil(input);
    }

    // Validar edad
    if (input.name === "fecha_nacimiento" && inputNameList.includes(input.name) && input.value != '') {
        validateAge(input);
        // console.info(validateAge(input))
    }

    // Errores y tipo de errores *************
    // errorType, errorMessage, messageError
    let errorValidity = input.validity;

    errorType.forEach(errorValue => {

        if (errorValidity[errorValue]) {
            messageError = errorMessage[input.name][errorValue];
        }
    });

    setMessage(input, messageError);

    console.log("---------- Fin de la ejecucion inputCheck(input); ----------")
}