nombre=prompt('Donnez moi un chiffre entre 10 et 20')
while(10>nombre || 20<nombre){
    if (nombre<10){
        alert('Plus grand!!')
    }
    else if (nombre>20){
        alert('Plus petit!!')
    }
    nombre=prompt('Donnez moi un chiffre entre 10 et 20')
}
nombre=prompt('ok')