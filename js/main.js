const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.nav__link')

const bannerNavActive = document.querySelector('.banner')
const aboutMeNavActive = document.querySelector('.about-me')

const navDesktop = document.querySelector('.nav__desktop')
const logo = document.querySelector('.heading__logo')

const allSections = document.querySelectorAll('.section')

const analysisOpenBtn = document.querySelector('.offer__about-offer-open-btn')
const analysisCloseBtn = document.querySelector('.offer__about-offer-close-btn')
const analysisPopup = document.querySelector('.offer__about-offer')
let windowHeight


const footerYear = document.querySelector('.footer__year')

const nameInput = document.querySelector('#sender-name')
const emailInput = document.querySelector('#email')
const msgInput = document.querySelector('#msg')
const sendBtn = document.querySelector('.send-btn')
const errorEmail = document.querySelector('.error-email');
const errorName = document.querySelector('.error-name');
const errorMsg = document.querySelector('.error-msg');


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

const handleAnalysisShow = () => {
    analysisPopup.classList.add('offer__about-offer--active')
    windowHeight = window.innerHeight
    if (window.innerHeight > windowHeight+100 || window.innerHeight < windowHeight-100){
        analysisPopup.classList.remove('offer__about-offer--active')
    }
}
const handleAnalysisHide = () => {
    analysisPopup.classList.remove('offer__about-offer--active')
}

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}

// const checkName = () => {
//     if(nameInput.value){
//         errorName.style.visibility = 'hidden'
//     } else {
//         errorName.style.visibility = 'visible'
//     }
// }

// const checkMail = () => {
// 	const re =
// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	if (re.test(emailInput.value)) {
//         errorEmail.style.visibility = 'hidden'
// 	} else if (!emailInput.value){
//         errorEmail.textContent = 'Podaj e-mail...'
// 		errorEmail.style.visibility = 'visible'
// 	} else {
//         errorEmail.textContent = 'E-mail niepoprawny...'
//         errorEmail.style.visibility = 'visible'
//     }
// };

// const checkMsg = () => {
//     if(msgInput.value){
//         errorMsg.style.visibility = 'hidden'
//     } else {
//         errorMsg.style.visibility = 'visible'
//     }
// }

// const sendMsg = () => {
//     if(nameInput.value && emailInput.value && msgInput.value){
//         nameInput.value = ''
//         emailInput.value = ''
//         msgInput.value = ''
//     }
// }


handleCurrentYear()

navBtn.addEventListener('click', handleNav)
analysisOpenBtn.addEventListener('click', handleAnalysisShow)
analysisCloseBtn.addEventListener('click', handleAnalysisHide)
// sendBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     checkName();
//     checkMail();
//     checkMsg();
//     sendMsg()
// })