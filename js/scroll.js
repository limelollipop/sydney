// mainPage scroll
// const visualBox = document.querySelector('#visual');
const scrollBoxs = document.querySelectorAll('body > section');
const scrollBtns = document.querySelectorAll('body > ul li');
let posArr = [];

getPos();

window.addEventListener('resize', getPos);
window.addEventListener('scroll', scrollActivation);

scrollBtns.forEach((btn, idx) => {
	btn.addEventListener('click', () => moveScroll(idx));
});

function getPos() {
	posArr = [];
	for (const box of scrollBoxs) posArr.push(box.offsetTop);
	// console.log(posArr);
}
function scrollActivation() {
	const scroll = window.scrollY || window.pageYOffset;

	scrollBoxs.forEach((_, idx) => {
		if (scroll >= posArr[idx]) {
			for (const el of scrollBtns) el.classList.remove('on');
			for (const el of scrollBoxs) el.classList.remove('on');
			scrollBtns[idx].classList.add('on');
			scrollBoxs[idx].classList.add('on');
		}
	});
}
function moveScroll(index) {
	new Anim(window, {
		prop: 'scroll',
		value: posArr[index],
		duration: 500,
	});
}
