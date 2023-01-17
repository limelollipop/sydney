// join form
const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit');

// join location
const joinFrame = document.querySelector('.join');
const trficOn = joinFrame.querySelectorAll('.inner section .traffic li')[0];
const trficOff = joinFrame.querySelectorAll('.inner section .traffic li')[1];
const branchBtns = joinFrame.querySelectorAll('.inner section .branch li');
// console.log(trficOn);

// join form
btnSubmit.addEventListener('click', (e) => {
	if (!isTxt('userName', 5)) e.preventDefault();
	if (!isTxt('comments', 20)) e.preventDefault();
	if (!isEmail('email')) e.preventDefault();
	if (!isPwd('pwd1', 'pwd2', 8)) e.preventDefault();
	if (!isSelect('country')) e.preventDefault();
	if (!isCheck('gender')) e.preventDefault();
	if (!isCheck('interest')) e.preventDefault();
});

// type이 text인 text 함수
function isTxt(el, len) {
	if (len === undefined) len = 5;
	let input = form.querySelector(`[name=${el}]`);
	let txt = input.value;

	if (txt.length >= len) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) return false;

		const errMsg = document.createElement('p');
		errMsg.append(`Please enter ${len} or more characters.`);
		input.closest('td').append(errMsg);
		return false;
	}
}

// type이 text인 email 함수
function isEmail(el) {
	let input = form.querySelector(`[name=${el}]`);
	let txt = input.value;

	// @ 포함 여부
	if (/@/.test(txt)) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) return false;

		const errMsg = document.createElement('p');
		errMsg.append(`Please enter a valid email address.`);
		input.closest('td').append(errMsg);
		return false;
	}
}

// type이 password인 password 함수
function isPwd(el1, el2, len) {
	let pwd1 = form.querySelector(`[name=${el1}]`);
	let pwd2 = form.querySelector(`[name=${el2}]`);
	let pwd1_val = pwd1.value;
	let pwd2_val = pwd2.value;

	// 조건의 정규표현식으로 변수 저장
	const num = /[0-9]/;
	const eng = /[a-zA-Z]/;
	const spc = /[~!@#$%^&*()_+]/;

	if (
		pwd1_val === pwd2_val &&
		pwd1_val.length >= len &&
		num.test(pwd1_val) &&
		eng.test(pwd1_val) &&
		spc.test(pwd1_val)
	) {
		const errMsgs = pwd1.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) pwd1.closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = pwd1.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) return false;

		const errMsg = document.createElement('p');
		errMsg.append(
			`Please enter ${len} or more letters with at least one numeric and special character.`
		);
		pwd1.closest('td').append(errMsg);
		return false;
	}
}

// select 함수
function isSelect(el) {
	let sel = form.querySelector(`[name=${el}]`);
	let sel_index = sel.options.selectedIndex;
	let val = sel[sel_index].value;

	if (val !== '') {
		const errMsgs = sel.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) sel.closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = sel.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) return false;

		const errMsg = document.createElement('p');
		errMsg.append('Please select your country.');
		sel.closest('td').append(errMsg);
		return false;
	}
}

// type이 radio나 check인 함수
function isCheck(el) {
	let inputs = form.querySelectorAll(`[name=${el}]`);
	let isCheck = false;

	for (let el of inputs) {
		if (el.checked) isCheck = true;
	}
	if (isCheck) {
		const errMsgs = inputs[0].closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();
		return true;
	} else {
		const errMsgs = inputs[0].closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) return false;

		const errMsg = document.createElement('p');
		errMsg.append('Please check the required selection');
		inputs[0].closest('td').append(errMsg);
		return false;
	}
}

// join location
var mapContainer = document.getElementById('map');
var mapOption = {
	center: new kakao.maps.LatLng(37.571259, 126.9777623),
	level: 3,
};
var map = new kakao.maps.Map(mapContainer, mapOption);
var mapTypeControl = new kakao.maps.MapTypeControl();
var markerPosition = new kakao.maps.LatLng(37.571259, 126.9777623);
var marker = new kakao.maps.Marker({
	position: markerPosition,
});
var zoomControl = new kakao.maps.ZoomControl();
var markerOptions = [
	{
		title: 'City Hall',
		latlng: new kakao.maps.LatLng(37.571259, 126.9777623),
		imgSrc: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
		botton: branchBtns[0],
	},
	{
		title: 'Sydney city',
		latlng: new kakao.maps.LatLng(37.4996743, 127.0350644),
		imgSrc: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
		botton: branchBtns[1],
	},
	{
		title: 'Service NSW',
		latlng: new kakao.maps.LatLng(37.5132332, 127.1039062),
		imgSrc: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
		botton: branchBtns[2],
	},
];
var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

for (let i = 0; i < markerOptions.length; i++) {
	var imageSize = new kakao.maps.Size(24, 35);
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
	var marker = new kakao.maps.Marker({
		map: map,
		position: markerOptions[i].latlng,
		title: markerOptions[i].title,
		image: markerImage,
	});

	markerOptions[i].botton.onclick = (e) => {
		e.preventDefault();

		for (let j = 0; j < markerOptions.length; j++) {
			markerOptions[j].botton.classList.remove('on');
		}
		markerOptions[i].botton.classList.add('on');
		map.setCenter(markerOptions[i].latlng);
	};
}

marker.setMap(map);
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

trficOn.addEventListener('click', (e) => {
	e.preventDefault();
	if (trficOn.classList.contains('on')) return;
	map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

	trficOn.classList.add('on');
	trficOff.classList.remove('on');
});
trficOff.addEventListener('click', (e) => {
	e.preventDefault();
	if (trficOff.classList.contains('on')) return;
	map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

	trficOff.classList.add('on');
	trficOn.classList.remove('on');
});
