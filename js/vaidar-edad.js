export default function esMayorDeEdad(campo) {

    const fechaNacimiento = new Date(campo.value);
    // console.log(fechaNacimiento);
    // console.log();
    // console.log(fechaNacimiento.getDay());
    // console.log(fechaNacimiento.getMonth());
    // console.log(fechaNacimiento.getFullYear());
    // console.log(fechaNacimiento.getHours());
    // console.log(fechaNacimiento.getMinutes());
    // console.log(fechaNacimiento.getSeconds());
    // console.log(fechaNacimiento.getMilliseconds());
    // console.log(fechaNacimiento.getTime());
    // console.log(fechaNacimiento.getTimezoneOffset());
    // console.log(fechaNacimiento.getUTCFullYear());
    // let date = new Date(Date.UTC(
    //     fechaNacimiento.getDate()
    // ));
    // console.log(date.toUTCString());
    // validarEdad(fechaNacimiento);
    // console.log(validarEdad(fechaNacimiento));

    if (!validarEdad(fechaNacimiento)) {
        campo.setCustomValidity("Necesitas ser mayor de edad para registrarte");
    }
}

// vamos a validad la edad con la info que tenemos de la fecha de nacimiento
function validarEdad(fecha) {
    const fechaActual = new Date();
    const fechaMas18 = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

    // console.info(fecha.getUTCFullYear());
    // console.info(fecha.getUTCFullYear() + 18);
    // console.info(fecha.getUTCMonth() + 1);
    // console.info(fecha.getUTCDate());
    // console.info(fechaMas18);
    // console.info(fechaActual);
    // console.log("today>>", fechaActual)
    // console.log(new Date(fecha.getUTCFullYear()))
    // console.log(fechaMas18)

    return fechaActual >= fechaMas18;
}