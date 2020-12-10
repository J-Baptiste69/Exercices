function ElementSuiv(){
    let LaDiv1 = document.getElementById("Div1");
    let LaDiv2 = document.getElementById("Div2");
    let LaDiv3 = document.getElementById("Div3");
    if (LaDiv1.style.display == 'inherit') {
        LaDiv1.style.display = 'none';
        LaDiv2.style.display = 'inherit';
        LaDiv3.style.display = 'none';

    }
    else if (LaDiv2.style.display == 'inherit'){
        LaDiv2.style.display = 'none';
        LaDiv1.style.display = 'none';
        LaDiv3.style.display = 'inherit';
    }
    else {
        LaDiv1.style.display = 'inherit';
        LaDiv2.style.display = 'none';
        LaDiv3.style.display = 'none';
    };
};