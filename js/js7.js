//LOCALSTORAGE
        // Obtener valores de localStorage
        const peso = localStorage.getItem('peso') || 'No definido';
        const genero = localStorage.getItem('genero') || 'No definido';
        const altura = localStorage.getItem('altura') || 'No definida';
        const nivelActividad = localStorage.getItem('nivelActividad') || 'No definido';
        const pesoDeseado = localStorage.getItem('pesoDeseado') || 'No definido';
        const tipoDietaResultado = localStorage.getItem('tipoDietaResultado') || 'No definida';
        const edad = localStorage.getItem('edad') || 'No definida';
        const nombre = localStorage.getItem('nombre') || 'No definida';
        const objetivoPeso = localStorage.getItem('objetivoPeso') || 'No definida';
        

        // Asignar valores a elementos del DOM
        document.getElementById('peso-info').innerHTML = peso;
        document.getElementById('sexo-info').innerHTML = genero;
        document.getElementById('altura-info').innerHTML = altura;
        document.getElementById('nivelActv-info').innerHTML = nivelActividad;
        document.getElementById('pesoDeseado-info').innerHTML = pesoDeseado;
        document.getElementById('dieta-info').innerHTML = tipoDietaResultado;
        document.getElementById('nombre-info').innerHTML = nombre;
        document.getElementById('edad-info').innerHTML = edad;
        document.getElementById('objetivoPeso-info').innerHTML = objetivoPeso;


//HOME
const btnHome= document.getElementById('home');
btnHome.addEventListener('click', ()=>window.location.href="/pages/pages5.html")