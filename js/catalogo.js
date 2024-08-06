//BASE DE DATOS ESPAÑOL

class Alimento {
  constructor(id, nombre, categoria, marca, calorias, carbohidratos, proteinas, grasas, cantidad, unidad) {
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
  getNombreEnMinusculas() {
    return this.nombre.toLowerCase();
  }
  normalizarUnidad() {
    if (this.unidad === "gr") {
      return this.cantidad;
    } else if (this.unidad === "ml") {
      return this.cantidad * 0.1; // Convertir ml a gramos
    } else {
      throw new Error(`Unidad no válida: ${this.unidad}`);
    }
  }

  }
  const alimentos = [
    new Alimento(1, "Pechuga de Pollo", "carne", "", 160, 0, 22.9, 1.3, 100, "gr"),
    new Alimento(2, "Leche Entera", "lacteos", "La Serenísima", 61, 4.8, 3.2, 3.3, 100, "ml"),
    new Alimento(3, "Manzana", "frutas", "", 52, 14, 0.3, 0.2, 100, "gr"),
    new Alimento(4, "Espinaca", "verduras", "", 23, 3.6, 2.9, 0.4, 100, "gr"),
    new Alimento(5, "Galletitas Oreo", "golosinas", "Oreo", 480, 70.8, 4.7, 20.5, 100, "gr"),
    new Alimento(6, "Pan Integral", "panificacion", "", 252, 43.3, 13.4, 4.2, 100, "gr"),
    new Alimento(7, "Filete de Res", "carne", "", 250, 0, 26.1, 15, 100, "gr"),
    new Alimento(8, "Queso Cheddar", "lacteos", "Sancor", 403, 1.3, 24.9, 33.1, 100, "gr"),
    new Alimento(9, "Plátano", "frutas", "", 89, 22.8, 1.1, 0.3, 100, "gr"),
    new Alimento(10, "Zanahoria", "verduras", "", 41, 9.6, 0.9, 0.2, 100, "gr"),
    new Alimento(11, "Chocolate con Leche", "golosinas", "Cadbury", 535, 59.4, 7.6, 29.7, 100, "gr"),
    new Alimento(12, "Pan Blanco", "panificacion", "", 265, 49, 9, 3.2, 100, "gr"),
    new Alimento(13, "Salchicha", "carne", "", 300, 2.8, 12.6, 27.2, 100, "gr"),
    new Alimento(14, "Yogurt Natural", "lacteos", "Yogurisimo", 61, 4.7, 3.5, 3.3, 100, "ml"),
    new Alimento(15, "Naranja", "frutas", "", 47, 11.8, 0.9, 0.1, 100, "gr"),
    new Alimento(16, "Tomate", "verduras", "", 18, 3.9, 0.9, 0.2, 100, "gr"),
    new Alimento(17, "Caramelo", "golosinas", "Sugus", 392, 98, 0, 0, 100, "gr"),
    new Alimento(18, "Croissant", "panificacion", "", 406, 45.8, 8.2, 21.2, 100, "gr"),
    new Alimento(19, "Chuleta de Cerdo", "carne", "", 231, 0, 22.3, 15.1, 100, "gr"),
    new Alimento(20, "Queso Fresco", "lacteos", "Tregar", 72, 3.9, 8.7, 2.4, 100, "gr"),
    new Alimento(21, "Pera", "frutas", "", 57, 15.2, 0.4, 0.1, 100, "gr"),
    new Alimento(22, "Lechuga", "verduras", "", 15, 2.9, 1.4, 0.2, 100, "gr"),
    new Alimento(23, "Helado de Vainilla", "golosinas", "Freddo", 207, 24.5, 3.5, 10.9, 100, "gr"),
    new Alimento(24, "Pan de Molde", "panificacion", "Bimbo", 251, 47.6, 8.9, 3.2, 100, "gr"),
    new Alimento(25, "Milanesa de Pollo", "carne", "", 230, 13, 20, 10, 100, "gr"),
    new Alimento(26, "Queso Parmesano", "lacteos", "Sancor", 431, 4.1, 38, 29.3, 100, "gr"),
    new Alimento(27, "Fresa", "frutas", "", 32, 7.7, 0.7, 0.3, 100, "gr"),
    new Alimento(28, "Pepino", "verduras", "", 16, 3.6, 0.7, 0.1, 100, "gr"),
    new Alimento(29, "Chocolate Amargo", "golosinas", "Arcor", 546, 61.3, 4.9, 31.3, 100, "gr"),
    new Alimento(30, "Pan de Trigo", "panificacion", "", 247, 41.4, 8.2, 3.1, 100, "gr"),
    new Alimento(31, "Almendra", "frutos secos", "", 576, 21.7, 21.2, 49.4, 100, "gr"),
    new Alimento(32, "Brócoli", "verduras", "", 34, 6.6, 2.8, 0.4, 100, "gr"),
    new Alimento(33, "Yogurt Griego", "lacteos", "Chobani", 59, 3.6, 10, 0.4, 100, "ml"),
    new Alimento(34, "Sandía", "frutas", "", 30, 7.6, 0.6, 0.2, 100, "gr"),
    new Alimento(35, "Chía", "semillas", "", 486, 42.1, 16.5, 30.7, 100, "gr"),
    new Alimento(36, "Té Verde", "bebidas", "", 1, 0.2, 0, 0, 100, "ml"),
    new Alimento(37, "Carne Molida", "carne", "", 250, 0, 26, 15, 100, "gr"),
    new Alimento(38, "Arroz Integral", "cereales", "", 123, 25.6, 2.7, 0.9, 100, "gr"),
    new Alimento(39, "Salmón", "pescado", "", 208, 0, 20.4, 13, 100, "gr"),
    new Alimento(40, "Aguacate", "frutas", "", 160, 8.5, 2, 14.7, 100, "gr"),
    new Alimento(41, "Huevos", "proteínas", "", 155, 1.1, 13, 11, 100, "gr"),
    new Alimento(42, "Quinoa", "cereales", "", 120, 21.3, 4.1, 1.9, 100, "gr"),
    new Alimento(43, "Arándanos", "frutas", "", 57, 14.5, 0.7, 0.3, 100, "gr"),
    new Alimento(44, "Papas Fritas", "snacks", "Lays", 536, 53.5, 6.6, 34.6, 100, "gr"),
    new Alimento(45, "Mantequilla", "lacteos", "", 717, 0.1, 0.9, 81, 100, "gr"),
    new Alimento(46, "Avena", "cereales", "", 389, 66.3, 16.9, 6.9, 100, "gr"),
    new Alimento(47, "Café", "bebidas", "", 2, 0, 0.3, 0, 100, "ml"),
    new Alimento(48, "Cereal de Maíz", "cereales", "Kellogg's", 367, 84, 7.5, 1, 100, "gr"),
    new Alimento(49, "Miel", "edulcorantes", "", 304, 82.4, 0.3, 0, 100, "gr"),
    new Alimento(50, "Sardinas", "pescado", "", 208, 0, 24.6, 11.5, 100, "gr"),
    new Alimento(51, "Fideos", "pasta", "", 371, 74.7, 13, 1.5, 100, "gr"),
    new Alimento(52, "Nuez", "frutos secos", "", 654, 13.7, 15.2, 65.2, 100, "gr"),
    new Alimento(53, "Churros", "postres", "", 326, 42.7, 5.9, 14.5, 100, "gr"),
    new Alimento(54, "Queso Crema", "lacteos", "Philadelphia", 342, 4.1, 6.2, 33.1, 100, "gr"),
    new Alimento(55, "Espaguetis", "pasta", "", 158, 30.1, 5.8, 0.9, 100, "gr"),
    new Alimento(56, "Gelatina", "postres", "Royal", 62, 14, 1.2, 0, 100, "gr"),
    new Alimento(57, "Atún", "pescado", "", 132, 0, 28, 1, 100, "gr"),
    new Alimento(58, "Kiwi", "frutas", "", 61, 14.7, 1.1, 0.5, 100, "gr"),
    new Alimento(59, "Pistacho", "frutos secos", "", 562, 28.2, 20, 45.4, 100, "gr"),
    new Alimento(60, "Hummus", "legumbres", "", 166, 14.3, 7.9, 9.6, 100, "gr"),
    new Alimento(61, "Camarones", "mariscos", "", 99, 0.2, 20.9, 1.7, 100, "gr"),
    new Alimento(62, "Leche Descremada", "lacteos", "La Serenísima", 33, 4.8, 3.3, 0.1, 100, "ml"),
    new Alimento(63, "Mango", "frutas", "", 60, 15, 0.8, 0.4, 100, "gr"),
    new Alimento(64, "Tarta de Manzana", "postres", "", 237, 33.2, 2.4, 10.4, 100, "gr"),
    new Alimento(65, "Palomitas de Maíz", "snacks", "", 375, 74.1, 12, 4.3, 100, "gr"),
    new Alimento(66, "Remolacha", "verduras", "", 43, 9.6, 1.6, 0.2, 100, "gr"),
    new Alimento(67, "Almendra", "frutos secos", "", 576, 21.7, 21.2, 49.4, 100, "gr"),
    new Alimento(68, "Coco", "frutas", "", 354, 15.2, 3.3, 33.5, 100, "gr"),
    new Alimento(69, "Frutilla", "frutas", "", 32, 7.7, 0.7, 0.3, 100, "gr"),
    new Alimento(70, "Nueces", "frutos secos", "", 654, 13.7, 15.2, 65.2, 100, "gr"),
    new Alimento(71, "Almejas", "mariscos", "", 74, 3.6, 12.8, 0.7, 100, "gr"),
    new Alimento(72, "Leche Condensada", "lacteos", "Nestlé", 321, 54.4, 7.9, 8.6, 100, "gr"),
    new Alimento(73, "Jugo de Naranja", "bebidas", "", 45, 10.4, 0.7, 0.2, 100, "ml"),
    new Alimento(74, "Durazno", "frutas", "", 39, 9.5, 0.9, 0.3, 100, "gr"),
    new Alimento(75, "Galletas de Arroz", "snacks", "", 381, 80, 8, 2, 100, "gr"),
    new Alimento(76, "Batata", "verduras", "", 86, 20.1, 1.6, 0.1, 100, "gr"),
    new Alimento(77, "Frutos Rojos", "frutas", "", 50, 11.6, 1, 0.3, 100, "gr"),
    new Alimento(78, "Mejillones", "mariscos", "", 86, 3.7, 11.9, 2.2, 100, "gr"),
    new Alimento(79, "Helado de Chocolate", "postres", "Freddo", 216, 27, 3.6, 10.9, 100, "gr"),
    new Alimento(80, "Aceitunas", "frutas", "", 115, 6.3, 0.8, 10.7, 100, "gr"),
    new Alimento(81, "Ananá", "frutas", "", 50, 13.1, 0.5, 0.1, 100, "gr"),
    new Alimento(82, "Arroz Blanco", "cereales", "", 130, 28, 2.4, 0.2, 100, "gr"),
    new Alimento(83, "Almendras", "frutos secos", "", 576, 21.7, 21.2, 49.4, 100, "gr"),
    new Alimento(84, "Frambuesa", "frutas", "", 52, 11.9, 1.2, 0.6, 100, "gr"),
    new Alimento(85, "Queso Ricota", "lacteos", "Sancor", 174, 3, 12.4, 13, 100, "gr"),
    new Alimento(86, "Papaya", "frutas", "", 43, 10.8, 0.5, 0.3, 100, "gr"),
    new Alimento(87, "Batata", "verduras", "", 86, 20.1, 1.6, 0.1, 100, "gr"),
    new Alimento(88, "Frutos Secos", "snacks", "", 607, 21, 20.5, 55, 100, "gr"),
    new Alimento(89, "Jengibre", "especias", "", 80, 17.8, 1.8, 0.7, 100, "gr"),
    new Alimento(90, "Frijoles Negros", "legumbres", "", 341, 62.4, 21.6, 1.4, 100, "gr"),
    new Alimento(91, "Cereales", "cereales", "Kellogg's", 367, 84, 7.5, 1, 100, "gr"),
    new Alimento(92, "Brócoli", "verduras", "", 34, 6.6, 2.8, 0.4, 100, "gr"),
    new Alimento(93, "Yogurt Natural", "lacteos", "La Serenísima", 61, 4.7, 3.5, 3.3, 100, "ml"),
    new Alimento(94, "Caramelo", "golosinas", "Sugus", 392, 98, 0, 0, 100, "gr"),
    new Alimento(95, "Palta", "frutas", "", 160, 8.5, 2, 14.7, 100, "gr"),
    new Alimento(96, "Cerezas", "frutas", "", 50, 12, 1, 0.3, 100, "gr"),
    new Alimento(97, "Guisantes", "legumbres", "", 81, 14.5, 5.4, 0.4, 100, "gr"),
    new Alimento(98, "Tofu", "proteínas", "", 76, 1.9, 8.1, 4.8, 100, "gr"),
    new Alimento(99, "Calabaza", "verduras", "", 26, 6.5, 1, 0.1, 100, "gr"),
    new Alimento(100, "Pepino", "verduras", "", 16, 3.6, 0.7, 0.1, 100, "gr"),
    new Alimento(101, "Bagel", "panificacion", "", 250, 48, 9, 1.5, 100, "gr"),
    new Alimento(102, "Pan de Centeno", "panificacion", "", 259, 48.3, 8.5, 3.3, 100, "gr"),
    new Alimento(103, "Muffin de Arándanos", "panificacion", "", 296, 50.1, 4.8, 10.1, 100, "gr"),
    new Alimento(104, "Rosca de Pan", "panificacion", "", 290, 54.1, 7.9, 5.1, 100, "gr"),
    new Alimento(105, "Pan de Cebada", "panificacion", "", 252, 43.6, 8.2, 2.5, 100, "gr"),
    new Alimento(106, "Baguette", "panificacion", "", 270, 57.5, 8.5, 1, 100, "gr"),
    new Alimento(107, "Focaccia", "panificacion", "", 285, 46.5, 7, 8.5, 100, "gr"),
    new Alimento(108, "Pan de Maíz", "panificacion", "", 288, 52.7, 6.5, 5.7, 100, "gr"),
    new Alimento(109, "Pan de Papa", "panificacion", "", 240, 40.5, 8.5, 4.1, 100, "gr"),
    new Alimento(110, "Bollo Suizo", "panificacion", "", 296, 52.8, 7, 7.1, 100, "gr"),
    new Alimento(111, "Croissant de Mantequilla", "panificacion", "", 406, 45.8, 8.2, 21.2, 100, "gr"),
    new Alimento(112, "Pan de Trigo Integral", "panificacion", "", 265, 43.3, 13.4, 4.2, 100, "gr"),
    new Alimento(113, "Pan de Soya", "panificacion", "", 260, 45.2, 11, 3.6, 100, "gr"),
    new Alimento(114, "Pita", "panificacion", "", 276, 55.4, 9.8, 1, 100, "gr"),
    new Alimento(115, "Pan de Salvado", "panificacion", "", 248, 48.1, 8.9, 2.1, 100, "gr"),
    new Alimento(116, "Empanada de Hojaldre", "panificacion", "", 304, 35.2, 6.5, 16.7, 100, "gr"),
    new Alimento(117, "Pan de Espelta", "panificacion", "", 256, 48.7, 10.3, 2.3, 100, "gr"),
    new Alimento(118, "Bollo de Chocolate", "panificacion", "", 360, 48.6, 6.2, 15.4, 100, "gr"),
    new Alimento(119, "Pan de Alforfón", "panificacion", "", 250, 46.5, 11.2, 2.7, 100, "gr"),
    new Alimento(120, "Pan de Trigo Sarraceno", "panificacion", "", 270, 47.8, 10.4, 3.3, 100, "gr"),
    new Alimento(121, "Pan de Molde Integral", "panificacion", "", 251, 47.6, 8.9, 3.2, 100, "gr"),
    new Alimento(122, "Brioche", "panificacion", "", 335, 55.7, 9.8, 9.5, 100, "gr"),
    new Alimento(123, "Pancito Dulce", "panificacion", "", 290, 54, 7.8, 5.2, 100, "gr"),
    new Alimento(124, "Pan de Masa Madre", "panificacion", "", 246, 46.1, 8.3, 1.5, 100, "gr"),
    new Alimento(125, "Bollo de Canela", "panificacion", "", 350, 60.2, 5.8, 12.4, 100, "gr"),
    new Alimento(126, "Pan de 7 Granos", "panificacion", "", 270, 50.6, 10.1, 3.1, 100, "gr"),
    new Alimento(127, "Pan de Amaranto", "panificacion", "", 255, 44.9, 9.7, 2.9, 100, "gr"),
    new Alimento(128, "Pan de Avena", "panificacion", "", 249, 45.5, 10.2, 2.8, 100, "gr"),
    new Alimento(129, "Pan de Linaza", "panificacion", "", 262, 43.8, 10.9, 4.1, 100, "gr"),
    new Alimento(130, "Pan de Semillas", "panificacion", "", 270, 45.2, 12.2, 5.3, 100, "gr")
  ];
  


//SECCIONES DE ALIMENTOS
let verduras = document.getElementById("verduras");
let frutas = document.getElementById("frutas");
let carne = document.getElementById("carne");
let lacteos = document.getElementById("lacteos");
let panificacion = document.getElementById("panificacion");
let golosinas = document.getElementById("golosinas");
let otros = document.getElementById("otros");

//FUNCION
function sectorizarAlimentos(categoria, HTML) {
  switch (categoria) {
    case "frutas":
      frutas.innerHTML += HTML;
      break;
    case "carne":
      carne.innerHTML += HTML;
      break;
    case "lacteos":
      lacteos.innerHTML += HTML;
      break;
    case "panificacion":
      panificacion.innerHTML += HTML;
      break;
    case "verduras":
      verduras.innerHTML += HTML;
      break;
    case "golosinas":
      golosinas.innerHTML += HTML;
      break;
    default:
      otros.innerHTML += HTML;
  }
}

function renderizarProductos() {
  //bucle sobre array alimentos
  alimentos.forEach((alimento) => {
    const HTML = `
        <div class="card">
                <div class="alimento-card">
                    <h3>${alimento.nombre}</h3>
                    <h4>${alimento.categoria}</h4>
                    <p class="calorias">Calorias: <span>${alimento.calorias}</span></p>
                    <p class="marca">Marca: <span>${alimento.marca}</span></p>
                    <p class="carbohidratos">Carbohidratos: <span>${alimento.carbohidratos}</span> </p>
                    <p class="proteinas">Proteinas: <span>${alimento.proteinas}</span> </p>
                    <p class="grasas">Grasas: <span>${alimento.grasas}</span> </p>
                    <p class="cantidad">Tamaño porcion: <span>${alimento.cantidad} ${alimento.unidad}</span></p>
                    <button class="btn-add" id="${alimento.id}"><i class="fa-solid fa-circle-plus"></i></button>
                </div>
              
            </div>
        `;
    sectorizarAlimentos(alimento.categoria, HTML);
  });
}

renderizarProductos();


/*
1 - llamada a API USDFOOD usando "keyword"-> const resultApi
2- array "food" -> const ListFoodApi
3- si la respuest es exitosa -> ejecutar funciones (procesarAlimentos(callback a obtener nutrientes)y despues agrega cada nuevo alimento a un nuevo array de objetos "arrayAlimentoBuscado")

*/


//variables/objetos/arrays
let listFoodApi=[];
let arrayAlimentosBuscados=[];
let arrayTodosAlimentos=listFoodApi.concat(alimentos);
const contenedor = document.getElementById('contenedor');
const main = document.querySelector('main');
const btnClose=document.getElementById('btn-cerrar');
const btnBuscar = document.getElementById('btn-buscar');
let alimentoBuscado;


//FUNCIONES

function obtenerNutriente(arrayNutrientes,nombreNutriente){
  const nutriente= arrayNutrientes.find((n) => n.nutrientName === nombreNutriente); //almacena primer elemento encontrado
  return nutriente ? `${nutriente.value} ${nutriente.unitName}` : "N/A";
}

function procesarAlimentos(arrayApi,nuevoArray){
  arrayApi.forEach((alimento) => {
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
    nuevoArray.push(nuevoAlimento);
  });
}

//1
async function apiUSDAFoodData(keyword){
  const apiKey = "QVxXrde9FpgrZ18dhNgLeBfcBssNpBC5b8iPLH48";
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${keyword}&api_key=${apiKey}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result); // API de USDA Food Data
    listFoodApi = result.foods; // array >>"foods" //2
    console.log(listFoodApi);
    return listFoodApi;
  } catch (error) {
    console.error("Error:", error.message);
  }
}




