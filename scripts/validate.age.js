export default function validateAge(date) {

    console.log("Validando edad ...");
    const bornDate = new Date(date.value);
    console.log(isGreater(bornDate))
}

function isGreater(bornDate) {

    let minimumAge = 18;
    const today = new Date();
    const userGrater = new Date(bornDate.getUTCFullYear() + minimumAge, bornDate.getUTCMonth(), bornDate.getUTCDate());
    return today >= userGrater;
}