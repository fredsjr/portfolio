/* login toggle function */
function toggleForm(){
    formulier_container = document.querySelector('.formulier_container');
    formulier_container.classList.toggle('active')
}
/* regular header */
$(document).ready(function(){
    $('.menu_toggle').click(function(){
        $('.menu_toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})