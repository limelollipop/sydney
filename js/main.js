// menuMo script
const btnMenu = document.querySelector('.btnMenu');
const menuMo = document.querySelector('.menuMo');

// visual slide
const frame = document.querySelector('#visual');
const panels = frame.querySelectorAll('.panel li');
const btns = frame.querySelectorAll('.btns li');
const btnPlay = frame.querySelector('.fa-play');
const btnPause = frame.querySelector('.fa-pause');
const interval = 5000;
const len = panels.length - 1;
let timer = null;
let num = 0;
console.log(panels);

// event right slide script
const eventFrame = document.querySelector('#event .inner .right .wrap');
const prev = document.querySelector('#event .inner .left .btnPrev');
const next = document.querySelector('#event .inner .left .btnNext');

// menuMo script
btnMenu.addEventListener('click', (e) => {
	e.preventDefault();
	btnMenu.classList.toggle('on');
	menuMo.classList.toggle('on');
});

// visual slider script
startRolling();
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(idx);
		stopRolling();
	});
});
btnPlay.addEventListener('click', startRolling);
btnPause.addEventListener('click', stopRolling);

function rolling() {
	num < len ? num++ : (num = 0);
	activation(num);
}
function startRolling() {
	timer = setInterval(rolling, interval);
	btnPlay.classList.add('on');
	btnPause.classList.remove('on');
}
function stopRolling() {
	clearInterval(timer);
	btnPlay.classList.remove('on');
	btnPause.classList.add('on');
}
function activation(index) {
	for (const el of panels) el.classList.remove('on');
	for (const el of btns) el.classList.remove('on');
	panels[index].classList.add('on');
	btns[index].classList.add('on');

	num = index;
}

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
