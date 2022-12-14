const galleryBtns = document.querySelectorAll('.gallery .inner ul li');
const galleryFrame = document.querySelector('.gallery .inner .isoWrap');
const galleryImgs = galleryFrame.querySelectorAll('article');

const loading = document.querySelector('.loading');

// console.log(Array.from(galleryFrame.querySelectorAll('article')));

window.addEventListener('load', () => {
	loading.classList.add('off');
	galleryFrame.classList.add('on');

	const grid = new Isotope('.isoWrap', {
		itemSelection: 'article',
		columnWidth: 'article',
		transitionDuration: '0.5s',
	});

	for (let el of galleryBtns) {
		el.addEventListener('click', (e) => {
			e.preventDefault();

			const gallerySort = e.currentTarget.querySelector('a').getAttribute('href');
			grid.arrange({
				filter: gallerySort,
			});

			for (let el of galleryBtns) {
				el.classList.remove('on');
			}
			e.currentTarget.classList.add('on');
		});
	}
});

/* 시도 해봤던 사진 로딩 후 이미지 등장
const thingsFrame = document.querySelector('main .isoWrap');
const thingsImgs = thingsFrame.querySelectorAll('article');

const loading = document.querySelector('.loading');

// console.log(Array.from(thingsFrame.querySelectorAll('article')));

// window.addEventListener('load', () => {
const len = thingsImgs.length;

let count = 0;

for (let el of thingsImgs) {
	el.addEventListener('load', () => {
		count++;
		if (count == len) isoLayout();
	});
}

function isoLayout() {
	loading.classList.add('off');
	thingsFrame.classList.add('on');

	new Isotope('.isoWrap', {
		itemSelection: 'article',
		columnWidth: 'article',
		transitionDuration: '0.5s',
	});
}

// });
*/
