var cat = document.querySelector('#opt1');
var cati = document.querySelector('#opt2');
var catIndex = 0;
var catiIndex = 0;

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


cat.addEventListener( 'click', changeCat );
cati.addEventListener( 'click', changeCati );
