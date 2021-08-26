//////////// fixed nav bar
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
   if (window.pageYOffset > 100) {
      navbar.classList.remove('top');
      if (!scrolled) {
         navbar.style.transform = 'translateY(-70px)';
      }
      setTimeout(function () {
         navbar.style.transform = 'translateY(0)';
         scrolled = true;
      }, 200);
   } else {
      navbar.classList.add('top');
      scrolled = false;
   }
}
// /////////////smmoth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

   $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 100,
   }, 500);
});