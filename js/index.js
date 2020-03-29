var burguer = document.getElementById('menu-btn')
var burguerClose = document.getElementById('close-btn')
var header = document.getElementById('header')


var landing = document.getElementById('app-container-landing')

burguer.addEventListener('click', function(){
	burguer.classList.toggle('hide')
	burguerClose.classList.toggle('hide')


	landing.classList.toggle('active-menu')
	header.classList.toggle('active-menu2')

})


burguerClose.addEventListener('click', function(){
	burguer.classList.toggle('hide')
	burguerClose.classList.toggle('hide')

	landing.classList.toggle('active-menu')
	header.classList.toggle('active-menu2')
	
})



$(".queEsHannah").click(function() {
	$('html, body').animate({ scrollTop: $('#scrolledHannah').offset().top}, 1000);
	burguerClose.classList.add('hide')
	burguer.classList.remove('hide')


	landing.classList.remove('active-menu')
	header.classList.remove('active-menu2')
});

$(".precios").click(function() {
	$('html, body').animate({ scrollTop: $('#scrolledPrecios').offset().top}, 1000);
	burguerClose.classList.add('hide')
	burguer.classList.remove('hide')


	landing.classList.remove('active-menu')
	header.classList.remove('active-menu2')
});

$(".contactanos").click(function() {
	$('html, body').animate({ scrollTop: $('#scrolledContactanos').offset().top}, 1000);
	burguerClose.classList.add('hide')
	burguer.classList.remove('hide')


	landing.classList.remove('active-menu')
	header.classList.remove('active-menu2')
});



var btn = document.querySelector('.mouse-hover-back')
btn.onmousemove = function(e) {
  var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft
  var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop
  btn.style.setProperty('--x', x + 'px')
  btn.style.setProperty('--y', y + 'px')
}

var btn2 = document.querySelector('.mouse-hover-back2')
btn2.onmousemove = function(e) {
  var x = e.pageX - btn2.offsetLeft - btn2.offsetParent.offsetLeft
  var y = e.pageY - btn2.offsetTop - btn2.offsetParent.offsetTop
  btn2.style.setProperty('--x', x + 'px')
  btn2.style.setProperty('--y', y + 'px')
}



