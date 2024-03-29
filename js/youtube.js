const youtube = document.querySelector('.youtube');
const vidList1 = youtube.querySelector('.vidList1');
const playlistId1 = 'PLfcxYX4Y-1uKvy2NKs2xrMcOcUV2ZkW3G';

getYoutube(vidList1, playlistId1, 3);

function getYoutube(vidList, playlist, count) {
	const key = 'AIzaSyBewxTQi8jQ69KRDZGs1D5GM1VWwj9ofSg';
	const playlistId = playlist;
	const num = count;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	fetch(url)
		.then((data) => {
			return data.json();
		})
		.then((json) => {
			let items = json.items;
			// console.log(items);
			let result = '';

			items.map((el) => {
				let title = el.snippet.title;
				if (title.length > 40) {
					title = title.substr(0, 40) + '...';
				}

				let txt = el.snippet.description;
				if (txt.length > 120) {
					txt = txt.substr(0, 120) + '...';
				}
				let date = el.snippet.publishedAt;
				date = date.split('T')[0];

				result += `
        <div>
					<div>
						<span>${date}</span>
						<h3>${title}</h3>
						<p>${txt}</p>
					</div>
          <a href="${el.snippet.resourceId.videoId}" class="pic">
            <img src="${el.snippet.thumbnails.high.url}">
          </a>          
        </div>
      `;
			});

			vidList.innerHTML = result;

			const pics = vidList.querySelectorAll('.pic');

			pics.forEach((pic, idx) => {
				pic.addEventListener('click', (e) => {
					e.preventDefault();

					const vidId = e.currentTarget.getAttribute('href');
					let pop = document.createElement('figure');
					pop.classList.add('pop');
					pop.innerHTML = `
					<iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
					<span class="btnClose"><i class="fa-solid fa-rectangle-xmark"></i></span>
				`;

					document.body.append(pop);
				});
			});

			document.body.addEventListener('click', (e) => {
				const pop = document.body.querySelector('.pop');

				if (pop) {
					const close = pop.querySelector('span i');
					// console.log(close);
					if (e.target == close) pop.remove();
				}
			});
		});
}

// ---------------------------------------------------- 선생님이 했던거
// const frame1 = document.querySelector('.vidList');
// const playlistId1 = 'PLHtvRFLN5v-W5bQjvyH8QTdQQhgflJ3nu';

// const frame2 = document.querySelector('.vidList0');
// const playlistId2 = 'PLGOVj4gmzJyDDR7lMdcNbMivqI1oqvaDz';

// getYoutube(frame2, playlistId2, 2);
// getYoutube(frame1, playlistId1, 5);

// async function getYoutube(frame, playlist, count) {
// 	const key = 'AIzaSyDq1ThuKd63CGMc178rIvnscNriIww6L4A';
// 	const playlistId = playlist;
// 	const num = count;
// 	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

// 	const data = await fetch(url);
// 	const json = await data.json();
// 	let items = json.items;
// 	let result = '';

// 	items.map((el) => {
// 		let title = el.snippet.title;
// 		if (title.length > 30) {
// 			title = title.substr(0, 20) + '...';
// 		}

// 		let con = el.snippet.description;
// 		if (con.length > 100) {
// 			con = con.substr(0, 40) + '...';
// 		}
// 		let date = el.snippet.publishedAt;
// 		result += `
//         <article>
//           <a href="${el.snippet.resourceId.videoId}" class="pic">
//             <img src="${el.snippet.thumbnails.medium.url}">
//           </a>
//           <div class="con">
//             <h2>${title}</h2>
//             <p>${con}</p>
//             <span>${date}</span>
//           </div>
//         </article>
//       `;
// 	});
// 	frame.innerHTML = result;

// 	//동적으로 생성된 썸네일 클릭시 팝업 생성
// 	const pics = document.querySelectorAll('.pic');

// 	pics.forEach((pic) => {
// 		pic.addEventListener('click', (e) => {
// 			e.preventDefault();
// 			const vidId = e.currentTarget.getAttribute('href');
// 			let pop = document.createElement('figure');
// 			console.log(vidId);
// 			pop.classList.add('pop');
// 			pop.innerHTML = `
//       <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
//       <span class="btnClose">close</span>
//     `;
// 			frame.append(pop);
// 		});
// 	});

// 	//동적으로 생성된 팝업의 닫기 버튼 클릭시 팝업 제거 (이벤트 위임 처리)
// 	frame.addEventListener('click', (e) => {
// 		const pop = frame.querySelector('.pop');

// 		if (pop) {
// 			const close = pop.querySelector('span');
// 			if (e.target == close) pop.remove();
// 		}
// 	});
// }
