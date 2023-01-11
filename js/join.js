// join form
const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit');
// console.log(form);

// join location
var mapContainer = document.getElementById('map');
var mapOption = {
	center: new kakao.maps.LatLng(37.571259, 126.9777623),
	level: 3,
};
var map = new kakao.maps.Map(mapContainer, mapOption);
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var markerPosition = new kakao.maps.LatLng(37.571259, 126.9777623);
var marker = new kakao.maps.Marker({
	position: markerPosition,
});
var zoomControl = new kakao.maps.ZoomControl();

marker.setMap(map);
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

const joinFrame = document.querySelector('.join');
// console.log(trficOn);
const trficOn = joinFrame.querySelectorAll('.inner section .traffic li')[0];
const trficOff = joinFrame.querySelectorAll('.inner section .traffic li')[1];

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
		// value값이 조건에 부합한다면
		// 중복 오류메시지 방지
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();
		return true;
	} else {
		// value값이 조건에 부합하지 않는다면
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
	let sel_index = sel.options.selectedIndex; // 해당 index number를 가져옴
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
