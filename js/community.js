const commuTab = document.querySelector('.community .inner #commuTab');
const commuBtns = commuTab.querySelectorAll('ul li');
const commuBoxs = commuTab.querySelectorAll('table tbody');
const commuArr = [];
console.log(commuBoxs);

commuBtns.forEach(function (el, idx) {
	el.addEventListener('click', function (e) {
		e.preventDefault();

		activation(commuBtns, idx);
		activation(commuBoxs, idx);
		// for (let el of commuBtns) el.classList.remove('on');
		// commuBtns[idx].classList.add('on');
		// for (let el of commuBoxs) el.classList.remove('on');
		// commuBoxs[idx].classList.add('on');
	});
});

function activation(arr, idx) {
	for (const el of arr) el.classList.remove('on');
	arr[idx].classList.add('on');
}
