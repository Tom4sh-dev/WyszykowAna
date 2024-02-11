const aboutMeHeading = document.querySelector('.about-me__heading');
const aboutMeBlocks = document.querySelector('.about-me__blocks');
const reviewsBlocks = document.querySelector('.reviews__blocks');

const offerScroll = document.querySelector('.about-me__scroll-to-offer');

const offerBtns = document.querySelectorAll('.offer__item-btn');

const footerYear = document.querySelector('.footer__year');

const scrollAnimations = () => {
	if (window.scrollY >= aboutMeSection.offsetTop - 500) {
		aboutMeHeading.classList.add('about-me__heading--active');
		aboutMeBlocks.classList.add('about-me__blocks--active');
	}
	if (window.scrollY >= reviewsSection.offsetTop - 500) {
		reviewsBlocks.classList.add('reviews__blocks--active');
	}
};

const offerShakeAdd = () => {
	offerScroll.classList.add('about-me__scroll-to-offer--active');
	setTimeout(offerShakeRemove, 1000);
	setTimeout(offerScrollTo, 500);
};
const offerShakeRemove = () => {
	offerScroll.classList.remove('about-me__scroll-to-offer--active');
};
const offerScrollTo = () => {
	offerSection.scrollIntoView();
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

window.addEventListener('scroll', scrollAnimations);
offerScroll.addEventListener('click', offerShakeAdd);

offerBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		btn
			.closest('button')
			.nextElementSibling.classList.toggle(
				'offer__item-text-container--active'
			);
		btn.querySelector('i').classList.toggle('offer__item-btn-icon--active');
	});
});
