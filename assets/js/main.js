// Cambiar header al hacer scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-small");
  } else {
    header.classList.remove("header-small");
  }
});

/*-----------------Manejo del MODAL------------------------------------------ */

function toggleInfo(button) {
  const screenWidth = window.innerWidth; // Detectar ancho de pantalla
  const infoBox = button.nextElementSibling; // El siguiente elemento (info-box)

  if (screenWidth > 600) {
    // Comportamiento para pantallas grandes: modal
    const modalOverlay = document.querySelector("#modal-overlay");
    const modalContent = document.querySelector("#modal-info-content");

    // Llenar el contenido del modal
    modalContent.innerHTML = infoBox.innerHTML;

    // Mostrar el modal
    modalOverlay.classList.add("active");

    // Agregar listener para cerrar con Esc
    document.addEventListener("keydown", handleEscKey);
  } else {
    // Comportamiento para pantallas pequeñas: acordeón
    if (infoBox.style.display === "block") {
      // Ocultar si ya está abierto
      infoBox.style.display = "none";
    } else {
      // Ocultar otros info-box abiertos (opcional)
      const allInfoBoxes = document.querySelectorAll(".info-box");
      allInfoBoxes.forEach((box) => {
        box.style.display = "none";
      });

      // Mostrar el info-box actual
      infoBox.style.display = "block";
    }
  }
}

function closeModal() {
  const modalOverlay = document.querySelector("#modal-overlay");
  modalOverlay.classList.remove("active");

  // Remover listener de Esc cuando el modal se cierra
  document.removeEventListener("keydown", handleEscKey);
}

function handleEscKey(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// Scroll Suave en los enlaces de navegación
document.querySelectorAll('.a-navbar-top[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }

    // Cerrar menú hamburguesa si está abierto
    closeHamburgerMenu();
  });
});

// Menú Hamburguesa
const menuBtn = document.querySelector(".bars__menu");
const navbar = document.querySelector(".navbar-top");
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("visible");
  document.body.classList.toggle("no-scroll");
});

const line1 = document.querySelector(".line1__bars__menu");
const line2 = document.querySelector(".line2__bars__menu");
const line3 = document.querySelector(".line3__bars__menu");

menuBtn.addEventListener("click", () => {
  line1.classList.toggle("activeline1__bars__menu");
  line2.classList.toggle("activeline2__bars__menu");
  line3.classList.toggle("activeline3__bars__menu");
});

// Función para cerrar el menú hamburguesa
function closeHamburgerMenu() {
  if (navbar.classList.contains("visible")) {
    navbar.classList.remove("visible");
    document.body.classList.remove("no-scroll");

    // Reinicia el ícono del menú hamburguesa
    line1.classList.remove("activeline1__bars__menu");
    line2.classList.remove("activeline2__bars__menu");
    line3.classList.remove("activeline3__bars__menu");
  }
}

function detectOverflow() {
  const elements = document.querySelectorAll("*"); // Selecciona todos los elementos del DOM
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect(); // Obtiene las dimensiones del elemento
    if (rect.width > window.innerWidth) {
      console.log("Overflow detectado:", el); // Muestra en la consola los elementos que generan overflow
      el.classList.add("overflow-element"); // Agrega la clase para resaltarlos
    }
  });
}

// Ejecuta la detección después de que se cargue la página
window.addEventListener("load", detectOverflow);
