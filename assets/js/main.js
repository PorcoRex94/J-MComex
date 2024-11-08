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

// Función para alternar el modal con información
function toggleInfo(button) {
  // Encuentra el contenedor de texto al que pertenece el botón clickeado
  const container = button.closest(".container-content-text");
  // Obtiene el contenido de la caja de información
  const infoBox = container.querySelector(".info-box");

  // Clona el contenido del info-box y lo coloca en el modal
  const modalContent = document.getElementById("modal-info-content");
  modalContent.innerHTML = infoBox.innerHTML;

  // Muestra el modal
  const modalOverlay = document.getElementById("modal-overlay");
  modalOverlay.style.display = "flex"; // Cambia a 'flex' para que se muestre centrado

  // Agrega el listener para cerrar con la tecla ESC
  document.addEventListener("keydown", handleEscKey);
}

// Función para cerrar el modal
function closeModal() {
  const modalOverlay = document.getElementById("modal-overlay");
  modalOverlay.style.display = "none"; // Oculta el modal

  // Remueve el listener de la tecla ESC cuando se cierra el modal
  document.removeEventListener("keydown", handleEscKey);
}

// Función para manejar la tecla ESC y cerrar el modal
function handleEscKey(event) {
  if (event.key === "Escape") {
    // Comprueba si la tecla presionada es ESC
    closeModal(); // Llama a la función para cerrar el modal
  }
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

/*----------------------ICONO DE WSP----------------------------------- */

// Seleccionamos el icono de WhatsApp
const whatsappIcon = document.getElementById("whatsapp-icon");

// Detectamos el scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Puedes ajustar el valor de 200 según prefieras
    whatsappIcon.classList.add("visible"); // Muestra el ícono
  } else {
    whatsappIcon.classList.remove("visible"); // Oculta el ícono
  }
});
