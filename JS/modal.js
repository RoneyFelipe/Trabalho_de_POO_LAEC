var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
function aquii() {
    modal.style.display = "block";
}
function aquii2() {
    modal2.style.display = "block";
}
function aquii3() {
    modal3.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal3.style.display = "none";
    }
}
