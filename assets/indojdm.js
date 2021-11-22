function funcSubs() {
    var x = document.myForm.nama.value;
    var y = document.myForm.surel.value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.surel.value)){
        if ((x && y) != ""){
        alert("Subscribed!");
        }
    }
    else{
        return true;
    }
}

function funcError(){
    alert("Maaf, fitur belum dapat digunakan.");
}

var modal = document.getElementById("popupid");
var btn = document.getElementById("pop-butt");
var span = document.getElementsByClassName("tutup")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function angkaGeser(n) {
    funcGeser(slideIndex += n);
}
function currentSlide(n) {
    funcGeser(slideIndex = n);
}
function funcGeser(n) {
    var i;
    var slides = document.getElementsByClassName("geser");
    var hitung = document.getElementsByClassName("hitung");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < hitung.length; i++) {
        hitung[i].className = hitung[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    hitung[slideIndex-1].className += "active";
    
}