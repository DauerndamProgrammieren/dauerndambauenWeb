import waitForElm from "/modules/waitForElemnt.js";
await waitForElm('.header-3e68a9203df5');
//above used to wait until page is loaded

//to make it more compatible with a smartphone
//var header = document.getElementById("headerfile");

//const headerHeight = header.offsetHeight;
//var space = document.getElementById("spaceholder");
//if(headerHeight >= 127){
//    header.style.marginLeft = -6;
//    header.style.gridTemplateColumns = "51px auto";
//    space.style.height = headerHeight + 50;
//    header.style.borderRadius = 0;
//}

var button = document.getElementById('hamburger-but');
var triggered = false;
var menu = document.getElementById('hamburger-menu');
function showHamburgerMenu(event){
    if(triggered == true){
        menu.style.display="none";
        triggered = false;
    }else if(triggered == false){
        menu.style.display="block"
        triggered = true;
    }
}

button.addEventListener('click', showHamburgerMenu);
button.addEventListener('keydown', event =>{
    if(event.keyCode === 13 || event.keycode === 32){
        showHamburgerMenu(event);
    }
})