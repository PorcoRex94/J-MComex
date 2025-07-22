/*----------------ACHICAR HEADER-------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-small");
    } else {
      header.classList.remove("header-small");
    }
  });
});

/*-----------------------------FORMULARIO------------------------------ */

// Inicializa EmailJS con tu Public Key (esto debe suceder antes de enviar correos)
document.addEventListener("DOMContentLoaded", function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init("nGzlrbekCz3NXzSGy");
  } else {
    console.error("EmailJS no está cargado. Revisa la importación en tu HTML.");
  }
});

// Captura el formulario por su ID y gestiona el envío
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío por defecto

      // Recoger los datos del formulario
      const templateParams = {
        userName: document.getElementById("name").value,
        sureName: document.getElementById("sureName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      if (
        !templateParams.userName ||
        !templateParams.sureName ||
        !templateParams.phone ||
        !templateParams.email ||
        !templateParams.message
      ) {
        alert("Por favor, completa todos los campos.");
        return; // Detener la ejecución si hay campos vacíos
      }

      // Enviar el correo usando EmailJS
      emailjs
        .send("service_wnmsoi4", "template_tpzf9ja", templateParams)
        .then(function (response) {
          alert("Formulario enviado correctamente: " + response.status);
          form.reset();
        })
        .catch(function (error) {
          console.error("Error al enviar el formulario:", error);
          alert(
            "Ocurrió un error al enviar el formulario. Detalles en consola."
          );
        });
    });
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

document.addEventListener("DOMContentLoaded", function () {
  const whatsappNumber = "5491140256307"; // Número en formato internacional
  const whatsappLink = document.getElementById("whatsapp-icon");

  if (whatsappLink) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      whatsappLink.href = `https://wa.me/${whatsappNumber}`;
    } else {
      whatsappLink.href = `https://web.whatsapp.com/send?phone=${whatsappNumber}`;
    }
  } else {
    console.error("No se encontró el botón de WhatsApp.");
  }
});
