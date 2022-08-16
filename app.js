const nombre = document.getElementById("nombre");
const paterno = document.getElementById("apellidoPaterno");
const materno = document.getElementById('apellidoMaterno');
const edad = document.getElementById('edad');
const fechaNacimiento = document.getElementById('fechaNacimiento');

const rfc1 = document.getElementById('rfc1');
const rfc2 = document.getElementById('rfc2');

const textoW = document.getElementById("warnings") 

form.addEventListener("submit", a =>{
  a.preventDefault();
  let warnings = "";
  let alertas = false;
  textoW.innerHTML = '';

    if (nombre.value.length < 3 )  {
      warnings += `El nombre no es valido<br>`;
      alertas = true;
    }
    if (paterno.value.length <4 ) {
      warnings += `El apellido paterno no es valido<br>`;
      alertas = true;
    }

    if (materno.value.length <4 ) {
      warnings += `El apellido materno no es valido<br>`;
      alertas = true;
    }
    if (edad.value <= 0 ) {
      warnings += `Edad invalida, ingrese un valor mayor a cero<br>`;
      alertas = true;
    }
    if (alertas) {
      textoW.innerHTML = warnings;
    } else{
      textoW.innerHTML = 'Ingrese su RFC para confirmar validacion finall<br><br>';
      rfc1.style.display = "block"
      rfc2.style.display = "block"
     validar2(rfc1.value,rfc2.value);
    }
  })


  function validar2(rfc1, rfc2) {
    if (rfc1.length < 6 && rfc2.length < 6 ) {
      textoW.innerHTML += `RFC Incorrecto, tiene menos de 6 digitos`
      alertas = true;
    }else{

    if ( rfc1 == rfc2 ) {
      console.log('Hola');
      textoW.style.color="rgb(20, 220, 120)" 
      textoW.innerHTML = `RFC Correcto<br><br>Todos sus datos fueron validados correctamente`
      alertas = true;
    } else{
      textoW.innerHTML += `RFC Incorrecto, valide de nuevo la informacion`
      alertas = true;
    } 
  }
  }   
