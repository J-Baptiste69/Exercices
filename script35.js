// Coder une fonction qui modifie la classe du titre//
//# Quand on clique sur le texte « mettre le h1 en rouge » alors le h1 passe en red//
//# Quand on clique sur le texte « mettre le h1 en vert » alors le h1 passe en green //



function texteRouge(){
let textRed = document.getElementById('textRed2');
textRed.style.color = 'red';
};

function texteVert(){
    let textGreen = document.getElementById('textGreen');
    textGreen.style.color = 'green';
    let MonTitre1 = document.getElementById("MonTitre0");
    MonTitre1.className= 'green';
    };