document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('accordion__button--active');
        if(button.classList.contains('accordion__button--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    })
});
// sub menu
var mainNav = document.getElementById("mainNav");
var listNav = mainNav.getElementsByTagName("li");
for (var i = 0; i < listNav.length; i++) {
  listNav[i].addEventListener("click", function () {
    var current = document.querySelector("#mainNav .active");
    // console.log(current);
    current.className = current.className.replace("active", "");
    this.className += "active";
  });
}