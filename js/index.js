
//BASE DE DATOS
const alimentos = [
    {
        id: 1,
        nombre: 'Pechuga de Pollo',
        categoria: 'carne',
        marca: '',
        calorias: 160,
        carbohidratos: 0,
        proteinas: 22.9,
        grasas: 1.3,
        cantidad: 100
    },
    {
        id: 2,
        nombre: 'Leche Entera',
        categoria: 'lacteos',
        marca: 'La Serenísima',
        calorias: 61,
        carbohidratos: 4.8,
        proteinas: 3.2,
        grasas: 3.3,
        cantidad: 100
    },
    {
        id: 3,
        nombre: 'Manzana',
        categoria: 'frutas',
        marca: '',
        calorias: 52,
        carbohidratos: 14,
        proteinas: 0.3,
        grasas: 0.2,
        cantidad: 100
    },
    {
        id: 4,
        nombre: 'Espinaca',
        categoria: 'verduras',
        marca: '',
        calorias: 23,
        carbohidratos: 3.6,
        proteinas: 2.9,
        grasas: 0.4,
        cantidad: 100
    },
    {
        id: 5,
        nombre: 'Galletitas Oreo',
        categoria: 'golosinas',
        marca: 'Oreo',
        calorias: 480,
        carbohidratos: 70.8,
        proteinas: 4.7,
        grasas: 20.5,
        cantidad: 100
    },
    {
        id: 6,
        nombre: 'Pan Integral',
        categoria: 'panificación',
        marca: '',
        calorias: 252,
        carbohidratos: 43.3,
        proteinas: 13.4,
        grasas: 4.2,
        cantidad: 100
    },
    {
        id: 7,
        nombre: 'Filete de Res',
        categoria: 'carne',
        marca: '',
        calorias: 250,
        carbohidratos: 0,
        proteinas: 26.1,
        grasas: 15,
        cantidad: 100
    },
    {
        id: 8,
        nombre: 'Queso Cheddar',
        categoria: 'lacteos',
        marca: 'Sancor',
        calorias: 403,
        carbohidratos: 1.3,
        proteinas: 24.9,
        grasas: 33.1,
        cantidad: 100
    },
    {
        id: 9,
        nombre: 'Plátano',
        categoria: 'frutas',
        marca: '',
        calorias: 89,
        carbohidratos: 22.8,
        proteinas: 1.1,
        grasas: 0.3,
        cantidad: 100
    },
    {
        id: 10,
        nombre: 'Zanahoria',
        categoria: 'verduras',
        marca: '',
        calorias: 41,
        carbohidratos: 9.6,
        proteinas: 0.9,
        grasas: 0.2,
        cantidad: 100
    },
    {
        id: 11,
        nombre: 'Chocolate con Leche',
        categoria: 'golosinas',
        marca: 'Cadbury',
        calorias: 535,
        carbohidratos: 59.4,
        proteinas: 7.6,
        grasas: 29.7,
        cantidad: 100
    },
    {
        id: 12,
        nombre: 'Pan Blanco',
        categoria: 'panificación',
        marca: '',
        calorias: 265,
        carbohidratos: 49,
        proteinas: 9,
        grasas: 3.2,
        cantidad: 100
    },
    {
        id: 13,
        nombre: 'Salchicha',
        categoria: 'carne',
        marca: '',
        calorias: 300,
        carbohidratos: 2.8,
        proteinas: 12.6,
        grasas: 27.2,
        cantidad: 100
    },
    {
        id: 14,
        nombre: 'Yogurt Natural',
        categoria: 'lacteos',
        marca: 'Yogurisimo',
        calorias: 61,
        carbohidratos: 4.7,
        proteinas: 3.5,
        grasas: 3.3,
        cantidad: 100
    },
    {
        id: 15,
        nombre: 'Naranja',
        categoria: 'frutas',
        marca: '',
        calorias: 47,
        carbohidratos: 11.8,
        proteinas: 0.9,
        grasas: 0.1,
        cantidad: 100
    },
    {
        id: 16,
        nombre: 'Tomate',
        categoria: 'verduras',
        marca: '',
        calorias: 18,
        carbohidratos: 3.9,
        proteinas: 0.9,
        grasas: 0.2,
        cantidad: 100
    },
    {
        id: 17,
        nombre: 'Caramelo',
        categoria: 'golosinas',
        marca: 'Sugus',
        calorias: 392,
        carbohidratos: 98,
        proteinas: 0,
        grasas: 0,
        cantidad: 100
    },
    {
        id: 18,
        nombre: 'Croissant',
        categoria: 'panificación',
        marca: '',
        calorias: 406,
        carbohidratos: 45.8,
        proteinas: 8.2,
        grasas: 21.2,
        cantidad: 100
    },
    {
        id: 19,
        nombre: 'Chuleta de Cerdo',
        categoria: 'carne',
        marca: '',
        calorias: 231,
        carbohidratos: 0,
        proteinas: 22.3,
        grasas: 15.1,
        cantidad: 100
    },
    {
        id: 20,
        nombre: 'Queso Fresco',
        categoria: 'lacteos',
        marca: 'Tregar',
        calorias: 72,
        carbohidratos: 3.9,
        proteinas: 8.7,
        grasas: 2.4,
        cantidad: 100
    },
    {
        id: 21,
        nombre: 'Pera',
        categoria: 'frutas',
        marca: '',
        calorias: 57,
        carbohidratos: 15.2,
        proteinas: 0.4,
        grasas: 0.1,
        cantidad: 100
    },
    {
        id: 22,
        nombre: 'Lechuga',
        categoria: 'verduras',
        marca: '',
        calorias: 15,
        carbohidratos: 2.9,
        proteinas: 1.4,
        grasas: 0.2,
        cantidad: 100
    },
    {
        id: 23,
        nombre: 'Helado de Vainilla',
        categoria: 'golosinas',
        marca: 'Freddo',
        calorias: 207,
        carbohidratos: 24.5,
        proteinas: 3.5,
        grasas: 10.9,
        cantidad: 100
    },
    {
        id: 24,
        nombre: 'Pan de Molde',
        categoria: 'panificación',
        marca: 'Bimbo',
        calorias: 251,
        carbohidratos: 47.6,
        proteinas: 8.9,
        grasas: 3.2,
        cantidad: 100
    },
    {
        id: 25,
        nombre: 'Milanesa de Pollo',
        categoria: 'carne',
        marca: '',
        calorias: 230,
        carbohidratos: 13,
        proteinas: 20,
        grasas: 10,
        cantidad: 100
    },
    {
        id: 26,
        nombre: 'Queso Parmesano',
        categoria: 'lacteos',
        marca: 'Sancor',
        calorias: 431,
        carbohidratos: 4.1,
        proteinas: 38,
        grasas: 29.3,
        cantidad: 100
    },
    {
        id: 27,
        nombre: 'Fresa',
        categoria: 'frutas',
        marca: '',
        calorias: 32,
        carbohidratos: 7.7,
        proteinas: 0.7,
        grasas: 0.3,
        cantidad: 100
    },
    {
        id: 28,
        nombre: 'Pepino',
        categoria: 'verduras',
        marca: '',
        calorias: 16,
        carbohidratos: 3.6,
        proteinas: 0.7,
        grasas: 0.1,
        cantidad: 100
    },
    {
        id: 29,
        nombre: 'Gomitas',
        categoria: 'golosinas',
        marca: 'Arcor',
        calorias: 350,
        carbohidratos: 85,
        proteinas: 0,
        grasas: 0.1,
        cantidad: 100
    },
    {
        id: 30,
        nombre: 'Muffin',
        categoria: 'panificación',
        marca: '',
        calorias: 296,
        carbohidratos: 46.4,
        proteinas: 4.4,
        grasas: 10.5,
        cantidad: 100
    },
    {
        id: 31,
        nombre: 'Costilla de Cordero',
        categoria: 'carne',
        marca: '',
        calorias: 292,
        carbohidratos: 0,
        proteinas: 24.2,
        grasas: 21.3,
        cantidad: 100
    },
    {
        id: 32,
        nombre: 'Queso Azul',
        categoria: 'lacteos',
        marca: 'Roquefort',
        calorias: 353,
        carbohidratos: 2,
        proteinas: 21.4,
        grasas: 28.7,
        cantidad: 100
    },
    {
        id: 33,
        nombre: 'Uvas',
        categoria: 'frutas',
        marca: '',
        calorias: 69,
        carbohidratos: 18.1,
        proteinas: 0.7,
        grasas: 0.2,
        cantidad: 100
    },
    {
        id: 34,
        nombre: 'Brócoli',
        categoria: 'verduras',
        marca: '',
        calorias: 34,
        carbohidratos: 6.6,
        proteinas: 2.8,
        grasas: 0.4,
        cantidad: 100
    },
    {
        id: 35,
        nombre: 'Chicle',
        categoria: 'golosinas',
        marca: 'Beldent',
        calorias: 360,
        carbohidratos: 87.6,
        proteinas: 0,
        grasas: 0,
        cantidad: 100
    },
    {
        id: 36,
        nombre: 'Bizcocho',
        categoria: 'panificación',
        marca: '',
        calorias: 410,
        carbohidratos: 58.2,
        proteinas: 6.2,
        grasas: 17.8,
        cantidad: 100
    },
    {
        id: 37,
        nombre: 'Chorizo',
        categoria: 'carne',
        marca: '',
        calorias: 346,
        carbohidratos: 1.1,
        proteinas: 14,
        grasas: 31,
        cantidad: 100
    },
    {
        id: 38,
        nombre: 'Leche Descremada',
        categoria: 'lacteos',
        marca: 'La Serenísima',
        calorias: 35,
        carbohidratos: 5,
        proteinas: 3.4,
        grasas: 0.1,
        cantidad: 100
    },
    {
        id: 39,
        nombre: 'Cereza',
        categoria: 'frutas',
        marca: '',
        calorias: 50,
        carbohidratos: 12.2,
        proteinas: 1,
        grasas: 0.3,
        cantidad: 100
    },
    {
        id: 40,
        nombre: 'Coliflor',
        categoria: 'verduras',
        marca: '',
        calorias: 25,
        carbohidratos: 4.9,
        proteinas: 1.9,
        grasas: 0.3,
        cantidad: 100
    },
    {
        id: 41,
        nombre: 'Barrita de Cereal',
        categoria: 'golosinas',
        marca: 'Granola',
        calorias: 410,
        carbohidratos: 73,
        proteinas: 9.5,
        grasas: 10.6,
        cantidad: 100
    },
    {
        id: 42,
        nombre: 'Donut',
        categoria: 'panificación',
        marca: '',
        calorias: 452,
        carbohidratos: 51,
        proteinas: 4.9,
        grasas: 25.4,
        cantidad: 100
    },
    {
        id: 43,
        nombre: 'Jamon Cocido',
        categoria: 'carne',
        marca: '',
        calorias: 145,
        carbohidratos: 1.4,
        proteinas: 20.5,
        grasas: 5.5,
        cantidad: 100
    },
    {
        id: 44,
        nombre: 'Queso Cremoso',
        categoria: 'lacteos',
        marca: 'Tregar',
        calorias: 349,
        carbohidratos: 2.2,
        proteinas: 20.8,
        grasas: 28,
        cantidad: 100
    },
    {
        id: 45,
        nombre: 'Durazno',
        categoria: 'frutas',
        marca: '',
        calorias: 39,
        carbohidratos: 9.5,
        proteinas: 0.9,
        grasas: 0.3,
        cantidad: 100
    },
    {
        id: 46,
        nombre: 'Berenjena',
        categoria: 'verduras',
        marca: '',
        calorias: 25,
        carbohidratos: 5.9,
        proteinas: 1,
        grasas: 0.2,
        cantidad: 100
    },
    {
        id: 47,
        nombre: 'Pastelito',
        categoria: 'golosinas',
        marca: 'Jorgito',
        calorias: 410,
        carbohidratos: 64,
        proteinas: 3.8,
        grasas: 14.4,
        cantidad: 100
    },
    {
        id: 48,
        nombre: 'Medialuna',
        categoria: 'panificación',
        marca: '',
        calorias: 334,
        carbohidratos: 48.1,
        proteinas: 6.2,
        grasas: 13.9,
        cantidad: 100
    },
    {
        id: 49,
        nombre: 'Pavo',
        categoria: 'carne',
        marca: '',
        calorias: 189,
        carbohidratos: 0,
        proteinas: 29.2,
        grasas: 7.3,
        cantidad: 100
    },
    {
        id: 50,
        nombre: 'Queso Ricotta',
        categoria: 'lacteos',
        marca: 'Ilolay',
        calorias: 174,
        carbohidratos: 3.3,
        proteinas: 11.3,
        grasas: 12.8,
        cantidad: 100
    }
];

