 const navbar = document.querySelector("nav");

 window.onscroll = () => {
     if (window.scrollY > 1) {
         navbar.classList.remove('bg-nobg');
         navbar.classList.add('bg-custom');
     }
     else{
         navbar.classList.add('bg-nobg');
         navbar.classList.remove('bg-custom');
     }
 }

/* -------------------------------------------------------------- */
/* PAST EVENTS */
/* -------------------------------------------------------------- */
function currentSlide(index) {
    slideIndex = index;
    showSlides();
}

function plusSlides(step) {
    if(step < 0) {
        slideIndex -= 2;
        
        if(slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
    }

    showSlides();
}

function showSlides() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('active');
    if(timeoutId) {
    clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(showSlides, 3000); // Change image every 3 seconds
}