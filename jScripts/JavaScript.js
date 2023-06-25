
let currentIndex = 1;


function selectSlide(n){
  activateSlide(currentIndex = n)
}


function kademSlides(n) {
  currentIndex += n;
  activateSlide(currentIndex);
}



function activateSlide(n) {
  let i;
  let slides = document.getElementsByClassName("myGallery");
  let smallPics = document.getElementsByClassName("smallPic");
  let captionText = document.getElementById("kotert");
  if (n > slides.length) {
    currentIndex = 1
  }
  if (n < 1) {
    currentIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < smallPics.length; i++) {
    smallPics[i].className = smallPics[i].className.replace(" active", "");
  }
  slides[currentIndex-1].style.display = "block";
  smallPics[currentIndex-1].className += " active";
  captionText.innerHTML = smallPics[currentIndex-1].alt;
}
