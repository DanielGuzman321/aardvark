function toggleAudio() {
    var audio = document.getElementById('audio-player');
    var icon = document.getElementById('audio-control-icon');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function copyText(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);

    // Muestra la imagen y la animación de sacudida
    var shakingImage = document.getElementById("shakingImage");
    shakingImage.style.display = "block";

    // Oculta la imagen después de 2 segundos (puedes ajustar el tiempo según tus preferencias)
    setTimeout(function () {
        shakingImage.style.display = "none";
    }, 2000);
}

// Contenido de scripts.js

function showBurnedImage() {
    var burnedImage = document.getElementById('burnedImage');

    // Muestra la imagen
    burnedImage.style.display = 'block';

    // Agita la imagen
    burnedImage.classList.add('shake');

    // Oculta la imagen después de un tiempo (puedes ajustar el tiempo según tus preferencias)
    setTimeout(function () {
        burnedImage.style.display = 'none';
        burnedImage.classList.remove('shake');
    }, 2000); // 2000 milisegundos = 2 segundos
}

