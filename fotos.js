const audiosOuvidos = new Set();

function toggleAudio(audioId) {
    const audio = document.getElementById(audioId);

    if (!audio.paused) {
        audio.pause();
        return;
    }

    // Pausa e reinicia todos os outros áudios
    const audios = document.querySelectorAll('audio');
    audios.forEach(a => {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0;
        }
    });

    // Toca o áudio clicado a partir de 45s
    audio.currentTime = 45;
    audio.play();

    // Marca o áudio como ouvido
    audiosOuvidos.add(audioId);

    // Se ouviu todos os 5, troca o vídeo de fundo
    if (audiosOuvidos.size === 5) {
        const videoBg = document.querySelector('.video-bg');
        if (videoBg) {
            videoBg.src = "vd.mp4";
            // Se estiver usando <source>, faça assim:
            // videoBg.querySelector('source').src = "vd.mp4";
            // videoBg.load();
        }
    }
}