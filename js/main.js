// menuMo script
const btnMenu = document.querySelector('.btnMenu');
const menuMo = document.querySelector('.menuMo');

// event right slide script
const eventFrame = document.querySelector('#event .inner .right .wrap');
const prev = document.querySelector('#event .inner .left .btnPrev');
const next = document.querySelector('#event .inner .left .btnNext');
// console.log(boxs);

// menuMo script
btnMenu.addEventListener('click', (e) => {
	e.preventDefault();
	btnMenu.classList.toggle('on');
	menuMo.classList.toggle('on');
});

// event right slide script
// Child 대문자 주의
eventFrame.prepend(eventFrame.lastElementChild);

prev.addEventListener('click', (e) => {
	e.preventDefault();

	eventFrame.append(eventFrame.firstElementChild);
});

next.addEventListener('click', (e) => {
	e.preventDefault();
	eventFrame.prepend(eventFrame.lastElementChild);
});