function buscarAlimentos(alimentos, alimentoBuscado, arrayAlimentosBuscados) {
  // Convertir alimentoBuscado a minúsculas
  alimentoBuscado = alimentoBuscado.trim().toLowerCase();
  console.log(`Buscando: ${alimentoBuscado}`);

  let alimentoEncontrado = false;

  alimentos.forEach(alimento => {
    if (alimento.nombre.toLowerCase() === alimentoBuscado) {
      arrayAlimentosBuscados.push(alimento);
      alimentoEncontrado = true;
      console.log(`Si se ha encontrado ${alimentoBuscado} en la base de datos en el array "alimentos".`);
      console.log(alimento);
    }
  });

  if (!alimentoEncontrado) {
    console.log(`No se encontró ${alimentoBuscado} en la base de datos en el array "alimentos".`);
  }
}
  




function mostrarAlimentos(arrayAlimentos) {
  arrayAlimentos.forEach((alimento) => {
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
        <button href="#" class="btn-add" id="${alimento.id}" onclick="btnAddFunction"><i class="fa-solid fa-circle-plus"></i></button>
      </div>
    `;
    contenedor.appendChild(div);
  });
}


//EJECUTAR FUNCIONES CON EVENTO CLICK EN BTN BUUSCADOR
btnBuscar.addEventListener('click', async function(e){
  e.preventDefault();
  const buscador = document.getElementById('buscador');
  alimentoBuscado = buscador.value;
  console.log(alimentoBuscado);
  contenedor.classList.toggle('hidden');
  main.classList.toggle('hidden');

  apiUSDAFoodData(alimentoBuscado).then((data) => {
    if (data) {
      procesarAlimentos(listFoodApi, arrayAlimentosBuscados);
      console.log(arrayAlimentosBuscados); 
      buscarAlimentos(alimentos,alimentoBuscado,arrayAlimentosBuscados);
      mostrarAlimentos(arrayAlimentosBuscados);
    }
    
  });
});
console.log(arrayAlimentosBuscados)

btnClose.addEventListener('click',()=>{
  const contenedor = document.getElementById('contenedor');
  const main = document.querySelector('main');
  
  contenedor.classList.toggle('hidden');
  main.classList.toggle('hidden');
  
  const buscador = document.getElementById('buscador');
  buscador.value = " ";

})


mostrarAlimentos(arrayAlimentosBuscados);

// INTERACCION CON INDEX



//  ELEMENTOS DEL DOM
// let desayunoCard = document.getElementById("desayuno_card");
// let almuerzoCard = document.getElementById("almuerzo_card");
// let snackCard = document.getElementById("snack_card");
// let cenaCard = document.getElementById("cena_card");



//DEFINIR ARRAYS PARA CADA COMIDA
const desayunoArray=[];
const almuerzoArray=[];
const snackArray=[];
const cenaArray=[];




// FUNCIONALIDAD A LOS BOTONES ADD

let btnAdd = document.querySelectorAll(".btn-add");
btnAdd.forEach((button) => {
  button.addEventListener("click", function(e){
    e.preventDefault();
    let btnId = e.currentTarget.id;
    console.log(btnId); 
    Swal.fire({
      title: "Seleccione",
      input: "select",
      inputOptions: {
        desayuno: "desayuno",
        almuerzo: "almuerzo",
        snack: "snack",
        cena: "cena",
      },
      inputPlaceholder: "Seleccione comida del día",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve();
          } else {
            resolve("Seleccione una comida");
          }
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        agregarAlimento(result.value, btnId);
      }
    });
  });
});

// ALMACENAMIENTO DE DATOS
function almacenarStorage(comidaArray) {
  let key;
  if (comidaArray === desayunoArray) key = 'desayuno';
  else if (comidaArray === almuerzoArray) key = 'almuerzo';
  else if (comidaArray === snackArray) key = 'snack';
  else if (comidaArray === cenaArray) key = 'cena';
  else {
    console.error("Error en almacenar Storage");
    return;
  }
  localStorage.setItem(key, JSON.stringify(comidaArray));
  console.log(`Datos guardados exitosamente en ${key}`);
}



function agregarAlimento(comida, btnId){ 

  let comidaArray;
  
  switch(comida){
    case "desayuno":
      comidaArray=desayunoArray;

      break;
    case "almuerzo":
      comidaArray=almuerzoArray;

      break;
    case "snack":
      comidaArray=snackArray;

      break;
    case "cena":
      comidaArray=cenaArray;

      break;
      default:
        console.error("Error en agregar alimento");
        return 
  }
  const productoSeleccionado= arrayTodosAlimentos.find(Alimento=> Alimento.id ==btnId);
  if (productoSeleccionado) {
    comidaArray.push(productoSeleccionado);
    console.log(`Se agregó a ${comida}: ${JSON.stringify(productoSeleccionado)}`);
    console.log(comidaArray);
  } else {
    console.error("Producto no encontrado");
  }
  almacenarStorage(comidaArray);
}

const btnInicio=document.getElementById('btnInicio');
btnInicio.addEventListener('click',()=>window.location.href='/pages/pages5.html')



// function almacenarStorage(value){
//   switch(value){
//     case desayunoArray:
//       localStorage.setItem('desayuno',JSON.stringify(desayunoArray));
//       console.log('Datos guardados exitosamente en desayuno');
//       break;
//     case almuerzoArray:
//       localStorage.setItem('almuerzo',JSON.stringify(almuerzoArray));
//       console.log('Datos guardados exitosamente en almuerzo');
//       break;  
//     case snackArray:
//       localStorage.setItem('snack',JSON.stringify(snackArray));
//       console.log('Datos guardados exitosamente en snack');
//       break;  
//     case cenaArray:
//       localStorage.setItem('cena',JSON.stringify(cenaArray));
//       console.log('Datos guardados exitosamente en cena');
//       break;  
//     default:
//       console.error("Error en almacenar Storage");  
//   }
// }













