import waitForElm from "/modules/waitForElemnt.js";
await waitForElm('#headerfile');
//above used to wait until page is loaded

//to make it more compatible with a smartphone
var header = document.getElementById("headerfile");

const headerHeight = header.offsetHeight;
var space = document.getElementById("spaceholder");
if(headerHeight >= 127){
    header.style.marginLeft = -6;
    header.style.gridTemplateColumns = "51px auto";
    space.style.height = headerHeight + 50;
    header.style.borderRadius = 0;
}