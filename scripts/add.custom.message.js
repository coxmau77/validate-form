export default function setMessage(input, messageError) {
    console.log("setiando el mensaje ....");
    const setErrorMessage = input.parentNode.querySelector('small');
    const validateInputCheck = input.checkValidity();

    // console.log("xx", validateInputCheck, setMessage);

    if (!validateInputCheck) {
        // console.error("**", false);
        setErrorMessage.textContent = "";
        setErrorMessage.textContent = messageError;
    } else {
        // console.log("**", true);
        setErrorMessage.textContent = "";
    }
}