const btnmenuElement =document.getElementById('btnmenu');
const mainmenuElement= document.getElementById('main-menu')

btnmenuElement.addEventListener('click',()=>{
    mainmenuElement.classList.toggle('main-menu--show');
})