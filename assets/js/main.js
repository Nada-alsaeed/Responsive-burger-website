/*=============== SHOW MENU ===============*/
// document.querySelectorAll('#icons').addEventListener('mouseover', function() {
//         this.classList.toggle('animate__animated')
//         this.classList.toggle('animate__slideInUp')
//         this.classList.toggle('wow')
// });

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== ADD SHADOW HEADER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  if (window.scrollY > 20) {
    // add class to header
    header.classList.add("fixed-top");
  } else {
    // remove class from heADER
    header.classList.remove("fixed-top");
  }
});
