const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile')


const showNav = () => {
    navMobile.classList.toggle('nav__mobile--active')
    navBtn.classList.toggle('is-active');
}

navBtn.addEventListener('click', showNav)