const botonAbrirCamara = document.querySelector('[data-video-boton]');
const video = document.querySelector('[data-video]');
const campoCamara = document.querySelector('[data-camera]');

botonAbrirCamara.addEventListener('click', async () => {
    console.log("Click para abrir la camara")
    const startVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    botonAbrirCamara.style.display = 'node';
    campoCamara.style.display = 'block';
    video.srcObject = startVideo;
});

document.getElementById('startButton').addEventListener('click', async () => {
    try {
        const constraints = { video: true, audio: false };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.getElementById('videoElement');
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error al acceder a la cámara: ', error);
        alert('No se pudo acceder a la cámara. Asegúrate de haber otorgado los permisos necesarios.');
    }
});