//SECCIONES DE ALIMENTOS
let verduras= document.getElementById('verduras');
let frutas= document.getElementById('frutas');
let carne= document.getElementById('carne');
let lacteos= document.getElementById('lacteos');
let panificacion= document.getElementById('panificacion');
let golosinas= document.getElementById('golosinas');
let otros= document.getElementById('otros');


// FUNCION 
function sectorizarAlimentos(categoria,HTML){
    switch(categoria){
        case "frutas":
            frutas.innerHTML +=HTML;
            break;
        case "carne":
            carne.innerHTML +=HTML;
            break;
        case "lacteos":
            lacteos.innerHTML +=HTML;
            break;
        case "panificacion":
            panificacion.innerHTML +=HTML;
            break;
        case "verduras":
            verduras.innerHTML +=HTML;
            break;
        case "golosinas":
            golosinas.innerHTML +=HTML;
            break;
        default:
            otros.innerHTML +=HTML;  
    }
}

function renderizarProductos(){
    alimentos.forEach((info)=>{
        const HTML=`
        <div class="card">
                <div class="info-card">
                    <img src="${info.imagen}" alt="${info.nombre}">
                    <h3>${info.nombre}</h3>
                    <h4>${info.categoria}</h4>
                    <p class="calorias">Calorias: <span>${info.calorias}</span></p>
                    <p class="marca">Marca: <span>${info.marca}</span></p>
                    <p class="carbohidratos">Carbohidratos: <span>${info.carbohidratos}</span> </p>
                    <p class="proteinas">Proteinas: <span>${info.proteinas}</span> </p>
                    <p class="grasas">Grasas: <span>${info.grasas}</span> </p>
                    <p class="cantidad">Tamaño porcion: <span>${info.cantidad}</span></p>
                    <a href="#" class="btn btn-primary" marcador="${info.id}"><i class="fa-solid fa-circle-plus"></i></a>
                </div>
                
            </div>
        `;
        sectorizarAlimentos(info.categoria,HTML);
    })
}
renderizarProductos(alimentos);