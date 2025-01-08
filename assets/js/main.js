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

/*----------------------Menu Hamburguesa-------------------------------- */

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars__menu");
var line2__bars = document.querySelector(".line2__bars__menu");
var line3__bars = document.querySelector(".line3__bars__menu");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars__menu");
  line2__bars.classList.toggle("activeline2__bars__menu");
  line3__bars.classList.toggle("activeline3__bars__menu");
}

/*---------------------------Mostrar el Menu responsive--------------------*/

// Selección de elementos
const menuBtn = document.querySelector(".bars__menu");
const navbar = document.querySelector(".navbar-top");
const body = document.body;

// Selecciona todos los enlaces del navbar
document.querySelectorAll('.a-navbar-top[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto

    const targetId = link.getAttribute("href").substring(1); // Quita el #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      console.log(`Desplazándose a: ${targetId}`);

      // Cierra el menú si está en modo responsivo
      if (navbar.classList.contains("visible")) {
        navbar.classList.remove("visible");
        body.classList.remove("no-scroll");
      }
    } else {
      console.error(`Elemento no encontrado: ${targetId}`);
    }
  });
});

// Abrir/cerrar el menú de hamburguesa
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("visible");
  body.classList.toggle("no-scroll");
});

/*-------------------Centrar los modales en movil--------------------------- */

function toggleInfo(button) {
  const infoBox = button.nextElementSibling; // Modal relacionado
  const overlay = document.querySelector(".modal-overlay");

  // Verificar si el modal ya está visible
  const isVisible = infoBox.classList.contains("active");

  // Cerrar todos los modales abiertos
  document
    .querySelectorAll(".info-box")
    .forEach((box) => box.classList.remove("active"));
  overlay.classList.remove("active");

  // Si el modal no estaba visible, abrirlo
  if (!isVisible) {
    // Activar el modal
    infoBox.classList.add("active");
    overlay.classList.add("active");

    // Asegurarse de que el modal aparezca justo debajo del botón
    const buttonRect = button.getBoundingClientRect();
    const infoBoxRect = infoBox.getBoundingClientRect();

    infoBox.style.top = `${window.scrollY + buttonRect.bottom}px`;
    infoBox.style.left = `${buttonRect.left}px`;
  }
}

// Cerrar modales al hacer clic en el overlay
document.querySelector(".modal-overlay").addEventListener("click", () => {
  document
    .querySelectorAll(".info-box")
    .forEach((box) => box.classList.remove("active"));
  document.querySelector(".modal-overlay").classList.remove("active");
});
