//when the page loads for 4 seconds, the spinner will hide and body will display
window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').classList.add
    ('display');
  }, 3500);
}

document.querySelector(".hamburger-menu").
addEventListener('click', () => {
  document.querySelector(".container").classList.
  toggle("change");
});

document.querySelector(".scroll-btn").
addEventListener('click', () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    /**call back function */
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

/** 
document.addEventListener("DOMContentLoaded", function(){

    window.addEventListener('scroll', function() {

        if (window.scrollY > 500) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 


  const hamburger = document.getElementById('hamburger');
  const navUL = document.getElementById('nav-ul');
  
  hamburger.addEventListener('click', () => {
      navUL.classList.toggle('show');
  });
  */
  
  