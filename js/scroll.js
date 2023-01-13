// main page scroll
const scrollBoxs = document.querySelectorAll('figure, body > section');
const scrollBtns = document.querySelectorAll('body > ul li');
const whatsOn = document.querySelector('body #visual .inner .btn');
const speed = 500;
// 나누기 3이나 고정값
const base = -window.innerHeight / 3;
let posArr = [];
const scrollBtnsArr = Array.from(scrollBtns);
// console.log(scrollBtnsArr);

getPos();
window.onload = function () {
	scrollBoxs[0].classList.add('on');
};

window.addEventListener('resize', modifyPos);
window.addEventListener('scroll', scrollActivation);
whatsOn.addEventListener('click', () => {
	moveScroll(1);
});

// scrollBtns.forEach((btn, idx) => {
// 	btn.addEventListener('click', (e) => {
// 		const isOn = e.currentTarget.classList.contains('on');
// 		if (isOn && scroll === posArr[idx]) return;
// 		moveScroll(idx);
// 	});
// });

// window.addEventListener('mousewheel', moveWheel, { passive: false });

function getPos() {
	posArr = [];
	for (const box of scrollBoxs) posArr.push(box.offsetTop);
	console.log(posArr);
}
function scrollActivation() {
	const scroll = window.scrollY || window.pageYOffset;

	scrollBoxs.forEach((_, idx) => {
		if (scroll >= posArr[idx] + base) {
			// for (const el of scrollBtns) el.classList.remove('on');
			for (const el of scrollBoxs) el.classList.remove('on');
			// scrollBtns[idx].classList.add('on');
			scrollBoxs[idx].classList.add('on');
		}
	});
}
function moveScroll(index) {
	new Anime(window, {
		prop: 'scroll',
		value: posArr[index],
		duration: speed,
	});
}
function modifyPos() {
	getPos();
	const active = document.querySelector('body > ul li.on');
	const activeIndex = scrollBtnsArr.indexOf(active);
	window.scroll(0, posArr[activeIndex]);
}
// function moveWheel(e) {
// 	e.preventDefault();

// 	const active = document.querySelector('body > ul li.on');
// 	const activeIndex = scrollBtnsArr.indexOf(active);

// 	if (e.deltaY < 0) {
// 		if (activeIndex === 0) return;
// 		moveScroll(activeIndex - 1);
// 	} else {
// 		if (activeIndex === scrollBtns.length - 1) return;
// 		moveScroll(activeIndex + 1);
// 	}
// }
