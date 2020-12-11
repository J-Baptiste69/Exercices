// Un enfant de type h1 avec du contenu//
//Un enfant de type p avec du contenu //

let DivPrinc = document.getElementById('Div1')
let NewEnfant = document.createElement("h1");
NewEnfant.innerText = 'Contenu'
DivPrinc.appendChild(NewEnfant);

let NewEnfant2 = document.createElement("p");
NewEnfant2.innerText = 'Du texte'
DivPrinc.appendChild(NewEnfant2);
//___________________________________________________________//

//Quand on clique sur un des 4 paragraphes il se supprime //

function Supprimer(PId) {
    let DivSecondaire = document.getElementById('Div2');
    let LesTextes = document.getElementById(PId);
    DivSecondaire.removeChild(LesTextes);
    }


let ParentH1 = document.getElementById("parentDuH1")
let nouveauTitre = document.createElement("h2")
nouveauTitre.innerText = 'deuxième titre'
ParentH1.replaceChild(nouveauTitre,ParentH1.firstChild);




