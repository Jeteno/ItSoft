const iconMenu = document.querySelector('.menu-burger-open');
const closeMenu = document.querySelector('.menu-burger-close');
if (iconMenu) {
   const menuBody = document.querySelector('.header__menu-burger');
   iconMenu.addEventListener("click", function (o) {
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
   closeMenu.addEventListener("click", function(c){
      closeMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
   });
}