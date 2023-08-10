let numero = document.getElementById("numeroTabla");
let tablaMultiplicar = document.getElementById("tablaMultiplicar");
let error = document.getElementById("error");

function mostrarTabla() {
  let numeroEntero = parseInt(numero.value);

  if (numeroEntero < 1 || numeroEntero > 10 || isNaN(numeroEntero)) {
    error.textContent = "Por favor ingresar un numero entre 1 y 10.";
    error.style.color = "red";
    return;
  } else {
    error.textContent = "";
  }

  let tablaHTML = numeroEntero;

  tablaMultiplicar.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    let resultado = numeroEntero * i;
    let listItem = document.createElement("li");
    listItem.textContent = `${tablaHTML} x ${i} = ${resultado}`;
    tablaMultiplicar.appendChild(listItem);
  }
}
