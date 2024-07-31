


// CALCULAR COEFICIENTE DE NIVEL DE ACTIDAD FISICA
let actividadUsuario = localStorage.getItem("nivelActividad");
let coeficienteFunction = (actividadUsuario) => {
  let coeficiente;
  switch (actividadUsuario) {
    case "sedentario":
      coeficiente = 1.2;
      break;
    case "ligeramente activo":
      coeficiente = 1.375;
      break;
    case "moderadamente activo":
      coeficiente = 1.55;
      break;
    case "deportista alto rendimiento":
      coeficiente = 1.725;
      break;
    default:
      console.log("Nivel de actividad no reconocido");
      break;
  }
  return coeficiente;
};
let coeficienteActividad = coeficienteFunction(actividadUsuario);
console.log(`su coeficiente actividad es ${coeficienteActividad}`);

// CALCULAR TASA METABOLICA
let sexo=localStorage.getItem('genero');
let peso=parseFloat(localStorage.getItem('peso'));
let altura=parseFloat(localStorage.getItem('altura'));
let edad=parseInt(localStorage.getItem('edad'));


function calcularTMB(sexo, peso, altura, edad) { //tasa metabolica basal para calcular calorias para mantener funciones basicas
  let TMB;
  if (sexo === "mujer") {
    TMB = 10 * peso + 6.25 * altura * 100 - 5 * edad - 161;
  } else if (sexo === "hombre") {
    TMB = 10 * peso + 6.25 * altura * 100 - 5 * edad + 5;
  }else{
    console.log('sexo no reconocido')
  }
  return TMB;
}
const TMB = calcularTMB(sexo, peso, altura, edad);
console.log("Su TMB es de:", TMB);




function calcularTMBT(TMB, coeficienteActividad) {
  let TMBT = TMB * coeficienteActividad;
  return TMBT;
}
let TMBT = calcularTMBT(TMB, coeficienteActividad);
console.log(`Su TMBT es ${TMBT}.`)

//  CALCULADORA DE CALORIAS DIARIAS
let objetivoFinal=localStorage.getItem('objetivoPeso');
function calcularCaloriasMin(objetivoFinal, TMBT) {
  let minCal;
  if (objetivoFinal == "Bajar") {
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
  if (objetivoFinal == "Bajar") {
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


const MIN_CAL=parseInt(calcularCaloriasMin(objetivoFinal,TMBT)); 
const MAX_CAL = parseInt(calcularCaloriasMax(objetivoFinal, TMBT));

localStorage.setItem('max-cal',MAX_CAL);
localStorage.setItem('min-cal',MIN_CAL);

let minCalDiarias= document.getElementById('min-calorias');
minCalDiarias.innerHTML= `${MIN_CAL}`;
let maxCalDiarias= document.getElementById('max-calorias');
maxCalDiarias.innerHTML=`${MAX_CAL}`;

let infoCalorias= document.getElementById('calorias-informacion-texto');
infoCalorias.innerHTML=`Teniendo en cuenta sus datos personales y su objetivo de <span>${objetivoFinal} de peso</span> , y considerando que usted es <span>${actividadUsuario}</span>, hemos calculado sus necesidades calóricas diarias.<br> Sus <span>calorías máximas</span> recomendadas por día son: <span>${MAX_CAL}kcal</span>.<br>Asimismo, sus <span>calorías mínimas</span> recomendadas son: <span>${MIN_CAL}kcal</span>.<br>Estas cifras le ayudarán a alcanzar sus metas de manera efectiva y saludable.`


//CALCULAR MACROS
let continuarSiBtn=document.getElementById('macros-si');
let continuarNoBtn= document.getElementById('macros-no');

continuarNoBtn.addEventListener('click',()=> document.write('Espero que nuestra información haya sido de ayuda. No olvide consultar con su doctor de confianza.'));


continuarSiBtn.addEventListener('click', () => {
  Swal.fire({
    title: "Elige tipo de dieta",
    input: "select",
    inputPlaceholder: "Elige tu tipo de Dieta",
    inputOptions: {
      Keto: "Keto",
      LowCarb: "Low Carb y Alta en Grasas",
      Proteina: "Alta en Proteínas",
      Normal: "Normal/Alta en Carbohidratos"
    },
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value) {
          tipoDietaResultado = value;
          localStorage.setItem('tipoDietaResultado',tipoDietaResultado);
          resolve();
          
        } else {
          resolve("Debes elegir un tipo de dieta");
        }
      });
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(`Has seleccionado: ${tipoDietaResultado}`);
    }
  });
});
let tipoDietaResultado= localStorage.getItem('tipoDietaResultado');
console.log("Usted eligio", tipoDietaResultado);


