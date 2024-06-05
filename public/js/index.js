const topMenu = document.querySelector('#ct-top-menu');
const toggleTopMenuIcon = document.querySelector('#ct-toggle-top-menu-icon');

document.addEventListener('click', (event) => {
    if (toggleTopMenuIcon.contains(event.target) || topMenu.classList.contains('ct-topmenu-expanded')) {
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-topmenu-expanded');
    }
});
 //Lấy kích thước màn hình để ẩn menu khi màn hình lớn hơn 1024px
 
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024 && topMenu.classList.contains("ct-topmenu-expanded")) {
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-topmenu-expanded');
    }
});
