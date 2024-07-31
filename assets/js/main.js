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


function toggleCardContent(button) {
  // الحصول على الكارد بأكمله
  const card = button.closest('.back');

  // نسخ الكارد
  const cardClone = card.cloneNode(true);

  // إزالة الزرار من النسخة
  const buttonInClone = cardClone.querySelector('.bi-basket-fill');
  if (buttonInClone) {
      buttonInClone.remove();
  }
  const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Toggle';
        removeButton.className = 'remove-button'; // إضافة الفئة للزرار
        removeButton.onclick = function() {
            cardClone.remove();
        };
  // إضافة زرار الإزالة إلى الكارد المنسوخ
  cardClone.appendChild(removeButton);
  // إضافة النسخة إلى العنصر toggle-body
  const toggleBody = document.getElementById('toggleBody');
  toggleBody.appendChild(cardClone);
}
