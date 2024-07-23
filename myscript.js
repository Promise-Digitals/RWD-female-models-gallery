function one(){
    document.getElementById('pop').style.display = 'block';
}
function two() {
    document.getElementById('image').src = 'Models/image2.jpg';
    document.getElementById('pop').style.display = 'block';
}
function three() {
    document.getElementById('image').src = 'Models/image3.jpg';
    document.getElementById('pop').style.display = 'block';
}
function four() {
    document.getElementById('image').src = 'Models/image4.jpg';
    document.getElementById('pop').style.display = 'block';
}
function four() {
    document.getElementById('image').src = 'Models/image4.jpg';
    document.getElementById('pop').style.display = 'block';
}
function five() {
    document.getElementById('image').src = 'Models/image5.jpg';
    document.getElementById('pop').style.display = 'block';
}
function six() {
    document.getElementById('image').src = 'Models/image6.jpg';
    document.getElementById('pop').style.display = 'block';
}
function seven() {
    document.getElementById('image').src = 'Models/image7.jpg';
    document.getElementById('pop').style.display = 'block';
}
function eight() {
    document.getElementById('image').src = 'Models/image8.jpg';
    document.getElementById('pop').style.display = 'block';
}
function nine() {
    document.getElementById('image').src = 'Models/image9.jpg';
    document.getElementById('pop').style.display = 'block';
}
function ten() {
    document.getElementById('image').src = 'Models/image10.jpg';
    document.getElementById('pop').style.display = 'block';
}
function cancels(){
    document.getElementById('pop').style.display = 'none';
}
function mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var themeIcon = document.getElementById('icon');
    if (element.classList.contains("dark-mode")) {
        themeIcon.src= 'Models/sun.png';
    }
    else {
        themeIcon.src = 'Models/moon.png';
    }
}