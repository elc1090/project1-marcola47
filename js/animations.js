const navbar = document.getElementById('navbar');
var sun = document.getElementsByClassName('sun-item');
var mercury = document.getElementsByClassName('mercury-item');
var venus = document.getElementsByClassName('venus-item');
var earth = document.getElementsByClassName('earth-item');
var mars = document.getElementsByClassName('mars-item');
var jupiter = document.getElementsByClassName('jupiter-item');
var saturn = document.getElementsByClassName('saturn-item');
var uranus = document.getElementsByClassName('uranus-item');
var neptune = document.getElementsByClassName('neptune-item');
let scrolled = false;

window.onscroll = function()
{
  // Navbar
  if (window.pageYOffset > 800)
  { navbar.classList.remove('top'); }
  else
  { navbar.classList.add('top'); }

  // Planetas
  if (window.pageYOffset > 800) // Não preica usar else-if pq eles sempre vai seguir essa ordem
    for (var i = 0; i < sun.length; i++) 
      sun[i].classList.add('planet-anim');

  if (window.pageYOffset > 2200)
    for (var i = 0; i < mercury.length; i++) 
      mercury[i].classList.add('planet-anim');

  if (window.pageYOffset > 3500)
    for (var i = 0; i < venus.length; i++) 
      venus[i].classList.add('planet-anim');

  if (window.pageYOffset > 4700)
    for (var i = 0; i < earth.length; i++) 
      earth[i].classList.add('planet-anim');

  if (window.pageYOffset > 6200)
    for (var i = 0; i < mars.length; i++)
      mars[i].classList.add('planet-anim');

  if (window.pageYOffset > 7300)
    for (var i = 0; i < jupiter.length; i++) 
      jupiter[i].classList.add('planet-anim');

  if (window.pageYOffset > 8500)
    for (var i = 0; i < saturn.length; i++) 
      saturn[i].classList.add('planet-anim');

  if (window.pageYOffset > 9600)
    for (var i = 0; i < uranus.length; i++) 
      uranus[i].classList.add('planet-anim');

  if (window.pageYOffset > 11000)
    for (var i = 0; i < neptune.length; i++) 
      neptune[i].classList.add('planet-anim');
}
