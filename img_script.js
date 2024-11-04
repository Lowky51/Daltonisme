const dropArea = document.getElementById('drop-area');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const fileInput = document.getElementById('file-input');

let selectedMatrix = null;

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
            const newWidth = img.width * 0.3;  // 30% de la taille
            const newHeight = img.height * 0.3; // 30% de la taille 
            
            canvas.width = newWidth;
            canvas.height = newHeight;

            context.drawImage(img, 0, 0, newWidth, newHeight);
            
            if (selectedMatrix) {
                applyColorTransformation(selectedMatrix);
            } else {
                alert("Sélectionner un type de daltonisme avant !");
            }
        };
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);

    

}

function applyColorTransformation(matrix) {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
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
  
    canvas.style.display = 'block';
}


const matrices = {
    1: [	
        0.203876,	0.990338,	-0.194214, 0, 0, 
        0.112975,	0.794542,	0.092483, 0, 0, 
-       0.005222,	-0.041043,	1.046265, 0, 0,
        0, 0, 0, 1, 0],


    2: [	
        0.392952,	0.823610,	-0.216562, 0, 0,
        0.263559,	0.690210,	0.046232, 0, 0, 
        -0.011910,	0.040281,	0.971630, 0, 0,
        0, 0, 0, 1, 0],

    3: [
        1.278864,	-0.125333,	-0.153531, 0, 0,
        -0.084748,	0.957674,	0.127074, 0, 0, 
        -0.000989,	0.601151,	0.399838, 0, 0,
        0, 0, 0, 1, 0]
};

function setMatrix(matrixNumber) {
    selectedMatrix = matrices[matrixNumber];
    alert('Type de daltonisme sélectionné, veuillez insérer votre image.');
}

console.log(FileReader())


