//EFECTO DE LETRAS SACADO DE https://tobiasahlin.com/moving-letters/




  //DATOS PRINCIPALES 
let edad;
let genero;
let altura;
let peso;




// Funciones de validación de datos
function validarEdad(edadValid) {
  if (!isNaN(edadValid) && edadValid<100 && edadValid>0) {
    edad= edadValid;
    localStorage.setItem('edad',edad);
  }else {
    alert("Edad inválida. Por favor, ingrese una edad válida.");
  }
  return edad;
}


function validarSexo(sexoValid) {
  if (sexoValid === "mujer" || sexoValid === "hombre") {
    genero=sexoValid;
    localStorage.setItem('genero',genero);

  } else {
    alert("Sexo inválido. Por favor, ingrese 'hombre' o 'mujer'.");
  }
  return genero;
}

function validarAltura(alturaValid) {
  if (!isNaN(alturaValid) && alturaValid>1 && alturaValid< 2.5) {
    altura=alturaValid;
    localStorage.setItem('altura',altura);

  }else {
    alert("Altura inválida. Por favor, ingrese una altura válida (entre 1 y 2.5 metros).");
  }
  return altura;
}

function validarPeso(pesoValid) {
  if (!isNaN(pesoValid) && pesoValid>=35 && pesoValid<=400) {
  peso=pesoValid;
  localStorage.setItem('peso',peso);
  }else {
    alert("Peso inválido. Por favor, ingrese un peso válido (mayor a 35 y menor a 400).");
  }
  return peso;
}




	// Capturo  input y sus valores
const VALIDAR= document.getElementById('validar');
VALIDAR.addEventListener('click',(evento)=>{
evento.preventDefault();

let nombreInput= document.getElementById('nombre');
const NOMBRE = nombreInput.value? `${nombreInput.value}`:'Usuario Anonimo';
localStorage.setItem('nombre',NOMBRE);


let edadInput=document.getElementById('edad');
validarEdad(parseInt(edadInput.value));

let generoInput= document.getElementById('genero');
validarSexo(generoInput.value.toLowerCase());

let alturaInput= document.getElementById('altura'); 
validarAltura(parseFloat(alturaInput.value));

let pesoInput= document.getElementById('peso');
validarPeso(parseFloat(pesoInput.value));

console.log(`nombre:${NOMBRE}`);
console.log("edad: ",edad);
console.log("genero: ",genero);
console.log("altura: ",altura);
console.log("peso: ",peso);
});

// Verificar los campos y navegar a la siguiente página
let nextInput= document.getElementById('btn-next');
nextInput.addEventListener('click',() =>{
  if(edad && genero && altura && peso){
    window.location.href ='../pages/pages2.html';
  }else {
    alert("Debe completar el formulario")
  }
});

































