// const dropArea = document.getElementById('drop-area');
// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');

// let selectedMatrix = null;

// // Fonction pour gérer le drag & drop
// dropArea.addEventListener('dragover', (event) => {
//     event.preventDefault();
//     dropArea.style.backgroundColor = '#e0e0e0';
// });

// dropArea.addEventListener('dragleave', () => {
//     dropArea.style.backgroundColor = '#fff';
// });

// dropArea.addEventListener('drop', (event) => {
//     event.preventDefault();
//     dropArea.style.backgroundColor = '#fff';

//     const files = event.dataTransfer.files;
//     if (files.length > 0) {
//         const file = files[0];
//         const reader = new FileReader();

//         reader.onload = (e) => {
//             const img = new Image();
//             img.onload = () => {
//                 const newWidth = img.width * 0.3;  // 50% de la taille d'origine
//                 const newHeight = img.height * 0.3; // 50% de la taille d'origine

//                 canvas.width = newWidth;
//                 canvas.height = newHeight;

//                 context.drawImage(img, 0, 0, newWidth, newHeight);

//                 // Vérifiez si une matrice a été sélectionnée avant d'appliquer la transformation
//                 if (selectedMatrix) {
//                     applyColorTransformation(selectedMatrix);
//                 } else {
//                     alert("Sélectionner un type de daltonisme avant !");
//                 }
//             };
//             img.src = e.target.result;
//         };

//         reader.readAsDataURL(file);
//     }
// });

// // Fonction pour appliquer une transformation de couleur
// function applyColorTransformation(matrix) {
//     const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData.data;

//     for (let i = 0; i < data.length; i += 4) {
//         const r = data[i] * matrix[0] + data[i + 1] * matrix[1] + data[i + 2] * matrix[2] + matrix[4];
//         const g = data[i] * matrix[5] + data[i + 1] * matrix[6] + data[i + 2] * matrix[7] + matrix[9];
//         const b = data[i] * matrix[10] + data[i + 1] * matrix[11] + data[i + 2] * matrix[12] + matrix[14];

//         data[i] = r;
//         data[i + 1] = g;
//         data[i + 2] = b;
//     }

//     context.putImageData(imageData, 0, 0);

//     // Afficher le canvas
//     canvas.style.display = 'block';
// }

// // Définir les matrices de transformation


// const matrices = {
//     1: [0.385450, 0.769005, -0.154455, 0, 0,   // PROTA
//         0.100526, 0.829802, 0.069673, 0, 0,
//         -0.007442, -0.022190, 1.029632, 0, 0,
//         0, 0, 0, 1, 0],
//     2: [0.498864, 0.674741, -0.173604, 0, 0, // DEUTA
//         0.205199, 0.754872, 0.039929, 0, 0,
//         -0.011131, 0.030969, 0.980162, 0, 0,
//         0, 0, 0, 1, 0],
//     3: [1.104996, -0.046633, -0.058363, 0, 0,   // Trita
//         -0.032137, 0.971635, 0.060503, 0, 0,
//         0.001336, 0.317922, 0.680742, 0, 0,
//         0, 0, 0, 1, 0]
// };

// // Fonction pour définir la matrice sélectionnée
// function setMatrix(matrixNumber) {
//     selectedMatrix = matrices[matrixNumber];
//     alert('Type de dalto prit en compte veuillez inserez votre image');
// }

const dropArea = document.getElementById('drop-area');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const fileInput = document.getElementById('file-input');

let selectedMatrix = null;

// Fonction pour gérer le drag & drop
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

// Gestion du téléchargement de fichier
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
            const newWidth = img.width * 0.3;  // 30% de la taille d'origine
            const newHeight = img.height * 0.3; // 30% de la taille d'origine
            
            canvas.width = newWidth;
            canvas.height = newHeight;

            context.drawImage(img, 0, 0, newWidth, newHeight);
            
            // Vérifiez si une matrice a été sélectionnée avant d'appliquer la transformation
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

// Fonction pour appliquer une transformation de couleur
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

    // Afficher le canvas
    canvas.style.display = 'block';
}

// Définir les matrices de transformation
const matrices = {
    1: [0.385450, 0.769005, -0.154455, 0, 0,   // PROTA
        0.100526, 0.829802, 0.069673, 0, 0,
        -0.007442, -0.022190, 1.029632, 0, 0,
        0, 0, 0, 1, 0],
    2: [0.498864, 0.674741, -0.173604, 0, 0, // DEUTA
        0.205199, 0.754872, 0.039929, 0, 0,
        -0.011131, 0.030969, 0.980162, 0, 0,
        0, 0, 0, 1, 0],
    3: [1.104996, -0.046633, -0.058363, 0, 0,   // TRITA
        -0.032137, 0.971635, 0.060503, 0, 0,
        0.001336, 0.317922, 0.680742, 0, 0,
        0, 0, 0, 1, 0]
};

// Fonction pour définir la matrice sélectionnée
function setMatrix(matrixNumber) {
    selectedMatrix = matrices[matrixNumber];
    alert('Type de daltonisme sélectionné, veuillez insérer votre image.');
}


