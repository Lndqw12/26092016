//function f(x) {
	//console.log(x);
	//arguments[0] = null;
	//console.log(x);
//}
function sum(a) {
	if (isArrayLike(a)){
		var total = 0;
		for(var i = 0; i < a.length; i++) {
			var element = a[i];
			if (element == null) continue;
			if (isFinite(element)) total += element;
			else throw new Error("sum():Все элементы должны быть числами");
		}
		return total;
	}
	else throw new Error("sum():аргумент должен быть массивом");
}