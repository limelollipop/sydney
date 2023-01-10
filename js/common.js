// menuMo script
const btnMenu = document.querySelector('.btnMenu');
const menuMo = document.querySelector('.menuMo');

btnMenu.addEventListener('click', (e) => {
	e.preventDefault();
	btnMenu.classList.toggle('on');
	menuMo.classList.toggle('on');
});
