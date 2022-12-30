const thingsFrame = document.querySelector('main .isoWrap');
const thingsImgs = thingsFrame.querySelectorAll('article');
// console.log(thingsImgs);

window.addEventListener('load', () => {
	const grid = new Isotope('.isoWrap', {
		itemSelection: 'article',
		columnWidth: 'article',
		transitionDuration: '0.5s',
	});

	thingsFrame.classList.add('on');
});
