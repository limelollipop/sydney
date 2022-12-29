// menuMo script
const btnMenu = document.querySelector('.btnMenu');
const menuMo = document.querySelector('.menuMo');

// menuMo script
btnMenu.addEventListener('click', (e) => {
	e.preventDefault();
	btnMenu.classList.toggle('on');
	menuMo.classList.toggle('on');
});

// event right slide
const frame = document.querySelector('#event .inner .right .wrap');
const boxs = frame.querySelectorAll('article');
const prev = document.querySelector('#event .inner .left .btnPrev');
const next = document.querySelector('#event .inner .left .btnNext');
// console.log(boxs);

frame.prepend(frame.lastElementChild);

prev.addEventListener('click', (e) => {
	e.preventDefault();

	frame.append(frame.firstElementChild);
});

next.addEventListener('click', (e) => {
	e.preventDefault();
	frame.prepend(frame.lastElementChild);
});
