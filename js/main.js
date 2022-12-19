// menuMo script
const btnMenu = document.querySelector(".btnMenu");
const menuMo = document.querySelector(".menuMo");

// menuMo script
btnMenu.addEventListener("click",(e)=>{
    e.preventDefault();
    btnMenu.classList.toggle("on");
    menuMo.classList.toggle("on");
});

// const slider = document.querySelector("#visual");
// const panel = slider.querySelector(".panel");
// const imgLis = slider.querySelectorAll("img");
// const btn = slider.querySelector(".btn");
// // console.log(panel);

