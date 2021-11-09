
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



  