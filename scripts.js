
const boton = document.getElementById("boton")
const nombre = document.getElementById("nombre")
const gmail = document.getElementById("gmail")
const telefono = document.getElementById("telefono")
const edad = document.getElementById("edad")

const generarUsuario = async () => {
    
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];
    console.log(datos)

    foto.src = datos.picture.large;    
    nombre.textContent = datos.name.first + ' ' + datos.name.last;
    gmail.textContent = datos.email;
    telefono.textContent = datos.phone;
    edad.textContent = datos.dob.age;
}


boton.addEventListener("click", generarUsuario);

//document.addEventListener("DOMContentLoaded", generarUsuario);