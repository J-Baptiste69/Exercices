function Nombre(){
    nombre1=prompt('Choisir un chiffre ')
    nombre2=prompt('choisir un 2eme chiffre')
    if (nombre1>nombre2){
        alert('le premier chiffre est le plus grand')
    }
    else if(nombre2>nombre1){
        alert('le deuxieme chiffre est plus grand')
    }
    else if (nombre1==nombre2){
        alert('les chiffres sont les mêmes')
    }
}
Nombre();