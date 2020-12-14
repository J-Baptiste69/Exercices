elements = document.getElementsByTagName("div");
console.log("il y a 5 balises de type div, voici ce qu'elles contiennent : ");

for( i = 0; i< elements.length; i++){
let cases = elements[i];
console.log(cases.innerText)
};




elements2 = document.getElementsByClassName("b_yellow");
console.log("il y a 2 balises qui ont une classe b-yellow, voici ce qu'elles contiennent : ");

for( i = 0; i< elements2.length; i++){
    let cases2 = elements2[i];
    console.log(cases2.innerText)
    };



elements3 = document.querySelector("#container .b_yellow");
console.log("voici le contenu de l'élément identifié par le secteur #container b_yellow : " + elements3.innerText)


elements4 = document.querySelectorAll("#container .b_yellow");
console.log("voici le contenu de l'élément identifié par le secteur #container b_yellow : ")

for( i = 0; i< elements4.length; i++){
    let cases4 = elements4[i];
    console.log(cases4.innerText)
    };