const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.nav__link')

const bannerNavActive = document.querySelector('.banner')
const aboutMeNavActive = document.querySelector('.about-me')

// const analysisOpenBtn = document.querySelector('.offer__about-offer-open-btn')
// const analysisCloseBtn = document.querySelector('.offer__about-offer-close-btn')
// const analysisPopup = document.querySelector('.offer__about-offer')

const footerYear = document.querySelector('.footer__year')

let nameInput = document.querySelector('#name').value
let emailInput = document.querySelector('#email').value
let msgInput = document.querySelector('#msg').value

const testuje = 'Tomek'

// export {nameInput, emailInput, msgInput}
export {testuje}



const handleNav = () => {
    navMobile.classList.toggle('nav__list--active')
    navBtn.classList.toggle('is-active');
    bannerNavActive.classList.toggle('banner--nav-active')
    aboutMeNavActive.classList.toggle('about-me--nav-active')
    document.body.classList.toggle('stop-scrolling');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    
    navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__list--active')
            navBtn.classList.remove('is-active');
            bannerNavActive.classList.remove('banner--nav-active')
            aboutMeNavActive.classList.remove('about-me--nav-active')
            analysisPopup.classList.remove('offer__about-offer--active')
            document.body.classList.remove('stop-scrolling');
		})})
}

// const handleAnalysisShow = () => {
//     analysisPopup.classList.add('offer__about-offer--active')
// }
// const handleAnalysisHide = () => {
//     analysisPopup.classList.remove('offer__about-offer--active')
// }

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}

handleCurrentYear()

navBtn.addEventListener('click', handleNav)
// analysisOpenBtn.addEventListener('click', handleAnalysisShow)
// analysisCloseBtn.addEventListener('click', handleAnalysisHide)
