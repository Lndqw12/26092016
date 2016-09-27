//function hypotenuse(a, b){
	//function square(x) {return x*x;}
	//return Math.sqrt(square(a) + square(b));
	//printprops({x:1});
	//var total = distance(0,0,2,1) + distance(2,1,3,5);
	//var probability = factorial(5)/factorial(13);
//	}
var o ={
	m:function() {
		var self = this;
		console.log(this === 0);
		f();
		function f() {
			console.log(this === 0);
			console.log(self === 0);
		}
	}
}
o.m();