/*-----------------Simula que se escribe el texto--------------*/

document.addEventListener("DOMContentLoaded", function () {
  const text = "NO LIMITES TUS DESAFÍOS, DESAFIÁ TUS LIMITES CON J&M";
  const typingSpeed = 100; // Velocidad en milisegundos por letra
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  typeWriter();
});

/* ------------------Achica el Header--------------------*/

/*-----------------Sacarle el evento predefinido del a------------ */

function toggleInfo(event) {
  event.preventDefault();
}

/*-----------------Despliegue del +INFO-------------------------- */

function toggleInfo(button) {
  // Encuentra el contenedor de texto al que pertenece el botón clickeado
  const container = button.closest(".container-content-text");
  // Obtiene el contenido de la caja de información
  const infoBox = container.querySelector(".info-box");

  // Clonamos el contenido del info-box y lo colocamos en el modal
  const modalContent = document.getElementById("modal-info-content");
  modalContent.innerHTML = infoBox.innerHTML;

  // Mostramos el modal
  const modalOverlay = document.getElementById("modal-overlay");
  modalOverlay.style.display = "flex"; // Cambia a 'flex' para que se muestre centrado
}

// Función para cerrar el modal
function closeModal() {
  const modalOverlay = document.getElementById("modal-overlay");
  modalOverlay.style.display = "none"; // Oculta el modal
}
