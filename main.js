// Función para cambiar el idioma
function toggleLanguage() {
    const body = document.body;
    const currentLang = body.getAttribute("lang");
    const newLang = currentLang === "es" ? "en" : "es";
    body.setAttribute("lang", newLang);

    // Actualizar el contenido de las secciones según el idioma seleccionado
    if (newLang === "es") {
      // Contenido en español
    document.getElementById("contact-info").innerHTML = '<!-- Información de contacto en español -->';
    document.getElementById("experience").innerHTML = '<!-- Experiencia laboral en español -->';
    document.getElementById("education").innerHTML = '<!-- Educación en español -->';
    document.getElementById("skills").innerHTML = '<!-- Habilidades en español -->';
    } else {
      // Contenido en inglés
    document.getElementById("contact-info").innerHTML = '<!-- Información de contacto en inglés -->';
    document.getElementById("experience").innerHTML = '<!-- Experiencia laboral en inglés -->';
    document.getElementById("education").innerHTML = '<!-- Educación en inglés -->';
    document.getElementById("skills").innerHTML = '<!-- Habilidades en inglés -->';
    }
}


console.log("hi! i am miguel! ");