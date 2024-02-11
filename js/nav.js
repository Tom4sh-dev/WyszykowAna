const navBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__link');

const bannerSection = document.querySelector('.banner');
const aboutMeSection = document.querySelector('.about-me');
const offerSection = document.querySelector('.offer');
const reviewsSection = document.querySelector('.reviews');
const contactSection = document.querySelector('.contact');
const footerSection = document.querySelector('.footer');

const handleNav = () => {
	navMobile.classList.toggle('nav__list--active');
	navBtn.classList.toggle('is-active');
	bannerSection.classList.toggle('banner--nav-active');
	aboutMeSection.classList.toggle('about-me--nav-active');
	offerSection.classList.toggle('offer--nav-active');
	reviewsSection.classList.toggle('reviews--nav-active');
	contactSection.classList.toggle('contact--nav-active');
	footerSection.classList.toggle('footer--nav-active');

	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav__list--active');
			navBtn.classList.remove('is-active');
			bannerSection.classList.remove('banner--nav-active');
			aboutMeSection.classList.remove('about-me--nav-active');
			offerSection.classList.remove('offer--nav-active');
			reviewsSection.classList.remove('reviews--nav-active');
			contactSection.classList.remove('contact--nav-active');
			footerSection.classList.remove('footer--nav-active');
		});
	});
};

navBtn.addEventListener('click', handleNav);