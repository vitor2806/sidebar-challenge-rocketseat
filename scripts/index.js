const menuBtn = document.querySelector('#hamburger');
const aside = document.querySelector('aside');
const searchButton = document.querySelector('.search');
const searchField = document.querySelector('#search');

menuBtn.addEventListener('click', () => {
	aside.classList.toggle('open');
});

searchButton.addEventListener('click', () => {
	isOpen = aside.classList.value = 'open';

    searchField.focus();
	if (!isOpen) {
		aside.classList.toggle('open');
	}
});
