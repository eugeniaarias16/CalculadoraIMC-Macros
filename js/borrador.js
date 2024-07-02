

// CONTINUAR
function continuar2(intentos = 3) {
  if (intentos === 0) {  //cantidad de veces que permite equivocarse al usuario-- > se busca evitar un bucle infinito
    console.log("Has agotado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
    return;
  }
  let continuar = prompt("¿Desea calcular la distribución de sus macros diarias? (si/no)").toLowerCase();

  if (continuar === "si") {
    let tipoDieta = tipoDietaFuncion();
    distribucionMacros(tipoDieta);  //Asume que esta función existe y está definida correctamente
  } else if (continuar === "no") {
    console.log("");
  } else {
    console.log("Ingrese una respuesta válida. (si/no)");
    continuar2(intentos - 1);  //Llama de nuevo a la función para que el usuario elija una opción válida
  }
}
continuar2();


// SELECCIONAR TIPO DE DIETA P/ DETERMINAR DISTRIBUCION DE MACRO
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
      return tipoDietaFuncion();  //Llama de nuevo a la función para que el usuario vuelva a intentar
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

  let totalCarbos = (parseFloat(cantidadCarbos) / 100) * maxCal;
  let totalProteinas = (parseFloat(cantidadProteina) / 100) * maxCal;
  let totalGrasas = (parseFloat(cantidadGrasas) / 100) * maxCal;

  console.log(`Si usted decide comer el máximo de sus calorías diarias recomendadas, que son ${maxCal} kcal:\n
    Su consumo de Carbohidratos por día sería de: ${totalCarbos} kcal.\n
    Su consumo de Proteínas por día sería de: ${totalProteinas} kcal.\n
    Su consumo de Grasas por día sería de: ${totalGrasas} kcal.\n
    Esto le daría un total de ${maxCal} kcal al día.`);
}



