

  //ASIGNACION DE ALIMENTOS
 let desayunoCard = document.getElementById("desayuno_card");
 let almuerzoCard = document.getElementById("almuerzo_card");
 let snackCard = document.getElementById("snack_card");
 let cenaCard = document.getElementById("cena_card");

 let desayunoArray=[];
 let almuerzoArray=[];
 let snackArray=[];
 let cenaArray=[];


//  button.addEventListener('click', (e) => {
//   e.preventDefault();
//   let idBtn= e.currentTarget.id;
//   Swal.fire({
//     title: "Seleccione",
//     html: `
//       <form id="alertInfo">
//         <div class="comida-select">
//           <h4>En qué comida desea agregar?</h4>
//           <select name="comida" id="select-comida">
//             <option value="desayuno">Desayuno</option>
//             <option value="almuerzo">Almuerzo</option>
//             <option value="snack">Snack</option>
//             <option value="cena">Cena</option>
//           </select>
//         </div>
//         <div class="cantidad-select">
//           <h4>Cantidad que desea agregar</h4>
//           <input type="number" name="cantidad" id="select-cantidad" ><span>gr</span>
//           <p class="calorias porcion">1000<span>kcal</span></p>
//         </div>
//       </form>`,
//     showCancelButton: true,
//     preConfirm: () => {
//       const comida = document.getElementById('select-comida').value;
//       const cantidad = document.getElementById('select-cantidad').value;
      
//       if (!cantidad || !comida) {
//         Swal.showValidationMessage("La cantidad y la comida son obligatorias.");
//         return;
//       }
      
//       return { comida, cantidad };
//     }
//   }).then((result) => {
//     if (result.isConfirmed) {
//       const { comida, cantidad } = result.value;
//       agregarAlimento(comida, btnId);
//     }
//   });
//  //FUNCION AGREGAR ALIMENTO
//  function agregarAlimento(e) {
//    e.preventDefault();
//    Swal.fire({
//      title: "Seleccione",
//      input: "select",
//      inputOptions: {
//        desayuno: "desayuno",
//        almuerzo: "almuerzo",
//        snack: "snack",
//        cena: "cena",
//      },
//      inputPlaceholder: "Seleccione comida del día",
//      showCancelButton: true,
//      inputValidator: (value) => {
//        return new Promise((resolve) => {
//          if (value) {
//            resolve();
//          } else {
//            resolve("Debe seleccionar una opción");
//          }
//        });
//      },
//    }).then((result) => {
//      if (result.isConfirmed) {
//        let comidaCard;
//        let comidaArray;
//        switch (result.value) {
//          case "desayuno":
//            comidaCard = desayunoCard;
//            comidaArray=desayunoArray;
//            break;
//          case "almuerzo":
//            comidaCard = almuerzoCard;
//            comidaArray=almuerzoArray;
//            break;
//          case "snack":
//            comidaCard = snackCard;
//            comidaArray=snackArray;
//            break;
//          case "cena":
//            comidaCard = cenaCard;
//            comidaArray=cenaArray;
//            break;
        
//            return;
//        }
//      }
     const idAlimento = e.currentTarget.id;
     const alimentoAgregado = alimentos.find((alimento) => alimento.id == idAlimento);
     alimentoAgregado.push(comidaArray);
     console.log(comidaArray); 
   });
 }




 catalogo fin

 CONTINUAR
function continuar2(intentos = 3) {
  if (intentos === 0) {  cantidad de veces que permite equivocarse al usuario-- > se busca evitar un bucle infinito
    console.log("Has agotado el número máximo de intentos. Por favor, inténtalo de nuevo más tarde.");
    return;
  }
  let continuar = prompt("¿Desea calcular la distribución de sus macros diarias? (si/no)").toLowerCase();

  if (continuar === "si") {
    let tipoDieta = tipoDietaFuncion();
    distribucionMacros(tipoDieta);  Asume que esta función existe y está definida correctamente
  } else if (continuar === "no") {
    console.log("");
  } else {
    console.log("Ingrese una respuesta válida. (si/no)");
    continuar2(intentos - 1);  Llama de nuevo a la función para que el usuario elija una opción válida
  }
}
continuar2();


 SELECCIONAR TIPO DE DIETA P/ DETERMINAR DISTRIBUCION DE MACRO
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
      return tipoDietaFuncion();  Llama de nuevo a la función para que el usuario vuelva a intentar
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






// SECCION USDFOOD



// FUNCION QUE BUSCA Y RETORNA EL NUTRIENTE EN EL ARRAY


