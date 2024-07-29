import waitForElm from "/utils/waitForElemnt.js";

!async function(){
    //Button pressed -> open page without reload
    await waitForElm("#footer-ContactBut");

    var privBut = document.getElementById("footer-privacyBut");
    var conBut = document.getElementById("footer-ContactBut");

    privBut.onclick =()=>{
        
        document.querySelector("#body").setAttribute("src", "/components/main/datenschutzerklaerung.html");
    }

    conBut.onclick=()=>{
        document.querySelector("#body").setAttribute("src", "/components/main/contact.html");
    }
}()