function redirect(page) {
    var displayPage = document.getElementById(page);
    var pages = document.getElementsByClassName("pages");
    var i;
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    displayPage.style.display = "block";
}
redirect("homePage")

var index = 0;
var x = document.getElementsByClassName('homeSlide')

function homeSlideshow() {
    var i;
    // var x = document.getElementsByClassName("homeSlide")
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length - 1) { index = 0; }
    x[index].style.display = 'block';
    setTimeout(homeSlideshow, 5000)
}
homeSlideshow()

var slideIndex = [1, 1];
var slideId = ["slider-1.2", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";

}

//Open lightbox
function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("closeLightbox").style.display = "block";
}

// Close the Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.getElementById("closeLightbox").style.display = "none";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function displayDropdown(id) {
    if (document.getElementById(id + "-data").style.display == "none") {
        document.getElementById(id + "-data").style.display = "block"
        document.getElementById(id).style.transform = "rotate(180deg)";
        document.getElementById(id + "-heading").style.textDecoration = "underline";
    } else {
        document.getElementById(id + "-data").style.display = "none"
        document.getElementById(id).style.transform = "rotate(0deg)";
        document.getElementById(id + "-heading").style.textDecoration = "none";
    }

}