//RENDERIZAR API 
class AlimentoUSDFood {  //crear misma estructura que el array Alimentos
  constructor(id, nombre, categoria, marca, calorias, carbohidratos, proteinas, grasas, cantidad, unidad){
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.marca = marca;
    this.calorias = calorias;
    this.carbohidratos = carbohidratos;
    this.proteinas = proteinas;
    this.grasas = grasas;
    this.cantidad = cantidad;
    this.unidad = unidad;
  }
}

function modificarApiUSDFood(){
  let i= 130;
  arrayFoods.forEach((alimento) =>{
    new AlimentoUSDFood(++i,alimento.description," ",obtenerNutriente(alimento.foodNutrients,"Energy"),obtenerNutriente(alimento.foodNutrients,"Carbohydrate, by difference"),obtenerNutriente(
    alimento.foodNutrients,"Protein"),obtenerNutriente(alimento.foodNutrients,"Total lipid (fat)"),alimento.servingSize || "N/A",alimento.servingSizeUnit || "N/A");
    mostrarAlimentos(alimento);
  })
};


//funcion buscador de alimento
const btnBuscar = document.getElementById('button-addon1');
btnBuscar.addEventListener('click', async function(e) {
  e.preventDefault();
  const buscador = document.getElementById('buscador');
  const alimentoBuscado = buscador.value.trim(); // Trim para eliminar espacios en blanco al inicio y final
  console.log(alimentoBuscado);

  // Llamar a la API y mostrar alimentos después de obtener respuesta
  try {
    const arrayFoods = await apiUSDAFoodData(alimentoBuscado);
    modificarApiUSDFood(arrayFoods); //redefinir datos
  } catch (error) {
    console.error('Error al buscar alimentos:', error);
  }
});

function mostrarAlimentos(arrayBuscado) {
  arrayBuscado.forEach((alimento) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <div class="alimento-card">
      <h3>${alimento.nombre}</h3>
      <p class="marca">Marca: <span>${alimento.marca}</span></p>
      <div class="info-nutricional">
        <p class="calorias">Calorías: <span>${alimento.calorias}</span></p>
        <p class="carbohidratos">Carbohidratos: <span>${alimento.carbohidratos}</span></p>
        <p class="proteinas">Proteínas: <span>${alimento.proteinas}</span></p>
        <p class="grasas">Grasas: <span>${alimento.grasas}</span></p>
        <p class="cantidad">Tamaño porción: <span>${alimento.cantidad} ${alimento.unidad}</span></p>
      </div>
      <button href="#" class="btn btn-primary" marcador="${alimento.id}"><i class="fa-solid fa-circle-plus"></i></button>
    </div>
    `;
    contenedor.appendChild(div);
  });
}


// function mostrarAlimentos(arrayFoods) {

//   const contenedor = document.getElementById("contenedor");
//   contenedor.innerHTML = ''; // Limpiar contenido anterior

//   arrayFoods.forEach((alimento, index) => {
//     const div = document.createElement("div");
//     div.classList.add("card");
//     div.innerHTML = `
//       <div class="alimento-card">
//         <h3>${alimento.description}</h3>
//         <div class="info-nutricional">
//           <p class="calorias">Calorías: <span>${obtenerNutriente(alimento.foodNutrients, "Energy")}</span></p>
//           <p class="marca">Marca: <span>${alimento.brandName || "N/A"}</span></p>
//           <p class="carbohidratos">Carbohidratos: <span>${obtenerNutriente(alimento.foodNutrients, "Carbohydrate, by difference")}</span></p>
//           <p class="proteinas">Proteínas: <span>${obtenerNutriente(alimento.foodNutrients, "Protein")}</span></p>
//           <p class="grasas">Grasas: <span>${obtenerNutriente(alimento.foodNutrients, "Total lipid (fat)")}</span></p>
//           <p class="cantidad">Tamaño porción: <span>${alimento.servingSize || "N/A"} ${alimento.servingSizeUnit || "N/A"}</span></p>
//         </div>
//         <button href="#" class="btn btn-primary" data-marcador="${index}"><i class="fa-solid fa-circle-plus"></i></button>
//       </div>
//     `;
//     contenedor.appendChild(div);
//   });
// }



// // FUNCION QUE RECORRE Y BUSCA EN EL ARRAY EL PRIMER ELEMENTO QUE SEA === "nombreNutriente"
// function obtenerNutriente(arrayNutrientes, nombreNutriente) {
//   const nutriente = arrayNutrientes.find(
//     (n) => n.nutrientName === nombreNutriente
//   ); //almacena primer elemento encontrado
//   return nutriente ? `${nutriente.value} ${nutriente.unitName}` : "N/A";
// }


// // SECCION USDFOOD

// //LLAMADO A LA API

// async function apiUSDAFoodData(alimento) {
//   const apiKey = "QVxXrde9FpgrZ18dhNgLeBfcBssNpBC5b8iPLH48";
//   const url = `https://api.nal.usda.gov/fdc/v1/foods/search?alimento=${alimento}&api_key=${apiKey}`;
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }
//     const result = await response.json();
//     console.log(result); //API de USDA Food Data
//     arrayFoods = result.foods; // array "foods"
//     console.log(arrayFoods);
//     return arrayFoods;
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// //funcion buscador de alimento
// let alimentoBuscado;
// const btnBuscar = document.getElementById('button-addon1');
// btnBuscar.addEventListener('click', function(e) {
//   e.preventDefault();
//   const buscador = document.getElementById('buscador');
//   const alimentoBuscado = buscador.value;
//   console.log(alimentoBuscado);
//   return alimentoBuscado;
// });


// let contenedor = document.getElementById("contenedor");
// apiUSDAFoodData(alimentoBuscado).then(() => {
//   mostrarAlimentos(); // ejecuta despues que la respuesta es exitosa
// });




// }



// SECCION USDFOOD

let ListFood=[];
let contenedor = document.getElementById("contenedor");
let arrayAlimentosBuscados=[];

//B-FUNCIONES
function procesarAlimentos(ListFood, arrayAlimentosBuscados) {

  // Iterar sobre cada elemento del ListFood
  ListFood.forEach((alimento) => {
    const id = alimento.fdcId;
    const nombre = alimento.description;
    const marca = alimento.brandName || "N/A";
    const calorias = obtenerNutriente(alimento.foodNutrients, "Energy");
    const carbohidratos = obtenerNutriente(alimento.foodNutrients, "Carbohydrate, by difference");
    const proteinas = obtenerNutriente(alimento.foodNutrients, "Protein");
    const grasas = obtenerNutriente(alimento.foodNutrients, "Total lipid (fat)");
    const cantidad = alimento.servingSize || "N/A";
    const unidad = alimento.servingSizeUnit || "N/A";
    const nuevoAlimento = new Alimento(id, nombre, marca, calorias, carbohidratos, proteinas, grasas, cantidad, unidad);
    arrayAlimentosBuscados.push(nuevoAlimento);
  });
}
function obtenerNutriente(arrayNutrientes, nombreNutriente) {
  if (!Array.isArray(arrayNutrientes)) {
    return "N/A"; // Manejar el caso donde arrayNutrientes no es un array
  }
  const nutriente = arrayNutrientes.find((n) => n.nutrientName === nombreNutriente); //almacena primer elemento encontrado
  return nutriente ? `${nutriente.value} ${nutriente.unitName}` : "N/A";
}

async function apiUSDAFoodData(keyword) { // llamada a la api utilizando keyword
  const apiKey = "QVxXrde9FpgrZ18dhNgLeBfcBssNpBC5b8iPLH48";
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${keyword}&api_key=${apiKey}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result); // API de USDA Food Data
    ListFood = result.foods; // array >>"foods"
    console.log(ListFood);
    return ListFood;

  } catch (error) {
    console.error("Error:", error.message);
  }
}
console.log(typeof(ListFood));



