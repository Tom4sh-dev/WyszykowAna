const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile')
const navItems = document.querySelectorAll('.nav__item')

const navDesktop = document.querySelector('.nav__desktop')
const logo = document.querySelector('.header__heading--logo')

const handleNav = () => {
    navMobile.classList.toggle('nav__mobile--active')
    navBtn.classList.toggle('is-active');
    navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mobile--active')
            navBtn.classList.remove('is-active');
		})})
}

const hideNav = () => {
    if (window.scrollY >=100 && window.innerWidth>992) {
        navDesktop.style.height = '60px'
        navDesktop.style.lineHeight = '60px'
        navDesktop.style.fontSize = '1.2rem'
        logo.style.scale = 0.8
        logo.style.top = '5px'
    } 
    else {
        navDesktop.style.height = '80px'
        navDesktop.style.lineHeight = '80px'
        navDesktop.style.fontSize = '1.5rem'
        logo.style.scale = 1
        logo.style.top = '15px'
    }
}

// function addShadow() {
//     if (window.scrollY >= 100) {
//         nav.classList.add('shadow-bg');
//     } else {
//         nav.classList.remove('shadow-bg');
//     }
// }


navBtn.addEventListener('click', handleNav)

window.addEventListener('scroll', hideNav)