// sub page scroll
const subFrame = document.querySelector('.content .inner');
const subH2 = subFrame.querySelector('h2');
const scrollBoxs2 = subFrame.querySelectorAll('section');
const speed = 500;
const base = -window.innerHeight / 3;
let posArr = [];
// console.log(subH2);

getPos();

window.onload = function () {
	subH2.classList.add('on');
};
window.addEventListener('resize', getPos);
window.addEventListener('scroll', activation);

function getPos() {
	posArr = [];
	for (const box of scrollBoxs2) posArr.push(box.offsetTop);
	console.log(posArr);
}
function activation() {
	const scroll = window.scrollY || window.pageYOffset;

	scrollBoxs2.forEach((_, idx) => {
		if (scroll >= posArr[idx] + base) {
			for (const el of scrollBoxs2) el.classList.remove('on');
			scrollBoxs2[idx].classList.add('on');
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
