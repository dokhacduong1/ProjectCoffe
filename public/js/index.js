const topMenu = document.querySelector('#ct-top-menu');
const toggleTopMenuIcon = document.querySelector('#ct-toggle-top-menu-icon');

document.addEventListener('click', (event) => {
    if (toggleTopMenuIcon.contains(event.target) || topMenu.classList.contains('ct-topmenu-expanded')) {
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-topmenu-expanded');
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && topMenu.classList.contains("ct-topmenu-expanded")) {
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-topmenu-expanded');
    }
});