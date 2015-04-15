//Divider 45530 without array
var divider = 0;
for (var i = 0; i <= 45530; i++) {
	if (45530 % i == 0) {
		 divider+=','+i;
	}
};	
console.log(divider);

//Divider 45530 with array
var divider = [];
for (var i = 0; i <= 45530; i++) {
	if (45530 % i === 0) {
		divider.push(i);
	}
};	
console.log(divider);

//Dynamic Divider
function divider(num){
	var divider = [];
	for (var i = 0; i <= num; i++) {
		if (num % i === 0) {
			divider.push(i);
		}
	};	
	return console.log(divider);
};