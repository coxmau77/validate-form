export default function validateCuil(input) {

    const cuil = input.value.replace(/[-\/]/g, '');

    console.warn(cuil, "|", hasRepeatedNumbers(cuil), "|", twoDigitValidate(cuil), "|", digitVerificator(cuil));

    if (hasRepeatedNumbers(cuil)) {
        console.error("valores repetidos");
    } else {
        if (twoDigitValidate(cuil) && digitVerificator(cuil)) {
            console.info("Cuil valido");
        } else {
            console.error(`El cuil: ${cuil} no existe.`);
        }
    }

}

function hasRepeatedNumbers(cuil) {
    const repeatedNumbers = [
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
    return repeatedNumbers.includes(cuil);
}

function twoDigitValidate(cuil) {
    let twoFirstDigit = cuil.substr(0, 2);
    let digitPattern = ['20', '23', '24', '27', '30', '33', '34'];
    return digitPattern.includes(twoFirstDigit);
}

function digitVerificator(cuil) {
    let count = 0;
    const factors = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

    for (let index = 0; index < factors.length; index++) {
        count += parseInt(cuil[index], 10) * factors[index];
    }

    let validatorTemp = 11 - (count % 11);
    if (validatorTemp == 11) {
        validatorTemp = 0;
    } else if (validatorTemp == 10) {
        validatorTemp = 9;
    }

    const verificator = parseInt(cuil[10], 10);
    return verificator === validatorTemp;
}