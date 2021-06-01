var usuarios=[]
function limpiar(){
    document.getElementById("nombre").value=""
    document.getElementById("apellido").value=""
    document.getElementById("edad").value=""
}
function mayoriaEdadObjeto(){
    var i=1
    var usuario ={
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        edad: Number(document.getElementById("edad").value),
        programador: true
    };
    usuarios.push(usuario)
    if (usuario.edad>= 18){
        alert("el usuario ingresado es mayor de edad")
    }
    else{
        alert("el usuario ingresado no es mayor de edad")
    }
    limpiar()
    var pusu=usuarios[0]
    var emay=pusu.edad
    var usumay
    usuarios.forEach(usuario =>{
        if (emay<=usuario.edad){
            usumay=usuario
        }
    })
    document.getElementById("salida").innerHTML="Usuarios: " + usuarios.length + " el mayor es: " + usumay.nombre + " con " + usumay.edad + " años"
    alert ("el mayor es " + usumay.nombre + " con " + usumay.edad + " años.")
}