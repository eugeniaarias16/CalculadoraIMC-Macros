// DATOS: NOMBRE, EDAD, SEXO, ALTURA Y PESO -> PARA CALCULAR IMC
const NOMBRE = prompt("Ingrese su nombre");
console.log(NOMBRE);

let edad;


function validarEdad() {
  let edadValid = parseInt(prompt("Ingrese una edad válida (mayor a 0 y menor a 100)"));
  if (isNaN(edadValid) || edadValid < 0 || edadValid > 100) {
    console.log("Edad inválida. Por favor, ingrese una edad válida.");
    validarEdad();
  } else {
    edad = edadValid;
  }
}

validarEdad();
console.log(edad);

let sexo;

function validarSexo() {
  let sexoValid = prompt("Ingrese un sexo válido (hombre/mujer)").toLowerCase();
  if (sexoValid === "mujer" || sexoValid === "hombre") {
    sexo = sexoValid;
  } else {
    console.log("Sexo inválido. Por favor, ingrese 'hombre' o 'mujer'.");
    validarSexo();
  }
}

validarSexo();
console.log(sexo);

let altura;

function validarAltura() {
  let alturaValid = parseFloat(prompt("Ingrese una altura válida (mayor a 1 y menor a 2.5)"));
  if (isNaN(alturaValid) || alturaValid < 1 || alturaValid > 2.5) {
    console.log("Altura inválida. Por favor, ingrese una altura válida.");
    validarAltura();
  } else {
    altura = alturaValid;
  }
}

validarAltura();
console.log(altura);

let peso;

function validarPeso() {
  let pesoValid = parseFloat(prompt("Ingrese un peso válido (mayor a 35 y menor a 400)"));
  if (isNaN(pesoValid) || pesoValid <= 35 || pesoValid >= 400) {
    console.log("Peso inválido. Por favor, ingrese un peso válido.");
    validarPeso();
  } else {
    peso = pesoValid;
  }
}

validarPeso();
console.log(peso);

function calcularIMC(peso, altura) {
  let imc = peso / (altura ** 2);
  let categoriaPeso;

  if (imc < 18.5) {
    categoriaPeso = "bajo peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoriaPeso = "peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    categoriaPeso = "sobrepeso";
  } else {
    categoriaPeso = "obesidad";
  }
  
  return { imc: imc.toFixed(2), categoriaPeso: categoriaPeso };
}

const resultadoIMC = calcularIMC(peso, altura);
console.log(`Su Índice de Masa Corporal (IMC) es de ${resultadoIMC.imc} y según la Organización Mundial de la Salud (OMS) usted tiene ${resultadoIMC.categoriaPeso}.`);

//OPC DE CALCULAR CALORIAS RECOMENDADAS

