const menuBtn = document.querySelector('.menu');
const closedBtn = document.querySelector('.closed');
const navLinks = document.querySelector('.navlinks');

menuBtn.addEventListener('click', () => {
    menuBtn.style.display = 'none';
    closedBtn.style.display = 'block';
    navLinks.style.top = '80px';
});
  
closedBtn.addEventListener('click', () => {
    closedBtn.style.display = 'none';
    menuBtn.style.display = 'block';
    navLinks.style.top = '-500px';
});