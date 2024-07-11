export function whiteBorder(idChange,  idBack){
    var Back = document.getElementById(idBack);
    var BackWidth = Back.style.width;
    var BackHeight = Back.style.height;
    var Change = document.getElementById(idChange)
    Change.style.height = BackHeight - (5 + "px");
    Change.style.width = BackHeight - (5 + "px");
}