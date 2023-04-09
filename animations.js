function toggleMenu() {
    const menu = document.querySelector(".navbar");
    const description = document.querySelector(".description");

    if (menu.classList.contains("nav-open")) {
        menu.classList.remove("nav-open");
        description.classList.remove("description-clicked");
        
    } else {
        menu.classList.add("nav-open");
        description.classList.add("description-clicked");
    }

}