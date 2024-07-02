function validarDatos(objetivoKilos, objetivoPeso, nivelActividad) {
  if (!isNaN(objetivoKilos) && objetivoKilos < 100 && objetivoKilos > 40) {
    localStorage.setItem("objetivoPeso", objetivoPeso);
    localStorage.setItem("pesoDeseado", objetivoKilos);
    localStorage.setItem("nivelActividad", nivelActividad);
    console.log(
    `Usted desea ${objetivoPeso} peso y alcanzar un peso de ${objetivoKilos}kg.`
    );
    window.location.href = "/pages/pages4.html";
  } else {
    alert("Ingrese un peso deseado válido, mayor que 40 y menor que 100");
  }
}

const BTN_CALCULAR_CALORIAS = document.getElementById("btnCalcularCalorias");
BTN_CALCULAR_CALORIAS.addEventListener("click", () => {
  const OBJETIVO_PESO = document.getElementById("objetivoPeso").value;
  console.log(`Su objetivo es: ${OBJETIVO_PESO} de Peso`);

  const OBJETIVO_KILOS = document.getElementById("objetivoKilos").value;
  console.log(OBJETIVO_KILOS);

  const NIVEL_ACTIVIDAD = document.getElementById("nivelActividad").value;
  console.log(NIVEL_ACTIVIDAD);

  validarDatos(OBJETIVO_KILOS, OBJETIVO_PESO, NIVEL_ACTIVIDAD);
});

