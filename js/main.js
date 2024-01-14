const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.nav__link')

const bannerSection = document.querySelector('.banner')
const aboutMeSection = document.querySelector('.about-me')
const offerSection = document.querySelector('.offer')
const reviewsSection = document.querySelector('.reviews')
 
const item1 = document.querySelector('.item-1')
const item2 = document.querySelector('.item-2')
const item3 = document.querySelector('.item-3')
const item4 = document.querySelector('.item-4')
const item5 = document.querySelector('.item-5')

const aboutMeHeading = document.querySelector('.about-me__heading')
const aboutMeBlocks = document.querySelector('.about-me__blocks')
const reviewsBlocks = document.querySelector('.reviews__blocks')

const socialMedia = document.querySelector('.social-media')

const offerItemsMove = document.querySelectorAll('.offer__description-item')

const offerScroll = document.querySelector('.about-me__scroll-to-offer')

const contactForm = document.querySelector('.contact__form')
const contactInputs = document.querySelectorAll('.contact__form-input')
const contactTextArea = document.querySelector('.contact__form-textarea')
const sendFormBtn = document.querySelector('.send-btn')
const contactPopup = document.querySelector('.popup')
const closePopupBtn = document.querySelector('.popup__close-btn')

const footerYear = document.querySelector('.footer__year')


const handleNav = () => {
    navMobile.classList.toggle('nav__list--active')
    navBtn.classList.toggle('is-active');
    bannerSection.classList.toggle('banner--nav-active')
    aboutMeSection.classList.toggle('about-me--nav-active')
    document.body.classList.toggle('stop-scrolling');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__list--active')
            navBtn.classList.remove('is-active');
            bannerSection.classList.remove('banner--nav-active')
            aboutMeSection.classList.remove('about-me--nav-active')
            document.body.classList.remove('stop-scrolling');
		})})
}

const scrollAnimations = () => {
    if(window.scrollY >= bannerSection.offsetTop-100) {
        socialMedia.classList.add('social-media--active')
    } 
    if(window.scrollY >= aboutMeSection.offsetTop-500) {
        aboutMeHeading.classList.add('about-me__heading--active')
        aboutMeBlocks.classList.add('about-me__blocks--active')
    } 
    if (window.scrollY >= reviewsSection.offsetTop-500) {
        reviewsBlocks.classList.add('reviews__blocks--active') 
    }
    if (window.scrollY >= item1.offsetTop+1100) {
        item1.classList.add('item--active') 
    }
    if (window.scrollY >= item2.offsetTop+1100) {
        item2.classList.add('item--active') 
    }
    if (window.scrollY >= item3.offsetTop+1100) {
        item3.classList.add('item--active') 
    }
    if (window.scrollY >= item4.offsetTop+1100) {
        item4.classList.add('item--active') 
    }
    if (window.scrollY >= item5.offsetTop+1100) {
        item5.classList.add('item--active') 
    }
}

const offerShakeAdd = () => {
    offerScroll.classList.add('about-me__scroll-to-offer--active')
    setTimeout(offerShakeRemove,1000)
    setTimeout(offerScrollTo, 500)
}
const offerShakeRemove = () => {
    offerScroll.classList.remove('about-me__scroll-to-offer--active')
}
const offerScrollTo = () => {
    offerSection.scrollIntoView()
}


const sendForm = () => {
    if(contactInputs[0].value !== '' && contactInputs[1].value !=='' && contactTextArea.value !== ''){
        contactPopup.classList.add('popup--active')
    }
}
const closePopup = () => {
    contactPopup.classList.remove('popup--active')
    contactInputs.forEach(input => {
        input.value = ''
    })
    contactTextArea.value = ''
}


const error = document.querySelectorAll('.error-text');
let email
let name
let msg

const checkName = () => {
    if(contactInputs[0].value===''){
        error[0].textContent = 'Podaj imię...'
        error[0].style.visibility = 'visible'
    } else {
        name = true
        error[0].style.visibility = 'hidden'
    }
}

const checkMail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(re.test(contactInputs[1].value)) {
        email = true
        error[1].style.visibility = 'hidden'
        // sendForm()
    } else if (contactInputs[1].value === ''){
        error[1].textContent = 'Podaj email...'
        error[1].style.visibility = 'visible'

    } else {
		error[1].style.visibility = 'visible'
        error[1].textContent = 'Podaj prawidłowy email...'
        console.log('nie ok');
	}
};

const checkMsg = () => {
    if(contactTextArea.value===''){
        error[2].textContent = 'Podaj wiadomość...'
        error[2].style.visibility = 'visible'
    } else {
        msg = true
        error[2].style.visibility = 'hidden'
    }
}

const checkErrors = () => {
    checkName()
    checkMail()
    checkMsg()
    if(email===true && name ===true && msg === true) {
        sendForm()
    }
}





const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}
handleCurrentYear()

navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', scrollAnimations)
offerScroll.addEventListener('click', offerShakeAdd)
sendFormBtn.addEventListener('click', checkErrors)
closePopupBtn.addEventListener('click', closePopup)


document.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
      document.getElementById("name").focus();
      document.getElementById("msg").focus();
      document.getElementById("email").focus();
    };
  })(), true);