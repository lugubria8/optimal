var cat = document.querySelector('#opt1');
var cati = document.querySelector('#opt2');
var catIndex = 0;
var catiIndex = 0;

function changeCat(){
	var list = [
		'images/optipurp1.gif',
		'images/optipurp3.gif'];
  catIndex++;
  if (catIndex >= 1){
  	catIndex = 0;
  }
  cat.src = list[catIndex];

}

function changeCati(){
	var list = [
		'images/optipurp2.gif',
		'images/optipurp4.gif'];
  catiIndex++;
  if (catiIndex >= 1){
  	catiIndex = 0;
  }
  cati.src = list[catiIndex];

}


cat.addEventListener( 'click', changeCat );
// cati.addEventListener( 'click', changeCati );
