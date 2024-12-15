const dropArea = document.getElementById('drop-area');
const canvasOriginal = document.getElementById('canvas-original');
const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
const contextOriginal = canvasOriginal.getContext('2d');
const context1 = canvas1.getContext('2d');
const context2 = canvas2.getContext('2d');
const context3 = canvas3.getContext('2d');
const fileInput = document.getElementById('file-input');

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = '#e0e0e0';
});

dropArea.addEventListener('dragleave', () => {
    dropArea.style.backgroundColor = '#fff';
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = '#fff';

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

dropArea.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

// Fonction pour traiter le fichier
function handleFile(file) {
    const reader = new FileReader();

    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            const newWidth = img.width * 0.5;  // 30% de la taille
            const newHeight = img.height * 0.5; // 30% de la taille

            canvasOriginal.width = newWidth;
            canvasOriginal.height = newHeight;
            canvas1.width = newWidth;
            canvas1.height = newHeight;
            canvas2.width = newWidth;
            canvas2.height = newHeight;
            canvas3.width = newWidth;
            canvas3.height = newHeight;

            contextOriginal.drawImage(img, 0, 0, newWidth, newHeight);
            context1.drawImage(img, 0, 0, newWidth, newHeight);
            context2.drawImage(img, 0, 0, newWidth, newHeight);
            context3.drawImage(img, 0, 0, newWidth, newHeight);

            applyColorTransformation(context1, matrices[1]);
            applyColorTransformation(context2, matrices[2]);
            applyColorTransformation(context3, matrices[3]);
        };
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
}

function applyColorTransformation(context, matrix) {
    const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i] * matrix[0] + data[i + 1] * matrix[1] + data[i + 2] * matrix[2] + matrix[4];
        const g = data[i] * matrix[5] + data[i + 1] * matrix[6] + data[i + 2] * matrix[7] + matrix[9];
        const b = data[i] * matrix[10] + data[i + 1] * matrix[11] + data[i + 2] * matrix[12] + matrix[14];

        data[i] = r;
        data[i + 1] = g;
        data[i + 2] = b;
    }

    context.putImageData(imageData, 0, 0);
    context.canvas.style.display = 'block';
}

const matrices = {
    1: [
        0.203876, 0.990338, -0.194214, 0, 0,
        0.112975, 0.794542, 0.092483, 0, 0,
        -0.005222, -0.041043, 1.046265, 0, 0,
        0, 0, 0, 1, 0
    ],
    2: [
        0.392952, 0.823610, -0.216562, 0, 0,
        0.263559, 0.690210, 0.046232, 0, 0,
        -0.011910, 0.040281, 0.971630, 0, 0,
        0, 0, 0, 1, 0
    ],
    3: [
        1.278864, -0.125333, -0.153531, 0, 0,
        -0.084748, 0.957674, 0.127074, 0, 0,
        -0.000989, 0.601151, 0.399838, 0, 0,
        0, 0, 0, 1, 0
    ]
};
