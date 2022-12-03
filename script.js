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