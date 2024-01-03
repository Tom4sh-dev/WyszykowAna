const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__list')
const navItems = document.querySelectorAll('.nav__link')

const bannerSection = document.querySelector('.banner')
const aboutMeSection = document.querySelector('.about-me')
const offerSection = document.querySelector('.offer')
const reviewsSection = document.querySelector('.reviews')

const heightToReviews = bannerSection.offsetHeight + aboutMeSection.offsetHeight/2 + offerSection.offsetHeight

const aboutMeBlocks = document.querySelector('.about-me__blocks')
const reviewsBlocks = document.querySelector('.reviews__blocks')

const offerScroll = document.querySelector('.about-me__scroll-to-offer')

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

const blocksExpandAboutMe = () => {
    if(window.scrollY >= aboutMeSection.offsetTop-500) {
        aboutMeBlocks.classList.add('about-me__blocks--active')
    } 
}
const blocksExpandReviews = () => {
    if (window.scrollY >= reviewsSection.offsetTop-500) {
        reviewsBlocks.classList.add('reviews__blocks--active') 
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

const handleCurrentYear = () => {
	const year = (new Date).getFullYear();
	footerYear.innerText = year;
}
handleCurrentYear()

navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', blocksExpandAboutMe)
window.addEventListener('scroll', blocksExpandReviews)
offerScroll.addEventListener('click', offerShakeAdd)