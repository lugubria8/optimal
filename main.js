var cat = document.querySelector('#opt1');
var cat = document.querySelector('#opt2');
var catIndex = 0;

function changeCat(){
	var list = [
  	'images/optipurp1.gif',
		'images/optipurp2.gif',];
  catIndex++;
  if (catIndex >= 1){
  	catIndex = 0;
  }
  cat.src = list[catIndex];

}

cat.addEventListener( 'click', changeCat )
