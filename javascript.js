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
  if (isNaN(alturaValid) || alturaValid <= 1 || alturaValid >= 2.5) {
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

  return `Su Índice de Masa Corporal (IMC) es de ${imc.toFixed(2)} y según la Organización Mundial de la Salud (OMS) usted tiene ${categoriaPeso}.`;
}

calcularIMC(peso, altura);
console.log(calcularIMC);
