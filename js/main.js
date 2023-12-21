const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile')
const navItems = document.querySelectorAll('.nav__item')

const navDesktop = document.querySelector('.nav__desktop')
const logo = document.querySelector('.header__heading--logo')

const allSections = document.querySelectorAll('.section')

const analysisOpenBtn = document.querySelector('.offer__about-open-btn')
const analysisCloseBtn = document.querySelector('.offer__about-close-btn')
const analysisPopup = document.querySelector('.offer__about')

const handleNav = () => {
    navMobile.classList.toggle('nav__mobile--active')
    navBtn.classList.toggle('is-active');
    navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__mobile--active')
            navBtn.classList.remove('is-active');
            analysisPopup.classList.remove('offer__about--active')
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

// const handleObserver = () => {
// 	const currentSection = window.scrollY

// 	allSections.forEach(section => {
// 		if  (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
// 			navBtnBars.classList.add('black-bars-color')
// 			} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
// 				navBtnBars.classList.remove('black-bars-color')
// 			}
// 	})
// }

const handleAnalysisShow = () => {
    analysisPopup.classList.add('offer__about--active')
}
const handleAnalysisHide = () => {
    analysisPopup.classList.remove('offer__about--active')
}

navBtn.addEventListener('click', handleNav)
analysisOpenBtn.addEventListener('click', handleAnalysisShow)
analysisCloseBtn.addEventListener('click', handleAnalysisHide)

// window.addEventListener('scroll', handleObserver)
window.addEventListener('scroll', hideNav)