const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.nav__link')

const navDesktop = document.querySelector('.nav__desktop')
const logo = document.querySelector('.heading__logo')

const allSections = document.querySelectorAll('.section')

const analysisOpenBtn = document.querySelector('.offer__about-offer-open-btn')
const analysisCloseBtn = document.querySelector('.offer__about-offer-close-btn')
const analysisPopup = document.querySelector('.offer__about-offer')

const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
    navMobile.classList.toggle('nav__list--active')
    navBtn.classList.toggle('is-active');
    document.body.classList.toggle("stop-scrolling");
    
    navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__list--active')
            navBtn.classList.remove('is-active');
            document.body.classList.remove("stop-scrolling");
            analysisPopup.classList.remove('offer__about-offer--active')

		})})
}

// const hideNav = () => {
//     if (window.scrollY >=100 && window.innerWidth>992) {
//         navDesktop.style.height = '60px'
//         navDesktop.style.lineHeight = '60px'
//         navDesktop.style.fontSize = '1.2rem'
//         logo.style.scale = 0.8
//         logo.style.top = '5px'
//     } 
//     else {
//         navDesktop.style.height = '80px'
//         navDesktop.style.lineHeight = '80px'
//         navDesktop.style.fontSize = '1.5rem'
//         logo.style.scale = 1
//         logo.style.top = '15px'
//     }
// }

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
    analysisPopup.classList.add('offer__about-offer--active')
}
const handleAnalysisHide = () => {
    analysisPopup.classList.remove('offer__about-offer--active')
}

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}

handleCurrentYear()

navBtn.addEventListener('click', handleNav)
analysisOpenBtn.addEventListener('click', handleAnalysisShow)
analysisCloseBtn.addEventListener('click', handleAnalysisHide)

// window.addEventListener('scroll', hideNav)
// window.addEventListener('scroll', handleObserver)