const imgProfile = document.querySelector('[data-profile-img]');
const dataUserList = document.querySelector('[data-user]');

document.addEventListener('DOMContentLoaded', function () {
    // Código a ejecutar cuando el DOM esté completamente cargado
    console.log('El DOM está completamente cargado.');
    // Llama a tu función aquí
    getDataUser();
});

function getDataUser() {
    // const recibirDatos = localStorage.getItem('registro');
    console.log('Ejecutando mi función después de la carga completa del DOM.');
    // Tu código aquí
    const localData = localStorage.getItem('registro');
    const parseData = JSON.parse(localData);
    // console.log(parseData)
    // console.log(imgProfile)
    imgProfile.setAttribute('src', parseData.img_url);

    for (const key in parseData) {
        if (Object.hasOwnProperty.call(parseData, key) && key != 'img_url') {
            const element = parseData[key];
            // console.log(key, element)
            dataUserList.insertAdjacentHTML('beforeend', `<li>${key}: ${element}</li>`);
        }

    }

}