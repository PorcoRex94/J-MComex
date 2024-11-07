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

const header = document.getElementById("header");

// Detectar el desplazamiento del usuario
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Cambia el valor según cuándo quieras que el header se achique
    header.classList.add("header-small");
  } else {
    header.classList.remove("header-small");
  }
});

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

/*--------------------SCROLL EN LAS ETIQUETAS A------------------------- */

// Selecciona todos los enlaces de navegación con href que empieza con #
document.querySelectorAll('.a-navbar-top[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Ajusta el valor si quieres un margen superior
        behavior: "smooth", // Hace el scroll suave
      });
    }
  });
});
