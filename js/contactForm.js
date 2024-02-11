const contactForm = document.querySelector('.contact__form');
const contactInputs = document.querySelectorAll('.contact__form-input');
const contactTextArea = document.querySelector('.contact__form-textarea');
const sendFormBtn = document.querySelector('.send-btn');
const contactPopup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close-btn');
const error = document.querySelectorAll('.error-text');
let email;
let name;
let msg;



const checkName = () => {
	if (contactInputs[0].value === '') {
		error[0].textContent = 'Podaj imię...';
		error[0].style.visibility = 'visible';
	} else {
		name = true;
		error[0].style.visibility = 'hidden';
	}
};
const checkMail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(contactInputs[1].value)) {
		email = true;
		error[1].style.visibility = 'hidden';
		// sendForm()
	} else if (contactInputs[1].value === '') {
		error[1].textContent = 'Podaj email...';
		error[1].style.visibility = 'visible';
	} else {
		error[1].style.visibility = 'visible';
		error[1].textContent = 'Podaj prawidłowy email...';
		console.log('nie ok');
	}
};
const checkMsg = () => {
	if (contactTextArea.value === '') {
		error[2].textContent = 'Podaj wiadomość...';
		error[2].style.visibility = 'visible';
	} else {
		msg = true;
		error[2].style.visibility = 'hidden';
	}
};
const checkErrors = () => {
	checkName();
	checkMail();
	checkMsg();
	if (email === true && name === true && msg === true) {
		sendForm();
	}
};
const sendForm = () => {
	if (
		contactInputs[0].value !== '' &&
		contactInputs[1].value !== '' &&
		contactTextArea.value !== ''
	) {
		contactPopup.classList.add('popup--active');
	}
};
const closePopup = () => {
	contactPopup.classList.remove('popup--active');
	contactInputs.forEach((input) => {
		input.value = '';
	});
	contactTextArea.value = '';
};


sendFormBtn.addEventListener('click', checkErrors);
closePopupBtn.addEventListener('click', closePopup);
document.addEventListener(
	'invalid',
	(function () {
		return function (e) {
			e.preventDefault();
			document.getElementById('name').focus();
			document.getElementById('msg').focus();
			document.getElementById('email').focus();
		};
	})(),
	true
);