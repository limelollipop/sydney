// mainPage scroll
// const visualBox = document.querySelector('#visual');
const scrollBoxs = document.querySelectorAll('body > section');
const scrollBtns = document.querySelectorAll('body > ul li');
const speed = 500;
const base = -window.innerHeight / 2;
let posArr = [];

getPos();

window.addEventListener('resize', getPos);
window.addEventListener('scroll', scrollActivation);

scrollBtns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		const isOn = e.currentTarget.classList.contains('on');
		if (isOn) return;
		moveScroll(idx);
	});
});

function getPos() {
	posArr = [];
	for (const box of scrollBoxs) posArr.push(box.offsetTop);
	// console.log(posArr);
}
function scrollActivation() {
	const scroll = window.scrollY || window.pageYOffset;

	scrollBoxs.forEach((_, idx) => {
		if (scroll >= posArr[idx] + base) {
			for (const el of scrollBtns) el.classList.remove('on');
			for (const el of scrollBoxs) el.classList.remove('on');
			scrollBtns[idx].classList.add('on');
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