function mostrarAlimentos(arrayAlimentosBuscados) {
  const alimentosProcesados = procesarAlimentos(arrayBuscado, arrayAlimentosBuscados);
  alimentosProcesados.forEach((alimento) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <div class="alimento-card">
        <h3>${alimento.nombre}</h3>
        <p class="marca">Marca: <span>${alimento.marca}</span></p>
        <div class="info-nutricional">
          <p class="calorias">Calorías: <span>${alimento.calorias}</span></p>
          <p class="carbohidratos">Carbohidratos: <span>${alimento.carbohidratos}</span></p>
          <p class="proteinas">Proteínas: <span>${alimento.proteinas}</span></p>
          <p class="grasas">Grasas: <span>${alimento.grasas}</span></p>
          <p class="cantidad">Tamaño porción: <span>${alimento.cantidad} ${alimento.unidad}</span></p>
        </div>
        <button href="#" class="btn btn-primary" marcador="${alimento.id}"><i class="fa-solid fa-circle-plus"></i></button>
      </div>
    `;
    contenedor.appendChild(div);
  });
}
// //funcion buscador de alimento
let alimentoBuscado;
const btnBuscar = document.getElementById('button-addon1');
btnBuscar.addEventListener('click', async function(e) {
  e.preventDefault();
  const buscador = document.getElementById('buscador');
  alimentoBuscado = buscador.value;
  console.log(alimentoBuscado);
  apiUSDAFoodData(alimentoBuscado);
  if (ListFood) {
    procesarAlimentos(ListFood, arrayAlimentosBuscados);
    console.log(arrayAlimentosBuscados); // Verificar los alimentos procesados
  }
  })


  //A-ARRAYS/OBJ/VARIABLES

let ListFood=[];
let contenedor = document.getElementById("contenedor");
let arrayAlimentosBuscados=[];

//B-FUNCIONES
function procesarAlimentos(ListFood, arrayAlimentosBuscados) {

  // Iterar sobre cada elemento del ListFood
  ListFood.forEach((alimento) => {
    const id = alimento.fdcId;
    const nombre = alimento.description;
    const marca = alimento.brandName || "N/A";
    const calorias = obtenerNutriente(alimento.foodNutrients, "Energy");
    const carbohidratos = obtenerNutriente(alimento.foodNutrients, "Carbohydrate, by difference");
    const proteinas = obtenerNutriente(alimento.foodNutrients, "Protein");
    const grasas = obtenerNutriente(alimento.foodNutrients, "Total lipid (fat)");
    const cantidad = alimento.servingSize || "N/A";
    const unidad = alimento.servingSizeUnit || "N/A";
    const nuevoAlimento = new Alimento(id, nombre, marca, calorias, carbohidratos, proteinas, grasas, cantidad, unidad);
    arrayAlimentosBuscados.push(nuevoAlimento);
  });
}
function obtenerNutriente(arrayNutrientes, nombreNutriente) {
  if (!Array.isArray(arrayNutrientes)) {
    return "N/A"; // Manejar el caso donde arrayNutrientes no es un array
  }
  const nutriente = arrayNutrientes.find((n) => n.nutrientName === nombreNutriente); //almacena primer elemento encontrado
  return nutriente ? `${nutriente.value} ${nutriente.unitName}` : "N/A";
}

async function apiUSDAFoodData(keyword) { // llamada a la api utilizando keyword
  const apiKey = "QVxXrde9FpgrZ18dhNgLeBfcBssNpBC5b8iPLH48";
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${keyword}&api_key=${apiKey}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result); // API de USDA Food Data
    ListFood = result.foods; // array >>"foods"
    console.log(ListFood);
    return ListFood;

  } catch (error) {
    console.error("Error:", error.message);
  }
}
console.log(typeof(ListFood));



function mostrarAlimentos(arrayAlimentosBuscados) {
  const alimentosProcesados = procesarAlimentos(arrayBuscado, arrayAlimentosBuscados);
  alimentosProcesados.forEach((alimento) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <div class="alimento-card">
        <h3>${alimento.nombre}</h3>
        <p class="marca">Marca: <span>${alimento.marca}</span></p>
        <div class="info-nutricional">
          <p class="calorias">Calorías: <span>${alimento.calorias}</span></p>
          <p class="carbohidratos">Carbohidratos: <span>${alimento.carbohidratos}</span></p>
          <p class="proteinas">Proteínas: <span>${alimento.proteinas}</span></p>
          <p class="grasas">Grasas: <span>${alimento.grasas}</span></p>
          <p class="cantidad">Tamaño porción: <span>${alimento.cantidad} ${alimento.unidad}</span></p>
        </div>
        <button href="#" class="btn btn-primary" marcador="${alimento.id}"><i class="fa-solid fa-circle-plus"></i></button>
      </div>
    `;
    contenedor.appendChild(div);
  });
}
// //funcion buscador de alimento
let alimentoBuscado;
const btnBuscar = document.getElementById('button-addon1');
btnBuscar.addEventListener('click', async function(e) {
  e.preventDefault();
  const buscador = document.getElementById('buscador');
  alimentoBuscado = buscador.value;
  console.log(alimentoBuscado);
  apiUSDAFoodData(alimentoBuscado);
  if (ListFoodFoods) {
    procesarAlimentos(ListFood, arrayAlimentosBuscados);
    console.log(arrayAlimentosBuscados); // Verificar los alimentos procesados
  }
  









apiUSDAFoodData(alimentoBuscado).then(() => {
  procesarAlimentos(ListFood,arrayAlimentosBuscados)
  mostrarAlimentos(arrayAlimentosBuscados); // ejecuta despues que la respuesta es exitosa
});





let mainSection= document.querySelector('main');
let masResultados= document.getElementById('mas_resultados');


function hiddenElements(){
  mainSection.classList.toggle('hidden');
  contenedor.classList.toggle('hidden');
  let resultadoH4= document.getElementById('resultado_titulo');
  if (contenedor.classList.contains('hidden')){
    resultadoH4.innerHTML=`+ Resultados`;
  }else {
    resultadoH4.innerHTML=`- Resultados`;
  }
  setTimeout(()=>{ // despues de un tiempo vuelva a su contenido original
    resultadoH4.innerHTML='USDAFoodData';
  },5000*10)
}
masResultados.addEventListener('click', hiddenElements);

  document.querySelectorAll(".btn.btn-primary").forEach((boton) => {
    //funcionalidad al boton add
    boton.addEventListener("click", agregarAlimento);
  });
