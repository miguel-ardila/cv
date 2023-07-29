function toggleLanguage() {
    const body = document.body;
    const currentLang = body.getAttribute("lang");
    const newLang = currentLang === "es" ? "en" : "es";
    body.setAttribute("lang", newLang);
}