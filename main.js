var cat = document.querySelector('#opt1');
var cati = document.querySelector('#opt2');
//these are just calling the classes outlined in the css file//


var catIndex = 0;
var catiIndex = 0;

//these are the indexes in order to enable the function to
//go up another file in the array each time the user clicks//

function changeCat(){
	var list = [
		'images/optipurp1.gif',
		'images/optipurp3.gif',
		'images/optipurp5.gif',
		'images/optipurp7.gif',
		'images/optipurp9.gif',
		'images/optipurp11.gif',
		'images/optipurp13.gif',
		'images/optipurp15.gif',
		'images/optipurp17.gif'
	];
  catIndex++;
  if (catIndex >= 8){
  	catIndex = 0;
  }
  cat.src = list[catIndex];

}

//these are both functions that include arrays in order to store
//all the image files I want to be abel to scroll through.//

function changeCati(){
	var listi = [
		'images/optipurp2.gif',
		'images/optipurp4.gif',
		'images/optipurp6.gif',
		'images/optipurp8.gif',
		'images/optipurp10.gif',
		'images/optipurp12.gif',
		'images/optipurp14.gif',
		'images/optipurp16.gif',
		'images/opitpurp18.gif'];
  catiIndex++;
  if (catiIndex >= 8){
  	catiIndex = 0;
  }
  cati.src = listi[catiIndex];

}

//the '++' indicates that I want to move up one on the array every
//time the function is called. This would continue indefinitely
//if it weren't for the if/else statement that tells the array to
//restart at zero once it reaches #8 in the array or higher.

cat.addEventListener( 'click', changeCat );
cati.addEventListener( 'click', changeCati );

//this is just calling the function and the EventListener,
//which is what enables the clicking to trigger the functions called.
