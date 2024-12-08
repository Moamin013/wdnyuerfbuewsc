document.getElementById('upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoElement = document.createElement('video');
    videoElement.src = URL.createObjectURL(file);
    document.body.appendChild(videoElement);
    videoElement.controls = true;
    videoElement.play();
});