//SECCION MACROS

let macrosContenedor= document.getElementById('macros');
let TituloMacros=document.getElementById('titulo-animado');
TituloMacros.innerHTML=`Distribucion para ${tipoDietaResultado}`;



//DISTRIBUCION Y ASIGNACION DE %
// DISTRIBUCION Y ASIGNACION DE %
let infoDietas=document.getElementById('info-dietas');
let dietaInfo=infoDietas.lastElementChild;
let dietaTitulo=infoDietas.firstElementChild;

function distribucionMacros(dietaSeleccionada) {
  let cantidadCarbos;
  let cantidadGrasas;
  let cantidadProteina;
  if (dietaSeleccionada === "Keto") { // valores expresados en %
    cantidadCarbos = "5";
    cantidadGrasas = "70";
    cantidadProteina = "25";
    dietaTitulo.innerHTML= "LA DIETA KETO"
    dietaInfo.innerHTML = `Todo Sobre La Dieta Keto: <br>
Descripción: Consumo extremadamente bajo de carbohidratos (5%), muy alto de grasas (70%) y moderado de proteínas (25%). Induce cetosis, donde el cuerpo usa grasa como principal fuente de energía.<br>
Recomendaciones: Ideal para quienes buscan perder peso rápidamente o controlar el azúcar en sangre.<br>
Cuidados: Puede causar deficiencia de nutrientes y efectos secundarios como el "keto flu".<br> No es adecuado para personas con enfermedades hepáticas o pancreáticas sin supervisión médica.`;
  } else if (dietaSeleccionada === "Low Carb y Alta en Grasas") {
    cantidadCarbos = "20";
    cantidadGrasas = "60";
    cantidadProteina = "20";
    dietaTitulo.innerHTML="LA DIETA LOW CARB Y ALTA EN GRASAS"
    dietaInfo.innerHTML = `Todo sobre Low Carb y Alta en Grasas:<br>
Descripción: Bajo en carbohidratos (20%) y muy alto en grasas (60%), con baja ingesta de proteínas (20%). Similar a la dieta keto pero menos restrictiva.<br>
Recomendaciones: Beneficiosa para perder peso y controlar niveles de azúcar en sangre sin las restricciones extremas de la dieta keto.<br>
Cuidados: Asegurarse de incluir suficientes fibras y micronutrientes. Puede ser desequilibrada si no se planifica adecuadamente.`;
  } else if (dietaSeleccionada === "Normal/Alta en Carbohidratos") {
    cantidadCarbos = "65";
    cantidadGrasas = "10";
    cantidadProteina = "25";
    dietaTitulo.innerHTML="DIETA EQUILIBRADA/NORMAL Y ALTA EN CARBOHIDRATOS"
    dietaInfo.innerHTML = `Todo sobre la Dieta Normal/Alta en Carbohidratos:
Descripción: Alta en carbohidratos (65%), baja en grasas (10%) y moderada en proteínas (25%). Adecuada para personas activas.<br>
Recomendaciones: Buena para quienes practican deportes o actividades físicas intensas, proporcionando energía rápida.<br>
Cuidados: Evitar carbohidratos refinados y procesados. Asegurarse de mantener una dieta equilibrada y variada para evitar deficiencias nutricionales.`;
  } else {
    cantidadCarbos = "30";
    cantidadGrasas = "20";
    cantidadProteina = "50";
    dietaTitulo.innerHTML="DIETA PROTEICA"
    dietaInfo.innerHTML = `Todo sobre la Dieta Alta en Proteínas:<br>
Descripción: Alta en proteínas (50%), con moderados carbohidratos (30%) y grasas (20%). Enfocada en desarrollar masa muscular y mejorar la recuperación muscular.<br>
Recomendaciones: Ideal para atletas y personas que buscan aumentar su masa muscular.<br>
Cuidados: No exceder la ingesta proteica recomendada para evitar problemas renales. Mantener una buena hidratación y balancear con suficientes carbohidratos y grasas saludables.`;
  }

  localStorage.setItem('%Carbos', cantidadCarbos);
  localStorage.setItem('%Grasas', cantidadGrasas);
  localStorage.setItem('%Proteinas', cantidadProteina);

  
}

