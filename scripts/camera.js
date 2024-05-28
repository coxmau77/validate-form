const botonAbrirCamara = document.querySelector('[data-video-boton]');
const video = document.querySelector('[data-video]');

const campoCamara = document.querySelector('[data-camera]');

const tomarFoto = document.querySelector('[data-tomar-foto]');

botonAbrirCamara.addEventListener('click', async () => {
    try {
        console.log("Click para abrir la camara");
        // Verifica si getUserMedia está disponible
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error("getUserMedia no está soportado en este navegador.");
        }

        // Configuración para acceder al video
        const constraints = { video: true, audio: false };

        // Solicita acceso a la cámara
        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        botonAbrirCamara.style.display = 'node';
        campoCamara.style.display = 'block';

        // Asigna el stream al elemento de video
        video.srcObject = stream;

    } catch (error) {

        // Manejo de errores específicos de getUserMedia
        if (error.name === 'NotAllowedError') {
            console.error('Permisos para acceder a la cámara denegados por el usuario.');
        } else if (error.name === 'NotFoundError') {
            console.error('No se encontró una cámara en el dispositivo.');
        } else if (error.name === 'NotReadableError') {
            console.error('No se pudo acceder a la cámara. Puede estar siendo utilizada por otra aplicación.');
        } else {
            console.error('Error al acceder a la cámara: ', error);
        }
        alert('No se pudo acceder a la cámara. Asegúrate de haber otorgado los permisos necesarios en el navegador.');
    }
});