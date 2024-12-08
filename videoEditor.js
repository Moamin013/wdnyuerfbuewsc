const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('video'), (req, res) => {
    const videoPath = req.file.path;
    // Process video with FFmpeg here
    res.send('Video uploaded and processed');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