distribucionMacros(tipoDietaResultado);



// BARRA PROGRESO CIRCULAR
// carbohidratos
let barraCarbs = document.getElementById('carbs-barra');
let porcentajeCarbs = document.getElementById('carbs-porcentaje');

let progressValueCarbs = 0;
let progressEndValueCarbs = parseFloat(localStorage.getItem('%Carbos'));
console.log(`carbohidratos distribucion: ${progressEndValueCarbs}%`);
let velocidad = 100;

let progresoCarbs = setInterval(() => {
  progressValueCarbs++;
  porcentajeCarbs.textContent = `${progressValueCarbs}%`;
  barraCarbs.style.background = `conic-gradient(
    #243036 ${progressValueCarbs * 3.6}deg,
    #698588 ${progressValueCarbs * 3.6}deg
  )`;
  if (progressValueCarbs == progressEndValueCarbs) {
    clearInterval(progresoCarbs);
  }
}, velocidad);

// grasas
let barraGrasas = document.getElementById('grasas-barra');
let porcentajeGrasas = document.getElementById('grasas-porcentaje');

let progressValueGrasas = 0;
let progressEndValueGrasas = parseFloat(localStorage.getItem('%Grasas'));
console.log(`grasas distribucion: ${progressEndValueGrasas}%`);

let progresoGrasas = setInterval(() => {
  progressValueGrasas++;
  porcentajeGrasas.textContent = `${progressValueGrasas}%`;
  barraGrasas.style.background = `conic-gradient(
    #243036 ${progressValueGrasas * 3.6}deg,
    #698588 ${progressValueGrasas * 3.6}deg
  )`;
  if (progressValueGrasas == progressEndValueGrasas) {
    clearInterval(progresoGrasas);
  }
}, velocidad);

// proteínas
let barraProteinas = document.getElementById('proteinas-barra');
let porcentajeProteinas = document.getElementById('proteinas-porcentaje');

let progressValueProteinas = 0;
let progressEndValueProteinas = parseFloat(localStorage.getItem('%Proteinas'));
console.log(`Proteinas distribucion: ${progressEndValueProteinas}%`);

let progresoProteinas = setInterval(() => {
  progressValueProteinas++;
  porcentajeProteinas.textContent = `${progressValueProteinas}%`;
  barraProteinas.style.background = `conic-gradient(
    #243036 ${progressValueProteinas * 3.6}deg,
    #698588 ${progressValueProteinas * 3.6}deg
  )`;
  if (progressValueProteinas == progressEndValueProteinas) {
    clearInterval(progresoProteinas);
  }
}, velocidad);

//ANIMACION LETRAS https://tobiasahlin.com/moving-letters/#1
anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  const btnPagPrincipal=document.getElementById('btn-pagina-principal');
  btnPagPrincipal.addEventListener('click',()=>{
    window.location.href = "/pages/pages5.html"
  })