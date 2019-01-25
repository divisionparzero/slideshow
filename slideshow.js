// slideshow stuff
var index = 1;
show(index);

function advance(n) {
	show(index += n);
}

function current(n) {
	show(index = n);
}

function show(n) {
	var i;
	var slides = document.getElementsByClassName("slides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		index = 1
	};
	if (n < 1) {
		index = slides.length
	};
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	};
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	};
	slides[index-1].style.display = "block"; 
	dots[index-1].className += " active";
}

//modal stuff
var modal = document.getElementById('modal');
var openButton = document.getElementById("open");
var closeButton = document.getElementsByClassName("close")[0];

openButton.onclick = function() {
	modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}