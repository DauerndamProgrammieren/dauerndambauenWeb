import waitForElm from "/utils/waitForElemnt.js";

!async function(){

await waitForElm("#q3");
var butRaetsel1 = document.getElementById("q1");
var butRaetsel2 = document.getElementById("q2");
var butRaetsel3 = document.getElementById("q3");
var butRaetsel3Grafik = document.getElementById("Burgstaller");
var butUbersicht = document.getElementById("ubersicht");

//functions

butRaetsel1.onclick =()=>{
    document.querySelector("#main").setAttribute("src", "/webspaces/schule/Wissenschaftswoche/components/frage1/index.html");
}

butRaetsel2.onclick =()=>{
    document.querySelector("#main").setAttribute("src", "/webspaces/schule/Wissenschaftswoche/components/frage2/index.html");
}

butRaetsel3.onclick =()=>{
    document.querySelector("#main").setAttribute("src", "/webspaces/schule/Wissenschaftswoche/components/frage3/index.html");
}

butUbersicht.onclick =()=>{
    document.querySelector("#main").setAttribute("src", "/webspaces/schule/Wissenschaftswoche/components/index/index.html");
}

butRaetsel3Grafik.onclick=()=>{
    document.querySelector("#main").setAttribute("src", "/webspaces/schule/Wissenschaftswoche/components/frage3-stat/index.html");
}

}()