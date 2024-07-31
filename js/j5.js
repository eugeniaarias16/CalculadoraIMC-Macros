
document.addEventListener('DOMContentLoaded', () => {

  // Definir arrays para cada comida
  const comidasArray = {
    desayuno: [],
    almuerzo: [],
    snack: [],
    cena: []
  };

  // Seleccionar elementos del DOM 
  const comidasCard = {
    desayuno: document.getElementById('desayuno'),
    almuerzo: document.getElementById('almuerzo'),
    snack: document.getElementById('snack'),
    cena: document.getElementById('cena')
  };






  // Verificación de elementos DOM
  Object.keys(comidasCard).forEach(comida => {
    if (!comidasCard[comida]) {
      console.error(`Elemento DOM no encontrado para ${comida}`);
    }
  });

  // Función para renderizar alimentos
  function renderizarAlimentos(comidaArray, comidaCard, comidaNombre) {
    comidaCard.innerHTML = ''; // Limpiar contenido existente
    comidaArray.forEach(alimento => {
      const alimentoDiv = document.createElement('div');
      alimentoDiv.className = 'alimentos';
      alimentoDiv.innerHTML = `
        <div class="alimentos-info">
          <h5 class="alimento-nam"><span>Nombre: </span>${alimento.nombre}</h5>
          <h5 class="alimentos-cal"><span>Calorias:</span>${alimento.calorias}</h5>
          <h5 class="alimentos-carb"><span>Carbohidratos:</span>${alimento.carbohidratos}</h5>
          <h5 class="alimentos-prot"><span>Proteinas:</span>${alimento.proteinas}</h5>
          <h5 class="alimentos-fat"><span>Grasas:</span>${alimento.grasas}</h5>
        </div>
        <button id="${comidaNombre}-${alimento.id}" class="borrar-btn"><i class="fa-regular fa-x"></i></button>
      `;
      comidaCard.appendChild(alimentoDiv);
    });

    // Asociar eventos de eliminación después de renderizar
    comidaCard.querySelectorAll('.borrar-btn').forEach(boton => {
      boton.addEventListener('click', (e) => {
        e.preventDefault();
        const alimentoId = boton.id.replace(`${comidaNombre}-`, '');
        borrarAlimento(comidasArray[comidaNombre], comidaCard, comidaNombre, alimentoId);
      });
    });
  }

  // Función para borrar alimento
  function borrarAlimento(comidaArray, comidaCard, comidaNombre, alimentoId) {
    const index = comidaArray.findIndex(alimento => alimento.id == alimentoId);
    if (index > -1) {
      comidaArray.splice(index, 1); // Eliminar alimento del array
      almacenarStorage(comidaNombre); // Actualizar almacenamiento
      renderizarAlimentos(comidaArray, comidaCard, comidaNombre); // Volver a renderizar
    }
  }

  // Función para almacenar datos en localStorage
  function almacenarStorage(comida) {
    localStorage.setItem(comida, JSON.stringify(comidasArray[comida]));
    console.log(`Datos guardados exitosamente en ${comida}`);
  }

  // Renderizar alimentos de todas las comidas al cargar la página
  Object.keys(comidasArray).forEach(comida => {
    const storageComida = localStorage.getItem(comida);
    if (storageComida) {
      comidasArray[comida] = JSON.parse(storageComida);
      renderizarAlimentos(comidasArray[comida], comidasCard[comida], comida);
      
    }
  });

  console.log(comidasArray.desayuno)




  //SUBTOTALES MACROS 
  function contabilizarMacrosSubTotales(comidaNombre) { //funcion que busca mostar las macros de cada comida
    return comidasArray[comidaNombre].reduce((acc, comida) => ({
      calorias: acc.calorias + comida.calorias,
      proteinas: parseFloat((acc.proteinas + comida.proteinas).toFixed(1)),
      carbohidratos: parseFloat((acc.carbohidratos + comida.carbohidratos).toFixed(1)),
      grasas: parseFloat((acc.grasas + comida.grasas).toFixed(1))
    }), { calorias: 0, proteinas: 0, carbohidratos: 0, grasas: 0 });
  }
  
  const comidas = ['desayuno', 'almuerzo', 'snack', 'cena'];
  
  function calcularSubtotales() {
    return comidas.reduce((acc, comida) => {
      acc[comida] = contabilizarMacrosSubTotales(comida);
      return acc;
    }, {});
  }
  
  const subtotales = calcularSubtotales();
  console.log('subtotales:');
  console.log(subtotales);
  
  function actualizarSubtotales(subtotales) {
    comidas.forEach(comida => {
      const subtotal = subtotales[comida];
  
      // Seleccionamos el contenedor de subtotales de la comida actual
      const subtotalContainer = document.querySelector(`#${comida}_card .subtotal`);
  
      if (subtotalContainer) {
        // Actualizamos los valores de los subtotales en el DOM
        subtotalContainer.querySelector('.sub-cal').innerHTML = `<span>Calorias:</span> ${subtotal.calorias}`;
        subtotalContainer.querySelector('.sub-carb').innerHTML = `<span>Carbohidratos:</span> ${subtotal.carbohidratos}`;
        subtotalContainer.querySelector('.sub-prot').innerHTML = `<span>Proteinas:</span> ${subtotal.proteinas}`;
        subtotalContainer.querySelector('.sub-fat').innerHTML = `<span>Grasas:</span> ${subtotal.grasas}`;
      }
    });
  }
  
  actualizarSubtotales(subtotales);
  



  //TOTALES MACROS


  // REFLEJAR CALORIAS DEL DIA

  //elementos del dom
const caloriasConsumidasDom=document.getElementById('cal-consumidas');
const caloriasTotalesDom= document.getElementById('cal-totales');
const caloriasRestantesDom=document.getElementById('cal-restantes');



//elementos del local storage
const maxCal=localStorage.getItem('max-cal');
const minCal=localStorage.getItem('min-cal');
console.log(`Tus calorias minimas recomendadas son: ${minCal}kcal. Tus calorias maximas recomendadas son: ${maxCal}kcal.`);
let caloriasElegidasUsuario= localStorage.getItem('calorias-elegidas');
console.log(`Sus calorias elegidas diarias son: ${caloriasElegidasUsuario}`);




//funciones
function modificarCalorias(){
  const modificarCal=document.getElementById('modificar_cal');
  modificarCal.addEventListener('click',()=>{
    
    Swal.fire({
      title: "Cuantas Calorias Diarias deseas consumir?",
      icon: "question",
      input: "range",
      
      inputLabel: "Calorias Diarias Deseadas",
      inputAttributes: {
        min: minCal,
        max: maxCal,
        step: "100"
      },
      inputValue: maxCal
    }).then((result)=>{
      if(result.isConfirmed){
        const caloriasElegidasUsuario=result.value;
        localStorage.setItem('calorias-elegidas',caloriasElegidasUsuario);
        // funcionCallBack(caloriasElegidasUsuario);
        
      }
    });
  });
}
modificarCalorias();


let caloriasTotalesDiarias= caloriasElegidasUsuario? caloriasElegidasUsuario:maxCal; //calorias diarias
caloriasTotalesDom.innerHTML=caloriasTotalesDiarias;
console.log(caloriasTotalesDiarias);



function mostrarMacros(caloriasTotales,totalProteinas,totalCarbohidratos,totalGrasas){
  let caloriasConsumidas= caloriasTotales;
  caloriasConsumidasDom.innerHTML=caloriasConsumidas;
  let proteinasConsumidas=Math.round(totalProteinas);
  let carbohidratosConsumidos=Math.round(totalCarbohidratos);
  let grasasConsumidas=Math.round(totalGrasas);

  console.log(`Total Calorias: ${caloriasConsumidas}`);
  console.log(`Total Carbohidratos: ${carbohidratosConsumidos}`);
  console.log(`Total Poteinas: ${proteinasConsumidas}`);
  console.log(`Total Grasas:${grasasConsumidas}`);
  caloriasRestantes(caloriasConsumidas); 


  //ELEMENTOS DEL DOM
const proteinasDom=document.getElementById('prot-dia');
const carbohidratosDom=document.getElementById('carb-dia');
const grasasDom=document.getElementById('fats-dia');

//LOCALSTORAGE
// distribucion de macros
const porcentajeGrasas=localStorage.getItem('%Grasas');
const porcentajeCarbos=localStorage.getItem('%Carbos');
const porcentajeProteinas=localStorage.getItem('%Proteinas');

const calGrasas= (caloriasTotalesDiarias*porcentajeGrasas/100);
const grGrasas=Math.round(calGrasas/9);
console.log(`Sus grasas a consumir en calorias son:${calGrasas} kcal. Sus grasas a consumir en gramos son ${grGrasas}gr.`);

const calCarbos= (caloriasTotalesDiarias*porcentajeCarbos/100);
const grCarbos=Math.round(calCarbos/4);
console.log(`Sus carbohidratos a consumir en calorias son:${calCarbos} kcal. Sus grasas a consumir en gramos son ${grCarbos}gr.`);

const calProteinas= (caloriasTotalesDiarias*porcentajeProteinas/100);
const grProteinas=Math.round(calProteinas/4);
console.log(`Sus proteinas a consumir en calorias son:${calProteinas} kcal. Sus grasas a consumir en gramos son ${grProteinas}gr.`);

proteinasDom.innerHTML=`${proteinasConsumidas}/${grProteinas} gr`
carbohidratosDom.innerHTML=`${carbohidratosConsumidos}/${grCarbos} gr`
grasasDom.innerHTML=`${grasasConsumidas}/${grGrasas} gr`


}

  function contabilizarMacrosTotales() {
    let totalCalorias = 0;
    let totalProteinas = 0;
    let totalCarbohidratos = 0;
    let totalGrasas = 0;
  
  
    // Iterar sobre cada categoría en comidasArray
    Object.values(comidasArray).forEach(comidaCategoria => {
      comidaCategoria.forEach(comida => {
        const caloriasConsumidas= totalCalorias += Math.round(comida.calorias);
        caloriasConsumidasDom.innerHTML=caloriasConsumidas;
        totalProteinas += Math.round(comida.proteinas*10)/10;
        totalCarbohidratos += Math.round(comida.carbohidratos*10)/10;
        totalGrasas += Math.round(comida.grasas*10)/10;
        return 
      });
    });
    mostrarMacros(totalCalorias,totalProteinas,totalCarbohidratos,totalGrasas)
  }

  contabilizarMacrosTotales();
  
  function caloriasRestantes(caloriasConsumidas){
    const caloriasRestantes= caloriasTotalesDiarias-caloriasConsumidas;
    caloriasRestantesDom.innerHTML=caloriasRestantes;
    console.log(`su calorias restantes hasta ahora son:${caloriasRestantes}`);
  }

  //PESO INICIO- PESO OBJETIVO-PESO ACTUAL
  const pesoInicio= localStorage.getItem('peso');
  const pesoInicioDom=document.getElementById('peso-inicio');
  pesoInicioDom.innerHTML=`
    <h2 >Su Peso de Partida</h2>
    <p>${pesoInicio}</p>`;

  const pesoObjetivo= localStorage.getItem('pesoDeseado');
  const pesoObjetivoDom= document.getElementById('peso-objetivo');
  pesoObjetivoDom.innerHTML=`
  <h2>Su Peso Objetivo</h2>
  <p>${pesoObjetivo}</p>`;
  

  const objetivoPeso= localStorage.getItem('objetivoPeso'); //BAJAR/PERDER/MANTENER


function calcularKilos(){
  let kilos= pesoInicio-pesoObjetivo;
  if(kilos<0){
    return kilos*(-1);
  }else {
    return kilos;
  }
}
const kilosObjetivo= calcularKilos(); //kilos a bajar/aumentar
console.log(`Usted desea ${objetivoPeso} ${kilosObjetivo}kg`);




  //BARRA PROGRESO

  //Elementos del DOM
const barraProgreso = document.getElementById('progress-bar');
const pesoActualDom = document.getElementById('peso-actual-p');
const btnModificarPeso = document.getElementById('modificar-peso');

// Inicializar la barra de progreso
barraProgreso.style.width="0";

//Actualizar Barra Progreso
function actualizarBarra(){
  const objetivoAlcanzado=localStorage.getItem('%kg')||"0%";
  barraProgreso.style.width=objetivoAlcanzado;
  console.log(objetivoAlcanzado)
  modificarColorBarra(objetivoAlcanzado);
  // setTimeout(()=>{
  //   Swal.fire({
  //   title: "Felitaciones!",
  //   text: `Has alcanzado el ${objetivoAlcanzado} de tu peso deseado`,
  //   icon: "success"
  // });},"2000");
  
  }

  // Función para cambiar el color de la barra de progreso
function modificarColorBarra(porcentaje) {
  if (porcentaje < "40%") {
    barraProgreso.style.backgroundColor = "#6e031e"; // Rojo oscuro
  } else if (porcentaje < "70%") {
    barraProgreso.style.backgroundColor = "#c7b729"; // Amarillo
  } else {
    barraProgreso.style.backgroundColor = "#0e740e"; // Verde
  }
}

//Peso Modificado 

function calcularPesoModificado(){
  const kilosModificados=pesoInicio-pesoActual;
  const porcentajeKg=Math.round((kilosModificados/kilosObjetivo)*100);
  console.log(`Usted alcanzo el ${porcentajeKg}% de su objetivo`);
  localStorage.setItem('%kg',porcentajeKg+"%");
  actualizarBarra()

}

  let pesoActual=parseFloat(localStorage.getItem('pesoActual'));
  pesoActualDom.innerHTML=pesoActual;

btnModificarPeso.addEventListener('click',async()=>{
  const{value:peso}=await Swal.fire({
    title: '¿Cuál es su Peso actual?',
    input: 'number',
    inputLabel: 'Seleccione su peso (en kilos)',
    inputAttributes:{ 
      value: pesoInicio,
      min:40,
      max:200,
      step:0.5
    },
    inputValue: pesoActual,
    showCancelButton: true,
      confirmButtonText: 'Ingresar Nuevo Peso',
      cancelButtonText: 'Cancelar'
  });
  if (peso) {
    pesoActual = parseFloat(peso);
    localStorage.setItem('pesoActual', pesoActual);
    pesoActualDom.innerHTML = `${pesoActual} kg`;
    calcularPesoModificado(pesoActual);
  }
});

// Inicializar la barra de progreso al cargar la página
actualizarBarra();

console.log(`Su peso actual es ${pesoActual}kg`);




// SECCION WATER 

//cantidad de agua tomada
let carritoAgua = 0;


console.log(`carrito agua: ${carritoAgua}`);

const btnAddWater = document.querySelectorAll('.add-water'); // llamo todos los botones 
let bottleContainerList = document.querySelectorAll('.bottle-container'); // nodeList 
console.log(bottleContainerList);


// función para llenar botella con agua
function visibilidadBotella(btn) { 
  const bottleContainer = btn.closest('.bottle-container');
  bottleContainer.classList.add('active');
  const bottle = bottleContainer.querySelector('.bottle'); 
  bottle.classList.toggle('hidden'); // agrego
  const bottleFull = bottleContainer.querySelector('.bottle-full'); 
  bottleFull.classList.toggle('hidden'); // elimino
  carritoAgua++;
  console.log(`se agregó una nueva botella al carrito, su carrito de agua es: ${carritoAgua}`);
  setTimeout(agregarBotella(), 1000);
  calcularAgua(bottle);
}

// crear nueva botella vacía
function agregarBotella(option) {
  if (carritoAgua < 5) {
    const sectionWater = document.getElementById('water');
    const bottleContainer = document.createElement('div');
    bottleContainer.classList.add('bottle-container', 'inactive');
    if(option=="glass"){
      bottleContainer.innerHTML = `
      <img class="bottle empty" src="../extras/glass.png" alt="">
      <img class="bottle bottle-full hidden" src="../extras/glass-of-water.png" alt="">
      <button class="add-water"><i class="fa-solid fa-circle-plus"></i></button>
    `;

    }else {
      bottleContainer.innerHTML = `
      <img class="bottle empty" src="../extras/water.png" alt="">
      <img class="bottle bottle-full hidden" src="../extras/water1.png" alt="">
      <button class="add-water"><i class="fa-solid fa-circle-plus"></i></button>
    `;
    }

    sectionWater.appendChild(bottleContainer);
  
    // evento click al nuevo botón
    const newBtnAddWater = bottleContainer.querySelector('.add-water');
    newBtnAddWater.addEventListener('click', () => {
      visibilidadBotella(newBtnAddWater); // función de visibilidad al nuevo botón
      setTimeout(activarBotellaSiguiente, 500);
    });

    // actualizar la lista de contenedores
    bottleContainerList = document.querySelectorAll('.bottle-container');
    console.log(bottleContainerList);
  } else {
    console.log("Ha alcanzado el máximo de agua en el día");
  }
}

function activarBotellaSiguiente() {
  // actualizar la lista de contenedores
  bottleContainerList = document.querySelectorAll('.bottle-container');

  for (let i = 0; i < bottleContainerList.length; i++) {
    if (bottleContainerList[i].classList.contains('active')) {
      if (bottleContainerList[i + 1] && bottleContainerList[i + 1].classList.contains('inactive')) { // verificar que el siguiente elemento existe y está inactivo
        bottleContainerList[i + 1].classList.remove('inactive');
        break;
      }
    }
  }
}

// agregar eventos a los botones existentes
btnAddWater.forEach((btn) => {
  btn.addEventListener('click', () => {
    visibilidadBotella(btn);
    setTimeout(activarBotellaSiguiente, 500);
  });
});







const contadorAgua=document.getElementById('contador-agua');
let mlAgua;
function calcularAgua(recipiente){
  if(recipiente=="bottle"){
    mlAgua=carritoAgua*0.5
  }else{
    mlAgua=carritoAgua*0.25
  }
  contadorAgua.innerHTML=`${mlAgua} ml`;
}





//OPTION WATER
const btnBottle= document.getElementById('bottle-opt');
const btnGlass=document.getElementById('glass-opt');
btnBottle.addEventListener('click', () => visibilidadContainer(btnBottle, btnGlass,'bottle' ));
btnGlass.addEventListener('click', () => visibilidadContainer(btnGlass, btnBottle,'glass'));

const containerBottle=document.getElementById('bottle');
const containerGlass=document.getElementById('glass');


function visibilidadContainer(activeBtn, inactiveBtn,option){

  const activeOptContainer = activeBtn.closest('.option-container');
  const inactiveOptContainer = inactiveBtn.closest('.option-container');

  //activar contenedor seleccionado
  activeOptContainer.classList.add('active');
  activeOptContainer.classList.remove('inactive');
  const activeEmpty=activeOptContainer.querySelector('.empty');
  const activeFull=activeOptContainer.querySelector('.bottle-full');
  activeEmpty.classList.add('hidden');
  activeFull.classList.remove('hidden');


  //desactivar contenedor no seleccionado
  inactiveOptContainer.classList.remove('active');
  inactiveOptContainer.classList.add('inactive');
  const inactiveEmpty = inactiveOptContainer.querySelector('.empty');
  const inactiveFull = inactiveOptContainer.querySelector('.bottle-full');
  inactiveEmpty.classList.remove('hidden');
  inactiveFull.classList.add('hidden');
  cambiarContenedor(option)
}

function cambiarContenedor(option){
  const sectionWater=document.getElementById('water');
  const containerEmpty= sectionWater.querySelectorAll('.empty');
  const containerFull=sectionWater.querySelectorAll('.bottle-full');
  
  if(option=="glass"){

    containerEmpty.forEach((container=>{
      container.src='../extras/glass.png';
    }));
    
    containerFull.forEach((container=>{
      container.src='../extras/glass-of-water.png';
    }))
  }else{
    containerEmpty.forEach((container=>{
      container.src='../extras/water.png';
    }));
    containerFull.forEach((container=>{
      container.src='../extras/water1.png';
    }))
  }
  agregarBotella(option)
}


// const contadorRecipiente=document.getElementById('contador-recipiente');
// const recipiente=document.getElementById('recipiente');





})



