function continuar(intentos= 3) {
  if(intentos === 0){ //cantida de veces que permite equivocarse al usuario --> se busca evitar un bucle infinito
    console.log("Has agotado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
    return;
  }

  let continuar1 = prompt("Desea calcular sus calorias diarias recomendadas? (si/no)").toLowerCase();
  if (continuar1=="si"){
    objetivoPeso();
  } else if(continuar1=="no"){
    console.log("Espero que nuestra informacion haya sido de ayuda. No olvide consultar con su doctor de confianza.");
  } else {
    console.log("Infrese una respuesta valida. (si/no)");
    continuar(intentos-1); //Llama de nuevo a la funcion para que el usuario eliga una opcion valida
  }
}
continuar();

// INFO P/ CALCULAR CALORIAS DIARIAS  
let cantidadKilos;

function validarNumeroKilos(cantidad){
  while(isNaN(cantidad) || cantidad<=0 || cantidad>=100) {
    cantidad = prompt("Dato inválido. Ingrese un número mayor a 0 y menor a 100:");
  } 
  return cantidad;
}
let objetivo;
function objetivoPeso(intentos = 3) {
  if (intentos === 0) {
    console.log("Has agotado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
    return;
  }

  objetivo = prompt("Ingrese la letra de su opción: A-bajar de peso, B-mantener peso, C-aumentar de peso").toLowerCase();

  if (objetivo === "a") {
    let pesoCantPerder = prompt("¿Cuántos kilos desea perder?");
    cantidadKilos = validarNumeroKilos(pesoCantPerder);
    console.log(`Su objetivo es perder ${cantidadKilos} kg`);
  } else if (objetivo === "c") {
    let pesoCantAumentar = prompt("¿Cuántos kilos desea aumentar?");
    cantidadKilos = validarNumeroKilos(pesoCantAumentar);
    console.log(`Su objetivo es aumentar ${cantidadKilos} kg`);
  } else if (objetivo === "b") {
    console.log("Su objetivo es mantener su peso");
  } else {
    console.log("Opción inválida. Por favor, seleccione 'A', 'B' o 'C'.");
    objetivoPeso(intentos - 1);
  }
}
objetivoPeso();

// CALCULAR NIVEL DE ACTIDAD FISICA


let coeficienteActividad; 

function validarActividad (actividad){
  while (
    actividad !== "d" && actividad !== "sedentario" &&
    actividad !== "e" && actividad !== "ligeramente activo" &&
    actividad !== "f" && actividad !== "moderadamente activo" &&
    actividad !== "g" && actividad !== "deportista alto rendimiento"
  ){
    actividad = prompt("Dato inválido. Ingrese la letra de su opción.");
  }
  return actividad;
}
  
  
function nivelActividad(intentos=3){
  if(intentos===0){
    console.log("Has agotado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
    return;
  }
  let actividadUsuario= prompt("Ingrese la letra de su opción:D-Sedentario (ninguna). E-Ligeramente Activo (1-3 diuas a la semana). F- Moderadamente Activo (3-5 dias a la semana).G- Deportista Alto Rendimiento (+5 dias o doble turno)");
  if(actividadUsuario=="d"|| actividadUsuario=="sedentario"){
    coeficienteActividad=1.2;
  }else if(actividadUsuario=="e"|| actividadUsuario=="ligeramente activo"){
    coeficienteActividad=1.375;
  }else if(actividadUsuario=="f"|| actividadUsuario=="moderadamente activo"){
    coeficienteActividad=1.55;
  }else if(actividadUsuario=="g"|| actividadUsuario=="deportista alto rendimiento"){
    coeficienteActividad=1.725;
  }else {
    validarActividad(actividadUsuario);
  }
  return nivelActividad(intentos-1);
}
nivelActividad();

//CALCULADORA DE CALORIAS DIARIAS

let TMB;
function calcularTMB(sexo, peso, altura, edad) { //tasa metabolica basal para calcular calorias para mantener funciones basicas
  if (sexo === "mujer") {
    TMB = 10 * peso + 6.25 * altura*100 - 5 * edad - 161;
  } else if (sexo === "hombre") {
    TMB = 10 * peso + 6.25 * altura*100 - 5 * edad + 5;
  }
  return TMB;
}

let TMBT = TMB * coeficienteActividad; // Tasa Metabólica Total
let minCalorias;
let maxCalorias;
let objetivoUsuario;

if (objetivo === "a") {
  minCalorias = TMBT - 1000;
  maxCalorias = TMBT - 500;
  objetivoUsuario="Perder Peso";
  console.log(`Si su objetivo es ${objetivoUsuario} de manera saludable se recomienda hacer un deficit calorico entre 500/1000 calorias al dia, por lo que su ingesta recomendada es entre ${minCalorias} calorias y ${maxCalorias} calorias.`);
} else if (objetivo === "c") {
  minCalorias = TMBT + 250;
  maxCalorias = TMBT + 500;
  objetivoUsuario="Aumentar Peso";
  console.log(`Si su objetivo es ${objetivoUsuario} de manera saludable se recomienda hacer un superavit calorico entre 500/1000 calorias al dia, por lo que su ingesta recomendada es entre ${minCalorias} calorias y ${maxCalorias} calorias.`);
} else if (objetivo === "b") {
  objetivoUsuario="Mantener Peso";
  console.log(`Si su objetivo es ${objetivoUsuario} de manera saludable se recomienda que su ingesta sea de ${TMBT} calorias al dia.`);
}else {
  console.log("Objetivo no reconocido. Por favor,vuelva a intentar mas tarde.");
};




