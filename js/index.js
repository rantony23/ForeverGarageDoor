
// Agrega el evento mouseover a cada elemento .nav-item
document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener("mouseover", function() {
        // Muestra el menú desplegable correspondiente al elemento .nav-item
        this.querySelector('.dropdown-menu').classList.add('show');
    });
});

// Agrega el evento mouseleave a cada elemento .nav-item
document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener("mouseleave", function() {
        // Oculta el menú desplegable correspondiente al elemento .nav-item
        this.querySelector('.dropdown-menu').classList.remove('show');
    });
});

document.querySelectorAll('.nav-item').forEach(function(item) {
    // Alterna la visibilidad del menú desplegable al hacer clic en el elemento .nav-item
    item.addEventListener("click", function(event) {
        // Evita que el clic en el menú desplegable cierre el menú inmediatamente
        event.stopPropagation();
        
        // Encuentra el menú desplegable correspondiente al elemento .nav-item
        let dropdownMenu = this.querySelector('.dropdown-menu');
        
        // Alterna la clase 'show' para mostrar u ocultar el menú desplegable
        dropdownMenu.classList.toggle('show');
    });
});

// Cierra cualquier menú desplegable abierto al hacer clic en cualquier parte del documento
document.addEventListener("click", function() {
    // Encuentra todos los menús desplegables
    document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
        // Remueve la clase 'show' de cada menú desplegable
        menu.classList.remove('show');
    });
});