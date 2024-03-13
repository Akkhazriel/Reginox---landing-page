const dropSubmenuNav = document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.nav-menu')
    const menuSubmenu = document.querySelector('.nav-submenu')

    menuBtn.addEventListener('click', () => {
        menuSubmenu.classList.toggle('active')
    })
})

export default dropSubmenuNav