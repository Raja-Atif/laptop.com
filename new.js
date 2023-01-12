
burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
rightNav = document.querySelector(".rightNav")
navlist = document.querySelector(".nav-list")


burger.addEventListener('click',function(){
    rightNav.classList.toggle('v-Class-respon');
    navlist.classList.toggle('v-Class-respon');
    navbar.classList.toggle('h-Nav-respon');

})

// search = document.querySelector('#search').addEventListener('click',function(){
//    search.classList.toggle("#search");
// })
// var element;
// element = document.querySelector(".rightNav").classList.remove("#search");

