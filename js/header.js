function started(){
    let UA = navigator.userAgent;
    if(UA.match(/Android/) || UA.match(/iPhone/) || UA.match(/BlackBerry/) || UA.match(/iPod/) || UA.match(/Windows Phone/) || UA.match(/iPad/) || UA.match(/webOS/)) 
    {
        var placeholder = document.getElementById("placeholder-header")
        placeholder.style.height = 100 +"px";
    }
}