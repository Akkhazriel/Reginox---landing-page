const mobileSubmenu = document.addEventListener('DOMContentLoaded', () => {
    const navMobileBtn = document.querySelector('.nav-mobile-menu__btn')
    const navMobileMenu = document.querySelector('.nav-mobile__submenu')
    navMobileBtn.addEventListener('click', () => {
        navMobileBtn.classList.toggle('active')
        navMobileMenu.classList.toggle('active')
    })
})

export default mobileSubmenu