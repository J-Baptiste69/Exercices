function convertirCenF(NombreC) {
    return (NombreC * 9 + (32 * 5)) / 5;
};


function convertirFenC(NombreF) {
    return (5 / 9) * (NombreF - 32);
};

Convertissement = prompt('Si vous voulez convertir des degres Celsius en degres Fahrenheit, tapez "c", si vous voulez des Fahrenheit en Celsius,tapez "f"')

if (Convertissement == "c") {
    NombreC = prompt("Donnez moi un chiffre ou un nombre Celsius");
    alert(convertirCenF(NombreC));
} else if (Convertissement == "f") {
    NombreF = prompt("Donnez moi un chiffre ou un nombre Fahrenheit");
    alert(convertirFenC(NombreF));
};
