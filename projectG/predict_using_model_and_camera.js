// More API functions here:
    // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

    // the link to your model provided by Teachable Machine export panel
    // const URL = "./keras_model.h5";
    let start = document.getElementById('start')
    let model, webcam, labelContainer, maxPredictions;

    // Load the image model and setup the webcam
    async function init() {
        const modelURL = "./content/model.json";
        const metadataURL = "./content/metadata.json";
        start.remove()
        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(728,370,flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }
    async function predict() {
        const prediction = await model.predict(webcam.canvas);
        const maxPrediction = prediction.reduce((maxPrediction2, currentPrediction) => {
            return (currentPrediction.probability > maxPrediction2.probability) ? currentPrediction : maxPrediction2 ;
        });
        const classPrediction =
            maxPrediction.className
        labelContainer.innerHTML = classPrediction;
}

let div1 = document.getElementById('button0')
let username = localStorage.getItem('username')
let maindiv = document.getElementById('button')
let i = document.createElement('i')
if (username) {
    div1.remove()
    let dropdown = document.createElement('div')
    maindiv.appendChild(dropdown)
    dropdown.setAttribute('class', 'dropdown')
    let userbutton = document.createElement('button')
    userbutton.setAttribute('class', 'dropbtn')
    dropdown.appendChild(userbutton)
    i.setAttribute('class', 'fa-solid fa-user')
    i.style ='color: #e76f51;'
    userbutton.appendChild(i)
    let dropdowndiv = document.createElement('div')
    let dropdowna = document.createElement('a')
    let dropdownbutton = document.createElement('button')
    dropdowndiv.setAttribute('class', 'dropdown-content')
    dropdowna.href = '/HTML/Profile.html'
    dropdowna.textContent = 'الملف الشخصي'
    dropdownbutton.textContent = 'تسجيل الخروج'
    dropdown.appendChild(dropdowndiv)
    dropdowndiv.appendChild(dropdowna)
    dropdowndiv.appendChild(dropdownbutton)
    dropdownbutton.addEventListener('click', function Logout() {
        localStorage.clear()
        window.location.href = '/HTML/Home.html'
    })
}