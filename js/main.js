const btnMenu = document.querySelector(".btnMenu");
const menuMo = document.querySelector(".menuMo");

btnMenu.addEventListener("click",(e)=>{
    e.preventDefault();
    btnMenu.classList.toggle("on");
    menuMo.classList.toggle("on");
});




// const eventSlide = document.querySelector("#event");
// const slideWrap = eventSlide.querySelector("div .wrap");
// const lis = slideWrap.querySelectorAll(".right .wrap article");
// const prev = eventSlide.querySelector(".left .btnPrev");
// const next = eventSlide.querySelector(".left .btnNext");


// let len = lis.length;
// console.log(slideWrap);
// let speed = 500;

// init();

// prev.addEventListener("click", (e)=>{
//     e.preventDefault();

//     prevSlide();
// });

// next.addEventListener("click", (e)=>{
//     e.preventDefault();

//     nextSlide();
// });

// function init(){
//     slideWrap.style.left = "-25%"
//     slideWrap.prepend(slideWrap.lastElementChild);

//     // slideWrap.style.width = `${100 * len}%`;

//     // lis. forEach((el)=>{
//     //     el.style.width = `%{100 * / len}`;
//     // });
// }

// function nextSlide(){
//     new Anim(slideWrap,{
//         prop : 'left',
//         value : '25%',
//         duration : speed,

//         callback : ()=>{
//             slideWrap.style.left = "-25%";
//             slideWrap.append(slideWrap.firstElementChild);
//         }
//     });
// }

// function prevSlide(){
//     new Anim(slideWrap,{
//         prop : 'left',
//         value : '-25%',
//         duration : speed,

//         callback : ()=>{
//             slideWrap.style.left = "-25%";
//             slideWrap.append(slideWrap.lastElementChild);
//         }
//     });
// }
