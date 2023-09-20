// /*
// DO THIS AFTER SAVING THE MODEL FROM PYTHON CODE
// Here we will load the model that we saved, and put the path for the model.
// */

// // Load the TensorFlow.js library
// // import * as tf from '@tensorflow/tfjs';

// // Load the model
// let model;
// alpha = ["0","1","2", "3", "4", "5", "6", "7", "8", "9",
//          "A","B","C","D","E","F","G","H","I","J",
//          "K","L","M","N","O","P","Q","R","S","T",
//           "V","W","X","Y","Z"];
// async function loadModel() {
//     model = await tf.loadLayersModel('./content/model.json');
// }
// loadModel();

// // Capture video from the webcam
// const video = document.getElementById('videoElement');
// navigator.mediaDevices.getUserMedia({ video: true })
//     .then(stream => {
//         video.srcObject = stream;
//     })
//     .catch(err => {
//         console.error("Error accessing the camera", err);
//     });

// function captureFrame() {
//     const canvas = document.createElement('canvas');
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     const ctx = canvas.getContext('2d');
//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//     return tf.browser.fromPixels(canvas);
// }

// function preprocessFrame(frame) {
//     const resized = tf.image.resizeBilinear(frame, [224, 224]);
//     const normalized = resized.div(tf.scalar(255));
//     const batched = normalized.expandDims(0);
//     return batched;
// }

// function handlePrediction(prediction) {
//     prediction.array().then(array => {
//         const maxIndex = array[0].indexOf(Math.max(...array[0]));
//         const resultElement = document.getElementById('result');
//         resultElement.textContent = `${alpha[maxIndex]} : الحرف الذي سيتم تمثيله سيظهر هنا`; 
//     });
// }

// function predict() {
//     const frame = captureFrame();
//     const preprocessedFrame = preprocessFrame();
//     const prediction = model.predict(preprocessedFrame);
//     handlePrediction(prediction);
// }

// setInterval(predict, 100);
