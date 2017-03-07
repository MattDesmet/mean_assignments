function sumsXtoY (x,y) {
  start = x;
  end = y;
  current = x;
  sum = x;
  while (current <= y) {
    sum = sum
  }
}

var sum = 0;
for (var i = 1; i < 501; i++) {
  sum += i;
}
console.log(sum);


var arr = [1,2,3,4,5,6,7,8];

var sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);

console.log("========================");

// Uses the usual "for" loop to iterate
for(var i= 0, l = arr.length; i< l; i++){
	console.log(arr[i]);
}

console.log("========================");

//Uses forEach to iterate
arr.forEach(function(item,index){
	console.log(item);
});
