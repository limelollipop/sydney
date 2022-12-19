const btnMenu = document.querySelector(".btnMenu");
const menuMo = document.querySelector(".menuMo");

btnMenu.addEventListener("click",(e)=>{
    e.preventDefault();
    btnMenu.classList.toggle("on");
    menuMo.classList.toggle("on");
});

const slider = document.querySelector("#visual");
const panel = slider.querySelector(".panel");
const imgLi = slider.querySelectorAll("img");
const btn = slider.querySelector(".btn");
// console.log(panel);

btn.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();

        new Animation(panel,{
            prop: "margin-left",
            value: -100 * index + "%",
            duration: 1000,
        });
    
    })    
});