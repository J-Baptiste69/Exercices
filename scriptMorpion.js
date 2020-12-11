let color_case = "rose"

function jouer(id) {
    console.log(id)
    let cases = document.getElementById(id)
    //on verifie que la celule ne contient pas déjà une classe rose ou bleu
    //si la celule contient une classe rose ou blue alors on ne peut pas changer la couleur sinon on change la couleur
    if (cases.classList.contains("rose") || cases.classList.contains("blue")) {

    }
    else {
        //if si la case d'avant était bleu alors la prchaine est rose
        if (color_case == "blue") {

            cases.classList.add("rose")

            color_case = "rose"

            color_case.innerText('O')

        }
        else {

            cases.classList.add("blue")
            color_case = "blue"
            color_case.innerText('X')
        }
    }


}

function Rejouer() {
    cases = document.getElementById('case_1')
    cases.classList.remove('blue')
    cases.classList.remove('rose')
    cases = document.getElementById('case_2')
    cases.classList.remove('blue')
    cases.classList.remove('rose')
    cases = document.getElementById('case_3')
    cases.classList.remove('blue')
    cases.classList.remove('rose')
    cases = document.getElementById('case_4')
    cases.classList.remove('blue')
    cases.classList.remove('rose')
    cases = document.getElementById('case_5')
    cases.classList.remove('blue')
    cases.classList.remove('rose')
    cases = document.getElementById('case_6')
    cases.classList.remove('blue')
    cases.classList.remove('rose')
    cases = document.getElementById('case_7')
    cases.classList.remove('blue')
    cases.classList.remove('rose')
    cases = document.getElementById('case_8')
    cases.classList.remove('blue')
    cases.classList.remove('rose')
    cases = document.getElementById('case_9')
    cases.classList.remove('blue')
    cases.classList.remove('rose')

}