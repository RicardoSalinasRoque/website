/*const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡My Family!';*/

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/bici1.jpg') {
      miImage.setAttribute('src','images/mi-gran-familia.png');
    } else {
      miImage.setAttribute('src', 'images/bici1.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Mi nombre es: ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mi Nombre: ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
