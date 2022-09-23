window.addEventListener("scroll", function(){
    const home_header = document.querySelector('header')
    home_header.classList.toggle('sticky', window.scrollY > 0);
});

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}