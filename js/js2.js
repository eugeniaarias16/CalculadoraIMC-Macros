//PAGINA 2


//capto info almacenada en el localStorage
for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  let valor = localStorage.getItem(clave);
  localStorage.removeItem('sexo')
  console.log(`clave: ${clave}, valor: ${valor}`);
}
let nombre = localStorage.getItem('nombre');
let peso= localStorage.getItem('peso');
let altura= localStorage.getItem('altura')
let edad= localStorage.getItem('edad');
let genero= localStorage.getItem('genero');

let imc;
let categoriaPeso;
function calcularIMC(peso, altura) {
  imc =(peso / altura ** 2).toFixed(2);

  if (imc < 18.5) {
    categoriaPeso = "bajo peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoriaPeso = "peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    categoriaPeso = "sobrepeso";
  } else {
    categoriaPeso = "obesidad";
  }
}


const resultadoIMC = calcularIMC(peso, altura);
console.log(`imc: ${imc}, categoriaPeso: ${categoriaPeso}`);

const IMC_VALUE = document.getElementById("imcValue");
IMC_VALUE.innerHTML=`${imc}`;

const IMC_TEXTO_CONTENEDOR= document.getElementById('imcInformacion');
const IMC_TEXTO= IMC_TEXTO_CONTENEDOR.firstElementChild;
IMC_TEXTO.innerHTML=`Su Índice de Masa Corporal (IMC) es de ${imc} y según la Organización Mundial de la Salud (OMS) usted tiene ${categoriaPeso}.`;


// CONTINUAR CON LA SECCION DE MACROS, SI O NO

const MACROS_SI= document.getElementById('macrosSi');
const MACROS_NO=document.getElementById('macrosNo');

MACROS_SI.addEventListener('click',()=> window.location.href='../pages/pages3.html');
MACROS_NO.addEventListener('click',()=> document.write('Espero que nuestra informacion haya sido de ayuda. No olvide consultar con su doctor de confianza.'));