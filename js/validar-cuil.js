// Funcion que podremos exportar a otro documento js a esto lo llamamos modularizacion en js
export default function esUnCuil(campo) {
    // El metodo replace recibe 2 params 1)- serie de caracteres 2)- lo que se reemplaza, en nuestro ejemplo si el input contiene algun - o / se va a reewmplazar por un caracter vacio,esto se hace para obtener el formato necesario del cuil 22262235303 
    const cuil = campo.value.replace(/[-\/]/g, "");
    // tieneNumerosRepetidos(cuil);
    // console.log(cuil);
    // console.error(tieneNumerosRepetidos(cuil));
    // validarPrimerosDigitos(cuil);
    // validarPrimerosDigitos(cuil) ? console.log(validarPrimerosDigitos(cuil)) : console.error(validarPrimerosDigitos(cuil));

    // validarDigitoVerificador(cuil);
    // console.log(validarDigitoVerificador(cuil));

    if (tieneNumerosRepetidos(cuil)) {
        console.warn(`hay valores repetidos ${cuil}`);
    } else {
        if (validarPrimerosDigitos(cuil) && validarDigitoVerificador(cuil)) {
            console.log(`cuil valido ${cuil}`);
        } else {
            console.error(`Cuil no existe ${cuil}`);
        }
    }
}

// Evitar que se ingresen numeros repetidos por error, esta funcion nos va a devolver un valor boolean => true / false
function tieneNumerosRepetidos(cuil) {
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];
    return numerosRepetidos.includes(cuil)
}



// Vamos a validad los 2 primeros digitos del cuil
function validarPrimerosDigitos(cuil) {
    // El metodo substr recibe 2 params, esto eto extrae los 2 primeros caracteres de nuestro campo cuil
    let primerosDigitos = cuil.substr(0, 2);
    // console.log(primerosDigitos); // para comprobar que captura los digitos
    // Primeros digitos validos para un cuil-cuit en Argentina
    let digitosValidos = ['20', '23', '24', '27', '30', '33', '34'];

    return digitosValidos.includes(primerosDigitos); // devuelve true / false
}

// CUIL / CUIT en Argentina
// 24 - 2565485 - 7
// digitos validos - DNI - digito verificador(0 - 9)
function validarDigitoVerificador(cuil) {
    let acumulador = 0;
    const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

    for (let index = 0; index < 10; index++) {
        acumulador += parseInt(cuil[index], 10) * factores[index];
    }

    let validadorTeorico = 11 - (acumulador % 11);

    if (validadorTeorico == 11) {
        validadorTeorico = 0;
    } else if (validadorTeorico == 10) {
        validadorTeorico = 9;
    }

    const digitoVerificador = parseInt(cuil[10], 10);

    return digitoVerificador === validadorTeorico;
}