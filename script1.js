/*
var button = document.getElementsByTagName('button')[0];
button.addEventListener('mouseover', function() {
	// body...
	console.log('CLICK!!!');
})
*/
/*
var button = document.getElementById('enter');
var input = document.getElementById('user_input');
var ul = document.querySelector('ul');

function inputValue(){
	return input.value.length;
}

button.addEventListener('click',function () {
	// body...
	if (inputValue()>0) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value='';
	}
	
})

input.addEventListener('keypress',function (event) {
	// body...
	if (inputValue()>0 && event.keyCode === 13) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value='';
	}
	
})
*/

var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function setGradient() {
	// body...
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background 
}


color1.addEventListener('input', setGradient);

color2.addEventListener('input',setGradient);
	