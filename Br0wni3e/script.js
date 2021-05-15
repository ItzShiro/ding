var burger = document.querySelector('.burger');
var ul = document.querySelector('#ul');
var body = document.body;
var link = document.querySelectorAll('.link');
var html = document.documentElement;

var height = 0;
var h = 0;

function onStart(){
  //idk why but some things just dont want to work without function soo there it is
  
  
}
AOS.init({
  duration: 1200,
})
$(window).on("load",function(){
   $(".loader-wrapper").fadeOut("fast");
  AOS.refresh();
});
function hamburger(){
  burger.classList.toggle('burger-active');
  ul.classList.toggle('active');
}
function hamburgerClose(){
  burger.classList.remove('burger-active');
  ul.classList.remove('active');
}
 if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
   body.classList.add('body-mobile')
}
onStart();

var initiateHeights = function () {
  height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  console.log("heights were initialised:", height, h);
}

initiateHeights();

var resize = function (e) {
  var scrolled = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  height > 0 ? e[0].style.width = scrolled/(height-h) * 100 + "%" : e.style.width = 0 + "%";
}

document.onscroll = function () {
  resize(document.getElementsByClassName("indicator"));
};

window.onresize = function () {
  initiateHeights();
}
