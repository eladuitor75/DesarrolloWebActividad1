// Scripts para funcionalidades avanzadas como validación de formularios, interacciones con el mapa de asientos, etc.
function toggleMenu(categoryId) {
    var menuItems = document.getElementById(categoryId);
    if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
    }
}