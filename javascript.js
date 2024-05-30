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

function continuar1(intentos= 3) {
  if(intentos === 0){ //cantida de veces que permite equivocarse al usuario --> se busca evitar un bucle infinito
    console.log("Has agotado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
    return;
  }

  let continuar1 = prompt("Desea calcular sus calorias diarias recomendadas? (si/no)").toLowerCase();
  if (continuar1=="si"){
    console.log("si");
    objetivoPeso();
  } else if(continuar1=="no"){
    console.log("Espero que nuestra informacion haya sido de ayuda. No olvide consultar con su doctor de confianza.");
  } else {
    console.log("Ingrese una respuesta valida. (si/no)");
    continuar(intentos-1); //Llama de nuevo a la funcion para que el usuario eliga una opcion valida
  }
}
continuar1();

// INFO P/ CALCULAR CALORIAS DIARIAS  



function objetivoPeso(intentos=3) {
  if (intentos === 0) {
    console.log("Has agotado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
    return;
  }

  let objetivo = prompt("Ingrese la letra de su opción: A-bajar de peso, B-mantener peso, C-aumentar de peso").toLowerCase();
  let objetivoResultado;
  switch (objetivo) {
    case "a":
      objetivoResultado = "Perder";
      console.log("Su objetivo: Perder Peso");
      break;
    case "b":
      objetivoResultado = "Mantener";
      console.log("Su objetivo: Mantener Peso");
      break;
    case "c":
      objetivoResultado = "Aumentar";
      console.log("Su objetivo: Aumentar Peso");
      break;
    default:
      console.log("Dato inválido, ingrese una opción (a/b/c)");
      return objetivoPeso(intentos - 1);
  }
  return objetivoResultado;
}
let objetivoFinal=objetivoPeso();
console.log(objetivoFinal); // Imprimimos el valor de objetivoFinal

let cantidadKilos;

function objetivoKilos(objetivoFinal) {
  let intentos=3;
  if (intentos === 0) {
    console.log("Has agotado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
    return;
  }
  let kilos= parseInt(prompt(`Ingrese la cantidad de kilos que le gustaría ${objetivoFinal}`));

  if(!isNaN(kilos) && kilos>=1 && kilos<=100){
    return kilos;
  }else {
    console.log("Ingrese un número válido, mayor que 0 y menor que 100");
    return objetivoKilos(intentos - 1);
  }
  
}
cantidadKilos=objetivoKilos(objetivoFinal);
console.log(`Usted desea ${objetivoFinal} ${cantidadKilos}kg.`);






// CALCULAR NIVEL DE ACTIDAD FISICA

let coeficienteActividad; 

function nivelActividad(intentos=3){
  if (intentos === 0) {
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
  } else {
    console.log("Respuesta invalida, ingrese una opcion d/e/f/g");
    nivelActividad(intentos-1);
  }
return coeficienteActividad;

}
nivelActividad();
console.log(`su coeficiente actividad es ${coeficienteActividad}`);





function calcularTMB(sexo, peso, altura, edad) { //tasa metabolica basal para calcular calorias para mantener funciones basicas
  let TMB;
  if (sexo === "mujer") {
    TMB = 10 * peso + 6.25 * altura*100 - 5 * edad - 161;
  } else if (sexo === "hombre") {
    TMB = 10 * peso + 6.25 * altura*100 - 5 * edad + 5;
  }
  return TMB;
}
let TMB= calcularTMB(sexo, peso, altura, edad);
console.log("Su TMB es de:",TMB);




function calcularTMBT(TMB,coeficienteActividad){
  let TMBT=TMB*coeficienteActividad;
  return TMBT;
}
let TMBT= calcularTMBT(TMB,coeficienteActividad);
console.log(`Su TMBT es ${TMBT}.`)
//CALCULAR TIEMPO EN QUE SE LLEGA AL OBJETIVO

function tiempoObjetivoMin(objetivoFinal, cantidadKilos) {
  let tiempoMin;
  if (objetivoFinal == "Perder") {
    tiempoMin = (7700 * cantidadKilos) / 1000;
  } else if (objetivoFinal == "Aumentar") {
    tiempoMin = (7700 * cantidadKilos) / 500;
  }
  return tiempoMin;
}

function tiempoObjetivoMax(objetivoFinal, cantidadKilos) {
  let tiempoMax;
  if (objetivoFinal == "Perder") {
    tiempoMax = (7700 * cantidadKilos) / 500;
  } else if (objetivoFinal == "Aumentar") {
    tiempoMax = (7700 * cantidadKilos) / 250;
  }
  return tiempoMax;
}

let tiempoMin = tiempoObjetivoMin(objetivoFinal, cantidadKilos);
console.log(`El tiempo mínimo que necesita para conseguir su objetivo es de: ${tiempoMin} días.`);

let tiempoMax = tiempoObjetivoMax(objetivoFinal, cantidadKilos);
console.log(`El tiempo máximo que necesita para conseguir su objetivo es de: ${tiempoMax} días.`);

console.log(`Su tiempo mínimo es: ${tiempoMin} y su tiempo máximo es: ${tiempoMax}.`);


//CALCULADORA DE CALORIAS DIARIAS

function calcularCaloriasMin(objetivoFinal, TMBT) {
  let minCal;
  if (objetivoFinal == "Perder") {
    minCal = TMBT - 1000;
    console.log(`Si su objetivo es ${objetivoFinal} peso de manera saludable se recomienda hacer un déficit calórico entre 500/1000 calorías al día, por lo que su ingesta mínima recomendada es ${minCal} calorías.`);
  } else if (objetivoFinal == "Aumentar") {
    minCal = TMBT + 250;
    console.log(`Si su objetivo es ${objetivoFinal} peso de manera saludable se recomienda hacer un superávit calórico entre 250/500 calorías al día, por lo que su ingesta mínima recomendada es ${minCal} calorías.`);
  } else {
    minCal = TMBT;
    console.log(`Si su objetivo es ${objetivoFinal} peso de manera saludable se recomienda que su ingesta sea de ${TMBT} calorías al día.`);
  }

  return minCal;
}

function calcularCaloriasMax(objetivoFinal, TMBT) {
  let maxCal;
  if (objetivoFinal == "Perder") {
    maxCal = TMBT - 500;
    console.log(`Si su objetivo es ${objetivoFinal} peso de manera saludable se recomienda hacer un déficit calórico entre 500/1000 calorías al día, por lo que su ingesta máxima recomendada es ${maxCal} calorías.`);
  } else if (objetivoFinal == "Aumentar") {
    maxCal = TMBT + 500;
    console.log(`Si su objetivo es ${objetivoFinal} peso de manera saludable se recomienda hacer un superávit calórico entre 250/500 calorías al día, por lo que su ingesta máxima recomendada es ${maxCal} calorías.`);
  } else {
    maxCal = TMBT;
    console.log(`Si su objetivo es ${objetivoFinal} peso de manera saludable se recomienda que su ingesta sea de ${TMBT} calorías al día.`);
  }

  return maxCal;
}


let minCal=calcularCaloriasMin(objetivoFinal,TMBT);
let maxCal=calcularCaloriasMax(objetivoFinal,TMBT);

console.log(`Usted alcanzaria su objetivo de ${objetivoFinal} ${cantidadKilos}kg en ${tiempoMax}dias, consumiendo sus calorias minimas: ${minCal}kcal por dia`);
console.log(`Usted alcanzaria su objetivo de ${objetivoFinal} ${cantidadKilos}kg en ${tiempoMin}dias, consumiendo sus calorias minimas: ${maxCal}kcal por dia`);


function continuar2(intentos = 3) {
  if (intentos === 0) { // cantidad de veces que permite equivocarse al usuario --> se busca evitar un bucle infinito
    console.log("Has agotado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
    return;
  }
  let continuar = prompt("¿Desea calcular la distribución de sus macros diarias? (si/no)").toLowerCase();

  if (continuar === "si") {
    let tipoDieta = tipoDietaFuncion();
    distribucionMacros(tipoDieta); // Asume que esta función existe y está definida correctamente
  } else if (continuar === "no") {
    console.log("Espero que nuestra información haya sido de ayuda. No olvide consultar con su doctor de confianza.");
  } else {
    console.log("Ingrese una respuesta válida. (si/no)");
    continuar2(intentos - 1); // Llama de nuevo a la función para que el usuario elija una opción válida
  }
}


continuar2();
function tipoDietaFuncion() {
  let dieta = prompt("Ingrese la letra de su opción: ¿Qué tipo de dieta lleva o le gustaría llevar a cabo?\nA - Keto\nB - Low Carb y Alta en Grasas\nC - Normal/Alta en Carbohidratos\nD - Alta en Proteínas").toLowerCase();
  let tipoDietaResultado;
  switch (dieta) {
    case "a":
      tipoDietaResultado = "Keto";
      break;
    case "b":
      tipoDietaResultado = "Low Carb y Alta en Grasas";
      break;
    case "c":
      tipoDietaResultado = "Normal/Alta en Carbohidratos";
      break;
    case "d":
      tipoDietaResultado = "Alta en Proteínas";
      break;
    default:
      console.log("Opción no válida. Por favor, ingrese una letra correcta.");
      return tipoDietaFuncion(); // Llama de nuevo a la función para que el usuario vuelva a intentar
  }
  return tipoDietaResultado;
}
function distribucionMacros(dietaSeleccionada) {
  let cantidadCarbos;
  let cantidadGrasas;
  let cantidadProteina;
  if (dietaSeleccionada === "Keto") {
    cantidadCarbos = "5%";
    cantidadGrasas = "70%";
    cantidadProteina = "25%";
  } else if (dietaSeleccionada === "Low Carb y Alta en Grasas") {
    cantidadCarbos = "20%";
    cantidadGrasas = "60%";
    cantidadProteina = "20%";
  } else if (dietaSeleccionada === "Normal/Alta en Carbohidratos") {
    cantidadCarbos = "65%";
    cantidadGrasas = "10%";
    cantidadProteina = "25%";
  } else {
    cantidadCarbos = "30%";
    cantidadGrasas = "20%";
    cantidadProteina = "50%";
  }

  console.log(`Si usted desea hacer una dieta ${dietaSeleccionada}, se aconseja que sus macros estén distribuidas de la siguiente manera:
  Carbohidratos: ${cantidadCarbos}. Proteínas: ${cantidadProteina}. Grasas: ${cantidadGrasas}.
  En su caso particular, teniendo en cuenta sus datos personales y la cantidad de calorías recomendadas, su distribución se vería de la siguiente manera:`);

  let maxCal = 2000; // Ejemplo de cantidad de calorías recomendadas
  let totalCarbos = (parseFloat(cantidadCarbos) / 100) * maxCal;
  let totalProteinas = (parseFloat(cantidadProteina) / 100) * maxCal;
  let totalGrasas = (parseFloat(cantidadGrasas) / 100) * maxCal;

  console.log(`Si usted decide comer el máximo de sus calorías diarias recomendadas, que son ${maxCal} kcal:
  Su consumo de Carbohidratos por día sería de: ${totalCarbos} kcal.
  Su consumo de Proteínas por día sería de: ${totalProteinas} kcal.
  Su consumo de Grasas por día sería de: ${totalGrasas} kcal.
  Esto le daría un total de ${maxCal} kcal al día.`);
}





















  





