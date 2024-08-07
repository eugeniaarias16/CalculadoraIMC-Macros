//AYUNO
let horasAyuno=12; //horas por defecto
function countDown(fechaFin){
    let ahora = new Date();
    let tiempoFaltanteMs = fechaFin - ahora; // tiempo faltante en milisegundos
    
    if(tiempoFaltanteMs<0){
        tiempoFaltanteMs=0;
    }
    
    let horas = Math.floor(tiempoFaltanteMs / (1000 * 60 * 60));
    let minutos = Math.floor((tiempoFaltanteMs % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tiempoFaltanteMs % (1000 * 60)) / 1000);
    if(segundos<10){
        segundos="0"+segundos
    }
    console.log(`Faltan ${horas} horas y ${minutos} minutos para terminar su ayuno`);

    const horasDom=document.getElementById('horas');
    horasDom.innerHTML=horas;
    const minutosDom=document.getElementById('minutos');
    minutosDom.innerHTML=minutos;
    const segundosDom=document.getElementById('segundos');
    segundosDom.innerHTML=segundos;
}

function calcularHoraFin(inicio,horasAyuno){
    const inicioAyunoMs=inicio.getTime(); //inicio de ayuno en milisegundos
    const milisegundosXHora= 60 * 60 * 1000;
    const finAyunoMs= inicioAyunoMs + (milisegundosXHora*horasAyuno);
    return new Date(finAyunoMs);
}




// ELEMENTOS DEL DOM

const btnInicioAyuno= document.getElementById('btn-inicio');
const btnFinAyuno= document.getElementById('btn-fin');
const inicioAyunoDom = document.getElementById('inicio-ayuno');
const finAyunoDom= document.getElementById('fin-ayuno');

let inicioAyunoFecha=[];
let finAyunoFecha=[];


class Fecha{
    constructor(diaSemana,diaNum,horas,minutos){
        this.diaSemana=diaSemana;
        this.diaNum=diaNum;
        this.horas=horas;
        this.minutos=minutos;
    }

}

function almacenarInfoAyuno(key,ayunoFecha,elementoDom){
    let diaSemana = localStorage.getItem(`${key}-diaSemana`);
    let diaNum = localStorage.getItem(`${key}-diaNum`);
    let horas = localStorage.getItem(`${key}-horas`);
    let minutos = localStorage.getItem(`${key}-minutos`);

let fecha= new Fecha(diaSemana,diaNum,horas,minutos)
ayunoFecha.push(fecha);
console.log(ayunoFecha);

elementoDom.innerHTML = `${fecha.diaSemana} ${fecha.diaNum}, a las ${fecha.horas}:${fecha.minutos}.`;
}


function formatearFecha(fecha,key,ayunoFecha,elementoDom){
    const DIAS=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
        let diaSemana= DIAS[fecha.getDay()];
        let diaNum=fecha.getDate();
        if(diaNum<10){
            diaNum="0"+diaNum;
        }
        let horas= fecha.getHours();
        if(horas<10){
            horas="0"+horas;
        }
        let minutos= fecha.getMinutes()
        
        if(minutos<10){
            minutos="0"+minutos;
        }else {
            minutos= minutos;
        }
        localStorage.setItem(`${key}-diaSemana`, diaSemana);
        localStorage.setItem(`${key}-diaNum`, diaNum);
        localStorage.setItem(`${key}-horas`, horas);
        localStorage.setItem(`${key}-minutos`, minutos);
    almacenarInfoAyuno(key,ayunoFecha,elementoDom)
    }


    btnInicioAyuno.addEventListener('click', (e) => {
    e.preventDefault();
        let inicioAyuno = new Date();
    console.log(inicioAyuno); 
    formatearFecha(inicioAyuno,"ayunoInicio",inicioAyunoFecha,inicioAyunoDom);
    let finAyuno = calcularHoraFin(inicioAyuno, horasAyuno);
    formatearFecha(finAyuno, "ayunoFin", finAyunoFecha, finAyunoDom);
    
    setInterval(()=>countDown(finAyuno),1000);
});

//ELEGIR PROTOCOLO DE AYUNO

async function elegirProtocoloAyuno(){
    const {value:horas}= await Swal.fire({
        title:"Elija su protocolo",
        input:"select",
        background:"#243036",
        color: "#FCA311",
        inputOptions:{
            12 :"12/12",
            14: "14/10",
            16: "16/8",
            18:"18/6",
            20:"20/4"
        },
        inputPlaceholder:"Elija su protocolo",
        showCancelButton: true,
        inputValidator: (value) =>{
            if (!value){
                return "Debes elegir una opcion";
            }
        }
    });
    if(horas){
        horasAyuno = Number(horas);
    }
}


let btnProtocolo=document.getElementById('btn-protocolo');
btnProtocolo.addEventListener('click', () => {
    elegirProtocoloAyuno().then(() => {
        console.log("Protocolo de ayuno elegido:", horasAyuno);
        let valueBtn;
        switch(horasAyuno){
            case 12:
                valueBtn="12/12";
                break;
            case 14:
                valueBtn="14/10";
                break;
            case 16:
                valueBtn="16/8";
                break;    
            case 18:
                valueBtn="18/6";
                break;    
            case 20:
                valueBtn="20/4";
                break;    
        };
    btnProtocolo.innerHTML=valueBtn? valueBtn:"12/12";    
    });
});

const btnHome=document.getElementById('home');
btnHome.addEventListener('click', ()=>window.location.href='../pages/pages5.html')




