import waitForElm from "/modules/waitForElemnt.js";
await waitForElm('#mainindex');
//above used to wait until page is loaded

var tester = document.getElementById("headerfile");
var projectList = document.getElementById("projects-list");
var projectsShip = document.getElementById("orange-boat");

if(tester.offsetHeight >=127){
    var grid = document.getElementById("mainindex");
    var gridHeight = document.getElementById("orange-boat").offsetHeight;
    grid.style.gridTemplateColumns = "auto";
    grid.style.gridTemplateRows = "auto auto";
    projectsShip.style.width = "300px";
    projectList.style.height = "60%";
}